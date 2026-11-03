import { siteUrl } from "@/config/seo";
import { googleReviewsUrl } from "@/config/reviews";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "TP Digital Lab",
        legalName: "TP-Digital",
        url: siteUrl,
        logo: `${siteUrl}/apple-icon.png`,
        email: "info@tpdigitallab.de",
        description: "Webdesign und Webentwicklung für Selbstständige und kleine Unternehmen aus München und ganz Deutschland.",
        founder: { "@type": "Person", name: "Taras Pakhaliuk" },
        areaServed: { "@type": "Country", name: "Deutschland" },
        sameAs: [googleReviewsUrl],
        knowsLanguage: ["de", "en", "ru"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "TP Digital Lab",
        url: siteUrl,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: ["de", "en", "ru"],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />;
}
