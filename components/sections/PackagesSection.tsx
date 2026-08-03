"use client";

import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import PackageGrid from "@/components/package/PackageGrid";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { translations } from "@/config/translations";


export default function PackagesSection() {

  const { language } = useLanguage();

  const t = translations[language];


  return (
    <Section id="packages">

      <Container>

        <SectionHeader
          eyebrow={t.packages.eyebrow}
          title={t.packages.title}
          description={t.packages.description}
        />


        <PackageGrid />


      </Container>

    </Section>
  );
}