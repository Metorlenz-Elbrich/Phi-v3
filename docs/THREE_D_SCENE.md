# 3D Scene — The Hero Sculpture

## Intent

The hero contains an **asymmetric brand sculpture** that encodes PhiBrain's identity in three-dimensional geometry. It is not an anatomical brain, not a neural network, not an AI artifact. It is the **logo philosophy made physical**:

- **Left hemisphere** — engineering, structure, lattice, precision
- **Center** — Φ, the constant of proportion that holds the studio together
- **Right hemisphere** — design, fluidity, adaptive form

This composition makes the sculpture **unmistakably PhiBrain** — it could not belong to any other company.

## Composition

File: `features/hero/Sculpture.tsx`

The scene is three deliberately distinct groups sharing one parallax root:

| Group | Position | Visual vocabulary |
| --- | --- | --- |
| `<EngineeringHemisphere>` | `[-1.7, 0, 0]` | Wireframe icosahedron + secondary inner icosahedron + sparse cubic lattice + connection veins |
| `<PhiAnchor>` | `[0, 0, 0]` | Vertical rod + horizontal ring (the Φ glyph in geometry) + halo + end-caps + emissive core |
| `<FluidHemisphere>` | `[1.7, 0, 0]` | Torus knot (smooth metallic) + Catmull–Rom tube curve + secondary thin ring + orbiting particle constellation |

### Why this composition

- **Asymmetric.** The two hemispheres are deliberately *different* — different geometries, different rotation speeds, different materials. The sculpture is not a kaleidoscope.
- **Hierarchical.** The Φ anchor reads first; the hemispheres read as its consequence.
- **Brand-encoded.** The Φ-shape is the geometric form of the brand mark — a vertical stem through a horizontal loop. It is *the brand* rendered in 3D, not a generic "central element."

### Lighting

- Ambient at 0.32
- Two directional lights (warm cyan, deep cyan) for edge definition on the metal materials
- Origin point light to bias the emissive glow outward from Φ
- `drei.Environment preset="warehouse"` at 0.32 intensity, lazily mounted via `<Suspense>` — never blocks first paint

## Behavior

- **Pointer parallax.** The root group damps `pointer.{x,y}` into its `rotation.{x,y}` with a 0.04 lerp factor. Smooth, never snappy.
- **Engineering hemisphere.** Slow rigid auto-rotation (Y at 0.06 rad/s, X at 0.018 rad/s) — feels mechanical.
- **Φ anchor.** Subtle breathing pulse on the rod via material opacity; slow rotation of the horizontal ring around Y; halo scale breathing. The core is metallic with emissive accent.
- **Fluid hemisphere.** Slightly faster rotation, plus an independent rotation on the torus knot itself, plus a gentle vertical bob from a sine of elapsed time — feels alive.
- **Scan line.** A DOM overlay slides a single 1px cyan gradient line through the canvas via Tailwind keyframe — costs nothing, adds depth.

## Performance

- `dpr={[1, 1.6]}` — caps pixel ratio at 1.6 even on retina screens.
- `gl.alpha = true` + transparent background — composited against the page background.
- `gl.powerPreference = "high-performance"` — opts into discrete GPU when available.
- All geometries (`EdgesGeometry`, `TubeGeometry`, `BufferGeometry`, lattice positions, particle positions) are `useMemo`'d — built once.
- Deterministic pseudo-random for lattice + particles — stable across renders, no flicker.
- No post-processing pass (no bloom, SSAO, FXAA). Look achieved via emissive materials + blurred DOM glow behind the canvas.
- The hero never mounts the R3F canvas on viewports below 768px (`useMediaQuery`) — `SculptureFallback` renders instead.
- The whole module is loaded via `next/dynamic` with `ssr: false` so the Three.js bundle is split out of the main chunk.

## Reduced motion

`useReducedMotion()` is read in every animating component. When `true`:

- All `useFrame` delta-driven rotations multiply by `0` (`s = reduced ? 0 : 1`).
- The fluid hemisphere skips its sine bob.
- The root group skips its sine bob.
- The Φ anchor still breathes (opacity oscillation only — within reduced-motion budget for non-essential indicators).
- The sculpture is still visible and structurally identical; it simply does not rotate.

## SVG fallback

File: `features/hero/SculptureFallback.tsx`

The fallback mirrors the 3D composition in 2D:

- **Left** — hexagonal engineering form with cross-axes and lattice corner cubes.
- **Center** — circle (Φ loop) + vertical line (Φ stem) + end-caps + central origin core.
- **Right** — sweeping curve composition with crossed ellipses and a constellation of particle nodes.
- **Decorative labels** — `STRUCTURE · Φ — CONSTANT · FLUIDITY` along the bottom edge.

The fallback is used:

1. Directly on mobile (`useMediaQuery("(min-width: 768px)")` is false in `Hero.tsx`).
2. As the `next/dynamic` loading state, before the R3F bundle resolves on desktop.

The user always sees a coherent brand artifact immediately.

## What we deliberately did NOT build

- No anatomical brain (forbidden by brief).
- No neural-network particles.
- No vortex / nebula / cyberpunk tunnel.
- No physics simulation.
- No GLB/GLTF model — the geometry is procedural and changes via TypeScript values, not via re-exporting from Blender.
- No imported HDRI other than drei's bundled warehouse preset (kept light).
- No symmetry. The two hemispheres are intentionally different; balance is *not* the goal.
