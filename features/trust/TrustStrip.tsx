"use client";

import { motion } from "framer-motion";
import { TRUST_ITEMS } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function TrustStrip() {
  return (
    <section className="relative border-y border-line bg-ink-900/40">
      <div className="shell py-14 md:py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="flex flex-col gap-10 md:flex-row md:items-center md:gap-12"
        >
          <motion.p
            variants={fadeUp}
            className="max-w-xs font-mono text-xs uppercase tracking-[0.22em] text-text-muted"
          >
            <span className="block text-accent">Studio principles</span>
            <span className="mt-2 block normal-case tracking-normal text-text-muted/80 font-sans text-sm">
              How we approach every engagement.
            </span>
          </motion.p>

          <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3 lg:grid-cols-6">
            {TRUST_ITEMS.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="flex flex-col gap-1.5"
              >
                <span className="text-sm font-medium text-text-primary">
                  {item.label}
                </span>
                <span className="text-xs text-text-muted">{item.detail}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
