import { Logo } from "@/components/ui/Logo";
import { PhiMark } from "@/components/ui/PhiMark";
import { NAV_LINKS, BRAND_NARRATIVE } from "@/lib/content";

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
      { label: "Discovery call", href: "#contact" },
      { label: "Security advisory", href: "#contact" },
      { label: "Partnerships", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink-900">
      {/* Top brand bar with Φ signature */}
      <div className="border-b border-line">
        <div className="shell flex flex-col gap-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <PhiMark size="md" className="text-accent" decorative />
            <span className="font-mono uppercase tracking-[0.22em] text-text-muted">
              The constant of <span className="text-text-primary">exceptional digital craft</span>
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
            {BRAND_NARRATIVE.map((word, i) => (
              <span key={word} className="flex items-center gap-2">
                {i > 0 ? (
                  <span className="text-accent" aria-hidden="true">Φ</span>
                ) : null}
                <span>We {word}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="shell grid gap-14 py-20 md:grid-cols-12">
        <div className="md:col-span-5 flex flex-col gap-6">
          <Logo size={28} />
          <p className="max-w-sm text-text-muted leading-relaxed">
            We design, build, secure and scale exceptional digital products.
            Engineering precision and design fluidity, held to a single standard.
          </p>
          <div className="mt-2 flex items-center gap-3 text-xs text-text-muted">
            <PhiMark size="sm" className="text-accent" decorative />
            <span className="font-mono uppercase tracking-[0.22em]">
              Studio · MMXXVI · Worldwide
            </span>
          </div>
        </div>

        <div className="md:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
          {FOOTER_GROUPS.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-text-muted">
                <span className="text-accent">Φ</span> · {group.title}
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
            <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-text-muted">
              <span className="text-accent">Φ</span> · Contact
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:studio@phibrain.io"
                  className="text-sm text-text-primary/80 transition-colors hover:text-accent"
                >
                  studio@phibrain.io
                </a>
              </li>
              <li className="text-sm text-text-muted">Worldwide · Remote-first</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="shell flex flex-col gap-3 py-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono">
            © {new Date().getFullYear()} PhiBrain · All rights reserved.
          </p>
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
