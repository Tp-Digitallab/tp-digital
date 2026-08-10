import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowLeft,
  Shield,
} from "lucide-react";

const title =
  "Datenschutzerklärung";

const description =
  "Datenschutzerklärung von TP Digital Lab mit Informationen zur Verarbeitung personenbezogener Daten.";

export const metadata: Metadata = {
  title,
  description,

  alternates: {
    canonical:
      "/datenschutzerklaerung",
  },

  openGraph: {
    title:
      `${title} | TP Digital Lab`,
    description,
    url:
      "https://tpdigitallab.de/datenschutzerklaerung",
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
          "TP Digital Lab – Datenschutzerklärung",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",
    title:
      `${title} | TP Digital Lab`,
    description,
    images: [
      "/opengraph-image.png",
    ],
  },
};

interface PrivacySectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function PrivacySection({
  id,
  title,
  children,
}: PrivacySectionProps) {
  return (
    <section
      id={id}
      className="
        scroll-mt-28
        rounded-3xl
        border
        border-white/15
        bg-white/[0.05]
        p-6
        backdrop-blur
        sm:p-8
      "
    >
      <h2 className="text-2xl font-semibold text-white">
        {title}
      </h2>

      <div className="mt-5 space-y-5 leading-8 text-zinc-300">
        {children}
      </div>
    </section>
  );
}

const navigation = [
  {
    href: "#general",
    label: "Allgemeine Hinweise",
  },
  {
    href: "#controller",
    label: "Verantwortlicher",
  },
  {
    href: "#hosting",
    label: "Hosting",
  },
  {
    href: "#logs",
    label: "Server-Log-Dateien",
  },
  {
    href: "#contact-form",
    label: "Kontaktformular",
  },
  {
    href: "#telegram",
    label: "Telegram",
  },
  {
    href: "#turnstile",
    label: "Cloudflare Turnstile",
  },
  {
    href: "#cookies",
    label: "Cookies & Einwilligung",
  },
  {
    href: "#analytics",
    label: "Google Analytics",
  },
  {
    href: "#google-ads",
    label: "Google Ads",
  },
  {
    href: "#international-transfers",
    label: "Drittlandübermittlung",
  },
  {
    href: "#retention",
    label: "Speicherdauer",
  },
  {
    href: "#rights",
    label: "Ihre Rechte",
  },
  {
    href: "#ssl",
    label: "Verschlüsselung",
  },
];

