# Experience Section Specification

> Content guide for the Experience section of the portfolio.
> Source of truth: verified facts listed in the Verified Facts section of this document.
> Follows `docs/strategy/PORTFOLIO_PLAYBOOK.md` (voice, principles, "We Never Say").
> This document defines content, hierarchy, and behavior only. It does not define final visual styling.
> The Experience section is implemented as a timeline at `src/components/experience/` and rendered in `src/pages/Portfolio.jsx`. This document is the single source of truth for the Experience section.

---

## Experience V2.1 Polish (CURRENT)

Visual refinement pass over the approved centered alternating timeline. Supersedes Interactive Timeline V2. The section is NOT locked — it waits for desktop and mobile screenshot review.

### Changes over V2

1. **Alternating timeline label positioning (bug fix)** — **TODAY**, **2025**, **2024**, **2023** sit on the EMPTY side of the timeline, always on the opposite side of their corresponding card: odd entries (card on the left) place the label right of the spine via `left: calc(50% + var(--label-offset))`; even entries (card on the right) place the label left of the spine via `right: calc(50% + var(--label-offset))`. `--label-offset: 12px` desktop / `6px` tablet. Labels alternate automatically with the cards, at the same distance from the timeline, with identical font, opacity, and spacing, and never cross the connector.
2. **Breathing room** — spacing between the intro and the first timeline item increased by ~20px: `.experience__intro` `margin: 0 auto 4.5rem` → `0 auto 5.75rem`.
3. **Refined current state (Dynamic Impact)** — card border strengthened `rgba(0, 0, 0, 0.18)` → `rgba(0, 0, 0, 0.24)`; **PRESENT** label set to explicit full opacity (`opacity: 1`). Current dot unchanged and remains the strongest visual point. No color, badge, icon, or background added.
4. **Tighter card positioning** — desktop cards moved ~10px closer to the timeline: `--card-offset: 60px` → `50px` (dot half-width `4px` + connector `40px` + `6px` gap). Tablet cards stay at `40px`.

### Unchanged from V2

- Composition timeline → connector → small gap → card is preserved; cards never touch the timeline.
- Connectors unchanged (`40px` desktop / `20px` tablet), dots unchanged, spine unchanged.
- Card width, padding, border radius, shadows, hover, and animations untouched.
- Typography, hierarchy, summaries, technologies, section title, and intro text untouched.
- Responsive behavior untouched (breakpoints, mobile stacked layout, mobile label position above each card).

---

## Approved Interactive Timeline V2 (superseded by V2.1 Polish)

Final visual refinement of the approved centered alternating timeline. Supersedes EXPERIENCE V4. The section is NOT locked — it waits for desktop and mobile screenshot review.

### Layout

- Centered alternating timeline retained: one vertical spine, four cards, card 1 → left, card 2 → right, card 3 → left, card 4 → right.
- Time moved out of the cards onto the timeline: **TODAY** (Dynamic Impact), **2025** (Digitalia Solutions), **2024** (Ocean Connecting), **2023** (Optisent).
- Each time label sits beside its own timeline dot and belongs visually to the timeline, not to either card.
- All date or period text is removed from the cards. The timeline owns time; the cards own the career story.
- Cards are anchored to their dot at the vertical center of the card, so the dot-to-card relationship reads as one composition.

### Timeline

- Main line: `1px`, `rgba(0, 0, 0, 0.08)`, perfectly centered, never animated.
- Default dots: `8px` diameter, page-background fill, `1px` border `rgba(0, 0, 0, 0.22)`, circular, no shadow.
- Current dot (Dynamic Impact): `10px` diameter, `background: var(--title-color)`, `border: var(--title-color)`, always visibly active.
- Connectors: one horizontal connector per dot toward its card, `40px` wide, `1px` tall, `rgba(0, 0, 0, 0.10)`, stopping `16px` before the card so it never merges into the card border.

### Cards

