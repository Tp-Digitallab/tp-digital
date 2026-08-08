type PackageLanguage =
  | "de"
  | "en"
  | "ru";

type PackageId =
  | "launch"
  | "business"
  | "growth";

interface PackageContent {
  name: string;
  description: string;
  features: string[];
}

interface PackageTranslation {
  popularBadge: string;

  packages: Record<
    PackageId,
    PackageContent
  >;
}

export const packageTranslations:
  Record<
    PackageLanguage,
    PackageTranslation
  > = {
  de: {
    popularBadge:
      "Beliebtestes Paket",

    packages: {
      launch: {
        name: "Online-Start",

        description:
          "Eine startbereite Landing Page für Unternehmen, die professionell online auftreten möchten.",

        features: [
          "Landing Page",
          "1 Sprache",
          "Basis-SEO",
          "Kontaktformular",
          "Google Analytics 4 Einrichtung",
          "Optimiert für Smartphone und Tablet",
        ],
      },

      business: {
        name: "Business",

        description:
          "Eine vollständige Unternehmenswebsite für mehr Sichtbarkeit und die Gewinnung neuer Kunden.",

        features: [
          "Mehrseitige Website – bis zu 5 Seiten",
          "2 Sprachen",
          "Erweiterte SEO-Optimierung",
          "Google-Unternehmensprofil",
          "GA4 und Conversion-Tracking",
          "1 Monat technischer Support",
        ],
      },

      growth: {
        name: "Wachstum",

        description:
          "Ein vollständiger Online-Shop mit Verwaltung, Marketing-Einrichtung und mehreren Sprachen.",

        features: [
          "Online-Shop – bis zu 20 Produkte",
          "Bis zu 3 Sprachen",
          "Erweiterte SEO-Optimierung",
          "Admin-Bereich (CMS)",
          "Zahlungsintegration",
          "GA4 E-Commerce-Tracking",
          "Google Ads Einrichtung",
          "2 Monate technischer Support",
        ],
      },
    },
  },

  en: {
    popularBadge:
      "Most Popular",

    packages: {
      launch: {
        name: "Launch",

        description:
          "A ready-to-launch landing page for businesses that need a professional online presence.",

        features: [
          "Landing Page",
          "1 Language",
          "Basic SEO",
          "Contact Form",
          "Google Analytics 4 Setup",
          "Optimized for smartphones and tablets",
        ],
      },

      business: {
        name: "Business",

        description:
          "A complete business website for greater visibility and generating new customers.",

        features: [
          "Multi-page Website – up to 5 pages",
          "2 Languages",
          "Advanced SEO",
          "Google Business Profile",
          "GA4 and Conversion Tracking",
          "1 Month Technical Support",
        ],
      },

      growth: {
        name: "Growth",

        description:
          "A complete online store with administration, marketing setup and multiple languages.",

        features: [
          "Online Store – up to 20 products",
          "Up to 3 Languages",
          "Advanced SEO",
          "Admin Panel (CMS)",
          "Payment Integration",
          "GA4 E-commerce Tracking",
          "Google Ads Setup",
          "2 Months Technical Support",
        ],
      },
    },
  },

  ru: {
    popularBadge:
      "Популярный выбор",

    packages: {
      launch: {
        name: "Старт",

        description:
          "Готовый лендинг для бизнеса, которому необходимо профессиональное присутствие в интернете.",

        features: [
          "Лендинг",
          "1 язык",
          "Базовое SEO",
          "Контактная форма",
          "Настройка Google Analytics 4",
          "Адаптация для смартфонов и планшетов",
        ],
      },

      business: {
        name: "Бизнес",

        description:
          "Полноценный сайт компании для повышения узнаваемости и привлечения новых клиентов.",

        features: [
          "Многостраничный сайт – до 5 страниц",
          "2 языка",
          "Расширенное SEO",
          "Профиль компании в Google",
          "GA4 и отслеживание конверсий",
          "1 месяц технической поддержки",
        ],
      },

      growth: {
        name: "Рост",

        description:
          "Полноценный интернет-магазин с администрированием, маркетингом и несколькими языками.",

        features: [
          "Интернет-магазин – до 20 товаров",
          "До 3 языков",
          "Расширенное SEO",
          "Панель управления (CMS)",
          "Подключение оплаты",
          "Отслеживание E-commerce в GA4",
          "Настройка Google Ads",
          "2 месяца технической поддержки",
        ],
      },
    },
  },
};