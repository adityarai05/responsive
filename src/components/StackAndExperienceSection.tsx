import React, { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stackData = [
  {
    title: "FRAMER",
    subtitle: "WEB DESIGN PLATFORM",
    percentage: "85%",
    description: "The internet is your canvas. Framer is where we design and publish stunning sites based in Amsterdam."
  },
  {
    title: "FIGMA",
    subtitle: "DESIGN TOOL",
    percentage: "98%",
    description: "Figma is a collaborative web application for design with additional offline features for macOS and Windows."
  },
  {
    title: "JAVASCRIPT",
    subtitle: "FRONT END DEVELOPMENT",
    percentage: "92%",
    description: "JavaScript, often abbreviated as JS, is a programming language and technology alongside HTML and CSS."
  },
  {
    title: "REACT",
    subtitle: "PERFORMANCE FRAMEWORK",
    percentage: "90%",
    description: "The library for web and native user interfaces. Built for creating highly interactive and dynamic data-driven views."
  }
];

const experienceData = [
  {
    title: "SENIOR UX DESIGNER",
    subtitle: "CLAVMEN STUDIO",
    percentage: "2022 - PRESENT",
    description: "Leading the product redesigns, managing comprehensive design systems, and bridging the gap between developers and stakeholders."
  },
  {
    title: "LEAD PRODUCT DESIGNER",
    subtitle: "LOSIFY INC",
    percentage: "2019 - 2022",
    description: "Designed core product features handling thousands of active users seamlessly through intuitive interface mappings."
  },
  {
    title: "FRONTEND DEVELOPER",
    subtitle: "AGENCY 09",
    percentage: "2017 - 2019",
    description: "Architected optimized interactive front-end layouts and fluid GSAP animations for premier digital agency clients."
  }
];

const StackAndExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const stackSectionRef = useRef<HTMLDivElement>(null);
  const stackTrackRef = useRef<HTMLDivElement>(null);
  const stackDotRef = useRef<HTMLDivElement>(null);

  const expSectionRef = useRef<HTMLDivElement>(null);
  const expTrackRef = useRef<HTMLDivElement>(null);
  const expDotRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Stack Timeline Animation
    if (stackSectionRef.current && stackTrackRef.current && stackDotRef.current) {
      gsap.to(stackDotRef.current, {
        y: () => stackTrackRef.current!.offsetHeight - stackDotRef.current!.offsetHeight,
        ease: "none",
        scrollTrigger: {
          trigger: stackSectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      });
    }

    // Experience Timeline Animation
    if (expSectionRef.current && expTrackRef.current && expDotRef.current) {
      gsap.to(expDotRef.current, {
        y: () => expTrackRef.current!.offsetHeight - expDotRef.current!.offsetHeight,
        ease: "none",
        scrollTrigger: {
          trigger: expSectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      });
    }
  }, { scope: containerRef });

  return (
    <section id="stack" ref={containerRef} className="relative w-full bg-[#111111] text-white z-10 py-24 md:py-48 font-sans">
      
      {/* --- STACK & TOOLS SECTION --- */}
      <div ref={stackSectionRef} className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-0 relative z-20">
        
        {/* Left Column (Sticky) */}
        <div className="md:col-span-4 relative">
          <div className="sticky top-32 flex justify-start">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight tracking-[-0.02em]">
              Stack & Tools
            </h2>
          </div>
        </div>

        {/* Center Timeline Track (Hidden on mobile) */}
        <div className="hidden md:flex flex-col items-center relative md:col-span-1">
           <div className="sticky top-32 h-[300px] w-full flex justify-center mt-2">
             <div ref={stackTrackRef} className="h-full w-[2px] bg-white/10 relative rounded-full">
               <div ref={stackDotRef} className="absolute left-1/2 -ml-1.5 top-0 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
             </div>
           </div>
        </div>

        {/* Right Column (Scrollable List) */}
        <div className="md:col-span-7 flex flex-col gap-24 lg:gap-32 pb-16">
          {stackData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col w-full"
            >
              <div className="flex items-center justify-between w-full mb-1">
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase">
                  {item.title}
                </h3>
                <span className="text-[#888] font-semibold text-sm sm:text-base">
                  {item.percentage}
                </span>
              </div>
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-[#888] mb-6">
                {item.subtitle}
              </h4>
              <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full h-[1px] bg-white/5 max-w-7xl mx-auto my-32 md:my-48" />

      {/* --- EXPERIENCE SECTION --- */}
      <div ref={expSectionRef} className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-0 relative z-20">
        
        {/* Left Column (Sticky) */}
        <div className="md:col-span-4 relative">
          <div className="sticky top-32 flex justify-start">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight tracking-[-0.02em]">
              Experience
            </h2>
          </div>
        </div>

        {/* Center Timeline Track (Hidden on mobile) */}
        <div className="hidden md:flex flex-col items-center relative md:col-span-1">
           <div className="sticky top-32 h-[300px] w-full flex justify-center mt-2">
             <div ref={expTrackRef} className="h-full w-[2px] bg-white/10 relative rounded-full">
               <div ref={expDotRef} className="absolute left-1/2 -ml-1.5 top-0 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
             </div>
           </div>
        </div>

        {/* Right Column (Scrollable List) */}
        <div className="md:col-span-7 flex flex-col gap-24 lg:gap-32 pb-16">
          {experienceData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col w-full"
            >
              <div className="flex items-center justify-between w-full mb-1">
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase">
                  {item.title}
                </h3>
                <span className="text-[#888] font-semibold text-sm sm:text-base">
                  {item.percentage}
                </span>
              </div>
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-[#888] mb-6">
                {item.subtitle}
              </h4>
              <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default StackAndExperienceSection;
