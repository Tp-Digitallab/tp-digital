"use client";

import Link from "next/link";

import Container from "@/components/common/Container";
import ProjectPreview from "@/components/portfolio/ProjectPreview";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Grid from "@/components/ui/background/Grid";

const projectsCopy = {
  de: {
    eyebrow: "Einblicke in meine Arbeit",

    title: "So sehen Websites für meine Kunden aus.",

    description:
      "Zwei unterschiedliche Unternehmen, zwei passende Websites. Sehen Sie, was ich umgesetzt habe und wie Besucher die Angebote kennenlernen und Kontakt aufnehmen können.",

    contactTitle: "Sie möchten etwas Ähnliches für Ihren Betrieb?",

    contactDescription:
      "Erzählen Sie mir, was Sie anbieten und was Ihre Website ermöglichen soll. Wir klären gemeinsam, welche Inhalte und Funktionen dafür sinnvoll sind.",

    button: "Eigenes Projekt anfragen",

    note:
      "Unverbindlich. Sie erhalten ein schriftliches Angebot vor Projektbeginn.",
  },

  en: {
    eyebrow: "A closer look at my work",

    title: "Websites I have built for my clients.",

    description:
      "Two different businesses, two websites built around their services. Explore what I created and how visitors can learn about each offer and get in touch.",

    contactTitle: "Would you like something similar for your business?",

    contactDescription:
      "Tell me what you offer and what you want your website to do. We will work out which content and features make sense for your project.",

    button: "Enquire about your project",

    note:
      "No obligation. You receive a written quote before work begins.",
  },

  ru: {
    eyebrow: "Примеры моей работы",

    title: "Такие сайты я делаю для своих клиентов.",

    description:
      "Два разных бизнеса — два решения под их услуги. Посмотрите, что я реализовал и как посетители могут изучить предложение и связаться с компанией.",

    contactTitle: "Хотите похожее решение для своего бизнеса?",

    contactDescription:
      "Расскажите, что вы предлагаете и что должен позволять ваш сайт. Вместе определим, какие материалы и функции для этого нужны.",

    button: "Обсудить свой проект",

    note:
      "Без обязательств. До начала работы вы получите письменное предложение.",
  },
} as const;

export default function ProjectsSection() {
  const { language } = useLanguage();
  const t = projectsCopy[language];

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#050505] py-20 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.07),transparent_60%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <Grid />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase leading-6 tracking-[0.2em] text-blue-300">
            {t.eyebrow}
          </p>

          <h2
            id="projects-heading"
            className="break-words text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {t.title}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            {t.description}
          </p>
        </div>

        <div className="mt-10 sm:mt-14">
          <ProjectPreview />
        </div>

        <div className="mt-8 rounded-[28px] border border-white/10 bg-[#0b0d12] p-6 sm:mt-10 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold leading-8 text-white sm:text-2xl">
              {t.contactTitle}
            </h3>

            <p className="mt-3 text-base leading-7 text-white/75">
              {t.contactDescription}
            </p>
          </div>

          <div className="mt-6 lg:mt-0 lg:w-72 lg:shrink-0">
            <Link
              href={`/${language}/webdesign#anfrage`}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-blue-500 px-6 py-4 text-center text-sm font-semibold leading-6 text-white transition-colors hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              {t.button}
            </Link>

            <p className="mt-3 text-center text-xs leading-5 text-white/60">
              {t.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}