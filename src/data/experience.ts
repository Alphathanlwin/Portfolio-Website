export interface Milestone {
  date: string;
  org: string;
  role: string;
  description: string;
}

export const milestones: Milestone[] = [
  {
    date: "Aug 2024 — Nov 2024",
    org: "Asheville Institution",
    role: "Academic Manager (Remote)",
    description:
      "Coordinated communication between teachers, guides, and students for a GED school — hosting Zoom classes, handling announcements and recordings, and collecting feedback to improve the learning experience.",
  },
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
      "Built a run of small, real GenAI projects to learn by shipping: a gift recommendation chatbot with OpenAI API and live web search, a movie recommendation RAG system with Supabase and pgvector, a ReAct-based travel AI agent, and a customer support AI agent using the Vercel AI SDK with RAG and tool calls.",
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
