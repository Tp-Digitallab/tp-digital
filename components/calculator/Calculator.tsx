"use client";
import dynamic from "next/dynamic";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import type Lenis from "lenis";

import StepIndicator from "./StepIndicator";
import Summary from "./Summary";

import BrandingStep from "./steps/BrandingStep";

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
const ContactStep = dynamic(
  () => import("./steps/ContactStep"),
  {
    loading: () => (
      <div
        role="status"
        aria-busy="true"
        className="min-h-[480px] rounded-3xl border border-white/10 bg-[#0b0d12] p-6"
      >
        <span className="sr-only">
          Formular wird geladen / Loading form / Загрузка формы
        </span>

        <div
          aria-hidden="true"
          className="space-y-5 motion-safe:animate-pulse"
        >
          <div className="h-8 w-2/3 rounded-lg bg-white/10" />
          <div className="h-5 w-full rounded-lg bg-white/5" />

          <div className="grid gap-4 pt-4 sm:grid-cols-2">
            <div className="h-16 rounded-2xl bg-white/5" />
            <div className="h-16 rounded-2xl bg-white/5" />
          </div>

          <div className="h-16 rounded-2xl bg-white/5" />
          <div className="h-32 rounded-2xl bg-white/5" />
        </div>
      </div>
    ),
  }
);

type PackageId = keyof typeof packagePresets;

type WebsiteType = (typeof websiteTypes)[number];

type WindowWithLenis = Window & {
  lenis?: Lenis;
};

