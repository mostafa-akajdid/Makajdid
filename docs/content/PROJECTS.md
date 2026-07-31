# Projects Section Specification

> Content guide for the Projects section of the portfolio.
> Source of truth: verified project data listed in the Verified Project Data section of this document.
> Follows `docs/strategy/PORTFOLIO_PLAYBOOK.md` (voice, principles, "We Never Say").
> This document defines content, hierarchy, and behavior only. It does not define final visual styling.
> The Projects section is implemented at `src/pages/Projects.jsx`, `src/components/caseStudies/`, and `src/components/projectDetail/`. This document is the single source of truth for the Projects section.

---

## 1. Purpose

The portfolio has a clear narrative arc:

- Hero establishes identity.
- About explains product thinking.
- Experience proves professional progression.
- **Projects provide evidence of what Mostafa can build.**

The section must serve both audiences:

- **Recruiters** evaluating technical ability.
- **Clients** evaluating whether Mostafa can deliver complete products.

The Projects section is not a screenshot gallery. It is proof of product thinking, execution, and technical range.

---

## 2. Current Implementation Audit

Source: `src/pages/Projects.jsx`, `src/components/caseStudies/CaseStudies.jsx`, `src/components/caseStudies/CaseStudyCard.jsx`, `src/components/caseStudies/caseStudies.css`, `src/data/caseStudies.js`.

Current card anatomy: full-card `<Link>`; image zone (16:10, image at 85% width, rotated 2deg, translated 2%, auto color-extracted gradient behind); identity seal pill (first-letter avatar + title + arrow); content block (subtitle clamped to 2 lines + tech stack joined by `·`).

### 2.1 Inverted card hierarchy

- **Current problem:** The project title appears only inside a floating "seal" pill at the bottom-center of the image, in 14px medium type. The body below carries a 2-line sentence and the tech stack — neither names the project.
- **Why it matters:** A recruiter scanning in the F-pattern reads: tilted image → long sentence → stack. The most important datum (the project name) is delegated to a small sticker.
- **Severity:** High.
- **Required replacement direction:** Title as the first line of a proper content block (semi-bold, ~1.25rem+), followed by one scannable outcome line and a quiet metadata row.

### 2.2 Project title hidden inside the seal

- **Current problem:** `CaseStudyCard.jsx` renders the title inside the seal pill (`.prototype__seal` with `.prototype__seal-title`), not as a heading in the card body.
- **Why it matters:** Titles are heading-level material; a 14px pill buried inside an image is the weakest possible presentation of the section's core content. It also duplicates the title across the seal and any future heading.
- **Severity:** High.
- **Required replacement direction:** Remove the seal; render the title as a real heading above the outcome line.

### 2.3 Wrong content field shown

- **Current problem:** `.prototype__value` renders `subtitle || description`. The subtitles are long narrative marketing sentences (e.g. "A full-stack property marketplace built for modern real estate — search, filter, and connect with ease.") truncated by a 2-line clamp mid-thought. The shorter, factual `description` field is never shown because `subtitle` always exists.
- **Why it matters:** Clamped marketing sentences cut at arbitrary points; the card reads as filler rather than evidence. The description ("Full-stack property marketplace with advanced search and user authentication.") is scannable and factual but unused.
- **Severity:** High.
- **Required replacement direction:** Use the shorter project description as the listing outcome line; keep the long subtitle for the detail page hero.

### 2.4 Decorative seal problem

- **Current problem:** A pill containing a first-letter avatar (R / G / P / M / S / G — meaningless letters), the title, and an arrow, with its own border and shadow, floating over the image.
- **Why it matters:** It is the loudest element on the card while carrying the least value. It reads as a chat/app widget, not an editorial portfolio. It violates the playbook's "no decoration for the sake of decoration" and clashes with About's quiet portrait and Experience's restrained cards.
- **Severity:** High.
- **Required replacement direction:** Delete the seal entirely. Clickability is signaled by a proper affordance, not an avatar.

### 2.5 Rotated screenshot and extracted-gradient problem

