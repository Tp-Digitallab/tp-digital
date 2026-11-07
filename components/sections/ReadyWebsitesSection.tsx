"use client";

import Image from "next/image";
import Container from "@/components/common/Container";
import RequestLink from "@/components/contact/RequestLink";
import { useLanguage } from "@/components/providers/LanguageProvider";

const templates = [
  { slug: "beauty", name: { de: "Nagel- und Beauty-Studio", en: "Nail and beauty studio", ru: "Ногтевая и бьюти-студия" }, extra: { de: "Freie Termine, Preisliste, Galerie", en: "Free slots, price list, gallery", ru: "Свободные окна, прайс, галерея" } },
  { slug: "handwerk", name: { de: "Handwerk und Renovierung", en: "Trades and renovation", ru: "Ремонт и мастера" }, extra: { de: "Preisrechner, Projekte, Einsatzgebiet", en: "Price calculator, projects, service area", ru: "Калькулятор цены, проекты, районы" } },
  { slug: "cafe", name: { de: "Café und Gastronomie", en: "Café and gastronomy", ru: "Кафе и гастрономия" }, extra: { de: "Speisekarte, Mittagstisch, Reservierung", en: "Menu, lunch of the day, reservations", ru: "Меню, обед дня, бронь столика" } },
] as const;

const copy = {
  de: {
    eyebrow: "Fertige Websites",
    title: "Sehen, auswählen, online gehen.",
    text: "Fertige Designs für Ihre Branche. Sie sehen das Ergebnis schon vor dem Auftrag. Ich passe Texte, Farben, Logo und Fotos an Ihr Geschäft an.",
    price: "ab 390 €",
    points: "Online in 3 Tagen · Impressum und Datenschutz inklusive · pro Stadt nur einmal vergeben",
    demo: "Live-Demo ansehen",
    request: "Anfragen",
    more: "Ihre Branche fehlt? Schreiben Sie mir, ich baue die Vorlage passend für Sie.",
    moreCta: "Branche vorschlagen",
    kind: "Landingpage",
    firmKind: "Firmenwebsite",
    firmTitle: "Mehr als eine Seite: zum Durchklicken.",
    firmText: "Startseite, jede Leistung mit eigener Seite und Preisen, Projekte mit Detailseite, Über uns und Kontakt. Zehn Seiten, die auch bei Google einzeln gefunden werden.",
    firmPrice: "ab 790 €",
    firmDemo: "Firmenwebsite ansehen",
  },
  en: {
    eyebrow: "Ready-made websites",
    title: "See it, pick it, go live.",
    text: "Finished designs for your industry. You see the result before you order. I adapt texts, colours, logo and photos to your business.",
    price: "from €390",
    points: "Online in 3 days · legal pages included · only one per city",
    demo: "View live demo",
    request: "Request",
    more: "Your industry is missing? Tell me, and I will build the template for you.",
    moreCta: "Suggest an industry",
    kind: "Landing page",
    firmKind: "Business website",
    firmTitle: "More than one page: click through it.",
    firmText: "Home, a page for every service with prices, projects with a detail page, about and contact. Ten pages that Google can find one by one.",
    firmPrice: "from €790",
    firmDemo: "View business website",
  },
  ru: {
    eyebrow: "Готовые сайты",
    title: "Посмотрите, выберите, запускайте.",
    text: "Готовые дизайны под вашу сферу. Вы видите результат ещё до заказа. Я адаптирую тексты, цвета, логотип и фото под ваш бизнес.",
    price: "от 390 €",
    points: "Онлайн за 3 дня · Impressum и Datenschutz включены · один дизайн на город",
    demo: "Открыть демо",
    request: "Хочу такой",
    more: "Нет вашей сферы? Напишите, и я сделаю шаблон под вас.",
    moreCta: "Предложить сферу",
    kind: "Лендинг",
    firmKind: "Сайт компании",
    firmTitle: "Больше одной страницы: пощёлкайте сами.",
    firmText: "Главная, отдельная страница с ценами на каждую услугу, проекты со страницей проекта, о компании и контакты. Десять страниц, каждую из которых Google находит отдельно.",
    firmPrice: "от 790 €",
    firmDemo: "Открыть сайт компании",
  },
};

export default function ReadyWebsitesSection() {
  const { language } = useLanguage();
  const t = copy[language];
  return (
    <section id="fertige-websites" className="scroll-mt-24 py-12 sm:py-20">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase leading-5 tracking-[0.1em] text-blue-300">{t.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{t.title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">{t.text}</p>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/60 lg:text-right">{t.points}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {templates.map((tpl) => (
            <article key={tpl.slug} className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)]/70">
              <a href={`/demo/${tpl.slug}`} target="_blank" rel="noopener" className="block overflow-hidden" aria-label={`${t.demo}: ${tpl.name[language]}`}>
                <Image src={`/demo/${tpl.slug}/preview.png`} alt={`${tpl.name[language]} – Demo`} width={1440} height={900} sizes="(max-width: 767px) 100vw, 400px" className="aspect-[16/10] h-auto w-full object-cover object-left-top transition-transform duration-700 hover:scale-[1.03]" />
              </a>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/55">{t.kind}</p>
                <div className="mt-1 flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight text-white">{tpl.name[language]}</h3>
                  <p className="price-number shrink-0 text-lg font-semibold text-white">{t.price}</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/60">{tpl.extra[language]}</p>
                <div className="mt-auto flex gap-3 pt-6">
                  <a href={`/demo/${tpl.slug}`} target="_blank" rel="noopener" className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white">{t.demo}</a>
                  <RequestLink className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-4 py-2.5 text-center text-sm font-medium text-white/85 hover:bg-white/10">{t.request}</RequestLink>
                </div>
              </div>
            </article>
          ))}
        </div>


        <article className="mt-4 grid overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)]/70 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <a href="/demo/firma" target="_blank" rel="noopener" className="block overflow-hidden" aria-label={t.firmDemo}>
            <Image src="/demo/firma/preview.png" alt={`${t.firmKind} – Demo`} width={1440} height={900} sizes="(max-width: 767px) 100vw, 640px" className="aspect-[16/10] h-full w-full object-cover object-left-top transition-transform duration-700 hover:scale-[1.03]" />
          </a>
          <div className="flex min-w-0 flex-col p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/55">{t.firmKind} · {templates[1].name[language]}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{t.firmTitle}</h3>
            <p className="mt-3 text-base leading-7 text-white/70">{t.firmText}</p>
            <p className="price-number mt-4 text-2xl font-semibold text-white">{t.firmPrice}</p>
            <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
              <a href="/demo/firma" target="_blank" rel="noopener" className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-center text-sm font-semibold text-white">{t.firmDemo}</a>
              <RequestLink className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-center text-sm font-medium text-white/85 hover:bg-white/10">{t.request}</RequestLink>
            </div>
          </div>
        </article>
        <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-white/70">{t.more}</p>
          <RequestLink className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10">{t.moreCta}</RequestLink>
        </div>
      </Container>
    </section>
  );
}
