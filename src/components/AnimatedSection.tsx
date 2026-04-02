import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "zoom-in";
  delay?: number;
  duration?: number;
  stagger?: number;
  yOffset?: number;
  xOffset?: number;
  threshold?: string;
  as?: React.ElementType;
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 1,
  stagger = 0,
  yOffset = 50,
  xOffset = 50,
  threshold = "top 85%",
  as: Component = "div",
  ...props
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = sectionRef.current;
    if (!el) return;

    let initialStyles: gsap.TweenVars = { opacity: 0, y: 0, x: 0, scale: 1 };
    
    switch (animation) {
      case "fade-up":
        initialStyles = { opacity: 0, y: yOffset, x: 0, scale: 1 };
        break;
      case "fade-in":
        initialStyles = { opacity: 0, y: 0, x: 0, scale: 1 };
        break;
      case "fade-left":
        initialStyles = { opacity: 0, y: 0, x: xOffset, scale: 1 };
        break;
      case "fade-right":
        initialStyles = { opacity: 0, y: 0, x: -xOffset, scale: 1 };
        break;
      case "zoom-in":
        initialStyles = { opacity: 0, y: 0, x: 0, scale: 0.9 };
        break;
    }

    const target = stagger > 0 ? el.children : el;

    // Use fromTo instead of set + to for better ScrollTrigger predictability
    gsap.fromTo(target, 
      initialStyles,
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: duration,
        delay: delay,
        stagger: stagger > 0 ? stagger : 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: threshold,
          once: true,
          // marker: false, 
        },
        clearProps: "all" // Cleans up fully to prevent layout issues later
      }
    );

    // Refresh ScrollTrigger to recalculate layout after mounting
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

  }, { scope: sectionRef });

  return (
    <Component ref={sectionRef} className={cn("w-full", className)} {...props}>
      {children}
    </Component>
  );
}