- **Current problem:** Screenshots display at 85% of the tile, tilted 2deg, over an auto color-extracted gradient at 45% opacity (`extractColorFromImage` runs client-side per card and pops in after paint).
- **Why it matters:** Shrinking to 85% wastes canvas and shows gradients that vary unpredictably per image with no shared system. The rotation + gradient reads as "photo of a screenshot." Premium references (Vercel, Linear, Apple) treat product imagery as edge-to-edge artifacts. The color extraction adds a client-side performance cost and a visible flash on load for zero trust value.
- **Severity:** High.
- **Required replacement direction:** Edge-to-edge imagery, no rotation, no extracted gradient, no client-side color extraction. Consistent crop with `object-position` focused on the top of UI screenshots.

### 2.6 Missing year and project status

- **Current problem:** `meta.year`, `meta.role`, and `status` ("Personal Project", "Concept", "Client Work") all exist in `src/data/caseStudies.js` and are unused by the grid. Cards show only the tech stack as differentiation.
- **Why it matters:** Recruiters triage by year and by whether work is client or personal. Hiding `status` hides a real trust signal; hiding `year` hides trajectory.
- **Severity:** High.
- **Required replacement direction:** A metadata row with `year · status`, with stack as a quiet secondary line.

### 2.7 Uniform grid without hierarchy

- **Current problem:** Six identical 16:10 tiles, equal weight, no featured project. Data order is arbitrary (2024, 2024, 2024, 2025, 2025, 2024) — not chronological, not by strength.
- **Why it matters:** "A curated selection" is claimed in the hero but nothing in the layout demonstrates curation. Uniform tiles read as a list, not a body of work; there is no anchor for the eye and no story arc.
- **Severity:** Medium-High.
- **Required replacement direction:** A featured project plus supporting layout, or an explicit, visible ordering logic (newest first, or strongest first).

### 2.8 Weak hover affordance

- **Current problem:** Hover = `translateY(-2px)`, deeper shadows, and a 16px arrow at opacity 0.45 nudging 3px. No image scale, no type change. Mobile has no hover at all.
- **Why it matters:** On a full-card link with no visible button, hover is the only clickability signal — and it is weaker than the site's own Experience cards. The 45%-opacity arrow is nearly invisible.
- **Severity:** Medium.
- **Required replacement direction:** Image scale (~1.02–1.03), title color shift, arrow slide at higher opacity — consistent with Experience card hover language.

### 2.9 Missing heading hierarchy inside cards

- **Current problem:** Cards contain no heading-level type; the only H1 on the page is the hero. Project titles render at 14px.
- **Why it matters:** The page reads as "one headline + a wall of body text," with no scannable anchor between hero and CTA. Experience cards, by contrast, have a clear role → company → summary hierarchy.
- **Severity:** Medium-High.
- **Required replacement direction:** A defined scale: card title ~1.25–1.5rem semi-bold → outcome 0.9rem → metadata 0.65rem uppercase.

### 2.10 Inconsistent headings between homepage and /projects

- **Current problem:** The homepage renders `CaseStudies` with the heading "Work that reflects how I think, not just what I build." The `/projects` page renders the same component `showHeader={false}` under a generic "Selected Work" hero.
- **Why it matters:** Two surfaces, two voices for the same content. The homepage line is stronger and on-brand; the dedicated page is generic.
- **Severity:** Medium.
- **Required replacement direction:** One positioning line used deliberately on `/projects`, keeping the grid component shared.

### 2.11 Weak conversion paths

- **Current problem:** All six projects have `liveUrl: null` and `githubUrl: null`, so the detail page renders no "Visit Live / View Source" links at all — its only actions are "Copy Link" and "Next Project." Cards offer no explicit "Read case study" path, and the closing CTA offers only one action with no secondary path.
- **Why it matters:** The portfolio's deepest trust moments (live product, source code) are structurally absent, and listing cards give no clear next step.
- **Severity:** Medium (listing); High (detail-page conversion).
- **Required replacement direction:** An explicit "Read case study →" affordance on cards; detail pages must never render an empty links row; a CV as a later secondary CTA (not implemented now).

### 2.12 Inconsistency with Hero, About, and Experience

- **Current problem:** About = flat 3:4 portrait, 4px radius, soft shadow. Experience = centered timeline, 16px-radius cards, 1px borders, restrained hover. Projects = rotated images, extracted gradients, avatar pills.
- **Why it matters:** Projects is the only section with decorative effects, so it feels least premium and least like "one product." The playbook's Consistency principle is violated here most.
- **Severity:** High.
- **Required replacement direction:** Adopt the same radius, shadow, and hover vocabulary as Experience cards; keep the section's generous vertical rhythm.

### 2.13 Premium benchmark gap

