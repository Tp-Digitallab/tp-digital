"use client";

import type {
  Dispatch,
  SetStateAction,
} from "react";

import { marketing } from "@/config/calculator";

import {
  getCalculatorOptionText,
} from "@/config/calculatorOptionsTranslations";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";

interface Props {
  selected: string[];

  setSelected: Dispatch<
    SetStateAction<string[]>
  >;

  back: () => void;
  next: () => void;
}

export default function MarketingStep({
  selected,
  setSelected,
  back,
  next,
}: Props) {
  const { language } = useLanguage();

  const t = translations[language];

  function toggle(id: string) {
    setSelected(
      (currentSelected) =>
        currentSelected.includes(id)
          ? currentSelected.filter(
              (item) =>
                item !== id
            )
          : [
              ...currentSelected,
              id,
            ]
    );
  }

  return (
    <section>
      <p className="mb-2 text-sm uppercase tracking-[0.3em] text-blue-400">
        {
          t.calculatorSteps.marketing
            .step
        }
      </p>

      <h2 className="text-3xl font-semibold text-white sm:text-5xl">
        {
          t.calculatorSteps.marketing
            .title
        }
      </h2>

      <p className="mt-4 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
        {
          t.calculatorSteps.marketing
            .description
        }
      </p>

      <div className="mt-14 space-y-5">
        {marketing.map((item) => {
          const active =
            selected.includes(item.id);

          const included =
            "included" in item &&
            item.included === true;

          const content =
            getCalculatorOptionText(
              language,
              "marketing",
              item.id,
              {
                title: item.title,
                description:
                  item.description,
              }
            );

          if (included) {
            return (
              <div
                key={item.id}
                className="
                  w-full
                  rounded-[24px]
                  border
                  border-green-400/30
                  bg-green-500/10
                  p-5
                  sm:p-7
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-5
                    sm:flex-row
                    sm:items-start
                    sm:justify-between
                  "
                >
                  <div>
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                      {content.title}
                    </h3>

                    <p className="mt-3 leading-7 text-white/60">
                      {
                        content.description
                      }
                    </p>
                  </div>

                  <div
                    aria-hidden="true"
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-green-400
                      bg-green-500
                      text-white
                    "
                  >
                    ✓
                  </div>
                </div>

                <div className="mt-8 text-lg font-semibold text-green-400">
                  {
                    t.calculatorSteps
                      .marketing.included
                  }
                </div>
              </div>
            );
          }

          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={active}
              onClick={() =>
                toggle(item.id)
              }
              className={`
                w-full
                rounded-[24px]
                border
                p-5
                text-left
                transition-all
                duration-300
                sm:p-7

                ${
                  active
                    ? `
                      border-blue-400/40
                      bg-blue-500/10
                      shadow-[0_15px_40px_rgba(59,130,246,0.15)]
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
              <div
                className="
                  flex
                  flex-col
                  gap-5
                  sm:flex-row
                  sm:items-start
                  sm:justify-between
                "
              >
                <div>
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {content.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/55">
                    {
                      content.description
                    }
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className={`
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    sm:h-11
                    sm:w-11

                    ${
                      active
                        ? "border-blue-400 bg-blue-500 text-white"
                        : "border-white/15 text-white/25"
                    }
                  `}
                >
                  ✓
                </div>
              </div>

              <div className="mt-8 text-lg font-semibold text-white">
                +€{item.price}
              </div>
            </button>
          );
        })}
      </div>

      <div
        className="
          mt-10
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <button
          type="button"
          onClick={back}
          className="
            w-full
            rounded-full
            border
            border-white/10
            px-8
            py-4
            text-white
            transition
            hover:bg-white/5
            sm:w-auto
          "
        >
          {
            t.calculatorSteps.marketing
              .back
          }
        </button>

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
            t.calculatorSteps.marketing
              .next
          }
        </button>
      </div>
    </section>
  );
}