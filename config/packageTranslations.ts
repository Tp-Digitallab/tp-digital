type PackageLanguage = "de" | "en" | "ru";

type PackageId = "launch" | "business" | "growth";

interface PackageContent {
  name: string;
  description: string;
  features: string[];
}

interface PackageTranslation {
  popularBadge: string;
  packages: Record<PackageId, PackageContent>;
}

export const packageTranslations: Record<
  PackageLanguage,
  PackageTranslation
> = {
  de: {
    popularBadge: "Für Ihren Firmenauftritt",

    packages: {
      launch: {
        name: "Launch",

        description:
          "Eine übersichtliche Landingpage für Selbstständige und kleine Unternehmen, die ihre Leistungen professionell präsentieren und einfach erreichbar sein möchten.",

        features: [
          "Eine Seite mit mehreren Abschnitten",
          "1 Sprache",
          "Individuelles Design für Ihr Unternehmen",
          "Optimiert für Smartphone, Tablet und Desktop",
          "Basis-SEO",
          "Kontaktformular",
          "Google Analytics 4 Einrichtung",
          "2 Korrekturrunden",
        ],
      },

      business: {
        name: "Business",

        description:
          "Eine Unternehmenswebsite mit Platz für Ihre Leistungen, Referenzen und Unternehmensvorstellung – für einen klaren und vertrauenswürdigen Auftritt.",

        features: [
          "Unternehmenswebsite – bis zu 5 Seiten",
          "2 Sprachen",
          "Individuelles Design für Ihr Unternehmen",
          "Optimiert für Smartphone, Tablet und Desktop",
          "Kontaktformular",
          "Erweiterte SEO-Optimierung",
          "Google-Unternehmensprofil",
          "GA4 und Conversion-Tracking",
          "1 Monat technischer Support",
          "2 Korrekturrunden",
        ],
      },

      growth: {
        name: "Growth",

        description:
          "Ein Online-Shop für Ihren Einstieg in den Online-Verkauf – mit Produktverwaltung, Zahlungsintegration und technischer Marketing-Einrichtung.",

        features: [
          "Online-Shop – bis zu 20 Produkte",
          "Bis zu 3 Sprachen",
          "Optimiert für Smartphone, Tablet und Desktop",
          "Admin-Bereich (CMS)",
          "Zahlungsintegration",
          "Erweiterte SEO-Optimierung",
          "GA4 E-Commerce-Tracking",
          "Google Ads Einrichtung",
          "2 Monate technischer Support",
          "2 Korrekturrunden",
        ],
      },
    },
  },

  en: {
    popularBadge: "For your business website",

    packages: {
      launch: {
        name: "Launch",

        description:
          "A clear landing page for freelancers and small businesses that want to present their services professionally and make it easy for customers to get in touch.",

        features: [
          "One page with several sections",
          "1 language",
          "Custom design for your business",
          "Optimized for mobile, tablet and desktop",
          "Basic SEO",
          "Contact form",
          "Google Analytics 4 setup",
          "2 revision rounds",
        ],
      },

      business: {
        name: "Business",

        description:
          "A business website with room for your services, references and company introduction – for a clear and trustworthy online presence.",

        features: [
          "Business website – up to 5 pages",
          "2 languages",
          "Custom design for your business",
          "Optimized for mobile, tablet and desktop",
          "Contact form",
          "Advanced SEO",
          "Google Business Profile",
          "GA4 and conversion tracking",
          "1 month of technical support",
          "2 revision rounds",
        ],
      },

      growth: {
        name: "Growth",

        description:
          "An online store to help you start selling online – with product management, payment integration and technical marketing setup.",

        features: [
          "Online store – up to 20 products",
          "Up to 3 languages",
          "Optimized for mobile, tablet and desktop",
          "Admin panel (CMS)",
          "Payment integration",
          "Advanced SEO",
          "GA4 e-commerce tracking",
          "Google Ads setup",
          "2 months of technical support",
          "2 revision rounds",
        ],
      },
    },
  },

  ru: {
    popularBadge: "Для сайта вашей компании",

    packages: {
      launch: {
        name: "Старт",

        description:
          "Понятный лендинг для самозанятых и небольших компаний: профессиональная презентация услуг и удобный способ связи для клиентов.",

        features: [
          "Одна страница с несколькими разделами",
          "1 язык",
          "Индивидуальный дизайн для вашего бизнеса",
          "Адаптация для смартфонов, планшетов и компьютеров",
          "Базовое SEO",
          "Контактная форма",
          "Настройка Google Analytics 4",
          "2 раунда правок",
        ],
      },

      business: {
        name: "Бизнес",

        description:
          "Сайт компании с отдельными страницами для услуг, примеров работ и информации о вас — для понятной презентации бизнеса и доверия клиентов.",

        features: [
          "Сайт компании — до 5 страниц",
          "2 языка",
          "Индивидуальный дизайн для вашего бизнеса",
          "Адаптация для смартфонов, планшетов и компьютеров",
          "Контактная форма",
          "Расширенное SEO",
          "Профиль компании в Google",
          "GA4 и отслеживание конверсий",
          "1 месяц технической поддержки",
          "2 раунда правок",
        ],
      },

      growth: {
        name: "Рост",

        description:
          "Интернет-магазин для начала онлайн-продаж: управление товарами, подключение оплаты и техническая настройка маркетинга.",

        features: [
          "Интернет-магазин — до 20 товаров",
          "До 3 языков",
          "Адаптация для смартфонов, планшетов и компьютеров",
          "Панель управления (CMS)",
          "Подключение оплаты",
          "Расширенное SEO",
          "GA4 для электронной торговли",
          "Настройка Google Ads",
          "2 месяца технической поддержки",
          "2 раунда правок",
        ],
      },
    },
  },
};