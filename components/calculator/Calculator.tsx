"use client";

import { useEffect, useMemo, useState } from "react";

import StepIndicator from "./StepIndicator";
import Summary from "./Summary";

import WebsiteStep from "./steps/WebsiteStep";
import LanguageStep from "./steps/LanguageStep";
import MarketingStep from "./steps/MarketingStep";
import BrandingStep from "./steps/BrandingStep";
import SupportStep from "./steps/SupportStep";
import { support } from "@/config/support";
import ContactStep from "./steps/ContactStep";
import FeaturesStep from "./steps/FeaturesStep";
import { features } from "@/config/features";
import { packagePresets } from "@/config/packagePresets";


import {
  websiteTypes,
  marketing,
  branding,
} from "@/config/calculator";

export default function Calculator() {
  const [step, setStep] = useState(1);
  const [packagePrice, setPackagePrice] = useState<number | null>(null);
  const [includedMarketing, setIncludedMarketing] = useState<string[]>([]);
const [includedFeatures, setIncludedFeatures] = useState<string[]>([]);
const [includedSupport, setIncludedSupport] = useState<string[]>([]);

  const [includedLanguages, setIncludedLanguages] = useState<string[]>([]);
  
  const [website, setWebsite] = useState(websiteTypes[0]);

  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(["de"]);

  const [selectedMarketing, setSelectedMarketing] = useState<string[]>([]);

  const [selectedBranding, setSelectedBranding] = useState<string[]>([]);

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const [selectedSupport, setSelectedSupport] = useState<string[]>([]);
  const applyPackage = () => {

  const selectedPackage = localStorage.getItem("selectedPackage");

  console.log("PACKAGE FROM STORAGE:", selectedPackage);

  if (!selectedPackage) return;

  const preset =
    packagePresets[selectedPackage as keyof typeof packagePresets];

  if (!preset) return;

  setPackagePrice(preset.price);


  const selectedWebsite = websiteTypes.find(
    (item) => item.id === preset.website
  );

  if (selectedWebsite) {
    setWebsite(selectedWebsite);
  }


setSelectedLanguages(preset.languages);
setIncludedLanguages(preset.languages);

setSelectedMarketing(preset.marketing);
setIncludedMarketing(preset.marketing);

  console.log("MARKETING FROM PRESET:", preset.marketing);

  setSelectedBranding(preset.branding);

setSelectedFeatures(preset.features);
setIncludedFeatures(preset.features);

setSelectedSupport(preset.support);
setIncludedSupport(preset.support);

  setStep(7);

};
useEffect(() => {
  applyPackage();

  window.addEventListener(
    "packageSelected",
    applyPackage
  );

  return () => {
    window.removeEventListener(
      "packageSelected",
      applyPackage
    );
  };

}, []);

  const total = useMemo(() => {
 let price = packagePrice ?? website.price;

  
  selectedLanguages.forEach((language) => {
  if (!includedLanguages.includes(language)) {
    price += 50;
  }
});

 selectedMarketing.forEach((id) => {
  const item = marketing.find((x) => x.id === id);

  if (item && !includedMarketing.includes(id)) {
    price += item.price;
  }
});

 selectedBranding.forEach((id) => {
  const item = branding.find((x) => x.id === id);

  if (item) {
    price += item.price;
  }
});

 selectedFeatures.forEach((id) => {
  const item = features.find((x) => id === x.id);

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
    const item = support.find((x) => x.id === id);

    if (item && !includedSupport.includes(id)) {
  price += item.price;
} 
  });

  return price;
}, [
  selectedSupport,
  includedSupport,
]);



  return (
    <div
      className="
        mt-24
        grid
        gap-14
        lg:grid-cols-[1.35fr_420px]
      "
    >
      {/* LEFT */}

      <div>

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
  />
)}


      </div>

      {/* RIGHT */}

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