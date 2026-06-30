# Pablo Rosi — Personal Portfolio

Personal portfolio site for [pablorosi.dev](https://pablorosi.dev). Built as a static, performance-focused showcase of projects, skills, certifications, and contact information, with an optional interactive CLI mode.

## Key Highlights

**Two Interfaces** — Switch between a standard GUI layout and a functional terminal with commands (`help`, `ls`, `cd`, `neofetch`, `whoami`, command history, and more).

**Fast & Accessible** — Built with Astro islands for minimal client-side JavaScript, optimized AVIF/WebP images via Sharp, and respectful of `prefers-reduced-motion` for the canvas background animations.

**Static deployment** — Hosted on Cloudflare Pages; no server or container required.

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
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com/) |

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
├── astro.config.mjs
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

### Production Build

```bash
pnpm build
pnpm preview
```

## Deployment (Cloudflare Pages)

Connect this repository in the Cloudflare Pages dashboard:

| Setting | Value |
| --- | --- |
| Build command | `pnpm run build` |
| Build output directory | `dist` |
| Node.js version | `22` |
| Package manager | pnpm (auto-detected from `pnpm-lock.yaml`) |

Cloudflare builds and serves the site on every push to `main`. No GitHub Actions workflow is required.

### Custom domain

1. In Pages → your project → **Custom domains**, add `pablorosi.dev` (and `www` if needed).
2. Confirm DNS records as instructed by Cloudflare.
3. After verifying the site on Pages, stop the old VPS container (`astro-site`) if it is still running.

## Related

- **Documentation:** [docs.pablorosi.dev](https://docs.pablorosi.dev)
- **Author:** [Pablo Rosi](https://pablorosi.dev)

## License

Private project. All rights reserved.
