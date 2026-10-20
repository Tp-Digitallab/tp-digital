"use client";

import Image from "next/image";
import RequestLink from "@/components/contact/RequestLink";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import Container from "@/components/common/Container";
import BackgroundGrid from "@/components/effects/BackgroundGrid";
import ScrollLink from "@/components/ui/ScrollLink";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { packages } from "@/config/packages";
import { googleReviewsUrl } from "@/config/reviews";

const copy = {
  de: {
    eyebrow: "Webdesign aus München · deutschlandweit", title: "Websites für Handwerk", accent: "und lokale Dienstleister.",
    description: "Zeigen Sie Ihre Leistungen und Referenzen so, dass Interessenten Ihr Angebot verstehen und Sie direkt kontaktieren können. Ich erstelle Ihre Website oder verbessere Ihren bestehenden Auftritt.",
    price: "Landingpage ab", note: "Umfang und Festpreis vereinbaren wir vor Projektstart.", cta: "Projekt kurz beschreiben", projects: "Kundenprojekte ansehen",
    founder: "Taras Pakhaliuk · Ihr Webentwickler aus München", reviews: "5,0 · 5 Google-Bewertungen", reviewsDate: "Bewertungsstand: 22.09.2026",
    benefits: ["Persönliche Umsetzung", "2 Korrekturrunden inklusive"], example: "Ein echtes Kundenprojekt", category: "Bau und Innenausbau · München",
    result: "Leistungsseiten, Projektgalerie und Kostenrechner — passend zum Betrieb umgesetzt.", detail: "Umsetzung ansehen",
  },
  en: {
    eyebrow: "Web design from Munich · across Germany", title: "Websites for trades", accent: "and local service businesses.",
    description: "Help potential customers understand your services, see your work and contact you directly. I build new websites and improve existing ones.",
    price: "Landing page from", note: "We agree on the scope and fixed price before work begins.", cta: "Tell me about your project", projects: "View client projects",
    founder: "Taras Pakhaliuk · Your web developer in Munich", reviews: "5.0 · 5 Google reviews", reviewsDate: "Reviews as of 22 September 2026",
    benefits: ["Personal implementation", "2 revision rounds included"], example: "A real client project", category: "Construction and interiors · Munich",
    result: "Service pages, a project gallery and a cost calculator built around the business.", detail: "Explore the project",
  },
  ru: {
    eyebrow: "Веб-разработка из Мюнхена · по всей Германии", title: "Сайты для мастеров", accent: "и компаний сферы услуг.",
    description: "Помогаю понятно показать услуги и выполненные работы, чтобы посетителю было проще выбрать вас и обратиться. Разработаю новый сайт или улучшу существующий.",
    price: "Лендинг от", note: "Объём работ и фиксированную цену согласуем до начала проекта.", cta: "Кратко описать проект", projects: "Посмотреть работы",
    founder: "Тарас Пахалюк · Ваш веб-разработчик в Мюнхене", reviews: "5,0 · 5 отзывов в Google", reviewsDate: "Отзывы на 22.09.2026",
    benefits: ["Личная разработка", "2 раунда правок включены"], example: "Реальный проект клиента", category: "Строительство и отделка · Мюнхен",
    result: "Страницы услуг, галерея проектов и калькулятор стоимости — под задачи компании.", detail: "Подробнее о проекте",
  },
};

export default function HeroSection() {
  const { language } = useLanguage();
  const t = copy[language];
  const price = packages.find(p => p.id === "launch")?.price;
  const formattedPrice = new Intl.NumberFormat(language === "de" ? "de-DE" : language === "ru" ? "ru-RU" : "en-US", {style: "currency", currency: "EUR", maximumFractionDigits: 0}).format(price ?? 490);
  return (
    <section id="top" className="relative overflow-hidden bg-[#050505] text-white">
      <BackgroundGrid />
      <Container className="relative z-10">
        <div className="grid items-center gap-10 pb-14 pt-28 sm:pb-20 sm:pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-24 lg:pt-40">
          <div className="min-w-0">
            <p className="text-[11px] font-medium uppercase leading-5 tracking-[0.12em] text-blue-300">{t.eyebrow}</p>
            <h1 className="mt-5 text-[34px] font-semibold leading-[1.1] tracking-[-0.035em] sm:text-5xl lg:text-[54px]">{t.title}{" "}<span className="text-blue-200">{t.accent}</span></h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">{t.description}</p>
            <p className="mt-4 text-sm leading-6 text-white/70">{t.founder}</p>
            <div className="mt-5"><p className="flex flex-wrap items-baseline gap-3"><span className="text-sm text-white/70">{t.price}</span><span className="price-number text-3xl font-semibold">{formattedPrice}</span></p><p className="mt-1 text-xs leading-5 text-white/60">{t.note}</p></div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <RequestLink className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">{t.cta}<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" /></RequestLink>
              <ScrollLink href="#projects" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-5 py-3 text-center text-sm font-medium text-white/85 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">{t.projects}</ScrollLink>
            </div>
            <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" title={t.reviewsDate} className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm text-white/80 underline decoration-white/20 underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-blue-400"><Star aria-hidden="true" className="h-4 w-4 fill-amber-300 text-amber-300" />{t.reviews}<ArrowRight aria-hidden="true" className="h-3 w-3" /></a>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs leading-5 text-white/65">{t.benefits.map(b=><li key={b} className="flex items-center gap-2"><CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-blue-300" />{b}</li>)}</ul>
          </div>
          <figure className="min-w-0 overflow-hidden rounded-3xl border border-white/15 bg-[#0b1018] shadow-[0_25px_100px_rgba(37,99,235,0.12)]">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 text-xs text-white/55"><span>{t.example}</span><span className="flex gap-1.5" aria-hidden="true"><span className="h-2 w-2 rounded-full bg-white/20" /><span className="h-2 w-2 rounded-full bg-white/20" /><span className="h-2 w-2 rounded-full bg-white/20" /></span></div>
            <Image src="/projects/exzellentia.png" alt="Exzellentia Constructio — Website für Bau und Innenausbau in München" width={1897} height={912} sizes="(max-width: 1023px) calc(100vw - 48px), 520px" preload className="h-auto w-full" />
            <figcaption className="p-5 sm:p-6"><p className="text-xs text-blue-300">{t.category}</p><p className="mt-2 text-lg font-semibold">Exzellentia Constructio</p><p className="mt-3 text-sm leading-6 text-white/65">{t.result}</p><ScrollLink href="#projects" className="mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-blue-200 underline underline-offset-4 hover:text-white">{t.detail}<ArrowRight aria-hidden="true" className="h-4 w-4" /></ScrollLink></figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
