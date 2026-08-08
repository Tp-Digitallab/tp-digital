"use client";

import Container from "@/components/common/Container";
import BackgroundGrid from "@/components/effects/BackgroundGrid";
import CursorTrail from "@/components/effects/CursorTrail";
import Button from "@/components/ui/Button";
import ScrollLink from "@/components/ui/ScrollLink";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";


export default function HeroSection() {

  const { language } = useLanguage();

  const t = translations[language];


  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-[#050505] text-white"
    >

      <BackgroundGrid />

      <CursorTrail />


      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60" />


      <Container>

        <div className="relative z-10 flex min-h-[100svh] items-start pb-16 pt-32 md:min-h-screen md:items-center md:py-0">


          <div className="w-full max-w-4xl select-none md:min-h-[430px] md:-translate-y-10">


            <p className="mb-8 hidden text-xs uppercase tracking-[0.45em] text-white/35 md:block">
              {t.hero.badge}
            </p>


            <h1 className="text-[44px] leading-[0.98] font-medium tracking-[-0.045em] sm:text-[58px] md:text-[96px]">


              {t.hero.title}


              <br />


              <span className="text-white/80">
                {t.hero.titleAccent}
              </span>


            </h1>



            <p className="mt-10 max-w-xl text-lg leading-8 text-white/55">
              {t.hero.description}
            </p>



            <div className="mt-14 flex items-center gap-6">


              <Button href="#calculator">
                {t.hero.button}
              </Button>



              <ScrollLink
                href="#projects"
                className="text-sm text-white/55 transition hover:text-white"
              >
                {t.hero.projects} →
              </ScrollLink>


            </div>


          </div>


        </div>


      </Container>


    </section>
  );
}