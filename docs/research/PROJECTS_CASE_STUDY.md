# Projects / Case Studies — Audit Report

**Repository:** `/Users/ocean_dev2/Projects/mostafa`
**Date:** 26 July 2026
**Scope:** All project/case-study related source, routes, components, data, assets, and styles.

---

## 1. Architecture and File Map

### File Inventory

| File | Role |
|---|---|
| `src/App.jsx` | Route definitions: `/`, `/projects`, `/projects/:slug`, `*` |
| `src/pages/Portfolio.jsx` | Homepage single-page layout; contains `<CaseStudies />` as lazy section |
| `src/pages/Projects.jsx` | `/projects` listing page; renders `<CaseStudies showHeader={false} />` |
| `src/pages/Projects.css` | Styles for `/projects` page hero and CTA sections |
| `src/pages/NotFound.jsx` | Route-level `*` catch-all (not project-specific) |
| `src/pages/NotFound.css` | Styles for route-level 404 |
| `src/data/caseStudies.js` | **Single source of truth** — hardcoded array of 6 project objects. Exports `caseStudies` (default), `getProjectBySlug()`, `getNextProject()`. |
| `src/assets/projects.js` | Static PNG imports for all 6 project images. Exports named exports + `projectImages` map. |
| `src/assets/Project/` | Directory containing 6 PNG files (96KB–4.7MB each) |
| `src/components/caseStudies/CaseStudies.jsx` | Shared card grid component. Accepts `showHeader` prop. Used on homepage and `/projects`. |
| `src/components/caseStudies/CaseStudyCard.jsx` | Single card component. Extracts dominant color from image and applies it as a gradient background. |
| `src/components/caseStudies/caseStudies.css` | All card/grid styles |
| `src/components/projectDetail/ProjectDetail.jsx` | Individual case study page component. Renders via `//projects/:slug`. |
| `src/components/projectDetail/projectDetail.css` | All project detail page styles |
| `src/utils/extractColor.js` | Canvas-based dominant-color extraction utility; builds a radial gradient string. Used only by `CaseStudyCard`. |

### Data Architecture

- **Hardcoded** — all project content lives in `src/data/caseStudies.js` as a plain JS array.
- **No CMS, markdown, or external data source.**
- Images are static PNG imports in `src/assets/projects.js`.
- The `getProjectBySlug()` and `getNextProject()` helper functions are exported from the data file and used by `ProjectDetail`.

---

## 2. User Journey and Routing

### Navigation Flow

```
Homepage (#case-studies section)
      │
      │  click card
      ▼
/projects/:slug  (ProjectDetail page)
      │
      │  "← All Projects" button  or  ArrowLeft key
      ▼
/projects  (Projects listing page)
      │
      │  "Contact Me" CTA
      ▼
/#contact  (homepage, scrolls to contact)
```

### Route Definitions (from `App.jsx`)

| Route | Component | Lazy? | Notes |
|---|---|---|---|
| `/` | `Portfolio` | Yes | Homepage with all sections |
| `/projects` | `Projects` | Yes | Standalone project listing |
| `/projects/:slug` | `ProjectDetail` | Yes | Individual case study |
| `*` | `NotFound` | Yes | Route-level 404 |

### In-Site Navigation Links to Projects

| Source | Link/Element | Destination | Behaviour |
|---|---|---|---|
| Homepage header nav | "Projects" (nav item) | `#case-studies` on `/` | Smooth scrolls to case studies section on homepage. Does **not** go to `/projects` route. |
| Homepage Case Studies section | 6 card `<Link to={/projects/${slug}}>` | `/projects/:slug` | Client-side navigation to individual project page |
| `/projects/:slug` back button | `<button>` "← All Projects" | `/projects` | Client-side `navigate('/projects')` |
| `/projects/:slug` "Next Project" | `<Link to={/projects/${nextProject.slug}}>` | `/projects/:slug` (next) | Cycles through all 6 projects; wraps from last → first |
| `/projects/:slug` keyboard | ArrowLeft → `/projects` | `/projects` | Keyboard shortcut |
| `/projects/:slug` keyboard | ArrowRight → next project | `/projects/:slug` (next) | Keyboard shortcut |
| `/projects` CTA | `<Link to={/#contact}>` "Contact Me" | `/#contact` | Navigates to homepage `/#contact` |
| `/projects/:slug` 404 (invalid slug) | `<Link to="/projects">` "← All Projects" | `/projects` | Client-side navigation |

