# Skills Section Specification

> Content guide for the Skills section of the portfolio.
> Source of truth: the verified inventory in section 3 of this document.
> Follows `docs/strategy/PORTFOLIO_PLAYBOOK.md` (voice, principles, "We Never Say", Content Rules).
> This document defines content, hierarchy, and behavior only. It does not define final visual styling.
> The Skills section is implemented at `src/components/skills/` (`Skills.jsx`, `SkillItem.jsx`, `skills.css`) and rendered in `src/pages/Portfolio.jsx:62` between Experience and the case-study preview, immediately before Contact.
> This document is the single source of truth for the Skills section.

---

## Approved Skills V1

Approved and implemented. Everything in this section is final and supersedes the planning in sections 2–9 where they conflict. The section is **NOT locked** — it waits for desktop and mobile screenshot review (see STATUS).

The section keeps the current editorial shell: 720px container, two stacked groups, two-column item grid on desktop, single column at ≤576px, thin group divider, icon + label rows, and the existing section rhythm. No redesign, no cards, no bars, no proficiency indicators.

### Eyebrow

`Skills` (was `Technical Expertise`). Eyebrow typography and position unchanged.

### Heading and introduction

Heading (unchanged):

```
Tools evolve. The way you solve problems matters longer.
```

Introduction (replaced):

```
I work across interfaces, backend systems, data, and delivery. The tools change from one product to another, but these are the technologies and practices that shape most of my work.
```

### Approved groups

Exactly two groups, 16 skills total. None added, none removed, none duplicated.

Group 1 — `Core product stack`

Description: `The technologies I use to build complete web products, from interfaces and APIs to authentication and data.`

Items, in exact order:

1. React
2. Spring Boot
3. Next.js
4. PostgreSQL
5. TypeScript
6. Node.js / Express
7. REST APIs
8. MySQL
9. Tailwind CSS
10. shadcn/ui
11. JWT / NextAuth

Group 2 — `Delivery and collaboration`

Description: `The tools and practices that help the work stay maintainable, reviewable, and ready to ship.`

Items, in exact order:

1. Git
2. GitHub
3. Docker
4. GitHub Actions
5. Agile / Scrum

### CI/CD → GitHub Actions

The displayed Skills label `CI/CD` was renamed to `GitHub Actions` so the label matches its existing GitHub Actions icon. Only the Skills label changed; Experience and Projects content are untouched. The inventory in section 3 is updated accordingly and the label now matches its icon.

### Primary emphasis removed

The `primary` flag (icon opacity 0.6, title-color name) was removed from Git, Docker, and GitHub Actions. All 16 items share one base style. No proficiency emphasis of any kind is introduced — grouping and ordering provide the hierarchy.

### Group hierarchy

- Group titles: `0.875rem`, weight `600`, `line-height 1.3`, `letter-spacing 0`, `text-transform none`, `var(--title-color)`.
- Group descriptions: `var(--small-font-size)`, `line-height 1.65`, `var(--text-color)`, `opacity 0.72`, `max-width 560px`, `margin-top 8px`.
- Groups are not cards; the thin divider and spacing carry the structure.

### Skill item style

- Icon 20px, icon opacity 0.55, name opacity 0.88, item `padding-block 10px`, icon/name gap 12px.
- Pointer-device hover only: icon opacity 0.8, name opacity 1, transition 180ms ease-out; the hover communicates no extra information.
- `prefers-reduced-motion`: transitions removed.

### Closing copy

```
I do not try to collect tools. I focus on understanding what a product needs and learning what helps me build it well.
```

Placement unchanged; opacity 0.72; `max-width 560px`; centered. No CTA.

### Semantic structure

- `h2` section heading, `h3` per group title, `ul` per group list, `li` per item.
- Icons `aria-hidden="true"`; every item retains a visible text label.
- Static rows are not focusable.

### Responsive behavior

- Desktop: two columns per group.
- ≤576px: one column, item order preserved, no horizontal overflow, no clipped labels.
- Section breakpoints and outer padding unchanged.

---

## 1. Purpose

