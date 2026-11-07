"use client";
import Link from "next/link";
import Container from "@/components/common/Container";
import RequestLink from "@/components/contact/RequestLink";
import { useLanguage } from "@/components/providers/LanguageProvider";
const copy = {
 de:{title:"Schon eine Website? Kleine Aufgaben sind willkommen.",text:"Formular reparieren, mobile Ansicht verbessern oder eine Funktion ergänzen. Schreiben Sie mir, was Sie brauchen.",cta:"Aufgabe beschreiben",seo:"SEO & Google",digital:"Weitere Lösungen"},
 en:{title:"Already have a website? Small jobs are welcome.",text:"Fix a form, improve the mobile layout or add a feature. Tell me what needs doing.",cta:"Describe your task",seo:"SEO & Google",digital:"More solutions"},
 ru:{title:"Сайт уже есть? Помогу и с небольшой задачей.",text:"Исправить форму, улучшить мобильную версию или добавить функцию. Коротко расскажите, что нужно.",cta:"Описать задачу",seo:"SEO и Google",digital:"Другие решения"}
};
export default function SmallChangesSection(){
 const {language}=useLanguage();const t=copy[language];
 return <section id="solutions" className="scroll-mt-24 bg-[var(--paper)] py-8"><Container>
 <div id="website-improvements" className="scroll-mt-24 rounded-3xl border border-white/10 bg-[var(--card)]/70 p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
 <div className="max-w-2xl"><h2 className="text-xl font-semibold leading-snug text-white sm:text-2xl">{t.title}</h2><p className="mt-3 text-sm leading-6 text-white/65">{t.text}</p></div>
 <div className="mt-5 shrink-0 lg:mt-0"><RequestLink choice="aenderungen" className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-500">{t.cta}</RequestLink>
 <div className="mt-3 flex gap-4 text-xs text-white/60"><Link className="underline underline-offset-4" href={`/${language}/seo`}>{t.seo}</Link><Link className="underline underline-offset-4" href={`/${language}/digitale-loesungen`}>{t.digital}</Link></div></div>
 </div></Container></section>;
}
