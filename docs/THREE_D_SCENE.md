# 3D Scene — The Hero Sculpture

## Intent

The hero contains an **abstract premium engineering sculpture** — not a neural network, not a brain, not an AI cliché. It exists to signal:

- structural geometry
- digital architecture
- connected precision systems
- engineering rigor

## Composition

File: `features/hero/Sculpture.tsx`

The scene is a layered icosahedral construct. From inner to outer:

| Layer | Component | Role |
| --- | --- | --- |
| Core | `<CoreShell>` | Solid icosahedron, dark metal material with faint accent emissive |
| Inner wire | `<WireShell radius={1.18}>` | High-detail edge geometry, 55% opacity |
| Outer wire | `<WireShell radius={1.45}>` | Low-detail edges, 28% opacity |
| Connection lines | `<ConnectionLines>` | Radial spokes from origin |
| Satellites | `<Satellites>` | 18 small octahedrons orbiting on a precomputed lattice |
| Orbit rings | `<OrbitRing>` ×3 | Tilted toruses at varied radii and signs |

All structural layers are wrapped in drei's `<Float>` for ambient bobbing, with a Three.js `Group` scaling at 1.15 so it fills the canvas comfortably.

Lighting:
- Ambient at 0.35
- Two directional lights (warm cyan, deep cyan) for edge definition
- A point light at origin to bias the emissive glow outward
- `drei.Environment preset="warehouse"` at 0.35 intensity, lazily mounted via `<Suspense>` so the HDRI never blocks first paint

## Behavior

- **Auto-rotation.** Each wire shell and the connection lines rotate independently at ~0.04–0.08 rad/s.
- **Mouse parallax.** `useFrame` reads R3F `pointer.{x,y}` (already normalized to `[-1, 1]`) and damps it into `rotation.x/y/z` with a 0.04 lerp factor — never snappy.
- **Float.** drei's `<Float>` handles sine bobbing without us writing trig.
- **Scan line.** A DOM overlay slides a single 1px cyan gradient line through the canvas via Tailwind keyframe — added depth, costs nothing.

## Performance

- `dpr={[1, 1.6]}` — caps pixel ratio at 1.6 even on retina screens. The visual gain past that is invisible at the sculpture's scale; the GPU cost is not.
- `gl.alpha = true` + `style.background = transparent` — composited against the existing page background (no extra fragment cost from a solid clear).
- `gl.powerPreference = "high-performance"` — opt-in to discrete GPU when available.
- All wire / connection geometries are `useMemo`'d so they're built once.
- No post-processing pass (no bloom, SSAO, FXAA). The look is achieved with emissive + blurred DOM glow behind the canvas.
- The hero never mounts the R3F canvas on viewports below 768px (`useMediaQuery`). It renders `SculptureFallback` instead.
- The whole module is loaded via `next/dynamic` with `ssr: false` so the Three.js bundle (~150 KB gzipped) is split out of the main chunk.

## Reduced motion

`useReducedMotion()` is read in every animating component. When `true`:

- `CoreShell.useFrame` skips its time-driven additive term.
- `WireShell` and `Satellites` skip their delta rotation.
- `<Float>` is given `speed=0`, `rotationIntensity=0`, `floatIntensity=0`.

The sculpture is still visible, with the same composition; it just doesn't move.

## SVG fallback

File: `features/hero/SculptureFallback.tsx`

A self-contained SVG composition designed to *evoke* the same geometry:

- Four concentric rings (counter-rotating, slow).
- An icosahedral projection drawn as polygons + cross-lines.
- A central radial-gradient core.
- Six floating accent nodes that breathe (opacity).

The fallback is loaded:
1. Directly on mobile (via the media-query check in `Hero.tsx`).
2. As the `next/dynamic` loading state, before the R3F bundle resolves.

This means the user always sees *something* immediately, even on a cold cache.

## What we deliberately did NOT build

- No anatomical brain
- No neural-network particles
- No vortex / nebula / cyberpunk grid tunnel
- No physics simulation
- No GLB/GLTF model — the geometry is procedural and changes via TS values, not via re-exporting from Blender
