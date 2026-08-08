export const packages = [
  {
    id: "launch",

    name: "Launch",

    price: 500,

    featured: false,

    description:
      "A ready-to-launch landing page for businesses that need a professional online presence.",

    features: [
      "Landing Page",
      "1 Language",
      "Basic SEO",
      "Contact Form",
      "Google Analytics 4 Setup",
      "Responsive Design",
    ],
  },

  {
    id: "business",

    name: "Business",

    price: 1000,

    featured: true,

    description:
      "A complete multi-page website for companies focused on visibility and customer acquisition.",

    features: [
      "Multi-page Website — up to 5 pages",
      "2 Languages",
      "Advanced SEO",
      "Google Business Profile",
      "GA4 and Conversion Tracking",
      "1 Month Technical Support",
    ],
  },

  {
    id: "growth",

    name: "Growth",

    price: 2000,

    featured: false,

    description:
      "A complete online store with administration, marketing setup and multilingual support.",

    features: [
      "Online Store — up to 20 products",
      "Up to 3 Languages",
      "Advanced SEO",
      "Admin Panel (CMS)",
      "Payment Integration",
      "GA4 E-commerce Tracking",
      "Google Ads Setup",
      "2 Months Technical Support",
    ],
  },
] as const;