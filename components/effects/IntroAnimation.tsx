"use client";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  useEffect,
  useState,
} from "react";

const INTRO_DURATION_MS = 3500;

export default function IntroAnimation() {
  const [show, setShow] =
    useState(true);

  useEffect(() => {
    const body = document.body;

    const previousOverflow =
      body.style.overflow;

    body.style.overflow = "hidden";

    const timer =
      window.setTimeout(() => {
        body.style.overflow =
          previousOverflow;

        setShow(false);
      }, INTRO_DURATION_MS);

    return () => {
      window.clearTimeout(timer);

      body.style.overflow =
        previousOverflow;
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden="true"
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(18px)",
          }}
          transition={{
            duration: 0.45,
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
          {/* Основное синее свечение */}

          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0.15,
            }}
            animate={{
              scale: [
                0.8,
                1.2,
                1,
              ],
              opacity: [
                0.15,
                0.5,
                0.3,
              ],
            }}
            transition={{
              duration: 2.8,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-80
              w-80
              rounded-full
              bg-blue-500/30
              blur-[120px]
              sm:h-96
              sm:w-96
            "
          />

          {/* Дополнительное свечение */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            animate={{
              opacity: 0.25,
              x: 80,
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-52
              w-52
              rounded-full
              bg-cyan-400/20
              blur-[100px]
            "
          />

          <div
            className="
              relative
              z-10
              flex
              w-full
              flex-col
              items-center
              gap-4
              px-5
              text-center
            "
          >
            {/* Логотип */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.75,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.65,
                ease: "easeOut",
              }}
              className="
                text-7xl
                font-bold
                tracking-tight
                text-white
                sm:text-9xl
              "
            >
              TP
            </motion.div>

            {/* Название */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.45,
                ease: "easeOut",
              }}
              className="
                text-sm
                uppercase
                tracking-[0.5em]
                text-white/60
                sm:text-lg
                sm:tracking-[0.7em]
              "
            >
              Digital Lab
            </motion.div>

            {/* Мини-экран */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.75,
                duration: 0.55,
                ease: "easeOut",
              }}
              className="
                mt-3
                w-[88vw]
                max-w-[460px]
                overflow-hidden
                rounded-2xl
                border
                border-white/15
                bg-white/[0.06]
                text-left
                shadow-[0_0_70px_rgba(59,130,246,0.2)]
                backdrop-blur-xl
              "
            >
              {/* Верхняя панель */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  border-b
                  border-white/10
                  px-4
                  py-3
                "
              >
                <span
                  className="
                    size-2.5
                    rounded-full
                    bg-red-400
                  "
                />

                <span
                  className="
                    size-2.5
                    rounded-full
                    bg-yellow-400
                  "
                />

                <span
                  className="
                    size-2.5
                    rounded-full
                    bg-green-400
                  "
                />

                <div
                  className="
                    ml-3
                    flex-1
                    rounded-full
                    border
                    border-white/10
                    bg-black/30
                    px-4
                    py-1.5
                    text-center
                    text-[10px]
                    tracking-[0.18em]
                    text-white/40
                    sm:text-xs
                  "
                >
                  TPDIGITALLAB.DE
                </div>
              </div>

              {/* Содержимое */}

              <div
                className="
                  space-y-4
                  p-5
                  sm:p-6
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <div>
                    <p
                      className="
                        text-sm
                        font-medium
                        text-white
                        sm:text-base
                      "
                    >
                      Digitale Lösung
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        text-white/45
                      "
                    >
                      Website wird vorbereitet
                    </p>
                  </div>

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
                      delay: 1.4,
                      duration: 0.35,
                    }}
                    className="
                      flex
                      size-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-blue-400/30
                      bg-blue-500/10
                      text-blue-300
                    "
                  >
                    ✓
                  </motion.div>
                </div>

                {/* Прогресс */}

                <div
                  className="
                    h-1.5
                    overflow-hidden
                    rounded-full
                    bg-white/10
                  "
                >
                  <motion.div
                    initial={{
                      width: "0%",
                    }}
                    animate={{
                      width: "100%",
                    }}
                    transition={{
                      delay: 1.15,
                      duration: 1.45,
                      ease: "easeInOut",
                    }}
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-blue-500
                      via-cyan-400
                      to-blue-300
                      shadow-[0_0_18px_rgba(59,130,246,0.8)]
                    "
                  />
                </div>

                {/* Возможности */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1.7,
                    duration: 0.45,
                  }}
                  className="
                    grid
                    grid-cols-3
                    gap-2
                  "
                >
                  <div
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-2
                      py-2.5
                      text-center
                      text-[10px]
                      text-white/60
                      sm:text-xs
                    "
                  >
                    Design
                  </div>

                  <div
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-2
                      py-2.5
                      text-center
                      text-[10px]
                      text-white/60
                      sm:text-xs
                    "
                  >
                    Performance
                  </div>

                  <div
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-2
                      py-2.5
                      text-center
                      text-[10px]
                      text-white/60
                      sm:text-xs
                    "
                  >
                    SEO
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Финальная надпись */}

            <motion.p
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2.25,
                duration: 0.45,
              }}
              className="
                mt-1
                text-sm
                font-medium
                text-white/55
                sm:text-base
              "
            >
              Bereit für digitales Wachstum.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}