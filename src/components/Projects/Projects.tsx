import { useRef } from "react";
import { projects } from "@/data/projects";
import { useGsapReveal } from "@/animations/useGsapReveal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  useGsapReveal(sectionRef, ".project-card", { y: 40, stagger: 0.1 });

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mono-label mb-4 text-xs text-cyan">Selected Work</p>
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
          Projects.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
          Real-world systems at the intersection of AI and software engineering — each built to
          solve a concrete problem, with the stack and reasoning behind it.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
