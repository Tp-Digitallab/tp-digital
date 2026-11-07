"use client";
import Container from "@/components/common/Container";
import PackageGrid from "@/components/package/PackageGrid";
import { useLanguage } from "@/components/providers/LanguageProvider";
import ScrollLink from "@/components/ui/ScrollLink";
import Link from "next/link";
const copy = {
 de:{eyebrow:"Leistungen & Preise",title:"Passend zu Ihrem Vorhaben.",note:"Alle Varianten: mobil optimiert, Basis-SEO und 2 Korrekturrunden.",scope:"Startpreise für den beschriebenen Umfang mit Ihren Texten und Bildern. Festpreis vor Beginn. Domain, Hosting und externe Gebühren separat.",details:"Fragen zu Ablauf und Kosten?",small:"Schon eine Website? Ich helfe auch bei kleinen Aufgaben:",fix:"Website überarbeiten",seo:"SEO und Google"},
 en:{eyebrow:"Services & pricing",title:"The right scope for your business.",note:"Every option: mobile-friendly, basic SEO and 2 revision rounds.",scope:"Starting prices for the scope shown, using your text and images. Fixed quote before work starts. Domain, hosting and external fees separate.",details:"Questions about the process or costs?",small:"Already have a website? I also help with small jobs:",fix:"Website fixes",seo:"SEO and Google"},
 ru:{eyebrow:"Услуги и цены",title:"Под вашу задачу и бюджет.",note:"В каждом варианте: адаптация для телефона, базовое SEO и 2 раунда правок.",scope:"Стартовая цена за указанный объём с вашими текстами и фото. Фиксируем стоимость до начала. Домен, хостинг и внешние сервисы отдельно.",details:"Вопросы об оплате и работе?",small:"Сайт уже есть? Помогу и с небольшими задачами:",fix:"Доработка сайта",seo:"SEO и Google"}
};
export default function PackagesSection() {
 const {language}=useLanguage();const t=copy[language];
 return <section id="packages" className="scroll-mt-24 bg-[var(--paper)] py-12 sm:py-20"><Container>
 <p className="text-sm font-semibold uppercase leading-5 tracking-[0.1em] text-blue-300">{t.eyebrow}</p>
 <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{t.title}</h2>
 <p className="mt-4 text-sm leading-6 text-white/65">{t.note}</p><PackageGrid />
 <div className="mt-6 flex flex-col gap-3 text-xs leading-6 text-white/55 lg:flex-row lg:items-center lg:justify-between"><p className="max-w-3xl">{t.scope}</p><ScrollLink href="#faq" className="shrink-0 text-blue-200 underline underline-offset-4">{t.details}</ScrollLink></div>
 <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-white/10 bg-[var(--card)]/70 px-5 py-4 text-sm text-white/75">{t.small}<Link className="font-semibold text-blue-200 underline underline-offset-4" href={`/${language}/digitale-loesungen`}>{t.fix}</Link><Link className="font-semibold text-blue-200 underline underline-offset-4" href={`/${language}/seo`}>{t.seo}</Link></p>
 </Container></section>;
}
