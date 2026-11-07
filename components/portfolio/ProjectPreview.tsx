"use client";
import Image from "next/image";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { projects } from "@/config/projects";
const copy = {
 de: {doneLabel:"Was ich gemacht habe", done:{"marigstudio": ["Design von Grund auf", "Entwicklung der Website", "3 Sprachen", "Leistungen und Arbeitsgalerie", "Formular für Terminanfragen"], "exzellentia": ["Mehrsprachige Firmenwebsite", "Leistungsseiten und Projektgalerie", "Individueller Kostenrechner", "SEO-Optimierung", "Google-Ads-Betreuung"], "grabprofi": ["Landingpage", "Pflegepakete mit Preisen", "Kontaktformular und WhatsApp", "Lokale SEO"]}, visit:"Website ansehen", preview:"Entwurf ansehen", status:"In Entwicklung", descriptions:{
 marigstudio:"Von Grund auf gestaltet und entwickelt: dreisprachige Studio-Website mit Leistungen, Arbeitsgalerie und Formular für Terminanfragen.",
 exzellentia:"Mehrsprachige Firmenwebsite mit Leistungsseiten, Projektgalerie und individuellem Kostenrechner.",
 grabprofi:"Landingpage für lokale Grabpflege mit Pflegepaketen, Kontaktformular und WhatsApp."}},
 en: {doneLabel:"What I did", done:{"marigstudio": ["Design from scratch", "Website development", "3 languages", "Services and work gallery", "Appointment enquiry form"], "exzellentia": ["Multilingual business website", "Service pages and project gallery", "Custom cost calculator", "SEO optimisation", "Google Ads management"], "grabprofi": ["Landing page", "Care packages with prices", "Contact form and WhatsApp", "Local SEO"]}, visit:"View website", preview:"View work in progress", status:"In development", descriptions:{
 marigstudio:"Designed and built from scratch: a three-language studio website with services, a work gallery and appointment enquiries.",
 exzellentia:"A multilingual business website with service pages, a project gallery and a custom cost calculator.",
 grabprofi:"A landing page for local grave care with care packages, a contact form and WhatsApp."}},
 ru: {doneLabel:"Что я сделал", done:{"marigstudio": ["Дизайн с нуля", "Разработка сайта", "3 языка", "Услуги и галерея работ", "Форма записи"], "exzellentia": ["Многоязычный сайт компании", "Страницы услуг и галерея проектов", "Калькулятор стоимости", "SEO-оптимизация", "Ведение Google Ads"], "grabprofi": ["Лендинг", "Пакеты ухода с ценами", "Форма обращения и WhatsApp", "Локальное SEO"]}, visit:"Посмотреть сайт", preview:"Посмотреть проект", status:"В разработке", descriptions:{
 marigstudio:"Дизайн и разработка с нуля: три языка, услуги, галерея работ и форма заявки на запись.",
 exzellentia:"Многоязычный сайт компании со страницами услуг, галереей проектов и калькулятором стоимости.",
 grabprofi:"Лендинг для местной услуги: пакеты ухода, форма обращения и WhatsApp."}},
};
export default function ProjectPreview() {
 const {language} = useLanguage(); const t = copy[language];
 return <div className="grid gap-6 lg:grid-cols-3">{projects.map(project =>
 <article key={project.id} className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)]">
 <a href={project.website} target="_blank" rel="noopener noreferrer" aria-label={project.title} className="relative block aspect-[16/10] overflow-hidden border-b border-white/10 focus-visible:outline-2 focus-visible:outline-blue-400">
 <Image src={project.image} alt={project.title} fill sizes="(max-width: 1023px) 100vw, 420px" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none" />
 {project.status === "in-development" && <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_6px_18px_rgba(23,42,57,0.3)]">{t.status}</span>}</a>
 <div className="flex flex-1 flex-col p-6"><h3 className="text-xl font-semibold text-white">{project.title}</h3>
 <p className="mt-3 text-sm leading-6 text-white/65">{t.descriptions[project.id as keyof typeof t.descriptions] ?? project.description}</p>
 {t.done[project.id as keyof typeof t.done] && <><p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-white/55">{t.doneLabel}</p>
 <ul className="mt-2 grid gap-1.5 text-sm leading-6 text-white/75">{t.done[project.id as keyof typeof t.done].map(d => <li key={d} className="flex gap-2"><span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />{d}</li>)}</ul></>}
 <a href={project.website} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex min-h-12 items-center gap-2 pt-5 text-sm font-medium text-blue-200 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-blue-400">{project.status === "in-development" ? t.preview : t.visit}</a></div>
 </article>)}</div>;
}
