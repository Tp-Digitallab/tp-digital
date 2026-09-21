"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "motion/react";
import {
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import type Lenis from "lenis";
import { usePathname } from "next/navigation";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";

type Language = "de" | "en" | "ru";

type WindowWithLenis = Window & {
  lenis?: Lenis;
};

const menuCopy = {
  de: {
    open: "Menü öffnen",
    close: "Menü schließen",
    navigation: "Navigation",
    language: "Sprache",
    request: "Unverbindliches Angebot anfragen",
    brand: "Digitale Lösungen für Unternehmen",
  },
  en: {
    open: "Open menu",
    close: "Close menu",
    navigation: "Navigation",
    language: "Language",
    request: "Request a no-obligation quote",
    brand: "Digital solutions for businesses",
  },
  ru: {
    open: "Открыть меню",
    close: "Закрыть меню",
    navigation: "Навигация",
    language: "Язык",
    request: "Запросить предложение",
    brand: "Цифровые решения для бизнеса",
  },
};

export default function MobileMenu() {
  const {
    language,
    setLanguage,
  } = useLanguage();

  const pathname = usePathname();
  const t = translations[language];
  const copy = menuCopy[language];

  const [open, setOpen] = useState(false);

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

  const languages: {
    code: Language;
    label: string;
    name: string;
  }[] = [
    {
      code: "de",
      label: "DE",
      name: "Deutsch",
    },
    {
      code: "en",
      label: "EN",
      name: "English",
    },
    {
      code: "ru",
      label: "RU",
      name: "Русский",
    },
  ];

  useEffect(() => {
    if (!open) {
      return;
    }

    const browserWindow =
      window as unknown as WindowWithLenis;

    const body = document.body;
    const html = document.documentElement;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = html.style.overflow;

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";
    browserWindow.lenis?.stop();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      body.style.overflow = previousBodyOverflow;
      html.style.overflow = previousHtmlOverflow;

      browserWindow.lenis?.start();

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [open]);

  function handleNavigation(href: string) {
    setOpen(false);

    if (!href.startsWith("#")) {
      window.location.assign(href);
      return;
    }

    window.setTimeout(() => {
      const element =
        document.querySelector<HTMLElement>(href);

      if (!element) {
        return;
      }

      const browserWindow =
        window as unknown as WindowWithLenis;

      if (browserWindow.lenis) {
        browserWindow.lenis.start();
        browserWindow.lenis.scrollTo(element, {
          duration: 1.1,
          force: true,
        });
      } else {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      window.history.replaceState(
        null,
        "",
        href,
      );
    }, 80);
  }

  function handleLanguage(code: Language) {
    setLanguage(code);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={copy.open}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#111827] text-white shadow-[0_8px_30px_rgba(0,0,0,0.28)] transition-colors hover:bg-[#1a263b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 active:scale-95 md:hidden"
      >
        <Menu
          size={21}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={copy.navigation}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-[#05070b]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none fixed left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="relative mx-auto flex min-h-[100dvh] w-full max-w-lg flex-col px-5 pb-[max(24px,env(safe-area-inset-bottom))] pt-[max(24px,env(safe-area-inset-top))]"
            >
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() =>
                    handleNavigation(homeHref("#top"))
                  }
                  className="rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <span className="block text-2xl font-semibold text-white">
                    TP
                  </span>

                  <span className="mt-1 block text-[10px] uppercase tracking-[0.3em] text-white/50">
                    Digital Lab
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={copy.close}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white transition-colors hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 active:scale-95"
                >
                  <X
                    size={22}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </button>
              </div>

              <div className="mt-10">
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/35">
                  {copy.navigation}
                </p>

                <nav className="mt-4 space-y-2">
                  {navigation.map((item, index) => (
                    <motion.button
                      key={item.href}
                      type="button"
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.25,
                      }}
                      onClick={() =>
                        handleNavigation(item.href)
                      }
                      className="group flex min-h-14 w-full items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.035] px-5 text-left transition-colors hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 active:scale-[0.985]"
                    >
                      <span className="text-base font-medium text-white/90">
                        {item.name}
                      </span>

                      <ArrowRight
                        size={18}
                        strokeWidth={1.7}
                        aria-hidden="true"
                        className="text-white/35 transition-transform group-hover:translate-x-1"
                      />
                    </motion.button>
                  ))}
                </nav>
              </div>

              <div className="mt-9">
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/35">
                  {copy.language}
                </p>

                <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-1.5">
                  {languages.map((item) => {
                    const active =
                      language === item.code;

                    return (
                      <button
                        key={item.code}
                        type="button"
                        aria-pressed={active}
                        onClick={() =>
                          handleLanguage(item.code)
                        }
                        className={`flex min-h-14 flex-col items-center justify-center rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 active:scale-[0.97] ${
                          active
                            ? "bg-blue-600 text-white shadow-[0_8px_25px_rgba(59,130,246,0.28)]"
                            : "text-white/50 hover:bg-white/[0.06] hover:text-white"
                        }`}
                      >
                        <span className="text-sm font-semibold">
                          {item.label}
                        </span>

                        <span
                          className={`mt-0.5 text-[10px] ${
                            active
                              ? "text-white/75"
                              : "text-white/35"
                          }`}
                        >
                          {item.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-auto pt-10">
                <button
                  type="button"
                  onClick={() =>
                    handleNavigation(requestHref)
                  }
                  className="group flex min-h-14 w-full items-center justify-between rounded-2xl border border-blue-400/20 bg-blue-600 px-5 font-semibold text-white shadow-[0_12px_35px_rgba(59,130,246,0.28)] transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 active:scale-[0.985]"
                >
                  <span>{copy.request}</span>

                  <ArrowRight
                    size={19}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="mt-4 text-center text-[11px] leading-5 text-white/35">
                  {copy.brand}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}