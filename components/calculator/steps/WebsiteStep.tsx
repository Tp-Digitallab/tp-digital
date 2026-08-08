"use client";

import { websiteTypes } from "@/config/calculator";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";

type WebsiteType =
  (typeof websiteTypes)[number];

interface Props {
  website: WebsiteType;

  setWebsite: (
    website: WebsiteType
  ) => void;

  next: () => void;
}

const websiteTranslations = {
  de: {
    landing: {
      title: "Landing Page",

      description:
        "Eine fokussierte Seite für ein bestimmtes Angebot, eine Dienstleistung oder ein Produkt.",
    },

    business: {
      title:
        "Mehrseitige Unternehmenswebsite",

      description:
        "Eine professionelle Website mit mehreren Seiten für Unternehmen, Dienstleistungen und Kundengewinnung.",
    },

    shop: {
      title: "Online-Shop",

      description:
        "Ein moderner Online-Shop für den digitalen Verkauf von Produkten oder Dienstleistungen.",
    },

    custom: {
      title:
        "Individuelle Website-Dienstleistung",

      description:
        "Sie haben bereits eine Website? Beschreiben Sie uns, was geändert werden soll — zum Beispiel Menü, neue Seite, mobile Ansicht, Design, Fehlerbehebung oder eine individuelle Funktion.",
    },

    priceOnRequest:
      "Preis nach Absprache",
  },

  en: {
    landing: {
      title: "Landing Page",

      description:
        "A focused page for a specific offer, service or product.",
    },

    business: {
      title:
        "Multi-page Business Website",

      description:
        "A professional website with multiple pages for presenting your business, services and generating leads.",
    },

    shop: {
      title: "Online Store",

      description:
        "A modern online store for selling products or services digitally.",
    },

    custom: {
      title:
        "Individual Website Work",

      description:
        "Already have a website? Tell us what should be changed — for example the menu, a new page, mobile layout, design, bug fixes or a custom feature.",
    },

    priceOnRequest:
      "Price on request",
  },

  ru: {
    landing: {
      title: "Landing Page",

      description:
        "Одностраничный сайт для отдельной услуги, предложения или продукта.",
    },

    business: {
      title:
        "Многостраничный сайт",

      description:
        "Профессиональный сайт с несколькими страницами для презентации компании, услуг и привлечения клиентов.",
    },

    shop: {
      title:
        "Интернет-магазин",

      description:
        "Современный интернет-магазин для продажи товаров или услуг онлайн.",
    },

    custom: {
      title:
        "Индивидуальная доработка сайта",

      description:
        "У вас уже есть сайт? Опишите, что нужно изменить: меню, новая страница, мобильная версия, дизайн, исправление ошибок или индивидуальная функция.",
    },

    priceOnRequest:
      "Цена по договорённости",
  },
} as const;

export default function WebsiteStep({
  website,
  setWebsite,
  next,
}: Props) {
  const { language } = useLanguage();

  const t = translations[language];

  const websiteT =
    websiteTranslations[language];

  return (
    <section>
      <p className="mb-2 text-sm uppercase tracking-[0.3em] text-blue-400">
        {t.calculatorSteps.website.step}
      </p>

      <h2 className="text-3xl font-semibold text-white sm:text-5xl">
        {
          t.calculatorSteps.website
            .title
        }
      </h2>

      <p className="mt-4 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
        {
          t.calculatorSteps.website
            .description
        }
      </p>

      <div className="mt-14 space-y-6">
        {websiteTypes.map((item) => {
          const active =
            website.id === item.id;

          const content =
            websiteT[
              item.id as keyof typeof websiteT
            ];

          const isCustom =
            item.id === "custom";

          const translatedContent =
            typeof content === "object"
              ? content
              : {
                  title: item.title,
                  description:
                    item.description,
                };

          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={active}
              onClick={() =>
                setWebsite(item)
              }
              className={`
                relative
                w-full
                overflow-hidden
                rounded-2xl
                border
                p-4
                text-left
                transition-all
                duration-300
                sm:p-8

                ${
                  active
                    ? `
                      border-blue-400/40
                      bg-gradient-to-br
                      from-blue-500/15
                      to-white/[0.03]
                      shadow-[0_20px_60px_rgba(59,130,246,0.18)]
                    `
                    : `
                      border-white/10
                      bg-white/[0.03]
                      hover:border-white/20
                      hover:bg-white/[0.05]
                    `
                }
              `}
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white sm:text-3xl">
                    {
                      translatedContent.title
                    }
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/60 sm:text-base sm:leading-8">
                    {
                      translatedContent.description
                    }
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className={`
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    transition-all

                    ${
                      active
                        ? "border-blue-400 bg-blue-500 text-white"
                        : "border-white/15 text-white/30"
                    }
                  `}
                >
                  ✓
                </div>
              </div>

              <div className="mt-8">
                {isCustom ? (
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                      {
                        t.calculatorSteps
                          .website
                          .startingFrom
                      }
                    </p>

                    <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                      {
                        websiteT.priceOnRequest
                      }
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                      {
                        t.calculatorSteps
                          .website
                          .startingFrom
                      }
                    </p>

                    <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                      €{item.price}
                    </p>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex justify-stretch sm:justify-end">
        <button
          type="button"
          onClick={next}
          className="
            w-full
            rounded-full
            bg-blue-500
            px-8
            py-4
            text-white
            transition
            hover:bg-blue-400
            sm:w-auto
          "
        >
          {
            t.calculatorSteps.website
              .next
          }{" "}
          →
        </button>
      </div>
    </section>
  );
}