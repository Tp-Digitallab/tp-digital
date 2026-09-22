"use client";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import PackageGrid from "@/components/package/PackageGrid";
import { useLanguage } from "@/components/providers/LanguageProvider";

const packagesCopy = {
  de: {
    eyebrow: "Leistungen und Preise",

    title: "Welche Website passt zu Ihrem Unternehmen?",

    description:
      "Eine Seite für Ihr Angebot, mehrere Seiten für Ihren Betrieb oder ein Shop für Ihre Produkte: Hier sehen Sie die Ausgangspreise und enthaltenen Leistungen.",

    detailsTitle: "Vor dem Start wissen Sie, was Sie bekommen.",

    detailsDescription:
      "Wir halten schriftlich fest, welche Seiten und Funktionen ich umsetze, welche Inhalte Sie bereitstellen und was das Projekt kostet. Zusätzliche Arbeiten setzen wir erst nach Ihrer Zustimmung zum Umfang und Preis um.",

    costsTitle: "Laufende Kosten besprechen wir vorab.",

    costsDescription:
      "Domain und Hosting werden separat vereinbart. Bei einem Shop können außerdem Plattform- und Zahlungsanbietergebühren entstehen. Das Werbebudget für Google Ads ist nicht im Paketpreis enthalten.",

    supportNote:
      "Bei Business und Online-Shop gilt der enthaltene technische Support für den angegebenen Zeitraum nach dem Start. Eine anschließende Betreuung vereinbaren wir separat.",
  },

  en: {
    eyebrow: "Services and pricing",

    title: "Which website suits your business?",

    description:
      "One page for your offer, several pages for your company or a store for your products: compare starting prices and included services.",

    detailsTitle: "Know what you will receive before work begins.",

    detailsDescription:
      "We agree in writing on the pages and features I will build, the content you will provide and the project price. Additional work only begins after you approve its scope and cost.",

    costsTitle: "We discuss ongoing costs in advance.",

    costsDescription:
      "Domain and hosting are agreed separately. An online store may also involve platform and payment provider fees. Google Ads advertising spend is not included in the package price.",

    supportNote:
      "Business website and online store packages include technical support for the stated period after launch. Any ongoing support is agreed separately.",
  },

  ru: {
    eyebrow: "Состав работ и цены",

    title: "Какой сайт подходит вашему бизнесу?",

    description:
      "Одна страница для вашего предложения, несколько страниц о компании или магазин для товаров. Сравните начальную стоимость и то, что входит в каждый вариант.",

    detailsTitle: "До начала работы вы знаете, что получите.",

    detailsDescription:
      "Письменно согласуем страницы и функции сайта, материалы, которые вы предоставляете, и стоимость проекта. Дополнительные работы выполняются только после вашего согласия с их объёмом и ценой.",

    costsTitle: "Текущие расходы обсуждаем заранее.",

    costsDescription:
      "Домен и хостинг согласуем отдельно. Для магазина также возможны платежи за платформу и комиссии платёжных сервисов. Рекламный бюджет Google Ads не входит в стоимость пакета.",

    supportNote:
      "В пакетах «Сайт компании» и «Интернет-магазин» техническая поддержка включена на указанный срок после запуска. Дальнейшее обслуживание согласуем отдельно.",
  },
} as const;

export default function PackagesSection() {
  const { language } = useLanguage();
  const t = packagesCopy[language];

  return (
    <Section
      id="packages"
      className="scroll-mt-24"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase leading-6 tracking-[0.2em] text-blue-300">
            {t.eyebrow}
          </p>

          <h2 className="break-words text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.title}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            {t.description}
          </p>
        </div>

        <PackageGrid />

        <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.025] p-6 sm:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold leading-7 text-white">
                {t.detailsTitle}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70">
                {t.detailsDescription}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold leading-7 text-white">
                {t.costsTitle}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70">
                {t.costsDescription}
              </p>
            </div>
          </div>

          <p className="mt-7 border-t border-white/10 pt-5 text-sm leading-7 text-white/60">
            {t.supportNote}
          </p>
        </div>
      </Container>
    </Section>
  );
}