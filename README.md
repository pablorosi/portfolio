# 🚀 Technical Portfolio & Documentation Hub

Welcome to the source code of my personal technical portfolio. This site serves as a central hub for documenting my infrastructure projects, homelab architectures, and continuous learning journey in Systems Administration and DevOps.

> **Live Site:** [pablorosi.dev](https://pablorosi.dev)

## 🛠️ Tech Stack

This project is built using modern web technologies focused on performance and developer experience:

* **[Astro](https://astro.build/):** The web framework for building fast, content-focused websites.
* **[Starlight](https://starlight.astro.build/):** The premium documentation theme built on top of Astro.
* **Markdown / MDX:** Used for writing all technical project documentation.
* **Custom CSS:** Leveraging CSS Layers and conditional media queries (`prefers-color-scheme`) for a seamless Light/Dark mode experience.

## 📂 Project Structure

Inside this project, you'll see the following key directories:

```text
/
├── .github/workflows/    # CI/CD pipelines for automated deployment
├── assets/               # Additional project assets
├── nginx/                # Web server routing and caching configuration
│   └── default.conf
├── public/               # Static assets served at the root
├── src/
│   ├── assets/           # Site assets used by Astro
│   ├── components/       # Custom Astro UI components
│   ├── content/
│   │   └── docs/         # Core documentation and project write-ups
│   ├── styles/           # Global CSS and Starlight theme overrides
│   └── content.config.ts # Content collections schema
├── astro.config.mjs      # Starlight framework configuration
├── package.json          # Project metadata and npm scripts
├── pnpm-lock.yaml        # Deterministic dependency lockfile
└── tsconfig.json         # TypeScript configuration
````
