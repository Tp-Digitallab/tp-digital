interface PriceCardProps {
  total: number;
}

import Button from "@/components/ui/Button";

export default function PriceCard({
  total,
}: PriceCardProps) {
  return (
    <div
      className="
        sticky
        top-32

        rounded-[32px]

        border
        border-white/10

        bg-gradient-to-b
        from-white/[0.06]
        to-white/[0.02]

        p-8
      "
    >
      <p className="text-white/45">
        Estimated Price
      </p>

      <h2
        className="
          mt-4

          text-6xl
          font-bold

          text-white
        "
      >
        €{total}
      </h2>

      <p
        className="
          mt-8

          leading-8

          text-white/60
        "
      >
        Your estimate updates instantly
        as you configure the project.
      </p>

      <div className="mt-10">

        <Button className="w-full">
          Start Project
        </Button>

      </div>

    </div>
  );
}