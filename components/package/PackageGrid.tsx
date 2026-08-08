"use client";

import PackageCard from "./PackageCard";

import { packages } from "@/config/packages";
import { packageTranslations } from "@/config/packageTranslations";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function PackageGrid() {
  const { language } = useLanguage();

  const content =
    packageTranslations[language];

  const numberLocale =
    language === "de"
      ? "de-DE"
      : language === "ru"
        ? "ru-RU"
        : "en-US";

  function formatPrice(
    price: number
  ) {
    return new Intl.NumberFormat(
      numberLocale,
      {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }
    ).format(price);
  }

  return (
    <div className="mt-20 grid gap-8 lg:grid-cols-3">
      {packages.map((pkg) => {
        const packageContent =
          content.packages[
            pkg.id
          ];

        return (
          <PackageCard
            key={pkg.id}
            id={pkg.id}
            badge={
              pkg.featured
                ? content.popularBadge
                : undefined
            }
            title={
              packageContent.name
            }
            price={formatPrice(
              pkg.price
            )}
            description={
              packageContent.description
            }
            features={
              packageContent.features
            }
            featured={
              pkg.featured
            }
          />
        );
      })}
    </div>
  );
}