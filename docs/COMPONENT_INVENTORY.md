# Component Inventory

A flat list of every component shipped, its file, its role and its runtime mode.

`S` = Server Component. `C` = `"use client"`.

## Layout

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `app/layout.tsx` | `RootLayout` | S | HTML shell, fonts, providers, header, footer, skip link |
| `components/layout/Navbar.tsx` | `Navbar` | C | Sticky scroll-aware nav, mobile sheet menu |
| `components/layout/Footer.tsx` | `Footer` | S | Brand, link groups, brand narrative chips |
| `components/providers/SmoothScroll.tsx` | `SmoothScroll` | C | Lenis lifecycle; honors `prefers-reduced-motion` |

## UI primitives

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `components/ui/Container.tsx` | `Container` | S | Width-constrained shell (`max-w 1320px`) |
| `components/ui/Logo.tsx` | `Logo` | S | Brand mark with optional wordmark |
| `components/ui/Button.tsx` | `Button`, `ButtonLink` | S | CVA-driven variants (`primary`, `ghost`, `outline`, `subtle`) × sizes (`sm`, `md`, `lg`) |
| `components/ui/SectionHeader.tsx` | `SectionHeader` | C | Eyebrow + title + description with stagger reveal |

## Hooks

| File | Hook | Role |
| --- | --- | --- |
| `hooks/use-reduced-motion.ts` | `useReducedMotion()` | Boolean media-query subscription |
| `hooks/use-media-query.ts` | `useMediaQuery(q)` | Generic media-query subscription |
| `hooks/use-pointer.ts` | `usePointer()` | Pointer position ref (raw + normalized) |

## Lib

| File | Export | Role |
| --- | --- | --- |
| `lib/utils.ts` | `cn`, `clamp`, `lerp` | Class merge + math helpers |
| `lib/fonts.ts` | `fontDisplay`, `fontSans`, `fontMono` | next/font loaders (Space Grotesk, Inter, JetBrains Mono) |
| `lib/motion.ts` | `fadeUp`, `fadeIn`, `staggerContainer`, `wordReveal`, `lineReveal`, `EASE_*` | Framer Motion variant primitives |
| `lib/content.ts` | `NAV_LINKS`, `SERVICES`, `PROCESS_STEPS`, `TRUST_ITEMS`, `PROJECTS`, `SECURITY_CAPABILITIES`, `SHOWCASE_PILLARS`, `BRAND_NARRATIVE` | All copy and data |

## Feature components

### Hero (`features/hero/`)

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `Hero.tsx` | `Hero` | C | Layout + dynamic-imported `Sculpture` (desktop) / `SculptureFallback` (mobile) |
| `Sculpture.tsx` | `Sculpture` | C | R3F canvas — icosahedral construct |
| `SculptureFallback.tsx` | `SculptureFallback` | C | SVG composition for mobile / loading state |

### Trust (`features/trust/`)

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `TrustStrip.tsx` | `TrustStrip` | C | Six trust items in a horizontal grid |

### Services (`features/services/`)

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `Services.tsx` | `Services` | C | Section composition + grid |
| `ServiceCard.tsx` | `ServiceCard` | C | Individual card with hover glow |

### Process (`features/process/`)

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `Process.tsx` | `Process` | C | GSAP-pinned cinematic process (6 steps) |

### Showcase (`features/showcase/`)

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `Showcase.tsx` | `Showcase` | C | Engineering pillars + metric strip |

### Security (`features/security/`)

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `Security.tsx` | `Security`, `SecurityDiagram` | C | Capabilities grid + architectural SVG diagram |

### Projects (`features/projects/`)

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `Projects.tsx` | `Projects`, `ProjectVisual` | C | Stacked case study list with stylized visuals |

### CTA (`features/cta/`)

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `FinalCta.tsx` | `FinalCta` | C | Closing section with dual CTA |

## Routes

| File | Route | Mode |
| --- | --- | --- |
| `app/page.tsx` | `/` | S |
| `app/not-found.tsx` | 404 | S |

## Static assets

| Path | Role |
| --- | --- |
| `public/phibrain-logo.png` | Brand mark (served at root for favicon + Logo component) |
| `assets/phibrain-logo.png` | Original brand mark source |