- Width: `min(420px, 100%)` with `max-width: 420px` on desktop; `320px` on tablet; `100%` on mobile.
- Height follows content naturally — cards are never equalized.
- Padding: `28px` desktop, `22px` tablet, `20px` mobile.
- Border radius: `16px`.
- Default border: `1px solid rgba(0, 0, 0, 0.08)`.
- Default shadow: `0 8px 28px rgba(0, 0, 0, 0.035)`.
- Cards stay `60px` from the spine on desktop (dot half-width `4px` + connector `40px` + `16px` gap).

### Current experience treatment

- Dynamic Impact is identifiable immediately:
  - Card border: `1px solid rgba(0, 0, 0, 0.18)`.
  - Card shadow: `0 12px 36px rgba(0, 0, 0, 0.055)`.
  - Active timeline dot as specified above.
- **PRESENT** label in the top-right of the card header:
  - text only, uppercase, `10px`, weight `600`, `letter-spacing: 0.12em`, `color: var(--title-color)`.
  - no badge background, no pill, no border, no icon.
- The current role is not visually exaggerated beyond this.

### Card hierarchy

1. **Role** — `font-weight: 600`, `var(--title-color)`, `line-height: 1.25`.
2. **Company** — smaller, `font-weight: 500`, muted, `margin-top: 5px`.
3. **Summary** — normal weight, muted, `line-height: 1.65`, `margin-top: 18px`, 2–3 lines on desktop.
4. **Technologies** — lowest weight, `margin-top: 20px`, compact wrapping.

Technology chips: `11px`, weight `500`, `line-height: 1`, `padding: 7px 11px`, radius `999px`, border `1px solid rgba(0, 0, 0, 0.08)`, transparent background, muted text, `gap: 8px`. No colored chips, no icons.

### Interaction

- On card hover and `:focus-within`:
  - card translates `-3px`;
  - border becomes `rgba(0, 0, 0, 0.16)`;
  - shadow becomes `0 14px 38px rgba(0, 0, 0, 0.065)`;
  - the card's dot becomes `var(--title-color)`;
  - the card's connector becomes `rgba(0, 0, 0, 0.35)`.
- Transition: `220ms ease-out`.
- No scale, rotation, glow, parallax, or scroll-driven animation.
- Dynamic Impact keeps a slightly stronger state even without hover.
- `prefers-reduced-motion`: transform movement removed; color and border state changes stay immediate.

### Vertical rhythm

- Between consecutive cards: `64px` desktop, `48px` tablet, `32px` mobile.
- The `120px` "between timeline item centers" figure from the refinement brief is not geometrically achievable with ~200px-tall cards without overlap; the gaps above were chosen so the section reads calm and stays shorter than the previous version. Dots are vertically centered on their cards.
- Section header → first timeline item distance on desktop: `~72px` (intro `margin-bottom: 4.5rem`).

### Responsive behavior

- **Desktop (≥ 1024px):** centered timeline, alternating left/right cards, time labels beside their dots, connectors visible.
- **Tablet (769–1023px):** centered alternating layout kept because cards fit without compression; card `max-width: 320px`; shorter connectors (`20px`); reduced offset so there is no horizontal overflow.
- **Mobile (≤ 768px):** single column; the timeline moves to the left (`16px` from the content edge); cards stack to its right at `100%` width with `2.75rem` left margin for the dot and connector; the time label appears above each card; the PRESENT label stays top-right; chips wrap naturally.
- No empty alternating columns on mobile. All four experiences stay visible on every breakpoint.

### Accessibility

- Semantic ordered list (`ol`/`li`).
- Each role is a heading below the section `h2`.
- Time labels are real text, not pseudo-element content.
- Visual left/right order is CSS-only; DOM order stays newest to oldest.
- Hover states mirror `:focus-within`.
- Decorative spine, dots, and connectors are pseudo-elements (`content: ""`), so they are not exposed to assistive technology (equivalent to `aria-hidden`).
- Visible focus states are maintained; reduced motion is respected.

