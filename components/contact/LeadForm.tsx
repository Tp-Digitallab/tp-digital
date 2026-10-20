"use client";

import { type FormEvent, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type TurnstileInstance } from "@marsidev/react-turnstile";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { packagePresets } from "@/config/packagePresets";
import { serviceOffers } from "@/config/serviceOffers";
import type { ServicePageKey } from "@/config/servicePageTranslations";
import SecurityCheck from "@/components/contact/SecurityCheck";

export type PackageChoice = "launch" | "business" | "growth" | "custom";

type FormCopy = {
  firstName: string;
  website: string;
  websitePlaceholder: string;
  reassurance: string;
  email: string;
  package: string;
  packageLaunch: string;
  packageBusiness: string;
  packageGrowth: string;
  packageCustom: string;
  message: string;
  privacy: string;
  privacyLink: string;
  submit: string;
  sending: string;
  requiredError: string;
  securityError: string;
  sendError: string;
  configError: string;
};

const copy: Record<"de" | "en" | "ru", FormCopy> = {
  de: {
    website: "Ihre Website (optional)",
    websitePlaceholder: "z. B. ihr-betrieb.de",
    reassurance: "Keine Bestellung und kein Telefontermin. Sie erhalten zuerst eine persönliche Einschätzung und ein schriftliches Angebot.",
    firstName: "Ihr Name *",
    email: "E-Mail *",
    package: "Gewünschte Leistung *",
    packageLaunch: "Landingpage – ab 490 €",
    packageBusiness: "Unternehmenswebsite – ab 990 €",
    packageGrowth: "Online-Shop – ab 1.790 €",
    packageCustom: "Noch nicht sicher / individuelle Anfrage",
    message: "Beschreiben Sie kurz Ihr Projekt *",
    privacy: "Ich habe die",
    privacyLink: "Datenschutzerklärung zur Kenntnis genommen",
    submit: "Unverbindliches Angebot anfragen",
    sending: "Wird gesendet...",
    requiredError: "Bitte füllen Sie alle Pflichtfelder aus und bestätigen Sie die Datenschutzerklärung.",
    securityError: "Die Sicherheitsprüfung ist noch nicht abgeschlossen. Bitte versuchen Sie es erneut.",
    sendError: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
    configError: "Das Kontaktformular ist vorübergehend nicht verfügbar. Bitte schreiben Sie an info@tpdigitallab.de.",
  },
  en: {
    website: "Your website (optional)",
    websitePlaceholder: "e.g. your-business.com",
    reassurance: "No order or phone appointment. You first receive a personal assessment and a written quote.",
    firstName: "Your name *",
    email: "Email *",
    package: "Requested service *",
    packageLaunch: "Landing page – from €490",
    packageBusiness: "Business website – from €990",
    packageGrowth: "Online store – from €1,790",
    packageCustom: "Not sure yet / custom request",
    message: "Briefly describe your project *",
    privacy: "I have read the",
    privacyLink: "Privacy Policy",
    submit: "Request a no-obligation quote",
    sending: "Sending...",
    requiredError: "Please complete all required fields and accept the privacy policy.",
    securityError: "The security check is not complete yet. Please try again.",
    sendError: "The request could not be sent. Please try again.",
    configError: "The contact form is temporarily unavailable. Please email info@tpdigitallab.de.",
  },
  ru: {
    website: "Ваш сайт (необязательно)",
    websitePlaceholder: "Например, example.de",
    reassurance: "Это не заказ, обязательный звонок не нужен. Сначала вы получите оценку задачи и письменное предложение.",
    firstName: "Имя *",
    email: "E-mail *",
    package: "Нужная услуга *",
    packageLaunch: "Лендинг — от 490 €",
    packageBusiness: "Сайт компании — от 990 €",
    packageGrowth: "Интернет-магазин — от 1 790 €",
    packageCustom: "Пока не уверен / индивидуальный запрос",
    message: "Кратко опишите проект *",
    privacy: "Я ознакомился с",
    privacyLink: "политикой конфиденциальности",
    submit: "Отправить заявку",
    sending: "Отправка...",
    requiredError: "Заполните обязательные поля и подтвердите политику конфиденциальности.",
    securityError: "Проверка безопасности ещё не завершена. Попробуйте снова.",
    sendError: "Не удалось отправить заявку. Попробуйте ещё раз.",
    configError: "Форма временно недоступна. Напишите на info@tpdigitallab.de.",
  },
};

