import type {
  MetadataRoute,
} from "next";

const BASE_URL =
  "https://tpdigitallab.de";

export default function sitemap():
  MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${BASE_URL}/webdesign`,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/online-shop`,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/seo`,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url:
        `${BASE_URL}/digitale-loesungen`,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${BASE_URL}/impressum`,
      changeFrequency: "yearly",
      priority: 0.2,
    },

    {
      url:
        `${BASE_URL}/datenschutzerklaerung`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}