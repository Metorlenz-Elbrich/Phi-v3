"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function SculptureFallback() {
  const reduced = useReducedMotion();
  const animate = !reduced;

  return (
    <div className="relative aspect-square w-full max-w-[520px]">
      <div className="absolute inset-0 rounded-full bg-radial-spot blur-2xl" aria-hidden="true" />

      <motion.svg
        viewBox="0 0 600 600"
        role="img"
        aria-label="Abstract engineering sculpture"
        className="relative h-full w-full"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#39E6FF" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#00D9FF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#39E6FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Concentric structural rings */}
        {[260, 220, 180, 140].map((r, i) => (
          <motion.circle
            key={r}
            cx="300"
            cy="300"
            r={r}
            fill="none"
            stroke="url(#edge)"
            strokeOpacity={0.4 - i * 0.07}
            strokeWidth="1"
            animate={animate ? { rotate: i % 2 === 0 ? 360 : -360 } : undefined}
            transition={{
              duration: 60 + i * 12,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformOrigin: "300px 300px" }}
          />
        ))}

        {/* Polygonal structural shape (icosahedron projection) */}
        <motion.g
          style={{ transformOrigin: "300px 300px" }}
          animate={animate ? { rotate: 360 } : undefined}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <polygon
            points="300,140 440,220 440,380 300,460 160,380 160,220"
            fill="none"
            stroke="#00D9FF"
            strokeOpacity="0.7"
            strokeWidth="1.25"
          />
          <polygon
            points="300,180 410,235 410,365 300,420 190,365 190,235"
            fill="none"
            stroke="#00D9FF"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
          <line x1="300" y1="140" x2="300" y2="460" stroke="#00D9FF" strokeOpacity="0.3" />
          <line x1="160" y1="220" x2="440" y2="380" stroke="#00D9FF" strokeOpacity="0.3" />
          <line x1="440" y1="220" x2="160" y2="380" stroke="#00D9FF" strokeOpacity="0.3" />
        </motion.g>

        {/* Core glow */}
        <circle cx="300" cy="300" r="120" fill="url(#core)" />

        {/* Floating nodes */}
        {[
          { x: 300, y: 140 },
          { x: 440, y: 220 },
          { x: 440, y: 380 },
          { x: 300, y: 460 },
          { x: 160, y: 380 },
          { x: 160, y: 220 },
        ].map((p) => (
          <motion.circle
            key={`${p.x}-${p.y}`}
            cx={p.x}
            cy={p.y}
            r="4"
            fill="#39E6FF"
            animate={animate ? { opacity: [0.6, 1, 0.6] } : undefined}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </motion.svg>
    </div>
  );
}
