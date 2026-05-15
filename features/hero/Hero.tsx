"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Code2, Sparkles } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ButtonLink } from "@/components/ui/Button";
import { SculptureFallback } from "./SculptureFallback";
import { BRAND_NARRATIVE } from "@/lib/content";

const Sculpture = dynamic(() => import("./Sculpture").then((m) => m.Sculpture), {
  ssr: false,
  loading: () => <SculptureFallback />,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const HERO_PILLS = [
  { icon: Code2, label: "Engineering" },
  { icon: Sparkles, label: "Design" },
  { icon: ShieldCheck, label: "Security" },
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

      <div className="shell grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="inline-flex items-center gap-3 self-start rounded-full border border-line bg-white/[0.02] px-3.5 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(0,217,255,0.7)] animate-breathe-glow" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
              Engineering · Design · Cybersecurity
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
                Premium digital
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
                className="block"
              >
                products,{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-br from-accent-soft via-accent to-accent-deep bg-clip-text text-transparent">
                    engineered
                  </span>
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
                    aria-hidden="true"
                  />
                </span>
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
                className="block"
              >
                with discipline.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
            className="max-w-xl text-lg leading-relaxed text-text-muted text-pretty"
          >
            PhiBrain is a studio of engineers, designers and security
            specialists. We craft websites, web and mobile applications, SaaS
            platforms and security postures for businesses that hold themselves
            to a higher standard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <ButtonLink href="#contact" size="lg" withArrow>
              Start a Project
            </ButtonLink>
            <ButtonLink href="#services" size="lg" variant="ghost">
              Explore the studio <ArrowRight size={16} strokeWidth={1.75} />
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.7 }}
            className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {HERO_PILLS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-sm text-text-muted"
              >
                <Icon size={14} strokeWidth={1.75} className="text-accent" />
                {label}
              </span>
            ))}
            <span className="hidden h-3 w-px bg-line sm:inline-block" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
              {BRAND_NARRATIVE.join("  ")}
            </span>
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

      {/* Bottom hairline indicator */}
      <div className="shell mt-20 hidden items-center justify-between text-xs text-text-muted md:flex">
        <span className="font-mono uppercase tracking-[0.22em]">Scroll</span>
        <div className="hairline mx-6 flex-1" />
        <span className="font-mono uppercase tracking-[0.22em]">Phi · 01</span>
      </div>
    </section>
  );
}
