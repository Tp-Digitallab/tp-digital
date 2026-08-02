import { websiteTypes } from "@/config/calculator";

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
  return (
    <section>

      <p className="mb-2 text-sm uppercase tracking-[0.3em] text-blue-400">
        STEP 1
      </p>

      <h2 className="text-5xl font-semibold text-white">
        Choose your website
      </h2>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
        Select the type of website that best fits your business.
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

                rounded-[28px]

                border

                p-8

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

              <div className="flex items-start justify-between">

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

              <div className="mt-10 flex items-center justify-between">

                <div>

                  <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                    Starting From
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

      <div className="mt-12 flex justify-end">

        <button
          onClick={next}
          className="
            rounded-full

            bg-blue-500

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
          Next →
        </button>

      </div>

    </section>
  );
}