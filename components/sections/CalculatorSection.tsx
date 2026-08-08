"use client";

import Calculator from "@/components/calculator/Calculator";
import Container from "@/components/common/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Grid from "@/components/ui/background/Grid";
import { translations } from "@/config/translations";

export default function CalculatorSection() {
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <section
      id="calculator"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        py-40
      "
    >
      <Grid />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.08),transparent_60%)]
        "
      />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/35">
            {t.calculator.eyebrow}
          </p>

          <h2
            className={`font-semibold leading-tight text-white md:text-7xl ${
              language === "ru"
                ? "break-words text-[clamp(1.75rem,8.5vw,3rem)]"
                : "text-5xl"
            }`}
          >
            {t.calculator.title}

            <br />

            {t.calculator.titleAccent}
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-white/60">
            {t.calculator.description}
          </p>
        </div>

        <Calculator />
      </Container>
    </section>
  );
}