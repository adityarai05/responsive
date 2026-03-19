import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const servicesData = [
  {
    title: "WEB APPS",
    leftText: ["Web & App Design"],
    rightText: ["UX Research"],
    images: [
      { src: "https://picsum.photos/seed/br1/400/500", top: "0%", left: "5%", width: "180px", height: "240px", rotate: -8, parallax: 1.2 },
      { src: "https://picsum.photos/seed/br2/600/400", top: "45%", left: "10%", width: "320px", height: "200px", rotate: 4, parallax: 0.8 },
      { src: "https://picsum.photos/seed/br3/400/400", top: "-5%", right: "15%", width: "200px", height: "200px", rotate: 12, parallax: -1.5 },
      { src: "https://picsum.photos/seed/br4/500/300", top: "60%", right: "5%", width: "240px", height: "160px", rotate: -6, parallax: -0.5 },
    ]
  },
  {
    title: "UI/UX",
    leftText: ["Prototyping"],
    rightText: ["Visual Design"],
    images: [
      { src: "https://picsum.photos/seed/ui1/400/500", top: "5%", left: "15%", width: "220px", height: "280px", rotate: 5, parallax: 1 },
      { src: "https://picsum.photos/seed/ui2/600/400", top: "60%", left: "5%", width: "280px", height: "180px", rotate: -4, parallax: 0.6 },
      { src: "https://picsum.photos/seed/ui3/400/400", top: "0%", right: "20%", width: "180px", height: "180px", rotate: -10, parallax: -1.2 },
      { src: "https://picsum.photos/seed/ui4/500/300", top: "50%", right: "10%", width: "300px", height: "200px", rotate: 8, parallax: -0.8 },
    ]
  },
  {
    title: "FRAMER",
    leftText: ["Web Development"],
    rightText: ["Interactions"],
    images: [
      { src: "https://picsum.photos/seed/fr1/400/500", top: "2%", left: "8%", width: "200px", height: "260px", rotate: -12, parallax: 1.5 },
      { src: "https://picsum.photos/seed/fr2/600/400", top: "50%", left: "12%", width: "260px", height: "180px", rotate: 6, parallax: 0.9 },
      { src: "https://picsum.photos/seed/fr3/400/400", top: "-2%", right: "12%", width: "240px", height: "240px", rotate: 15, parallax: -1.0 },
      { src: "https://picsum.photos/seed/fr4/500/300", top: "60%", right: "8%", width: "220px", height: "140px", rotate: -8, parallax: -0.7 },
    ]
  },
  {
    title: "LANDING PAGES",
    leftText: ["Interactive Design"],
    rightText: ["Responsive Design"],
    images: [
      { src: "https://picsum.photos/seed/an1/400/500", top: "10%", left: "12%", width: "180px", height: "220px", rotate: 8, parallax: 1.1 },
      { src: "https://picsum.photos/seed/an2/600/400", top: "65%", left: "5%", width: "300px", height: "180px", rotate: -6, parallax: 0.7 },
      { src: "https://picsum.photos/seed/an3/400/400", top: "10%", right: "20%", width: "200px", height: "200px", rotate: -12, parallax: -1.3 },
      { src: "https://picsum.photos/seed/an4/500/300", top: "55%", right: "10%", width: "260px", height: "160px", rotate: 10, parallax: -0.6 },
    ]
  }
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX - window.innerWidth / 2) / 25;
    const y = (e.clientY - window.innerHeight / 2) / 25;
    setMousePos({ x, y });
  };

  return (
    <section
      id="services"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen py-24 lg:py-32 bg-[#111111] text-white overflow-hidden flex flex-col items-center justify-center font-display uppercase"
    >

      {/* Top Fade Overlay */}
      <div className="absolute top-0 left-0 right-0 h-24 lg:h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />




      <div className="relative w-full max-w-7xl mx-auto min-h-[70vh] flex flex-col pt-10 lg:pt-0" style={{ zIndex: 10 }}>

        {/* Left 'What I Do' Title (Native Flow) */}
        <div className="w-full flex justify-start px-6 lg:px-12 mb-12 lg:mb-16 z-30 relative">
          <h3 className="text-white/30 font-display text-5xl sm:text-7xl lg:text-[8rem] tracking-tight lg:tracking-[0.1em] uppercase whitespace-nowrap leading-[0.8] drop-shadow-sm">
            WHAT I DO?
          </h3>
        </div>

        {/* Main Stack Container to prevent overlap */}
        <div className="relative flex-1 flex flex-col items-center justify-center w-full">

          {/* Floating Images Layer (z-20) */}
          <div className="absolute inset-0 pointer-events-none hidden md:block" style={{ zIndex: 20 }}>
            <AnimatePresence>
              {hoveredIndex !== null && servicesData[hoveredIndex].images.map((img, idx) => (
                <motion.div
                  key={`${hoveredIndex}-${idx}`}
                  initial={{ opacity: 0, scale: 0.8, y: 30, rotate: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: mousePos.y * img.parallax,
                    x: mousePos.x * img.parallax,
                    rotate: img.rotate
                  }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 },
                    rotate: { duration: 0.4 },
                    x: { type: "spring", stiffness: 50, damping: 20 },
                    y: { type: "spring", stiffness: 50, damping: 20 },
                  }}
                  className="absolute rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 filter brightness-90 bg-gray-900"
                  style={{
                    top: img.top,
                    left: img.left,
                    right: img.right,
                    bottom: (img as any).bottom,
                    width: img.width,
                    height: img.height,
                  }}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Text Items */}
          {servicesData.map((service, i) => {
            const isActive = hoveredIndex === i;

            return (
              <div
                key={service.title}
                className="relative flex items-center justify-center w-full group cursor-pointer transition-all duration-300 py-1 sm:py-2"
                style={{ zIndex: isActive ? 30 : 10 }}
                onMouseEnter={() => setHoveredIndex(i)}
              >
                {/* Left Subtexts */}
                <motion.div
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-[2%] md:left-[8%] lg:left-[12%] hidden md:flex flex-col text-xs sm:text-sm text-white/40 tracking-widest font-sans font-medium space-y-2"
                >
                  {service.leftText.map((txt) => <span key={txt}>{txt}</span>)}
                </motion.div>

                {/* Central Title */}
                <h2
                  className={`font-display text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem] uppercase leading-[0.8] tracking-tighter transition-colors duration-400 ease-out select-none ${isActive ? "text-white" : "text-white/20"
                    }`}
                >
                  {service.title}
                </h2>

                {/* Right Subtexts */}
                <motion.div
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute right-[2%] md:right-[8%] lg:right-[12%] hidden md:flex flex-col text-xs sm:text-sm text-white/40 tracking-widest font-sans font-medium space-y-2 text-right"
                >
                  {service.rightText.map((txt) => <span key={txt}>{txt}</span>)}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
