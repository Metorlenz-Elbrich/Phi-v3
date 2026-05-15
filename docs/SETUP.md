# Setup

## Requirements

- **Node.js ≥ 18.18** (Next 15 requirement). Recommended: 20 LTS.
- **npm ≥ 9** (or pnpm / yarn — examples below use npm).
- macOS, Linux or Windows (PowerShell tested).

## Install

```sh
npm install
```

This pulls Next 15, React 19 RC, Tailwind 3.4, Framer Motion, GSAP, Lenis, three / R3F / drei, and the standard tooling.

## Develop

```sh
npm run dev
```

App is served at `http://localhost:3000`.

## Type-check

```sh
npm run typecheck
```

Runs `tsc --noEmit`. `strict` + `noUncheckedIndexedAccess` are on; expect this to be authoritative.

## Lint

```sh
npm run lint
```

Uses `eslint-config-next`.

## Production build

```sh
npm run build
npm run start
```

`next build` does a full type-check, route-by-route analysis and outputs a standalone build to `.next/`.

## Project structure

See [`PROJECT_ARCHITECTURE.md`](./PROJECT_ARCHITECTURE.md).

## Editing copy

All page copy lives in `lib/content.ts`. There is no CMS connection; the typed records are the source of truth.

## Editing visuals

- **Tokens**: `tailwind.config.ts` (`theme.extend.colors`, fonts, fontSize, animation, keyframes).
- **Global styles**: `app/globals.css` (CSS variables, base typography, utility layers).
- **3D**: `features/hero/Sculpture.tsx`.

## Adding a new section

1. Create `features/<your-section>/<Your>.tsx`.
2. Add a `"use client"` directive only if you use Framer Motion, GSAP, R3F or a hook.
3. Add the section to `app/page.tsx`.
4. Add any copy to `lib/content.ts` rather than inlining it.

## Adding a new route

1. Create `app/<route>/page.tsx`.
2. Default export an `async` (or sync) function.
3. The root layout, navbar and footer apply automatically.

## Common pitfalls

- **`next/dynamic` SSR for R3F.** R3F cannot SSR; the `Sculpture` import uses `dynamic(..., { ssr: false })`. Don't change that.
- **GSAP ScrollTrigger on the server.** `ScrollTrigger` is plugin-registered behind a `typeof window !== "undefined"` guard at the top of `Process.tsx`. Don't move the registration into module side effects without that guard.
- **Lenis + native scroll APIs.** Use anchor `href="#id"` links — Lenis intercepts them and animates smoothly. Don't `element.scrollIntoView({ behavior: 'smooth' })` (Lenis already handles wheel/touch; native smooth scroll fights it).

## Environment variables

There are none currently. When you add some, document them here and add `.env.example` at the repo root.

## Deployment

The app is a standard Next 15 app. Recommended target: **Vercel** (zero-config). Other targets are supported via `next start` after `next build`.

For self-hosted deployment:

```sh
npm run build
NODE_ENV=production npm run start -- -p 3000
```

## Browser support

- **Modern evergreen browsers** (Safari 16+, Chrome / Edge 110+, Firefox 110+).
- Reduced-motion users get a static fallback (no Lenis, no GSAP pin, no 3D rotation).
- Mobile users get the SVG sculpture fallback.

Older browsers (IE, legacy Edge) are not supported and were not in scope.
