import type { Language } from "@/components/providers/LanguageProvider";
import type { ServicePageKey } from "@/config/servicePageTranslations";

type ServiceOffer = {
  title: string;
  description: string;
  deliverables: { title: string; text: string }[];
  requests: { id: string; label: string }[];
  messagePlaceholder: string;
  example: { title: string; text: string; link: string };
};

export const serviceOffers: Record<Exclude<ServicePageKey, "webdesign">, Record<Language, ServiceOffer>> = {
  seo: {
    de: {
      title: "Sie sehen, was Ihre Website bremst und was ich ändere.",
      description: "Wir legen fest, welche Seiten ich prüfe und optimiere. Sie erhalten eine dokumentierte Analyse, vereinbarte Korrekturen und eine Übersicht der Änderungen. Auch ein einmaliger Auftrag ist möglich.",
      deliverables: [
        { title: "Analyse mit Prioritäten", text: "Eine schriftliche Übersicht zu technischen Problemen, Seitentiteln, Inhalten und internen Links der vereinbarten Seiten – mit konkreten nächsten Schritten." },
        { title: "Gezielte Umsetzung", text: "Die beauftragten Korrekturen setze ich direkt um: zum Beispiel Metadaten, Überschriften, interne Links oder die Struktur Ihrer Leistungsseiten." },
        { title: "Nachvollziehbare Übergabe", text: "Sie erhalten eine Übersicht der Änderungen und offenen Empfehlungen. Vorhandene Search-Console-Daten beziehen wir bei Bedarf und mit Ihrem Zugang ein." },
      ],
      requests: [
        { id: "audit", label: "Website prüfen und Maßnahmenplan erhalten" },
        { id: "onpage", label: "Konkrete SEO-Probleme beheben" },
        { id: "local", label: "Lokale Auffindbarkeit / Google-Unternehmensprofil" },
        { id: "unsure", label: "SEO-Anfrage – noch nicht sicher" },
      ],
      messagePlaceholder: "Welche Website soll geprüft werden? Was bieten Sie an, in welcher Region und was möchten Sie verbessern?",
      example: { title: "SEO als Teil eines realen Website-Projekts", text: "Für Exzellentia Constructio habe ich Leistungsseiten und einen mehrsprachigen Webauftritt umgesetzt; SEO gehört ebenfalls zum Projekt. Sehen Sie live, wie Leistungen, Referenzen und Kontaktwege zusammen aufgebaut sind.", link: "Projekt und Umsetzung ansehen" },
    },
    en: {
      title: "Know what needs attention and what I will change.",
      description: "We agree which pages I review and optimise. You receive a documented analysis, agreed corrections and a change summary. A one-off assignment is possible too.",
      deliverables: [
        { title: "A prioritised review", text: "A written overview of technical issues, page titles, content and internal links on the agreed pages, with specific next steps." },
        { title: "Targeted implementation", text: "I implement the agreed corrections, such as metadata, headings, internal links or the structure of your service pages." },
        { title: "A documented handover", text: "You receive a change summary and remaining recommendations. We can use existing Search Console data when relevant and with your access." },
      ],
      requests: [
        { id: "audit", label: "Website review and action plan" },
        { id: "onpage", label: "Fix specific SEO issues" },
        { id: "local", label: "Local visibility / Google Business Profile" },
        { id: "unsure", label: "SEO enquiry – not sure yet" },
      ],
      messagePlaceholder: "Which website should I review? What do you offer, in which area, and what would you like to improve?",
      example: { title: "SEO within a real website project", text: "For Exzellentia Constructio, I built service pages and a multilingual website; SEO is also part of the project. Explore how services, references and contact options work together in the live website.", link: "Explore the project" },
    },
    ru: {
      title: "Вы понимаете, что требует внимания и что я исправлю.",
      description: "Согласуем страницы для проверки и оптимизации. Вы получите письменный анализ, согласованные исправления и список изменений. Можно заказать разовую задачу.",
      deliverables: [
        { title: "Анализ с приоритетами", text: "Письменный список технических проблем, замечаний к заголовкам, содержанию и внутренним ссылкам согласованных страниц с конкретными следующими шагами." },
        { title: "Конкретные исправления", text: "Внесу согласованные изменения: например, метаданные, заголовки, внутренние ссылки или структуру страниц услуг." },
        { title: "Понятная передача результата", text: "Вы получите список изменений и оставшиеся рекомендации. При необходимости и предоставлении доступа используем существующие данные Search Console." },
      ],
      requests: [
        { id: "audit", label: "Проверка сайта и план улучшений" },
        { id: "onpage", label: "Исправление конкретных SEO-проблем" },
        { id: "local", label: "Локальная видимость / профиль Google" },
        { id: "unsure", label: "Вопрос по SEO — пока не определился" },
      ],
      messagePlaceholder: "Какой сайт нужно проверить? Какие услуги вы предлагаете, в каком регионе и что хотите улучшить?",
      example: { title: "SEO в составе реального проекта", text: "Для Exzellentia Constructio я реализовал страницы услуг и многоязычный сайт; SEO также входит в проект. Посмотрите на работающем сайте, как связаны услуги, примеры работ и способы обращения.", link: "Посмотреть проект и реализацию" },
    },
  },
  digitalSolutions: {
    de: {
      title: "Eine konkrete Aufgabe. Ein klar vereinbarter Umfang.",
      description: "Schicken Sie mir den Link, den Fehler oder die gewünschte Funktion. Ich prüfe zuerst die bestehende Technik und kläre, ob eine gezielte Änderung genügt. Preis und Termin stehen fest, bevor die Umsetzung beginnt.",
      deliverables: [
        { title: "Formulare und Fehler beheben", text: "Ein Kontaktformular sendet nicht, ein Link ist defekt oder eine Funktion fällt aus? Ich prüfe die Ursache und teste die vereinbarte Korrektur." },
        { title: "Mobile Ansicht und Inhalte verbessern", text: "Menü, Abstände und Kontaktbuttons überarbeiten oder eine neue Leistungsseite ergänzen – passend zum bestehenden Auftritt." },
        { title: "Funktionen und Abläufe ergänzen", text: "Zum Beispiel ein Kostenrechner, die Anbindung eines Dienstes oder ein internes Tool. Zugänge, Schnittstellen und laufende Kosten klären wir vorab." },
      ],
      requests: [
        { id: "repair", label: "Formular, Fehler oder defekte Funktion" },
        { id: "mobile", label: "Mobile Ansicht oder Bedienung verbessern" },
        { id: "content", label: "Seite, Inhalte oder Design ergänzen" },
        { id: "integration", label: "Rechner, Schnittstelle oder Automatisierung" },
        { id: "unsure", label: "Andere Aufgabe / erst prüfen lassen" },
      ],
      messagePlaceholder: "Was funktioniert nicht oder was soll ergänzt werden? Nennen Sie die betroffene Seite und das gewünschte Ergebnis. Bitte keine Passwörter senden.",
      example: { title: "Beispiel: Kostenrechner für einen Baubetrieb", text: "Auf der Website von Exzellentia Constructio können Interessenten ihr Vorhaben unverbindlich einschätzen und anschließend eine Anfrage stellen. So wird eine individuelle Funktion direkt mit dem Kontaktweg verbunden.", link: "Reales Projekt ansehen" },
    },
    en: {
      title: "One specific task. A clearly agreed scope.",
      description: "Send me the link, the issue or the feature you need. I review the existing setup first and check whether a targeted change is sufficient. We agree on price and timing before implementation.",
      deliverables: [
        { title: "Repair forms and errors", text: "A contact form does not send, a link is broken or a feature fails? I investigate the cause and test the agreed fix." },
        { title: "Improve mobile layouts and content", text: "Refine menus, spacing and contact buttons or add a service page that fits your existing website." },
        { title: "Add features and workflows", text: "For example, a cost calculator, a service integration or an internal tool. We clarify access, APIs and ongoing costs in advance." },
      ],
      requests: [
        { id: "repair", label: "Form, error or broken feature" },
        { id: "mobile", label: "Mobile layout or usability" },
        { id: "content", label: "Add a page, content or design changes" },
        { id: "integration", label: "Calculator, integration or automation" },
        { id: "unsure", label: "Other task / initial assessment" },
      ],
      messagePlaceholder: "What is broken or what would you like to add? Include the affected page and the desired result. Please do not send passwords.",
      example: { title: "Example: a calculator for a construction business", text: "On the Exzellentia Constructio website, visitors can get an indicative estimate and then submit an enquiry. The custom feature connects directly to the contact journey.", link: "View the real project" },
    },
    ru: {
      title: "Конкретная задача с понятным объёмом работы.",
      description: "Пришлите ссылку, описание ошибки или нужной функции. Сначала проверю существующую систему и определю, достаточно ли точечной доработки. Цену и срок согласуем до реализации.",
      deliverables: [
        { title: "Исправление форм и ошибок", text: "Форма не отправляется, ссылка не работает или функция выдаёт ошибку? Найду причину и проверю согласованное исправление." },
        { title: "Мобильная версия и содержание", text: "Доработаю меню, отступы и кнопки связи или добавлю страницу услуги в стиле существующего сайта." },
        { title: "Новые функции и автоматизация", text: "Например, калькулятор стоимости, подключение сервиса или внутренний инструмент. Доступы, интеграции и текущие расходы обсудим заранее." },
      ],
      requests: [
        { id: "repair", label: "Форма, ошибка или неработающая функция" },
        { id: "mobile", label: "Мобильная версия и удобство" },
        { id: "content", label: "Новая страница, контент или дизайн" },
        { id: "integration", label: "Калькулятор, интеграция или автоматизация" },
        { id: "unsure", label: "Другая задача / сначала нужна оценка" },
      ],
      messagePlaceholder: "Что не работает или что нужно добавить? Укажите страницу и желаемый результат. Пожалуйста, не отправляйте пароли.",
      example: { title: "Пример: калькулятор для строительной компании", text: "На сайте Exzellentia Constructio посетитель может предварительно оценить свой объект и затем отправить заявку. Индивидуальная функция связана с понятным следующим шагом для клиента.", link: "Посмотреть реальный проект" },
    },
  },
  onlineShop: {
    de: {
      title: "Vom Produkt bis zur Bestellung nachvollziehbar geplant.",
      description: "Vor dem Start klären wir Sortiment, Zahlungsanbieter, Versand und Verwaltung. Das Einstiegspaket umfasst bis zu 20 Produkte. Enthaltene Funktionen und externe Gebühren halten wir im Angebot fest.",
      deliverables: [
        { title: "Sortiment und Produktseiten", text: "Bis zu 20 Produkte mit Ihren Bildern, Beschreibungen und vereinbarten Varianten. Produkt- und Kategorieseiten werden für Smartphone und Desktop aufgebaut." },
        { title: "Warenkorb und Zahlung", text: "Ein klarer Bestellweg mit dem vereinbarten Zahlungsanbieter. Versandregeln und benötigte Integrationen stimmen wir vorab ab; Anbietergebühren sind separat." },
        { title: "Verwaltung und Übergabe", text: "Sie können die vereinbarten Produktdaten im CMS selbst ändern. Vor dem Start prüfen wir den vereinbarten Bestellablauf und ich zeige Ihnen die Verwaltung." },
      ],
      requests: [],
      messagePlaceholder: "Welche Produkte möchten Sie verkaufen und wie viele sind es? Gibt es bereits einen Shop? Welche Zahlungen, Länder und Versandarten benötigen Sie?",
      example: { title: "Probieren Sie einen einfachen Warenkorb aus", text: "Das folgende Beispiel zeigt die Bedienung mit fiktiven Produkten. Es ist eine Funktionsdemo, kein Kundenprojekt. Bestellungen und Zahlungen sind nicht möglich.", link: "Demo ausprobieren" },
    },
    en: {
      title: "A clear journey from product to order.",
      description: "Before starting, we agree on products, payment provider, shipping and management. The entry package covers up to 20 products. Included features and external fees are documented in the quote.",
      deliverables: [
        { title: "Catalogue and product pages", text: "Up to 20 products with your images, descriptions and agreed variants. Product and category pages are built for mobile and desktop." },
        { title: "Cart and payment", text: "A clear order journey using the agreed payment provider. We discuss shipping rules and integrations in advance; provider fees are separate." },
        { title: "Management and handover", text: "You can edit the agreed product information in the CMS. Before launch, we test the agreed order flow and I show you how to manage the store." },
      ],
      requests: [],
      messagePlaceholder: "What will you sell and how many products do you have? Is there an existing store? Which payments, countries and shipping methods do you need?",
      example: { title: "Try a simple shopping cart", text: "The example below uses fictional products to show the interaction. It is a feature demo, not a client project. Orders and payments are not possible.", link: "Try the demo" },
    },
    ru: {
      title: "Понятный путь от товара до заказа.",
      description: "До старта согласуем ассортимент, платёжный сервис, доставку и управление. Начальный пакет включает до 20 товаров. Состав функций и внешние комиссии фиксируем в предложении.",
      deliverables: [
        { title: "Каталог и карточки товаров", text: "До 20 товаров с вашими фото, описаниями и согласованными вариантами. Страницы товаров и категорий адаптируются для телефона и компьютера." },
        { title: "Корзина и оплата", text: "Понятное оформление заказа с согласованным платёжным сервисом. Правила доставки и интеграции обсуждаем заранее; комиссии провайдера оплачиваются отдельно." },
        { title: "Управление и передача", text: "Вы сможете самостоятельно менять согласованные данные товаров в CMS. До запуска проверим согласованный путь оформления заказа, затем покажу управление." },
      ],
      requests: [],
      messagePlaceholder: "Какие товары и в каком количестве вы хотите продавать? Есть ли действующий магазин? Какие способы оплаты, страны и варианты доставки нужны?",
      example: { title: "Попробуйте простую корзину", text: "Пример ниже показывает взаимодействие с вымышленными товарами. Это демонстрация функции, а не клиентский проект. Оформление заказов и оплата недоступны.", link: "Попробовать демо" },
    },
  },
};