### Invalid Slug Handling

Two separate 404 paths exist:
- **ProjectDetail's inline 404** — when `getProjectBySlug(slug)` returns undefined, `ProjectDetail.jsx` renders its own 404 layout with `<Link to="/projects">`. There is no redirect to the route-level `NotFound` page.
- **Route-level NotFound** — the `*` catch-all in `App.jsx` renders `NotFound.jsx` for any unrecognized top-level route. ProjectDetail's inline 404 does not interact with this.

---

## 3. Homepage Case Studies Section

### Section Header (when `showHeader={true}`)

```
"Case Studies"            (<h2 class="section__title">)
"A selection of projects I've built"   (<span class="section__subtitle">)
```

These only render on the homepage. On `/projects` page, `showHeader={false}` suppresses them.

### Card Grid

- **6 cards** rendered (one per project in `caseStudies` array).
- CSS class: `.case-studies__grid`
- Grid layout: `grid-template-columns: repeat(2, 1fr)` (2 columns), gap 3rem.
- At ≤576px: collapses to `1fr` (single column).

### Card Structure (`.case-study-card`)

Each card is an `<Link to={/projects/${slug}}>`. It is a single anchor element containing:

1. **Image wrapper** (`.case-study-card__image-wrapper`)
   - Aspect-ratio: 16/10, `border-radius: 1rem`, overflow hidden.
   - Background: a radial gradient dynamically extracted from the project image via `extractColor.js`. If extraction fails, falls back to `#b0b0b0` gradient.
   - A `::before` pseudo-element adds a subtle radial highlight.

2. **Image** (`.case-study-card__image`)
   - Width: 78% of wrapper, `object-fit: contain`.
   - **Rotated**: `transform: rotate(8deg) translate(4%)` (note: a `perspective` variant is commented out).
   - `loading="lazy"`, `decoding="async"`.
   - On card hover: `scale(1.04)` + `brightness(0.95)`.

3. **Floating panel** (`.case-study-card__panel`)
   - Positioned `absolute` at bottom-center of the card, `width: 98%`.
   - `border-radius: 999px` (pill shape), `background: var(--container-color)`, thin border, subtle shadow.
   - Contains two sides:
     - **Left info** (`.case-study-card__info`): circular logo with first letter of title, title (`.case-study-card__title`), description (`.case-study-card__description`), stack tags joined by `·` (`.case-study-card__stack`). Title and description are `white-space: nowrap; text-overflow: ellipsis`.
     - **Right CTA** (`.case-study-card__cta`): circular button (36px) with right-arrow SVG. On hover: rotates -4deg, fills with title color.

### Responsive Behaviour

| Breakpoint | Changes |
|---|---|
| ≤992px | Grid gap reduced to 2.5rem |
| ≤768px | Panel padding/logo/CTA sizing reduced slightly |
| ≤576px | Grid becomes **1 column**, gap 3rem. Logo 40px, title `smaller-font-size`, CTA 32px. |
| ≤350px | Grid gap 2.5rem. Logo 36px. Description is **hidden** (`display: none`). CTA 30px. |

---

## 4. `/projects` Listing Page

### Page Structure

1. **Projects Hero section** (`.projects-hero`)
   - Title: `"Selected Work"` (h1, `clamp(2.75rem, 6vw, 4.5rem)`, letter-spacing -0.02em)
   - Description: `"A curated selection of digital products I've designed and built. Each project represents a different challenge, process and outcome."` (max-width 540px)
   - Counter: `"06 Selected Projects"` (always shows `06` — the constant is `PROJECT_COUNT = 6`)

2. **Case Studies grid** — renders `<CaseStudies showHeader={false} />` (same component as homepage, but without the section title/subtitle)

