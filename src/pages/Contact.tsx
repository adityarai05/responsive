import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground relative">
      <Navbar />
      
      {/* Main content wrapper given z-10 and a bottom margin matching footer height so it scrolls up to reveal the footer behind it */}
      <main className="relative z-10 bg-background mb-[100dvh] shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-b-[40px] sm:rounded-b-[60px] pt-16">
        <ContactSection />
      </main>

      {/* Fixed sticky footer sitting at the back waiting to be revealed */}
      <div className="fixed bottom-0 left-0 w-full z-0 h-screen pointer-events-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
