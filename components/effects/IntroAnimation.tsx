"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import BrowserWindow from "./BrowserWindow";


export default function IntroAnimation() {

  const [show, setShow] = useState(true);


  useEffect(() => {

    const timer = setTimeout(() => {
      setShow(false);
    }, 7000);


    return () => clearTimeout(timer);

  }, []);



  return (

    <AnimatePresence>

      {show && (

        <motion.div

          initial={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
            scale: 1.15,
            filter: "blur(30px)",
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


          {/* Main Glow */}

          <motion.div

            animate={{
              scale:[1,1.4,1],
              opacity:[0.25,0.6,0.25],
            }}

            transition={{
              duration:3,
              repeat:Infinity,
              ease:"easeInOut",
            }}

            className="
              absolute

              h-96
              w-96

              rounded-full

              bg-blue-500/30

              blur-[140px]
            "

          />



          {/* Final Boom Light */}

          <motion.div

            initial={{
              scale:0,
              opacity:0,
            }}

            animate={{
              scale:[0,1.5],
              opacity:[0,0.25,0],
            }}

            transition={{
              delay:8,
              duration:1.5,
              ease:"easeOut",
            }}

            className="
              absolute

              h-[600px]
              w-[600px]

              rounded-full

              bg-blue-400/30

              blur-[160px]
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



            {/* Logo */}

            <motion.div

              initial={{
                opacity:0,
                scale:0.7,
              }}

              animate={{
                opacity:1,
                scale:1,
              }}

              transition={{
                duration:1,
                ease:"easeOut",
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




            {/* Brand */}

            <motion.div

              initial={{
                opacity:0,
                y:25,
              }}

              animate={{
                opacity:1,
                y:0,
              }}

              transition={{
                delay:0.6,
                duration:0.8,
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
                width:0,
                opacity:0,
              }}

              animate={{
                width:"240px",
                opacity:1,
              }}

              transition={{
                delay:1.2,
                duration:1,
              }}


              className="
                h-px

                bg-blue-400

                shadow-[0_0_25px_rgba(59,130,246,0.8)]
              "

            />





            {/* Message */}

            <motion.p

              initial={{
                opacity:0,
                y:15,
              }}

              animate={{
                opacity:1,
                y:0,
              }}

              transition={{
                delay:1.5,
                duration:0.8,
              }}

              className="
                text-xl
                sm:text-2xl

                font-medium

                text-white/70

                text-center
              "

            >

              Wir bringen Ihr Unternehmen online.

            </motion.p>





            {/* Browser */}

            <BrowserWindow />



          </div>


        </motion.div>

      )}

    </AnimatePresence>

  );

}