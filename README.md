# FleetArabia website

The public marketing site for FleetArabia Technology LLC: <https://www.fleetarabia.com>.
Next.js (App Router), Tailwind CSS, deployed on Hostinger.

This is only the marketing site. The ERP (`erp.`), customer portal (`portal.`) and
booking site (`book.`) are separate applications and are not in this repository.

## Pushing `main` deploys to production

Hostinger is connected to this GitHub repository and **rebuilds the live site
automatically within about a minute of any push to `main`**. There is no staging
step and no manual approval.

- Do all work on a branch. Run the checks below before merging.
- Merging a pull request on GitHub counts: it is a push to `main`.
- Pushing any other branch does not change the live site.
- To undo a release, revert the commit on `main` and push; that deploys the revert.

## Running it locally

```bash
npm install
npm run dev -- -p 3002      # development server
npm run build && npx next start -p 3002   # production build, as Hostinger runs it
```

Port 3002 is the convention here because other local projects use 3000.

> This project uses a recent Next.js with breaking changes. Before writing code, read
> the relevant guide in `node_modules/next/dist/docs/` (see `AGENTS.md`).

## Environment variables

Copy `.env.local.example` to `.env.local` for local work. The same names must be set
in the Hostinger panel for production. `.env.local` is ignored by git; never commit it.

| Name | Purpose |
|---|---|
| `RESEND_API_KEY` | Sends contact-form submissions by email. Without it the form answers 503. |
| `CONTACT_TO_EMAIL` | Inbox that receives submissions (`info@fleetarabia.com`). |
| `CONTACT_FROM_EMAIL` | Sender address; its domain must be verified in Resend (`no-reply@fleetarabia.com`). |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 id. Analytics only loads after the visitor accepts cookies. |
| `NEXT_PUBLIC_SITE_URL` | Canonical address used in metadata, `sitemap.xml` and `robots.txt`. |

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
npm audit
```

Site checks run against a running site. With no argument they use
`http://localhost:3002`; pass an address to check another one, including production.

```bash
npm run check                                   # links + content, local build
npm run check:links -- https://www.fleetarabia.com
npm run check:content -- https://www.fleetarabia.com
```

- `check:links` crawls every page and verifies each internal link and `#anchor`.
- `check:content` verifies all 16 pages load, module icons render, structured data
  parses, and that wording the site must not carry has not come back (emoji icons,
  unsupported infrastructure claims, anything implying existing customers).
- `check:browser` drives headless Chrome: cookie consent and analytics gating, no
  sideways scroll at phone width, mobile menu, 1024px navigation, duplicate ids, icons.
  Start Chrome first, then run it:

  ```bash
  chrome --headless=new --remote-debugging-port=9333 about:blank
  npm run check:browser -- https://www.fleetarabia.com
  ```

  It blocks Google Analytics requests, so it never records test traffic.

## Content rules

- FleetArabia is an early-stage company. Do not add customer logos, testimonials,
  usage numbers, "trusted by" wording, or mock product screens presented as real.
- Do not state infrastructure guarantees (redundancy, uptime, automatic backups,
  disaster recovery) unless the hosting actually provides them.
- The logo's source of truth is `components/Logo.tsx`. `app/icon.svg` is the same
  drawing as a file, and `app/favicon.ico` is generated from it; keep all three in step.
- Module icons live in one list, `lib/modules.ts`, used by the homepage and the
  Solutions page.
