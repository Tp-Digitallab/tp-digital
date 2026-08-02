export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We learn about your business, goals and target audience.",
  },

  {
    id: 2,
    title: "Strategy & Design",
    description:
      "We create the structure, modern UI and user experience.",
  },

  {
    id: 3,
    title: "Development",
    description:
      "We build a fast, responsive and SEO-optimized website.",
  },

  {
    id: 4,
    title: "Launch & Growth",
    description:
      "Your website goes live with analytics, support and marketing.",
  },
];