# Portfolio Audit — Mostafa Akajdid

Date: 2026-07-31 · Read-only inspection of `makajdid.vercel.app` codebase (src/, public/, index.html, build output).

---

## 1. Overall Impression

**First impression:** Clean, calm, monochrome. It loads fast, the hero is uncluttered — a name, a role line, one sentence of "purpose" copy, an avatar, and a black CTA. It reads as a modern, minimal, **frontend-focused** personal site. It does not read as backend-oriented at first, second, or third glance.

**What type of developer it communicates:** A thoughtful, design-conscious developer who cares about interfaces and UX polish. The copy, the sections, and every project write-up say "I care about how things look and feel." Nothing in the hero, about, skills, or projects prioritizes backend engineering.

**What emotions it creates:** Calm, safe, neutral. Nothing offends; nothing excites. There is no accent color, no personality, no memorable voice. It feels *tastefully generic* — the danger zone between "minimal" and "forgettable."

**Is the value proposition immediately clear?** No. "Full-Stack Engineer — Building digital products with purpose" is a slogan, not a value proposition. It doesn't say what problem he solves best, for whom, or with what proof. The SEO title in the meta tags is actually more specific than anything visible on the page ("Full-Stack Developer in Casablanca | React, Next.js, Spring Boot").

---

## 2. Visual Hierarchy

**Typography:** Single family (Poppins, 400/500/600 only). No display type, no tonal contrast between headings and body — hierarchy is created purely by size and weight. Headings use `letter-spacing: -0.02em` and tight line-heights (1.05–1.2). Title scale is inconsistent across pages: home hero is 2.5rem, `/projects` hero climbs to clamp(2.75rem, 6vw, 4.5rem), project detail to clamp(3rem, 7vw, 5.5rem). Body line-height 1.6–1.8, good.

**Spacing:** Disciplined editorial rhythm. About/Skills/CaseStudies/Contact all use `padding: 7rem 1.5rem 5.5rem` with stepped reductions at 992/768/576/350px. Two competing rhythms exist: the global `.section` (5rem top) used by Home and Contact vs. the bespoke 7rem sections. A hardcoded `margin-bottom: 30px` inside `.button--flex` (`src/App.css:199`) is a wart that leaks 30px under the hero CTA and the scroll-down link.

**Layout:** Centered 720px editorial column for About/Skills/Contact; 968px 2-col grid for project cards; hero is a 3-col grid (social / image / text). Balanced and disciplined. The bottom-fixed header on desktop (a floating dock at `bottom: 24px`) is distinctive but fights the layout — it hovers over the footer content at the end of every scroll.

**Colors:** Full monochrome — `--hue: 0; --sat: 0%` everywhere. Body text is 46% gray on a 98% white background; dark mode is 74% on 12%. The only "color" on the site is the per-card gradient extracted from each project screenshot (`src/utils/extractColor.js`) — a genuinely nice touch. There is zero brand accent color anywhere.

**Contrast:** Borderline. Main body text (`hsl(0,0%,46%)` on `hsl(0,0%,98%)`) is ≈4.5:1 — right at the AA threshold for normal text. Large amounts of secondary text are further faded to `opacity: 0.35–0.5` (labels, quotes, intros, footers), which lands at roughly 1.5–2.5:1 — effectively invisible on many screens. Dark mode is noticeably better.

**Balance:** Good, if monotonous. Everything centered, everything gray.

**Readability:** Body copy is well-measured (max-width 480–620px), generous line-height. The pervasive faded text is the single biggest readability killer.

**Premium feeling: 6/10** — The restraint and spacing are premium. The execution (Poppins at 3 weights, flat monochrome, faded microcopy, an illustration instead of a photo) is competent but not distinctive.

---

## 3. User Experience

