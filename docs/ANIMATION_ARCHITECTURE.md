# Animation Architecture

Motion is structured in three deliberate layers. Each layer has its own tooling, intent and budget.

## Layer 1 — Subtle (ambient depth)

Always-on micro-motion that signals the surface is alive. Cheap, GPU-only, non-distracting.

| Where | Implementation | Notes |
| --- | --- | --- |
| Hero status pill | Tailwind `animate-breathe-glow` | Opacity-only keyframe. |
| Hero/security scan line | Tailwind `animate-scan-line` | `translateY` keyframe, mix-blend-screen. |
| 3D sculpture float | drei `<Float>` + R3F `useFrame` | Sine-based bobbing, pointer parallax. |

Budget: < 5 simultaneous always-on animations on screen.

## Layer 2 — Medium (UI interactions & reveals)

UI-bound, triggered by hover, scroll-into-view or interaction. Implemented with Framer Motion.

Standard primitives are defined in `lib/motion.ts`:

```ts
export const fadeUp: Variants = { ... };       // y:24 + opacity
export const staggerContainer: Variants = ...; // 80ms stagger
export const wordReveal: Variants = ...;       // mask-driven y translate
```

Usage pattern:

```tsx
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-10% 0px" }}
>
  <motion.h2 variants={fadeUp}>...</motion.h2>
  <motion.p variants={fadeUp}>...</motion.p>
</motion.div>
```

Defaults:
- `ease = cubic-bezier(0.22, 1, 0.36, 1)` (precision)
- Reveal duration: **800ms** (headers), **400ms** (small UI)
- Stagger: **80ms** between siblings
- Viewport once + `-10% 0px` margin so reveals fire near, not at, the edge.

Where used:
- Section headers (`SectionHeader`).
- Service cards, trust strip items, security capabilities, project cases.
- Final CTA composition.
- Mobile nav link entrance.

## Layer 3 — Cinematic (scroll storytelling)

Pinned, scrubbed scroll sequences. Implemented with **GSAP + ScrollTrigger** because Framer's `useScroll` cannot pin reliably without layout-shift across mobile browsers.

The one cinematic moment is the **Process** section (`features/process/Process.tsx`):

- The section is pinned for `(steps − 1) × 90%` of viewport height.
- `ScrollTrigger.create({ scrub: 0.4 })` drives a 0→1 progress value.
- Progress derives the active step (`Math.floor(progress * stepCount)`).
- A horizontal progress hairline animates `scaleX` in lockstep.
- The step content transitions via Framer Motion `AnimatePresence` so the GSAP timeline and React's render commit don't fight.

Reduced-motion and mobile fall back to a non-pinned, fully-scrollable static layout (`return` before `ScrollTrigger.create`).

## Reduced motion policy

`prefers-reduced-motion: reduce` is honored in three layers:

1. **CSS** — `globals.css` `@media (prefers-reduced-motion: reduce)` forces all animations and transitions to `0.001ms`.
2. **JS** — `useReducedMotion()` hook returns `true`; consumed by `Sculpture` (kills rotation) and `Process` (skips pin).
3. **Lenis** — `SmoothScroll` provider does not mount Lenis at all when reduced-motion is set.

The intent: a user with reduced motion sees the same content and design, with no animation surprise.

## Mobile policy

| Layer | Mobile behavior |
| --- | --- |
| Subtle | Kept — cheap and adds character |
| Medium | Kept — Framer Motion is fast on mobile |
| Cinematic | Disabled — `Process` falls back to non-pinned |
| 3D sculpture | Replaced by SVG fallback when `(min-width: 768px)` is false |

## Performance rules (motion-side)

- **Animate `transform` and `opacity` only.** No `width`, `height`, `top`, `left`, `box-shadow` animations.
- **GPU promote** explicit hot paths with `transform: translateZ(0)` (`.gpu` utility).
- **Single scroll listener** — Lenis owns scroll. ScrollTrigger reads from it; everything else uses `IntersectionObserver` via Framer's `whileInView`.
- **`AnimatePresence mode="wait"`** for content swaps so we never paint two states simultaneously.
- **`viewport={{ once: true }}`** prevents re-running reveals when scrolling back up.

## Authoring rules

1. Reach for a CSS keyframe first.
2. If that doesn't fit, use `framer-motion`.
3. Only use GSAP when you need pin/scrub or precise timeline orchestration.
4. Never animate just for animation's sake — every motion has a job.
