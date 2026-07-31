# Portfolio Audit Report

**Repository:** `/Users/ocean_dev2/Projects/mostafa`
**Audit Date:** 26 July 2026
**Auditor:** Senior Frontend Engineer / UX Designer
**Owner:** Mostafa Akajdid — Full-Stack Developer (React, Next.js, Java/Spring Boot)
**Production:** https://makajdid.vercel.app | **Legacy:** https://akajdidm.vercel.app
**Inspiration:** https://praxis.framer.website

---

## 1. Executive Summary

### What the portfolio currently communicates
The site presents Mostafa as a full-stack developer based in Casablanca with strong React/Next.js and Java/Spring Boot skills. The content is accurate (recently aligned with the real CV), and several "redesigned" sections (About, Skills, Services, Qualification, Contact, Projects page, Project Detail) show an intentional editorial quality — clean typography, restrained spacing, italic quotes, and a thoughtful voice.

### Main strengths
- **Content is now CV-accurate** — Oracle certification, language skills, correct job dates, and full tech stack are present.
- **Editorial sections are well-written** — About, Skills, and Qualification have a genuine, philosophy-driven narrative voice.
- **Dark mode** works consistently across all sections.
- **Project Detail page** is feature-rich: reading progress bar, active-section tracking, lightbox, copy-link, keyboard navigation, next-project navigation.
- **Bottom-fixed dark pill header** is a distinctive UX pattern.
- **SEO foundation** exists (JSON-LD structured data, sitemap, OG tags, canonical URLs).
- **Vercel Analytics + Speed Insights** are integrated.

### Biggest gaps preventing premium / recruiter-ready quality

| Gap | Severity |
|---|---|
| Hero section is unpolished — small heading, cramped 3-column layout, outdated blob-animation portrait, social sidebar with phone tooltip | **Critical** |
| Two conflicting design systems coexist — old box-shadow cards style (Work/Footer/scrollUp) vs. new editorial style (About/Skills/Services/Qualification/Contact) | **Critical** |
| Footer is visually disconnected — uses the old box-shadow/rounded-card pattern, doesn't match the editorial sections above it | **High** |
| Work component is dead code — imported but commented out in Portfolio.jsx, uses old CSS | **High** |
| ScrollUp button uses old icon library (Unicons) and doesn't match editorial sections | **Medium** |
| Hero portrait uses a heavy 1.6MB PNG (about.png) with no WebP alternative | **High** |
| No contact form backend is verifiable — external API dependency with no fallback | **Medium** |
| Type scale is inconsistent — big-font-size changes between light/dark mode (2.5rem vs 2.75rem) | **Low** |
| Case study images are all placeholder/demo screenshots — no live URLs | **Medium** |
| No page transitions or route-level animations — SPA feels abrupt between pages | **Medium** |
| No loading states for lazy-loaded sections — Suspense fallback is null, causes blank flashes | **Low** |
| Mobile top-fixed pill at 0.7rem font is very small for touch targets | **Medium** |

---

## 2. Technical Inventory

### Framework and stack
- **Framework:** React 18 with Vite 5, React Router v7
- **Language:** JavaScript (no TypeScript in components)
- **Styling:** Plain CSS with CSS custom properties, no preprocessor
- **Animation libraries:** react-type-animation (typewriter), use-dencrypt-effect (heading scramble)
- **Icons:** react-icons (Feather, Simple Icons, Remix), Boxicons CDN, Unicons CDN
- **Hosting:** Vercel
- **Analytics:** @vercel/analytics, @vercel/speed-insights
- **Deployment:** vite build -> Vercel

### Route map

| Route | Component | Lazy? | Notes |
|---|---|---|---|
| / | Portfolio (pages/Portfolio.jsx) | No (eager) | Single-page portfolio with all sections |
| /projects | Projects (pages/Projects.jsx) | Yes | Project listing page |
| /projects/:slug | ProjectDetail | Yes | Case study detail page |
| * | NotFound | Yes | 404 page |

### Section order on homepage (Portfolio.jsx)
1. Header (eager)
2. Home (eager)
3. About (lazy)
4. Skills (lazy)
5. Services (lazy)
6. Qualification (lazy)
7. CaseStudies (lazy)
8. Work (lazy, commented out)
9. Contact (lazy)
10. Footer (eager)
11. ScrollUp (eager)

