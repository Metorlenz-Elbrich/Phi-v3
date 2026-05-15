import type { Metadata, Viewport } from "next";
import { fontDisplay, fontSans, fontMono } from "@/lib/fonts";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PhiBrain — Engineering, Design, Cybersecurity",
    template: "%s · PhiBrain",
  },
  description:
    "PhiBrain is a premium technology engineering, digital design and cybersecurity studio. We design, build, secure and scale exceptional digital products.",
  applicationName: "PhiBrain",
  authors: [{ name: "PhiBrain" }],
  keywords: [
    "engineering",
    "web development",
    "mobile development",
    "SaaS",
    "design",
    "cybersecurity",
    "digital transformation",
  ],
  openGraph: {
    title: "PhiBrain — Engineering, Design, Cybersecurity",
    description:
      "We design, build, secure and scale exceptional digital products.",
    type: "website",
    siteName: "PhiBrain",
  },
  twitter: {
    card: "summary_large_image",
    title: "PhiBrain — Engineering, Design, Cybersecurity",
    description:
      "We design, build, secure and scale exceptional digital products.",
  },
  icons: {
    icon: "/phibrain-logo.png",
    shortcut: "/phibrain-logo.png",
    apple: "/phibrain-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#060B14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        fontDisplay.variable,
        fontSans.variable,
        fontMono.variable,
        "antialiased"
      )}
    >
      <body className="bg-ink-900 text-text-primary selection:bg-accent/20">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-ink-900"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