3. **CTA section** (`.projects-cta`)
   - Label: `"Let's Connect"` (uppercase, tiny font, 0.5 opacity)
   - Heading: `"Interested in working together?"` (clamp 1.75rem–2.5rem)
   - Description: `"I'm always open to discussing new ideas, products and collaborations."` with `<br>` between lines
   - Link: `<Link to="/#contact">` "Contact Me" + arrow SVG (pill-shaped, bordered)

### Key Differences from Homepage Section

| Aspect | Homepage (`/`) | Projects page (`/projects`) |
|---|---|---|
| Section header | "Case Studies" + subtitle | Suppressed (`showHeader={false}`) |
| Page heading | None (section title only) | "Selected Work" hero with description + counter |
| Footer | No project-specific CTA | "Let's Connect" CTA block |
| Context | One section among many | Standalone page with hero and CTA |

### Responsive Behaviour

| Breakpoint | Changes |
|---|---|
| ≤992px | Hero padding reduced (8rem top), CTA padding reduced |
| ≤768px | Hero 7rem top, description margin reduced, CTA 6rem top |
| ≤576px | Hero 6rem top, title margin reduced. CTA padding reduced, `br` in description hidden |
| ≤350px | Hero 5rem top, CTA 4rem top |

No filtering, sorting, or pagination exists.

---

## 5. Individual Case Study Pages (`/projects/:slug`)

### 5.1 Slug: `realstate`

| Field | Value |
|---|---|
| Title | Real Estate Platform |
| Status | Personal Project |
| Live URL | `null` |
| GitHub URL | `null` |
| Story sections | The Problem / The Approach / The Outcome |
| Story text | ~8 paragraphs total. Discusses cluttered real estate interfaces, search-first design, calm browsing experience. |
| Technologies | Next.js, Chakra UI, Prisma, PostgreSQL, REST API, Authentication, Responsive Design |

### 5.2 Slug: `glassocean`

| Field | Value |
|---|---|
| Title | Glass Ocean |
| Status | Concept |
| Live URL | `null` |
| GitHub URL | `null` |
| Story sections | The Problem / The Approach / The Outcome |
| Story text | ~7 paragraphs. Discusses glassmorphism done right, performance, GSAP animations with restraint. |
| Technologies | Next.js, Material-UI, GSAP, CSS Custom Properties, Responsive Design |

### 5.3 Slug: `piolec`

| Field | Value |
|---|---|
| Title | Piolec |
| Status | Client Work |
| Live URL | `null` |
| GitHub URL | `null` |
| Story sections | The Problem / The Approach / The Outcome |
| Story text | ~7 paragraphs. Discusses industrial catalog navigation, forgiving search, sidebar organization. |
| Technologies | Next.js, Tailwind CSS, JavaScript, Responsive Design |

### 5.4 Slug: `monpatient`

| Field | Value |
|---|---|
| Title | MonPatient |
| Status | Personal Project |
| Live URL | `null` |
| GitHub URL | `null` |
| Story sections | The Problem / The Approach / The Outcome |
| Story text | ~8 paragraphs. Discusses fragmented healthcare tools, two-tap scheduling, calm patient-focused design. |
| Technologies | Next.js, Redux Toolkit, Node.js, PostgreSQL, REST API, JWT Auth, Responsive Design |

### 5.5 Slug: `storycareer`

| Field | Value |
|---|---|
| Title | StoryCareer |
| Status | Personal Project |
| Live URL | `null` |
| GitHub URL | `null` |
| Story sections | The Problem / The Approach / The Outcome |
| Story text | ~7 paragraphs. Discusses generic career advice, storytelling approach, AI-powered recommendations. |
| Technologies | Next.js, Node.js, Tailwind CSS, Clerk, AI Integration, Responsive Design |

### 5.6 Slug: `gemini`

| Field | Value |
|---|---|
| Title | Gemini |
| Status | Personal Project |
| Live URL | `null` |
| GitHub URL | `null` |
| Story sections | The Problem / The Approach / The Outcome |
| Story text | ~7 paragraphs. Discusses cluttered AI interfaces, conversation-first design, Context API state management. |
| Technologies | React, Gemini API, Context API, CSS Custom Properties, Responsive Design |

