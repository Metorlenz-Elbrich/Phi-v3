import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Code2,
  ShieldCheck,
  TrendingUp,
  Compass,
  PenTool,
  Network,
  Hammer,
  Lock,
  Workflow,
} from "lucide-react";

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Projects" },
  { href: "#security", label: "Cybersecurity" },
  { href: "#contact", label: "Contact" },
] as const;

/* -------------------------------------------------------------------------- */
/*                     Pillars — the four-discipline studio                   */
/* -------------------------------------------------------------------------- */

export interface PillarService {
  name: string;
  detail: string;
}

export interface Pillar {
  id: string;
  index: string;
  word: string;
  headline: string;
  body: string;
  services: PillarService[];
  capabilities: string[];
  icon: LucideIcon;
}

export const PILLARS: Pillar[] = [
  {
    id: "design",
    index: "01",
    word: "Design",
    headline: "Brand identity. Product design. Motion language.",
    body: "Identity systems and product design treated as engineering — type, color, motion and component grammar shipped as code that ages well.",
    services: [
      {
        name: "Branding & Visual Identity",
        detail: "Identity systems with durable visual logic.",
      },
      {
        name: "Product Design (UI/UX)",
        detail: "Interactions designed at the system level.",
      },
    ],
    capabilities: ["Brand systems", "Design tokens", "Component grammar", "Motion language"],
    icon: Sparkles,
  },
  {
    id: "build",
    index: "02",
    word: "Build",
    headline: "Websites. Web apps. Mobile. SaaS.",
    body: "From editorial marketing surfaces to multi-tenant platforms — typed end-to-end, observable, shipped with discipline.",
    services: [
      {
        name: "Website Development",
        detail: "Marketing surfaces engineered like products.",
      },
      {
        name: "Web Applications",
        detail: "Complex apps with typed contracts and resilient data flows.",
      },
      {
        name: "Mobile Applications",
        detail: "Native-class iOS and Android — smooth at 120Hz.",
      },
      {
        name: "SaaS Platforms",
        detail: "Multi-tenant systems built for billing, RBAC and scale.",
      },
    ],
    capabilities: ["Next.js / React", "TypeScript", "React Native", "Edge-native", "Realtime", "Multi-tenant"],
    icon: Code2,
  },
  {
    id: "secure",
    index: "03",
    word: "Secure",
    headline: "Architecture-led security.",
    body: "Trust zones, threat models, hardening, audits — woven into delivery, never bolted on at the end.",
    services: [
      {
        name: "Cybersecurity Engineering",
        detail: "Hardening, secure architecture, security advisory.",
      },
      {
        name: "Security Audits",
        detail: "Structured reviews with prioritized remediation.",
      },
    ],
    capabilities: ["Threat modeling", "Hardening", "Audit & advisory", "Secure architecture"],
    icon: ShieldCheck,
  },
  {
    id: "scale",
    index: "04",
    word: "Scale",
    headline: "Digital transformation. Internal tooling.",
    body: "Modernizing how businesses operate digitally — replatforming, internal tooling, scalable systems shipped quietly.",
    services: [
      {
        name: "Digital Transformation",
        detail: "Replatforming, modernization, scalable systems.",
      },
      {
        name: "Internal Tools & Operations",
        detail: "Tooling that makes teams measurably faster.",
      },
    ],
    capabilities: ["Replatforming", "Internal tools", "Process automation", "Roadmap"],
    icon: TrendingUp,
  },
];

/* -------------------------------------------------------------------------- */
/*                                Process steps                               */
/* -------------------------------------------------------------------------- */

export interface ProcessStep {
  id: string;
  index: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  details: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "discover",
    index: "01",
    title: "Discover",
    summary: "We make the brief honest.",
    icon: Compass,
    details: ["Stakeholder interviews", "Constraint mapping", "Outcome definition"],
  },
  {
    id: "design",
    index: "02",
    title: "Design",
    summary: "Identity and product language as one system.",
    icon: PenTool,
    details: ["Brand & visual system", "Interaction model", "Component grammar"],
  },
  {
    id: "architect",
    index: "03",
    title: "Architect",
    summary: "Boundaries, contracts, data shape — drawn before we build.",
    icon: Network,
    details: ["Domain modeling", "API contracts", "Infrastructure shape"],
  },
  {
    id: "build",
    index: "04",
    title: "Build",
    summary: "Engineering with taste. Small iterations, visible progress.",
    icon: Hammer,
    details: ["Typed implementation", "Code review discipline", "Continuous delivery"],
  },
  {
    id: "secure",
    index: "05",
    title: "Secure",
    summary: "Security is woven in, not bolted on.",
    icon: Lock,
    details: ["Threat modeling", "Hardening pass", "Audit & remediation"],
  },
  {
    id: "scale",
    index: "06",
    title: "Scale",
    summary: "Operate, observe, evolve.",
    icon: Workflow,
    details: ["Performance budgets", "Observability", "Roadmap stewardship"],
  },
];

