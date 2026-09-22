"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Container from "@/components/common/Container";
import BackgroundGrid from "@/components/effects/BackgroundGrid";
import CursorTrail from "@/components/effects/CursorTrail";
import ScrollLink from "@/components/ui/ScrollLink";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { packages } from "@/config/packages";

const heroCopy = {
  de: {
    eyebrow: "Webdesign für kleine Unternehmen · Aus München",

    title: "Zeigen Sie, was Sie können.",
    accent: "Mit einer Website, die überzeugt.",

    description:
      "Ich erstelle Ihre Website so, dass Interessenten Ihre Leistungen verstehen, Ihre Arbeit kennenlernen und Sie einfach kontaktieren können. Für Selbstständige und kleine Unternehmen – vom ersten eigenen Auftritt bis zur neuen Website.",

    priceLabel: "Ihre erste Website als Landingpage ab",

    priceNote:
      "Den genauen Leistungsumfang und Festpreis erhalten Sie schriftlich vor Projektbeginn.",

    primaryCta: "Unverbindliches Angebot anfragen",
    secondaryCta: "Kundenprojekte ansehen",

    nextStep:
      "Beschreiben Sie kurz Ihren Betrieb und Ihr Vorhaben. Ich empfehle Ihnen eine passende Lösung mit klarem Umfang und Preis.",

    benefits: [
      "Persönlich betreut von Anfang bis zum Start",
      "Abstimmung per E-Mail oder WhatsApp",
      "Website vor dem Start prüfen · 2 Korrekturrunden",
    ],

    personRole:
      "Ihr Ansprechpartner für Planung, Umsetzung und Website-Start",

    reassurance:
      "Sie müssen noch kein Paket auswählen. Wir klären zuerst, was Sie brauchen.",
  },

  en: {
    eyebrow: "Web design for small businesses · Based in Munich",

    title: "Show what you do best.",
    accent: "With a website that builds confidence.",

    description:
      "I build your website so potential customers can understand your services, see your work and contact you easily. For independent professionals and small businesses, whether you need your first website or a fresh start.",

    priceLabel: "Your first website as a landing page from",

    priceNote:
      "You receive the exact scope and fixed price in writing before the project begins.",

    primaryCta: "Request a no-obligation quote",
    secondaryCta: "View client projects",

    nextStep:
      "Tell me briefly about your business and what you need. I will recommend a suitable solution with a clear scope and price.",

    benefits: [
      "Personal support from planning to launch",
      "Communication by email or WhatsApp",
      "Review before launch · 2 revision rounds",
    ],

    personRole:
      "Your contact for planning, development and launching your website",

    reassurance:
      "You do not need to choose a package yet. We will first work out what you need.",
  },

  ru: {
    eyebrow: "Сайты для малого бизнеса · Из Мюнхена",

    title: "Покажите, что вы умеете.",
    accent: "С сайтом, который вызывает доверие.",

    description:
      "Я создам сайт, на котором потенциальные клиенты смогут понять ваши услуги, посмотреть работы и легко связаться с вами. Для частных специалистов и малого бизнеса — от первого сайта до обновления существующего.",

    priceLabel: "Ваш первый сайт в формате лендинга — от",

    priceNote:
      "Точный состав работ и фиксированную стоимость вы получите письменно до начала проекта.",

    primaryCta: "Запросить предложение",
    secondaryCta: "Посмотреть работы",

    nextStep:
      "Кратко расскажите о своём бизнесе и задаче. Я предложу подходящее решение с понятным составом работ и стоимостью.",

    benefits: [
      "Лично веду проект от обсуждения до запуска",
      "Общение по электронной почте или WhatsApp",
      "Проверка до запуска · 2 раунда правок",
    ],

    personRole:
      "Ваш специалист по планированию, разработке и запуску сайта",

    reassurance:
      "Выбирать пакет заранее не нужно. Сначала разберёмся, что вам подходит.",
  },
} as const;

const landingPrice = packages.find(
  (item) => item.id === "launch",
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
        <div className="relative z-10 flex min-h-[100svh] items-center pb-20 pt-32 sm:pt-40 lg:pb-24 lg:pt-44">
          <div className="w-full max-w-5xl">
            <p className="max-w-2xl text-xs font-medium uppercase leading-6 tracking-[0.16em] text-blue-300 sm:tracking-[0.24em]">
              {t.eyebrow}
            </p>

            <h1 className="mt-6 break-words text-[36px] font-semibold leading-[1.12] tracking-[-0.04em] sm:text-[52px] md:text-[62px] lg:text-[72px]">
              <span className="block">{t.title}</span>

              <span className="mt-2 block text-blue-200">
                {t.accent}
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              {t.description}
            </p>

            <div className="mt-7 max-w-2xl">
              {formattedPrice && (
                <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-sm text-white/70 sm:text-base">
                    {t.priceLabel}
                  </span>

                  <span className="price-number text-3xl font-semibold text-white sm:text-4xl">
                    {formattedPrice}
                  </span>
                </p>
              )}

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
                {t.priceNote}
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href={`/${language}/webdesign#anfrage`}
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
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-6 py-4 text-center text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/[0.07] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 sm:w-auto sm:text-base"
              >
                <span>{t.secondaryCta}</span>

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0"
                />
              </ScrollLink>
            </div>

            <div className="mt-4 max-w-2xl">
              <p className="text-sm leading-6 text-white/75">
                {t.nextStep}
              </p>

              <p className="mt-2 text-sm leading-6 text-blue-200/90">
                {t.reassurance}
              </p>
            </div>

            <ul className="mt-7 grid gap-3 text-sm leading-6 text-white/75">
              {t.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-blue-400"
                  />

                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 max-w-2xl border-t border-white/10 pt-5">
              <p className="font-medium text-white">
                Taras Pakhaliuk
              </p>

              <p className="mt-1 text-sm leading-6 text-white/60">
                {t.personRole}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}