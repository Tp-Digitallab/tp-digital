"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Container from "@/components/common/Container";
import BackgroundGrid from "@/components/effects/BackgroundGrid";
import CursorTrail from "@/components/effects/CursorTrail";
import ScrollLink from "@/components/ui/ScrollLink";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { packages } from "@/config/packages";

const heroCopy = {
  de: {
    eyebrow:
      "Webentwicklung aus München · deutschlandweit",

    title:
      "Professionelle Websites",

    accent:
      "für kleine Unternehmen.",

    description:
      "Ich entwickle Ihre Website persönlich – mit verständlichen Inhalten, einer klaren Struktur und einem einfachen Weg zur Kontaktaufnahme. Damit Ihr Unternehmen online überzeugend auftritt.",

    priceLabel:
      "Landingpage ab",

    priceNote:
      "Leistungsumfang und Festpreis vereinbaren wir schriftlich vor Projektbeginn.",

    primaryCta:
      "Unverbindliches Angebot anfragen",

    secondaryCta:
      "Kundenprojekte ansehen",

    benefits: [
      "Direkter Kontakt mit mir",
      "Schriftliche Abstimmung ohne Telefontermin",
      "2 Korrekturrunden im Paket",
    ],

    personRole:
      "Gründer von TP Digital Lab · Ihr direkter Ansprechpartner",

    reassurance:
      "Ihre Anfrage ist unverbindlich. Ich antworte in der Regel innerhalb von 3–12 Stunden.",
  },

  en: {
    eyebrow:
      "Web development from Munich · across Germany",

    title:
      "Professional websites",

    accent:
      "for small businesses.",

    description:
      "I personally build your website with clear content, a well-organized structure and an easy way for customers to get in touch. Give your business a professional online presence.",

    priceLabel:
      "Landing page from",

    priceNote:
      "We agree on the scope and fixed price in writing before the project begins.",

    primaryCta:
      "Request a no-obligation quote",

    secondaryCta:
      "View client projects",

    benefits: [
      "Direct contact with me",
      "Written communication — no phone appointment",
      "2 revision rounds included in the package",
    ],

    personRole:
      "Founder of TP Digital Lab · Your direct contact",

    reassurance:
      "Your enquiry carries no obligation. I usually reply within 3–12 hours.",
  },

  ru: {
    eyebrow:
      "Разработка сайтов из Мюнхена · по всей Германии",

    title:
      "Профессиональные сайты",

    accent:
      "для малого бизнеса.",

    description:
      "Я лично разрабатываю ваш сайт: понятные тексты, продуманная структура и удобный способ связи для клиентов. Чтобы ваш бизнес убедительно выглядел в интернете.",

    priceLabel:
      "Лендинг от",

    priceNote:
      "Состав работ и фиксированную цену согласуем письменно до начала проекта.",

    primaryCta:
      "Запросить предложение",

    secondaryCta:
      "Посмотреть работы",

    benefits: [
      "Прямой контакт со мной",
      "Письменное общение без созвонов",
      "2 раунда правок в пакете",
    ],

    personRole:
      "Основатель TP Digital Lab · Ваш прямой контакт",

    reassurance:
      "Заявка ни к чему не обязывает. Обычно я отвечаю в течение 3–12 часов.",
  },
} as const;

const landingPrice = packages.find(
  (item) => item.id === "launch"
)?.price;

export default function HeroSection() {
  const { language } = useLanguage();
  const t = heroCopy[language];

  const numberLocale =
    language === "de"
      ? "de-DE"
      : language === "ru"
        ? "ru-RU"
        : "en-US";

  const formattedPrice =
    landingPrice !== undefined
      ? new Intl.NumberFormat(numberLocale, {
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(landingPrice)
      : null;

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-[#050505] text-white"
    >
      <BackgroundGrid />

      <CursorTrail />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60"
      />

      <Container>
        <div className="relative z-10 flex min-h-[100svh] items-center pb-20 pt-36 sm:pt-40 lg:pb-28 lg:pt-48">
          <div className="w-full max-w-5xl">
            <p className="max-w-2xl text-xs font-medium uppercase leading-6 tracking-[0.2em] text-blue-300/80 sm:tracking-[0.3em]">
              {t.eyebrow}
            </p>

            <h1 className="mt-7 break-words text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[56px] md:text-[68px] lg:text-[82px]">
              {t.title}

              <br />

              <span className="text-white/70">
                {t.accent}
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 sm:mt-8 sm:text-xl sm:leading-9">
              {t.description}
            </p>

            <div className="mt-8 max-w-2xl">
              {formattedPrice && (
                <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-base text-white/60">
                    {t.priceLabel}
                  </span>

                  <span className="price-number text-3xl font-semibold text-white sm:text-4xl">
                    {formattedPrice}
                  </span>
                </p>
              )}

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/45">
                {t.priceNote}
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/webdesign#anfrage"
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-blue-500 px-6 py-4 text-center text-sm font-semibold text-white shadow-[0_12px_35px_rgba(59,130,246,0.18)] transition hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 sm:w-auto sm:text-base"
              >
                <span>{t.primaryCta}</span>

                <ArrowRight
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0"
                />
              </Link>

              <ScrollLink
                href="#projects"
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-6 py-4 text-center text-sm font-medium text-white/80 transition hover:border-white/30 hover:bg-white/[0.07] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 sm:w-auto sm:text-base"
              >
                <span>{t.secondaryCta}</span>

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0"
                />
              </ScrollLink>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/45">
              {t.reassurance}
            </p>

            <ul className="mt-8 flex flex-col gap-3 text-sm text-white/65 lg:flex-row lg:flex-wrap lg:gap-x-6">
              {t.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
                  />

                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 max-w-2xl border-t border-white/10 pt-6">
              <p className="font-medium text-white/90">
                Taras Pakhaliuk
              </p>

              <p className="mt-1 text-sm leading-6 text-white/45">
                {t.personRole}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}