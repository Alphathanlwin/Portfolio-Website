import { SealCheck } from "@phosphor-icons/react";
import { certifications } from "@/data/certifications";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="Certifications" title="Formalizing what I've taught myself." />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={(i % 3) * 0.05}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-surface/60 p-6 transition-colors duration-300 hover:border-electric/40">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface-2 text-cyan transition-colors group-hover:border-cyan/40">
                  <SealCheck size={18} weight="duotone" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-medium leading-snug text-text-primary">
                    {cert.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-text-secondary">{cert.issuer}</p>
                  <p className="mono-label mt-1 text-[10px] text-text-tertiary">{cert.date}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
