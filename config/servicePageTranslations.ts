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
            "Ja. Wenn ein CMS im vereinbarten Leistungsumfang enthalten ist, können Sie Produkte und Inhalte anschließend selbst verwalten.",
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
            "Yes. If a CMS is included in the agreed scope, you can manage products and content yourself after the handover.",
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
            "Да. Если CMS входит в согласованный объём работ, после передачи магазина вы сможете самостоятельно управлять товарами и контентом.",
        },
      ],
    },
  },

  seo: {
    de: {
      title: "SEO für Unternehmen",
      accent: "damit Ihre Website besser gefunden wird.",
      description:
        "Ich verbessere die technische Grundlage und Struktur Ihrer Website, damit Suchmaschinen Ihre Inhalte besser verstehen und potenzielle Kunden Ihr Angebot leichter finden können.",
      services: [
        "Technische SEO-Analyse",
        "Struktur und interne Verlinkung",
        "Keyword- und Inhaltsanalyse",
        "OnPage-Optimierung",
        "Verbesserung der lokalen Sichtbarkeit",
      ],
      seoTitle:
        "SEO beginnt mit einer verständlichen Website",
      seoDescription:
        "SEO ist kein einzelner Knopf und keine garantierte Position bei Google. Es ist ein langfristiger Prozess aus technischer Qualität, passenden Inhalten, klarer Struktur und einer guten Nutzererfahrung.",
      faq: [
        {
          question:
            "Was kostet SEO?",
          answer:
            "SEO wird nach dem tatsächlichen Umfang angeboten. Nach einer kurzen Abstimmung erhalten Sie eine klare Beschreibung der geplanten Leistungen und den vereinbarten Preis.",
        },
        {
          question:
            "Wann sind erste Verbesserungen sichtbar?",
          answer:
            "SEO braucht Zeit. Die Entwicklung hängt unter anderem von Wettbewerb, Ausgangslage, Suchbegriffen und Umfang der Optimierung ab. Einen bestimmten Ranking- oder Anfragewert kann ich nicht garantieren.",
        },
        {
          question:
            "Kann SEO mit einer neuen Website kombiniert werden?",
          answer:
            "Ja. SEO kann bereits bei Struktur, Inhalten und technischer Umsetzung einer neuen Website berücksichtigt werden.",
        },
      ],
    },

    en: {
      title: "SEO for businesses",
      accent: "so your website can be found more easily.",
      description:
        "I improve the technical foundation and structure of your website so search engines can understand your content more clearly and potential customers can find your offer more easily.",
      services: [
        "Technical SEO review",
        "Site structure and internal linking",
        "Keyword and content analysis",
        "On-page optimization",
        "Improved local visibility",
      ],
      seoTitle:
        "SEO starts with a clear website",
      seoDescription:
        "SEO is not a single button or a guaranteed Google position. It is a long-term process involving technical quality, relevant content, clear structure and a useful customer experience.",
      faq: [
        {
          question:
            "How much does SEO cost?",
          answer:
            "SEO is quoted according to the actual scope. After a short discussion, you receive a clear description of the planned work and the agreed price.",
        },
        {
          question:
            "When will the first improvements appear?",
          answer:
            "SEO takes time. Progress depends on competition, the starting point, search terms and the scope of optimization. I cannot guarantee a specific ranking or number of enquiries.",
        },
        {
          question:
            "Can SEO be combined with a new website?",
          answer:
            "Yes. SEO can be considered from the beginning when planning the structure, content and technical implementation of a new website.",
        },
      ],
    },

    ru: {
      title: "SEO для бизнеса",
      accent: "чтобы сайт было легче найти.",
      description:
        "Я улучшаю техническую основу и структуру сайта, чтобы поисковые системы лучше понимали ваш контент, а потенциальным клиентам было проще найти ваше предложение.",
      services: [
        "Технический SEO-аудит",
        "Структура сайта и внутренние ссылки",
        "Анализ ключевых слов и контента",
        "Внутренняя оптимизация страниц",
        "Улучшение локальной видимости",
      ],
      seoTitle:
        "SEO начинается с понятного сайта",
      seoDescription:
        "SEO — это не одна кнопка и не гарантия конкретной позиции в Google. Это долгосрочная работа с техническим качеством, содержанием, структурой и удобством сайта для посетителей.",
      faq: [
        {
          question: "Сколько стоит SEO?",
          answer:
            "SEO рассчитывается по фактическому объёму работ. После короткого обсуждения вы получите понятное описание задач и согласованную стоимость.",
        },
        {
          question:
            "Когда появятся первые улучшения?",
          answer:
            "SEO требует времени. Результат зависит от конкуренции, состояния сайта, запросов и объёма оптимизации. Я не могу гарантировать конкретную позицию или количество заявок.",
        },
        {
          question:
            "Можно ли объединить SEO с разработкой сайта?",
          answer:
            "Да. SEO можно учитывать уже при планировании структуры, контента и технической реализации нового сайта.",
        },
      ],
    },
  },

  digitalSolutions: {
    de: {
      title: "Digitale Lösungen",
      accent: "für besondere Aufgaben.",
      description:
        "Wenn Ihr Unternehmen eine individuelle Webanwendung, einen automatisierten Ablauf oder eine spezielle Funktion benötigt, kläre ich zuerst die Aufgabe und entwickle danach einen passenden Lösungsumfang.",
      services: [
        "Individuelle Webentwicklung",
        "Interne Tools und Webanwendungen",
        "Automatisierung wiederkehrender Abläufe",
        "Anbindung externer Dienste",
        "Technische Beratung und Umsetzung",
      ],
      seoTitle:
        "Individuelle Entwicklung beginnt mit dem Problem",
      seoDescription:
        "Nicht jede Aufgabe passt in ein fertiges Paket. Bei individuellen digitalen Lösungen steht deshalb zuerst die genaue Beschreibung des Problems im Mittelpunkt. Danach werden Umfang, technische Umsetzung und Kosten schriftlich geklärt.",
      faq: [
        {
          question:
            "Welche digitalen Lösungen entwickeln Sie?",
          answer:
            "Zum Beispiel individuelle Webanwendungen, interne Tools, automatisierte Abläufe oder Anbindungen an externe Dienste. Die konkrete Lösung hängt von Ihrer Aufgabe ab.",
        },
        {
          question:
            "Wie wird der Preis berechnet?",
          answer:
            "Individuelle Projekte werden nach Aufgaben, Umfang und technischen Anforderungen kalkuliert. Vor dem Start erhalten Sie ein schriftliches Angebot.",
        },
        {
          question:
            "Kann ich auch eine bestehende Lösung erweitern lassen?",
          answer:
            "Ja. Beschreiben Sie im ersten Kontakt, was bereits vorhanden ist und welche Änderung oder Funktion Sie benötigen.",
        },
      ],
    },

    en: {
      title: "Digital solutions",
      accent: "for specific business tasks.",
      description:
        "If your business needs a custom web application, automated workflow or special feature, I first clarify the task and then define a suitable solution and scope.",
      services: [
        "Custom web development",
        "Internal tools and web applications",
        "Automation of recurring workflows",
        "Integration with external services",
        "Technical planning and implementation",
      ],
      seoTitle:
        "Custom development starts with the problem",
      seoDescription:
        "Not every task fits into a standard package. For custom digital solutions, the exact problem comes first. We then clarify the scope, technical approach and price in writing.",
      faq: [
        {
          question:
            "What digital solutions do you develop?",
          answer:
            "Examples include custom web applications, internal tools, automated workflows and integrations with external services. The right solution depends on your task.",
        },
        {
          question:
            "How is the price calculated?",
          answer:
            "Custom projects are estimated according to the task, scope and technical requirements. You receive a written offer before work begins.",
        },
        {
          question:
            "Can you extend an existing solution?",
          answer:
            "Yes. Describe what already exists and which change or feature you need in your first enquiry.",
        },
      ],
    },

    ru: {
      title: "Цифровые решения",
      accent: "для особых задач бизнеса.",
      description:
        "Если вашему бизнесу нужно индивидуальное веб-приложение, автоматизация процесса или специальная функция, я сначала изучу задачу, а затем предложу подходящий объём решения.",
      services: [
        "Индивидуальная веб-разработка",
        "Внутренние инструменты и веб-приложения",
        "Автоматизация повторяющихся процессов",
        "Интеграция внешних сервисов",
        "Техническое планирование и реализация",
      ],
      seoTitle:
        "Индивидуальная разработка начинается с проблемы",
      seoDescription:
        "Не каждую задачу можно решить готовым пакетом. Поэтому в индивидуальных проектах сначала нужно точно описать проблему. После этого мы письменно согласуем объём, технический подход и стоимость.",
      faq: [
        {
          question:
            "Какие цифровые решения вы разрабатываете?",
          answer:
            "Например, индивидуальные веб-приложения, внутренние инструменты, автоматизацию процессов и интеграции с внешними сервисами. Решение зависит от вашей задачи.",
        },
        {
          question: "Как рассчитывается стоимость?",
          answer:
            "Индивидуальный проект рассчитывается по задаче, объёму и техническим требованиям. До начала работы вы получите письменное предложение.",
        },
        {
          question:
            "Можно ли доработать существующее решение?",
          answer:
            "Да. В первой заявке опишите, что уже есть и какую функцию или изменение вы хотите добавить.",
        },
      ],
    },
  },
} satisfies Record<
  ServicePageKey,
  Record<Language, ServicePageContent>
>;