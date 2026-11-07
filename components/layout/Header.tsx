"use client";

import { usePathname } from "next/navigation";

import Container from "@/components/common/Container";
import MobileMenu from "@/components/layout/MobileMenu";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/providers/LanguageProvider";
import ScrollLink from "@/components/ui/ScrollLink";
import { homePath, isHomePath } from "@/lib/locale-paths";
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
    return isHomePath(pathname) ? hash : `${homePath(language)}${hash}`;
  }

  const requestHref = isHomePath(pathname) || /^\/(de|en|ru)\/(webdesign|seo|online-shop|digitale-loesungen)$/.test(pathname)
    ? "#anfrage"
    : `/${language}/webdesign#anfrage`;

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
      name: "FAQ",
      href: homeHref("#faq"),
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
            aria-label="TP Digital Lab"
            className="group flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-[var(--card)]/85 px-4 py-2.5 shadow-[0_18px_55px_rgba(23,42,57,0.12)] backdrop-blur-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4"
          >
            <span className="whitespace-nowrap text-[17px] tracking-tight text-white">
              <span className="font-bold">TP</span>
              <span className="hidden font-semibold min-[360px]:inline"> Digital Lab</span>
            </span>
          </ScrollLink>

          <nav
            aria-label={copy.navigation}
            className="relative hidden items-center gap-5 overflow-hidden rounded-full border border-white/10 bg-[var(--card)]/80 px-6 py-3 shadow-[0_18px_55px_rgba(23,42,57,0.12)] backdrop-blur-2xl md:flex lg:gap-7"
          >

            {navigation.map((item) => (
              <ScrollLink
                key={item.href}
                href={item.href}
                className="relative z-10 whitespace-nowrap rounded-md text-sm font-semibold text-white/85 transition-colors hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 lg:text-[15px]"
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
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-center text-sm font-semibold leading-5 text-white shadow-[0_8px_25px_rgba(23,42,57,0.25)] transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:px-5"
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