### Component map

| Component | Location | Notes |
|---|---|---|
| Header | components/header/ | Dark pill, bottom-fixed (desktop), top-fixed (mobile). IO active-section tracking |
| DarkMode | components/DarkMode/ | Theme toggle, sun/moon icons |
| Home | components/home/ | 3-col grid (social sidebar, portrait, data). Typewriter + decrypt heading |
| Social | components/home/Social.jsx | Social sidebar with tooltips |
| Data | components/home/Data.jsx | Name heading, typewriter subtitle, description, CTA |
| ScrollDown | components/home/ScrollDown.jsx | Scroll-down indicator |
| About | components/about/ | Editorial: label, heading, quote, body (portrait + narrative), CTA |
| Skills | components/skills/ | Two skill groups, icon grid, editorial heading/intro/closing |
| SkillItem | components/skills/SkillItem.jsx | Renders icon + name, optional primary style |
| Services | components/services/ | Three service cards |
| ServiceItem | components/services/ServiceItem.jsx | Card with icon, title, description |
| Qualification | components/qualification/ | Tabbed: Experience (4 jobs) + Education (3 entries). Timeline layout |
| CaseStudies | components/caseStudies/ | Card grid (3 cols) |
| CaseStudyCard | components/caseStudies/CaseStudyCard.jsx | Individual project card |
| Work | components/work/ | Dead code — old project grid, commented out |
| Projects | components/work/Projects.jsx | Old card grid for Work component |
| Contact | components/contact/ | Profile card + contact form. Submits to external Vercel API |
| Footer | components/footer/ | Links, address, social icons, copyright |
| ScrollUp | components/scrollUp/ | Shows at 700px scroll, links to #. Uses Unicons arrow |
| TextDecrypt | components/Utils/TextDecrypt.jsx | Heading scramble effect |
| extractColor | utils/extractColor.js | Canvas color extraction (not currently used) |

### Data architecture
- Case study content: src/data/caseStudies.js — hardcoded array of 6 objects
- Project images: src/assets/projects.js — static imports of 6 PNG screenshots
- General assets: src/assets/assets.js — static imports of SVGs, PNGs, PDF resume
- No CMS, no headless backend, no markdown files

### Font inventory
- **Primary:** Poppins (Google Fonts, weights 400, 500, 600)
- No secondary/display font, no variable font, no system font stack fallback

### CSS architecture
- Each component has its own CSS file (co-located)
- Global variables in App.css (:root + [data-theme=dark])
- Responsive at 992px, 768px, 576px, 350px breakpoints
- No @layers, minimal CSS nesting

### Asset sizes (concerns)
| Asset | Size | Format |
|---|---|---|
| about.png | 1.6 MB | PNG |
| monpatient.png | 1.7 MB | PNG |
| realstate.png | 3.0 MB | PNG |
| glassOcean.png | 3.2 MB | PNG |
| piolecImage.png | 4.9 MB | PNG |
| mostafa.webp | 113 KB | WebP (OK) |

---

## 3. Current UX and Visual Audit

### 3.1 Hero section — First impression

| Issue | Severity | File(s) | Recommendation |
|---|---|---|---|
| Heading is only var(--big-font-size) (2.5/2.75rem) | **High** | home.css:49 | Use clamp(3.5rem, 7vw, 6rem) for hero presence |
| Portrait uses outdated blob-morph animation | **Medium** | home.css:94 | Replace with gentle float animation (translateY cycling) |
| Social sidebar shows phone with tooltip on hover | **Medium** | home/Social.jsx:14-22 | Remove phone from hero sidebar; keep in Footer/Contact |
| Hero layout is a cramped 3-column grid | **High** | home.css:5-10 | Redesign to 2-column (text + portrait), move social inline |
| Scroll Down indicator has inline comment "sgvdjvdgj" | **Low** | home/ScrollDown.jsx | Remove the comment, clean up the SVG |
| Typewriter has cursor={false} | **Low** | home/Data.jsx:20 | Enable cursor or add CSS blinking caret |

### 3.2 Navigation

