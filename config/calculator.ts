export const websiteTypes = [
  {
    id: "landing",

    title: "Landing Page",

    description:
      "Perfect for a single service or product.",

    price: 500,

    customPrice: false,
  },

  {
    id: "business",

    title: "Business Website",

    description:
      "Professional multi-page website for growing companies.",

    price: 1000,

    customPrice: false,
  },

  {
    id: "shop",

    title: "Online Store",

    description:
      "Sell products online with secure payments.",

    price: 2000,

    customPrice: false,
  },

  {
    id: "custom",

    title:
      "Individual Website Work",

    description:
      "Improvements, new sections, menu changes, bug fixes or other custom work for an existing website.",

    price: 0,

    customPrice: true,
  },
] as const;

export const languages = [
  {
    id: "de",
    title: "German",
  },

  {
    id: "en",
    title: "English",
  },

  {
    id: "other",
    title: "Other",
  },
] as const;

export const marketing = [
  {
    id: "basic-seo",

    title: "Basic SEO",

    description:
      "Included with every website.",

    price: 0,

    included: true,
  },

  {
    id: "advanced-seo",

    title: "Advanced SEO",

    description:
      "Keyword research, Search Console, speed optimization and advanced on-page SEO.",

    price: 150,
  },

  {
    id: "ads",

    title:
      "Google Ads Setup",

    description:
      "Campaign structure, keyword research, conversion tracking and initial optimization.",

    price: 200,
  },

  {
    id: "business-profile",

    title:
      "Google Business Profile",

    description:
      "Google Maps listing, profile setup and optimization.",

    price: 150,
  },
] as const;

export const branding = [
  {
    id: "logo",

    title: "Logo Design",

    description:
      "Unique logo designed for your business and brand.",

    price: 100,
  },

  {
    id: "business-card",

    title:
      "Business Card Design",

    description:
      "Professional double-sided business card, ready for printing.",

    price: 50,
  },
];