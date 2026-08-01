# Final Production QA Review

> **Role:** Senior QA Engineer / Frontend Tech Lead
> **Date:** 2026-08-01
> **Scope:** Full production audit of the portfolio before launch.
> **Method:** Read `docs/strategy/PORTFOLIO_PLAYBOOK.md` and all `docs/content/*.md`; audited all source under `src/`, `index.html`, and `public/`; ran `npm run lint` and `npm run build`.
> **Classification:** **CRITICAL** = must fix before production. **IMPORTANT** = should fix. **OPTIONAL** = nice after launch.

---

## 1. Tooling Results

| Check | Result |
| --- | --- |
| `npm run lint` (`eslint .`) | **FAIL — 18 errors, 0 warnings** (all in `src/components/`) |
| `npm run build` (`vite build`) | **PASS** — built in ~5.6s, all chunks emitted |

Lint failures (full list):

- `src/components/caseStudies/CaseStudies.jsx:5` — `showHeader` missing prop-types.
- `src/components/caseStudies/CaseStudyCard.jsx:5,38,45` — `slug`, `title`, `subtitle`, `description`, `stack`, `image`, `title.charAt`, `stack.join` missing prop-types.
- `src/components/projectDetail/ProjectDetail.jsx:148` — conditional `useMemo` (rules-of-hooks) [see CRITICAL-2].
- `src/components/projectDetail/ProjectDetail.jsx:241` — unknown property `fetchpriority` [see CRITICAL-3].
- `src/components/services/ServiceItem.jsx:3` — missing display name + prop-types.
- `src/components/skills/SkillItem.jsx:3` — missing display name + prop-types.

---

## 2. CRITICAL (must fix before production) — 4 issues

### C-1 · ESLint fails: 18 errors, 0 warnings
- **File:** `src/components/caseStudies/CaseStudies.jsx`, `src/components/caseStudies/CaseStudyCard.jsx`, `src/components/services/ServiceItem.jsx`, `src/components/skills/SkillItem.jsx`, `src/components/projectDetail/ProjectDetail.jsx` (full list above).
- **Description:** `npm run lint` exits non-zero. Four components have no prop validation, and the two `memo`-wrapped components lack `displayName`.
- **Why it matters:** Any CI gate built on `lint && build` blocks deploys; `react/prop-types` exists to catch shape mistakes in the `caseStudies` data flow; `display-name` matters for React DevTools debugging.
- **Suggested fix:** Add `propTypes` to the four data-driven components, set `displayName` on `memo(...)` components, and apply the targeted fixes in C-2 and C-3. All are small, mechanical changes.

### C-2 · Rules-of-hooks violation: `useMemo` called after a conditional return
- **File:** `src/components/projectDetail/ProjectDetail.jsx:148` (early return at `:110`).
- **Description:** `const readTime = useMemo(() => computeReadingTime(story), [story])` runs only when `project` is found. The component returns early for an invalid slug.
- **Why it matters:** React requires hooks in identical order on every render. Navigating from a valid to an invalid slug in the same mounted instance (e.g., next-project keyboard nav landing on a 404) triggers "Rendered more hooks than during the previous render" — a hard crash.
- **Suggested fix:** Move `readTime` above the early return (guard inside the function), or hoist it into a helper computed before the `if (!project)` check.

### C-3 · Invalid DOM prop `fetchpriority`
- **File:** `src/components/projectDetail/ProjectDetail.jsx:241`.
- **Description:** `<img fetchpriority="high" …>` uses the lower-case HTML spelling; React's supported prop is the camel-case `fetchPriority`.
- **Why it matters:** It renders today only because React passes unknown lower-case attributes through to the DOM — undocumented behavior that produces a lint error and could regress on a React update.
- **Suggested fix:** Change to `fetchPriority="high"`.

### C-4 · Skills band hard-coded `margin-left: 70px` breaks mobile layout
- **File:** `src/components/skills/skills.css:63` (`.skills__band { … margin-left: 70px; … }`).
- **Description:** The 70px left margin is never reset in the `≤768px` (`:187-192`), `≤576px` (`:195-206`), `≤380px` (`:208-214`), or `≤350px` (`:216-220`) queries, even though the band becomes a single column there.
- **Why it matters:** On phones the entire band is indented 70px inside a container that already has 1.25rem padding, shrinking the usable width and pushing the composition past the right edge — horizontal overflow / clipped technology names in the section that was just redesigned and is still marked "screenshot review pending."
- **Suggested fix:** Remove `margin-left: 70px` and restore the spec'd `column-gap: 72px` on `.skills__band` (per `docs/content/SKILLS.md` "Editorial Split Composition"), or reset `margin-left: 0` inside every mobile media query.