The Skills section sits between Experience and Projects. It answers the question the rest of the page poses but does not close: *what can he actually build, and with what?*

The section must:

- Support the full-stack positioning. The section must never read frontend-only or backend-only; it must show the balance the playbook requires.
- Show technical range without becoming a technology dump. A flat list of names is inventory, not communication. The section must give every item a reason to be there.
- Help recruiters scan quickly. The primary audience must read the section in under ten seconds and leave with a correct mental model of the stack.
- Connect naturally between Experience and Projects. It should read as the capability layer that Experience proves and Projects demonstrate, without repeating either.
- Distinguish strong working skills from tools only used occasionally. This distinction must be communicated by grouping, order, and context derived from verified usage — never by unverified proficiency labels (see section 6).

It must not repeat Experience descriptions or project details. Experience owns the roles and stories; Projects owns the shipped work. Skills owns only the technology and tool set and its shape.

---

## 2. Current Audit

Source: `src/components/skills/Skills.jsx`, `src/components/skills/SkillItem.jsx`, `src/components/skills/skills.css`, `src/pages/Portfolio.jsx:62`, `src/components/header/Header.jsx:8-18`.

### 2.1 What exists today

Visible copy, verbatim:

- Label: `Technical Expertise`
- Heading: `Tools evolve. The way you solve problems matters longer.`
- Intro: `Every product asks different technical questions. I don't start with a favorite framework — I start with the problem. Once the constraints are clear, choosing the right architecture and technology becomes the easy part.`
- Group 1 title: `Technologies I use every day` — description: `The tools I reach for when building complete products, from interfaces to backend systems.` — 10 items.
- Group 2 title: `How I work` — description: `The practices that help software stay reliable, maintainable, and easy to evolve.` — 6 items.
- Closing: `I don't aim to know every technology. I aim to become the kind of engineer who can learn any technology when it matters.`

### 2.2 Layout

- Section padding `7rem 1.5rem 5.5rem` (stepped to `5.5rem` / `4.5rem` / `4rem` / `3.5rem` at 992 / 768 / 576 / 350px) — identical rhythm to About, Experience, Case Studies, and Contact. Consistent.
- Compact centered container, `max-width: 720px`.
- Two groups separated by a thin top rule (`1px rgba(0,0,0,0.06)`), matching the editorial pattern.
- Each group: title → description → 2-column icon grid (`repeat(2, 1fr)`, `gap 0.75rem 2rem`), collapsing to 1 column at ≤576px.
- Items are flat rows: 20px icon at `opacity 0.35` + name at `--small-font-size`, `padding 0.5rem 0`.

### 2.3 Hierarchy

Visual weight, highest first:

1. Label — `Technical Expertise` (tiny, uppercase, opacity 0.35).
2. Heading — `clamp(1.75rem, 4vw, 2.5rem)`, semi-bold, centered.
3. Intro — small, centered, `line-height 1.75`.
4. Group title — tiny uppercase (0.625rem), opacity 0.35. **Very quiet for a structural heading.**
5. Group description — small, `opacity 0.5`.
6. Item rows — icon + name, equal weight, except `primary` items (Git, Docker, CI/CD) where the icon rises to 0.6 and the name takes `var(--title-color)`.

### 2.4 Wording

- Heading, intro, and closing are in the playbook voice: short, human, no buzzwords. The heading is philosophy-forward rather than skills-forward, so it contributes to voice but almost nothing to scanning.
- Group 1 title claims usage frequency (`every day`) — a claim that is not verifiable and not evidenced anywhere in the codebase.
- Group 2 title (`How I work`) is broad enough to hold tools, processes, and a security technology at once.

### 2.5 Issues

**Issue 1 — The section does not distinguish strong working skills from occasional tools.**
- Wrong: 16 items are rendered flat. The only emphasis mechanism (`primary`) is applied to Git, Docker, and CI/CD — workflow tools — while the technologies the roles and projects are built on (React, Next.js, TypeScript, Spring Boot, PostgreSQL) receive no emphasis at all.
- Why it matters: a recruiter cannot tell what is central to the work versus supporting it. The emphasis, as implemented, argues the opposite of the evidence.
- Severity: High.
- Direction: re-anchor emphasis on the verified core stack (or remove the unlabeled emphasis entirely), and/or make central-versus-supporting explicit through grouping and context derived from verified usage.

