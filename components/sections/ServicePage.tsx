"use client";

import Link from "next/link";

import Container from "@/components/common/Container";
import BackgroundGrid from "@/components/effects/BackgroundGrid";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { useLanguage } from "@/components/providers/LanguageProvider";
import FaqSchema from "@/components/seo/FaqSchema";
import Button from "@/components/ui/Button";

import {
  servicePageTranslations,
  type ServicePageKey,
} from "@/config/servicePageTranslations";

type Props = {
  serviceKey: ServicePageKey;
};

const pageTranslations = {
  de: {
    startProject: "Projekt starten",
    servicesTitle: "Unsere Leistungen",
    whyTitle: "Warum TP Digital Lab?",
    faqTitle: "Häufige Fragen",

    moreSolutions:
      "Weitere digitale Lösungen:",

    webdesign: "Webdesign",

    onlineShop:
      "Online-Shop Entwicklung",

    digitalSolutions:
      "Digitale Lösungen",

    seo: "SEO & Sichtbarkeit",

    reasons: [
      {
        title:
          "Individuelle Lösungen",

        description:
          "Keine Standardlösungen. Jede Website wird passend zu den Zielen und Anforderungen Ihres Unternehmens entwickelt.",
      },
      {
        title:
          "SEO & Sichtbarkeit",

        description:
          "Wir entwickeln Websites mit Fokus auf Performance, technische Optimierung und bessere Auffindbarkeit bei Google.",
      },
      {
        title:
          "Von Idee bis Umsetzung",

        description:
          "Von der ersten Idee über Design bis zur fertigen digitalen Lösung begleiten wir Unternehmen bei jedem Schritt.",
      },
    ],
  },

  en: {
    startProject:
      "Start Your Project",

    servicesTitle:
      "Our Services",

    whyTitle:
      "Why TP Digital Lab?",

    faqTitle:
      "Frequently Asked Questions",

    moreSolutions:
      "More digital solutions:",

    webdesign: "Web Design",

    onlineShop:
      "Online Store Development",

    digitalSolutions:
      "Digital Solutions",

    seo: "SEO & Visibility",

    reasons: [
      {
        title:
          "Individual Solutions",

        description:
          "No generic templates. Every website is developed around the goals and requirements of your business.",
      },
      {
        title:
          "SEO & Visibility",

        description:
          "We build websites with a focus on performance, technical optimization and better visibility on Google.",
      },
      {
        title:
          "From Idea to Launch",

        description:
          "From the first idea and design to the finished digital solution, we support your business at every step.",
      },
    ],
  },

  ru: {
    startProject:
      "Начать проект",

    servicesTitle:
      "Наши услуги",

    whyTitle:
      "Почему TP Digital Lab?",

    faqTitle:
      "Частые вопросы",

    moreSolutions:
      "Другие цифровые решения:",

    webdesign:
      "Разработка сайтов",

    onlineShop:
      "Разработка интернет-магазина",

    digitalSolutions:
      "Цифровые решения",

    seo: "SEO и видимость",

    reasons: [
      {
        title:
          "Индивидуальные решения",

        description:
          "Никаких стандартных шаблонов. Каждый сайт разрабатывается с учётом целей и требований вашего бизнеса.",
      },
      {
        title:
          "SEO и видимость",

        description:
          "Мы создаём сайты с акцентом на производительность, техническую оптимизацию и лучшую видимость в Google.",
      },
      {
        title:
          "От идеи до запуска",

        description:
          "Мы сопровождаем бизнес на каждом этапе — от первой идеи и дизайна до готового цифрового решения.",
      },
    ],
  },
} as const;

