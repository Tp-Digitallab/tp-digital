"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ConsentChoice = "granted" | "denied";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem("tp_cookie_consent");

    if (!savedConsent) {
      setVisible(true);
    }

    const openSettings = () => setVisible(true);

    window.addEventListener("open-cookie-settings", openSettings);

    return () => {
      window.removeEventListener("open-cookie-settings", openSettings);
    };
  }, []);

  function updateConsent(choice: ConsentChoice) {
    if (typeof window === "undefined") return;

    const gtag = (window as any).gtag;

    if (typeof gtag === "function") {
      gtag("consent", "update", {
        analytics_storage: choice,
        ad_storage: choice,
        ad_user_data: choice,
        ad_personalization: choice,
      });
    }

    localStorage.setItem("tp_cookie_consent", choice);

    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
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
            <h2 className="text-lg font-semibold text-white">
              Datenschutz & Cookies
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/60">
              Wir verwenden optionale Analyse- und Marketing-Technologien,
              um unsere Website zu verbessern und die Wirksamkeit unserer
              Werbung zu messen. Sie können zustimmen oder nur notwendige
              Technologien verwenden.
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
              onClick={() => updateConsent("denied")}
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
              onClick={() => updateConsent("granted")}
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