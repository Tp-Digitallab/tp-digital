import Container from "@/components/common/Container";
import ProjectPreview from "@/components/portfolio/ProjectPreview";
import Grid from "@/components/ui/background/Grid";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        py-40
        bg-[#050505]
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.08),transparent_60%)]
        "
      />

      <div
        className="
          absolute

          left-1/2
          top-0

          h-[800px]
          w-[800px]

          -translate-x-1/2

          rounded-full

          bg-blue-500/5

          blur-[220px]
        "
      />

      {/* Top Fade */}

      <div
        className="
          absolute
          top-0
          left-0
          right-0

          h-40

          bg-gradient-to-b
          from-black
          to-transparent
        "
      />

      {/* Bottom Fade */}

<div
  className="
    absolute
    bottom-0
    left-0
    right-0

    h-40

    bg-gradient-to-t
    from-black
    to-transparent
  "
/>

<Grid />

<Container className="relative z-10">
        

        <div className="max-w-3xl">

          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/35">
            SELECTED PROJECTS
          </p>

          <h2 className="text-5xl font-semibold leading-tight text-white md:text-7xl">
            Real projects.
            <br />
            Real results.
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-white/60">
            Every project is built with a single goal —
            helping businesses grow, generate leads and
            build trust online.
          </p>

        </div>

        <div className="mt-24">

          <ProjectPreview />

        </div>

      </Container>

    </section>
  );
}