export interface Certification {
  name: string;
  issuer: string;
  date: string;
  image?: string;
}

export const certifications: Certification[] = [
  {
    name: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University",
    date: "2025",
    image: "/certificates/cs50x.png",
  },
  {
    name: "AI Practitioner Challenge",
    issuer: "AWS × Udacity",
    date: "Apr 2026",
    image: "/certificates/AWS AI Practitioner Challenge.png",
  },
  {
    name: "Google AI Professional Certificate",
    issuer: "Google",
    date: "2026",
    image: "/certificates/google-ai-professional.png",
  },
  {
    name: "AI Engineer Path",
    issuer: "Scrimba",
    date: "2026",
    image: "/certificates/scrimba.png",
  },
  {
    name: "Associate AI Engineer for Developers",
    issuer: "DataCamp",
    date: "2026",
    image: "/certificates/datacamp ai eng cert.png",
  },
  {
    name: "Information Technology Passport Examination (IP)",
    issuer: "ITPEC",
    date: "2025",
    image: "/certificates/IT passport.png",
  },
];
