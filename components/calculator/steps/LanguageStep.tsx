import { languages } from "@/config/calculator";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";
interface Props {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  back: () => void;
  next: () => void;
}

export default function LanguageStep({
  selected,
  setSelected,
  back,
  next,
}: Props) {
  
const { language } = useLanguage();

const t = translations[language];

  const primary = selected[0];

  const additional = selected.slice(1);

  function setPrimary(id: string) {
    const extras = additional.filter((x) => x !== id);
    setSelected([id, ...extras]);
  }

  function toggleAdditional(id: string) {
    if (id === primary) return;

    if (additional.includes(id)) {
      setSelected([
        primary,
        ...additional.filter((x) => x !== id),
      ]);
    } else {
      setSelected([
        primary,
        ...additional,
        id,
      ]);
    }
  }

  return (
    <section>

      <p className="mb-2 text-sm uppercase tracking-[0.3em] text-blue-400">
        {t.calculatorSteps.languages.step}
      </p>

      <h2 className="text-5xl font-semibold text-white">
        {t.calculatorSteps.languages.title}
      </h2>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
        {t.calculatorSteps.languages.description}
      </p>

      {/* PRIMARY */}

      <div className="mt-14">

        <h3 className="mb-6 text-xl font-semibold text-white">
          {t.calculatorSteps.languages.primary}
        </h3>

        <div className="space-y-4">

          {languages
            .filter((x) => x.id !== "other")
            .map((item) => {

              const active = primary === item.id;

              return (

                <button
                  key={item.id}
                  onClick={() => setPrimary(item.id)}
                  className={`
                    w-full
                    rounded-3xl
                    border
                    p-6
                    text-left
                    transition-all

                    ${
                      active
                        ? "border-blue-400/40 bg-blue-500/10"
                        : "border-white/10 bg-white/[0.03]"
                    }
                  `}
                >

                  <div className="flex justify-between">

                    <div>

                      <h3 className="text-2xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-white/50">
                        {t.calculatorSteps.languages.included}
                      </p>

                    </div>

                    <div className="text-white">
                      ✓
                    </div>

                  </div>

                </button>

              );

            })}

        </div>

      </div>

      {/* ADDITIONAL */}

      <div className="mt-14">

        <h3 className="mb-6 text-xl font-semibold text-white">
          {t.calculatorSteps.languages.additional}
        </h3>

        <div className="space-y-4">

          {languages
            .filter((x) => x.id !== primary)
            .map((item) => {

              const active = additional.includes(item.id);

              const price =
                item.id === "other"
                  ? 50
                  : 50;

              return (

                <button
                  key={item.id}
                  onClick={() => toggleAdditional(item.id)}
                  className={`
                    w-full
                    rounded-3xl
                    border
                    p-6
                    text-left
                    transition-all

                    ${
                      active
                        ? "border-blue-400/40 bg-blue-500/10"
                        : "border-white/10 bg-white/[0.03]"
                    }
                  `}
                >

                  <div className="flex justify-between">

                    <div>

                      <h3 className="text-2xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-white/50">
                        +€{price}
                      </p>

                    </div>

                    <div className="text-white">
                      {active ? "✓" : ""}
                    </div>

                  </div>

                </button>

              );

            })}

        </div>

      </div>

      <div className="mt-14 flex justify-between">

        <button
          onClick={back}
          className="rounded-full border border-white/10 px-8 py-4 text-white hover:bg-white/5"
        >
         ← {t.calculatorSteps.languages.back}
        </button>

        <button
          onClick={next}
          className="rounded-full bg-blue-500 px-8 py-4 text-white hover:bg-blue-400"
        >
          {t.calculatorSteps.languages.next} →
        </button>

      </div>

    </section>
  );
}