**Issue 2 — The grouping does not map to disciplines.**
- Wrong: group 1 is organized by usage frequency (`every day`), group 2 by practices (`How I work`). There is no frontend / backend / data / delivery split anywhere.
- Why it matters: "does he do backend?" is the single most important question for the balanced full-stack positioning, and the section does not answer it by structure; a reader must mentally sort all 16 rows.
- Severity: High.
- Direction: adopt a discipline-aware grouping (proposed in section 5) or, at minimum, order the current groups so the balance is visible.

**Issue 3 — Group 1 is ordered frontend-first.**
- Wrong: the first five rows are React, Next.js, TypeScript, Tailwind CSS, shadcn/ui — all frontend — before any backend item appears.
- Why it matters: the research audit (`docs/research/PORTFOLIO_AUDIT_2026-07-31.md`) already concludes the portfolio reads frontend-heavy. The first five rows of the only "every day" group re-tilt the balance the playbook mandates.
- Severity: Medium.
- Direction: interleave the order or lead with backend/data items so the section reads balanced from row one.

**Issue 4 — `How I work` mixes tools, processes, and a security technology.**
- Wrong: the group holds tools (Docker, Git, GitHub), processes (CI/CD, Agile/Scrum), and an authentication technology (JWT / NextAuth) under a description that claims "practices that help software stay reliable".
- Why it matters: JWT/NextAuth is a stack technology, not a working practice; burying it in the process group hides a backend capability and stretches the group's stated meaning.
- Severity: Medium.
- Direction: re-slot authentication with the stack/backend context or rename the group precisely; keep true practices (CI/CD, Agile) separate from tools (Docker, Git).

**Issue 5 — Icon and label mismatches.**
- Wrong: `REST APIs` renders the generic `RiCodeLine` icon (it is a concept, not a brand); `CI/CD` renders the GitHub Actions logo (`SiGithubactions`) although the label is generic; `Node.js / Express` uses the Node.js mark for a two-part label.
- Why it matters: icons imply a brand that does not match the label, adding visual noise and a small misleading signal.
- Severity: Low.
- Direction: for concept items, drop the icon or relabel to match it (e.g., `GitHub Actions` instead of `CI/CD`).

**Issue 6 — Eyebrow is inconsistent with sibling sections.**
- Wrong: the label is `Technical Expertise`, while About, Experience, Case Studies, and Contact use single-word nouns (`About`, `Experience`, `Projects`, `Contact`).
- Why it matters: the playbook's Consistency principle; recruiters recognize `Skills` instantly and the longer phrase adds nothing.
- Severity: Low.
- Direction: use `Skills`.

**Issue 7 — Group titles are too quiet to carry structure.**
- Wrong: group titles render at `--tiny-font-size` (0.625rem), uppercase, opacity 0.35 — visually weaker than the intro text.
- Why it matters: the two structural headings are nearly invisible, so the distinction between "every day" and "how I work" is not perceived during a scan.
- Severity: Medium.
- Direction: raise group-title size/weight/contrast modestly so the grouping is felt, without adding cards or ornament.

**Issue 8 — Low contrast on several text-bearing elements.**
- Wrong: label 0.35, group description 0.5, closing line 0.38, icons 0.35. On `--text-color` these fall below WCAG AA for small text.
- Why it matters: readability and accessibility; the About audit flagged the same site-wide pattern, and new Skills text should not repeat it.
- Severity: Medium (accessibility).
- Direction: use a muted text token or raise opacity on text-bearing elements; icons may stay quiet since names always accompany them.

**Issue 9 — `primary` is a color-only, unlabeled emphasis.**
- Wrong: there is no legend, no `aria` cue, and no textual explanation for why Git, Docker, and CI/CD are emphasized.
- Why it matters: the emphasis silently asserts something about those three items; if read as proficiency it violates the Content Rules in section 6.
- Severity: Medium.
- Direction: define the semantics explicitly, derive them from verified usage, or remove the mechanism.

