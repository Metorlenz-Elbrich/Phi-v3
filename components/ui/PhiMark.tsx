import { cn } from "@/lib/utils";

const SIZE_MAP = {
  xs: "text-[10px]",
  sm: "text-xs",
  md: "text-base",
  lg: "text-2xl",
  xl: "text-5xl",
  display: "text-[clamp(6rem,14vw,12rem)]",
} as const;

interface PhiMarkProps {
  className?: string;
  size?: keyof typeof SIZE_MAP;
  weight?: "light" | "regular" | "medium";
  decorative?: boolean;
}

const WEIGHT_MAP = {
  light: "font-light",
  regular: "font-normal",
  medium: "font-medium",
} as const;

/**
 * The Φ brand glyph. Used as a quiet, consistent brand thread across the site.
 * - inline (`xs`/`sm`/`md`) for eyebrow markers and signatures.
 * - block (`lg`/`xl`) for header accents.
 * - watermark (`display`) for hero/CTA decorative backgrounds.
 */
export function PhiMark({
  className,
  size = "sm",
  weight = "regular",
  decorative = false,
}: PhiMarkProps) {
  return (
    <span
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : "phi"}
      className={cn(
        "inline-block font-display leading-none tabular-nums select-none",
        SIZE_MAP[size],
        WEIGHT_MAP[weight],
        className
      )}
    >
      Φ
    </span>
  );
}
