"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import FaqSchema from "@/components/seo/FaqSchema";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { packagePresets } from "@/config/packagePresets";

type Language = "de" | "en" | "ru";

function getFaqContent(language: Language) {
  const numberLocale =
    language === "de"
      ? "de-DE"
      : language === "ru"
        ? "ru-RU"
        : "en-US";

  const formatter = new Intl.NumberFormat(
    numberLocale,
    {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }
  );

  const landingPrice = formatter.format(
    packagePresets.launch.price
  );

  const businessPrice = formatter.format(
    packagePresets.business.price
  );

  const shopPrice = formatter.format(
    packagePresets.growth.price
  );

  const content = {
    de: {
      eyebrow: "Gut zu wissen",

      title:
        "Klare Antworten vor dem Projektstart.",

      description:
        "Hier finden Sie die wichtigsten Informationen zu Preisen, Zusammenarbeit und Übergabe.",

      contactTitle:
        "Ihre Frage ist noch offen?",

      contactDescription:
        "Beschreiben Sie kurz Ihr Vorhaben. Ich helfe Ihnen persönlich dabei, den passenden Umfang für Ihre Website zu finden.",

      contactButton:
        "Unverbindlich anfragen",

      items: [
        {
          question:
            "Wie viel kostet meine Website?",

          answer:
            `Eine Landingpage startet bei ${landingPrice}, eine Unternehmenswebsite mit bis zu fünf Seiten bei ${businessPrice} und ein Online-Shop mit bis zu 20 Produkten bei ${shopPrice}. Der genaue Preis hängt vom vereinbarten Umfang ab. Vor Projektbeginn erhalten Sie ein schriftliches Angebot mit Leistungsumfang und Festpreis.`,
        },
        {
          question:
            "Wie lange dauert die Erstellung?",

          answer:
            "Das hängt vom Umfang, den gewünschten Funktionen und den verfügbaren Inhalten ab. Nach der Abstimmung vereinbaren wir einen realistischen Zeitplan. Wenn Texte, Bilder oder Freigaben später vorliegen, kann sich der Termin entsprechend verschieben.",
        },
        {
          question:
            "Welche Materialien benötigen Sie von mir?",

          answer:
            "Hilfreich sind Informationen zu Ihrem Unternehmen, Ihren Leistungen und Ihrer Zielgruppe sowie vorhandene Texte, ein Logo und Bilder, die Sie verwenden dürfen. Wenn etwas fehlt, klären wir vorab, welche Unterstützung Sie benötigen und ob dafür zusätzliche Kosten entstehen.",
        },
        {
          question:
            "Wie läuft die Bezahlung ab?",

          answer:
            "Sie erhalten zuerst ein schriftliches Angebot. Nach Ihrer Bestätigung werden 50 % als Anzahlung fällig. Die restlichen 50 % zahlen Sie nach Ihrer Abnahme und vor dem Livegang. Zusätzliche Leistungen vereinbaren wir vor ihrer Umsetzung separat.",
        },
        {
          question:
            "Kann ich den Entwurf prüfen und Änderungen wünschen?",

          answer:
            "Ja. Sie erhalten vor dem Livegang Zugang zu einer geschützten Testversion. Zwei Korrekturrunden innerhalb des vereinbarten Leistungsumfangs sind enthalten. In jeder Runde sammeln Sie Ihre Änderungswünsche. Neue Funktionen, zusätzliche Seiten oder weitere Korrekturrunden werden vorab separat vereinbart.",
        },
        {
          question:
            "Muss ich einen Telefontermin vereinbaren?",

          answer:
            "Nein. Wir stimmen Ihr Projekt schriftlich ab. Sie können Ihre Anfrage über das Formular oder per E-Mail senden. Ich stelle Rückfragen ebenfalls schriftlich, damit Ziele, Inhalte und Vereinbarungen nachvollziehbar bleiben.",
        },
        {
          question:
            "Was passiert mit Domain und Hosting?",

          answer:
            "Die Domain wird auf Ihren Namen registriert. Auf Wunsch unterstütze ich Sie bei der Einrichtung von Domain und Hosting. Anbietergebühren und mögliche Einrichtungskosten werden im Angebot separat ausgewiesen. Bestehende Domains und Hosting-Verträge berücksichtigen wir bei der Planung.",
        },
        {
          question:
            "Gibt es Unterstützung nach dem Launch?",

          answer:
            "Im Business-Paket ist ein Monat technischer Support enthalten, im Growth-Paket sind es zwei Monate. Den genauen Umfang halten wir im Angebot fest. Laufende Wartung, zusätzliche Änderungen und Werbekampagnen-Betreuung können separat vereinbart werden.",
        },
      ],
    },

    en: {
      eyebrow: "Good to know",

      title:
        "Clear answers before your project begins.",

      description:
        "The key information about pricing, working together and handing over your website.",

      contactTitle:
        "Still have a question?",

      contactDescription:
        "Briefly describe your project. I will personally help you work out the right scope for your website.",

      contactButton:
        "Send a no-obligation enquiry",

      items: [
        {
          question:
            "How much will my website cost?",

          answer:
            `A landing page starts at ${landingPrice}, a business website with up to five pages at ${businessPrice}, and an online store with up to 20 products at ${shopPrice}. The exact price depends on the agreed scope. Before work begins, you receive a written offer with the scope and fixed price.`,
        },
        {
          question:
            "How long does the project take?",

          answer:
            "That depends on the scope, required features and available content. After discussing the details, we agree on a realistic timeline. If texts, images or approvals arrive later, the delivery date may need to change accordingly.",
        },
        {
          question:
            "What materials do you need from me?",

          answer:
            "Information about your business, services and target customers is helpful, along with any existing texts, logo and images you have permission to use. If something is missing, we agree in advance on the help you need and any additional costs.",
        },
        {
          question:
            "How does payment work?",

          answer:
            "You first receive a written offer. Once you accept it, a 50% deposit is due. The remaining 50% is paid after your approval and before launch. Any additional services are agreed separately before implementation.",
        },
        {
          question:
            "Can I review the website and request changes?",

          answer:
            "Yes. You receive access to a protected preview before launch. Two revision rounds within the agreed scope are included. You collect your requested changes for each round. New features, additional pages or further revision rounds are agreed separately in advance.",
        },
        {
          question:
            "Do I need to arrange a phone call?",

          answer:
            "No. We discuss your project in writing. You can send your enquiry through the form or by email. I also send follow-up questions in writing so that the goals, content and agreements remain documented.",
        },
        {
          question:
            "What happens with domain and hosting?",

          answer:
            "The domain is registered in your name. I can help you set up the domain and hosting if needed. Provider fees and any setup costs are listed separately in the offer. We take existing domains and hosting arrangements into account during planning.",
        },
        {
          question:
            "Is support available after launch?",

          answer:
            "The Business package includes one month of technical support, and Growth includes two months. The exact scope is defined in the offer. Ongoing maintenance, additional changes and advertising campaign management can be agreed separately.",
        },
      ],
    },

    ru: {
      eyebrow: "Перед началом работы",

      title:
        "Понятные ответы на важные вопросы.",

      description:
        "Основная информация о стоимости, совместной работе и передаче готового сайта.",

      contactTitle:
        "Остались вопросы?",

      contactDescription:
        "Кратко расскажите о своей задаче. Я лично помогу определить подходящий объём работ для вашего сайта.",

      contactButton:
        "Отправить заявку",

      items: [
        {
          question:
            "Сколько будет стоить мой сайт?",

          answer:
            `Лендинг стоит от ${landingPrice}, сайт компании до пяти страниц — от ${businessPrice}, интернет-магазин до 20 товаров — от ${shopPrice}. Точная стоимость зависит от согласованного объёма. До начала работы вы получите письменное предложение с составом работ и фиксированной ценой.`,
        },
        {
          question:
            "Сколько времени занимает разработка?",

          answer:
            "Это зависит от объёма, нужных функций и готовности материалов. После обсуждения задачи мы согласуем реалистичные сроки. Если тексты, изображения или согласования поступают позже, срок запуска может соответственно сдвинуться.",
        },
        {
          question:
            "Какие материалы нужны от меня?",

          answer:
            "Полезна информация о вашем бизнесе, услугах и клиентах, а также готовые тексты, логотип и изображения, которые вы вправе использовать. Если чего-то нет, заранее обсудим, какая помощь нужна и возникнут ли дополнительные расходы.",
        },
        {
          question:
            "Как проходит оплата?",

          answer:
            "Сначала вы получаете письменное предложение. После его подтверждения вносите предоплату 50%. Оставшиеся 50% оплачиваются после вашей приёмки и перед запуском сайта. Дополнительные работы согласовываются отдельно до их выполнения.",
        },
        {
          question:
            "Смогу ли я проверить сайт и попросить правки?",

          answer:
            "Да. До запуска вы получите доступ к закрытой тестовой версии. Включены два раунда правок в рамках согласованного объёма. Для каждого раунда вы собираете свои пожелания. Новые функции, дополнительные страницы и последующие раунды правок согласовываются заранее отдельно.",
        },
        {
          question:
            "Обязательно ли созваниваться?",

          answer:
            "Нет. Мы обсуждаем проект письменно. Заявку можно отправить через форму или по электронной почте. Уточняющие вопросы я также задаю письменно, чтобы цели, материалы и договорённости оставались зафиксированы.",
        },
        {
          question:
            "Что будет с доменом и хостингом?",

          answer:
            "Домен регистрируется на ваше имя. При необходимости я помогу с настройкой домена и хостинга. Платежи провайдерам и возможная стоимость настройки указываются в предложении отдельно. Если домен или хостинг уже есть, учтём их при планировании.",
        },
        {
          question:
            "Есть ли поддержка после запуска?",

          answer:
            "В пакет Business включён один месяц технической поддержки, в Growth — два месяца. Точный объём фиксируется в предложении. Постоянное обслуживание, дополнительные изменения и ведение рекламы можно согласовать отдельно.",
        },
      ],
    },
  };

  return content[language];
}

