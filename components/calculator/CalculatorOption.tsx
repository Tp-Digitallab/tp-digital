interface CalculatorOptionProps {
  title: string;
  price: number;
  active?: boolean;
}

export default function CalculatorOption({
  title,
  price,
  active = false,
}: CalculatorOptionProps) {
  return (
    <button
      className={`
        w-full

        rounded-3xl

        border

        p-6

        text-left

        transition-all
        duration-300

        ${
          active
            ? `
              border-blue-400/40
              bg-blue-500/10
              shadow-[0_0_40px_rgba(59,130,246,0.18)]
            `
            : `
              border-white/10
              bg-white/[0.03]

              hover:border-white/20
              hover:bg-white/[0.05]
            `
        }
      `}
    >
      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>

          <p className="mt-2 text-white/45">
            Starting from
          </p>

        </div>

        <div
          className="
            text-2xl
            font-semibold
            text-white
          "
        >
          €{price}
        </div>

      </div>
    </button>
  );
}