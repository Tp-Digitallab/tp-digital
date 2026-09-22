"use client";

import { useState } from "react";
import Image from "next/image";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { projects } from "@/config/projects";

type ProjectText = {
  category: string;
  purpose: string;
  solution: string;
  visitor: string;
};

type PortfolioText = {
  choose: string;
  visit: string;
  newTab: string;
  preview: string;
  purpose: string;
  solution: string;
  visitor: string;
  comingSoon: string;
  projects: Record<string, ProjectText>;
};

const copy: Record<"de" | "en" | "ru", PortfolioText> = {
  de: {
    choose: "Kundenprojekt auswählen",
    visit: "Website ansehen",
    newTab: "Öffnet in einem neuen Tab",
    preview: "Website-Vorschau",
    purpose: "Wofür die Website da ist",
    solution: "Meine Umsetzung",
    visitor: "Was Besucher damit machen können",
    comingSoon: "Bald verfügbar",

    projects: {
      exzellentia: {
        category: "Firmenwebsite · Bau und Innenausbau",
        purpose:
          "Die Leistungen eines Bauunternehmens verständlich vorstellen und ausgeführte Arbeiten zeigen.",
        solution:
          "Eine Unternehmenswebsite mit Leistungsübersicht, Projektgalerie und Kontaktmöglichkeiten. Zum Projekt gehören außerdem SEO und Google Ads.",
        visitor:
          "Interessenten können Leistungen vergleichen, Projektbilder ansehen und ihr eigenes Vorhaben anfragen.",
      },

      grabprofi: {
        category: "Landingpage · Lokale Grabpflege",
        purpose:
          "Eine lokale Dienstleistung vorstellen und die Kontaktaufnahme für Interessenten einfach machen.",
        solution:
          "Eine Landingpage für GrabProfi mit Informationen zur Grabpflege, lokalem SEO und direktem WhatsApp-Kontakt.",
        visitor:
          "Interessenten können sich über das Angebot informieren und ihre Fragen direkt per WhatsApp stellen.",
      },
    },
  },

  en: {
    choose: "Choose a client project",
    visit: "View website",
    newTab: "Opens in a new tab",
    preview: "Website preview",
    purpose: "What the website is for",
    solution: "What I built",
    visitor: "What visitors can do",
    comingSoon: "Coming soon",

    projects: {
      exzellentia: {
        category: "Business website · Construction and interiors",
        purpose:
          "Explain a construction company’s services clearly and showcase completed work.",
        solution:
          "A business website with a service overview, project gallery and contact options. The project also includes SEO and Google Ads.",
        visitor:
          "Potential customers can explore services, view project photos and enquire about their own project.",
      },

      grabprofi: {
        category: "Landing page · Local grave care",
        purpose:
          "Present a local service and make it easy for potential customers to get in touch.",
        solution:
          "A landing page for GrabProfi with grave care information, local SEO and direct WhatsApp contact.",
        visitor:
          "Potential customers can learn about the service and ask questions directly through WhatsApp.",
      },
    },
  },

  ru: {
    choose: "Выберите проект клиента",
    visit: "Посмотреть сайт",
    newTab: "Откроется в новой вкладке",
    preview: "Предпросмотр сайта",
    purpose: "Какую задачу решает сайт",
    solution: "Что я реализовал",
    visitor: "Что может сделать посетитель",
    comingSoon: "Скоро",

    projects: {
      exzellentia: {
        category: "Сайт компании · Строительство и отделка",
        purpose:
          "Понятно представить услуги строительной компании и показать выполненные работы.",
        solution:
          "Сайт компании с описанием услуг, галереей проектов и способами связи. Работа над проектом также включает SEO и Google Ads.",
        visitor:
          "Потенциальный клиент может изучить услуги, посмотреть фотографии работ и отправить запрос по своему проекту.",
      },

      grabprofi: {
        category: "Лендинг · Уход за захоронениями",
        purpose:
          "Представить местную услугу и упростить обращение для заинтересованных клиентов.",
        solution:
          "Лендинг GrabProfi с информацией об уходе за захоронениями, локальным SEO и прямой связью через WhatsApp.",
        visitor:
          "Посетитель может ознакомиться с предложением и задать свои вопросы напрямую в WhatsApp.",
      },
    },
  },
};