**Issue 10 — The section is unreachable from the navigation.**
- Wrong: the header nav contains About, Projects (case-studies), and Contact (`Header.jsx:8-11`); `skills` exists in `SECTION_IDS` but has no nav item.
- Why it matters: the primary audience may never discover the section through navigation; it is only reachable by scrolling the home page.
- Severity: Medium (navigation scope, noted here for context, not to be fixed inside Skills).
- Direction: add a `Skills` nav item when the header is next touched, or accept Home-scroll-only reachability explicitly.

**Issue 11 — Heavy redundancy with Experience chips and Projects stacks.**
- Wrong: 11 of the 16 items also appear as Experience technology chips (React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, Spring Boot, Express, PostgreSQL, MySQL, Docker, Git) and several appear again in project stacks (Next.js, React, Node.js, Tailwind CSS, PostgreSQL).
- Why it matters: the section risks being the third listing of the same bare names; section 6 forbids duplicated stack lists from Projects.
- Severity: Low/Medium.
- Direction: present each item with added context (discipline, usage) rather than a bare repetition of the same names.

**Issue 12 — No per-item context.**
- Wrong: every row is icon + name, nothing more. Nothing says why an item matters or where it is used.
- Why it matters: a flat, context-free list is the definition of a technology dump; the purpose requires a strong/occasional distinction and supporting context.
- Severity: Medium.
- Direction: let grouping and order imply context (preferred, cheap) or add a quiet usage signal (heavier).

**Issue 13 — Uniform rhythm inside each grid.**
- Wrong: five identical rows in group 1 with no differentiation; the grid reads as a single block.
- Why it matters: visual rhythm principle; equal weight on everything communicates equal importance, which is the core problem stated in Issue 1.
- Severity: Low.
- Direction: differentiation through order, spacing, and quiet emphasis — not cards, bars, or decorative elements.

### 2.6 What works (keep)

- No percentage bars, star ratings, years claims, or fake expertise labels. Complies with section 6 already.
- No animation exists; the reduced-motion block is empty but harmless.
- Icons are `aria-hidden="true"` and every item carries a real text name — no information is conveyed only by icons.
- The two-column grid, thin rules, and 720px editorial rhythm are fully consistent with About, Experience, and Contact.
- Mobile behavior is sane: 2 columns → 1 column at ≤576px.
- The heading, intro, and closing copy are in the playbook voice — human, calm, specific.

---

## 3. Verified Skills Inventory

Everything below is extracted verbatim from `src/components/skills/Skills.jsx` as of Approved Skills V1. Nothing is added from general knowledge, and no proficiency level is inferred. "Level/rating shown" records what the UI actually displays.

Note on emphasis: Approved Skills V1 removed the `primary` flag. All 16 items render with one base style (icon opacity 0.55, name opacity 0.88). No emphasis flag, rating, or proficiency indicator exists in the data.

