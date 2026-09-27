import { useEffect, useRef } from "react";
import { currentlyLearning } from "@/data/skills";
import { gsap } from "@/lib/gsap";

export default function Learning() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        }
      );

      const el = trackRef.current!;
      const distance = el.scrollWidth / 2;
      gsap.to(el, {
        x: -distance,
        duration: 24,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const doubled = [...currentlyLearning, ...currentlyLearning];

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mono-label mb-2 text-xs text-cyan">Currently Exploring</p>
        <h2 className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">
          Still building, still learning.
        </h2>
      </div>

      <div className="relative mt-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div ref={trackRef} className="flex w-max gap-3 px-6">
          {doubled.map((tag, i) => (
            <span
              key={`${tag}-${i}`}
              className="glass whitespace-nowrap rounded-full px-5 py-2.5 text-sm text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
