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
  image?: string;
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
    github: "https://github.com/Alphathanlwin/AgroGuard",
    featured: true,
  },
  {
    slug: "pyonecare",
    name: "PyoneCare",
    problem: "Early dental screening is inaccessible and opaque — patients get results with no reasoning.",
    description:
      "Oral Health Advisory System: an explainable AI oral health assessment platform combining a Prolog rule-based expert system with computer vision for symptom-driven dental screening.",
    stack: ["React", "FastAPI", "PostgreSQL", "SWI-Prolog", "HuggingFace CV"],
    type: "Explainable AI · Expert Systems",
    focus: "Explainable AI, knowledge representation, expert systems, computer vision integration.",
    github: "https://github.com/Alphathanlwin/PyoneCare",
    featured: true,
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
    github: "https://github.com/Alphathanlwin/Community-Issues-Reporting-System",
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
    slug: "garvesty",
    name: "Garvesty",
    problem:
      "Farmers in Myanmar's Ayeyarwady Delta plan each season by trial and error, without accessible climate, soil, and water data.",
    description:
      "A climate-adaptive farming decision-support platform from NASA Space Apps 2026 that fuses satellite imagery and NASA Earth data with SoilGrids to recommend crop rotations, compare them in an interactive 3D farm, and generate bilingual planting plans.",
    stack: ["React", "FastAPI", "GIS", "NASA Earthdata", "3D Simulation", "Blender"],
    type: "Climate-Tech · GIS · AI",
    focus: "Geospatial AI, satellite data integration, 3D simulation, climate-adaptive decision support.",
    github: "https://github.com/Alphathanlwin/NASA",
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
];
