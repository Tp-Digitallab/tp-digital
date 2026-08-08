"use client";

import {
  calculatorOptionsTranslations,
} from "@/config/calculatorOptionsTranslations";

import { useLanguage } from "@/components/providers/LanguageProvider";

interface Props {
  step: number;
}

export default function StepIndicator({
  step,
}: Props) {
  const { language } = useLanguage();

  const content =
    calculatorOptionsTranslations[
      language
    ].stepIndicator;

  const steps = content.steps;

  const currentStepLabel =
    steps[step - 1] ??
    steps[0];

  return (
    <div className="mb-14">
      <div
        className="
          flex
          w-full
          items-center
          gap-2
          sm:gap-3
        "
      >
        {steps.map(
          (label, index) => {
            const current =
              index + 1;

            const completed =
              current <= step;

            const active =
              current === step;

            return (
              <div
                key={`${label}-${current}`}
                className="
                  min-w-0
                  flex-1
                "
              >
                <div
                  aria-hidden="true"
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-500

                    ${
                      completed
                        ? "bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.6)]"
                        : "bg-white/10"
                    }
                  `}
                />

                <p
                  aria-current={
                    active
                      ? "step"
                      : undefined
                  }
                  className={`
                    mt-3
                    truncate
                    text-center
                    text-[9px]
                    transition-all
                    duration-300
                    sm:text-xs

                    ${
                      active
                        ? "text-white"
                        : "text-white/35"
                    }
                  `}
                >
                  {label}
                </p>
              </div>
            );
          }
        )}
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <p className="text-sm uppercase tracking-[0.2em] text-white/40 sm:tracking-[0.3em]">
          {content.progress(
            step,
            steps.length
          )}
        </p>

        <p className="text-right text-sm text-white/30">
          {currentStepLabel}
        </p>
      </div>
    </div>
  );
}