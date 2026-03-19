import { motion } from "framer-motion";
import { Hand } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Set perspective on the wrapper's parent so 3D transforms work
    gsap.set(imageWrapperRef.current, { perspective: 1000 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top", // Ends the animation exactly when home section leaves the screen
        pin: imageWrapperRef.current,
        pinSpacing: false,
        scrub: 1.5,
      }
    });

    // 1: Scroll out of Hero -> Image smoothly shrinks, drops, and fades out entirely
    tl.to(imageRef.current, {
      opacity: 0, 
      scale: 0.65,
      rotateY: -35,
      rotateX: 10,
      rotateZ: -5,
      y: "15vh",
      boxShadow: "-20px 30px 60px rgba(0,0,0,0.4)",
      ease: "power2.inOut",
    });

  }, { scope: containerRef });

  return (
    // We add z-[50] to the section so that the pinned element stays ABOVE the next section (Services)
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center z-[50] pointer-events-none"
    >
      {/* We make the inner container point-events-auto so buttons/links still work, while the empty section doesn't block background clicks */}
      <div className="container mx-auto px-6 relative z-10 pointer-events-auto h-full flex flex-col justify-center">

        {/* Main large typography layout */}
        <div className="max-w-[1600px] mx-auto w-full relative px-4 lg:px-12">

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 min-h-[500px]">

            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left z-10"
            >
              <h3 className="text-sm font-semibold tracking-[0.2em] mb-2 uppercase text-foreground/60 leading-tight">
                Aditya Rai
              </h3>
              <h1 className="font-display text-[5rem] sm:text-[8rem] lg:text-[11vw] xl:text-[160px] leading-[0.8] tracking-tighter text-foreground uppercase">
                WEB
              </h1>
            </motion.div>

            {/* Central Image Wrapper (Pinned) */}
            <div
              ref={imageWrapperRef}
              className="relative z-50 flex items-center justify-center w-[300px] h-[400px] lg:w-[360px] lg:h-[480px] shrink-0 pointer-events-none"
            >
              {/* Inner Transformable Image */}
              <div
                ref={imageRef}
                className="relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl origin-center pointer-events-auto"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img src="/profile.jpeg" alt="Portrait" className="w-full h-full object-cover rounded-[32px]" />
              </div>
            </div>

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col items-center lg:items-end text-center lg:text-right mt-6 lg:mt-32 z-10"
            >
              <h1 className="font-display text-[5rem] sm:text-[7rem] lg:text-[9vw] xl:text-[130px] leading-[0.8] tracking-tighter text-foreground uppercase">
                Developer
              </h1>
              <p className="max-w-xs mt-6 text-foreground/70 font-medium text-sm sm:text-base">
                I'm a digital designer and full-stack developer crafting premium experiences.
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
