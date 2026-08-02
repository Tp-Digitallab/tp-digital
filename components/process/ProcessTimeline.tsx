import { processSteps } from "@/config/process";
import ProcessCard from "./ProcessCard";

export default function ProcessTimeline() {
  return (
    <div className="relative mt-24">

      {/* Line */}

      <div
        className="
          absolute
          left-0
          right-0
          top-12

          hidden
          xl:block

          h-px

          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />

      <div
        className="
          grid
          gap-8

          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {processSteps.map((step) => (
          <ProcessCard
            key={step.id}
            step={step}
          />
        ))}
      </div>

    </div>
  );
}