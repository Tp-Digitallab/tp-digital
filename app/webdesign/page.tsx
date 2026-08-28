import type { Metadata } from "next";

import ServiceSchema from "@/components/seo/ServiceSchema";
import WebdesignLandingPage from "@/components/sections/WebdesignLandingPage";

const title =
  "Professionelle Website erstellen lassen – ab 500 €";

const description =
  "TP Digital Lab erstellt professionelle Landingpages ab 500 € und Unternehmenswebsites ab 1.000 €. Persönliche Betreuung aus München – deutschlandweit.";

export const metadata: Metadata = {
  title,
  description,

  alternates: {
    canonical: "/webdesign",
  },

  openGraph: {
    title:
      `${title} | TP Digital Lab`,

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
          "Professionelle Website erstellen lassen – TP Digital Lab",
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
        name="Professionelle Website erstellen lassen"
        description="TP Digital Lab erstellt Landingpages ab 500 € und professionelle Unternehmenswebsites ab 1.000 € für Kunden in Deutschland."
        url="https://tpdigitallab.de/webdesign"
      />

      <WebdesignLandingPage />
    </>
  );
}