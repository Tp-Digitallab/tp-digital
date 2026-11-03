import type { Metadata } from "next";
import { homePath, type Locale } from "@/lib/locale-paths";

export const siteUrl = "https://tpdigitallab.de";

export const homeLanguages = {
  de: `${siteUrl}/`,
  en: `${siteUrl}/en`,
  ru: `${siteUrl}/ru`,
  "x-default": `${siteUrl}/`,
};

const homeCopy = {
  de: {
    title: "Webdesign München für kleine Unternehmen | TP Digital Lab",
    description: "Websites für Selbstständige und kleine Unternehmen: Landingpage ab 300 €, Firmenwebsite ab 790 €. Persönlich aus München, deutschlandweit. Arbeiten ansehen und Festpreis anfragen.",
    locale: "de_DE",
  },
  en: {
    title: "Web Design Munich for Small Businesses | TP Digital Lab",
    description: "Custom websites for small businesses in Munich and across Germany. Landing pages from €300, business websites from €790. View projects and request a fixed-price quote.",
    locale: "en_US",
  },
  ru: {
    title: "Создание сайтов в Мюнхене и Германии | TP Digital Lab",
    description: "Разработка сайтов для малого бизнеса в Мюнхене и по всей Германии. Лендинг от 300 €, сайт компании от 790 €. Посмотрите работы и запросите фиксированную стоимость.",
    locale: "ru_RU",
  },
};

export function homeMetadata(locale: Locale): Metadata {
  const copy = homeCopy[locale];
  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: { canonical: homePath(locale), languages: homeLanguages },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: `${siteUrl}${homePath(locale)}`,
      siteName: "TP Digital Lab",
      locale: copy.locale,
      alternateLocale: Object.values(homeCopy).map(item => item.locale).filter(item => item !== copy.locale),
      type: "website",
      images: [{ url: "/opengraph-image.png", width: 1731, height: 909, alt: copy.title }],
    },
    twitter: { card: "summary_large_image", title: copy.title, description: copy.description, images: ["/opengraph-image.png"] },
  };
}
