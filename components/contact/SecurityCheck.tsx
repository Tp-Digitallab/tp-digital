"use client";

import { useEffect, useId, useRef, useState, type RefObject } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useLanguage } from "@/components/providers/LanguageProvider";

const copy = {
  de: {
    failed: "Die Sicherheitsprüfung konnte nicht abgeschlossen werden. Versuchen Sie es erneut oder schicken Sie Ihre Anfrage per E-Mail.",
    missing: "Das Formular ist vorübergehend nicht verfügbar. Bitte schreiben Sie mir per E-Mail.",
    retry: "Sicherheitsprüfung erneut starten",
  },
  en: {
    failed: "The security check could not be completed. Try again or send your enquiry by email.",
    missing: "The form is temporarily unavailable. Please contact me by email.",
    retry: "Retry security check",
  },
  ru: {
    failed: "Не удалось завершить проверку безопасности. Повторите попытку или отправьте заявку по электронной почте.",
    missing: "Форма временно недоступна. Напишите мне по электронной почте.",
    retry: "Повторить проверку безопасности",
  },
};

export default function SecurityCheck({
  onTokenChange,
  widgetRef,
}: {
  onTokenChange: (token: string | null) => void;
  widgetRef?: RefObject<TurnstileInstance | null>;
}) {
  const { language } = useLanguage();
  const t = copy[language];
  const widgetId = useId();
  const internalRef = useRef<TurnstileInstance>(null);
  const activeRef = widgetRef ?? internalRef;
  const [failed, setFailed] = useState(false);
  const [widgetReady, setWidgetReady] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();

  useEffect(() => {
    if (!siteKey || widgetReady) return;
    const handleScriptError = (event: Event) => {
      if (event.target instanceof HTMLScriptElement && event.target.src.startsWith("https://challenges.cloudflare.com/turnstile/")) {
        setFailed(true);
      }
    };
    document.addEventListener("error", handleScriptError, true);
    const timer = window.setTimeout(() => setFailed(true), 20000);
    return () => {
      document.removeEventListener("error", handleScriptError, true);
      window.clearTimeout(timer);
    };
  }, [siteKey, widgetReady]);

  function handleFailure() {
    onTokenChange(null);
    setFailed(true);
  }

  return (
    <div className="mt-7 min-w-0">
      {siteKey && (
        <div className="flex justify-center">
          <Turnstile
            ref={activeRef}
            id={`${widgetId}-security`}
            siteKey={siteKey}
            onWidgetLoad={() => {
              setWidgetReady(true);
              setFailed(false);
            }}
            onSuccess={(token) => {
              onTokenChange(token);
              setFailed(false);
            }}
            onExpire={() => onTokenChange(null)}
            onError={handleFailure}
            onTimeout={handleFailure}
            onUnsupported={handleFailure}
            options={{ theme: "dark", size: "flexible", language }}
          />
        </div>
      )}
      {(!siteKey || failed) && (
        <div role="alert" className="mt-3 rounded-2xl border border-amber-300/25 bg-amber-300/5 p-4 text-sm leading-6 text-amber-100">
          <p>{siteKey ? t.failed : t.missing}</p>
          <a href="mailto:info@tpdigitallab.de" className="mt-2 inline-block break-all underline underline-offset-4">
            info@tpdigitallab.de
          </a>
          {siteKey && widgetReady && (
            <button
              type="button"
              onClick={() => {
                onTokenChange(null);
                activeRef.current?.reset();
              }}
              className="mt-3 block min-h-11 rounded-lg border border-amber-200/30 px-4 py-2 text-left font-medium hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
            >
              {t.retry}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
