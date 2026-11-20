export interface Award {
  title: string;
  event: string;
  date: string;
  detail: string;
  image?: string;
}

export const awards: Award[] = [
  {
    title: "National Finalist",
    event: "ASEAN Digital Awards 2027",
    date: "2027",
    detail:
      "Represented Myanmar in the Digital Innovation category with Kinn Htout.",
  },
  {
    title: "Outstanding Solution Award",
    event: "NASA Space Apps Challenge 2026 — Yangon",
    date: "2026",
    detail: "Advanced to the Global Judging Stage.",
  },
  {
    title: "Fellow",
    event: "AI for Asia Fellowship 2026",
    date: "2026",
    detail: "Selected for the 12-week regional AI fellowship program.",
  },
  {
    title: "National Finalist",
    event: "Korea–ASEAN AI Youth Festa 2026",
    date: "2026",
    detail: "Represented Myanmar as Team AgroGuard.",
  },
];