---

## EXPERIENCE V4 — Career Journey Timeline (superseded by Interactive Timeline V2)

Approved direction. Superseded by the Approved Interactive Timeline V2 above. The Experience section is no longer a CV, a resume, or LinkedIn. It is an interactive career journey that feels like a premium product.

### Layout philosophy

- The section reads as a journey along a single vertical spine, not as a list of jobs.
- One centered vertical timeline runs the full height of the section. It is the visual spine and never moves.
- Each experience is a floating card attached to the spine.
- Cards alternate to keep both sides of the page alive:
  - Experience 1 → Left
  - Experience 2 → Right
  - Experience 3 → Left
  - Experience 4 → Right
- No vertical job list, no long paragraphs, no invented layout.

### Card structure

Each card contains ONLY:

1. **Period** — muted, uppercase, small.
2. **Role** — bold.
3. **Company** — medium weight.
4. **Summary** — one sentence describing the impact, lighter weight.
5. **Tech stack badges** — minimal chips.

Explicitly removed: Context, Contribution, Learning, and long paragraphs.

Card density is 4–6 lines. A recruiter understands every card in under 5 seconds.

### Timeline rules

- Spine: 1px line at the exact horizontal center of the section.
- One dot per experience, centered on the spine, aligned with the top of its card.
- A short horizontal connector joins each dot to its card. Cards never touch the spine.
- Order stays newest first: Dynamic Impact → Digitalia Solutions → Ocean Connecting → Optisent.

### Spacing rules

- The section breathes: generous whitespace everywhere.
- Large vertical gaps between timeline items (5rem desktop, 4rem tablet, 2.5rem mobile).
- Card width 380–430px on desktop (max-width 420px); full width on small screens.
- Cards sit at least 4rem from the spine on desktop (3rem on narrower desktops).
- The intro is followed by generous whitespace before the first card.

### Interaction behavior

- Hover is elegant, nothing flashy:
  - the card lifts slightly (`translateY(-4px)`);
  - the shadow increases softly;
  - the timeline dot turns black;
  - the connector line darkens.
- Transitions are short (~0.3s) and respect `prefers-reduced-motion`.

### Responsive behavior

- Desktop (≥ 1100px): centered spine, alternating cards.
- Tablet (993–1099px): same centered spine, tighter gaps, narrower cards.
- ≤ 992px: the spine moves to the left; cards stack to its right in a single column; alternation is dropped. The period stays visible on every breakpoint.

### Acceptance criteria

- [ ] Four experiences, newest first, verified facts only.
- [ ] Cards alternate left/right and never touch the spine.
- [ ] Each card contains only period, role, company, one-line summary, and tech badges.
- [ ] Hover lifts the card, deepens the shadow, blackens the dot, darkens the connector.
- [ ] Layout collapses to a left-spine single column on mobile.
- [ ] The section matches the voice: no LinkedIn, resume, or CV feel.

---

### Supersession history

- EXPERIENCE V3 (editorial, Context → Contribution → Learning) — superseded by V4.
- Earlier rejected redesign experiments and rollbacks are recorded below for history.

---

## APPROVED EXPERIENCE V3 (superseded by EXPERIENCE V4)

Final Experience copy for the V3 editorial layout. Superseded by EXPERIENCE V4 above. Everything in this section is final and supersedes the V2 copy below.

The Hero tells visitors HOW Mostafa thinks. The About explains WHY he works that way. The Experience shows WHERE that way of thinking comes from. The section must begin with a stronger editorial statement that naturally continues the narrative.

### Final section heading

`Experience is where ideas become habits.`

- One heading only.
- Typography, font size, spacing, and alignment unchanged from V2.

### Experience 1 — Dynamic Impact

- Company, role, dates, and technologies unchanged.
- Context (new):

