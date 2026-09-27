import { useRef } from "react";
import { Brain, Sparkle, HardDrives, Database, Network, PuzzlePiece } from "@phosphor-icons/react";
import { identityCards, type IdentityCard } from "@/data/identity";
import { useGsapReveal } from "@/animations/useGsapReveal";

const ICONS: Record<IdentityCard["icon"], typeof Brain> = {
  brain: Brain,
  sparkle: Sparkle,
  server: HardDrives,
  database: Database,
  network: Network,
  puzzle: PuzzlePiece,
};

export default function Identity() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapReveal(sectionRef, ".identity-card");

  return (
    <section ref={sectionRef} className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mono-label mb-4 text-xs text-cyan">Engineering Focus</p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
          Where I spend my engineering effort.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {identityCards.map((card) => {
            const Icon = ICONS[card.icon];
            return (
              <div
                key={card.title}
                className="identity-card group relative overflow-hidden rounded-2xl border border-line bg-surface/60 p-7 transition-colors duration-300 hover:border-electric/40"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-electric/0 blur-3xl transition-colors duration-500 group-hover:bg-electric/15" />
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
