"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ShieldCheck, Code2, Sparkles } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ButtonLink } from "@/components/ui/Button";
import { PhiMark } from "@/components/ui/PhiMark";
import { SculptureFallback } from "./SculptureFallback";

const Sculpture = dynamic(() => import("./Sculpture").then((m) => m.Sculpture), {
  ssr: false,
  loading: () => <SculptureFallback />,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const DISCIPLINES = [
  { icon: Code2, label: "Engineering", note: "Structure" },
  { icon: Sparkles, label: "Design", note: "Fluidity" },
  { icon: ShieldCheck, label: "Security", note: "Trust" },
] as const;

export function Hero() {
  const isHeavy = useMediaQuery("(min-width: 768px)");

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-24 pt-32 md:pb-40 md:pt-40"
    >
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 grid-backdrop opacity-60" />
        <div className="absolute -top-40 left-1/2 h-[640px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[160px]" />
        <div className="absolute bottom-[-25%] left-[-10%] h-[420px] w-[420px] rounded-full bg-accent/[0.05] blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-900" />
      </div>

      {/* Massive Φ watermark — quiet, behind everything */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 hidden -translate-x-1/2 select-none items-center justify-center md:flex"
        aria-hidden="true"
      >
        <PhiMark
          size="display"
          weight="light"
          decorative
          className="text-text-primary/[0.025]"
        />
      </div>

      {/* Editorial corner mark — top-right studio stamp (Φ-free for restraint) */}
      <div className="shell relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
          className="pointer-events-none absolute right-0 top-[-12px] hidden flex-col items-end gap-1 font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted md:flex"
        >
          <span className="text-text-primary/80">PhiBrain · Studio</span>
          <span>Engineering · Design · Cybersecurity</span>
          <span className="text-text-muted/60">MMXXVI · Worldwide</span>
        </motion.div>
      </div>

      <div className="shell grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="inline-flex items-center gap-3 self-start rounded-full border border-line bg-white/[0.02] px-3.5 py-1.5"
          >
            <PhiMark
              size="md"
              className="text-accent translate-y-[1px]"
              decorative
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
              Studio · Engineering · Design · Cybersecurity
            </span>
          </motion.div>

          <h1 className="font-display text-display-2xl text-text-primary text-balance">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.05 }}
                className="block"
              >
                Built with{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-br from-accent-soft via-accent to-accent-deep bg-clip-text text-transparent">
                    structure.
                  </span>
                </span>
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.18 }}
                className="block text-text-primary/90"
              >
                Designed with{" "}
                <span className="bg-gradient-to-br from-accent-soft via-accent to-accent-deep bg-clip-text text-transparent">
                  fluidity.
                </span>
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.31 }}
                className="block text-text-muted"
              >
                Held to a single standard.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
            className="max-w-xl text-lg leading-relaxed text-text-muted text-pretty"
          >
            PhiBrain engineers{" "}
            <span className="text-text-primary/90">
              premium websites, web and mobile applications, and SaaS platforms
            </span>{" "}
            — designed end-to-end and secured at every layer. For ambitious
            businesses that hold their work to a higher standard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            <ButtonLink href="#contact" size="lg" withArrow>
              Start a Project
            </ButtonLink>
            <ButtonLink href="#projects" size="lg" variant="ghost" withArrow>
              See the work
            </ButtonLink>
          </motion.div>

          {/* Discipline strip — discipline-led, conceptual subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.8 }}
            className="mt-3 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line"
          >
            {DISCIPLINES.map(({ icon: Icon, label, note }) => (
              <div
                key={label}
                className="flex flex-col gap-1.5 bg-ink-700/60 px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <Icon size={13} strokeWidth={1.75} className="text-accent" />
                  <span className="font-display text-sm text-text-primary">
                    {label}
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
                  {note}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
          className="relative lg:col-span-5 flex items-center justify-center"
        >
          {isHeavy ? <Sculpture /> : <SculptureFallback />}
        </motion.div>
      </div>

      {/* Bottom rail — quiet scroll cue with brand narrative */}
      <div className="shell mt-24 hidden items-center gap-6 text-[11px] text-text-muted md:flex">
        <span className="font-mono uppercase tracking-[0.22em]">Scroll</span>
        <div className="hairline flex-1" />
        <span className="font-mono uppercase tracking-[0.22em] text-text-primary/70">
          Design  ·  Build  ·  Secure  ·  Scale
        </span>
        <div className="hairline w-16" />
        <span className="font-mono uppercase tracking-[0.22em] tabular-nums">
          00
        </span>
      </div>
    </section>
  );
}
