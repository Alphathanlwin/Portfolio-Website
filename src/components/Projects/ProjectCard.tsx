import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="project-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-electric/40 sm:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet/0 blur-3xl transition-colors duration-500 group-hover:bg-violet/15" />

      <div className="relative flex items-start justify-between gap-4">
        <span className="mono-label text-[11px] text-text-tertiary">
          {String(index + 1).padStart(2, "0")} · {project.type}
        </span>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="rounded-full border border-line p-2 text-text-secondary transition-colors hover:border-cyan/40 hover:text-cyan"
            >
              <GithubLogo size={15} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} live demo`}
              className="rounded-full border border-line p-2 text-text-secondary transition-colors hover:border-cyan/40 hover:text-cyan"
            >
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>

      <h3 className="relative mt-5 font-display text-xl font-semibold text-text-primary sm:text-2xl">
        {project.name}
      </h3>

      <div className="relative mt-5 space-y-3 text-sm">
        <div>
          <span className="mono-label text-[10px] text-electric">Problem</span>
          <p className="mt-1 leading-relaxed text-text-secondary">{project.problem}</p>
        </div>
        <div>
          <span className="mono-label text-[10px] text-cyan">Solution</span>
          <p className="mt-1 leading-relaxed text-text-secondary">{project.description}</p>
        </div>
        <div>
          <span className="mono-label text-[10px] text-violet">Focus</span>
          <p className="mt-1 leading-relaxed text-text-secondary">{project.focus}</p>
        </div>
      </div>

      <div className="relative mt-6 flex flex-wrap gap-1.5 pt-6 border-t border-line-soft">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="tech-tag rounded-full bg-surface-2 px-2.5 py-1 text-[11px] text-text-tertiary transition-colors duration-300 group-hover:text-text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.github || project.demo) && (
        <a
          href={project.github ?? project.demo}
          target="_blank"
          rel="noreferrer"
          className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-text-primary"
        >
          Explore project
          <ArrowUpRight
            size={14}
            weight="bold"
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      )}
    </article>
  );
}
