import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Figma,
  Code2,
  Database,
  Palette,
  Globe,
  Smartphone,
  Server,
  Layers,
} from "lucide-react";

const skills = [
  { icon: Figma, label: "UI/UX Design", desc: "Figma, Sketch" },
  { icon: Code2, label: "Frontend Dev", desc: "React, TypeScript" },
  { icon: Database, label: "Backend Dev", desc: "Node.js, PostgreSQL" },
  { icon: Palette, label: "Brand Design", desc: "Identity, Systems" },
  { icon: Globe, label: "Web Apps", desc: "Next.js, Vite" },
  { icon: Smartphone, label: "Responsive", desc: "Mobile-first" },
  { icon: Server, label: "DevOps", desc: "Docker, AWS" },
  { icon: Layers, label: "Prototyping", desc: "Framer, Principle" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Skills & Tools
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            My <span className="gradient-text">expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-card rounded-2xl p-6 shadow-soft hover-lift cursor-default border border-transparent hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow duration-300">
                <skill.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">{skill.label}</h3>
              <p className="text-sm text-muted-foreground mt-1">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
