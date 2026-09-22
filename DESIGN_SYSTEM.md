# Giacomo Di Muro Portfolio — Design System

**Version:** 1.0  
**Status:** Active source of truth for visual design  
**Updated:** 2026-09-22

## 0. Purpose

This file is the visual and interaction source of truth for the portfolio.

Before changing UI, layout, typography, colour, charts, maps, tags, cards, buttons or interactions, read this file first. If a proposed treatment conflicts with this document, follow this document unless Giacomo explicitly requests a change to the system.

The system is intentionally small. It combines:

- **IBM Carbon Design System** for analytical rigour, data-visualisation logic, hierarchy and enterprise restraint.
- **GitHub Primer Brand** for web/editorial polish, typography, spacing, marketing-site composition and precise interaction patterns.
- **Portfolio-specific identity** for warm cream surfaces, forest green, editorial serif headlines and bespoke analytical artifacts.

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

Do not use language such as “visionary”, “dynamic”, “innovative thinker”, “AI enthusiast” or similar personal-brand filler.

### 1.3 Editorial, not dashboard

The visual language should combine:

- strategy-deck clarity;
- editorial hierarchy;
- enterprise/product precision;
- bespoke data visualisation.

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
- mature;
- analytical;
- premium;
- modern;
- restrained;
- credible;
- slightly editorial;
- business-oriented.

Useful shorthand:

> **Carbon analytical discipline + Primer Brand web polish + a bespoke warm editorial identity.**

Avoid:

- bright corporate blue as the dominant identity;
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
| `--ds-canvas` | `#F4F1E9` | Primary page background |
| `--ds-surface` | `#FBFAF6` | Main card / panel surface |
| `--ds-surface-soft` | `#F0EEE7` | Secondary neutral surface |
| `--ds-ink` | `#141A16` | Primary text / near-black |
| `--ds-muted` | `#626A63` | Secondary text |
| `--ds-subtle` | `#8B928C` | Tertiary labels / metadata |
| `--ds-forest-900` | `#0D2119` | Dark contrast surface |
| `--ds-forest-800` | `#0E563F` | Primary accent / capability tags / key data |
| `--ds-forest-500` | `#6F9A82` | Secondary data series |
| `--ds-forest-100` | `#DCE7DE` | Soft analytical fill |
| `--ds-data-low` | `#BDC9C0` | Low-priority / contextual data |
| `--ds-light` | `#F4F7F3` | Text on dark surfaces |
| `--ds-white` | `#FFFFFF` | High-contrast text / selected controls |

### 3.2 Borders

- Standard border: `rgba(20, 26, 22, 0.14)`.
- Light divider: `rgba(20, 26, 22, 0.08)`.
- Borders should structure content, not decorate it.
- Prefer a 1px divider to a shadow.

### 3.3 Accent behaviour

Forest green is the only strong brand accent.

Use it for:

- primary CTA;
- capability tags;
- selected data series;
- map priority markers;
- focus / hover details;
- key annotations.

Do not make every important element green. Use charcoal typography for most hierarchy and reserve green for selective emphasis.

### 3.4 Dark surfaces

Dark forest surfaces are allowed for occasional contrast, especially the AI workflow project.

Rules:

- dark sections must remain rare;
- text must use `--ds-light` / white with accessible contrast;
- colourful startup gradients are prohibited;
- an extremely subtle same-hue tonal gradient may be used only if it reads as depth, not decoration.

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

### 4.5 Hierarchy rule

A recruiter should be able to distinguish within seconds:

1. project / section title;
2. business context;
3. evidence / KPI;
4. supporting explanation;
5. metadata.

If multiple levels look equally loud, simplify.

---

## 5. Grid and layout

### 5.1 Page container

- Maximum content width: `1440px`.
- Horizontal page padding: `clamp(20px, 4.4vw, 72px)`.
- On small mobile: approximately `16px`.

### 5.2 Grid philosophy

Take inspiration from Carbon’s rational grid and Primer’s web composition, but do not force every section into equal cards.

Use:

- asymmetrical grids;
- strong alignment lines;
- wide margins;
- clear gutters;
- deliberate whitespace;
- occasional split-screen compositions.

### 5.3 Spacing scale

