"use client";

import {
  type FormEvent,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Turnstile,
  type TurnstileInstance,
} from "@marsidev/react-turnstile";
import {
  CheckCircle2,
  ExternalLink,
  MapPin,
} from "lucide-react";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import Container from "@/components/common/Container";
import BackgroundGrid from "@/components/effects/BackgroundGrid";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/components/providers/LanguageProvider";
import FaqSchema from "@/components/seo/FaqSchema";
import { packages } from "@/config/packages";
import { packageTranslations } from "@/config/packageTranslations";

type Language = "de" | "en" | "ru";
type PackageChoice =
  | "launch"
  | "business"
  | "custom";

type LandingCopy = {
  nav: {
    projects: string;
    prices: string;
    process: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    priceNote: string;
    cardTitle: string;
    cardPrice: string;
    cardDescription: string;
    cardFeatures: string[];
  };
  trust: string[];
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    open: string;
    items: Array<{
      title: string;
      category: string;
      description: string;
    }>;
  };
  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    from: string;
    select: string;
    selected: string;
    popular: string;
    finalPrice: string;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  review: {
    eyebrow: string;
    title: string;
    rating: string;
    text: string;
    author: string;
    source: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  form: {
    eyebrow: string;
    title: string;
    description: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    package: string;
    packageLaunch: string;
    packageBusiness: string;
    packageCustom: string;
    message: string;
    privacyPrefix: string;
    privacyLink: string;
    privacySuffix: string;
    submit: string;
    sending: string;
    requiredError: string;
    securityError: string;
    sendError: string;
    configError: string;
    responseTime: string;
  };
};

const landingCopy: Record<
  Language,
  LandingCopy