---

## 3. IMPORTANT (should fix) — 11 issues

### I-1 · No static title/description/Open Graph in `index.html` → broken social link previews
- **File:** `index.html:1-148`.
- **Description:** The document ships without `<title>`, `<meta name="description">`, or any OG/Twitter tags. All of them are injected at runtime by `react-helmet-async` (`src/pages/Portfolio.jsx:32-54`, `Projects.jsx:19-41`, etc.).
- **Why it matters:** WhatsApp, LinkedIn, Facebook, and Slack link scrapers do not execute JS. Sharing the portfolio link (the primary recruiter/clients channel) renders an empty card with no title, description, or image. JS-less crawlers index an empty `<head>`.
- **Suggested fix:** Add static base `<title>`, `meta description`, `og:*`, and `twitter:*` tags to `index.html`; Helmet overwrites them at runtime for per-route values.

### I-2 · Skills section unreachable from navigation + renders after Projects
- **File:** `src/components/header/Header.jsx:7-12`; `src/pages/Portfolio.jsx:61-62`.
- **Description:** `navItems` is About / Experience / Projects / Contact — no `skills`. The Skills section renders after Case Studies in the DOM, while `docs/content/SKILLS.md:7` documents it "between Experience and the case-study preview."
- **Why it matters:** A freshly redesigned section is only discoverable by scrolling; the playbook's audience (recruiters) may never see it. Also violates the documented section order.
- **Suggested fix:** Add `{ id: "skills", name: "Skills" }` to `navItems` (and reorder sections in `Portfolio.jsx` if the intended order is Experience → Skills → Projects).

### I-3 · Mobile anchor navigation lands section tops under the fixed header
- **File:** `src/components/header/header.css:233-240` (top-fixed pill, `top: 24px`, height 40px); sections `about`, `experience`, `case-studies`, `skills`, `contact` have no `scroll-margin-top`; native `#` links (`src/components/home/Data.jsx:16,20`, `Services.jsx:54`, `Qualification.jsx:151`) and JS `scrollIntoView` (`Header.jsx:78`) have no offset.
- **Description:** On ≤768px the header occupies roughly 24–64px from the viewport top. Any anchored jump scrolls a section top to `y=0`, hiding its label and first lines behind the pill.
- **Why it matters:** Core navigation is partially invisible to the mobile audience on every section.
- **Suggested fix:** Add `scroll-padding-top: 80px` to `html` inside the ≤768px media query (or `scroll-margin-top` on the section elements).

### I-4 · Projects "Contact Me" CTA navigates but never scrolls to contact
- **File:** `src/pages/Projects.jsx:70` (`<Link to="/#contact">`); `src/pages/Portfolio.jsx:20-28` (only handles `state.scrollTo`).
- **Description:** The CTA routes to `/` with a hash, but the portfolio scroll handler reads `useLocation().state.scrollTo`, not `location.hash`. The user lands at the top of the homepage.
- **Why it matters:** A primary conversion path on the second-most-visited page silently fails.
- **Suggested fix:** Use `<Link to="/" state={{ scrollTo: "contact" }}>` (matches the header cross-page pattern).

### I-5 · Global arrow-key navigation hijacks scrolling on project pages
- **File:** `src/components/projectDetail/ProjectDetail.jsx:71-92`.
- **Description:** A document-level `keydown` listener navigates to the next project on `ArrowRight` and to `/projects` on `ArrowLeft`. It is active even while the lightbox is open and regardless of whether the user is scrolling.
- **Why it matters:** Arrow keys are the default scroll input; pressing one while reading (or with a lightbox open) unexpectedly changes the page.
- **Suggested fix:** Disable while `lightbox` is open, and only act on arrow keys with a modifier (or remove the handlers).

### I-6 · Lightbox has no focus trap or focus management
- **File:** `src/components/projectDetail/ProjectDetail.jsx:329-348`.
- **Description:** `role="dialog" aria-modal="true"` but focus is never moved into the dialog, Tab can reach background content, and focus is not restored to the opener on close (Escape / backdrop click).
- **Why it matters:** Keyboard and screen-reader users can escape the modal into hidden background content, breaking `aria-modal` semantics.
- **Suggested fix:** Move focus to the dialog on open, trap Tab within it, restore focus on close.

