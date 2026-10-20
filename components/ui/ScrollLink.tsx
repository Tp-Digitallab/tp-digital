"use client";

import type {
  MouseEvent,
  ReactNode,
} from "react";
import type Lenis from "lenis";

type WindowWithLenis = Window & {
  lenis?: Lenis;
};

interface ScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
}

export default function ScrollLink({
  href,
  children,
  className,
  "aria-label": ariaLabel,
}: ScrollLinkProps) {
  function handleClick(
    event: MouseEvent<HTMLAnchorElement>
  ) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    if (!href.startsWith("#")) {
      return;
    }

    const element =
  document.querySelector<HTMLElement>(
    href
  );

    if (!element) {
      return;
    }

    event.preventDefault();

    const browserWindow =
  window as unknown as WindowWithLenis;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (browserWindow.lenis && !reducedMotion) {
      browserWindow.lenis.scrollTo(
        element,
        {
          duration: 1.2,
        }
      );
    } else {
      element.scrollIntoView({
        behavior: reducedMotion ? "instant" : "smooth",
        block: "start",
      });
    }

    window.history.replaceState(
      null,
      "",
      href
    );
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
