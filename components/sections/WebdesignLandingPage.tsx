"use client";
import { packageTranslations } from "@/config/packageTranslations";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { useState } from "react";
import LeadForm, { type PackageChoice } from "@/components/contact/LeadForm";
import ProjectPreview from "@/components/portfolio/ProjectPreview";
import { homePath } from "@/lib/locale-paths";
import Link from "next/link";
import MobileLeadBar from "@/components/ui/MobileLeadBar";
import {
  CheckCircle2,
  MapPin,
} from "lucide-react";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import Container from "@/components/common/Container";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/components/providers/LanguageProvider";
import FaqSchema from "@/components/seo/FaqSchema";

type Language = "de" | "en" | "ru";

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
        "Websites für Ihr Unternehmen.",
      accent: "ab 300 €",
      description:
        "Individuell gestaltet, mobil optimiert. Damit Kunden Ihr Angebot verstehen und Sie erreichen.",
      primaryCta:
        "Projekt anfragen",
      secondaryCta:
        "Arbeiten ansehen",
      priceNote:
        "Umfang und Festpreis vor dem Start.",
      cardTitle:
        "Das ist dabei",
      cardPrice: "ab 300 €",
      cardDescription:
        "",
      cardFeatures: [
  "Individuelles Design",
  "Mobil optimiert",
  "Basis-SEO und Kontaktformular",
  "2 Korrekturrunden"
],
    },

    trust: [
      "Festpreis schriftlich vor Projektstart",
      "Persönliche Betreuung aus München",
      "Kommunikation per E-Mail oder WhatsApp",
    ],

    why: {
      eyebrow: "Warum TP Digital Lab?",
      title:
        "Direkte Zusammenarbeit mit klaren Vereinbarungen.",
      items: [
        {
          title: "Direkter Kontakt mit mir",
          text:
            "Sie schreiben direkt mit mir – vom ersten Kontakt bis zum Livegang.",
        },
        {
          title: "Klare Vereinbarungen",
          text:
            "Sie erhalten vor dem Start ein schriftliches Angebot mit Festpreis.",
        },
        {
          title: "Für Kundenanfragen entwickelt",
          text:
            "Klare Inhalte, schnelle Ladezeiten und ein gut sichtbarer Kontaktweg.",
        },
        {
          title: "Alles aus einer Hand",
          text:
            "Design, Technik und Basis-SEO aus einer Hand.",
        },
      ],
    },

    projects: {
      eyebrow: "Referenzen",
      title:
        "Meine Arbeit.",
      description:
        "",
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
      eyebrow: "Leistungen & Preise",
      title:
        "Die passende Website.",
      description:
        "Startpreise für einen klar vereinbarten Umfang.",
      from: "ab",
      select: "Paket anfragen",
      selected: "Ausgewählt",
      finalPrice:
        "Domain, Hosting und externe Gebühren separat. Extras nach Absprache.",
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
          "1 Sprache",
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
          "1 Sprache",
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
        "Klare Schritte, schriftliche Abstimmung und ein transparenter Festpreis.",
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
        "Kurz erklärt.",
      items: [
        {
          question:
            "Wie viel kostet eine professionelle Website?",
          answer:
            "Eine Landingpage startet bei 300 €. Eine Unternehmenswebsite mit bis zu fünf Seiten startet bei 790 €. Ein Online-Shop startet bei 1.500 €. Den endgültigen Festpreis erhalten Sie vor Projektbeginn schriftlich im Angebot.",
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
      title: "Was brauchen Sie?",
      description: "Beschreiben Sie kurz Ihr Projekt. Ich antworte persönlich per E-Mail.",
      responseTime: "Antwort in der Regel innerhalb von 3–12 Stunden.",
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
        "Websites for your business.",
      accent: "from €300",
      description:
        "Custom design, built for mobile. Help customers understand your offer and get in touch.",
      primaryCta:
  "Discuss your project",
      secondaryCta:
        "View my work",
      priceNote:
        "Scope and fixed price agreed before work starts.",
      cardTitle:
        "What is included",
      cardPrice: "from €300",
      cardDescription:
        "",
      cardFeatures: [
  "Custom design",
  "Mobile-friendly",
  "Basic SEO and contact form",
  "2 revision rounds"
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
        "My work.",
      description:
        "",
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
      eyebrow: "Services & pricing",
      title:
        "Choose your website.",
      description:
        "Starting prices for a clearly agreed scope.",
      from: "from",
      select: "Request this package",
      selected: "Selected",
      finalPrice:
        "Domain, hosting and external fees separate. Extras agreed in advance.",
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
          "1 language",
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
          "1 language",
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
        "Your questions answered.",
      items: [
        {
          question:
            "How much does a professional website cost?",
          answer:
            "A landing page starts at €300, a business website with up to five pages at €790 and an online store at €1,500. You receive the final fixed price in writing before the project begins.",
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
      title: "What do you need?",
      description: "Briefly describe your project. I will reply personally by email.",
      responseTime: "Usually replies within 3–12 hours.",
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
        "Сайты для вашего бизнеса.",
      accent: "от 300 €",
      description:
        "Индивидуальный дизайн и удобная мобильная версия. Клиенты быстро поймут ваше предложение и свяжутся с вами.",
      primaryCta:
        "Обсудить проект",
      secondaryCta:
        "Посмотреть работы",
      priceNote:
        "Объём и фиксированная цена — до начала работ.",
      cardTitle:
        "Что входит",
      cardPrice: "от 300 €",
      cardDescription:
        "",
      cardFeatures: [
  "Индивидуальный дизайн",
  "Мобильная версия",
  "Базовое SEO и форма связи",
  "2 раунда правок"
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
        "Мои работы.",
      description:
        "",
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
      eyebrow: "Услуги и цены",
      title:
        "Сайт под вашу задачу.",
      description:
        "Стартовые цены для согласованного объёма.",
      from: "от",
      select: "Запросить пакет",
      selected: "Выбрано",
      finalPrice:
        "Домен, хостинг и внешние сервисы — отдельно. Дополнения по согласованию.",
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
          "1 язык",
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
          "1 язык",
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
        "Частые вопросы.",
      items: [
        {
          question:
            "Сколько стоит профессиональный сайт?",
          answer:
            "Лендинг стоит от 300 €, сайт компании до пяти страниц — от 790 €, интернет-магазин — от 1 500 €. Окончательная фиксированная цена указывается письменно до начала проекта.",
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
      title: "Что вам нужно?",
      description: "Коротко опишите проект. Я лично отвечу по почте.",
      responseTime: "Обычно отвечаю в течение 3–12 часов.",
    },
  },
};

const packageIds: Array<
  "launch" | "business" | "growth"
> = ["launch", "business", "growth"];

const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "";

export default function WebdesignLandingPage() {
  const { language } = useLanguage();
  const t = copy[language];

  const [selectedPackage, setSelectedPackage] =
    useState<PackageChoice>("custom");

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

  return (
    <>
      <FaqSchema items={t.faq.items} />

      <header className="fixed inset-x-0 top-0 z-50">
        <Container>
          <div className="mt-6 flex items-center justify-between rounded-full border border-white/10 bg-black/60 px-5 py-3 backdrop-blur-xl">
            <Link
              href={homePath(language)}
              aria-label="TP Digital Lab"
              className="shrink-0 rounded-full border border-white/10 bg-[#f7f5f3]/85 px-4 py-2.5 shadow-[0_18px_55px_rgba(23,42,57,0.12)] backdrop-blur-2xl"
            >
              <span className="whitespace-nowrap text-[17px] tracking-tight text-white">
                <span className="font-bold">TP</span>
                <span className="hidden font-semibold min-[360px]:inline"> Digital Lab</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-6 text-sm font-semibold text-white/85 md:flex">
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
                href="#faq"
                className="transition hover:text-white"
              >
                FAQ
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

      <main className="service-copy home-atmosphere text-white">
        <section className="relative pt-28 sm:pt-36">


          <Container>
            <div className="relative z-10 grid min-w-0 gap-8 pb-14 sm:gap-12 sm:pb-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase leading-5 tracking-[0.1em] text-blue-300">
                  {t.hero.eyebrow}
                </p>

                <h1 className="mt-6 max-w-4xl text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
                  {t.hero.title}
                  <br />
                  <span className="text-white/65">
                    {t.hero.accent}
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
                  {t.hero.description}
                </p>

                <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                  <a
                    href="#anfrage"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-400 sm:text-base"
                  >
                    {t.hero.primaryCta}
                  </a>

                  <a
                    href="#projekte"
                    className="inline-flex min-h-11 items-center justify-center text-sm text-white/70 transition hover:text-white"
                  >
                    {t.hero.secondaryCta}
                  </a>
                </div>

                <p className="mt-5 text-sm text-white/35">
                  {t.hero.priceNote}
                </p>

                <div className="mt-6 grid gap-2 text-sm text-white/65">
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

              <div className="min-w-0 rounded-[24px] border border-white/15 bg-[#f7f5f3]/70 p-5 sm:rounded-[32px] sm:p-7 shadow-[0_30px_100px_rgba(23,42,57,0.12)] backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                  {t.hero.cardTitle}
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


              </div>
            </div>
          </Container>
        </section>

        <section
          id="preise"
          className="scroll-mt-24 py-16 md:py-24"
        >
          <Container>
            <p className="text-sm font-semibold uppercase leading-5 tracking-[0.1em] text-blue-300">
              {t.pricing.eyebrow}
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {t.pricing.title}
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/55">
              {t.pricing.description}
            </p>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {packageIds.map((packageId) => {
                const packageText =
                  packageTranslations[language].packages[packageId];

                const price =
                  packageId === "launch"
                    ? "300 €"
                    : packageId === "business"
                      ? "790 €"
                      : "1.500 €";

                const selected =
                  selectedPackage === packageId;

                return (
                  <article
                    key={packageId}
                    className={`rounded-[30px] border p-7 ${
                      packageId === "business"
                        ? "border-blue-400/40 bg-blue-500/[0.08]"
                        : "border-white/10 bg-[#f7f5f3]/70"
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
                      {packageText.features.slice(0, 3).map(
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

                    <details className="mt-5 border-t border-white/10 pt-3 text-sm text-white/75">
                      <summary className="cursor-pointer py-2 font-medium text-blue-200">
                        {language === "de" ? "Alle Leistungen" : language === "en" ? "All included services" : "Что ещё входит"}
                      </summary>
                      <ul className="mt-3 space-y-2">
                        {packageText.features.slice(3).map((feature) => (
                          <li key={feature} className="flex gap-3 leading-6">
                            <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-400" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </details>

                    <button
                      type="button"
                      onClick={() =>
                        choosePackage(packageId)
                      }
                      className={`mt-8 w-full rounded-full px-6 py-4 font-semibold transition ${
                        selected
                          ? "bg-blue-500"
                          : "border border-white/15 bg-[#f7f5f3]/70 hover:bg-white/[0.12]"
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
          className="scroll-mt-24 border-y border-white/10 bg-[#f7f5f3]/70 py-16 md:py-24"
        >
          <Container>
            <p className="text-sm font-semibold uppercase leading-5 tracking-[0.1em] text-blue-300">
              {t.projects.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {t.projects.title}
            </h2>



            <div className="mt-10"><ProjectPreview /></div>
          </Container>
        </section>

                <ReviewsSection />

        <section id="faq" className="scroll-mt-24 py-16 md:py-24">
          <Container>
            <div className="mx-auto max-w-5xl">
              <p className="text-sm font-semibold uppercase leading-5 tracking-[0.1em] text-blue-300">
                {t.faq.eyebrow}
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                {t.faq.title}
              </h2>

              <div className="mt-10 space-y-4">
                {t.faq.items.map((item) => (
                  <details
                    key={item.question}
                    className="rounded-2xl border border-white/10 bg-[#f7f5f3]/70 p-6"
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
          className="scroll-mt-24 border-t border-white/10 bg-[#f7f5f3]/70 py-16 md:py-24"
        >
          <span id="anfrage-aenderungen" className="block scroll-mt-24" aria-hidden="true" />
          <span id="anfrage-launch" className="block scroll-mt-24" aria-hidden="true" />
          <span id="anfrage-business" className="block scroll-mt-24" aria-hidden="true" />
          <span id="anfrage-growth" className="block scroll-mt-24" aria-hidden="true" />
          <Container>
            <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-12 lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase leading-5 tracking-[0.1em] text-blue-300">
                  {t.form.eyebrow}
                </p>

                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  {t.form.title}
                </h2>

                <p className="mt-5 text-lg leading-8 text-white/55">
                  {t.form.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/75 lg:hidden">
                  <a href="mailto:info@tpdigitallab.de" className="underline underline-offset-4">E-Mail</a>
                  {whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">WhatsApp</a>}
                </div>

                <div className="mt-8 hidden rounded-2xl border border-white/10 bg-[#f7f5f3]/70 p-5 text-sm leading-6 text-white/55 lg:block">
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

              <LeadForm selectedPackage={selectedPackage} onPackageChange={setSelectedPackage} />
            </div>
          </Container>
        </section>
      </main>

            <MobileLeadBar />
      <Footer />
    </>
  );
}