### I-7 · No skip-to-content link
- **File:** `src/components/header/Header.jsx` (whole component).
- **Description:** The fixed header is the first focusable content on every page; there is no skip link to `<main>`.
- **Why it matters:** Keyboard and screen-reader users must Tab through the full nav on every page before reaching content.
- **Suggested fix:** Add a visually-hidden `.skip-link` as the first element of each page targeting `#main` (and give `<main>` an `id`).

### I-8 · Dark mode applied after first paint → flash of light theme
- **File:** `src/components/DarkMode/DarkMode.jsx:18-21`; `index.html` (no pre-paint script).
- **Description:** `data-theme` is set on `document.body` inside a `useEffect`, which runs after the first render/paint. `localStorage` and `matchMedia` are read correctly, but the attribute lands too late.
- **Why it matters:** Users with dark-mode preference (or a saved dark choice) see a white flash on every full page load.
- **Suggested fix:** Add a small inline script in `index.html` that sets `data-theme` on `<html>`/`<body>` before the bundle loads (and have `DarkMode` read it).

### I-9 · Dead components shipped + `llms.txt` links to sections that don't exist
- **File:** `src/components/services/Services.jsx`, `src/components/services/ServiceItem.jsx`, `src/components/qualification/Qualification.jsx`; `public/llms.txt:8-9`.
- **Description:** `Services` and `Qualification` are never imported or rendered (grep confirms references exist only inside their own files). `llms.txt` links to `/#services` and `/#evolution`, which are not on the live page.
- **Why it matters:** Unused code ships in the repo; LLM crawlers are pointed at dead anchors.
- **Suggested fix:** Wire the sections in or delete the components; update `llms.txt` to only reference sections that render.

### I-10 · No project has live/demo or source links
- **File:** `src/data/caseStudies.js` (every project has `liveUrl: null, githubUrl: null`); `src/components/projectDetail/ProjectDetail.jsx:206-218`.
- **Description:** The "Visit Live" / "View Source" links never render; the detail page shows only screenshots and story text.
- **Why it matters:** For a portfolio, proof-by-click is the strongest signal; recruiters cannot open the work. (May be intentional — confirm and document.)
- **Suggested fix:** Add real `liveUrl`/`githubUrl` values, or explicitly document the decision and lean on full-bleed screenshots.

### I-11 · 478 KB SVG favicon served on every page
- **File:** `public/favicon.svg` (478 KB); referenced at `index.html:12`.
- **Description:** Modern browsers fetch the SVG favicon on each page load.
- **Why it matters:** ~478 KB of favicon weight is disproportionate and shows up in network waterfalls, especially on mobile.
- **Suggested fix:** Export a small (<5 KB) optimized SVG, or drop the SVG and rely on `favicon-96x96.png` / `favicon.ico`.

---

## 4. OPTIONAL (nice after launch) — 11 issues

### O-1 · `aria-current="page"` on in-page section links
- **File:** `src/components/header/Header.jsx:120`.
- **Description:** Section anchors report `aria-current="page"`; the correct value for in-page locations is `"true"` or `"location"`.
- **Fix:** Use `aria-current="true"` for nav section links.

### O-2 · Scroll-to-top is a bare `<a href="#">`; hidden on mobile
- **File:** `src/components/scrollUp/ScrollUp.jsx:18`; `src/components/scrollUp/scrollUp.css:38-45`.
- **Description:** Default anchor jump (instant, not smooth), appends `#` to the URL, and the element is `display: none` on ≤768px while the scroll listener still runs.
- **Fix:** Use a `<button>` with `preventDefault` + `window.scrollTo({ behavior: "smooth" })`, or intentionally remove it on mobile.

### O-3 · Email-copy button reports success even when clipboard write fails
- **File:** `src/components/home/Social.jsx:9-18`.
- **Description:** The catch branch also sets `copied = true`, showing "Copied ✓" on failure (e.g., insecure context, blocked permission).
- **Fix:** Track a distinct failure message, or fall back to selecting/`prompt()`.

### O-4 · Generic 404 copy mentions projects
- **File:** `src/pages/NotFound.jsx:17`.
- **Description:** "This project could not be found." renders for any unmatched route (there is also a project-scoped 404 inside `ProjectDetail.jsx`).
- **Fix:** Use route-agnostic copy like "This page could not be found."

### O-5 · Header brand triggers a full page reload on subpages
- **File:** `src/components/header/Header.jsx:101-108`.
- **Description:** Brand is a plain `<a href="/">`; on `/projects` clicking it is a full document reload rather than an SPA navigation.
- **Fix:** Use react-router's `<Link to="/">`.