export default function Calculator() {
  const calculatorRef = useRef<HTMLDivElement>(null);
  const previousStep = useRef(1);

  const [step, setStep] = useState(1);

  const [selectedPackageId, setSelectedPackageId] =
    useState<PackageId | null>(null);

  const [packagePrice, setPackagePrice] =
    useState<number | null>(null);

  const [includedLanguages, setIncludedLanguages] =
    useState<string[]>([]);

  const [includedMarketing, setIncludedMarketing] =
    useState<string[]>([]);

  const [includedFeatures, setIncludedFeatures] =
    useState<string[]>([]);

  const [includedSupport, setIncludedSupport] =
    useState<string[]>([]);

  const [website, setWebsite] =
    useState<WebsiteType>(websiteTypes[0]);

  const [selectedLanguages, setSelectedLanguages] =
    useState<string[]>(["de"]);

  const [selectedMarketing, setSelectedMarketing] =
    useState<string[]>([]);

  const [selectedBranding, setSelectedBranding] =
    useState<string[]>([]);

  const [selectedFeatures, setSelectedFeatures] =
    useState<string[]>([]);

  const [selectedSupport, setSelectedSupport] =
    useState<string[]>([]);

  const isCustomWork = website.id === "custom";

  function clearPackageSelection() {
    try {
      window.localStorage.removeItem("selectedPackage");
    } catch {
      // Калькулятор работает и при недоступном хранилище.
    }

    setSelectedPackageId(null);
    setPackagePrice(null);

    setIncludedLanguages([]);
    setIncludedMarketing([]);
    setIncludedFeatures([]);
    setIncludedSupport([]);
  }

    function handleWebsiteChange(newWebsite: WebsiteType) {
    if (newWebsite.id === website.id) {
      return;
    }

    clearPackageSelection();
    setWebsite(newWebsite);

    setSelectedLanguages(["de"]);
    setSelectedMarketing([]);
    setSelectedBranding([]);
    setSelectedFeatures([]);
    setSelectedSupport([]);

    if (newWebsite.id === "custom") {
      return;
    }

    const packageId = (
      Object.keys(packagePresets) as PackageId[]
    ).find(
      (id) => packagePresets[id].website === newWebsite.id
    );

    if (!packageId) {
      return;
    }

    const preset = packagePresets[packageId];

    setSelectedPackageId(packageId);
    setPackagePrice(preset.price);

    setSelectedLanguages([...preset.languages]);
    setIncludedLanguages([...preset.languages]);

    setSelectedMarketing([...preset.marketing]);
    setIncludedMarketing([...preset.marketing]);

    setSelectedBranding([...preset.branding]);

    setSelectedFeatures([...preset.features]);
    setIncludedFeatures([...preset.features]);

    setSelectedSupport([...preset.support]);
    setIncludedSupport([...preset.support]);
  }

  function handleWebsiteNext() {
    setStep(isCustomWork ? 7 : 2);
  }

  function handleContactBack() {
    setStep(isCustomWork ? 1 : 6);
  }

  // Пакет применяется только после нажатия на его кнопку.
  // При загрузке страницы сохранённый пакет не восстанавливается.
  useEffect(() => {
    function handlePackageSelected() {
      let storedPackage: string | null = null;

      try {
        storedPackage =
          window.localStorage.getItem("selectedPackage");
      } catch {
        return;
      }

      if (
        !storedPackage ||
        !Object.prototype.hasOwnProperty.call(
          packagePresets,
          storedPackage
        )
      ) {
        return;
      }

      const packageId = storedPackage as PackageId;
      const preset = packagePresets[packageId];

      const selectedWebsite = websiteTypes.find(
        (item) => item.id === preset.website
      );

      if (!selectedWebsite) {
        return;
      }

      setSelectedPackageId(packageId);
      setPackagePrice(preset.price);
      setWebsite(selectedWebsite);

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

  // После обновления главной страницы показываем её начало.
  useEffect(() => {
    const navigation = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming | undefined;

    if (navigation?.type !== "reload") {
      return;
    }

    const previousScrollRestoration =
      window.history.scrollRestoration;

    window.history.scrollRestoration = "manual";

    window.history.replaceState(
      window.history.state,
      "",
      window.location.pathname + window.location.search
    );

    function scrollToTop() {
      const browserWindow =
        window as unknown as WindowWithLenis;

      if (browserWindow.lenis) {
        browserWindow.lenis.scrollTo(0, {
          immediate: true,
        });
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
      }
    }

    scrollToTop();

    const frameId =
      window.requestAnimationFrame(scrollToTop);

    return () => {
      window.cancelAnimationFrame(frameId);

      window.history.scrollRestoration =
        previousScrollRestoration;
    };
  }, []);

  // Прокрутка к калькулятору только при изменении шага.
  useEffect(() => {
    if (previousStep.current === step) {
      return;
    }

    previousStep.current = step;

    const animationFrameId =
      window.requestAnimationFrame(() => {
        const calculatorElement = calculatorRef.current;

        if (!calculatorElement) {
          return;
        }

        const browserWindow =
          window as unknown as WindowWithLenis;

        const reducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        if (browserWindow.lenis) {
          browserWindow.lenis.scrollTo(
            calculatorElement,
            {
              duration: 0.7,
              offset: -96,
              immediate: reducedMotion,
            }
          );

          return;
        }

        calculatorElement.scrollIntoView({
          behavior: reducedMotion ? "instant" : "smooth",
          block: "start",
        });
      });

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [step]);

  const total = useMemo(() => {
    if (website.id === "custom") {
      return 0;
    }

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
    if (website.id === "custom") {
      return 0;
    }

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
  }, [
    website,
    selectedSupport,
    includedSupport,
  ]);

  return (
    <div
      ref={calculatorRef}
      className="mt-16 grid w-full max-w-full scroll-mt-24 gap-10 overflow-hidden lg:grid-cols-[minmax(0,1.35fr)_420px]"
    >
      <div className="min-h-0 min-w-0">
        <StepIndicator step={step} />

        {step === 1 && (
          <WebsiteStep
            website={website}
            setWebsite={handleWebsiteChange}
            next={handleWebsiteNext}
          />
        )}

        {step === 2 && (
                    <LanguageStep
            selected={selectedLanguages}
            setSelected={setSelectedLanguages}
            includedCount={
              packagePrice === null
                ? 1
                : Math.max(1, includedLanguages.length)
            }
            back={() => setStep(1)}
            next={() => setStep(3)}
          />
        )}

        {step === 3 && (
                    <MarketingStep
            selected={selectedMarketing}
            setSelected={setSelectedMarketing}
            includedIds={includedMarketing}
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
            includedIds={includedFeatures}
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
            back={handleContactBack}
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

      <Summary
        website={website}
        total={total}
        monthlyTotal={monthlyTotal}
        languages={selectedLanguages}
        marketing={selectedMarketing}
        branding={selectedBranding}
        features={selectedFeatures}
        includedFeatures={includedFeatures}
        support={selectedSupport}
      />
    </div>
  );
}