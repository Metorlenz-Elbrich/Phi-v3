"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/* -------------------------------------------------------------------------- */
/*                              Sculpture Geometry                            */
/* -------------------------------------------------------------------------- */

const ACCENT = new THREE.Color("#00D9FF");
const ACCENT_SOFT = new THREE.Color("#39E6FF");
const INK = new THREE.Color("#060B14");

function CoreShell() {
  const ref = useRef<THREE.Mesh>(null);
  const reduced = useReducedMotion();

  useFrame(({ pointer, clock }, delta) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    const targetX = pointer.y * 0.25 + Math.sin(t * 0.35) * 0.08;
    const targetY = pointer.x * 0.4 + t * (reduced ? 0 : 0.06);
    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.04;
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.04;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={INK}
        metalness={0.85}
        roughness={0.28}
        emissive={ACCENT}
        emissiveIntensity={0.04}
      />
    </mesh>
  );
}

function WireShell({ radius, detail = 1, opacity = 0.5 }: { radius: number; detail?: number; opacity?: number }) {
  const ref = useRef<THREE.LineSegments>(null);
  const reduced = useReducedMotion();

  const geom = useMemo(() => {
    const base = new THREE.IcosahedronGeometry(radius, detail);
    return new THREE.EdgesGeometry(base, 1);
  }, [radius, detail]);

  useFrame(({ pointer }, delta) => {
    if (!ref.current) return;
    const speed = reduced ? 0 : 0.08;
    ref.current.rotation.y += delta * speed;
    ref.current.rotation.x += delta * speed * 0.6;
    const px = pointer.x * 0.3;
    const py = -pointer.y * 0.3;
    ref.current.rotation.z += (px - ref.current.rotation.z) * 0.02;
    ref.current.position.y += (py * 0.2 - ref.current.position.y) * 0.02;
  });

  return (
    <lineSegments ref={ref} geometry={geom}>
      <lineBasicMaterial
        color={ACCENT}
        transparent
        opacity={opacity}
        toneMapped={false}
      />
    </lineSegments>
  );
}

function OrbitRing({ radius, tilt, speed, opacity = 0.35 }: { radius: number; tilt: [number, number, number]; speed: number; opacity?: number }) {
  const ref = useRef<THREE.Group>(null);
  const reduced = useReducedMotion();

  const geom = useMemo(() => new THREE.TorusGeometry(radius, 0.0035, 8, 256), [radius]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * (reduced ? 0 : speed);
  });

  return (
    <group ref={ref} rotation={tilt}>
      <mesh geometry={geom}>
        <meshBasicMaterial color={ACCENT_SOFT} transparent opacity={opacity} toneMapped={false} />
      </mesh>
    </group>
  );
}

function Satellites() {
  const reduced = useReducedMotion();
  const positions = useMemo(() => {
    const pts: [number, number, number][] = [];
    const count = 18;
    for (let i = 0; i < count; i++) {
      const theta = (i / count) * Math.PI * 2;
      const phi = (i / count) * Math.PI;
      const r = 1.85 + Math.sin(i * 1.3) * 0.25;
      pts.push([
        Math.cos(theta) * r,
        Math.cos(phi + 0.6) * 0.9,
        Math.sin(theta) * r,
      ]);
    }
    return pts;
  }, []);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * (reduced ? 0 : 0.04);
  });

  return (
    <group ref={groupRef}>
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <octahedronGeometry args={[0.04, 0]} />
          <meshBasicMaterial color={ACCENT_SOFT} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

function ConnectionLines() {
  const reduced = useReducedMotion();
  const ref = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const pts: number[] = [];
    const count = 8;
    for (let i = 0; i < count; i++) {
      const theta = (i / count) * Math.PI * 2;
      const r = 1.6;
      pts.push(0, 0, 0, Math.cos(theta) * r, Math.sin(theta * 1.7) * 0.6, Math.sin(theta) * r);
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
    return geom;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y -= delta * (reduced ? 0 : 0.05);
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color={ACCENT} transparent opacity={0.18} toneMapped={false} />
    </lineSegments>
  );
}

function Scene() {
  const reduced = useReducedMotion();
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} color={ACCENT_SOFT} />
      <directionalLight position={[-4, -2, -3]} intensity={0.6} color={ACCENT} />
      <pointLight position={[0, 0, 0]} intensity={1.4} color={ACCENT} distance={3} decay={2} />

      <Float
        speed={reduced ? 0 : 0.9}
        rotationIntensity={reduced ? 0 : 0.25}
        floatIntensity={reduced ? 0 : 0.6}
      >
        <group scale={1.15}>
          <CoreShell />
          <WireShell radius={1.18} detail={1} opacity={0.55} />
          <WireShell radius={1.45} detail={0} opacity={0.28} />
          <ConnectionLines />
          <Satellites />
        </group>
      </Float>

      <OrbitRing radius={2.1} tilt={[Math.PI / 2.3, 0.4, 0]} speed={0.06} opacity={0.45} />
      <OrbitRing radius={2.45} tilt={[Math.PI / 2.6, -0.3, 0.4]} speed={-0.04} opacity={0.28} />
      <OrbitRing radius={2.8} tilt={[Math.PI / 2.1, 0.2, -0.3]} speed={0.025} opacity={0.18} />

      <Suspense fallback={null}>
        <Environment preset="warehouse" environmentIntensity={0.35} />
      </Suspense>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Wrapper                                   */
/* -------------------------------------------------------------------------- */

export function Sculpture() {
  return (
    <div className="relative aspect-square w-full max-w-[640px]">
      <div className="pointer-events-none absolute inset-[-10%] bg-radial-spot blur-3xl" aria-hidden="true" />
      <Canvas
        camera={{ position: [0, 0.4, 4.6], fov: 38 }}
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
