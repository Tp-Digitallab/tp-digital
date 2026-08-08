"use client";

import {
  useEffect,
  useState,
} from "react";
import Link from "next/link";

type ConsentChoice =
  | "granted"
  | "denied";

type GtagFunction = (
  command: "consent",
  action: "update",
  parameters: {
    analytics_storage: ConsentChoice;
    ad_storage: ConsentChoice;
    ad_user_data: ConsentChoice;
    ad_personalization: ConsentChoice;
  }
) => void;

type WindowWithGtag = Window & {
  gtag?: GtagFunction;
};

function isConsentChoice(
  value: string | null
): value is ConsentChoice {
  return (
    value === "granted" ||
    value === "denied"
  );
}

export default function CookieConsent() {
  const [visible, setVisible] =
    useState(false);

  const [
    hasSavedChoice,
    setHasSavedChoice,
  ] = useState(false);

  useEffect(() => {
    const savedConsent =
      localStorage.getItem(
        "tp_cookie_consent"
      );

    const validSavedChoice =
      isConsentChoice(savedConsent);

    let animationFrameId = 0;

    animationFrameId =
      requestAnimationFrame(() => {
        setHasSavedChoice(
          validSavedChoice
        );

        if (!validSavedChoice) {
          setVisible(true);
        }
      });

    function openSettings() {
      setVisible(true);
    }

    window.addEventListener(
      "open-cookie-settings",
      openSettings
    );

    return () => {
      cancelAnimationFrame(
        animationFrameId
      );

      window.removeEventListener(
        "open-cookie-settings",
        openSettings
      );
    };
  }, []);

  function updateConsent(
    choice: ConsentChoice
  ) {
    const browserWindow =
      window as WindowWithGtag;

    if (
      typeof browserWindow.gtag ===
      "function"
    ) {
      browserWindow.gtag(
        "consent",
        "update",
        {
          analytics_storage: choice,
          ad_storage: choice,
          ad_user_data: choice,
          ad_personalization: choice,
        }
      );
    }

    localStorage.setItem(
      "tp_cookie_consent",
      choice
    );

    setHasSavedChoice(true);
    setVisible(false);

    window.dispatchEvent(
      new CustomEvent(
        "cookie-consent-changed",
        {
          detail: {
            choice,
          },
        }
      )
    );
  }

  if (!visible) {
    if (!hasSavedChoice) {
      return null;
    }

    return (
      <button
        type="button"
        onClick={() => setVisible(true)}
        aria-label="Cookie-Einstellungen öffnen"
        className="
          fixed
          bottom-[max(16px,env(safe-area-inset-bottom))]
          left-4
          z-[99990]

          rounded-full

          border
          border-white/15

          bg-[#090909]/90

          px-4
          py-2.5

          text-xs
          font-medium
          text-white/70

          shadow-xl
          backdrop-blur-xl

          transition-all
          duration-300

          hover:border-white/30
          hover:text-white
        "
      >
        Cookie-Einstellungen
      </button>
    );
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-[99999]

        p-4

        sm:p-6
      "
    >
      <div
        className="
          mx-auto
          max-w-5xl

          rounded-3xl

          border
          border-white/10

          bg-[#090909]/95

          p-6

          shadow-2xl
          backdrop-blur-xl

          sm:p-8
        "
      >
        <div
          className="
            flex
            flex-col
            gap-6

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div className="max-w-2xl">
            <h2
              id="cookie-consent-title"
              className="text-lg font-semibold text-white"
            >
              Datenschutz & Cookies
            </h2>

            <p
              id="cookie-consent-description"
              className="mt-2 text-sm leading-6 text-white/60"
            >
              Wir verwenden optionale
              Analyse- und
              Marketing-Technologien, um
              unsere Website zu verbessern
              und die Wirksamkeit unserer
              Werbung zu messen. Diese
              Technologien werden nur mit
              Ihrer Zustimmung geladen.
            </p>

            <Link
              href="/datenschutzerklaerung"
              className="
                mt-3
                inline-block

                text-sm
                text-white/70

                underline
                underline-offset-4

                transition

                hover:text-white
              "
            >
              Datenschutzerklärung
            </Link>
          </div>

          <div
            className="
              flex
              shrink-0
              flex-col
              gap-3

              sm:flex-row
            "
          >
            <button
              type="button"
              onClick={() =>
                updateConsent("denied")
              }
              className="
                rounded-full

                border
                border-white/15

                px-6
                py-3

                text-sm
                font-medium
                text-white

                transition

                hover:bg-white/10
              "
            >
              Nur notwendige
            </button>

            <button
              type="button"
              onClick={() =>
                updateConsent("granted")
              }
              className="
                rounded-full

                bg-white

                px-6
                py-3

                text-sm
                font-semibold
                text-black

                transition

                hover:bg-white/90
              "
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}