"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Scan, FileCheck2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SECURITY_CAPABILITIES } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ButtonLink } from "@/components/ui/Button";

const SECURITY_ICONS = [ShieldCheck, Lock, Scan, FileCheck2] as const;

function SecurityDiagram() {
  return (
    <div
      className="relative aspect-square w-full max-w-[520px] select-none"
      role="img"
      aria-label="Architectural security diagram"
    >
      <div
        className="pointer-events-none absolute inset-[-10%] rounded-full bg-accent/[0.06] blur-3xl"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 500 500"
        className="relative h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sec-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#39E6FF" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="sec-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer perimeter */}
        <polygon
          points="250,40 430,140 430,360 250,460 70,360 70,140"
          fill="none"
          stroke="url(#sec-stroke)"
          strokeWidth="1.25"
        />

        {/* Mid layer */}
        <polygon
          points="250,90 390,165 390,335 250,410 110,335 110,165"
          fill="none"
          stroke="#00D9FF"
          strokeOpacity="0.35"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Inner trust zone */}
        <polygon
          points="250,160 340,210 340,290 250,340 160,290 160,210"
          fill="url(#sec-core)"
          stroke="#00D9FF"
          strokeOpacity="0.7"
          strokeWidth="1.25"
        />

        {/* Cross axes */}
        <line x1="250" y1="40" x2="250" y2="460" stroke="#FFFFFF" strokeOpacity="0.05" />
        <line x1="70" y1="140" x2="430" y2="360" stroke="#FFFFFF" strokeOpacity="0.05" />
        <line x1="430" y1="140" x2="70" y2="360" stroke="#FFFFFF" strokeOpacity="0.05" />

        {/* Trust nodes */}
        {[
          [250, 40],
          [430, 140],
          [430, 360],
          [250, 460],
          [70, 360],
          [70, 140],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="6" fill="#060B14" stroke="#00D9FF" strokeOpacity="0.7" />
            <circle cx={x} cy={y} r="2" fill="#39E6FF" />
          </g>
        ))}

        {/* Center node */}
        <circle cx="250" cy="250" r="10" fill="#060B14" stroke="#00D9FF" />
        <circle cx="250" cy="250" r="4" fill="#39E6FF" />

        {/* Labels */}
        <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#94A3B8" letterSpacing="2">
          <text x="250" y="22" textAnchor="middle">PERIMETER</text>
          <text x="250" y="487" textAnchor="middle">EDGE</text>
          <text x="250" y="252" textAnchor="middle" fill="#F8FAFC">CORE</text>
        </g>
      </svg>

      {/* Scan line */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-screen"
        aria-hidden="true"
      >
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-scan-line" />
      </div>
    </div>
  );
}

export function Security() {
  return (
    <section
      id="security"
      className="relative overflow-hidden border-t border-line bg-ink-800 py-28 md:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        aria-hidden="true"
      >
        <div className="absolute inset-0 grid-backdrop" />
      </div>

      <div className="shell grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7 flex flex-col gap-10">
          <SectionHeader
            eyebrow="04 — Cybersecurity"
            title={
              <>
                Security is{" "}
                <span className="text-text-muted">
                  an architecture decision, not a checkbox.
                </span>
              </>
            }
            description="We think in trust zones, threat models and blast radius — long before we write production code. Our security work is technical, sober, and quietly relentless."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2"
          >
            {SECURITY_CAPABILITIES.map((capability, index) => {
              const Icon = SECURITY_ICONS[index] ?? ShieldCheck;
              return (
                <motion.article
                  key={capability.title}
                  variants={fadeUp}
                  className="flex flex-col gap-3 bg-ink-700/70 p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-line bg-white/[0.02] text-accent">
                      <Icon size={14} strokeWidth={1.75} />
                    </span>
                    <h3 className="font-display text-base text-text-primary">
                      {capability.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {capability.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>

          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href="#contact" variant="outline" size="md" withArrow>
              Request a security review
            </ButtonLink>
            <span className="text-xs text-text-muted">
              Engagements scoped to your actual risk model — no theater.
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 flex items-center justify-center">
          <SecurityDiagram />
        </div>
      </div>
    </section>
  );
}
