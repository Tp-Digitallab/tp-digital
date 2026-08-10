import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowLeft,
  Building2,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum",

  description:
    "Impressum und Anbieterkennzeichnung von TP Digital Lab in München.",

  alternates: {
    canonical: "/impressum",
  },

  openGraph: {
    title:
      "Impressum | TP Digital Lab",

    description:
      "Impressum und Anbieterkennzeichnung von TP Digital Lab in München.",

    url:
      "https://tpdigitallab.de/impressum",

    siteName:
      "TP Digital Lab",

    locale:
      "de_DE",

    type:
      "website",

    images: [
      {
        url:
          "/opengraph-image.png",

        width: 1731,

        height: 909,

        alt:
          "TP Digital Lab",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Impressum | TP Digital Lab",

    description:
      "Impressum und Anbieterkennzeichnung von TP Digital Lab in München.",

    images: [
      "/opengraph-image.png",
    ],
  },
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]" />

        <div className="relative mx-auto w-full max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl sm:p-10">
          <Link
            href="/"
            className="mb-10 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white transition hover:border-white/30 hover:bg-white/10"
          >
            <ArrowLeft className="h-5 w-5 shrink-0" />

            <span>
              Zurück zur Startseite
            </span>
          </Link>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Impressum
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Angaben gemäß § 5 TMG und
            § 18 MStV.
          </p>
        </div>
      </section>

      {/* Information */}

      <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="grid min-w-0 gap-5 sm:gap-8 lg:grid-cols-2">
          {/* Business */}

          <div className="min-w-0 overflow-hidden rounded-3xl border border-white/15 bg-white/[0.05] p-5 backdrop-blur sm:p-8">
            <div className="mb-6 flex min-w-0 items-start gap-3">
              <Building2 className="h-6 w-6 shrink-0 text-blue-400" />

              <h2 className="min-w-0 break-words text-xl font-semibold leading-snug sm:text-2xl">
                Unternehmensinformationen
              </h2>
            </div>

            <div className="space-y-6 text-zinc-300">
              <div>
                <p className="text-sm uppercase tracking-widest text-zinc-500">
                  Unternehmen
                </p>

                <p className="mt-2 text-xl font-semibold text-white">
                  TP-Digital
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-zinc-500">
                  Inhaber
                </p>

                <p className="mt-2">
                  Taras Pakhaliuk
                </p>
              </div>

              <div className="flex min-w-0 gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-400" />

                <div className="min-w-0">
                  Neubiberger Straße 13
                  <br />
                  81737 München
                  <br />
                  Germany
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}

          <div className="min-w-0 overflow-hidden rounded-3xl border border-white/15 bg-white/[0.05] p-5 backdrop-blur sm:p-8">
            <div className="mb-6 flex min-w-0 items-start gap-3">
              <Shield className="h-6 w-6 shrink-0 text-blue-400" />

              <h2 className="min-w-0 break-words text-xl font-semibold leading-snug sm:text-2xl">
                Kontaktdaten
              </h2>
            </div>

            <div className="space-y-6 text-zinc-300">
              <div className="flex min-w-0 gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-blue-400" />

                <span className="min-w-0">
                  +49 175 9403234
                </span>
              </div>

              <div className="flex min-w-0 gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-blue-400" />

                <span className="min-w-0 break-all">
                  info@tpdigitallab.de
                </span>
              </div>

              <div className="min-w-0">
                <p className="break-words text-xs uppercase leading-5 tracking-[0.14em] text-zinc-500 sm:text-sm sm:tracking-widest">
                  Verantwortlich für den
                  Inhalt gemäß § 18 Abs. 2
                  MStV
                </p>

                <p className="mt-2 text-white">
                  Taras Pakhaliuk
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}