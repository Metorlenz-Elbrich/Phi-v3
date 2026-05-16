"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PILLARS, STUDIO_EMAIL, type Pillar } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";

function PillarCard({ pillar }: { pillar: Pillar }) {
  const Icon = pillar.icon;
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col gap-7 overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-ink-600/55 to-ink-700/45 p-8 backdrop-blur-md transition-colors duration-500 hover:border-line-strong md:p-10"
    >
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent/[0.08] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      <header className="flex items-start justify-between gap-6">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted tabular-nums">
            Pillar · {pillar.index}
          </span>
          <h3 className="font-display text-display-md leading-none tracking-tight text-text-primary">
            We {pillar.word.toLowerCase()}.
          </h3>
        </div>
        <span
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-white/[0.02] text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10"
          aria-hidden="true"
        >
          <Icon size={16} strokeWidth={1.75} />
        </span>
      </header>

      <div className="flex flex-col gap-3">
        <p className="font-display text-lg leading-snug text-text-primary/90">
          {pillar.headline}
        </p>
        <p className="text-sm leading-relaxed text-text-muted">
          {pillar.body}
        </p>
      </div>

      {/* Services list */}
      <ul className="flex flex-col divide-y divide-line border-y border-line">
        {pillar.services.map((service, i) => (
          <li
            key={service.name}
            className="flex items-start gap-4 py-3.5"
          >
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted/70 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-sm text-text-primary">
                {service.name}
              </span>
              <span className="text-xs text-text-muted">{service.detail}</span>
            </div>
          </li>
        ))}
      </ul>

      <ul className="flex flex-wrap gap-1.5">
        {pillar.capabilities.map((cap) => (
          <li
            key={cap}
            className="rounded-full border border-line bg-white/[0.02] px-2.5 py-1 text-[11px] text-text-muted/90"
          >
            {cap}
          </li>
        ))}
      </ul>

      <a
        href={`mailto:${STUDIO_EMAIL}?subject=Inquiry%20%E2%80%94%20${encodeURIComponent(
          pillar.word
        )}`}
        className="mt-auto flex items-center justify-between border-t border-line pt-5 text-sm text-text-muted transition-colors duration-300 hover:text-accent"
      >
        <span>Discuss this pillar</span>
        <ArrowUpRight
          size={16}
          strokeWidth={1.75}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </a>
    </motion.article>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        aria-hidden="true"
      >
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-accent/[0.04] blur-[120px]" />
      </div>

      <div className="shell flex flex-col gap-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrowIndex="01"
            eyebrowLabel="Services"
            title={
              <>
                One studio.{" "}
                <span className="text-text-muted">
                  Four disciplines. A single standard.
                </span>
              </>
            }
            description="The pillars below map directly to how we work — Design, Build, Secure and Scale. Engage one or all. Every engagement is owned end-to-end."
          />
          <div className="flex shrink-0 items-center gap-3 text-xs text-text-muted">
            <span className="font-mono uppercase tracking-[0.22em] tabular-nums">
              04 pillars · 09 services
            </span>
            <span className="h-px w-12 bg-line" />
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"
        >
          {PILLARS.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
