export type CalculatorLocale =
  | "de"
  | "en"
  | "ru";

export interface CalculatorOptionText {
  title: string;
  description: string;
}

type CalculatorServiceGroup =
  | "marketing"
  | "branding"
  | "features"
  | "support";

interface CalculatorOptionsTranslation {
  stepIndicator: {
    steps: readonly [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
    ];

    progress: (
      currentStep: number,
      totalSteps: number
    ) => string;
  };

  languages: Record<
    "de" | "en" | "other",
    string
  >;

  marketing: Record<
    | "basic-seo"
    | "advanced-seo"
    | "ads"
    | "business-profile",
    CalculatorOptionText
  >;

  branding: Record<
    "logo" | "business-card",
    CalculatorOptionText
  >;

  features: Record<
    "cms",
    CalculatorOptionText
  >;

  support: Record<
    "website" | "ads",
    CalculatorOptionText
  >;

  common: {
    perMonth: string;
  };
}

export const calculatorOptionsTranslations:
  Record<
    CalculatorLocale,
    CalculatorOptionsTranslation
  > = {
  de: {
    stepIndicator: {
      steps: [
        "Website",
        "Sprachen",
        "Marketing",
        "Branding",
        "Funktionen",
        "Support",
        "Kontakt",
      ],

      progress: (
        currentStep,
        totalSteps
      ) =>
        `Schritt ${currentStep} von ${totalSteps}`,
    },

    languages: {
      de: "Deutsch",
      en: "Englisch",
      other: "Weitere Sprache",
    },

    marketing: {
      "basic-seo": {
        title: "Basis-SEO",

        description:
          "In jeder Website enthalten.",
      },

      "advanced-seo": {
        title:
          "Erweiterte SEO-Optimierung",

        description:
          "Keyword-Recherche, Google Search Console, Geschwindigkeitsoptimierung und erweitertes On-Page-SEO.",
      },

      ads: {
        title:
          "Google Ads Einrichtung",

        description:
          "Kampagnenstruktur, Keyword-Recherche, Conversion-Tracking und erste Optimierung.",
      },

      "business-profile": {
        title:
          "Google Unternehmensprofil",

        description:
          "Google-Maps-Eintrag sowie Einrichtung und Optimierung des Unternehmensprofils.",
      },
    },

    branding: {
      logo: {
        title: "Logodesign",

        description:
          "Ein individuelles Logo, passend zu Ihrem Unternehmen und Ihrer Marke.",
      },

      "business-card": {
        title:
          "Visitenkartendesign",

        description:
          "Eine professionelle beidseitige Visitenkarte, druckfertig aufbereitet.",
      },
    },

    features: {
      cms: {
        title:
          "Admin-Bereich (CMS)",

        description:
          "Texte, Bilder, Projekte und Website-Inhalte ohne Programmierkenntnisse bearbeiten.",
      },
    },

    support: {
      website: {
        title:
          "Website-Wartung",

        description:
          "Updates, Backups, Sicherheitsüberwachung und bevorzugter Support.",
      },

      ads: {
        title:
          "Google Ads Betreuung",

        description:
          "Laufende Kampagnenoptimierung, Berichte und kontinuierliche Verbesserungen.",
      },
    },

    common: {
      perMonth: "/ Monat",
    },
  },

  en: {
    stepIndicator: {
      steps: [
        "Website",
        "Languages",
        "Marketing",
        "Branding",
        "Features",
        "Support",
        "Contact",
      ],

      progress: (
        currentStep,
        totalSteps
      ) =>
        `Step ${currentStep} of ${totalSteps}`,
    },

    languages: {
      de: "German",
      en: "English",
      other: "Other language",
    },

    marketing: {
      "basic-seo": {
        title: "Basic SEO",

        description:
          "Included with every website.",
      },

      "advanced-seo": {
        title: "Advanced SEO",

        description:
          "Keyword research, Google Search Console, speed optimization and advanced on-page SEO.",
      },

      ads: {
        title:
          "Google Ads Setup",

        description:
          "Campaign structure, keyword research, conversion tracking and initial optimization.",
      },

      "business-profile": {
        title:
          "Google Business Profile",

        description:
          "Google Maps listing, profile setup and optimization.",
      },
    },

    branding: {
      logo: {
        title: "Logo Design",

        description:
          "A unique logo designed for your business and brand.",
      },

      "business-card": {
        title:
          "Business Card Design",

        description:
          "A professional double-sided business card, ready for printing.",
      },
    },

    features: {
      cms: {
        title:
          "Admin Panel (CMS)",

        description:
          "Edit texts, images, projects and website content without coding.",
      },
    },

    support: {
      website: {
        title:
          "Website Maintenance",

        description:
          "Updates, backups, security monitoring and priority support.",
      },

      ads: {
        title:
          "Google Ads Management",

        description:
          "Campaign optimization, reports and continuous improvements.",
      },
    },

    common: {
      perMonth: "/ month",
    },
  },

  ru: {
    stepIndicator: {
      steps: [
        "Сайт",
        "Языки",
        "Маркетинг",
        "Брендинг",
        "Функции",
        "Поддержка",
        "Контакты",
      ],

      progress: (
        currentStep,
        totalSteps
      ) =>
        `Шаг ${currentStep} из ${totalSteps}`,
    },

    languages: {
      de: "Немецкий",
      en: "Английский",
      other: "Другой язык",
    },

    marketing: {
      "basic-seo": {
        title: "Базовое SEO",

        description:
          "Включено в каждый сайт.",
      },

      "advanced-seo": {
        title:
          "Расширенное SEO",

        description:
          "Подбор ключевых слов, Google Search Console, оптимизация скорости и расширенная внутренняя SEO-оптимизация.",
      },

      ads: {
        title:
          "Настройка Google Ads",

        description:
          "Структура рекламной кампании, подбор ключевых слов, отслеживание конверсий и первоначальная оптимизация.",
      },

      "business-profile": {
        title:
          "Профиль компании в Google",

        description:
          "Добавление компании на Google Карты, настройка и оптимизация профиля.",
      },
    },

    branding: {
      logo: {
        title:
          "Разработка логотипа",

        description:
          "Уникальный логотип, разработанный для вашего бизнеса и бренда.",
      },

      "business-card": {
        title:
          "Дизайн визитной карточки",

        description:
          "Профессиональная двусторонняя визитная карточка, подготовленная к печати.",
      },
    },

    features: {
      cms: {
        title:
          "Панель управления (CMS)",

        description:
          "Редактирование текстов, изображений, проектов и содержимого сайта без программирования.",
      },
    },

    support: {
      website: {
        title:
          "Техническое обслуживание сайта",

        description:
          "Обновления, резервные копии, контроль безопасности и приоритетная поддержка.",
      },

      ads: {
        title:
          "Ведение Google Ads",

        description:
          "Оптимизация рекламных кампаний, отчёты и постоянные улучшения.",
      },
    },

    common: {
      perMonth: "/ месяц",
    },
  },
};

export function getCalculatorOptionText(
  locale: CalculatorLocale,
  group: CalculatorServiceGroup,
  id: string,
  fallback: CalculatorOptionText
): CalculatorOptionText {
  const groupTranslations =
    calculatorOptionsTranslations[
      locale
    ][group] as unknown as Readonly<
      Record<
        string,
        CalculatorOptionText
      >
    >;

  return (
    groupTranslations[id] ??
    fallback
  );
}

export function getCalculatorLanguageTitle(
  locale: CalculatorLocale,
  id: string,
  fallback: string
) {
  const languageTranslations =
    calculatorOptionsTranslations[
      locale
    ].languages as Readonly<
      Record<string, string>
    >;

  return (
    languageTranslations[id] ??
    fallback
  );
}