# Giacomo Di Muro Portfolio — Design System

**Version:** 1.1  
**Status:** Active source of truth for visual design  
**Updated:** 2026-09-22

## 0. Purpose

This file is the visual and interaction source of truth for the portfolio.

Before changing UI, layout, typography, colour, charts, maps, tags, cards, buttons or interactions, read this file first. If a proposed treatment conflicts with this document, follow this document unless Giacomo explicitly requests a change to the system.

The system combines:

- **IBM Carbon Design System** for analytical rigour, data-visualisation logic, hierarchy, Carbon blue and enterprise restraint.
- **GitHub Primer / Primer Brand** for neutral surfaces, typography, spacing, web composition and interaction polish.
- **Portfolio-specific editorial restraint** for Source Serif 4 headlines, asymmetrical composition and business-case storytelling.

This is inspiration, not a visual clone of Carbon, GitHub, IBM or any other company.

Official references:

- Carbon: https://carbondesignsystem.com/
- Carbon data visualisation: https://carbondesignsystem.com/data-visualization/chart-types/
- GitHub Primer Brand: https://primer.style/brand/

---

## 1. Design principles

### 1.1 Business first

The website must read first as evidence of business problem solving, not as a design exercise.

**Priority:**

`Business question → analysis → decision → evidence`

Visual design exists to make this chain easier to understand.

### 1.2 Evidence over claims

Prefer a map, KPI, chart, workflow or concise factual statement over generic adjectives.

Do not use generic personal-brand filler.

### 1.3 Editorial, not dashboard

The visual language should combine strategy-deck clarity, editorial hierarchy, enterprise/product precision and bespoke data visualisation.

The site must **not** look like Power BI, a SaaS admin dashboard, a creative-agency portfolio or a CV exported to HTML.

### 1.4 Restraint creates quality

Use fewer elements, stronger hierarchy and more whitespace. Avoid decorative components with no business meaning.

### 1.5 Analytical variety inside visual consistency

The overall visual language stays consistent, but project artifacts must not all use the same chart or card composition.

Different business questions should produce different visual encodings.

### 1.6 Human judgement over automation

AI may support analysis and execution, but the portfolio should frame it as part of a controlled business process with human review.

---

## 2. Visual personality

The intended impression is:

- precise;
- analytical;
- mature;
- premium;
- modern;
- restrained;
- credible;
- enterprise-grade;
- slightly editorial;
- business-oriented.

Useful shorthand:

> **Carbon analytical discipline and blue system + GitHub neutral web polish + bespoke editorial composition.**

Avoid:

- forest green as an identity colour;
- warm boutique / luxury palettes;
- neon;
- glassmorphism;
- startup gradients;
- large decorative 3D objects;
- excessive rounded cards;
- generic stock photography;
- playful cursor effects;
- “AI guru” visual language.

---

## 3. Colour system

Use semantic tokens. Do not introduce hard-coded colours when an existing token expresses the same role.

### 3.1 Core palette

| Token | Value | Role |
|---|---:|---|
| `--ds-canvas` | `#F6F8FA` | Primer-like page background |
| `--ds-surface` | `#FFFFFF` | Main card / panel surface |
| `--ds-surface-soft` | `#F4F4F4` | Carbon Gray 10 secondary surface |
| `--ds-ink` | `#1F2328` | Primary text |
| `--ds-muted` | `#57606A` | Secondary text |
| `--ds-subtle` | `#6E7781` | Tertiary labels / metadata |
| `--ds-blue-800` | `#002D9C` | Strong blue / selected dark-blue state |
| `--ds-blue-700` | `#0043CE` | Hover / active blue |
| `--ds-blue-600` | `#0F62FE` | Primary Carbon accent |
| `--ds-blue-300` | `#78A9FF` | Secondary analytical series / dark-surface accent |
| `--ds-blue-100` | `#D0E2FF` | Soft analytical fill |
| `--ds-graphite-100` | `#161616` | Carbon dark surface |
| `--ds-graphite-90` | `#262626` | Elevated dark surface |
| `--ds-graphite-70` | `#525252` | Dark border / muted dark UI |
| `--ds-data-low` | `#C1C7CD` | Contextual data |
| `--ds-white` | `#FFFFFF` | High-contrast text / selected controls |

### 3.2 Borders

- Standard border: `#D0D7DE`.
- Light divider: `#EAEEF2`.
- Borders structure content; they do not decorate it.
- Prefer 1px dividers to shadows.

