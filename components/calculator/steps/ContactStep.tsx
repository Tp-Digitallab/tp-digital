"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FileText, Mail, User } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";

interface Quote {
  packageId: string | null;
  websiteId: string;
  languages: string[];
  marketing: string[];
  branding: string[];
  features: string[];
  support: string[];
  total: number;
  monthlyTotal: number;
}

interface Props {
  back: () => void;
  quote: Quote;
}

const contactCopy = {
  de: {
    privacy:
      "Ich habe die Datenschutzerklärung gelesen.",
    privacyError:
      "Bitte bestätigen Sie die Datenschutzerklärung.",
    messageError:
      "Bitte beschreiben Sie kurz Ihr Projekt.",
    securityError:
      "Die Sicherheitsprüfung läuft noch. Bitte versuchen Sie es erneut.",
    sending: "Wird gesendet...",
    sendError:
      "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
  },

  en: {
    privacy:
      "I have read the privacy policy.",
    privacyError:
      "Please confirm the privacy policy.",
    messageError:
      "Please briefly describe your project.",
    securityError:
      "Security verification is still running. Please try again.",
    sending: "Sending...",
    sendError:
      "The request could not be sent. Please try again.",
  },

  ru: {
    privacy:
      "Я ознакомился с политикой конфиденциальности.",
    privacyError:
      "Подтвердите ознакомление с политикой конфиденциальности.",
    messageError:
      "Кратко опишите ваш проект.",
    securityError:
      "Проверка безопасности ещё выполняется. Попробуйте ещё раз.",
    sending: "Отправка...",
    sendError:
      "Не удалось отправить заявку. Попробуйте ещё раз.",
  },
} as const;

