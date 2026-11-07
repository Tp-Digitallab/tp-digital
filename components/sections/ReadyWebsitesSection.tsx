"use client";

import Image from "next/image";
import Container from "@/components/common/Container";
import RequestLink from "@/components/contact/RequestLink";
import { useLanguage } from "@/components/providers/LanguageProvider";

const templates = [
  {
    slug: "studio", page: "/website-nagelstudio",
    name: { de: "Nagel- und Beauty-Studio", en: "Nail and beauty studio", ru: "Ногтевая и бьюти-студия" },
    price: { de: "500 €", en: "€500", ru: "500 €" },
    features: {
      de: ["Admin-Bereich: Preise und Texte selbst ändern", "3 Sprachen: Deutsch, Russisch, Ukrainisch", "Preisliste mit Beschreibungen", "Galerie und Bewertungen", "Termin über Treatwell oder WhatsApp"],
      en: ["Admin area: change prices and texts yourself", "3 languages: German, Russian, Ukrainian", "Price list with descriptions", "Gallery and reviews", "Booking via Treatwell or WhatsApp"],
      ru: ["Админ-панель: цены и тексты меняете сами", "3 языка: немецкий, русский, украинский", "Прайс с описаниями услуг", "Галерея и отзывы", "Запись через Treatwell или WhatsApp"],
    },
  },
  {
    slug: "handwerk", page: "/website-handwerker",
    name: { de: "Handwerk und Renovierung", en: "Trades and renovation", ru: "Ремонт и мастера" },
    price: { de: "290 €", en: "€290", ru: "290 €" },
    features: {
      de: ["Preisrechner pro Quadratmeter", "Projekte mit Fotos", "Einsatzgebiet und Ablauf", "Anfrageformular, Telefon und WhatsApp"],
      en: ["Price calculator per square metre", "Projects with photos", "Service area and process", "Enquiry form, phone and WhatsApp"],
      ru: ["Калькулятор цены за м²", "Объекты с фото", "Районы работы и этапы", "Форма заявки, звонок и WhatsApp"],
    },
  },
  {
    slug: "cafe", page: "/website-cafe",
    name: { de: "Café und Gastronomie", en: "Café and gastronomy", ru: "Кафе и гастрономия" },
    price: { de: "290 €", en: "€290", ru: "290 €" },
    features: {
      de: ["Speisekarte mit Preisen", "Mittagstisch des Tages", "Öffnungszeiten mit Live-Status", "Tischreservierung"],
      en: ["Menu with prices", "Lunch of the day", "Opening hours with live status", "Table reservation"],
      ru: ["Меню с ценами", "Обед дня", "Часы работы со статусом «открыто»", "Бронирование столика"],
    },
  },
] as const;

