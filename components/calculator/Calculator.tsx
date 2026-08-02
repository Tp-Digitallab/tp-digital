"use client";

import { useMemo, useState } from "react";

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

import {
  websiteTypes,
  marketing,
  branding,
} from "@/config/calculator";

export default function Calculator() {
  const [step, setStep] = useState(1);

  const [website, setWebsite] = useState(websiteTypes[0]);

  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(["de"]);

  const [selectedMarketing, setSelectedMarketing] = useState<string[]>([]);

  const [selectedBranding, setSelectedBranding] = useState<string[]>([]);

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const [selectedSupport, setSelectedSupport] = useState<string[]>([]);

  const total = useMemo(() => {
  let price = website.price;

  // Первый язык включен в стоимость
  selectedLanguages.slice(1).forEach(() => {
    price += 50;
  });

  selectedMarketing.forEach((id) => {
    const item = marketing.find((x) => x.id === id);

    if (item) {
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
  const item = features.find((x) => x.id === id);

  if (item) {
    price += item.price;
  }
});

  return price;
}, [
  website,
  selectedLanguages,
  selectedMarketing,
  selectedBranding,
  selectedFeatures,
]
);

const monthlyTotal = useMemo(() => {
  let price = 0;

  selectedSupport.forEach((id) => {
    const item = support.find((x) => x.id === id);

    if (item) {
      price += item.price;
    }
  });

  return price;
}, [selectedSupport]);



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