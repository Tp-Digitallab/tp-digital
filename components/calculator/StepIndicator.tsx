interface Props {
  step: number;
}

const steps = [
  "Website",
  "Languages",
  "Marketing",
  "Branding",
  "Features",
  "Support",
  "Contact",
];

export default function StepIndicator({
  step,
}: Props) {
  return (
    <div className="mb-14">

      <div
  className="
    w-[100%]
    mx-left
    sm:w-full

    flex
    items-center
    gap-2
    sm:gap-3
  "
>

        {steps.map((label, index) => {

          const current = index + 1;

          return (

            <div
  key={label}
  className="
    flex-1
    min-w-0
  "
>

              <div
                className={`
                  h-2

                  rounded-full

                  transition-all
                  duration-500

                  ${
                    current <= step
                      ? "bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.6)]"
                      : "bg-white/10"
                  }
                `}
              />

              <p
                className={`
                  mt-3

                  text-center
                  text-[9px]
sm:text-xs

                  transition-all
                  duration-300

                  ${
                    current === step
                      ? "text-white"
                      : "text-white/35"
                  }
                `}
              >
                {label}
              </p>

            </div>

          );

        })}

      </div>

      <div className="mt-8 flex items-center justify-between">

        <p className="text-sm uppercase tracking-[0.3em] text-white/40">
          Step {step} of {steps.length}
        </p>

        <p className="text-sm text-white/30">
          {steps[step - 1]}
        </p>

      </div>

    </div>
  );
}