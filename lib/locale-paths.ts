export const locales = ["de", "en", "ru"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function homePath(locale: Locale) {
  return locale === "de" ? "/" : `/${locale}`;
}

export function isHomePath(pathname: string | null) {
  return pathname === "/" || /^\/(de|en|ru)\/?$/.test(pathname ?? "");
}

export function localizedPath(pathname: string, locale: Locale) {
  if (isHomePath(pathname)) return homePath(locale);
  if (/^\/(de|en|ru)(?=\/|$)/.test(pathname)) {
    return pathname.replace(/^\/(de|en|ru)/, `/${locale}`);
  }
  if (/^\/(webdesign|seo|online-shop|digitale-loesungen)$/.test(pathname)) {
    return `/${locale}${pathname}`;
  }
  return null;
}