> = {
  de: {
    nav: {
      projects: "Projekte",
      prices: "Preise",
      process: "Ablauf",
      contact: "Anfrage",
    },
    hero: {
      eyebrow:
        "Webdesign aus München · deutschlandweit",
      title:
        "Professionelle Website erstellen lassen",
      accent: "ab 299 €",
      description:
        "Individuelle Landingpages und Unternehmenswebsites für Selbstständige und Unternehmen. Modern, schnell, mobiloptimiert und auf neue Kundenanfragen ausgerichtet.",
      primaryCta:
        "Unverbindliches Angebot erhalten",
      secondaryCta:
        "Referenzen ansehen",
      priceNote:
        "Landingpages ab 299 € · Unternehmenswebsites ab 599 €",
      cardTitle:
        "Ihr professioneller Online-Auftritt",
      cardPrice: "ab 299 €",
      cardDescription:
        "Persönliche Umsetzung ohne anonyme Agentur-Strukturen.",
      cardFeatures: [
        "Individuelles Design",
        "Optimiert für Smartphone und Desktop",
        "Basis-SEO und Kontaktformular",
        "2 Korrekturrunden inklusive",
      ],
    },
    trust: [
      "5,0 ★ bei Google",
      "2 veröffentlichte Kundenprojekte",
      "Antwort in der Regel innerhalb von 3–12 Stunden",
    ],
    projects: {
      eyebrow: "Referenzen",
      title:
        "Websites, die bereits online arbeiten",
      description:
        "Zwei reale Kundenprojekte – keine gekauften Vorlagen und keine erfundenen Fallstudien.",
      open: "Website ansehen",
      items: [
        {
          title:
            "Exzellentia Constructio",
          category:
            "Unternehmenswebsite · Bauwesen",
          description:
            "Professionelle Unternehmenswebsite mit SEO-Optimierung und technischer Grundlage für Google Ads.",
        },
        {
          title: "GrabProfi",
          category:
            "Landingpage · Lokale Dienstleistung",
          description:
            "Übersichtliche Landingpage mit lokalem SEO und direkter Kundenkommunikation.",
        },
      ],
    },
    pricing: {
      eyebrow:
        "Transparente Pakete",
      title:
        "Ein klarer Startpreis statt versteckter Kosten",
      description:
        "Der endgültige Leistungsumfang und Festpreis werden vor Projektbeginn schriftlich im Angebot vereinbart.",
      from: "ab",
      select: "Paket anfragen",
      selected: "Ausgewählt",
      popular: "Beliebteste Wahl",
      finalPrice:
        "Zusatzfunktionen, Domain und optionale Betreuung werden bei Bedarf separat angeboten.",
    },
    process: {
      eyebrow: "Zusammenarbeit",
      title:
        "So läuft Ihr Projekt ab",
      description:
        "Sie wissen von Anfang an, welcher Schritt als Nächstes kommt und wann eine Zahlung fällig wird.",
      items: [
        {
          title:
            "Anfrage und Angebot",
          description:
            "Wir klären Ziel, Umfang und Inhalte. Danach erhalten Sie ein schriftliches Angebot.",
        },
        {
          title:
            "50 % Anzahlung",
          description:
            "Nach Ihrer Bestätigung erhalten Sie die Anzahlungsrechnung. Nach Zahlungseingang beginnt die Umsetzung.",
        },
        {
          title:
            "Design und Entwicklung",
          description:
            "Die Website wird erstellt und über eine geschützte Testadresse zur Prüfung bereitgestellt.",
        },
        {
          title:
            "2 Korrekturrunden",
          description:
            "Ihre Änderungswünsche werden gesammelt und in zwei vollständigen Runden umgesetzt.",
        },
        {
          title:
            "Abnahme und Übergabe",
          description:
            "Nach Ihrer Freigabe zahlen Sie die restlichen 50 %. Anschließend erhalten Sie den Code und auf Wunsch Hilfe bei Domain und Hosting.",
        },
      ],
    },
    review: {
      eyebrow:
        "Google-Bewertung",
      title:
        "Vertrauen durch echte Zusammenarbeit",
      rating:
        "5 von 5 Sternen",
      text:
        "Wir haben bereits zwei Websites von TP Digital Lab erstellen lassen und sind mit der Zusammenarbeit sehr zufrieden. Die Umsetzung war professionell, zuverlässig und genau auf unsere Anforderungen abgestimmt. Änderungswünsche wurden schnell umgesetzt und auch bei technischen Fragen war jederzeit Unterstützung da.",
      author:
        "Dmytro Yurchenko",
      source:
        "Öffentliche Google-Bewertung",
    },
    faq: {
      eyebrow:
        "Häufige Fragen",
      title:
        "Das Wichtigste vor dem Projektstart",
      items: [
        {
          question:
            "Wie viel kostet eine professionelle Website?",
          answer:
  "Eine Landingpage startet bei 299 €. Eine Unternehmenswebsite mit bis zu fünf Seiten startet bei 599 €. Den verbindlichen Festpreis erhalten Sie vor Projektbeginn im Angebot.",        },
        {
          question:
            "Gehören Unterseiten zu einer Landingpage?",
          answer:
            "Nein. Eine Landingpage besteht grundsätzlich aus einer einzelnen Seite mit mehreren Abschnitten. Separate Unterseiten gehören zum Paket für eine Unternehmenswebsite oder werden zusätzlich angeboten.",
        },
        {
          question:
            "Wie wird bezahlt?",
          answer:
            "50 % werden nach Annahme des Angebots als Anzahlung fällig. Die restlichen 50 % zahlen Sie nach Abnahme und vor der Übergabe des Codes.",
        },
        {
          question:
            "Wie viele Änderungen sind inklusive?",
          answer:
            "Zwei Korrekturrunden sind inklusive. Weitere Änderungsrunden können anschließend gegen zusätzliche Vergütung vereinbart werden.",
        },
        {
          question:
            "Was passiert mit Domain und Hosting?",
          answer:
            "Die Domain wird auf den Kunden registriert und von ihm bezahlt. Je nach Projekt kann kostenloses Hosting über GitHub oder GitLab genutzt werden. Einrichtung und laufende Betreuung können separat beauftragt werden.",
        },
      ],
    },
    form: {
      eyebrow:
        "Projekt anfragen",
      title:
        "Erzählen Sie kurz von Ihrer Website",
      description:
        "Sie erhalten eine persönliche Rückmeldung und anschließend ein unverbindliches Angebot.",
      firstName: "Vorname *",
      lastName: "Nachname *",
      email: "E-Mail *",
      phone:
        "Telefon (optional)",
      package:
        "Gewünschte Leistung *",
      packageLaunch:
  "Landingpage – ab 299 €",
packageBusiness:
  "Unternehmenswebsite – ab 599 €",
      packageCustom:
        "Noch nicht sicher / individuelle Anfrage",
      message:
        "Was benötigen Sie? *",
      privacyPrefix:
        "Ich habe die ",
      privacyLink:
        "Datenschutzerklärung",
      privacySuffix:
        " zur Kenntnis genommen.",
      submit:
        "Unverbindlich anfragen",
      sending:
        "Wird gesendet...",
      requiredError:
        "Bitte füllen Sie alle Pflichtfelder aus.",
      securityError:
        "Die Sicherheitsprüfung ist noch nicht abgeschlossen. Bitte versuchen Sie es erneut.",
      sendError:
        "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
      configError:
        "Das Kontaktformular ist vorübergehend nicht verfügbar. Bitte schreiben Sie an info@tpdigitallab.de.",
      responseTime:
        "Antwort in der Regel innerhalb von 3–12 Stunden.",
    },
  },

  en: {
    nav: {
      projects: "Projects",
      prices: "Pricing",
      process: "Process",
      contact: "Request",
    },
    hero: {
      eyebrow:
        "Web design from Munich · across Germany",
      title:
        "Get a professional business website",
      accent: "from €299",
      description:
        "Custom landing pages and business websites for freelancers and companies. Modern, fast, mobile-friendly and designed to generate new enquiries.",
      primaryCta:
        "Get a free quote",
      secondaryCta:
        "View references",
      priceNote:
  "Landing pages from €299 · Business websites from €599",
      cardTitle:
        "Your professional online presence",
      cardPrice: "from €299",
      cardDescription:
        "Personal implementation without anonymous agency structures.",
      cardFeatures: [
        "Custom design",
        "Optimized for mobile and desktop",
        "Basic SEO and contact form",
        "2 revision rounds included",
      ],
    },
    trust: [
      "5.0 ★ on Google",
      "2 published client projects",
      "Usually replies within 3–12 hours",
    ],
    projects: {
      eyebrow: "References",
      title:
        "Websites that are already live",
      description:
        "Two real client projects – no purchased templates and no invented case studies.",
      open: "View website",
      items: [
        {
          title:
            "Exzellentia Constructio",
          category:
            "Business website · Construction",
          description:
            "Professional business website with SEO optimization and the technical foundation for Google Ads.",
        },
        {
          title: "GrabProfi",
          category:
            "Landing page · Local service",
          description:
            "Clear landing page with local SEO and direct customer communication.",
        },
      ],
    },
    pricing: {
      eyebrow:
        "Transparent packages",
      title:
        "A clear starting price without hidden costs",
      description:
        "The final scope and fixed price are agreed in writing before the project begins.",
      from: "from",
      select:
        "Request this package",
      selected: "Selected",
      popular: "Most popular",
      finalPrice:
        "Additional features, domain and optional support are quoted separately when needed.",
    },
    process: {
      eyebrow: "Collaboration",
      title:
        "How your project works",
      description:
        "You know from the beginning what happens next and when each payment is due.",
      items: [
        {
          title:
            "Request and quote",
          description:
            "We clarify goals, scope and content. You then receive a written quote.",
        },
        {
          title: "50% deposit",
          description:
            "After accepting the quote, you receive the deposit invoice. Work begins once payment arrives.",
        },
        {
          title:
            "Design and development",
          description:
            "The website is built and provided on a protected test address for review.",
        },
        {
          title:
            "2 revision rounds",
          description:
            "Your requested changes are collected and implemented in two complete rounds.",
        },
        {
          title:
            "Approval and handover",
          description:
            "After approval, you pay the remaining 50%. You then receive the code and optional help with domain and hosting.",
        },
      ],
    },
    review: {
      eyebrow: "Google review",
      title:
        "Trust built through real collaboration",
      rating:
        "5 out of 5 stars",
      text:
        "We have already had two websites created by TP Digital Lab and are very satisfied with the collaboration. The implementation was professional, reliable and tailored precisely to our requirements. Change requests were implemented quickly and support was always available for technical questions.",
      author:
        "Dmytro Yurchenko",
      source:
        "Public Google review",
    },
    faq: {
      eyebrow:
        "Frequently asked questions",
      title:
        "What you should know before starting",
      items: [
        {
          question:
            "How much does a professional website cost?",
          answer:
  "A landing page starts at €299. A business website with up to five pages starts at €599. You receive the binding fixed price in the quote before the project begins.",
        },
        {
          question:
            "Are subpages included in a landing page?",
          answer:
            "No. A landing page is a single page with several sections. Separate subpages are part of a business website package or are quoted additionally.",
        },
        {
          question:
            "How does payment work?",
          answer:
            "50% is due as a deposit after accepting the quote. The remaining 50% is paid after approval and before the code is handed over.",
        },
        {
          question:
            "How many changes are included?",
          answer:
            "Two revision rounds are included. Further revision rounds can be agreed for an additional fee.",
        },
        {
          question:
            "What happens with domain and hosting?",
          answer:
            "The domain is registered to and paid by the client. Depending on the project, free hosting through GitHub or GitLab can be used. Setup and ongoing support can be booked separately.",
        },
      ],
    },
    form: {
      eyebrow:
        "Request a project",
      title:
        "Tell me briefly about your website",
      description:
        "You receive a personal response followed by a no-obligation quote.",
      firstName:
        "First name *",
      lastName:
        "Last name *",
      email: "Email *",
      phone:
        "Phone (optional)",
      package:
        "Requested service *",
      packageLaunch:
  "Landing page – from €299",
packageBusiness:
  "Business website – from €599",
      packageCustom:
        "Not sure yet / custom request",
      message:
        "What do you need? *",
      privacyPrefix:
        "I have read the ",
      privacyLink:
        "Privacy Policy",
      privacySuffix: ".",
      submit:
        "Request a free quote",
      sending: "Sending...",
      requiredError:
        "Please complete all required fields.",
      securityError:
        "The security check is not complete yet. Please try again.",
      sendError:
        "The request could not be sent. Please try again.",
      configError:
        "The contact form is temporarily unavailable. Please email info@tpdigitallab.de.",
      responseTime:
        "Usually replies within 3–12 hours.",
    },
  },

  ru: {
    nav: {
      projects: "Проекты",
      prices: "Цены",
      process: "Процесс",
      contact: "Заявка",
    },
    hero: {
      eyebrow:
        "Веб-дизайн из Мюнхена · по всей Германии",
      title:
        "Профессиональный сайт для бизнеса",
     accent: "от 299 €",
      description:
        "Индивидуальные лендинги и корпоративные сайты для самозанятых и компаний. Современно, быстро, адаптивно и с фокусом на новые заявки.",
      primaryCta:
        "Получить предложение",
      secondaryCta:
        "Посмотреть работы",
      priceNote:
  "Лендинги от 299 € · Сайты компаний от 599 €",
      cardTitle:
        "Профессиональное присутствие в интернете",
      cardPrice: "от 299 €",
      cardDescription:
        "Личная работа с исполнителем без структуры анонимного агентства.",
      cardFeatures: [
        "Индивидуальный дизайн",
        "Адаптация под телефон и компьютер",
        "Базовое SEO и контактная форма",
        "2 раунда правок включены",
      ],
    },
    trust: [
      "5,0 ★ в Google",
      "2 опубликованных клиентских проекта",
      "Обычно отвечаем в течение 3–12 часов",
    ],
    projects: {
      eyebrow: "Работы",
      title:
        "Сайты, которые уже работают",
      description:
        "Два реальных клиентских проекта — без купленных шаблонов и выдуманных кейсов.",
      open: "Открыть сайт",
      items: [
        {
          title:
            "Exzellentia Constructio",
          category:
            "Сайт компании · Строительство",
          description:
            "Профессиональный сайт компании с SEO-оптимизацией и технической основой для Google Ads.",
        },
        {
          title: "GrabProfi",
          category:
            "Лендинг · Локальная услуга",
          description:
            "Понятный лендинг с локальным SEO и прямой связью с клиентами.",
        },
      ],
    },
    pricing: {
      eyebrow:
        "Прозрачные пакеты",
      title:
        "Понятная стартовая цена без скрытых расходов",
      description:
        "Окончательный объём и фиксированная цена письменно согласовываются до начала проекта.",
      from: "от",
      select:
        "Запросить пакет",
      selected: "Выбрано",
      popular:
        "Популярный выбор",
      finalPrice:
        "Дополнительные функции, домен и поддержка при необходимости рассчитываются отдельно.",
    },
    process: {
      eyebrow:
        "Сотрудничество",
      title:
        "Как проходит работа",
      description:
        "С самого начала вы знаете следующий шаг и момент оплаты.",
      items: [
        {
          title:
            "Заявка и предложение",
          description:
            "Мы уточняем цель, объём и материалы. После этого вы получаете письменное предложение.",
        },
        {
          title:
            "Предоплата 50%",
          description:
            "После подтверждения предложения вы получаете счёт. Работа начинается после поступления оплаты.",
        },
        {
          title:
            "Дизайн и разработка",
          description:
            "Сайт создаётся и публикуется на защищённом тестовом адресе для проверки.",
        },
        {
          title:
            "2 раунда правок",
          description:
            "Ваши пожелания собираются и полностью выполняются в рамках двух раундов.",
        },
        {
          title:
            "Приёмка и передача",
          description:
            "После подтверждения вы оплачиваете оставшиеся 50%. Затем получаете код и при необходимости помощь с доменом и хостингом.",
        },
      ],
    },
    review: {
      eyebrow:
        "Отзыв в Google",
      title:
        "Доверие через реальную работу",
      rating:
        "5 из 5 звёзд",
      text:
        "Мы уже заказали у TP Digital Lab два сайта и очень довольны сотрудничеством. Работа была выполнена профессионально, надёжно и точно по нашим требованиям. Пожелания по изменениям выполнялись быстро, а по техническим вопросам всегда можно было получить поддержку.",
      author:
        "Dmytro Yurchenko",
      source:
        "Публичный отзыв в Google",
    },
    faq: {
      eyebrow:
        "Частые вопросы",
      title:
        "Что важно знать до начала проекта",
      items: [
        {
          question:
            "Сколько стоит профессиональный сайт?",
          answer:
  "Лендинг стоит от 299 €. Сайт компании до пяти страниц — от 599 €. Обязательная фиксированная цена указывается в предложении до начала проекта.",
        },
        {
          question:
            "Входят ли подстраницы в лендинг?",
          answer:
            "Нет. Лендинг — это одна страница с несколькими блоками. Отдельные подстраницы входят в пакет сайта компании или рассчитываются дополнительно.",
        },
        {
          question:
            "Как проходит оплата?",
          answer:
            "50% оплачивается после принятия предложения как предоплата. Остальные 50% — после приёмки и до передачи кода.",
        },
        {
          question:
            "Сколько правок включено?",
          answer:
            "Включены два раунда правок. Дополнительные раунды можно согласовать за отдельную оплату.",
        },
        {
          question:
            "Что будет с доменом и хостингом?",
          answer:
            "Домен регистрируется на заказчика и оплачивается им. В зависимости от проекта можно использовать бесплатный хостинг GitHub или GitLab. Настройка и дальнейшая поддержка заказываются отдельно.",
        },
      ],
    },
    form: {
      eyebrow:
        "Заявка на проект",
      title:
        "Кратко расскажите о нужном сайте",
      description:
        "Вы получите личный ответ, а затем предложение без обязательств.",
      firstName: "Имя *",
      lastName: "Фамилия *",
      email: "E-mail *",
      phone:
        "Телефон (необязательно)",
      package:
        "Нужная услуга *",
      packageLaunch:
  "Лендинг — от 299 €",
packageBusiness:
  "Сайт компании — от 599 €",
      packageCustom:
        "Пока не уверен / индивидуальный запрос",
      message:
        "Что вам нужно? *",
      privacyPrefix:
        "Я ознакомился с ",
      privacyLink:
        "политикой конфиденциальности",
      privacySuffix: ".",
      submit:
        "Отправить заявку",
      sending: "Отправка...",
      requiredError:
        "Заполните все обязательные поля.",
      securityError:
        "Проверка безопасности ещё не завершена. Попробуйте снова.",
      sendError:
        "Не удалось отправить заявку. Попробуйте ещё раз.",
      configError:
        "Форма временно недоступна. Напишите на info@tpdigitallab.de.",
      responseTime:
        "Обычно отвечаем в течение 3–12 часов.",
    },
  },
};

