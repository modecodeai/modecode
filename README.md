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

- Project name: `modecode`
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
- Email: `hello@modecode.co.uk`
- Website: `https://modecode.co.uk` (`Modecode.co.uk` in display copy)

This V1 build is a static Next.js export. It does not use server-side rendering,
Next.js API routes, Next.js image optimisation, or server actions. The contact
form posts to the Cloudflare Pages Function at `/api/contact`.

## Email Architecture

- Cloudflare handles DNS and website hosting.
- Cloudflare Pages hosts the static website and the contact form Function.
- MXroute handles real mailbox email, IMAP and SMTP.
- Resend handles contact form and transactional email.

Business mailboxes are expected at:

- `hello@modecode.co.uk`
- `brent@modecode.co.uk`
- `benji@modecode.co.uk`
- `projects@modecode.co.uk`

The contact form uses `functions/api/contact.ts` and sends via Resend
server-side only. It must not use a Next.js API route because the site is a
static export. Required Cloudflare Pages environment variables:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL` - prefer `brent@modecode.co.uk`
- `CONTACT_FROM_EMAIL` - use `hello@modecode.co.uk`
- `CONTACT_REPLY_TO_EMAIL` - fallback reply address

Do not commit `.env` files or hard-code secrets. `RESEND_API_KEY` must stay
server-side only.

DNS ownership notes:

- Keep the Cloudflare Pages records for `modecode.co.uk` and
  `www.modecode.co.uk`.
- Keep Resend verification, DKIM, SPF and `send.modecode.co.uk` records.
- MXroute should provide the root MX records, root SPF and MXroute DKIM.
- Do not use Cloudflare Email Routing records for this setup.
- Keep only one SPF TXT record at `@`: `v=spf1 include:mxroute.com include:amazonses.com ~all`.

Direct upload deployment, when Git integration is not being used:

```bash
pnpm build
pnpm exec wrangler pages deploy out --project-name=modecode --branch=main
```

Required CI/direct deployment environment variables:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
