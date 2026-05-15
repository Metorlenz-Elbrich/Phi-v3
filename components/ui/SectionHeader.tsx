"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15% 0px" }}
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center max-w-3xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      {eyebrow ? (
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
          <span className="eyebrow">{eyebrow}</span>
        </motion.div>
      ) : null}
      <motion.h2
        variants={fadeUp}
        className="font-display text-display-lg text-text-primary text-balance"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeUp}
          className="text-text-muted text-lg leading-relaxed text-pretty"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
