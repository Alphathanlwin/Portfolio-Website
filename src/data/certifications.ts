export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export const certifications: Certification[] = [
  {
    name: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University",
    date: "2025",
  },
  {
    name: "AI Practitioner Challenge",
    issuer: "AWS × Udacity",
    date: "Apr 2026",
  },
  {
    name: "AI & ML Scholars — 2026 Challenge Completion",
    issuer: "AWS × Udacity",
    date: "2026",
  },
  {
    name: "AI Engineer Path",
    issuer: "Scrimba",
    date: "2026",
  },
  {
    name: "Associate AI Engineer for Developers",
    issuer: "DataCamp",
    date: "2026",
  },
  {
    name: "Information Technology Passport Examination (IP)",
    issuer: "ITPEC",
    date: "2025",
  },
];
