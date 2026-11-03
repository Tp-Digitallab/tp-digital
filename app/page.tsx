import HomePage from "@/components/layout/HomePage";
import LanguageProvider from "@/components/providers/LanguageProvider";
import { homeMetadata } from "@/config/seo";

export const metadata = homeMetadata("de");

export default function Home() {
  return <LanguageProvider initialLanguage="de" respectSavedLanguage={false}><HomePage /></LanguageProvider>;
}
