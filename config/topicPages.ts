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
    metaTitle: "SEO-Audit München: Warum Ihre Website nicht gefunden wird",
    metaDescription: "Ihre Website ist bei Google unsichtbar? Ich finde die Ursachen und schicke Ihnen eine verständliche Liste, was zuerst zu tun ist. Für kleine Unternehmen in München, erste Prüfung kostenlos.",
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
  "sozdanie-saytov-v-germanii": {
    slug: "sozdanie-saytov-v-germanii",
    metaTitle: "Создание сайтов в Германии под ключ, от 300 € | TP Digital Lab",
    metaDescription: "Заказать сайт в Германии с общением на русском: лендинг 300 €, сайт компании 790 €, интернет-магазин 1 500 €. Impressum, мобильная версия, фиксированная цена до старта.",
    eyebrow: "Создание сайтов в Германии",
    title: "Сайт под ключ для бизнеса в Германии.",
    accent: "Обсуждаем по-русски, клиенты видят его на немецком.",
    intro: "Я разрабатываю сайты для самозанятых и малого бизнеса по всей Германии: от одностраничного лендинга до интернет-магазина. Вы объясняете задачу на родном языке, а получаете сайт для немецких клиентов: с понятными текстами, Impressum и Datenschutz, удобной мобильной версией и базовой настройкой для Google.",
    priceLabel: "Сайт под ключ:",
    price: "от 300 €",
    priceNote: "фиксированная цена до старта",
    cta: "Обсудить сайт",
    demo: { slug: "studio", title: "Пример: сайт студии на трёх языках", text: "Немецкий, русский и украинский, админ-панель, в которой владелица сама меняет цены и тексты. Так может выглядеть и ваш сайт, с вашими фото и ценами.", cta: "Посмотреть пример" },
    demo2: { slug: "handwerk", title: "Пример: сайт мастера по ремонту", text: "Калькулятор цены за квадратный метр, проекты со сроками и объёмом, понятный путь до заявки.", cta: "Посмотреть второй пример" },
    needsEyebrow: "Что важно в Германии",
    needsTitle: "Чем сайт для немецкого рынка отличается от обычного.",
    needs: [
      { title: "Обязательные страницы", text: "Impressum и Datenschutzerklärung нужны почти каждому коммерческому сайту в Германии. Я заранее закладываю их в структуру, чтобы сайт не запускался без них." },
      { title: "Тексты на немецком", text: "Пришлите пункты или голосовое сообщение на русском, я соберу из них тексты для немецких клиентов. Вам остаётся только проверить." },
      { title: "Поиск в Google", text: "Базовое SEO входит в каждый пакет: заголовки и описания страниц, карта сайта, быстрая загрузка. Профиль компании в Google можно настроить дополнительно." },
      { title: "Общение без переводчика", text: "Задачу, правки и оплату обсуждаем по-русски, в мессенджере или по почте. Вы всегда говорите с тем, кто делает ваш сайт." },
    ],
    includedEyebrow: "Цены",
    includedTitle: "Сколько стоит сайт.",
    included: [
      "Лендинг, одна страница до 5 блоков: 300 €",
      "Сайт компании до 5 страниц: 790 €, месяц техподдержки после запуска",
      "Интернет-магазин до 20 товаров с админ-панелью и оплатой: 1 500 €, два месяца поддержки",
      "Готовый дизайн для салона, мастера или кафе: от 290 €",
      "В каждом пакете: индивидуальный дизайн, мобильная версия, базовое SEO и 2 круга правок",
      "Оплата: 50 % после подтверждения предложения, 50 % после приёмки, до запуска",
      "Домен оформляется на ваше имя, расходы на хостинг указываю в предложении отдельно",
    ],
    faq: [
      { question: "Вы делаете сайты только в Мюнхене?", answer: "Нет. Я работаю из Мюнхена, а клиенты у меня по всей Германии. Всё обсуждаем онлайн, личная встреча для работы не нужна." },
      { question: "Вы веб-студия или фрилансер?", answer: "TP Digital Lab — небольшая веб-студия из Мюнхена. Проект ведёт один человек от первого сообщения до запуска, поэтому вы всегда знаете, с кем говорите, и ничего не теряется между менеджерами." },
      { question: "Сколько времени занимает разработка?", answer: "Зависит от объёма и того, когда готовы тексты и фото. Лендинг при готовых материалах обычно занимает до 14 дней. Срок фиксируем в предложении до начала работы." },
      { question: "Можно сделать сайт на русском и немецком?", answer: "Да. В пакет входит один язык, второй добавляем отдельно, и цену за него вы узнаёте до старта." },
      { question: "Вы делаете интернет-магазины?", answer: "Да. Стартовый пакет за 1 500 € — до 20 товаров, корзина, админ-панель и подключение согласованного способа оплаты. Если товаров больше, считаю цену отдельно." },
      { question: "Что, если мне не понравится дизайн?", answer: "До запуска вы видите тестовую версию сайта и вносите правки. Два круга правок входят в цену." },
    ],
    formTitle: "Обсудить ваш сайт.",
    formText: "Напишите коротко, чем занимаетесь и в каком городе. Я отвечу с предложением и фиксированной ценой.",
    formService: "webdesign",
    formPackage: "launch",
  },
  "website-kosten-muenchen": {
    slug: "website-kosten-muenchen",
    metaTitle: "Was kostet eine Website in München? Festpreise ab 300 €",
    metaDescription: "Homepage, Landingpage oder Onlineshop in München: Landingpage 300 €, Firmenwebsite bis 5 Seiten 790 €, Onlineshop 1.500 €. Was enthalten ist und was extra kostet.",
    eyebrow: "Website-Kosten in München",
    title: "Was kostet eine Website in München?",
    accent: "Drei Festpreise und was genau drin ist.",
    intro: "Die ehrliche Antwort: Es hängt davon ab, wie viele Seiten Sie brauchen und ob Sie online verkaufen möchten. Damit Sie nicht raten müssen, gibt es bei mir drei feste Pakete. Den genauen Preis bekommen Sie schriftlich, bevor die Arbeit beginnt.",
    priceLabel: "Website ab:",
    price: "300 €",
    priceNote: "Festpreis vor dem Start",
    cta: "Festpreis anfragen",
    needsEyebrow: "Die Pakete",
    needsTitle: "Welche Website kostet wie viel.",
    needs: [
      { title: "Landingpage: 300 €", text: "Eine Seite mit bis zu 5 Abschnitten, Kontaktformular, individuellem Design und Basis-SEO. Passt für Selbstständige, neue Angebote und Werbung über Google Ads." },
      { title: "Firmenwebsite: 790 €", text: "Bis zu 5 Seiten, zum Beispiel Start, Leistungen, Über uns, Referenzen und Kontakt. Mit einem Monat technischem Support nach dem Start." },
      { title: "Onlineshop: 1.500 €", text: "Bis zu 20 Produkte, Warenkorb, Admin-Bereich und die vereinbarte Zahlungsanbindung. Zwei Monate technischer Support sind enthalten." },
      { title: "Fertiges Branchen-Design: ab 290 €", text: "Für Nagelstudio, Handwerksbetrieb oder Café: ein fertiges Design, angepasst an Ihr Logo, Ihre Farben und Ihre Fotos." },
    ],
    includedEyebrow: "Gut zu wissen",
    includedTitle: "Was im Preis enthalten ist und was extra kostet.",
    included: [
      "In jedem Paket: individuelles Design, Handy-Optimierung, Basis-SEO und 2 Korrekturrunden",
      "Erweitertes SEO mit Keyword-Recherche und Search Console: 100 € zusätzlich",
      "Google-Unternehmensprofil einrichten: 50 € zusätzlich",
      "Google-Ads-Kampagne einrichten: 100 € zusätzlich, das Werbebudget zahlen Sie direkt an Google",
      "Wartung mit Updates und Backups nach dem Start: 100 € im Monat, optional",
      "Domain und Hosting laufen auf Ihren Namen, Anbietergebühren stehen separat im Angebot",
      "Zahlung: 50 % nach Ihrer Bestätigung, 50 % nach der Abnahme und vor dem Livegang",
    ],
    faq: [
      { question: "Warum kostet eine Website bei Ihnen weniger als bei einer großen Agentur?", answer: "Ich arbeite ohne Projektmanager und ohne große Büroflächen. Sie sprechen direkt mit dem, der Ihre Website baut, und bezahlen keine Abstimmung zwischen fünf Leuten." },
      { question: "Gibt es versteckte Kosten?", answer: "Nein. Was im Paket enthalten ist, steht im schriftlichen Angebot. Zusätzlich kommen nur Domain und Hosting beim Anbieter und Leistungen, die Sie extra wünschen. Diese vereinbaren wir vorher." },
      { question: "Was kostet eine Landingpage für Google Ads?", answer: "Die Seite selbst kostet 300 €. Wenn ich auch die Kampagne einrichten soll, kommen 100 € dazu. Das Werbebudget zahlen Sie direkt an Google." },
      { question: "Wie lange dauert es, bis die Website online ist?", answer: "Eine Landingpage ist mit fertigen Texten und Bildern meist in bis zu 14 Tagen online. Den Zeitplan legen wir vor dem Start fest." },
      { question: "Arbeiten Sie nur für Unternehmen aus München?", answer: "Nein. Ich sitze in München und baue Websites für Kunden in ganz Deutschland. Die Abstimmung läuft online." },
    ],
    formTitle: "Festpreis für Ihre Website anfragen.",
    formText: "Schreiben Sie kurz, was Sie brauchen. Ich melde mich mit einer Empfehlung, welches Paket passt, und dem Festpreis.",
    formService: "webdesign",
    formPackage: "launch",
  },
};

export const topicSlugs = Object.keys(topicPages);
