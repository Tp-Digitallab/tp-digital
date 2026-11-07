import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-Permitted-Cross-Domain-Policies",
    value: "none",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,

  async redirects() {
    return [
      { source: "/de", destination: "/", permanent: true },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.tpdigitallab.de" }],
        destination: "https://tpdigitallab.de/:path*",
        statusCode: 301,
      },
      {
        source: "/webdesign",
        destination: "/de/webdesign",
        permanent: true,
      },
      {
        source: "/seo",
        destination: "/de/seo",
        permanent: true,
      },
      {
        source: "/online-shop",
        destination: "/de/online-shop",
        permanent: true,
      },
      {
        source: "/digitale-loesungen",
        destination: "/de/digitale-loesungen",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return ["beauty", "studio", "handwerk", "cafe", "firma", "shop"].map((n) => ({ source: `/demo/${n}`, destination: `/demo/${n}/index.html` }));
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
