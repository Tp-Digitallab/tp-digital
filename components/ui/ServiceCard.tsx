"use client";

import { motion } from "motion/react";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  number,
  title,
  description,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
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
        transition-all
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col justify-between">

        <span className="text-6xl font-semibold text-white/10 transition duration-500 group-hover:text-white/20">
          {number}
        </span>

        <div className="mt-20">

          <h3 className="text-3xl font-medium text-white">
            {title}
          </h3>

          <p className="mt-5 max-w-sm text-lg leading-8 text-white/60">
            {description}
          </p>

          <div className="mt-10 flex items-center gap-3 text-white">

            <span className="text-sm uppercase tracking-[0.25em]">
              Explore
            </span>

            <motion.span
              whileHover={{ x: 8 }}
              transition={{ duration: 0.25 }}
            >
              →
            </motion.span>

          </div>

        </div>

      </div>
    </motion.div>
  );
}