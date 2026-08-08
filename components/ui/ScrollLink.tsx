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
}

export default function ScrollLink({
  href,
  children,
  className,
}: ScrollLinkProps) {
  function handleClick(
    event: MouseEvent<HTMLAnchorElement>
  ) {
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

    window.history.replaceState(
      null,
      "",
      href
    );
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}