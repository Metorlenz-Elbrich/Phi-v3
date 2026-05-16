"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROJECTS } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";

/* -------------------------------------------------------------------------- */
/*                      Per-project bespoke editorial visuals                 */
/* -------------------------------------------------------------------------- */

function VeridiaVisual() {
  // Institutional investor portal — multi-tenant trust zones
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="ver-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Tenant rows */}
      {[60, 110, 160, 210].map((y, i) => (
        <g key={y}>
          <rect
            x="32"
            y={y - 18}
            width="416"
            height="36"
            rx="6"
            fill="url(#ver-grad)"
            stroke="#00D9FF"
            strokeOpacity={i === 1 ? 0.7 : 0.25}
            strokeWidth="1"
          />
          <circle cx="52" cy={y} r="3" fill="#39E6FF" />
          <text
            x="68"
            y={y + 4}
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            fill="#94A3B8"
            letterSpacing="2"
          >
            TENANT · {String(i + 1).padStart(2, "0")}
          </text>
          <text
            x="420"
            y={y + 4}
            textAnchor="end"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            fill={i === 1 ? "#00D9FF" : "#64748B"}
          >
            {["AUDIT ✓", "ACTIVE", "AUDIT ✓", "AUDIT ✓"][i]}
          </text>
        </g>
      ))}

      {/* Trust boundary */}
      <rect
        x="20"
        y="36"
        width="440"
        height="200"
        rx="10"
        fill="none"
        stroke="#00D9FF"
        strokeOpacity="0.3"
        strokeDasharray="3 4"
      />
      <text
        x="240"
        y="262"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="10"
        fill="#00D9FF"
        letterSpacing="3"
      >
        Φ · TRUST PERIMETER
      </text>
    </svg>
  );
}

function AlturaVisual() {
  // Creative production OS — design token grid
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true">
      {/* 6x4 token grid */}
      <g>
        {Array.from({ length: 6 }).map((_, col) =>
          Array.from({ length: 4 }).map((__, row) => {
            const x = 40 + col * 70;
            const y = 40 + row * 55;
            const isAccent = (col + row) % 5 === 0;
            const isCore = col === 2 && row === 1;
            return (
              <g key={`${col}-${row}`}>
                <rect
                  x={x}
                  y={y}
                  width="56"
                  height="40"
                  rx="6"
                  fill={isCore ? "#00D9FF" : isAccent ? "#0F1724" : "transparent"}
                  fillOpacity={isCore ? 0.12 : 1}
                  stroke="#00D9FF"
                  strokeOpacity={isCore ? 0.7 : isAccent ? 0.45 : 0.18}
                  strokeWidth="1"
                />
                {isCore ? (
                  <text
                    x={x + 28}
                    y={y + 25}
                    textAnchor="middle"
                    fontFamily="Space Grotesk, sans-serif"
                    fontSize="14"
                    fontWeight="500"
                    fill="#39E6FF"
                  >
                    Φ
                  </text>
                ) : null}
              </g>
            );
          })
        )}
      </g>

      <text
        x="240"
        y="285"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="10"
        fill="#94A3B8"
        letterSpacing="3"
      >
        TOKENS · COMPONENTS · MOTION · TYPE
      </text>
    </svg>
  );
}

function NorthwindVisual() {
  // Mobility super-app — distributed node graph
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="nw-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Core glow */}
      <circle cx="240" cy="150" r="60" fill="url(#nw-core)" />

      {/* Connections */}
      {[
        [80, 80], [380, 80], [80, 220], [380, 220],
        [180, 60], [310, 60], [180, 240], [310, 240],
        [40, 150], [440, 150],
      ].map(([x, y]) => (
        <line
          key={`${x}-${y}`}
          x1="240"
          y1="150"
          x2={x}
          y2={y}
          stroke="#00D9FF"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
      ))}

      {/* Nodes */}
      {[
        [80, 80, "NORTH"],
        [380, 80, "EAST"],
        [80, 220, "WEST"],
        [380, 220, "SOUTH"],
        [180, 60, ""],
        [310, 60, ""],
        [180, 240, ""],
        [310, 240, ""],
        [40, 150, ""],
        [440, 150, ""],
      ].map(([x, y, label]) => (
        <g key={`${x}-${y}`}>
          <circle
            cx={x as number}
            cy={y as number}
            r={label ? 7 : 4}
            fill="#060B14"
            stroke="#00D9FF"
            strokeOpacity="0.7"
          />
          <circle cx={x as number} cy={y as number} r="2" fill="#39E6FF" />
          {label ? (
            <text
              x={x as number}
              y={(y as number) + 22}
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9"
              fill="#94A3B8"
              letterSpacing="2"
            >
              {label as string}
            </text>
          ) : null}
        </g>
      ))}

      {/* Core */}
      <circle cx="240" cy="150" r="14" fill="#060B14" stroke="#00D9FF" strokeOpacity="0.8" />
      <text
        x="240"
        y="156"
        textAnchor="middle"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="14"
        fontWeight="500"
        fill="#39E6FF"
      >
        Φ
      </text>
    </svg>
  );
}

