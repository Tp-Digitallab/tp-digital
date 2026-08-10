import type { Metadata } from "next";

import ServiceSchema from "@/components/seo/ServiceSchema";
import ServicePage from "@/components/sections/ServicePage";

const title =
  "Digitale Lösungen für Unternehmen";

const description =
  "TP Digital Lab entwickelt individuelle Webanwendungen, Automatisierungen und digitale Systeme für effizientere Geschäftsprozesse.";

export const metadata: Metadata = {
  title,
  description,

  alternates: {
    canonical:
      "/digitale-loesungen",
  },

  openGraph: {
    title: `${title} | TP Digital Lab`,
    description,
    url:
      "https://tpdigitallab.de/digitale-loesungen",
    siteName: "TP Digital Lab",
    locale: "de_DE",
    type: "website",

    images: [
      {
        url:
          "/opengraph-image.png",
        width: 1731,
        height: 909,
        alt:
          "Digitale Lösungen – TP Digital Lab",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",
    title:
      `${title} | TP Digital Lab`,
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
        name="Digitale Lösungen für Unternehmen"
        description="Individuelle digitale Lösungen, Webentwicklung, Automatisierungen und moderne Anwendungen für Unternehmen."
        url="https://tpdigitallab.de/digitale-loesungen"
      />

      <ServicePage
        serviceKey="digitalSolutions"
      />
    </>
  );
}