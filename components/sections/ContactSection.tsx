"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { useLanguage } from "@/components/providers/LanguageProvider";

const contactCopy = {
  de: {
    eyebrow: "Ihr Ansprechpartner",

    title:
      "Lassen Sie uns Ihre Website planen.",

    description:
      "Beschreiben Sie kurz Ihr Unternehmen und was Sie mit Ihrer Website erreichen möchten. Ich melde mich persönlich mit den nächsten Schritten.",

    role:
      "Gründer von TP Digital Lab · Webentwickler",

    introduction:
      "Hallo, ich bin Taras Pakhaliuk. Ich entwickle Ihre Website persönlich und begleite Sie vom ersten Kontakt bis zum Livegang.",

    locationLabel: "Standort",
    location: "München, Deutschland",

    emailLabel: "E-Mail",

    responseLabel: "Persönliche Rückmeldung",
    response:
      "In der Regel innerhalb von 3–12 Stunden.",

    communication:
      "Die Abstimmung erfolgt schriftlich. Ein Telefontermin ist nicht erforderlich.",

    primaryCta:
      "Unverbindliches Angebot anfragen",

    whatsappCta:
      "Per WhatsApp schreiben",

    reassurance:
      "Ihre Anfrage ist unverbindlich. Sie entscheiden erst nach Erhalt des Angebots.",

    nextTitle:
      "Was passiert nach Ihrer Anfrage?",

    steps: [
      {
        title: "Sie beschreiben Ihr Vorhaben",
        description:
          "Nennen Sie Ihre Branche, die gewünschten Inhalte und vorhandene Materialien. Wenn Sie noch unsicher sind, schreiben Sie das einfach dazu.",
      },
      {
        title: "Ich kläre die offenen Fragen",
        description:
          "Wir stimmen Ziel, Umfang und Anforderungen schriftlich ab, damit klar ist, was Ihre Website leisten soll.",
      },
      {
        title: "Sie erhalten ein klares Angebot",
        description:
          "Leistungsumfang, Festpreis, Zeitplan und Zahlungsbedingungen werden vor Projektbeginn schriftlich vereinbart.",
      },
    ],

    included:
      "Zwei Korrekturrunden sind in den Website-Paketen enthalten.",

    legalTitle:
      "Anbieterinformationen und Datenschutz",

    impressum: "Impressum",
    privacy: "Datenschutzerklärung",
  },

  en: {
    eyebrow: "Your direct contact",

    title:
      "Let’s plan your website.",

    description:
      "Briefly describe your business and what you want your website to achieve. I will personally get back to you with the next steps.",

    role:
      "Founder of TP Digital Lab · Web developer",

    introduction:
      "Hello, I’m Taras Pakhaliuk. I personally develop your website and support you from the first contact to launch.",

    locationLabel: "Location",
    location: "Munich, Germany",

    emailLabel: "Email",

    responseLabel: "Personal response",
    response:
      "Usually within 3–12 hours.",

    communication:
      "We discuss your project in writing. No phone appointment is required.",

    primaryCta:
      "Request a no-obligation quote",

    whatsappCta:
      "Message me on WhatsApp",

    reassurance:
      "Your enquiry carries no obligation. You decide after receiving the quote.",

    nextTitle:
      "What happens after your enquiry?",

    steps: [
      {
        title: "You describe your project",
        description:
          "Tell me your industry, the content you need and any materials you already have. If you are still unsure, simply mention that.",
      },
      {
        title: "I clarify the open questions",
        description:
          "We agree on your goals, scope and requirements in writing so that the purpose of your website is clear.",
      },
      {
        title: "You receive a clear offer",
        description:
          "The scope, fixed price, timeline and payment terms are agreed in writing before the project begins.",
      },
    ],

    included:
      "Two revision rounds are included in the website packages.",

    legalTitle:
      "Business details and privacy",

    impressum: "Legal notice",
    privacy: "Privacy Policy",
  },

  ru: {
    eyebrow: "Ваш контакт",

    title:
      "Давайте спланируем ваш сайт.",

    description:
      "Кратко расскажите о своём бизнесе и задачах будущего сайта. Я лично отвечу и объясню следующие шаги.",

    role:
      "Основатель TP Digital Lab · Веб-разработчик",

    introduction:
      "Здравствуйте, я Тарас Пахалюк. Я лично разрабатываю ваш сайт и сопровождаю проект от первого обращения до запуска.",

    locationLabel: "Местоположение",
    location: "Мюнхен, Германия",

    emailLabel: "Электронная почта",

    responseLabel: "Личный ответ",
    response:
      "Обычно в течение 3–12 часов.",

    communication:
      "Все вопросы обсуждаем письменно. Назначать созвон не нужно.",

    primaryCta:
      "Запросить предложение",

    whatsappCta:
      "Написать в WhatsApp",

    reassurance:
      "Заявка ни к чему не обязывает. Вы принимаете решение после получения предложения.",

    nextTitle:
      "Что будет после вашей заявки?",

    steps: [
      {
        title: "Вы описываете свою задачу",
        description:
          "Укажите сферу бизнеса, нужные разделы и материалы, которые уже есть. Если ещё не определились с форматом сайта, просто напишите об этом.",
      },
      {
        title: "Я уточняю детали",
        description:
          "Мы письменно согласуем цели, объём и требования, чтобы одинаково понимать, каким должен быть ваш сайт.",
      },
      {
        title: "Вы получаете понятное предложение",
        description:
          "Состав работ, фиксированная цена, сроки и порядок оплаты согласовываются письменно до начала проекта.",
      },
    ],

    included:
      "В пакеты разработки сайта включены два раунда правок.",

    legalTitle:
      "Информация о компании и конфиденциальность",

    impressum: "Impressum",
    privacy: "Политика конфиденциальности",
  },
} as const;

