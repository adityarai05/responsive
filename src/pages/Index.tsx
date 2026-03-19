import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import StackAndExperienceSection from "@/components/StackAndExperienceSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-background min-h-screen text-foreground relative">
    
    {/* Universal Blueprint Grid Overlay */}
    <div 
      className="fixed inset-0 pointer-events-none z-[100] opacity-[0.08]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(127,127,127,1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(127,127,127,1) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px'
      }}
    />

    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <StackAndExperienceSection />
    </main>
    <Footer />
  </div>
);

export default Index;
