# 🚀 Personal Portfolio | Web Frontend

Welcome to the source code of my personal web portfolio. This project serves as my digital business card and a high-performance showcase of my web development projects, skills, and creative work.

> **Live Site:** [pablorosi.dev](https://pablorosi.dev)

## 🛠️ Tech Stack

This project is built with a focus on speed, accessibility, and modern developer experience:

* **[Astro](https://astro.build/):** The web framework for building fast, content-driven websites with a "zero-JS by default" approach.
* **[TypeScript](https://www.typescriptlang.org/):** Providing type-safety and robust code architecture throughout the project.
* **[PNPM](https://pnpm.io/):** A fast, disk space-efficient package manager used for dependency management.
* **CSS Modules:** Used for scoped, maintainable styling across components.

## 📂 Project Structure

Following the modern Astro directory standards, the project is organized as follows:

```text
/
├── .github/              # CI/CD workflows and GitHub configurations
├── .vscode/              # Editor-specific settings and extensions
├── node_modules/         # Project dependencies (managed by pnpm)
├── public/               # Static assets (fonts, favicons) served at the root
├── src/
│   ├── assets/           # Optimized images and media used by Astro
│   ├── components/       # Reusable UI elements (Nav, Buttons, Cards)
│   ├── layouts/          # Core page templates and wrappers
│   ├── pages/            # File-based routing (Astro and Markdown pages)
│   └── styles/           # Global CSS and design system tokens
├── .gitignore            # Files and folders to be ignored by Git
├── astro.config.mjs      # Main Astro framework configuration
├── package.json          # Project metadata and script definitions
├── pnpm-lock.yaml        # Deterministic dependency lockfile
├── README.md             # Project documentation (this file)
└── tsconfig.json         # TypeScript compiler configuration

```

To run this project locally, ensure you have **Node.js** and **PNPM** installed:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/tu-usuario/portfolio.git](https://github.com/tu-usuario/portfolio.git)
    ```
2.  **Install dependencies:**
    ```bash
    pnpm install
    ```
3.  **Launch the development server:**
    ```bash
    pnpm dev
    ```
4.  **Build for production:**
    ```bash
    pnpm build
    ```