const inputClassName =
  "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-white/30 hover:border-white/20 focus:border-blue-400/60 focus:bg-white/[0.07]";

function getQuote(selectedPackage: PackageChoice) {
  if (selectedPackage === "custom") {
    return { packageId: null, websiteId: "custom" };
  }
  const preset = packagePresets[selectedPackage];
  return {
    ...preset,
    packageId: selectedPackage,
    websiteId: preset.website,
  };
}

export default function LeadForm({
  selectedPackage: controlledPackage,
  onPackageChange,
  initialPackage = "custom",
  serviceKey = "webdesign",
}: {
  selectedPackage?: PackageChoice;
  initialPackage?: PackageChoice;
  serviceKey?: ServicePageKey;
  onPackageChange?: (choice: PackageChoice) => void;
}) {
  const { language } = useLanguage();
  const t = copy[language];
  const offer = serviceKey === "webdesign" ? null : serviceOffers[serviceKey][language];
  const specializedOffer = serviceKey === "seo" || serviceKey === "digitalSolutions" ? offer : null;
  const [requestedTask, setRequestedTask] = useState(specializedOffer?.requests[0]?.id ?? "");
  const requestedTaskLabel = specializedOffer?.requests.find((request) => request.id === requestedTask)?.label;
  const router = useRouter();
  const formId = useId();
  const [website, setWebsite] = useState("");
  const [localPackage, setLocalPackage] = useState<PackageChoice>(initialPackage);
  const selectedPackage = controlledPackage ?? localPackage;
  const setSelectedPackage = onPackageChange ?? setLocalPackage;
  const effectivePackage = specializedOffer ? "custom" : selectedPackage;

  useEffect(() => {
    if (serviceKey === "seo" || serviceKey === "digitalSolutions") return;
    let frame = 0;
    const syncPackage = () => {
      const choices: Record<string, PackageChoice> = {
        "#anfrage-aenderungen": "custom",
        "#anfrage-launch": "launch",
        "#anfrage-business": "business",
        "#anfrage-growth": "growth",
      };
      const choice = choices[window.location.hash];
      if (choice) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => setSelectedPackage(choice));
      }
    };
    syncPackage();
    window.addEventListener("hashchange", syncPackage);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", syncPackage);
    };
  }, [setSelectedPackage, serviceKey]);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [privacyAccepted, setPrivacyAccepted] =
    useState(false);

  const [turnstileToken, setTurnstileToken] =
    useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submitError, setSubmitError] = useState("");

  const turnstileRef =
    useRef<TurnstileInstance>(null);

  const submissionLock = useRef(false);

  const turnstileSiteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";


  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (submissionLock.current) return;

    setSubmitError("");

    if (
      !firstName.trim() ||
      !email.trim() ||
      !message.trim() ||
      !privacyAccepted
    ) {
      setSubmitError(t.requiredError);
      return;
    }

    if (!turnstileToken) {
      setSubmitError(t.securityError);
      return;
    }

    submissionLock.current = true;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: firstName.trim(),
          email: email.trim(),
          message: message.trim(),
          service: window.location.pathname === "/" ? "general" : serviceKey,
          task: requestedTaskLabel || (
            effectivePackage === "launch" ? t.packageLaunch :
            effectivePackage === "business" ? t.packageBusiness :
            effectivePackage === "growth" ? t.packageGrowth : t.packageCustom
          ),
          website: website.trim(),
          source: window.location.pathname,
          timeline: "",
          discount: false,
          language,
          quote: getQuote(effectivePackage),
          turnstileToken,
        }),
      });

      const result: unknown = await response
        .json()
        .catch(() => null);

      if (
        !response.ok ||
        typeof result !== "object" ||
        result === null ||
        !("success" in result) ||
        result.success !== true
      ) {
        throw new Error("Request failed");
      }
    } catch {
      setTurnstileToken(null);
      setSubmitError(t.sendError);

      submissionLock.current = false;
      setIsSubmitting(false);

      turnstileRef.current?.reset();
      return;
    }

    try {
      sessionStorage.setItem(
        "lead_successfully_submitted",
        "true"
      );
    } catch {
      router.push("/thank-you");
      return;
    }

    router.push("/thank-you");
  }


  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
      className="rounded-[32px] border border-white/15 bg-black/35 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-9"
    >
      <fieldset disabled={isSubmitting} className="grid min-w-0 gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-white/85" htmlFor={`${formId}-name`}>
          <span className="mb-2 block">{t.firstName}</span>
          <input
            id={`${formId}-name`}
            name="name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            autoComplete="name"
            maxLength={100}
            required
            className={inputClassName}
          />
        </label>
        <label className="block text-sm font-medium text-white/85" htmlFor={`${formId}-email`}>
          <span className="mb-2 block">{t.email}</span>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            maxLength={254}
            required
            className={inputClassName}
          />
        </label>
        <label className="block text-sm font-medium text-white/85 sm:col-span-2" htmlFor={`${formId}-package`}>
          <span className="mb-2 block">{t.package}</span>
          <select
            id={`${formId}-package`}
            name="package"
            value={specializedOffer ? requestedTask : selectedPackage}
            onChange={(event) => {
              if (specializedOffer) setRequestedTask(event.target.value);
              else setSelectedPackage(event.target.value as PackageChoice);
            }}
            required
            className={inputClassName}
          >
            {specializedOffer ? specializedOffer.requests.map((request) => (
              <option key={request.id} value={request.id} className="bg-zinc-950">{request.label}</option>
            )) : (
              <>
                <option value="custom" className="bg-zinc-950">{t.packageCustom}</option>
                {serviceKey !== "onlineShop" && <option value="launch" className="bg-zinc-950">{t.packageLaunch}</option>}
                {serviceKey !== "onlineShop" && <option value="business" className="bg-zinc-950">{t.packageBusiness}</option>}
                <option value="growth" className="bg-zinc-950">{t.packageGrowth}</option>
              </>
            )}
          </select>
        </label>
        <label className="block text-sm font-medium text-white/85 sm:col-span-2" htmlFor={`${formId}-website`}>
          <span className="mb-2 block">{t.website}</span>
          <input
            id={`${formId}-website`}
            name="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            placeholder={t.websitePlaceholder}
            maxLength={300}
            className={inputClassName}
          />
        </label>
        <label className="block text-sm font-medium text-white/85 sm:col-span-2" htmlFor={`${formId}-message`}>
          <span className="mb-2 block">{t.message}</span>
          <textarea
            id={`${formId}-message`}
            name="message"
            placeholder={offer?.messagePlaceholder}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={5}
            maxLength={1800}
            required
            className={`${inputClassName} resize-y`}
          />
        </label>
      </fieldset>
      <SecurityCheck widgetRef={turnstileRef} onTokenChange={(token) => {
        setTurnstileToken(token);
        if (token) setSubmitError("");
      }} />
      <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-white/75">
        <input
          type="checkbox"
          checked={privacyAccepted}
          onChange={(event) => setPrivacyAccepted(event.target.checked)}
          disabled={isSubmitting}
          required
          className="mt-1 h-4 w-4 shrink-0 accent-blue-500"
        />
        <span>
          {t.privacy}{" "}
          <Link href="/datenschutzerklaerung" className="text-white/90 underline underline-offset-4">
            {t.privacyLink}
          </Link>.
        </span>
      </label>
      {submitError && (
        <p role="alert" className="mt-5 text-sm text-red-400">
          {submitError}{" "}
          <a href="mailto:info@tpdigitallab.de" className="underline underline-offset-4">
            info@tpdigitallab.de
          </a>
        </p>
      )}
      <button
        type="submit"
        disabled={isSubmitting || !turnstileSiteKey || !privacyAccepted}
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-blue-600 px-5 py-4 font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? t.sending : t.submit}
        {!isSubmitting && <span aria-hidden="true" className="ml-3">→</span>}
      </button>
      <p className="mt-4 text-center text-sm leading-6 text-white/70">{t.reassurance}</p>
    </form>
  );
}
