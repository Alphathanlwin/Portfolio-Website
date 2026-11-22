export interface Milestone {
  date: string;
  org: string;
  role: string;
  description: string;
}

export const milestones: Milestone[] = [
  {
    date: "Nov 2024 — Present",
    org: "University of Information Technology (UIT)",
    role: "B.Sc. Computer Science",
    description:
      "Studying computer science with a growing focus on AI engineering — LLMs, RAG, agents, and the software engineering fundamentals (DSA, backend, system design) underneath them.",
  },
  {
    date: "2025",
    org: "Early AI Projects",
    role: "Builder",
    description:
      "Built a run of small, real GenAI projects to learn by shipping: a gift recommendation chatbot with OpenAI API and live web search, a movie recommendation RAG system with Supabase and pgvector, and a customer support AI agent using the Vercel AI SDK with RAG and tool calls.",
  },
  {
    date: "Jun 2026 — Aug 2026",
    org: "Grand Royal Group International",
    role: "Information Technology Intern",
    description:
      "Annotated 30 images daily for a computer vision training set and joined weekly cross-department knowledge-sharing sessions. For the internship capstone, built a sales distribution management system — integrating several APIs and implementing authentication logic with Spring Boot.",
  },
  {
    date: "2026",
    org: "AI Engineering Coursework & Certifications",
    role: "Learner",
    description:
      "Completed CS50x (Harvard), the AWS x Udacity AI Practitioner Challenge and AI & ML Scholars program, Scrimba's AI Engineer path, and DataCamp's Associate AI Engineer for Developers track — alongside the ASEAN Data Science Explorers enablement session.",
  },
  {
    date: "Ongoing",
    org: "Independent Study & Hackathons",
    role: "Builder",
    description:
      "Actively deepening skills in LLM systems, agentic AI, and MLOps through self-directed projects, coursework, and competitive events.",
  },
];