### 3.3 Accent behaviour

**Carbon blue is the single primary brand accent.**

Use `--ds-blue-600` for:

- primary CTA;
- capability tags;
- links / selected states;
- focus rings;
- key chart series;
- map high-priority markers;
- annotations requiring emphasis.

Use `--ds-blue-700` for hover / active states.

Use `--ds-blue-300` for secondary analytical data and emphasis on dark surfaces.

Do not use green as a recurring brand or interface colour. Green is allowed only when a future visualization genuinely needs a semantic positive/success state; it must not define the portfolio identity.

### 3.4 Dark surfaces

Dark graphite surfaces are allowed for occasional contrast, especially the AI workflow project.

Rules:

- base: `--ds-graphite-100`;
- elevated panels: `--ds-graphite-90`;
- dark borders: `--ds-graphite-70`;
- interactive / analytical accent: Carbon blue;
- text: white / Carbon light neutrals;
- colourful startup gradients are prohibited;
- subtle tonal blue depth may be used only when it reads as information hierarchy rather than decoration.

---

## 4. Typography

### 4.1 Families

**Sans:** IBM Plex Sans  
Use for interface, body copy, metadata, labels, charts, buttons and KPIs.

**Serif:** Source Serif 4  
Use for selected project titles, major editorial statements and occasional emphasis.

Do not add a third font without updating this system first.

### 4.2 Typographic character

The serif must feel authoritative and editorial, not fashion/luxury/wedding.

The sans must feel contemporary, rational and business/product oriented.

### 4.3 Type scale

Use responsive `clamp()` where appropriate, but stay within these bands.

| Role | Family | Weight | Desktop guidance |
|---|---|---:|---:|
| Display / Hero | Source Serif 4 | 400 | 56–92px |
| H1 project | Source Serif 4 | 400 | 48–72px |
| H2 section | Source Serif 4 | 400 | 32–52px |
| H3 analytical | IBM Plex Sans or Source Serif 4 | 500 / 400 | 20–28px |
| Body large | IBM Plex Sans | 400 | 18–20px |
| Body | IBM Plex Sans | 400 | 16px |
| Body compact | IBM Plex Sans | 400 | 13–15px |
| KPI large | IBM Plex Sans | 500 | 48–80px |
| UI / CTA | IBM Plex Sans | 500–600 | 13–15px |
| Eyebrow | IBM Plex Sans | 600 | 10–12px |
| Chart label | IBM Plex Sans | 400–500 | 11–14px |

### 4.4 Tracking and line height

- Large serif headings: slightly tight tracking (`-0.02em` to `-0.05em`).
- KPI numbers: tight tracking (`-0.04em` to `-0.065em`).
- Body: `1.45–1.6` line-height.
- Eyebrows: uppercase with wide tracking (`0.12em–0.18em`).
- Never use all caps for paragraphs or major headings.

---

## 5. Grid and layout

### 5.1 Page container

- Maximum content width: `1440px`.
- Horizontal page padding: `clamp(20px, 4.4vw, 72px)`.
- On small mobile: approximately `16px`.

### 5.2 Grid philosophy

Take inspiration from Carbon’s rational grid and Primer’s web composition, but do not force every section into equal cards.

Use asymmetrical grids, strong alignment lines, wide margins, clear gutters, deliberate whitespace and occasional split-screen compositions.

### 5.3 Spacing scale

