"use client";

import { useEffect, useState } from "react";
import Container from "@/components/common/Container";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";
import ScrollLink from "@/components/ui/ScrollLink";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";

export default function Header() {

  const { language } = useLanguage();

  const t = translations[language];


  const navigation = [
    { name: t.nav.services, href: "#solutions" },
    { name: t.nav.packages, href: "#packages" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.calculator, href: "#calculator" },
    { name: t.nav.process, href: "#process" },
    { name: t.nav.contact, href: "#contact" },
  ];


  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className="fixed inset-x-0 top-0 z-50 select-none">
      

      <Container>

        {/* ================= DESKTOP ================= */}

        <div className="hidden md:grid grid-cols-[220px_1fr_280px] items-center mt-8">


          {/* Logo */}

          <ScrollLink
            href="#top"
            className="leading-none group"
          >
            <div
              className="
                text-2xl
                font-semibold
                text-white
                transition-all
                duration-300
                group-hover:tracking-wide
              "
            >
              TP
            </div>

            <div className="mt-1 text-[11px] uppercase tracking-[0.35em] text-white/40">
              Digital Lab
            </div>

          </ScrollLink>


          {/* Navigation */}

          <nav
            className={`
              justify-self-center
              flex
              items-center
              gap-7
              rounded-full
              border
              border-white/15
              bg-white/[0.12]
              px-8
              py-3
              backdrop-blur-2xl
              backdrop-saturate-150
              shadow-[0_8px_30px_rgba(0,0,0,0.35)]
              transition-all
              duration-500
              hover:scale-[1.015]

              ${
                scrolled
                  ? "-translate-y-6 scale-[0.97]"
                  : "translate-y-0 scale-100"
              }
            `}
          >

            {navigation.map((item) => (
              <ScrollLink
                key={item.name}
                href={item.href}
                className="
                  relative
                  text-[15px]
                  font-medium
                  tracking-[0.02em]
                  text-white/85
                  transition-all
                  duration-300
                  hover:text-white

                  after:absolute
                  after:left-1/2
                  after:-bottom-2
                  after:h-[3px]
                  after:w-[3px]
                  after:-translate-x-1/2
                  after:rounded-full
                  after:bg-white
                  after:scale-0
                  after:transition-all
                  after:duration-300

                  hover:after:scale-100
                "
              >
                {item.name}
              </ScrollLink>
            ))}

          </nav>


          {/* Right */}

         <div className="justify-self-end flex items-center gap-4 whitespace-nowrap">

            <LanguageSwitcher />

            <Button href="#calculator">
              {t.hero.button}
            </Button>

          </div>


        </div>


        {/* ================= MOBILE ================= */}

        <div className="flex items-center justify-between mt-8 md:hidden">

          <ScrollLink
            href="#top"
            className="leading-none"
          >

            <div className="text-2xl font-semibold text-white">
              TP
            </div>

            <div className="mt-1 text-[11px] uppercase tracking-[0.35em] text-white/40">
              Digital Lab
            </div>

          </ScrollLink>


          <div className="flex items-center gap-3">

  <div className="scale-90">
    <LanguageSwitcher />
  </div>

  <MobileMenu />

</div>

        </div>


      </Container>

    </header>
  );
}