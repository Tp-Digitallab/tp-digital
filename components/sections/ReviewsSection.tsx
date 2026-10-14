"use client";

import { Star, ArrowUpRight } from "lucide-react";
import Container from "@/components/common/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { googleReviewsUrl, reviewExcerpts } from "@/config/reviews";

const copy = {
  de: { title: "Was meine Kunden sagen", note: "5,0 von 5 · 5 Bewertungen auf Google", date: "Stand: 22.09.2026", excerpt: "Auszug aus einer Google-Bewertung · Original auf Deutsch", source: "Alle Bewertungen auf Google ansehen" },
  en: { title: "What my clients say", note: "5.0 out of 5 · 5 Google reviews", date: "As of 22 September 2026", excerpt: "Google review excerpt · Original in German", source: "Read all reviews on Google" },
  ru: { title: "Что говорят мои клиенты", note: "5,0 из 5 · 5 отзывов в Google", date: "На 22.09.2026", excerpt: "Фрагмент отзыва в Google · Оригинал на немецком", source: "Посмотреть все отзывы в Google" },
};

export default function ReviewsSection() {
  const { language } = useLanguage();
  const t = copy[language];
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="scroll-mt-24 bg-[#050505] py-14 sm:py-20">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div><h2 id="reviews-heading" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{t.title}</h2><p className="mt-4 flex items-center gap-2 text-sm text-white/75"><Star aria-hidden="true" className="h-4 w-4 fill-amber-300 text-amber-300" />{t.note}</p><p className="mt-1 text-xs text-white/45">{t.date}</p></div>
          <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 text-sm text-blue-200 underline underline-offset-4 hover:text-white">{t.source}<ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-2">{reviewExcerpts.map(r=><figure key={r.author} className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8"><blockquote className="flex-1 text-base leading-8 text-white/85">„{r.text}“</blockquote><figcaption className="mt-6 border-t border-white/10 pt-5"><p className="font-medium text-white">{r.author}</p><p className="mt-2 text-xs leading-5 text-white/50">{t.excerpt}</p></figcaption></figure>)}</div>
      </Container>
    </section>
  );
}