```
Full-stack product development with React, Next.js, and Spring Boot, building features that move from design discussions to production.
```

- Contribution (new):

```
I design REST APIs, model PostgreSQL data, and improve data access so features remain reliable as products evolve. Every change goes through reviews, discussions, and an Agile workflow.
```

- Learning (unchanged):

```
Working inside a team of engineers showed me that good code is a shared discipline — reviewed, discussed, and owned together.
```

### Experience 2 — Digitalia Solutions

- Context, contribution, company, role, dates, and technologies unchanged.
- Learning (new):

```
It taught me that great user experiences often depend on decisions users never see.
```

### Experience 3 — Ocean Connecting

- Wording is approved and locked. Unchanged.

### Experience 4 — Optisent

- Context, contribution, company, role, dates, and technologies unchanged.
- Learning (new):

```
It was my first experience seeing how real users respond to the things we build, and it taught me to pay attention to data before assumptions.
```

### Unchanged in V3

- Section label (`Experience`), section intro, layout, spacing, typography, hierarchy, animation, and responsive behavior are unchanged from V2.

---

## 1. Purpose

The Experience section answers a question the Hero and About open but do not close:

- The Hero tells visitors **HOW** Mostafa thinks.
- The About explains **WHY** he works that way.
- The Experience shows **WHERE that way of thinking comes from** — the real roles, products, and teams that shaped it.

The section must build credibility: this is a person with real, current, professional work — not only personal projects. The four roles prove the full-stack positioning with a history that supports it.

It must **not** read like LinkedIn (a list of roles and responsibilities) and must **not** read like a CV (dates, titles, and task bullets). It should read like a short, human account of a path: each role shows a context, a contribution, and something learned.

---

## 2. Current Audit

Source: `src/components/experience/Experience.jsx`, `src/components/experience/experience.css`, rendered at `src/pages/Portfolio.jsx:12,61`.

### Layout

- Section padding `7rem 1.5rem 5.5rem`; compact centered container, `max-width: 720px`.
- Vertical timeline: a 1px spine (`rgba(0,0,0,0.06)`) at left 4px, entries indented `padding-left: 2rem`, a 9px dot per entry (opacity 0.14, raised to 0.45 on hover).
- Technology chips wrap under each description. The section ends cleanly; no CTA.

### Hierarchy

Visual weight, highest first:

1. Label — `Experience` (uppercase, `letter-spacing 0.12em`, opacity 0.35).
2. Heading — `A path shaped by real products and real teams.` (`clamp(1.75rem, 4vw, 2.5rem)`, centered, `max-width: 560px`).
3. Intro — small, centered, `max-width: 520px`, `line-height: 1.75`.
4. Entry — role (`h3`, semi-bold) → company (medium, opacity 0.8) + dates (tiny, uppercase, opacity 0.35) → description (small, `max-width: 520px`, `line-height: 1.7`) → chips.

### Wording

- The heading and intro are human and quiet — they match the playbook.
- The four descriptions are the weak point. They open with `Building…`, `Built…`, `Developed…`, `Created…` and read like CV bullets or LinkedIn summaries. Two use patterns this section bans: `Developed the MonPatient medical platform…` and `Implemented JWT authentication…`.
- There is no context (what the product was, why it mattered) and no learning (what each role changed in how he works). The facts are present; the narrative is not.

### Readability

- Description line length is good (`max-width: 520px`, roughly 60–70 characters per line); `line-height: 1.7` is comfortable.
- Dates are tiny uppercase at opacity 0.35 — quiet and low-emphasis, as intended.
- The spine (`rgba(0,0,0,0.06)`) and dots (0.14) are very low contrast and fixed dark-tinted regardless of theme — decorative; fine on light, nearly invisible on dark.

### Visual rhythm

- Consistent vertical rhythm: `3.5rem` under the intro, `2.5rem` between entries (2rem on mobile), clear separation between role, meta, description, and chips.
- Dots sit on one uniform spine; hover raises the dot only. Motion is minimal and already respects `prefers-reduced-motion`.

