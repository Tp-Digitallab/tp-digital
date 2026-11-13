import type { Metadata } from "next";
import TopicPage from "@/components/sections/TopicPage";
import LanguageProvider from "@/components/providers/LanguageProvider";
import ServiceSchema from "@/components/seo/ServiceSchema";
import { topicPages } from "@/config/topicPages";

const data = topicPages["website-kosten-muenchen"];
const url = "https://tpdigitallab.de/website-kosten-muenchen";

export const metadata: Metadata = {
  title: { absolute: data.metaTitle },
  description: data.metaDescription,
  alternates: { canonical: "/website-kosten-muenchen" },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url,
    siteName: "TP Digital Lab",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/opengraph-image.png", width: 1731, height: 909, alt: data.metaTitle }],
  },
};

export default function Page() {
  return (
    <LanguageProvider initialLanguage="de" respectSavedLanguage={false}>
      <ServiceSchema
        name="Website erstellen lassen in München"
        description={data.metaDescription}
        url={url}
        inLanguage="de"
        offers={[
          { name: "Landingpage", price: 300 },
          { name: "Firmenwebsite bis 5 Seiten", price: 790 },
          { name: "Onlineshop bis 20 Produkte", price: 1500 },
        ]}
      />
      <TopicPage data={data} />
    </LanguageProvider>
  );
}
