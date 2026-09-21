"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import {
  branding as allBranding,
  languages as allLanguages,
  marketing as allMarketing,
} from "@/config/calculator";

import { features as allFeatures } from "@/config/features";
import { support as allSupport } from "@/config/support";

import {
  getCalculatorLanguageTitle,
  getCalculatorOptionText,
} from "@/config/calculatorOptionsTranslations";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";

type ServiceGroup =
  | "marketing"
  | "branding"
  | "features"
  | "support";

interface SummaryProps {
  website: {
    id: string;
    title: string;
    price: number;
    customPrice?: boolean;
  };

  total: number;
  monthlyTotal: number;

  languages: string[];
  marketing: string[];
  branding: string[];
  features: string[];
  includedFeatures: string[];
  support: string[];
}

interface SummaryItem {
  id: string;
  title: string;
  price?: number;
}

interface SelectionGroupProps {
  label: string;
  selectedIds: string[];
  items: readonly SummaryItem[];
  showPrice?: boolean;
  includedIds?: string[];
  includedLabel?: string;
  formatPrice: (value: number) => string;

  getTitle?: (
    id: string,
    fallbackTitle: string
  ) => string;
}

function SelectionGroup({
  label,
  selectedIds,
  items,
  showPrice = false,
  includedIds = [],
  includedLabel,
  formatPrice,
  getTitle,
}: SelectionGroupProps) {
  return (
    <div>
      <p className="text-sm text-white/40">
        {label}
      </p>

      {selectedIds.length === 0 ? (
        <p className="mt-3 text-white/30">—</p>
      ) : (
        <ul className="mt-3 space-y-2">
          {selectedIds.map((id) => {
            const item = items.find(
              (currentItem) => currentItem.id === id
            );

            const fallbackTitle = item?.title ?? id;

            const title = getTitle
              ? getTitle(id, fallbackTitle)
              : fallbackTitle;

            const included = includedIds.includes(id);

            const extraPrice =
              showPrice &&
              !included &&
              typeof item?.price === "number" &&
              item.price > 0
                ? item.price
                : null;

            return (
              <li
                key={id}
                className="flex items-start gap-2 text-sm text-white/70 sm:text-base"
              >
                <span
                  aria-hidden="true"
                  className="text-blue-400"
                >
                  •
                </span>

                <span>
                  {title}

                  {included && includedLabel && (
                    <span className="ml-2 text-sm text-green-300">
                      ({includedLabel})
                    </span>
                  )}

                  {extraPrice !== null && (
                    <span className="ml-2 text-sm text-white/50">
                      (+{formatPrice(extraPrice)})
                    </span>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

const customTranslations = {
  de: {
    websiteNames: {
      landing: "Landingpage",
      business: "Mehrseitige Unternehmenswebsite",
      shop: "Online-Shop",
      custom: "Individuelle Website-Dienstleistung",
    },

    customDescription:
      "Beschreiben Sie im Kontaktformular, welche Änderungen oder Funktionen Sie für Ihre bestehende Website benötigen.",

    estimatedPrice: "Individuelles Angebot",
    priceOnRequest: "Preis nach Absprache",
    included: "im Paket enthalten",

    priceNote:
      "Unverbindliche Schätzung. Den endgültigen Leistungsumfang und Festpreis erhalten Sie vor Projektbeginn schriftlich im Angebot.",
  },

  en: {
    websiteNames: {
      landing: "Landing page",
      business: "Multi-page business website",
      shop: "Online store",
      custom: "Individual website work",
    },

    customDescription:
      "Describe the changes or features you need for your existing website in the contact form.",

    estimatedPrice: "Individual quote",
    priceOnRequest: "Price on request",
    included: "included in the package",

    priceNote:
      "Non-binding estimate. The final scope and fixed price are confirmed in a written offer before the project begins.",
  },

  ru: {
    websiteNames: {
      landing: "Лендинг",
      business: "Многостраничный сайт",
      shop: "Интернет-магазин",
      custom: "Индивидуальная доработка сайта",
    },

    customDescription:
      "Опишите в контактной форме, какие изменения или функции нужны для вашего существующего сайта.",

    estimatedPrice: "Индивидуальное предложение",
    priceOnRequest: "Цена по договорённости",
    included: "включено в пакет",

    priceNote:
      "Предварительная оценка без обязательств. Окончательный объём и фиксированная цена согласовываются письменно до начала проекта.",
  },
} as const;

export default function Summary({
  website,
  total,
  monthlyTotal,
  languages,
  marketing,
  branding,
  features,
  includedFeatures,
  support,
}: SummaryProps) {
  const { language } = useLanguage();

  const summaryT =
    translations[language].calculatorSteps.summary;

  const customT = customTranslations[language];

  const isCustomWork = website.id === "custom";

  const websiteNames: Readonly<Record<string, string>> =
    customT.websiteNames;

  const translatedWebsiteName =
    websiteNames[website.id] ?? website.title;

  const numberLocale =
    language === "de"
      ? "de-DE"
      : language === "ru"
        ? "ru-RU"
        : "en-US";

  function formatPrice(value: number) {
    return new Intl.NumberFormat(numberLocale, {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  }

  function getTranslatedServiceTitle(
    group: ServiceGroup,
    id: string,
    fallbackTitle: string
  ) {
    return getCalculatorOptionText(
      language,
      group,
      id,
      {
        title: fallbackTitle,
        description: "",
      }
    ).title;
  }

  const [displayPrice, setDisplayPrice] = useState(total);
  const [priceChange, setPriceChange] = useState(0);
  const [showChange, setShowChange] = useState(false);

  const previousPrice = useRef(total);
  const animatedPrice = useRef(total);

  useEffect(() => {
    const difference = total - previousPrice.current;
    const startValue = animatedPrice.current;

    previousPrice.current = total;

    const duration = 350;
    const startTime = performance.now();

    let animationFrameId = 0;
    let changeTimeout: ReturnType<typeof setTimeout> | undefined;
    let firstFrame = true;

    function animatePrice(now: number) {
      if (firstFrame) {
        firstFrame = false;

        setPriceChange(difference);
        setShowChange(difference !== 0);

        if (difference !== 0) {
          changeTimeout = setTimeout(() => {
            setShowChange(false);
          }, 600);
        }
      }

      const progress = Math.min(
        (now - startTime) / duration,
        1
      );

      const value = Math.round(
        startValue + (total - startValue) * progress
      );

      animatedPrice.current = value;
      setDisplayPrice(value);

      if (progress < 1) {
        animationFrameId =
          requestAnimationFrame(animatePrice);
      }
    }

    animationFrameId =
      requestAnimationFrame(animatePrice);

    return () => {
      cancelAnimationFrame(animationFrameId);

      if (changeTimeout !== undefined) {
        clearTimeout(changeTimeout);
      }
    };
  }, [total]);

  return (
    <aside className="w-full self-start rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 sm:p-8 lg:sticky lg:top-32 lg:rounded-[32px]">
      <h2 className="text-xs uppercase tracking-[0.3em] text-white/40">
        {summaryT.title}
      </h2>

      <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-8">
        <div>
          <p className="text-sm text-white/40">
            {summaryT.website}
          </p>

          <p className="mt-2 text-xl font-semibold text-white">
            {translatedWebsiteName}
          </p>
        </div>

        {isCustomWork ? (
          <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
            <p className="leading-7 text-white/70">
              {customT.customDescription}
            </p>
          </div>
        ) : (
          <>
            <SelectionGroup
              label={summaryT.languages}
              selectedIds={languages}
              items={allLanguages}
              formatPrice={formatPrice}
              getTitle={(id, fallbackTitle) =>
                getCalculatorLanguageTitle(
                  language,
                  id,
                  fallbackTitle
                )
              }
            />

            <SelectionGroup
              label={summaryT.marketing}
              selectedIds={marketing}
              items={allMarketing}
              formatPrice={formatPrice}
              getTitle={(id, fallbackTitle) =>
                getTranslatedServiceTitle(
                  "marketing",
                  id,
                  fallbackTitle
                )
              }
            />

            <SelectionGroup
              label={summaryT.branding}
              selectedIds={branding}
              items={allBranding}
              formatPrice={formatPrice}
              getTitle={(id, fallbackTitle) =>
                getTranslatedServiceTitle(
                  "branding",
                  id,
                  fallbackTitle
                )
              }
            />

            <SelectionGroup
              label={summaryT.features}
              selectedIds={features}
              items={allFeatures}
              showPrice
              includedIds={includedFeatures}
              includedLabel={customT.included}
              formatPrice={formatPrice}
              getTitle={(id, fallbackTitle) =>
                getTranslatedServiceTitle(
                  "features",
                  id,
                  fallbackTitle
                )
              }
            />

            <SelectionGroup
              label={summaryT.monthlyServices}
              selectedIds={support}
              items={allSupport}
              formatPrice={formatPrice}
              getTitle={(id, fallbackTitle) =>
                getTranslatedServiceTitle(
                  "support",
                  id,
                  fallbackTitle
                )
              }
            />
          </>
        )}
      </div>

      <div className="my-10 h-px bg-white/10" />

      {isCustomWork ? (
        <div className="rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-white/[0.03] p-5">
          <p className="text-sm text-white/45">
            {customT.estimatedPrice}
          </p>

          <p className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
            {customT.priceOnRequest}
          </p>
        </div>
      ) : (
        <>
          <div className="relative">
            <AnimatePresence mode="wait">
              {showChange && priceChange !== 0 && (
                <motion.div
                  key={`${total}-${priceChange}`}
                  aria-hidden="true"
                  initial={{
                    opacity: 0,
                    y: 12,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    y: -12,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="absolute -top-8 left-0 rounded-full border border-blue-400/25 bg-blue-500/15 px-4 py-1.5 text-sm font-semibold text-blue-200 backdrop-blur-xl"
                >
                  {priceChange > 0 ? "+" : "−"}
                  {formatPrice(Math.abs(priceChange))}
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-white/45">
              {summaryT.estimatedPrice}
            </p>

            <p
              aria-hidden="true"
              className="price-number mt-4 break-words text-4xl font-bold text-white sm:text-5xl"
            >
              {formatPrice(displayPrice)}
            </p>

            <span
              className="sr-only"
              role="status"
              aria-atomic="true"
            >
              {summaryT.estimatedPrice}: {formatPrice(total)}
            </span>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-white/45">
              {summaryT.monthlyServices}
            </p>

            <p className="price-number mt-2 text-3xl font-semibold text-white">
              {formatPrice(monthlyTotal)}

              <span className="ml-2 text-base font-normal text-white/45">
                {summaryT.perMonth}
              </span>
            </p>
          </div>

          <p className="mt-5 text-sm leading-6 text-white/45">
            {customT.priceNote}
          </p>
        </>
      )}
    </aside>
  );
}