import { PhiMark } from "./PhiMark";
import { cn } from "@/lib/utils";

interface SectionIndexProps {
  index: string;
  label: string;
  className?: string;
}

/**
 * Section eyebrow: Φ · 0X · LABEL.
 * One canonical place for the Φ-indexed marker.
 */
export function SectionIndex({ index, label, className }: SectionIndexProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-accent",
        className
      )}
    >
      <PhiMark size="md" className="text-accent translate-y-[1px]" decorative />
      <span aria-hidden="true" className="text-accent/40">·</span>
      <span className="tabular-nums">{index}</span>
      <span aria-hidden="true" className="text-accent/40">—</span>
      <span>{label}</span>
    </span>
  );
}
