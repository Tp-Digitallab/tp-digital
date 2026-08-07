"use client";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";


export default function ServicesSection() {

  const { language } = useLanguage();

  const t = translations[language];


  return (
    <Section id="solutions">

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,blue,0.08),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(59,130,blue,0.08),transparent_35%)]
        "
      />


      <Container className="relative z-10">


        <SectionHeader
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />


        <div className="mt-20 grid gap-8 md:grid-cols-2">


          {t.services.items.map((item, index) => (

            <ServiceCard
  key={index}
  number={`0${index + 1}`}
  title={item.title}
  description={item.description}
  href={item.link}
/>

          ))}


        </div>


      </Container>


    </Section>
  );
}