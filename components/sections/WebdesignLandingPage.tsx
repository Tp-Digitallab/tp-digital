"use client";

import { type FormEvent, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileLeadBar from "@/components/ui/MobileLeadBar";
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

type Language = "de" | "en" | "ru";

type PackageChoice =
  | "launch"
  | "business"
  | "growth"
  | "custom";

type Copy = {
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

  why: {
    eyebrow: string;
    title: string;
    items: {
      title: string;
      text: string;
    }[];
  };

  projects: {
    eyebrow: string;
    title: string;
    description: string;
    open: string;
    items: {
      title: string;
      category: string;
      description: string;
      image: string;
      url: string;
    }[];
  };

  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    from: string;
    select: string;
    selected: string;
    finalPrice: string;
  };

  packages: Record<
    "launch" | "business" | "growth",
    {
      name: string;
      description: string;
      features: string[];
    }
  >;

  process: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
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
    items: {
      question: string;
      answer: string;
    }[];
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
    packageGrowth: string;
    packageCustom: string;
    message: string;
    privacy: string;
    privacyLink: string;
    submit: string;
    sending: string;
    requiredError: string;
    securityError: string;
    sendError: string;
    configError: string;
    responseTime: string;
  };
};

const copy: Record<Language, Copy> = {
  de: {
    nav: {
      projects: "Referenzen",
      prices: "Preise",
      process: "Ablauf",
      contact: "Anfrage",
    },

    hero: {
      eyebrow:
        "Persönliche Website-Entwicklung aus München",
      title:
        "Professionelle Website erstellen lassen",
      accent: "ab 490 €",
      description:
        "Moderne, schnelle Websites für Selbstständige und kleine Unternehmen. Persönlich umgesetzt, mit klarer Struktur, transparenter Planung und dem Ziel, neue Kundenanfragen zu erleichtern.",
      primaryCta:
        "Unverbindliches Angebot anfragen",
      secondaryCta:
        "Referenzen ansehen",
      priceNote:
        "Einführungspreis für die ersten Projekte · Landingpages ab 490 € · Unternehmenswebsites ab 990 €",
      cardTitle:
        "Ihr professioneller Online-Auftritt",
      cardPrice: "ab 490 €",
      cardDescription:
        "Persönliche Umsetzung direkt mit mir – vom ersten Kontakt bis zum Livegang.",
      cardFeatures: [
        "Festpreis schriftlich vor Projektbeginn",
        "Individuelles Design",
        "Optimiert für Smartphone und Desktop",
        "Basis-SEO und Kontaktformular",
        "2 Korrekturrunden inklusive",
      ],
    },

    trust: [
      "Festpreis schriftlich vor Projektstart",
      "Persönliche Betreuung aus München – deutschlandweit",
      "Schriftliche Kommunikation per Formular, E-Mail oder WhatsApp",
      "Antwort in der Regel innerhalb von 3–12 Stunden",
    ],

    why: {
      eyebrow: "Warum TP Digital Lab?",
      title:
        "Direkte Zusammenarbeit mit klaren Vereinbarungen.",
      items: [
        {
          title: "Direkter Kontakt mit mir",
          text:
            "Sie schreiben direkt mit mir – von der ersten Anfrage bis zum Livegang. Keine Weiterleitung und keine anonyme Agenturstruktur.",
        },
        {
          title: "Klare Vereinbarungen",
          text:
            "Vor Projektbeginn erhalten Sie ein schriftliches Angebot mit klarem Leistungsumfang und transparentem Festpreis.",
        },
        {
          title: "Für Kundenanfragen entwickelt",
          text:
            "Ich achte auf klare Inhalte, schnelle Ladezeiten, mobile Darstellung und einen gut sichtbaren Kontaktweg.",
        },
        {
          title: "Alles aus einer Hand",
          text:
            "Design, technische Umsetzung und Basis-SEO werden persönlich koordiniert. Auf Wunsch richte ich auch Domain und Hosting ein.",
        },
      ],
    },

    projects: {
      eyebrow: "Referenzen",
      title:
        "Websites, die bereits online arbeiten",
      description:
        "Zwei reale Kundenprojekte – keine gekauften Vorlagen und keine erfundenen Fallstudien.",
      open: "Website ansehen",
      items: [
        {
          title: "Exzellentia Constructio",
          category:
            "Unternehmenswebsite · Bauwesen",
          description:
            "Professionelle Unternehmenswebsite mit SEO-Optimierung und technischer Grundlage für Google Ads.",
          image: "/projects/exzellentia.png",
          url:
            "https://exzellentia-constructio.de",
        },
        {
          title: "GrabProfi",
          category:
            "Landingpage · Lokale Dienstleistung",
          description:
            "Übersichtliche Landingpage mit lokalem SEO und direkter Kundenkommunikation.",
          image: "/projects/grabpflege.png",
          url: "https://grabprofi.de",
        },
      ],
    },

    pricing: {
      eyebrow: "Transparente Pakete",
      title:
        "Ein klarer Startpreis statt versteckter Kosten",
      description:
        "Der endgültige Leistungsumfang und Festpreis werden vor Projektbeginn schriftlich im Angebot vereinbart.",
      from: "ab",
      select: "Paket anfragen",
      selected: "Ausgewählt",
      finalPrice:
        "Zusatzfunktionen, Domain und optionale Betreuung werden bei Bedarf separat angeboten.",
    },

    packages: {
      launch: {
        name: "Launch",
        description:
          "Eine startbereite Landingpage für Selbstständige und kleine Unternehmen.",
        features: [
          "Eine Seite mit mehreren Abschnitten",
          "1 Sprache",
          "Individuelles Design",
          "Basis-SEO",
          "Kontaktformular",
          "GA4-Einrichtung",
          "2 Korrekturrunden",
        ],
      },
      business: {
        name: "Business",
        description:
          "Eine vollständige Unternehmenswebsite für mehr Sichtbarkeit und neue Kundenanfragen.",
        features: [
          "Bis zu 5 Seiten",
          "2 Sprachen",
          "Individuelles Design",
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
          "Ein professioneller Online-Shop mit Verwaltung, Zahlungsintegration und Marketing-Einrichtung.",
        features: [
          "Bis zu 20 Produkte",
          "Bis zu 3 Sprachen",
          "Admin-Bereich (CMS)",
          "Zahlungsintegration",
          "Erweiterte SEO-Optimierung",
          "GA4 E-Commerce-Tracking",
          "Google-Ads-Einrichtung",
          "2 Monate technischer Support",
          "2 Korrekturrunden",
        ],
      },
    },

    process: {
      eyebrow: "Zusammenarbeit",
      title: "So läuft Ihr Projekt ab",
      description:
        "Sie wissen von Anfang an, welcher Schritt als Nächstes kommt und wann eine Zahlung fällig wird.",
      items: [
        {
          title: "Anfrage und Abstimmung",
          description:
            "Sie beschreiben Ihr Projekt kurz. Ich kläre schriftlich die wichtigsten Fragen zu Ziel, Umfang und Inhalten.",
        },
        {
          title: "Festpreis-Angebot",
          description:
            "Sie erhalten ein schriftliches Angebot mit klarem Leistungsumfang und dem vereinbarten Preis.",
        },
        {
          title: "Anzahlung und Start",
          description:
            "Nach Ihrer Bestätigung erhalten Sie die Rechnung. Nach Zahlungseingang beginne ich mit der Umsetzung.",
        },
        {
          title: "Design und 2 Korrekturrunden",
          description:
            "Die Website wird auf einer geschützten Testadresse bereitgestellt. Ihre Änderungswünsche setze ich in zwei vollständigen Runden um.",
        },
        {
          title: "Abnahme und Livegang",
          description:
            "Nach Ihrer Freigabe zahlen Sie den Restbetrag. Danach geht Ihre Website online.",
        },
      ],
    },

    review: {
      eyebrow: "Kundenstimme",
      title:
        "Vertrauen durch echte Zusammenarbeit",
      rating: "Kundenstimme",
      text:
        "Wir haben bereits zwei Websites von TP Digital Lab erstellen lassen und sind mit der Zusammenarbeit sehr zufrieden. Die Umsetzung war professionell, zuverlässig und genau auf unsere Anforderungen abgestimmt.",
      author: "Dmytro Yurchenko",
      source: "Öffentliche Google-Bewertung",
    },

    faq: {
      eyebrow: "Häufige Fragen",
      title:
        "Das Wichtigste vor dem Projektstart",
      items: [
        {
          question:
            "Wie viel kostet eine professionelle Website?",
          answer:
            "Eine Landingpage startet bei 490 €. Eine Unternehmenswebsite mit bis zu fünf Seiten startet bei 990 €. Ein Online-Shop startet bei 1.790 €. Den endgültigen Festpreis erhalten Sie vor Projektbeginn schriftlich im Angebot.",
        },
        {
          question:
            "Wie lange dauert die Erstellung?",
          answer:
            "Die Dauer hängt vom Umfang des Projekts und davon ab, wie schnell Texte und Bilder vorliegen. Eine Landingpage kann bei vollständigen Inhalten oft innerhalb von 1–2 Wochen umgesetzt werden.",
        },
        {
          question:
            "Was brauche ich von Ihnen?",
          answer:
            "Logo, Texte und Bilder können Sie bereitstellen. Wenn etwas fehlt, klären wir schriftlich, wie wir es lösen.",
        },
        {
          question:
            "Muss ich telefonieren?",
          answer:
            "Nein. Die Abstimmung erfolgt schriftlich per Formular, E-Mail oder WhatsApp, damit alle Vereinbarungen nachvollziehbar dokumentiert bleiben.",
        },
        {
          question:
            "Wie wird bezahlt?",
          answer:
            "Die Zahlung erfolgt in zwei Schritten: 50 % vor Beginn der Umsetzung und 50 % nach der Abnahme vor dem Livegang.",
        },
        {
          question:
            "Was passiert mit Domain und Hosting?",
          answer:
            "Die Domain wird auf Ihren Namen registriert. Auf Wunsch richte ich Domain und Hosting für Sie ein. Die Kosten dafür werden separat vereinbart.",
        },
        {
          question:
            "Wie viele Änderungen sind inklusive?",
          answer:
            "Zwei Korrekturrunden sind inklusive. Weitere Änderungen können gegen Aufpreis vereinbart werden.",
        },
        {
          question:
            "Funktioniert die Website auf Smartphones?",
          answer:
            "Ja. Jede Website wird für Smartphones, Tablets und Desktop-Computer optimiert.",
        },
      ],
    },

    form: {
      eyebrow: "Projekt anfragen",
      title:
        "Erzählen Sie kurz von Ihrem Projekt",
      description:
  "Beschreiben Sie mir kurz Ihr Projekt. Ich melde mich in der Regel innerhalb von 3–12 Stunden persönlich per E-Mail. Wenn es passt, erhalten Sie danach ein schriftliches Angebot mit klarem Leistungsumfang und Festpreis.",
      firstName: "Vorname *",
      lastName: "Nachname *",
      email: "E-Mail *",
      phone: "Telefon (optional)",
      package: "Gewünschte Leistung *",
      packageLaunch:
        "Landingpage – ab 490 €",
      packageBusiness:
        "Unternehmenswebsite – ab 990 €",
      packageGrowth:
        "Online-Shop – ab 1.790 €",
      packageCustom:
        "Noch nicht sicher / individuelle Anfrage",
      message:
        "Beschreiben Sie kurz Ihr Projekt *",
      privacy: "Ich habe die",
      privacyLink:
  "Datenschutzerklärung zur Kenntnis genommen",
      submit:
        "Unverbindliches Angebot anfragen",
      sending: "Wird gesendet...",
      requiredError:
        "Bitte füllen Sie alle Pflichtfelder aus und bestätigen Sie die Datenschutzerklärung.",
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
      projects: "References",
      prices: "Pricing",
      process: "Process",
      contact: "Request",
    },

    hero: {
      eyebrow:
        "Personal website development from Munich",
      title:
        "Get a professional business website",
      accent: "from €490",
      description:
        "Modern, fast websites for freelancers and small businesses. Personally implemented with clear planning and the goal of making new enquiries easier.",
      primaryCta:
  "Request a no-obligation quote",
      secondaryCta:
        "View references",
      priceNote:
        "Introductory price for the first projects · Landing pages from €490 · Business websites from €990",
      cardTitle:
        "Your professional online presence",
      cardPrice: "from €490",
      cardDescription:
        "Personal implementation directly with me – from first contact to launch.",
      cardFeatures: [
        "Written fixed price before the project",
        "Custom design",
        "Optimized for mobile and desktop",
        "Basic SEO and contact form",
        "2 revision rounds included",
      ],
    },

    trust: [
      "Written fixed price before the project",
      "Personal support from Munich – across Germany",
      "Written communication by form, email or WhatsApp",
      "Usually replies within 3–12 hours",
    ],

    why: {
      eyebrow: "Why TP Digital Lab?",
      title:
        "Direct collaboration with clear agreements.",
      items: [
        {
          title: "Direct contact with me",
          text:
            "You communicate directly with me from the first enquiry to launch.",
        },
        {
          title: "Clear agreements",
          text:
            "You receive a written offer with a clear scope and transparent fixed price before work begins.",
        },
        {
          title: "Built for enquiries",
          text:
            "I focus on clear content, fast loading, mobile presentation and a visible contact path.",
        },
        {
          title:
            "Everything coordinated personally",
          text:
            "Design, technical implementation and basic SEO are handled personally.",
        },
      ],
    },

    projects: {
      eyebrow: "References",
      title:
        "Websites that are already live",
      description:
        "Two real client projects – no purchased templates and no invented case studies.",
      open: "View website",
      items: [
        {
          title: "Exzellentia Constructio",
          category:
            "Business website · Construction",
          description:
            "Professional business website with SEO optimization and the technical foundation for Google Ads.",
          image: "/projects/exzellentia.png",
          url:
            "https://exzellentia-constructio.de",
        },
        {
          title: "GrabProfi",
          category:
            "Landing page · Local service",
          description:
            "Clear landing page with local SEO and direct customer communication.",
          image: "/projects/grabpflege.png",
          url: "https://grabprofi.de",
        },
      ],
    },

    pricing: {
      eyebrow: "Transparent packages",
      title:
        "A clear starting price without hidden costs",
      description:
        "The final scope and fixed price are agreed in writing before the project begins.",
      from: "from",
      select: "Request this package",
      selected: "Selected",
      finalPrice:
        "Additional features, domain and optional support are quoted separately when needed.",
    },

    packages: {
      launch: {
        name: "Launch",
        description:
          "A ready-to-launch landing page for freelancers and small businesses.",
        features: [
          "One page with several sections",
          "1 language",
          "Custom design",
          "Basic SEO",
          "Contact form",
          "GA4 setup",
          "2 revision rounds",
        ],
      },
      business: {
        name: "Business",
        description:
          "A complete business website for better visibility and new enquiries.",
        features: [
          "Up to 5 pages",
          "2 languages",
          "Custom design",
          "Advanced SEO",
          "Google Business Profile",
          "GA4 and conversion tracking",
          "1 month technical support",
          "2 revision rounds",
        ],
      },
      growth: {
        name: "Growth",
        description:
          "A professional online store with administration, payment integration and marketing setup.",
        features: [
          "Up to 20 products",
          "Up to 3 languages",
          "Admin panel",
          "Payment integration",
          "Advanced SEO",
          "GA4 e-commerce tracking",
          "Google Ads setup",
          "2 months technical support",
          "2 revision rounds",
        ],
      },
    },

    process: {
      eyebrow: "Collaboration",
      title: "How your project works",
      description:
        "You know from the beginning what happens next and when each payment is due.",
      items: [
        {
          title: "Request and discussion",
          description:
            "You briefly describe your project. I clarify the key questions in writing.",
        },
        {
          title: "Fixed-price offer",
          description:
            "You receive a written offer with a clear scope and agreed price.",
        },
        {
          title: "Deposit and start",
          description:
            "After confirmation, you receive the invoice. Work begins after payment.",
        },
        {
          title: "Design and revisions",
          description:
            "The website is provided on a protected test address and includes two revision rounds.",
        },
        {
          title: "Approval and launch",
          description:
            "After approval, you pay the remaining amount and the website goes live.",
        },
      ],
    },

    review: {
      eyebrow: "Client feedback",
      title:
        "Trust built through real collaboration",
      rating: "Client feedback",
      text:
        "We have already had two websites created by TP Digital Lab and are very satisfied with the collaboration. The implementation was professional, reliable and tailored to our requirements.",
      author: "Dmytro Yurchenko",
      source: "Public Google review",
    },

    faq: {
      eyebrow: "Frequently asked questions",
      title:
        "What you should know before starting",
      items: [
        {
          question:
            "How much does a professional website cost?",
          answer:
            "A landing page starts at €490, a business website with up to five pages at €990 and an online store at €1,790. You receive the final fixed price in writing before the project begins.",
        },
        {
          question: "Do I need to call?",
          answer:
            "No. Communication takes place in writing by form, email or WhatsApp.",
        },
        {
          question: "How does payment work?",
          answer:
            "50% is paid before implementation and 50% after approval before launch.",
        },
        {
          question:
            "How many changes are included?",
          answer:
            "Two revision rounds are included. Further changes can be agreed for an additional fee.",
        },
        {
          question:
            "Does the website work on smartphones?",
          answer:
            "Yes. Every website is optimized for smartphones, tablets and desktop computers.",
        },
      ],
    },

    form: {
      eyebrow: "Request a project",
      title:
        "Tell me briefly about your project",
      description:
  "Tell me briefly about your project. I usually reply personally by email within 3–12 hours. If the project is a good fit, you will then receive a written quote with a clear scope and fixed price.",
      firstName: "First name *",
      lastName: "Last name *",
      email: "Email *",
      phone: "Phone (optional)",
      package: "Requested service *",
      packageLaunch:
        "Landing page – from €490",
      packageBusiness:
        "Business website – from €990",
      packageGrowth:
        "Online store – from €1,790",
      packageCustom:
        "Not sure yet / custom request",
      message:
        "Briefly describe your project *",
      privacy: "I have read the",
      privacyLink: "Privacy Policy",
      submit: "Request a no-obligation quote",
      sending: "Sending...",
      requiredError:
        "Please complete all required fields and accept the privacy policy.",
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
      projects: "Работы",
      prices: "Цены",
      process: "Процесс",
      contact: "Заявка",
    },

    hero: {
      eyebrow:
        "Личная разработка сайтов из Мюнхена",
      title:
        "Профессиональный сайт для бизнеса",
      accent: "от 490 €",
      description:
        "Современные быстрые сайты для самозанятых и небольших компаний. Личная работа, понятный процесс и фокус на новых обращениях клиентов.",
      primaryCta:
        "Запросить предложение",
      secondaryCta:
        "Посмотреть работы",
      priceNote:
        "Вводная цена для первых проектов · Лендинги от 490 € · Сайты компаний от 990 €",
      cardTitle:
        "Профессиональное присутствие в интернете",
      cardPrice: "от 490 €",
      cardDescription:
        "Личная работа напрямую со мной — от первого контакта до запуска.",
      cardFeatures: [
        "Письменная фиксированная цена",
        "Индивидуальный дизайн",
        "Адаптация под телефон и компьютер",
        "Базовое SEO и контактная форма",
        "2 раунда правок",
      ],
    },

    trust: [
      "Фиксированная цена письменно до начала",
      "Личное сопровождение из Мюнхена",
      "Общение письменно: форма, email или WhatsApp",
      "Обычно отвечаю в течение 3–12 часов",
    ],

    why: {
      eyebrow: "Почему TP Digital Lab?",
      title:
        "Прямое сотрудничество и понятные договорённости.",
      items: [
        {
          title: "Прямой контакт со мной",
          text:
            "Вы общаетесь со мной напрямую от первой заявки до запуска.",
        },
        {
          title: "Понятные условия",
          text:
            "До начала работы вы получаете письменное предложение с точным объёмом и фиксированной ценой.",
        },
        {
          title:
            "Сайт для новых обращений",
          text:
            "Я уделяю внимание структуре, скорости, мобильной версии и заметному способу связи.",
        },
        {
          title:
            "Всё координирую лично",
          text:
            "Дизайн, техническая реализация и базовое SEO выполняются в одном процессе.",
        },
      ],
    },

    projects: {
      eyebrow: "Работы",
      title:
        "Сайты, которые уже работают",
      description:
        "Два реальных клиентских проекта — без купленных шаблонов и выдуманных кейсов.",
      open: "Открыть сайт",
      items: [
        {
          title: "Exzellentia Constructio",
          category:
            "Сайт компании · Строительство",
          description:
            "Профессиональный сайт компании с SEO-оптимизацией и технической основой для Google Ads.",
          image: "/projects/exzellentia.png",
          url:
            "https://exzellentia-constructio.de",
        },
        {
          title: "GrabProfi",
          category:
            "Лендинг · Локальная услуга",
          description:
            "Понятный лендинг с локальным SEO и прямой связью с клиентами.",
          image: "/projects/grabpflege.png",
          url: "https://grabprofi.de",
        },
      ],
    },

    pricing: {
      eyebrow: "Прозрачные пакеты",
      title:
        "Понятная стартовая цена без скрытых расходов",
      description:
        "Окончательный объём и фиксированная цена письменно согласовываются до начала проекта.",
      from: "от",
      select: "Запросить пакет",
      selected: "Выбрано",
      finalPrice:
        "Дополнительные функции, домен и поддержка при необходимости рассчитываются отдельно.",
    },

    packages: {
      launch: {
        name: "Старт",
        description:
          "Готовый лендинг для самозанятых и небольших компаний.",
        features: [
          "Одна страница с несколькими блоками",
          "1 язык",
          "Индивидуальный дизайн",
          "Базовое SEO",
          "Контактная форма",
          "Настройка GA4",
          "2 раунда правок",
        ],
      },
      business: {
        name: "Бизнес",
        description:
          "Полноценный сайт компании для большей видимости и новых обращений.",
        features: [
          "До 5 страниц",
          "2 языка",
          "Индивидуальный дизайн",
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
          "Профессиональный интернет-магазин с админкой, оплатой и настройкой маркетинга.",
        features: [
          "До 20 товаров",
          "До 3 языков",
          "Панель управления",
          "Интеграция оплаты",
          "Расширенное SEO",
          "GA4 для электронной торговли",
          "Настройка Google Ads",
          "2 месяца технической поддержки",
          "2 раунда правок",
        ],
      },
    },

    process: {
      eyebrow: "Сотрудничество",
      title: "Как проходит проект",
      description:
        "С самого начала вы знаете следующий шаг и момент оплаты.",
      items: [
        {
          title: "Заявка и согласование",
          description:
            "Вы кратко описываете проект, а я письменно уточняю основные вопросы.",
        },
        {
          title:
            "Предложение по фиксированной цене",
          description:
            "Вы получаете письменное предложение с точным объёмом и согласованной ценой.",
        },
        {
          title: "Предоплата и старт",
          description:
            "После подтверждения вы получаете счёт. Работа начинается после оплаты.",
        },
        {
          title: "Дизайн и правки",
          description:
            "Сайт размещается на закрытом тестовом адресе и включает два раунда правок.",
        },
        {
          title: "Приёмка и запуск",
          description:
            "После одобрения вы оплачиваете остаток, и сайт выходит в интернет.",
        },
      ],
    },

    review: {
      eyebrow: "Отзыв клиента",
      title:
        "Доверие через реальную работу",
      rating: "Отзыв клиента",
      text:
        "Мы уже заказали у TP Digital Lab два сайта и очень довольны сотрудничеством. Работа была выполнена профессионально, надёжно и точно по нашим требованиям.",
      author: "Dmytro Yurchenko",
      source: "Публичный отзыв в Google",
    },

    faq: {
      eyebrow: "Частые вопросы",
      title:
        "Что важно знать до начала",
      items: [
        {
          question:
            "Сколько стоит профессиональный сайт?",
          answer:
            "Лендинг стоит от 490 €, сайт компании до пяти страниц — от 990 €, интернет-магазин — от 1 790 €. Окончательная фиксированная цена указывается письменно до начала проекта.",
        },
        {
          question:
            "Нужно ли созваниваться?",
          answer:
            "Нет. Общение проходит письменно через форму, email или WhatsApp.",
        },
        {
          question:
            "Как проходит оплата?",
          answer:
            "50% оплачивается до начала работы и 50% после приёмки перед запуском.",
        },
        {
          question:
            "Сколько правок включено?",
          answer:
            "Включены два раунда правок. Дополнительные изменения можно согласовать отдельно.",
        },
        {
          question:
            "Сайт работает на телефоне?",
          answer:
            "Да. Каждый сайт адаптируется под смартфоны, планшеты и компьютеры.",
        },
      ],
    },

    form: {
      eyebrow: "Заявка на проект",
      title:
        "Кратко расскажите о вашем проекте",
      description:
  "Коротко расскажите о вашем проекте. Обычно я лично отвечаю по электронной почте в течение 3–12 часов. Если проект подходит, вы получите письменное предложение с понятным объёмом работ и фиксированной ценой.",
      firstName: "Имя *",
      lastName: "Фамилия *",
      email: "E-mail *",
      phone: "Телефон (необязательно)",
      package: "Нужная услуга *",
      packageLaunch:
        "Лендинг — от 490 €",
      packageBusiness:
        "Сайт компании — от 990 €",
      packageGrowth:
        "Интернет-магазин — от 1 790 €",
      packageCustom:
        "Пока не уверен / индивидуальный запрос",
      message:
        "Кратко опишите проект *",
      privacy: "Я ознакомился с",
      privacyLink:
        "политикой конфиденциальности",
      submit: "Отправить заявку",
      sending: "Отправка...",
      requiredError:
        "Заполните обязательные поля и подтвердите политику конфиденциальности.",
      securityError:
        "Проверка безопасности ещё не завершена. Попробуйте снова.",
      sendError:
        "Не удалось отправить заявку. Попробуйте ещё раз.",
      configError:
        "Форма временно недоступна. Напишите на info@tpdigitallab.de.",
      responseTime:
        "Обычно отвечаю в течение 3–12 часов.",
    },
  },
};

const inputClassName =
  "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-white/30 hover:border-white/20 focus:border-blue-400/60 focus:bg-white/[0.07]";

const packageIds: Array<
  "launch" | "business" | "growth"
> = ["launch", "business", "growth"];

const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "";

function getQuote(selectedPackage: PackageChoice) {
  if (selectedPackage === "business") {
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
      total: 990,
      monthlyTotal: 0,
    };
  }

  if (selectedPackage === "growth") {
    return {
      packageId: "growth",
      websiteId: "shop",
      languages: ["de", "en", "other"],
      marketing: ["advanced-seo", "ads"],
      branding: [],
      features: ["cms"],
      support: [],
      total: 1790,
      monthlyTotal: 0,
    };
  }

  if (selectedPackage === "custom") {
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
    total: 490,
    monthlyTotal: 0,
  };
}

export default function WebdesignLandingPage() {
  const { language } = useLanguage();
  const t = copy[language];
  const router = useRouter();

  const [selectedPackage, setSelectedPackage] =
    useState<PackageChoice>("launch");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [privacyAccepted, setPrivacyAccepted] =
    useState(false);

  const [turnstileToken, setTurnstileToken] =
    useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submitError, setSubmitError] = useState("");

  const turnstileRef =
    useRef<TurnstileInstance>(null);

  const submissionLock = useRef(false);

  const turnstileSiteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

  function choosePackage(packageId: PackageChoice) {
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

    if (submissionLock.current) return;

    setSubmitError("");

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !message.trim() ||
      !privacyAccepted
    ) {
      setSubmitError(t.form.requiredError);
      return;
    }

    if (!turnstileToken) {
      setSubmitError(t.form.securityError);
      return;
    }

    submissionLock.current = true;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          

          message:
            `[Source: /webdesign]\n${message.trim()}`,

          budget:
            selectedPackage === "launch"
              ? "ab 490 €"
              : selectedPackage === "business"
                ? "ab 990 €"
                : selectedPackage === "growth"
                  ? "ab 1.790 €"
                  : "Noch offen",

          timeline: "",
          discount: false,
          language,
          quote: getQuote(selectedPackage),
          turnstileToken,
        }),
      });

      const result: unknown = await response
        .json()
        .catch(() => null);

      if (
        !response.ok ||
        typeof result !== "object" ||
        result === null ||
        !("success" in result) ||
        result.success !== true
      ) {
        throw new Error("Request failed");
      }
    } catch {
      setTurnstileToken(null);
      setSubmitError(t.form.sendError);

      submissionLock.current = false;
      setIsSubmitting(false);

      turnstileRef.current?.reset();
      return;
    }

    try {
      sessionStorage.setItem(
        "lead_successfully_submitted",
        "true"
      );
    } catch {
      // A blocked analytics marker must not prevent the success page.
    }

    router.push("/thank-you");
  }

  return (
    <>
      <FaqSchema items={t.faq.items} />

      <header className="fixed inset-x-0 top-0 z-50">
        <Container>
          <div className="mt-6 flex items-center justify-between rounded-full border border-white/10 bg-black/60 px-5 py-3 backdrop-blur-xl">
            <Link
              href="/"
              className="leading-none text-white"
            >
              <span className="text-xl font-semibold">
                TP
              </span>

              <span className="ml-2 text-[10px] uppercase tracking-[0.3em] text-white/45">
                Digital Lab
              </span>
            </Link>

            <nav className="hidden items-center gap-6 text-sm text-white/65 md:flex">
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

            <LanguageSwitcher />
          </div>
        </Container>
      </header>

      <main className="relative overflow-hidden bg-[#050505] text-white">
        <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-32">
          <BackgroundGrid />

          <Container>
            <div className="relative z-10 grid gap-12 pb-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-blue-300/70">
                  {t.hero.eyebrow}
                </p>

                <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
                  {t.hero.title}
                  <br />
                  <span className="text-white/65">
                    {t.hero.accent}
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
                  {t.hero.description}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#anfrage"
                    className="rounded-full bg-blue-500 px-6 py-4 font-semibold text-white transition hover:bg-blue-400"
                  >
                    {t.hero.primaryCta} →
                  </a>

                  <a
                    href="#projekte"
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    {t.hero.secondaryCta} →
                  </a>
                </div>

                <p className="mt-5 text-sm text-white/35">
                  {t.hero.priceNote}
                </p>

                <div className="mt-8 grid gap-3 text-sm text-white/55 sm:grid-cols-2">
                  {t.trust.map((item) => (
                    <div
                      key={item}
                      className="flex gap-2"
                    >
                      <span className="text-blue-300">
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-white/15 bg-white/[0.05] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                  {t.hero.cardTitle}
                </p>

                <p className="mt-7 text-5xl font-semibold">
                  {t.hero.cardPrice}
                </p>

                <p className="mt-5 leading-7 text-white/55">
                  {t.hero.cardDescription}
                </p>

                <div className="mt-8 space-y-4 border-t border-white/10 pt-7">
                  {t.hero.cardFeatures.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 text-white/75"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400" />
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href="#anfrage"
                  className="mt-8 inline-flex w-full justify-center rounded-full bg-blue-500 px-6 py-4 font-semibold transition hover:bg-blue-400"
                >
                  {t.hero.primaryCta}
                </a>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025] py-24">
          <Container>
            <p className="text-xs uppercase tracking-[0.35em] text-blue-300/70">
              {t.why.eyebrow}
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              {t.why.title}
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {t.why.items.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
                >
                  <span className="text-sm text-blue-300">
                    0{index + 1}
                  </span>

                  <h3 className="mt-8 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white/55">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section
          id="preise"
          className="scroll-mt-24 py-24 md:py-32"
        >
          <Container>
            <p className="text-xs uppercase tracking-[0.35em] text-blue-300/70">
              {t.pricing.eyebrow}
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              {t.pricing.title}
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
              {t.pricing.description}
            </p>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {packageIds.map((packageId) => {
                const packageText =
                  t.packages[packageId];

                const price =
                  packageId === "launch"
                    ? "490 €"
                    : packageId === "business"
                      ? "990 €"
                      : "1.790 €";

                const selected =
                  selectedPackage === packageId;

                return (
                  <article
                    key={packageId}
                    className={`rounded-[30px] border p-7 ${
                      packageId === "business"
                        ? "border-blue-400/40 bg-blue-500/[0.08]"
                        : "border-white/10 bg-white/[0.04]"
                    }`}
                  >
                    {packageId === "business" && (
  <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs text-blue-300">
    {language === "de"
      ? "Für Ihren Firmenauftritt"
      : language === "en"
        ? "For your business website"
        : "Для сайта вашей компании"}
  </span>
)}

                    <h3 className="mt-6 text-3xl font-semibold">
                      {packageText.name}
                    </h3>

                    <p className="mt-4 text-5xl font-semibold">
                      {t.pricing.from} {price}
                    </p>

                    <p className="mt-5 leading-7 text-white/55">
                      {packageText.description}
                    </p>

                    <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                      {packageText.features.map(
                        (feature) => (
                          <div
                            key={feature}
                            className="flex gap-3 text-sm text-white/75"
                          >
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400" />
                            {feature}
                          </div>
                        )
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        choosePackage(packageId)
                      }
                      className={`mt-8 w-full rounded-full px-6 py-4 font-semibold transition ${
                        selected
                          ? "bg-blue-500"
                          : "border border-white/15 bg-white/[0.06] hover:bg-white/[0.12]"
                      }`}
                    >
                      {selected
                        ? t.pricing.selected
                        : t.pricing.select}
                    </button>
                  </article>
                );
              })}
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-white/40">
              {t.pricing.finalPrice}
            </p>
          </Container>
        </section>

        <section
          id="projekte"
          className="scroll-mt-24 border-y border-white/10 bg-white/[0.025] py-24 md:py-32"
        >
          <Container>
            <p className="text-xs uppercase tracking-[0.35em] text-blue-300/70">
              {t.projects.eyebrow}
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              {t.projects.title}
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
              {t.projects.description}
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {t.projects.items.map((project) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-white/45">
                      {project.category}
                    </p>

                    <p className="mt-4 leading-7 text-white/60">
                      {project.description}
                    </p>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-white transition hover:text-blue-300"
                    >
                      {t.projects.open}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section
          id="ablauf"
          className="scroll-mt-24 py-24 md:py-32"
        >
          <Container>
            <p className="text-xs uppercase tracking-[0.35em] text-blue-300/70">
              {t.process.eyebrow}
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              {t.process.title}
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
              {t.process.description}
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {t.process.items.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
                    {index + 1}
                  </span>

                  <h3 className="mt-6 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-white/10 bg-gradient-to-br from-blue-500/[0.09] via-white/[0.025] to-transparent py-24">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-blue-300/70">
                {t.review.eyebrow}
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                {t.review.title}
              </h2>

              <blockquote className="mt-8 text-xl leading-9 text-white/75">
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
              <p className="text-xs uppercase tracking-[0.35em] text-blue-300/70">
                {t.faq.eyebrow}
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                {t.faq.title}
              </h2>

              <div className="mt-10 space-y-4">
                {t.faq.items.map((item) => (
                  <details
                    key={item.question}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
                  >
                    <summary className="cursor-pointer pr-6 text-lg font-medium">
                      {item.question}
                    </summary>

                    <p className="mt-4 leading-7 text-white/55">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section
          id="anfrage"
          className="scroll-mt-24 border-t border-white/10 bg-white/[0.025] py-24 md:py-32"
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-blue-300/70">
                  {t.form.eyebrow}
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                  {t.form.title}
                </h2>

                <p className="mt-5 text-lg leading-8 text-white/55">
                  {t.form.description}
                </p>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-white/55">
                  <p className="font-medium text-white">
                    info@tpdigitallab.de
                  </p>

                  <p className="mt-2">
                    {t.form.responseTime}
                  </p>

                  {whatsappUrl && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-white underline underline-offset-4"
                    >
                      WhatsApp
                    </a>
                  )}

                  <div className="mt-5 flex items-center gap-3 text-white/45">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    München, Deutschland
                  </div>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-[32px] border border-white/15 bg-black/35 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-9"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    name="firstName"
                    value={firstName}
                    onChange={(event) =>
                      setFirstName(event.target.value)
                    }
                    placeholder={t.form.firstName}
                    aria-label={t.form.firstName}
                    autoComplete="given-name"
                    maxLength={100}
                    required
                    className={inputClassName}
                  />

                  <input
                    name="lastName"
                    value={lastName}
                    onChange={(event) =>
                      setLastName(event.target.value)
                    }
                    placeholder={t.form.lastName}
                    aria-label={t.form.lastName}
                    autoComplete="family-name"
                    maxLength={100}
                    required
                    className={inputClassName}
                  />

                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder={t.form.email}
                    aria-label={t.form.email}
                    autoComplete="email"
                    maxLength={254}
                    required
                    className={inputClassName}
                  />


                  <select
                    name="package"
                    value={selectedPackage}
                    onChange={(event) =>
                      setSelectedPackage(
                        event.target.value as PackageChoice
                      )
                    }
                    aria-label={t.form.package}
                    required
                    className={`${inputClassName} sm:col-span-2`}
                  >
                    <option
                      value="launch"
                      className="bg-zinc-950"
                    >
                      {t.form.packageLaunch}
                    </option>

                    <option
                      value="business"
                      className="bg-zinc-950"
                    >
                      {t.form.packageBusiness}
                    </option>

                    <option
                      value="growth"
                      className="bg-zinc-950"
                    >
                      {t.form.packageGrowth}
                    </option>

                    <option
                      value="custom"
                      className="bg-zinc-950"
                    >
                      {t.form.packageCustom}
                    </option>
                  </select>

                  <textarea
                    name="message"
                    value={message}
                    onChange={(event) =>
                      setMessage(event.target.value)
                    }
                    placeholder={t.form.message}
                    aria-label={t.form.message}
                    rows={6}
                    maxLength={1800}
                    required
                    className={`${inputClassName} resize-y sm:col-span-2`}
                  />
                </div>

                <div className="mt-7 flex justify-center">
                  {turnstileSiteKey ? (
                    <Turnstile
                      ref={turnstileRef}
                      id="webdesign-lead-turnstile"
                      siteKey={turnstileSiteKey}
                      onSuccess={(token) => {
                        setTurnstileToken(token);
                      }}
                      onExpire={() =>
                        setTurnstileToken(null)
                      }
                      onError={() =>
                        setTurnstileToken(null)
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
                      {t.form.configError}
                    </p>
                  )}
                </div>

                <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-white/50">
                  <input
                    type="checkbox"
                    checked={privacyAccepted}
                    onChange={(event) =>
                      setPrivacyAccepted(
                        event.target.checked
                      )
                    }
                    className="mt-1 h-4 w-4 shrink-0 accent-blue-500"
                  />

                  <span>
                    {t.form.privacy}{" "}
                    <Link
                      href="/datenschutzerklaerung"
                      className="text-white/80 underline underline-offset-4"
                    >
                      {t.form.privacyLink}
                    </Link>
                    .
                  </span>
                </label>

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
                    !turnstileSiteKey ||
                    !privacyAccepted
                  }
                  className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-blue-500 px-7 py-4 font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting
                    ? t.form.sending
                    : t.form.submit}

                  {!isSubmitting && (
                    <span className="ml-3">→</span>
                  )}
                </button>
              </form>
            </div>
          </Container>
        </section>
      </main>

            <MobileLeadBar />
      <Footer />
    </>
  );
}