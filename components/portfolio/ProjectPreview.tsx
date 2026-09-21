"use client";

import { useState } from "react";
import Image from "next/image";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { projects } from "@/config/projects";

type ProjectText = {
  category: string;
  description: string;
  services: string[];
};

type PortfolioText = {
  visit: string;
  newTab: string;
  preview: string;
  chooseProject: string;
  services: string;
  comingSoon: string;
  projects: Record<string, ProjectText>;
};

const portfolioCopy: Record<"de" | "en" | "ru", PortfolioText> = {
  de: {
    visit: "Website ansehen",
    newTab: "Öffnet in einem neuen Tab",
    preview: "Vorschau der Website",
    chooseProject: "Projekt auswählen",
    services: "Leistungen",
    comingSoon: "Bald verfügbar",
    projects: {
      exzellentia: {
        category: "Unternehmenswebsite · Bauwesen",
        description:
          "Für Exzellentia Constructio habe ich eine Unternehmenswebsite erstellt. Zum Projekt gehören Suchmaschinenoptimierung und Google Ads.",
        services: [
          "Unternehmenswebsite",
          "Suchmaschinenoptimierung",
          "Google Ads",
        ],
      },
      grabprofi: {
        category: "Landingpage · Grabpflege",
        description:
          "Für GrabProfi habe ich eine Landingpage für lokale Grabpflege erstellt. Zum Projekt gehören lokales SEO und eine direkte Kontaktmöglichkeit über WhatsApp.",
        services: [
          "Landingpage",
          "Lokales SEO",
          "WhatsApp-Kontakt",
        ],
      },
    },
  },

  en: {
    visit: "View website",
    newTab: "Opens in a new tab",
    preview: "Website preview",
    chooseProject: "Choose a project",
    services: "Services",
    comingSoon: "Coming soon",
    projects: {
      exzellentia: {
        category: "Business website · Construction",
        description:
          "I created a business website for Exzellentia Constructio. The project includes search engine optimisation and Google Ads.",
        services: [
          "Business website",
          "Search engine optimisation",
          "Google Ads",
        ],
      },
      grabprofi: {
        category: "Landing page · Grave care",
        description:
          "I created a landing page for GrabProfi’s local grave care services. The project includes local SEO and a direct contact option through WhatsApp.",
        services: [
          "Landing page",
          "Local SEO",
          "WhatsApp contact",
        ],
      },
    },
  },

  ru: {
    visit: "Посмотреть сайт",
    newTab: "Откроется в новой вкладке",
    preview: "Предпросмотр сайта",
    chooseProject: "Выберите проект",
    services: "Что сделано",
    comingSoon: "Скоро",
    projects: {
      exzellentia: {
        category: "Сайт компании · Строительство",
        description:
          "Для Exzellentia Constructio я разработал сайт строительной компании. Работа над проектом включает поисковую оптимизацию и Google Ads.",
        services: [
          "Сайт компании",
          "Поисковая оптимизация",
          "Google Ads",
        ],
      },
      grabprofi: {
        category: "Лендинг · Уход за захоронениями",
        description:
          "Для GrabProfi я разработал лендинг местной службы ухода за захоронениями. В проект входят локальное SEO и возможность напрямую связаться через WhatsApp.",
        services: [
          "Лендинг",
          "Локальное SEO",
          "Связь через WhatsApp",
        ],
      },
    },
  },
};

export default function ProjectPreview() {
  const { language } = useLanguage();
  const [currentProject, setCurrentProject] = useState(0);

  const t = portfolioCopy[language];
  const project = projects[currentProject] ?? projects[0];

  if (!project) {
    return null;
  }

  const projectText = t.projects[project.id];
  const category = projectText?.category ?? project.category;
  const description = projectText?.description ?? project.description;
  const services = projectText?.services ?? project.technologies;

  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#111111] to-[#090909] shadow-[0_25px_70px_rgba(0,0,0,0.45)] sm:rounded-[36px]">
      <div className="flex h-14 items-center justify-between gap-4 border-b border-white/10 px-4 sm:px-6">
        <div
          aria-hidden="true"
          className="flex shrink-0 gap-2"
        >
          <div className="h-3 w-3 rounded-full bg-red-400/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <div className="h-3 w-3 rounded-full bg-green-400/80" />
        </div>

        <div className="max-w-[75%] truncate rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/60">
          {project.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </div>
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

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
        />
      </div>

      <div className="flex flex-col gap-8 border-t border-white/10 p-5 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-sm leading-6 text-blue-300">
            {category}
          </p>

          <h3 className="mt-3 break-words text-2xl font-semibold text-white sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-5 max-w-2xl leading-8 text-white/70">
            {description}
          </p>

          <ul
            aria-label={t.services}
            className="mt-6 flex flex-wrap gap-2 sm:gap-3"
          >
            {services.map((service) => (
              <li
                key={service}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div className="shrink-0 lg:max-w-[260px]">
          {project.status === "live" ? (
            <>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.visit}: ${project.title}. ${t.newTab}.`}
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.07] px-7 py-4 text-center font-medium text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-colors hover:border-blue-400/50 hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#090909] sm:w-auto"
              >
                {t.visit}
                <span aria-hidden="true">↗</span>
              </a>

              <p className="mt-3 text-center text-xs leading-5 text-white/50">
                {t.newTab}
              </p>
            </>
          ) : (
            <p className="rounded-full border border-white/10 px-6 py-3 text-center text-sm text-white/60">
              {t.comingSoon}
            </p>
          )}
        </div>
      </div>

      {projects.length > 1 && (
        <div className="px-5 pb-5 sm:px-8 sm:pb-8">
          <p className="mb-3 text-sm text-white/60">
            {t.chooseProject}
          </p>

          <div
            role="group"
            aria-label={t.chooseProject}
            className="grid gap-3 sm:grid-cols-2 sm:gap-4"
          >
            {projects.map((item) => {
              const active = project.id === item.id;
              const itemCategory =
                t.projects[item.id]?.category ?? item.category;

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    const index = projects.findIndex(
                      (candidate) => candidate.id === item.id,
                    );

                    setCurrentProject(index);
                  }}
                  className={`min-w-0 rounded-2xl border px-5 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#090909] sm:px-6 ${
                    active
                      ? "border-blue-400/70 bg-blue-500/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"
                  }`}
                >
                  <span className="block break-words font-medium text-white">
                    {item.title}
                  </span>

                  <span className="mt-2 block text-sm leading-6 text-white/60">
                    {itemCategory}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}