import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import PackageGrid from "@/components/package/PackageGrid";

export default function PackagesSection() {
  return (
    <Section id="packages">
      <Container>

        <SectionHeader
          eyebrow="PACKAGES"
          title="Choose the perfect solution."
          description="Start with a ready-made package or customize every detail in the configurator."
        />

        <PackageGrid />

      </Container>
    </Section>
  );
}