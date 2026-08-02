"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";


const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Every project is unique. Use our pricing calculator or contact us for a personalized quote.",
  },
  {
    question: "How long does development take?",
    answer:
      "Most projects are completed within 1–4 weeks depending on complexity.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can modernize your current website or rebuild it completely while keeping your content if needed.",
  },
  {
    question: "Do you provide SEO?",
    answer:
      "Every website includes technical SEO basics. Advanced SEO is available as an additional service.",
  },
  {
    question: "Do you manage Google Ads?",
    answer:
      "Yes. We create, optimize and manage Google Ads campaigns focused on measurable business growth.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Absolutely. Every website is fully responsive and optimized for desktop, tablet and mobile.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer maintenance, updates and long-term technical support.",
  },
  {
    question: "Can I request something custom?",
    answer:
      "Of course. Tell us about your idea and we'll prepare an individual solution.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <Container className="max-w-4xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know before starting your project.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((item, index) => (
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
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-white/[0.03]"
              >
                
               <div className="flex items-center gap-4">
  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-blue-400">
    {String(index + 1).padStart(2, "0")}
  </div>

  <span className="text-lg font-semibold text-white">
    {item.question}
  </span>
</div>

<div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5">
  <ChevronDown
    className={`h-5 w-5 text-white/80 transition-transform duration-300 ${
      open === index ? "rotate-180" : ""
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
                    <div className="mx-6 border-t border-white/10" />

<p className="px-6 pt-5 pb-6 leading-8 text-zinc-200">
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