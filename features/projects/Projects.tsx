"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROJECTS } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";

const PROJECT_GRADIENTS = [
  "from-[#0F1724] via-[#0B2940] to-[#001A2B]",
  "from-[#0F1724] via-[#1B2638] to-[#08131F]",
  "from-[#0F1724] via-[#0B2F40] to-[#001623]",
];

function ProjectVisual({ index }: { index: number }) {
  const gradient = PROJECT_GRADIENTS[index % PROJECT_GRADIENTS.length];
  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-gradient-to-br ${gradient}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
      >
        <div className="absolute inset-0 grid-backdrop" />
      </div>
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Stylized window chrome */}
      <div className="absolute left-4 right-4 top-4 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted/70">
          phibrain://case/{String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Composition lines */}
      <svg
        viewBox="0 0 400 250"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <g stroke="#00D9FF" strokeOpacity="0.45" strokeWidth="0.8" fill="none">
          <rect x="32" y="60" width="120" height="80" rx="6" />
          <rect x="170" y="60" width="200" height="36" rx="6" />
          <rect x="170" y="104" width="200" height="36" rx="6" />
          <rect x="32" y="160" width="338" height="60" rx="6" />
          <line x1="48" y1="92" x2="128" y2="92" strokeOpacity="0.25" />
          <line x1="48" y1="108" x2="100" y2="108" strokeOpacity="0.2" />
        </g>
        <g fill="#00D9FF" fillOpacity="0.5">
          <circle cx="44" cy="76" r="2" />
          <circle cx="186" cy="78" r="2" />
          <circle cx="186" cy="122" r="2" />
          <circle cx="48" cy="178" r="2" />
        </g>
      </svg>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-line py-28 md:py-36"
    >
      <div className="shell flex flex-col gap-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="05 — Case studies"
            title={
              <>
                Selected work,{" "}
                <span className="text-text-muted">in confidence.</span>
              </>
            }
            description="We work mostly under NDA. The case studies below are conceptual presentations of real engagement shapes — patterns we've shipped, with names abstracted."
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
            All conceptual ·{" "}
            <span className="text-text-primary/80">3 selected</span>
          </span>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="flex flex-col gap-px overflow-hidden rounded-2xl border border-line bg-line"
        >
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              className="group relative grid grid-cols-1 gap-8 bg-ink-700/60 p-8 transition-colors duration-500 hover:bg-ink-600/70 md:grid-cols-12 md:gap-10 md:p-10"
            >
              <div className="md:col-span-5 flex flex-col gap-5">
                <header className="flex items-center justify-between text-xs text-text-muted">
                  <span className="font-mono uppercase tracking-[0.22em]">
                    {String(index + 1).padStart(2, "0")} · {project.year}
                  </span>
                  {project.conceptual ? (
                    <span className="rounded-full border border-line bg-white/[0.02] px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] text-text-muted">
                      Conceptual
                    </span>
                  ) : null}
                </header>

                <h3 className="font-display text-2xl text-text-primary tracking-tight md:text-3xl">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-text-muted">
                  {project.summary}
                </p>

                <div className="mt-2 flex flex-col gap-3 border-t border-line pt-5 text-xs text-text-muted">
                  <div className="flex items-center justify-between">
                    <span className="font-mono uppercase tracking-[0.18em]">
                      Client (abstracted)
                    </span>
                    <span className="text-text-primary">{project.client}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono uppercase tracking-[0.18em]">
                      Discipline
                    </span>
                    <span className="text-text-primary text-right">
                      {project.category}
                    </span>
                  </div>
                </div>

                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {project.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="rounded-full border border-line bg-white/[0.02] px-2.5 py-1 text-[11px] text-text-muted/90"
                    >
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-7 flex items-center">
                <ProjectVisual index={index} />
              </div>

              <ArrowUpRight
                className="absolute right-8 top-8 text-text-muted transition-all duration-300 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