const copy = {
  de: {
    eyebrow: "Fertige Websites",
    title: "Sehen, auswählen, online gehen.",
    text: "Fertige Designs für Ihre Branche. Sie sehen das Ergebnis schon vor dem Auftrag. Ich passe Texte, Farben, Logo und Fotos an Ihr Geschäft an.",
    points: "Online in 3 Tagen · Impressum und Datenschutz inklusive · pro Stadt nur einmal vergeben",
    demo: "Live-Demo ansehen",
    request: "Anfragen",
    more: "Ihre Branche fehlt? Schreiben Sie mir, ich baue die Vorlage passend für Sie.",
    moreCta: "Branche vorschlagen",
    details: "Mehr zur Branche",
    kind: "Landingpage",
    firmKind: "Firmenwebsite",
    firmTitle: "Mehr als eine Seite: zum Durchklicken.",
    firmPrice: "790 €",
    firmDemo: "Firmenwebsite ansehen",
    firmFeatures: ["Bis zu 5 Seiten: z. B. Start, Leistungen, Projekte, Über uns, Kontakt", "Design nach Ihrem Logo und Ihren Farben", "Kontaktformular, Telefon und WhatsApp", "Jede Seite einzeln bei Google auffindbar", "Impressum und Datenschutz", "1 Monat technischer Support", "2 Korrekturrunden"],
    shopFeatures: ["Bis zu 20 Produkte", "Warenkorb und Kasse", "Zahlung mit PayPal, Karte oder Klarna", "Admin-Bereich für Produkte und Preise", "Impressum und Datenschutz", "2 Monate technischer Support", "2 Korrekturrunden"],
    firmText: "Startseite, Leistungen mit Preisen, Projekte, Über uns und Kontakt. Die Demo zeigt, wie sich das durchklicken lässt.",
    shopKind: "Online-Shop",
    shopTitle: "Ein echter Shop zum Ausprobieren.",
    shopText: "Kaffeerösterei mit Filtern, Produktseiten mit Mahlgrad und Menge, Warenkorb und Kasse in vier Schritten. Legen Sie etwas in den Warenkorb, es wird nichts bezahlt.",
    shopPrice: "1.500 €",
    shopDemo: "Shop ausprobieren",
  },
  en: {
    eyebrow: "Ready-made websites",
    title: "See it, pick it, go live.",
    text: "Finished designs for your industry. You see the result before you order. I adapt texts, colours, logo and photos to your business.",
    points: "Online in 3 days · legal pages included · only one per city",
    demo: "View live demo",
    request: "Request",
    more: "Your industry is missing? Tell me, and I will build the template for you.",
    moreCta: "Suggest an industry",
    details: "More about this industry",
    kind: "Landing page",
    firmKind: "Business website",
    firmTitle: "More than one page: click through it.",
    firmPrice: "€790",
    firmDemo: "View business website",
    firmFeatures: ["Up to 5 pages: e.g. home, services, projects, about, contact", "Design based on your logo and colours", "Contact form, phone and WhatsApp", "Each page can be found on Google", "Imprint and privacy policy", "1 month of technical support", "2 revision rounds"],
    shopFeatures: ["Up to 20 products", "Cart and checkout", "Payment via PayPal, card or Klarna", "Admin area for products and prices", "Imprint and privacy policy", "2 months of technical support", "2 revision rounds"],
    firmText: "Home, services with prices, projects, about and contact. The demo shows how it feels to click through.",
    shopKind: "Online shop",
    shopTitle: "A real shop to try out.",
    shopText: "Coffee roastery with filters, product pages with grind and size, cart and a four-step checkout. Add something to the cart, nothing is charged.",
    shopPrice: "€1,500",
    shopDemo: "Try the shop",
  },
  ru: {
    eyebrow: "Готовые сайты",
    title: "Посмотрите, выберите, запускайте.",
    text: "Готовые дизайны под вашу сферу. Вы видите результат ещё до заказа. Я адаптирую тексты, цвета, логотип и фото под ваш бизнес.",
    points: "Онлайн за 3 дня · Impressum и Datenschutz включены · один дизайн на город",
    demo: "Открыть демо",
    request: "Хочу такой",
    more: "Нет вашей сферы? Напишите, и я сделаю шаблон под вас.",
    moreCta: "Предложить сферу",
    details: "Подробнее о сфере",
    kind: "Лендинг",
    firmKind: "Сайт компании",
    firmTitle: "Больше одной страницы: пощёлкайте сами.",
    firmPrice: "790 €",
    firmDemo: "Открыть сайт компании",
    firmFeatures: ["До 5 страниц: например, главная, услуги, проекты, о компании, контакты", "Дизайн под ваш логотип и цвета", "Форма заявки, звонок и WhatsApp", "Каждую страницу Google находит отдельно", "Impressum и Datenschutz", "1 месяц технической поддержки", "2 раунда правок"],
    shopFeatures: ["До 20 товаров", "Корзина и оформление заказа", "Оплата через PayPal, карту или Klarna", "Админ-панель для товаров и цен", "Impressum и Datenschutz", "2 месяца технической поддержки", "2 раунда правок"],
    firmText: "Главная, услуги с ценами, проекты, о компании и контакты. В демо можно пощёлкать и посмотреть, как это работает.",
    shopKind: "Интернет-магазин",
    shopTitle: "Настоящий магазин, который можно потрогать.",
    shopText: "Обжарка кофе: фильтры, страницы товаров с помолом и весом, корзина и оформление заказа в четыре шага. Положите что-нибудь в корзину, оплаты не будет.",
    shopPrice: "1 500 €",
    shopDemo: "Попробовать магазин",
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
                  <p className="price-number shrink-0 text-lg font-semibold text-white">{tpl.price[language]}</p>
                </div>
                <ul className="mt-3 grid gap-1.5 text-sm leading-6 text-white/70">
                  {tpl.features[language].map((f) => (
                    <li key={f} className="flex gap-2"><span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />{f}</li>
                  ))}
                </ul>
                <a href={tpl.page} className="mt-3 text-sm font-semibold text-blue-200 underline underline-offset-4">{t.details}</a>
                <div className="mt-auto flex gap-3 pt-6">
                  <a href={`/demo/${tpl.slug}`} target="_blank" rel="noopener" className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white">{t.demo}</a>
                  <RequestLink className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-4 py-2.5 text-center text-sm font-medium text-white/85 hover:bg-white/10">{t.request}</RequestLink>
                </div>
              </div>
            </article>
          ))}
        </div>


        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {[
            { slug: "firma", kind: t.firmKind, title: t.firmTitle, text: t.firmText, price: t.firmPrice, cta: t.firmDemo, features: t.firmFeatures },
            { slug: "shop", kind: t.shopKind, title: t.shopTitle, text: t.shopText, price: t.shopPrice, cta: t.shopDemo, features: t.shopFeatures },
          ].map((pkg) => (
            <article key={pkg.slug} className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)]/70">
              <a href={`/demo/${pkg.slug}`} target="_blank" rel="noopener" className="block overflow-hidden" aria-label={pkg.cta}>
                <Image src={`/demo/${pkg.slug}/preview.png`} alt={`${pkg.kind} – Demo`} width={1440} height={900} sizes="(max-width: 1023px) 100vw, 600px" className="aspect-[16/9] h-auto w-full object-cover object-left-top transition-transform duration-700 hover:scale-[1.03]" />
              </a>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/55">{pkg.kind}</p>
                  <p className="price-number shrink-0 text-xl font-semibold text-white">{pkg.price}</p>
                </div>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{pkg.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/70">{pkg.text}</p>
                <ul className="mt-4 grid gap-1.5 text-sm leading-6 text-white/75 sm:grid-cols-2 sm:gap-x-4">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2"><span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />{f}</li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                  <a href={`/demo/${pkg.slug}`} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-center text-sm font-semibold text-white">{pkg.cta}</a>
                  <RequestLink className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-center text-sm font-medium text-white/85 hover:bg-white/10">{t.request}</RequestLink>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-white/70">{t.more}</p>
          <RequestLink className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10">{t.moreCta}</RequestLink>
        </div>
      </Container>
    </section>
  );
}
