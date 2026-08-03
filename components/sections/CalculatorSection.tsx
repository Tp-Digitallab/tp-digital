"use client";

import Container from "@/components/common/Container";
import Calculator from "@/components/calculator/Calculator";
import Grid from "@/components/ui/background/Grid";

import { useLanguage } from "@/components/providers/LanguageProvider";
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
        py-40
        bg-[#050505]
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


          <h2 className="text-5xl font-semibold leading-tight text-white md:text-7xl">

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