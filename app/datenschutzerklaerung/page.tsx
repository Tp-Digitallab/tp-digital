import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function DatenschutzerklaerungPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* Hero */}

      <section className="relative overflow-hidden py-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]" />

       <div
  className="
    relative
    w-[90%]
    mx-auto
    sm:w-full
    max-w-6xl
  "
>

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

            <div className="max-w-5xl">

  <h1
  className="
    text-3xl
    sm:text-5xl
    font-bold
    tracking-tight
  "
>
  Datenschutzerklärung
</h1>

  <p
    className="
      mt-4
      text-base
      sm:text-lg
      leading-7
      sm:leading-8
      text-zinc-300
    "
  >
    Informationen über die Verarbeitung personenbezogener Daten gemäß der Datenschutz-Grundverordnung (DSGVO).
  </p>

</div>



          </div>

        </div>

      </section>

      {/* Content */}

      <section className="mx-auto max-w-6xl px-6 pb-28">

  <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

    {/* Sidebar */}

    <aside className="sticky top-28 h-fit rounded-3xl border border-white/15 bg-white/[0.05] p-6 backdrop-blur">

      <h2 className="text-lg font-semibold text-white">
        Inhaltsverzeichnis
      </h2>

      <nav className="mt-6 flex flex-col gap-4">

        <a href="#general" className="text-zinc-400 transition hover:text-white">
          Allgemeine Hinweise
        </a>

        <a href="#controller" className="text-zinc-400 transition hover:text-white">
          Verantwortlicher
        </a>

        <a href="#hosting" className="text-zinc-400 transition hover:text-white">
          Hosting
        </a>

        <a href="#logs" className="text-zinc-400 transition hover:text-white">
          Server-Log-Dateien
        </a>

        <a href="#ssl" className="text-zinc-400 transition hover:text-white">
          SSL-Verschlüsselung
        </a>

        <a href="#rights" className="text-zinc-400 transition hover:text-white">
          Ihre Rechte
        </a>

      </nav>

    </aside>

    {/* Content */}

    <div className="space-y-8">

      <div
        id="general"
        className="rounded-3xl border border-white/15 bg-white/[0.05] p-8 backdrop-blur"
      >
        <h2 className="text-2xl font-semibold text-white">
          Allgemeine Hinweise
        </h2>

        <p className="mt-5 leading-8 text-zinc-300">
          Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.
          Diese Datenschutzerklärung informiert Sie darüber, welche
          personenbezogenen Daten beim Besuch dieser Website verarbeitet werden
          und zu welchem Zweck dies geschieht.
        </p>
      </div>

      <div
        id="controller"
        className="rounded-3xl border border-white/15 bg-white/[0.05] p-8 backdrop-blur"
      >
        <h2 className="text-2xl font-semibold text-white">
          Verantwortlicher
        </h2>

        <div className="mt-5 space-y-2 text-zinc-300 leading-8">

          <p className="font-medium text-white">
            TP-Digital
          </p>

          <p>
            Inhaber: Taras Pakhaliuk
          </p>

          <p>
            Neubiberger Straße 13
          </p>

          <p>
            81737 München
          </p>

          <p>
            Deutschland
          </p>

          <p>
            E-Mail: info@tpdigitallab.de
          </p>

        </div>

      </div>

      <div
        id="hosting"
        className="rounded-3xl border border-white/15 bg-white/[0.05] p-8 backdrop-blur"
      >
        <h2 className="text-2xl font-semibold text-white">
          Hosting
        </h2>

        <p className="mt-5 leading-8 text-zinc-300">
          Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet. Beim Aufruf der Website
          können technische Informationen verarbeitet werden, die für den
          sicheren Betrieb und die Bereitstellung der Website erforderlich sind.
        </p>
      </div>

      <div
        id="logs"
        className="rounded-3xl border border-white/15 bg-white/[0.05] p-8 backdrop-blur"
      >
        <h2 className="text-2xl font-semibold text-white">
          Server-Log-Dateien
        </h2>

        <p className="mt-5 leading-8 text-zinc-300">
          Beim Besuch dieser Website werden automatisch technische Informationen
          wie IP-Adresse, Browsertyp, Betriebssystem, Datum und Uhrzeit des
          Zugriffs sowie aufgerufene Seiten in Server-Log-Dateien gespeichert.
          Diese Daten dienen ausschließlich der technischen Sicherheit und dem
          stabilen Betrieb der Website.
        </p>
      </div>

      <div
        id="ssl"
        className="rounded-3xl border border-white/15 bg-white/[0.05] p-8 backdrop-blur"
      >
        <h2 className="text-2xl font-semibold text-white">
          SSL-/TLS-Verschlüsselung
        </h2>

        <p className="mt-5 leading-8 text-zinc-300">
          Diese Website verwendet eine SSL-/TLS-Verschlüsselung, um übertragene
          Daten vor dem Zugriff unbefugter Dritter zu schützen.
        </p>
      </div>

      <div
        id="rights"
        className="rounded-3xl border border-white/15 bg-white/[0.05] p-8 backdrop-blur"
      >
        <h2 className="text-2xl font-semibold text-white">
          Rechte der betroffenen Personen
        </h2>

        <p className="mt-5 leading-8 text-zinc-300">
          Sie haben nach der DSGVO das Recht auf Auskunft, Berichtigung,
          Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie
          Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten.
        </p>

      </div>

    </div>

  </div>

</section>

    </main>
  );
}