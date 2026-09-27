export interface SkillGroup {
  domain: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    domain: "Languages",
    items: ["Python", "Java", "C++", "TypeScript", "JavaScript", "SQL"],
  },
  {
    domain: "AI / ML",
    items: ["PyTorch", "Scikit-learn", "Computer Vision", "LLMs", "RAG", "AI Agents"],
  },
  {
    domain: "Backend",
    items: ["FastAPI", "Spring Boot", "REST APIs", "JWT", "PostgreSQL"],
  },
  {
    domain: "AI Infrastructure",
    items: ["Supabase", "pgvector", "Docker", "Git / GitHub"],
  },
  {
    domain: "Frontend",
    items: ["React", "Vite", "Tailwind CSS"],
  },
];

export const currentlyLearning: string[] = [
  "LLM Systems",
  "AI Agents",
  "RAG",
  "Computer Vision",
  "MLOps",
  "FastAPI",
  "Docker",
  "Vector Databases",
  "System Design",
];
