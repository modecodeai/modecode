# Mode Code Website

Minimal Next.js App Router website for Mode Code, built with TypeScript and Tailwind CSS. Mode Code covers websites, AI tools, automation systems and production-aware prototyping.

## Run locally

```bash
pnpm install
pnpm run dev
```

## Build

```bash
pnpm run build
```

The site is configured with `output: "export"` and `trailingSlash: true` in
`next.config.ts`. The matching `next.config.mjs` is kept for the installed
Next.js 14 runtime, which does not load TypeScript config files.

## Cloudflare Pages

- Project name: `mode-code`
- Domain: `modecode.co.uk`
- Canonical domain: `https://modecode.co.uk`
- Redirect: `https://www.modecode.co.uk` to `https://modecode.co.uk`
- Framework preset: Next.js
- Build command: `pnpm build`
- Build output directory: `out`
- Root directory: `/`
- Node version: current LTS
- Production branch: `main`

Company details:

- Legal name: `Mode Code Ltd`
- Company number: `16177813`
- Registered office: `Ribble Court 1 Mead Way, Padiham, Burnley, England, BB12 7NG`
- Website: `https://modecode.co.uk` (`Modecode.co.uk` in display copy)

This V1 build is a static Next.js export. It does not use server-side rendering,
API routes, Next.js image optimisation, or server actions. The contact form is
UI-only until form handling environment variables are provided.

Direct upload deployment, when Git integration is not being used:

```bash
pnpm build
pnpm exec wrangler pages deploy out --project-name=mode-code --branch=main
```

Required CI/direct deployment environment variables:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
