"use client";

import {
  type ButtonHTMLAttributes,
  type MouseEvent,
} from "react";
import type Lenis from "lenis";

import { cn } from "@/lib/utils";

type WindowWithLenis = Window & {
  lenis?: Lenis;
};

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  children: React.ReactNode;
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  className,
  href,
  onClick,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(
    `
      appearance-none
      group
      inline-flex
      items-center
      justify-center
      gap-3
      rounded-full
      border
      px-6
      py-3
      text-sm
      font-medium
      transition-all
      duration-300
      touch-manipulation
    `,

    variant === "primary" &&
      `
        border-blue-400/25
        bg-[#172033]
        text-white
        shadow-[0_8px_30px_rgba(59,130,246,0.16)]

        sm:border-white/15
        sm:bg-white/[0.10]
        sm:backdrop-blur-xl
        sm:shadow-[0_0_30px_rgba(59,130,246,0.18)]

        hover:border-blue-400/40
        hover:bg-[#1c2942]

        sm:hover:bg-white/[0.15]
        sm:hover:shadow-[0_0_45px_rgba(59,130,246,0.35)]

        active:scale-[0.98]
      `,

    variant === "ghost" &&
      `
        border-transparent
        text-white
        hover:bg-white/5
        active:scale-[0.98]
      `,

    className
  );

  function handleClick(
    event: MouseEvent<HTMLButtonElement>
  ) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      !href
    ) {
      return;
    }

    if (href.startsWith("#")) {
      const element =
  document.querySelector<HTMLElement>(
    href
  );

      if (!element) {
        return;
      }

      const browserWindow =
  window as unknown as WindowWithLenis;

      if (browserWindow.lenis) {
        browserWindow.lenis.scrollTo(
          element,
          {
            duration: 1.2,
          }
        );
      } else {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    window.location.assign(href);
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={handleClick}
      {...props}
    >
      <span>{children}</span>

      <span
        aria-hidden="true"
        className="
          shrink-0
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      >
        →
      </span>
    </button>
  );
}