- **Current problem:** Apple / Vercel / Linear deliver edge-to-edge imagery, minimal chrome, a real type hierarchy, one focal point, and motion with purpose. This section's focal point is a tilted screenshot with a sticker over a gradient.
- **Why it matters:** It reads as a template showcase ("look at my screenshots") rather than product thinking ("here is the outcome and the decision"). The effect stack contradicts the playbook's calm, timeless, premium direction.
- **Severity:** High.
- **Required replacement direction:** Remove the effects, surface the facts, and let typography carry the hierarchy — any of the three directions in section 8.

---

## 3. Verified Project Data

Only the facts below are verified in `src/data/caseStudies.js`. Nothing else may be added.

### 3.1 Real Estate Platform

- Title: `Real Estate Platform`
- Slug: `realstate`
- Year: `2024`
- Status: `Personal Project`
- Role: `Full-Stack Development`
- Type: `Web Application`
- Description (listing candidate): `Full-stack property marketplace with advanced search and user authentication.`
- Subtitle (detail-page candidate): `A full-stack property marketplace built for modern real estate — search, filter, and connect with ease.`
- Technologies: `Next.js`, `Chakra UI`, `Prisma`, `PostgreSQL`
- Image asset: `src/assets/Project/realstate.webp` (2880×1800)
- Live URL: `null`
- GitHub URL: `null`
- Detail page: available (`getProjectBySlug("realstate")` resolves; full Problem/Approach/Outcome story present)

### 3.2 Glass Ocean

- Title: `Glass Ocean`
- Slug: `glassocean`
- Year: `2024`
- Status: `Concept`
- Role: `Frontend Development`
- Type: `Landing Page`
- Description (listing candidate): `Landing page with glass morphism design and smooth responsive animations.`
- Subtitle (detail-page candidate): `A landing page that demonstrates glassmorphism done right — transparent, layered, and alive.`
- Technologies: `Next.js`, `Material-UI`, `GSAP`
- Image asset: `src/assets/Project/glassOcean.webp` (2880×1800)
- Live URL: `null`
- GitHub URL: `null`
- Detail page: available

### 3.3 Piolec

- Title: `Piolec`
- Slug: `piolec`
- Year: `2024`
- Status: `Client Work`
- Role: `Frontend Development`
- Type: `Web Application`
- Description (listing candidate): `Electrical products catalog with intuitive UI and seamless navigation.`
- Subtitle (detail-page candidate): `An electrical products catalog built for clarity — navigate hundreds of products without friction.`
- Technologies: `Next.js`, `Tailwind CSS`, `JavaScript`
- Image asset: `src/assets/Project/piolecImage.webp` (2880×1800)
- Live URL: `null`
- GitHub URL: `null`
- Detail page: available

### 3.4 MonPatient

- Title: `MonPatient`
- Slug: `monpatient`
- Year: `2025`
- Status: `Personal Project`
- Role: `Full-Stack Development`
- Type: `Web Application`
- Description (listing candidate): `Healthcare platform for home visits, prescriptions, and medical coordination.`
- Subtitle (detail-page candidate): `A digital platform designed to simplify healthcare management — connecting patients with providers through a seamless, intuitive experience.`
- Technologies: `Next.js`, `Redux Toolkit`, `Node.js`, `PostgreSQL`
- Image asset: `src/assets/Project/monpatient.webp` (2880×1800)
- Live URL: `null`
- GitHub URL: `null`
- Detail page: available

### 3.5 StoryCareer

- Title: `StoryCareer`
- Slug: `storycareer`
- Year: `2025`
- Status: `Personal Project`
- Role: `Full-Stack Development`
- Type: `Web Application`
- Description (listing candidate): `Career platform with tips and success stories for professional growth.`
- Subtitle (detail-page candidate): `An AI-powered career platform that helps creative professionals build their narrative and find opportunities.`
- Technologies: `Next.js`, `Node.js`, `Tailwind CSS`, `Clerk`
- Image asset: `src/assets/Project/StoryCareer.webp` (2880×1800)
- Live URL: `null`
- GitHub URL: `null`
- Detail page: available

### 3.6 Gemini