export default function ProjectPreview() {
  const { language } = useLanguage();
  const [currentProject, setCurrentProject] = useState(0);

  const t = copy[language];
  const project = projects[currentProject] ?? projects[0];

  if (!project) {
    return null;
  }

  const content = t.projects[project.id];

  return (
    <div>
      {projects.length > 1 && (
        <div className="mb-5">
          <p className="mb-3 text-sm text-white/65">
            {t.choose}
          </p>

          <div
            role="group"
            aria-label={t.choose}
            className="grid gap-3 sm:grid-cols-2"
          >
            {projects.map((item, index) => {
              const active = item.id === project.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  aria-controls="portfolio-project-detail"
                  onClick={() => setCurrentProject(index)}
                  className={`min-w-0 rounded-2xl border p-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 motion-reduce:transition-none ${
                    active
                      ? "border-blue-400/60 bg-blue-500/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/25"
                  }`}
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="min-w-0">
                      <span className="block break-words font-semibold text-white">
                        {item.title}
                      </span>

                      <span className="mt-2 block text-sm leading-6 text-white/65">
                        {t.projects[item.id]?.category ??
                          item.category}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className="shrink-0 text-blue-300"
                    >
                      {active ? "✓" : "→"}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <article
        id="portfolio-project-detail"
        aria-labelledby="portfolio-project-title"
        className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0d12] sm:rounded-[32px]"
      >
        <div className="flex h-14 items-center justify-between gap-4 border-b border-white/10 px-4 sm:px-6">
          <div
            aria-hidden="true"
            className="flex shrink-0 gap-2"
          >
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
          </div>

          <span className="max-w-[75%] truncate rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/65">
            {project.website
              .replace(/^https?:\/\//, "")
              .replace(/\/$/, "")}
          </span>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden bg-[#111111]">
          <Image
            key={project.id}
            src={project.image}
            alt={`${t.preview}: ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
            className="object-cover object-top"
          />
        </div>

        <div className="border-t border-white/10 p-5 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0">
              <p className="text-sm leading-6 text-blue-300">
                {content?.category ?? project.category}
              </p>

              <h3
                id="portfolio-project-title"
                className="mt-2 break-words text-2xl font-semibold text-white sm:text-3xl"
              >
                {project.title}
              </h3>
            </div>

            {project.status === "live" ? (
              <div className="shrink-0">
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.visit}: ${project.title}. ${t.newTab}.`}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 font-medium text-white transition-colors hover:border-blue-400/50 hover:bg-blue-500/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 sm:w-auto"
                >
                  {t.visit}
                  <span aria-hidden="true">↗</span>
                </a>

                <p className="mt-2 text-center text-xs leading-5 text-white/55">
                  {t.newTab}
                </p>
              </div>
            ) : (
              <p className="text-sm text-white/65">
                {t.comingSoon}
              </p>
            )}
          </div>

          {content ? (
            <>
              <dl className="mt-7 grid gap-6 border-t border-white/10 pt-7 md:grid-cols-2">
                <div>
                  <dt className="text-sm font-semibold text-blue-200">
                    {t.purpose}
                  </dt>

                  <dd className="mt-3 text-base leading-7 text-white/75">
                    {content.purpose}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-blue-200">
                    {t.solution}
                  </dt>

                  <dd className="mt-3 text-base leading-7 text-white/75">
                    {content.solution}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-500/[0.07] p-5">
                <h4 className="text-sm font-semibold text-blue-200">
                  {t.visitor}
                </h4>

                <p className="mt-2 text-base leading-7 text-white/80">
                  {content.visitor}
                </p>
              </div>
            </>
          ) : (
            <p className="mt-5 text-base leading-7 text-white/75">
              {project.description}
            </p>
          )}
        </div>
      </article>
    </div>
  );
}