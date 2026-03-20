import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CreativeAgencySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const textFillRef = useRef<HTMLHeadingElement>(null);


  useGSAP(() => {
    gsap.to(textFillRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%", // Pins for exact 200vh
        pin: true,
        scrub: 1,
      },
      clipPath: "inset(0 0% 0 0)",
      ease: "none"
    });

    // Sub-animation: Once unpinned, fade and scale down to seamlessly transition out
    gsap.fromTo(contentRef.current,
      { opacity: 1, scale: 1 },
      {
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: containerRef.current,
          start: () => `top+=${window.innerHeight * 2} top`, // Triggers exactly off unpin
          end: () => `top+=${window.innerHeight * 3} top`, // End at end of native 100vh scroll
          scrub: true,
        }
      }
    );

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-white overflow-hidden z-20"
    >
      <div ref={contentRef} className="w-full h-full flex flex-col items-center justify-center relative origin-bottom">
        <div
          ref={textContainerRef}
          className="w-full flex items-center justify-center relative px-2 sm:px-4 md:px-8"
        >
          <div className="relative inline-block w-full text-center">
            {/* Base Outline Layer (Unfilled) */}
            <h2 className="text-[7.5vw] md:text-[6.5vw] lg:text-[6vw] font-display font-black uppercase leading-[1.05] tracking-[0.05em] text-[#D3D3D3] whitespace-nowrap">
              I Build With Code And AI
            </h2>

            {/* Solid Highlight Layer (Filled via Scroll) */}
            <h2
              ref={textFillRef}
              className="absolute top-0 left-0 w-full h-full text-[7.5vw] md:text-[6.5vw] lg:text-[6vw] font-display font-black uppercase leading-[1.05] tracking-[0.05em] text-black whitespace-nowrap"
              style={{ clipPath: "inset(0 100% 0 0)" }}
            >
              I Build With Code And AI
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeAgencySection;
