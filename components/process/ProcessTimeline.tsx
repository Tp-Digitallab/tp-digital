"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";
import ProcessCard from "./ProcessCard";

export default function ProcessTimeline() {

  const { language } = useLanguage();

  const t = translations[language];

  return (
    <div className="relative mt-24">

      {/* Line */}

      <div
        className="
          absolute
          left-0
          right-0
          top-12

          hidden
          xl:block

          h-px

          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />

      <div
        className="
          grid
          gap-8

          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {t.process.steps.map((step, index) => (
  <ProcessCard
    key={index}
    step={{
      id: index + 1,
      title: step.title,
      description: step.description,
    }}
  />
))}
      </div>

    </div>
  );
}