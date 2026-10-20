"use client";

import RequestLink from "@/components/contact/RequestLink";
import Container from "@/components/common/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";

const copy = {
  de: {
    title: "Website vorhanden? Ich kümmere mich um das, was nicht funktioniert.",
    description: "Sie müssen nicht gleich eine neue Website beauftragen. Schicken Sie mir Ihren Link und die Aufgabe. Ich prüfe, was sinnvoll ist, und nenne Ihnen Umfang und Festpreis, bevor Kosten entstehen.",
    cta: "Website und Aufgabe schicken",
    note: "Einzelne Aufgabe statt Komplettpaket. Unverbindliche Anfrage per Formular, E-Mail oder WhatsApp.",
    tasks: [
      { title: "Formular oder Funktion reparieren", text: "Fehler bei Anfragen, defekte Links oder eine Funktion, die nicht mehr richtig arbeitet." },
      { title: "Auf dem Smartphone verbessern", text: "Unlesbare Texte, verschobene Inhalte oder schwer bedienbare Kontaktbuttons gezielt überarbeiten." },
      { title: "Leistungen klarer präsentieren", text: "Eine Leistungsseite, Referenzen oder einen verständlichen nächsten Schritt zur Anfrage ergänzen." },
    ],
  },
  en: {
    title: "Already have a website? Let’s fix what is getting in the way.",
    description: "You do not have to commission a whole new website. Send me your link and the task. I will review what makes sense and agree on the scope and fixed price before any paid work begins.",
    cta: "Send your website and task",
    note: "One task instead of a full package. No-obligation enquiry by form, email or WhatsApp.",
    tasks: [
      { title: "Fix a form or feature", text: "Enquiry errors, broken links or a feature that no longer works properly." },
      { title: "Improve the mobile experience", text: "Fix hard-to-read text, overflowing content or contact buttons that are difficult to use." },
      { title: "Explain your services clearly", text: "Add a service page, examples of your work or a clear next step to get in touch." },
    ],
  },
  ru: {
    title: "Сайт уже есть? Исправлю то, что мешает им пользоваться.",
    description: "Необязательно заказывать новый сайт целиком. Пришлите ссылку и задачу: я проверю, что имеет смысл сделать, и согласую объём и фиксированную цену до платной работы.",
    cta: "Отправить сайт и задачу",
    note: "Отдельная задача вместо целого пакета. Заявка без обязательств через форму, почту или WhatsApp.",
    tasks: [
      { title: "Исправить форму или функцию", text: "Ошибки при отправке заявок, неработающие ссылки или функция, которая перестала работать." },
      { title: "Улучшить мобильную версию", text: "Исправить мелкий текст, съехавшие блоки или неудобные кнопки связи." },
      { title: "Понятнее представить услуги", text: "Добавить страницу услуги, примеры работ или понятный следующий шаг для обращения." },
    ],
  },
};

export default function SmallChangesSection() {
  const { language } = useLanguage();
  const t = copy[language];
  return (
    <section id="website-improvements" aria-labelledby="small-changes-heading" className="scroll-mt-24 bg-[#050505] py-10 sm:py-16">
      <Container>
        <div className="rounded-3xl border border-blue-400/25 bg-blue-500/[0.06] p-6 sm:p-10">
          <h2 id="small-changes-heading" className="max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl">{t.title}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-white/75">{t.description}</p>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {t.tasks.map((task) => (
              <div key={task.title} className="min-w-0 rounded-2xl border border-white/10 bg-black/20 p-5">
                <h3 className="font-semibold leading-6 text-white">{task.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{task.text}</p>
              </div>
            ))}
          </div>
          <RequestLink choice="aenderungen" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-center font-semibold text-white hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">{t.cta}</RequestLink>
          <p className="mt-3 text-sm leading-6 text-white/65">{t.note}</p>
        </div>
      </Container>
    </section>
  );
}
