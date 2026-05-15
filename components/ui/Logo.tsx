import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  withWordmark?: boolean;
}

export function Logo({ className, size = 28, withWordmark = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className="relative inline-flex shrink-0 items-center justify-center"
        style={{ width: size, height: size }}
      >
        <Image
          src="/phibrain-logo.png"
          alt="PhiBrain"
          width={size}
          height={size}
          priority
          className="object-contain"
        />
      </span>
      {withWordmark ? (
        <span className="font-display text-[15px] font-medium tracking-tight text-text-primary">
          PhiBrain
        </span>
      ) : null}
    </span>
  );
}