export default function ServicePage({
  serviceKey,
}: Props) {
  const { language } = useLanguage();

  const t =
    pageTranslations[language];

  const content =
    servicePageTranslations[
      serviceKey
    ][language];

  return (
    <>
      <FaqSchema
        items={content.faq}
      />

      <Header />

      <main
        id="top"
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-black
          text-white
        "
      >
        <BackgroundGrid />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-b
            from-transparent
            via-black/20
            to-black/90
          "
        />

        <Container>
          {/* HERO */}

          <section
            className="
              relative
              z-10
              flex
              min-h-[100svh]
              items-start
              pb-20
              pt-36
              md:min-h-screen
              md:items-center
              md:py-28
            "
          >
            <div className="w-full max-w-4xl md:-translate-y-10">
              <p className="mb-8 text-xs uppercase tracking-[0.45em] text-white/40">
                TP DIGITAL LAB
              </p>

              <h1
                className="
                  break-words
                  text-[40px]
                  font-medium
                  leading-[0.98]
                  tracking-[-0.05em]
                  [overflow-wrap:anywhere]
                  sm:text-[56px]
                  md:text-[90px]
                "
              >
                {content.title}

                <br />

                <span className="text-white/70">
                  {content.accent}
                </span>
              </h1>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-white/55">
                {content.description}
              </p>

              <div className="mt-12">
                <Button href="/#contact">
                  {t.startProject}
                </Button>
              </div>
            </div>
          </section>

          {/* SEO TEXT */}

          <section className="relative z-10 py-24">
            <h2 className="mb-6 text-3xl font-medium">
              {content.seoTitle}
            </h2>

            <p className="max-w-3xl leading-8 text-white/60">
              {
                content.seoDescription
              }
            </p>
          </section>

          {/* SERVICES */}

          <section className="relative z-10 pb-24">
            <h2 className="mb-10 text-3xl font-medium">
              {t.servicesTitle}
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {content.services.map(
                (item) => (
                  <div
                    key={item}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.05]
                      p-6
                      backdrop-blur-xl
                      transition
                      duration-300
                      hover:border-white/20
                      hover:bg-white/[0.08]
                      sm:p-8
                    "
                  >
                    <h3 className="text-xl font-medium">
                      {item}
                    </h3>
                  </div>
                )
              )}
            </div>
          </section>

          {/* WHY TP DIGITAL LAB */}

          <section className="relative z-10 py-24">
            <h2 className="mb-10 text-3xl font-medium">
              {t.whyTitle}
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {t.reasons.map(
                (reason) => (
                  <div
                    key={reason.title}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.05]
                      p-6
                      transition
                      duration-300
                      hover:border-white/20
                      hover:bg-white/[0.08]
                      sm:p-8
                    "
                  >
                    <h3 className="text-xl font-medium">
                      {reason.title}
                    </h3>

                    <p className="mt-4 leading-7 text-white/60">
                      {
                        reason.description
                      }
                    </p>
                  </div>
                )
              )}
            </div>
          </section>

          {/* FAQ */}

          <section className="relative z-10 pb-32">
            <h2 className="mb-10 text-3xl font-medium">
              {t.faqTitle}
            </h2>

            <div className="max-w-3xl space-y-8">
              {content.faq.map(
                (item) => (
                  <article
                    key={
                      item.question
                    }
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-6
                      sm:p-8
                    "
                  >
                    <h3 className="text-xl">
                      {item.question}
                    </h3>

                    <p className="mt-3 leading-8 text-white/60">
                      {item.answer}
                    </p>
                  </article>
                )
              )}
            </div>
          </section>

          {/* INTERNAL LINKS */}

          <section className="relative z-10 pb-20">
            <p className="text-white/40">
              {t.moreSolutions}
            </p>

            <nav
              aria-label={
                t.moreSolutions
              }
              className="mt-5 flex flex-wrap gap-x-6 gap-y-4"
            >
              <Link
                href="/webdesign"
                className="text-white/70 transition hover:text-white"
              >
                {t.webdesign}
              </Link>

              <Link
                href="/online-shop"
                className="text-white/70 transition hover:text-white"
              >
                {t.onlineShop}
              </Link>

              <Link
                href="/seo"
                className="text-white/70 transition hover:text-white"
              >
                {t.seo}
              </Link>

              <Link
                href="/digitale-loesungen"
                className="text-white/70 transition hover:text-white"
              >
                {t.digitalSolutions}
              </Link>
            </nav>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
}