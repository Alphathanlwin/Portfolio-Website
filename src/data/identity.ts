export interface IdentityCard {
  title: string;
  description: string;
  icon: "brain" | "sparkle" | "server" | "database" | "network" | "puzzle";
}

export const identityCards: IdentityCard[] = [
  {
    title: "AI & Machine Learning",
    description: "Machine learning systems, computer vision, model experimentation and applied AI.",
    icon: "brain",
  },
  {
    title: "Generative AI",
    description: "LLM applications, RAG, AI agents, prompt engineering and AI-powered workflows.",
    icon: "sparkle",
  },
  {
    title: "Backend Engineering",
    description: "Python, FastAPI, Java, Spring Boot, REST APIs and authentication.",
    icon: "server",
  },
  {
    title: "Data & Infrastructure",
    description: "PostgreSQL, Supabase, pgvector, Docker and data pipelines.",
    icon: "database",
  },
  {
    title: "Full-Stack AI",
    description: "Connecting AI models with real applications, APIs and user experiences.",
    icon: "network",
  },
  {
    title: "Problem Solving",
    description: "Hackathons, research, experimentation and building practical solutions.",
    icon: "puzzle",
  },
];
