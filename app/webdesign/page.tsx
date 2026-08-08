import type { Metadata } from "next";

import ServiceSchema from "@/components/seo/ServiceSchema";
import ServicePage from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title:
    "Webdesign Deutschland | Moderne Websites für Unternehmen",

  description:
    "Professionelles Webdesign in Deutschland für Unternehmen. TP Digital Lab erstellt schnelle, moderne und SEO-optimierte Websites, die Kunden gewinnen und online sichtbar machen.",

  alternates: {
    canonical: "/webdesign",
  },

  openGraph: {
    title:
      "Webdesign Deutschland | TP Digital Lab",

    description:
      "Moderne, schnelle und SEO-optimierte Websites für Unternehmen.",

    url:
      "https://tpdigitallab.de/webdesign",

    siteName: "TP Digital Lab",

    locale: "de_DE",

    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema
        name="Webdesign Deutschland"
        description="Professionelles Webdesign für Unternehmen in Deutschland. TP Digital Lab entwickelt moderne, schnelle und SEO-optimierte Websites."
        url="https://tpdigitallab.de/webdesign"
      />

<ServicePage serviceKey="webdesign" />
    </>
  );
}