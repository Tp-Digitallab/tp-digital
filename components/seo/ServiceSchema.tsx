interface Offer {
  name: string;
  price: number;
}

interface Props {
  name: string;
  description: string;
  url: string;
  offers?: Offer[];
  inLanguage?: string;
}

export default function ServiceSchema({ name, description, url, offers, inLanguage }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      "@id": "https://tpdigitallab.de/#organization",
      name: "TP Digital Lab",
      url: "https://tpdigitallab.de",
    },
    areaServed: { "@type": "Country", name: "Deutschland" },
    url,
    ...(inLanguage ? { inLanguage } : {}),
    ...(offers?.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name,
            itemListElement: offers.map((offer) => ({
              "@type": "Offer",
              name: offer.name,
              price: offer.price,
              priceCurrency: "EUR",
              url,
            })),
          },
        }
      : {}),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
