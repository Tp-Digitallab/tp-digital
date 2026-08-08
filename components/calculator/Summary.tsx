"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "motion/react";

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
  getTitle,
}: SelectionGroupProps) {
  return (
    <div>
      <p className="text-sm text-white/40">
        {label}
      </p>

      <div className="mt-3 space-y-2">
        {selectedIds.length === 0 ? (
          <p className="text-white/30">
            —
          </p>
        ) : (
          selectedIds.map((id) => {
            const item =
              items.find(
                (
                  currentItem
                ) =>
                  currentItem.id ===
                  id
              );

            const fallbackTitle =
              item?.title ?? id;

            const title =
              getTitle
                ? getTitle(
                    id,
                    fallbackTitle
                  )
                : fallbackTitle;

            const showItemPrice =
              showPrice &&
              typeof item?.price ===
                "number" &&
              item.price > 0;

            return (
              <p
                key={id}
                className="text-sm text-white/70 sm:text-base"
              >
                • {title}

                {showItemPrice
                  ? ` (+€${item.price})`
                  : ""}
              </p>
            );
          })
        )}
      </div>
    </div>
  );
}

const customTranslations = {
  de: {
    websiteNames: {
      landing: "Landing Page",

      business:
        "Mehrseitige Unternehmenswebsite",

      shop: "Online-Shop",

      custom:
        "Individuelle Website-Dienstleistung",
    },

    customDescription:
      "Beschreiben Sie im Kontaktformular, welche Änderungen oder Funktionen Sie für Ihre bestehende Website benötigen.",

    estimatedPrice:
      "Individuelles Angebot",

    priceOnRequest:
      "Preis nach Absprache",
  },

  en: {
    websiteNames: {
      landing: "Landing Page",

      business:
        "Multi-page Business Website",

      shop: "Online Store",

      custom:
        "Individual Website Work",
    },

    customDescription:
      "Describe the changes or features you need for your existing website in the contact form.",

    estimatedPrice:
      "Individual Quote",

    priceOnRequest:
      "Price on request",
  },

  ru: {
    websiteNames: {
      landing: "Landing Page",

      business:
        "Многостраничный сайт",

      shop:
        "Интернет-магазин",

      custom:
        "Индивидуальная доработка сайта",
    },

    customDescription:
      "Опишите в контактной форме, какие изменения или функции нужны для вашего существующего сайта.",

    estimatedPrice:
      "Индивидуальное предложение",

    priceOnRequest:
      "Цена по договорённости",
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
  support,
}: SummaryProps) {
  const { language } = useLanguage();

  const t = translations[language];

  const summaryT =
    t.calculatorSteps.summary;

  const customT =
    customTranslations[language];

  const isCustomWork =
    website.id === "custom";

  const websiteNames =
    customT.websiteNames as Readonly<
      Record<string, string>
    >;

  const translatedWebsiteName =
    websiteNames[website.id] ??
    website.title;

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

  const [
    displayPrice,
    setDisplayPrice,
  ] = useState(total);

  const [
    priceChange,
    setPriceChange,
  ] = useState(0);

  const [
    showChange,
    setShowChange,
  ] = useState(false);

  const previousPrice =
    useRef(total);

  useEffect(() => {
    const previous =
      previousPrice.current;

    const difference =
      total - previous;

    setPriceChange(difference);

    let changeTimeout:
      | ReturnType<
          typeof setTimeout
        >
      | undefined;

    if (difference !== 0) {
      setShowChange(true);

      changeTimeout =
        setTimeout(() => {
          setShowChange(false);
        }, 450);
    }

    previousPrice.current =
      total;

    const duration = 350;

    const start =
      performance.now();

    let animationFrameId = 0;

    function animatePrice(
      now: number
    ) {
      const progress =
        Math.min(
          (now - start) /
            duration,
          1
        );

      const value =
        Math.round(
          previous +
            (total - previous) *
              progress
        );

      setDisplayPrice(value);

      if (progress < 1) {
        animationFrameId =
          requestAnimationFrame(
            animatePrice
          );
      }
    }

    animationFrameId =
      requestAnimationFrame(
        animatePrice
      );

    return () => {
      cancelAnimationFrame(
        animationFrameId
      );

      if (changeTimeout) {
        clearTimeout(
          changeTimeout
        );
      }
    };
  }, [total]);

  return (
    <aside
      className="
        w-full
        rounded-[24px]
        border
        border-white/10
        bg-gradient-to-b
        from-white/[0.06]
        to-white/[0.02]
        p-5
        sm:p-8
        lg:sticky
        lg:top-32
        lg:rounded-[32px]
      "
    >
      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
        {summaryT.title}
      </p>

      <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-8">
        {/* Website */}

        <div>
          <p className="text-sm text-white/40">
            {summaryT.website}
          </p>

          <p className="mt-2 text-xl font-semibold text-white">
            {
              translatedWebsiteName
            }
          </p>
        </div>

        {isCustomWork ? (
          <div
            className="
              rounded-2xl
              border
              border-blue-400/20
              bg-blue-500/10
              p-5
            "
          >
            <p className="leading-7 text-white/70">
              {
                customT.customDescription
              }
            </p>
          </div>
        ) : (
          <>
            <SelectionGroup
              label={
                summaryT.languages
              }
              selectedIds={
                languages
              }
              items={allLanguages}
              getTitle={(
                id,
                fallbackTitle
              ) =>
                getCalculatorLanguageTitle(
                  language,
                  id,
                  fallbackTitle
                )
              }
            />

            <SelectionGroup
              label={
                summaryT.marketing
              }
              selectedIds={
                marketing
              }
              items={allMarketing}
              getTitle={(
                id,
                fallbackTitle
              ) =>
                getTranslatedServiceTitle(
                  "marketing",
                  id,
                  fallbackTitle
                )
              }
            />

            <SelectionGroup
              label={
                summaryT.branding
              }
              selectedIds={
                branding
              }
              items={allBranding}
              getTitle={(
                id,
                fallbackTitle
              ) =>
                getTranslatedServiceTitle(
                  "branding",
                  id,
                  fallbackTitle
                )
              }
            />

            <SelectionGroup
              label={
                summaryT.features
              }
              selectedIds={
                features
              }
              items={allFeatures}
              showPrice
              getTitle={(
                id,
                fallbackTitle
              ) =>
                getTranslatedServiceTitle(
                  "features",
                  id,
                  fallbackTitle
                )
              }
            />

            <SelectionGroup
              label={
                summaryT.monthlyServices
              }
              selectedIds={
                support
              }
              items={allSupport}
              getTitle={(
                id,
                fallbackTitle
              ) =>
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

      {/* Price */}

      {isCustomWork ? (
        <div
          className="
            rounded-2xl
            border
            border-blue-400/20
            bg-gradient-to-br
            from-blue-500/15
            to-white/[0.03]
            p-5
          "
        >
          <p className="text-sm text-white/45">
            {
              customT.estimatedPrice
            }
          </p>

          <p className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
            {
              customT.priceOnRequest
            }
          </p>
        </div>
      ) : (
        <>
          <div className="relative">
            <AnimatePresence mode="wait">
              {showChange &&
                priceChange !== 0 && (
                  <motion.div
                    key={
                      priceChange
                    }
                    initial={{
                      opacity: 0,
                      y: 18,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      y: -12,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -40,
                      scale: 0.9,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    className={`
                      absolute
                      -top-8
                      left-0
                      z-20
                      rounded-full
                      px-4
                      py-1.5
                      text-sm
                      font-semibold
                      backdrop-blur-xl

                      ${
                        priceChange >
                        0
                          ? "border border-green-400/30 bg-green-500/15 text-green-300"
                          : "border border-red-400/30 bg-red-500/15 text-red-300"
                      }
                    `}
                  >
                    {priceChange > 0
                      ? "+"
                      : "-"}

                    €

                    {Math.abs(
                      priceChange
                    )}
                  </motion.div>
                )}
            </AnimatePresence>

            <p className="text-white/45">
              {
                summaryT.estimatedPrice
              }
            </p>

            <motion.h2
              key={displayPrice}
              initial={{
                scale: 0.96,
              }}
              animate={{
                scale: [
                  1,
                  1.05,
                  1,
                ],
              }}
              transition={{
                duration: 0.25,
              }}
              className="mt-4 text-5xl font-bold text-white sm:text-6xl"
            >
              €{displayPrice}
            </motion.h2>
          </div>

          {/* Monthly price */}

          <div
            className="
              mt-8
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-5
            "
          >
            <p className="text-sm text-white/45">
              {
                summaryT.monthlyServices
              }
            </p>

            <p className="mt-2 text-3xl font-semibold text-white">
              €{monthlyTotal}

              <span className="text-lg text-white/45">
                {" "}
                {summaryT.perMonth}
              </span>
            </p>
          </div>
        </>
      )}
    </aside>
  );
}