"use client";

import { usePathname } from "next/navigation";

import Container from "@/components/common/Container";
import MobileMenu from "@/components/layout/MobileMenu";
import ScrollLink from "@/components/ui/ScrollLink";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/providers/LanguageProvider";
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
      <Container className="px-3 sm:px-6 lg:px-8">
        <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 rounded-[24px] border border-white/15 bg-[#090d15]/95 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:mt-4 sm:px-5 xl:flex-nowrap xl:gap-5">
          <ScrollLink
            href={homeHref("#top")}
            className="shrink-0 rounded-lg leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#090d15]"
          >
            <span className="block text-2xl font-semibold text-white">
              TP
            </span>

            <span className="mt-1 block text-[9px] uppercase tracking-[0.2em] text-white/65 sm:text-[10px]">
              Digital Lab
            </span>
          </ScrollLink>

          <nav
            aria-label={copy.navigation}
            className="order-3 hidden w-full flex-wrap items-center justify-center gap-x-5 gap-y-1 border-t border-white/10 pt-2 md:flex xl:order-none xl:w-auto xl:flex-1 xl:gap-x-3 xl:border-0 xl:pt-0"
          >
            {navigation.map((item) => (
              <ScrollLink
                key={item.href}
                href={item.href}
                className="inline-flex min-h-10 items-center rounded-lg px-1 text-sm font-medium text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 motion-reduce:transition-none"
              >
                {item.name}
              </ScrollLink>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            <ScrollLink
              href={requestHref}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-center text-sm font-semibold leading-5 text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#090d15] motion-reduce:transition-none sm:px-5"
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