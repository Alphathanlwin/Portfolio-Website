export interface Project {
  slug: string;
  name: string;
  problem: string;
  description: string;
  stack: string[];
  type: string;
  focus: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "agroguard",
    name: "AgroGuard",
    problem: "Smallholder farmers lack real-time, data-driven visibility into crop and field health.",
    description:
      "A GIS + AI + IoT crop intelligence platform that fuses satellite/field data, sensor telemetry, and computer vision to give farmers actionable, real-time decision support.",
    stack: ["React", "FastAPI", "PostgreSQL", "PostGIS", "ESP32", "Telegram API"],
    type: "AI · GIS · IoT",
    focus: "Computer vision, intelligent decision support, IoT integration, real-world agriculture.",
    featured: true,
  },
  {
    slug: "ohas",
    name: "OHAS",
    problem: "Early dental screening is inaccessible and opaque — patients get results with no reasoning.",
    description:
      "Oral Health Advisory System: an explainable AI oral health assessment platform combining a Prolog rule-based expert system with computer vision for symptom-driven dental screening.",
    stack: ["React", "FastAPI", "PostgreSQL", "SWI-Prolog", "HuggingFace CV"],
    type: "Explainable AI · Expert Systems",
    focus: "Explainable AI, knowledge representation, expert systems, computer vision integration.",
    featured: true,
  },
  {
    slug: "movie-rag",
    name: "Movie Recommendation RAG",
    problem: "Keyword search fails to capture the semantic nuance of what people actually want to watch.",
    description:
      "An AI recommendation system combining semantic retrieval with a vector database to surface movies by meaning, not just metadata.",
    stack: ["Supabase", "pgvector", "LLM API", "Python"],
    type: "RAG · Recommender System",
    focus: "RAG, embeddings, vector search, recommendation systems.",
    featured: true,
  },
  {
    slug: "support-agent",
    name: "Customer Support AI Agent",
    problem: "Support teams repeat the same answers buried across scattered documentation.",
    description:
      "An AI-powered customer support agent built with the Vercel AI SDK that retrieves relevant knowledge-base context via RAG and calls tools to resolve user queries and tasks in real time.",
    stack: ["Vercel AI SDK", "TypeScript", "RAG", "Tool Calling"],
    type: "AI Agents",
    focus: "Agentic AI, tool calling, RAG, LLM applications.",
    featured: true,
  },
  {
    slug: "travel-agent",
    name: "Travel AI Agent",
    problem: "Planning a trip means juggling search, comparison, and reasoning across many disconnected sources.",
    description:
      "A ReAct-pattern AI agent that reasons step by step, calling tools to search and compare options before producing a coherent travel plan.",
    stack: ["Python", "LLM API", "ReAct"],
    type: "AI Agents",
    focus: "Agentic reasoning, tool use, the ReAct pattern.",
  },
  {
    slug: "gift-chatbot",
    name: "Gift Recommendation Chatbot",
    problem: "Choosing a thoughtful gift under time pressure is a surprisingly hard search problem.",
    description:
      "A conversational recommendation system powered by the OpenAI API with real-time web search, narrowing down gift ideas through natural dialogue.",
    stack: ["Python", "OpenAI API", "Web Search"],
    type: "Conversational AI",
    focus: "Prompt engineering, conversational AI, product thinking.",
  },
  {
    slug: "community-issues",
    name: "Community Issues Reporting System",
    problem: "Local communities lack a structured channel to report and track civic issues.",
    description:
      "A full-stack system for reporting, triaging, and managing community issues with role-based authentication.",
    stack: ["React", "Spring Boot", "PostgreSQL"],
    type: "Full-Stack",
    focus: "Software engineering, backend architecture, authentication, database design.",
  },
];
