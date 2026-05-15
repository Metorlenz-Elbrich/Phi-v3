# Design System

A restrained premium dark system organized around a single brand constant: **Φ**.

The principle is **engineering-grade visual discipline**. Every value exists because the brief required it; nothing is decorative.

## Brand mark — Φ

PhiBrain's identity is anchored on the Greek letter **Φ (phi)** — the golden ratio, the constant of proportion, and the literal "Phi" in PhiBrain. It is the brand mark and shows up across the site as a quiet, consistent thread, never as decoration.

### Φ usage rules

| Where Φ appears | Why | How |
| --- | --- | --- |
| 3D sculpture (hero) | Central anchor of the asymmetric composition (engineering ↔ design) | Vertical rod + horizontal ring — geometry |
| Hero atmosphere | Quiet watermark behind the headline | `PhiMark size="display"` at ~2.5% opacity |
| Hero pill row | Brand identifier in the eyebrow | `PhiMark size="md"` |
| Section eyebrows | Φ · 01 — Services / Φ · 02 — Process / … | `SectionIndex` primitive |
| Process phase markers | `Φ.01 Discover` … `Φ.06 Scale` | Inline rendering |
| Process active step | Massive Φ.0X watermark behind the active step content | `PhiMark size="display"` |
| Security doctrine | `Φ.01` `Φ.02` `Φ.03` axioms | Inline mono labels |
| Security diagram | Φ at the core node | SVG text |
| Projects | Φ at the trust core / token core / hub node in each diagram | SVG text |
| Final CTA | The visual anchor — massive stroked + filled Φ | Layered text composition |
| Footer | Top brand bar signature + section group headers | `PhiMark` and inline |

### Φ usage limits

- **Body text** — never. Φ is a mark, not a glyph in prose.
- **CTA buttons** — never. CTAs stay clean.
- **Card titles / service titles** — never. Φ does not prefix service names.
- **Hover states** — only if it would already have been present (no surprises).

The `PhiMark` component (`components/ui/PhiMark.tsx`) is the one canonical source for the glyph.

## Brand narrative

**"We Design. We Build. We Secure. We Scale."**

Two reading variants are used:

- As a horizontal Φ-separated rhythm: `We Design  Φ  We Build  Φ  We Secure  Φ  We Scale` — used in the hero bottom rail, the footer top bar, and the final CTA close.
- As a pill row — used historically and now phased toward the Φ-separated rhythm.

The narrative is never used as filler. It appears in exactly four deliberate places.

## Duality narrative

The hero copy and the 3D sculpture reflect a single, brand-defining duality:

- **Left** — engineering, structure, lattice, precision (logo's left hemisphere)
- **Center** — Φ, the constant
- **Right** — design, fluidity, curve, adaptation (logo's right hemisphere)

The hero headline reads:

> Built with structure.
> Designed with fluidity.
> Held to a single standard.

This duality is the strongest brand signal on the site — both in copy and in the sculpture composition.

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

Accent usage is strictly rationed — it appears only on the eyebrow accents, focused links, Φ marks, headline highlights, CTA fills, security/process indicators and the 3D sculpture glow.

### Typography

| Family | Use | Variable |
| --- | --- | --- |
| Space Grotesk | Display / headings / **Φ glyph** | `--font-display` |
| Inter | Body / UI | `--font-sans` |
| JetBrains Mono | Eyebrows, metric labels, technical accents, indices | `--font-mono` |

Custom display sizes are defined in `tailwind.config.ts` using `clamp()`:

- `display-2xl` — Hero / Final CTA (`clamp(3.5rem, 7vw, 6.5rem)`, line-height 0.95)
- `display-xl` — Big section titles, process active step
- `display-lg` — Standard section titles
- `display-md` — Sub-headers
- `eyebrow` — Uppercase mono labels (`0.75rem` / tracking `0.18em`)

For the **Φ watermark size** at `PhiMark size="display"`, the glyph uses `text-[clamp(6rem,14vw,12rem)]` so it scales responsively.

### Spacing & layout

- Page max width: **1320px** (`--shell-max`).
- Gutter: `clamp(1.25rem, 3vw, 2.5rem)`.
- Section vertical rhythm: `py-28 md:py-36` for standard sections; hero and CTA use larger.
- Component radii: `rounded-full` (CTAs, pills), `rounded-2xl` (cards / panels), `rounded-xl` (compact tiles).

### Borders & elevation

The system is flat — no drop shadows on cards. Depth comes from:

- **Border hierarchy**: `line` → `line-strong` (hover) → `line-accent` (active/featured).
- **Subtle gradients**: `bg-gradient-to-b from-ink-600/50 to-ink-700/40` for cards.
- **Atmospheric glow**: large blurred radial shapes behind sections (`bg-accent/[0.06] blur-[120px]`).
- **Hairlines**: 1px gradient lines for separators (`.hairline`).

Defined shadow tokens (used sparingly):
- `shadow-glow` — for primary CTA hover.
- `shadow-soft` — reserved for elevated panels.
- `shadow-ring` — for input-style outlines.

### Motion tokens

See `ANIMATION_ARCHITECTURE.md`. Design-side motion tokens:

- `ease-precision = cubic-bezier(0.22, 1, 0.36, 1)` (default UI ease)
- `ease-smooth = cubic-bezier(0.65, 0, 0.35, 1)` (linear-symmetric)
- 300ms default for UI transitions
- 800–900ms for content reveals

## Components

### Primitives (`/components/ui`)

| Component | Purpose |
| --- | --- |
| `Container` | Width-constrained shell. Polymorphic via `as`. |
| `Logo` | Brand logo with optional wordmark. Sourced from `/public/phibrain-logo.png`. |
| `Button` / `ButtonLink` | CVA-driven variants (`primary`, `ghost`, `outline`, `subtle`) and sizes (`sm`, `md`, `lg`). |
| `SectionHeader` | Standard eyebrow + title + description block with stagger reveal. Accepts `eyebrowIndex` + `eyebrowLabel` (renders `SectionIndex`) or free-form `eyebrow`. |
| `SectionIndex` | The canonical Φ-indexed eyebrow (`Φ · 0X — LABEL`). |
| `PhiMark` | The canonical Φ glyph. Sizes: `xs` `sm` `md` `lg` `xl` `display`. Optional `decorative` mode for `aria-hidden`. |

### Layout (`/components/layout`)

| Component | Purpose |
| --- | --- |
| `Navbar` | Sticky scroll-aware navbar with mobile menu. |
| `Footer` | Editorial footer with Φ brand bar, link groups, brand narrative. |

### Providers (`/components/providers`)

| Component | Purpose |
| --- | --- |
| `SmoothScroll` | Lenis smooth-scroll provider; auto-disables under `prefers-reduced-motion`. |

## What we deliberately don't do

- No drop shadows on cards. Depth comes from line + atmosphere.
- No neon colors outside the cyan family.
- No more than one accent color.
- No icon decoration on body text — icons are reserved for service tiles, hero pills, security capabilities, navbar/footer.
- No gradient backgrounds spanning whole sections — gradients live inside cards, headlines or contained glows.
- No Φ in body prose, CTA buttons, or service titles. Φ is a mark, not a decoration.
- No AI/neural language. The brain symbol is strategic intelligence, not artificial intelligence.
