"use client";
import Link from "next/link";

import Calculator from "@/components/calculator/Calculator";
import Container from "@/components/common/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Grid from "@/components/ui/background/Grid";

const calculatorCopy = {
  de: {
    eyebrow: "Projekt passend zusammenstellen",
    title: "Was braucht Ihr Unternehmen wirklich?",
    titleAccent: "Stellen Sie Ihr Projekt zusammen.",
    description:
      "Wählen Sie die gewünschte Website und zusätzliche Leistungen aus. Sie erhalten eine unverbindliche Orientierung. Den genauen Umfang und den endgültigen Festpreis vereinbaren wir anschließend persönlich und schriftlich.",
    note:
      "Die Auswahl ist noch keine Bestellung. Sie können Ihre Angaben jederzeit ändern.",
    steps: "In wenigen Schritten zum passenden Umfang",
  },

  en: {
    eyebrow: "Build the right project",
    title: "What does your business really need?",
    titleAccent: "Create your project scope.",
    description:
      "Choose the website and additional services you need. You will receive a no-obligation estimate. We will then agree on the exact scope and final fixed price with you in writing.",
    note:
      "Your selection is not an order. You can change your choices at any time.",
    steps: "Find the right scope in a few steps",
  },

  ru: {
    eyebrow: "Соберите подходящий проект",
    title: "Что действительно нужно вашему бизнесу?",
    titleAccent: "Сформируйте свой проект.",
    description:
      "Выберите нужный сайт и дополнительные услуги. Вы получите предварительную оценку без обязательств. Затем мы письменно согласуем точный объём работ и окончательную фиксированную цену.",
    note:
      "Выбор не является заказом. В любой момент можно изменить свои варианты.",
    steps: "Определите подходящий объём за несколько шагов",
  },
};

export default function CalculatorSection() {
  const { language } = useLanguage();
  const t = calculatorCopy[language];

  return (
    <section
      id="calculator"
      aria-labelledby="calculator-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#050505] py-20 sm:py-28 lg:py-36"
    >
      <Grid />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.1),transparent_60%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[150px]"
      />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
            {t.eyebrow}
          </p>

          <h2
            id="calculator-heading"
            className="break-words text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            {t.title}
            <br />
            <span className="text-white/65">
              {t.titleAccent}
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            {t.description}
          </p>

          <div className="mt-7 flex flex-col gap-3 text-sm leading-6 text-white/60 sm:flex-row sm:items-center sm:gap-6">
            <span className="inline-flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-green-400"
              />
              {t.steps}
            </span>

            <span className="text-white/35">
              {t.note}
            </span>
          </div>
        </div>

        <div className="mt-7">
          <Link href={`/${language}/webdesign#anfrage`} className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-blue-400">
            {language === "de" ? "Lieber direkt meine Aufgabe beschreiben" : language === "ru" ? "Просто описать мою задачу" : "Describe my project directly"}
          </Link>
        </div>
        <details className="mt-8 rounded-3xl border border-white/15 bg-[#0b0d12] p-5 sm:p-8">
          <summary className="cursor-pointer py-2 text-lg font-medium text-blue-200 focus-visible:outline-2 focus-visible:outline-blue-400">
            {language === "de" ? "Optional: Preisrahmen selbst konfigurieren" : language === "ru" ? "По желанию: рассчитать стоимость самостоятельно" : "Optional: configure a price estimate"}
          </summary>
          <div className="mt-8"><Calculator /></div>
        </details>
      </Container>
    </section>
  );
}
