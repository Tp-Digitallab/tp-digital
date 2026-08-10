"use client";

import {
  useEffect,
  useState,
} from "react";
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

export default function MobileMenu() {
  const {
    language,
    setLanguage,
  } = useLanguage();

  const t = translations[language];

    const pathname = usePathname();

  function homeHref(
    hash: string
  ) {
    return pathname === "/"
      ? hash
      : `/${hash}`;
  }

  const [open, setOpen] =
    useState(false);

    const navigation = [
    {
      name: t.nav.services,
      href: homeHref(
        "#solutions"
      ),
    },
    {
      name: t.nav.projects,
      href: homeHref(
        "#projects"
      ),
    },
    {
      name: t.nav.packages,
      href: homeHref(
        "#packages"
      ),
    },
    {
      name: t.nav.process,
      href: homeHref(
        "#process"
      ),
    },
    {
      name: t.nav.calculator,
      href: homeHref(
        "#calculator"
      ),
    },
    {
      name: t.nav.contact,
      href: homeHref(
        "#contact"
      ),
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

    const { lenis } =
      browserWindow;

    const body = document.body;

    const html =
      document.documentElement;

    const previousBodyOverflow =
      body.style.overflow;

    const previousHtmlOverflow =
      html.style.overflow;

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    lenis?.stop();

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      body.style.overflow =
        previousBodyOverflow;

      html.style.overflow =
        previousHtmlOverflow;

      lenis?.start();

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open]);


  function handleNavigation(
  href: string
) {
  setOpen(false);

  if (!href.startsWith("#")) {
    window.location.assign(href);
    return;
  }

  window.setTimeout(() => {

    const element =
      document.querySelector<HTMLElement>(
        href
      );

    if (!element) {
      return;
    }

    const browserWindow =
      window as unknown as WindowWithLenis;

    if (browserWindow.lenis) {
      browserWindow.lenis.start();

      browserWindow.lenis.scrollTo(
        element,
        {
          duration: 1.1,
          force: true,
        }
      );
    } else {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    window.history.replaceState(
      null,
      "",
      href
    );
  }, 80);
}

  function handleLanguage(
    code: Language
  ) {
    setLanguage(code);
  }

  return (
    <>
      {/* MENU BUTTON */}

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="
          flex
          h-12
          w-12
          items-center
          justify-center

          rounded-2xl

          border
          border-white/10

          bg-[#111827]

          text-white

          shadow-[0_8px_30px_rgba(0,0,0,0.28)]

          transition-all
          duration-300

          active:scale-95

          md:hidden
        "
      >
        <Menu
          size={21}
          strokeWidth={1.8}
        />
      </button>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {open && (
          <motion.div
  id="mobile-menu"
  role="dialog"
  aria-modal="true"
  aria-label="Mobile navigation"
  data-lenis-prevent
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
                        className="
              fixed
              inset-0
              z-[200]

              h-[100dvh]
              w-full
              max-w-[100vw]

              overflow-x-hidden
              overflow-y-auto

              overscroll-x-none
              overscroll-y-contain

              touch-pan-y

              bg-[#05070b]
            "
          >
            {/* BACKGROUND GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[-100px]

                h-[420px]
                w-[420px]

                -translate-x-1/2

                rounded-full

                bg-blue-500/10

                blur-[130px]
              "
            />

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 15,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="
                relative
                z-10

                mx-auto

                                flex
                min-h-[100dvh]
                min-w-0
                w-full
                max-w-lg
                flex-col

                px-5

                pb-[max(24px,env(safe-area-inset-bottom))]
                pt-[max(24px,env(safe-area-inset-top))]
              "
            >
              {/* HEADER */}

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() =>
                   handleNavigation(
  homeHref("#top")
)
                  }
                  className="text-left"
                >
                  <div className="text-2xl font-semibold text-white">
                    TP
                  </div>

                  <div
                    className="
                      mt-1
                      text-[10px]
                      uppercase
                      tracking-[0.35em]
                      text-white/40
                    "
                  >
                    Digital Lab
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setOpen(false)
                  }
                  aria-label="Close menu"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-2xl

                    border
                    border-white/10

                    bg-white/[0.05]

                    text-white

                    transition-all

                    active:scale-95
                  "
                >
                  <X
                    size={22}
                    strokeWidth={1.8}
                  />
                </button>
              </div>

              {/* LABEL */}

              <div className="mt-10">
                <p
                  className="
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.28em]
                    text-white/30
                  "
                >
                  Navigation
                </p>
              </div>

              {/* NAVIGATION */}

              <nav className="mt-4 space-y-2.5">
                {navigation.map(
                  (item, index) => (
                    <motion.button
                      key={item.href}
                      type="button"
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          0.04 * index,
                        duration: 0.3,
                      }}
                      onClick={() =>
                        handleNavigation(
                          item.href
                        )
                      }
                      className="
                        group

                        flex
                        w-full
                        items-center
                        justify-between

                        rounded-2xl

                        border
                        border-white/[0.08]

                        bg-white/[0.035]

                        px-5
                        py-[17px]

                        text-left

                        transition-all
                        duration-200

                        active:scale-[0.985]
                        active:bg-white/[0.07]
                      "
                    >
                      <span
                        className="
                          text-[17px]
                          font-medium
                          tracking-[-0.01em]
                          text-white/90
                        "
                      >
                        {item.name}
                      </span>

                      <ArrowRight
                        size={18}
                        strokeWidth={1.7}
                        className="
                          text-white/30
                          transition-transform
                          duration-200

                          group-active:translate-x-1
                        "
                      />
                    </motion.button>
                  )
                )}
              </nav>

              {/* LANGUAGE */}

              <div className="mt-9">
                <p
                  className="
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.28em]
                    text-white/30
                  "
                >
                  Sprache / Language
                </p>

                <div
                  className="
                    mt-4

                    grid
                    grid-cols-3
                    gap-2

                    rounded-2xl

                    border
                    border-white/[0.08]

                    bg-white/[0.025]

                    p-1.5
                  "
                >
                  {languages.map(
                    (item) => {
                      const active =
                        language ===
                        item.code;

                      return (
                        <button
                          key={
                            item.code
                          }
                          type="button"
                          aria-pressed={
                            active
                          }
                          onClick={() =>
                            handleLanguage(
                              item.code
                            )
                          }
                          className={`
                            flex
                            min-h-[54px]
                            flex-col
                            items-center
                            justify-center

                            rounded-xl

                            transition-all
                            duration-250

                            active:scale-[0.97]

                            ${
                              active
                                ? `
                                  bg-blue-500
                                  text-white

                                  shadow-[0_8px_25px_rgba(59,130,246,0.28)]
                                `
                                : `
                                  text-white/50
                                  hover:bg-white/[0.05]
                                  hover:text-white
                                `
                            }
                          `}
                        >
                          <span className="text-sm font-semibold">
                            {
                              item.label
                            }
                          </span>

                          <span
                            className={`
                              mt-0.5
                              text-[10px]

                              ${
                                active
                                  ? "text-white/70"
                                  : "text-white/30"
                              }
                            `}
                          >
                            {item.name}
                          </span>
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {/* CTA */}

              <div className="mt-auto pt-8">
                <button
                  type="button"
                  onClick={() =>
                    handleNavigation(
  homeHref("#calculator")
)                   
                  }
                  className="
                    group

                    flex
                    w-full
                    items-center
                    justify-between

                    rounded-2xl

                    border
                    border-blue-400/20

                    bg-blue-500

                    px-5
                    py-[18px]

                    font-semibold
                    text-white

                    shadow-[0_12px_35px_rgba(59,130,246,0.28)]

                    transition-all
                    duration-300

                    active:scale-[0.985]
                    active:bg-blue-400
                  "
                >
                  <span>
                    {t.hero.button}
                  </span>

                  <ArrowRight
                    size={19}
                    className="
                      transition-transform
                      duration-300

                      group-active:translate-x-1
                    "
                  />
                </button>

                <p
                  className="
                    mt-4
                    text-center
                    text-[11px]
                    text-white/25
                  "
                >
                  TP Digital Lab
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}