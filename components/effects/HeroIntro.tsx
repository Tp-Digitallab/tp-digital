"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/*
  Desktop/tablet intro "shutters": the headline assembles word by word on a
  navy screen, then the screen splits into vertical strips that slide away in
  3D while the hero content flies in from depth.
  Plays on every entry from outside the site (search, links, direct),
  not on internal navigation; skippable, off on phones and for reduced motion.
  <html class="intro"> is set by an inline script in app/layout.tsx before
  first paint; html.intro body::before provides the navy screen until then.
*/

const REVEAL_AT = 1450;
const END_AT = 4300;
const STRIPS = 7;

type Word = { text: string; accent: boolean };

function readHeadline(): Word[] {
  const h1 = document.querySelector("#top h1");
  if (!h1) return [];
  const words: Word[] = [];
  h1.childNodes.forEach(n => {
    const accent = n.nodeType === 1;
    (n.textContent ?? "").split(/\s+/).filter(Boolean).forEach(text => words.push({ text, accent }));
  });
  return words;
}

export default function HeroIntro() {
  const [words, setWords] = useState<Word[] | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains("intro-m")) {
      // phones: start the entrance only once the page is hydrated and painting,
      // otherwise it finishes during load and looks like a jump
      const t = window.setTimeout(() => root.classList.add("intro-m-go"), 150);
      return () => clearTimeout(t);
    }
    if (!root.classList.contains("intro")) return;

    const timers: number[] = [];
    let done = false;
    const reveal = () => {
      if (root.classList.contains("intro-reveal")) return;
      root.classList.add("intro-reveal");
      document.querySelectorAll<HTMLElement>(".sh-strip").forEach((el, i) => {
        const dir = i % 2 ? 1 : -1;
        el.style.transformOrigin = dir < 0 ? "50% 0%" : "50% 100%";
        el.animate(
          [
            { transform: "perspective(1200px) translateY(0) rotateX(0deg)" },
            { transform: `perspective(1200px) translateY(${dir * 101}%) rotateX(${dir * -40}deg)` },
          ],
          { duration: 1050, delay: i * 70, easing: "cubic-bezier(0.65, 0, 0.25, 1)", fill: "forwards" },
        );
      });
    };
    const finish = () => {
      if (done) return;
      done = true;
      timers.forEach(clearTimeout);
      reveal();
      window.setTimeout(() => { root.classList.remove("intro", "intro-reveal"); setWords(null); }, 600);
    };

    const start = window.setTimeout(() => {
      setWords(readHeadline());
      timers.push(window.setTimeout(reveal, REVEAL_AT));
      timers.push(window.setTimeout(finish, END_AT));
    }, 60);

    const skip = () => finish();
    const evs = ["pointerdown", "wheel", "keydown", "touchstart"] as const;
    evs.forEach(e => window.addEventListener(e, skip, { once: true, passive: true }));
    return () => {
      clearTimeout(start);
      timers.forEach(clearTimeout);
      evs.forEach(e => window.removeEventListener(e, skip));
    };
  }, []);

  if (!words) return null;
  return createPortal(
    <div aria-hidden="true" className="sh-intro pointer-events-none fixed inset-0 z-[80] overflow-hidden">
      {Array.from({ length: STRIPS }, (_, i) => (
        <div key={i} className="sh-strip" style={{ left: `${(i * 100) / STRIPS}%`, width: `calc(${100 / STRIPS}% + 1px)` }} />
      ))}
      <p className="sh-words">
        {words.map((wd, i) => (
          <span key={i} className="sh-word">
            <span className={wd.accent ? "sh-accent" : undefined} style={{ animationDelay: `${150 + i * 110}ms` }}>{wd.text}</span>
          </span>
        ))}
      </p>
    </div>,
    document.body,
  );
}
