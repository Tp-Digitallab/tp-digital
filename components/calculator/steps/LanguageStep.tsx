"use client";

import type {
  Dispatch,
  SetStateAction,
} from "react";

import { languages } from "@/config/calculator";

import {
  getCalculatorLanguageTitle,
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

export default function LanguageStep({
  selected,
  setSelected,
  back,
  next,
}: Props) {
  const { language } = useLanguage();

  const t = translations[language];

  const primary =
    selected[0] ?? "de";

  const additional =
    selected.slice(1);

  function setPrimary(id: string) {
    setSelected(
      (currentSelected) => {
        const currentAdditional =
          currentSelected
            .slice(1)
            .filter(
              (item) =>
                item !== id
            );

        return [
          id,
          ...currentAdditional,
        ];
      }
    );
  }

  function toggleAdditional(
    id: string
  ) {
    setSelected(
      (currentSelected) => {
        const currentPrimary =
          currentSelected[0] ??
          "de";

        if (id === currentPrimary) {
          return currentSelected;
        }

        const currentAdditional =
          currentSelected.slice(1);

        if (
          currentAdditional.includes(
            id
          )
        ) {
          return [
            currentPrimary,

            ...currentAdditional.filter(
              (item) =>
                item !== id
            ),
          ];
        }

        return [
          currentPrimary,
          ...currentAdditional,
          id,
        ];
      }
    );
  }

  return (
    <section>
      <p className="mb-2 text-sm uppercase tracking-[0.3em] text-blue-400">
        {
          t.calculatorSteps.languages
            .step
        }
      </p>

      <h2 className="text-3xl font-semibold text-white sm:text-5xl">
        {
          t.calculatorSteps.languages
            .title
        }
      </h2>

      <p className="mt-4 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
        {
          t.calculatorSteps.languages
            .description
        }
      </p>

      {/* Primary language */}

      <div className="mt-10 sm:mt-14">
        <h3 className="mb-6 text-xl font-semibold text-white">
          {
            t.calculatorSteps.languages
              .primary
          }
        </h3>

        <div className="space-y-4">
          {languages
            .filter(
              (item) =>
                item.id !== "other"
            )
            .map((item) => {
              const active =
                primary === item.id;

              const title =
                getCalculatorLanguageTitle(
                  language,
                  item.id,
                  item.title
                );

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={
                    active
                  }
                  onClick={() =>
                    setPrimary(
                      item.id
                    )
                  }
                  className={`
                    w-full
                    rounded-3xl
                    border
                    p-5
                    text-left
                    transition-all
                    sm:p-6

                    ${
                      active
                        ? "border-blue-400/40 bg-blue-500/10"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="break-words text-lg font-semibold text-white sm:text-2xl">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm text-white/50 sm:text-base">
                        {
                          t
                            .calculatorSteps
                            .languages
                            .included
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
                </button>
              );
            })}
        </div>
      </div>

      {/* Additional languages */}

      <div className="mt-10 sm:mt-14">
        <h3 className="mb-6 text-xl font-semibold text-white">
          {
            t.calculatorSteps.languages
              .additional
          }
        </h3>

        <div className="space-y-4">
          {languages
            .filter(
              (item) =>
                item.id !==
                primary
            )
            .map((item) => {
              const active =
                additional.includes(
                  item.id
                );

              const title =
                getCalculatorLanguageTitle(
                  language,
                  item.id,
                  item.title
                );

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={
                    active
                  }
                  onClick={() =>
                    toggleAdditional(
                      item.id
                    )
                  }
                  className={`
                    w-full
                    rounded-3xl
                    border
                    px-4
                    py-4
                    text-left
                    transition-all
                    sm:p-6

                    ${
                      active
                        ? "border-blue-400/40 bg-blue-500/10"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="break-words text-lg font-semibold text-white sm:text-2xl">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm text-white/50 sm:text-base">
                        +€50
                      </p>
                    </div>

                    <div
                      aria-hidden="true"
                      className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        text-sm

                        ${
                          active
                            ? "border-blue-400 bg-blue-500 text-white"
                            : "border-white/20 text-white/25"
                        }
                      `}
                    >
                      {active
                        ? "✓"
                        : ""}
                    </div>
                  </div>
                </button>
              );
            })}
        </div>
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
          ←{" "}
          {
            t.calculatorSteps.languages
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
            t.calculatorSteps.languages
              .next
          }{" "}
          →
        </button>
      </div>
    </section>
  );
}