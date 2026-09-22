"use client";

import type { Dispatch, SetStateAction } from "react";

import { features } from "@/config/features";
import { getCalculatorOptionText } from "@/config/calculatorOptionsTranslations";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";

interface Props {
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
  includedIds?: string[];
  back: () => void;
  next: () => void;
}

const copy = {
  de: {
    description:
      "Wählen Sie zusätzliche Funktionen nur dann, wenn Sie sie benötigen. Bereits enthaltene Funktionen kosten nicht extra.",
    included: "Im Preis enthalten",
  },
  en: {
    description:
      "Choose extra features only if you need them. Features already included in your package carry no extra charge.",
    included: "Included in the price",
  },
  ru: {
    description:
      "Выбирайте дополнительные функции, только если они вам нужны. За функции, уже включённые в пакет, доплаты нет.",
    included: "Включено в стоимость",
  },
} as const;

export default function FeaturesStep({
  selected,
  setSelected,
  includedIds = [],
  back,
  next,
}: Props) {
  const { language } = useLanguage();
  const t = translations[language].calculatorSteps.features;
  const text = copy[language];

  function toggle(id: string) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((value) => value !== id)
        : [...current, id]
    );
  }

  return (
    <section>
      <p className="mb-2 text-sm uppercase tracking-[0.3em] text-blue-400">
        {t.step}
      </p>

      <h2 className="text-3xl font-semibold text-white sm:text-5xl">
        {t.title}
      </h2>

      <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
        {text.description}
      </p>

      <div className="mt-8 space-y-4">
        {features.map((item) => {
          const included = includedIds.includes(item.id);
          const active = included || selected.includes(item.id);

          const content = getCalculatorOptionText(
            language,
            "features",
            item.id,
            {
              title: item.title,
              description: item.description,
            }
          );

          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={active}
              disabled={included}
              onClick={() => toggle(item.id)}
              className={`w-full rounded-3xl border p-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 sm:p-7 ${
                included
                  ? "border-green-400/25 bg-green-500/[0.07]"
                  : active
                    ? "border-blue-400/40 bg-blue-500/10"
                    : "border-white/10 bg-white/[0.03] hover:border-white/25"
              }`}
            >
              <span className="flex items-start justify-between gap-4">
                <span className="min-w-0">
                  <span className="block text-xl font-semibold text-white">
                    {content.title}
                  </span>

                  <span className="mt-3 block text-base leading-7 text-white/70">
                    {content.description}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className={`shrink-0 text-xl ${
                    included ? "text-green-300" : "text-blue-300"
                  }`}
                >
                  {active ? "✓" : "+"}
                </span>
              </span>

              <span
                className={`mt-5 block text-base font-semibold ${
                  included ? "text-green-300" : "text-white"
                }`}
              >
                {included
                  ? text.included
                  : `+${item.price} €`}
              </span>
            </button>
          );
        })}
      </div>

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