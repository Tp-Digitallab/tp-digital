"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import StepIndicator from "./StepIndicator";
import Summary from "./Summary";

import BrandingStep from "./steps/BrandingStep";
import ContactStep from "./steps/ContactStep";
import FeaturesStep from "./steps/FeaturesStep";
import LanguageStep from "./steps/LanguageStep";
import MarketingStep from "./steps/MarketingStep";
import SupportStep from "./steps/SupportStep";
import WebsiteStep from "./steps/WebsiteStep";

import {
  branding,
  marketing,
  websiteTypes,
} from "@/config/calculator";
import { features } from "@/config/features";
import { packagePresets } from "@/config/packagePresets";
import { support } from "@/config/support";

type PackageId =
  keyof typeof packagePresets;

type WebsiteType =
  (typeof websiteTypes)[number];

export default function Calculator() {
  const [step, setStep] =
    useState(1);

  const [
    selectedPackageId,
    setSelectedPackageId,
  ] = useState<PackageId | null>(
    null
  );

  const [
    packagePrice,
    setPackagePrice,
  ] = useState<number | null>(
    null
  );

  const [
    includedLanguages,
    setIncludedLanguages,
  ] = useState<string[]>([]);

  const [
    includedMarketing,
    setIncludedMarketing,
  ] = useState<string[]>([]);

  const [
    includedFeatures,
    setIncludedFeatures,
  ] = useState<string[]>([]);

  const [
    includedSupport,
    setIncludedSupport,
  ] = useState<string[]>([]);

  const [website, setWebsite] =
    useState<WebsiteType>(
      websiteTypes[0]
    );

  const [
    selectedLanguages,
    setSelectedLanguages,
  ] = useState<string[]>(["de"]);

  const [
    selectedMarketing,
    setSelectedMarketing,
  ] = useState<string[]>([]);

  const [
    selectedBranding,
    setSelectedBranding,
  ] = useState<string[]>([]);

  const [
    selectedFeatures,
    setSelectedFeatures,
  ] = useState<string[]>([]);

  const [
    selectedSupport,
    setSelectedSupport,
  ] = useState<string[]>([]);

  const isCustomWork =
    website.id === "custom";

  function clearPackageSelection() {
    localStorage.removeItem(
      "selectedPackage"
    );

    setSelectedPackageId(null);
    setPackagePrice(null);

    setIncludedLanguages([]);
    setIncludedMarketing([]);
    setIncludedFeatures([]);
    setIncludedSupport([]);
  }

  function handleWebsiteChange(
    newWebsite: WebsiteType
  ) {
    clearPackageSelection();

    setWebsite(newWebsite);

    if (newWebsite.id === "custom") {
      setSelectedLanguages(["de"]);
      setSelectedMarketing([]);
      setSelectedBranding([]);
      setSelectedFeatures([]);
      setSelectedSupport([]);
    }
  }

  function handleWebsiteNext() {
    if (isCustomWork) {
      setStep(7);
      return;
    }

    setStep(2);
  }

  function handleContactBack() {
    if (isCustomWork) {
      setStep(1);
      return;
    }

    setStep(6);
  }

  function applyPackage() {
    const storedPackage =
      localStorage.getItem(
        "selectedPackage"
      );

    if (!storedPackage) {
      return;
    }

    if (
      !(
        storedPackage in
        packagePresets
      )
    ) {
      return;
    }

    const packageId =
      storedPackage as PackageId;

    const preset =
      packagePresets[packageId];

    setSelectedPackageId(
      packageId
    );

    setPackagePrice(
      preset.price
    );

    const selectedWebsite =
      websiteTypes.find(
        (item) =>
          item.id ===
          preset.website
      );

    if (selectedWebsite) {
      setWebsite(
        selectedWebsite
      );
    }

    setSelectedLanguages([
      ...preset.languages,
    ]);

    setIncludedLanguages([
      ...preset.languages,
    ]);

    setSelectedMarketing([
      ...preset.marketing,
    ]);

    setIncludedMarketing([
      ...preset.marketing,
    ]);

    setSelectedBranding([
      ...preset.branding,
    ]);

    setSelectedFeatures([
      ...preset.features,
    ]);

    setIncludedFeatures([
      ...preset.features,
    ]);

    setSelectedSupport([
      ...preset.support,
    ]);

    setIncludedSupport([
      ...preset.support,
    ]);

    setStep(7);
  }

  useEffect(() => {
    function handlePackageSelected() {
      applyPackage();
    }

    const storedPackage =
      localStorage.getItem(
        "selectedPackage"
      );

    if (storedPackage) {
      queueMicrotask(
        handlePackageSelected
      );
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
    if (
      website.id === "custom"
    ) {
      return 0;
    }

    let price =
      packagePrice ??
      website.price;

    const includedLanguageCount =
      packagePrice === null
        ? 1
        : Math.max(
            1,
            includedLanguages.length
          );

    const paidLanguages =
      Math.max(
        0,
        selectedLanguages.length -
          includedLanguageCount
      );

    price +=
      paidLanguages * 50;

    selectedMarketing.forEach(
      (id) => {
        const item =
          marketing.find(
            (
              marketingItem
            ) =>
              marketingItem.id ===
              id
          );

        if (
          item &&
          !includedMarketing.includes(
            id
          )
        ) {
          price += item.price;
        }
      }
    );

    selectedBranding.forEach(
      (id) => {
        const item =
          branding.find(
            (
              brandingItem
            ) =>
              brandingItem.id ===
              id
          );

        if (item) {
          price += item.price;
        }
      }
    );

    selectedFeatures.forEach(
      (id) => {
        const item =
          features.find(
            (
              featureItem
            ) =>
              featureItem.id ===
              id
          );

        if (
          item &&
          !includedFeatures.includes(
            id
          )
        ) {
          price += item.price;
        }
      }
    );

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

  const monthlyTotal =
    useMemo(() => {
      if (
        website.id === "custom"
      ) {
        return 0;
      }

      let price = 0;

      selectedSupport.forEach(
        (id) => {
          const item =
            support.find(
              (
                supportItem
              ) =>
                supportItem.id ===
                id
            );

          if (
            item &&
            !includedSupport.includes(
              id
            )
          ) {
            price += item.price;
          }
        }
      );

      return price;
    }, [
      website,
      selectedSupport,
      includedSupport,
    ]);

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
      {/* Left side */}

      <div className="min-h-0">
        <StepIndicator
          step={step}
        />

        {step === 1 && (
          <WebsiteStep
            website={website}
            setWebsite={
              handleWebsiteChange
            }
            next={
              handleWebsiteNext
            }
          />
        )}

        {step === 2 && (
          <LanguageStep
            selected={
              selectedLanguages
            }
            setSelected={
              setSelectedLanguages
            }
            back={() =>
              setStep(1)
            }
            next={() =>
              setStep(3)
            }
          />
        )}

        {step === 3 && (
          <MarketingStep
            selected={
              selectedMarketing
            }
            setSelected={
              setSelectedMarketing
            }
            back={() =>
              setStep(2)
            }
            next={() =>
              setStep(4)
            }
          />
        )}

        {step === 4 && (
          <BrandingStep
            selected={
              selectedBranding
            }
            setSelected={
              setSelectedBranding
            }
            back={() =>
              setStep(3)
            }
            next={() =>
              setStep(5)
            }
          />
        )}

        {step === 5 && (
          <FeaturesStep
            selected={
              selectedFeatures
            }
            setSelected={
              setSelectedFeatures
            }
            back={() =>
              setStep(4)
            }
            next={() =>
              setStep(6)
            }
          />
        )}

        {step === 6 && (
          <SupportStep
            selected={
              selectedSupport
            }
            setSelected={
              setSelectedSupport
            }
            back={() =>
              setStep(5)
            }
            next={() =>
              setStep(7)
            }
          />
        )}

        {step === 7 && (
          <ContactStep
            back={
              handleContactBack
            }
            quote={{
              packageId:
                selectedPackageId,

              websiteId:
                website.id,

              languages:
                selectedLanguages,

              marketing:
                selectedMarketing,

              branding:
                selectedBranding,

              features:
                selectedFeatures,

              support:
                selectedSupport,

              total,

              monthlyTotal,
            }}
          />
        )}
      </div>

      {/* Right side */}

      <Summary
        website={website}
        total={total}
        monthlyTotal={
          monthlyTotal
        }
        languages={
          selectedLanguages
        }
        marketing={
          selectedMarketing
        }
        branding={
          selectedBranding
        }
        features={
          selectedFeatures
        }
        support={
          selectedSupport
        }
      />
    </div>
  );
}