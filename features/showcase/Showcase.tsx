"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SHOWCASE_PILLARS } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      id="engineering"
      className="relative border-t border-line py-28 md:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <motion.div
          style={{ y: parallaxY }}
          className="absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-accent/[0.06] blur-[120px]"
        />
      </div>

      <div className="shell flex flex-col gap-16">
        <SectionHeader
          eyebrowIndex="03"
          eyebrowLabel="Engineering"
          title={
            <>
              Engineering as a{" "}
              <span className="text-text-muted">design material.</span>
            </>
          }
          description="We don't separate craft from infrastructure. The same proportion that shapes a button shapes a deployment pipeline — Φ from the pixel to the platform."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2"
        >
          {SHOWCASE_PILLARS.map((pillar, index) => (
            <motion.article
              key={pillar.index}
              variants={fadeUp}
              className="group relative flex flex-col gap-6 bg-ink-700/60 p-8 transition-colors duration-500 hover:bg-ink-600/60 md:p-12"
            >
              <header className="flex items-baseline gap-4">
                <span className="font-display text-display-md text-accent/80">
                  {pillar.index}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
                  Pillar / 0{index + 1}
                </span>
              </header>
              <h3 className="font-display text-2xl text-text-primary tracking-tight">
                {pillar.title}
              </h3>
              <p className="max-w-md text-text-muted leading-relaxed">
                {pillar.body}
              </p>
              <div className="mt-4 flex items-end gap-3 border-t border-line pt-5">
                <span className="font-display text-4xl text-text-primary tabular-nums tracking-tight">
                  {pillar.metric}
                </span>
                <span className="mb-1 text-xs text-text-muted">
                  {pillar.metricLabel}
                </span>
              </div>

              {/* Hover scan */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </motion.div>

        {/* Engineering metric strip */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {[
            { value: "TypeScript", label: "Across the stack" },
            { value: "Edge-native", label: "Deploy posture" },
            { value: "Design tokens", label: "Source of truth" },
            { value: "Security-first", label: "From day zero" },
          ].map((item) => (
            <div
              key={item.value}
              className="flex flex-col gap-1.5 bg-ink-700/60 p-6"
            >
              <span className="font-display text-lg text-text-primary tracking-tight">
                {item.value}
              </span>
              <span className="text-xs text-text-muted">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
