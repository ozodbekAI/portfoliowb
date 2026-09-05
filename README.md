# Akramjonov Ozodbek — Portfolio

Software Engineer portfolio built with Next.js App Router, React, TypeScript, and Tailwind CSS. Includes responsive navigation, dark/light themes, professional experience, featured projects, and a downloadable CV.

## Local development

```bash
pnpm install --frozen-lockfile
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Node.js 20 or newer and pnpm 10 are recommended. No environment variables are required for local development.

## Content

- `lib/site-config.ts`: profile, contact links, navigation, canonical domain, and the single `CV_DOWNLOAD_URL` PDF export link.
- `lib/about.ts`, `lib/experience.ts`, `lib/projects.ts`, `lib/skills.ts`, `lib/background.ts`: structured English content.
- `app/globals.css`: shared typography, layout, and dark/light theme tokens.

Russian and English proficiency remain unset in `lib/background.ts` until confirmed. Contact links open the existing email address, Telegram, GitHub, or phone app; no form backend is required.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Production

```bash
npm run build
npm start
```

The configured domain is `https://ozodbek-akramov.uz`. Open Graph images, canonical metadata, a sitemap, robots rules, and Vercel Analytics are included.
