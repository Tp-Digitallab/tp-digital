import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";

const solutions = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Modern websites built to generate trust and convert visitors into customers.",
  },
  {
    number: "02",
    title: "SEO Optimization",
    description:
      "Technical and on-page SEO to help your business rank higher on Google.",
  },
  {
    number: "03",
    title: "Google Ads",
    description:
      "Complete campaign setup, keyword research and conversion tracking.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "Website updates, Google Ads management and continuous improvements.",
  },
];

export default function ServicesSection() {
  return (
    <Section id="solutions">

      <Container>

        <SectionHeader
          eyebrow="SOLUTIONS"
          title="Everything you need to grow your business online."
          description="We don't just build websites. We help businesses attract customers, improve visibility and grow with modern digital solutions."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {solutions.map((item) => (
            <ServiceCard
              key={item.number}
              number={item.number}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}