Use:

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128px`

Avoid arbitrary values unless required for optical correction.

---

## 6. Shape, borders and elevation

- Radius should be restrained: 4 / 8 / 12 / 18px.
- Pills are reserved for tags / metadata, not generic card shapes.
- Prefer borders and tonal surface shifts to shadows.
- Avoid cards-inside-cards unless hierarchy genuinely requires it.
- Dark analytical cards should use Carbon graphite, not green-black.

---

## 7. Tags and controls

### 7.1 Primary capability tag

- background: `--ds-blue-600`;
- text: white;
- radius: pill;
- padding: compact;
- font: IBM Plex Sans semibold;
- use for project capability taxonomy.

### 7.2 Neutral tag

- background: `--ds-surface-soft`;
- text: `--ds-muted`;
- use only for secondary metadata.

### 7.3 Buttons and links

Primary CTA:
- Carbon Blue 60;
- white text;
- hover: Carbon Blue 70;
- no gradient.

Text links:
- ink by default;
- Carbon blue on hover / focus where emphasis is useful;
- underline / motion must remain subtle.

---

## 8. Data visualisation

Data visualisation follows Carbon’s principle: choose the encoding based on the analytical question, not based on decoration.

### 8.1 Semantic chart palette

- **Focus:** `--ds-blue-600`.
- **Secondary / comparison:** `--ds-blue-300`.
- **Context / baseline:** `--ds-data-low`.
- **Soft area / selected region:** `--ds-blue-100`.
- **Grid / axes:** border neutrals.
- **Labels:** ink / muted / subtle according to hierarchy.

### 8.2 Variety rule

In a multi-chart composition, do not repeat the same visual encoding unless direct comparison requires it.

Recommended mix for retail analytical cards:

- distribution / histogram;
- horizontal bar comparison;
- dot plot / line trend;
- matrix or heatmap when analytically justified.

### 8.3 Chart restraint

- no decorative 3D charts;
- no rainbow palette;
- no green as default “good” series;
- no saturated colours beyond the defined Carbon blue scale unless a semantic state genuinely requires it;
- contextual series should remain neutral.

---

## 9. Maps

### 9.1 Geography

Maps must use recognisable, geographically credible boundaries. Stylisation may alter fill, stroke and level of detail, never the identity of the territory.

### 9.2 Map palette

- country / territory fill: Blue 10 / soft neutral;
- high priority: Blue 60;
- medium priority: Blue 30;
- lower priority: neutral data gray;
- map callouts: white surface + neutral border;
- selected state: Blue 70 / Blue 80 as needed for contrast.

### 9.3 Map interaction

Tooltips and selected-market panels should feel like analytical UI, not consumer mapping products.

---

## 10. Dark analytical / AI compositions

The AI workflow card and similar high-contrast modules use Carbon graphite.

- base: Gray 100 `#161616`;
- nested panels: Gray 90 `#262626`;
- borders: Gray 70 `#525252`;
- primary highlight: Blue 60;
- secondary highlight: Blue 30;
- text: white / light gray;
- AI is framed as supporting business judgement, not replacing it.

Avoid green glow, cyberpunk effects, neon or “AI magic” visuals.

---

## 11. Motion and interaction

- Fast feedback: ~160ms.
- Standard transitions: ~220ms.
- Reveals: ~360ms.
- Easing: `cubic-bezier(.22, 1, .36, 1)`.
- Prefer opacity, underline, small translation and subtle scale.
- No cursor gimmicks.
- Respect `prefers-reduced-motion`.

---

## 12. Accessibility

- Maintain WCAG-readable contrast.
- Interactive blue on white must use Carbon Blue 60 or darker.
- Text on graphite surfaces must use white / sufficiently light gray.
- Keyboard focus is visible and uses the primary blue focus token.
- Data meaning must not rely only on colour when practical; labels / hierarchy should reinforce it.

---

## 13. Confidentiality and evidence

- Do not use client names unless explicitly approved.
- No client logos, internal screenshots, proprietary formulas or confidential KPI values.
- Synthetic / illustrative figures must be labelled as such.
- Evidence must remain credible and business-oriented.

---

## 14. Do / Don’t

### Do

- use Carbon blue as the single recurring brand accent;
- use GitHub / Primer-style neutral surfaces;
- use graphite for dark contrast sections;
- use blue + neutral data hierarchy;
- maintain generous whitespace;
- make analytical visuals look decision-oriented;
- keep typography editorial but business-like;
- use semantic tokens rather than raw hex values.

### Don’t

- do not use forest green as identity;
- do not introduce random blue shades outside the token system;
- do not use gradients as decoration;
- do not create a dashboard look;
- do not use large generic icon sets;
- do not repeat the same chart type across adjacent analyses;
- do not use rounded cards everywhere;
- do not hard-code colours when a token exists.

---

## 15. Implementation hierarchy

When making future visual decisions, use this order:

1. Giacomo’s latest explicit instruction.
2. `DESIGN_SYSTEM.md`.
3. `src/styles/design-tokens.css`.
4. Portfolio blueprint / project requirements.
5. Carbon and Primer references.
6. Existing implementation.

If the existing implementation conflicts with the design system, migrate the implementation rather than preserving the conflict.

---

## 16. Canonical identity summary

The portfolio is **not green-led**.

Its visual identity is:

**Primer neutral canvas + Carbon blue interaction/data language + Carbon graphite contrast + IBM Plex Sans + Source Serif 4 + restrained editorial composition.**

That combination should be recognisable across homepage, navigation, footer, project previews, maps, charts, case-study pages and future components.
