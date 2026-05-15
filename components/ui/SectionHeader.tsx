"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { SectionIndex } from "./SectionIndex";

interface SectionHeaderProps {
  eyebrowIndex?: string;
  eyebrowLabel?: string;
  /** Free-form eyebrow override (skips SectionIndex). */
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrowIndex,
  eyebrowLabel,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  const eyebrowNode =
    eyebrow ??
    (eyebrowIndex && eyebrowLabel ? (
      <SectionIndex index={eyebrowIndex} label={eyebrowLabel} />
    ) : null);

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
      {eyebrowNode ? (
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          {eyebrowNode}
          <span className="h-px w-10 bg-accent/30" aria-hidden="true" />
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
