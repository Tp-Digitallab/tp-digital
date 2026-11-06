"use client";
import Container from "@/components/common/Container";
import ProjectPreview from "@/components/portfolio/ProjectPreview";
import { useLanguage } from "@/components/providers/LanguageProvider";
export default function ProjectsSection() {
 const {language} = useLanguage();
 const t = {de:["Meine Arbeit","Websites statt langer Worte."], en:["My work","Let the work speak."], ru:["Мои работы","Лучше один раз увидеть."]}[language];
 return <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24 bg-[#e9e4e0] py-12 sm:py-20"><Container>
 <p className="text-sm font-semibold uppercase leading-5 tracking-[0.1em] text-blue-300">{t[0]}</p>
 <h2 id="projects-heading" className="mb-8 mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{t[1]}</h2><ProjectPreview /></Container></section>;
}
