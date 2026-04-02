import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// @ts-ignore
import WaterWave from "react-water-wave";

gsap.registerPlugin(ScrollTrigger);

import { ErrorBoundary } from "./ErrorBoundary";

const IntroSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // IntroSection is now a static landing section.
    // Animations have been moved to subsequent sections.
  }, { scope: containerRef });

  return (
    <div id="home" className="relative w-full h-[200vh] z-20">
      <section 
        ref={containerRef} 
        className="sticky top-0 w-full h-[100dvh] overflow-hidden font-display z-30 bg-[#0a0a0a]"
      >
        {/* Water Simulation Isolated Background Layer */}
        <div className="absolute inset-0 z-0 w-full h-full bg-[#0a0a0a]">
          <ErrorBoundary fallback={<div className="w-full h-full bg-[url('/hero.jpeg')] bg-cover bg-center" />}>
            <WaterWave
              imageUrl="/hero.jpeg"
              dropRadius={25}
              perturbance={0.03}
              resolution={512}
              style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
            >
              {() => <div className="hidden" />}
            </WaterWave>
          </ErrorBoundary>
        </div>

        {/* Main Layout Container Overlay */}
        <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center pointer-events-none">
          
          {/* Simple Typography Layer */}
          <div className="relative z-20 flex flex-col items-center justify-center w-full h-full pointer-events-none px-4">
            <h1 className="text-[15vw] sm:text-[16vw] md:text-[17vw] lg:text-[18vw] whitespace-nowrap font-black uppercase leading-[0.8] tracking-[0.02em] text-white flex flex-row gap-[2vw] md:gap-[1.5vw] text-center">
              <span>ADITYA</span>
              <span>RAI</span>
            </h1>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default IntroSection;
