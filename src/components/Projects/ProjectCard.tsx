import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const COVERS = [
  "from-electric/25 via-violet/10",
  "from-cyan/20 via-electric/10",
  "from-violet/25 via-magenta/10",
  "from-magenta/20 via-violet/10",
];

const hashes = (stack: string[]) =>
  stack.map((tech) => `#${tech.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`);

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const link = project.github ?? project.demo;

  return (
    <article className="project-card group relative flex h-full flex-col rounded-2xl bg-surface p-4 transition-all duration-500 hover:-translate-y-1 hover:bg-surface-2">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-abyss">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <>
            <div
              className={`absolute inset-0 bg-gradient-to-br ${COVERS[index % COVERS.length]} to-transparent`}
            />
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-electric/20 blur-3xl" />
            <span className="absolute left-5 top-4 font-display text-5xl font-semibold text-white/10">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mono-label absolute bottom-4 left-5 text-[10px] text-cyan/80">
              {project.type}
            </span>
          </>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={project.github ? `${project.name} on GitHub` : `${project.name} live demo`}
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-void/85 text-text-primary backdrop-blur transition-colors hover:text-cyan"
          >
            {project.github ? (
              <GithubLogo size={18} weight="fill" />
            ) : (
              <ArrowUpRight size={18} weight="bold" />
            )}
          </a>
        )}
      </div>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
        <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
          {project.name}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1.5 pt-5">
          {hashes(project.stack).map((tag) => (
            <span key={tag} className="text-[13px] text-violet/85">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
