"use client";

import Link from "next/link";
import Container from "@/components/common/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

const copy = {
  de: { title: "Ihre Website braucht nur eine kleine Verbesserung?", description: "Ein Formular reparieren, die mobile Darstellung verbessern oder einen neuen Abschnitt ergänzen: Sie können auch einzelne Änderungen beauftragen. Schicken Sie mir den Link und Ihre Aufgabe. Nach kurzer Prüfung vereinbaren wir Umfang und Festpreis.", cta: "Kleine Änderung anfragen" },
  en: { title: "Does your website just need a small improvement?", description: "Fix a form, improve the mobile layout or add a new section. You can book individual changes too. Send me the website link and your task; we agree on the scope and fixed price after a brief review.", cta: "Request a small change" },
  ru: { title: "Нужна небольшая доработка сайта?", description: "Исправить форму, улучшить мобильную версию или добавить новый блок — можно заказать отдельную задачу. Пришлите ссылку и описание: после проверки согласуем объём и фиксированную цену.", cta: "Запросить доработку" },
};

export default function SmallChangesSection() {
  const { language } = useLanguage();
  const t = copy[language];
  return (
    <section aria-labelledby="small-changes-heading" className="bg-[#050505] py-10 sm:py-16">
      <Container>
        <div className="rounded-3xl border border-blue-400/25 bg-blue-500/[0.06] p-6 sm:p-10">
          <h2 id="small-changes-heading" className="max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl">{t.title}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-white/75">{t.description}</p>
          <Link href={`/${language}/webdesign?request=changes#anfrage`} className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-center font-semibold text-white hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">{t.cta}</Link>
        </div>
      </Container>
    </section>
  );
}
