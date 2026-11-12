import type { MetadataRoute } from "next";
import { siteUrl, homeLanguages } from "@/config/seo";
import { locales, homePath } from "@/lib/locale-paths";

const services = ["webdesign", "seo", "online-shop", "digitale-loesungen"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...locales.map(locale => ({
      url: `${siteUrl}${homePath(locale)}`,
      alternates: { languages: homeLanguages },
    })),
    ...services.flatMap(service => {
      const languages = {
        de: `${siteUrl}/de/${service}`,
        en: `${siteUrl}/en/${service}`,
        ru: `${siteUrl}/ru/${service}`,
        "x-default": `${siteUrl}/de/${service}`,
      };
      return locales.map(locale => ({ url: languages[locale], alternates: { languages } }));
    }),
    ...["website-nagelstudio", "website-handwerker", "website-cafe", "wordpress-wartung-muenchen", "seo-audit-muenchen"].map(slug => ({ url: `${siteUrl}/${slug}` })),
    { url: `${siteUrl}/impressum` },
    { url: `${siteUrl}/datenschutzerklaerung` },
  ];
}
