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
    
    {/* Main content wrapper given z-10 and a bottom margin matching footer height so it scrolls up to reveal the footer behind it */}
    <main className="relative z-10 bg-background mb-[100vh] shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-b-[40px] sm:rounded-b-[60px]">
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

    {/* Fixed sticky footer sitting at the back waiting to be revealed */}
    <div className="fixed bottom-0 left-0 w-full z-0 h-screen pointer-events-auto">
      <Footer />
    </div>

  </div>
);

export default Index;
