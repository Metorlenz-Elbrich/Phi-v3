"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/* -------------------------------------------------------------------------- */
/*                                Brand colors                                */
/* -------------------------------------------------------------------------- */

const ACCENT = new THREE.Color("#00D9FF");
const ACCENT_SOFT = new THREE.Color("#39E6FF");
const INK = new THREE.Color("#060B14");

/* -------------------------------------------------------------------------- */
/*                  LEFT — Engineering hemisphere (structure)                 */
/* -------------------------------------------------------------------------- */

function EngineeringHemisphere() {
  const groupRef = useRef<THREE.Group>(null);
  const reduced = useReducedMotion();

  // Sparse 3D lattice — rigid cubic ordering, slightly culled for visual rhythm.
  const lattice = useMemo(() => {
    const positions: [number, number, number][] = [];
    // Deterministic pseudo-random so the layout is stable across renders.
    let seed = 17;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    const range = 1.0;
    const step = 0.42;
    for (let x = -range; x <= range + 0.001; x += step) {
      for (let y = -range; y <= range + 0.001; y += step) {
        for (let z = -range; z <= range + 0.001; z += step) {
          if (rand() > 0.42) continue;
          positions.push([x, y, z]);
        }
      }
    }
    return positions;
  }, []);

  // Focal wireframe icosahedron — the "structured intelligence" mark.
  const icoEdges = useMemo(() => {
    const base = new THREE.IcosahedronGeometry(0.95, 0);
    return new THREE.EdgesGeometry(base, 1);
  }, []);

  // Inner detail icosahedron
  const innerIcoEdges = useMemo(() => {
    const base = new THREE.IcosahedronGeometry(0.55, 1);
    return new THREE.EdgesGeometry(base, 1);
  }, []);

  // Connection rays from origin to a few lattice points (engineering veins).
  const veinsGeom = useMemo(() => {
    const verts: number[] = [];
    lattice.slice(0, 8).forEach(([x, y, z]) => {
      verts.push(0, 0, 0, x, y, z);
    });
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    return geom;
  }, [lattice]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const s = reduced ? 0 : 1;
    groupRef.current.rotation.y += delta * 0.06 * s;
    groupRef.current.rotation.x += delta * 0.018 * s;
  });

  return (
    <group ref={groupRef} position={[-1.7, 0, 0]}>
      <lineSegments geometry={icoEdges}>
        <lineBasicMaterial
          color={ACCENT}
          transparent
          opacity={0.78}
          toneMapped={false}
        />
      </lineSegments>

      <lineSegments geometry={innerIcoEdges}>
        <lineBasicMaterial
          color={ACCENT}
          transparent
          opacity={0.32}
          toneMapped={false}
        />
      </lineSegments>

      <lineSegments geometry={veinsGeom}>
        <lineBasicMaterial
          color={ACCENT}
          transparent
          opacity={0.16}
          toneMapped={false}
        />
      </lineSegments>

      {lattice.map((p, i) => (
        <mesh key={i} position={p}>
          <boxGeometry args={[0.085, 0.085, 0.085]} />
          <meshBasicMaterial
            color={ACCENT_SOFT}
            wireframe
            transparent
            opacity={0.55}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/* -------------------------------------------------------------------------- */
/*                     CENTER — Φ anchor (brand constant)                     */
/* -------------------------------------------------------------------------- */

function PhiAnchor() {
  const ringRef = useRef<THREE.Mesh>(null);
  const rodMatRef = useRef<THREE.MeshBasicMaterial>(null);
  const haloRef = useRef<THREE.Mesh>(null);
  const reduced = useReducedMotion();

  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime;

    if (rodMatRef.current) {
      // Subtle breathing pulse on the rod.
      rodMatRef.current.opacity = 0.72 + Math.sin(t * 0.9) * 0.18;
    }

    if (ringRef.current && !reduced) {
      ringRef.current.rotation.y += delta * 0.05;
    }

    if (haloRef.current) {
      const s = 1 + Math.sin(t * 0.6) * 0.04;
      haloRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group>
      {/* Vertical rod — Φ stem */}
      <mesh>
        <cylinderGeometry args={[0.02, 0.02, 2.7, 16]} />
        <meshBasicMaterial
          ref={rodMatRef}
          color={ACCENT_SOFT}
          transparent
          opacity={0.85}
          toneMapped={false}
        />
      </mesh>

      {/* Horizontal ring — Φ loop */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.72, 0.014, 16, 96]} />
        <meshBasicMaterial
          color={ACCENT}
          transparent
          opacity={0.85}
          toneMapped={false}
        />
      </mesh>

      {/* Halo */}
      <mesh ref={haloRef}>
        <ringGeometry args={[0.74, 0.80, 96]} />
        <meshBasicMaterial
          color={ACCENT}
          transparent
          opacity={0.18}
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </mesh>

      {/* End caps */}
      <mesh position={[0, 1.35, 0]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color={ACCENT_SOFT} toneMapped={false} />
      </mesh>
      <mesh position={[0, -1.35, 0]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color={ACCENT_SOFT} toneMapped={false} />
      </mesh>

      {/* Origin core */}
      <mesh>
        <sphereGeometry args={[0.07, 24, 24]} />
        <meshStandardMaterial
          color={INK}
          metalness={0.9}
          roughness={0.25}
          emissive={ACCENT}
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

/* -------------------------------------------------------------------------- */
/*                      RIGHT — Fluid hemisphere (design)                     */
/* -------------------------------------------------------------------------- */

function FluidHemisphere() {
  const groupRef = useRef<THREE.Group>(null);
  const knotRef = useRef<THREE.Mesh>(null);
  const reduced = useReducedMotion();

  // Sweeping curve — the fluid counterpart to engineering's lattice.
  const curveTube = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segs = 14;
    for (let i = 0; i <= segs; i++) {
      const t = i / segs;
      const a = t * Math.PI * 2.4;
      pts.push(
        new THREE.Vector3(
          Math.cos(a) * 1.05,
          Math.sin(a * 1.4) * 0.7,
          Math.sin(a) * 1.05
        )
      );
    }
    const curve = new THREE.CatmullRomCurve3(pts, false, "catmullrom", 0.55);
    return new THREE.TubeGeometry(curve, 220, 0.014, 12, false);
  }, []);

  // Particle constellation orbiting around the form.
  const particles = useMemo(() => {
    const out: [number, number, number][] = [];
    const count = 22;
    let seed = 73;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    for (let i = 0; i < count; i++) {
      const phi = rand() * Math.PI * 2;
      const r = 1.15 + rand() * 0.45;
      const y = (rand() - 0.5) * 1.4;
      out.push([Math.cos(phi) * r, y, Math.sin(phi) * r]);
    }
    return out;
  }, []);

  useFrame(({ clock }, delta) => {
    if (!groupRef.current) return;
    const s = reduced ? 0 : 1;
    groupRef.current.rotation.y -= delta * 0.045 * s;
    if (knotRef.current) {
      knotRef.current.rotation.x += delta * 0.06 * s;
      knotRef.current.rotation.z += delta * 0.035 * s;
    }
    if (!reduced) {
      groupRef.current.position.y =
        Math.sin(clock.elapsedTime * 0.7) * 0.06;
    }
  });

  return (
    <group ref={groupRef} position={[1.7, 0, 0]}>
      {/* Fluid torus knot — the sculpted creative form */}
      <mesh ref={knotRef}>
        <torusKnotGeometry args={[0.72, 0.055, 256, 18, 2, 3]} />
        <meshStandardMaterial
          color={INK}
          metalness={0.7}
          roughness={0.22}
          emissive={ACCENT}
          emissiveIntensity={0.18}
        />
      </mesh>

      {/* Curve ribbon weaving around */}
      <mesh geometry={curveTube}>
        <meshBasicMaterial
          color={ACCENT_SOFT}
          transparent
          opacity={0.55}
          toneMapped={false}
        />
      </mesh>

      {/* Secondary thin ring at an angle */}
      <mesh rotation={[Math.PI / 2.4, 0.3, 0]}>
        <torusGeometry args={[1.25, 0.004, 8, 128]} />
        <meshBasicMaterial
          color={ACCENT}
          transparent
          opacity={0.35}
          toneMapped={false}
        />
      </mesh>

      {/* Constellation */}
      {particles.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.022, 8, 8]} />
          <meshBasicMaterial color={ACCENT_SOFT} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Scene root                                */
/* -------------------------------------------------------------------------- */

function Scene() {
  const root = useRef<THREE.Group>(null);
  const reduced = useReducedMotion();

  useFrame(({ pointer, clock }) => {
    if (!root.current) return;
    const targetX = pointer.y * 0.16;
    const targetY = pointer.x * 0.28;
    root.current.rotation.x += (targetX - root.current.rotation.x) * 0.04;
    root.current.rotation.y += (targetY - root.current.rotation.y) * 0.04;
    if (!reduced) {
      root.current.position.y = Math.sin(clock.elapsedTime * 0.45) * 0.06;
    }
  });

  return (
    <>
      <ambientLight intensity={0.32} />
      <directionalLight position={[3.5, 4, 5]} intensity={1.1} color={ACCENT_SOFT} />
      <directionalLight position={[-4, -1.5, -3]} intensity={0.55} color={ACCENT} />
      <pointLight position={[0, 0, 0.5]} intensity={1.6} color={ACCENT} distance={3} decay={2} />

      <group ref={root}>
        <EngineeringHemisphere />
        <PhiAnchor />
        <FluidHemisphere />
      </group>

      <Suspense fallback={null}>
        <Environment preset="warehouse" environmentIntensity={0.32} />
      </Suspense>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Wrapper                                  */
/* -------------------------------------------------------------------------- */

export function Sculpture() {
  return (
    <div className="relative aspect-square w-full max-w-[680px]">
      <div
        className="pointer-events-none absolute inset-[-12%] bg-radial-spot blur-3xl"
        aria-hidden="true"
      />
      <Canvas
        camera={{ position: [0, 0.25, 5.2], fov: 42 }}
        dpr={[1, 1.6]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>

      {/* Subtle scan line */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-screen"
        aria-hidden="true"
      >
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-scan-line" />
      </div>
    </div>
  );
}

export default Sculpture;
