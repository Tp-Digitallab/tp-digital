"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";



export default function FaqSection() {

  const { language } = useLanguage();

  const t = translations[language];

  const [open, setOpen] = useState<number | null>(0);
  
  return (
    <Section id="faq">
      <Container className="max-w-4xl">

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-bold tracking-tight text-white">
          {t.faq.title}
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
           {t.faq.description}
           </p> 
        </div>
        <div className="space-y-4">
         {t.faq.items.map((item, index) => (
            <div
  key={index}
  className={`overflow-hidden rounded-3xl border transition-all duration-300
    ${
      open === index
        ? "border-white/40 bg-white/[0.08] shadow-[0_0_35px_rgba(255,255,255,0.10)]"
        : "border-white/20 bg-white/[0.05] hover:border-white/35 hover:bg-white/[0.07] hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]"
    }`}
            >




                            <button
                type="button"
                onClick={() =>
                  setOpen(
                    open === index
                      ? null
                      : index
                  )
                }
                className="flex w-full items-center justify-between px-4 py-5 text-left transition hover:bg-white/[0.03] sm:px-6"
              >
                <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-blue-400">
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </div>

                  <span className="min-w-0 break-words text-base font-semibold leading-6 text-white sm:text-lg">
                    {item.question}
                  </span>
                </div>

                <div className="ml-3 flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5">
                  <ChevronDown
                    className={`h-5 w-5 text-white/80 transition-transform duration-300 ${
                      open === index
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </div>
              </button>


              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                   <div className="mx-4 border-t border-white/10 sm:mx-6" />

<p className="px-4 pt-5 pb-6 leading-8 text-zinc-200 sm:px-6">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}