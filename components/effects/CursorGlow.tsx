"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {

  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  const [heat, setHeat] = useState(0);


  useEffect(() => {

    const move = (e: MouseEvent) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });


      setHeat((prev) =>
        Math.min(prev + 0.12, 1)
      );

    };


    const cooldown = setInterval(() => {

      setHeat((prev) =>
        Math.max(prev - 0.01, 0)
      );

    }, 50);


    window.addEventListener(
      "mousemove",
      move
    );


    return () => {

      window.removeEventListener(
        "mousemove",
        move
      );

      clearInterval(cooldown);

    };


  }, []);



  const size = 500 + heat * 350;

  const opacity = 0.15 + heat * 0.35;


  return (

    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        overflow-hidden
      "
    >


      {/* ENERGY FIELD */}

      <div

        className="
          absolute
          rounded-full
          blur-[120px]
        "

        style={{

          width:size,
          height:size,

          left: position.x - size / 2,
          top: position.y - size / 2,


          background:
          `
          radial-gradient(
            circle,

            rgba(
              96,
              165,
              250,
              ${opacity}
            )
            0%,

            rgba(
              59,
              130,
              246,
              ${opacity / 2}
            )
            35%,

            transparent
            70%
          )
          `,


          transition:
          `
          width 500ms ease,
          height 500ms ease,
          left 180ms ease-out,
          top 180ms ease-out
          `,

        }}

      />



      {/* HOT CORE */}

      <div

        className="
          absolute
          h-24
          w-24
          rounded-full
          blur-xl
        "

        style={{

          left:position.x - 48,
          top:position.y - 48,


          background:
          `
          rgba(
            255,
            255,
            255,
            ${0.15 + heat * 0.6}
          )
          `,


        }}

      />

    </div>

  );

}