# Content Strategy

## Positioning

PhiBrain is a **premium technology engineering, digital design and cybersecurity studio**. It is not:

- An AI/LLM company
- A productized SaaS
- A no-code agency
- A generic dev shop

Every line of copy on the site is written to defend that positioning.

## Voice

| Trait | Manifestation |
| --- | --- |
| Calm | Short, declarative sentences. No exclamation marks. |
| Technical | Comfortable with words like "edge", "typed contracts", "trust zones". |
| Executive | Speaks to a buyer who has a budget and a risk appetite. |
| Restrained | Never sells with adjectives ("powerful", "robust"). Sells with specifics. |
| Honest | Conceptual case studies are explicitly labeled. No fake compliance badges. |

The brand narrative — **"We Design. We Build. We Secure. We Scale."** — is used as rhythm, not as filler. It appears three times: hero technical accent, footer, final CTA chips.

## Section purpose & copy intent

| Section | Reader question it answers |
| --- | --- |
| Hero | Is this serious? What do they actually do? |
| Trust strip | What's their operating posture? |
| Services | Can they handle my problem end-to-end? |
| Process | Will I be in good hands? Will this be chaotic? |
| Engineering | Are they capable of the depth I need? |
| Cybersecurity | Can I trust them with sensitive systems? |
| Projects | Have they done anything like mine? |
| Final CTA | What do I do next? |

## Banned vocabulary

Never appears anywhere on the site:

- AI, LLM, neural, agent, copilot
- "Revolutionary", "game-changing", "next-gen"
- "Enterprise-ready" without specifics
- Fake compliance language (SOC2, ISO, GDPR) until we hold the actual certification

## Encouraged vocabulary

- "Engineered", "shipped", "operated", "hardened"
- "Trust zones", "threat model", "blast radius", "contracts"
- "Edge-native", "typed", "design tokens", "observability"
- "Discipline", "rigor", "calm", "restrained"

## Conceptual case study labeling

The three projects in `lib/content.ts` are labeled `conceptual: true` and surfaced as a small chip on the case study card (`Conceptual`). This is intentional: until real, NDA-cleared cases are ready to publish, the studio's pattern shape is shown honestly.

## Source of truth

All copy is in **`lib/content.ts`**:

- `NAV_LINKS`
- `SERVICES`
- `PROCESS_STEPS`
- `TRUST_ITEMS`
- `PROJECTS`
- `SECURITY_CAPABILITIES`
- `SHOWCASE_PILLARS`
- `BRAND_NARRATIVE`

Changing copy means editing one typed file. No copy lives inside section JSX except for connector text ("Discuss this engagement", section descriptions). Move connector text to `content.ts` if a CMS comes online.

## CMS migration path

If a CMS is introduced later:

1. Mirror the shape of each typed array in your CMS schema.
2. Replace static imports with a `getContent()` async loader.
3. `app/page.tsx` becomes `async function HomePage` and awaits the loader.

The component layer needs zero changes.