### Shared Page Layout (all slugs)

Every project detail page follows this exact structure:

1. **Reading progress bar** — fixed `2px` bar at top of viewport, tracks scroll %
2. **Back button** — "← All Projects", navigates to `/projects`
3. **Title** — project title in `clamp(3rem, 7vw, 5.5rem)`
4. **Intro/subtitle** — one-line project tagline
5. **Hero metadata row** (flex, splits into two columns on desktop):
   - Left: **Meta items** (Role, Type, Year, Status) + Reading time (computed from story word count)
   - Right: **Links** (Visit Live / View Source — both invisible when `null`) + "Copy Link" button (copies current URL)
6. **Hero image** — first story image, `aspect-ratio: 16/10`, clickable to open lightbox. Uses `fetchpriority="high"`.
7. **Story blocks** — 3 sections (The Problem / The Approach / The Outcome), each with:
   - Title (opacity animates from 0.35 to 1 via IntersectionObserver when in view)
   - Paragraphs (1–3 per block)
   - Optional image (clickable to lightbox, `loading="lazy"`)
8. **Project Facts** — grid of 4 items: Industry, Platform, Responsive, Team
9. **Technologies** — pill-style list separated by em-dashes (`—`)
10. **Next Project** — full-width link to the next project (wraps circularly), shows title, subtitle, and preview image
11. **Lightbox** — full-screen modal overlay with close button and keyboard (Escape) support. Body scroll locked when open.

### Navigation Behaviour on Detail Page

- "← All Projects" button → `navigate('/projects')`
- "Next Project" link → wraps to first project after the last
- ArrowRight key → next project
- ArrowLeft key → `/projects`
- Escape key → closes lightbox (if open), does nothing otherwise
- Page scrolls to top on slug change (`behavior: 'instant'`)

---

## 6. Data and Content Inventory

### Project Records Table

| # | Slug | Title | Category | Status | Stack (summary) | Image (PNG) | liveUrl | githubUrl | Story Sections | Facts | Meta |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `realstate` | Real Estate Platform | Fullstack | Personal Project | Next.js, Chakra UI, Prisma, PostgreSQL | realstate.png (2.9MB) | null | null | 3 | Industry: Real Estate, Platform: Web, Team: Solo | Role: Full-Stack, Duration: 2 Months, Year: 2024 |
| 2 | `glassocean` | Glass Ocean | Frontend | Concept | Next.js, MUI, GSAP | glassOcean.png (3.0MB) | null | null | 3 | Industry: Design Showcase, Platform: Web, Team: Solo | Role: Frontend, Duration: 3 Weeks, Year: 2024 |
| 3 | `piolec` | Piolec | Frontend | Client Work | Next.js, Tailwind, JS | piolecImage.png (4.7MB) | null | null | 3 | Industry: Industrial, Platform: Web, Team: Solo | Role: Frontend, Duration: 1 Month, Year: 2024 |
| 4 | `monpatient` | MonPatient | Fullstack | Personal Project | Next.js, Redux Toolkit, Node.js, PostgreSQL | monpatient.png (1.6MB) | null | null | 3 | Industry: Healthcare, Platform: Web, Team: Solo | Role: Full-Stack, Duration: 3 Months, Year: 2025 |
| 5 | `storycareer` | StoryCareer | Fullstack | Personal Project | Next.js, Node.js, Tailwind, Clerk | StoryCareer.png (370KB) | null | null | 3 | Industry: Career Dev, Platform: Web, Team: Solo | Role: Full-Stack, Duration: 2 Months, Year: 2025 |
| 6 | `gemini` | Gemini | Frontend | Personal Project | React, Gemini API, Context API | Gemini.png (96KB) | null | null | 3 | Industry: AI, Platform: Web, Team: Solo | Role: Frontend, Duration: 3 Weeks, Year: 2024 |

### Content Authenticity Notes

