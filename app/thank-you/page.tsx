"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
} from "lucide-react";
import { motion } from "motion/react";

import { useLanguage } from "@/components/providers/LanguageProvider";

type GtagEventParameters = Record<
  string,
  string | number | boolean | undefined
>;

type GtagFunction = (
  command: "event",
  eventName: string,
  parameters?: GtagEventParameters
) => void;

type WindowWithGtag = Window & {
  gtag?: GtagFunction;
};

const GOOGLE_ADS_CONVERSION =
  "AW-18377056618/zbQMCJTp9t0cEOrC7rpE";

const GOOGLE_ANALYTICS_ID =
  "G-H0KVG8N991";

const RETRY_INTERVAL = 250;
const RETRY_TIMEOUT = 15_000;

const pageCopy = {
  de: {
    title: "Vielen Dank für Ihre Anfrage!",

    description:
      "Ihre Nachricht wurde erfolgreich übermittelt. Ich schaue mir Ihr Projekt persönlich an und melde mich bei Ihnen per E-Mail.",

    responseLabel: "Meine persönliche Rückmeldung",
    responseTime: "In der Regel innerhalb von 3–12 Stunden",

    nextTitle: "So geht es weiter",

    steps: [
      {
        title: "Ich prüfe Ihre Anfrage",
        description:
          "Ich schaue mir Ihre Ziele, die gewünschte Website und die von Ihnen beschriebenen Anforderungen an.",
      },
      {
        title: "Wir klären offene Fragen",
        description:
          "Falls Angaben fehlen, schreibe ich Ihnen per E-Mail. Ein Telefontermin ist nicht erforderlich.",
      },
      {
        title: "Sie erhalten ein klares Angebot",
        description:
          "Nach der Abstimmung erhalten Sie ein schriftliches Angebot mit Leistungsumfang, Festpreis, Zeitplan und Zahlungsbedingungen.",
      },
    ],

    reassurance:
      "Ihre Anfrage ist unverbindlich. Die Umsetzung beginnt erst nach Ihrer Bestätigung des Angebots und der vereinbarten Anzahlung.",

    additionalTitle: "Möchten Sie etwas ergänzen?",

    additionalText:
      "Schreiben Sie mir per E-Mail und nennen Sie den Namen aus Ihrer Anfrage. Sie müssen das Formular nicht erneut ausfüllen.",

    backHome: "Zurück zur Startseite",
    projects: "Referenzen ansehen",
    signature: "Taras Pakhaliuk · TP Digital Lab",
  },

  en: {
    title: "Thank you for your enquiry!",

    description:
      "Your message was submitted successfully. I will personally review your project and reply by email.",

    responseLabel: "My personal response",
    responseTime: "Usually within 3–12 hours",

    nextTitle: "What happens next",

    steps: [
      {
        title: "I review your enquiry",
        description:
          "I look at your goals, the website you need and the requirements you described.",
      },
      {
        title: "We clarify any open questions",
        description:
          "If I need more information, I will email you. No phone appointment is required.",
      },
      {
        title: "You receive a clear offer",
        description:
          "Once the details are agreed, you receive a written offer with the scope, fixed price, timeline and payment terms.",
      },
    ],

    reassurance:
      "Your enquiry carries no obligation. Work only begins after you accept the offer and make the agreed deposit.",

    additionalTitle: "Would you like to add something?",

    additionalText:
      "Email me and mention the name used in your enquiry. You do not need to submit the form again.",

    backHome: "Back to homepage",
    projects: "View references",
    signature: "Taras Pakhaliuk · TP Digital Lab",
  },

  ru: {
    title: "Спасибо за вашу заявку!",

    description:
      "Сообщение успешно отправлено. Я лично изучу ваш проект и отвечу по электронной почте.",

    responseLabel: "Мой личный ответ",
    responseTime: "Обычно в течение 3–12 часов",

    nextTitle: "Что будет дальше",

    steps: [
      {
        title: "Я изучу вашу заявку",
        description:
          "Посмотрю ваши цели, выбранный тип сайта и требования, которые вы описали.",
      },
      {
        title: "Мы уточним детали",
        description:
          "Если понадобится дополнительная информация, я напишу вам на email. Созвон не требуется.",
      },
      {
        title: "Вы получите понятное предложение",
        description:
          "После согласования деталей вы получите письменное предложение с составом работ, фиксированной ценой, сроками и условиями оплаты.",
      },
    ],

    reassurance:
      "Заявка ни к чему не обязывает. Работа начинается только после вашего подтверждения предложения и согласованной предоплаты.",

    additionalTitle: "Хотите что-то дополнить?",

    additionalText:
      "Напишите мне на email и укажите имя из заявки. Повторно заполнять форму не нужно.",

    backHome: "На главную",
    projects: "Посмотреть работы",
    signature: "Taras Pakhaliuk · TP Digital Lab",
  },
} as const;

