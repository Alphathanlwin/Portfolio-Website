import { useRef } from "react";
import { milestones } from "@/data/experience";
import { useGsapReveal } from "@/animations/useGsapReveal";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapReveal(sectionRef, ".milestone");

  return (
    <section id="experience" ref={sectionRef} className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mono-label mb-4 text-xs text-cyan">Timeline</p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
          My journey so far.
        </h2>

        <div className="relative mt-16">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-electric via-violet to-transparent sm:left-[9px]" />

          <ol className="space-y-12">
            {milestones.map((m) => (
              <li key={`${m.org}-${m.date}`} className="milestone relative pl-8 sm:pl-10">
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-electric bg-void shadow-[0_0_16px_rgba(77,124,255,0.6)] sm:h-[18px] sm:w-[18px]" />
                <span className="mono-label text-[11px] text-electric">{m.date}</span>
                <h3 className="mt-1.5 font-display text-lg font-medium text-text-primary sm:text-xl">
                  {m.org}
                </h3>
                <p className="mt-0.5 text-sm text-cyan">{m.role}</p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-secondary">
                  {m.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