### Credibility

- Strong: real companies, real dates, real platforms (InfluMatch, MonPatient), real technologies. Specific nouns carry the proof.
- Weak: resume-style verb openings and the absence of learning make it read more like an employment history than the origin of a way of thinking.

---

## 3. Verified Facts

Only these facts are verified inside the project. Nothing else may be added.

### Person

- Mostafa Akajdid — Full-Stack Developer (playbook, Hero, JSON-LD).
- Based in Casablanca, Morocco (JSON-LD, `llms.txt`).

### Four roles

Matching data appears in `src/components/experience/Experience.jsx`, `src/components/qualification/Qualification.jsx`, and `public/llms.txt`.

**1. Dynamic Impact — Full-Stack Developer — August 2025 – Present**
- Building full-stack features with React, Next.js, and Spring Boot; REST API design; PostgreSQL data modeling; data-access optimization; Agile workflow; code reviews; shared engineering practices.
- Technologies: `React`, `Next.js`, `Spring Boot`, `Express.js`, `PostgreSQL`, `Docker`, `Git`.

**2. Digitalia Solutions — Front-End Developer — April 2025 – August 2025**
- InfluMatch platform; React 18 and TypeScript; JWT authentication; role-based user management; reusable UI components; Tailwind CSS; shadcn/ui.
- Technologies: `React 18`, `TypeScript`, `Tailwind CSS`, `shadcn/ui`, `JWT`.

**3. Ocean Connecting — Full-Stack Web Developer — August 2024 – March 2025**
- MonPatient medical platform; Next.js; secure authentication and role-based access control with NextAuth; PostgreSQL and MySQL.
- Technologies: `React`, `Next.js`, `NextAuth`, `PostgreSQL`, `MySQL`.

**4. Optisent — Web & Marketing Developer — September 2023 – June 2024**
- Email offers and campaigns with HTML and CSS; monitored and reported on campaign performance.
- Technologies: `HTML`, `CSS`, `Email Marketing`, `Data Analysis`.

### Verified cross-role facts

From `docs/content/ABOUT.md` (Verified Personal Direction):

- Most of his professional experience has included frontend responsibilities.
- MonPatient helped him understand how larger products are built and why UX and architecture must work together.

### Not verified — must not be added

- No metrics (years, users, percentages, performance numbers).
- No achievements beyond those listed above.
- No responsibilities beyond the four descriptions.
- No employer links or URLs.
- No technologies beyond the per-role lists.
- Education, certifications (Oracle), languages, location, and availability do not belong in this section — About and Skills own them.

---

## 4. Visitor Questions

The Experience section must answer:

1. Where has he worked, and in what roles?
2. Is this real, current, professional experience? (One role is ongoing — recency is visible.)
3. Is the experience frontend, backend, or full-stack? (The mix must be obvious at a glance.)
4. What kind of products did he work on?
5. What did he actually do — and what did each role teach him?
6. Why should I believe the full-stack positioning? (The history must support the claim.)
7. How does this fit the Hero and About? (The same person, the same voice, one coherent story.)

If a visitor cannot answer these from a quick scan, the section fails.

---

## 5. Writing Rules

- Structure each experience as **Context → Contribution → Learning**. All three must be present.
- **Context** — the product and the situation. One or two sentences with concrete nouns.
- **Contribution** — what he did, specific and grounded. Action verbs that describe the work.
- **Learning** — one honest line about what the role changed in how he works or thinks.
- Avoid — treat as banned in this section: `Responsible for…`, `Worked on…`, `Developed…`, `Implemented…`.
- Write like a real engineer: short, clear, specific sentences. No buzzwords, no exaggeration, no AI phrasing (playbook Voice, Content Rules).
- Never overstate seniority. Say what was done, not how senior it makes him look.
- Keep the full-stack balance. Never tilt the section frontend-only or backend-only.
- Do not read like LinkedIn (roles + responsibilities) and do not read like a CV (titles, dates, task bullets).
- Facts only. If it is not in the Verified Facts section, it does not ship.

