import type { Project } from "@/config/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <div
      className="
        rounded-[28px]
        border
        border-white/10
       bg-gradient-to-b
from-white/[0.06]
to-white/[0.02]
        p-8
      "
    >
      <p className="text-sm uppercase tracking-[0.3em] text-white/35">
        {project.category}
      </p>

      <h3 className="mt-4 text-3xl font-semibold text-white">
        {project.title}
      </h3>

      <p className="mt-6 text-white/60 leading-8">
        {project.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-white/10
              backdrop-blur-xl
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
  );
}