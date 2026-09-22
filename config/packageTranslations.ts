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
    popularBadge: "Für mehrere Leistungen",

    packages: {
      launch: {
        name: "Landingpage",

        description:
          "Für einen klaren Einstieg: Stellen Sie Ihr Angebot, Ihre Arbeit und Ihre Kontaktdaten auf einer übersichtlichen Seite vor. Passend für eine einzelne Dienstleistung oder einen kleinen Betrieb.",

        features: [
          "Eine Seite mit mehreren Abschnitten",
          "1 Sprache",
          "Individuelles Design für Ihren Betrieb",
          "Für Smartphone, Tablet und Computer",
          "Kontaktformular für Kundenanfragen",
          "Grundoptimierung für Suchmaschinen",
          "Einrichtung der Besucheranalyse mit GA4",
          "2 Korrekturrunden vor dem Start",
        ],
      },

      business: {
        name: "Firmenwebsite",

        description:
          "Für Unternehmen, die mehrere Leistungen ausführlich vorstellen möchten. Mit eigenen Seiten für Ihr Angebot, Ihre Projekte und Ihren Betrieb, damit Interessenten sich ein klares Bild machen können.",

        features: [
          "Bis zu 5 Seiten für Ihren Betrieb",
          "2 Sprachen",
          "Individuelles Design für Ihr Unternehmen",
          "Für Smartphone, Tablet und Computer",
          "Kontaktformular für Kundenanfragen",
          "Erweiterte Suchmaschinenoptimierung",
          "Einrichtung oder Optimierung Ihres Google-Unternehmensprofils",
          "Einrichtung von GA4 und Anfrage-Tracking",
          "1 Monat technischer Support nach dem Start",
          "2 Korrekturrunden vor dem Start",
        ],
      },

      growth: {
        name: "Online-Shop",

        description:
          "Für Unternehmen, die Produkte online verkaufen möchten. Kunden können Ihr Sortiment ansehen, bestellen und bezahlen. Sie erhalten einen Verwaltungsbereich für Ihren Shop.",

        features: [
          "Einrichtung von bis zu 20 Produkten",
          "Bis zu 3 Sprachen",
          "Für Smartphone, Tablet und Computer",
          "Verwaltungsbereich für Produkte und Bestellungen",
          "Anbindung vereinbarter Zahlungsarten",
          "Erweiterte Suchmaschinenoptimierung",
          "Einrichtung der Shop-Analyse mit GA4",
          "Einrichtung von Google Ads",
          "2 Monate technischer Support nach dem Start",
          "2 Korrekturrunden vor dem Start",
        ],
      },
    },
  },

  en: {
    popularBadge: "For several services",

    packages: {
      launch: {
        name: "Landing page",

        description:
          "A clear starting point: present your services, work and contact details on one well-organised page. Suitable for a single service or a small business.",

        features: [
          "One page with several sections",
          "1 language",
          "Custom design for your business",
          "Adapted for phones, tablets and computers",
          "Contact form for customer enquiries",
          "Basic search engine optimisation",
          "Visitor analytics setup with GA4",
          "2 revision rounds before launch",
        ],
      },

      business: {
        name: "Business website",

        description:
          "For businesses that need to explain several services in detail. Dedicated pages for your offer, projects and company help potential customers understand what you do.",

        features: [
          "Up to 5 pages for your business",
          "2 languages",
          "Custom design for your business",
          "Adapted for phones, tablets and computers",
          "Contact form for customer enquiries",
          "Advanced search engine optimisation",
          "Google Business Profile setup or optimisation",
          "GA4 and enquiry tracking setup",
          "1 month of technical support after launch",
          "2 revision rounds before launch",
        ],
      },

      growth: {
        name: "Online store",

        description:
          "For businesses that want to sell products online. Customers can browse, order and pay, while you manage your store through an administration area.",

        features: [
          "Setup of up to 20 products",
          "Up to 3 languages",
          "Adapted for phones, tablets and computers",
          "Administration area for products and orders",
          "Integration of agreed payment methods",
          "Advanced search engine optimisation",
          "Store analytics setup with GA4",
          "Google Ads setup",
          "2 months of technical support after launch",
          "2 revision rounds before launch",
        ],
      },
    },
  },

  ru: {
    popularBadge: "Для нескольких направлений услуг",

    packages: {
      launch: {
        name: "Лендинг",

        description:
          "Для понятного старта: ваши услуги, работы и контакты на одной продуманной странице. Подходит для отдельной услуги или небольшого бизнеса.",

        features: [
          "Одна страница с несколькими разделами",
          "1 язык",
          "Индивидуальный дизайн для вашего бизнеса",
          "Адаптация для телефона, планшета и компьютера",
          "Форма для заявок клиентов",
          "Базовая оптимизация для поисковых систем",
          "Настройка аналитики посещений GA4",
          "2 раунда правок до запуска",
        ],
      },

      business: {
        name: "Сайт компании",

        description:
          "Для бизнеса, которому нужно подробно представить несколько услуг. Отдельные страницы об услугах, проектах и компании помогут потенциальным клиентам разобраться в вашем предложении.",

        features: [
          "До 5 страниц для вашего бизнеса",
          "2 языка",
          "Индивидуальный дизайн для вашей компании",
          "Адаптация для телефона, планшета и компьютера",
          "Форма для заявок клиентов",
          "Расширенная поисковая оптимизация",
          "Настройка или улучшение профиля компании в Google",
          "Настройка GA4 и отслеживания заявок",
          "1 месяц технической поддержки после запуска",
          "2 раунда правок до запуска",
        ],
      },

      growth: {
        name: "Интернет-магазин",

        description:
          "Для бизнеса, который хочет продавать товары онлайн. Покупатели смогут изучить ассортимент, оформить заказ и оплатить покупку, а вы — управлять магазином через панель администратора.",

        features: [
          "Добавление до 20 товаров",
          "До 3 языков",
          "Адаптация для телефона, планшета и компьютера",
          "Панель управления товарами и заказами",
          "Подключение согласованных способов оплаты",
          "Расширенная поисковая оптимизация",
          "Настройка аналитики магазина GA4",
          "Настройка Google Ads",
          "2 месяца технической поддержки после запуска",
          "2 раунда правок до запуска",
        ],
      },
    },
  },
};