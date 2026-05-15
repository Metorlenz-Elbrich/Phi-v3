# Project Architecture

## Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | Next.js 15 (App Router) | Server Components by default, streaming, edge-ready |
| Language | TypeScript (strict + `noUncheckedIndexedAccess`) | Typed contracts end-to-end |
| Styling | Tailwind CSS 3.4 + CSS layers | Token-driven, predictable, low runtime cost |
| Motion | Framer Motion + GSAP/ScrollTrigger | Framer for UI, GSAP for pinned cinematic scroll |
| 3D | React Three Fiber + drei | Declarative R3F, lazy-loaded |
| Scroll | Lenis | Smooth wheel without layout-thrash |
| Icons | lucide-react | Stroke-consistent line system |

React 19 RC is used to match Next 15's runtime; types are pinned to 18 for ecosystem compatibility.

## Directory layout

```
/app                  App Router entry — server components by default
  layout.tsx          Root layout, fonts, providers, Navbar/Footer
  page.tsx            Homepage composition
  not-found.tsx
  globals.css         Token bridge + base + utilities

/components
  /layout             Navbar, Footer
  /providers          Client-only providers (SmoothScroll)
  /ui                 Reusable primitives (Button, Container, Logo, SectionHeader)

/features             One folder per landing-page section
  /hero               Hero + Sculpture (R3F) + SculptureFallback (SVG)
  /trust              Trust strip
  /services           Services grid + ServiceCard
  /process            Cinematic GSAP-pinned process
  /showcase           Engineering showcase
  /security           Cybersecurity section + diagram
  /projects           Case studies (conceptual)
  /cta                Final CTA

/hooks                use-reduced-motion, use-media-query, use-pointer
/lib                  fonts, content (data), motion variants, utils
/styles               (reserved for additional CSS modules)
/public               Static assets including phibrain-logo.png
/assets               Original brand assets (logo source)
/docs                 Engineering docs (this folder)
```

## Module boundaries

- **`/components`** = generic, reusable, no business content. Knows nothing about sections.
- **`/features`** = section-specific composition. May import from `/components`, `/hooks`, `/lib` but never from a sibling feature.
- **`/lib/content.ts`** = the single source of truth for copy & data shown on the page. Sections render from it; never hard-code copy inline.
- **`/hooks`** = client-only stateful primitives. Pure React; no DOM mutation.
- **`/app`** = top-level routes. Almost everything except providers stays a Server Component until something needs the browser.

## Rendering model

- **Server components by default.** Every section file that doesn't need browser APIs would have been a server component; they are marked `"use client"` only because Framer Motion / GSAP / R3F require the browser. Static composition (`app/page.tsx`) stays a server component.
- **`SmoothScroll`** is the only top-level client provider. It wraps `children` so server children pass through unmodified.
- **Dynamic imports** are used for `Sculpture` (`features/hero/Sculpture.tsx`) so the Three.js bundle never reaches users who land on the page and bounce inside the LCP window.
- **Mobile** swaps the 3D sculpture for an SVG fallback (`SculptureFallback`) before the dynamic import is even attempted.

## Data flow

There is no application state. All copy comes from typed records in `lib/content.ts`. Sections are pure renders of that data plus interactive UI state (open menu, active process step). This is intentional — adding global state would be unjustified complexity.

## Routing

Single homepage route. Internal links use anchors (`#services`, `#process`, etc.). When real routes are needed (Services detail, Cybersecurity service page) they slot into `/app/(routes)/<route>/page.tsx` and reuse the same primitives.

## Type rules

- `strict: true`, `noUncheckedIndexedAccess: true` (catches `arr[i]` undefined cases).
- `@/*` path alias points to repo root.
- All exported components have explicit return types via TSX inference; no `any`.

## What is NOT in this repo (and why)

- No state management library — there is no shared state.
- No form library — the contact CTA uses `mailto:` until a real form/backend is in scope.
- No CMS — copy is in `lib/content.ts`. Trivial to migrate to a headless CMS later (one file).
- No analytics, A/B framework, or feature flags — out of scope for v1.