/* -------------------------------------------------------------------------- */
/*                              Trust principles                              */
/* -------------------------------------------------------------------------- */

export interface TrustItem {
  label: string;
  detail: string;
}

export const TRUST_ITEMS: TrustItem[] = [
  { label: "Security-first engineering", detail: "Threat modeling from day one" },
  { label: "Premium digital craftsmanship", detail: "Pixel and interaction precision" },
  { label: "Modern engineering stack", detail: "TypeScript, Next.js, edge-native" },
  { label: "Scalable architecture", detail: "Built for growth, not heroics" },
  { label: "Product-grade execution", detail: "Shipped, measured, evolved" },
  { label: "Design + engineering synergy", detail: "One team, one outcome" },
];

/* -------------------------------------------------------------------------- */
/*                              Projects (cases)                              */
/* -------------------------------------------------------------------------- */

export interface Project {
  id: string;
  client: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  capabilities: string[];
  conceptual: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "veridia",
    client: "Veridia Capital",
    title: "Reserve — institutional investor portal",
    category: "SaaS Platform · Cybersecurity",
    year: "2025",
    summary:
      "A hardened investor portal with multi-tenant accounts, granular permissions, audit trails and zero-friction onboarding for high-trust clients.",
    capabilities: ["Next.js", "Auth & RBAC", "Audit logging", "Security audit"],
    conceptual: true,
  },
  {
    id: "altura",
    client: "Altura Studios",
    title: "Altura.os — creative production OS",
    category: "Web Application · Design System",
    year: "2025",
    summary:
      "A production operating system for a creative studio. Custom design language, frame-locked motion, and a typed component grammar shared across product and marketing.",
    capabilities: ["Design system", "React 19", "Realtime", "Motion language"],
    conceptual: true,
  },
  {
    id: "northwind",
    client: "Northwind Mobility",
    title: "Northwind — mobility super-app",
    category: "Mobile · Platform Engineering",
    year: "2024",
    summary:
      "Cross-platform mobile app supporting offline-first usage, native modules, and a scalable backend designed for unpredictable demand.",
    capabilities: ["React Native", "Offline-first", "Edge infra", "Native modules"],
    conceptual: true,
  },
];

/* -------------------------------------------------------------------------- */
/*                          Security & Showcase content                       */
/* -------------------------------------------------------------------------- */

export interface SecurityCapability {
  title: string;
  description: string;
}

export const SECURITY_CAPABILITIES: SecurityCapability[] = [
  {
    title: "Secure architecture",
    description: "Boundaries, trust zones and data flows defined before a line of code is written.",
  },
  {
    title: "Hardening engagements",
    description: "Targeted hardening of authentication, session handling, supply chain and infrastructure.",
  },
  {
    title: "Audits & advisory",
    description: "Structured reviews of running systems with actionable, prioritized remediation paths.",
  },
  {
    title: "Continuous posture",
    description: "Security woven into delivery — code review, dependency hygiene, observability.",
  },
];

export interface ShowcasePillar {
  index: string;
  title: string;
  body: string;
  metric: string;
  metricLabel: string;
}

export const SHOWCASE_PILLARS: ShowcasePillar[] = [
  {
    index: "I",
    title: "Architecture as design",
    body: "Every system has a shape. We draw it first — domains, contracts, ownership — so the build phase is execution, not exploration.",
    metric: "0",
    metricLabel: "abstractions without purpose",
  },
  {
    index: "II",
    title: "Type-safe end to end",
    body: "TypeScript from the database to the pixel. Refactors stay safe, contracts stay honest, regressions get caught before review.",
    metric: "100%",
    metricLabel: "typed code surface",
  },
  {
    index: "III",
    title: "Performance budgets",
    body: "We treat bundle size, render time and motion frames as product features. Measured per release, defended per PR.",
    metric: "60fps",
    metricLabel: "interaction target",
  },
  {
    index: "IV",
    title: "Operate what we ship",
    body: "Observability, alerting and runbooks are part of the deliverable — not an afterthought handed to someone else.",
    metric: "24/7",
    metricLabel: "production posture",
  },
];

export const BRAND_NARRATIVE = ["Design.", "Build.", "Secure.", "Scale."] as const;
export const STUDIO_EMAIL = "studio@phibrain.io" as const;
