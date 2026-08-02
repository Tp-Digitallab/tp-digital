export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  website: string;
  status: "live" | "coming-soon";
}

export const projects: Project[] = [
  {
    id: "exzellentia",
    title: "Exzellentia Constructio",
    category: "Construction Company",
    description:
      "Premium website, SEO optimization and Google Ads management.",
    technologies: [
      "Next.js",
      "SEO",
      "Google Ads",
    ],
    image: "/projects/exzellentia.png",
    website: "https://exzellentia-constructio.de",
    status: "live",
  },

  {
    id: "grabprofi",
    title: "GrabProfi",
    category: "Grave Care",
    description:
      "Professional website with local SEO and customer communication.",
    technologies: [
      "Landing Page",
      "Local SEO",
      "WhatsApp",
    ],
    image: "/projects/grabpflege.png",
    website: "https://grabprofi.de",
    status: "live",
  },
];