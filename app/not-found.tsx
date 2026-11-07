import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import DocumentTitle from "@/components/common/DocumentTitle";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <DocumentTitle title="Seite nicht gefunden | TP Digital Lab" />
      <Header />
      <main className="home-atmosphere flex min-h-[80vh] items-center pb-16 pt-32">
        <Container>
          <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-[var(--card)]/70 p-8 text-center sm:p-12">
            <p className="text-sm font-semibold uppercase leading-5 tracking-[0.1em] text-blue-300">Fehler 404</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Seite nicht gefunden.</h1>
            <p className="mt-4 text-base leading-7 text-white/70">
              Diese Adresse gibt es nicht oder nicht mehr. Auf der Startseite finden Sie alle Leistungen, Preise und Projekte.
            </p>
            <p className="mt-2 text-sm leading-6 text-white/55">Page not found · Страница не найдена</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white">
                Zur Startseite
              </Link>
              <Link href="/#contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/85">
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
