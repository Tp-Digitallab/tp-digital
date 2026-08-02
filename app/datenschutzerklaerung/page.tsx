import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function DatenschutzerklaerungPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* Hero */}

      <section className="relative overflow-hidden py-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]" />

        <div className="relative mx-auto max-w-6xl px-6">

          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white transition hover:border-white/30 hover:bg-white/10"
          >
            <ArrowLeft className="h-5 w-5" />
            Zurück zur Startseite
          </Link>

          <div className="flex items-center gap-4">

            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <Shield className="h-8 w-8 text-blue-400" />
            </div>

            <div>

              <h1 className="text-5xl font-bold tracking-tight">
                Datenschutzerklärung
               </h1>

<p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
  Informationen über die Verarbeitung personenbezogener Daten gemäß der Datenschutz-Grundverordnung (DSGVO).
</p>

            </div>

          </div>

        </div>

      </section>

      {/* Content */}

      <section className="mx-auto max-w-6xl px-6 pb-28">

      </section>

    </main>
  );
}