| Issue | Severity | File(s) | Recommendation |
|---|---|---|---|
| Bottom-fixed pill may feel unfamiliar | **Low** | header/header.css | Test with real users. Ensure no overlap with ScrollUp |
| No "Home" label in nav | **Low** | header/Header.jsx:143 | aria-label=Home helps screen readers; consider subtle home icon |
| Nav item "Project" (singular) is odd | **Low** | header/Header.jsx:9-12 | Rename to "Projects" |
| Mobile pill at 0.7rem violates touch target minimum | **Medium** | header/header.css:1698 | Increase to at least 0.8rem with larger tap area |

### 3.3 Typography

| Issue | Severity | File(s) | Recommendation |
|---|---|---|---|
| Only one font (Poppins) used everywhere | **Low** | App.css:8 | Add premium display font for headings (Space Grotesk, Satoshi) |
| big-font-size changes between themes (2.5 vs 2.75rem) | **Low** | App.css:20,65 | Make theme-independent or use clamp() at component level |
| No @font-face / font-display: swap fallback | **Low** | index.html:53-56 | Add system font fallback in App.css for --body-font |
| Section headings use clamp(1.75rem, 4vw, 2.5rem) | — | Multiple | Good pattern, keep consistent |

### 3.4 Spacing and layout rhythm

| Issue | Severity | File(s) | Recommendation |
|---|---|---|---|
| Section padding varies between old and new components | **Medium** | Multiple | Standardize all sections to the editorial pattern |
| Work component has different card radii, shadows | **High** | work/work.css | Remove the dead Work component entirely |
| Footer uses old icon backgrounds (square dark boxes) | **High** | footer/footer.css:1903 | Redesign Footer to match editorial system |
| "Portfolio" footer title is generic | **Low** | footer/Footer.jsx:5 | Change to "Mostafa Akajdid" or remove |

### 3.5 Color and contrast

| Issue | Severity | File(s) | Recommendation |
|---|---|---|---|
| Low-opacity text (0.35, 0.38) may drop below WCAG AA | **Medium** | Multiple editorial CSS | Test small text contrast; opacity 0.35 is edge-risky |
| Dark mode low-opacity text needs verification | **Medium** | App.css:54-56 | Test with contrast checker |
| No accent color — fully achromatic | **Low** | App.css:2-3 | Add subtle muted accent (indigo-blue or warm charcoal) |

### 3.6 Responsive behavior

| Issue | Severity | File(s) | Recommendation |
|---|---|---|---|
| Hero uses 0.5fr 3fr on mobile — awkward | **Medium** | home.css:159 | Stack portrait above data, move social inline |
| body padding-top doesn't account for iOS safe area | **Low** | App.css:210 | Add env(safe-area-inset-top) fallback |

### 3.7 Motion and interaction

| Issue | Severity | File(s) | Recommendation |
|---|---|---|---|
| No page transitions between routes | **Medium** | App.jsx, all pages | Add 200-300ms CSS fade transition |
| Suspense fallback=null causes blank flashes | **Low** | Portfolio.jsx:19-30 | Replace with skeleton placeholders |
| Typewriter speed=5 is very fast | **Low** | home/Data.jsx:22 | Consider speed=10 for visible typing effect |

### 3.8 Accessibility

| Issue | Severity | File(s) | Recommendation |
|---|---|---|---|
| button { outline: none } globally removes focus indicators | **Critical** | App.css:31 | Remove global outline: none; rely on component focus-visible |
| Hero portrait div has no alt text | **Medium** | home/Home.jsx:15 | Add aria-hidden=true or convert to img with alt |
| Contact form labels are visually hidden (correct pattern) | — | contact/contact.css:4339 | Good — keep as-is |

### 3.9 Performance

