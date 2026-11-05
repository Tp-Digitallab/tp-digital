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
      title: "Was ich für Sie übernehme.",
      description: "Einmalige Prüfung oder gezielte Optimierung — passend zu Ihrer Website.",
      deliverables: [
  {
    "title": "Analyse & Prioritäten",
    "text": "Technik, Inhalte und interne Links prüfen."
  },
  {
    "title": "Gezielte Korrekturen",
    "text": "Metadaten, Überschriften und Seitenstruktur verbessern."
  },
  {
    "title": "Klare Übergabe",
    "text": "Änderungen und nächste Schritte dokumentieren."
  }
],
      requests: [
        { id: "audit", label: "Website prüfen und Maßnahmenplan erhalten" },
        { id: "onpage", label: "Konkrete SEO-Probleme beheben" },
        { id: "local", label: "Lokale Auffindbarkeit / Google-Unternehmensprofil" },
        { id: "unsure", label: "SEO-Anfrage – noch nicht sicher" },
      ],
      messagePlaceholder: "Welche Website soll geprüft werden? Was bieten Sie an, in welcher Region und was möchten Sie verbessern?",
      example: { title: "Ein Beispiel aus meiner Arbeit.", text: "Mehrsprachige Leistungsseiten und klare Kontaktwege bei Exzellentia Constructio.", link: "Projekt und Umsetzung ansehen" },
    },
    en: {
      title: "What I can do for you.",
      description: "A one-off review or targeted improvements for your website.",
      deliverables: [
  {
    "title": "Review & priorities",
    "text": "Check technical issues, content and internal links."
  },
  {
    "title": "Targeted fixes",
    "text": "Improve metadata, headings and page structure."
  },
  {
    "title": "Clear handover",
    "text": "Document changes and next steps."
  }
],
      requests: [
        { id: "audit", label: "Website review and action plan" },
        { id: "onpage", label: "Fix specific SEO issues" },
        { id: "local", label: "Local visibility / Google Business Profile" },
        { id: "unsure", label: "SEO enquiry – not sure yet" },
      ],
      messagePlaceholder: "Which website should I review? What do you offer, in which area, and what would you like to improve?",
      example: { title: "An example of my work.", text: "Multilingual service pages and clear contact options for Exzellentia Constructio.", link: "Explore the project" },
    },
    ru: {
      title: "Что я сделаю.",
      description: "Разовая проверка или конкретные улучшения вашего сайта.",
      deliverables: [
  {
    "title": "Анализ и приоритеты",
    "text": "Проверю технику, контент и внутренние ссылки."
  },
  {
    "title": "Точечные исправления",
    "text": "Улучшу метаданные, заголовки и структуру страниц."
  },
  {
    "title": "Понятный результат",
    "text": "Передам список изменений и дальнейших шагов."
  }
],
      requests: [
        { id: "audit", label: "Проверка сайта и план улучшений" },
        { id: "onpage", label: "Исправление конкретных SEO-проблем" },
        { id: "local", label: "Локальная видимость / профиль Google" },
        { id: "unsure", label: "Вопрос по SEO — пока не определился" },
      ],
      messagePlaceholder: "Какой сайт нужно проверить? Какие услуги вы предлагаете, в каком регионе и что хотите улучшить?",
      example: { title: "Пример моей работы.", text: "Многоязычные страницы услуг и понятные способы связи для Exzellentia Constructio.", link: "Посмотреть проект и реализацию" },
    },
  },
  digitalSolutions: {
    de: {
      title: "Kleine Aufgabe oder neue Funktion.",
      description: "Schicken Sie mir den Link und beschreiben Sie, was geändert werden soll.",
      deliverables: [
  {
    "title": "Fehler beheben",
    "text": "Formulare, Links und ausgefallene Funktionen reparieren."
  },
  {
    "title": "Bedienung verbessern",
    "text": "Mobile Ansichten, Menüs und Seiten überarbeiten."
  },
  {
    "title": "Funktionen ergänzen",
    "text": "Rechner, Schnittstellen und Automatisierungen einbauen."
  }
],
      requests: [
        { id: "repair", label: "Formular, Fehler oder defekte Funktion" },
        { id: "mobile", label: "Mobile Ansicht oder Bedienung verbessern" },
        { id: "content", label: "Seite, Inhalte oder Design ergänzen" },
        { id: "integration", label: "Rechner, Schnittstelle oder Automatisierung" },
        { id: "unsure", label: "Andere Aufgabe / erst prüfen lassen" },
      ],
      messagePlaceholder: "Was funktioniert nicht oder was soll ergänzt werden? Nennen Sie die betroffene Seite und das gewünschte Ergebnis. Bitte keine Passwörter senden.",
      example: { title: "Beispiel: ein Kostenrechner.", text: "Besucher beschreiben ihr Bauvorhaben und können anschließend eine Anfrage stellen.", link: "Reales Projekt ansehen" },
    },
    en: {
      title: "A small fix or a new feature.",
      description: "Send me the link and tell me what needs to change.",
      deliverables: [
  {
    "title": "Fix errors",
    "text": "Repair forms, links and broken features."
  },
  {
    "title": "Improve usability",
    "text": "Refine mobile layouts, menus and pages."
  },
  {
    "title": "Add features",
    "text": "Build calculators, integrations and automations."
  }
],
      requests: [
        { id: "repair", label: "Form, error or broken feature" },
        { id: "mobile", label: "Mobile layout or usability" },
        { id: "content", label: "Add a page, content or design changes" },
        { id: "integration", label: "Calculator, integration or automation" },
        { id: "unsure", label: "Other task / initial assessment" },
      ],
      messagePlaceholder: "What is broken or what would you like to add? Include the affected page and the desired result. Please do not send passwords.",
      example: { title: "Example: a cost calculator.", text: "Visitors outline their construction project and can then send an enquiry.", link: "View the real project" },
    },
    ru: {
      title: "Небольшая правка или новая функция.",
      description: "Пришлите ссылку и опишите, что нужно изменить.",
      deliverables: [
  {
    "title": "Исправить ошибки",
    "text": "Починю формы, ссылки и неработающие функции."
  },
  {
    "title": "Улучшить удобство",
    "text": "Доработаю мобильную версию, меню и страницы."
  },
  {
    "title": "Добавить функции",
    "text": "Создам калькулятор, интеграцию или автоматизацию."
  }
],
      requests: [
        { id: "repair", label: "Форма, ошибка или неработающая функция" },
        { id: "mobile", label: "Мобильная версия и удобство" },
        { id: "content", label: "Новая страница, контент или дизайн" },
        { id: "integration", label: "Калькулятор, интеграция или автоматизация" },
        { id: "unsure", label: "Другая задача / сначала нужна оценка" },
      ],
      messagePlaceholder: "Что не работает или что нужно добавить? Укажите страницу и желаемый результат. Пожалуйста, не отправляйте пароли.",
      example: { title: "Пример: калькулятор стоимости.", text: "Посетитель описывает строительный проект и затем может отправить заявку.", link: "Посмотреть реальный проект" },
    },
  },
  onlineShop: {
    de: {
      title: "Alles für den ersten Verkauf.",
      description: "Bis zu 20 Produkte. Funktionen, Versand und Zahlungsanbieter stimmen wir vorab ab.",
      deliverables: [
  {
    "title": "Ihre Produkte",
    "text": "Produktseiten mit Ihren Bildern, Texten und Varianten."
  },
  {
    "title": "Warenkorb & Zahlung",
    "text": "Bestellablauf und vereinbarte Zahlungsanbindung."
  },
  {
    "title": "Selbst verwalten",
    "text": "Produktdaten bearbeiten und Bestellungen verwalten."
  }
],
      requests: [],
      messagePlaceholder: "Welche Produkte möchten Sie verkaufen und wie viele sind es? Gibt es bereits einen Shop? Welche Zahlungen, Länder und Versandarten benötigen Sie?",
      example: { title: "Probieren Sie den Warenkorb aus.", text: "Funktionsdemo mit fiktiven Produkten. Keine echten Bestellungen oder Zahlungen.", link: "Demo ausprobieren" },
    },
    en: {
      title: "Ready for your first sale.",
      description: "Up to 20 products. Features, shipping and payment provider agreed in advance.",
      deliverables: [
  {
    "title": "Your products",
    "text": "Product pages with your images, text and variants."
  },
  {
    "title": "Cart & payment",
    "text": "Order flow and the agreed payment integration."
  },
  {
    "title": "Manage it yourself",
    "text": "Edit product information and manage orders."
  }
],
      requests: [],
      messagePlaceholder: "What will you sell and how many products do you have? Is there an existing store? Which payments, countries and shipping methods do you need?",
      example: { title: "Try the shopping cart.", text: "A feature demo with fictional products. No real orders or payments.", link: "Try the demo" },
    },
    ru: {
      title: "Всё для первых продаж.",
      description: "До 20 товаров. Функции, доставку и оплату согласуем заранее.",
      deliverables: [
  {
    "title": "Ваши товары",
    "text": "Карточки с вашими фотографиями, описаниями и вариантами."
  },
  {
    "title": "Корзина и оплата",
    "text": "Оформление заказа и согласованный способ оплаты."
  },
  {
    "title": "Управление магазином",
    "text": "Редактирование товаров и работа с заказами."
  }
],
      requests: [],
      messagePlaceholder: "Какие товары и в каком количестве вы хотите продавать? Есть ли действующий магазин? Какие способы оплаты, страны и варианты доставки нужны?",
      example: { title: "Попробуйте корзину.", text: "Демо с вымышленными товарами. Без настоящих заказов и оплаты.", link: "Попробовать демо" },
    },
  },
};
