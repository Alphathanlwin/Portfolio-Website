import { currentlyLearning } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";

export default function Learning() {
  const doubled = [...currentlyLearning, ...currentlyLearning];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mono-label mb-2 text-xs text-cyan">Currently Exploring</p>
          <h2 className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">
            Still building, still learning.
          </h2>
        </Reveal>
      </div>

      <Reveal
        y={16}
        className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {doubled.map((tag, i) => (
            <span
              key={`${tag}-${i}`}
              className="glass mr-3 whitespace-nowrap rounded-full px-5 py-2.5 text-sm text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
