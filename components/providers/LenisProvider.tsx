"use client";

import {
  type ReactNode,
  useEffect,
} from "react";
import Lenis from "lenis";

type WindowWithLenis = Window & {
  lenis: Lenis;
};

export default function LenisProvider({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    const browserWindow =
      window as unknown as WindowWithLenis;

    browserWindow.lenis = lenis;

    let animationFrameId = 0;

    function updateLenis(time: number) {
      lenis.raf(time);

      animationFrameId =
        requestAnimationFrame(
          updateLenis
        );
    }

    animationFrameId =
      requestAnimationFrame(
        updateLenis
      );

    return () => {
      cancelAnimationFrame(
        animationFrameId
      );

      lenis.destroy();

      if (
        browserWindow.lenis === lenis
      ) {
        Reflect.deleteProperty(
          browserWindow,
          "lenis"
        );
      }
    };
  }, []);

  return <>{children}</>;
}