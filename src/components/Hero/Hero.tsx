import { Suspense, lazy } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react";
import { socials } from "@/data/nav";

const Scene = lazy(() => import("./Scene"));

const HEADLINE_LINES = ["I build", "intelligent systems", "for the real world."];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const word = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 lg:left-[36%]">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_0%,rgba(5,7,13,0.6)_55%,#05070d_85%)] lg:bg-[radial-gradient(ellipse_at_60%_45%,transparent_0%,rgba(5,7,13,0.5)_60%,#05070d_90%)]" />
      <div className="pointer-events-none absolute inset-0 bg-void/50 lg:hidden" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div
          variants={container}
          initial={reduced ? false : "hidden"}
          animate={reduced ? undefined : "show"}
          className="max-w-2xl"
        >
          <motion.p variants={word} className="mono-label mb-6 text-xs text-cyan">
            AI Engineer · Builder · CS @ UIT
          </motion.p>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            {HEADLINE_LINES.map((line, li) => (
              <span key={li} className="block">
                {line.split(" ").map((w, wi) => (
                  <motion.span
                    key={wi}
                    variants={word}
                    className={`mr-3 inline-block ${
                      li === HEADLINE_LINES.length - 1 ? "text-gradient glow-text" : ""
                    }`}
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p variants={word} className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Computer Science student at the University of Information Technology, building
            AI-powered products across machine learning, LLMs, computer vision, and full-stack
            systems.
          </motion.p>

          <motion.div variants={word} className="mt-10 flex flex-wrap items-center gap-4">
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
              href={socials.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-2 text-sm text-text-secondary transition-colors hover:text-cyan"
            >
              Download Resume <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-tertiary sm:flex">
        <span className="mono-label text-[10px]">SCROLL</span>
        <ArrowDown size={14} className="animate-drift" />
      </div>
    </section>
  );
}