| Displayed name | Current category | Icon (source) | Level / rating shown | Appears elsewhere (verified) |
| --- | --- | --- | --- | --- |
| React | Group 1 — Core product stack | `SiReact` (`react-icons/si`) | None | Experience chips (Dynamic Impact, Ocean Connecting; `React 18` at Digitalia), Qualification, Project stack (Gemini case study), SEO meta |
| Spring Boot | Group 1 — Core product stack | `SiSpringboot` (`react-icons/si`) | None | Experience chip (Dynamic Impact), Qualification, SEO meta |
| Next.js | Group 1 — Core product stack | `RiNextjsLine` (`react-icons/ri`) | None | Experience chips (Dynamic Impact, Ocean Connecting), Qualification, Project stacks (5 of 6 projects), SEO meta |
| PostgreSQL | Group 1 — Core product stack | `BiLogoPostgresql` (`react-icons/bi`) | None | Experience chips (Dynamic Impact, Ocean Connecting), Project stacks (Real Estate Platform, MonPatient), Qualification, SEO meta |
| TypeScript | Group 1 — Core product stack | `SiTypescript` (`react-icons/si`) | None | Experience chip (Digitalia) |
| Node.js / Express | Group 1 — Core product stack | `SiNodedotjs` (`react-icons/si`) | None | Experience chip (Express.js, Dynamic Impact), Project stacks (MonPatient, StoryCareer — Node.js), Qualification |
| REST APIs | Group 1 — Core product stack | `RiCodeLine` (`react-icons/ri`) | None | Qualification ("REST API design") |
| MySQL | Group 1 — Core product stack | `SiMysql` (`react-icons/si`) | None | Experience chip (Ocean Connecting), Qualification |
| Tailwind CSS | Group 1 — Core product stack | `SiTailwindcss` (`react-icons/si`) | None | Experience chip (Digitalia), Project stack (StoryCareer) |
| shadcn/ui | Group 1 — Core product stack | `SiShadcnui` (`react-icons/si`) | None | Experience chip (Digitalia) |
| JWT / NextAuth | Group 1 — Core product stack | `SiJsonwebtokens` (`react-icons/si`) | None | Experience chips (JWT at Digitalia, NextAuth at Ocean Connecting), Qualification |
| Git | Group 2 — Delivery and collaboration | `SiGit` (`react-icons/si`) | None | Experience chip (Dynamic Impact) |
| GitHub | Group 2 — Delivery and collaboration | `SiGithub` (`react-icons/si`) | None | Home social links, Footer |
| Docker | Group 2 — Delivery and collaboration | `SiDocker` (`react-icons/si`) | None | Experience chip (Dynamic Impact) |
| GitHub Actions | Group 2 — Delivery and collaboration | `SiGithubactions` (`react-icons/si`) | None (label now matches its icon) | None elsewhere |
| Agile / Scrum | Group 2 — Delivery and collaboration | `RiLoopLeftLine` (`react-icons/ri`) | None | Experience copy ("Agile workflow", Dynamic Impact), Qualification |

Rules for this inventory:

- Do not invent skills. If it is not in the table above, it does not ship.
- Do not add technologies from general knowledge (no Java, no Prisma, no Redux in Skills just because they appear in project stacks — the Skills set is its own verified list).
- Do not infer proficiency levels. None are shown today, and section 6 forbids introducing them.

---

## 4. Visitor Questions

The section must answer all of the following from a scan of no more than ten seconds:

1. **What can Mostafa build with confidence?** — The section must communicate real capability, evidenced by the technology set that the Experience and Projects sections actually use. A technology that appears nowhere else in the portfolio must not be presented as core.
2. **Is he frontend-heavy, backend-heavy, or balanced?** — The grouping and ordering must make the full-stack balance explicit. A reader must be able to answer this without counting rows.
3. **Which technologies are central to his work?** — The section must distinguish the technologies his products are actually built on (React, Next.js, TypeScript, Spring Boot, Node.js, PostgreSQL, MySQL, REST APIs) from the tools that support the work (Git, GitHub, Docker, CI/CD, Agile).
4. **Which tools support his workflow?** — Practices and tooling (version control, containers, CI/CD, process) must read as the supporting layer, not as the headline.
5. **Can the section be understood in under 10 seconds?** — The structure, not the text, must do the answering. If the reader has to stop and parse, the section fails.

If a visitor cannot answer these from a quick scan, the section fails.

---

## 5. Information Architecture

### 5.1 Proposal (not approved)

A three-group structure:

- **Frontend** — React, Next.js, TypeScript, Tailwind CSS, shadcn/ui (5 items)
- **Backend & Data** — Spring Boot, Node.js / Express, REST APIs, PostgreSQL, MySQL, JWT / NextAuth (6 items)
- **Product & Delivery** — Git, GitHub, Docker, CI/CD, Agile / Scrum (5 items)

Keep the existing editorial shell: eyebrow → heading → intro → groups → closing.

### 5.2 Strengths

- **Mirrors how recruiters bucket.** Frontend/backend/delivery is the mental model of the primary audience; the section would answer the "balanced?" question by structure alone.
- **Balanced by construction.** Three near-equal groups (5/6/5) make the full-stack positioning visible at a glance and prevent any accidental frontend-first tilt.
- **Three groups is the ceiling.** The section 6 rules warn against too many categories; three is the maximum that stays scannable.
- **Evidence-backed.** Each group maps to verified usage: frontend-heavy at Digitalia, backend-and-data at Dynamic Impact and Ocean Connecting, delivery practices across roles.
- **Keeps the editorial language.** Thin rules and quiet group headings — no cards, no bars.