const emailAddress = "info@tpdigitallab.de";

const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL?.trim() ?? "";

export default function ContactSection() {
  const { language } = useLanguage();
  const t = contactCopy[language];

  return (
    <Section
      id="contact"
      className="scroll-mt-24 bg-[#050505]"
    >
      <Container className="max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-300">
            {t.eyebrow}
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {t.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            {t.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="min-w-0 rounded-3xl border border-white/15 bg-white/[0.05] p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-white">
              Taras Pakhaliuk
            </h3>

            <p className="mt-2 text-sm leading-6 text-blue-300">
              {t.role}
            </p>

            <p className="mt-5 leading-8 text-zinc-300">
              {t.introduction}
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl border border-white/15 bg-white/5 p-3">
                  <MapPin
                    aria-hidden="true"
                    className="h-5 w-5 text-blue-400"
                  />
                </div>

                <div className="min-w-0">
                  <p className="font-medium text-white">
                    {t.locationLabel}
                  </p>

                  <p className="mt-1 text-zinc-400">
                    {t.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl border border-white/15 bg-white/5 p-3">
                  <Mail
                    aria-hidden="true"
                    className="h-5 w-5 text-blue-400"
                  />
                </div>

                <div className="min-w-0">
                  <p className="font-medium text-white">
                    {t.emailLabel}
                  </p>

                  <a
                    href={`mailto:${emailAddress}`}
                    className="mt-1 inline-block break-all text-zinc-300 underline decoration-white/20 underline-offset-4 transition hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl border border-white/15 bg-white/5 p-3">
                  <Clock3
                    aria-hidden="true"
                    className="h-5 w-5 text-blue-400"
                  />
                </div>

                <div className="min-w-0">
                  <p className="font-medium text-white">
                    {t.responseLabel}
                  </p>

                  <p className="mt-1 text-zinc-400">
                    {t.response}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-500/[0.08] p-4 text-sm leading-6 text-zinc-300">
              {t.communication}
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/webdesign#anfrage"
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-5 py-4 text-center font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
              >
                <span>{t.primaryCta}</span>

                <ArrowRight
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0"
                />
              </Link>

              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl border border-green-400/25 bg-green-500/[0.08] px-5 py-4 text-center font-medium text-green-200 transition hover:bg-green-500/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400"
                >
                  <MessageCircle
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0"
                  />

                  <span>{t.whatsappCta}</span>
                </a>
              )}
            </div>

            <p className="mt-4 text-center text-sm leading-6 text-zinc-400">
              {t.reassurance}
            </p>
          </div>

          <div className="min-w-0 rounded-3xl border border-white/15 bg-white/[0.05] p-6 sm:p-8">
            <h3 className="text-2xl font-semibold leading-snug text-white">
              {t.nextTitle}
            </h3>

            <ol className="mt-8 space-y-8">
              {t.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex items-start gap-4"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-400/25 bg-blue-500/10 font-semibold text-blue-300"
                  >
                    {index + 1}
                  </span>

                  <div className="min-w-0">
                    <h4 className="text-lg font-medium text-white">
                      {step.title}
                    </h4>

                    <p className="mt-2 leading-7 text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <CheckCircle2
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-blue-400"
              />

              <p className="text-sm leading-6 text-zinc-300">
                {t.included}
              </p>
            </div>

            <div className="my-8 h-px bg-white/10" />

            <h4 className="text-sm font-medium text-zinc-300">
              {t.legalTitle}
            </h4>

            <nav
              aria-label={t.legalTitle}
              className="mt-4 flex flex-wrap gap-x-6 gap-y-3"
            >
              <Link
                href="/impressum"
                className="text-sm text-zinc-400 underline decoration-white/20 underline-offset-4 transition hover:text-white"
              >
                {t.impressum}
              </Link>

              <Link
                href="/datenschutzerklaerung"
                className="text-sm text-zinc-400 underline decoration-white/20 underline-offset-4 transition hover:text-white"
              >
                {t.privacy}
              </Link>
            </nav>
          </div>
        </div>
      </Container>
    </Section>
  );
}