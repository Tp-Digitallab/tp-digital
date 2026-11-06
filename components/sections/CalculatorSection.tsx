"use client";
import Calculator from "@/components/calculator/Calculator";
import Container from "@/components/common/Container";
import { useLanguage } from "@/components/providers/LanguageProvider";
export default function CalculatorSection(){
 const {language}=useLanguage();
 const t={de:["Preis selbst zusammenstellen","Optional: Website und Extras auswählen. Eine unverbindliche Schätzung, keine Bestellung."],en:["Build your own estimate","Optional: choose your website and extras. An indicative estimate, not an order."],ru:["Рассчитать стоимость самостоятельно","По желанию: выберите сайт и дополнения. Это предварительная оценка, а не заказ."]}[language];
 return <section id="calculator" aria-label={t[0]} className="scroll-mt-24 bg-[#e9e4e0] py-8"><Container><details className="rounded-3xl border border-white/10 bg-[#f7f5f3]/70 p-6 sm:p-8"><summary className="cursor-pointer py-2 text-lg font-medium text-blue-200 focus-visible:outline-2 focus-visible:outline-blue-400">{t[0]}</summary><p className="mt-3 text-sm leading-6 text-white/60">{t[1]}</p><div className="mt-6"><Calculator /></div></details></Container></section>;
}
