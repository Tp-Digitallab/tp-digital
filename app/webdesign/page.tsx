import type { Metadata } from "next";

import ServiceSchema from "@/components/seo/ServiceSchema";
import WebdesignLandingPage from "@/components/sections/WebdesignLandingPage";

const title =
  "Website erstellen lassen für 300 € | TP Digital Lab München";

const description =
  "Websites für kleine Unternehmen: Landingpage für 300 €, Firmenwebsite für 790 €. Persönlich aus München. Schriftlicher Festpreis und unverbindliches Angebot.";

const pageUrl =
  "https://tpdigitallab.de/webdesign";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },

  description,

  alternates: {
    canonical: "/webdesign",
  },

  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "TP Digital Lab",
    locale: "de_DE",
    type: "website",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1731,
        height: 909,
        alt:
          "TP Digital Lab München – professionelle Websites für kleine Unternehmen",
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

export default function Page() {
  return (
    <>
      <ServiceSchema
        name="Website-Erstellung für Selbstständige und kleine Unternehmen"
        description="Persönliche Website-Entwicklung durch Taras Pakhaliuk aus München für Unternehmen in ganz Deutschland. Landingpages für 300 €, Unternehmenswebsites bis zu fünf Seiten für 790 € und Online-Shops für 1.500 €. Leistungsumfang und Festpreis werden vor Projektbeginn schriftlich vereinbart."
        url={pageUrl}
      />

      <WebdesignLandingPage />
    </>
  );
}