export default function DatenschutzerklaerungPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}


            <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]"
        />

        <div className="relative mx-auto w-full max-w-6xl">

          <Link
            href="/"
            className="
              mb-10
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/15
              bg-white/5
              px-5
              py-3
              text-white
              transition
              hover:border-white/30
              hover:bg-white/10
            "
          >
            <ArrowLeft
              aria-hidden="true"
              className="h-5 w-5"
            />

            Zurück zur Startseite
          </Link>


                    <div className="flex flex-col items-start gap-5 md:flex-row md:items-center">
            <div className="shrink-0 rounded-2xl border border-white/15 bg-white/5 p-4">
              <Shield
                aria-hidden="true"
                className="h-8 w-8 text-blue-400"
              />
            </div>

            <div className="w-full min-w-0 max-w-5xl">
              <h1 className="break-words text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                Datenschutzerklärung
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
                Informationen über die
                Verarbeitung
                personenbezogener Daten
                gemäß der
                Datenschutz-Grundverordnung
                (DSGVO).
              </p>

              <p className="mt-3 text-sm text-zinc-500">
                Stand: August 2026
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Content */}

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Navigation */}

          <aside className="h-fit rounded-3xl border border-white/15 bg-white/[0.05] p-6 backdrop-blur lg:sticky lg:top-28">
            <h2 className="text-lg font-semibold text-white">
              Inhaltsverzeichnis
            </h2>

            <nav
              aria-label="Inhaltsverzeichnis der Datenschutzerklärung"
              className="mt-6 flex flex-col gap-4"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Sections */}

          <div className="space-y-8">
            <PrivacySection
              id="general"
              title="1. Allgemeine Hinweise"
            >
              <p>
                Der Schutz Ihrer
                personenbezogenen Daten ist
                uns ein wichtiges Anliegen.
                Diese Datenschutzerklärung
                informiert Sie darüber,
                welche Daten beim Besuch
                dieser Website verarbeitet
                werden, zu welchen Zwecken
                dies geschieht und welche
                Rechte Ihnen zustehen.
              </p>

              <p>
                Personenbezogene Daten sind
                alle Informationen, die sich
                auf eine identifizierte oder
                identifizierbare natürliche
                Person beziehen. Dazu können
                insbesondere Name,
                Kontaktdaten, IP-Adresse und
                Angaben in einer
                Projektanfrage gehören.
              </p>
            </PrivacySection>

            <PrivacySection
              id="controller"
              title="2. Verantwortlicher"
            >
              <div>
                <p className="font-medium text-white">
                  TP-Digital
                </p>

                <p>
                  Inhaber: Taras Pakhaliuk
                </p>

                <p>
                  Neubiberger Straße 13
                </p>

                <p>81737 München</p>

                <p>Deutschland</p>
              </div>

              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@tpdigitallab.de"
                  className="text-blue-300 underline underline-offset-4 hover:text-blue-200"
                >
                  info@tpdigitallab.de
                </a>
              </p>
            </PrivacySection>

            <PrivacySection
              id="hosting"
              title="3. Hosting bei Vercel"
            >
              <p>
                Diese Website wird über
                Vercel Inc., 340 S Lemon Ave
                #4133, Walnut, CA 91789, USA,
                bereitgestellt.
              </p>

              <p>
                Beim Aufruf der Website
                verarbeitet Vercel technisch
                erforderliche Daten, die zur
                Auslieferung, Stabilität und
                Sicherheit der Website
                benötigt werden. Dazu können
                insbesondere IP-Adresse,
                Datum und Uhrzeit des
                Zugriffs, aufgerufene URL,
                Referrer, Browser- und
                Geräteinformationen gehören.
              </p>

              <p>
                Die Verarbeitung erfolgt auf
                Grundlage von Art. 6 Abs. 1
                lit. f DSGVO. Unser
                berechtigtes Interesse liegt
                in der sicheren, schnellen
                und zuverlässigen
                Bereitstellung der Website.
              </p>

              <p>
                Weitere Informationen:{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 underline underline-offset-4 hover:text-blue-200"
                >
                  Datenschutzhinweise von
                  Vercel
                </a>
                .
              </p>
            </PrivacySection>

            <PrivacySection
              id="logs"
              title="4. Server-Log-Dateien"
            >
              <p>
                Beim Besuch der Website
                können automatisch
                technische Informationen in
                Server-Log-Dateien
                verarbeitet werden. Dazu
                gehören insbesondere
                IP-Adresse, Browsertyp,
                Betriebssystem, Datum und
                Uhrzeit des Zugriffs,
                Referrer und aufgerufene
                Seiten.
              </p>

              <p>
                Die Verarbeitung erfolgt auf
                Grundlage von Art. 6 Abs. 1
                lit. f DSGVO. Sie dient der
                Fehleranalyse, dem Schutz
                vor Angriffen und dem
                stabilen Betrieb der
                Website.
              </p>
            </PrivacySection>

            <PrivacySection
              id="contact-form"
              title="5. Kontakt- und Projektanfragen"
            >
              <p>
                Wenn Sie über den
                Projektkalkulator eine
                Anfrage senden, verarbeiten
                wir die von Ihnen
                eingegebenen Daten. Dazu
                gehören insbesondere
                Vorname, Nachname,
                E-Mail-Adresse, optional
                Telefonnummer,
                Budgetangabe, gewünschter
                Zeitrahmen,
                Projektbeschreibung sowie
                die im Kalkulator
                ausgewählten Leistungen und
                Preisangaben.
              </p>

              <p>
                Die Daten werden verwendet,
                um Ihre Anfrage zu
                bearbeiten, Rückfragen zu
                beantworten und ein
                mögliches Vertragsverhältnis
                vorzubereiten.
              </p>

              <p>
                Die Verarbeitung erfolgt
                gemäß Art. 6 Abs. 1 lit. b
                DSGVO, soweit sie zur
                Durchführung
                vorvertraglicher Maßnahmen
                erforderlich ist. Bei
                allgemeinen Anfragen erfolgt
                die Verarbeitung ergänzend
                auf Grundlage von Art. 6
                Abs. 1 lit. f DSGVO. Unser
                berechtigtes Interesse liegt
                in der Bearbeitung der an
                uns gerichteten
                Kommunikation.
              </p>
            </PrivacySection>

            <PrivacySection
              id="telegram"
              title="6. Übermittlung von Anfragen an Telegram"
            >
              <p>
                Zur internen Benachrichtigung
                über neue Projektanfragen
                werden die über das
                Kontaktformular
                übermittelten Angaben über
                die Telegram Bot API an
                einen von uns verwalteten
                Telegram-Chat gesendet.
              </p>

              <p>
                Dabei können die in der
                Anfrage enthaltenen
                personenbezogenen Daten an
                Telegram übermittelt und
                innerhalb der
                Telegram-Cloud verarbeitet
                werden. Bitte übermitteln
                Sie im Freitextfeld keine
                besonderen Kategorien
                personenbezogener Daten,
                beispielsweise Gesundheits-
                oder besonders vertrauliche
                Informationen.
              </p>

              <p>
                Rechtsgrundlage ist Art. 6
                Abs. 1 lit. b DSGVO, soweit
                die Verarbeitung zur
                Bearbeitung Ihrer Anfrage
                und zur Durchführung
                vorvertraglicher Maßnahmen
                erforderlich ist.
              </p>

              <p>
                Weitere Informationen:{" "}
                <a
                  href="https://telegram.org/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 underline underline-offset-4 hover:text-blue-200"
                >
                  Datenschutzerklärung von
                  Telegram
                </a>
                .
              </p>
            </PrivacySection>

            <PrivacySection
              id="turnstile"
              title="7. Cloudflare Turnstile"
            >
              <p>
                Zum Schutz des
                Kontaktformulars vor
                automatisierten Anfragen,
                Spam und Missbrauch verwenden
                wir Cloudflare Turnstile,
                einen Dienst von Cloudflare.
              </p>

              <p>
                Turnstile führt technische
                Prüfungen im Browser durch
                und wertet Signale der
                Browser- und
                Geräteumgebung aus, um
                automatisierte Zugriffe zu
                erkennen. Dabei können
                insbesondere IP-Adresse,
                Browser- und
                Geräteinformationen,
                Interaktionsdaten sowie ein
                Verifikationstoken
                verarbeitet werden.
              </p>

              <p>
                Die Verarbeitung erfolgt auf
                Grundlage von Art. 6 Abs. 1
                lit. f DSGVO. Unser
                berechtigtes Interesse liegt
                im Schutz der Website und
                des Kontaktformulars vor
                missbräuchlicher Nutzung.
                Soweit der Zugriff auf
                Informationen im Endgerät
                technisch erforderlich ist,
                erfolgt dies nach § 25 Abs. 2
                TDDDG.
              </p>

              <p>
                Weitere Informationen:{" "}
                <a
                  href="https://www.cloudflare.com/privacypolicy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 underline underline-offset-4 hover:text-blue-200"
                >
                  Datenschutzerklärung von
                  Cloudflare
                </a>
                .
              </p>
            </PrivacySection>

            <PrivacySection
              id="cookies"
              title="8. Cookies und Einwilligungsverwaltung"
            >
              <p>
                Beim ersten Besuch der
                Website können Sie
                entscheiden, ob optionale
                Analyse- und
                Marketing-Technologien
                geladen werden dürfen.
                Google Analytics und Google
                Ads werden erst nach Ihrer
                ausdrücklichen Zustimmung
                geladen.
              </p>

              <p>
                Ihre Auswahl wird im lokalen
                Speicher Ihres Browsers
                unter dem Eintrag{" "}
                <code className="rounded bg-white/10 px-2 py-1 text-sm text-white">
                  tp_cookie_consent
                </code>{" "}
                gespeichert. Diese
                Speicherung ist technisch
                erforderlich, damit die
                Website Ihre Entscheidung
                berücksichtigen kann. Sie
                können den Eintrag jederzeit
                über Ihre
                Browsereinstellungen
                löschen.
              </p>

              <p>
                Sie können Ihre Entscheidung
                außerdem jederzeit über die
                Schaltfläche
                „Cookie-Einstellungen“ am
                unteren linken Rand der
                Website ändern. Der Widerruf
                berührt nicht die
                Rechtmäßigkeit der bis zum
                Widerruf erfolgten
                Verarbeitung.
              </p>
            </PrivacySection>

            <PrivacySection
              id="analytics"
              title="9. Google Analytics 4"
            >
              <p>
                Nach Ihrer Einwilligung
                verwenden wir Google
                Analytics 4, einen
                Webanalysedienst von Google.
                Der Dienst hilft uns zu
                verstehen, wie Besucher die
                Website verwenden und wie
                wir Inhalte und
                Benutzerführung verbessern
                können.
              </p>

              <p>
                Google Analytics kann
                Informationen über
                Seitenaufrufe, Sitzungen,
                ungefähren Standort,
                Browser, Gerät,
                Betriebssystem und
                Interaktionen auf der
                Website verarbeiten. Dabei
                können Cookies wie{" "}
                <code className="rounded bg-white/10 px-2 py-1 text-sm text-white">
                  _ga
                </code>{" "}
                und{" "}
                <code className="rounded bg-white/10 px-2 py-1 text-sm text-white">
                  _ga_*
                </code>{" "}
                gesetzt werden. Nach Angaben
                von Google beträgt ihre
                reguläre Speicherdauer bis
                zu zwei Jahre.
              </p>

              <p>
                Die Verarbeitung erfolgt
                ausschließlich auf Grundlage
                Ihrer Einwilligung gemäß
                Art. 6 Abs. 1 lit. a DSGVO
                und, soweit Informationen
                auf Ihrem Endgerät
                gespeichert oder ausgelesen
                werden, gemäß § 25 Abs. 1
                TDDDG.
              </p>

              <p>
                Weitere Informationen:{" "}
                <a
                  href="https://support.google.com/analytics/answer/6004245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 underline underline-offset-4 hover:text-blue-200"
                >
                  Datenschutz bei Google
                  Analytics
                </a>
                .
              </p>
            </PrivacySection>

            <PrivacySection
              id="google-ads"
              title="10. Google Ads und Conversion Tracking"
            >
              <p>
                Nach Ihrer Einwilligung
                verwenden wir Google Ads
                Conversion Tracking. Damit
                können wir erkennen, ob eine
                Werbeanzeige zu einer
                Projektanfrage geführt hat,
                und die Wirksamkeit unserer
                Werbung messen.
              </p>

              <p>
                Dabei können Informationen
                über Anzeigeninteraktionen,
                besuchte Seiten,
                abgeschlossene
                Projektanfragen, Browser,
                Gerät und pseudonyme
                Kennungen verarbeitet
                werden. Über die Website
                werden keine Namen,
                E-Mail-Adressen oder Inhalte
                des Kontaktformulars an
                Google Analytics oder Google
                Ads übertragen.
              </p>

              <p>
                Die Verarbeitung erfolgt
                ausschließlich auf Grundlage
                Ihrer Einwilligung gemäß
                Art. 6 Abs. 1 lit. a DSGVO
                und § 25 Abs. 1 TDDDG. Sie
                können die Einwilligung
                jederzeit über
                „Cookie-Einstellungen“
                widerrufen.
              </p>

              <p>
                Weitere Informationen:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 underline underline-offset-4 hover:text-blue-200"
                >
                  Datenschutzerklärung von
                  Google
                </a>
                .
              </p>
            </PrivacySection>

            <PrivacySection
              id="international-transfers"
              title="11. Datenübermittlung in Drittländer"
            >
              <p>
                Einige der eingesetzten
                Dienstleister haben ihren
                Sitz oder technische
                Infrastruktur außerhalb des
                Europäischen
                Wirtschaftsraums,
                insbesondere in den USA.
              </p>

              <p>
                Soweit personenbezogene
                Daten in Drittländer
                übermittelt werden, erfolgt
                dies auf Grundlage der
                jeweils anwendbaren
                gesetzlichen
                Übermittlungsmechanismen,
                beispielsweise eines
                Angemessenheitsbeschlusses,
                einer Zertifizierung nach
                dem EU-US Data Privacy
                Framework oder
                Standardvertragsklauseln der
                Europäischen Kommission.
              </p>
            </PrivacySection>

            <PrivacySection
              id="retention"
              title="12. Speicherdauer"
            >
              <p>
                Wir speichern
                personenbezogene Daten nur
                so lange, wie dies für den
                jeweiligen Zweck
                erforderlich ist oder
                gesetzliche
                Aufbewahrungspflichten
                bestehen.
              </p>

              <p>
                Daten aus Projektanfragen
                werden gelöscht, wenn die
                Anfrage abschließend
                bearbeitet wurde und keine
                gesetzlichen,
                vertraglichen oder
                berechtigten Gründe für eine
                weitere Speicherung
                bestehen. Bei einer
                anschließenden
                Geschäftsbeziehung gelten
                die gesetzlichen
                handels- und
                steuerrechtlichen
                Aufbewahrungsfristen.
              </p>

              <p>
                Analyse- und
                Marketingdaten richten sich
                nach den Einstellungen und
                Speicherfristen der
                jeweiligen Dienste. Ihre
                lokale
                Einwilligungsentscheidung
                bleibt gespeichert, bis Sie
                sie ändern oder den lokalen
                Speicher Ihres Browsers
                löschen.
              </p>
            </PrivacySection>

            <PrivacySection
              id="rights"
              title="13. Rechte betroffener Personen"
            >
              <p>
                Ihnen stehen nach Maßgabe
                der gesetzlichen
                Voraussetzungen insbesondere
                folgende Rechte zu:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Auskunft über Ihre
                  gespeicherten Daten,
                </li>

                <li>
                  Berichtigung unrichtiger
                  Daten,
                </li>

                <li>
                  Löschung Ihrer Daten,
                </li>

                <li>
                  Einschränkung der
                  Verarbeitung,
                </li>

                <li>
                  Datenübertragbarkeit,
                </li>

                <li>
                  Widerspruch gegen
                  Verarbeitungen auf
                  Grundlage berechtigter
                  Interessen,
                </li>

                <li>
                  Widerruf einer erteilten
                  Einwilligung für die
                  Zukunft.
                </li>
              </ul>

              <p>
                Sie haben außerdem das Recht,
                sich bei einer zuständigen
                Datenschutzaufsichtsbehörde
                zu beschweren. Zuständig
                kann insbesondere die
                Aufsichtsbehörde Ihres
                gewöhnlichen Aufenthaltsorts,
                Ihres Arbeitsplatzes oder
                des Orts des mutmaßlichen
                Verstoßes sein.
              </p>
            </PrivacySection>

            <PrivacySection
              id="ssl"
              title="14. SSL-/TLS-Verschlüsselung"
            >
              <p>
                Diese Website verwendet eine
                SSL-/TLS-Verschlüsselung, um
                übertragene Daten vor dem
                Zugriff unbefugter Dritter
                zu schützen. Eine
                verschlüsselte Verbindung
                erkennen Sie an{" "}
                <code className="rounded bg-white/10 px-2 py-1 text-sm text-white">
                  https://
                </code>{" "}
                und dem Schloss-Symbol Ihres
                Browsers.
              </p>
            </PrivacySection>

            <PrivacySection
              id="changes"
              title="15. Änderung dieser Datenschutzerklärung"
            >
              <p>
                Wir können diese
                Datenschutzerklärung
                aktualisieren, wenn sich die
                Website, die eingesetzten
                Dienste oder die
                rechtlichen Anforderungen
                ändern. Es gilt die jeweils
                auf dieser Seite
                veröffentlichte Fassung.
              </p>
            </PrivacySection>
          </div>
        </div>
      </section>
    </main>
  );
}