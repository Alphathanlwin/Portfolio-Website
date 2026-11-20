import type { ComponentType } from "react";
import { Brain, Database, Eye, MagnifyingGlass, PlugsConnected, Robot } from "@phosphor-icons/react";
import {
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiGithub,
  SiJavascript,
  SiJsonwebtokens,
  SiOpenjdk,
  SiPostgresql,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiPython,
} from "react-icons/si";
import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type SkillIcon = ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;

const ICONS: Record<string, SkillIcon> = {
  Python: SiPython,
  Java: SiOpenjdk,
  "C++": SiCplusplus,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  SQL: Database,
  PyTorch: SiPytorch,
  "Scikit-learn": SiScikitlearn,
  "Computer Vision": Eye,
  LLMs: Brain,
  RAG: MagnifyingGlass,
  "AI Agents": Robot,
  FastAPI: SiFastapi,
  "Spring Boot": SiSpringboot,
  "REST APIs": PlugsConnected,
  JWT: SiJsonwebtokens,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  pgvector: Database,
  Docker: SiDocker,
  "Git / GitHub": SiGithub,
  React: SiReact,
  Vite: SiVite,
  "Tailwind CSS": SiTailwindcss,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="Technical Foundation" title="What I build with." />

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.domain} delay={(i % 3) * 0.06}>
              <h3 className="mono-label mb-5 text-[11px] text-text-tertiary">{group.domain}</h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => {
                  const Icon = ICONS[item];
                  return (
                    <span
                      key={item}
                      className="group relative inline-flex items-center gap-2 rounded-lg border border-line bg-surface/50 px-3.5 py-2 text-sm text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/40 hover:text-text-primary"
                    >
                      <span className="absolute inset-0 rounded-lg bg-electric/0 blur-md transition-colors duration-300 group-hover:bg-electric/10" />
                      {Icon && (
                        <Icon
                          size={15}
                          aria-hidden
                          className="relative shrink-0 text-text-tertiary transition-colors duration-300 group-hover:text-cyan"
                        />
                      )}
                      <span className="relative">{item}</span>
                    </span>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