**Navigation:** Three links: About, Projects, Contact (`src/components/header/Header.jsx:7-11`). Critical gap: the **Skills section is not in the nav** (`SECTION_IDS` still contains `"skills"`, but there's no nav item for it). Desktop nav floats at the bottom of the screen — an Apple-dock choice — and it visually overlaps the footer/copyright when scrolled to the end. On mobile it moves to the top. The same nav jumps between top (mobile) and bottom (desktop), which is disorienting.

**Scrolling experience:** Smooth and native. Scroll-down affordance on the hero, scroll-up button appears past 700px, reading-progress bar on project pages. The global `scrollbar-width: none` + hidden `::-webkit-scrollbar` (`src/App.css:84-87`) removes the scroll affordance on some OS/browsers entirely.

**CTA placement:** "Get in touch" in the hero, "Get in touch" again in About, "Contact Me" on `/projects`, "Let's work together" as the submit button. Well placed, but repeated verbatim. Project detail pages have **no CTA at all** — a missed conversion point ("Have a similar problem? Let's talk.").

**Information flow:** Home → About → Skills → Projects → Contact. Logical, but missing the most important section for recruiters: **experience and education** (the data exists in `src/components/qualification/Qualification.jsx` but the component is not rendered anywhere). Location and availability are also absent from the hero.

**Cognitive load:** Low. One idea per screen, restrained copy, predictable structure.

**Friction points:**
- No way to verify any project: every single `liveUrl` and `githubUrl` is `null` (`src/data/caseStudies.js`), so "Visit Live" / "View Source" simply don't render.
- No experience timeline for recruiters to scan.
- Contact form has no visible email fallback, no spam protection, and depends on one external Vercel function.
- The 404 page says "This project could not be found." for *every* wrong URL — including `/terms` and any typo'd path.
- The bottom header dock covers the footer on desktop.
- The full `/projects` page exists and is in the sitemap but is not linked from the header (header "Projects" jumps to the homepage `#case-studies` anchor).

---

## 4. Content Audit

### Hero (Home)
- **Purpose:** Name, role, positioning, primary CTA, social/resume access.
- **Strengths:** Clean, short, CTA present, LinkedIn/GitHub/email-copy/resume all reachable from the social column.
- **Weaknesses:** Tagline "Building digital products with purpose" is generic enough to belong to any developer. Zero backend signal. No location, no availability, no credential. Inconsistent title: hero says "Full-Stack Engineer", SEO title says "Full-Stack Developer".
- **Suggestions:** Make the one-liner name the actual differentiator (e.g., Java/Spring Boot backend + product thinking). Add "Casablanca · Open to remote" and the Oracle Java SE 17 OCP.

### About
- **Purpose:** Humanize, add credibility.
- **Strengths:** Personal, well-written, honest about languages (French professional / English intermediate), mentions the OCP Java 17 certification.
- **Weaknesses:** The framing is UX-forward: *"I remove the friction between people and what they're trying to accomplish."* This directly contradicts backend positioning. "I've spent years learning" — no years stated. The `HEADING_OPTIONS` array (`About.jsx:4-10`) holds 5 unused, poster-style headlines — dead code that looks AI-sourced ("Software should feel effortless.", "Good design is invisible.", "Every pixel has a purpose.").
- **Missing:** Years of experience, named companies, location specificity, what backend work he actually does day to day.

### Skills
- **Purpose:** Show stack breadth.
- **Strengths:** Honest, grouped, and it includes the backend items (Spring Boot, Node.js/Express, PostgreSQL, MySQL) plus differentiators (Docker, CI/CD).
- **Weaknesses:** The "every day" group is ordered frontend-first (React, Next.js, TypeScript, Tailwind, shadcn) before Spring Boot; "REST APIs" uses a generic code icon; "JWT / NextAuth" sits in "How I work" alongside process items. No proficiency or usage context, so "Docker / CI/CD / Agile" are just unverifiable list entries.

### Case Studies / Projects
- **Purpose:** Proof of work — the make-or-break section.
- **Strengths:** Strong, consistent editorial structure (Problem → Approach → Outcome), reading-progress bar, sticky meta, lightbox, next-project flow, keyboard navigation. Visually the strongest part of the site.
- **Weaknesses:**
  - **All 6 projects have `liveUrl: null` and `githubUrl: null`.** Zero live demos, zero source code. Every claim is unverifiable.
  - The narratives are UX-flavored even for "full-stack" projects. Words like interface, search, calm, friction dominate. There is almost no backend content: no API design, no data modeling, no auth flows, no caching, no deployment, no testing, no error handling.
  - Generic/AI-flavored sentences recur: "clarity over complexity", "a stack chosen for longevity, not trends", "chosen for stability over novelty", "No heavy libraries, no unnecessary abstraction", "Performance was non-negotiable", "Nothing moves unless it has a reason to."
  - Repetitive claims: nearly every project says "pages load instantly", "60fps", "seamless", "calm", "effortless" — same adjectives, zero numbers.
  - **No metrics anywhere**: no users, latency, request volume, database size, uptime, load time.
  - **No Spring Boot/Java project exists** despite it being a headline skill. Stacks used: Next.js+Chakra+Prisma+PostgreSQL, Next.js+MUI+GSAP, Next.js+Tailwind, Next.js+Redux+Node+PostgreSQL, Next.js+Node+Tailwind+Clerk, React+Gemini API.
  - All marked "Team: Solo"; the only client project (Piolec) is unnamed.
  - Content redundancy: cards show `subtitle`, detail pages show the same `subtitle` as intro, and `description` duplicates it.
  - Each project's three story images are the same screenshot repeated.

### Contact
- **Purpose:** Conversion.
- **Strengths:** Photo, availability status, social links, validated form with inline errors, success/error states, "replies within 24 hours" microcopy, good labels and ARIA wiring.
- **Weaknesses:** No visible email/phone text (you must click a link or copy from the hero). No CAPTCHA or honeypot. Submission depends entirely on an external Vercel function (`email-fawn-alpha.vercel.app/api/sendEmail`) with a generic failure message and no alternative path.
- **Trust:** "Available now" is a strong, good signal.

### Footer
- **Strengths:** Name, role, links, Privacy Policy link now present and verified in the built output (the earlier "missing link" was a stale build/cache issue, not code).
- **Weaknesses:** No email, phone, or location. No Terms link yet. Minimal to the point of anonymity.

### Content that exists in code but is NOT on the site
- **Experience & Education**: `Qualification.jsx` is fully written (4 jobs, 3 education entries, including OCP) but is never rendered. Recruiters see zero work history.
- **Services**: `Services.jsx` (3 service cards) is also unused.
- These live only in `public/llms.txt` — which means the site contradicts its own metadata.

---

## 5. Backend Developer Positioning

**Does it sell him as a Backend Engineer? No.**
- Hero: "Full-Stack Engineer" + "Building digital products with purpose" — zero backend language.
- About: friction/UX framing; backend is reduced to one clause ("from layout to API design").
- Skills: backend items present but listed after the frontend, with no depth signal.
- Projects: none use Spring Boot/Java; the write-ups center UI/UX; MonPatient's backend is buried in a single outcome paragraph.
- Evidence: no API design, no schema modeling, no auth architecture, no deployment story, no testing, no metrics. The Oracle Java SE 17 OCP appears once in About text and otherwise only in invisible meta/JSON-LD.

**Full Stack Engineer? Partially.** Claimed in the hero and three projects have genuine full-stack stacks (realstate, monpatient, storycareer), but backend depth is never demonstrated — only asserted.

**Problem Solver?** The *intent* is there ("remove friction", "solve real problems") but proof is absent: no numbers, no measurable outcomes, no verifiable systems.

**Software Engineer?** The weakest of the four. There's no systems thinking visible: no architecture decisions, no trade-offs, no engineering practice (testing, CI/CD, observability, code quality). Ironically "How I work" lists Docker and CI/CD — yet nothing on the site demonstrates either.

**Summary:** The site is a polished frontend portfolio wearing a full-stack label. A "backend-focused" positioning is not just unproven — the entire narrative argues against it.

---

## 6. Recruiter Perspective (30 seconds)

**What I'd understand:** He's a full-stack/frontend-leaning developer who cares about design; has 6 projects; is available; is easy to contact.

**What I'd still not know:** Years of experience, where he's worked (nothing rendered), backend depth, whether projects are real or working (no links), his location, his English level (buried in About), and anything measurable.

**Would I continue reading?** For a junior/mid frontend role — possibly. For a backend or "full-stack with backend focus" role — no. The missing experience section alone is disqualifying for any recruiter who screens on years and history. The 30-second verdict would be: "nice site, but I can't verify anything."

---

## 7. Client Perspective

**Would I trust him?** Partially. The site is polished and honest-sounding, but nothing is verifiable: no demo, no source, no named client, no metrics, no testimonials. Five of six projects are "Personal Project"/"Concept" and the one client job has no name.

**Would I contact him?** Maybe — the visual polish could earn a message. But the absence of working examples and concrete outcomes lowers urgency.

**What's missing:** Named results and live examples, engagement/process/pricing framing, timelines, tech relevance to my problem, testimonials, and at least one working product to click.

---

## 8. UI Components Review

- **Header — Improve.** Bottom dock overlaps the footer; position flips between desktop and mobile; no Skills link; no link to the `/projects` page. The pill + CTA styling is otherwise fine.
- **Home hero — Improve.** Strong bones. Add location, availability, and a backend differentiator; consider a real photo instead of the small illustration avatar (8KB `mostafa.webp`).
- **About — Improve.** Keep the structure; rewrite framing to lead with engineering depth, give years and names.
- **Skills — Improve.** Backend-first ordering; add context (where each tool is actually used).
- **CaseStudyCard — Keep.** Best visual identity on the site; makes the detail pages look premium. Improve by reducing screenshot repetition and making the interactive affordance clearer.
- **ProjectDetail page — Keep.** The highlight of the portfolio. Improve: the dead "Visit Live / View Source" links (all null) must become real; add a closing CTA; add metrics into the story.
- **Contact — Keep/Improve.** Add spam protection, a visible email, and a mailto fallback.
- **Footer — Improve.** Add email, location, and the legal-link row.
- **ScrollUp — Replace.** It's an `<a href="#">` (`ScrollUp.jsx:18`) that causes a hash jump instead of smooth scroll; make it a real button with `preventDefault`.
- **NotFound — Replace copy.** "This project could not be found." is wrong for a general 404 (`NotFound.jsx:17`).
- **DarkMode — Keep.**
- **Remove (dead code):** `Services.jsx`, `Qualification.jsx` (or better — mount it back into the page), `ServiceItem.jsx`, unused assets (`hand.svg`, `files.svg`, `send.svg`, `laptop.png`, `smartphone-call.png`, `web-design.png`), the unused `HEADING_OPTIONS` strings, `.home__hand` CSS, the legacy `.contact__success*` CSS, and the pointless `stage` state in `Home.jsx` (always `"complete"`).

---

## 9. Design Consistency

- **Spacing:** Mostly consistent editorial rhythm; two competing scales (`.section` 5rem vs. bespoke 7rem) and one hardcoded 30px margin break the system.
- **Alignment:** Centered layout throughout — consistent.
- **Typography scale:** Good variable usage and `clamp()`, but title sizes vary widely between pages (2.5rem home → 4.5rem projects → 5.5rem detail).
- **Animations:** Restrained and uniform (`cubic-bezier(0.25, 0.1, 0.25, 1)`); reduced-motion is handled well in Home, cards, and project detail. The morphing blob animation on the hero portrait is the one "template" animation that doesn't fit the premium-minimal direction.
- **Transitions:** Consistent.
- **Responsiveness:** Excellent — thorough 992/768/576/350 breakpoints.
- **Accessibility:** Partially. No skip-to-content link; contrast failures on faded labels/quotes; 404 copy bug; hidden scrollbar; lightbox has no focus trap and doesn't return focus; social tooltips are hover-only; `aria-current="page"` is used on section links; global `scroll-behavior: smooth` is not disabled under `prefers-reduced-motion`. Positive: good label/ARIA wiring in the form, `aria-live` success, focus-visible outlines nearly everywhere, and reduced-motion support in the main components.

---

## 10. Performance Opportunities

- Remove the render-blocking external icon stylesheet (`unicons.iconscout.com`) and inline the ~6 icons actually used as SVGs.
- Self-host or subset Google Fonts (already preconnected + `display=swap`, which is good).
- Precompute the per-project gradient colors in the data file instead of running 6 canvas color-extractions at runtime (`extractColor.js`).
- `content-visibility: auto` on below-the-fold sections.
- Serve project screenshots (2880px webp) in two sizes with `srcset`; most are shown at ~450px CSS width.
- Inline the 8KB hero image or use `<img fetchpriority="high">` instead of a CSS background.
- Delete dead assets and dead CSS/JS (see section 8) to shrink the bundle.
- Keep the existing code-splitting (lazy sections) — it's already good.

---

## 11. Biggest Problems (priority order)

1. **Experience & Education are absent from the site** — the fully-written data is stranded in an unmounted component. Recruiter-filter killer.
2. **Every project is unverifiable** — all `liveUrl`/`githubUrl` are `null`; no demos, no source, no working product to click.
3. **Backend positioning is contradicted by the whole narrative** — UX-forward copy, frontend-first skills, and not a single Spring Boot/Java project.
4. **No metrics or outcomes anywhere** — "instant", "fast", "scalable" claims with zero numbers to back them.
5. **Case studies read as template/AI-generated** — identical 3-part structure, same claims, same adjectives across all six.
6. **No backend story is told in any project** — no API design, data modeling, auth, deployment, or testing.
7. **Skills section unreachable from the nav.**
8. **404 page has wrong copy for non-project routes.**
9. **Low-contrast faded text** (labels, quotes, intros at 0.35–0.5 opacity).
10. **No social proof** — no testimonials, no named client, no references.
11. **Desktop header dock overlaps the footer content.**
12. **Illustration avatars instead of a real photo** — hurts trust and "premium" perception.
13. **No location/availability in the hero**; phone number exists only in invisible JSON-LD and `llms.txt`.
14. **Contact form** — no spam protection, hidden email, single external endpoint, no fallback.
15. **Metadata out of sync with the site** — `llms.txt` references `#services` and `#evolution` anchors that don't exist, lists experience/education not on the page; `/projects` page is in the sitemap but not linked from nav.

---

## 12. Quick Wins (<1 hour)

- Fix the 404 copy ("This page could not be found.").
- Mount the already-built `Qualification` component (Experience + Education) back into the homepage — the content already exists.
- Add "Skills" to the nav.
- Reorder the skills grid backend-first and highlight Java/Spring Boot.
- Add location + availability to the hero subtitle.
- Show the email (and optionally phone) as visible text in the footer and contact section.
- Replace `ScrollUp`'s `<a href="#">` with a smooth-scroll button.
- Stop repeating the same screenshot 3× per project.
- Add a one-line backend differentiator under the hero title (e.g., "Oracle Java SE 17 OCP · Spring Boot · PostgreSQL").
- Delete dead code and unused assets (saves bundle size and removes "AI-poster" strings).
- Add `content-visibility` to below-fold sections.
- Inline the icon SVGs to drop a render-blocking external stylesheet.

---

## 13. Long-Term Improvements

- Ship 1–2 **demo-able backend projects** built with Spring Boot + PostgreSQL + JWT, deployed with working live and GitHub links.
- Rewrite case studies backend-first: problem → system design → schema → auth → API decisions → deployment → measurable outcomes.
- Add real metrics (response times, request volumes, DB size, uptime, load times) as evidence.
- Use a real professional photo.
- Add testimonials from the four employers and the Piolec client.
- Add a focused capabilities/engagement section for clients (process, timeline, tech relevance).
- Introduce one intentional accent/brand color used sparingly — the monochrome is safe but anonymous.
- Write case studies in a distinct, first-person voice and remove the template adjectives.
- Improve a11y: skip link, lightbox focus trap, contrast compliance, reduced-motion scroll behavior.
- Add schema.org structured data for experience/education and keep `llms.txt` in sync with what's actually on the page.

---

## 14. Final Score

| Area | Score |
|---|---|
| Design | 7 / 10 |
| UX | 6.5 / 10 |
| Content | 4 / 10 |
| Developer Branding | 4 / 10 |
| Trust | 3.5 / 10 |
| Premium Feel | 6 / 10 |
| **Overall** | **5 / 10** |

---

## Conclusion (brutally honest)

Right now this is a very clean **frontend** portfolio with a branding mismatch. It claims "Full-Stack / backend-focused," but it is a design-forward, UX-flavored, frontend-heavy site with zero verifiable work, zero metrics, and — critically — no experience section for recruiters to screen on. The craft is real: the layout, spacing, and project detail pages are genuinely good. The evidence is not.

The three changes that actually move the needle:
1. **Show the experience** — mount the section you already wrote.
2. **Make the work real** — live demos, source links, backend substance, and numbers.
3. **Lead with the backend** — rewrite the narrative so Java/Spring Boot/architecture is the headline, not an afterthought.

Without those, the site is a beautiful empty room: it impresses briefly, then fails the "can I verify this and does it fit my role?" test that both recruiters and clients run within the first minute. The strongest asset here is the case-study format — but right now it's telling the wrong story about the wrong specialization.
