"use client";

import { motion } from "motion/react";
import ScrollLink from "@/components/ui/ScrollLink";

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
  y: -10,
  scale: 1.03,
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

  bg-gradient-to-br
  from-white/[0.06]
  via-white/[0.03]
  to-white/[0.01]

  p-10

  backdrop-blur-2xl

  shadow-[0_0_0_rgba(59,130,246,0)]

  transition-all
  duration-500

  hover:border-blue-400/30
  hover:shadow-[0_0_45px_rgba(59,130,246,0.18)]
"
      
    >
      <div
  className="
    absolute
    inset-0

    bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_45%)]

    opacity-0

    transition-all
    duration-500

    group-hover:opacity-100
  "
/>

      <div className="relative z-10 flex h-full flex-col justify-between">

        <span
  className="
    text-6xl
    font-semibold

    text-white/10

    transition-all
    duration-500

    group-hover:scale-110
    group-hover:text-blue-300/30
  "
>
          {number}
        </span>

        <div className="mt-20">

          <h3 className="text-3xl font-medium text-white">
            {title}
          </h3>

          <p className="mt-5 max-w-sm text-lg leading-8 text-white/60">
            {description}
          </p>

         <ScrollLink
  href="#calculator"
  className="mt-10 inline-flex items-center gap-3 !text-white group/link"
>
  <span className="text-sm uppercase tracking-[0.25em]">
    Explore
  </span>

  <motion.span
    className="transition-transform duration-300 group-hover/link:translate-x-2"
  >
    →
  </motion.span>
</ScrollLink>

        </div>

      </div>
    </motion.div>
  );
}