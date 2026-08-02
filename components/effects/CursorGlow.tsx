"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{
        zIndex: 0,
      }}
    >
      <div
        className="absolute h-[700px] w-[700px] rounded-full"
        style={{
          left: position.x - 350,
          top: position.y - 350,

          background:
            "radial-gradient(circle, rgba(80,130,255,0.14) 0%, rgba(80,130,255,0.08) 35%, transparent 75%)",

          filter: "blur(90px)",

          transition:
            "left 120ms linear, top 120ms linear",
        }}
      />
    </div>
  );
}