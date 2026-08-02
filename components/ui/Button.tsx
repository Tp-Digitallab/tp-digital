"use client";

import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  children: React.ReactNode;
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center gap-3 rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300",

    variant === "primary" &&
      "border-white/15 bg-white/10 text-white backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.18)] hover:border-blue-400/40 hover:bg-white/15 hover:shadow-[0_0_45px_rgba(59,130,246,0.35)]",

    variant === "ghost" &&
      "border-transparent text-white hover:bg-white/5",

    className
  );

  if (href) {
  return (
    <button
      className={classes}
      onClick={() => {
        if (href.startsWith("#")) {
          const element = document.querySelector(href);

          if (element && (window as any).lenis) {
            (window as any).lenis.scrollTo(element, {
              duration: 1.2,
            });

            return;
          }
        }

        window.location.href = href;
      }}
    >
      <span>{children}</span>

      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>
  );
}

  return (
    <button className={classes} {...props}>
      <span>{children}</span>

      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>
  );
}