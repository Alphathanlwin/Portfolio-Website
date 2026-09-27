import { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowDown } from "@phosphor-icons/react";
import { gsap } from "@/lib/gsap";
import NeuralVisual from "./NeuralVisual";

interface HeroProps {
  ready: boolean;
}

const HEADLINE_LINES = ["I build intelligent systems", "for the real world."];

export default function Hero({ ready }: HeroProps) {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ready) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".headline-word",
        { opacity: 0, y: 60, filter: "blur(12px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, stagger: 0.05 }
      )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 16, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          visualRef.current,
          { opacity: 0, x: 60 },
          { opacity: 1, x: 0, duration: 1.1, ease: "expo.out" },
          "-=0.9"
        )
        .fromTo(
          scrollHintRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.3"
        );
    });

    return () => ctx.revert();
  }, [ready]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-electric/[0.08] blur-[140px]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mono-label mb-6 text-xs text-cyan">AI ENGINEER · BUILDER · CS @ UIT</p>

          <h1
            ref={headlineRef}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
          >
            {HEADLINE_LINES.map((line, li) => (
              <span key={li} className="block overflow-hidden">
                {line.split(" ").map((word, wi) => (
                  <span
                    key={wi}
                    className={`headline-word mr-3 inline-block ${
                      li === 0 ? "" : "text-gradient glow-text"
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p
            ref={descRef}
            className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            Computer Science student at the University of Information Technology, building
            AI-powered products across machine learning, LLMs, computer vision, and full-stack
            systems.
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-text-primary px-6 py-3.5 text-sm font-medium text-void transition-transform hover:scale-[1.03]"
            >
              View My Work
              <ArrowUpRight
                size={16}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-text-primary transition-colors hover:text-cyan"
            >
              Let's Connect
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-2 text-sm text-text-tertiary transition-colors hover:text-cyan"
            >
              Download Resume <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div ref={visualRef}>
          <NeuralVisual />
        </div>
      </div>

      <div
        ref={scrollHintRef}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-tertiary sm:flex"
      >
        <span className="mono-label text-[10px]">SCROLL</span>
        <ArrowDown size={14} className="animate-drift" />
      </div>
    </section>
  );
}
