# Aung Thanlwin Oo — Portfolio

A personal portfolio for an AI engineering student: interactive 3D hero, dark editorial layout, motion-driven sections, and a client-side contact form. Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## Features

- **3D hero scene** — React Three Fiber canvas with floating distorted core, wireframe icosphere, orbit rings, stars and sparkles. Lazy-loaded and paused for `prefers-reduced-motion`.
- **Motion system** — scroll reveals, staggered headline, magnetic buttons, animated nav pill, marquee strips for awards and learning tags.
- **Content-driven sections** — About, Engineering Focus, Skills, Certifications, Projects, Timeline, Awards, Currently Exploring, Contact.
- **Contact form** — EmailJS when keys are present; automatic `mailto:` fallback otherwise.
- **Accessibility** — reduced-motion support, visible focus rings, semantic landmarks, labelled controls, keyboard-friendly award cards.
- **Performance** — Three.js split into its own lazy chunk, images lazy-loaded, no blocking preloader.

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | React 19, TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| 3D | Three.js, `@react-three/fiber`, `@react-three/drei` |
| Motion | Motion (Framer Motion) |
| Icons | Phosphor Icons, Simple Icons (`react-icons/si`) |
| Email | EmailJS (`@emailjs/browser`) |
| Lint | Oxlint |

## Getting Started

Requires Node.js 20.19+ or 22.12+ (Vite 8 requirement).

```bash
git clone https://github.com/Alphathanlwin/Portfolio-Website.git
cd Portfolio-Website
npm install
npm run dev
```

Dev server runs at `http://localhost:5173`.

## Environment Variables

The contact form needs an EmailJS account with one service and one template. Copy the example file:

```bash
cp .env.example .env
```

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

Template fields expected by the form: `name`, `email`, `message`.

If any of the three values is missing, the form skips EmailJS and opens the visitor's mail client with the message pre-filled — so the site still works without configuration.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check (`tsc -b`) and build for production |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run Oxlint |

## Project Structure

```
src/
├── App.tsx                 # Section composition
├── main.tsx                # React entry point
├── index.css               # Tailwind theme tokens, keyframes, utilities
├── components/
│   ├── Navbar/             # Fixed glass nav, active-section pill, mobile menu
│   ├── Hero/               # Headline animation + lazy 3D Scene
│   │   ├── Hero.tsx
│   │   └── Scene.tsx       # React Three Fiber canvas
│   ├── About/              # Bio and interests
│   ├── Identity/           # Engineering focus cards
│   ├── Skills/             # Skill groups with logos
│   ├── Certifications/     # Certificate image cards
│   ├── Projects/           # Project grid and card variants
│   ├── Experience/         # Timeline
│   ├── Awards/             # Horizontal award marquee
│   ├── Learning/           # "Currently exploring" marquee
│   ├── Contact/            # EmailJS form
│   ├── Footer/
│   └── ui/                 # Reveal wrapper, SectionHeading
├── data/                   # All editable content (see below)
└── hooks/                  # useActiveSection, useReducedMotion
```

## Editing Content

Almost all copy and links live in `src/data/` — no component changes needed:

| File | Controls |
| --- | --- |
| `nav.ts` | Nav links, social URLs, email, resume path |
| `identity.ts` | Engineering focus cards |
| `skills.ts` | Skill groups and currently-learning tags |
| `certifications.ts` | Certificate names, issuers, dates, images |
| `projects.ts` | Project cards (name, problem, description, stack, links) |
| `experience.ts` | Timeline milestones |
| `awards.ts` | Award cards |

Social links and the canonical email are defined once in `src/data/nav.ts` and reused across the Navbar, Hero, Contact, and Footer.

## Assets to Supply

| Path | Used by |
| --- | --- |
| `public/resume.pdf` | Navbar, Hero, Footer "Resume" links |
| `public/certificates/*.png` | Certifications section |
| Project / award images | Optional `image` fields in `projects.ts` and `awards.ts`; gradient fallbacks render otherwise |

The Resume links currently point to `/resume.pdf` — add your CV there or update `socials.resume` in `src/data/nav.ts`.

## Design Notes

- Colors, fonts, and animations are Tailwind v4 theme tokens in `src/index.css` (`--color-void`, `--color-electric`, `--font-display`, etc.).
- Shared scroll-reveal logic is in `components/ui/Reveal.tsx`; section headers use `SectionHeading`.
- The 3D scene is split out via `React.lazy`, keeping the initial bundle free of Three.js.

## Deployment

Static build — deploy the `dist/` folder to Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

- Build command: `npm run build`
- Output directory: `dist`
- Add the three `VITE_EMAILJS_*` variables in the host's environment settings.

## License

Personal project. Content and images belong to Aung Thanlwin Oo; the code is free to reference.
