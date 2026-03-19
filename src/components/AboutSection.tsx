import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "lucide-react"; // Dummy icon for social if needed
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Scroll-driven animation mirroring the exact values from Hero section exit.
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%", // Starts animating just as it comes into view
        end: "center center", // Reaches natural position nicely in the center
        scrub: 1.5,
      },
      opacity: 0,
      scale: 0.65,
      x: "-20vw",
      y: "-30vh",
      rotateZ: -10,
      rotateY: -30,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  const stats = [
    { number: "5+", label: "Years of Experience" },
    { number: "120", label: "Completed Projects" },
    { number: "40+", label: "Clients on Worldwide" },
  ];

  return (
    <section id="about" className="py-24 lg:py-40 bg-[#111111] text-white border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center" ref={containerRef}>
          
          <div
            style={{ perspective: 1000 }}
            className="flex items-center justify-center relative w-full h-full order-last"
          >
            <div ref={imageRef} className="relative w-full max-w-sm lg:max-w-md aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl origin-center">
              <img src="/profile.jpeg" alt="Portrait" className="w-full h-full object-cover rounded-[32px]" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-first"
          >
            <h2 className="font-display text-6xl lg:text-8xl text-white uppercase tracking-tight mb-8">
              ABOUT ME
            </h2>
            <p className="text-white/70 text-lg leading-relaxed font-medium max-w-md">
              Hi, I'm Alex — a digital designer and full-stack developer passionate about crafting meaningful and impactful digital experiences.
            </p>

            <div className="mt-16 flex gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-6xl font-display text-primary leading-none mb-3">
                    {stat.number}
                  </span>
                  <span className="text-sm font-bold text-white max-w-[100px] leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-8 text-sm font-semibold max-w-md">
              <div>
                <p className="text-white mb-1">Call Today :</p>
                <p className="text-white/60">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-white mb-1">Email :</p>
                <p className="text-white/60">hello@example.com</p>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              {/* Replace with actual social icons later */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-[#111111] transition-colors">
                <span className="font-bold text-lg">X</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-[#111111] transition-colors">
                <span className="font-bold text-sm">IN</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-[#111111] transition-colors">
                <span className="font-bold text-sm">BE</span>
              </a>
            </div>

            <div className="mt-12">
              <button className="px-8 py-3 rounded-full border border-primary text-primary font-bold text-sm hover:bg-primary hover:text-[#111111] transition-colors uppercase tracking-wider">
                MY STORY
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