| Issue | Severity | File(s) | Recommendation |
|---|---|---|---|
| 6 case study images are massive PNGs (1.6-4.9MB each) | **Critical** | assets/projects/*.png | Convert to WebP, resize to 1200px max, total under 2MB |
| about.png is 1.6MB for a 280x373 portrait | **High** | assets/about.png | Resize to 560px, convert to WebP (should be under 100KB) |
| No loading=lazy on case study card images | **Medium** | caseStudies/CaseStudyCard.jsx | Add loading=lazy attribute |
| Two external icon CDNs (Boxicons + Unicons) | **Low** | index.html:59-60 | Consolidate to one or use react-icons exclusively |

### 3.10 Case study presentation

| Issue | Severity | File(s) | Recommendation |
|---|---|---|---|
| All projects use same image for every story section | **Medium** | data/caseStudies.js | Use different images per section, or remove redundant images |
| No live URLs for any project | **Medium** | data/caseStudies.js | Deploy at least subset of projects, add URLs |
| Monpatient GitHub link points to unrelated repo | **High** | work/Work.jsx:25 | Fix or remove the URL |

### 3.11 Contact / conversion

| Issue | Severity | File(s) | Recommendation |
|---|---|---|---|
| Form submits to external Vercel API with no fallback | **Medium** | contact/Contact.jsx:21 | Self-host email API or add fallback. Replace alert() with visible error |
| No spam protection on form | **Low** | contact/Contact.jsx | Add honeypot field or turnstile |
| No CTA after Contact section | **Low** | Portfolio.jsx | Add subtle "Back to projects" link in Footer |

---

## 4. Desired Design Direction

### Visual principles
1. **Clarity over decoration** — every element must earn its place. No gratuitous shadows, gradients, or animations.
2. **Generous whitespace** — let content breathe. Increase section padding, use wider gutters.
3. **Typographic hierarchy** — name at 5-6rem, section titles at 2.5-3rem, body at 1rem with line-height 1.7+.
4. **Subtle depth** — thin borders (1px solid rgba) and minimal shadows (0 1px 2px rgba).
5. **Deliberate motion** — animate with purpose. Nothing decorative.

### Typography direction
- **Body:** Poppins (keep current)
- **Display/Headings:** Add a premium grotesque (Space Grotesk, Satoshi, or Plus Jakarta Sans) for hero and section headings
- **Scale:** Hero name: clamp(3.5rem, 7vw, 6rem). Section headings: clamp(1.75rem, 4vw, 2.5rem). Body: clamp(0.9rem, 1.4vw, 1.05rem)
- **Letter-spacing:** Headings: -0.02em to -0.03em. Body: 0.005em to 0.01em

### Palette direction
- Keep achromatic base, add **one restrained accent**:
  - Muted indigo-blue (hsl(220, 30%, 50%)) or warm charcoal (hsl(30, 5%, 20%))
  - Used sparingly: hover states, active nav items, focus indicators, Contact CTA pill
- Light mode: bg hsl(0,0%,98%), title hsl(0,0%,12%)
- Dark mode: bg hsl(0,0%,8%), title hsl(0,0%,90%)

### Layout/grid direction
- **Homepage:** 2-column (text left, portrait right) on desktop. Stack on mobile. No social sidebar.
- **Section width:** Keep max-width: 720px for editorial sections.
- **Case studies grid:** Keep 3-column cards, use thin borders instead of shadows.
- **Footer:** Full-width minimal, text-only links, no icon backgrounds.

### Motion principles
- **Page transitions:** 200-300ms fade on route change
- **Scroll reveals:** Sections fade in with translateY(10px) via IntersectionObserver
- **Micro-interactions:** Nav link hover: opacity shift. Card hover: translateY(-2px). Button hover: opacity 0.8 to 1
- **Hero name:** Keep decrypt effect. Portrait: Replace blob morph with gentle float (translateY(-6px) loop)
- **No decorative spin/rotate/bounce animations**

### Component decisions

| Component | Decision | Rationale |
|---|---|---|
| Header | Retain with polish | Dark pill is distinctive. Add accent on active. Increase mobile font |
| DarkMode | Retain as-is | Works well |
| Home/Hero | **Redesign** | 2-col layout, larger heading, float animation, no blob, no social sidebar |
| About | Retain (minor polish) | Well-written. Convert portrait to WebP |
| Skills | Retain as-is | Clean editorial quality |
| Services | Retain as-is | Clean three-card layout |
| Qualification | Retain as-is | Timeline + tabs work well |
| CaseStudies | Retain, add image diversity | Card grid is fine |
| Work | **Remove entirely** | Dead code, commented out |
| Contact | Retain as-is | Improve API resilience |
| Footer | **Redesign** | Doesn't match editorial system |
| ScrollUp | **Redesign** | Replace Unicons with Feather, match new system |
| ProjectDetail | Retain (minor polish) | Feature-rich, ensure WebP images |
| NotFound | Retain as-is | Clean and minimal |

---

## 5. Content and Case Study Strategy

### 5.1 Recommended case study data model

```js
{
  slug: "unique-project-slug",
  title: "Project Name",
  shortDescription: "One-line summary for cards and meta tags",
  category: "Full-Stack" | "Frontend" | "Backend" | "Concept",
  year: "2025",
  role: "Full-Stack Development",
  tools: ["Next.js", "Spring Boot", "PostgreSQL", "Docker"],
  cover: import("./path/to/cover.webp"),
  gallery: [
    { src: import("./path/to/img1.webp"), alt: "Description" },
    { src: import("./path/to/img2.webp"), alt: "Description" },
  ],
  challenge: "What problem was being solved?",
  approach: "How did you approach the solution?",
  solution: "What was built and why it worked?",
  outcome: "What was the result?",
  links: {
    live: "https://project.vercel.app" || null,
    source: "https://github.com/owner/repo" || null,
  },
  featured: true,
  disclaimer: "Personal Project" | "Client Work" | "Concept",
}
```

Remove the old story array format. Render challenge/approach/solution/outcome from the new fields in ProjectDetail.

Add a visible disclaimer badge on cards and detail pages.

### 5.2 Illustrative demo project concepts

1. **"Artisan"** — Marketplace connecting Moroccan artisans with international buyers. Stack: Next.js, Spring Boot, PostgreSQL, Stripe. *Demo concept — no real marketplace exists.*

2. **"FlowState"** — Focus-enhancing Pomodoro app with AI-powered break suggestions. Stack: React, Node.js, Express, SQLite. *Demo concept — built as design and engineering exercise.*

3. **"MedTrack"** — Medication adherence tracker with push reminders. Stack: Next.js, NextAuth, PostgreSQL, Twilio. *Demo concept — not deployed or used by real patients.*

Each must use unique screenshots and avoid claiming real users, revenue, or testimonials.

---

## 6. Implementation Roadmap

### Phase 0 — Cleanup / Foundations (P0)

**Objectives:** Remove dead code, consolidate data, fix critical bugs, standardize patterns.

**Files likely to change:**
- src/components/work/Work.jsx — delete
- src/components/work/Projects.jsx — delete
- src/components/work/work.css — delete
- src/App.css — remove button { outline: none }
- src/components/header/Header.jsx — rename "Project" to "Projects"
- src/components/contact/Contact.jsx — replace alert() with visible error UI
- src/data/caseStudies.js — consolidate Work URLs into caseStudies data

**Acceptance criteria:**
- No dead components imported or rendered
- button { outline: none } removed globally
- All project entries have correct URLs (or null with reason)
- Contact form errors show inline, not via alert()

**Priority: P0**

---

### Phase 1 — Visual System and Homepage (P0-P1)

**Objectives:** Redesign hero, establish final visual language, make homepage feel premium.

**Files likely to change:**
- src/components/home/Home.jsx — new 2-col layout
- src/components/home/Social.jsx — remove phone, move inline
- src/components/home/Data.jsx — update copy
- src/components/home/ScrollDown.jsx — remove or make subtle
- src/components/home/home.css — full hero rewrite
- src/App.css — add accent color, refine type scale, system font fallback
- src/components/header/Header.jsx — minor polish
- src/components/header/header.css — accent on active, larger mobile font
- src/components/footer/Footer.jsx — redesign
- src/components/footer/footer.css — full rewrite
- src/components/scrollUp/ScrollUp.jsx — replace Unicons
- src/components/scrollUp/scrollUp.css — redesign

**Acceptance criteria:**
- Hero has spacious layout, name at 4-6rem
- Blob replaced with gentle float
- Social links integrated cleanly
- Footer matches editorial system
- ScrollUp matches new visual language
- Contact CTA uses accent color

**Priority: P0-P1**

---

### Phase 2 — Reusable Case Study Architecture (P1)

**Objectives:** Refactor data model, add image diversity, implement disclaimer, create 3 demo projects.

**Files likely to change:**
- src/data/caseStudies.js — refactor to new schema, add 3 demo projects
- src/components/caseStudies/CaseStudies.jsx — update to new schema
- src/components/caseStudies/CaseStudyCard.jsx — add disclaimer badge
- src/components/projectDetail/ProjectDetail.jsx — refactor to new fields
- src/assets/projects/ — convert all PNGs to WebP, add demo screenshots

**Acceptance criteria:**
- Data model is clean, reusable, documented
- Each project has 2+ unique images
- Disclaimer badges render correctly
- 3 demo projects exist with clear disclaimers
- All images under 200KB as WebP

**Priority: P1**

---

### Phase 3 — Premium Interactions and Polish (P1-P2)

**Objectives:** Page transitions, scroll reveals, micro-interactions, polished motion layer.

**Files likely to change:**
- src/App.jsx — route transition wrapper
- src/App.css — page-transition keyframes
- src/pages/Portfolio.jsx — scroll-reveal IO logic
- src/pages/Projects.jsx — scroll-reveal
- All editorial section CSS files — scroll-reveal classes
- src/components/home/home.css — float animation

**Acceptance criteria:**
- Routes transition with 200-300ms fade
- Sections fade in on scroll
- Portrait floats gently
- All focus-visible outlines work without global outline: none

**Priority: P1-P2**

---

### Phase 4 — SEO, Accessibility, Performance, QA (P2)

**Objectives:** Full a11y audit, image optimization, loading states, SEO metadata, cross-browser test.

**Files likely to change:**
- src/index.html — update canonical to makajdid.vercel.app
- src/pages/Portfolio.jsx — add Suspense skeletons
- src/pages/Projects.jsx — add Suspense skeletons
- src/assets/projects/*.png — convert all to WebP
- src/assets/about.png — convert to WebP, resize

**Acceptance criteria:**
- All images are WebP under 200KB
- aria attributes verified on all interactive elements
- Lighthouse scores: 90+ Performance, 95+ Accessibility, 90+ Best Practices
- Sitemap + robots.txt reference correct domain
- Tested on Chrome, Firefox, Safari, iOS Safari, Chrome Android

**Priority: P2**

---

## 7. Immediate Next Actions

Top 10 highest-impact tasks in implementation order:

1. **P0** — Remove `button { outline: none }` from App.css (global a11y fix)
2. **P0** — Remove dead Work component files (work/Work.jsx, work/Projects.jsx, work/work.css)
3. **P0** — Rename nav item "Project" to "Projects" in Header.jsx
4. **P0** — Replace `alert()` in Contact.jsx with inline error UI
5. **P1** — Redesign Hero section: 2-column layout, larger heading, float animation, no blob, no social sidebar
6. **P1** — Redesign Footer to match editorial system (text links, no icon backgrounds)
7. **P1** — Redesign ScrollUp to use Feather icon and match new visual language
8. **P1** — Add accent color to App.css (muted indigo or warm charcoal)
9. **P1** — Convert all project images to WebP (assets/projects/*.png) and resize
10. **P2** — Add page transitions (CSS fade on route change)

---

## 8. Questions / Assumptions

### Unconfirmed from codebase

1. **Domain:** The index.html references akajdidm.vercel.app as canonical, but the user mentioned makajdid.vercel.app as the current production site. Which is the correct active domain?

2. **Contact form API:** The endpoint email-fawn-alpha.vercel.app is an external deployment. Is this owned by Mostafa? Can it be moved into this project as a Vercel serverless function?

3. **Accent color:** No accent exists. Should the accent be a muted blue (professional/tech) or a warm tone? Confirm before Phase 1.

4. **Case studies usage:** The user said "case studies will initially use illustrative/demo content only." Should the existing 6 projects (Real Estate, Glass Ocean, etc.) be kept as-is, or replaced with entirely new demo concepts?

5. **Font choice:** Should Poppins remain the body font, or switch to Inter? Should a display font (Space Grotesk, Satoshi) be added for headings?

6. **Portrait photo:** The hero portrait (mostafa.webp, 113KB) and about portrait (about.png, 1.6MB) are different images. Should both remain distinct, or use one consistent portrait across the site?

7. **PDF resume:** The resume PDF (mostafa-akajdid-cv.pdf) is served from assets. Should it remain embeddable or linked as a download?

8. **extractColor.js utility:** This file exists but is not imported anywhere. Should it be removed, or is there a planned use for it (e.g., dynamic gradient backgrounds on project cards)?

9. **Instagram link:** The Instagram link appears in the hero social sidebar and footer. Is this actively maintained and relevant for a professional portfolio?

10. **Year in footer:** The footer shows "(c) 2026". Is this intentional (future-dated) or should it use JavaScript to auto-update?
