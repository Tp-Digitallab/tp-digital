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
      title: "Professionelles Webdesign",
      accent: "für Unternehmen.",

      description:
        "TP Digital Lab entwickelt professionelle Websites für Unternehmen in Deutschland. Wir erstellen moderne, schnelle und SEO-optimierte Websites, die visuell überzeugen und Besucher in Kunden verwandeln. Von der Konzeption über das Design bis zur technischen Umsetzung entsteht eine digitale Lösung, die Ihr Unternehmen langfristig online stärkt.",

      services: [
        "Individuelles Webdesign für Unternehmen",
        "SEO-optimierte Website-Entwicklung",
        "Responsive Design für Smartphone, Tablet und Desktop",
        "Conversion-Optimierung für mehr Kundenanfragen",
        "Schnelle und technisch optimierte Websites",
      ],

      seoTitle:
        "Warum professionelles Webdesign wichtig ist",

      seoDescription:
        "Eine professionelle Website ist die digitale Visitenkarte eines Unternehmens. Sie schafft Vertrauen, verbessert die Sichtbarkeit bei Google und hilft dabei, neue Kunden zu gewinnen. Eine schnelle, moderne und benutzerfreundliche Website unterstützt Unternehmen dabei, langfristig online erfolgreich zu sein.",

      faq: [
        {
          question:
            "Wie viel kostet eine professionelle Website?",

          answer:
            "Die Kosten hängen vom Umfang, Design und den gewünschten Funktionen ab. TP Digital Lab entwickelt individuelle Websites passend zu den Anforderungen des Unternehmens.",
        },
        {
          question:
            "Wie lange dauert die Entwicklung einer Website?",

          answer:
            "Die Dauer hängt vom Projektumfang ab. Viele Unternehmenswebsites können innerhalb weniger Wochen umgesetzt werden.",
        },
        {
          question:
            "Warum ist professionelles Webdesign wichtig?",

          answer:
            "Eine moderne Website stärkt das Vertrauen der Kunden, verbessert die Online-Sichtbarkeit und unterstützt die Gewinnung neuer Anfragen.",
        },
      ],
    },

    en: {
      title: "Professional Web Design",
      accent: "for businesses.",

      description:
        "TP Digital Lab develops professional websites for businesses. We create modern, fast and SEO-optimized websites that look convincing and turn visitors into customers. From planning and design to technical implementation, we build a digital solution that strengthens your business online over the long term.",

      services: [
        "Custom web design for businesses",
        "SEO-optimized website development",
        "Responsive design for mobile, tablet and desktop",
        "Conversion optimization for more enquiries",
        "Fast and technically optimized websites",
      ],

      seoTitle:
        "Why professional web design matters",

      seoDescription:
        "A professional website is the digital face of a business. It builds trust, improves visibility on Google and helps attract new customers. A fast, modern and user-friendly website supports long-term online growth.",

      faq: [
        {
          question:
            "How much does a professional website cost?",

          answer:
            "The cost depends on the scope, design and required features. TP Digital Lab develops custom websites tailored to each business.",
        },
        {
          question:
            "How long does website development take?",

          answer:
            "The timeline depends on the scope of the project. Many business websites can be completed within a few weeks.",
        },
        {
          question:
            "Why is professional web design important?",

          answer:
            "A modern website builds customer trust, improves online visibility and helps generate new enquiries.",
        },
      ],
    },

    ru: {
      title:
        "Профессиональная разработка сайтов",

      accent: "для бизнеса.",

      description:
        "TP Digital Lab разрабатывает профессиональные сайты для компаний. Мы создаём современные, быстрые и SEO-оптимизированные сайты, которые убедительно представляют бизнес и превращают посетителей в клиентов. От планирования и дизайна до технической реализации мы создаём цифровое решение для долгосрочного развития компании в интернете.",

      services: [
        "Индивидуальный веб-дизайн для бизнеса",
        "SEO-оптимизированная разработка сайтов",
        "Адаптивный дизайн для смартфонов, планшетов и компьютеров",
        "Оптимизация конверсии для увеличения числа заявок",
        "Быстрые и технически оптимизированные сайты",
      ],

      seoTitle:
        "Почему профессиональный сайт важен для бизнеса",

      seoDescription:
        "Профессиональный сайт — это цифровое лицо компании. Он укрепляет доверие, повышает видимость в Google и помогает привлекать новых клиентов. Быстрый, современный и удобный сайт создаёт основу для долгосрочного роста бизнеса в интернете.",

      faq: [
        {
          question:
            "Сколько стоит профессиональный сайт?",

          answer:
            "Стоимость зависит от объёма, дизайна и необходимых функций. TP Digital Lab разрабатывает индивидуальные сайты с учётом задач конкретного бизнеса.",
        },
        {
          question:
            "Сколько времени занимает разработка сайта?",

          answer:
            "Срок зависит от объёма проекта. Многие корпоративные сайты можно реализовать в течение нескольких недель.",
        },
        {
          question:
            "Почему профессиональный веб-дизайн так важен?",

          answer:
            "Современный сайт укрепляет доверие клиентов, повышает видимость компании в интернете и помогает получать новые заявки.",
        },
      ],
    },
  },

  onlineShop: {
    de: {
      title: "Online-Shop-Entwicklung",

      accent:
        "für erfolgreiche Unternehmen.",

      description:
        "TP Digital Lab entwickelt moderne Online-Shops für Unternehmen in Deutschland. Wir verbinden professionelles Design, schnelle Technologie und eine optimale Nutzererfahrung, damit Besucher zu Kunden werden.",

      services: [
        "Individuelle E-Commerce-Lösungen",
        "Moderne Online-Shop-Entwicklung",
        "Responsive Shop-Design",
        "Optimierung für bessere Conversion",
        "Integration digitaler Funktionen",
      ],

      seoTitle:
        "Warum ein professioneller Online-Shop wichtig ist",

      seoDescription:
        "Ein erfolgreicher Online-Shop ist mehr als eine Produktseite. Er muss schnell, benutzerfreundlich und technisch optimiert sein. TP Digital Lab entwickelt E-Commerce-Lösungen, die Unternehmen beim digitalen Wachstum unterstützen.",

      faq: [
        {
          question:
            "Wie viel kostet die Entwicklung eines Online-Shops?",

          answer:
            "Die Kosten hängen von Funktionen, Umfang und individuellen Anforderungen ab. Jeder Online-Shop wird passend zum Unternehmen entwickelt.",
        },
        {
          question:
            "Wie lange dauert die Erstellung eines Online-Shops?",

          answer:
            "Die Entwicklungszeit hängt von der Komplexität ab. Kleine Shops können schneller umgesetzt werden, umfangreiche Projekte benötigen mehr Zeit.",
        },
        {
          question:
            "Warum braucht ein Unternehmen einen professionellen Online-Shop?",

          answer:
            "Ein professioneller Online-Shop ermöglicht Unternehmen, Produkte digital anzubieten, neue Kunden zu erreichen und Verkäufe zu steigern.",
        },
      ],
    },

    en: {
      title: "Online Store Development",

      accent:
        "for successful businesses.",

      description:
        "TP Digital Lab develops modern online stores for businesses. We combine professional design, fast technology and an optimized user experience to turn visitors into customers.",

      services: [
        "Custom e-commerce solutions",
        "Modern online store development",
        "Responsive store design",
        "Conversion optimization",
        "Integration of digital features",
      ],

      seoTitle:
        "Why a professional online store matters",

      seoDescription:
        "A successful online store is more than a product page. It needs to be fast, user-friendly and technically optimized. TP Digital Lab develops e-commerce solutions that support sustainable digital growth.",

      faq: [
        {
          question:
            "How much does an online store cost?",

          answer:
            "The cost depends on the features, scope and individual requirements. Every online store is developed around the needs of the business.",
        },
        {
          question:
            "How long does it take to build an online store?",

          answer:
            "The timeline depends on the complexity. Smaller stores can be completed faster, while larger projects require more time.",
        },
        {
          question:
            "Why does a business need a professional online store?",

          answer:
            "A professional online store allows a business to sell products digitally, reach new customers and increase sales.",
        },
      ],
    },

    ru: {
      title:
        "Разработка интернет-магазинов",

      accent:
        "для успешного бизнеса.",

      description:
        "TP Digital Lab разрабатывает современные интернет-магазины для компаний. Мы объединяем профессиональный дизайн, быстрые технологии и удобный пользовательский опыт, чтобы превращать посетителей в покупателей.",

      services: [
        "Индивидуальные решения для электронной коммерции",
        "Разработка современных интернет-магазинов",
        "Адаптивный дизайн магазина",
        "Оптимизация конверсии",
        "Интеграция цифровых функций",
      ],

      seoTitle:
        "Почему профессиональный интернет-магазин важен",

      seoDescription:
        "Успешный интернет-магазин — это больше, чем страница с товарами. Он должен быть быстрым, удобным и технически оптимизированным. TP Digital Lab создаёт решения для электронной коммерции, которые помогают бизнесу стабильно расти онлайн.",

      faq: [
        {
          question:
            "Сколько стоит разработка интернет-магазина?",

          answer:
            "Стоимость зависит от функций, объёма и индивидуальных требований. Каждый интернет-магазин разрабатывается с учётом задач конкретного бизнеса.",
        },
        {
          question:
            "Сколько времени занимает создание интернет-магазина?",

          answer:
            "Срок зависит от сложности. Небольшие магазины можно запустить быстрее, а крупным проектам требуется больше времени.",
        },
        {
          question:
            "Зачем бизнесу профессиональный интернет-магазин?",

          answer:
            "Профессиональный интернет-магазин позволяет продавать товары онлайн, привлекать новых клиентов и увеличивать продажи.",
        },
      ],
    },
  },

  seo: {
    de: {
      title: "SEO für Unternehmen",

      accent:
        "für bessere Sichtbarkeit.",

      description:
        "TP Digital Lab unterstützt Unternehmen in Deutschland bei der Suchmaschinenoptimierung. Wir verbessern technische Grundlagen, Inhalte und Nutzererfahrung, damit Websites besser bei Google gefunden werden und langfristig neue Kunden erreichen.",

      services: [
        "Technische SEO-Optimierung",
        "Keyword-Analyse und Strategie",
        "OnPage-Optimierung",
        "Google-Sichtbarkeit verbessern",
        "Digitale Wachstumsstrategien",
      ],

      seoTitle:
        "Warum professionelle SEO-Optimierung wichtig ist",

      seoDescription:
        "Eine moderne Website bringt nur dann Kunden, wenn sie gefunden wird. Professionelle SEO verbessert die Sichtbarkeit bei Google, erreicht relevante Besucher und unterstützt Unternehmen beim langfristigen Wachstum.",

      faq: [
        {
          question:
            "Warum ist SEO für Unternehmen wichtig?",

          answer:
            "SEO hilft Unternehmen dabei, bei Google besser gefunden zu werden und langfristig mehr relevante Besucher zu erreichen.",
        },
        {
          question:
            "Wie lange dauert es, bis SEO-Ergebnisse sichtbar werden?",

          answer:
            "SEO ist ein langfristiger Prozess. Die ersten Verbesserungen hängen von Wettbewerb, Website-Zustand und Umfang der Optimierung ab.",
        },
        {
          question:
            "Was beinhaltet professionelle SEO-Optimierung?",

          answer:
            "SEO umfasst technische Optimierung, Keyword-Analyse, Content-Optimierung und Verbesserungen der Nutzererfahrung.",
        },
      ],
    },

    en: {
      title: "SEO for Businesses",

      accent:
        "for better visibility.",

      description:
        "TP Digital Lab helps businesses improve their search visibility. We optimize technical foundations, content and user experience so websites can rank better on Google and attract new customers over the long term.",

      services: [
        "Technical SEO optimization",
        "Keyword research and strategy",
        "On-page optimization",
        "Improved visibility on Google",
        "Digital growth strategies",
      ],

      seoTitle:
        "Why professional SEO matters",

      seoDescription:
        "A modern website can only generate customers when people can find it. Professional SEO improves visibility on Google, attracts relevant visitors and supports sustainable business growth.",

      faq: [
        {
          question:
            "Why is SEO important for businesses?",

          answer:
            "SEO helps businesses rank more prominently on Google and attract more relevant visitors over the long term.",
        },
        {
          question:
            "How long does it take to see SEO results?",

          answer:
            "SEO is a long-term process. The first improvements depend on the competition, the current website and the scope of optimization.",
        },
        {
          question:
            "What does professional SEO include?",

          answer:
            "SEO includes technical optimization, keyword research, content optimization and improvements to the user experience.",
        },
      ],
    },

    ru: {
      title: "SEO для бизнеса",

      accent:
        "для лучшей видимости.",

      description:
        "TP Digital Lab помогает компаниям повышать видимость в поисковых системах. Мы улучшаем техническую основу, контент и пользовательский опыт, чтобы сайты занимали более высокие позиции в Google и стабильно привлекали новых клиентов.",

      services: [
        "Техническая SEO-оптимизация",
        "Анализ ключевых слов и стратегия",
        "Внутренняя оптимизация страниц",
        "Повышение видимости в Google",
        "Стратегии цифрового роста",
      ],

      seoTitle:
        "Почему профессиональная SEO-оптимизация важна",

      seoDescription:
        "Современный сайт приносит клиентов только тогда, когда его можно найти. Профессиональное SEO повышает видимость в Google, привлекает целевых посетителей и поддерживает долгосрочный рост бизнеса.",

      faq: [
        {
          question:
            "Почему SEO важно для бизнеса?",

          answer:
            "SEO помогает компаниям занимать более заметные позиции в Google и стабильно привлекать больше целевых посетителей.",
        },
        {
          question:
            "Когда становятся заметны результаты SEO?",

          answer:
            "SEO — это долгосрочный процесс. Первые улучшения зависят от конкуренции, текущего состояния сайта и объёма оптимизации.",
        },
        {
          question:
            "Что входит в профессиональное SEO?",

          answer:
            "SEO включает техническую оптимизацию, анализ ключевых слов, улучшение контента и пользовательского опыта.",
        },
      ],
    },
  },

  digitalSolutions: {
    de: {
      title: "Digitale Lösungen",

      accent:
        "für moderne Unternehmen.",

      description:
        "TP Digital Lab entwickelt individuelle digitale Lösungen für Unternehmen. Von modernen Webanwendungen bis zu automatisierten Prozessen helfen wir Unternehmen, effizienter zu arbeiten und ihre digitalen Ziele zu erreichen.",

      services: [
        "Individuelle Webentwicklung",
        "Digitale Anwendungen für Unternehmen",
        "Automatisierung von Geschäftsprozessen",
        "Integration moderner Technologien",
        "Maßgeschneiderte digitale Lösungen",
      ],

      seoTitle:
        "Warum digitale Lösungen für Unternehmen wichtig sind",

      seoDescription:
        "Digitale Technologien helfen Unternehmen dabei, Prozesse zu optimieren, Kunden besser zu erreichen und langfristig wettbewerbsfähig zu bleiben. TP Digital Lab entwickelt Lösungen, die genau zu den Anforderungen eines Unternehmens passen.",

      faq: [
        {
          question:
            "Was sind digitale Lösungen für Unternehmen?",

          answer:
            "Digitale Lösungen umfassen moderne Websites, Webanwendungen, Automatisierungen und individuelle Systeme, die Unternehmen effizienter machen.",
        },
        {
          question:
            "Welche Unternehmen benötigen digitale Lösungen?",

          answer:
            "Digitale Lösungen eignen sich für Unternehmen jeder Größe, die Prozesse verbessern, Kunden erreichen oder neue digitale Angebote entwickeln möchten.",
        },
        {
          question:
            "Entwickelt TP Digital Lab individuelle Software?",

          answer:
            "TP Digital Lab entwickelt individuelle digitale Lösungen und moderne Webanwendungen passend zu den Anforderungen des Unternehmens.",
        },
      ],
    },

    en: {
      title: "Digital Solutions",

      accent:
        "for modern businesses.",

      description:
        "TP Digital Lab develops custom digital solutions for businesses. From modern web applications to automated processes, we help companies work more efficiently and achieve their digital goals.",

      services: [
        "Custom web development",
        "Digital applications for businesses",
        "Business process automation",
        "Integration of modern technologies",
        "Tailored digital solutions",
      ],

      seoTitle:
        "Why digital solutions matter for businesses",

      seoDescription:
        "Digital technologies help businesses optimize processes, reach customers more effectively and remain competitive over the long term. TP Digital Lab develops solutions tailored to the specific requirements of each company.",

      faq: [
        {
          question:
            "What are digital solutions for businesses?",

          answer:
            "Digital solutions include modern websites, web applications, automations and custom systems that help businesses operate more efficiently.",
        },
        {
          question:
            "Which businesses need digital solutions?",

          answer:
            "Digital solutions are suitable for businesses of any size that want to improve processes, reach customers or develop new digital services.",
        },
        {
          question:
            "Does TP Digital Lab develop custom software?",

          answer:
            "TP Digital Lab develops custom digital solutions and modern web applications tailored to the requirements of each business.",
        },
      ],
    },

    ru: {
      title: "Цифровые решения",

      accent:
        "для современного бизнеса.",

      description:
        "TP Digital Lab разрабатывает индивидуальные цифровые решения для компаний. От современных веб-приложений до автоматизации процессов — мы помогаем бизнесу работать эффективнее и достигать цифровых целей.",

      services: [
        "Индивидуальная веб-разработка",
        "Цифровые приложения для бизнеса",
        "Автоматизация бизнес-процессов",
        "Интеграция современных технологий",
        "Цифровые решения под задачи компании",
      ],

      seoTitle:
        "Почему цифровые решения важны для бизнеса",

      seoDescription:
        "Цифровые технологии помогают оптимизировать процессы, эффективнее взаимодействовать с клиентами и сохранять конкурентоспособность. TP Digital Lab создаёт решения, точно соответствующие требованиям конкретной компании.",

      faq: [
        {
          question:
            "Что такое цифровые решения для бизнеса?",

          answer:
            "К цифровым решениям относятся современные сайты, веб-приложения, автоматизация и индивидуальные системы, которые помогают компаниям работать эффективнее.",
        },
        {
          question:
            "Каким компаниям нужны цифровые решения?",

          answer:
            "Они подходят бизнесу любого размера, который хочет улучшить процессы, эффективнее привлекать клиентов или создавать новые цифровые услуги.",
        },
        {
          question:
            "Разрабатывает ли TP Digital Lab индивидуальное программное обеспечение?",

          answer:
            "TP Digital Lab создаёт индивидуальные цифровые решения и современные веб-приложения с учётом требований конкретного бизнеса.",
        },
      ],
    },
  },
} satisfies Record<
  ServicePageKey,
  Record<
    Language,
    ServicePageContent
  >
>;