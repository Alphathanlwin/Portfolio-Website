import { useRef } from "react";
import { useGsapReveal } from "@/animations/useGsapReveal";

const INTERESTS = [
  "Machine Learning",
  "Generative AI",
  "LLM Applications",
  "Computer Vision",
  "RAG Systems",
  "AI Agents",
  "Backend Engineering",
  "Data & Intelligent Systems",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapReveal(sectionRef, ".reveal");

  return (
    <section id="about" ref={sectionRef} className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="reveal mono-label mb-4 text-xs text-cyan">About</p>
            <h2 className="reveal font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
              Building my way into AI engineering.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="reveal text-base leading-relaxed text-text-secondary sm:text-lg">
              I'm a Computer Science student at the University of Information Technology,
              focused on becoming an AI Engineer. Most of my time goes into taking AI
              concepts&nbsp;— models, retrieval, agents&nbsp;— and turning them into usable,
              full-stack products rather than isolated notebooks.
            </p>
            <p className="reveal text-base leading-relaxed text-text-secondary sm:text-lg">
              I like understanding systems end to end: how a model's output becomes an API
              response, how that response becomes a real interface someone can actually use.
              That pull toward the whole stack is what keeps me building instead of just
              studying theory.
            </p>

            <div className="reveal flex flex-wrap gap-2 pt-4">
              {INTERESTS.map((interest) => (
                <span
                  key={interest}
                  className="glass rounded-full px-4 py-2 text-xs text-text-secondary transition-colors hover:text-cyan"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
