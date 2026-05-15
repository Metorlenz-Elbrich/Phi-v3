# Performance Report & Budget

## Targets

| Metric | Target (mobile, 4G, mid-range) | Why |
| --- | --- | --- |
| LCP | < 2.5s | Core Web Vitals "good" |
| INP | < 200ms | Core Web Vitals "good" |
| CLS | < 0.05 | Premium feel breaks with layout shift |
| TBT | < 200ms | Hero CTA must be tappable immediately |
| Bundle (initial JS) | < 180 KB gzip | Excluding 3D bundle |

## Design decisions that defend the budget

### Server components by default

`app/layout.tsx` and `app/page.tsx` are both Server Components. The page composition itself ships **zero** JS. Only sections that need client behavior opt in with `"use client"`.

### Dynamic 3D bundle

`features/hero/Sculpture.tsx` imports Three.js, R3F and drei — ~150 KB gzipped. This is loaded via `next/dynamic` with `ssr: false`, so:

- The initial page response doesn't carry it.
- The fallback SVG renders immediately as the loading state.
- Mobile users never download it at all (route-side gate via `useMediaQuery`).

### Font loading

`next/font/google` pre-loads Space Grotesk, Inter, and JetBrains Mono with `display: swap`. Self-hosted at build time — no third-party request, no FOIT.

### Image optimization

- Logo served via `next/image` with explicit dimensions; `priority` set for above-the-fold.
- Formats negotiated to AVIF / WebP.
- No images on the page other than the logo. All decorative visuals are SVG or CSS gradients.

### CSS architecture

- Tailwind 3 with content paths scoped to `app`, `components`, `features` — unused classes are tree-shaken at build.
- Component-level CSS via `@layer components` keeps cascade predictable.
- No CSS-in-JS runtime cost.

### Motion budget

See `ANIMATION_ARCHITECTURE.md`. Key rules:

- Only `transform` + `opacity` animations.
- `whileInView` with `once: true` — reveals never re-fire.
- `AnimatePresence mode="wait"` — never two states painting simultaneously.
- Lenis: single rAF loop; everything else uses `IntersectionObserver`.

### 3D budget

- DPR capped at 1.6.
- No post-processing pass.
- Procedural geometries; no GLB/GLTF downloads.
- `useMemo` on every geometry.
- Float / rotation use `useFrame` (already on the R3F render loop) — no `setInterval`, no React state on per-frame data.
- Reduced-motion zeroes out per-frame mutations.

## Caching & headers

Next.js 15 defaults apply:

- Static assets (`/public/*`) are served with `Cache-Control: public, max-age=31536000, immutable` via Vercel's edge or via your own host's static rules.
- Server-rendered HTML is dynamic-by-default for the homepage; if you want it cached, add `export const revalidate = 3600;` at the top of `app/page.tsx`.

## Validation

Recommended checks before each release:

1. `npm run build` — surfaces type and bundle issues.
2. Lighthouse mobile (throttled) on the production build.
3. WebPageTest mobile 4G profile.
4. Manual reduced-motion check (`Settings → Reduce motion`).
5. Manual mobile sculpture-fallback check.

## Known trade-offs

- **Lenis adds ~12 KB gzipped.** It's worth it for the premium scroll feel, but it is a tax. If we ever need to remove it, the `prefers-reduced-motion` code path already shows what a non-Lenis experience looks like.
- **R3F first-paint on cold cache is ~300–600ms** on mid-range mobile. We mitigate with the SVG fallback shown immediately, plus the `(min-width: 768px)` gate that skips R3F on phones.
- **GSAP** is ~30 KB gzipped — we use only `gsap` core + `ScrollTrigger`. If only ScrollTrigger remains in use long-term, consider importing GSAP from the plugin entry directly.

## What we don't measure (yet)

- Real-user metrics. Add an analytics provider (Vercel Analytics or similar) before claiming production-ready performance.
- Cross-browser rendering CI. Visual regression is run manually for now.
