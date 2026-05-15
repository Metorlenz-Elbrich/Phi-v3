# Design System

A restrained premium dark system. The principle is **engineering-grade visual discipline**: every value exists because the brief required it; nothing is decorative.

## Tokens

### Color

| Token | Hex | Role |
| --- | --- | --- |
| `ink.900` | `#060B14` | Primary background |
| `ink.800` | `#0A111E` | Section variant |
| `ink.700` | `#0F1724` | Secondary surface |
| `ink.600` | `#151E2D` | Card surface |
| `ink.500` | `#1B2638` | Elevated surface |
| `accent.DEFAULT` | `#00D9FF` | Primary accent (cyan) |
| `accent.soft` | `#39E6FF` | Secondary accent (cyan-soft) |
| `accent.deep` | `#0099CC` | Deep gradient stop |
| `text.primary` | `#F8FAFC` | Body text |
| `text.muted` | `#94A3B8` | Secondary text |
| `text.dim` | `#64748B` | Tertiary text |
| `line.DEFAULT` | `rgba(255,255,255,0.08)` | Borders |
| `line.strong` | `rgba(255,255,255,0.14)` | Hover borders |
| `line.accent` | `rgba(0,217,255,0.32)` | Highlighted borders |

Accent usage is strictly rationed — it appears only on the eyebrow accents, focused links, headline highlights, CTA fills, security/process indicators and the 3D sculpture glow. Overusing it would dilute it.

### Typography

| Family | Use | Variable |
| --- | --- | --- |
| Space Grotesk | Display / headings | `--font-display` |
| Inter | Body / UI | `--font-sans` |
| JetBrains Mono | Eyebrows, metric labels, technical accents | `--font-mono` |

Custom display sizes are defined in `tailwind.config.ts` using `clamp()` so headlines breathe between mobile and desktop without media-query stacking:

- `display-2xl` — Hero (`clamp(3.5rem, 7vw, 6.5rem)`, line-height 0.95)
- `display-xl` — Big section titles
- `display-lg` — Standard section titles
- `display-md` — Sub-headers and active step
- `eyebrow` — Uppercase mono labels (`0.75rem` / tracking `0.18em`)

### Spacing & layout

- Page max width: **1320px** (`--shell-max`).
- Gutter: `clamp(1.25rem, 3vw, 2.5rem)`.
- Section vertical rhythm: `py-28 md:py-36` for standard sections; hero and CTA use larger.
- Component radii: `rounded-full` (CTAs, pills), `rounded-2xl` (cards / panels).

### Borders & elevation

The system is flat — no drop shadows on cards. Depth is communicated via:

- **Border hierarchy**: `line` → `line-strong` (hover) → `line-accent` (active/featured).
- **Subtle gradients**: `bg-gradient-to-b from-ink-600/50 to-ink-700/40` for cards.
- **Atmospheric glow**: large blurred radial shapes (`bg-accent/[0.06] blur-[120px]`) behind sections.
- **Hairlines**: 1px gradient lines for separators (`.hairline`).

Defined shadow tokens (used sparingly):
- `shadow-glow` — for primary CTA hover.
- `shadow-soft` — reserved for elevated panels.
- `shadow-ring` — for input-style outlines.

### Motion (design-side)

See `ANIMATION_ARCHITECTURE.md`. The motion tokens that belong to the design system are:

- `ease-precision = cubic-bezier(0.22, 1, 0.36, 1)` (default UI ease)
- `ease-smooth = cubic-bezier(0.65, 0, 0.35, 1)` (linear-symmetric)
- 300ms default duration for UI transitions.
- 800–900ms for content reveals.

## Components

### Primitives (`/components/ui`)

| Component | Purpose |
| --- | --- |
| `Container` | Width-constrained shell. Polymorphic via `as` prop. |
| `Logo` | Brand logo with optional wordmark. Sourced from `/public/phibrain-logo.png`. |
| `Button` / `ButtonLink` | CVA-driven variants (`primary`, `ghost`, `outline`, `subtle`) and sizes (`sm`, `md`, `lg`). |
| `SectionHeader` | Standard eyebrow + title + description block with stagger reveal. |

### Layout (`/components/layout`)

| Component | Purpose |
| --- | --- |
| `Navbar` | Sticky scroll-aware navbar with mobile menu. |
| `Footer` | Minimal footer with grouped links and brand narrative strip. |

### Providers (`/components/providers`)

| Component | Purpose |
| --- | --- |
| `SmoothScroll` | Lenis smooth-scroll provider; auto-disables under `prefers-reduced-motion`. |

## Brand narrative

The brand line **"We Design. We Build. We Secure. We Scale."** appears in three carefully chosen locations:

- The hero pill row (subtle technical accent).
- The footer (as four mono-uppercase chips).
- The final CTA (as four pill-shaped chips after the close).

It is never used as filler.

## What we deliberately don't do

- No drop shadows on cards. Depth comes from line + atmosphere.
- No neon colors outside the cyan family.
- No more than one accent color.
- No icon decoration on body text — icons are reserved for service tiles, hero pills, security capabilities and the navbar/footer.
- No gradient backgrounds spanning whole sections — gradients live inside cards, headlines or contained glows.
