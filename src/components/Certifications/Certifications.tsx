import { useRef } from "react";
import { SealCheck } from "@phosphor-icons/react";
import { certifications } from "@/data/certifications";
import { useGsapReveal } from "@/animations/useGsapReveal";

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapReveal(sectionRef, ".cert-card");

  return (
    <section id="certifications" ref={sectionRef} className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mono-label mb-4 text-xs text-cyan">Certifications</p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
          Formalizing what I've taught myself.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="cert-card group flex items-start gap-4 rounded-2xl border border-line bg-surface/60 p-6 transition-colors duration-300 hover:border-electric/40"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