- Title: `Gemini`
- Slug: `gemini`
- Year: `2024`
- Status: `Personal Project`
- Role: `Frontend Development`
- Type: `Web Application`
- Description (listing candidate): `Generative AI application with efficient state management via Context API.`
- Subtitle (detail-page candidate): `A generative AI application built for clarity — clean interface, instant responses, and thoughtful state management.`
- Technologies: `React`, `Gemini API`, `Context API`
- Image asset: `src/assets/Project/Gemini.webp` (1903×975 — inconsistent aspect ratio vs. the other five 2880×1800 assets)
- Live URL: `null`
- GitHub URL: `null`
- Detail page: available

### 3.7 Data notes

- `liveUrl` and `githubUrl` are `null` for **all six** projects. Detail pages therefore currently render no live/source links.
- All six projects have a `story` array (The Problem / The Approach / The Outcome) — detail pages exist for every project.
- The six assets are not normalized: five are 2880×1800 (16:10); `Gemini.webp` is 1903×975 (~1.95:1).
- No metrics, users, performance numbers, or achievements beyond the fields above are verified. Do not invent any.

---

## 4. Visitor Questions

The section must answer quickly, ideally within a few seconds of scanning:

1. What did Mostafa build?
2. Which projects are strongest?
3. Is the work personal, client, or professional?
4. What technical range does he have?
5. Can I open a case study?
6. Is there verifiable proof such as live product or source code?
7. Why is each project relevant?

If a visitor cannot answer these from the listing, the section fails.

---

## 5. Content Hierarchy

Required hierarchy for a project card, highest weight first:

1. **Project title**
2. **One concise factual outcome line**
3. **Year and status**
4. **Technology stack**
5. **Clear case-study affordance**
6. **Product image**

Rules:

- The title must never be hidden inside decoration.
- The long subtitle belongs on the detail page, not inside the listing card.

---

## 6. Content Rules

Project cards must:

- use factual, concise language
- avoid marketing sentences
- avoid vague adjectives
- avoid invented metrics
- avoid unfinished claims
- avoid duplicate title placement
- avoid long technology lists dominating the card

Use the shorter project description as the listing outcome line unless a dedicated verified one-liner is later approved.

---

## 7. Image Rules

Non-negotiable rules for all project imagery:

- edge-to-edge product imagery
- no 2-degree rotation
- no extracted color gradient
- no client-side color extraction
- no floating seal
- no first-letter avatar
- consistent aspect ratio
- `object-position` focused on the top of UI screenshots
- one shared radius and shadow language
- normalize inconsistent assets before final implementation

---

## 8. Three Explored Directions

### Direction A — Editorial Index

- **Layout:** Asymmetric. A single featured project presented as an editorial spread: one large image beside a text column (number, title, outcome, `year · status`, stack, explicit "Read the story →"). The remaining five projects form a supporting index of full-width rows separated by hairline dividers.
- **Featured project:** One project earns a large frame and the most visual weight, demonstrating curation.
- **Supporting project index:** Five rows — index number, title, one-line outcome, year, stack, arrow.
- **Typography-led hierarchy:** Hierarchy carried by type scale and quiet oversized numbers, not boxes or effects.
- **One large image:** The featured project is the only framed image; index rows use type only (or small square thumbnails).
- **Hairline-separated rows:** The archive reads as an editorial list, not a card grid.
- **Strengths:** Closest to the playbook (editorial, calm, timeless, zero decoration); strongest storytelling; solves scanning and premium benchmarks in one move.
- **Risks:** Most complex to implement; requires deciding a featured project; index rows without images may feel sparse; needs careful typography work to avoid a plain-list look.

### Direction B — Refined Uniform Grid

- **Layout:** Keep the current two-column grid (three on very wide screens), single column on mobile.
- **Full-bleed image:** Edge-to-edge image on top of each card, consistent 16:10 crop, `object-position: top`.
- **Title-first card body:** Content block begins with the project title as a real heading.
- **Outcome line:** One concise factual line (the short description) below the title.
- **Year/status and stack:** A metadata row (`year · status`) with the stack as a quiet secondary line and a clear arrow affordance.
- **Clear arrow case-study affordance:** A visible arrow that slides on hover, consistent with Experience card language.
- **Strengths:** Lowest risk; fastest path to premium; reuses the current grid and spacing; unifies card language with Experience; fixes every hierarchy and scanning bug.
- **Risks:** Less editorial differentiation than A or C; uniform tiles still need an ordering logic to avoid feeling arbitrary; risk of remaining "template-like" if hierarchy is not executed crisply.

### Direction C — Case-Study Index

