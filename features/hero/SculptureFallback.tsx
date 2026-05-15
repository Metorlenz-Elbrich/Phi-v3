"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function SculptureFallback() {
  const reduced = useReducedMotion();
  const animate = !reduced;

  return (
    <div className="relative aspect-square w-full max-w-[560px]">
      <div
        className="pointer-events-none absolute inset-[-10%] rounded-full bg-radial-spot blur-3xl"
        aria-hidden="true"
      />

      <motion.svg
        viewBox="0 0 720 480"
        role="img"
        aria-label="PhiBrain sculpture — engineering structure, Φ anchor, fluid form"
        className="relative h-full w-full"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <radialGradient id="phi-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#39E6FF" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#00D9FF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="phi-edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#39E6FF" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* LEFT — engineering structure */}
        <motion.g
          style={{ transformOrigin: "180px 240px" }}
          animate={animate ? { rotate: 360 } : undefined}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <polygon
            points="180,120 270,170 270,310 180,360 90,310 90,170"
            fill="none"
            stroke="#00D9FF"
            strokeOpacity="0.75"
            strokeWidth="1.1"
          />
          <polygon
            points="180,155 245,190 245,290 180,325 115,290 115,190"
            fill="none"
            stroke="#00D9FF"
            strokeOpacity="0.35"
            strokeWidth="0.9"
          />
          <line x1="180" y1="120" x2="180" y2="360" stroke="#00D9FF" strokeOpacity="0.3" />
          <line x1="90" y1="170" x2="270" y2="310" stroke="#00D9FF" strokeOpacity="0.3" />
          <line x1="270" y1="170" x2="90" y2="310" stroke="#00D9FF" strokeOpacity="0.3" />

          {/* Lattice cubes */}
          <g fill="none" stroke="#39E6FF" strokeOpacity="0.55" strokeWidth="0.8">
            <rect x="60" y="100" width="14" height="14" />
            <rect x="270" y="100" width="14" height="14" />
            <rect x="60" y="370" width="14" height="14" />
            <rect x="270" y="370" width="14" height="14" />
            <rect x="160" y="80" width="10" height="10" />
            <rect x="190" y="80" width="10" height="10" />
            <rect x="160" y="395" width="10" height="10" />
            <rect x="190" y="395" width="10" height="10" />
          </g>
        </motion.g>

        {/* CENTER — Φ anchor */}
        <g>
          {/* Halo */}
          <circle cx="360" cy="240" r="62" fill="url(#phi-core)" />

          {/* Ring (loop) */}
          <motion.circle
            cx="360"
            cy="240"
            r="48"
            fill="none"
            stroke="#00D9FF"
            strokeOpacity="0.9"
            strokeWidth="1.3"
            style={{ transformOrigin: "360px 240px" }}
            animate={animate ? { rotate: 360 } : undefined}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <circle
            cx="360"
            cy="240"
            r="52"
            fill="none"
            stroke="#00D9FF"
            strokeOpacity="0.3"
            strokeWidth="0.9"
          />

          {/* Vertical stem */}
          <motion.line
            x1="360"
            y1="140"
            x2="360"
            y2="340"
            stroke="#39E6FF"
            strokeWidth="1.5"
            animate={animate ? { opacity: [0.65, 1, 0.65] } : undefined}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* End caps */}
          <circle cx="360" cy="140" r="4" fill="#39E6FF" />
          <circle cx="360" cy="340" r="4" fill="#39E6FF" />

          {/* Origin core */}
          <circle cx="360" cy="240" r="5" fill="#060B14" stroke="#39E6FF" strokeWidth="1" />
          <circle cx="360" cy="240" r="2" fill="#39E6FF" />
        </g>

        {/* RIGHT — fluid form */}
        <motion.g
          style={{ transformOrigin: "540px 240px" }}
          animate={animate ? { rotate: -360 } : undefined}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {/* Sweeping curve */}
          <path
            d="M 460 240 C 460 140, 620 140, 620 240 C 620 340, 460 340, 460 240"
            fill="none"
            stroke="url(#phi-edge)"
            strokeWidth="1.2"
          />
          <path
            d="M 480 240 C 480 170, 600 170, 600 240 C 600 310, 480 310, 480 240"
            fill="none"
            stroke="#00D9FF"
            strokeOpacity="0.5"
            strokeWidth="1"
          />
          <ellipse
            cx="540"
            cy="240"
            rx="105"
            ry="38"
            fill="none"
            stroke="#39E6FF"
            strokeOpacity="0.35"
            strokeWidth="0.9"
            transform="rotate(20 540 240)"
          />
          <ellipse
            cx="540"
            cy="240"
            rx="95"
            ry="32"
            fill="none"
            stroke="#39E6FF"
            strokeOpacity="0.25"
            strokeWidth="0.7"
            transform="rotate(-25 540 240)"
          />

          {/* Constellation particles */}
          {[
            [460, 200], [620, 200], [460, 280], [620, 280],
            [540, 160], [540, 320], [490, 165], [590, 165],
            [490, 315], [590, 315],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="#39E6FF" />
          ))}
        </motion.g>

        {/* Decorative labels */}
        <g
          fontFamily="JetBrains Mono, monospace"
          fontSize="9"
          fill="#94A3B8"
          opacity="0.55"
          letterSpacing="2"
        >
          <text x="180" y="445" textAnchor="middle">STRUCTURE</text>
          <text x="360" y="445" textAnchor="middle" fill="#00D9FF">Φ — CONSTANT</text>
          <text x="540" y="445" textAnchor="middle">FLUIDITY</text>
        </g>
      </motion.svg>
    </div>
  );
}
