type PackageLanguage = "de" | "en" | "ru";
type PackageId = "launch" | "business" | "growth";
interface PackageContent { name: string; description: string; features: string[]; }
interface PackageTranslation { popularBadge: string; packages: Record<PackageId, PackageContent>; }
export const packageTranslations: Record<PackageLanguage, PackageTranslation> = {
  "de": {
    "popularBadge": "Für Ihren Betrieb",
    "packages": {
      "launch": {
        "name": "Landingpage",
        "description": "Ihr Angebot auf einer klaren Seite.",
        "features": [
          "Eine Seite · bis zu 5 Abschnitte",
          "1 Sprache",
          "Individuelles Design",
          "Kontaktformular",
          "Basis-SEO & mobile Optimierung",
          "2 Korrekturrunden"
        ]
      },
      "business": {
        "name": "Firmenwebsite",
        "description": "Platz für Leistungen, Arbeiten und Ihr Unternehmen.",
        "features": [
          "Bis zu 5 Seiten",
          "1 Sprache",
          "Individuelles Design",
          "Kontaktformular",
          "Basis-SEO & mobile Optimierung",
          "1 Monat technischer Support",
          "2 Korrekturrunden"
        ]
      },
      "growth": {
        "name": "Online-Shop",
        "description": "Ein kleiner Shop, bereit für Ihre Produkte.",
        "features": [
          "Einrichtung von bis zu 20 Produkten",
          "1 Sprache",
          "Produkt- und Bestellverwaltung",
          "Warenkorb & Standard-Checkout",
          "Anbindung vereinbarter Zahlungsarten",
          "Basis-SEO & mobile Optimierung",
          "2 Monate technischer Support",
          "2 Korrekturrunden"
        ]
      }
    }
  },
  "en": {
    "popularBadge": "For your business",
    "packages": {
      "launch": {
        "name": "Landing page",
        "description": "Your offer on one clear page.",
        "features": [
          "One page · up to 5 sections",
          "1 language",
          "Custom design",
          "Contact form",
          "Basic SEO & mobile optimisation",
          "2 revision rounds"
        ]
      },
      "business": {
        "name": "Business website",
        "description": "Room for your services, work and business.",
        "features": [
          "Up to 5 pages",
          "1 language",
          "Custom design",
          "Contact form",
          "Basic SEO & mobile optimisation",
          "1 month of technical support",
          "2 revision rounds"
        ]
      },
      "growth": {
        "name": "Online store",
        "description": "A small store, ready for your products.",
        "features": [
          "Setup of up to 20 products",
          "1 language",
          "Product and order management",
          "Cart & standard checkout",
          "Integration of agreed payment methods",
          "Basic SEO & mobile optimisation",
          "2 months of technical support",
          "2 revision rounds"
        ]
      }
    }
  },
  "ru": {
    "popularBadge": "Для вашей компании",
    "packages": {
      "launch": {
        "name": "Лендинг",
        "description": "Ваше предложение на одной понятной странице.",
        "features": [
          "Одна страница · до 5 разделов",
          "1 язык",
          "Индивидуальный дизайн",
          "Форма обращения",
          "Базовое SEO и мобильная версия",
          "2 раунда правок"
        ]
      },
      "business": {
        "name": "Сайт компании",
        "description": "Услуги, работы и информация о вашем бизнесе.",
        "features": [
          "До 5 страниц",
          "1 язык",
          "Индивидуальный дизайн",
          "Форма обращения",
          "Базовое SEO и мобильная версия",
          "1 месяц технической поддержки",
          "2 раунда правок"
        ]
      },
      "growth": {
        "name": "Интернет-магазин",
        "description": "Небольшой магазин для ваших товаров.",
        "features": [
          "Добавление до 20 товаров",
          "1 язык",
          "Управление товарами и заказами",
          "Корзина и стандартное оформление заказа",
          "Подключение согласованных способов оплаты",
          "Базовое SEO и мобильная версия",
          "2 месяца технической поддержки",
          "2 раунда правок"
        ]
      }
    }
  }
};
