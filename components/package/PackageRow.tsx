"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface PackageRowProps {
  badge?: string;
  title: string;
  price: string;
  description: string;
}

export default function PackageRow({
  badge,
  title,
  price,
  description,
}: PackageRowProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        x: 8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        overflow-hidden

        rounded-[32px]

        border
        border-white/10

        bg-white/[0.03]

        p-10

        backdrop-blur-xl
      "
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[220px_1fr_auto] items-center">

        <div>

          {badge && (
            <div className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-blue-300">
              {badge}
            </div>
          )}

          <h3 className="text-4xl font-semibold text-white">
            {title}
          </h3>

        </div>

        <div>

          <p className="max-w-xl text-xl leading-9 text-white/60">
            {description}
          </p>

        </div>

        <div className="text-right">

          <div className="text-sm uppercase tracking-[0.3em] text-white/40">
            Starting from
          </div>

          <div className="mt-3 text-5xl font-semibold text-white">
            {price}
          </div>

          <button
            className="
              mt-8
              flex
              items-center
              gap-3

              text-white

              transition-all
              duration-300

              group-hover:translate-x-2
            "
          >
            View Package

            <ArrowRight size={20} />
          </button>

        </div>

      </div>

    </motion.div>
  );
}