"use client";

import {
  CheckCircle2,
  FileText,
} from "lucide-react";

import Container from "@/components/common/Container";
import Grid from "@/components/ui/background/Grid";
import { useLanguage } from "@/components/providers/LanguageProvider";

const processCopy = {
  de: {
    eyebrow: "So arbeiten wir zusammen",

    title:
      "Von Ihrer Anfrage",

    accent:
      "bis zum fertigen Webauftritt.",

    description:
      "Ich begleite Ihr Projekt persönlich. Vor dem Start wissen Sie, welche Leistungen enthalten sind, was die Umsetzung kostet und wie die nächsten Schritte aussehen.",

    steps: [
      {
        title: "Ihre Anfrage",

        description:
          "Sie beschreiben Ihr Unternehmen und die gewünschte Website. Ich kläre offene Fragen schriftlich mit Ihnen.",

        detail:
          "Unverbindlich · ohne Telefontermin",
      },

      {
        title: "Schriftliches Angebot",

        description:
          "Wir vereinbaren Leistungsumfang, Festpreis, Zeitplan und Zahlungsbedingungen. Sie prüfen das Angebot in Ruhe.",

        detail:
          "Klare Vereinbarungen vor dem Start",
      },

      {
        title: "Bestätigung und Start",

        description:
          "Nach Ihrer Bestätigung erhalten Sie die Anzahlungsrechnung über 50 %. Nach Zahlungseingang beginnt die Umsetzung.",

        detail:
          "50 % Anzahlung",
      },

      {
        title: "Prüfung und Korrekturen",

        description:
          "Sie prüfen die Website auf einer geschützten Testadresse. Zwei Korrekturrunden innerhalb des vereinbarten Umfangs sind enthalten.",

        detail:
          "Vor dem Livegang prüfen",
      },

      {
        title: "Abnahme und Livegang",

        description:
          "Nach Ihrer Freigabe zahlen Sie die restlichen 50 %. Anschließend wird Ihre Website veröffentlicht und Sie erhalten die vereinbarte Übergabe.",

        detail:
          "50 % nach Abnahme · vor dem Livegang",
      },
    ],

    scopeTitle:
      "Sie wissen, was Sie erhalten.",

    scopeText:
      "Das schriftliche Angebot beschreibt die vereinbarten Seiten, Funktionen und Leistungen. Zusätzliche Wünsche und mögliche Mehrkosten stimmen wir vor ihrer Umsetzung ab.",

    controlTitle:
      "Sie sehen das Ergebnis vor dem Launch.",

    controlText:
      "Auf der Testversion können Sie Inhalte, Darstellung und Funktionen prüfen und Ihre Änderungswünsche gesammelt zurückmelden.",
  },

  en: {
    eyebrow: "Working together",

    title:
      "From your enquiry",

    accent:
      "to your finished website.",

    description:
      "I personally guide your project. Before work begins, you know what is included, what it costs and what happens next.",

    steps: [
      {
        title: "Your enquiry",

        description:
          "You describe your business and the website you need. I clarify any open questions with you in writing.",

        detail:
          "No obligation · no phone appointment",
      },

      {
        title: "Written offer",

        description:
          "We agree on the scope, fixed price, timeline and payment terms. You can review the offer before deciding.",

        detail:
          "Clear agreements before work begins",
      },

      {
        title: "Confirmation and start",

        description:
          "Once you accept the offer, you receive an invoice for a 50% deposit. Implementation begins after payment.",

        detail:
          "50% deposit",
      },

      {
        title: "Review and revisions",

        description:
          "You review your website on a protected preview address. Two revision rounds within the agreed scope are included.",

        detail:
          "Review before launch",
      },

      {
        title: "Approval and launch",

        description:
          "After approval, you pay the remaining 50%. Your website is then published and the agreed handover takes place.",

        detail:
          "50% after approval · before launch",
      },
    ],

    scopeTitle:
      "You know what you are getting.",

    scopeText:
      "The written offer describes the agreed pages, features and services. We discuss additional requests and any extra costs before implementing them.",

    controlTitle:
      "You see the result before launch.",

    controlText:
      "The preview lets you check the content, appearance and features, then send your requested changes together.",
  },

  ru: {
    eyebrow: "Как проходит работа",

    title:
      "От вашей заявки",

    accent:
      "до готового сайта.",

    description:
      "Я лично веду ваш проект. До начала работы вы знаете, что входит в услугу, сколько стоит разработка и какие этапы предстоят.",

    steps: [
      {
        title: "Ваша заявка",

        description:
          "Вы рассказываете о бизнесе и нужном сайте. Я письменно уточняю детали и помогаю определить задачу.",

        detail:
          "Без обязательств и созвонов",
      },

      {
        title: "Письменное предложение",

        description:
          "Мы согласуем состав работ, фиксированную цену, сроки и порядок оплаты. Вы спокойно изучаете предложение и принимаете решение.",

        detail:
          "Понятные условия до начала работы",
      },

      {
        title: "Подтверждение и старт",

        description:
          "После вашего подтверждения я выставляю счёт на предоплату 50%. Разработка начинается после поступления оплаты.",

        detail:
          "Предоплата 50%",
      },

      {
        title: "Проверка и правки",

        description:
          "Вы проверяете сайт на закрытом тестовом адресе. Включены два раунда правок в рамках согласованного объёма.",

        detail:
          "Проверка до публикации",
      },

      {
        title: "Приёмка и запуск",

        description:
          "После вашего одобрения вы оплачиваете оставшиеся 50%. Затем сайт публикуется и передаётся в согласованном объёме.",

        detail:
          "Остаток 50% после приёмки · до запуска",
      },
    ],

    scopeTitle:
      "Вы знаете, что получите.",

    scopeText:
      "В письменном предложении указаны согласованные страницы, функции и услуги. Дополнительные пожелания и возможную доплату обсуждаем до выполнения этих работ.",

    controlTitle:
      "Вы видите результат до запуска.",

    controlText:
      "На тестовой версии можно проверить тексты, оформление и функции, а затем передать собранные пожелания по изменениям.",
  },
} as const;

export default function ProcessSection() {
  const { language } = useLanguage();
  const t = processCopy[language];

  return (
    <section
      id="process"
      className="relative scroll-mt-24 overflow-hidden bg-[#050505] py-24 text-white md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.07),transparent_60%)]"
      />

      <Grid />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-300">
            {t.eyebrow}
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {t.title}

            <br />

            <span className="text-white/70">
              {t.accent}
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            {t.description}
          </p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {t.steps.map((step, index) => (
            <li
              key={step.title}
              className="flex min-w-0 flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 last:md:col-span-2 last:xl:col-span-1"
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-400/25 bg-blue-500/10 text-sm font-semibold text-blue-300"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-6 break-words text-xl font-semibold leading-7">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                {step.description}
              </p>

              <div className="mt-auto pt-6">
                <p className="border-t border-white/10 pt-4 text-xs leading-5 text-blue-200/80">
                  {step.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.025] p-6">
            <FileText
              aria-hidden="true"
              className="mt-1 h-6 w-6 shrink-0 text-blue-400"
            />

            <div className="min-w-0">
              <h3 className="text-lg font-medium">
                {t.scopeTitle}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                {t.scopeText}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.025] p-6">
            <CheckCircle2
              aria-hidden="true"
              className="mt-1 h-6 w-6 shrink-0 text-blue-400"
            />

            <div className="min-w-0">
              <h3 className="text-lg font-medium">
                {t.controlTitle}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                {t.controlText}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}