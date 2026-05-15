"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { PhiMark } from "@/components/ui/PhiMark";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { BRAND_NARRATIVE } from "@/lib/content";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-line py-32 md:py-44"
    >
      {/* Atmospheric */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 grid-backdrop opacity-40" />
        <div className="absolute left-1/2 top-1/2 h-[640px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.10] blur-[160px]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15% 0px" }}
        className="shell flex flex-col gap-12"
      >
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-line" aria-hidden="true" />
          <SectionIndex index="06" label="Engagement" />
          <span className="h-px w-12 bg-line" aria-hidden="true" />
        </motion.div>

        {/* Asymmetric anchor composition */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Φ anchor — massive brand mark */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-[420px] select-none">
              {/* Halo */}
              <div
                className="pointer-events-none absolute inset-0 rounded-full bg-accent/[0.10] blur-3xl"
                aria-hidden="true"
              />

              {/* Concentric rings */}
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <circle cx="200" cy="200" r="180" fill="none" stroke="#00D9FF" strokeOpacity="0.10" />
                <circle cx="200" cy="200" r="150" fill="none" stroke="#00D9FF" strokeOpacity="0.18" />
                <circle cx="200" cy="200" r="120" fill="none" stroke="#00D9FF" strokeOpacity="0.35" strokeDasharray="3 5" />
                <circle cx="200" cy="200" r="90" fill="none" stroke="#00D9FF" strokeOpacity="0.55" />

                {/* Endpoint marks at cardinal points */}
                {[
                  [200, 20],
                  [380, 200],
                  [200, 380],
                  [20, 200],
                ].map(([x, y]) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#39E6FF" />
                ))}
              </svg>

              {/* The Φ */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-display text-[clamp(11rem,28vw,18rem)] font-light leading-none text-transparent"
                  style={{
                    WebkitTextStroke: "1px rgba(0,217,255,0.55)",
                  }}
                  aria-hidden="true"
                >
                  Φ
                </span>
              </div>

              {/* Inner cyan Φ for depth */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="bg-gradient-to-br from-accent-soft via-accent to-accent-deep bg-clip-text font-display text-[clamp(11rem,28vw,18rem)] font-light leading-none text-transparent"
                  aria-hidden="true"
                >
                  Φ
                </span>
              </div>

              {/* Caption */}
              <div className="pointer-events-none absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
                The constant of <span className="text-accent">exceptional</span>
              </div>
            </div>
          </motion.div>

          {/* Message */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.h2
              variants={fadeUp}
              className="font-display text-display-2xl text-text-primary text-balance"
            >
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-br from-accent-soft via-accent to-accent-deep bg-clip-text text-transparent">
                exceptional.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-lg leading-relaxed text-text-muted text-pretty"
            >
              We accept a small number of engagements at a time. If you&apos;re
              shipping something that matters — and you want it built, designed
              and secured to a single standard — we&apos;d like to hear from
              you.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <ButtonLink
                href="mailto:studio@phibrain.io?subject=Project%20inquiry"
                size="lg"
                withArrow
              >
                Start a Project
              </ButtonLink>
              <ButtonLink
                href="mailto:studio@phibrain.io?subject=Discovery%20call"
                size="lg"
                variant="ghost"
              >
                Book a discovery call
                <ArrowRight size={16} strokeWidth={1.75} />
              </ButtonLink>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col gap-4 border-t border-line pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <PhiMark size="md" className="text-accent" decorative />
                <span className="font-mono text-xs uppercase tracking-[0.22em]">
                  Worldwide · Remote-first · Selective
                </span>
              </div>
              <a
                href="mailto:studio@phibrain.io"
                className="font-mono text-xs uppercase tracking-[0.22em] text-accent transition-colors hover:text-accent-soft"
              >
                studio@phibrain.io
              </a>
            </motion.div>
          </div>
        </div>

        {/* Brand narrative — closing rhythm with Φ separators */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 font-mono text-xs uppercase tracking-[0.22em] sm:text-sm sm:tracking-[0.28em]"
        >
          {BRAND_NARRATIVE.map((word, i) => (
            <span key={word} className="flex items-center gap-3">
              {i > 0 ? (
                <PhiMark size="sm" className="text-accent" decorative />
              ) : null}
              <span className="text-text-primary/90">We {word}</span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
