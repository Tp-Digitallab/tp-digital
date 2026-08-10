import type { Metadata } from "next";

import ServiceSchema from "@/components/seo/ServiceSchema";
import ServicePage from "@/components/sections/ServicePage";

const title =
  "SEO für Unternehmen in Deutschland";

const description =
  "Professionelle SEO-Optimierung für Unternehmen. TP Digital Lab verbessert technische Qualität, Google-Sichtbarkeit und relevante Rankings.";

export const metadata: Metadata = {
  title,
  description,

  alternates: {
    canonical: "/seo",
  },

  openGraph: {
    title: `${title} | TP Digital Lab`,
    description,
    url: "https://tpdigitallab.de/seo",
    siteName: "TP Digital Lab",
    locale: "de_DE",
    type: "website",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1731,
        height: 909,
        alt:
          "SEO und Google-Sichtbarkeit – TP Digital Lab",
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
        name="SEO für Unternehmen in Deutschland"
        description="Professionelle Suchmaschinenoptimierung für Unternehmen. Technische SEO, Content-Optimierung und bessere Sichtbarkeit bei Google."
        url="https://tpdigitallab.de/seo"
      />

      <ServicePage
        serviceKey="seo"
      />
    </>
  );
}