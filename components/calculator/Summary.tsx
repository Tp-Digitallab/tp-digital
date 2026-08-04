"use client";

import { useEffect, useRef, useState } from "react";

import Button from "@/components/ui/Button";
import { AnimatePresence, motion } from "motion/react";
import { support as allSupport } from "@/config/support";
import { features as allFeatures } from "@/config/features";

import {
  languages as allLanguages,
  marketing as allMarketing,
  branding as allBranding,
} from "@/config/calculator";

interface SummaryProps {
  website: {
    title: string;
    price: number;
  };

  total: number;
  monthlyTotal: number;

  languages: string[];
  marketing: string[];
  branding: string[];
  features: string[];
  support: string[];
}

export default function Summary({
  website,
  total,
  monthlyTotal,
  languages,
  marketing,
  branding,
  features,
  support,
}: SummaryProps) {
    const [displayPrice, setDisplayPrice] = useState(total);

const [priceChange, setPriceChange] = useState(0);
const [showChange, setShowChange] = useState(false);

const previousPrice = useRef(total);

useEffect(() => {
  const previous = previousPrice.current;

  const diff = total - previous;

  setPriceChange(diff);

  if (diff !== 0) {
    setShowChange(true);

    setTimeout(() => {
      setShowChange(false);
    }, 450);
  }

  previousPrice.current = total;

  const duration = 350;

  const start = performance.now();

  function animate(now: number) {
    const progress = Math.min((now - start) / duration, 1);

    const value = Math.round(
      previous + (total - previous) * progress
    );

    setDisplayPrice(value);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);

}, [total]);

  return (
    <aside
  className="
    lg:sticky
    lg:top-32
    w-[90%]
mx-left
sm:w-full

    rounded-[24px]
    lg:rounded-[32px]

    border
    border-white/10

    bg-gradient-to-b
    from-white/[0.06]
    to-white/[0.02]

    p-5
    sm:p-8
  "
>
      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
        Your Project
      </p>

      <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8">

        {/* Website */}

        <div>

          <p className="text-sm text-white/40">
            Website
          </p>

          <p className="mt-2 text-xl font-semibold text-white">
            {website.title}
          </p>

        </div>

        {/* Languages */}

        <div>

          <p className="text-sm text-white/40">
            Languages
          </p>

          <div className="mt-3 space-y-2">

            {languages.length === 0 ? (
              <p className="text-white/30">—</p>
            ) : (
              languages.map((id) => {
                const item = allLanguages.find(
                  (x) => x.id === id
                );

                return (
                  <p
                    key={id}
                    className="text-sm sm:text-base text-white/70"
                  >
                    • {item?.title}
                  </p>
                );
              })
            )}

          </div>

        </div>

        {/* Marketing */}

        <div>

          <p className="text-sm text-white/40">
            Marketing
          </p>

          <div className="mt-3 space-y-2">

            {marketing.length === 0 ? (
              <p className="text-white/30">—</p>
            ) : (
              marketing.map((id) => {
                const item = allMarketing.find(
                  (x) => x.id === id
                );

                return (
                  <p
                    key={id}
                    className="text-sm sm:text-base text-white/70"
                  >
                    • {item?.title}
                  </p>
                );
              })
            )}

          </div>

        </div>

        {/* Branding */}

        <div>

          <p className="text-sm text-white/40">
            Branding
          </p>

          <div className="mt-3 space-y-2">

            {branding.length === 0 ? (
              <p className="text-white/30">—</p>
            ) : (
              branding.map((id) => {
                const item = allBranding.find(
                  (x) => x.id === id
                );

                return (
                  <p
                    key={id}
                    className="text-sm sm:text-base text-white/70"
                  >
                    • {item?.title}
                  </p>
                );
              })
            )}

          </div>

        </div>


        

{/* Website Features */}

<div>

  <p className="text-sm text-white/40">
    Website Features
  </p>

  <div className="mt-3 space-y-2">

    {features.length === 0 ? (
      <p className="text-white/30">—</p>
    ) : (
      features.map((id) => {
        const item = allFeatures.find((x) => x.id === id);

        return (
          <p
            key={id}
           className="text-sm sm:text-base text-white/70"
          >
            • • {item?.title} (+€{item?.price})
          </p>
        );
      })
    )}

  </div>

</div>

      </div>
{/* Monthly Services */}

<div>

  <p className="text-sm text-white/40">
    Monthly Services
  </p>

  <div className="mt-3 space-y-2">

    {support.length === 0 ? (
      <p className="text-white/30">—</p>
    ) : (
      support.map((id) => {
        const item = allSupport.find((x) => x.id === id);

        return (
          <p
            key={id}
           className="text-sm sm:text-base text-white/70"
          >
            • {item?.title}
          </p>
        );
      })
    )}

  </div>

</div>
<div className="my-10 h-px bg-white/10" />

<div className="relative">

  <AnimatePresence mode="wait">

    {showChange && priceChange !== 0 && (

      <motion.div
        key={priceChange}

        initial={{
          opacity: 0,
          y: 18,
          scale: 0.8,
        }}

        animate={{
          opacity: 1,
          y: -12,
          scale: 1,
        }}

        exit={{
          opacity: 0,
          y: -40,
          scale: 0.9,
        }}

        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}

        className={`
          absolute
          left-0
          -top-8
          z-20

          rounded-full

          px-4
          py-1.5

          text-sm
          font-semibold

          backdrop-blur-xl

          ${
            priceChange > 0
              ? "border border-green-400/30 bg-green-500/15 text-green-300"
              : "border border-red-400/30 bg-red-500/15 text-red-300"
          }
        `}
      >
        {priceChange > 0 ? "+" : "-"}€{Math.abs(priceChange)}
      </motion.div>

    )}

  </AnimatePresence>

  <p className="text-white/45">
    Estimated Price
  </p>

  <motion.h2
    key={displayPrice}

    initial={{
      scale: 0.96,
    }}

    animate={{
      scale: [1, 1.05, 1],
    }}

    transition={{
      duration: 0.25,
    }}

    className="
      mt-4

      text-5xl sm:text-6xl
      font-bold

      text-white
    "
  >
    €{displayPrice}
  </motion.h2>

</div>
<div
  className="
    mt-8

    rounded-2xl

    border
    border-white/10

    bg-white/[0.03]

    p-5
  "
>

  <p className="text-sm text-white/45">
    Monthly Services
  </p>

  <p className="mt-2 text-3xl font-semibold text-white">
    €{monthlyTotal}

    <span className="text-lg text-white/45">
      {" "}
      / month
    </span>

  </p>

</div>
<div className="mt-10">
</div>
    </aside>
  );
}