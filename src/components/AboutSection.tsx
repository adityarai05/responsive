import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link, Download, Linkedin, Github } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const wrapperRef = useRef<HTMLDivElement>(null);
  const scaleCardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fixed layout scale-down using transform to avoid restricting mobile heights
    gsap.fromTo(scaleCardRef.current, {
      scale: 1,
      borderRadius: "0px",
    }, {
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      scale: 0.95,
      borderRadius: "40px",
      ease: "none",
    });

    // Content Fade-In Tied to Scroll
    gsap.fromTo(leftContentRef.current, {
      opacity: 0,
      y: 80,
    }, {
      opacity: 1,
      y: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 60%",
        end: "top 25%",
        scrub: 1.5,
      }
    });

    // Image Card Flip Entrance Tied to Scroll
    gsap.fromTo(rightContentRef.current, {
      opacity: 0,
      rotationX: -45, // Tilted back
      rotationY: 90,  // Flipped 90 degrees sideways like a door
      z: -300,        // Pushed deep into the Z-axis
      scale: 0.7,
      y: 50,
    }, {
      opacity: 1,
      rotationX: 0,
      rotationY: 0,
      z: 0,
      scale: 1,
      y: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 50%", // Slightly offset for staggered scroll effect
        end: "top 15%",
        scrub: 1.5,
      }
    });

    // Crossfade Background from Dark to Light Mode
    gsap.fromTo(scaleCardRef.current, {
      "--bg-color": "#111111",
      "--fg-color": "#ffffff",
      "--sub-color": "rgba(255,255,255,0.7)",
      "--border-color": "rgba(255,255,255,0.2)"
    }, {
      "--bg-color": "#ffffff",
      "--fg-color": "#000000",
      "--sub-color": "rgba(0,0,0,0.7)",
      "--border-color": "rgba(0,0,0,0.2)",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 50%", // Starts fading precisely when it hits middle of screen
        end: "top 20%", // Fully white much faster (when it reaches 20% down from top)
        scrub: 1.5, // 1.5 second interpolation smoothing for that premium feel
      }
    });
  }, { scope: wrapperRef });

  const stats = [
    { number: "5+", label: "Years of Experience" },
    { number: "120", label: "Completed Projects" },
    { number: "40+", label: "Clients on Worldwide" },
  ];

  return (
    <div id="about" ref={wrapperRef} className="relative w-full h-[250vh] z-20">
      <div className="absolute inset-0 z-0 bg-[url('/hero.jpeg')] bg-cover bg-center bg-fixed">
      </div>
      <div className="sticky top-0 z-10 w-full h-[100dvh] overflow-y-auto overflow-x-hidden p-0 flex flex-col items-center justify-start sm:justify-center">
        <div
          ref={scaleCardRef}
          className="origin-center shadow-[0_-20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center p-6 sm:p-8 w-full min-h-[100dvh]"
          style={{
            backgroundColor: "var(--bg-color, #111111)",
            color: "var(--fg-color, #ffffff)"
          } as React.CSSProperties}
        >
          <div className="w-full max-w-6xl mx-auto h-full flex items-center justify-center relative scale-100 origin-center py-12 lg:py-0" ref={ref}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full" ref={contentRef}>

              <div
                ref={rightContentRef}
                style={{ perspective: 1000 }}
                className="flex items-center justify-center relative w-full h-full order-last mt-6 lg:mt-0 opacity-0"
              >
                <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-[400px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl origin-center">
                  <img src="/profile.jpeg" alt="Portrait" className="w-full h-full object-cover rounded-[32px]" />
                </div>
              </div>

              <div
                ref={leftContentRef}
                className="order-first opacity-0"
              >
                <h2 className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase tracking-tighter mb-4 lg:mb-6 leading-[0.85]">
                  ABOUT ME
                </h2>
                <p
                  className="text-sm md:text-base lg:text-lg leading-relaxed font-medium max-w-md"
                  style={{ color: "var(--sub-color)" }}
                >
                  Hi, I'm Aditya — Web developer skilled in front-end,  and AI, using intelligent systems to automate workflows, enhance UX, and build
                  scalable, high-impact applications.
                </p>

                <div className="mt-6 lg:mt-8 flex flex-col gap-4 text-xs md:text-sm font-semibold max-w-md">
                  <div>
                    <p className="mb-1">Email :</p>
                    <p style={{ color: "var(--sub-color)" }}>adityaraii2005@gmail.com</p>
                  </div>
                </div>

                <div className="mt-6 lg:mt-8 flex gap-6">
                  {/* Social Icons with labels */}
                  <a href="https://www.linkedin.com/in/adityarai-017996375/" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 group hover:-translate-y-1 transition-transform">
                    <div className="w-10 h-10 rounded-full border overflow-hidden flex items-center justify-center hover:opacity-100 transition-colors" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--border-color)" }}>
                      <img src="/linkedin.jpg" alt="LinkedIn" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-[10px] tracking-wider uppercase" style={{ color: "var(--sub-color)" }}>LinkedIn</span>
                  </a>
                  <a href="https://github.com/adityarai05" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 group hover:-translate-y-1 transition-transform">
                    <div className="w-10 h-10 rounded-full border overflow-hidden flex items-center justify-center hover:opacity-100 transition-colors" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--border-color)" }}>
                      <img src="/github.jpg" alt="GitHub" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-[10px] tracking-wider uppercase" style={{ color: "var(--sub-color)" }}>GitHub</span>
                  </a>
                </div>

                <div className="mt-8 lg:mt-10">
                  <a
                    href="/AdityaRai_Resume.pdf"
                    download="AdityaRai_Resume.pdf"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-2 md:px-8 md:py-3 rounded-full border font-bold text-xs md:text-sm transition-colors uppercase tracking-wider hover:bg-black/5"
                    style={{ borderColor: "var(--fg-color)", color: "var(--fg-color)" }}
                  >
                    <span>RESUME</span>
                    <Download size={16} strokeWidth={2.5} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
