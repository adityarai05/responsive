import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    year: "2023 — Present",
    role: "Senior Product Designer",
    company: "TechVision Studio",
    desc: "Leading design systems and product strategy for enterprise clients.",
  },
  {
    year: "2021 — 2023",
    role: "Full-Stack Developer",
    company: "StartupLab",
    desc: "Built and shipped 12+ web applications from concept to production.",
  },
  {
    year: "2020 — 2021",
    role: "UI/UX Designer",
    company: "DesignCraft Agency",
    desc: "Designed interfaces for fintech, healthcare, and e-commerce brands.",
  },
  {
    year: "2019 — 2020",
    role: "Junior Developer",
    company: "CodeBase Inc.",
    desc: "Started my career building responsive websites and learning React.",
  },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Experience
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            My <span className="gradient-text">journey</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px gradient-bg origin-top"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className={`relative pl-12 md:pl-0 pb-12 last:pb-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute top-1 w-3 h-3 rounded-full gradient-bg left-[10px] md:left-auto ${
                  i % 2 === 0 ? "md:right-[-6px]" : "md:left-[-6px]"
                }`}
              />
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <span className="text-xs font-medium text-primary">
                  {exp.year}
                </span>
                <h3 className="text-lg font-bold text-foreground mt-1">
                  {exp.role}
                </h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground mt-2">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
