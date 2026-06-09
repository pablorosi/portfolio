# Pablo Rosi — Personal Portfolio

Personal portfolio site for [pablorosi.dev](https://pablorosi.dev). Built as a static, performance-focused showcase of projects, skills, certifications, and contact information, with an optional interactive CLI mode.

## Key Highlights

**Two Interfaces** — Switch between a standard GUI layout and a functional terminal with commands (`help`, `ls`, `cd`, `neofetch`, `whoami`, command history, and more).

**Fast & Accessible:** — Built with Astro islands for minimal client-side JavaScript, optimized AVIF/WebP images via Sharp, and respectful of prefers-reduced-motion for the Canvas background animations.

**Automated Deployment:** - Merging to main triggers a GitHub Actions workflow that builds and pushes the site to a Hetzner VPS using Tailscale, SCP, and Docker Compose.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Astro 6](https://astro.build/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/), CSS custom properties |
| Language | TypeScript |
| Images | Astro Assets + Sharp |
| SEO | `@astrojs/sitemap` |
| Package manager | pnpm |
| Runtime | Node.js ≥ 22.12 |

## Project Structure

```text
/
├── public/                 # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/             # Source images processed by Astro
│   ├── components/         # UI components (Hero, Terminal, TopBar, …)
│   │   └── terminal/       # Terminal-specific UI primitives
│   ├── layouts/            # Page layouts
│   ├── lib/                # Shared logic (hero stack, neofetch output)
│   ├── pages/              # Routes (index, 404)
│   └── styles/             # Global CSS, variables, animations
├── .github/workflows/      # CI/CD deployment pipeline
├── astro.config.mjs
├── docker-compose.yml
└── package.json
```

## Getting Started

### Prerequisites

- Node.js ≥ 22.12
- pnpm ≥ 10

### Running Locally

```bash
git clone git@github.com:pablorosi/portfolio.git
cd portfolio
pnpm install
pnpm dev
```

The dev server starts at `http://localhost:4321`.