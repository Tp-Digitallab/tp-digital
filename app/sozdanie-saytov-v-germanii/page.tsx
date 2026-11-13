import type { Metadata } from "next";
import TopicPage from "@/components/sections/TopicPage";
import LanguageProvider from "@/components/providers/LanguageProvider";
import ServiceSchema from "@/components/seo/ServiceSchema";
import { topicPages } from "@/config/topicPages";

const data = topicPages["sozdanie-saytov-v-germanii"];
const url = "https://tpdigitallab.de/sozdanie-saytov-v-germanii";

export const metadata: Metadata = {
  title: { absolute: data.metaTitle },
  description: data.metaDescription,
  alternates: { canonical: "/sozdanie-saytov-v-germanii" },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url,
    siteName: "TP Digital Lab",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/demo/studio/preview.png", width: 1440, height: 900, alt: data.metaTitle }],
  },
};

export default function Page() {
  return (
    <LanguageProvider initialLanguage="ru" respectSavedLanguage={false}>
      <ServiceSchema
        name="Создание сайтов в Германии"
        description={data.metaDescription}
        url={url}
        inLanguage="ru"
        offers={[
          { name: "Лендинг", price: 300 },
          { name: "Сайт компании до 5 страниц", price: 790 },
          { name: "Интернет-магазин до 20 товаров", price: 1500 },
        ]}
      />
      <div lang="ru">
        <TopicPage data={data} />
      </div>
    </LanguageProvider>
  );
}
