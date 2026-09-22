"use client";

import type { Dispatch, SetStateAction } from "react";

import { languages } from "@/config/calculator";
import { getCalculatorLanguageTitle } from "@/config/calculatorOptionsTranslations";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";

interface Props {
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
  includedCount?: number;
  back: () => void;
  next: () => void;
}

const copy = {
  de: {
    allowance: "Im Preis enthaltene Sprachen:",
    extra: "Jede weitere Sprache: +50 €.",
    included: "Ohne Aufpreis",
    note:
      "Weniger Sprachen zu wählen reduziert den Paketpreis nicht. Weitere Sprachwünsche können Sie in Ihrer Anfrage beschreiben.",
  },
  en: {
    allowance: "Languages included in the price:",
    extra: "Each additional language: +€50.",
    included: "No extra charge",
    note:
      "Choosing fewer languages does not reduce the package price. You can describe any other language requirements in your enquiry.",
  },
  ru: {
    allowance: "Языков включено в стоимость:",
    extra: "Каждый язык сверх этого количества: +50 €.",
    included: "Без доплаты",
    note:
      "Выбор меньшего количества языков не уменьшает цену пакета. Пожелания по другим языкам можно указать в заявке.",
  },
} as const;

const buttonBase =
  "w-full rounded-3xl border p-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 sm:p-6";

export default function LanguageStep({
  selected,
  setSelected,
  includedCount = 1,
  back,
  next,
}: Props) {
  const { language } = useLanguage();
  const t = translations[language].calculatorSteps.languages;
  const text = copy[language];

  const allowance = Math.max(1, includedCount);
  const primary = selected[0] ?? "de";

  function setPrimary(id: string) {
    setSelected((current) => {
      if (current[0] === id) {
        return current;
      }

      if (current.includes(id)) {
        return [id, ...current.filter((value) => value !== id)];
      }

      return [id, ...current.slice(1)];
    });
  }

  function toggleAdditional(id: string) {
    setSelected((current) => {
      const main = current[0] ?? "de";

      if (id === main) {
        return current;
      }

      if (current.includes(id)) {
        return current.filter((value) => value !== id);
      }

      return [main, ...current.slice(1), id];
    });
  }

  return (
    <section>
      <p className="mb-2 text-sm uppercase tracking-[0.3em] text-blue-400">
        {t.step}
      </p>

      <h2 className="text-3xl font-semibold text-white sm:text-5xl">
        {t.title}
      </h2>

      <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/[0.08] p-5">
        <p className="font-medium text-white">
          {text.allowance} {allowance}
        </p>

        <p className="mt-2 text-sm leading-6 text-white/70">
          {text.extra}
        </p>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-semibold text-white">
          {t.primary}
        </h3>

        <div className="space-y-3">
          {languages
            .filter((item) => item.id !== "other")
            .map((item) => {
              const active = primary === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setPrimary(item.id)}
                  className={`${buttonBase} ${
                    active
                      ? "border-blue-400/40 bg-blue-500/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/25"
                  }`}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span>
                      <span className="block text-lg font-semibold text-white">
                        {getCalculatorLanguageTitle(
                          language,
                          item.id,
                          item.title
                        )}
                      </span>

                      <span className="mt-2 block text-sm text-green-300">
                        {text.included}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-xl text-blue-300"
                    >
                      {active ? "✓" : ""}
                    </span>
                  </span>
                </button>
              );
            })}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-semibold text-white">
          {t.additional}
        </h3>

        <div className="space-y-3">
          {languages
            .filter((item) => item.id !== primary)
            .map((item) => {
              const index = selected.indexOf(item.id);
              const active = index !== -1;

              const withoutExtraCharge = active
                ? index < allowance
                : selected.length < allowance;

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggleAdditional(item.id)}
                  className={`${buttonBase} ${
                    active
                      ? "border-blue-400/40 bg-blue-500/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/25"
                  }`}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span>
                      <span className="block text-lg font-semibold text-white">
                        {getCalculatorLanguageTitle(
                          language,
                          item.id,
                          item.title
                        )}
                      </span>

                      <span
                        className={`mt-2 block text-sm ${
                          withoutExtraCharge
                            ? "text-green-300"
                            : "text-white/70"
                        }`}
                      >
                        {withoutExtraCharge
                          ? text.included
                          : "+50 €"}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-xl text-blue-300"
                    >
                      {active ? "✓" : "+"}
                    </span>
                  </span>
                </button>
              );
            })}
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-white/60">
        {text.note}
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={back}
          className="rounded-full border border-white/15 px-8 py-4 text-white hover:bg-white/5"
        >
          ← {t.back}
        </button>

        <button
          type="button"
          onClick={next}
          className="rounded-full bg-blue-500 px-8 py-4 font-medium text-white hover:bg-blue-400"
        >
          {t.next} →
        </button>
      </div>
    </section>
  );
}