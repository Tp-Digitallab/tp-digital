"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import Link from "next/link";

interface PackageCardProps {
  id: string;
  badge?: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}

const packageGoals = {
  de: {
    launch: "Professionell online starten",
    business: "Vertrauen bei neuen Kunden aufbauen",
    growth: "Online verkaufen",
  },
  en: {
    launch: "Start professionally online",
    business: "Build trust with new customers",
    growth: "Sell online",
  },
  ru: {
    launch: "Профессионально выйти в интернет",
    business: "Повысить доверие новых клиентов",
    growth: "Начать продавать онлайн",
  },
};

const priceNotes = {
  de: {
    from: "Festpreis ab",
    payment:
      "Die genaue Leistung und der endgültige Festpreis werden vor dem Start schriftlich vereinbart.",
    revisions: "2 Korrekturrunden inklusive",
    cta: "Dieses Paket anfragen",
    details: "Alle enthaltenen Leistungen",
  },
  en: {
    from: "Fixed price from",
    payment:
      "The exact scope and final fixed price are agreed in writing before work begins.",
    revisions: "2 revision rounds included",
    cta: "Enquire about this package",
    details: "All included services",
  },
  ru: {
    from: "Фиксированная цена от",
    payment:
      "Точный объём работ и окончательную фиксированную цену согласуем письменно до начала проекта.",
    revisions: "2 раунда правок включены",
    cta: "Запросить этот пакет",
    details: "Все включённые услуги",
  },
};

export default function PackageCard({
  id,
  badge,
  title,
  price,
  description,
  features,
  featured,
}: PackageCardProps) {
  const { language } = useLanguage();

  const goal =
    packageGoals[language][
      id as keyof (typeof packageGoals)[typeof language]
    ];

  const copy = priceNotes[language];

  return (
    <article
      className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[30px] border transition-colors duration-200 ${
        featured
          ? "border-blue-400/60 bg-blue-500/[0.09] shadow-[0_20px_70px_rgba(37,99,235,0.12)]"
          : "border-white/10 bg-white/[0.035] hover:border-white/25"
      }`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-400/[0.09] to-transparent ${
          featured
            ? "opacity-100"
            : "opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        }`}
      />

      <div className="relative z-10 flex h-full flex-col p-6 sm:p-8 lg:p-9">
        {badge && (
          <div className="mb-6 inline-flex w-fit rounded-full border border-blue-300/30 bg-blue-400/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-200">
            {badge}
          </div>
        )}

        <p className="text-sm font-medium leading-6 text-blue-300">
          {goal}
        </p>

        <h3 className="mt-3 break-words text-3xl font-semibold text-white">
          {title}
        </h3>

        <div className="mt-7">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/45">
            {copy.from}
          </p>

          <p className="mt-2 whitespace-nowrap text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {price}
          </p>
        </div>

        <p className="mt-6 text-base leading-7 text-white/70">
          {description}
        </p>

        <div className="my-8 h-px bg-white/10" />

        <ul className="space-y-4">
          {features.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="flex min-w-0 items-start gap-3 text-sm leading-6 text-white/85"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300"
              />

              <span className="min-w-0 [overflow-wrap:anywhere]">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {features.length > 3 && <details className="mt-5 border-t border-white/10 pt-4 text-sm text-white/80">
          <summary className="cursor-pointer py-2 font-medium text-blue-200 focus-visible:outline-2 focus-visible:outline-blue-400">{copy.details}</summary>
          <ul className="mt-3 space-y-3">{features.slice(3).map(feature => <li key={feature} className="flex gap-3 leading-6"><span aria-hidden="true" className="text-blue-300">✓</span><span>{feature}</span></li>)}</ul>
        </details>}

        <div className="mt-auto pt-9">
          <Link
            href={`/${language}/webdesign#anfrage-${id}`}
            aria-label={`${copy.cta}: ${title}`}
            className={`group/button inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border px-5 py-3 text-center text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505] ${
              featured
                ? "border-blue-400/40 bg-blue-600 text-white hover:bg-blue-500"
                : "border-white/15 bg-white/[0.08] text-white hover:border-blue-400/40 hover:bg-blue-500/15"
            }`}
          >
            <span>{copy.cta}</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover/button:translate-x-1"
            >
              →
            </span>
          </Link>

          <p className="mt-4 text-center text-xs leading-5 text-white/50">
            {copy.payment}
          </p>

          <p className="mt-2 text-center text-xs text-white/65">
            {copy.revisions}
          </p>
        </div>
      </div>
    </article>
  );
}