- **All 6 projects are illustrative/demo content.** Every `liveUrl` and `githubUrl` is `null`.
- The `status` field labels: `"Personal Project"` (4), `"Concept"` (1), `"Client Work"` (1).
- **Claims requiring verification before real-portfolio use:**
  - `piolec` status "Client Work" — needs confirmation that this was a real client engagement.
  - All story text uses first-person plural ("We started with...") for solo projects — needs alignment with the actual development process if used as real case studies.
  - No metrics are claimed (no user counts, performance benchmarks, revenue figures, or testimonials).
  - No URLs are live, so no link-rot risk currently.
  - The GitHub URLs in the old `Work.jsx` (previously deleted in Phase 0) pointed to unrelated repos — this has been removed.

---

## 7. Design System and Visual Implementation

### Grid and Layout

| Element | Layout |
|---|---|
| Homepage section | `.case-studies__grid`: 2-column grid, gap 3rem |
| `/projects` page hero | Centered, max-width 720px, padding 10rem top / 6rem bottom |
| Project detail content | Max-width 720px, centered |
| Project facts grid | 4-column grid on desktop, 2-column on ≤768px |
| Tech list | Horizontal flex with em-dash separators, stacks vertically on ≤576px |

### Typography

| Element | Font-size | Weight | Other |
|---|---|---|---|
| Card title | `var(--small-font-size)` (∼0.875rem) | `var(--font-medium)` | Nowrap + ellipsis |
| Card description | `var(--tiny-font-size)` (∼0.625rem) | Normal | Nowrap + ellipsis, hidden at ≤350px |
| Card stack | `var(--tiny-font-size)` | Normal, opacity 0.7 | Separated by `·` |
| Detail page title | `clamp(3rem, 7vw, 5.5rem)` | Semi-bold | letter-spacing: -0.03em |
| Detail story title | `clamp(1.5rem, 3.5vw, 2.25rem)` | Semi-bold | Opacity transitions 0.35 → 1.0 |
| Detail story text | `var(--normal-font-size)` (∼1rem) | Normal | line-height: 1.8 |
| Detail tech list | `var(--h2-font-size)` | Semi-bold | |

### Colors and Tokens

CSS custom properties used:

| Variable | Usage |
|---|---|
| `--title-color` | Card titles, CTA icon, hover fill, detail headings, fact values, tech list, progress bar |
| `--text-color` | Card description, stack, detail intro, story text, meta labels, reading time, links, section labels |
| `--container-color` | Card panel background, global container, hover text on CTA link |
| `--body-color` | Card logo background, detail page background (`--bg-color` ref in `.pe` — **`--bg-color` is not defined** in `App.css`; renders as `var(--bg-color)` fallback chain) |
| `--text-color-light` | Used in `.pe__back` — **not defined** in `App.css`; renders as `var(--text-color-light)` fallback chain |
| `--z-fixed`, `--z-modal` | Progress bar (z-index calc), lightbox |

**Note:** The project detail CSS references `--bg-color` (line 9) and `--text-color-light` (line 39) which are not declared in `App.css` `:root` or `[data-theme="dark"]`. They resolve only if inherited or defaulted. This appears to be a gap.

### Card Visual Treatment

- **Images** are rotated (`rotate(8deg) translate(4%)`) inside a 16/10 wrapper with overflow hidden — gives a tilted screenshot-on-desk effect.
- **Card panel** is a floating pill (border-radius: 999px) positioned at the bottom of the image wrapper.
- On hover: image `scale(1.04)` + `brightness(0.95)`, CTA circle rotates -4deg and fills.
- **Dominant color extraction** runs client-side via canvas sampling — a radial gradient is set as the image wrapper's background. No SSR fallback.
- **No `@media (prefers-reduced-motion)` handling** found.

### Dark Mode

- All components use `var(--title-color)`, `var(--text-color)`, `var(--container-color)`, `var(--body-color)` which are redefined under `[data-theme="dark"]` in App.css. The cards and detail page adapt automatically.
- The lightbox overlay uses a hardcoded `rgba(0, 0, 0, 0.92)` — dark mode compatible.
- The lightbox close button uses hardcoded `rgba(255, 255, 255, 0.6)` — dark mode only. No light mode override exists (fine since the overlay is always near-black).