---

## 6. Experience Card Structure

Each experience card contains, in order:

- **Company** — the employer name.
- **Role** — the verified title.
- **Dates** — the verified period; `Present` only for Dynamic Impact.
- **Context** — the product and the situation (1–2 sentences).
- **Contribution** — what he did, specific (1–2 sentences).
- **Learning** — one honest line about how the role changed his thinking.
- **Technologies** *(optional)* — only the verified per-role list, rendered as quiet chips.

Rules:

- Maximum **90 words** for Context + Contribution + Learning combined (company, role, dates, and technologies do not count).
- Role and company carry the visual weight; dates are secondary; technologies are the lowest emphasis.
- If a card cannot include all of Context, Contribution, and Learning, it is not complete.

---

## 7. Narrative Order

- Present roles **newest first** (reverse chronological), starting with Dynamic Impact — the standard professional convention and the current implementation.
- The narrative thread: start in marketing and web, move into full-stack web and frontend, arrive at full-stack. Each role is one step; the intro sentence carries the arc so the story reads as a progression.
- The current role answers "what is he doing now" immediately; the earlier roles explain the path that led there.
- Keep the list at four entries. Do not reorder without updating this document and the implementation together.

---

## 8. UI Direction

Describe only. Do not implement.

- **Timeline vs cards:** keep the vertical timeline. The spine and dots match the editorial, minimal direction; cards would make the section heavier and more resume-like. The spine is decorative and must stay unobtrusive — it is not the only indicator of order (the `ol` ordering already carries it).
- **Spacing:** keep the current rhythm — `3.5rem` below the intro, `2.5rem` between entries (2rem on mobile). Entries read as one continuous path, not separate boxes.
- **Hierarchy:** role leads each entry, company and dates second, description third, chips last. Keep dates visible on every breakpoint — recency is one of the section's answers.
- **Images:** no imagery in this section. The About owns the portrait. Icons, logos, or photos here would break the calm editorial feel and read like a LinkedIn feed.
- **Animation:** minimal. The dot hover (opacity 0.14 → 0.45) is the only motion and must respect `prefers-reduced-motion`. No reveal-on-scroll choreography.
- **Desktop:** container `720px`, timeline with dots left of the text block.
- **Tablet:** same timeline, tighter section padding (`5.5rem`).
- **Mobile:** reduced timeline indentation (`padding-left: 1.5rem`), 8px dots, entries `2rem` apart, chips wrap without clipping. Dates stay on the company line.
- **Accessibility:** real list elements (`ol`/`ul`); role titles are headings one level below the section heading; adequate touch targets; visible focus; line and dot color are never the only cue.
- The section ends cleanly after the last entry. No CTA — Contact already exists in the page flow.

---

## 9. Final English Copy — Approved Experience V2 (superseded by V3)

> The copy below was approved as Experience V2. The APPROVED EXPERIENCE V3 section at the top of this document supersedes it and is the source of truth.

### Section label

```
Experience
```

### Section heading

```
A path shaped by real products and real teams.
```

### Section intro

```
From early web and marketing work to frontend and full-stack products, each role helped me understand how software is built, used, and maintained.
```

The label, heading, and intro are already implemented and consistent with the playbook — they stay unchanged.

---

### Experience 1 — Dynamic Impact

- Company: `Dynamic Impact`
- Role: `Full-Stack Developer`
- Dates: `August 2025 – Present`

Context:

```
Full-stack feature work with React, Next.js, and Spring Boot — from API design and PostgreSQL data modeling to the path to production.
```

Contribution:

```
I design REST APIs, model PostgreSQL data, and optimize data access so features stay reliable under real usage. I deliver through an Agile workflow with regular code reviews.
```