### O-6 · Scrollbars hidden site-wide
- **File:** `src/App.css:84-87` (`scrollbar-width: none` + `::-webkit-scrollbar { display: none }`).
- **Description:** No visible scrollbar on desktop, which can hide that the page scrolls.
- **Fix:** Overlay or thin styled scrollbars instead of none (subjective — confirm with the design owner).

### O-7 · Redundant reduced-motion branch in Home
- **File:** `src/components/home/Home.jsx:9-18`.
- **Description:** Both the reduced-motion and normal paths set the same `stage = "complete"`; the CSS `@media (prefers-reduced-motion: reduce)` already disables the animation.
- **Fix:** Collapse the effect to a single `setStage("complete")` (or remove the stage logic).

### O-8 · Stale sitemap metadata; verify social card image
- **File:** `public/sitemap.xml` (all `lastmod` = 2026-07-16); `public/og-image.png` (3.6 KB @ 1200×630).
- **Description:** Sitemap dates are not kept current; the OG image is very small for its dimensions.
- **Fix:** Regenerate `lastmod` values; visually verify the OG card renders correctly after fixing I-1.

### O-9 · Eyebrow labels below WCAG AA contrast
- **File:** `about.css:14-22`, `experience.css:19-28`, `caseStudies.css:12-21`, `skills.css:21-30`, `contact.css:99-108` (labels at `opacity: 0.35` on `--text-color`).
- **Description:** Small uppercase labels fall under the AA threshold — a consistent, deliberate editorial pattern across all sections.
- **Fix:** Only revisit if strict WCAG AA is a requirement; otherwise document the exemption.

### O-10 · Skills tablet gap stacks two offsets
- **File:** `src/components/skills/skills.css:63,164-166`.
- **Description:** At ≤992px the band keeps `margin-left: 70px` and adds `column-gap: 44px`, producing an effective ~114px column gap (spec says 72px).
- **Fix:** Fold into C-4 — use `column-gap` only, with a tablet override.

### O-11 · Unused `unpkg.com` preconnect
- **File:** `index.html:21`.
- **Description:** No resource is loaded from unpkg; the preconnect is dead weight.
- **Fix:** Remove the line.

---

## 5. Coverage by Audit Area

| # | Area | Verdict |
| --- | --- | --- |
| 1 | **Responsive** | Not ready — C-4 (Skills mobile overflow) and I-3 (anchor overlap under mobile header). Remaining breakpoints across About, Experience, Case Studies, Contact, Projects, and ProjectDetail are otherwise consistent (verified in CSS). |
| 2 | **Navigation** | Not ready — I-2 (Skills not in nav), I-4 (Projects CTA dead scroll), plus O-5 (brand reload). Header active-section observer and cross-page `state.scrollTo` pattern work correctly. |
| 3 | **Visual consistency** | Ready — sections share the editorial shell (eyebrow, clamp heading, thin rules, stepped padding). The two fixed-width families (1040px for Experience/Skills, 720px for About/CaseStudies-intro/Contact) match their specs. Minor: C-4's margin vs. the spec's column-gap. |
| 4 | **Accessibility** | Not ready — I-5, I-6, I-7, O-1, O-9. Positives: semantic `h2`/`h3`/`ul`/`li`, `aria-hidden` icons, `aria-live` success message, `role="tablist"` with `aria-controls`, `prefers-reduced-motion` blocks, `:focus-visible` outlines. |
| 5 | **Performance** | Mostly ready — I-11 (478 KB favicon), O-11. Positives: route-level code splitting, image `loading="lazy"` + `decoding="async"`, small webp assets (<200 KB), font `display=swap` + preconnect. Skills lazy chunk is 24 KB (9.7 KB gzip) — acceptable. |
| 6 | **SEO** | Not ready — I-1 (no static head for crawlers/social scrapers), I-9 (llms.txt dead anchors), O-8. Positives: per-route Helmet titles/descriptions/canonicals, three JSON-LD blocks, `robots.txt` + sitemap, favicon set, `lang="en"`. |
| 7 | **Production readiness** | Not ready — C-1 (lint gate), C-2, C-3, I-8 (theme flash), I-10 (no project links). Build passes and outputs are valid. |

---

## 6. Summary

- **Files created:** 1 — `docs/reviews/FINAL_QA.md`.
- **CRITICAL:** 4 (C-1..C-4)
- **IMPORTANT:** 11 (I-1..I-11)
- **OPTIONAL:** 11 (O-1..O-11)
- **ESLint:** FAIL — 18 errors, 0 warnings.
- **Build:** PASS — `vite build` completed successfully (~5.6s).
