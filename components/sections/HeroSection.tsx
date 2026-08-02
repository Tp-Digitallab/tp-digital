import Container from "@/components/common/Container";
import BackgroundGrid from "@/components/effects/BackgroundGrid";
import CursorTrail from "@/components/effects/CursorTrail";
import Button from "@/components/ui/Button";
import ScrollLink from "@/components/ui/ScrollLink";

export default function HeroSection() {
  return (
    <section
  id="top"
  className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
>

      <BackgroundGrid />
      <CursorTrail />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60" />

      <Container>
        <div className="relative z-10 flex min-h-screen items-center">

          <div className="max-w-4xl -translate-y-10">

            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-white/35">
              DIGITAL STUDIO · MUNICH
            </p>

            <h1 className="text-[64px] leading-[0.92] font-medium tracking-[-0.05em] md:text-[108px]">

              Digital experiences

              <br />

              <span className="text-white/80">
                that people remember.
              </span>

            </h1>

            <p className="mt-10 max-w-xl text-xl leading-9 text-white/55">
              Premium websites, automation and digital products
              crafted for companies that care about quality.
            </p>

            <div className="mt-14 flex items-center gap-6">

              <Button href="#calculator">
                 Start Project
              </Button>

              <ScrollLink
  href="#projects"
  className="text-sm text-white/55 transition hover:text-white"
>
  View Projects →
</ScrollLink>

            </div>

          </div>

        </div>
      </Container>

    </section>
  );
}