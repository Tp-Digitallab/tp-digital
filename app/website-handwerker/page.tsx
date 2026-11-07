import type { Metadata } from "next";
import TopicPage from "@/components/sections/TopicPage";
import LanguageProvider from "@/components/providers/LanguageProvider";
import ServiceSchema from "@/components/seo/ServiceSchema";
import { topicPages } from "@/config/topicPages";

const data = topicPages["website-handwerker"];
const url = "https://tpdigitallab.de/website-handwerker";

export const metadata: Metadata = {
  title: { absolute: data.metaTitle },
  description: data.metaDescription,
  alternates: { canonical: "/website-handwerker" },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url,
    siteName: "TP Digital Lab",
    locale: "de_DE",
    type: "website",
    images: [{ url: data.demo ? `/demo/${data.demo.slug}/preview.png` : "/opengraph-image.png", width: 1440, height: 900, alt: data.metaTitle }],
  },
};

export default function Page() {
  return (
    <LanguageProvider initialLanguage="de" respectSavedLanguage={false}>
      <ServiceSchema name={`${data.title} ${data.accent}`} description={data.metaDescription} url={url} />
      <TopicPage data={data} />
    </LanguageProvider>
  );
}
