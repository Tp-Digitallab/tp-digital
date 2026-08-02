export const siteConfig = {
  name: "TP Digital Lab",

  shortName: "TPDL",

  description: "",

  url: "",

  email: "",

  phone: "",

  location: "",

  links: {
    github: "",
    linkedin: "",
    instagram: "",
    behance: "",
  },

  author: {
    name: "Taras Pakhaliuk",
  },
} as const;

export type SiteConfig = typeof siteConfig;