const PROJECT_VISUALS = [VeridiaVisual, AlturaVisual, NorthwindVisual] as const;

function ProjectStage({ index }: { index: number }) {
  const Visual = PROJECT_VISUALS[index % PROJECT_VISUALS.length]!;
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-gradient-to-br from-ink-700 via-ink-600 to-ink-800">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
      >
        <div className="absolute inset-0 grid-backdrop" />
      </div>
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="absolute inset-0 p-6">
        <Visual />
      </div>

      <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span>Case · {String(index + 1).padStart(2, "0")}</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Section                                   */
/* -------------------------------------------------------------------------- */

export function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-line py-28 md:py-36"
    >
      <div className="shell flex flex-col gap-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrowIndex="05"
            eyebrowLabel="Case studies"
            title={
              <>
                Selected work,{" "}
                <span className="text-text-muted">in confidence.</span>
              </>
            }
            description="Most of our engagements ship under NDA. The cases below are conceptual presentations of real engagement shapes — patterns we've shipped, with names abstracted to protect the people we serve."
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted tabular-nums">
            03 selected
            <span className="mx-2 text-text-muted/50">·</span>
            All conceptual
          </span>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="flex flex-col gap-px overflow-hidden rounded-2xl border border-line bg-line"
        >
          {PROJECTS.map((project, index) => {
            const reversed = index % 2 === 1;
            return (
              <motion.article
                key={project.id}
                variants={fadeUp}
                className="group relative grid grid-cols-1 gap-8 bg-ink-700/60 p-8 transition-colors duration-500 hover:bg-ink-600/70 md:grid-cols-12 md:gap-12 md:p-12"
              >
                {/* Massive case number watermark */}
                <div
                  className="pointer-events-none absolute -right-4 -top-8 select-none font-display text-[clamp(8rem,14vw,12rem)] font-light leading-none tabular-nums text-text-primary/[0.03] md:-right-2 md:-top-12"
                  aria-hidden="true"
                >
                  .{String(index + 1).padStart(2, "0")}
                </div>

                <div
                  className={`md:col-span-5 flex flex-col gap-6 ${
                    reversed ? "md:order-2" : ""
                  }`}
                >
                  <header className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent tabular-nums">
                      <span>Case · 0{index + 1}</span>
                      <span className="text-text-muted/40">·</span>
                      <span className="text-text-muted">{project.year}</span>
                    </span>
                    {project.conceptual ? (
                      <span className="rounded-full border border-line bg-white/[0.02] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                        Conceptual
                      </span>
                    ) : null}
                  </header>

                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
                      {project.client}
                    </span>
                    <h3 className="font-display text-3xl text-text-primary tracking-tight md:text-[2.25rem] md:leading-[1.05]">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-base leading-relaxed text-text-muted">
                    {project.summary}
                  </p>

                  <div className="mt-2 flex flex-col gap-3 border-t border-line pt-5 text-xs text-text-muted">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono uppercase tracking-[0.18em]">
                        Discipline
                      </span>
                      <span className="text-right text-text-primary">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="rounded-full border border-line bg-white/[0.02] px-2.5 py-1 text-[11px] text-text-muted/90"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`md:col-span-7 flex items-center ${
                    reversed ? "md:order-1" : ""
                  }`}
                >
                  <ProjectStage index={index} />
                </div>

                <ArrowUpRight
                  className="absolute right-8 top-8 text-text-muted/40 transition-all duration-300 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  size={18}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Inquiry footer */}
        <div className="flex items-center gap-4 text-xs text-text-muted">
          <div className="hairline flex-1" />
          <span className="font-mono uppercase tracking-[0.22em]">
            Want a closer look? Speak under NDA at{" "}
            <a
              href="mailto:studio@phibrain.io?subject=Case%20study%20conversation"
              className="text-accent transition-colors hover:text-accent-soft"
            >
              studio@phibrain.io
            </a>
          </span>
          <div className="hairline flex-1" />
        </div>
      </div>
    </section>
  );
}
