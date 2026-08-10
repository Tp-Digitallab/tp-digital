import type { Metadata } from "next";

import ServiceSchema from "@/components/seo/ServiceSchema";
import ServicePage from "@/components/sections/ServicePage";

const title =
  "Professionelles Webdesign für Unternehmen";

const description =
  "TP Digital Lab erstellt moderne, schnelle und SEO-optimierte Websites für Unternehmen, die Vertrauen schaffen und neue Kunden gewinnen.";

export const metadata: Metadata = {
  title,
  description,

  alternates: {
    canonical: "/webdesign",
  },

  openGraph: {
    title: `${title} | TP Digital Lab`,
    description,
    url:
      "https://tpdigitallab.de/webdesign",
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
          "Professionelles Webdesign – TP Digital Lab",
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
        name="Professionelles Webdesign für Unternehmen"
        description="TP Digital Lab entwickelt moderne, schnelle und SEO-optimierte Websites für Unternehmen."
        url="https://tpdigitallab.de/webdesign"
      />

      <ServicePage
        serviceKey="webdesign"
      />
    </>
  );
}