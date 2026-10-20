"use client";

import { useState } from "react";
import { BookOpen, Coffee, Minus, Plus, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const copy = {
  de: {
    products: ["Keramikbecher", "Stofftasche", "Notizbuch"],
    label: "Interaktive Funktionsdemo",
    add: "In den Demo-Warenkorb",
    cart: "Ihr Demo-Warenkorb",
    empty: "Wählen Sie ein Produkt aus, um den Ablauf zu testen.",
    increase: "Menge erhöhen",
    decrease: "Menge verringern",
    total: "Demo-Summe",
    view: "Bestellübersicht ansehen",
    summary: "So könnte der nächste Schritt aussehen",
    next: "In einem echten Shop folgen hier Lieferdaten, Versand und der vereinbarte Zahlungsanbieter. Dieser Prototyp sammelt keine Kundendaten und löst keine Bestellung aus.",
    note: "Fiktive Produkte und Beispielpreise. Keine Bestellung, keine Zahlung.",
    quantity: "Menge",
  },
  en: {
    products: ["Ceramic mug", "Canvas tote", "Notebook"],
    label: "Interactive feature demo",
    add: "Add to demo cart",
    cart: "Your demo cart",
    empty: "Choose a product to try the interaction.",
    increase: "Increase quantity",
    decrease: "Decrease quantity",
    total: "Demo total",
    view: "View order summary",
    summary: "What the next step could look like",
    next: "A real store would continue with delivery details, shipping and the agreed payment provider. This prototype collects no customer details and places no order.",
    note: "Fictional products and example prices. No orders or payments.",
    quantity: "Quantity",
  },
  ru: {
    products: ["Керамическая кружка", "Тканевая сумка", "Блокнот"],
    label: "Интерактивное демо функции",
    add: "Добавить в демо-корзину",
    cart: "Ваша демо-корзина",
    empty: "Выберите товар, чтобы попробовать взаимодействие.",
    increase: "Увеличить количество",
    decrease: "Уменьшить количество",
    total: "Демонстрационная сумма",
    view: "Посмотреть состав заказа",
    summary: "Как может выглядеть следующий шаг",
    next: "В настоящем магазине далее идут данные для доставки, её условия и согласованный платёжный сервис. Этот прототип не собирает данные покупателей и не оформляет заказ.",
    note: "Вымышленные товары и примерные цены. Заказ и оплата недоступны.",
    quantity: "Количество",
  },
};

const products = [
  { id: "mug", price: 24, Icon: Coffee },
  { id: "tote", price: 18, Icon: ShoppingBag },
  { id: "notebook", price: 12, Icon: BookOpen },
];

export default function ShopDemo() {
  const { language } = useLanguage();
  const t = copy[language];
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [showSummary, setShowSummary] = useState(false);
  const formatter = new Intl.NumberFormat(
    language === "de" ? "de-DE" : language === "ru" ? "ru-RU" : "en-GB",
    { style: "currency", currency: "EUR" },
  );
  const total = products.reduce((sum, product) => sum + product.price * (quantities[product.id] ?? 0), 0);

  function changeQuantity(productId: string, change: number) {
    setQuantities((previous) => ({
      ...previous,
      [productId]: Math.max(0, Math.min(10, (previous[productId] ?? 0) + change)),
    }));
  }

  return (
    <div className="mt-8 rounded-3xl border border-blue-300/25 bg-[#0b1018] p-5 sm:p-8">
      <p className="text-sm font-medium text-blue-200">{t.label}</p>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="grid min-w-0 gap-4 sm:grid-cols-3">
          {products.map((product, index) => (
            <article key={product.id} className="flex min-w-0 flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div aria-hidden="true" className="flex aspect-square items-center justify-center rounded-xl bg-blue-200/5">
                <product.Icon className="h-14 w-14 text-blue-200" />
              </div>
              <h3 className="mt-4 font-semibold leading-6">{t.products[index]}</h3>
              <p className="mb-5 mt-2 text-white/75">{formatter.format(product.price)}</p>
              <button
                type="button"
                onClick={() => changeQuantity(product.id, 1)}
                disabled={(quantities[product.id] ?? 0) >= 10}
                aria-label={`${t.add}: ${t.products[index]}`}
                className="mt-auto min-h-11 rounded-xl border border-blue-300/30 px-3 py-3 text-sm font-medium text-blue-100 hover:bg-blue-400/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 disabled:opacity-50"
              >
                {t.add}
              </button>
            </article>
          ))}
        </div>
        <div className="min-w-0 rounded-2xl border border-white/10 bg-black/20 p-5">
          <h3 className="text-xl font-semibold">{t.cart}</h3>
          {total === 0 && <p className="mt-5 text-sm leading-6 text-white/70">{t.empty}</p>}
          <ul className="mt-5 space-y-5">
            {products.map((product, index) => {
              const quantity = quantities[product.id] ?? 0;
              if (!quantity) return null;
              return (
                <li key={product.id} className="border-b border-white/10 pb-4">
                  <p className="text-sm font-medium">{t.products[index]}</p>
                  <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <button type="button" aria-label={`${t.decrease}: ${t.products[index]}`} onClick={() => changeQuantity(product.id, -1)} className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-blue-300"><Minus aria-hidden="true" className="h-4 w-4" /></button>
                      <span aria-label={`${t.quantity}: ${quantity}`} className="min-w-5 text-center">{quantity}</span>
                      <button type="button" disabled={quantity >= 10} aria-label={`${t.increase}: ${t.products[index]}`} onClick={() => changeQuantity(product.id, 1)} className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-blue-300 disabled:opacity-50"><Plus aria-hidden="true" className="h-4 w-4" /></button>
                    </div>
                    <span className="text-sm text-white/75">{formatter.format(product.price * quantity)}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <p aria-live="polite" aria-atomic="true" className="mt-6 flex flex-wrap justify-between gap-2 font-semibold"><span>{t.total}</span><span>{formatter.format(total)}</span></p>
          <button type="button" disabled={total === 0} aria-expanded={showSummary && total > 0} onClick={() => setShowSummary((previous) => !previous)} className="mt-5 min-h-12 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 disabled:cursor-not-allowed disabled:opacity-50">{t.view}</button>
        </div>
      </div>
      {showSummary && total > 0 && (
        <div className="mt-6 rounded-2xl border border-blue-300/20 bg-blue-400/5 p-5">
          <h3 className="font-semibold">{t.summary}</h3>
          <p className="mt-3 text-sm leading-7 text-white/75">{t.next}</p>
        </div>
      )}
      <p className="mt-5 text-sm leading-6 text-white/65">{t.note}</p>
    </div>
  );
}
