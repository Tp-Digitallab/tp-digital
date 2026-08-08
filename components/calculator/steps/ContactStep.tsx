import { useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, Mail, Phone, User } from "lucide-react";
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

export default function ContactStep({
  back,
  quote,
}: Props) {
  const { language } = useLanguage();
  const t = translations[language];
  const router = useRouter();

  const budgetOptions = [
    {
      value: "under-500",
      label:
        t.calculatorSteps.contact.budgetOptions.under500,
    },
    {
      value: "500-1000",
      label:
        t.calculatorSteps.contact.budgetOptions.from500To1000,
    },
    {
      value: "1000-2500",
      label:
        t.calculatorSteps.contact.budgetOptions.from1000To2500,
    },
    {
      value: "unsure",
      label:
        t.calculatorSteps.contact.budgetOptions.unsure,
    },
  ];

  const timelineOptions = [
    {
      value: "asap",
      label:
        t.calculatorSteps.contact.timelineOptions.asap,
    },
    {
      value: "within-month",
      label:
        t.calculatorSteps.contact.timelineOptions.withinMonth,
    },
    {
      value: "1-3-months",
      label:
        t.calculatorSteps.contact.timelineOptions.oneToThreeMonths,
    },
    {
      value: "flexible",
      label:
        t.calculatorSteps.contact.timelineOptions.flexible,
    },
  ];

  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [discount, setDiscount] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

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
  });

  function validate() {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
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
        email
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
      setSubmitError(
        language === "de"
          ? "Die Sicherheitsprüfung läuft noch. Bitte versuchen Sie es erneut."
          : language === "ru"
            ? "Проверка безопасности ещё выполняется. Попробуйте ещё раз."
            : "Security verification is still running. Please try again."
      );

      return;
    }

    const formData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),

      budget:
        budgetOptions.find(
          (item) => item.value === budget
        )?.label || "",

      timeline:
        timelineOptions.find(
          (item) => item.value === timeline
        )?.label || "",

      discount,
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
        throw new Error(
          "Failed to send request"
        );
      }

      sessionStorage.setItem(
        "lead_successfully_submitted",
        "true"
      );

      router.push("/thank-you");
    } catch (error) {
      console.error(error);

      setSubmitError(
        language === "de"
          ? "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut."
          : language === "ru"
            ? "Не удалось отправить заявку. Попробуйте ещё раз."
            : "The request could not be sent. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

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

      <div className="mt-10 grid w-full gap-5 md:grid-cols-2">
        {/* First name */}

        <div>
          <div className="relative">
            <User
              size={20}
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
              aria-invalid={Boolean(
                errors.firstName
              )}
              aria-describedby={
                errors.firstName
                  ? "first-name-error"
                  : undefined
              }
              className="w-full rounded-[22px] border border-white/10 bg-white/[0.03] py-5 pl-14 pr-6 text-white outline-none transition-all duration-300 placeholder:text-white/30 hover:border-white/20 focus:border-blue-400/50 focus:bg-white/[0.05] focus:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
            />
          </div>

          {errors.firstName && (
            <p
              id="first-name-error"
              className="ml-2 mt-2 text-sm text-red-400"
            >
              {errors.firstName}
            </p>
          )}
        </div>

        {/* Last name */}

        <div>
          <div className="relative">
            <User
              size={20}
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
              aria-invalid={Boolean(
                errors.lastName
              )}
              aria-describedby={
                errors.lastName
                  ? "last-name-error"
                  : undefined
              }
              className="w-full rounded-[22px] border border-white/10 bg-white/[0.03] py-5 pl-14 pr-6 text-white outline-none transition-all duration-300 placeholder:text-white/30 hover:border-white/20 focus:border-blue-400/50 focus:bg-white/[0.05] focus:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
            />
          </div>

          {errors.lastName && (
            <p
              id="last-name-error"
              className="ml-2 mt-2 text-sm text-red-400"
            >
              {errors.lastName}
            </p>
          )}
        </div>

        {/* Email */}

        <div className="md:col-span-2">
          <div className="relative">
            <Mail
              size={20}
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
                  ? "email-error"
                  : undefined
              }
              className="w-full rounded-[22px] border border-white/10 bg-white/[0.03] py-5 pl-14 pr-6 text-white outline-none transition-all duration-300 placeholder:text-white/30 hover:border-white/20 focus:border-blue-400/50 focus:bg-white/[0.05] focus:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
            />
          </div>

          {errors.email && (
            <p
              id="email-error"
              className="ml-2 mt-2 text-sm text-red-400"
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}

        <div className="relative md:col-span-2">
          <Phone
            size={20}
            className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/25"
          />

          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(event) =>
              setPhone(event.target.value)
            }
            placeholder={
              t.calculatorSteps.contact.phone
            }
            className="w-full rounded-[22px] border border-white/10 bg-white/[0.03] py-5 pl-14 pr-6 text-white outline-none transition-all duration-300 placeholder:text-white/30 hover:border-white/20 focus:border-blue-400/50 focus:bg-white/[0.05] focus:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
          />
        </div>

        {/* Budget */}

        <div className="md:col-span-2">
          <p className="mb-5 text-lg font-semibold text-white">
            {t.calculatorSteps.contact.budget}
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {budgetOptions.map((item) => {
              const active =
                budget === item.value;

              return (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    setBudget(item.value)
                  }
                  className={`
                    rounded-[22px]
                    border
                    p-5
                    text-left
                    transition-all
                    duration-300
                    ${
                      active
                        ? "border-blue-400/40 bg-blue-500/10 shadow-[0_15px_40px_rgba(59,130,246,0.18)]"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                    }
                  `}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={
                        active
                          ? "text-white"
                          : "text-white/65"
                      }
                    >
                      {item.label}
                    </span>

                    <div
                      aria-hidden="true"
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        ${
                          active
                            ? "border-blue-400 bg-blue-500 text-white"
                            : "border-white/15 text-white/20"
                        }
                      `}
                    >
                      ✓
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline */}

        <div className="md:col-span-2">
          <p className="mb-5 text-lg font-semibold text-white">
            {t.calculatorSteps.contact.timeline}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {timelineOptions.map((item) => {
              const active =
                timeline === item.value;

              return (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    setTimeline(item.value)
                  }
                  className={`
                    rounded-[22px]
                    border
                    p-5
                    text-left
                    transition-all
                    duration-300
                    ${
                      active
                        ? "border-blue-400/40 bg-blue-500/10 shadow-[0_15px_40px_rgba(59,130,246,0.18)]"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                    }
                  `}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={
                        active
                          ? "text-white"
                          : "text-white/65"
                      }
                    >
                      {item.label}
                    </span>

                    <div
                      aria-hidden="true"
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        ${
                          active
                            ? "border-blue-400 bg-blue-500 text-white"
                            : "border-white/15 text-white/20"
                        }
                      `}
                    >
                      ✓
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Flexible budget */}

        <button
          type="button"
          aria-pressed={discount}
          onClick={() =>
            setDiscount((current) => !current)
          }
          className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5 text-left transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] md:col-span-2"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-medium text-white">
                {t.calculatorSteps.contact.flexible}
              </p>

              <p className="mt-1 text-sm text-white/50">
                {
                  t.calculatorSteps.contact
                    .flexibleDescription
                }
              </p>
            </div>

            <div
              aria-hidden="true"
              className={`
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                ${
                  discount
                    ? "border-blue-400 bg-blue-500 text-white"
                    : "border-white/15 text-white/20"
                }
              `}
            >
              ✓
            </div>
          </div>
        </button>

        {/* Project details */}

        <div className="relative md:col-span-2">
          <FileText
            size={20}
            className="pointer-events-none absolute left-5 top-6 text-white/25"
          />

          <textarea
            name="message"
            rows={6}
            value={message}
            onChange={(event) =>
              setMessage(event.target.value)
            }
            placeholder={
              t.calculatorSteps.contact.message
            }
            className="w-full rounded-[22px] border border-white/10 bg-white/[0.03] py-5 pl-14 pr-6 text-white outline-none transition-all duration-300 placeholder:text-white/30 hover:border-white/20 focus:border-blue-400/50 focus:bg-white/[0.05] focus:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
          />
        </div>
      </div>

      {/* Turnstile */}

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

      {/* Navigation */}

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
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="group inline-flex w-full items-center justify-center rounded-full bg-blue-500 px-8 py-4 font-semibold text-white shadow-[0_12px_35px_rgba(59,130,246,0.25)] transition-all duration-300 hover:bg-blue-400 hover:shadow-[0_18px_45px_rgba(59,130,246,0.35)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-blue-500 sm:w-auto"
        >
          {isSubmitting
            ? language === "de"
              ? "Wird gesendet..."
              : language === "ru"
                ? "Отправка..."
                : "Sending..."
            : `${t.calculatorSteps.contact.submit} →`}
        </button>
      </div>
    </section>
  );
}