- **Layout:** Single-column narrative where each project is a chapter.
- **Sequential storytelling:** Projects read top-down in a chosen order (newest first or strongest first), visible as an arc.
- **Large images:** One full-width image per chapter, consistent treatment.
- **Chapter numbers:** Oversized quiet numbers anchor each project and guide the eye down the page.
- **Strengths:** Structural echo of the Experience timeline (vertical, numbered, sequential) — the strongest cross-section consistency; best storytelling; foregrounds the Problem/Approach/Outcome data.
- **Risks:** Longest page; fewer projects visible above the fold; requires ordering decisions; more implementation surface; recruiter scanning of all six takes longer.

---

## 9. Current Recommendation

**Direction B — Refined Uniform Grid** is the current recommended implementation direction because it offers the best balance of:

- premium quality
- recruiter scanning
- consistency
- implementation risk
- reuse of the current grid
- speed of delivery

This recommendation is **NOT approved yet**. The user must review and select the final direction before implementation.

---

## 10. Shared Requirements Across All Directions

Regardless of the chosen direction:

- remove the seal
- remove screenshot rotation
- remove extracted gradients
- show project title prominently
- use concise description on listing cards
- show year and project status
- show a clear "Read case study" affordance
- normalize screenshots
- match the visual language of Hero, About, and Experience
- never render an empty links area on detail pages

---

## 11. Conversion Strategy

- Full project card should remain clickable.
- Listing must clearly communicate that a case study exists.
- Detail pages should show live/source links only when available.
- Missing links must not leave empty UI.
- Final CTA should lead to Contact.
- CV may be considered later as a secondary CTA, but do not implement it now.

---

## 12. Accessibility and Responsive Requirements

- semantic project headings
- keyboard-accessible cards
- visible focus states
- meaningful alt text
- no important text embedded inside images
- no hover-only information
- mobile single-column behavior
- readable title and metadata hierarchy
- reduced-motion support

---

## 13. Decision Status

STATUS

Section:

Projects

State:

DESIGN DIRECTION PENDING

No implementation is allowed until Direction A, B, or C is explicitly approved.

---

## 14. Acceptance Criteria

The Projects direction is ready for implementation only when:

- one direction is explicitly approved
- hierarchy is title-first
- cards are scannable in under five seconds
- year and status are visible
- screenshots use one consistent system
- no decorative seal or extracted gradient remains
- case-study navigation is clear
- no content is invented
- documentation and implementation remain synchronized

---

## 15. Projects Hierarchy V1 — REJECTED — ROLLED BACK

The Projects Hierarchy V1 experiment was rejected.
The Projects section was restored to its previous approved state.
No further changes will be made to this section in the current phase.

The section below is retained only as a record of the rejected experiment. It does not describe the current implementation.

### 15.1 New reading order

Image (with identity seal: monogram badge + arrow) → Project Title → Short Description → Year + Project Type → Technology Stack

### 15.2 Title priority

- ~~The project title is the primary element inside every card.~~
- ~~It renders as the card heading (`h3`, `1.125rem`, weight `600`, `var(--title-color)`), the first line of the card body.~~
- ~~The title no longer lives inside the identity seal; the seal keeps only the monogram badge and the arrow.~~
- ~~Title text is never duplicated.~~

### 15.3 Concise listing description

- ~~Cards render only the short, verified `description` from `src/data/caseStudies.js`.~~
- ~~Maximum two lines on desktop (clamped).~~
- ~~The long `subtitle` stays detail-page content and is not shown on listing cards.~~

### 15.4 Metadata row

- ~~Below the description: `year • status`, using only verified project data (`meta.year`, `status`).~~
- ~~Style: small (`0.75rem`), muted, lightweight (`opacity 0.55`); never competes with the title.~~
- ~~Examples: `2025 • Personal Project`, `2024 • Client Work`, `2024 • Concept`.~~

### 15.5 Technology hierarchy

- ~~The stack remains the current dot-joined line below the metadata.~~
- ~~Visual weight reduced slightly (default `opacity 0.45`).~~
- ~~The stack is supporting information, never the hero of the card.~~

### 15.6 Case study affordance

- ~~The entire card remains clickable; no button and no large CTA were added.~~
- ~~The identity seal arrow is the subtle cue, with default opacity raised from `0.45` to `0.6` (hover `0.9`) so clickability reads naturally.~~