export default function ContactStep({
  back,
  quote,
}: Props) {
  const { language } = useLanguage();
  const t = translations[language];
  const copy = contactCopy[language];
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [privacyAccepted, setPrivacyAccepted] =
    useState(false);

  const [turnstileToken, setTurnstileToken] =
    useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submitError, setSubmitError] =
    useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    privacy: "",
  });

  function validate() {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      privacy: "",
    };

    let valid = true;

    if (!firstName.trim()) {
      newErrors.firstName =
        language === "de"
          ? "Vorname ist erforderlich."
          : language === "ru"
            ? "Введите имя."
            : "First name is required.";

      valid = false;
    }

    if (!lastName.trim()) {
      newErrors.lastName =
        language === "de"
          ? "Nachname ist erforderlich."
          : language === "ru"
            ? "Введите фамилию."
            : "Last name is required.";

      valid = false;
    }

    if (!email.trim()) {
      newErrors.email =
        language === "de"
          ? "E-Mail-Adresse ist erforderlich."
          : language === "ru"
            ? "Введите электронную почту."
            : "Email is required.";

      valid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        email,
      )
    ) {
      newErrors.email =
        language === "de"
          ? "Bitte geben Sie eine gültige E-Mail-Adresse ein."
          : language === "ru"
            ? "Введите корректный адрес электронной почты."
            : "Please enter a valid email address.";

      valid = false;
    }

    if (!message.trim()) {
      newErrors.message = copy.messageError;
      valid = false;
    }

    if (!privacyAccepted) {
      newErrors.privacy = copy.privacyError;
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  }

  async function handleSubmit() {
    if (isSubmitting) {
      return;
    }

    setSubmitError("");

    if (!validate()) {
      return;
    }

    if (!turnstileToken) {
      setSubmitError(copy.securityError);
      return;
    }

    const formData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      message: message.trim(),
      language,
      quote,
      turnstileToken,
    };

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send request");
      }

      sessionStorage.setItem(
        "lead_successfully_submitted",
        "true",
      );

      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      setSubmitError(copy.sendError);
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClassName =
    "w-full rounded-[22px] border border-white/10 bg-white/[0.03] py-5 pl-14 pr-6 text-white outline-none transition-all duration-300 placeholder:text-white/30 hover:border-white/20 focus:border-blue-400/50 focus:bg-white/[0.05] focus:shadow-[0_0_25px_rgba(59,130,246,0.15)]";

  return (
    <section>
      <p className="mb-2 text-sm uppercase tracking-[0.3em] text-blue-400">
        {t.calculatorSteps.contact.step}
      </p>

      <h2 className="text-3xl font-semibold text-white sm:text-5xl">
        {t.calculatorSteps.contact.title}
      </h2>

      <p className="mt-4 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
        {t.calculatorSteps.contact.description}
      </p>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          void handleSubmit();
        }}
        className="mt-10"
      >
        <div className="grid w-full gap-5 md:grid-cols-2">
          <div>
            <div className="relative">
              <User
                size={20}
                aria-hidden="true"
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/25"
              />

              <input
                type="text"
                name="firstName"
                autoComplete="given-name"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);

                  if (errors.firstName) {
                    setErrors((current) => ({
                      ...current,
                      firstName: "",
                    }));
                  }
                }}
                placeholder={
                  t.calculatorSteps.contact.firstName
                }
                aria-invalid={Boolean(errors.firstName)}
                aria-describedby={
                  errors.firstName
                    ? "calculator-first-name-error"
                    : undefined
                }
                className={inputClassName}
              />
            </div>

            {errors.firstName && (
              <p
                id="calculator-first-name-error"
                className="ml-2 mt-2 text-sm text-red-400"
              >
                {errors.firstName}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <User
                size={20}
                aria-hidden="true"
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/25"
              />

              <input
                type="text"
                name="lastName"
                autoComplete="family-name"
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);

                  if (errors.lastName) {
                    setErrors((current) => ({
                      ...current,
                      lastName: "",
                    }));
                  }
                }}
                placeholder={
                  t.calculatorSteps.contact.lastName
                }
                aria-invalid={Boolean(errors.lastName)}
                aria-describedby={
                  errors.lastName
                    ? "calculator-last-name-error"
                    : undefined
                }
                className={inputClassName}
              />
            </div>

            {errors.lastName && (
              <p
                id="calculator-last-name-error"
                className="ml-2 mt-2 text-sm text-red-400"
              >
                {errors.lastName}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <div className="relative">
              <Mail
                size={20}
                aria-hidden="true"
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/25"
              />

              <input
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);

                  if (errors.email) {
                    setErrors((current) => ({
                      ...current,
                      email: "",
                    }));
                  }
                }}
                placeholder={
                  t.calculatorSteps.contact.email
                }
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email
                    ? "calculator-email-error"
                    : undefined
                }
                className={inputClassName}
              />
            </div>

            {errors.email && (
              <p
                id="calculator-email-error"
                className="ml-2 mt-2 text-sm text-red-400"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div className="relative md:col-span-2">
            <FileText
              size={20}
              aria-hidden="true"
              className="pointer-events-none absolute left-5 top-6 text-white/25"
            />

            <textarea
              name="message"
              rows={6}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);

                if (errors.message) {
                  setErrors((current) => ({
                    ...current,
                    message: "",
                  }));
                }
              }}
              placeholder={
                t.calculatorSteps.contact.message
              }
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message
                  ? "calculator-message-error"
                  : undefined
              }
              className={`${inputClassName} resize-y`}
            />

            {errors.message && (
              <p
                id="calculator-message-error"
                className="ml-2 mt-2 text-sm text-red-400"
              >
                {errors.message}
              </p>
            )}
          </div>
        </div>

        <label className="mt-7 flex cursor-pointer items-start gap-3 text-sm leading-6 text-white/65">
          <input
            type="checkbox"
            checked={privacyAccepted}
            onChange={(event) => {
              setPrivacyAccepted(event.target.checked);

              if (errors.privacy) {
                setErrors((current) => ({
                  ...current,
                  privacy: "",
                }));
              }
            }}
            className="mt-1 h-4 w-4 shrink-0 accent-blue-500"
          />

          <span>
            {copy.privacy}{" "}
            <Link
              href="/datenschutzerklaerung"
              target="_blank"
              className="text-blue-300 underline underline-offset-4 transition hover:text-blue-200"
            >
              {t.calculatorSteps.contact.privacy}
            </Link>
          </span>
        </label>

        {errors.privacy && (
          <p className="mt-2 text-sm text-red-400">
            {errors.privacy}
          </p>
        )}

        <div className="mt-8 flex justify-center">
          <Turnstile
            siteKey={
              process.env
                .NEXT_PUBLIC_TURNSTILE_SITE_KEY!
            }
            onSuccess={(token) => {
              setTurnstileToken(token);
              setSubmitError("");
            }}
            onExpire={() => {
              setTurnstileToken(null);
            }}
            onError={() => {
              setTurnstileToken(null);
            }}
            options={{
              theme: "dark",
              size: "flexible",
            }}
          />
        </div>

        {submitError && (
          <p
            role="alert"
            className="mt-5 text-center text-sm text-red-400"
          >
            {submitError}
          </p>
        )}

        <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={back}
            disabled={isSubmitting}
            className="w-full rounded-full border border-white/10 px-8 py-4 text-white transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            ← {t.calculatorSteps.contact.back}
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-blue-500 px-8 py-4 font-semibold text-white shadow-[0_12px_35px_rgba(59,130,246,0.25)] transition-all duration-300 hover:bg-blue-400 hover:shadow-[0_18px_45px_rgba(59,130,246,0.35)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-blue-500 sm:w-auto"
          >
            {isSubmitting
              ? copy.sending
              : `${t.calculatorSteps.contact.submit} →`}
          </button>
        </div>
      </form>
    </section>
  );
}