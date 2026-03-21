import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const servicesData = [
  {
    id: "01.",
    title: "Web Design & Development",
    description: "We build intuitive, fast, and scalable digital experiences that convert visitors into loyal customers, leveraging high-performance React and modern bleeding-edge web frameworks.",
    tags: ["Responsive Design", "Interactive Design", "Web Apps"],
    imgSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "02.",
    title: "UI & UX Design",
    description: "Design modern, user-friendly interfaces with smooth animations and responsive layouts to deliver engaging digital experiences..",
    tags: ["Responsive Design", "Interactive UI", "User Experience"],
    imgSrc: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "03.",
    title: "AI & Automation",
    description: "I build intelligent tools like chatbots and automation systems using Generative AI to solve real business problems.",
    tags: ["Generative AI", "Chatbots", "Automation"],
    imgSrc: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "04.",
    title: "Landing Pages",
    description: "Design high-converting, fast, and responsive landing pages focused on user engagement and business results.",
    tags: ["Lead Generation", "Modern UI", "Clean Layouts"],
    imgSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  }
];

const ServicesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="services" className="w-full bg-[#000000] text-white py-24 md:py-32 font-sans z-30 relative overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 flex flex-col items-center">

        {/* Massive Bold Headline */}
        <div className="flex justify-center w-full mb-16 md:mb-24">
          <h2 className="text-[11vw] sm:text-[6rem] lg:text-[7.5rem] xl:text-[9rem] font-sans font-black uppercase text-white leading-[0.85] tracking-tight text-center relative inline-flex items-start justify-center">
            HOW I CAN HELP
            <span className="text-[10px] md:text-sm font-normal tracking-widest text-[#a1a1aa] ml-2 md:ml-4 mt-2 md:mt-4">
              (SERVICES)
            </span>
          </h2>
        </div>

        {/* Vertical Accordion Structure */}
        <div className="w-full border-t border-[#27272a] max-w-[1400px]">
          {servicesData.map((service, i) => {
            const isExpanded = expandedIndex === i;

            return (
              <div
                key={service.id}
                className="w-full border-b border-[#27272a] group cursor-pointer transition-colors duration-500 hover:bg-[#050505]"
                onMouseEnter={() => setExpandedIndex(i)}
                onClick={() => setExpandedIndex(i)}
              >
                <div className="w-full px-2 lg:px-6 py-4 lg:py-6 min-h-[80px] lg:min-h-[100px] flex items-center justify-center">
                  <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start lg:items-center">

                    {/* Column 1: Number */}
                    <div className="col-span-1 lg:col-span-3">
                      <span className="text-[#a1a1aa] font-medium text-xl lg:text-3xl tabular-nums">
                        {service.id.replace('.', '')}<span className="text-[#ea580c]">.</span>
                      </span>
                    </div>

                    {/* Column 2 & 3: Interactive Content */}
                    <div className="col-span-1 lg:col-span-9 relative flex flex-col justify-center">

                      {/* Expanded Content */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isExpanded ? "auto" : 0,
                          opacity: isExpanded ? 1 : 0
                        }}
                        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                        className="w-full overflow-hidden"
                      >
                        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-12 py-2 lg:py-4">

                          {/* Left Column: Landscape Image with Warm Tones */}
                          <div className="w-full lg:w-[45%] shrink-0">
                            <div className="w-full aspect-[16/9] rounded-[16px] lg:rounded-[20px] overflow-hidden shadow-2xl relative">
                              {/* Subtle overlay */}
                              <div className="absolute inset-0 bg-black/10 z-10 hidden group-hover:block transition-all duration-700" />
                              <img src={service.imgSrc} alt={service.title} className="w-full h-full object-cover filter contrast-[1.1] saturate-[1.2]" />
                            </div>
                          </div>

                          {/* Right Column: Title, Description, and UI Pills */}
                          <div className="w-full lg:w-[55%] flex flex-col justify-center">
                            <h3 className="text-white font-sans font-bold text-2xl sm:text-3xl lg:text-[2rem] tracking-tight mb-2 lg:mb-4">
                              {service.title}
                            </h3>
                            <p className="text-[#a1a1aa] text-sm lg:text-base font-medium leading-relaxed max-w-[500px] mb-6 lg:mb-8">
                              {service.description}
                            </p>

                            {/* Small Minimalist UI Tags */}
                            <div className="flex flex-wrap gap-2 lg:gap-3">
                              {service.tags.map(tag => (
                                <span key={tag} className="bg-[#18181b] border border-[#27272a] text-[#d4d4d8] text-[10px] sm:text-xs font-semibold px-4 py-2 rounded-full tracking-wide">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                        </div>
                      </motion.div>

                      {/* Collapsed Content */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isExpanded ? 0 : "auto",
                          opacity: isExpanded ? 0 : 1
                        }}
                        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                        className="w-full overflow-hidden"
                      >
                        <div className="flex w-full py-2 lg:py-4">
                          {/* Layout Matcher for unexpanded state */}
                          <div className="hidden lg:block lg:w-[45%] shrink-0 mr-8 lg:mr-16" />

                          <div className="w-full lg:w-[55%] flex items-center">
                            <h3 className="text-white/80 group-hover:text-white font-sans font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight transition-colors duration-300">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                      </motion.div>

                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
