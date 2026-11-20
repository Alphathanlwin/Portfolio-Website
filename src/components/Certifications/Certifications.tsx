import {
  AmazonLogo,
  Certificate,
  Code,
  Database,
  GoogleLogo,
  GraduationCap,
  SealCheck,
} from "@phosphor-icons/react";
import { certifications } from "@/data/certifications";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ISSUER_ICONS: Record<string, typeof GraduationCap> = {
  "Harvard University": GraduationCap,
  "AWS × Udacity": AmazonLogo,
  Google: GoogleLogo,
  Scrimba: Code,
  DataCamp: Database,
  ITPEC: Certificate,
};

const COVERS = [
  "from-electric/25 via-violet/10",
  "from-cyan/20 via-electric/10",
  "from-violet/25 via-magenta/10",
  "from-magenta/20 via-violet/10",
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="Certifications" title="Formalizing what I've taught myself." />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {certifications.map((cert, i) => {
            const Icon = ISSUER_ICONS[cert.issuer] ?? Certificate;

            return (
              <Reveal key={cert.name} delay={(i % 2) * 0.06} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:bg-surface">
                  <div className="relative aspect-[4/3] overflow-hidden bg-abyss">
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={`${cert.name} certificate`}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <>
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${COVERS[i % COVERS.length]} to-transparent`}
                        />
                        <div className="absolute inset-0 bg-grid opacity-30" />
                        <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-electric/20 blur-3xl" />
                        <span className="absolute left-5 top-4 font-display text-5xl font-semibold text-white/10">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon size={44} weight="duotone" className="text-cyan/40" />
                        </div>
                      </>
                    )}
                    <span className="mono-label absolute right-3 top-3 rounded-full border border-line bg-void/70 px-2.5 py-1 text-[10px] text-text-secondary backdrop-blur">
                      {cert.date}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-medium leading-snug text-text-primary">
                      {cert.name}
                    </h3>
                    <div className="flex-1" />
                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-line-soft pt-4">
                      <p className="text-sm text-text-secondary">{cert.issuer}</p>
                      <SealCheck
                        size={16}
                        weight="fill"
                        aria-hidden
                        className="shrink-0 text-cyan/60 transition-colors duration-300 group-hover:text-cyan"
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
