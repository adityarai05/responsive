import Navbar from "@/components/Navbar";
import IntroSection from "@/components/IntroSection";
import HeroSection from "@/components/HeroSection";
import CreativeAgencySection from "@/components/CreativeAgencySection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import StackAndExperienceSection from "@/components/StackAndExperienceSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-background min-h-screen text-foreground relative">

    <Navbar />
    <main>
      <IntroSection />
      <HeroSection />
      <div className="relative w-full z-20" style={{ marginBottom: "-100vh" }}>
        <CreativeAgencySection />
      </div>
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <StackAndExperienceSection />
    </main>
    <Footer />
  </div>
);

export default Index;
