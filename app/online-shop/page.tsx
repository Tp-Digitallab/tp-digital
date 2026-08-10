import type { Metadata } from "next";

import ServiceSchema from "@/components/seo/ServiceSchema";
import ServicePage from "@/components/sections/ServicePage";

const title =
  "Online-Shop erstellen lassen in Deutschland";

const description =
  "Professionelle Online-Shop-Entwicklung für Unternehmen. TP Digital Lab erstellt moderne, schnelle und verkaufsstarke E-Commerce-Lösungen.";

export const metadata: Metadata = {
  title,
  description,

  alternates: {
    canonical: "/online-shop",
  },

  openGraph: {
    title: `${title} | TP Digital Lab`,
    description,
    url: "https://tpdigitallab.de/online-shop",
    siteName: "TP Digital Lab",
    locale: "de_DE",
    type: "website",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1731,
        height: 909,
        alt:
          "Online-Shop-Entwicklung – TP Digital Lab",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${title} | TP Digital Lab`,
    description,
    images: [
      "/opengraph-image.png",
    ],
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema
        name="Online-Shop-Entwicklung Deutschland"
        description="Professionelle E-Commerce-Lösungen für Unternehmen. TP Digital Lab entwickelt moderne Online-Shops mit Fokus auf Performance, Benutzerfreundlichkeit und digitale Verkäufe."
        url="https://tpdigitallab.de/online-shop"
      />

      <ServicePage
        serviceKey="onlineShop"
      />
    </>
  );
}