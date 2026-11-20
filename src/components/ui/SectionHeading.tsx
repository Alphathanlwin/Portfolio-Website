import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: ReactNode;
  right?: ReactNode;
}

export function SectionHeading({ label, title, description, right }: SectionHeadingProps) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <Reveal>
          <p className="mono-label mb-4 text-xs text-cyan">{label}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        {description && (
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
      {right}
    </div>
  );
}
