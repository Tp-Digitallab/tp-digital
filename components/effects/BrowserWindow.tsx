"use client";

import { motion } from "motion/react";


export default function BrowserWindow() {

  return (

    <motion.div

      initial={{
        opacity:0,
        scale:0.8,
        y:40,
      }}

      animate={{
        opacity:1,
        scale:1,
        y:0,
      }}

      transition={{
        delay:2.2,
        duration:1,
        ease:"easeOut",
      }}


      className="
        mt-10

        w-[320px]
        sm:w-[520px]

        overflow-hidden

        rounded-3xl

        border
        border-white/15

        bg-white/[0.05]

        backdrop-blur-xl

        shadow-[0_0_80px_rgba(59,130,246,0.25)]
      "

    >


      {/* Browser top */}

      <div
        className="
          flex
          items-center
          gap-2

          border-b
          border-white/10

          px-5
          py-3
        "
      >

        <div className="h-3 w-3 rounded-full bg-red-400" />

        <div className="h-3 w-3 rounded-full bg-yellow-400" />

        <div className="h-3 w-3 rounded-full bg-green-400" />


      </div>



      {/* Browser content */}

      <div
        className="
          flex
          flex-col

          gap-5

          p-8
        "
      >


        <motion.p

          initial={{
            opacity:0,
          }}

          animate={{
            opacity:1,
          }}

          transition={{
            delay:3,
          }}

          className="
            text-xl
            font-semibold
            text-white
          "

        >
          TP Digital Lab
          
        </motion.p>



        <motion.div

          initial={{
            width:0,
          }}

          animate={{
            width:"100%",
          }}

          transition={{
            delay:3.4,
            duration:1,
          }}

          className="
            h-2

            rounded-full

            bg-blue-400/40
          "

        />



        <div className="space-y-3">


          <motion.p

            initial={{
              opacity:0,
              x:-20,
            }}

            animate={{
              opacity:1,
              x:0,
            }}

            transition={{
              delay:4,
            }}

            className="
              text-white/60
            "

          >
            ✓ Website Entwicklung

          </motion.p>



          <motion.p

            initial={{
              opacity:0,
              x:-20,
            }}

            animate={{
              opacity:1,
              x:0,
            }}

            transition={{
              delay:4.5,
            }}

            className="
              text-white/60
            "

          >
            ✓ SEO Optimierung

          </motion.p>



          <motion.p

            initial={{
              opacity:0,
              x:-20,
            }}

            animate={{
              opacity:1,
              x:0,
            }}

            transition={{
              delay:5,
            }}

            className="
              text-white/60
            "

          >
            ✓ Google Ads Marketing

          </motion.p>



          <motion.p

            initial={{
              opacity:0,
              x:-20,
            }}

            animate={{
              opacity:1,
              x:0,
            }}

            transition={{
              delay:5.5,
            }}

            className="
              text-blue-300
              font-medium
            "

          >
            ✓ Neue Kunden gewinnen

          </motion.p>


        </div>


      </div>


    </motion.div>

  );

}