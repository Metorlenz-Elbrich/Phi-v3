"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const progressBar = progressBarRef.current;
    if (!section || !pin || !progressBar) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (reduced || isMobile) {
      gsap.set(progressBar, { scaleX: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${(PROCESS_STEPS.length - 1) * 90}%`,
        pin: pin,
        pinSpacing: true,
        scrub: 0.4,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(progressBar, { scaleX: progress });
          const idx = Math.min(
            PROCESS_STEPS.length - 1,
            Math.floor(progress * PROCESS_STEPS.length)
          );
          setActive((current) => (current === idx ? current : idx));
        },
      });

      return () => {
        trigger.kill();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative bg-ink-900"
    >
      <div ref={pinRef} className="relative min-h-screen overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute inset-0 grid-backdrop opacity-40" />
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-[140px]" />
        </div>

        <div className="shell flex h-screen flex-col py-24">
          <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="02 — Process"
              title={
                <>
                  How a serious product{" "}
                  <span className="text-text-muted">comes together.</span>
                </>
              }
              description="Six disciplined phases. Each one earns the next."
            />
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-text-muted">
              <span>{String(active + 1).padStart(2, "0")}</span>
              <span className="text-text-muted/50">/</span>
              <span>{String(PROCESS_STEPS.length).padStart(2, "0")}</span>
            </div>
          </header>

          <div className="relative mt-8">
            <div className="h-px w-full bg-line" />
            <div
              ref={progressBarRef}
              className="absolute left-0 top-0 h-px w-full origin-left bg-gradient-to-r from-accent via-accent-soft to-accent"
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          <div className="mt-12 grid flex-1 grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
            {/* Step list (rail) */}
            <ol className="md:col-span-4 flex flex-col gap-1">
              {PROCESS_STEPS.map((step, index) => {
                const isActive = index === active;
                const isPast = index < active;
                return (
                  <li key={step.id}>
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      className="group relative flex w-full items-center gap-4 rounded-lg px-3 py-3 text-left transition-colors duration-300"
                    >
                      <span
                        className={`font-mono text-xs tabular-nums transition-colors duration-300 ${
                          isActive
                            ? "text-accent"
                            : isPast
                            ? "text-text-primary/70"
                            : "text-text-muted/60"
                        }`}
                      >
                        {step.index}
                      </span>
                      <span
                        className={`h-px transition-all duration-500 ${
                          isActive
                            ? "w-10 bg-accent"
                            : "w-5 bg-line group-hover:w-7 group-hover:bg-line-strong"
                        }`}
                      />
                      <span
                        className={`font-display text-base transition-colors duration-300 ${
                          isActive
                            ? "text-text-primary"
                            : "text-text-muted group-hover:text-text-primary"
                        }`}
                      >
                        {step.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            {/* Active step display */}
            <div className="md:col-span-8 relative flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="flex w-full flex-col gap-8"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                      Phase {PROCESS_STEPS[active]!.index}
                    </span>
                    <span className="h-px flex-1 bg-line" />
                  </div>

                  <h3 className="font-display text-display-xl text-text-primary text-balance">
                    {PROCESS_STEPS[active]!.title}.
                  </h3>

                  <p className="max-w-2xl text-xl leading-relaxed text-text-muted text-pretty">
                    {PROCESS_STEPS[active]!.summary}
                  </p>

                  <ul className="grid max-w-2xl grid-cols-1 gap-2 sm:grid-cols-3">
                    {PROCESS_STEPS[active]!.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 rounded-lg border border-line bg-white/[0.02] px-3 py-2 text-sm text-text-primary/90"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Phase glyph */}
                  <div className="mt-2 flex items-center gap-4 text-text-muted">
                    {(() => {
                      const Icon = PROCESS_STEPS[active]!.icon;
                      return <Icon size={28} strokeWidth={1.25} className="text-accent/80" />;
                    })()}
                    <span className="font-mono text-xs uppercase tracking-[0.22em]">
                      Discipline · {PROCESS_STEPS[active]!.id}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