const portfolio = [
  {
    image:
      "/projects/exzellentia.png",
    website:
      "https://exzellentia-constructio.de",
  },
  {
    image:
      "/projects/grabpflege.png",
    website:
      "https://grabprofi.de",
  },
] as const;

const offerPackageIds = [
  "launch",
  "business",
] as const;

const inputClassName =
  "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-white/30 hover:border-white/20 focus:border-blue-400/60 focus:bg-white/[0.07] focus:shadow-[0_0_30px_rgba(59,130,246,0.12)]";

function getQuote(
  selectedPackage: PackageChoice
) {
  if (
    selectedPackage === "business"
  ) {
    return {
      packageId: "business",
      websiteId: "business",
      languages: ["de", "en"],
      marketing: [
        "advanced-seo",
        "business-profile",
      ],
      branding: [],
      features: [],
      support: [],
      total: 599,
      monthlyTotal: 0,
    };
  }

  if (
    selectedPackage === "custom"
  ) {
    return {
      packageId: null,
      websiteId: "custom",
      languages: [],
      marketing: [],
      branding: [],
      features: [],
      support: [],
      total: 0,
      monthlyTotal: 0,
    };
  }

  return {
    packageId: "launch",
    websiteId: "landing",
    languages: ["de"],
    marketing: ["basic-seo"],
    branding: [],
    features: [],
    support: [],
    total: 299,
    monthlyTotal: 0,
  };
}

