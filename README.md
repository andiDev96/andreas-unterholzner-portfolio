# Andreas Unterholzner — Portfolio

![Status](https://img.shields.io/badge/status-in--development-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-22%20LTS-339933?logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white)

> Personal portfolio of **Andreas Unterholzner** — Frontend Developer & Creative Engineer.
> Crafting immersive digital experiences with React, Three.js and WebGL.

🌐 **Live:** _coming soon_

---

## ⚡ Stack

- **Framework:** React 19 with [React Compiler](https://react.dev/learn/react-compiler) + TypeScript
- **Build tool:** [Vite 7](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first configuration)
- **Animation:** [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/), [Lenis](https://lenis.darkroom.engineering/) smooth scroll
- **3D / WebGL:** [Three.js](https://threejs.org/), [React Three Fiber](https://r3f.docs.pmnd.rs/), [drei](https://github.com/pmndrs/drei)
- **Quality:** ESLint, Prettier, Husky, lint-staged, commitlint

## 🚀 Local Development

**Requirements**

- Node.js 22 LTS (see [`.nvmrc`](./.nvmrc))
- pnpm 9+

\\\ bash

# Install dependencies

pnpm install

# Start dev server → http://localhost:5173

pnpm dev

# Production build

pnpm build

# Preview production build

pnpm preview

# Lint, format, typecheck

pnpm lint
pnpm format
pnpm typecheck
\`\`\`

## 📁 Project Structure

\`\`\`
.
├── public/ # Static assets
├── src/
│ ├── App.tsx # Root component
│ ├── main.tsx # Entry point
│ └── index.css # Tailwind + global tokens
├── index.html # HTML entry
├── vite.config.ts # Vite configuration
├── eslint.config.js # ESLint flat config
├── commitlint.config.js # Conventional Commits rules
├── .prettierrc.json # Prettier rules
├── .editorconfig # Editor consistency
└── .nvmrc # Node version pin
\`\`\`

## 🔀 Git Workflow

This project follows a simplified **Git Flow** model:

| Branch          | Purpose                                                                   |
| --------------- | ------------------------------------------------------------------------- |
| \`main\`        | Production — always deployable, auto-deploys to Vercel                    |
| \`develop\`     | Integration — active work converges here                                  |
| \`feat/<name>\` | Feature branches — created from \`develop\`, merged back via Pull Request |

All commits follow the [Conventional Commits](https://www.conventionalcommits.org/) specification, **enforced automatically** at commit time via Husky + commitlint. Code is auto-formatted with Prettier and linted with ESLint on every commit via lint-staged.

## 📜 License

MIT © [Andreas Unterholzner](mailto:andreas.unterholzner18@gmail.com)
