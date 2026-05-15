"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { BRAND_NARRATIVE } from "@/lib/content";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-line py-32 md:py-44"
    >
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
        className="shell flex flex-col items-center gap-10 text-center"
      >
        <motion.span
          variants={fadeUp}
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent"
        >
          06 — Engagement
        </motion.span>

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
          className="max-w-2xl text-lg leading-relaxed text-text-muted text-pretty"
        >
          We accept a small number of engagements at a time. If you&apos;re
          shipping something that matters — and you want it built, designed and
          secured to the highest standard — we&apos;d like to hear from you.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center gap-4 sm:flex-row"
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
          className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-text-muted"
        >
          {BRAND_NARRATIVE.map((word) => (
            <span
              key={word}
              className="rounded-full border border-line bg-white/[0.02] px-3 py-1 font-mono uppercase tracking-[0.22em] text-accent"
            >
              We {word}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
