import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <section className="relative overflow-hidden py-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]" />

        <div className="relative mx-auto max-w-6xl px-6">

          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white transition hover:border-white/30 hover:bg-white/10"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>

          <h1 className="text-5xl font-bold tracking-tight">
            Impressum
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Information according to § 5 TMG and § 18 MStV.
          </p>

        </div>

      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28">

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Business */}

          <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-8 backdrop-blur">

            <div className="mb-6 flex items-center gap-3">
              <Building2 className="h-6 w-6 text-blue-400" />

              <h2 className="text-2xl font-semibold">
                Business Information
              </h2>
            </div>

            <div className="space-y-6 text-zinc-300">

              <div>
                <p className="text-sm uppercase tracking-widest text-zinc-500">
                  Company
                </p>

                <p className="mt-2 text-xl font-semibold text-white">
                  TP-Digital
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-zinc-500">
                  Owner
                </p>

                <p className="mt-2">
                  Taras Pakhaliuk
                </p>
              </div>

              <div className="flex gap-4">

                <MapPin className="mt-1 h-5 w-5 text-blue-400" />

                <div>
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

          <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-8 backdrop-blur">

            <div className="mb-6 flex items-center gap-3">
              <Shield className="h-6 w-6 text-blue-400" />

              <h2 className="text-2xl font-semibold">
                Contact Details
              </h2>
            </div>

            <div className="space-y-6 text-zinc-300">

              <div className="flex gap-4">

                <Phone className="mt-1 h-5 w-5 text-blue-400" />

                <span>
                  +49 175 9403234
                </span>

              </div>

              <div className="flex gap-4">

                <Mail className="mt-1 h-5 w-5 text-blue-400" />

                <span>
                  taraspahalyk@gmail.com
                </span>

              </div>

              <div>

                <p className="text-sm uppercase tracking-widest text-zinc-500">
                  Responsible for content according to § 18 Abs. 2 MStV
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