"use client";

import { ArrowUpRight, Star } from "lucide-react";

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
    quoteLabel: "Auszug aus der Google-Bewertung",
    original: "Original auf Deutsch",
    stars: "5 von 5 Sternen",
    source: "Google-Bewertung",
    button: "Alle Bewertungen auf Google ansehen",
    newTab: "Öffnet in einem neuen Tab",
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
    quoteLabel: "Excerpt from a Google review",
    original: "Original in German",
    stars: "5 out of 5 stars",
    source: "Google review",
    button: "Read all reviews on Google",
    newTab: "Opens in a new tab",
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
    quoteLabel: "Фрагмент отзыва из Google",
    original: "Оригинал на немецком",
    stars: "5 из 5 звёзд",
    source: "Отзыв в Google",
    button: "Посмотреть все отзывы в Google",
    newTab: "Откроется в новой вкладке",
  },
} as const;

function Stars({ label }: { label: string }) {
  return (
    <span
      role="img"
      aria-label={label}
      className="inline-flex items-center gap-1 text-amber-300"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          className="h-4 w-4 fill-current"
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}

export default function ReviewsSection() {
  const { language } = useLanguage();
  const t = copy[language];

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

          <div className="mt-8 inline-flex max-w-full flex-wrap items-center justify-center gap-x-5 gap-y-3 rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-5">
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

          <p className="mt-3 text-xs text-white/45">
            {t.checked}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
          {reviews.map((review) => (
            <figure
              key={review.author}
              className="flex min-w-0 flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8"
            >
              <Stars label={t.stars} />

              <p className="mt-5 text-xs text-white/45">
                {t.quoteLabel} · {t.original}
              </p>

              <blockquote
                cite={googleReviewsUrl}
                lang="de"
                className="mt-4 flex-1 text-lg leading-8 text-white/90"
              >
                „{review.text}“
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-300/20 bg-blue-500/10 text-sm font-semibold text-blue-200"
                >
                  {review.initials}
                </span>

                <div className="min-w-0">
                  <p className="break-words font-medium text-white">
                    {review.author}
                  </p>

                  <p className="mt-1 text-xs text-white/50">
                    {t.source}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-9 text-center">
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