export default function FaqSection() {
  const { language } = useLanguage();
  const t = getFaqContent(language);

  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  const accordionId = useId();

  return (
    <>
      <FaqSchema items={t.items} />

      <Section
        id="faq"
        className="scroll-mt-24"
      >
        <Container className="max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-300">
              {t.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {t.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/60">
              {t.description}
            </p>
          </div>

          <div className="space-y-4">
            {t.items.map((item, index) => {
              const isOpen = openIndex === index;

              const questionId =
                `${accordionId}-question-${index}`;

              const answerId =
                `${accordionId}-answer-${index}`;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-3xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-blue-400/30 bg-white/[0.07]"
                      : "border-white/15 bg-white/[0.03] hover:border-white/25"
                  }`}
                >
                  <h3>
                    <button
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        setOpenIndex((current) =>
                          current === index
                            ? null
                            : index
                        )
                      }
                      className="flex w-full items-center gap-3 px-4 py-5 text-left focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-blue-400 sm:gap-4 sm:px-6"
                    >
                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-blue-300 sm:h-10 sm:w-10"
                      >
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span className="min-w-0 flex-1 break-words text-base font-semibold leading-6 text-white sm:text-lg">
                        {item.question}
                      </span>

                      <ChevronDown
                        aria-hidden="true"
                        className={`h-5 w-5 shrink-0 text-white/60 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>

                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    aria-hidden={!isOpen}
                  >
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="mx-4 border-t border-white/10 sm:mx-6" />

                          <p className="px-4 pb-6 pt-5 text-base leading-8 text-zinc-300 sm:px-6">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-3xl border border-blue-400/20 bg-blue-500/[0.06] p-6 text-center sm:p-8">
            <h3 className="text-xl font-semibold text-white">
              {t.contactTitle}
            </h3>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-white/60">
              {t.contactDescription}
            </p>

            <Link
              href="/webdesign#anfrage"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-blue-500 px-6 py-3 text-center font-medium text-white transition hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              {t.contactButton}

              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 shrink-0"
              />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}