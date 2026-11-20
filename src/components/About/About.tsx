import { Reveal } from "@/components/ui/Reveal";

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
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <p className="mono-label mb-4 text-xs text-cyan">About</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
                Building my way into AI engineering.
              </h2>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal>
              <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
                I'm a Computer Science student at the University of Information Technology,
                focused on becoming an AI Engineer. Most of my time goes into taking AI
                concepts — models, retrieval, agents — and turning them into usable, full-stack
                products rather than isolated notebooks.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
                I like understanding systems end to end: how a model's output becomes an API
                response, how that response becomes a real interface someone can actually use.
                That pull toward the whole stack is what keeps me building instead of just
                studying theory.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="flex flex-wrap gap-2 pt-4">
              {INTERESTS.map((interest) => (
                <span
                  key={interest}
                  className="glass rounded-full px-4 py-2 text-xs text-text-secondary transition-colors hover:text-cyan"
                >
                  {interest}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
