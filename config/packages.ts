export const packages = [
  {
    id: "launch",

    name: "Launch",

    price: 300,

    featured: false,

    description:
      "Eine startbereite Landingpage für Selbstständige und kleine Unternehmen, die professionell online auftreten möchten.",

    features: [
      "Landingpage – eine Seite mit bis zu 5 Abschnitten",
      "1 Sprache",
      "Individuelles Design",
      "Basis-SEO",
      "Kontaktformular",
      "Optimiert für Smartphone und Desktop",
      "2 Korrekturrunden",
    ],
  },

  {
    id: "business",

    name: "Business",

    price: 790,

    featured: true,

    description:
      "Eine vollständige Unternehmenswebsite für mehr Sichtbarkeit und neue Kundenanfragen.",

    features: [
      "Unternehmenswebsite – bis zu 5 Seiten",
      "1 Sprache",
      "Individuelles Design",
      "Basis-SEO",
      "1 Monat technischer Support",
      "2 Korrekturrunden",
    ],
  },

  {
    id: "growth",

    name: "Growth",

    price: 1500,

    featured: false,

    description:
      "Ein kleiner Online-Shop mit Produktverwaltung und vereinbarter Zahlungsintegration.",

    features: [
      "Online-Shop – bis zu 20 Produkte",
      "1 Sprache",
      "Admin-Bereich (CMS)",
      "Zahlungsintegration",
      "Basis-SEO",
      "2 Monate technischer Support",
      "2 Korrekturrunden",
    ],
  },
] as const;