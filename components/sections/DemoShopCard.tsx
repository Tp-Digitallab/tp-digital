"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";

const copy = {
  de: {
    kind: "Komplette Shop-Demo",
    title: "Kaffeerösterei: vom Produkt bis zur Kasse.",
    points: ["Filter und Sortierung im Katalog", "Produktseite mit Menge und Mahlgrad", "Warenkorb mit Versandkosten-Grenze", "Kasse in vier Schritten mit PayPal, Karte, Klarna"],
    note: "Legen Sie etwas in den Warenkorb und gehen Sie bis zur Bestellung. Es wird nichts bezahlt.",
    cta: "Demo-Shop öffnen",
  },
  en: {
    kind: "Full shop demo",
    title: "Coffee roastery: from product to checkout.",
    points: ["Filters and sorting in the catalogue", "Product page with size and grind", "Cart with free-shipping threshold", "Four-step checkout with PayPal, card, Klarna"],
    note: "Add something to the cart and go all the way to the order. Nothing is charged.",
    cta: "Open demo shop",
  },
  ru: {
    kind: "Полное демо магазина",
    title: "Обжарка кофе: от товара до оформления заказа.",
    points: ["Фильтры и сортировка в каталоге", "Страница товара с весом и помолом", "Корзина с порогом бесплатной доставки", "Оформление в 4 шага: PayPal, карта, Klarna"],
    note: "Положите товар в корзину и дойдите до заказа. Оплаты не будет.",
    cta: "Открыть демо-магазин",
  },
};

export default function DemoShopCard() {
  const { language } = useLanguage();
  const t = copy[language];
  return (
    <article className="mt-8 grid overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)]/70 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <a href="/demo/shop" target="_blank" rel="noopener" className="block overflow-hidden" aria-label={t.cta}>
        <Image src="/demo/shop/preview.png" alt={t.kind} width={1440} height={900} sizes="(max-width: 1023px) 100vw, 640px" className="aspect-[16/10] h-full w-full object-cover object-left-top transition-transform duration-700 hover:scale-[1.03]" />
      </a>
      <div className="flex min-w-0 flex-col p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/55">{t.kind}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{t.title}</h3>
        <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/75">
          {t.points.map((p) => (
            <li key={p} className="flex gap-2"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />{p}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-6 text-white/60">{t.note}</p>
        <div className="mt-auto pt-6">
          <a href="/demo/shop" target="_blank" rel="noopener" className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white">{t.cta}</a>
        </div>
      </div>
    </article>
  );
}
