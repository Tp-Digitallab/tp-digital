"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
}

export default function ServiceCard({
  number,
  title,
  description,
  href,
  ctaLabel,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      aria-label={`${ctaLabel}: ${title}`}
      className="
        group
        relative
        flex
        h-full
        min-w-0
        flex-col
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-gradient-to-br
        from-white/[0.06]
        via-white/[0.03]
        to-white/[0.01]
        p-6
        transition-colors
        duration-200
        hover:border-blue-400/40
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-400
        focus-visible:ring-offset-4
        focus-visible:ring-offset-[#050505]
        motion-reduce:transition-none
        sm:rounded-[32px]
        sm:p-8
        lg:p-10
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_55%)]
          opacity-40
          transition-opacity
          duration-200
          group-hover:opacity-100
          group-focus-visible:opacity-100
          motion-reduce:transition-none
        "
      />

      <div className="relative z-10 flex flex-1 flex-col">
        <span
          aria-hidden="true"
          className="text-4xl font-semibold text-blue-300/50 sm:text-5xl"
        >
          {number}
        </span>

        <h3 className="mt-6 text-2xl font-semibold leading-tight text-white [overflow-wrap:anywhere] sm:mt-8 lg:text-3xl">
          {title}
        </h3>

        <p className="mt-4 text-base leading-7 text-white/70 [overflow-wrap:anywhere] sm:text-lg sm:leading-8">
          {description}
        </p>

        <div className="mt-auto pt-7 sm:pt-8">
          <span
            className="
              inline-flex
              min-h-12
              w-full
              items-center
              justify-between
              gap-3
              rounded-2xl
              border
              border-blue-400/25
              bg-[#172033]
              px-4
              py-3
              text-sm
              font-medium
              leading-6
              text-white
              transition-colors
              duration-200
              group-hover:border-blue-400/50
              group-hover:bg-[#1d2b44]
              group-focus-visible:border-blue-400/50
              group-focus-visible:bg-[#1d2b44]
              motion-reduce:transition-none
              sm:w-auto
              sm:rounded-full
              sm:px-5
            "
          >
            <span className="min-w-0 [overflow-wrap:anywhere]">
              {ctaLabel}
            </span>

            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 shrink-0"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}