import { useEffect, type RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useGsapReveal(
  containerRef: RefObject<HTMLElement | null>,
  selector: string,
  options?: { stagger?: number; y?: number }
) {
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(selector);
      if (!targets.length) return;

      gsap.fromTo(
        targets,
        { opacity: 0, y: options?.y ?? 32, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          stagger: options?.stagger ?? 0.08,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef]);
}

export function refreshScrollTrigger() {
  ScrollTrigger.refresh();
}
