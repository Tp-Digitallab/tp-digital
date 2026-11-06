"use client";
import LeadForm from "@/components/contact/LeadForm";
import Container from "@/components/common/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";
const copy={
 de:{title:"Was möchten Sie umsetzen?",text:"Schreiben Sie mir kurz Ihre Idee. Ich melde mich persönlich mit den nächsten Schritten.",founder:"Taras Pakhaliuk · Webentwickler aus München",whatsapp:"Auf WhatsApp schreiben",note:"Umfang und Festpreis stimmen wir schriftlich ab."},
 en:{title:"What would you like to build?",text:"Tell me your idea. I will personally get back to you with the next steps.",founder:"Taras Pakhaliuk · Web developer in Munich",whatsapp:"Message on WhatsApp",note:"We agree on the scope and fixed price in writing."},
 ru:{title:"Что хотите сделать?",text:"Коротко опишите идею. Я лично отвечу и предложу следующий шаг.",founder:"Тарас Пахалюк · Веб-разработчик в Мюнхене",whatsapp:"Написать в WhatsApp",note:"Объём и фиксированную цену согласуем письменно."}
};
export default function ContactSection(){
 const {language}=useLanguage();const t=copy[language];const whatsapp=process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "";
 return <section id="contact" className="scroll-mt-24 bg-[#e9e4e0] py-12 sm:py-20">
 <span id="anfrage" className="block scroll-mt-28" aria-hidden="true" />{["aenderungen","launch","business","growth"].map(id=><span key={id} id={`anfrage-${id}`} className="block scroll-mt-28" aria-hidden="true" />)}
 <Container><div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"><div><h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{t.title}</h2><p className="mt-4 max-w-md text-base leading-7 text-white/65">{t.text}</p><p className="mt-6 text-sm text-white/75">{t.founder}</p>
 <a href="mailto:info@tpdigitallab.de" className="mt-3 inline-flex min-h-11 items-center text-blue-200 underline underline-offset-4">info@tpdigitallab.de</a>
 {whatsapp && <div><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-12 items-center rounded-full border border-green-400/25 px-5 text-sm text-green-200 hover:bg-green-500/10">{t.whatsapp}</a></div>}
 <p className="mt-5 text-xs leading-6 text-white/50">{t.note}</p></div><LeadForm /></div></Container></section>;
}
