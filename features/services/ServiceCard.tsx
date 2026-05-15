"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/content";
import { fadeUp } from "@/lib/motion";

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-ink-600/50 to-ink-700/40 p-7 backdrop-blur-md transition-colors duration-500 hover:border-line-strong ${
        featured ? "md:col-span-2 md:row-span-1" : ""
      }`}
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      <header className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-text-muted">
          {service.index} / Service
        </span>
        <span
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white/[0.02] text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10"
          aria-hidden="true"
        >
          <Icon size={16} strokeWidth={1.75} />
        </span>
      </header>

      <div className="flex flex-col gap-3">
        <h3 className="font-display text-2xl text-text-primary tracking-tight">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-text-muted">
          {service.description}
        </p>
      </div>

      <ul className="mt-auto flex flex-wrap gap-1.5">
        {service.capabilities.map((capability) => (
          <li
            key={capability}
            className="rounded-full border border-line bg-white/[0.02] px-2.5 py-1 text-[11px] text-text-muted/90"
          >
            {capability}
          </li>
        ))}
      </ul>

      <div className="mt-2 flex items-center justify-between border-t border-line pt-4">
        <span className="text-xs text-text-muted">Discuss this engagement</span>
        <ArrowUpRight
          size={16}
          strokeWidth={1.75}
          className="text-text-muted transition-all duration-300 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
    </motion.article>
  );
}
