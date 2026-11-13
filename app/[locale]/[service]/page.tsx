import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ServicePage from "@/components/sections/ServicePage";
import WebdesignLandingPage from "@/components/sections/WebdesignLandingPage";
import LanguageProvider from "@/components/providers/LanguageProvider";
import ServiceSchema from "@/components/seo/ServiceSchema";
import {
  servicePageTranslations,
  type ServicePageKey,
} from "@/config/servicePageTranslations";

type Locale = "de" | "en" | "ru";

type ServiceSlug =
  | "webdesign"
  | "seo"
  | "online-shop"
  | "digitale-loesungen";

const locales: Locale[] = [
  "de",
  "en",
  "ru",
];

const serviceSlugs: ServiceSlug[] = [
  "webdesign",
  "seo",
  "online-shop",
  "digitale-loesungen",
];

const serviceKeys: Record<
  ServiceSlug,
  ServicePageKey
> = {
  webdesign: "webdesign",
  seo: "seo",
  "online-shop": "onlineShop",
  "digitale-loesungen":
    "digitalSolutions",
};

const localeOpenGraph: Record<
  Locale,
  string
> = {
  de: "de_DE",
  en: "en_US",
  ru: "ru_RU",
};

const webdesignMetadata = {
  de: {
    title:
      "Webdesign München: Website erstellen für 300 € | TP Digital Lab",
    description:
      "Websites für kleine Unternehmen aus München. Landingpage für 300 €, Firmenwebsite für 790 €. Persönliche Umsetzung und schriftliches Festpreis-Angebot.",
  },
  en: {
    title:
      "Web Design Munich: Business Websites for €300 | TP Digital Lab",
    description:
      "Professional websites for small businesses: landing pages for €300 and business websites for €790. Personal implementation from Munich and a written no-obligation quote.",
  },
  ru: {
    title:
      "Создание сайтов в Мюнхене и Германии за 300 € | TP Digital Lab",
    description:
      "Разработка сайтов для малого бизнеса в Мюнхене и по всей Германии. Лендинг за 300 €, сайт компании за 790 €. Общение на русском и фиксированная стоимость.",
  },
} as const;

const serviceMetadata = {
  seo: {
    de: { title: "Technisches SEO-Audit: erste Prüfung kostenlos | TP Digital Lab", description: "Warum bringt Ihre Website keine Anfragen? Ich prüfe Indexierung, Ladezeit, Titel und Handy-Ansicht und sage Ihnen, was zuerst zu tun ist. Erstprüfung kostenlos, danach Festpreis." },
    en: { title: "SEO Audit & Website Optimization Munich | TP Digital Lab", description: "Technical SEO audits, on-page improvements and Google Search Console support for small businesses in Munich and across Germany. Clear scope and a written action plan." },
    ru: { title: "SEO-аудит и продвижение сайтов в Германии | TP Digital Lab", description: "Технический SEO-аудит, оптимизация страниц и помощь с Google Search Console для малого бизнеса в Германии. Общение на русском, понятный план работ." },
  },
  "online-shop": {
    de: { title: "Onlineshop erstellen lassen für 1.500 € | TP Digital Lab München", description: "Onlineshop für kleine Unternehmen: bis zu 20 Produkte im Einstiegspaket, Warenkorb und vereinbarte Zahlungsanbindung. Entwicklung aus München, Festpreis vor dem Start." },
    en: { title: "Online Store Development for €1,500 | TP Digital Lab Munich", description: "Online stores for small businesses in Germany. Starter scope with up to 20 products, a shopping cart and an agreed payment integration. Request a fixed-price quote." },
    ru: { title: "Создание интернет-магазина в Германии за 1 500 € | TP Digital Lab", description: "Разработка интернет-магазинов для малого бизнеса в Германии: до 20 товаров в стартовом пакете, корзина и согласованная интеграция оплаты. Общение на русском." },
  },
  "digitale-loesungen": {
    de: { title: "Website überarbeiten & Fehler beheben | TP Digital Lab München", description: "Kontaktformular reparieren, mobile Ansicht verbessern oder eine Funktion ergänzen. Hilfe für bestehende Websites aus München, auch für kleine Aufgaben zum vereinbarten Festpreis." },
    en: { title: "Website Fixes & Improvements | TP Digital Lab Munich", description: "Fix contact forms, improve mobile layouts or add a feature to your website. Personal help from Munich for small businesses, with the scope and price agreed before work begins." },
    ru: { title: "Доработка и исправление сайтов в Германии | TP Digital Lab", description: "Исправлю форму заявки, мобильную версию или добавлю нужную функцию на сайт. Помощь малому бизнесу в Германии, общение на русском и согласованная стоимость." },
  },
} as const;

function isLocale(
  value: string,
): value is Locale {
  return locales.includes(
    value as Locale,
  );
}

function isServiceSlug(
  value: string,
): value is ServiceSlug {
  return serviceSlugs.includes(
    value as ServiceSlug,
  );
}

function getLocalizedPath(
  locale: Locale,
  service: ServiceSlug,
) {
  return `/${locale}/${service}`;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    serviceSlugs.map((service) => ({
      locale,
      service,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    locale: string;
    service: string;
  }>;
}): Promise<Metadata> {
  const {
    locale: localeParam,
    service: serviceParam,
  } = await params;

  if (
    !isLocale(localeParam) ||
    !isServiceSlug(serviceParam)
  ) {
    return {};
  }

  const locale = localeParam;
  const service = serviceParam;
  const pageUrl = `https://tpdigitallab.de${getLocalizedPath(
    locale,
    service,
  )}`;

  const title =
    service === "webdesign"
      ? webdesignMetadata[locale].title
      : serviceMetadata[service][locale].title;

  const description =
    service === "webdesign"
      ? webdesignMetadata[locale].description
      : serviceMetadata[service][locale].description;

  return {
    title: {
      absolute: title,
    },

    description,

    alternates: {
      canonical: getLocalizedPath(
        locale,
        service,
      ),

      languages: {
        "x-default": getLocalizedPath("de", service),
        de: getLocalizedPath(
          "de",
          service,
        ),
        en: getLocalizedPath(
          "en",
          service,
        ),
        ru: getLocalizedPath(
          "ru",
          service,
        ),
      },
    },

    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "TP Digital Lab",
      locale: localeOpenGraph[locale],
      type: "website",

      images: [
        {
          url: "/opengraph-image.png",
          width: 1731,
          height: 909,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image.png"],
    },
  };
}

export default async function LocalizedServicePage({
  params,
}: {
  params: Promise<{
    locale: string;
    service: string;
  }>;
}) {
  const {
    locale: localeParam,
    service: serviceParam,
  } = await params;

  if (
    !isLocale(localeParam) ||
    !isServiceSlug(serviceParam)
  ) {
    notFound();
  }

  const locale = localeParam;
  const service = serviceParam;
  const serviceKey = serviceKeys[service];

  const content =
    servicePageTranslations[serviceKey][locale];

  const pageUrl = `https://tpdigitallab.de${getLocalizedPath(
    locale,
    service,
  )}`;

  return (
    <LanguageProvider
      initialLanguage={locale}
      respectSavedLanguage={true}
    >
      <ServiceSchema
        name={`${content.title} ${content.accent}`}
        description={content.description}
        url={pageUrl}
      />

      {service === "webdesign" ? (
        <WebdesignLandingPage />
      ) : (
        <ServicePage serviceKey={serviceKey} />
      )}
    </LanguageProvider>
  );
}
