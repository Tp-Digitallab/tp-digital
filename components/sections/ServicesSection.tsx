"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { useLanguage } from "@/components/providers/LanguageProvider";
import ServiceCard from "@/components/ui/ServiceCard";

const servicesCopy = {
  de: {
    eyebrow: "Die passende Lösung",

    title: "Was möchten Sie mit Ihrer Website erreichen?",

    description:
      "Ob erster Internetauftritt, neue Website oder Online-Shop: Wir starten mit Ihrer Aufgabe und klären, welche Lösung zu Ihrem Unternehmen passt.",

    helpTitle: "Sie wissen noch nicht, was Sie brauchen?",

    helpDescription:
      "Beschreiben Sie kurz Ihren Betrieb und was Sie verbessern möchten. Wenn Sie bereits eine Website haben, schicken Sie mir gerne den Link. Ich empfehle Ihnen einen passenden nächsten Schritt.",

    helpButton: "Mein Vorhaben beschreiben",

    note:
      "Unverbindlich und schriftlich. Umfang und Preis vereinbaren wir, bevor die Arbeit beginnt.",

    items: [
      {
        title: "Ich brauche meine erste Website",
        description:
          "Stellen Sie Ihre Leistungen vor, zeigen Sie Ihre Arbeit und machen Sie es Interessenten leicht, Sie zu kontaktieren. Ich entwickle eine Landingpage oder Unternehmenswebsite, die zu Ihrem Angebot passt.",
        path: "webdesign",
        button: "Websites und Preise ansehen",
      },
      {
        title: "Meine Website braucht eine Überarbeitung",
        description:
          "Veraltete Inhalte, eine unübersichtliche Darstellung oder Probleme auf dem Smartphone? Ich prüfe mit Ihnen, was verbessert werden soll und ob gezielte Änderungen oder ein neuer Aufbau sinnvoll sind.",
        path: "digitale-loesungen",
        button: "Website verbessern lassen",
      },
      {
        title: "Ich möchte Produkte online verkaufen",
        description:
          "Ein Online-Shop, in dem Kunden Ihre Produkte ansehen, bestellen und bezahlen können. Produktumfang, Zahlungsarten und die Verwaltung des Shops stimmen wir vor der Umsetzung ab.",
        path: "online-shop",
        button: "Online-Shop und Leistungen ansehen",
      },
      {
        title: "Meine Website wird bei Google kaum gefunden",
        description:
          "Ich prüfe die technische Grundlage, Inhalte und Struktur Ihrer Website und optimiere sie für relevante Suchanfragen. Für lokale Betriebe beziehen wir bei Bedarf auch das Google-Unternehmensprofil ein.",
        path: "seo",
        button: "Mehr über Suchmaschinenoptimierung",
      },
    ],
  },

  en: {
    eyebrow: "Find the right solution",

    title: "What would you like your website to do?",

    description:
      "Whether you need your first website, an update or an online store, we start with your needs and work out what suits your business.",

    helpTitle: "Not sure what you need yet?",

    helpDescription:
      "Tell me briefly about your business and what you would like to improve. If you already have a website, feel free to include the link. I will recommend a suitable next step.",

    helpButton: "Tell me about your project",

    note:
      "No obligation, with everything discussed in writing. We agree on the scope and price before work begins.",

    items: [
      {
        title: "I need my first website",
        description:
          "Explain your services, showcase your work and make it easy for potential customers to contact you. I will build a landing page or business website that suits your offer.",
        path: "webdesign",
        button: "View websites and pricing",
      },
      {
        title: "My website needs an update",
        description:
          "Outdated content, confusing pages or problems on mobile? We will identify what needs improving and whether targeted changes or a rebuild make sense.",
        path: "digitale-loesungen",
        button: "Explore website improvements",
      },
      {
        title: "I want to sell products online",
        description:
          "An online store where customers can browse, order and pay for your products. We agree on the product range, payment methods and store management before development begins.",
        path: "online-shop",
        button: "Explore online stores",
      },
      {
        title: "My website is hard to find on Google",
        description:
          "I review your website’s technical setup, content and structure and optimise them for relevant searches. For local businesses, we can also work on your Google Business Profile.",
        path: "seo",
        button: "Explore search engine optimisation",
      },
    ],
  },

  ru: {
    eyebrow: "Решение под вашу задачу",

    title: "Какую задачу должен решать ваш сайт?",

    description:
      "Первый сайт, обновление существующего или интернет-магазин — начнём с вашей задачи и определим, что подходит вашему бизнесу.",

    helpTitle: "Пока не знаете, что выбрать?",

    helpDescription:
      "Кратко расскажите о своём бизнесе и о том, что хотите улучшить. Если сайт уже есть, можете прислать ссылку. Я предложу подходящий следующий шаг.",

    helpButton: "Рассказать о своей задаче",

    note:
      "Без обязательств, всё обсуждаем письменно. Состав работ и стоимость согласуем до начала проекта.",

    items: [
      {
        title: "Мне нужен первый сайт",
        description:
          "Расскажите о своих услугах, покажите работы и дайте потенциальным клиентам удобный способ связаться с вами. Я разработаю лендинг или сайт компании под ваше предложение.",
        path: "webdesign",
        button: "Посмотреть сайты и цены",
      },
      {
        title: "Мой сайт нужно обновить",
        description:
          "Устаревшая информация, непонятная структура или проблемы на телефоне? Разберёмся, что стоит улучшить и достаточно ли отдельных изменений или нужен новый сайт.",
        path: "digitale-loesungen",
        button: "Подробнее об улучшении сайта",
      },
      {
        title: "Хочу продавать товары онлайн",
        description:
          "Интернет-магазин, в котором покупатели смогут посмотреть товары, оформить заказ и оплатить покупку. Количество товаров, способы оплаты и управление магазином согласуем до разработки.",
        path: "online-shop",
        button: "Подробнее об интернет-магазине",
      },
      {
        title: "Мой сайт плохо находят в Google",
        description:
          "Проверю техническую основу, содержание и структуру сайта и оптимизирую их под подходящие поисковые запросы. Для местного бизнеса при необходимости займёмся и профилем компании в Google.",
        path: "seo",
        button: "Подробнее о продвижении в поиске",
      },
    ],
  },
} as const;

export default function ServicesSection() {
  const { language } = useLanguage();
  const t = servicesCopy[language];

  return (
    <Section
      id="solutions"
      className="scroll-mt-24 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.06),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.05),transparent_35%)]"
      />

      <Container className="relative z-10">
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

        <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 lg:gap-8">
          {t.items.map((item, index) => (
            <ServiceCard
              key={item.path}
              number={`0${index + 1}`}
              title={item.title}
              description={item.description}
              href={`/${language}/${item.path}`}
              ctaLabel={item.button}
            />
          ))}
        </div>

        <div className="mt-8 rounded-[28px] border border-blue-400/20 bg-[#0b1220] p-6 sm:mt-10 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold leading-tight text-white sm:text-2xl">
                {t.helpTitle}
              </h3>

              <p className="mt-3 text-base leading-7 text-white/75">
                {t.helpDescription}
              </p>
            </div>

            <Link
              href={`/${language}/webdesign#anfrage`}
              className="inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-3 rounded-full bg-blue-500 px-6 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 motion-reduce:transition-none sm:w-fit"
            >
              <span>{t.helpButton}</span>

              <ArrowRight
                aria-hidden="true"
                className="h-5 w-5 shrink-0"
              />
            </Link>
          </div>

          <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-white/60">
            {t.note}
          </p>
        </div>
      </Container>
    </Section>
  );
}