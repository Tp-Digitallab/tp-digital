import { features } from "@/config/features";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";
interface Props {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  back: () => void;
  next: () => void;
}

export default function FeaturesStep({
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
       {t.calculatorSteps.features.step}
      </p>

      <h2 className="text-3xl sm:text-5xl font-semibold text-white">
  {t.calculatorSteps.features.title}
      </h2>

     <p className="mt-4 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-white/60">
  {t.calculatorSteps.features.description}
</p>

      <div className="mt-14 space-y-5">

        {features.map((item) => {

          const active = selected.includes(item.id);

          return (

            <button
              key={item.id}
              onClick={() => toggle(item.id)}
              className={`
                relative
                w-[90%]
mr-auto
sm:w-full
                rounded-[24px]
                border
                p-5 sm:p-7
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

              {/* Badge */}

              <div
className="
absolute
right-16
top-1
rounded-full
bg-blue-500
px-3
py-1
text-xs
font-semibold
text-white
"
>
  {t.calculatorSteps.features.popular}
              </div>

              <div
className="
flex
items-start
gap-4
"
>

                <div className="max-w-[80%]">

                 <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/55">
                    {item.description}
                  </p>

                </div>

                <div
                  className={`
                    flex
                    h-9
w-9
sm:h-11
sm:w-11
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

      <div className="
mt-10
flex
flex-col
gap-4
sm:flex-row
sm:items-center
sm:justify-between
">

        <button
  onClick={back}
  className="
    w-[90%]
    mx-left
    sm:w-auto

    rounded-full
    border
    border-white/10
    px-8
    py-4
    text-white
    hover:bg-white/5
  "
>
          ← {t.calculatorSteps.features.back}
        </button>

        <button
  onClick={next}
  className="
    w-[90%]
    mx-left
    sm:w-auto

    rounded-full
    bg-blue-500
    px-8
    py-4
    text-white
    hover:bg-blue-400
  "
>
          {t.calculatorSteps.features.next} →
        </button>

      </div>

    </section>
  );
}