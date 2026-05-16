# Component Inventory

A flat list of every component shipped, its file, its role and its runtime mode.

`S` = Server Component. `C` = `"use client"`.

## Layout

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `app/layout.tsx` | `RootLayout` | S | HTML shell, fonts, providers, header, footer, skip link |
| `components/layout/Navbar.tsx` | `Navbar` | C | Sticky scroll-aware nav, mobile sheet menu |
| `components/layout/Footer.tsx` | `Footer` | S | Φ brand bar, link groups (Φ-prefixed headers), brand narrative, signature |
| `components/providers/SmoothScroll.tsx` | `SmoothScroll` | C | Lenis lifecycle; honors `prefers-reduced-motion` |

## UI primitives

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `components/ui/Container.tsx` | `Container` | S | Width-constrained shell (`max-w 1320px`) |
| `components/ui/Logo.tsx` | `Logo` | S | Brand mark with optional wordmark |
| `components/ui/Button.tsx` | `Button`, `ButtonLink` | S | CVA-driven variants (`primary`, `ghost`, `outline`, `subtle`) × sizes (`sm`, `md`, `lg`) |
| `components/ui/SectionHeader.tsx` | `SectionHeader` | C | Eyebrow + title + description with stagger reveal. Accepts `eyebrowIndex` + `eyebrowLabel` (renders `SectionIndex`) or free-form `eyebrow`. |
| `components/ui/SectionIndex.tsx` | `SectionIndex` | S | Canonical Φ-indexed eyebrow: `Φ · 0X — LABEL`. Used by `SectionHeader` and `FinalCta`. |
| `components/ui/PhiMark.tsx` | `PhiMark` | S | The canonical Φ glyph. Sizes: `xs` `sm` `md` `lg` `xl` `display`. Optional `decorative` for `aria-hidden`. |

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
| `lib/content.ts` | `NAV_LINKS`, `PILLARS`, `PROCESS_STEPS`, `TRUST_ITEMS`, `PROJECTS`, `SECURITY_CAPABILITIES`, `SHOWCASE_PILLARS`, `BRAND_NARRATIVE`, `STUDIO_EMAIL` | All copy and data |

## Feature components

### Hero (`features/hero/`)

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `Hero.tsx` | `Hero` | C | Duality narrative composition + dynamic `Sculpture` (desktop) / `SculptureFallback` (mobile) + editorial corner mark + Φ watermark behind headline |
| `Sculpture.tsx` | `EngineeringHemisphere`, `PhiAnchor`, `FluidHemisphere`, `Scene`, `Sculpture` | C | Asymmetric R3F composition — left lattice, center Φ, right fluid form |
| `SculptureFallback.tsx` | `SculptureFallback` | C | 2D SVG mirror of the asymmetric composition (used on mobile + loading state) |

### Trust (`features/trust/`)

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `TrustStrip.tsx` | `TrustStrip` | C | Six studio principles, Φ-marked header |

### Services (`features/services/`)

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `Services.tsx` | `Services`, `PillarCard` | C | Four-pillar capability map (Design → Build → Secure → Scale) on a 2×2 grid. Each `PillarCard` shows pillar word, headline, body, nested services, capabilities, and an inquiry mailto. |

### Process (`features/process/`)

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `Process.tsx` | `Process` | C | GSAP-pinned cinematic process (6 steps). Φ.0X phase markers, massive Φ.0X watermark behind the active step. Phase tick markers on progress hairline. |

### Showcase (`features/showcase/`)

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `Showcase.tsx` | `Showcase` | C | Engineering pillars (Φ · 03) + metric strip |

### Security (`features/security/`)

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `Security.tsx` | `Security`, `SecurityDiagram` | C | Editorial layout: doctrine axioms (Φ.01–Φ.03) + posture meta block + capabilities grid + Φ-cored architectural diagram |

### Projects (`features/projects/`)

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `Projects.tsx` | `Projects`, `ProjectStage`, `VeridiaVisual`, `AlturaVisual`, `NorthwindVisual` | C | Alternating case-study layout with bespoke per-project SVG diagrams (trust zones / token grid / node graph), massive case-number watermark, Φ-marked case label |

### CTA (`features/cta/`)

| File | Component | Mode | Role |
| --- | --- | --- | --- |
| `FinalCta.tsx` | `FinalCta` | C | Asymmetric anchor composition: massive stroked + gradient-filled Φ on the left, manifesto headline + CTAs on the right, brand narrative with Φ separators below |

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
