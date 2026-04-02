import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollingProps {
  children: React.ReactNode;
}

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Sync Lenis scroll with GSAP's ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Sync GSAP ticker with Lenis requestAnimationFrame
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP lag smoothing to avoid jumps during scrolling
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Cleanup on unmount
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  // Handle route and hash changes seamlessly with Lenis
  useEffect(() => {
    if (!lenisRef.current) return;

    if (location.hash) {
      const target = document.querySelector(location.hash) as HTMLElement;
      if (target) {
        // Use Lenis smooth scrolling instead of browser jump to prevent GSAP misalignment
        lenisRef.current.scrollTo(target, { immediate: false, duration: 1.5 });
      }
    } else {
      // Only reset scroll on path changes (not hash changes)
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname, location.hash]);

  return <>{children}</>;
}
