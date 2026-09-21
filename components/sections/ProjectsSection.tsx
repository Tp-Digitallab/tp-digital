"use client";

import Link from "next/link";

import Container from "@/components/common/Container";
import ProjectPreview from "@/components/portfolio/ProjectPreview";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Grid from "@/components/ui/background/Grid";

const projectsCopy = {
  de: {
    eyebrow: "Ausgewählte Kundenprojekte",
    title: "Websites, die bereits online sind.",
    description:
      "Diese Websites habe ich für meine Kunden umgesetzt. Sehen Sie sich die Projekte an und verschaffen Sie sich einen eigenen Eindruck von meiner Arbeit.",
    contactTitle: "Wie könnte Ihre Website aussehen?",
    contactDescription:
      "Beschreiben Sie mir kurz Ihr Unternehmen und Ihre Wünsche. Ich kläre mit Ihnen schriftlich, welche Inhalte und Funktionen Sie brauchen. Vor dem Start erhalten Sie ein Angebot mit klarem Leistungsumfang und Festpreis.",
    button: "Unverbindliches Angebot anfragen",
    note: "Die Anfrage ist unverbindlich. Die Abstimmung erfolgt schriftlich.",
  },

  en: {
    eyebrow: "Selected client projects",
    title: "Websites that are already live.",
    description:
      "I created these websites for my clients. Explore the projects and see my work for yourself.",
    contactTitle: "What could your website look like?",
    contactDescription:
      "Tell me briefly about your business and what you have in mind. We will clarify the content and features you need in writing. Before work begins, you will receive a quote with a clear scope and a fixed price.",
    button: "Request a no-obligation quote",
    note: "Your enquiry carries no obligation. We discuss everything in writing.",
  },

  ru: {
    eyebrow: "Проекты клиентов",
    title: "Сайты, которые уже работают.",
    description:
      "Эти сайты я разработал для своих клиентов. Посмотрите проекты и оцените мою работу самостоятельно.",
    contactTitle: "Каким может быть ваш сайт?",
    contactDescription:
      "Коротко расскажите о своём бизнесе и пожеланиях. В переписке мы определим необходимые разделы и функции. До начала работы вы получите предложение с понятным объёмом работ и фиксированной ценой.",
    button: "Запросить предложение",
    note: "Заявка ни к чему не обязывает. Всё согласуем в переписке.",
  },
};

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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.08),transparent_60%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <Grid />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
            {t.eyebrow}
          </p>

          <h2
            id="projects-heading"
            className="break-words text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            {t.title}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            {t.description}
          </p>
        </div>

        <div className="mt-10 sm:mt-14">
          <ProjectPreview />
        </div>

        <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:mt-10 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              {t.contactTitle}
            </h3>

            <p className="mt-4 text-base leading-7 text-white/65">
              {t.contactDescription}
            </p>
          </div>

          <div className="mt-6 lg:mt-0 lg:w-72 lg:shrink-0">
            <Link
              href="/webdesign#anfrage"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-blue-600 px-6 py-4 text-center text-sm font-semibold leading-6 text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505]"
            >
              {t.button}
            </Link>

            <p className="mt-3 text-center text-xs leading-5 text-white/55">
              {t.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}