"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SERVICES } from "@/lib/content";
import { staggerContainer } from "@/lib/motion";
import { ServiceCard } from "./ServiceCard";

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
            eyebrow="01 — Services"
            title={
              <>
                A complete digital studio,{" "}
                <span className="text-text-muted">
                  built around engineering rigor.
                </span>
              </>
            }
            description="From the first sketch to ongoing operation, every discipline is in-house. We accept work where we can own the outcome end-to-end."
          />
          <div className="flex shrink-0 items-center gap-3 text-xs text-text-muted">
            <span className="font-mono uppercase tracking-[0.22em]">
              07 disciplines
            </span>
            <span className="h-px w-12 bg-line" />
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
