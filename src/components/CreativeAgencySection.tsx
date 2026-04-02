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
    // 1. Master Pin
    // Pin for a total of 300vh: 15vh text fill + 50vh delay + 100vh for next section to pull up
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=300%",
      pin: true,
    });

    // 2. Text Fill Animation
    gsap.to(textFillRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%", // Fast fill over 150vh
        scrub: 1,
      },
      clipPath: "inset(0 0% 0 0)",
      ease: "none"
    });

    // 3. Sub-animation: Fade and scale down to seamlessly transition out as ServicesSection pulls up
    // ServicesSection starts pulling at 200vh scroll and finishes at 300vh scroll
    gsap.fromTo(contentRef.current,
      { opacity: 1, scale: 1 },
      {
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: containerRef.current,
          start: () => `top+=${window.innerHeight * 2} top`,
          end: () => `top+=${window.innerHeight * 3} top`,
          scrub: true,
        }
      }
    );

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100dvh] bg-white overflow-hidden z-20"
    >
      <div ref={contentRef} className="w-full h-full flex flex-col items-center justify-center relative origin-bottom">
        <div
          ref={textContainerRef}
          className="w-full flex items-center justify-center relative px-2 sm:px-4 md:px-8"
        >
          <div className="relative inline-block w-full text-center px-4">
            {/* Base Outline Layer (Unfilled) */}
            <h2 className="text-[12vw] sm:text-[7.5vw] md:text-[6.5vw] lg:text-[6vw] font-display font-black uppercase leading-[1.1] tracking-[0.02em] text-[#D3D3D3] break-words">
              I Build With Code And AI
            </h2>

            {/* Solid Highlight Layer (Filled via Scroll) */}
            <h2
              ref={textFillRef}
              className="absolute top-0 left-0 w-full h-full px-4 text-[12vw] sm:text-[7.5vw] md:text-[6.5vw] lg:text-[6vw] font-display font-black uppercase leading-[1.1] tracking-[0.02em] text-black break-words"
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