---

## 8. Quality Checks and Risks

### Accessibility

| Observation | Severity |
|---|---|
| Card is a single `<Link>` — keyboard accessible by default | OK |
| Card uses `aria-label` on the CTA SVG, but it's inside a link that already contains the title. The SVG's `aria-label` duplicates context. | Low — screen reader reads title from link text, then optionally the CTA label |
| Project detail story titles are `<h2>` — good heading hierarchy | OK |
| Lightbox uses `role="dialog"`, `aria-modal="true"`, `aria-label` | OK |
| Card images have `alt` text (`"${title} project screenshot"`) | OK |
| No `aria-hidden` on rotated card images (they are decorative but have alt text) | Low |
| No `prefers-reduced-motion` media query — all hover transforms and animations fire regardless | Medium |
| Copy-link button announces "Link copied" via `aria-label` change | OK |
| `fetchpriority="high"` has a typo in ProjectDetail (written as `fetchpriority` instead of `fetchPriority`) — this is a pre-existing lint error | Low |

### Mobile / Responsive

| Observation | Severity |
|---|---|
| Grid collapses to 1 column at 576px | OK |
| Card description hidden at 350px | OK — necessary for small screens |
| Project detail facts grid reduces to 2 columns at 768px | OK |
| Tech list stacks vertically at 576px | OK |
| Detail meta wraps at 768px (flex column) | OK |
| Lightbox padding reduces at 576px | OK |
| Meta values reduce to `tiny-font-size` at 576px | OK — may be very small (∼0.625rem) |

### Performance

| Observation | Severity |
|---|---|
| **6 project PNGs ranging 96KB–4.7MB** — total ~16MB of unoptimized images | **Critical** |
| `loading="lazy"` on card images | OK |
| `decoding="async"` on card images | OK |
| ProjectDetail lazy-imported (code-split) | OK |
| Color extraction runs client-side on every card render — no impact after first paint | OK |
| Lightbox loads already-loaded images (no extra network request) | OK |

### Dead Code / Risks

| Observation | Severity |
|---|---|
| `--bg-color` undefined in CSS (ProjectDetail line 9) | **Medium** — falls through to undefined, resolves to default `transparent` or inherited. The page renders correctly likely due to parent `body-color`. |
| `--text-color-light` undefined in CSS (ProjectDetail line 39) | **Low** — falls through; `.pe__back` still renders as inherited color |
| `extractColor.js` is only used by CaseStudyCard — if removed, gradient background falls back to `none` | Low |
| No duplicate or stale project data files found | OK |
| No broken internal links found | OK |

---

## 9. Preservation Boundaries — *Must Preserve*

The following must remain unchanged in any future case-study improvements:

1. **Card 2-column grid layout** (`grid-template-columns: repeat(2, 1fr)`) — premium editorial grid
2. **Rotated card image treatment** — `transform: rotate(8deg) translate(4%)` with hover scale
3. **Floating pill card panel** — absolute-positioned bottom capsule containing title/description/CTA
4. **Dominant color extraction** — canvas-based background gradient on image wrapper
5. **Project detail reading progress bar** — fixed 2px bar tracking scroll
6. **Project detail story structure** — exactly 3 sections: The Problem / The Approach / The Outcome with IntersectionObserver active-title tracking
7. **Project detail metadata row** — Role, Type, Year, Status + reading time on left; Visit Live / View Source / Copy Link on right
8. **Lightbox** — full-screen overlay with Escape-to-close, body scroll lock
9. **Next-project navigation** — circular wrap, card-style link with image preview
10. **Copy-link feature** — clipboard API, timed "Copied ✓" feedback
11. **Keyboard navigation** — ArrowLeft → All Projects, ArrowRight → next project
12. **No filtering/pagination** — the 6-project curated set is intentional
13. **Typography scale** — detail title `clamp(3rem, 7vw, 5.5rem)`, story text `line-height: 1.8`, tech list in `--h2-font-size`
14. **Responsive breakpoints** — 992px, 768px, 576px, 350px
15. **Dark mode adaptation** — all tokens adapt via CSS custom properties
