import { ArrowUpRight, EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { socials } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="relative border-t border-line-soft py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-display text-lg font-semibold text-text-primary">Aung Than</p>
          <p className="mono-label mt-1 text-[11px] text-text-tertiary">AI Engineer in the Making</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-text-secondary transition-colors hover:text-cyan"
          >
            <GithubLogo size={18} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-text-secondary transition-colors hover:text-cyan"
          >
            <LinkedinLogo size={18} />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="text-text-secondary transition-colors hover:text-cyan"
          >
            <EnvelopeSimple size={18} />
          </a>
          <a
            href={socials.resume}
            target="_blank"
            rel="noreferrer"
            aria-label="Resume"
            className="flex items-center gap-1 text-sm text-text-secondary transition-colors hover:text-cyan"
          >
            Resume <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-6xl px-6 text-xs text-text-tertiary">
        Built with React, Three.js, and too much caffeine.
      </p>
    </footer>
  );
}
