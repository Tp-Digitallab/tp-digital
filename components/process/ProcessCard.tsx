import type { ProcessStep } from "@/config/process";

interface ProcessCardProps {
  step: ProcessStep;
}

export default function ProcessCard({
  step,
}: ProcessCardProps) {
  return (
    <div
      className="
        relative

        rounded-[28px]

        border
        border-white/10
        backdrop-blur-xl

        bg-gradient-to-b
from-white/[0.06]
to-white/[0.02]
        shadow-[0_15px_45px_rgba(0,0,0,0.30)]

        p-8

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-blue-400/30
        hover:bg-white/[0.05]
        hover:shadow-[0_25px_60px_rgba(59,130,246,0.18)]
      "
    >
        <div
  className="
    absolute
    inset-0

    rounded-[28px]

    bg-gradient-to-br
    from-blue-500/[0.04]
    via-transparent
    to-transparent

    pointer-events-none
  "
/>
      {/* Number */}

      <div className="mb-8 flex items-center gap-5">

  <div
    className="
      flex
      h-14
      w-14
      items-center
      justify-center

      rounded-full

      border
      border-blue-400/35
bg-gradient-to-br
from-blue-500/20
to-cyan-400/10

shadow-[0_0_25px_rgba(59,130,246,0.15)]

      text-lg
      font-semibold

      text-white
    "
  >
    0{step.id}
  </div>

  <div
    className="
      h-px
      flex-1

      bg-gradient-to-r
from-blue-400/30
to-transparent
    "
  />

</div>

      {/* Title */}

      <h3
        className="
         text-[28px]
font-semibold
tracking-[-0.02em]

          text-white
        "
      >
        {step.title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-5

          leading-8

          text-white/60
        "
      >
        {step.description}
      </p>
    </div>
  );
}