### 5.3 Risks

- **Category boundaries are fuzzy.** Next.js spans frontend and backend (SSR/API routes); Node.js is a runtime; JWT/NextAuth is authentication. Placement rules must be defined or the groups invite argument.
- **Ordering is still a decision.** If Frontend renders first, the section still reads frontend-first; the sequence of groups is a deliberate choice that must be documented.
- **"Product & Delivery" can repeat the tools/process mix.** Docker and Git are tools; CI/CD and Agile are practices. The group needs a precise definition or it inherits Issue 4.
- **Discipline labels do not, by themselves, show strong vs occasional.** Grouping by discipline answers question 3 only partly; the core/supporting distinction still needs emphasis or context.
- **Height.** Three labeled groups take more vertical space than two; on a 720px container this is manageable but real.

### 5.4 Alternatives considered

- **Keep two groups, redefine them** (e.g., `Core stack` / `Workflow & practices`) — cheapest, but does not make discipline balance explicit by structure.
- **Two groups by discipline only** (`Frontend` / `Backend`) with delivery merged into one — risks an unbalanced 5/7 split and leaves "supporting tools" without a home.

The final structure is not approved by this document. It requires explicit manual approval (see section 10).

---

## 6. Content Rules

- **No percentage bars.** No "75% React" style indicators.
- **No star ratings.** No 1–5 star treatments.
- **No fake expertise labels.** No "Expert", "Master", or "Advanced" unless verified (none are verified today).
- **No years-of-experience claims.** No "4 years with React".
- **No long descriptions for every technology.** At most a very short context line per item, or context supplied by grouping alone.
- **No duplicated stack lists from Projects.** The section must not re-print per-project technology lists as decoration. A technology may appear if the Skills section adds grouping/context that Projects does not.
- **No decorative skill cards without information value.** No cards, tiles, gradient badges, or orbiting icons that exist for style only.
- **No invented items.** The inventory in section 3 is closed.
- **No proficiency inference.** Ordering and emphasis may reflect verified usage evidence, never a self-assessed level.
- **Balanced voice.** The section must not tilt frontend-only or backend-only in copy, order, or emphasis.

---

## 7. Three Design Directions

All three preserve the current theme: editorial, minimal, premium, 720px rhythm, thin rules, no cards, no bars, no heavy decoration. All three respect the playbook and the section 6 content rules. None is implemented.

### Direction A — Refined Two Groups (minimal change)

- **Layout:** keep the current two groups and the 2-column icon grid inside the 720px container. Keep eyebrow → heading → intro → groups → closing.
- **Hierarchy:** eyebrow `Skills`; keep the heading; raise group titles from tiny/0.35 to small, medium weight, title-color so the structure is felt; keep group descriptions quiet; items stay lowest weight.
- **Interaction:** none, or at most a barely perceptible icon/name opacity lift on row hover. No motion, no movement.
- **Desktop:** two stacked groups; order group 1 so the balance reads from row one (interleaved or backend-first); re-anchor or remove the `primary` emphasis so it lands on the verified core stack (React, Next.js, TypeScript, Spring Boot, PostgreSQL, Node.js/Express) if kept at all.
- **Mobile:** unchanged — 1 column at ≤576px, stepped padding.
- **Strengths:** fastest to implement; lowest risk; most maintainable (small edits to a data array and CSS); honors the playbook's "prefer improving existing work over replacing it"; keeps the exact editorial rhythm.
- **Risks:** does not make the frontend/backend balance explicit by structure; group semantics need rewording ("every day" claim, `How I work` mix); the strong-vs-occasional distinction depends on emphasis, not structure.

### Direction B — Three Discipline Columns

