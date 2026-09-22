# Giacomo Di Muro Portfolio — Design System

**Version:** 2.0  
**Status:** Active source of truth  
**Updated:** 2026-09-22

## 0. Purpose

This document is the visual and interaction source of truth for the portfolio. The portfolio is a professional evidence base for business, strategy, analytics and commercial roles — not a GitHub clone, a designer portfolio, a SaaS dashboard or an online CV.

The primary design system is **GitHub Primer Brand**:

- Components: https://primer.style/brand/components/
- Package: `@primer/react-brand`
- Implementation target: Primer Brand `0.76.x`

Primer Brand supplies the interface grammar, layout logic, typography, theming, controls and interaction patterns. Portfolio-specific maps, charts and analytical artifacts remain custom because their job is to explain Giacomo's work.

---

## 1. Core principle

> **Business question → analysis → decision → evidence**

Design exists to make this chain immediately legible. The site should communicate business judgement, analytical thinking, commercial understanding, technology literacy and execution.

Evidence beats adjectives. Prefer a relevant KPI, chart, map, workflow or concise factual statement over generic personal-brand copy.

---

## 2. Primer-first rules

1. Use Primer Brand components when an official component fits the problem.
2. Do not recreate Primer components in custom CSS merely to make them look different.
3. Extend Primer only where the portfolio has a real domain need: analytical maps, bespoke charts, case-study compositions and confidentiality-safe reconstructed artifacts.
4. Use Primer design tokens through semantic portfolio aliases rather than scattering raw colour values.
5. Keep the overall experience light, neutral, structured and border/gridline driven.
6. Avoid visual mimicry of github.com: this is Giacomo's portfolio using Primer's design language, not a GitHub-themed website.

---

## 3. Approved Primer components

### Primary

- `Hero` — homepage positioning and case-study openings.
- `Grid` / `Stack` / `Box` — layout primitives.
- `Button` — primary and secondary calls to action.
- `Label` — project capability taxonomy and metadata.
- `Statistic` — scale evidence such as `12k+`, `700k+`, `150+`.
- `Section` / `SectionIntro` — section hierarchy where useful.
- `River` — alternating case-study storytelling and media/text compositions.
- `Tooltip` — analytical visual details where interaction is genuinely useful.
- `MinimalFooter` patterns — footer composition.

### Not approved for new work

- `Bento` — do not introduce it; Primer marks it deprecated.
- Decorative components without a clear information role.
- Excessive nested cards.

---

## 4. Visual personality

The intended impression is:

- precise;
- analytical;
- modern;
- restrained;
- credible;
- enterprise-grade;
- product-literate;
- business-oriented.

Useful shorthand:

> **Primer Brand product clarity × strategy-consulting evidence × bespoke analytical storytelling.**

Avoid:

- boutique/editorial luxury styling;
- giant serif headlines;
- gradients used as decoration;
- glassmorphism;
- neon/cyberpunk AI styling;
- generic stock photography;
- excessive shadows;
- giant rounded cards;
- playful cursor effects;
- a Power BI/dashboard aesthetic.

---

## 5. Colour and theming

### 5.1 Base mode

The default site is **light mode**. Use Primer Brand's light theme as the baseline.

Portfolio semantic aliases live in `src/styles/design-tokens.css` and should resolve to Primer variables with robust fallbacks.

### 5.2 Surfaces

- Main canvas: white / Primer default canvas.
- Secondary section: subtle neutral canvas.
- Panels: default or inset Primer-like neutral surfaces.
- Dividers: 1px neutral borders/gridlines.
- Dark mode: reserved for a genuinely useful contrast module such as the AI workflow; it must use Primer dark theming rather than a custom cyber palette.

### 5.3 Accent

Use Primer's primary accent/link blue for interaction and analytical focus. Accent is functional, not decorative.

Do not introduce a competing recurring brand colour.

### 5.4 Data visualisation palette

Custom analytical visuals use a restrained hierarchy:

- focus: Primer accent blue;
- secondary: lighter blue;
- context: neutral gray;
- selected/soft area: pale blue;
- axes/grid: neutral border tokens;
- labels: default/muted text tokens.

Colour must not be the only carrier of meaning where labels or shape can reinforce it.

---

## 6. Typography

Use **Mona Sans**, supplied by Primer Brand, as the primary family across interface, headings, body, KPIs, labels and analytical graphics.

Optional Hubot Sans may be used sparingly for a technical/data accent only when it improves hierarchy.

Do not use Source Serif or another editorial serif as a core identity font. The previous Carbon/editorial typography is retired.

### Guidance

- Hero heading: bold, compact, maximum about two lines on desktop when practical.
- Body: 16–20px depending on context.
- Project titles: strong sans display hierarchy.
- KPI: large, tightly tracked numeric typography.
- Metadata: small but readable; do not shrink to decorative microtype.
- Avoid all-caps paragraphs.

