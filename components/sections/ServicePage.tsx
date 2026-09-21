"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
} from "lucide-react";

import Container from "@/components/common/Container";
import BackgroundGrid from "@/components/effects/BackgroundGrid";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { useLanguage } from "@/components/providers/LanguageProvider";
import FaqSchema from "@/components/seo/FaqSchema";

import {
  servicePageTranslations,
  type ServicePageKey,
} from "@/config/servicePageTranslations";

const uiCopy = {
  de: {
    badge: "TP DIGITAL LAB · MÜNCHEN",
    request: "Unverbindliches Angebot anfragen",
    references: "Kundenprojekte ansehen",
    priceLabel: "Startpreis",
    priceNote:
      "Der genaue Leistungsumfang und der endgültige Festpreis werden vor dem Projektstart schriftlich vereinbart.",
    outcomeEyebrow: "Was Ihr Unternehmen davon hat",
    outcomeTitle:
      "Eine digitale Lösung, die zu Ihrer Aufgabe passt.",
    outcomeText:
      "Sie erhalten keine unklare Standardleistung. Wir besprechen schriftlich, was Ihr Unternehmen braucht, welche Inhalte dazugehören und wie die Zusammenarbeit abläuft.",
    processEyebrow: "Zusammenarbeit",
    processTitle: "Klar von der ersten Anfrage bis zum Start.",
    processItems: [
      {
        title: "Projekt beschreiben",
        text:
          "Sie schreiben kurz, was Ihr Unternehmen anbietet und welche Aufgabe gelöst werden soll.",
      },
      {
        title: "Umfang und Preis klären",
        text:
          "Ich beantworte offene Fragen und sende Ihnen ein schriftliches Angebot mit klarem Leistungsumfang.",
      },
      {
        title: "Umsetzung und Übergabe",
        text:
          "Nach Ihrer Bestätigung setze ich das Projekt um, bespreche Änderungen schriftlich und begleite den Start.",
      },
    ],
    faqEyebrow: "Häufige Fragen",
    faqTitle: "Das sollten Sie vor dem Start wissen.",
    contactEyebrow: "Nächster Schritt",
    contactTitle:
      "Beschreiben Sie kurz Ihre Aufgabe.",
    contactText:
      "Ich melde mich persönlich per E-Mail. Die Anfrage ist unverbindlich und verpflichtet Sie zu nichts.",
    contactButton: "Projekt schriftlich anfragen",
    response:
      "Persönliche Antwort in der Regel innerhalb von 3–12 Stunden.",
    email: "info@tpdigitallab.de",
    location: "München · deutschlandweit",
  },

  en: {
    badge: "TP DIGITAL LAB · MUNICH",
    request: "Request a no-obligation quote",
    references: "View client projects",
    priceLabel: "Starting price",
    priceNote:
      "The exact scope and final fixed price are agreed in writing before the project begins.",
    outcomeEyebrow: "What this helps your business do",
    outcomeTitle:
      "A digital solution built around your actual task.",
    outcomeText:
      "You do not receive an unclear standard service. We clarify in writing what your business needs, what is included and how the project will be handled.",
    processEyebrow: "Collaboration",
    processTitle: "Clear from the first enquiry to launch.",
    processItems: [
      {
        title: "Describe your project",
        text:
          "Briefly explain what your business offers and which problem the project should solve.",
      },
      {
        title: "Clarify scope and price",
        text:
          "I answer your questions and send a written offer with a clear scope of work.",
      },
      {
        title: "Implementation and handover",
        text:
          "After your confirmation, I implement the project, handle revisions in writing and support the launch.",
      },
    ],
    faqEyebrow: "Frequently asked questions",
    faqTitle: "What you should know before starting.",
    contactEyebrow: "Next step",
    contactTitle:
      "Briefly describe what you need.",
    contactText:
      "I will personally reply by email. Your enquiry carries no obligation.",
    contactButton: "Enquire about your project",
    response:
      "Personal reply usually within 3–12 hours.",
    email: "info@tpdigitallab.de",
    location: "Munich · across Germany",
  },

  ru: {
    badge: "TP DIGITAL LAB · МЮНХЕН",
    request: "Запросить предложение",
    references: "Посмотреть проекты клиентов",
    priceLabel: "Стартовая цена",
    priceNote:
      "Точный объём работ и окончательную фиксированную цену мы согласуем письменно до начала проекта.",
    outcomeEyebrow: "Что это даст вашему бизнесу",
    outcomeTitle:
      "Цифровое решение под вашу реальную задачу.",
    outcomeText:
      "Вы не получаете непонятную стандартную услугу. Мы письменно определяем, что нужно вашему бизнесу, что входит в работу и как будет проходить проект.",
    processEyebrow: "Сотрудничество",
    processTitle:
      "Понятный путь от первой заявки до запуска.",
    processItems: [
      {
        title: "Опишите проект",
        text:
          "Коротко расскажите, чем занимается ваш бизнес и какую задачу должен решить проект.",
      },
      {
        title: "Согласуем объём и цену",
        text:
          "Я отвечу на вопросы и отправлю письменное предложение с понятным объёмом работ.",
      },
      {
        title: "Разработка и передача",
        text:
          "После подтверждения я выполняю работу, согласую правки письменно и сопровождаю запуск.",
      },
    ],
    faqEyebrow: "Частые вопросы",
    faqTitle:
      "Что важно знать до начала проекта.",
    contactEyebrow: "Следующий шаг",
    contactTitle:
      "Коротко опишите, что вам нужно.",
    contactText:
      "Я лично отвечу по электронной почте. Заявка ни к чему вас не обязывает.",
    contactButton: "Обсудить задачу",
    response:
      "Личный ответ обычно в течение 3–12 часов.",
    email: "info@tpdigitallab.de",
    location: "Мюнхен · по всей Германии",
  },
} as const;

