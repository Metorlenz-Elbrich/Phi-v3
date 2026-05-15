"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background,backdrop-filter,border-color] duration-500 ease-precision",
          scrolled
            ? "border-b border-line bg-ink-900/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="shell flex h-[68px] items-center justify-between">
          <a href="#top" className="focus-ring rounded-md">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-3.5 py-2 text-sm text-text-muted transition-colors duration-300 hover:text-text-primary"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 -z-0 rounded-full bg-white/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink
              href="#contact"
              size="sm"
              variant="primary"
              withArrow
              className="hidden sm:inline-flex"
            >
              Start a Project
            </ButtonLink>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-text-primary transition-colors hover:border-line-strong lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-ink-900/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="shell flex h-full flex-col pt-24">
              <nav
                className="flex flex-col"
                aria-label="Mobile primary"
                onClick={() => setOpen(false)}
              >
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.05 + index * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-baseline justify-between border-b border-line py-5 font-display text-display-md text-text-primary"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto pb-10 pt-10">
                <ButtonLink
                  href="#contact"
                  variant="primary"
                  size="lg"
                  withArrow
                  className="w-full justify-center"
                  onClick={() => setOpen(false)}
                >
                  Start a Project
                </ButtonLink>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
