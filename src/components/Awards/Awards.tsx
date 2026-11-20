import { Medal } from "@phosphor-icons/react";
import { awards } from "@/data/awards";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const years = awards.map((a) => Number(a.date)).filter(Number.isFinite);
const span = years.length
  ? `${Math.min(...years).toString()}/${Math.max(...years).toString().slice(-2)}`
  : "";

export default function Awards() {
  return (
    <section id="awards" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Achievements"
          title="Proof, not promises."
          right={
            <div className="hidden shrink-0 flex-col items-end gap-1 sm:flex">
              <span className="mono-label text-xs text-text-secondary">
                {String(awards.length).padStart(2, "0")} — {span}
              </span>
              <span className="mono-label text-[10px] text-text-tertiary">Hover to pause</span>
            </div>
          }
        />
      </div>

      <Reveal className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...awards, ...awards].map((award, i) => (
            <figure
              key={`${award.event}-${i}`}
              tabIndex={i >= awards.length ? -1 : 0}
              aria-hidden={i >= awards.length}
              aria-label={`${award.title}, ${award.event}, ${award.date}. ${award.detail}`}
              className="group relative mr-5 aspect-[3/4] w-[220px] shrink-0 overflow-hidden rounded-[18px] border border-line bg-surface transition-[transform,border-color] duration-500 hover:-translate-y-1.5 hover:border-electric/40 focus-visible:-translate-y-1.5 sm:w-[280px]"
            >
              {award.image ? (
                <img
                  src={award.image}
                  alt={award.event}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="bg-grid flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface-2 via-surface to-abyss p-6 text-center">
                  <Medal size={40} weight="duotone" className="text-cyan/70" />
                  <span className="mono-label text-[10px] text-text-tertiary">
                    Photo coming soon
                  </span>
                </div>
              )}

              <span className="mono-label absolute top-4 left-4 text-[10px] text-text-secondary">
                {String((i % awards.length) + 1).padStart(2, "0")}
              </span>
              <span className="mono-label absolute top-3 right-4 rounded-full border border-line bg-void/70 px-2.5 py-1 text-[10px] text-text-secondary backdrop-blur">
                {award.date}
              </span>

              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void via-void/85 to-transparent px-4 pt-14 pb-4">
                <h3 className="font-display text-base font-medium leading-snug text-text-primary">
                  {award.title}
                </h3>
                <p className="mt-1 text-xs leading-snug text-text-secondary">{award.event}</p>
                <p className="mt-2 max-h-0 translate-y-2 overflow-hidden text-xs leading-relaxed text-text-tertiary opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:max-h-24 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {award.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
