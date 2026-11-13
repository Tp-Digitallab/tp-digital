"use client";

import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/contact/LeadForm";
import Container from "@/components/common/Container";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import FaqSchema from "@/components/seo/FaqSchema";
import type { TopicPageData } from "@/config/topicPages";
import { getTopicPage } from "@/config/topicPagesI18n";
import { useLanguage } from "@/components/providers/LanguageProvider";

const ui = {
  de: { live: "Live-Demo", faqEyebrow: "Häufige Fragen", faqTitle: "Kurz beantwortet.", form: "Anfrage", more: "Weitere Leistungen:", web: "Webdesign", redo: "Website überarbeiten", seo: "SEO", prices: "Website-Kosten" },
  en: { live: "Live demo", faqEyebrow: "Common questions", faqTitle: "Short answers.", form: "Enquiry", more: "More services:", web: "Web design", redo: "Website redesign", seo: "SEO", prices: "Website costs" },
  ru: { live: "Живое демо", faqEyebrow: "Частые вопросы", faqTitle: "Коротко о главном.", form: "Заявка", more: "Другие услуги:", web: "Веб-дизайн", redo: "Доработка сайта", seo: "SEO", prices: "Цены на сайты" },
};

export default function TopicPage({ data: base }: { data: TopicPageData }) {
  const { language } = useLanguage();
  const data = getTopicPage(base.slug, language);
  const u = ui[language];
  return (
    <>
      <Header />
      <FaqSchema items={data.faq} />
      <main className="home-atmosphere relative min-h-screen text-white">
        <section className="pb-14 pt-32 sm:pb-20 md:pt-40">
          <Container>
            <p className="text-sm font-semibold uppercase leading-5 tracking-[0.1em] text-blue-300">{data.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.1rem,5vw,4.2rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
              {data.title} <span className="text-blue-200">{data.accent}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{data.intro}</p>
            <div className="mt-7 flex flex-wrap items-baseline gap-3">
              <span className="text-sm text-white/60">{data.priceLabel}</span>
              <span className="price-number text-3xl font-semibold">{data.price}</span>
              <span className="text-sm text-white/60">{data.priceNote}</span>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#anfrage" className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white">{data.cta}</a>
              {data.demo && (
                <a href={`/demo/${data.demo.slug}`} target="_blank" rel="noopener" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/85 hover:bg-white/10">{data.demo.cta}</a>
              )}
            </div>
          </Container>
        </section>

        {data.demo && (
          <section className="pb-14 sm:pb-20">
            <Container>
              <div className="grid gap-6">
                {[data.demo, data.demo2].filter((d): d is NonNullable<typeof d> => Boolean(d)).map((d) => (
                  <a key={d.slug} href={`/demo/${d.slug}`} target="_blank" rel="noopener" className="group grid overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)]/70 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]" aria-label={d.cta}>
                    <Image src={`/demo/${d.slug}/preview.png`} alt={d.title} width={1440} height={900} sizes="(max-width: 1023px) 100vw, 700px" className="aspect-[16/10] h-full w-full object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.02]" />
                    <div className="flex flex-col justify-center p-6 sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/55">{u.live}</p>
                      <h2 className="mt-2 text-2xl font-semibold tracking-tight">{d.title}</h2>
                      <p className="mt-3 text-base leading-7 text-white/70">{d.text}</p>
                      <span className="mt-5 text-sm font-semibold text-blue-200 underline underline-offset-4">{d.cta}</span>
                    </div>
                  </a>
                ))}
              </div>
            </Container>
          </section>
        )}

        <section className="pb-14 sm:pb-20">
          <Container>
            <p className="text-sm font-semibold uppercase leading-5 tracking-[0.1em] text-blue-300">{data.needsEyebrow}</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">{data.needsTitle}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {data.needs.map((n) => (
                <div key={n.title} className="rounded-3xl border border-white/10 bg-[var(--card)]/70 p-6">
                  <h3 className="text-lg font-semibold">{n.title}</h3>
                  <p className="mt-2 text-base leading-7 text-white/70">{n.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="pb-14 sm:pb-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase leading-5 tracking-[0.1em] text-blue-300">{data.includedEyebrow}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{data.includedTitle}</h2>
                <ul className="mt-6 grid gap-3">
                  {data.included.map((i) => (
                    <li key={i} className="flex gap-3 text-base leading-7 text-white/80"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />{i}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase leading-5 tracking-[0.1em] text-blue-300">{u.faqEyebrow}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{u.faqTitle}</h2>
                <div className="mt-6">
                  {data.faq.map((f) => (
                    <details key={f.question} className="border-b border-white/10 py-4">
                      <summary className="cursor-pointer list-none text-base font-semibold">{f.question}</summary>
                      <p className="mt-2 text-base leading-7 text-white/70">{f.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="anfrage" className="scroll-mt-24 pb-16 sm:pb-24">
          <Container>
            <div className="grid gap-8 rounded-[30px] border border-white/10 bg-[var(--card)]/70 p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:p-12">
              <div>
                <p className="text-sm font-semibold uppercase leading-5 tracking-[0.1em] text-blue-300">{u.form}</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">{data.formTitle}</h2>
                <p className="mt-4 text-base leading-7 text-white/70">{data.formText}</p>
                <p className="mt-6 text-sm text-white/60">
                  {u.more} <Link className="text-blue-200 underline underline-offset-4" href={`/${language}/webdesign`}>{u.web}</Link> · <Link className="text-blue-200 underline underline-offset-4" href={`/${language}/digitale-loesungen`}>{u.redo}</Link> · <Link className="text-blue-200 underline underline-offset-4" href={`/${language}/seo`}>{u.seo}</Link>{data.slug !== "website-kosten-muenchen" && <> · <Link className="text-blue-200 underline underline-offset-4" href={language === "ru" ? "/sozdanie-saytov-v-germanii" : "/website-kosten-muenchen"}>{u.prices}</Link></>}
                </p>
              </div>
              <div className="min-w-0">
                <LeadForm serviceKey={data.formService} initialPackage={data.formPackage} />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
