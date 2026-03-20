import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PerformanceSnapshot = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(section1Ref.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      scale: 0.85,
      borderRadius: "40px",
      ease: "none",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-[200vh] bg-black">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center p-0 z-0">
        <div 
          ref={section1Ref} 
          className="w-full h-full bg-[#111111] text-white flex flex-col items-center justify-center origin-center rounded-[0px] border border-white/5"
        >
          <div className="text-center w-full max-w-4xl px-4">
            <h2 className="text-[#ff5500] text-sm sm:text-xl font-bold tracking-[0.2em] sm:tracking-[0.3em] mb-12 sm:mb-24 uppercase">
              Performance Snapshot
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-24">
              <div className="flex flex-col items-center">
                <div className="text-7xl sm:text-9xl font-display font-medium mb-4">67</div>
                <div className="text-white/50 uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">Projects</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-7xl sm:text-9xl font-display font-medium text-[#ff5500] mb-4">43+</div>
                <div className="text-white/50 uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceSnapshot;
