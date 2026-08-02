import Container from "@/components/common/Container";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import Grid from "@/components/ui/background/Grid";

export default function ProcessSection() {
  return (
    <section
      id="process"
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

          bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.07),transparent_60%)]
        "
      />

      <div
        className="
          absolute

          right-[-200px]
          top-40

          h-[700px]
          w-[700px]

          rounded-full

          bg-cyan-500/5

          blur-[220px]
        "
      />

      <Grid />

      <Container className="relative z-10">

        <div className="max-w-3xl">

          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/35">
            OUR PROCESS
          </p>

          <h2 className="text-5xl font-semibold leading-tight text-white md:text-7xl">
            From idea.
            <br />
            To your first clients.
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-white/60">
            Every project follows a transparent workflow designed
            to deliver fast, reliable and measurable results.
          </p>

        </div>

        <ProcessTimeline />

      </Container>

    </section>
  );
}