Use the following scale wherever possible:

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128px`

Avoid arbitrary values unless required for optical correction.

### 5.4 Section spacing

- Small internal separation: `12–24px`.
- Component groups: `24–48px`.
- Major section separation: `64–128px` depending on viewport.

### 5.5 Responsive behaviour

Desktop layouts may be asymmetric. Mobile layouts should become linear and readable rather than preserving desktop geometry at all costs.

On mobile:

1. context/title;
2. primary analytical visual;
3. evidence;
4. explanation / tags / CTA.

Hover must never be required to understand content.

---

## 6. Shape, borders and elevation

### 6.1 Radius scale

- `--ds-radius-xs: 4px`
- `--ds-radius-sm: 8px`
- `--ds-radius-md: 12px`
- `--ds-radius-lg: 18px`
- `--ds-radius-pill: 999px`

### 6.2 Cards

Use cards only when they express a meaningful grouping.

Default project-card treatment:

- subtle border;
- surface close to page background;
- `18px` maximum default radius;
- no heavy shadow;
- generous padding;
- internal hierarchy based on typography/dividers, not nested cards.

Avoid “card soup”. Prefer open layouts and dividers where possible.

### 6.3 Shadows

Shadows are exceptional, not default.

Allowed for:

- tooltip / floating information layer;
- temporary hover/focus overlay;
- rare elevated micro-panel.

Never use large soft shadows around every project block.

---

## 7. Capability tags and pills

### 7.1 Primary capability tag

This is the default treatment for project capability labels.

- background: `--ds-forest-800`;
- text: `--ds-white`;
- font: IBM Plex Sans;
- weight: 500;
- size: 12–14px depending on context;
- radius: pill;
- horizontal padding: approximately 12–16px;
- vertical padding: approximately 7–9px.

Examples:

`Commercial strategy` `Market analytics` `GTM`

### 7.2 Neutral metadata pill

A neutral pill may be used only for secondary, non-capability metadata.

- background: `--ds-surface-soft`;
- text: `--ds-muted`;

Do not mix primary green and neutral capability pills inside the same tag group unless there is a semantic reason.

### 7.3 Tag rules

- Usually 2–4 tags per project preview.
- Tags describe capabilities, not vague themes.
- Tags are not buttons unless explicitly interactive.
- Do not use multiple accent colours for tag categories.

---

## 8. Buttons and links

### 8.1 Primary CTA

- forest-green pill;
- white text;
- medium weight;
- no icon unless useful;
- subtle translate / colour shift on hover;
- no glow.

### 8.2 Project CTA

Preferred form:

`View project →`

Treatment:

- text link rather than large button;
- medium/semi-bold sans;
- arrow may translate approximately 4px on hover;
- underline is optional if affordance remains obvious.

### 8.3 Secondary links

CV / LinkedIn / contextual links should remain visually quieter than the primary CTA.

### 8.4 Focus

All interactive elements need visible keyboard focus using the forest accent with sufficient offset.

---

## 9. Data visualisation system

Data visualisation is a core part of the portfolio identity.

Use Carbon’s functional thinking: choose a visual based on the analytical question, not because a chart type looks attractive.

### 9.1 Choose by analytical purpose

**Comparison**  
Horizontal bars, vertical bars, dot plot, lollipop.

**Trend / change over time**  
Line chart, area only when cumulative magnitude matters, slope chart for two-point change.

**Distribution**  
Histogram, strip/dot distribution, box plot if the audience can interpret it quickly.

**Relationship**  
Scatter, bubble, matrix/quadrant when analytically meaningful.

**Part-to-whole**  
Stacked bars; avoid decorative pies unless the relationship is extremely simple.

**Geospatial**  
Accurate map with points, proportional symbols, choropleth or location labels depending on the question.

**Process**  
Structured workflow / node sequence; do not pretend a process diagram is a quantitative chart.

### 9.2 Visual-variety rule

**Do not repeat the same visual encoding in adjacent mini-charts unless direct like-for-like comparison is the analytical purpose.**

For a three-panel analytical composition, aim for different but complementary encodings.

Example for Retail Performance Intelligence:

1. **Store performance distribution** → histogram / distribution;
2. **Average ticket by cluster** → horizontal bars or dot plot;
3. **Purchase frequency / customer behaviour** → line, slope or dot-based comparison.

Do **not** use three near-identical vertical bar charts.

### 9.3 Colour hierarchy for charts

Default data palette:

- focus / selected / top priority: `--ds-forest-800`;
- secondary series: `--ds-forest-500`;
- contextual series: `--ds-data-low`;
- background/reference: very light neutral;
- annotation text: `--ds-ink` / `--ds-muted`.

Use colour to establish hierarchy, not to decorate categories.

### 9.4 Axes and gridlines

- remove axes that do not help interpretation;
- use light gridlines only when they assist reading;
- prefer direct labels over legends where practical;
- avoid boxed chart frames;
- do not show unnecessary decimals;
- prioritise business-relevant annotation.

### 9.5 Annotation

A chart should answer a question. Use concise annotation to explain the relevant pattern.

Good:

- `Top cluster shows higher purchase frequency`;
- `Selected city · priority score 82`;
- `Illustrative reconstruction with synthetic values`.

Avoid decorative labels that simply repeat what is already visible.

### 9.6 Synthetic data

Where confidentiality requires reconstruction, label the visual discreetly but clearly:

> **Illustrative reconstruction with synthetic values.**

Never imply synthetic values are client results.

---

## 10. Map system

Maps must look like analytical artifacts, not approximate illustrations.

### 10.1 Geographic accuracy is mandatory

For geographic projects:

- use a geographically accurate SVG / GeoJSON-derived outline;
- mainland Italy must be recognisable immediately;
- Sicily and Sardinia must have correct relative shapes and positions;
- city markers must be based on real coordinates or a consistent geographic projection;
- do not hand-draw an “Italy-like” polygon.

Stylisation may simplify coastlines or remove minor islands, but must never distort the country into an abstract silhouette.

### 10.2 Map hierarchy

Base territory:

- very pale green-grey fill;
- subtle boundary;
- low visual weight.

Network points:

- small contextual points in low-priority neutral;
- medium-priority in muted green;
- high-priority in forest green;
- selected city may use a white halo or ring.

### 10.3 Labels

Label only a curated set of locations to avoid clutter.

Default homepage candidates:

- Milan;
- Turin;
- Bologna;
- Venice;
- Rome;
- Bari;
- Cagliari.

### 10.4 Tooltip

Preferred micro-tooltip structure:

**Milan**  
Priority score 82  
**High opportunity**

Tooltip styling:

- surface background;
- subtle border;
- small shadow only if needed for separation;
- restrained radius;
- no dashboard chrome.

### 10.5 Map motion

Allowed:

- gentle point fade/reveal;
- subtle selected-point pulse only if very restrained;
- tooltip fade/translate.

Avoid animated map travel paths, bouncing markers or decorative motion.

---

## 11. KPI treatment

KPIs are evidence, not marketing decoration.

Examples:

**12k+**  
locations analysed

**700k+**  
records analysed

**150+**  
stores

Rules:

- use type scale and whitespace rather than large dashboard widgets;
- KPI number in IBM Plex Sans 500;
- descriptor smaller and muted;
- do not invent commercial impact;
- if a number is synthetic, label it as illustrative.

---

## 12. Project preview composition

Project previews must be consistent in quality but different in analytical artifact.

### Project 01 — Commercial Opportunity Prioritisation

Primary artifact: **accurate Italy opportunity map**.

Signal:

`Italy + commercial network + geospatial analysis + prioritisation`

### Project 02 — Retail Performance Intelligence

Primary artifact: **mini analytical report** using 2–3 different chart types.

Recommended mix:

- distribution / histogram;
- horizontal comparison / dot plot;
- line/slope/dot trend or behavioural comparison.

Signal:

`large-scale retail data + customer/store performance + commercial interpretation`

### Project 03 — AI-enabled Consulting Workflows

Primary artifact: **workflow / process system**.

Preferred logic:

`Business question → Data / documents → AI-supported analysis → Consultant review → Decision / output`

Signal:

`AI supports business judgement`

Do not reuse the exact same layout skeleton for all three previews.

---

## 13. Motion and interaction

Motion should feel like Primer: precise, small and useful.

### 13.1 Timing

- micro interaction: `140–220ms`;
- content reveal: `220–420ms`;
- avoid long cinematic animations.

### 13.2 Easing

Preferred custom ease:

`cubic-bezier(.22, 1, .36, 1)`

### 13.3 Allowed interactions

- arrow shift;
- subtle vertical lift on primary CTA;
- opacity / translate content reveal;
- tooltip fade;
- map point focus;
- small analytical highlight on project hover.

### 13.4 Prohibited interactions

- cursor replacement;
- heavy parallax;
- gratuitous 3D;
- bouncing elements;
- scroll-jacking;
- hover-only essential content.

### 13.5 Reduced motion

Respect `prefers-reduced-motion` and remove non-essential animation.

---

## 14. Accessibility

Minimum requirements:

- WCAG-aware text/background contrast;
- visible keyboard focus;
- semantic heading structure;
- accessible link text;
- analytical visuals with meaningful `aria-label`, caption or equivalent text;
- no information encoded by colour alone;
- mobile functionality without hover;
- reduced-motion support.

White text on forest green is the default high-contrast capability-tag treatment.

---

## 15. Content and confidentiality in visual design

Visual polish never overrides confidentiality.

Do not publish:

- client names unless explicitly allowed;
- client logos without permission;
- internal screenshots;
- proprietary scoring formulas;
- restricted KPIs;
- personal data;
- real internal dashboards.

Prefer reconstructed analytical artifacts with synthetic data.

Client descriptors may use forms such as:

- Global beverage company;
- Leading consumer brand;
- European retailer;
- Financial institution;
- Consulting organisation.

---

## 16. Component rules

### 16.1 Eyebrow

- IBM Plex Sans;
- uppercase;
- 600;
- `10–12px`;
- wide tracking;
- tertiary text colour;
- used for project number / section taxonomy, not long phrases.

### 16.2 Project number

Format:

`01 / 03`

Keep small, precise and secondary to the title.

### 16.3 Project client descriptor

Muted sans text directly below or near the project title.

### 16.4 Analytical caption

Small muted sans. Use for synthetic-data note, chart interpretation or source/context.

### 16.5 Dividers

1px light border. Prefer dividers to nested neutral cards.

---

## 17. Do / Don’t

### DO

- show business evidence quickly;
- use accurate geography;
- use multiple analytical encodings where the questions differ;
- annotate charts with business meaning;
- use forest green selectively;
- keep typography dominant;
- use whitespace and alignment as structural tools;
- keep interactions subtle;
- design for recruiter scanability;
- make each project visually distinct.

### DON’T

- draw approximate country silhouettes;
- use three identical charts in one analytical composition;
- use default Excel / Power BI aesthetics;
- introduce random accent colours;
- add gradients for visual excitement;
- create nested cards without a structural reason;
- use giant shadows;
- turn every label into a pill;
- make tags grey when they are primary capability tags;
- use tools/technology as the main story instead of the business problem;
- add visual elements that answer no business or navigation question.

---

## 18. Implementation rules for future edits

These rules are mandatory for future UI work.

1. **Read `DESIGN_SYSTEM.md` before editing visual code.**
2. **Use `src/styles/design-tokens.css` as the canonical token reference.**
3. Do not add a new hard-coded colour if an existing semantic token can be used.
4. Do not add a new font without updating this document first.
5. Do not add a new chart style only for decoration; tie it to an analytical purpose.
6. If a project needs a new recurring visual pattern, define the rule here before proliferating it.
7. Preserve accessibility and reduced-motion behaviour.
8. Preserve confidentiality and synthetic-data labelling.
9. For homepage-only work, avoid modifying shared Navigation, Footer or global styling unless necessary and explicitly coordinated.
10. When the design system itself changes, update this document and tokens in the same change whenever practical.

---

## 19. Current homepage corrections dictated by this system

The current homepage should converge toward the following treatments in the next implementation pass:

### Commercial Opportunity Prioritisation

- replace the approximate Italy illustration with an accurate geographic SVG / GeoJSON-derived map;
- maintain the editorial map + evidence-panel composition;
- position city markers using real geographic coordinates;
- retain three priority levels with forest/muted/neutral hierarchy.

### Retail Performance Intelligence

- replace the three similar bar charts with three different analytical encodings;
- recommended: distribution histogram + horizontal comparison + dot/line/slope visual;
- maintain `700k+ records analysed` and `150+ stores` as evidence.

### Capability tags

- switch primary capability pills from pale neutral styling to forest-green background with white text;
- reserve neutral pills for secondary metadata only.

---

## 20. Source hierarchy

When making visual decisions, use this priority order:

1. Giacomo’s latest explicit instruction;
2. this `DESIGN_SYSTEM.md`;
3. current portfolio blueprint / confidentiality requirements;
4. Carbon / Primer reference principles;
5. existing implementation, where it does not conflict with the above.

For content accuracy and confidentiality, the portfolio blueprint remains authoritative.

---

## 21. Final design test

Before shipping a visual change, ask:

1. Does this help explain a business problem, analysis, decision or evidence?
2. Is the hierarchy understandable in a few seconds?
3. Does the visual feel analytical rather than decorative?
4. Is the treatment consistent with Carbon discipline and Primer web polish without copying either?
5. Is the chart/map encoding appropriate to the question?
6. Is the colour usage restrained?
7. Would removing this element make the story less clear? If not, remove it.

The intended result is a portfolio that feels like a **curated evidence base of business problem-solving ability**, not a template and not a dashboard.
