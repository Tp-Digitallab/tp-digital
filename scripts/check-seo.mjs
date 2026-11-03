// Read-only checks against a running production build; no forms are submitted.
import assert from "node:assert/strict";

const origin = new URL(process.argv[2] ?? "http://127.0.0.1:3000").origin;
const canonicalOrigin = "https://tpdigitallab.de";
const failures = [];
const pages = new Map();
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(match => [match[1].toLowerCase(), match[2].replaceAll("&amp;", "&")]));
const links = html => [...html.matchAll(/<link\b[^>]*>/gi)].map(match => attributes(match[0]));
const get = path => fetch(new URL(path, origin), { signal: AbortSignal.timeout(20000), redirect: "manual" });
function check(message, run) {
  try { run(); } catch (error) { failures.push(`${message}: ${error.message}`); }
}

const sitemapResponse = await get("/sitemap.xml");
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]));
assert.equal(urls.length, 17, "Expected 3 homepages, 12 service pages and 2 legal pages");
assert.equal(new Set(urls.map(url => url.href)).size, urls.length, "Duplicate sitemap URLs");

// Small batches keep the check gentle on the server.
for (let index = 0; index < urls.length; index += 4) {
  await Promise.all(urls.slice(index, index + 4).map(async url => {
    const response = await get(url.pathname);
    const html = await response.text();
    pages.set(url.pathname, html);
    check(url.pathname, () => {
      assert.equal(response.status, 200, "Sitemap URL must not redirect or fail");
      assert.equal((html.match(/<h1\b/g) ?? []).length, 1, "Exactly one server-rendered H1");
      const canonical = links(html).filter(link => link.rel === "canonical");
      assert.equal(canonical.length, 1, "Exactly one canonical");
      assert.equal(new URL(canonical[0].href).href, `${canonicalOrigin}${url.pathname}`, "Self canonical");
      assert.match(html, /<title>[^<]+<\/title>/, "Missing title");
      assert.match(html, /<meta name="description" content="[^"]+"/, "Missing description");
      assert.doesNotMatch(html, /<meta name="robots" content="[^"]*noindex/, "Unexpected noindex");
      assert.equal(response.headers.get("x-robots-tag"), null, "Unexpected robots header");
      for (const script of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(script[1]);
      if (!url.pathname.startsWith("/impressum") && !url.pathname.startsWith("/datenschutzerklaerung")) {
        const alternates = links(html).filter(link => link.rel === "alternate" && link.hreflang);
        assert.deepEqual(alternates.map(link => link.hreflang).sort(), ["de", "en", "ru", "x-default"]);
        const locale = url.pathname.match(/^\/(en|ru|de)(?=\/|$)/)?.[1] ?? "de";
        assert.match(html, new RegExp(`<(?:html|div)\\b[^>]*lang="${locale}"`), "Server content language");
        for (const other of ["de", "en", "ru"]) {
          assert.match(html, new RegExp(`<a[^>]*hrefLang="${other}"[^>]*>|<a[^>]*hreflang="${other}"[^>]*>`), "Missing crawlable language link");
        }
      }
    });
  }));
}

for (const [path, html] of pages) {
  for (const match of html.matchAll(/<a\b[^>]*>/gi)) {
    const href = attributes(match[0]).href;
    if (!href || !href.startsWith("/") && !href.startsWith("#")) continue;
    const url = new URL(href, new URL(path, origin));
    if (!url.hash || !pages.has(url.pathname)) continue;
    const id = decodeURIComponent(url.hash.slice(1));
    check(`${path} -> ${href}`, () => assert.ok(pages.get(url.pathname).includes(`id="${id}"`), "Broken section link"));
  }
}

for (const [from, to] of [["/de", "/"], ...["webdesign", "seo", "online-shop", "digitale-loesungen"].map(slug => [`/${slug}`, `/de/${slug}`])]) {
  const response = await get(from);
  check(from, () => {
    assert.ok([301, 308].includes(response.status), "Expected permanent redirect");
    assert.equal(new URL(response.headers.get("location"), origin).pathname, to);
  });
}
const thanks = await (await get("/thank-you")).text();
check("thank-you", () => assert.match(thanks, /<meta name="robots" content="[^"]*noindex/));
const missing = await get("/missing-seo-check-20261103");
check("404", () => assert.equal(missing.status, 404));
const robots = await (await get("/robots.txt")).text();
check("robots", () => assert.match(robots, /Sitemap: https:\/\/tpdigitallab.de\/sitemap.xml/));

console.log(JSON.stringify({ origin, pages: pages.size, redirects: 5, failures }, null, 2));
if (failures.length) process.exitCode = 1;
