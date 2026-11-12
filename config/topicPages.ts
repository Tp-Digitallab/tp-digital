import type { PackageChoice } from "@/components/contact/LeadForm";
import type { ServicePageKey } from "@/config/servicePageTranslations";

export type TopicPageData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  priceLabel: string;
  price: string;
  priceNote: string;
  cta: string;
  demo?: { slug: string; title: string; text: string; cta: string };
  demo2?: { slug: string; title: string; text: string; cta: string };
  needsEyebrow: string;
  needsTitle: string;
  needs: { title: string; text: string }[];
  includedEyebrow: string;
  includedTitle: string;
  included: string[];
  faq: { question: string; answer: string }[];
  formTitle: string;
  formText: string;
  formService: ServicePageKey;
  formPackage: PackageChoice;
};

const common = {
  priceLabel: "Fertige Website:",
  priceNote: "Festpreis vor dem Start",
  needsEyebrow: "Worauf es ankommt",
  includedEyebrow: "Im Preis enthalten",
  formService: "webdesign" as ServicePageKey,
  formPackage: "launch" as PackageChoice,
};

export const topicPages: Record<string, TopicPageData> = {
  "website-nagelstudio": {
    ...common,
    slug: "website-nagelstudio",
    metaTitle: "Website für Nagelstudio & Beauty-Studio ab 290 € | TP Digital Lab",
    metaDescription: "Website für Ihr Nagelstudio: Preisliste, Galerie, Online-Termin über Treatwell oder Fresha. Fertiges Design zum Ansehen, in 3 Tagen online. Persönlich aus München.",
    eyebrow: "Website für Nagelstudios",
    title: "Eine Website, über die Kundinnen",
    accent: "direkt einen Termin buchen.",
    intro: "Die meisten Kundinnen finden Sie über Google Maps oder Instagram und wollen dann drei Dinge wissen: Was kostet es, wie sehen Ihre Arbeiten aus, wann ist ein Termin frei. Genau das zeigt Ihre neue Website auf einen Blick.",
    price: "290 €",
    cta: "Website anfragen",
    demo: { slug: "beauty", title: "Demo: Nagel- und Beauty-Studio", text: "Freie Termine der Woche, Preisliste wie im Salon, Galerie mit Preisen. So kann Ihre Website aussehen, mit Ihrem Namen, Ihren Fotos und Ihren Preisen.", cta: "Live-Demo ansehen" },
    demo2: { slug: "studio", title: "Demo 2: helles Studio in Rosé, 500 €", text: "Mit Admin-Bereich inklusive: Preise, Beschreibungen und Texte ändern Sie selbst, ohne mich. Drei Sprachen: Deutsch, Russisch und Ukrainisch. Dazu Preisliste zum Aufklappen und Galerie zum Wischen.", cta: "Zweites Design ansehen" },
    needsTitle: "Was Kundinnen auf Ihrer Website suchen.",
    needs: [
      { title: "Preise ohne Nachfragen", text: "Eine klare Preisliste für Maniküre, Gel und Pediküre. Wer den Preis sieht, bucht eher und fragt weniger per WhatsApp nach." },
      { title: "Fotos Ihrer Arbeiten", text: "Ihre echten Nägel, nicht Stockfotos. Eine Galerie, die Sie selbst erweitern oder mit Instagram verbinden können." },
      { title: "Termin in einer Minute", text: "Ein Klick zu Treatwell, Fresha, Planity oder direkt zu WhatsApp. Ihr Buchungssystem bleibt, die Website führt die Kundinnen hin." },
      { title: "Bei Google gefunden werden", text: "Ihre Website stärkt Ihr Google-Profil. Mit Adresse, Öffnungszeiten und Leistungen in der Sprache Ihrer Kundinnen." },
    ],
    includedTitle: "Was Sie ab 290 € bekommen.",
    included: [
      "Fertiges Design, angepasst an Ihr Logo, Ihre Farben und Ihre Fotos",
      "Preisliste, Galerie, Über-mich, Anfahrt und Öffnungszeiten",
      "Verbindung zu Ihrem Buchungssystem oder WhatsApp",
      "Impressum und Datenschutz für Deutschland",
      "Mobil optimiert, schnell geladen, bei Google angemeldet",
      "Online in 3 Tagen, nachdem Sie Texte und Fotos geschickt haben",
    ],
    faq: [
      { question: "Ich habe schon Treatwell. Brauche ich trotzdem eine Website?", answer: "Ja, wenn Sie nicht nur über Treatwell gefunden werden wollen. Auf Ihrer eigenen Website zahlen Sie keine Provision pro Neukundin, und Sie zeigen Ihr Studio so, wie Sie es möchten. Die Buchung kann trotzdem über Treatwell laufen." },
      { question: "Kann ich Preise später selbst ändern?", answer: "Ja. Auf Wunsch bekommen Sie einen einfachen Zugang, über den Sie Preise und Texte ohne Programmierkenntnisse ändern." },
      { question: "Was, wenn ich noch keine guten Fotos habe?", answer: "Wir starten mit den Fotos, die Sie haben, und tauschen sie später aus. Gute Handyfotos bei Tageslicht reichen oft schon." },
      { question: "Bekommt ein anderes Nagelstudio in meiner Stadt dasselbe Design?", answer: "Nein. Jedes fertige Design vergebe ich pro Stadt nur einmal." },
    ],
    formTitle: "Ihre Studio-Website anfragen.",
    formText: "Schreiben Sie kurz Name und Ort Ihres Studios. Ich melde mich mit einem Vorschlag und dem Festpreis.",
  },
  "website-handwerker": {
    ...common,
    slug: "website-handwerker",
    metaTitle: "Website für Handwerker ab 290 € | Maler, Renovierung, Elektrik | TP Digital Lab",
    metaDescription: "Website für Ihren Handwerksbetrieb: Leistungen mit Preisen, Projekte, Einsatzgebiet und Anfrageformular. Fertiges Design zum Ansehen, in 3 Tagen online. Aus München.",
    eyebrow: "Website für Handwerker",
    title: "Eine Website, die Anfragen bringt,",
    accent: "während Sie auf der Baustelle sind.",
    intro: "Kunden vergleichen drei Betriebe, bevor sie anrufen. Wer Preise, echte Projekte und ein klares Einsatzgebiet zeigt, bekommt die Anfrage. Ihre Website erledigt das Erklären, Sie machen die Arbeit.",
    price: "290 €",
    cta: "Website anfragen",
    demo: { slug: "handwerk", title: "Demo: Maler und Renovierung", text: "Preisrechner pro Quadratmeter, Projekte mit Dauer und Umfang, Ablauf bis zum Festpreis. Für mehr Seiten gibt es auch die Firmenwebsite für 790 €.", cta: "Live-Demo ansehen" },
    needsTitle: "Was Kunden vor dem Anruf wissen wollen.",
    needs: [
      { title: "Was kostet das ungefähr?", text: "Ein Preisrechner oder Richtpreise pro Quadratmeter. Spart Ihnen Anrufe von Leuten, für die der Preis nicht passt." },
      { title: "Haben die das schon gemacht?", text: "Projekte mit Ort, Dauer und Umfang. Das überzeugt mehr als jeder Werbetext." },
      { title: "Kommen die zu mir?", text: "Ihr Einsatzgebiet mit Stadtteilen und Orten. So finden Sie auch Kunden, die nach Ihrem Ort suchen." },
      { title: "Wie schnell geht es los?", text: "Ihr nächster freier Termin und ein klarer Ablauf bis zum Festpreis. Das nimmt die Unsicherheit." },
    ],
    includedTitle: "Was Sie ab 290 € bekommen.",
    included: [
      "Fertiges Design, angepasst an Ihr Logo, Ihre Farben und Ihre Fotos",
      "Leistungen mit Richtpreisen, Projekte, Einsatzgebiet, Ablauf",
      "Anfrageformular, Telefon und WhatsApp mit einem Klick",
      "Impressum und Datenschutz für Deutschland",
      "Mobil optimiert, schnell geladen, bei Google angemeldet",
      "Online in 3 Tagen, nachdem Sie Texte und Fotos geschickt haben",
    ],
    faq: [
      { question: "Ich habe kaum Zeit für Texte. Geht das trotzdem?", answer: "Ja. Sie schicken mir Stichpunkte oder eine Sprachnachricht, ich mache daraus die Texte. Sie prüfen nur noch." },
      { question: "Reicht eine Seite oder brauche ich mehr?", answer: "Für den Start reicht eine Seite. Wenn Sie viele Leistungen haben und bei Google zu jeder gefunden werden wollen, ist die Firmenwebsite mit eigener Seite pro Leistung besser." },
      { question: "Kann ich Projekte später selbst ergänzen?", answer: "Ja, auf Wunsch mit einem einfachen Zugang. Oder Sie schicken mir Fotos, und ich ergänze sie." },
      { question: "Bekommt ein Konkurrent dasselbe Design?", answer: "Nein. Jedes fertige Design vergebe ich pro Stadt nur einmal." },
    ],
    formTitle: "Website für Ihren Betrieb anfragen.",
    formText: "Schreiben Sie kurz Gewerk und Ort. Ich melde mich mit einem Vorschlag und dem Festpreis.",
  },
  "website-cafe": {
    ...common,
    slug: "website-cafe",
    metaTitle: "Website für Café, Bäckerei & Restaurant ab 290 € | TP Digital Lab",
    metaDescription: "Website für Ihr Café: Speisekarte, Öffnungszeiten mit Live-Status, Mittagstisch und Tischreservierung. Fertiges Design zum Ansehen, in 3 Tagen online. Aus München.",
    eyebrow: "Website für Cafés und Gastronomie",
    title: "Eine Website, die zeigt:",
    accent: "Wir haben gerade geöffnet.",
    intro: "Gäste suchen kurz vor dem Besuch: Ist offen? Was gibt es heute? Kann ich reservieren? Ihre Website beantwortet das sofort, auf dem Handy, ohne PDF-Speisekarte zum Zoomen.",
    price: "290 €",
    cta: "Website anfragen",
    demo: { slug: "cafe", title: "Demo: Café und Gastronomie", text: "Geöffnet-Status nach Uhrzeit, Mittagstisch des Tages, Speisekarte mit vegan-Markierung und Tischreservierung.", cta: "Live-Demo ansehen" },
    needsTitle: "Was Gäste auf Ihrer Website suchen.",
    needs: [
      { title: "Ist jetzt offen?", text: "Öffnungszeiten mit Live-Status. Der heutige Tag ist hervorgehoben, Feiertage tragen Sie selbst ein." },
      { title: "Was gibt es?", text: "Eine lesbare Speisekarte statt PDF, mit Preisen und vegan- oder vegetarisch-Hinweis." },
      { title: "Heute Mittag?", text: "Mittagstisch der Woche, den Sie in einer Minute ändern. Bringt Stammgäste aus den Büros nebenan." },
      { title: "Platz für sechs?", text: "Tischreservierung per Formular oder über Ihr System. Gruppen rufen an, alle anderen buchen online." },
    ],
    includedTitle: "Was Sie ab 290 € bekommen.",
    included: [
      "Fertiges Design, angepasst an Ihr Logo, Ihre Farben und Ihre Fotos",
      "Speisekarte, Öffnungszeiten, Mittagstisch, Anfahrt",
      "Reservierung per Formular, Telefon oder Ihrem System",
      "Impressum und Datenschutz für Deutschland",
      "Mobil optimiert, schnell geladen, bei Google angemeldet",
      "Online in 3 Tagen, nachdem Sie Texte und Fotos geschickt haben",
    ],
    faq: [
      { question: "Kann ich die Speisekarte selbst ändern?", answer: "Ja. Auf Wunsch bekommen Sie einen einfachen Zugang für Karte, Preise und Mittagstisch, ganz ohne Programmierkenntnisse." },
      { question: "Funktioniert das mit meinem Reservierungssystem?", answer: "Ja, ich verbinde die Website mit dem System, das Sie schon nutzen. Ohne System kommen Anfragen per E-Mail oder WhatsApp." },
      { question: "Brauche ich professionelle Fotos?", answer: "Am Anfang nicht. Gute Handyfotos bei Tageslicht reichen, später können wir sie austauschen." },
      { question: "Bekommt ein anderes Café dasselbe Design?", answer: "Nein. Jedes fertige Design vergebe ich pro Stadt nur einmal." },
    ],
    formTitle: "Website für Ihr Lokal anfragen.",
    formText: "Schreiben Sie kurz Name und Ort. Ich melde mich mit einem Vorschlag und dem Festpreis.",
  },
  "wordpress-wartung-muenchen": {
    slug: "wordpress-wartung-muenchen",
    metaTitle: "WordPress-Wartung München: Updates, Backups, Fehler beheben | TP Digital Lab",
    metaDescription: "WordPress-Wartung für kleine Unternehmen in München: Updates, Backups, Sicherheit und schnelle Hilfe bei Fehlern. Erst ein kostenloser Check, dann ein fester Monatspreis.",
    eyebrow: "WordPress-Wartung in München",
    title: "Ihre WordPress-Website läuft.",
    accent: "Und Sie müssen sich nicht darum kümmern.",
    intro: "Ungepflegte WordPress-Seiten werden langsam, unsicher und gehen irgendwann kaputt, meistens nach einem Update. Ich halte Ihre Website aktuell, sichere sie regelmäßig und repariere, wenn etwas klemmt.",
    priceLabel: "Ablauf:",
    price: "kostenloser Check",
    priceNote: "danach fester Monatspreis",
    cta: "Kostenlosen Check anfragen",
    needsEyebrow: "Typische Probleme",
    needsTitle: "Kommt Ihnen das bekannt vor?",
    needs: [
      { title: "Seit dem Update geht etwas nicht", text: "Ein Plugin verträgt sich nicht mit der neuen WordPress-Version, das Kontaktformular sendet nichts mehr, die Seite ist weiß." },
      { title: "Die Seite lädt ewig", text: "Zu große Bilder, zu viele Plugins, kein Caching. Langsame Seiten verlieren Besucher und Google-Positionen." },
      { title: "Niemand kümmert sich mehr", text: "Die Agentur gibt es nicht mehr, der Neffe hat keine Zeit. Updates sind seit Monaten offen." },
      { title: "Angst vor Hackern", text: "Veraltete Plugins sind das häufigste Einfallstor. Ein Backup gibt es nicht oder niemand weiß, wo." },
    ],
    includedEyebrow: "In der Wartung enthalten",
    includedTitle: "Was ich jeden Monat mache.",
    included: [
      "Updates von WordPress, Theme und Plugins, vorher mit Backup",
      "Tägliche oder wöchentliche Backups, getrennt vom Server gespeichert",
      "Prüfung von Kontaktformular und wichtigen Seiten nach jedem Update",
      "Sicherheits-Check und Entfernen unnötiger Plugins",
      "Kleine Änderungen wie Texte, Bilder oder Öffnungszeiten",
      "Kurzer Bericht per E-Mail, was gemacht wurde",
    ],
    faq: [
      { question: "Was kostet die Wartung?", answer: "Das hängt von der Größe der Website und der Zahl der Plugins ab. Nach dem kostenlosen Check bekommen Sie einen festen Monatspreis, monatlich kündbar." },
      { question: "Meine Website ist gerade kaputt. Helfen Sie auch einmalig?", answer: "Ja. Fehler beheben geht auch ohne Wartungsvertrag, zum vorher vereinbarten Festpreis." },
      { question: "Muss ich Zugangsdaten herausgeben?", answer: "Für die Wartung brauche ich einen eigenen Admin-Zugang. Den legen Sie an und können ihn jederzeit wieder löschen. Ihr Passwort brauche ich nicht." },
      { question: "Meine Seite wurde von einer Agentur gebaut. Geht das trotzdem?", answer: "Ja, solange es WordPress ist. Beim Check sehe ich, wie die Seite aufgebaut ist, und sage Ihnen ehrlich, ob Wartung oder ein Neubau sinnvoller ist." },
    ],
    formTitle: "Kostenlosen WordPress-Check anfragen.",
    formText: "Schicken Sie mir die Adresse Ihrer Website. Ich schaue sie mir an und melde mich mit dem Ergebnis und einem Festpreis.",
    formService: "digitalSolutions",
    formPackage: "custom",
  },
  "seo-audit-muenchen": {
    slug: "seo-audit-muenchen",
    metaTitle: "Technisches SEO-Audit München: Warum Ihre Website nicht gefunden wird | TP Digital Lab",
    metaDescription: "Technisches SEO-Audit für kleine Unternehmen in München: Indexierung, Ladezeit, Titel, Struktur und lokale Auffindbarkeit prüfen. Erste Prüfung kostenlos, danach Maßnahmenplan zum Festpreis.",
    eyebrow: "Technisches SEO-Audit in München",
    title: "Warum findet Google Ihre Website nicht?",
    accent: "Ich zeige die Ursachen und was zu tun ist.",
    intro: "Oft ist eine Website nicht wegen der Konkurrenz unsichtbar, sondern wegen technischer Fehler: Seiten, die nicht im Index landen, ein langsames Handy-Erlebnis, fehlende Titel und Beschreibungen. Ich prüfe Ihre Seite und gebe Ihnen eine klare Liste, was im Weg steht und in welcher Reihenfolge Sie es beheben.",
    priceLabel: "Ablauf:",
    price: "erste Prüfung kostenlos",
    priceNote: "danach Maßnahmenplan zum Festpreis",
    cta: "Website-Prüfung anfragen",
    needsEyebrow: "Was ich prüfe",
    needsTitle: "Fünf Stellen, an denen Websites am häufigsten Besucher verlieren.",
    needs: [
      { title: "Indexierung", text: "Ob Ihre Seiten überhaupt bei Google landen. Fehler in der robots.txt, für den Index gesperrte Seiten, kaputte Weiterleitungen und eine falsche Sitemap sind sehr häufig." },
      { title: "Geschwindigkeit und Handy", text: "Die meisten Besucher kommen mit dem Smartphone. Schwere Bilder, unnötige Skripte und unbequeme Buttons schrecken ab und drücken das Ranking." },
      { title: "Titel und Beschreibungen", text: "Jede Seite braucht einen eigenen Titel, eine Beschreibung und eine H1-Überschrift, die zu dem passt, was Kunden wirklich suchen. Doppelte oder leere Felder erschweren es Google, die Seite zu verstehen." },
      { title: "Struktur und Links", text: "Klare Adressen, Verlinkung zwischen den Seiten und keine toten Links. So finden Google und Besucher schneller, was sie suchen." },
      { title: "Lokale Suche", text: "Für Betriebe mit Kunden vor Ort zählen ein Google-Unternehmensprofil, überall gleiche Angaben zu Name, Adresse und Telefon und Bewertungen." },
    ],
    includedEyebrow: "Das bekommen Sie",
    includedTitle: "Das Ergebnis des Audits.",
    included: [
      "Liste der gefundenen Fehler in verständlicher Sprache, ohne Fachchinesisch",
      "Prioritäten: was zuerst behoben werden sollte und was warten kann",
      "Konkrete Vorschläge für Titel und Beschreibungen Ihrer wichtigsten Seiten",
      "Prüfung von Indexierung und Sitemap in der Google Search Console",
      "Einschätzung von Ladezeit und Handy-Bedienung",
      "Auf Wunsch setze ich die Korrekturen selbst um, zum vorher vereinbarten Preis",
    ],
    faq: [
      { question: "Was kostet ein Audit?", answer: "Die erste Prüfung ist kostenlos: Ich schaue mir Ihre Seite an und schreibe kurz, was mir auffällt. Wenn Sie einen ausführlichen Plan und die Umsetzung möchten, bekommen Sie vor dem Start einen Festpreis." },
      { question: "Wie schnell verbessert sich mein Ranking?", answer: "Feste Zeiten oder Plätze kann ich nicht versprechen. Das Beheben technischer Fehler räumt Hindernisse weg, Ergebnisse in der Suche zeigen sich aber meist erst nach einigen Wochen und hängen von der Konkurrenz ab." },
      { question: "Brauchen Sie Zugang zu meiner Website?", answer: "Für die erste Prüfung nicht, die Adresse reicht. Für Korrekturen brauche ich einen Zugang, den Sie jederzeit wieder entziehen können." },
      { question: "Geht das auch bei einem Baukasten oder WordPress?", answer: "Ja. Manche Fehler lassen sich in jedem System beheben. Was auf Ihrer Plattform genau möglich ist, sage ich Ihnen nach der Prüfung ehrlich." },
    ],
    formTitle: "Kostenlose Website-Prüfung anfragen.",
    formText: "Schicken Sie mir die Adresse Ihrer Website und Ihre Stadt. Ich schaue sie mir an und melde mich mit dem Ergebnis und einem Preis für die Korrekturen.",
    formService: "seo",
    formPackage: "custom",
  },
};

export const topicSlugs = Object.keys(topicPages);
