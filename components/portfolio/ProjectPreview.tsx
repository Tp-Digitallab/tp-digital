"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/config/projects";

export default function ProjectPreview() {
 const [currentProject, setCurrentProject] = useState(0);

const project = projects[currentProject];

  return (
    <div
      className="
        overflow-hidden
        rounded-[36px]
        border
        border-white/10
        shadow-[0_25px_70px_rgba(0,0,0,0.45)]
        bg-gradient-to-b
from-[#111111]
to-[#090909]
      "
    >
      {/* Browser Header */}

      <div className="flex h-14 items-center justify-between border-b border-white/10 px-6">

        <div className="flex gap-2">

          <div className="h-3 w-3 rounded-full bg-red-400/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <div className="h-3 w-3 rounded-full bg-green-400/80" />

        </div>

        <div
          className="
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
          {project.website.replace("https://", "")}
        </div>

      </div>

      {/* Preview */}

      <div className="relative aspect-[16/9] overflow-hidden">

     <img
  src={project.image}
  alt={project.title}
  className="h-full w-full object-cover object-top"
/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      </div>

      {/* Footer */}

      <div
  className="
    flex
    flex-col
    gap-8

    lg:flex-row
    lg:items-center
    lg:justify-between

    border-t
    border-white/10

    p-8
  "
>
        <div>

          <h3 className="text-3xl font-semibold text-white">
            {project.title}
          </h3>

          <p className="mt-2 text-white/45">
            {project.category}
          </p>

          <p className="mt-5 text-white/60 leading-8">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            {project.technologies.map((tech) => (
              <span
                key={tech}
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
                {tech}
              </span>
            ))}

          </div>

        </div>

       <a
  href={project.website}
  target="_blank"
  rel="noopener noreferrer"
  className="
    shrink-0

    rounded-full

    border
    border-white/15

    bg-white/[0.7]

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

      {/* Project Switcher */}

      <div className="mt-8 flex gap-4">

        {projects.map((item, index) => (

          <button
            key={item.id}
            onClick={() => setCurrentProject(index)}
            className={`
              rounded-2xl
              border
              px-6
              py-4
              text-left
              transition-all
              duration-300

              ${
                currentProject === index
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
              }
            `}
          >

            <div className="text-white font-medium">
              {item.title}
            </div>

            <div className="mt-2 text-sm text-white/45">
              {item.category}
            </div>

          </button>

        ))}

      </div>

    </div>
  );
}