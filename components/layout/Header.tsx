"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";

import Container from "@/components/common/Container";
import MobileMenu from "@/components/layout/MobileMenu";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/providers/LanguageProvider";
import ScrollLink from "@/components/ui/ScrollLink";
import { translations } from "@/config/translations";

const headerCopy = {
  de: {
    request: "Angebot anfragen",
    requestShort: "Anfragen",
    navigation: "Hauptnavigation",
  },
  en: {
    request: "Request a quote",
    requestShort: "Enquire",
    navigation: "Main navigation",
  },
  ru: {
    request: "Обсудить проект",
    requestShort: "Заявка",
    navigation: "Основное меню",
  },
};

export default function Header() {
  const { language } = useLanguage();
  const pathname = usePathname();

  const t = translations[language];
  const copy = headerCopy[language];

  function homeHref(hash: string) {
    return pathname === "/" ? hash : `/${hash}`;
  }

  const requestHref =
    pathname === "/webdesign"
      ? "#anfrage"
      : "/webdesign#anfrage";

  const navigation = [
    {
      name: t.nav.services,
      href: homeHref("#solutions"),
    },
    {
      name: t.nav.projects,
      href: homeHref("#projects"),
    },
    {
      name: t.nav.packages,
      href: homeHref("#packages"),
    },
    {
      name: t.nav.process,
      href: homeHref("#process"),
    },
    {
      name: t.nav.calculator,
      href: homeHref("#calculator"),
    },
    {
      name: t.nav.contact,
      href: homeHref("#contact"),
    },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <div className="mt-4 flex items-center justify-between gap-4 md:mt-7">
          <ScrollLink
            href={homeHref("#top")}
            className="group shrink-0 rounded-lg leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            <span className="block text-2xl font-semibold text-white transition-transform duration-300 group-hover:scale-105">
              TP
            </span>

            <span className="mt-1 block text-[10px] uppercase tracking-[0.28em] text-white/50">
              Digital Lab
            </span>
          </ScrollLink>

          <nav
            aria-label={copy.navigation}
            className="relative hidden items-center gap-5 overflow-hidden rounded-full border border-white/15 bg-white/[0.09] px-6 py-3 shadow-[0_18px_55px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:flex lg:gap-7"
          >
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-32 w-28 bg-gradient-to-r from-transparent via-white/25 to-blue-400/20 blur-xl"
              animate={{
                x: ["0%", "850%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {navigation.map((item) => (
              <ScrollLink
                key={item.href}
                href={item.href}
                className="relative z-10 whitespace-nowrap rounded-md text-sm font-medium text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 lg:text-[15px]"
              >
                {item.name}
              </ScrollLink>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            <ScrollLink
              href={requestHref}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-center text-sm font-semibold leading-5 text-white shadow-[0_8px_25px_rgba(37,99,235,0.25)] transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:px-5"
            >
              <span className="md:hidden">
                {copy.requestShort}
              </span>

              <span className="hidden md:inline">
                {copy.request}
              </span>
            </ScrollLink>

            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}