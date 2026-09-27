import { useRef } from "react";
import { projects } from "@/data/projects";
import { useGsapReveal } from "@/animations/useGsapReveal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapReveal(sectionRef, ".project-card", { y: 40, stagger: 0.1 });

  return (
    <section id="projects" ref={sectionRef} className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mono-label mb-4 text-xs text-cyan">Selected Work</p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl">
          Things I've built.
        </h2>
        <p className="mt-4 max-w-xl text-base text-text-secondary">
          Experiments, products and systems at the intersection of AI and software engineering.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className={project.featured && i < 2 ? "md:col-span-2" : ""}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
