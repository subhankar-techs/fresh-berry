# Fresh Berry

A React + TypeScript web app powered by Vite and styled with Tailwind CSS.

- Live app: https://fresh-berry.vercel.app

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript 5
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3, PostCSS, Autoprefixer
- **Linting:** ESLint 8, @typescript-eslint

## Full Project Structure

```
fresh-berry/
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
├── vite.config.ts
└── src/
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── vite-env.d.ts
    └── components/
```

- **Root files** include configuration for ESLint, Tailwind, Vite, TypeScript, PostCSS, and deployment (Vercel).
- **src/** contains your main application files:
  - `main.tsx`: Application entry point
  - `App.tsx`: Root React component
  - `index.css`: Global styles, Tailwind setup
  - `vite-env.d.ts`: Vite environment type declarations
  - `components/`: Directory for React components

## Installation Guide

**Prerequisites:**
- Node.js 18+ (Vite 5 requires Node 18+)
- npm (or yarn/pnpm)

**Setup Steps:**

1. **Clone the repository:**
   ```
git clone https://github.com/subhankar-techs/fresh-berry.git
cd fresh-berry
```

2. **Install dependencies:**
   ```
npm install
```

3. **Start the development server:**
   ```
npm run dev
```
   Open the URL shown in the terminal (usually http://localhost:5173).

4. **Build for production:**
   ```
npm run build
```

5. **Preview the production build locally:**
   ```
npm run preview
```

6. **Lint the code:**
   ```
npm run lint
```

## Scripts

- `dev`: Start Vite development server
- `build`: Type-check with tsc, then build with Vite
- `preview`: Preview the production build
- `lint`: Run ESLint on all .ts/.tsx files

## Deployment

- Deployed to Vercel: https://fresh-berry.vercel.app
- Production builds are output to the `dist/` directory after `npm run build`.