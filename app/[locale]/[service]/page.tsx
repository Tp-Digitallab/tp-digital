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
      "Website erstellen lassen ab 490 € | TP Digital Lab München",
    description:
      "Professionelle Websites für kleine Unternehmen: Landingpage ab 490 €, Firmenwebsite ab 990 €. Persönlich aus München, schriftlicher Festpreis und unverbindliches Angebot.",
  },
  en: {
    title:
      "Professional website from €490 | TP Digital Lab Munich",
    description:
      "Professional websites for small businesses: landing pages from €490 and business websites from €990. Personal implementation from Munich and a written no-obligation quote.",
  },
  ru: {
    title:
      "Создание сайта от 490 € | TP Digital Lab, Мюнхен",
    description:
      "Профессиональные сайты для небольших компаний: лендинг от 490 €, сайт компании от 990 €. Личная разработка из Мюнхена и письменное предложение без обязательств.",
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
  const serviceKey = serviceKeys[service];
  const pageUrl = `https://tpdigitallab.de${getLocalizedPath(
    locale,
    service,
  )}`;

  const title =
    service === "webdesign"
      ? webdesignMetadata[locale].title
      : `${servicePageTranslations[serviceKey][locale].title} ${servicePageTranslations[serviceKey][locale].accent}`;

  const description =
    service === "webdesign"
      ? webdesignMetadata[locale].description
      : servicePageTranslations[serviceKey][locale]
          .description;

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
      respectSavedLanguage={false}
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