export default function ThankYouPage() {
  const { language } = useLanguage();
  const t = pageCopy[language];

  const conversionQueued = useRef(false);

  useEffect(() => {
    let retryIntervalId: number | undefined;
    let retryTimeoutId: number | undefined;

    function stopWaiting() {
      if (retryIntervalId !== undefined) {
        window.clearInterval(retryIntervalId);
        retryIntervalId = undefined;
      }

      if (retryTimeoutId !== undefined) {
        window.clearTimeout(retryTimeoutId);
        retryTimeoutId = undefined;
      }
    }

    function getTrackingState() {
      try {
        return {
          submitted:
            sessionStorage.getItem(
              "lead_successfully_submitted"
            ) === "true",

          consentGranted:
            localStorage.getItem(
              "tp_cookie_consent"
            ) === "granted",
        };
      } catch {
        return null;
      }
    }

    function tryQueueConversions() {
      const state = getTrackingState();

      if (
        conversionQueued.current ||
        !state?.submitted ||
        !state.consentGranted
      ) {
        stopWaiting();
        return true;
      }

      const browserWindow =
        window as WindowWithGtag;

      if (
        typeof browserWindow.gtag !== "function"
      ) {
        return false;
      }

      browserWindow.gtag(
        "event",
        "conversion",
        {
          send_to: GOOGLE_ADS_CONVERSION,
        }
      );

      browserWindow.gtag(
        "event",
        "generate_lead",
        {
          send_to: GOOGLE_ANALYTICS_ID,
          currency: "EUR",
        }
      );

      conversionQueued.current = true;

      try {
        sessionStorage.removeItem(
          "lead_successfully_submitted"
        );
      } catch {
        // Keep the confirmation page usable if browser storage is blocked.
      }

      stopWaiting();
      return true;
    }

    function startWaiting() {
      if (tryQueueConversions()) return;

      if (retryIntervalId !== undefined) return;

      retryIntervalId = window.setInterval(
        tryQueueConversions,
        RETRY_INTERVAL
      );

      retryTimeoutId = window.setTimeout(
        stopWaiting,
        RETRY_TIMEOUT
      );
    }

    function handleStorageChange(
      event: StorageEvent
    ) {
      if (
        event.key === "tp_cookie_consent" ||
        event.key === null
      ) {
        startWaiting();
      }
    }

    startWaiting();

    window.addEventListener(
      "cookie-consent-changed",
      startWaiting
    );

    window.addEventListener(
      "storage",
      handleStorageChange
    );

    return () => {
      stopWaiting();

      window.removeEventListener(
        "cookie-consent-changed",
        startWaiting
      );

      window.removeEventListener(
        "storage",
        handleStorageChange
      );
    };
  }, []);

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-5 py-16 text-white sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[150px]"
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
        transition={{
          duration: 0.4,
        }}
        className="w-full max-w-3xl rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 text-center backdrop-blur-xl sm:p-10 lg:p-12"
      >
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/15 ring-8 ring-green-500/10">
            <CheckCircle2
              aria-hidden="true"
              className="h-11 w-11 text-green-400"
            />
          </div>
        </div>

        <h1 className="mt-9 text-3xl font-semibold tracking-tight sm:text-5xl">
          {t.title}
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/65">
          {t.description}
        </p>

        <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/[0.08] p-5 sm:p-6">
          <div className="flex items-center justify-center gap-2 text-sm text-green-300">
            <Clock3
              aria-hidden="true"
              className="h-4 w-4 shrink-0"
            />

            <p>{t.responseLabel}</p>
          </div>

          <p className="mt-3 text-xl font-semibold text-white sm:text-2xl">
            {t.responseTime}
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-left sm:p-7">
          <h2 className="text-xl font-semibold">
            {t.nextTitle}
          </h2>

          <ol className="mt-7 space-y-7">
            {t.steps.map((step, index) => (
              <li
                key={step.title}
                className="flex items-start gap-4"
              >
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-400/25 bg-blue-500/15 text-sm font-semibold text-blue-300"
                >
                  {index + 1}
                </span>

                <div className="min-w-0">
                  <h3 className="font-medium text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-6 text-sm leading-6 text-white/50">
          {t.reassurance}
        </p>

        <div className="mt-8 border-t border-white/10 pt-7">
          <h2 className="text-lg font-medium">
            {t.additionalTitle}
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/55">
            {t.additionalText}
          </p>

          <a
            href="mailto:info@tpdigitallab.de"
            className="mt-4 inline-flex items-center gap-2 text-blue-300 underline decoration-blue-300/30 underline-offset-4 transition hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            <Mail
              aria-hidden="true"
              className="h-4 w-4 shrink-0"
            />

            <span className="break-all">
              info@tpdigitallab.de
            </span>
          </a>
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 font-medium text-white transition hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            {t.backHome}

            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 shrink-0"
            />
          </Link>

          <Link
            href="/webdesign#projekte"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 font-medium text-white/80 transition hover:bg-white/[0.08] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            {t.projects}
          </Link>
        </div>

        <p className="mt-8 text-sm text-white/35">
          {t.signature}
        </p>
      </motion.div>
    </main>
  );
}