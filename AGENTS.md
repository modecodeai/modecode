# AGENTS.md

## Cursor Cloud specific instructions

Mode Code marketing website: Next.js 14 (App Router) + TypeScript + Tailwind, built as a static export (`output: "export"`).

Standard commands (see `README.md` / `package.json`):

- Dev server: `pnpm dev` (defaults to port 3000).
- Lint / typecheck: `pnpm run lint` (runs `tsc --noEmit`).
- Build: `pnpm build` → static site in `out/`.

Non-obvious caveats:

- Both `next.config.ts` and `next.config.mjs` exist on purpose. The installed Next.js 14 runtime does not load the TypeScript config, so `next.config.mjs` is the one that actually applies.
- The contact form posts to the Cloudflare Pages Function at `functions/api/contact.ts` (`/api/contact`), which is **not** a Next.js API route. It does not run under `next dev`; to exercise it locally use `wrangler pages dev`, and in production it requires the Resend/contact env vars documented in `README.md`.
