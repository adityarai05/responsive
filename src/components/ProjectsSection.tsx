import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  { img: project1, title: "Arjuna", desc: "Personal Portfolio Website for talented design engineer" },
  { img: project2, title: "Bima", desc: "Website and branding for AI Automation Company" },
  { img: project1, title: "Mandala", desc: "Website and branding for Design Agency" },
  { img: project2, title: "Kartika", desc: "Premium dark-mode dashboard for Fintech Startup" },
];

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const titleTextRef = useRef<HTMLHeadingElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const indexRef = useRef(0);

  useGSAP(() => {
    // Title Intro Animation
    gsap.fromTo(titleTextRef.current, 
      { x: "15vw", scale: 0.9 },
      { 
        x: "-15vw", 
        scale: 1,
        scrollTrigger: {
          trigger: titleContainerRef.current,
          start: "top bottom", 
          end: "bottom top", 
          scrub: 1.5
        }
      }
    );

    // Pin the layout and scrub through the projects using ScrollTrigger
    ScrollTrigger.create({
      trigger: pinRef.current,
      start: "top top",
      end: `+=${projectsData.length * 100}%`,
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        let current = Math.floor(self.progress * projectsData.length);
        if (current >= projectsData.length) current = projectsData.length - 1;
        
        // Update state flawlessly tied to scroll boundaries without lag
        if (current !== indexRef.current) {
          indexRef.current = current;
          setActiveIndex(current);
        }
      }
    });
  }, { scope: containerRef });

  return (
    <section id="work" ref={containerRef} className="relative w-full bg-[#111111] text-white z-30 -mt-[100vh] rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t border-white/5 pb-20">
      
      {/* Massive Title Intro Section */}
      <div 
        ref={titleContainerRef} 
        className="w-full h-screen flex items-center justify-center overflow-hidden relative border-b border-white/5"
      >
        <motion.h1 
          ref={titleTextRef}
          className="text-[16vw] font-display font-black uppercase text-white whitespace-nowrap drop-shadow-2xl tracking-normal"
          style={{ letterSpacing: "0.03em", lineHeight: "1" }}
        >
          PROJECTS<span className="text-[#ff5500]">.</span>
        </motion.h1>
      </div>

      {/* Pinned Sticky Container */}
      <div 
        ref={pinRef} 
        className="w-full h-screen flex flex-col md:flex-row items-center justify-between px-6 lg:px-20 py-12 md:py-24 overflow-hidden relative max-w-[1600px] mx-auto"
      >
        
        {/* Left Column: Number, List, and Details */}
        <div className="w-full md:w-5/12 h-1/2 md:h-full flex flex-col justify-between z-20">
          
          {/* Top: Huge Animated Index Number */}
          <div className="relative h-[1em] overflow-hidden font-display text-[6rem] sm:text-[9rem] lg:text-[13rem] leading-none text-white/10 tracking-tighter">
             <AnimatePresence>
                <motion.div
                   key={activeIndex}
                   initial={{ y: "100%", opacity: 0 }}
                   animate={{ y: "0%", opacity: 1 }}
                   exit={{ y: "-100%", opacity: 0 }}
                   transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                   className="absolute inset-0"
                >
                   0{activeIndex + 1}.
                </motion.div>
             </AnimatePresence>
          </div>

          {/* Middle: Active Selection Menu (Hidden on mobile for layout space) */}
          <div className="hidden md:flex flex-col gap-4 font-medium text-lg tracking-wide mt-10">
             {projectsData.map((p, i) => (
                <div 
                  key={i} 
                  className={`flex items-center gap-4 transition-all duration-700 ease-custom ${activeIndex === i ? "text-white translate-x-2" : "text-white/30"}`}
                >
                   <span>—</span>
                   {p.title}
                </div>
             ))}
          </div>

          {/* Bottom: Project Title & Description */}
          <div className="mt-auto relative min-h-[160px] md:min-h-[140px] pt-6 md:pt-10">
             <AnimatePresence>
               <motion.div
                 key={activeIndex}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.5, ease: "easeOut" }}
                 className="absolute top-6 md:top-10 left-0 w-full flex flex-col gap-2 md:gap-4"
               >
                  <h2 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl tracking-tighter uppercase text-white shadow-sm">
                    {projectsData[activeIndex].title}
                  </h2>
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-sm font-medium">
                    {projectsData[activeIndex].desc}
                  </p>
               </motion.div>
             </AnimatePresence>
          </div>

        </div>

        {/* Right Column: Massive Template Photo Viewer */}
        <div className="w-full md:w-7/12 h-1/2 md:h-full flex items-center justify-center lg:justify-end relative z-10 pt-4 md:pt-0">
           
           {/* Interactive Project Template Frame */}
           <div className="group relative w-full lg:w-[90%] xl:w-[85%] h-full max-h-[40vh] md:max-h-[80vh] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-2xl cursor-pointer bg-white/5 border border-white/5">
              
              {/* Intelligent Cross-Fading Images */}
              {projectsData.map((p, i) => (
                 <img
                   key={i}
                   src={p.img}
                   alt={p.title}
                   className={`absolute inset-0 w-full h-full object-cover transition-all duration-900 ease-custom ${
                     activeIndex === i 
                       ? "opacity-100 scale-100 translate-y-0" 
                       : activeIndex > i 
                          ? "opacity-0 scale-95 -translate-y-20" // Pulled up
                          : "opacity-0 scale-105 translate-y-20" // Pulled from below
                   }`}
                 />
              ))}

              {/* Seamless Dark Overlay Matrix */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 backdrop-blur-[0px] group-hover:backdrop-blur-sm z-10 flex items-center justify-center">
                 
                 {/* "View Project" Action Button */}
                 <div className="bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm shadow-xl translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 flex items-center gap-3">
                    View Project <ArrowUpRight size={18} />
                 </div>

              </div>

           </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
