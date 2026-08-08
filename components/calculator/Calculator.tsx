"use client";

import { useEffect, useMemo, useState } from "react";

import StepIndicator from "./StepIndicator";
import Summary from "./Summary";

import WebsiteStep from "./steps/WebsiteStep";
import LanguageStep from "./steps/LanguageStep";
import MarketingStep from "./steps/MarketingStep";
import BrandingStep from "./steps/BrandingStep";
import FeaturesStep from "./steps/FeaturesStep";
import SupportStep from "./steps/SupportStep";
import ContactStep from "./steps/ContactStep";

import { websiteTypes, marketing, branding } from "@/config/calculator";
import { features } from "@/config/features";
import { support } from "@/config/support";
import { packagePresets } from "@/config/packagePresets";

type PackageId = keyof typeof packagePresets;

export default function Calculator() {
  const [step, setStep] = useState(1);

  const [selectedPackageId, setSelectedPackageId] =
    useState<PackageId | null>(null);

  const [packagePrice, setPackagePrice] = useState<number | null>(null);

  const [includedLanguages, setIncludedLanguages] = useState<string[]>([]);
  const [includedMarketing, setIncludedMarketing] = useState<string[]>([]);
  const [includedFeatures, setIncludedFeatures] = useState<string[]>([]);
  const [includedSupport, setIncludedSupport] = useState<string[]>([]);

  const [website, setWebsite] = useState(websiteTypes[0]);

  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([
    "de",
  ]);

  const [selectedMarketing, setSelectedMarketing] = useState<string[]>([]);
  const [selectedBranding, setSelectedBranding] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedSupport, setSelectedSupport] = useState<string[]>([]);

  function applyPackage() {
    const storedPackage = localStorage.getItem("selectedPackage");

    if (!storedPackage) {
      return;
    }

    if (!(storedPackage in packagePresets)) {
      return;
    }

    const packageId = storedPackage as PackageId;
    const preset = packagePresets[packageId];

    setSelectedPackageId(packageId);
    setPackagePrice(preset.price);

    const selectedWebsite = websiteTypes.find(
      (item) => item.id === preset.website
    );

    if (selectedWebsite) {
      setWebsite(selectedWebsite);
    }

    setSelectedLanguages([...preset.languages]);
    setIncludedLanguages([...preset.languages]);

    setSelectedMarketing([...preset.marketing]);
    setIncludedMarketing([...preset.marketing]);

    setSelectedBranding([...preset.branding]);

    setSelectedFeatures([...preset.features]);
    setIncludedFeatures([...preset.features]);

    setSelectedSupport([...preset.support]);
    setIncludedSupport([...preset.support]);

    setStep(7);
  }

  useEffect(() => {
    const handlePackageSelected = () => {
      applyPackage();
    };

    const storedPackage = localStorage.getItem("selectedPackage");

    if (storedPackage) {
      queueMicrotask(handlePackageSelected);
    }

    window.addEventListener(
      "packageSelected",
      handlePackageSelected
    );

    return () => {
      window.removeEventListener(
        "packageSelected",
        handlePackageSelected
      );
    };
  }, []);

  const total = useMemo(() => {
    let price = packagePrice ?? website.price;

    const includedLanguageCount =
      packagePrice === null
        ? 1
        : Math.max(1, includedLanguages.length);

    const paidLanguages = Math.max(
      0,
      selectedLanguages.length - includedLanguageCount
    );

    price += paidLanguages * 50;

    selectedMarketing.forEach((id) => {
      const item = marketing.find(
        (marketingItem) => marketingItem.id === id
      );

      if (item && !includedMarketing.includes(id)) {
        price += item.price;
      }
    });

    selectedBranding.forEach((id) => {
      const item = branding.find(
        (brandingItem) => brandingItem.id === id
      );

      if (item) {
        price += item.price;
      }
    });

    selectedFeatures.forEach((id) => {
      const item = features.find(
        (featureItem) => featureItem.id === id
      );

      if (item && !includedFeatures.includes(id)) {
        price += item.price;
      }
    });

    return price;
  }, [
    website,
    packagePrice,
    selectedLanguages,
    includedLanguages,
    selectedMarketing,
    includedMarketing,
    selectedBranding,
    selectedFeatures,
    includedFeatures,
  ]);

  const monthlyTotal = useMemo(() => {
    let price = 0;

    selectedSupport.forEach((id) => {
      const item = support.find(
        (supportItem) => supportItem.id === id
      );

      if (item && !includedSupport.includes(id)) {
        price += item.price;
      }
    });

    return price;
  }, [selectedSupport, includedSupport]);

  return (
    <div
      className="
        mt-16
        grid
        w-full
        max-w-full
        gap-10
        overflow-hidden
        lg:grid-cols-[1.35fr_420px]
      "
    >
      {/* LEFT SIDE */}

      <div className="min-h-0">
        <StepIndicator step={step} />

        {step === 1 && (
          <WebsiteStep
            website={website}
            setWebsite={setWebsite}
            next={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <LanguageStep
            selected={selectedLanguages}
            setSelected={setSelectedLanguages}
            back={() => setStep(1)}
            next={() => setStep(3)}
          />
        )}

        {step === 3 && (
          <MarketingStep
            selected={selectedMarketing}
            setSelected={setSelectedMarketing}
            back={() => setStep(2)}
            next={() => setStep(4)}
          />
        )}

        {step === 4 && (
          <BrandingStep
            selected={selectedBranding}
            setSelected={setSelectedBranding}
            back={() => setStep(3)}
            next={() => setStep(5)}
          />
        )}

        {step === 5 && (
          <FeaturesStep
            selected={selectedFeatures}
            setSelected={setSelectedFeatures}
            back={() => setStep(4)}
            next={() => setStep(6)}
          />
        )}

        {step === 6 && (
          <SupportStep
            selected={selectedSupport}
            setSelected={setSelectedSupport}
            back={() => setStep(5)}
            next={() => setStep(7)}
          />
        )}

        {step === 7 && (
          <ContactStep
            back={() => setStep(6)}
            quote={{
              packageId: selectedPackageId,
              websiteId: website.id,
              languages: selectedLanguages,
              marketing: selectedMarketing,
              branding: selectedBranding,
              features: selectedFeatures,
              support: selectedSupport,
              total,
              monthlyTotal,
            }}
          />
        )}
      </div>

      {/* RIGHT SIDE */}

      <Summary
        website={website}
        total={total}
        monthlyTotal={monthlyTotal}
        languages={selectedLanguages}
        marketing={selectedMarketing}
        branding={selectedBranding}
        features={selectedFeatures}
        support={selectedSupport}
      />
    </div>
  );
}