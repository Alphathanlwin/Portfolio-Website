import { Brain, Database, HardDrives, Network, PuzzlePiece, Sparkle } from "@phosphor-icons/react";
import { identityCards, type IdentityCard } from "@/data/identity";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ICONS: Record<IdentityCard["icon"], typeof Brain> = {
  brain: Brain,
  sparkle: Sparkle,
  server: HardDrives,
  database: Database,
  network: Network,
  puzzle: PuzzlePiece,
};

export default function Identity() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="Engineering Focus" title="Where I spend my engineering effort." />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {identityCards.map((card, i) => {
            const Icon = ICONS[card.icon];
            return (
              <Reveal key={card.title} delay={(i % 3) * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface/60 p-7 transition-colors duration-300 hover:border-electric/40">
                  <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-electric/0 blur-3xl transition-colors duration-500 group-hover:bg-electric/15" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-2 text-cyan transition-colors group-hover:border-cyan/40">
                    <Icon size={20} weight="duotone" />
                  </div>
                  <h3 className="relative mt-5 font-display text-lg font-medium text-text-primary">
                    {card.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-text-secondary">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
