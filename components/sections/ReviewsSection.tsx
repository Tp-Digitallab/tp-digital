"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Pause,
  Play,
  Star,
} from "lucide-react";


import Container from "@/components/common/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

const googleReviewsUrl =
  "https://www.google.com/maps/place/TP+Digital+Lab/data=!4m2!3m1!1s0x64137f823f8c7003:0xff9fb46e21fe618d";

const reviews = [
  {
    author: "Dmytro Yurchenko",
    initials: "DY",
    text:
      "Die Umsetzung war professionell, zuverlässig und genau auf unsere Anforderungen abgestimmt.",
  },
  {
    author: "Олег",
    initials: "О",
    text:
      "Mit angebotenen Leistungen bin ich ganz zufrieden. Empfehlenswert",
  },
  {
    author: "alina poluiluik",
    initials: "AP",
    text: null,
  },
  {
    author: "Дима Риженко",
    initials: "ДР",
    text: null,
  },
  {
    author: "GONCHARENKO",
    initials: "G",
    text: null,
  },
] as const;

const copy = {
  de: {
    eyebrow: "Kundenbewertungen",
    title: "Was meine Kunden sagen",
    description:
      "Öffentliche Bewertungen auf Google — aus der Zusammenarbeit mit TP Digital Lab.",
    rating: "5,0",
    ratingLabel: "5,0 von 5 Sternen auf Google",
    count: "5 Bewertungen auf Google",
    checked: "Stand: 22.09.2026",
    quoteLabel: "Auszug · Original auf Deutsch",
    noText: "Bewertung ohne Kommentar",
    stars: "5 von 5 Sternen",
    source: "Google-Bewertung",
    button: "Alle Bewertungen auf Google ansehen",
    newTab: "Öffnet in einem neuen Tab",
    previous: "Vorherige Bewertung",
    next: "Nächste Bewertung",
    pause: "Pausieren",
    play: "Fortsetzen",
    carousel: "Kundenbewertungen",
    slide: "Bewertung",
    of: "von",
  },
  en: {
    eyebrow: "Customer reviews",
    title: "What my customers say",
    description:
      "Public Google reviews about working with TP Digital Lab.",
    rating: "5.0",
    ratingLabel: "5.0 out of 5 stars on Google",
    count: "5 reviews on Google",
    checked: "As of 22 September 2026",
    quoteLabel: "Excerpt · Original in German",
    noText: "Rating without a comment",
    stars: "5 out of 5 stars",
    source: "Google review",
    button: "Read all reviews on Google",
    newTab: "Opens in a new tab",
    previous: "Previous review",
    next: "Next review",
    pause: "Pause",
    play: "Resume",
    carousel: "Customer reviews",
    slide: "Review",
    of: "of",
  },
  ru: {
    eyebrow: "Отзывы клиентов",
    title: "Что говорят мои клиенты",
    description:
      "Публичные отзывы в Google о сотрудничестве с TP Digital Lab.",
    rating: "5,0",
    ratingLabel: "5,0 из 5 звёзд в Google",
    count: "5 оценок в Google",
    checked: "По состоянию на 22.09.2026",
    quoteLabel: "Фрагмент · Оригинал на немецком",
    noText: "Оценка без комментария",
    stars: "5 из 5 звёзд",
    source: "Отзыв в Google",
    button: "Посмотреть все отзывы в Google",
    newTab: "Откроется в новой вкладке",
    previous: "Предыдущий отзыв",
    next: "Следующий отзыв",
    pause: "Пауза",
    play: "Продолжить",
    carousel: "Отзывы клиентов",
    slide: "Отзыв",
    of: "из",
  },
} as const;

