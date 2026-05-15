import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-tight transition-[transform,background,border-color,color] duration-300 ease-precision focus-ring disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-ink-900 hover:bg-accent-soft hover:shadow-glow active:translate-y-px",
        ghost:
          "bg-transparent text-text-primary border border-line hover:border-line-strong hover:bg-white/[0.03]",
        outline:
          "bg-transparent text-text-primary border border-line-strong hover:border-accent hover:text-accent",
        subtle:
          "bg-white/[0.04] text-text-primary border border-line hover:bg-white/[0.06]",
      },
      size: {
        sm: "h-9 px-4 text-[13px] rounded-full",
        md: "h-11 px-6 text-sm rounded-full",
        lg: "h-12 px-7 text-[15px] rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
  withArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, withArrow, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size }), className)}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
          {withArrow ? (
            <ArrowUpRight
              size={16}
              strokeWidth={1.75}
              className="-translate-x-px transition-transform duration-300 ease-precision group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          ) : null}
        </span>
      </button>
    );
  }
);
Button.displayName = "Button";

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonStyles> {
  withArrow?: boolean;
}

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, withArrow, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(buttonStyles({ variant, size }), className)}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
          {withArrow ? (
            <ArrowUpRight
              size={16}
              strokeWidth={1.75}
              className="-translate-x-px transition-transform duration-300 ease-precision group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          ) : null}
        </span>
      </a>
    );
  }
);
ButtonLink.displayName = "ButtonLink";
