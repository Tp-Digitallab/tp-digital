import { notFound, permanentRedirect } from "next/navigation";
import HomePage from "@/components/layout/HomePage";
import LanguageProvider from "@/components/providers/LanguageProvider";
import { homeMetadata } from "@/config/seo";
import { isLocale } from "@/lib/locale-paths";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return homeMetadata(locale);
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  if (locale === "de") permanentRedirect("/");
  return <LanguageProvider initialLanguage={locale} respectSavedLanguage={false}><HomePage /></LanguageProvider>;
}
