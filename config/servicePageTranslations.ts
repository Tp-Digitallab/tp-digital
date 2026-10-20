export type ServicePageKey =
  | "webdesign"
  | "onlineShop"
  | "seo"
  | "digitalSolutions";

type Language = "de" | "en" | "ru";

type ServicePageContent = {
  title: string;
  accent: string;
  description: string;
  services: string[];
  seoTitle: string;
  seoDescription: string;
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

export const servicePageTranslations = {
  webdesign: {
    de: {
      title: "Professionelle Websites",
      accent: "für kleine Unternehmen.",
      description:
        "Ich entwickle moderne Websites für Selbstständige und kleine Unternehmen. Die Inhalte, Struktur und Kontaktmöglichkeiten werden so geplant, dass Besucher Ihr Angebot schnell verstehen und einfach mit Ihnen Kontakt aufnehmen können.",
      services: [
        "Individuelles Design passend zu Ihrem Unternehmen",
        "Landingpages und Unternehmenswebsites",
        "Optimierung für Smartphone, Tablet und Desktop",
        "Kontaktformular und klare Kontaktwege",
        "Basis-SEO und schnelle technische Grundlage",
      ],
      seoTitle:
        "Was eine gute Unternehmenswebsite leisten sollte",
      seoDescription:
        "Eine Website soll nicht nur gut aussehen. Sie muss Ihr Angebot verständlich erklären, Vertrauen schaffen und Interessenten einen einfachen Weg zur Anfrage geben. Ich entwickle die Struktur passend zu Ihrem Unternehmen und stimme den Leistungsumfang vor dem Start schriftlich mit Ihnen ab.",
      faq: [
        {
          question:
            "Wie viel kostet eine professionelle Website?",
          answer:
            "Eine Landingpage startet bei 490 €. Eine Unternehmenswebsite mit bis zu fünf Seiten startet bei 990 €. Den genauen Leistungsumfang und den endgültigen Festpreis erhalten Sie vor Projektbeginn schriftlich.",
        },
        {
          question:
            "Wie lange dauert die Entwicklung?",
          answer:
            "Die Dauer hängt vom Umfang und davon ab, wann Texte und Bilder bereitstehen. Eine Landingpage kann bei vollständigen Inhalten oft innerhalb von 1–2 Wochen umgesetzt werden.",
        },
        {
          question:
            "Wie viele Änderungen sind inklusive?",
          answer:
            "In den Website-Paketen sind zwei Korrekturrunden enthalten. Weitere Änderungen können vorab gegen Aufpreis vereinbart werden.",
        },
      ],
    },

    en: {
      title: "Professional websites",
      accent: "for small businesses.",
      description:
        "I create modern websites for freelancers and small businesses. The content, structure and contact options are planned so visitors can quickly understand your offer and get in touch with you.",
      services: [
        "Custom design for your business",
        "Landing pages and business websites",
        "Optimized for mobile, tablet and desktop",
        "Contact form and clear contact paths",
        "Basic SEO and a fast technical foundation",
      ],
      seoTitle:
        "What a good business website should do",
      seoDescription:
        "A website should do more than look good. It should explain your offer clearly, build trust and give interested visitors an easy way to enquire. I plan the structure around your business and agree on the scope in writing before work begins.",
      faq: [
        {
          question:
            "How much does a professional website cost?",
          answer:
            "A landing page starts from €490. A business website with up to five pages starts from €990. You receive the exact scope and final fixed price in writing before the project begins.",
        },
        {
          question:
            "How long does development take?",
          answer:
            "The timeline depends on the scope and when your texts and images are available. With complete content, a landing page can often be completed within 1–2 weeks.",
        },
        {
          question:
            "How many revisions are included?",
          answer:
            "The website packages include two revision rounds. Additional changes can be agreed in advance for an additional fee.",
        },
      ],
    },

    ru: {
      title: "Профессиональные сайты",
      accent: "для небольших компаний.",
      description:
        "Я создаю современные сайты для частных специалистов и небольших компаний. Контент, структура и способы связи планируются так, чтобы посетитель быстро понял ваше предложение и мог легко оставить заявку.",
      services: [
        "Индивидуальный дизайн под ваш бизнес",
        "Лендинги и сайты компаний",
        "Адаптация для телефона, планшета и компьютера",
        "Контактная форма и понятные способы связи",
        "Базовое SEO и быстрая техническая основа",
      ],
      seoTitle:
        "Что должен делать хороший сайт компании",
      seoDescription:
        "Сайт должен не только красиво выглядеть. Он должен понятно объяснять ваше предложение, вызывать доверие и давать посетителю простой способ связаться с вами. Я планирую структуру под ваш бизнес и согласую объём работ письменно до начала проекта.",
      faq: [
        {
          question: "Сколько стоит профессиональный сайт?",
          answer:
            "Лендинг стоит от 490 €. Сайт компании до пяти страниц — от 990 €. Точный объём работ и окончательная фиксированная цена согласуются письменно до начала проекта.",
        },
        {
          question: "Сколько времени занимает разработка?",
          answer:
            "Срок зависит от объёма проекта и готовности текстов и изображений. При готовом контенте лендинг часто можно сделать за 1–2 недели.",
        },
        {
          question: "Сколько правок входит в стоимость?",
          answer:
            "В пакет входят два раунда правок. Дополнительные изменения можно заранее согласовать за отдельную плату.",
        },
      ],
    },
  },

  onlineShop: {
    de: {
      title: "Online-Shop erstellen lassen",
      accent: "für den Verkauf im Internet.",
      description:
        "Ich entwickle übersichtliche Online-Shops für Unternehmen, die Produkte oder Leistungen online anbieten möchten. Der Shop wird mit Produktverwaltung, Zahlungsintegration und einer klaren Nutzerführung geplant.",
      services: [
        "Online-Shop mit bis zu 20 Produkten",
        "Produktverwaltung über ein CMS",
        "Zahlungsintegration nach Anforderungen",
        "Optimierung für Smartphone und Desktop",
        "SEO-Grundlage für Produkt- und Kategorieseiten",
      ],
      seoTitle:
        "Ein Online-Shop muss einfach zu bedienen sein",
      seoDescription:
        "Besucher müssen Produkte schnell finden, Informationen verstehen und den Kauf ohne unnötige Hindernisse abschließen können. Ich plane den Shop passend zu Ihrem Sortiment und kläre vor Beginn, welche Funktionen tatsächlich benötigt werden.",
      faq: [
        {
          question:
            "Wie viel kostet ein Online-Shop?",
          answer:
            "Ein Online-Shop startet bei 1.790 €. Der genaue Preis hängt von Produktanzahl, Sprachen, Zahlungsanbieter und weiteren Funktionen ab. Sie erhalten den endgültigen Festpreis schriftlich vor dem Start.",
        },
        {
          question:
            "Wie viele Produkte können enthalten sein?",
          answer:
            "Das Growth-Paket umfasst bis zu 20 Produkte. Ein größerer Umfang kann individuell besprochen und separat angeboten werden.",
        },
        {
          question:
            "Kann ich Produkte später selbst verwalten?",
          answer:
            "Ja. Im Growth-Paket ist die Produktverwaltung über ein CMS enthalten. Ich zeige Ihnen bei der Übergabe, wie Sie die vereinbarten Produktdaten selbst ändern. Zusätzliche Verwaltungsfunktionen stimmen wir vorab ab.",
        },
      ],
    },

    en: {
      title: "Build your online store",
      accent: "for selling online.",
      description:
        "I create clear online stores for businesses that want to offer products or services online. The store is planned with product management, payment integration and a straightforward customer journey.",
      services: [
        "Online store with up to 20 products",
        "Product management through a CMS",
        "Payment integration based on requirements",
        "Optimized for mobile and desktop",
        "SEO foundation for product and category pages",
      ],
      seoTitle:
        "An online store should be easy to use",
      seoDescription:
        "Visitors need to find products quickly, understand the important information and complete a purchase without unnecessary friction. I plan the store around your catalogue and clarify the required features before work begins.",
      faq: [
        {
          question:
            "How much does an online store cost?",
          answer:
            "An online store starts from €1,790. The final price depends on the number of products, languages, payment provider and additional features. You receive the final fixed price in writing before work begins.",
        },
        {
          question:
            "How many products can be included?",
          answer:
            "The Growth package includes up to 20 products. A larger catalogue can be discussed and quoted separately.",
        },
        {
          question:
            "Can I manage products myself later?",
          answer:
            "Yes. The Growth package includes product management through a CMS. During handover, I show you how to edit the agreed product data. Additional management features are agreed in advance.",
        },
      ],
    },

    ru: {
      title: "Разработка интернет-магазина",
      accent: "для продаж в интернете.",
      description:
        "Я создаю понятные интернет-магазины для компаний, которые хотят продавать товары или услуги онлайн. Магазин планируется с управлением товарами, подключением оплаты и удобным путём клиента от товара до заказа.",
      services: [
        "Интернет-магазин до 20 товаров",
        "Управление товарами через CMS",
        "Подключение оплаты по требованиям проекта",
        "Адаптация для телефона и компьютера",
        "SEO-основа для товаров и категорий",
      ],
      seoTitle:
        "Интернет-магазином должно быть удобно пользоваться",
      seoDescription:
        "Посетитель должен быстро найти товар, понять важную информацию и оформить заказ без лишних препятствий. Я планирую магазин под ваш ассортимент и заранее согласую необходимые функции.",
      faq: [
        {
          question:
            "Сколько стоит интернет-магазин?",
          answer:
            "Интернет-магазин стоит от 1 790 €. Итоговая цена зависит от количества товаров, языков, платёжной системы и дополнительных функций. Фиксированную цену вы получите письменно до начала работы.",
        },
        {
          question:
            "Сколько товаров можно добавить?",
          answer:
            "Пакет Growth включает до 20 товаров. Больший каталог можно обсудить отдельно.",
        },
        {
          question:
            "Смогу ли я сам управлять товарами?",
          answer:
            "Да. В пакет Growth входит управление товарами через CMS. При передаче покажу, как менять согласованные данные товаров. Дополнительные функции управления обсуждаем до начала работы.",
        },
      ],
    },
  },

  seo: {
    de: {
      title: "SEO prüfen und gezielt verbessern",
      accent: "mit einem konkreten Maßnahmenplan.",
      description:
        "Ich prüfe die vereinbarten Seiten auf technische und inhaltliche Schwächen, priorisiere die nächsten Schritte und setze beauftragte Korrekturen um. Sie erhalten einen schriftlichen Überblick darüber, was zu tun ist und was geändert wurde.",
      services: [
        "Technische SEO-Analyse",
        "Struktur und interne Verlinkung",
        "Keyword- und Inhaltsanalyse",
        "OnPage-Optimierung",
        "Verbesserung der lokalen Sichtbarkeit",
      ],
      seoTitle:
        "Ein nachvollziehbarer SEO-Auftrag statt unklarer Versprechen",
      seoDescription:
        "Ein Audit, die Korrektur bestimmter Seiten oder die lokale Auffindbarkeit können einzeln beauftragt werden. Analyse, Umsetzung und Übergabe werden im Angebot getrennt beschrieben. Ein bestimmtes Ranking oder eine feste Zahl an Anfragen wird nicht zugesagt.",
      faq: [
        {
          "question": "Was erhalte ich bei einer SEO-Analyse?",
          "answer": "Eine schriftliche Übersicht zu den vereinbarten Seiten mit gefundenen Problemen, Prioritäten und empfohlenen Maßnahmen. Welche Seiten, Daten und Prüfungen dazugehören, legen wir vorab fest. Die Umsetzung wird separat oder als Teil desselben Angebots vereinbart."
        },
        {
          "question": "Brauche ich einen monatlichen Vertrag?",
          "answer": "Nein. Eine Analyse oder ein klar begrenzter Optimierungsauftrag ist auch einmalig möglich. Laufende Betreuung wird nur bei Bedarf separat vereinbart."
        },
        {
          "question": "Wann verbessern sich die Rankings?",
          "answer": "SEO braucht Zeit. Ausgangslage, Wettbewerb und Suchbegriffe beeinflussen die Entwicklung. Die erledigten Arbeiten dokumentiere ich; einen festen Ranking-, Umsatz- oder Anfragewert kann ich nicht garantieren."
        }
      ],
    },

    en: {
      title: "Review and improve your SEO",
      accent: "with a practical action plan.",
      description:
        "I review the agreed pages for technical and content issues, prioritise next steps and implement the commissioned corrections. You receive a written overview of what needs attention and what has changed.",
      services: [
        "Technical SEO review",
        "Site structure and internal linking",
        "Keyword and content analysis",
        "On-page optimization",
        "Improved local visibility",
      ],
      seoTitle:
        "A documented SEO assignment with a clear scope",
      seoDescription:
        "An audit, specific page corrections or local visibility work can be commissioned separately. The quote distinguishes analysis, implementation and handover. A particular ranking or number of enquiries is not promised.",
      faq: [
        {
          "question": "What does an SEO review deliver?",
          "answer": "A written overview of the agreed pages, identified issues, priorities and recommended actions. We define the pages, data and checks beforehand. Implementation is quoted separately or included in the same agreed scope."
        },
        {
          "question": "Do I need a monthly contract?",
          "answer": "No. A review or a clearly scoped optimisation task can be a one-off assignment. Ongoing support is only agreed separately when needed."
        },
        {
          "question": "When will rankings improve?",
          "answer": "SEO takes time. The starting point, competition and search terms affect progress. I document the completed work but cannot guarantee rankings, revenue or a fixed number of enquiries."
        }
      ],
    },

    ru: {
      title: "Проверка и улучшение SEO",
      accent: "с конкретным планом действий.",
      description:
        "Проверю согласованные страницы на технические и содержательные проблемы, расставлю приоритеты и внесу заказанные исправления. Вы получите письменный список задач и выполненных изменений.",
      services: [
        "Технический SEO-аудит",
        "Структура сайта и внутренние ссылки",
        "Анализ ключевых слов и контента",
        "Внутренняя оптимизация страниц",
        "Улучшение локальной видимости",
      ],
      seoTitle:
        "Понятный состав SEO-работ вместо неопределённых обещаний",
      seoDescription:
        "Аудит, исправление конкретных страниц или работа с локальной видимостью могут быть отдельными заказами. В предложении разделяем анализ, реализацию и передачу результата. Фиксированные позиции или количество заявок не обещаются.",
      faq: [
        {
          "question": "Что я получу после SEO-анализа?",
          "answer": "Письменный обзор согласованных страниц: найденные проблемы, приоритеты и рекомендуемые действия. Страницы, данные и состав проверки определяем заранее. Внедрение согласуется отдельно или входит в то же предложение."
        },
        {
          "question": "Обязателен ли ежемесячный договор?",
          "answer": "Нет. Можно заказать разовую проверку или ограниченную задачу по оптимизации. Постоянное обслуживание согласуется отдельно, если оно необходимо."
        },
        {
          "question": "Когда улучшатся позиции?",
          "answer": "SEO требует времени. На результат влияют исходное состояние, конкуренция и запросы. Выполненные работы документирую, но конкретные позиции, выручку или количество обращений гарантировать не могу."
        }
      ],
    },
  },

  digitalSolutions: {
    de: {
      title: "Website reparieren und erweitern",
      accent: "auch als einzelne Aufgabe.",
      description:
        "Ihr Formular sendet nicht, die mobile Ansicht ist unübersichtlich oder Sie brauchen eine neue Funktion? Ich prüfe Ihre bestehende Website und setze gezielte Verbesserungen um – vom einzelnen Fehler bis zum Rechner oder einer Integration.",
      services: [
        "Individuelle Webentwicklung",
        "Interne Tools und Webanwendungen",
        "Automatisierung wiederkehrender Abläufe",
        "Anbindung externer Dienste",
        "Technische Beratung und Umsetzung",
      ],
      seoTitle:
        "Bestehende Website verbessern, statt alles neu zu bauen",
      seoDescription:
        "Eine einzelne Korrektur kann sinnvoller sein als ein kompletter Neubau. Beschreiben Sie den Fehler oder die gewünschte Funktion und senden Sie den Link. Ich prüfe die technische Grundlage und vereinbare den konkreten Umfang, Festpreis und Termin vor der Umsetzung.",
      faq: [
        {
          "question": "Kann ich auch nur einen Fehler beheben lassen?",
          "answer": "Ja. Auch eine einzelne Formular-Reparatur, eine mobile Anpassung oder eine neue Seite ist möglich. Nach Prüfung der bestehenden Technik erhalten Sie ein Angebot für genau diese Aufgabe."
        },
        {
          "question": "Was brauchen Sie für eine erste Einschätzung?",
          "answer": "Den Website-Link, eine Beschreibung des Problems und das gewünschte Ergebnis. Bitte senden Sie zunächst keine Passwörter. Benötigte Zugänge stimmen wir später über einen geeigneten Weg ab."
        },
        {
          "question": "Was kostet eine Änderung und wie schnell geht es?",
          "answer": "Das hängt von Ursache, Technik und Umfang ab. Nach der Prüfung nenne ich Ihnen Festpreis und Termin. Zusätzliche Arbeiten oder laufende Kosten werden vorab vereinbart."
        }
      ],
    },

    en: {
      title: "Repair and extend your website",
      accent: "one task at a time.",
      description:
        "Your form does not send, the mobile layout is confusing or you need a new feature? I review your existing website and implement targeted improvements, from a single bug to a calculator or integration.",
      services: [
        "Custom web development",
        "Internal tools and web applications",
        "Automation of recurring workflows",
        "Integration with external services",
        "Technical planning and implementation",
      ],
      seoTitle:
        "Improve your existing website without starting over",
      seoDescription:
        "A targeted fix may be more useful than a full rebuild. Send the link, describe the issue or feature and I will review the existing setup. We agree on the scope, fixed price and timing before implementation.",
      faq: [
        {
          "question": "Can I book a single fix?",
          "answer": "Yes. A form repair, mobile adjustment or a new page can be a standalone task. After reviewing the existing setup, I provide a quote for that specific work."
        },
        {
          "question": "What do you need for an initial assessment?",
          "answer": "The website link, a description of the issue and the desired result. Please do not send passwords initially. We agree on a suitable method for any required access later."
        },
        {
          "question": "What does a change cost and how long will it take?",
          "answer": "That depends on the cause, technology and scope. After reviewing the task, I provide a fixed price and timeline. Additional work or ongoing costs are agreed in advance."
        }
      ],
    },

    ru: {
      title: "Ремонт и доработка сайтов",
      accent: "в том числе отдельные задачи.",
      description:
        "Форма не отправляется, мобильная версия неудобна или нужна новая функция? Проверю существующий сайт и внесу точечные улучшения: от исправления ошибки до калькулятора или интеграции.",
      services: [
        "Индивидуальная веб-разработка",
        "Внутренние инструменты и веб-приложения",
        "Автоматизация повторяющихся процессов",
        "Интеграция внешних сервисов",
        "Техническое планирование и реализация",
      ],
      seoTitle:
        "Улучшить существующий сайт без полной переделки",
      seoDescription:
        "Иногда отдельное исправление полезнее нового сайта. Пришлите ссылку, опишите ошибку или нужную функцию: я проверю техническую основу и согласую объём, фиксированную цену и срок до реализации.",
      faq: [
        {
          "question": "Можно заказать исправление только одной ошибки?",
          "answer": "Да. Ремонт формы, мобильную доработку или новую страницу можно заказать отдельно. После проверки существующей системы вы получите предложение именно на эту задачу."
        },
        {
          "question": "Что нужно для первоначальной оценки?",
          "answer": "Ссылка на сайт, описание проблемы и желаемый результат. Не отправляйте пароли при первом обращении. Если нужны доступы, позже согласуем подходящий способ их предоставления."
        },
        {
          "question": "Сколько стоит доработка и как быстро она выполняется?",
          "answer": "Зависит от причины, технологии и объёма. После проверки назову фиксированную цену и срок. Дополнительные работы и текущие расходы согласуются заранее."
        }
      ],
    },
  },
} satisfies Record<
  ServicePageKey,
  Record<Language, ServicePageContent>
>;
