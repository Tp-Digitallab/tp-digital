import type {
  NextConfig,
} from "next";

const securityHeaders = [
  {
    key:
      "X-Content-Type-Options",

    value:
      "nosniff",
  },

  {
    key:
      "X-Frame-Options",

    value:
      "SAMEORIGIN",
  },

  {
    key:
      "Referrer-Policy",

    value:
      "strict-origin-when-cross-origin",
  },

  {
    key:
      "Permissions-Policy",

    value:
      "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },

  {
    key:
      "Strict-Transport-Security",

    value:
      "max-age=31536000",
  },

  {
    key:
      "X-DNS-Prefetch-Control",

    value:
      "on",
  },

  {
    key:
      "X-Permitted-Cross-Domain-Policies",

    value:
      "none",
  },
];

const nextConfig:
  NextConfig = {
  /*
   * Убирает заголовок,
   * раскрывающий использование Next.js.
   */
  poweredByHeader: false,

  async headers() {
    return [
      {
        source:
          "/:path*",

        headers:
          securityHeaders,
      },
    ];
  },
};

export default nextConfig;