type PackageId =
  | "launch"
  | "business"
  | "growth";

interface PackagePreset {
  price: number;

  website: string;

  languages: string[];

  marketing: string[];

  branding: string[];

  features: string[];

  support: string[];
}

export const packagePresets:
  Record<
    PackageId,
    PackagePreset
  > = {
  launch: {
    price: 500,

    website: "landing",

    languages: [
      "de",
    ],

    marketing: [
      "basic-seo",
    ],

    branding: [],

    features: [],

    /*
     * Техническая поддержка является
     * временным бонусом пакета,
     * а не постоянной бесплатной услугой.
     */
    support: [],
  },

  business: {
    price: 1000,

    website: "business",

    languages: [
      "de",
      "en",
    ],

    marketing: [
      "advanced-seo",
      "business-profile",
    ],

    branding: [],

    features: [],

    /*
     * Первый месяц технической поддержки
     * включён после запуска.
     * Дальнейшее обслуживание:
     * €150 в месяц.
     */
    support: [],
  },

  growth: {
    price: 2000,

    website: "shop",

    languages: [
      "de",
      "en",
      "other",
    ],

    marketing: [
      "advanced-seo",
      "ads",
    ],

    branding: [],

    features: [
      "cms",
    ],

    /*
     * Два месяца технической поддержки
     * включены после запуска.
     * Google Ads Management:
     * €200 в месяц отдельно.
     */
    support: [],
  },
};