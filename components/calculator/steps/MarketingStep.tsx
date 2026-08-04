import { marketing } from "@/config/calculator";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";

interface Props {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  back: () => void;
  next: () => void;
}

export default function MarketingStep({
  selected,
  setSelected,
  back,
  next,
}: Props) {

  const { language } = useLanguage();

  const t = translations[language];

  function toggle(id: string) {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  }

  return (
    <section>

      <p className="mb-2 text-sm uppercase tracking-[0.3em] text-blue-400">
       {t.calculatorSteps.marketing.step}
      </p>

      <h2 className="text-5xl font-semibold text-white">
        {t.calculatorSteps.marketing.title}
      </h2>

     <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
  {t.calculatorSteps.marketing.description}
    </p>

      <div className="mt-14 space-y-5">

        {marketing.map((item) => {

          const active = selected.includes(item.id);
          const included = item.included === true;

          if (included) {

            return (

              <div
                key={item.id}
                className="
                  rounded-[24px]
                  border
                  border-green-400/30
                  bg-green-500/10
                  p-7
                "
              >

                <div className="flex items-start justify-between">

                  <div>

                    <h3 className="text-2xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-white/60">
                      {item.description}
                    </p>

                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-green-400 bg-green-500 text-white">
                    ✓
                  </div>

                </div>

                <div className="mt-8 text-lg font-semibold text-green-400">
                 {t.calculatorSteps.marketing.included}
                </div>

              </div>

            );

          }

          return (

            <button
              key={item.id}
              onClick={() => toggle(item.id)}
              className={`
                w-full
                rounded-[24px]
                border
                p-7
                text-left
                transition-all
                duration-300

                ${
                  active
                    ? `
                      border-blue-400/40
                      bg-blue-500/10
                      shadow-[0_15px_40px_rgba(59,130,246,0.15)]
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

              <div className="flex items-start justify-between">

                <div>

                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/55">
                    {item.description}
                  </p>

                </div>

                <div
                  className={`
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border

                    ${
                      active
                        ? "border-blue-400 bg-blue-500 text-white"
                        : "border-white/15 text-white/25"
                    }
                  `}
                >
                  ✓
                </div>

              </div>

              <div className="mt-8 text-lg font-semibold text-white">
                +€{item.price}
              </div>

            </button>

          );

        })}

      </div>

      <div className="mt-14 flex items-center justify-between">

        <button
          onClick={back}
          className="
            rounded-full
            border
            border-white/10
            px-8
            py-4
            text-white
            transition
            hover:bg-white/5
          "
        >
          {t.calculatorSteps.marketing.back}
        </button>

        <button
          onClick={next}
          className="
            rounded-full
            bg-blue-500
            px-8
            py-4
            text-white
            transition
            hover:bg-blue-400
          "
        >
         {t.calculatorSteps.marketing.next}
        </button>

      </div>

    </section>
  );
}