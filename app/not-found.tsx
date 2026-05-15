import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 grid-backdrop opacity-40" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />
      </div>
      <div className="shell flex flex-col items-center gap-8 text-center">
        <Logo withWordmark={false} size={48} />
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          404 — Out of frame
        </span>
        <h1 className="font-display text-display-xl text-text-primary text-balance">
          That page isn&apos;t in the system.
        </h1>
        <p className="max-w-md text-text-muted leading-relaxed">
          The link may have moved, or never existed. Let&apos;s get you back to
          something useful.
        </p>
        <ButtonLink href="/" size="lg" withArrow>
          Return home
        </ButtonLink>
      </div>
    </section>
  );
}
