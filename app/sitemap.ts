import type { MetadataRoute } from "next";

const baseUrl = "https://tpdigitallab.de";

const locales = ["de", "en", "ru"] as const;

const localizedServices = [
  "webdesign",
  "seo",
  "online-shop",
  "digitale-loesungen",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const localizedPages =
    locales.flatMap((locale) =>
      localizedServices.map((service) => ({
        url: `${baseUrl}/${locale}/${service}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority:
          service === "webdesign"
            ? 0.95
            : 0.8,
      })),
    );

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    ...localizedPages,

    {
      url: `${baseUrl}/impressum`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },

    {
      url: `${baseUrl}/datenschutzerklaerung`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}