"use client";

import { websiteTypes } from "@/config/calculator";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";

interface Props {
  website: (typeof websiteTypes)[number];
  setWebsite: (website: (typeof websiteTypes)[number]) => void;
  next: () => void;
}

export default function WebsiteStep({
  website,
  setWebsite,
  next,
}: Props) {
    const { language } = useLanguage();

  const t = translations[language];
  return (
    <section>

      <p className="mb-2 text-sm uppercase tracking-[0.3em] text-blue-400">
       {t.calculatorSteps.website.step}
      </p>

      <h2 className="text-3xl sm:text-5xl font-semibold text-white">
        {t.calculatorSteps.website.title}
      </h2>

     <p className="mt-4 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-white/60">
        {t.calculatorSteps.website.description}
      </p>

      <div className="mt-14 space-y-6">

        {websiteTypes.map((item) => {

          const active = website.id === item.id;

          return (

            <button
              key={item.id}
              onClick={() => setWebsite(item)}
              className={`
                relative

                w-full

                overflow-hidden

                rounded-[24px]
p-5 sm:p-8

                border

                

                text-left

                transition-all
                duration-300

                ${
                  active
                    ? `
                    border-blue-400/40

                    bg-gradient-to-br
                    from-blue-500/15
                    to-white/[0.03]

                    shadow-[0_20px_60px_rgba(59,130,246,0.18)]
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

             <div className="
flex
flex-col
gap-5
sm:flex-row
sm:items-start
sm:justify-between
">

                <div>

                  <h3 className="text-3xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-8 text-white/60">
                    {item.description}
                  </p>

                </div>

                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-full

                    border

                    transition-all

                    ${
                      active
                        ? "border-blue-400 bg-blue-500 text-white"
                        : "border-white/15 text-white/30"
                    }
                  `}
                >
                  ✓
                </div>

              </div>

              <div className="mt-8">

                <div>

                  <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                    {t.calculatorSteps.website.startingFrom}
                  </p>

                  <p className="mt-2 text-3xl font-bold text-white">
                    €{item.price}
                  </p>

                </div>

              </div>

            </button>

          );

        })}

      </div>

    <div
className="
mt-10
flex
justify-stretch
sm:justify-end
"
>

        <button
          onClick={next}
          className="
            rounded-full

            bg-blue-500

            w-full
sm:w-auto
px-8
py-4

            font-medium
            text-white

            transition-all
            duration-300

            hover:bg-blue-400
            hover:-translate-y-1
          "
        >
          {t.calculatorSteps.website.next} →
        </button>

      </div>

    </section>
  );
}