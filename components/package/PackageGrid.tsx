"use client";

import PackageCard from "./PackageCard";
import { packages } from "@/config/packages";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";


export default function PackageGrid() {

  const { language } = useLanguage();

  const t = translations[language];


  return (
    <div className="mt-20 grid gap-8 lg:grid-cols-3">

      {packages.map((pkg) => {

        const content =
          t.packageCards[pkg.id as "launch" | "business" | "growth"];


        return (
          <PackageCard

            key={pkg.id}

            id={pkg.id}

            badge={
              pkg.featured
                ? language === "de"
                  ? "Beliebtestes Paket"
                  : language === "ru"
                    ? "Популярный выбор"
                    : "Most Popular"
                : undefined
            }

            title={content.name}

            price={`€${pkg.price}`}

            description={content.description}

            features={content.features}

            featured={pkg.featured}

          />
        );

      })}

    </div>
  );
}