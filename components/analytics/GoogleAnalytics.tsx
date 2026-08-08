"use client";

import {
  useSyncExternalStore,
} from "react";
import Script from "next/script";

type ConsentChoice =
  | "granted"
  | "denied";

interface ConsentEventDetail {
  choice: ConsentChoice;
}

const GOOGLE_ADS_ID =
  "AW-18377056618";

const GOOGLE_ANALYTICS_ID =
  "G-H0KVG8N991";

function subscribeToConsent(
  onConsentChange: () => void
) {
  function handleConsentChange(
    event: Event
  ) {
    const consentEvent =
      event as CustomEvent<ConsentEventDetail>;

    if (
      consentEvent.detail.choice ===
      "denied"
    ) {
      window.location.reload();
      return;
    }

    onConsentChange();
  }

  function handleStorageChange(
    event: StorageEvent
  ) {
    if (
      event.key ===
      "tp_cookie_consent"
    ) {
      onConsentChange();
    }
  }

  window.addEventListener(
    "cookie-consent-changed",
    handleConsentChange
  );

  window.addEventListener(
    "storage",
    handleStorageChange
  );

  return () => {
    window.removeEventListener(
      "cookie-consent-changed",
      handleConsentChange
    );

    window.removeEventListener(
      "storage",
      handleStorageChange
    );
  };
}

function getConsentSnapshot() {
  return (
    localStorage.getItem(
      "tp_cookie_consent"
    ) === "granted"
  );
}

function getServerConsentSnapshot() {
  return false;
}

export default function GoogleAnalytics() {
  const consentGranted =
    useSyncExternalStore(
      subscribeToConsent,
      getConsentSnapshot,
      getServerConsentSnapshot
    );

  if (!consentGranted) {
    return null;
  }

  return (
    <>
      {/* Create dataLayer and gtag */}

      <Script
        id="google-consent-granted"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer =
            window.dataLayer || [];

          function gtag() {
            window.dataLayer.push(
              arguments
            );
          }

          window.gtag = gtag;

          gtag(
            "consent",
            "default",
            {
              analytics_storage:
                "granted",
              ad_storage:
                "granted",
              ad_user_data:
                "granted",
              ad_personalization:
                "granted"
            }
          );
        `}
      </Script>

      {/* Load Google Tag */}

      <Script
        id="google-tag-library"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />

      {/* Configure Ads and GA4 */}

      <Script
        id="google-tag-configuration"
        strategy="afterInteractive"
      >
        {`
          window.gtag(
            "js",
            new Date()
          );

          window.gtag(
            "config",
            "${GOOGLE_ADS_ID}"
          );

          window.gtag(
            "config",
            "${GOOGLE_ANALYTICS_ID}"
          );
        `}
      </Script>
    </>
  );
}