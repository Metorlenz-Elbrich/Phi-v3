"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Scan, FileCheck2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SECURITY_CAPABILITIES } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ButtonLink } from "@/components/ui/Button";

const SECURITY_ICONS = [ShieldCheck, Lock, Scan, FileCheck2] as const;

const DOCTRINE = [
  "We don't sell badges. We sell posture.",
  "We model threats before we model UX.",
  "We assume breach. We design containment.",
] as const;

function SecurityDiagram() {
  return (
    <div
      className="relative aspect-square w-full max-w-[560px] select-none"
      role="img"
      aria-label="Architectural security diagram — perimeter, edge, core"
    >
      <div
        className="pointer-events-none absolute inset-[-10%] rounded-full bg-accent/[0.06] blur-3xl"
        aria-hidden="true"
      />

      <svg viewBox="0 0 500 500" className="relative h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="sec-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#39E6FF" stopOpacity="0.22" />
          </linearGradient>
          <radialGradient id="sec-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer perimeter (hexagon) */}
        <polygon
          points="250,32 444,140 444,360 250,468 56,360 56,140"
          fill="none"
          stroke="url(#sec-stroke)"
          strokeWidth="1.3"
        />

        {/* Mid layer */}
        <polygon
          points="250,86 396,164 396,336 250,414 104,336 104,164"
          fill="none"
          stroke="#00D9FF"
          strokeOpacity="0.4"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Inner trust zone */}
        <polygon
          points="250,150 344,202 344,298 250,350 156,298 156,202"
          fill="url(#sec-core)"
          stroke="#00D9FF"
          strokeOpacity="0.75"
          strokeWidth="1.3"
        />

        {/* Cross axes */}
        <line x1="250" y1="32" x2="250" y2="468" stroke="#FFFFFF" strokeOpacity="0.05" />
        <line x1="56" y1="140" x2="444" y2="360" stroke="#FFFFFF" strokeOpacity="0.05" />
        <line x1="444" y1="140" x2="56" y2="360" stroke="#FFFFFF" strokeOpacity="0.05" />

        {/* Concentric rings to suggest depth */}
        <circle cx="250" cy="250" r="60" fill="none" stroke="#00D9FF" strokeOpacity="0.18" />
        <circle cx="250" cy="250" r="90" fill="none" stroke="#00D9FF" strokeOpacity="0.12" />

        {/* Trust nodes */}
        {[
          [250, 32],
          [444, 140],
          [444, 360],
          [250, 468],
          [56, 360],
          [56, 140],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="6" fill="#060B14" stroke="#00D9FF" strokeOpacity="0.75" />
            <circle cx={x} cy={y} r="2" fill="#39E6FF" />
          </g>
        ))}

        {/* Center node — Φ */}
        <circle cx="250" cy="250" r="14" fill="#060B14" stroke="#00D9FF" strokeOpacity="0.8" />
        <text
          x="250"
          y="256"
          textAnchor="middle"
          fontFamily="Space Grotesk, sans-serif"
          fontSize="14"
          fontWeight="500"
          fill="#39E6FF"
        >
          Φ
        </text>

        {/* Labels */}
        <g
          fontFamily="JetBrains Mono, monospace"
          fontSize="9"
          fill="#94A3B8"
          letterSpacing="2"
          opacity="0.7"
        >
          <text x="250" y="20" textAnchor="middle">PERIMETER</text>
          <text x="250" y="488" textAnchor="middle">EDGE</text>
          <text x="38" y="252" textAnchor="end" fill="#00D9FF">TRUST</text>
          <text x="462" y="252" textAnchor="start" fill="#00D9FF">ZONE</text>
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

      <div className="shell flex flex-col gap-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col gap-10">
            <SectionHeader
              eyebrowIndex="04"
              eyebrowLabel="Cybersecurity"
              title={
                <>
                  Security is{" "}
                  <span className="text-text-muted">
                    an architecture decision, not a checkbox.
                  </span>
                </>
              }
              description="We think in trust zones, threat models and blast radius — long before we write production code. Sober. Technical. Quietly relentless."
            />

            {/* Doctrine — three short axioms */}
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="flex flex-col gap-3 border-l border-accent/40 pl-5"
            >
              {DOCTRINE.map((line, i) => (
                <motion.li
                  key={line}
                  variants={fadeUp}
                  className="flex items-baseline gap-3 text-base text-text-primary/90"
                >
                  <span className="font-mono text-[10px] tabular-nums uppercase tracking-[0.22em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display tracking-tight">{line}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <aside className="lg:col-span-5 flex flex-col gap-6">
            {/* Posture meta block */}
            <div className="flex flex-col gap-4 rounded-2xl border border-line bg-ink-700/40 p-6 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
                  Defensive posture
                </span>
                <span className="font-mono text-[10px] tracking-[0.22em] text-accent/70 tabular-nums">
                  04 · principles
                </span>
              </div>
              <ul className="flex flex-col gap-3 text-sm">
                {[
                  { k: "Engagement", v: "Architecture-led" },
                  { k: "Model", v: "Assume breach" },
                  { k: "Reporting", v: "Prioritized · Actionable" },
                  { k: "Theater", v: "None" },
                ].map((row) => (
                  <li
                    key={row.k}
                    className="flex items-center justify-between border-b border-line pb-2 last:border-0 last:pb-0"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                      {row.k}
                    </span>
                    <span className="text-text-primary/90">{row.v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7 flex flex-col gap-8">
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
                    className="group relative flex flex-col gap-3 bg-ink-700/70 p-6 transition-colors duration-500 hover:bg-ink-600/70"
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
              <ButtonLink
                href="mailto:studio@phibrain.io?subject=Security%20review%20request"
                variant="outline"
                size="md"
                withArrow
              >
                Request a security review
              </ButtonLink>
              <span className="text-xs text-text-muted">
                Engagements scoped to your real risk model — never sold by FUD.
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <SecurityDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