Learning:

```
Working inside a team of engineers showed me that good code is a shared discipline — reviewed, discussed, and owned together.
```

- Technologies: `React`, `Next.js`, `Spring Boot`, `Express.js`, `PostgreSQL`, `Docker`, `Git`

(≈61 words)

---

### Experience 2 — Digitalia Solutions

- Company: `Digitalia Solutions`
- Role: `Front-End Developer`
- Dates: `April 2025 – August 2025`

Context:

```
The InfluMatch platform — a web application for connecting people, built with React 18 and TypeScript.
```

Contribution:

```
I added JWT authentication and role-based user management, and built a reusable component library with Tailwind CSS and shadcn/ui so every screen stayed consistent.
```

Learning:

```
Building the access layer showed me that the interface is shaped by the permissions behind it.
```

- Technologies: `React 18`, `TypeScript`, `Tailwind CSS`, `shadcn/ui`, `JWT`

(≈51 words)

---

### Experience 3 — Ocean Connecting

- Company: `Ocean Connecting`
- Role: `Full-Stack Web Developer`
- Dates: `August 2024 – March 2025`

Context:

```
The MonPatient medical platform, built with Next.js.
```

Contribution:

```
I added secure authentication and role-based access control with NextAuth, and handled data across PostgreSQL and MySQL.
```

Learning:

```
MonPatient showed me how larger products are built — and why user experience and architecture have to work together.
```

- Technologies: `React`, `Next.js`, `NextAuth`, `PostgreSQL`, `MySQL`

(≈40 words)

---

### Experience 4 — Optisent

- Company: `Optisent`
- Role: `Web & Marketing Developer`
- Dates: `September 2023 – June 2024`

Context:

```
My first professional role — email offers and campaigns built with HTML and CSS.
```

Contribution:

```
I built campaign emails from scratch, then monitored and reported on how they performed.
```

Learning:

```
Following real campaign metrics from the start gave me an early habit of making decisions from data.
```

- Technologies: `HTML`, `CSS`, `Email Marketing`, `Data Analysis`

(≈39 words)

---

## 10. Acceptance Criteria

The Experience section is complete only when all of the following are true:

- [ ] Only verified facts appear — companies, roles, dates, products, and technologies match the Verified Facts section exactly.
- [ ] No invented metrics, achievements, responsibilities, links, or dates appear.
- [ ] Each experience contains Context, Contribution, and Learning.
- [ ] No banned phrasing appears: "Responsible for…", "Worked on…", "Developed…", "Implemented…".
- [ ] The section reads as balanced full-stack experience — never frontend-only, never backend-only, no overstated seniority.
- [ ] The voice is human and calm, in the playbook voice — no buzzwords, no AI phrasing, no exaggeration.
- [ ] The section does not read like LinkedIn or a CV; it reads like the origin of a way of thinking.
- [ ] The four experiences display newest first, starting with Dynamic Impact.
- [ ] Each experience stays within the 90-word limit (Context + Contribution + Learning).
- [ ] The section supports the Hero ("How I think") and About ("Why I think that way") without duplicating their copy.
- [ ] Dates stay visible on every breakpoint.
- [ ] No imagery, icons, or decorative elements are added; no CTA is added.
- [ ] The section is fully readable and correctly stacked on desktop, tablet, and mobile.
- [ ] Content and this document are in sync. Any fact change updates both together. This document is the source of truth.

---

## STATUS

Section:

Experience

State:

Approved Interactive Timeline V2.1 Polish — implemented.

Not locked. Desktop and mobile screenshot review required before final approval.

---

## Experience redesign experiment (rejected)

State:

Rolled back to previous approved version.

Reason:

The redesign increased cognitive load and made the section feel closer to a resume than a premium portfolio.

---

## Visual Rollback

The experimental Experience redesign was rejected.

The section has been restored to the original timeline visual style while keeping the latest approved content.