export default function WebdesignLandingPage() {
  const { language } = useLanguage();
  const router = useRouter();
  const t = landingCopy[language];

  const [
    selectedPackage,
    setSelectedPackage,
  ] = useState<PackageChoice>(
    "launch"
  );

  const [
    firstName,
    setFirstName,
  ] = useState("");

  const [
    lastName,
    setLastName,
  ] = useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [
    turnstileToken,
    setTurnstileToken,
  ] = useState<string | null>(
    null
  );

  const [
    isSubmitting,
    setIsSubmitting,
  ] = useState(false);

  const [
    submitError,
    setSubmitError,
  ] = useState("");

  const turnstileRef =
    useRef<TurnstileInstance>(
      null
    );

  const turnstileSiteKey =
    process.env
      .NEXT_PUBLIC_TURNSTILE_SITE_KEY ??
    "";

  const numberLocale =
    language === "de"
      ? "de-DE"
      : language === "ru"
        ? "ru-RU"
        : "en-US";

  function formatPrice(
    price: number
  ) {
    return new Intl.NumberFormat(
      numberLocale,
      {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
      }
    ).format(price);
  }

  function choosePackage(
    packageId: PackageChoice
  ) {
    setSelectedPackage(packageId);

    requestAnimationFrame(() => {
      document
        .getElementById("anfrage")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setSubmitError("");

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      setSubmitError(
        t.form.requiredError
      );

      return;
    }

    if (!turnstileToken) {
      setSubmitError(
        t.form.securityError
      );

      return;
    }

    let delivered = false;

    try {
      setIsSubmitting(true);

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            firstName:
              firstName.trim(),

            lastName:
              lastName.trim(),

            email: email.trim(),

            phone: phone.trim(),

            message:
              `[Source: /webdesign]\n${message.trim()}`,

            budget:
  selectedPackage === "launch"
    ? "ab 299 €"
    : selectedPackage === "business"
      ? "ab 599 €"
      : "Noch offen",

            timeline: "",

            discount: false,

            language,

            quote:
              getQuote(
                selectedPackage
              ),

            turnstileToken,
          }),
        }
      );

      const result =
        (await response
          .json()
          .catch(() => null)) as
          | {
              success?: boolean;
              error?: string;
            }
          | null;

      if (
        !response.ok ||
        result?.success !== true
      ) {
        throw new Error(
          result?.error ??
            "Request failed"
        );
      }

      delivered = true;

      try {
        sessionStorage.setItem(
          "lead_successfully_submitted",
          "true"
        );
      } catch {
        // Tracking does not block the request.
      }

      router.push("/thank-you");
    } catch (error) {
      console.error(error);

      setTurnstileToken(null);

      turnstileRef.current?.reset();

      setSubmitError(
        t.form.sendError
      );
    } finally {
      if (!delivered) {
        setIsSubmitting(false);
      }
    }
  }

  return (
    <>
      <FaqSchema
        items={t.faq.items}
      />

      <header className="fixed inset-x-0 top-0 z-50">
        <Container>
          <div className="mt-4 flex items-center justify-between rounded-full border border-white/15 bg-black/70 px-5 py-3 shadow-2xl backdrop-blur-2xl md:mt-6">
            <a
              href="#top"
              aria-label="TP Digital Lab"
              className="shrink-0 leading-none text-white"
            >
              <span className="block text-xl font-semibold">
                TP
              </span>

              <span className="mt-1 hidden text-[9px] uppercase tracking-[0.3em] text-white/45 sm:block">
                Digital Lab
              </span>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-white/65 lg:flex">
              <a
                href="#projekte"
                className="transition hover:text-white"
              >
                {t.nav.projects}
              </a>

              <a
                href="#preise"
                className="transition hover:text-white"
              >
                {t.nav.prices}
              </a>

              <a
                href="#ablauf"
                className="transition hover:text-white"
              >
                {t.nav.process}
              </a>

              <a
                href="#anfrage"
                className="transition hover:text-white"
              >
                {t.nav.contact}
              </a>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <LanguageSwitcher />

              <button
                type="button"
                onClick={() =>
                  choosePackage(
                    "launch"
                  )
                }
                className="hidden rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400 sm:inline-flex"
              >
                {t.nav.contact}
              </button>
            </div>
          </div>
        </Container>
      </header>

      <main
        id="top"
        className="overflow-hidden bg-black text-white"
      >
        <section className="relative min-h-[88svh] overflow-hidden pb-20 pt-36 md:flex md:items-center md:pt-32">
          <BackgroundGrid />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"
          />

          <Container className="relative z-10">
            <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.32em] text-blue-300/80">
                  {t.hero.eyebrow}
                </p>

                <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                  {t.hero.title}

                  <span className="mt-2 block bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                    {t.hero.accent}
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
                  {t.hero.description}
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() =>
                      choosePackage(
                        "launch"
                      )
                    }
                    className="inline-flex items-center justify-center rounded-full bg-blue-500 px-7 py-4 font-semibold text-white shadow-[0_15px_45px_rgba(59,130,246,0.3)] transition hover:-translate-y-0.5 hover:bg-blue-400"
                  >
                    {
                      t.hero
                        .primaryCta
                    }

                    <span
                      aria-hidden="true"
                      className="ml-3"
                    >
                      →
                    </span>
                  </button>

                  <a
                    href="#projekte"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-7 py-4 font-medium text-white transition hover:border-white/30 hover:bg-white/[0.1]"
                  >
                    {
                      t.hero
                        .secondaryCta
                    }
                  </a>
                </div>

                <p className="mt-5 text-sm text-white/45">
                  {t.hero.priceNote}
                </p>
              </div>

              <aside className="relative rounded-[32px] border border-white/15 bg-white/[0.07] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-9">
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

                <p className="text-sm text-white/50">
                  {t.hero.cardTitle}
                </p>

                <p className="mt-4 text-5xl font-semibold tracking-tight">
                  {t.hero.cardPrice}
                </p>

                <p className="mt-5 leading-7 text-white/55">
                  {
                    t.hero
                      .cardDescription
                  }
                </p>

                <div className="mt-8 space-y-4">
                  {t.hero.cardFeatures.map(
                    (feature) => (
                      <div
                        key={
                          feature
                        }
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />

                        <span className="text-white/80">
                          {feature}
                        </span>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-6 text-sm text-white/50">
                  <MapPin className="h-4 w-4 text-blue-400" />

                  München ·
                  Deutschlandweit
                </div>
              </aside>
            </div>
          </Container>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <Container>
            <div className="grid gap-px md:grid-cols-3">
              {t.trust.map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 py-5 text-sm text-white/70 md:justify-center md:border-l md:border-white/10 md:first:border-l-0"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400" />

                    {item}
                  </div>
                )
              )}
            </div>
          </Container>
        </section>

        <section
          id="projekte"
          className="scroll-mt-28 py-24 md:py-32"
        >
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.32em] text-blue-300/70">
                {
                  t.projects
                    .eyebrow
                }
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                {
                  t.projects
                    .title
                }
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/55">
                {
                  t.projects
                    .description
                }
              </p>
            </div>

            <div className="mt-12 grid gap-7 lg:grid-cols-2">
              {portfolio.map(
                (
                  project,
                  index
                ) => {
                  const content =
                    t.projects
                      .items[index];

                  return (
                    <article
                      key={
                        project.website
                      }
                      className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-blue-400/30"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-zinc-950">
                        <Image
                          src={
                            project.image
                          }
                          alt={
                            content.title
                          }
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                        />
                      </div>

                      <div className="p-7 sm:p-8">
                        <p className="text-sm text-blue-300/75">
                          {
                            content.category
                          }
                        </p>

                        <h3 className="mt-3 text-2xl font-semibold">
                          {
                            content.title
                          }
                        </h3>

                        <p className="mt-4 leading-7 text-white/55">
                          {
                            content.description
                          }
                        </p>

                        <a
                          href={
                            project.website
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-7 inline-flex items-center gap-2 font-medium text-white transition hover:text-blue-300"
                        >
                          {
                            t.projects
                              .open
                          }

                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </article>
                  );
                }
              )}
            </div>
          </Container>
        </section>

        <section
          id="preise"
          className="scroll-mt-28 border-y border-white/10 bg-white/[0.025] py-24 md:py-32"
        >
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-blue-300/70">
                {
                  t.pricing
                    .eyebrow
                }
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                {
                  t.pricing.title
                }
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/55">
                {
                  t.pricing
                    .description
                }
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl gap-7 lg:grid-cols-2">
              {offerPackageIds.map(
                (packageId) => {
                  const packageData =
                    packages.find(
                      (item) =>
                        item.id ===
                        packageId
                    );

                  const packageText =
                    packageTranslations[
                      language
                    ].packages[
                      packageId
                    ];

                  const isSelected =
                    selectedPackage ===
                    packageId;

                  if (!packageData) {
                    return null;
                  }

                  return (
                    <article
                      key={
                        packageId
                      }
                      className={`relative rounded-[32px] border p-7 transition sm:p-9 ${
                        packageId ===
                        "business"
                          ? "border-blue-400/40 bg-blue-500/[0.08] shadow-[0_25px_80px_rgba(59,130,246,0.12)]"
                          : "border-white/10 bg-white/[0.04]"
                      }`}
                    >
                      {packageId ===
                        "business" && (
                        <span className="absolute right-6 top-6 rounded-full bg-blue-500/15 px-3 py-1 text-xs font-medium text-blue-300">
                          {
                            t.pricing
                              .popular
                          }
                        </span>
                      )}

                      <h3 className="pr-28 text-2xl font-semibold">
                        {
                          packageText.name
                        }
                      </h3>

                      <div className="mt-6 flex items-end gap-2">
                        <span className="pb-1 text-sm text-white/45">
                          {
                            t.pricing
                              .from
                          }
                        </span>

                        <span className="text-5xl font-semibold tracking-tight">
                          {formatPrice(
                            packageData.price
                          )}
                        </span>
                      </div>

                      <p className="mt-6 leading-7 text-white/55">
                        {
                          packageText.description
                        }
                      </p>

                      <div className="mt-8 space-y-4 border-t border-white/10 pt-7">
                        {packageText.features.map(
                          (
                            feature
                          ) => (
                            <div
                              key={
                                feature
                              }
                              className="flex items-start gap-3"
                            >
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />

                              <span className="text-white/75">
                                {
                                  feature
                                }
                              </span>
                            </div>
                          )
                        )}

                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />

                          <span className="text-white/75">
                            {language ===
                            "de"
                              ? "2 Korrekturrunden"
                              : language ===
                                  "ru"
                                ? "2 раунда правок"
                                : "2 revision rounds"}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          choosePackage(
                            packageId
                          )
                        }
                        className={`mt-9 inline-flex w-full items-center justify-center rounded-full px-6 py-4 font-semibold transition ${
                          isSelected
                            ? "bg-blue-500 text-white"
                            : "border border-white/15 bg-white/[0.06] text-white hover:bg-white/[0.12]"
                        }`}
                      >
                        {isSelected
                          ? t.pricing
                              .selected
                          : t.pricing
                              .select}
                      </button>
                    </article>
                  );
                }
              )}
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-white/40">
              {
                t.pricing
                  .finalPrice
              }
            </p>
          </Container>
        </section>

        <section
          id="ablauf"
          className="scroll-mt-28 py-24 md:py-32"
        >
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.32em] text-blue-300/70">
                {
                  t.process
                    .eyebrow
                }
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                {
                  t.process.title
                }
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/55">
                {
                  t.process
                    .description
                }
              </p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-5">
              {t.process.items.map(
                (item, index) => (
                  <article
                    key={item.title}
                    className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-sm font-semibold text-blue-300">
                      {index + 1}
                    </span>

                    <h3 className="mt-6 text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/50">
                      {
                        item.description
                      }
                    </p>
                  </article>
                )
              )}
            </div>
          </Container>
        </section>

        <section className="border-y border-white/10 bg-gradient-to-br from-blue-500/[0.09] via-white/[0.025] to-transparent py-24">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-blue-300/70">
                {
                  t.review
                    .eyebrow
                }
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                {t.review.title}
              </h2>

              <div
                className="mt-8 text-xl tracking-[0.25em] text-yellow-300"
                aria-label={
                  t.review.rating
                }
              >
                ★★★★★
              </div>

              <blockquote className="mt-8 text-xl leading-9 text-white/75 sm:text-2xl sm:leading-10">
                “{t.review.text}”
              </blockquote>

              <p className="mt-8 font-semibold">
                {t.review.author}
              </p>

              <p className="mt-1 text-sm text-white/40">
                {t.review.source}
              </p>
            </div>
          </Container>
        </section>

        <section className="py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl">
              <p className="text-xs uppercase tracking-[0.32em] text-blue-300/70">
                {t.faq.eyebrow}
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                {t.faq.title}
              </h2>

              <div className="mt-12 space-y-4">
                {t.faq.items.map(
                  (item) => (
                    <details
                      key={
                        item.question
                      }
                      className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 open:border-blue-400/25 open:bg-white/[0.06]"
                    >
                      <summary className="cursor-pointer list-none pr-8 text-lg font-medium marker:hidden">
                        {
                          item.question
                        }
                      </summary>

                      <p className="mt-4 leading-7 text-white/55">
                        {item.answer}
                      </p>
                    </details>
                  )
                )}
              </div>
            </div>
          </Container>
        </section>

        <section
          id="anfrage"
          className="scroll-mt-28 border-t border-white/10 bg-white/[0.025] py-24 md:py-32"
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-blue-300/70">
                  {
                    t.form
                      .eyebrow
                  }
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                  {t.form.title}
                </h2>

                <p className="mt-5 text-lg leading-8 text-white/55">
                  {
                    t.form
                      .description
                  }
                </p>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-white/55">
                  <p className="font-medium text-white">
                    info@tpdigitallab.de
                  </p>

                  <p className="mt-2">
                    {
                      t.form
                        .responseTime
                    }
                  </p>
                </div>
              </div>

              <form
                onSubmit={
                  handleSubmit
                }
                className="rounded-[32px] border border-white/15 bg-black/35 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-9"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    name="firstName"
                    value={firstName}
                    onChange={(
                      event
                    ) =>
                      setFirstName(
                        event.target
                          .value
                      )
                    }
                    placeholder={
                      t.form
                        .firstName
                    }
                    aria-label={
                      t.form
                        .firstName
                    }
                    autoComplete="given-name"
                    maxLength={100}
                    required
                    className={
                      inputClassName
                    }
                  />

                  <input
                    name="lastName"
                    value={lastName}
                    onChange={(
                      event
                    ) =>
                      setLastName(
                        event.target
                          .value
                      )
                    }
                    placeholder={
                      t.form
                        .lastName
                    }
                    aria-label={
                      t.form
                        .lastName
                    }
                    autoComplete="family-name"
                    maxLength={100}
                    required
                    className={
                      inputClassName
                    }
                  />

                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(
                      event
                    ) =>
                      setEmail(
                        event.target
                          .value
                      )
                    }
                    placeholder={
                      t.form.email
                    }
                    aria-label={
                      t.form.email
                    }
                    autoComplete="email"
                    maxLength={254}
                    required
                    className={
                      inputClassName
                    }
                  />

                  <input
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(
                      event
                    ) =>
                      setPhone(
                        event.target
                          .value
                      )
                    }
                    placeholder={
                      t.form.phone
                    }
                    aria-label={
                      t.form.phone
                    }
                    autoComplete="tel"
                    maxLength={50}
                    className={
                      inputClassName
                    }
                  />

                  <select
                    name="package"
                    value={
                      selectedPackage
                    }
                    onChange={(
                      event
                    ) =>
                      setSelectedPackage(
                        event.target
                          .value as PackageChoice
                      )
                    }
                    aria-label={
                      t.form.package
                    }
                    required
                    className={`${inputClassName} sm:col-span-2`}
                  >
                    <option
                      value="launch"
                      className="bg-zinc-950"
                    >
                      {
                        t.form
                          .packageLaunch
                      }
                    </option>

                    <option
                      value="business"
                      className="bg-zinc-950"
                    >
                      {
                        t.form
                          .packageBusiness
                      }
                    </option>

                    <option
                      value="custom"
                      className="bg-zinc-950"
                    >
                      {
                        t.form
                          .packageCustom
                      }
                    </option>
                  </select>

                  <textarea
                    name="message"
                    value={message}
                    onChange={(
                      event
                    ) =>
                      setMessage(
                        event.target
                          .value
                      )
                    }
                    placeholder={
                      t.form.message
                    }
                    aria-label={
                      t.form.message
                    }
                    rows={6}
                    maxLength={1800}
                    required
                    className={`${inputClassName} resize-y sm:col-span-2`}
                  />
                </div>

                <div className="mt-7 flex justify-center">
                  {turnstileSiteKey ? (
                    <Turnstile
                      id="webdesign-lead-turnstile"
                      ref={
                        turnstileRef
                      }
                      siteKey={
                        turnstileSiteKey
                      }
                      onSuccess={(
                        token
                      ) => {
                        setTurnstileToken(
                          token
                        );

                        setSubmitError(
                          ""
                        );
                      }}
                      onExpire={() =>
                        setTurnstileToken(
                          null
                        )
                      }
                      onError={() =>
                        setTurnstileToken(
                          null
                        )
                      }
                      options={{
                        theme: "dark",
                        size: "flexible",
                      }}
                    />
                  ) : (
                    <p
                      role="alert"
                      className="text-center text-sm text-amber-300"
                    >
                      {
                        t.form
                          .configError
                      }
                    </p>
                  )}
                </div>

                <p className="mt-6 text-sm leading-6 text-white/40">
                  {
                    t.form
                      .privacyPrefix
                  }

                  <Link
                    href="/datenschutzerklaerung"
                    className="text-white/70 underline decoration-white/30 underline-offset-4 transition hover:text-white"
                  >
                    {
                      t.form
                        .privacyLink
                    }
                  </Link>

                  {
                    t.form
                      .privacySuffix
                  }
                </p>

                {submitError && (
                  <p
                    role="alert"
                    className="mt-5 text-sm text-red-400"
                  >
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !turnstileSiteKey
                  }
                  className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-blue-500 px-7 py-4 font-semibold text-white shadow-[0_15px_45px_rgba(59,130,246,0.25)] transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting
                    ? t.form
                        .sending
                    : t.form
                        .submit}

                  {!isSubmitting && (
                    <span
                      aria-hidden="true"
                      className="ml-3"
                    >
                      →
                    </span>
                  )}
                </button>
              </form>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}