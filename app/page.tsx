import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import PackagesSection from "@/components/sections/PackagesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import SmallChangesSection from "@/components/sections/SmallChangesSection";
import ShareLinks from "@/components/ui/ShareLinks";

export default function Home() {
  return (
    <>
      <Header />

      <main className="home-atmosphere">
        <HeroSection />
        <ProjectsSection />
        <PackagesSection />
        <SmallChangesSection />
        <CalculatorSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
      <ShareLinks />
    </>
  );
}