- **Layout:** widen the container to ~968px (the width already used by the Case Studies grid); three columns — Frontend / Backend & Data / Product & Delivery; each column a quiet labeled list of icon + name rows; thin vertical dividers or column gaps; eyebrow → heading → intro above, closing below.
- **Hierarchy:** eyebrow `Skills`; heading; intro; three group headings at small/medium weight; items lowest.
- **Interaction:** none, or a minimal row hover.
- **Desktop:** three equal-weight columns (5/6/5), balanced visible at a glance.
- **Mobile:** columns stack to 1 column; groups follow the home-page order.
- **Strengths:** answers the balanced question by structure; the fastest recruiter scan of the three; mirrors how recruiters bucket; premium grid consistent with the Projects preview.
- **Risks:** breaks the 720px editorial rhythm shared by About, Experience, and Contact; more vertical height; category boundary decisions required (Next.js, Node.js, JWT); a real risk of reading as a tech list unless context is added; the most implementation work.

### Direction C — Single Grouped List with Quiet Context Tags

- **Layout:** one continuous 720px section; a single 2-column grid; each item carries a compact muted tag (`Frontend`, `Backend & Data`, `Workflow`) or a small prefix marker; group-title rows are dropped to save height.
- **Hierarchy:** eyebrow `Skills`; heading; intro; items with name first and a tiny context tag; closing.
- **Interaction:** none.
- **Desktop:** 2-column grid, tags scannable at a glance; **Mobile:** 1 column.
- **Strengths:** shortest vertical footprint; a full-stack snapshot in under 10 seconds with minimal vertical cost; the most minimal of the three.
- **Risks:** per-row tags can read as clutter or an AI-tagging pattern; the discipline structure is inferred from small labels rather than shown; the hardest to keep visually calm and typographically premium.

---

## 8. Recommended Direction

Recommendation: **Direction A — Refined Two Groups.**

Rationale against the five criteria:

- **Recruiter scanning:** A keeps the tightest, fastest list of all three — 16 rows in two quiet groups. B risks height and a tech-list feel; C risks tag noise. Scanning value is high without a structural redesign.
- **Balanced full-stack positioning:** A achieves balance through deliberate ordering, group redefinition, and core emphasis, with the least surface area for error. B is the stronger choice only if the balance must be explicit by structure.
- **Consistency with Praxis-inspired premium minimal design:** A preserves the exact editorial rhythm the other sections use (720px, thin rules, quiet labels). B breaks that rhythm; C is the riskiest typographically.
- **Speed of implementation:** A is edits to a data array, group copy, and a few CSS rules. B and C are structural.
- **Maintainability:** A stays a small, flat data structure (`SKILL_GROUPS`); B adds a third group and new layout CSS; C adds per-item metadata and a tag system.

If the user prefers the balance to be *visually* explicit, Direction B is the stronger alternative. This is a recommendation, not final approval. The user reviews and decides manually.

---

## 9. Accessibility

- **Semantic grouping:** keep one real `h2` per section and one real `h3` per group. Render item lists as real `<ul>/<li>` (currently plain `<div>`s) so assistive technology can enumerate them. Group context must never depend on a pseudo-element.
- **Readable labels:** use `Skills` as the eyebrow (matches sibling sections); group titles must be real text at a readable size and contrast.
- **Keyboard behavior:** the section is static and needs no keyboard interaction today. If any hover emphasis is added, it must be non-essential (information never available only on hover) and mirrored by `:focus-visible` if an item ever becomes interactive.
- **Contrast:** raise the current low opacities on text-bearing elements (label 0.35, group description 0.5, closing 0.38) to pass WCAG AA; icons may remain quiet because a text name always accompanies them.
- **Reduced motion:** any future motion must be disabled under `prefers-reduced-motion`. The current empty reduced-motion block is acceptable because no animation exists; it should be populated if any is added.
- **No information conveyed only by icons:** keep names always visible next to icons and keep icons `aria-hidden="true"`. The current implementation already complies.

---

## 10. Decision Status

STATUS

Section:

Skills

State:

IMPLEMENTED — SCREENSHOT REVIEW PENDING

Approved Skills V1 is implemented. Desktop and mobile screenshot review is required before the section may be marked LOCKED.
