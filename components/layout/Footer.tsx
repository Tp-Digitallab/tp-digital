"use client";

import Link from "next/link";

import Container from "@/components/common/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

const footerTranslations = {
  de: {
    description:
      "Moderne Websites, digitale Lösungen und Wachstumsstrategien für Unternehmen.",

    servicesTitle: "Leistungen",

    companyTitle: "Unternehmen",

    projects: "Projekte",

    process: "Ablauf",

    contact: "Kontakt",

    legalTitle: "Rechtliches",

    impressum: "Impressum",

    privacy: "Datenschutz",

    cookies: "Cookie-Einstellungen",

    rights:
      "Alle Rechte vorbehalten.",
  },

  en: {
    description:
      "Modern websites, digital solutions and online growth strategies for businesses.",

    servicesTitle: "Services",

    companyTitle: "Company",

    projects: "Projects",

    process: "Process",

    contact: "Contact",

    legalTitle: "Legal",

    impressum: "Imprint",

    privacy: "Privacy Policy",

    cookies: "Cookie Settings",

    rights:
      "All rights reserved.",
  },

  ru: {
    description:
      "Современные сайты, цифровые решения и стратегии онлайн-развития для бизнеса.",

    servicesTitle: "Услуги",

    companyTitle: "Компания",

    projects: "Проекты",

    process: "Процесс",

    contact: "Контакты",

    legalTitle:
      "Юридическая информация",

    impressum: "Impressum",

    privacy:
      "Политика конфиденциальности",

    cookies:
      "Настройки cookie",

    rights:
      "Все права защищены.",
  },
} as const;

export default function Footer() {
  const { language } = useLanguage();

  const t =
    footerTranslations[language];

  function openCookieSettings() {
    window.dispatchEvent(
      new Event(
        "open-cookie-settings"
      )
    );
  }

  return (
    <footer
      className="
        relative
        border-t
        border-white/10
        bg-black
        text-white
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_40%)]
        "
      />

      <Container>
        <div
          className="
            relative
            z-10
            grid
            gap-12
            py-20
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* Brand */}

          <div>
            <Link
              href="/"
              aria-label="TP Digital Lab"
              className="inline-block"
            >
              <p className="text-2xl font-semibold">
                TP Digital Lab
              </p>
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-white/50">
              {t.description}
            </p>
          </div>

          {/* Services */}

          <div>
            <h2
              className="
                mb-6
                text-sm
                uppercase
                tracking-[0.3em]
                text-white/40
              "
            >
              {t.servicesTitle}
            </h2>

            <nav
              aria-label={
                t.servicesTitle
              }
              className="flex flex-col gap-4"
            >
              <Link
                href="/webdesign"
                className="text-white/70 transition hover:text-white"
              >
                Webdesign
              </Link>

              <Link
                href="/online-shop"
                className="text-white/70 transition hover:text-white"
              >
                Online-Shop
              </Link>

              <Link
                href="/seo"
                className="text-white/70 transition hover:text-white"
              >
                SEO
              </Link>

              <Link
                href="/digitale-loesungen"
                className="text-white/70 transition hover:text-white"
              >
                {language === "de"
                  ? "Digitale Lösungen"
                  : language === "ru"
                    ? "Цифровые решения"
                    : "Digital Solutions"}
              </Link>
            </nav>
          </div>

          {/* Company */}

          <div>
            <h2
              className="
                mb-6
                text-sm
                uppercase
                tracking-[0.3em]
                text-white/40
              "
            >
              {t.companyTitle}
            </h2>

            <nav
              aria-label={
                t.companyTitle
              }
              className="flex flex-col gap-4"
            >
              <Link
                href="/#projects"
                className="text-white/70 transition hover:text-white"
              >
                {t.projects}
              </Link>

              <Link
                href="/#process"
                className="text-white/70 transition hover:text-white"
              >
                {t.process}
              </Link>

              <Link
                href="/#contact"
                className="text-white/70 transition hover:text-white"
              >
                {t.contact}
              </Link>
            </nav>
          </div>

          {/* Legal */}

          <div>
            <h2
              className="
                mb-6
                text-sm
                uppercase
                tracking-[0.3em]
                text-white/40
              "
            >
              {t.legalTitle}
            </h2>

            <nav
              aria-label={t.legalTitle}
              className="flex flex-col items-start gap-4"
            >
              <Link
                href="/impressum"
                className="text-white/70 transition hover:text-white"
              >
                {t.impressum}
              </Link>

              <Link
                href="/datenschutzerklaerung"
                className="text-white/70 transition hover:text-white"
              >
                {t.privacy}
              </Link>

              <button
                type="button"
                onClick={
                  openCookieSettings
                }
                className="text-left text-white/70 transition hover:text-white"
              >
                {t.cookies}
              </button>
            </nav>
          </div>
        </div>

        {/* Copyright */}

        <div
          className="
            relative
            z-10
            flex
            flex-col
            gap-3
            border-t
            border-white/10
            py-8
            text-sm
            text-white/40
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            ©{" "}
            {new Date().getFullYear()}{" "}
            TP Digital Lab.
          </p>

          <p>{t.rights}</p>
        </div>
      </Container>
    </footer>
  );
}