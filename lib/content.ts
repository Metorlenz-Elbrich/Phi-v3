import type { LucideIcon } from "lucide-react";
import {
  Globe,
  AppWindow,
  Smartphone,
  Layers,
  Sparkles,
  ShieldCheck,
  Workflow,
  Compass,
  PenTool,
  Network,
  Hammer,
  Lock,
  TrendingUp,
} from "lucide-react";

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Projects" },
  { href: "#security", label: "Cybersecurity" },
  { href: "#contact", label: "Contact" },
] as const;

export interface Service {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  icon: LucideIcon;
  index: string;
}

export const SERVICES: Service[] = [
  {
    id: "websites",
    index: "01",
    title: "Website Development",
    description:
      "Marketing surfaces engineered like products. Editorial typography, frame-perfect motion, instrumented performance.",
    capabilities: ["Next.js / React", "Headless CMS", "Edge rendering", "Conversion analytics"],
    icon: Globe,
  },
  {
    id: "webapps",
    index: "02",
    title: "Web Applications",
    description:
      "Complex application engineering. Typed contracts, resilient data flows, calm interfaces under real load.",
    capabilities: ["TypeScript", "Realtime", "Auth & RBAC", "Observability"],
    icon: AppWindow,
  },
  {
    id: "mobile",
    index: "03",
    title: "Mobile Applications",
    description:
      "Native-class mobile experiences. Smooth at 120Hz, designed around platform conventions, shipped with discipline.",
    capabilities: ["React Native", "Native modules", "App Store / Play", "Offline-first"],
    icon: Smartphone,
  },
  {
    id: "saas",
    index: "04",
    title: "SaaS Platforms",
    description:
      "Multi-tenant platforms built to scale: billing, permissions, audit trails, predictable infrastructure.",
    capabilities: ["Multi-tenant", "Billing & metering", "Admin tooling", "Scalable infra"],
    icon: Layers,
  },
  {
    id: "design",
    index: "05",
    title: "Branding & UI/UX",
    description:
      "Identity systems and product design that ages well. Type, color, motion and component grammar — treated as engineering.",
    capabilities: ["Brand systems", "Product design", "Design tokens", "Motion language"],
    icon: Sparkles,
  },
  {
    id: "security",
    index: "06",
    title: "Cybersecurity",
    description:
      "Security engineering integrated from architecture to deployment. Hardening, audits, advisory — without theater.",
    capabilities: ["Audits", "Hardening", "Secure architecture", "Advisory"],
    icon: ShieldCheck,
  },
  {
    id: "transformation",
    index: "07",
    title: "Digital Transformation",
    description:
      "Modernizing how businesses operate digitally. Replatforming, internal tooling, scalable systems — done quietly.",
    capabilities: ["Replatforming", "Internal tools", "Process automation", "Roadmap"],
    icon: TrendingUp,
  },
];

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
    details: [
      "Stakeholder interviews",
      "Constraint mapping",
      "Outcome definition",
    ],
  },
  {
    id: "design",
    index: "02",
    title: "Design",
    summary: "Identity and product language as one system.",
    icon: PenTool,
    details: [
      "Brand & visual system",
      "Interaction model",
      "Component grammar",
    ],
  },
  {
    id: "architect",
    index: "03",
    title: "Architect",
    summary: "Boundaries, contracts, data shape — drawn before we build.",
    icon: Network,
    details: [
      "Domain modeling",
      "API contracts",
      "Infrastructure shape",
    ],
  },
  {
    id: "build",
    index: "04",
    title: "Build",
    summary: "Engineering with taste. Small iterations, visible progress.",
    icon: Hammer,
    details: [
      "Typed implementation",
      "Code review discipline",
      "Continuous delivery",
    ],
  },
  {
    id: "secure",
    index: "05",
    title: "Secure",
    summary: "Security is woven in, not bolted on.",
    icon: Lock,
    details: [
      "Threat modeling",
      "Hardening pass",
      "Audit & remediation",
    ],
  },
  {
    id: "scale",
    index: "06",
    title: "Scale",
    summary: "Operate, observe, evolve.",
    icon: Workflow,
    details: [
      "Performance budgets",
      "Observability",
      "Roadmap stewardship",
    ],
  },
];

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

export interface SecurityCapability {
  title: string;
  description: string;
}

export const SECURITY_CAPABILITIES: SecurityCapability[] = [
  {
    title: "Secure architecture",
    description:
      "Boundaries, trust zones and data flows defined before a line of code is written.",
  },
  {
    title: "Hardening engagements",
    description:
      "Targeted hardening of authentication, session handling, supply chain and infrastructure.",
  },
  {
    title: "Audits & advisory",
    description:
      "Structured reviews of running systems with actionable, prioritized remediation paths.",
  },
  {
    title: "Continuous posture",
    description:
      "Security woven into delivery — code review, dependency hygiene, observability.",
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
