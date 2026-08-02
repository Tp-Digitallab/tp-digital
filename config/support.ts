export interface Support {
  id: string;
  title: string;
  description: string;
  price: number;
}

export const support: Support[] = [
  {
    id: "website",
    title: "Website Maintenance",
    description:
      "Updates, backups, security monitoring and priority support.",
    price: 150,
  },

  {
    id: "ads",
    title: "Google Ads Management",
    description:
      "Campaign optimization, reports and continuous improvements.",
    price: 150,
  },
];