"use client";

import { useState } from "react";
import Image from "next/image";

import { projects } from "@/config/projects";

export default function ProjectPreview() {
  const [currentProject, setCurrentProject] =
    useState(0);

  const project =
    projects[currentProject];

  return (
    <div
      className="
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-gradient-to-b
        from-[#111111]
        to-[#090909]
        shadow-[0_25px_70px_rgba(0,0,0,0.45)]
        sm:rounded-[36px]
      "
    >
      {/* Browser header */}

      <div className="flex h-14 items-center justify-between gap-4 border-b border-white/10 px-4 sm:px-6">
        <div
          aria-hidden="true"
          className="flex shrink-0 gap-2"
        >
          <div className="h-3 w-3 rounded-full bg-red-400/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <div className="h-3 w-3 rounded-full bg-green-400/80" />
        </div>

        <div
          className="
            max-w-[65%]
            truncate
            rounded-full
            border
            border-white/10
            bg-white/5
            px-4
            py-1
            text-xs
            text-white/50
          "
        >
          {project.website.replace(
            "https://",
            ""
          )}
        </div>
      </div>

      {/* Project image */}

      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} – website preview`}
          fill
          priority={currentProject === 0}
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 90vw,
            1100px
          "
          className="object-cover object-top"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
        />
      </div>

      {/* Project information */}

      <div
        className="
          flex
          flex-col
          gap-8
          border-t
          border-white/10
          p-5
          sm:p-8
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-2 text-white/45">
            {project.category}
          </p>

          <p className="mt-5 leading-8 text-white/60">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.technologies.map(
              (technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-4
                    py-2
                    text-sm
                    text-white/70
                  "
                >
                  {technology}
                </span>
              )
            )}
          </div>
        </div>

        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} website in a new tab`}
          className="
            inline-flex
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-white/15
            bg-white/[0.07]
            px-7
            py-4
            font-medium
            text-white
            shadow-[0_8px_24px_rgba(0,0,0,0.25)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-blue-400/40
            hover:bg-white/[0.12]
            hover:shadow-[0_12px_30px_rgba(59,130,246,0.18)]
            active:scale-[0.98]
          "
        >
          Live Website ↗
        </a>
      </div>

      {/* Project switcher */}

      <div className="flex gap-3 overflow-x-auto px-5 pb-5 sm:gap-4 sm:px-8 sm:pb-8">
        {projects.map(
          (item, index) => {
            const active =
              currentProject === index;

            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={active}
                onClick={() =>
                  setCurrentProject(index)
                }
                className={`
                  min-w-[190px]
                  rounded-2xl
                  border
                  px-5
                  py-4
                  text-left
                  transition-all
                  duration-300
                  sm:min-w-[220px]
                  sm:px-6

                  ${
                    active
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                  }
                `}
              >
                <div className="font-medium text-white">
                  {item.title}
                </div>

                <div className="mt-2 text-sm text-white/45">
                  {item.category}
                </div>
              </button>
            );
          }
        )}
      </div>
    </div>
  );
}