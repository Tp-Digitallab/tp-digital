"use client";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { useLanguage } from "@/components/providers/LanguageProvider";
import ServiceCard from "@/components/ui/ServiceCard";

const servicesCopy = {
  de: {
    eyebrow: "Meine Leistungen",
    title: "Ein passender Start für Ihr Unternehmen im Internet.",
    description:
      "Ich erstelle Websites für Selbstständige und kleine Unternehmen. Wenn Sie zusätzlich Unterstützung bei Google oder bei der Pflege Ihrer Website brauchen, vereinbaren wir dafür einen passenden Leistungsumfang.",
    note:
      "Sie müssen nicht alles auf einmal buchen. Was Ihr Projekt umfasst und kostet, halten wir vor dem Start schriftlich fest.",
    items: [
      {
        title: "Website erstellen lassen",
        description:
          "Eine Landingpage oder Unternehmenswebsite, die Ihr Angebot verständlich vorstellt und den Kontakt zu Ihnen einfach macht. Mit individueller Gestaltung, Kontaktformular und einer Darstellung für Smartphone, Tablet und Computer.",
        href: "/webdesign",
        button: "Websites und Preise ansehen",
      },
      {
        title: "Bei Google gefunden werden",
        description:
          "Ich optimiere die technische Grundlage und Struktur Ihrer Website für Suchmaschinen. Für lokale Unternehmen kann auch die Einrichtung oder Optimierung des Google-Unternehmensprofils sinnvoll sein.",
        href: "/seo",
        button: "SEO-Leistungen ansehen",
      },
      {
        title: "Google Ads einrichten",
        description:
          "Sie möchten Ihr Angebot mit Google-Anzeigen bewerben? Ich unterstütze Sie bei der Einrichtung. Leistungen und Kosten stimmen wir vorher ab. Das Werbebudget bei Google kommt separat hinzu.",
        href: "/webdesign#anfrage",
        button: "Google Ads anfragen",
      },
      {
        title: "Website pflegen lassen",
        description:
          "Auch nach dem Start können Sie sich für technische Pflege und Änderungen an mich wenden. Wir vereinbaren, welche Aufgaben ich übernehme und welche Kosten dafür entstehen.",
        href: "/webdesign#anfrage",
        button: "Website-Pflege anfragen",
      },
    ],
  },

  en: {
    eyebrow: "My services",
    title: "The right start for your business online.",
    description:
      "I create websites for freelancers and small businesses. If you also need help with Google or website maintenance, we can agree on a suitable scope for those services.",
    note:
      "You do not need to book everything at once. We agree on your project's scope and price in writing before work begins.",
    items: [
      {
        title: "Create your website",
        description:
          "A landing page or business website that explains your offer clearly and makes it easy to contact you. With a custom design, a contact form and layouts for phones, tablets and computers.",
        href: "/webdesign",
        button: "View websites and pricing",
      },
      {
        title: "Get found on Google",
        description:
          "I optimise your website’s technical foundation and structure for search engines. For local businesses, setting up or improving a Google Business Profile may also be useful.",
        href: "/seo",
        button: "Explore SEO services",
      },
      {
        title: "Set up Google Ads",
        description:
          "Want to promote your services with Google Ads? I can help with the setup. We agree on the services and fees beforehand. Your advertising budget with Google is separate.",
        href: "/webdesign#anfrage",
        button: "Enquire about Google Ads",
      },
      {
        title: "Maintain your website",
        description:
          "You can also contact me for technical maintenance and changes after launch. We agree on the tasks I will handle and the costs involved.",
        href: "/webdesign#anfrage",
        button: "Enquire about maintenance",
      },
    ],
  },

  ru: {
    eyebrow: "Мои услуги",
    title: "Помогу вашему бизнесу выйти в интернет.",
    description:
      "Я создаю сайты для частных специалистов и небольших компаний. Если дополнительно нужны продвижение в Google или обслуживание сайта, отдельно согласуем подходящий объём работ.",
    note:
      "Необязательно заказывать всё сразу. До начала проекта письменно согласуем, что входит в работу и сколько это стоит.",
    items: [
      {
        title: "Разработка сайта",
        description:
          "Лендинг или сайт компании, который понятно представляет ваши услуги и помогает связаться с вами. Индивидуальный дизайн, форма заявки и адаптация для телефона, планшета и компьютера.",
        href: "/webdesign",
        button: "Посмотреть сайты и цены",
      },
      {
        title: "Продвижение в Google",
        description:
          "Оптимизирую техническую основу и структуру сайта для поисковых систем. Для местного бизнеса также может быть полезна настройка или доработка профиля компании в Google.",
        href: "/seo",
        button: "Подробнее о SEO",
      },
      {
        title: "Настройка Google Ads",
        description:
          "Хотите рекламировать свои услуги в Google? Помогу с настройкой рекламы. Объём работ и стоимость согласуем заранее. Рекламный бюджет Google оплачивается отдельно.",
        href: "/webdesign#anfrage",
        button: "Обсудить Google Ads",
      },
      {
        title: "Обслуживание сайта",
        description:
          "После запуска ко мне можно обратиться за техническим обслуживанием и изменениями на сайте. Заранее определим, какие задачи я беру на себя и сколько они будут стоить.",
        href: "/webdesign#anfrage",
        button: "Обсудить обслуживание",
      },
    ],
  },
};

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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.08),transparent_35%)]"
      />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
            {t.eyebrow}
          </p>

          <h2 className="break-words text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t.title}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            {t.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 lg:gap-8">
          {t.items.map((item, index) => (
            <ServiceCard
              key={item.title}
              number={`0${index + 1}`}
              title={item.title}
              description={item.description}
              href={item.href}
              ctaLabel={item.button}
            />
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-white/60">
          {t.note}
        </p>
      </Container>
    </Section>
  );
}