const prices = {
  de: {
    webdesign: "ab 490 €",
    onlineShop: "ab 1.790 €",
    seo: "nach Umfang",
    digitalSolutions: "nach Absprache",
  },
  en: {
    webdesign: "from €490",
    onlineShop: "from €1,790",
    seo: "based on scope",
    digitalSolutions: "by agreement",
  },
  ru: {
    webdesign: "от 490 €",
    onlineShop: "от 1 790 €",
    seo: "по объёму",
    digitalSolutions: "по договорённости",
  },
} as const;

const serviceNames = {
  de: {
    webdesign: "Webdesign",
    onlineShop: "Online-Shop",
    seo: "SEO",
    digitalSolutions: "Digitale Lösungen",
  },
  en: {
    webdesign: "Web design",
    onlineShop: "Online store",
    seo: "SEO",
    digitalSolutions: "Digital solutions",
  },
  ru: {
    webdesign: "Разработка сайта",
    onlineShop: "Интернет-магазин",
    seo: "SEO",
    digitalSolutions: "Цифровые решения",
  },
} as const;

export default function ServicePage({
  serviceKey,
}: {
  serviceKey: ServicePageKey;
}) {
  const { language } = useLanguage();

  const content =
    servicePageTranslations[serviceKey][language];

  const ui = uiCopy[language];
  const price = prices[language][serviceKey];
  const serviceName = serviceNames[language][serviceKey];

  return (
    <>
      <FaqSchema items={content.faq} />

      <Header />

      <main
        id="top"
        className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
      >
        <BackgroundGrid />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_18%,rgba(59,130,246,0.12),transparent_48%),linear-gradient(to_bottom,transparent_45%,#050505_92%)]"
        />

        <section className="relative z-10 flex min-h-[100svh] items-center px-5 pb-20 pt-36 sm:px-8 md:pb-28 md:pt-40 lg:px-12">
          <Container className="w-full">
            <div className="max-w-5xl">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-300 sm:tracking-[0.4em]">
                {ui.badge}
              </p>

              <h1 className="mt-7 max-w-4xl break-words text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                {content.title}
                <br />
                <span className="text-white/65">
                  {content.accent}
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl sm:leading-9">
                {content.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="text-sm text-white/45">
                  {ui.priceLabel}
                </span>

                <span className="text-2xl font-semibold text-white sm:text-3xl">
                  {price}
                </span>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/45">
                {ui.priceNote}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/webdesign#anfrage"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-center font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505]"
                >
                  {ui.request}

                  <ArrowRight
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </Link>

                <Link
                  href="/webdesign#projekte"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-center font-medium text-white/80 transition-colors hover:border-white/30 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505]"
                >
                  {ui.references}

                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="relative z-10 border-y border-white/10 bg-white/[0.025] py-20 sm:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-300">
                  {ui.outcomeEyebrow}
                </p>

                <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight sm:text-5xl">
                  {ui.outcomeTitle}
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
                  {ui.outcomeText}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {content.services.map((service) => (
                  <div
                    key={service}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-blue-400/30 hover:bg-white/[0.06]"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="h-5 w-5 text-blue-300"
                    />

                    <p className="mt-5 leading-7 text-white/80">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="relative z-10 py-20 sm:py-28">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-300">
                {ui.processEyebrow}
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
                {ui.processTitle}
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {ui.processItems.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 font-semibold text-blue-300">
                    {index + 1}
                  </span>

                  <h3 className="mt-7 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white/55">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="relative z-10 border-y border-white/10 bg-white/[0.025] py-20 sm:py-28">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-300">
                {ui.faqEyebrow}
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
                {ui.faqTitle}
              </h2>
            </div>

            <div className="mt-10 max-w-4xl space-y-4">
              {content.faq.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6"
                >
                  <summary className="cursor-pointer list-none pr-8 text-lg font-medium text-white marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
                    <span className="flex items-start justify-between gap-5">
                      {item.question}

                      <span
                        aria-hidden="true"
                        className="text-2xl text-blue-300 transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </span>
                  </summary>

                  <p className="mt-5 max-w-3xl leading-7 text-white/60">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        <section className="relative z-10 py-20 sm:py-28">
          <Container>
            <div className="grid gap-8 rounded-[30px] border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.13] to-white/[0.03] p-6 sm:p-10 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:p-12">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-300">
                  {ui.contactEyebrow}
                </p>

                <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
                  {ui.contactTitle}
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                  {ui.contactText}
                </p>
              </div>

              <div className="lg:justify-self-end">
                <Link
                  href="/webdesign#anfrage"
                  className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-center font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505] sm:w-auto"
                >
                  {ui.contactButton}

                  <ArrowRight
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </Link>

                <div className="mt-5 space-y-3 text-sm text-white/55">
                  <p className="flex items-center gap-2">
                    <Clock3
                      aria-hidden="true"
                      className="h-4 w-4 text-blue-300"
                    />
                    {ui.response}
                  </p>

                  <p className="flex items-center gap-2">
                    <Mail
                      aria-hidden="true"
                      className="h-4 w-4 text-blue-300"
                    />
                    {ui.email}
                  </p>

                  <p className="text-white/40">
                    {serviceName} · {ui.location}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}