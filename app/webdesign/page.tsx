import type { Metadata } from "next";

import ServiceSchema from "@/components/seo/ServiceSchema";
import WebdesignLandingPage from "@/components/sections/WebdesignLandingPage";

const title =
  "Website erstellen lassen ab 490 € | TP Digital Lab München";

const description =
  "Websites für kleine Unternehmen: Landingpage ab 490 €, Firmenwebsite ab 990 €. Persönlich aus München. Schriftlicher Festpreis und unverbindliches Angebot.";

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
        description="Persönliche Website-Entwicklung durch Taras Pakhaliuk aus München für Unternehmen in ganz Deutschland. Landingpages ab 490 €, Unternehmenswebsites bis zu fünf Seiten ab 990 € und Online-Shops ab 1.790 €. Leistungsumfang und Festpreis werden vor Projektbeginn schriftlich vereinbart."
        url={pageUrl}
      />

      <WebdesignLandingPage />
    </>
  );
}