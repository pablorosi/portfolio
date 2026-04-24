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
├── public/               # Static assets (favicon, profile photo)
├── src/
│   ├── assets/           # Optimized images and dynamic SVG logos
│   ├── components/       # Custom Astro/React UI components
│   ├── content/docs/     # Technical documentation and project pages (.mdx)
│   ├── styles/           # Custom CSS and theming
│   └── content.config.ts # Schema validation for Markdown frontmatter
├── astro.config.mjs      # Starlight and Astro configuration
├── package.json          # Project metadata and scripts
└── pnpm-lock.yaml        # Deterministic dependency lockfile
````
