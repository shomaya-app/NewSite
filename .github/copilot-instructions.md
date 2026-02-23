# Copilot Instructions for NewSite

## Project Overview

**NewSite** is a Nuxt 4 application configured with:
- **Framework:** Nuxt 4.3.1 with Vue 3 (TypeScript)
- **Styling:** Tailwind CSS 4.2.0
- **Date Handling:** Dayjs (via dayjs-nuxt)
- **UI Component:** Vue Datepicker v12
- **Package Manager:** Yarn 3.8.3 (required)
- **Environment:** Dockerized with Docker Compose (runs `yarn dev`)

## Essential Workflows

### Development
- **Install deps:** `yarn install` (uses Yarn workspaces)
- **Dev server:** `yarn dev` (starts on http://localhost:3000)
- **Docker:** `docker-compose up` (volumes mount source code for hot-reload)

### Production
- **Build:** `yarn build`
- **Preview:** `yarn preview`
- **Generate:** `yarn generate` (static export)

### Code Quality
- **Linting:** Configured via `@nuxt/eslint`; runs pre-commit via Husky
- **Formatting:** Prettier with `prettier-plugin-tailwindcss` (reorders Tailwind classes)
- **Git hooks:** Husky + lint-staged (post-install runs `husky`)

## Architecture & Patterns

### Project Structure
```
app/
  app.vue           # Root component
  constants/
    index.ts        # Export SERVICE_NAME (used in nuxt.config)
public/
  robots.txt
```

### Key Conventions
1. **Constants:** Centralized in `app/constants/index.ts` (e.g., `SERVICE_NAME`)
2. **Components:** Use Nuxt auto-imports; place components in `<root>/components/` (implicit)
3. **Type Safety:** TypeScript enforced; `tsconfig.json` references `.nuxt/` generated configs
4. **Compatibility Date:** Set to `2025-07-15` in `nuxt.config.ts` — controls Nuxt behavior versions

### Configuration Notes
- `nuxt.config.ts` imports `@vitejs/plugin-legacy` and `@tailwindcss/vite` but **doesn't activate them** in current config
- Devtools enabled by default
- No custom routes/middleware visible yet; uses Nuxt auto-routing when `pages/` directory exists

## When Adding Features

- **UI Components:** Leverage Vue Datepicker + Tailwind for consistent styling
- **Dates:** Use dayjs (via Nuxt plugin) instead of native Date
- **Type Definitions:** Extend `tsconfig.json` references if adding server/app-specific types
- **Environment Variables:** Define in `.env` and reference via `useRuntimeConfig()` (Nuxt pattern)

## Common Pitfalls

- Don't use npm/pnpm/bun — **project uses Yarn 3.8.3** (locked in `package.json`)
- Prettier may reformat Tailwind classes; ensure `prettier-plugin-tailwindcss` settings align with preferences
- Pre-commit linting enforced via Husky; failing checks block commits

## References

- [Nuxt Docs](https://nuxt.com/docs)
- [Vue 3 Docs](https://vuejs.org/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
