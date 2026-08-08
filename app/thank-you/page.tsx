"use client";

import {
  useEffect,
} from "react";

import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { motion } from "motion/react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";

type GtagEventParameters = Record<
  string,
  | string
  | number
  | boolean
  | undefined
>;

type GtagFunction = (
  command: "event",
  eventName: string,
  parameters?: GtagEventParameters
) => void;

type WindowWithGtag =
  Window & {
    gtag?: GtagFunction;
  };

const responseTimeTranslations = {
  de: "3–12 Stunden",
  en: "3–12 hours",
  ru: "3–12 часов",
} as const;

const GOOGLE_ADS_CONVERSION =
  "AW-18377056618/zbQMCJTp9t0cEOrC7rpE";

const GOOGLE_ANALYTICS_ID =
  "G-H0KVG8N991";

const RETRY_INTERVAL = 250;

const RETRY_TIMEOUT = 15_000;

export default function ThankYouPage() {
  const { language } =
    useLanguage();

  const t =
    translations[language];

  const responseTime =
    responseTimeTranslations[
      language
    ];

  useEffect(() => {
    let retryIntervalId:
      | number
      | undefined;

    let retryTimeoutId:
      | number
      | undefined;

    function stopWaitingForGoogleTag() {
      if (
        retryIntervalId !==
        undefined
      ) {
        window.clearInterval(
          retryIntervalId
        );

        retryIntervalId =
          undefined;
      }

      if (
        retryTimeoutId !==
        undefined
      ) {
        window.clearTimeout(
          retryTimeoutId
        );

        retryTimeoutId =
          undefined;
      }
    }

    function sendConversionEvents() {
      const submitted =
        sessionStorage.getItem(
          "lead_successfully_submitted"
        );

      if (submitted !== "true") {
        stopWaitingForGoogleTag();

        return true;
      }

      const consentGranted =
        localStorage.getItem(
          "tp_cookie_consent"
        ) === "granted";

      /*
       * При отсутствии согласия
       * Google Analytics и Google Ads
       * не запускаются.
       */
      if (!consentGranted) {
        return false;
      }

      const browserWindow =
        window as WindowWithGtag;

      /*
       * Google Tag может загрузиться
       * немного позже страницы.
       */
      if (
        typeof browserWindow.gtag !==
        "function"
      ) {
        return false;
      }

      /*
       * Google Ads conversion.
       */
      browserWindow.gtag(
        "event",
        "conversion",
        {
          send_to:
            GOOGLE_ADS_CONVERSION,
        }
      );

      /*
       * Google Analytics 4 lead.
       */
      browserWindow.gtag(
        "event",
        "generate_lead",
        {
          send_to:
            GOOGLE_ANALYTICS_ID,

          currency: "EUR",
        }
      );

      /*
       * Удаляем отметку только после
       * фактической отправки событий.
       * Это предотвращает потерю
       * конверсии при медленной
       * загрузке Google Tag.
       */
      sessionStorage.removeItem(
        "lead_successfully_submitted"
      );

      stopWaitingForGoogleTag();

      return true;
    }

    function startWaitingForGoogleTag() {
      const submitted =
        sessionStorage.getItem(
          "lead_successfully_submitted"
        );

      const consentGranted =
        localStorage.getItem(
          "tp_cookie_consent"
        ) === "granted";

      if (
        submitted !== "true" ||
        !consentGranted
      ) {
        return;
      }

      if (sendConversionEvents()) {
        return;
      }

      if (
        retryIntervalId !==
        undefined
      ) {
        return;
      }

      retryIntervalId =
        window.setInterval(
          () => {
            sendConversionEvents();
          },
          RETRY_INTERVAL
        );

      /*
       * Через 15 секунд прекращаем
       * ожидание, но отметку заявки
       * не удаляем. После обновления
       * страницы будет новая попытка.
       */
      retryTimeoutId =
        window.setTimeout(
          () => {
            stopWaitingForGoogleTag();
          },
          RETRY_TIMEOUT
        );
    }

    function handleConsentChange() {
      startWaitingForGoogleTag();
    }

    function handleStorageChange(
      event: StorageEvent
    ) {
      if (
        event.key ===
        "tp_cookie_consent"
      ) {
        startWaitingForGoogleTag();
      }
    }

    /*
     * Первая попытка сразу после
     * открытия страницы.
     */
    startWaitingForGoogleTag();

    /*
     * Если пользователь примет cookies
     * уже на странице благодарности,
     * выполняется новая попытка.
     */
    window.addEventListener(
      "cookie-consent-changed",
      handleConsentChange
    );

    window.addEventListener(
      "storage",
      handleStorageChange
    );

    return () => {
      stopWaitingForGoogleTag();

      window.removeEventListener(
        "cookie-consent-changed",
        handleConsentChange
      );

      window.removeEventListener(
        "storage",
        handleStorageChange
      );
    };
  }, []);

  return (
    <main
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        px-5
        py-12
        sm:px-6
      "
    >
      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-[#050816]" />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/10
          blur-[180px]
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          w-full
          max-w-2xl
          rounded-[30px]
          border
          border-white/10
          bg-gradient-to-b
          from-white/[0.06]
          to-white/[0.02]
          p-6
          text-center
          backdrop-blur-xl
          sm:rounded-[36px]
          sm:p-10
          lg:p-14
        "
      >
        <motion.div
          className="flex justify-center"
          initial={{
            scale: 0,
            rotate: -90,
          }}
          animate={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "spring",
          }}
        >
          <div
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              bg-green-500/15
              ring-8
              ring-green-500/10
              sm:h-28
              sm:w-28
            "
          >
            <CheckCircle2
              size={56}
              aria-hidden="true"
              className="text-green-400"
            />
          </div>
        </motion.div>

        <h1 className="mt-10 text-4xl font-bold text-white sm:text-5xl">
          {t.thankYou.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-white/60 sm:text-xl">
          {
            t.thankYou.description
          }
        </p>

        <p className="mt-3 text-white/45">
          {
            t.thankYou
              .subDescription
          }
        </p>

        <div
          className="
            mt-10
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-5
            text-left
            sm:mt-12
            sm:p-8
          "
        >
          <h2 className="text-xl font-semibold text-white">
            {
              t.thankYou.nextTitle
            }
          </h2>

          <div className="mt-8 space-y-7">
            {t.thankYou.steps.map(
              (
                item,
                index
              ) => (
                <div
                  key={`${index}-${item.title}`}
                  className="flex gap-5"
                >
                  <div
                    aria-hidden="true"
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-500
                      font-semibold
                      text-white
                    "
                  >
                    {index + 1}
                  </div>

                  <div>
                    <p className="font-medium text-white">
                      {
                        item.title
                      }
                    </p>

                    <p className="mt-1 text-white/50">
                      {
                        item.description
                      }
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div
          className="
            mt-10
            rounded-2xl
            border
            border-green-500/20
            bg-green-500/10
            p-6
          "
        >
          <p className="text-sm uppercase tracking-[0.2em] text-green-300">
            {
              t.thankYou.responseTime
            }
          </p>

          <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            {responseTime}
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:mt-14 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-blue-500
              px-9
              py-4
              font-medium
              text-white
              transition
              hover:bg-blue-400
            "
          >
            {
              t.thankYou.backHome
            }

            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </Link>

          <Link
            href="/#calculator"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-cyan-500
              px-10
              py-4
              font-semibold
              text-white
              shadow-[0_15px_40px_rgba(99,102,241,.25)]
              transition-all
              duration-300
              hover:bg-indigo-400
              hover:shadow-[0_20px_55px_rgba(99,102,241,.4)]
              sm:py-5
            "
          >
            {
              t.thankYou
                .anotherQuote
            }
          </Link>
        </div>
      </motion.div>
    </main>
  );
}