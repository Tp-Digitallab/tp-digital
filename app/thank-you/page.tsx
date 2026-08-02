"use client";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function ThankYouPage() {
  return (
    <main
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        px-6
      "
    >
      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-[#050816]" />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -z-10

          h-[700px]
          w-[700px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-blue-500/10

          blur-[180px]
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          w-full
          max-w-2xl

          rounded-[36px]

          border
          border-white/10

          bg-gradient-to-b
          from-white/[0.06]
          to-white/[0.02]

          backdrop-blur-xl

          p-14

          text-center
        "
      >
        <motion.div
          className="flex justify-center"
          initial={{
            scale: 0,
            rotate: -90,
          }}
          animate={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "spring",
          }}
        >
          <div
            className="
              flex
              h-28
              w-28
              items-center
              justify-center

              rounded-full

              bg-green-500/15

              ring-8
              ring-green-500/10
            "
          >
            <CheckCircle2
              size={56}
              className="text-green-400"
            />
          </div>
        </motion.div>

        <h1 className="mt-10 text-5xl font-bold text-white">
          Thank You!
        </h1>

        <p className="mt-6 text-xl leading-8 text-white/60">
          Your request has been successfully submitted.
        </p>

        <p className="mt-3 text-white/45">
          We'll carefully review your project and prepare a personalized proposal.
        </p>

        <div
          className="
            mt-12

            rounded-3xl

            border
            border-white/10

            bg-white/[0.03]

            p-8

            text-left
          "
        >
          <h3 className="text-xl font-semibold text-white">
            What happens next?
          </h3>

          <div className="mt-8 space-y-7">

            <div className="flex gap-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
                1
              </div>

              <div>

                <p className="font-medium text-white">
                  We review your request
                </p>

                <p className="mt-1 text-white/50">
                  We analyze your goals, requirements and selected services.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
                2
              </div>

              <div>

                <p className="font-medium text-white">
                  We prepare your quotation
                </p>

                <p className="mt-1 text-white/50">
                  You'll receive a personalized offer with pricing, timeline and recommendations.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
                3
              </div>

              <div>

                <p className="font-medium text-white">
                  We contact you
                </p>

                <p className="mt-1 text-white/50">
                  Our team usually responds within a few business hours.
                </p>

              </div>

            </div>

          </div>
        </div>

        <div
          className="
            mt-10

            rounded-2xl

            border
            border-green-500/20

            bg-green-500/10

            p-6
          "
        >
          <p className="text-sm uppercase tracking-[0.2em] text-green-300">
            Average response time
          </p>

          <p className="mt-2 text-4xl font-bold text-white">
            3–12 hours
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <Link
            href="/"
            className="
              inline-flex
              items-center
              justify-center
              gap-2

              rounded-full

              bg-blue-500

              px-9
              py-4

              font-medium

              text-white

              transition

              hover:bg-blue-400
            "
          >
            Back Home
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/calculator"
            className="
inline-flex
items-center
justify-center

rounded-full

bg-cyan-500

px-10
py-5

font-semibold
text-white

transition-all
duration-300

shadow-[0_15px_40px_rgba(99,102,241,.25)]

hover:bg-indigo-400
hover:shadow-[0_20px_55px_rgba(99,102,241,.4)]
"
          >
            Create Another Quote
          </Link>

        </div>

      </motion.div>
    </main>
  );
}