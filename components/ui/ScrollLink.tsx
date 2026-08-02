"use client";

import { ReactNode } from "react";

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
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!href.startsWith("#")) return;

    e.preventDefault();

    const element = document.querySelector(href);

    if (!element) return;

    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(element, {
        duration: 1.2,
      });
    } else {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
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