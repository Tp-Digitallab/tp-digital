import IntroAnimation from "@/components/effects/IntroAnimation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PackagesSection from "@/components/sections/PackagesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <IntroAnimation />

      <Header />

      <main>
        <HeroSection />

        <ServicesSection />

        <PackagesSection />

        <ProjectsSection />

        <ProcessSection />

        <CalculatorSection />

        <FaqSection />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}