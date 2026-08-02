import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

export default function ImpressumPage() {
  return (
    <Section className="relative min-h-screen overflow-hidden !bg-transparent pt-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute left-1/2 top-20 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-cyan-400/5 blur-[150px]" />
        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-indigo-500/5 blur-[150px]" />
      </div>

      <Container className="relative z-10 max-w-4xl">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:p-12">
          <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl">
            Impressum
          </h1>

          <div className="space-y-8 text-zinc-300">
            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">
                Company Information
              </h2>

              <p>TP Digital Lab</p>
              <p>Taras Pakhaliuk</p>
              <p>Munich, Germany</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">
                Contact
              </h2>

              <p>Email: hello@tp-digital.de</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">
                Responsible for Content
              </h2>

              <p>Taras Pakhaliuk</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">
                Disclaimer
              </h2>

              <p className="leading-8">
                The information on this website is provided for general
                informational purposes only. Despite careful review, no
                responsibility is accepted for the accuracy, completeness or
                timeliness of the content.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}