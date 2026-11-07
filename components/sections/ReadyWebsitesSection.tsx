"use client";

import Image from "next/image";
import Container from "@/components/common/Container";
import RequestLink from "@/components/contact/RequestLink";
import { useLanguage } from "@/components/providers/LanguageProvider";

const copy = {
  de: {
    eyebrow: "Fertige Websites",
    title: "Sehen, auswählen, online gehen.",
    text: "Fertige Designs für Ihre Branche. Sie sehen das Ergebnis schon vor dem Auftrag. Ich passe Texte, Farben, Logo und Fotos an Ihr Geschäft an.",
    niche: "Vorlage",
    name: "Nagel- und Beauty-Studio",
    price: "ab 390 €",
    points: ["Online in 3 Tagen", "Ihre Texte, Farben und Fotos", "Impressum und Datenschutz inklusive", "Pro Stadt nur einmal vergeben"],
    demo: "Live-Demo ansehen",
    request: "Diese Website anfragen",
    moreTitle: "Ihre Branche fehlt?",
    moreText: "Friseur, Handwerk, Café oder Praxis: Weitere Vorlagen folgen. Schreiben Sie mir, welche Sie brauchen.",
    more: "Branche vorschlagen",
  },
  en: {
    eyebrow: "Ready-made websites",
    title: "See it, pick it, go live.",
    text: "Finished designs for your industry. You see the result before you order. I adapt texts, colours, logo and photos to your business.",
    niche: "Template",
    name: "Nail and beauty studio",
    price: "from €390",
    points: ["Online in 3 days", "Your texts, colours and photos", "Legal pages included", "Only one per city"],
    demo: "View live demo",
    request: "Request this website",
    moreTitle: "Your industry is missing?",
    moreText: "Hairdresser, trades, café or practice: more templates are coming. Tell me which one you need.",
    more: "Suggest an industry",
  },
  ru: {
    eyebrow: "Готовые сайты",
    title: "Посмотрите, выберите, запускайте.",
    text: "Готовые дизайны под вашу сферу. Вы видите результат ещё до заказа. Я адаптирую тексты, цвета, логотип и фото под ваш бизнес.",
    niche: "Шаблон",
    name: "Ногтевая и бьюти-студия",
    price: "от 390 €",
    points: ["Онлайн за 3 дня", "Ваши тексты, цвета и фото", "Impressum и Datenschutz включены", "Один дизайн на город"],
    demo: "Открыть демо",
    request: "Хочу этот сайт",
    moreTitle: "Нет вашей сферы?",
    moreText: "Парикмахерская, ремонт, кафе или практика: новые шаблоны в работе. Напишите, какой нужен вам.",
    more: "Предложить сферу",
  },
};

export default function ReadyWebsitesSection() {
  const { language } = useLanguage();
  const t = copy[language];
  return (
    <section id="fertige-websites" className="scroll-mt-24 py-12 sm:py-20">
      <Container>
        <p className="text-sm font-semibold uppercase leading-5 tracking-[0.1em] text-blue-300">{t.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{t.title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">{t.text}</p>

        <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <article className="grid overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)]/70 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
            <a href="/demo/beauty" target="_blank" rel="noopener" className="block overflow-hidden" aria-label={`${t.demo}: ${t.name}`}>
              <Image src="/demo/beauty/preview.png" alt={`${t.name} – Demo`} width={1440} height={900} sizes="(max-width: 767px) 100vw, 520px" className="h-full w-full object-cover object-left-top transition-transform duration-700 hover:scale-[1.03]" />
            </a>
            <div className="flex min-w-0 flex-col p-6 sm:p-8">
              <p className="text-sm text-white/60">{t.niche}</p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">{t.name}</h3>
              <p className="price-number mt-3 text-3xl font-semibold text-white">{t.price}</p>
              <ul className="mt-5 grid gap-2 text-sm text-white/75">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-2"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />{p}</li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row md:flex-col">
                <a href="/demo/beauty" target="_blank" rel="noopener" className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white">{t.demo}</a>
                <RequestLink className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-5 py-3 text-center text-sm font-medium text-white/85 hover:bg-white/10">{t.request}</RequestLink>
              </div>
            </div>
          </article>

          <article className="flex flex-col rounded-3xl border border-dashed border-white/20 p-6 sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-white">{t.moreTitle}</h3>
            <p className="mt-3 text-base leading-7 text-white/70">{t.moreText}</p>
            <div className="mt-auto pt-7">
              <RequestLink className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-5 py-3 text-center text-sm font-medium text-white/85 hover:bg-white/10">{t.more}</RequestLink>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
