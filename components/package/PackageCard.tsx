"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/Button";

interface PackageCardProps {
  id: string;
  badge?: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export default function PackageCard({
  id,
  badge,
  title,
  price,
  description,
  features,
  featured,
}: PackageCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[34px]
        border
        backdrop-blur-2xl
        transition-all

        ${
          featured
            ? "border-blue-500/40 bg-white/[0.08] lg:-mt-8"
            : "border-white/10 bg-white/[0.03]"
        }
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10 p-10">

        {badge && (
          <div className="mb-8 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
            {badge}
          </div>
        )}

        <h3 className="text-3xl font-semibold text-white">
          {title}
        </h3>

        <div className="mt-8 flex items-end gap-2">

          <span className="text-6xl font-semibold text-white">
            {price}
          </span>

          <span className="mb-2 text-white/40">
            from
          </span>

        </div>

        <p className="mt-8 text-lg leading-8 text-white/60">
          {description}
        </p>

        <div className="my-10 h-px bg-white/10" />

        <div className="space-y-5">

          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-4"
            >
              <div className="h-2 w-2 rounded-full bg-blue-400" />

              <span className="text-white/85">
                {feature}
              </span>
            </div>
          ))}

        </div>

        <div className="mt-12">

          <Button
  href="#calculator"
  onClick={() => {
    localStorage.setItem("selectedPackage", id);

    window.dispatchEvent(
      new Event("packageSelected")
    );
  }}
>
  Choose Plan
</Button>

        </div>

      </div>
    </motion.div>
  );
}