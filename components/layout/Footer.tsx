import { Logo } from "@/components/ui/Logo";
import { PhiMark } from "@/components/ui/PhiMark";
import { NAV_LINKS, STUDIO_EMAIL } from "@/lib/content";

const FOOTER_GROUPS = [
  {
    title: "Studio",
    links: [
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Projects", href: "#projects" },
      { label: "Cybersecurity", href: "#security" },
    ],
  },
  {
    title: "Engagement",
    links: [
      { label: "Start a Project", href: "#contact" },
      { label: "Discovery call", href: `mailto:${STUDIO_EMAIL}?subject=Discovery%20call` },
      { label: "Security advisory", href: `mailto:${STUDIO_EMAIL}?subject=Security%20advisory` },
      { label: "Partnerships", href: `mailto:${STUDIO_EMAIL}?subject=Partnership%20inquiry` },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink-900">
      <div className="shell grid gap-14 py-16 md:grid-cols-12">
        <div className="md:col-span-5 flex flex-col gap-6">
          <Logo size={28} />
          <p className="max-w-sm text-sm text-text-muted leading-relaxed">
            PhiBrain engineers premium websites, web and mobile applications,
            and SaaS platforms — designed end-to-end and secured at every layer.
          </p>
          <a
            href={`mailto:${STUDIO_EMAIL}?subject=Project%20inquiry`}
            className="group inline-flex w-fit items-center gap-3 text-sm text-accent transition-colors hover:text-accent-soft"
          >
            <span>{STUDIO_EMAIL}</span>
            <span
              aria-hidden="true"
              className="h-px w-6 bg-accent/60 transition-all duration-300 group-hover:w-8 group-hover:bg-accent"
            />
          </a>
        </div>

        <div className="md:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
          {FOOTER_GROUPS.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <h4 className="font-mono text-xs uppercase tracking-[0.22em] text-text-muted">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-primary/80 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.22em] text-text-muted">
              Studio
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={`mailto:${STUDIO_EMAIL}`}
                  className="text-sm text-text-primary/80 transition-colors hover:text-accent"
                >
                  {STUDIO_EMAIL}
                </a>
              </li>
              <li className="text-sm text-text-muted">Worldwide</li>
              <li className="text-sm text-text-muted">Remote-first</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-3 py-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 font-mono">
            <PhiMark size="sm" className="text-accent" decorative />
            <span>© {new Date().getFullYear()} PhiBrain · All rights reserved.</span>
          </div>
          <nav className="flex items-center gap-5" aria-label="Footer secondary">
            {NAV_LINKS.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
