import { milestones } from "@/data/experience";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading label="Timeline" title="My journey so far." />

        <div className="relative mt-16">
          <div className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-electric via-violet to-transparent sm:left-[9px]" />

          <ol className="space-y-12">
            {milestones.map((m, i) => (
              <li key={`${m.org}-${m.date}`} className="relative pl-8 sm:pl-10">
                <span className="absolute top-1.5 left-0 h-3.5 w-3.5 rounded-full border-2 border-electric bg-void shadow-[0_0_16px_rgba(77,124,255,0.6)] sm:h-[18px] sm:w-[18px]" />
                <Reveal delay={i * 0.04} y={20}>
                  <span className="mono-label text-[11px] text-electric">{m.date}</span>
                  <h3 className="mt-1.5 font-display text-lg font-medium text-text-primary sm:text-xl">
                    {m.org}
                  </h3>
                  <p className="mt-0.5 text-sm text-cyan">{m.role}</p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-secondary">
                    {m.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