---

## 7. Layout

Use Primer's responsive grid logic and strong alignment lines.

- Max content width: approximately 1280–1440px depending on module.
- Desktop gutters: generous but not editorially oversized.
- Mobile gutters: approximately 16–24px.
- Prefer clear 12-column relationships, split layouts and river patterns.
- Use whitespace to separate ideas; use borders to clarify structure.
- Asymmetry is allowed only when it improves information hierarchy.

Homepage rhythm:

1. Navigation
2. Primer Hero + analytical visual
3. Selected Work intro
4. Case 01 — large split / river
5. Case 02 — reversed split / river
6. Case 03 — controlled dark contrast
7. Experience strip
8. Minimal footer

---

## 8. Homepage component mapping

### Hero

Use Primer `Hero` in a start-aligned / gridline-oriented composition.

Content:

- eyebrow: `Business Strategy & Analytics · Milan`
- heading: `Turning business questions into structured decisions, insights and execution.`
- description: short professional descriptor
- primary CTA: `Selected work`
- secondary CTA: `Experience`

A custom analytical/architectural visual may sit beside the Hero. Do not use portrait photography as the main hero.

### Selected Work

Cases should read like editorial/product Rivers, not a gallery of identical cards.

Each case exposes:

- project number;
- business problem/title;
- anonymised client descriptor;
- 2–4 Primer `Label` tags;
- 1–2 Primer `Statistic` metrics;
- a custom analytical visual;
- concise outcome/decision language;
- `View project` button/link.

### Experience

Keep compact. It establishes credibility, not a second CV.

---

## 9. Case-study visual logic

### Commercial Opportunity Prioritisation

Primary artifact: synthetic geographic opportunity map.

Evidence: `12k+ locations analysed`.

Show prioritisation logic without revealing proprietary formulas or confidential data.

### Retail Performance Intelligence

Primary artifact: analytical performance composition using store/customer metrics.

Evidence: `700k+ records`, `150+ stores`.

Use chart variety, not dashboard clutter.

### AI-enabled Consulting Workflows

Primary artifact: business-input → AI-supported analysis → consultant review → decision-ready output workflow.

The story is controlled use of AI with human judgement, not AI spectacle.

Evidence: factual annotation `Selected as AI Champion — Consumer` where appropriate.

---

## 10. Shape, borders and elevation

- Prefer Primer borders/gridlines over shadows.
- Default radius: restrained.
- Pills are for labels/tokens, not every container.
- Avoid cards inside cards unless hierarchy genuinely requires them.
- Hover elevation should be subtle; content should not jump dramatically.

---

## 11. Interaction and motion

- Use Primer interaction behaviour where supplied.
- Custom transitions: short, subtle opacity/translate/underline changes.
- No heavy parallax or decorative WebGL.
- No cursor gimmicks.
- Respect `prefers-reduced-motion`.
- Do not hydrate React components on the client unless interaction requires it.

---

## 12. Accessibility

Minimum requirements:

- readable contrast;
- semantic heading order;
- visible keyboard focus;
- accessible link/button names;
- meaningful alt/aria text for analytical visuals;
- charts understandable without hover-only information;
- reduced-motion support;
- responsive behaviour down to narrow mobile.

---

## 13. Confidentiality

Default professional case-study mode is anonymised/reconstructed.

Do not publish without explicit approval:

- client logos/names;
- internal screenshots;
- proprietary scoring formulas;
- personal data;
- restricted KPIs;
- non-public strategy.

Synthetic reconstructions should be visually credible and can be labelled `Visual reconstruction using synthetic data for confidentiality.`

---

## 14. Technical implementation

Stack:

- Astro static output;
- React integration only for Primer Brand components;
- `@primer/react-brand`;
- GitHub;
- Vercel Hobby;
- Node 24.

Rules:

- Server-render Primer React components by default, with no `client:*` directive.
- Keep JavaScript minimal.
- Keep project content separable from layout.
- Maintain excellent Lighthouse performance.
- Reuse components; do not duplicate page-specific UI patterns.

---

## 15. Implementation hierarchy

When making future visual decisions, use this order:

1. Giacomo's latest explicit instruction.
2. `DESIGN_SYSTEM.md`.
3. Official Primer Brand component guidance.
4. `src/styles/design-tokens.css` semantic aliases.
5. Portfolio blueprint / content requirements.
6. Existing implementation.

If the existing implementation conflicts with this system, migrate the implementation rather than preserving the conflict.

---

## 16. Canonical identity summary

The old **Carbon + Primer + editorial serif** hybrid is retired.

The portfolio identity is now:

> **Primer Brand foundations + Mona Sans + gridline-led neutral surfaces + restrained blue interaction language + custom analytical artifacts.**

Most important content principle:

> **Problem → Analysis → Decision → Evidence**

Most important positioning principle:

> **Business first. Data and AI as capabilities.**
