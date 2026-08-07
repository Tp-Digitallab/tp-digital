"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import BrowserWindow from "./BrowserWindow";



export default function IntroAnimation() {

  const [show, setShow] = useState(true);


  useEffect(() => {

    const timer = setTimeout(() => {
      setShow(false);
    }, 10000);


    return () => clearTimeout(timer);

  }, []);





  return (

  <AnimatePresence>

    {show && (

      <motion.div

      initial={{
        opacity: 1,
      }}

      animate={{
        opacity: 1,
      }}

      exit={{
  opacity:0,
  scale:1.15,
  filter:"blur(30px)",
}}

      transition={{
        duration: 1.2,
        ease: "easeInOut",
      }}

      className="
        fixed
        inset-0
        z-[9999]

        flex
        items-center
        justify-center

        overflow-hidden

        bg-black
      "

    >

      {/* Glow */}

      <motion.div

        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.25, 0.6, 0.25],
        }}

        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
          absolute

          h-72
          w-72

          rounded-full

          bg-blue-500/30

          blur-[120px]
        "

      />


      <div
        className="
          relative
          z-10

          flex
          flex-col
          items-center

          gap-6
        "
      >


        {/* TP */}

        <motion.div

          initial={{
            opacity: 0,
            scale: 0.7,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 1,
            ease: "easeOut",
          }}

          className="
            text-8xl
            sm:text-9xl

            font-bold

            tracking-tight

            text-white
          "

        >
          TP

        </motion.div>



        {/* Digital Lab */}

        <motion.div

          initial={{
            opacity: 0,
            y: 25,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.6,
            duration: 0.8,
          }}

          className="
            text-lg
            sm:text-xl

            uppercase

            tracking-[0.7em]

            text-white/60
          "

        >
          Digital Lab

        </motion.div>



        {/* Line */}

        <motion.div

          initial={{
            width: 0,
            opacity: 0,
          }}

          animate={{
            width: "240px",
            opacity: 1,
          }}

          transition={{
            delay: 1.2,
            duration: 1,
          }}

          className="
            h-px

            bg-blue-400

            shadow-[0_0_20px_rgba(59,130,246,0.8)]
          "

        />



        {/* Main text */}

        <motion.p

          initial={{
            opacity: 0,
            y: 15,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 1.5,
            duration: 0.8,
          }}

          className="
            text-xl
            sm:text-2xl

            font-medium

            text-white/70
          "

        >
          Wir bringen Ihr Unternehmen online.

        </motion.p>

        <BrowserWindow />


      </div>


          </motion.div>

    )}

  </AnimatePresence>

);


}