function Stars({
  label,
  large = false,
}: {
  label: string;
  large?: boolean;
}) {
  return (
    <span
      role="img"
      aria-label={label}
      className={`inline-flex items-center text-amber-300 ${
        large ? "gap-2" : "gap-1"
      }`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          className={`fill-current ${
            large ? "h-7 w-7 sm:h-8 sm:w-8" : "h-4 w-4"
          }`}
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}

const arrowClassName =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-colors hover:border-blue-400/50 hover:bg-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400";

export default function ReviewsSection() {
  const { language } = useLanguage();
  const t = copy[language];

    const [reducedMotion, setReducedMotion] =
    useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const frameId = window.requestAnimationFrame(() => {
      setReducedMotion(mediaQuery.matches);
    });

    function handleMotionChange(event: MediaQueryListEvent) {
      setReducedMotion(event.matches);
    }

    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.cancelAnimationFrame(frameId);
      mediaQuery.removeEventListener(
        "change",
        handleMotionChange
      );
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const canAutoplay =
    reducedMotion === false &&
    !paused &&
    !hovered &&
    !focused;

  useEffect(() => {
    if (!canAutoplay) {
      return;
    }

    const timer = window.setInterval(() => {
      if (document.visibilityState !== "visible") {
        return;
      }

      setActiveIndex(
        (current) => (current + 1) % reviews.length
      );
    }, 6000);

    return () => {
      window.clearInterval(timer);
    };
  }, [canAutoplay, activeIndex]);

  function previousReview() {
    setPaused(true);
    setActiveIndex(
      (current) =>
        (current - 1 + reviews.length) % reviews.length
    );
  }

  function nextReview() {
    setPaused(true);
    setActiveIndex(
      (current) => (current + 1) % reviews.length
    );
  }

  function selectReview(index: number) {
    setPaused(true);
    setActiveIndex(index);
  }

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="relative isolate scroll-mt-28 overflow-hidden border-y border-white/[0.06] bg-[#050505] py-20 sm:py-28"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-300">
            {t.eyebrow}
          </p>

          <h2
            id="reviews-heading"
            className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            {t.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
            {t.description}
          </p>

          <div className="mt-8 inline-flex max-w-full flex-wrap items-center justify-center gap-x-5 gap-y-3 rounded-2xl border border-white/10 bg-[#0d1016] px-6 py-5">
            <span
              aria-label={t.ratingLabel}
              className="text-4xl font-semibold tracking-tight text-white"
            >
              {t.rating}
            </span>

            <div className="text-left">
              <Stars label={t.ratingLabel} />

              <p className="mt-1 text-sm text-white/75">
                {t.count}
              </p>
            </div>
          </div>

          <p className="mt-3 text-xs text-white/40">
            {t.checked}
          </p>
        </div>

        <div
          role="region"
          aria-label={t.carousel}
          className="mx-auto mt-10 max-w-3xl sm:mt-12"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(event) => {
            const nextTarget = event.relatedTarget;

            if (
              !(nextTarget instanceof Node) ||
              !event.currentTarget.contains(nextTarget)
            ) {
              setFocused(false);
            }
          }}
        >
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0e14] shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <div
              className={`flex items-stretch ${
                reducedMotion
                  ? ""
                  : "transition-transform duration-500 ease-out"
              }`}
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {reviews.map((review, index) => {
                const active = index === activeIndex;

                return (
                                    <figure
                    key={review.author}
                    aria-label={`${t.slide} ${index + 1} ${t.of} ${reviews.length}`}
                    aria-hidden={!active}
                    inert={!active}
                    className="m-0 flex min-w-0 basis-full shrink-0 flex-col p-6 sm:p-10"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <Stars label={t.stars} />

                      <span className="text-xs font-medium text-white/40">
                        Google
                      </span>
                    </div>

                    {review.text ? (
                      <div className="flex min-h-48 flex-1 flex-col justify-center py-7 sm:min-h-52">
                        <p className="text-xs leading-5 text-white/40">
                          {t.quoteLabel}
                        </p>

                        <blockquote
                          cite={googleReviewsUrl}
                          lang="de"
                          className="mt-4 text-lg leading-8 text-white/90 sm:text-2xl sm:leading-10"
                        >
                          „{review.text}“
                        </blockquote>
                      </div>
                    ) : (
                      <div className="flex min-h-48 flex-1 flex-col items-center justify-center py-7 text-center sm:min-h-52">
                        <Stars label={t.stars} large />

                        <p className="mt-5 text-base text-white/60">
                          {t.noText}
                        </p>
                      </div>
                    )}

                    <figcaption className="flex items-center gap-3 border-t border-white/[0.08] pt-5">
                      <span
                        aria-hidden="true"
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-300/20 bg-blue-500/10 text-sm font-semibold text-blue-200"
                      >
                        {review.initials}
                      </span>

                      <div className="min-w-0">
                        <p className="break-words font-medium text-white">
                          {review.author}
                        </p>

                        <p className="mt-1 text-xs text-white/45">
                          {t.source}
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={previousReview}
              aria-label={t.previous}
              className={arrowClassName}
            >
              <ArrowLeft
                aria-hidden="true"
                className="h-4 w-4"
              />
            </button>

            <div
              role="group"
              aria-label={t.carousel}
              className="flex items-center"
            >
              {reviews.map((review, index) => (
                <button
                  key={review.author}
                  type="button"
                  onClick={() => selectReview(index)}
                  aria-label={`${t.slide} ${index + 1}: ${review.author}`}
                  aria-current={
                    activeIndex === index ? "true" : undefined
                  }
                  className="flex h-11 w-8 items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 sm:w-10"
                >
                  <span
                    aria-hidden="true"
                    className={`h-2 rounded-full transition-all motion-reduce:transition-none ${
                      activeIndex === index
                        ? "w-6 bg-blue-400"
                        : "w-2 bg-white/25"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={nextReview}
              aria-label={t.next}
              className={arrowClassName}
            >
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4"
              />
            </button>
          </div>

          <div className="mt-2 flex min-h-10 items-center justify-center gap-4 text-xs text-white/45">
            <span className="tabular-nums">
              {activeIndex + 1} / {reviews.length}
            </span>

            {reducedMotion === false && (
              <button
                type="button"
                onClick={() => setPaused((current) => !current)}
                className="inline-flex min-h-10 items-center gap-2 rounded-lg px-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                {paused ? (
                  <Play aria-hidden="true" className="h-3 w-3" />
                ) : (
                  <Pause aria-hidden="true" className="h-3 w-3" />
                )}

                {paused ? t.play : t.pause}
              </button>
            )}
          </div>
        </div>

        <div className="mt-7 text-center">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 max-w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-blue-300/40 hover:bg-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <span>{t.button}</span>

            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 shrink-0"
            />

            <span className="sr-only">
              {" — "}
              {t.newTab}
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}