# Portfolio Content Inventory

Read-only inventory of all content in the `mostafa` portfolio codebase.
Every string below is quoted exactly as it appears in the source. No rewrites, no improvements.

---

## 1. Site Identity

| Field | Exact content | Source file | Visible on site | Metadata / JSON-LD / llms.txt / unused only |
|---|---|---|---|---|
| Full name | `Mostafa Akajdid` | `src/components/home/Data.jsx:4`, `src/components/footer/Footer.jsx:8`, `src/components/contact/Contact.jsx:79` | Yes (hero, footer, contact) | Also in `index.html` JSON-LD (Person/ProfessionalService/WebSite `name`) |
| Main job title | `Full-Stack Engineer` | `src/components/home/Data.jsx:5` | Yes (hero subtitle) | — |
| Job title (alt) | `Full-Stack Software Engineer` | `src/components/footer/Footer.jsx:9` | Yes (footer role line) | — |
| Job title (alt) | `Full-Stack Developer` | `src/pages/Portfolio.jsx:33,36,39,42` (Helmet) and `index.html:41` (JSON-LD `jobTitle`) | No (meta only) | Yes |
| Job title (alt) | `full-stack developer` | `src/components/about/About.jsx:38` | Yes (About body) | — |
| Tagline | `Building digital products with purpose.` | `src/components/home/Data.jsx:7` | Yes (hero statement) | — |
| Location (visible) | `Based in Morocco` | `src/components/about/About.jsx:39` | Yes (About body) | — |
| Location (metadata) | `Casablanca` / `Casablanca-Settat` / postal `20000` / country `MA` | `index.html:45-50,76-81` (JSON-LD); `Portfolio.jsx:33` title "in Casablanca"; `package.json:4` | No | Yes |
| Availability status | `Available for freelance & full-time opportunities.` / `Available now` | `src/components/contact/Contact.jsx:81,112` | Yes (Contact) | — |
| Email | `mostafaakajdid6@gmail.com` | `src/components/home/Social.jsx:4`, `Footer.jsx:28`, `Contact.jsx:103-109`, `Privacy.jsx:96-100` | Yes (as `mailto:` links + copy button; no plain-text email anywhere) | Also `index.html:51` (JSON-LD `email`), `public/llms.txt` |
| Phone number | `+212-7-62-54-40-11` | `index.html:52` (JSON-LD `telephone`) | No | Yes |
| Phone number (alt format) | `+212 7 62 54 40 11` | `public/llms.txt` (Contact section) | No | Yes |
| LinkedIn | `https://www.linkedin.com/in/mostafa-akajdid/` | `Social.jsx:23-25`, `Contact.jsx:86-88`, `Footer.jsx:14` | Yes | Also `index.html:55` (JSON-LD `sameAs`) |
| GitHub | `https://github.com/akajdid-mostafa` | `Social.jsx:33-35`, `Contact.jsx:95-97`, `Footer.jsx:23` | Yes | Also `index.html:54` (JSON-LD `sameAs`), `package.json:10` (repository `https://github.com/akajdid-mostafa/akajdid.git`) |
| Instagram | `https://www.instagram.com/mostafaakajdidm/` | `index.html:56` (JSON-LD `sameAs`) | No | Yes |
| Resume/CV link | `src/assets/mostafa-akajdid-cv.pdf` (build output: `/assets/mostafa-akajdid-cv-BbPyvIQb.pdf`) | `src/assets/assets.js:5`, used in `Social.jsx:52-58` and `Footer.jsx:31-39` | Yes (hero social "Resume", footer "Resume") | — |
| Website URL | `https://makajdid.vercel.app` | `index.html` (canonicals, JSON-LD `url`), `package.json:8` (`homepage`) | — | Yes (canonical + JSON-LD + sitemap) |
| App/brand name (alt) | `Akajdid` | `public/site.webmanifest:2-3` (`name`, `short_name`) | No | Yes |

**Conflicting versions found elsewhere:** job title (Engineer / Software Engineer / Developer), location (Morocco vs Casablanca), phone format (`+212-7-62-54-40-11` vs `+212 7 62 54 40 11`), brand name (Mostafa vs Akajdid). Details in §12.

---

## 2. Hero Content

Source: `src/components/home/Data.jsx` (visible), `src/components/home/Home.jsx`, `src/components/home/Social.jsx`, `src/components/home/ScrollDown.jsx`.

**Visible content:**

- Name: `Mostafa Akajdid`
- Role: `Full-Stack Engineer`
- Statement: `Building digital products with purpose.`
- Supporting paragraph: `I help turn ideas into products people enjoy using. From planning the architecture to building the frontend and backend, I focus on creating software that stays simple, reliable, and ready to grow.`
- CTA text: `Get in touch`
- CTA destination: `#contact`
- Social links (icon + tooltip text): `LinkedIn`, `GitHub`, `Email`, `Resume`
  - LinkedIn → `https://www.linkedin.com/in/mostafa-akajdid/` (tooltip `LinkedIn`, aria-label `LinkedIn profile`)
  - GitHub → `https://github.com/akajdid-mostafa` (tooltip `GitHub`, aria-label `GitHub profile`)
  - Email → copy-to-clipboard button (tooltip `Email` → `Copied ✓` on success; aria-label `Copy email address` / `Email copied`)
  - Resume → `mostafa-akajdid-cv.pdf` (download, tooltip `Resume`, aria-label `Resume`)
- Scroll affordance: `Scroll Down` (image `scroll.svg` alt `Scroll down`, arrow down) → destination `#about`
- Hero image: CSS background `src/assets/mostafa.webp` (300×300), animated blob border-radius; no `alt` (div-based background image).

**Unused / dead hero-related content:**

- `Home.jsx:8,10-19` — `stage` state ("idle" → always set to `"complete"`); the entry animation state machine is dead logic.
- `home.css:84-88,177-180` — `.home__hand` rules for a waving hand (`hand.svg`) that no longer exists in `Data.jsx`.
- `src/assets/hand.svg` — unused asset.
- No location or availability text exists in the hero.
- No eyebrow/label above the name (e.g. "Hello, I'm" style) — none present.

---

## 3. About Content

Source: `src/components/about/About.jsx` (visible) + `src/components/home/Data.jsx`.

**Visible content:**

- Label: `About`
- Heading: `Software should feel effortless.`
- Quote: `"I don't just build interfaces. I remove the friction between people and what they're trying to accomplish."`
- Paragraph 1: `I'm a full-stack developer who believes software should serve people, not the other way around. Based in Morocco, I've spent years learning what makes digital products actually work — not just compile. I hold an Oracle Certified Professional certification in Java SE 17, and I bring that same depth to every layer of the stack.`
- Paragraph 2: `I start with the person using the product, not the technology behind it. Every decision — from layout to API design — is measured against one question: does this make the experience simpler?`
- Paragraph 3: `You can expect clear communication, thoughtful code, and a genuine interest in solving the right problem. I work in French (professional) and English (intermediate), and I do my best work with people who care about quality and aren't afraid to iterate.`
- CTA text: `Get in touch` (with arrow `→`), destination `#contact`
- Portrait image: `src/assets/about.webp` (280×373), alt `Mostafa Akajdid`

**Certifications mentioned:** `Oracle Certified Professional certification in Java SE 17`.

**Languages mentioned:** French (professional), English (intermediate).

**Unused / alternate About content** — `HEADING_OPTIONS` in `About.jsx:4-10`, only index `0` is used:
- `Software should feel effortless.` (used)
- `Building products people enjoy using.`
- `I solve problems, not just write code.`
- `Good design is invisible.`
- `Every pixel has a purpose.`

**Missing (fields the narrative implies but does not state):** years of experience (says "years"), company names, any specific backend projects.

---

## 4. Skills and Technical Content

Source: `src/components/skills/Skills.jsx` (visible), `src/components/skills/SkillItem.jsx`.

### Group 1 — `Technologies I use every day`
Description: `The tools I reach for when building complete products, from interfaces to backend systems.`

| Display name | Icon | Visible | Duplicates / other mentions |
|---|---|---|---|
| `React` | `SiReact` | Yes | `index.html` JSON-LD `knowsAbout`; `llms.txt`; project stacks (gemini) |
| `Next.js` | `RiNextjsLine` | Yes | JSON-LD `knowsAbout`; `llms.txt`; 5 of 6 project stacks |
| `TypeScript` | `SiTypescript` | Yes | JSON-LD `knowsAbout`; `llms.txt`; Qualification.jsx (unrendered) |
| `Tailwind CSS` | `SiTailwindcss` | Yes | `llms.txt`; project stacks (piolec, storycareer); Qualification.jsx |
| `shadcn/ui` | `SiShadcnui` | Yes | `llms.txt`; Qualification.jsx (unrendered) |
| `Spring Boot` | `SiSpringboot` | Yes | JSON-LD `knowsAbout`; `llms.txt`; Qualification.jsx; package.json; **no project uses it** |
| `Node.js / Express` | `SiNodedotjs` | Yes | `llms.txt` says `Express.js` (name conflict); project stacks (monpatient, storycareer) |
| `REST APIs` | `RiCodeLine` | Yes | JSON-LD `knowsAbout` (`REST API`); `llms.txt`; project technologies lists |
| `PostgreSQL` | `BiLogoPostgresql` | Yes | JSON-LD `knowsAbout`; `llms.txt`; project stacks (realstate, monpatient) |
| `MySQL` | `SiMysql` | Yes | `llms.txt`; Qualification.jsx (unrendered) |

### Group 2 — `How I work`
Description: `The practices that help software stay reliable, maintainable, and easy to evolve.`

| Display name | Icon | Primary flag | Visible | Other mentions |
|---|---|---|---|---|
| `Git` | `SiGit` | `primary` | Yes | `llms.txt` |
| `GitHub` | `SiGithub` | — | Yes | JSON-LD `sameAs`; `llms.txt`; header identity links |
| `Docker` | `SiDocker` | `primary` | Yes | JSON-LD `knowsAbout`; `llms.txt` |
| `CI/CD` | `SiGithubactions` | `primary` | Yes | `llms.txt` (GitHub Actions) |
| `JWT / NextAuth` | `SiJsonwebtokens` | — | Yes | `llms.txt` (`JWT`, `NextAuth.js`); Qualification.jsx (unrendered) |
| `Agile / Scrum` | `RiLoopLeftLine` | — | Yes | `llms.txt`; Qualification.jsx (unrendered) |

**Visible but not in the skills grid** (mentioned elsewhere): `Java 17` (JSON-LD `knowsAbout`, `llms.txt`, Qualification.jsx), `Chakra UI` (project realstate), `Material-UI` (project glassocean, `llms.txt`), `Prisma` (project realstate), `GSAP` (project glassocean), `Redux Toolkit` (project monpatient), `Clerk` (project storycareer), `Gemini API` (project gemini), `Context API` (project gemini), `Fastify` (llms.txt only).

Other heading copy (visible): `Tools evolve. The way you solve problems matters longer.`
Intro (visible): `Every product asks different technical questions. I don't start with a favorite framework — I start with the problem. Once the constraints are clear, choosing the right architecture and technology becomes the easy part.`
Closing (visible): `I don't aim to know every technology. I aim to become the kind of engineer who can learn any technology when it matters.`

---

## 5. Experience Content

Source: `src/components/qualification/Qualification.jsx` — **component is never rendered** (not imported by any page). Also present in `public/llms.txt` and JSON-LD (`hasCredential` only, no employment history). Not visible anywhere on the site.

### Entry 1
- Role: `Full-Stack Developer`
- Company: `Dynamic Impact`
- Dates: `Aug 2025 – Present`
- Description: `Building full-stack applications with React, Next.js, and Spring Boot. Work includes REST API design and integration with Spring Boot and Express.js, PostgreSQL data modeling, and database access optimization — delivered through an Agile workflow with regular code reviews.`
- Location: not present. Employment type: not present. Bullets: none. Technologies: none (prose only). Links: none.

### Entry 2
- Role: `Front-End Developer`
- Company: `Digitalia Solutions`
- Dates: `Apr 2025 – Aug 2025`
- Description: `Built the InfluMatch platform with React 18 and TypeScript, implementing JWT authentication with role-based user management and creating a reusable UI component library with TailwindCSS and shadcn/ui.`
- Location: not present. Employment type: not present. Bullets: none. Technologies: none (prose only). Links: none.

### Entry 3
- Role: `Full-Stack Web Developer`
- Company: `Ocean Connecting`
- Dates: `Aug 2024 – Mar 2025`
- Description: `Developed the monpatient medical platform with Next.js, implementing role-based authentication and access control through NextAuth. Managed data across PostgreSQL and MySQL databases.`
- Location: not present. Employment type: not present. Bullets: none. Technologies: none (prose only). Links: none.

### Entry 4
- Role: `Web & Marketing Developer`
- Company: `Optisent`
- Dates: `Sep 2023 – Jun 2024`
- Description: `Built email campaigns and marketing offers from scratch using HTML and CSS. Tracked campaign performance, reported on key metrics, and gained early experience in data-driven decision making.`
- Location: not present. Employment type: not present. Bullets: none. Technologies: none (prose only). Links: none.

**Unused section copy (Qualification.jsx, unrendered):**
- Label: `Evolution`
- Heading: `Every role shaped how I think about software.`
- Intro: `I've worked across front-end, full-stack, and infrastructure — always with the same goal: building products that serve people. Each role taught me something the previous one couldn't.`
- Tabs: `Experience`, `Education`
- CTA: `Selected Work` (arrow `→`) → `#case-studies`
- Note: the section `id="evolution"` matches the `#evolution` anchor referenced in `llms.txt` but does not exist on the live homepage.

---

## 6. Education and Certifications

Source: `src/components/qualification/Qualification.jsx` (unrendered) + `About.jsx` (partially) + `index.html` JSON-LD + `llms.txt`.

| Institution | Qualification / Certification | Date | Location | Description | Credential ID / link | Visible |
|---|---|---|---|---|---|---|
| `Coding Tech, Casablanca` | `Formation Full Stack (Spring Boot & React)` | `2025` | Casablanca | `Intensive full-stack training in modern web technologies, with a focus on backend architecture, API design, and system thinking.` | None | No (unrendered) |
| `ISTA TADDART, Agadir` | `Technicien Spécialisé en Développement Informatique` | `2020 – 2023` | Agadir | `Three-year specialization in software development that built foundational skills in programming, databases, and software engineering.` | None | No (unrendered) |
| `—` (issuer not stated) | `Oracle Certified Professional — Java SE 17 Developer` | `2025` | Not stated | `Industry-recognized certification in Java SE 17, covering core language features, APIs, and best practices.` | None | No (unrendered in Qualification); **Yes** (mentioned in `About.jsx:41-42`) |

**Other mentions of OCP:**
- `index.html:59-63` JSON-LD `hasCredential`: `Oracle Certified Professional, Java SE 17 Developer` (category `Professional Certification`)
- `public/llms.txt`: `Oracle Certified Java SE 17 Developer (OCP)`
- `index.html:42` JSON-LD description: `Oracle Certified Java SE 17 Developer`

**Date conflict:** Qualification.jsx lists OCP as `2025`; no other date exists for it.

---

## 7. Projects Inventory

Source: `src/data/caseStudies.js` (single data source, 6 projects). Images in `src/assets/Project/*.webp`, exported via `src/assets/projects.js`.
Common structure per project: `id`, `slug`, `title`, `subtitle`, `description`, `image`, `stack`, `liveUrl`, `githubUrl`, `meta {role, duration, year, type}`, `facts {industry, platform, responsive, team}`, `status`, `story[] {title, text[], image, imageAlt}`, `technologies[]`.

**Common facts across all 6 projects:** `liveUrl: null`, `githubUrl: null`, `platform: Web`, `responsive: Yes`, `team: Solo`. All cards link to `/projects/{slug}` with aria-label `View {title} case study`. Every project's `story[].image` is the **same image repeated 3×** per project. On the detail page, because `liveUrl`/`githubUrl` are null, the `Visit Live` and `View Source` links are not rendered.

Reachability: all 6 are visible on the homepage (`CaseStudies` grid) and on `/projects` page (`CaseStudies showHeader={false}`); all detail pages reachable at `/projects/{slug}`.

SEO per project (from `ProjectDetail.jsx` Helmet): title `{title} — Mostafa Akajdid`, description `{subtitle}`, canonical `https://makajdid.vercel.app/projects/{slug}`, og:type `article`, og:image = site-level `og-image.png` (not the project image). **No per-project structured data (JSON-LD).**

---

### 7.1 Real Estate Platform

- Name: `Real Estate Platform`
- Subtitle: `A full-stack property marketplace built for modern real estate — search, filter, and connect with ease.`
- Short description: `Full-stack property marketplace with advanced search and user authentication.`
- Type: `Web Application` · Role: `Full-Stack Development` · Duration: `2 Months` · Year: `2024` · Status: `Personal Project`
- Industry: `Real Estate` · Team: `Solo`
- Stack: `Next.js`, `Chakra UI`, `Prisma`, `PostgreSQL`
- Technologies: `Next.js`, `Chakra UI`, `Prisma`, `PostgreSQL`, `REST API`, `Authentication`, `Responsive Design`
- Problem: `Finding a property online should feel simple. Most platforms, however, overwhelm users with cluttered interfaces, slow search, and fragmented listing data. The experience feels outdated — more like a database dump than a tool designed for people.` / `The challenge was clear: build a marketplace where searching for a home feels effortless. Fast results, clean presentation, and a path from browsing to contacting that requires almost no thought.`
- Approach: `Search was the starting point. It's the most common action on any real estate platform, so every other feature was designed to support it — not compete with it. Filtering by location, price, and type had to feel instant.` / `The interface was kept deliberately minimal. Large property cards, clear pricing, and map integration. Users can move from browsing to contacting an agent in three taps, with no dead ends or confusing detours.`
- Outcome: `The platform delivers a calm, focused browsing experience. Property pages load instantly, search results update in real time, and the overall feel is trustworthy without being sterile.` / `Built on Next.js for performance, Prisma for type-safe data access, and PostgreSQL for reliability — a stack chosen for longevity, not trends.`
- Metrics/numeric claims: `three taps`, `results update in real time`, `Property pages load instantly`
- Live URL: `null` · GitHub/source URL: `null`
- Images: `src/assets/Project/realstate.webp` (2880×1800) ×3
- Alt texts: `Real Estate Platform showing property listings`, `Real Estate Platform search and filter interface`, `Real Estate Platform property detail view`

### 7.2 Glass Ocean

- Name: `Glass Ocean`
- Subtitle: `A landing page that demonstrates glassmorphism done right — transparent, layered, and alive.`
- Short description: `Landing page with glass morphism design and smooth responsive animations.`
- Type: `Landing Page` · Role: `Frontend Development` · Duration: `3 Weeks` · Year: `2024` · Status: `Concept`
- Industry: `Design Showcase` · Team: `Solo`
- Stack: `Next.js`, `Material-UI`, `GSAP`
- Technologies: `Next.js`, `Material-UI`, `GSAP`, `CSS Custom Properties`, `Responsive Design`
- Problem: `Glassmorphism is everywhere — but most implementations feel heavy. Blurred backgrounds that obscure content, low-contrast text, and effects that slow the page to a crawl. It's a trend that's easy to apply and hard to get right.` / `The goal was to prove that glassmorphism can feel premium without sacrificing readability or speed. Depth and transparency should enhance the experience, not decorate it.`
- Approach: `The philosophy was restraint. Subtle blur, controlled opacity, and carefully layered depth. Every glass element was tuned for contrast against its background — readable at a glance, beautiful on closer inspection.` / `GSAP animations were used sparingly. Smooth entrances, gentle parallax on scroll, and micro-interactions that reward attention without demanding it. Nothing moves unless it has a reason to.`
- Outcome: `The result is a page that feels alive — depth, movement, and transparency working in concert without overwhelming the visitor. It demonstrates that glassmorphism, when applied with discipline, can be both beautiful and functional.` / `Performance was non-negotiable. The page loads smoothly with no layout shifts, and every animation runs at 60fps. A visual showcase that never asks the user to wait.`
- Metrics/numeric claims: `60fps`, `no layout shifts`
- Live URL: `null` · GitHub/source URL: `null`
- Images: `src/assets/Project/glassOcean.webp` (2880×1800) ×3
- Alt texts: `Glass Ocean landing page hero section`, `Glass Ocean showing layered glass elements`, `Glass Ocean responsive design across devices`

### 7.3 Piolec

- Name: `Piolec`
- Subtitle: `An electrical products catalog built for clarity — navigate hundreds of products without friction.`
- Short description: `Electrical products catalog with intuitive UI and seamless navigation.`
- Type: `Web Application` · Role: `Frontend Development` · Duration: `1 Month` · Year: `2024` · Status: `Client Work`
- Industry: `Industrial` · Team: `Solo`
- Stack: `Next.js`, `Tailwind CSS`, `JavaScript`
- Technologies: `Next.js`, `Tailwind CSS`, `JavaScript`, `Responsive Design`
- Problem: `Industrial product catalogs are notoriously difficult to navigate. Hundreds of SKUs, dense technical specifications, and categories that make sense to engineers but leave buyers lost. The information is there — the experience isn't.` / `The objective was to build a catalog where finding the right product takes seconds, not minutes. Clarity over complexity.`
- Approach: `Products were organized by category with persistent sidebar navigation, so context is never lost. Each product page presents specifications with clean hierarchy — no walls of text, no buried details.` / `Search was designed to be forgiving. Partial matches, tolerance for typos, and instant results. The interface stays clean whether displaying ten products or ten hundred.`
- Outcome: `The catalog handles its full product range without feeling heavy. Navigation is seamless, search is instant, and the overall experience communicates professionalism and reliability.` / `Tailwind CSS enabled rapid, consistent styling across every product category. The result is a catalog that scales gracefully as the product line grows.`
- Metrics/numeric claims: `seconds, not minutes`, `ten products or ten hundred`
- Live URL: `null` · GitHub/source URL: `null`
- Client name: **not present** (status says `Client Work` but no client is named)
- Images: `src/assets/Project/piolecImage.webp` (2880×1800) ×3
- Alt texts: `Piolec product catalog interface`, `Piolec product detail and navigation`, `Piolec catalog search results`

### 7.4 MonPatient

- Name: `MonPatient`
- Subtitle: `A digital platform designed to simplify healthcare management — connecting patients with providers through a seamless, intuitive experience.`
- Short description: `Healthcare platform for home visits, prescriptions, and medical coordination.`
- Type: `Web Application` · Role: `Full-Stack Development` · Duration: `3 Months` · Year: `2025` · Status: `Personal Project`
- Industry: `Healthcare` · Team: `Solo`
- Stack: `Next.js`, `Redux Toolkit`, `Node.js`, `PostgreSQL`
- Technologies: `Next.js`, `Redux Toolkit`, `Node.js`, `PostgreSQL`, `REST API`, `JWT Auth`, `Responsive Design`
- Problem: `Healthcare systems often burden patients with fragmented tools — separate portals for appointments, records, and communication. The experience feels clinical, disconnected, and unnecessarily complex for people who just need care.` / `The goal was to rethink this from the patient's perspective. One place to manage everything. No friction, no confusion, no learning curve.`
- Approach: `We started with the simplest possible flow: a patient opens the app and immediately sees what matters. Appointments, messages, documents — presented clearly without navigating through layers of menus.` / `Every interaction was designed to feel effortless. Scheduling requires two taps. Messages appear in a clean, chronological feed. Medical records are organized by visit, not scattered across disconnected files.`
- Outcome: `The final product is a calm, focused application that puts patients in control. No unnecessary features, no visual noise — just the tools people need, presented with care.` / `Performance was a priority from the start. Pages load instantly, transitions feel native, and the experience remains smooth even on older devices. Healthcare software should feel this way.`
- Metrics/numeric claims: `two taps`, `Pages load instantly`
- Live URL: `null` · GitHub/source URL: `null`
- Images: `src/assets/Project/monpatient.webp` (2880×1800) ×3
- Alt texts: `MonPatient interface showing the patient dashboard`, `MonPatient appointment scheduling interface`, `MonPatient medical records view`
- Note: story uses "We started" (plural) while `facts.team` says `Solo`.
- **Conflict:** `llms.txt` describes it as `healthcare SaaS` with stack `Fastify`; the site data says `Healthcare platform for home visits, prescriptions, and medical coordination.` and stack `Node.js` / `Redux Toolkit` (no Fastify). See §12.

### 7.5 StoryCareer

- Name: `StoryCareer`
- Subtitle: `An AI-powered career platform that helps creative professionals build their narrative and find opportunities.`
- Short description: `Career platform with tips and success stories for professional growth.`
- Type: `Web Application` · Role: `Full-Stack Development` · Duration: `2 Months` · Year: `2025` · Status: `Personal Project`
- Industry: `Career Development` · Team: `Solo`
- Stack: `Next.js`, `Node.js`, `Tailwind CSS`, `Clerk`
- Technologies: `Next.js`, `Node.js`, `Tailwind CSS`, `Clerk`, `AI Integration`, `Responsive Design`
- Problem: `Career advice is everywhere — but it's generic, disconnected, and rarely actionable. Creative professionals need guidance that understands their unique path, not corporate templates applied to creative work.` / `The challenge was to build a platform where career growth feels personal. Tailored advice, real stories, and tools that adapt to individual goals rather than imposing a one-size-fits-all framework.`
- Approach: `The platform centers on storytelling — real career journeys from real professionals. AI-powered recommendations surface relevant opportunities based on skills, interests, and career stage, not just job titles.` / `The interface was kept clean and focused. No cluttered dashboards, no overwhelming metrics. Just the next step in your career, presented clearly — with enough context to act on it immediately.`
- Outcome: `StoryCareer delivers personalized career guidance in a calm, focused environment. The AI recommendations feel relevant rather than generic, and the platform adapts as users grow and their goals evolve.` / `Built with Clerk for seamless authentication, Tailwind CSS for consistent styling, and Node.js for a reliable backend — chosen for stability over novelty.`
- Metrics/numeric claims: none (only qualitative claims)
- Live URL: `null` · GitHub/source URL: `null`
- Images: `src/assets/Project/StoryCareer.webp` (2880×1800) ×3
- Alt texts: `StoryCareer platform dashboard`, `StoryCareer AI-powered recommendations`, `StoryCareer career journey view`

### 7.6 Gemini

- Name: `Gemini`
- Subtitle: `A generative AI application built for clarity — clean interface, instant responses, and thoughtful state management.`
- Short description: `Generative AI application with efficient state management via Context API.`
- Type: `Web Application` · Role: `Frontend Development` · Duration: `3 Weeks` · Year: `2024` · Status: `Personal Project`
- Industry: `Artificial Intelligence` · Team: `Solo`
- Stack: `React`, `Gemini API`, `Context API`
- Technologies: `React`, `Gemini API`, `Context API`, `CSS Custom Properties`, `Responsive Design`
- Problem: `Most AI chat interfaces feel cluttered — sidebars, settings panels, and overwhelming options distract from the core experience: asking a question and getting a clear answer. The technology is impressive; the interfaces often aren't.` / `The goal was to strip away everything unnecessary and build an AI interface that feels instant, clean, and focused on the conversation.`
- Approach: `The design centers on the conversation itself. A single input field, a clean response area, and nothing else. History is accessible but never intrusive — it supports the flow without interrupting it.` / `Context API was used for state management — conversation history, loading states, and error handling all flow through a single, predictable store. No heavy libraries, no unnecessary abstraction.`
- Outcome: `The application feels instant. Responses stream in smoothly, the interface stays calm regardless of conversation length, and the overall experience keeps focus on the content — not the tool.` / `Built with React and Context API for lightweight, predictable state. A reminder that the best architecture is often the simplest one that works.`
- Metrics/numeric claims: `a single input field` (structural, not metric)
- Live URL: `null` · GitHub/source URL: `null`
- Images: `src/assets/Project/Gemini.webp` (2880×1800) ×3
- Alt texts: `Gemini AI interface showing clean chat view`, `Gemini conversation flow`, `Gemini responsive design across devices`

**CTA labels in the projects flow:** card aria-label `View {title} case study`; detail page back button `← All Projects` (goes to `/projects`); link `Copy Link` → `Copied ✓`; next-project block label `Next Project`; 404-in-detail `← All Projects`. No "Visit Live"/"View Source" rendered (all null).

---

## 8. Contact Content

Source: `src/components/contact/Contact.jsx` (visible) + `src/components/home/Social.jsx`.

- Section label (visible): none — the section has no eyebrow/label; profile heading is the name.
- Heading: `Let's build something exceptional.`
- Supporting text: `Whether you're hiring, building a product, or looking for a technical partner, I'd love to hear what you're working on.`
- Profile role text: `Available for freelance & full-time opportunities.`
- Status text: `Available now`
- Form labels (visually hidden, present for screen readers): `Name`, `Email`, `Message`
- Placeholders: `Your name`, `Your email`, `Tell me about your project...`
- Validation messages: `Name is required`, `Email is required`, `Email address is invalid`, `Message is required`
- Success message: `✓ Message sent successfully.`
- Error message (both HTTP and network failure): `Failed to send message. Please try again.`
- Submit button: `Let's work together` → loading state `Sending...`
- Microcopy: `Usually replies within 24 hours.`
- Form endpoint (hardcoded URL, not a secret): `https://email-fawn-alpha.vercel.app/api/sendEmail` (POST JSON `{name, email, message}`)
- Visible contact alternatives: social links `LinkedIn`, `GitHub`, `Email` (mailto)
- Contact section portrait: `src/assets/mostafa.webp` (300×300), alt `Mostafa Akajdid`
- Hidden contact information: phone number exists only in JSON-LD/llms.txt (not shown anywhere); email has no plain-text rendering (link + clipboard only).
- There is **no spam protection** (no CAPTCHA/honeypot) in the form.
- Success message auto-dismisses after 4 seconds.

---

## 9. Navigation and Footer

Source: `src/components/header/Header.jsx`, `header.css`, `src/components/footer/Footer.jsx`, `footer.css`.

**Header navigation (brand + 3 items):**

| Label | Destination | Behavior |
|---|---|---|
| `Mostafa` (brand) | `/` | On homepage: smooth scroll to top (preventDefault). Else: plain link home. aria-label `Home` |
| `About` | `#about` | On homepage: smooth scroll to section; on other pages: `navigate("/", {state: {scrollTo: "about"}})`. Active when section in view. |
| `Projects` | `#case-studies` | Same pattern. aria-current when active. |
| `Contact` | `#contact` | Same pattern; styled as pill CTA (`nav__link--cta`). |

- Desktop/mobile differences: desktop (≥769px) header is a **bottom-fixed** floating pill (`bottom: 24px`, height 56px); mobile (≤768px) is **top-fixed** (`top: 24px`, height 40px). Brand font sizes differ (0.7rem mobile / small-font desktop).
- Theme toggle button: no text label; icon sun/moon, aria-label `Switch to {light|dark} mode`, `role="switch"`.
- Sections tracked by the active-state observer (`SECTION_IDS`): `home`, `about`, `skills`, `case-studies`, `contact`.
- **Reachable sections not in the nav:** `skills` (exists as a section, no nav item), `home` (only via brand).
- **Pages not reachable from the header:** `/projects` (full projects page — only reachable via direct URL, the "← All Projects" button on detail pages, or sitemap), `/privacy` (footer only), `/terms` (does not exist).

**Footer:**

- Name: `Mostafa Akajdid`
- Role line: `Full-Stack Software Engineer`
- Links: `LinkedIn` (external), `GitHub` (external), `Email` (mailto), `Resume` (PDF, download)
- Legal link: `Privacy Policy` → `/privacy`
- Copyright: `© 2026 Mostafa Akajdid.`
- No email/phone/location text in the footer.

---

## 10. SEO and Metadata

### index.html (static)
- **No `<title>` tag** — page titles are injected per-route via `react-helmet-async` only.
- `<meta name="author" content="Mostafa Akajdid" />`
- `<meta name="robots" content="index, follow" />`
- `<meta name="apple-mobile-web-app-title" content="Akajdid" />`
- No `<meta name="theme-color">` (manifest has `theme_color: #ffffff`).
- Favicons: `/favicon-96x96.png`, `/favicon.svg`, `/favicon.ico`, `/apple-touch-icon.png`.
- JSON-LD structured data — three blocks:

**Person** (`index.html:34-65`):
- `name`: `Mostafa Akajdid` · `url`: `https://makajdid.vercel.app` · `image`: `https://makajdid.vercel.app/og-image.png`
- `jobTitle`: `Full-Stack Developer`
- `description`: `Full-stack developer specializing in React, Next.js, Spring Boot, and PostgreSQL. Oracle Certified Java SE 17 Developer.`
- `address`: `Casablanca`, `Casablanca-Settat`, `20000`, `MA`
- `email`: `mostafaakajdid6@gmail.com` · `telephone`: `+212-7-62-54-40-11`
- `sameAs`: GitHub, LinkedIn, Instagram
- `knowsAbout`: `React`, `Next.js`, `TypeScript`, `Spring Boot`, `PostgreSQL`, `Java`, `Node.js`, `Docker`, `REST API`
- `hasCredential`: `Oracle Certified Professional, Java SE 17 Developer` / `Professional Certification`

**ProfessionalService** (`index.html:68-126`):
- `name`: `Mostafa Akajdid — Full-Stack Development`
- `description`: `Full-stack web development services: React, Next.js, Spring Boot, PostgreSQL, REST APIs, and database design.`
- `address`: Casablanca · `geo`: `33.5731`, `-7.5898` · `telephone`/`email` as above · `priceRange`: `$$` · `areaServed`: `Morocco`
- `hasOfferCatalog` items: `Full-Stack Web Development` ("End-to-end web applications with React/Next.js frontend and Spring Boot/Express.js backend"), `Frontend Development` ("React, Next.js, TypeScript, Tailwind CSS, responsive and accessible UIs"), `REST API Design` ("Scalable REST APIs with Spring Boot, Express.js, JWT auth, and PostgreSQL")

**WebSite** (`index.html:129-142`):
- `name`: `Mostafa Akajdid Portfolio` · `url`: `https://makajdid.vercel.app` · `description`: `Portfolio of Mostafa Akajdid, full-stack developer in Casablanca, Morocco.` · `inLanguage`: `en`

### Portfolio page Helmet (`src/pages/Portfolio.jsx`)
- Title: `Mostafa Akajdid — Full-Stack Developer in Casablanca | React, Next.js, Spring Boot`
- Description: `Full-stack developer in Casablanca. React, Next.js, Spring Boot, PostgreSQL. Oracle Java SE 17 OCP. Available for freelance and full-time roles.`
- Canonical: `https://makajdid.vercel.app`
- OG/Twitter: `Full-Stack Developer in Casablanca` + same description + image `https://makajdid.vercel.app/og-image.png`

### Projects page Helmet (`src/pages/Projects.jsx`)
- Title: `Projects — Mostafa Akajdid`
- Description: `A curated selection of digital products designed and built by Mostafa Akajdid. React, Next.js, Spring Boot, PostgreSQL projects.`
- Canonical: `https://makajdid.vercel.app/projects`

### Project detail Helmet (`src/components/projectDetail/ProjectDetail.jsx`)
- Title: `{title} — Mostafa Akajdid` · Description: `{subtitle}` · Canonical: `https://makajdid.vercel.app/projects/{slug}` · og:type `article` · og:image site-level.

### Privacy page Helmet (`src/pages/Privacy.jsx`)
- Title: `Privacy Policy — Mostafa Akajdid` · Description: `Privacy policy for Mostafa Akajdid's portfolio site.` · Canonical: `https://makajdid.vercel.app/privacy`

### 404 Helmet (`src/pages/NotFound.jsx`)
- Title: `404 — Page Not Found | Mostafa Akajdid` · Description: `The page you are looking for could not be found. Return to the portfolio of Mostafa Akajdid.`
- Body text (mismatch): `This project could not be found.`

### sitemap.xml
URLs (8): `/` (priority 1.0), `/projects` (0.9), `/projects/realstate`, `/projects/glassocean`, `/projects/piolec`, `/projects/monpatient`, `/projects/storycareer`, `/projects/gemini` (0.8 each), `/privacy` (0.3). All `lastmod 2026-07-16`, `changefreq monthly`. **No `/terms`.**

### robots.txt
`User-agent: *` / `Allow: /` / `Sitemap: https://makajdid.vercel.app/sitemap.xml`

### llms.txt
Full content includes: `# Mostafa Akajdid — Full-Stack Developer Portfolio`; Links (Homepage, Projects, `#about`, `#skills`, `#services`, `#evolution`, `#case-studies`, `#contact`); About paragraph (Casablanca, Morocco; Oracle Certified Java SE 17 Developer (OCP)); Skills (Frontend includes `Chakra UI`, `Material-UI`; Backend: `Spring Boot, Express.js, Node.js, Java 17`; `Auth: JWT, NextAuth.js, RBAC`; `Methods: Agile/Scrum, code reviews`); Services (4 items); Experience (4 roles); Education (2 items); Projects (6, with `monpatient` described as `Next.js, Redux Toolkit, Node.js, Fastify, healthcare SaaS`); Contact (email, phone `+212 7 62 54 40 11`, Casablanca, LinkedIn, GitHub).

### Conflicts identified (full table in §12)
- Job role: Engineer vs Developer vs Software Engineer.
- Location: Morocco (visible) vs Casablanca (metadata).
- Services listed in metadata/llms.txt, absent from site.
- Experience in llms.txt/JSON-LD-adjacent code, absent from UI.
- monpatient stack: `Node.js` vs `Fastify`; `Redux Toolkit` vs llms.txt listing.
- Anchors `#services`, `#evolution` referenced but nonexistent.
- Skills named in llms.txt (Chakra UI, Material-UI, Java 17, RBAC) not shown in the visible skills grid.
- `Node.js / Express` vs `Express.js`.
- 404 copy says "project" for all routes.
- Brand name `Akajdid` (manifest) vs `Mostafa` (site).

---

## 11. Hidden, Unused and Dead Content

| Item | Content | Source file |
|---|---|---|
| Unrendered Experience section | 4 roles (see §5), tab labels `Experience`/`Education`, heading `Every role shaped how I think about software.` | `src/components/qualification/Qualification.jsx` (never imported) |
| Unrendered Education section | 3 entries (see §6) | `src/components/qualification/Qualification.jsx` |
| Unrendered Services section | `Product Design` / `Front-end Development` / `Full-stack Development` cards, heading `Every product deserves thoughtful execution.`, intro `I help people and teams turn ideas into products — from the first interface sketch to the final deploy. Every project gets the same care: clear thinking, clean code, and real attention to detail.`, CTA `Discuss your project` → `#contact` | `src/components/services/Services.jsx`, `ServiceItem.jsx` (never imported) |
| Unused heading variants | `Building products people enjoy using.` / `I solve problems, not just write code.` / `Good design is invisible.` / `Every pixel has a purpose.` | `src/components/about/About.jsx:4-10` (`HEADING_OPTIONS`, only index 0 used) |
| Dead stage logic | `useState("idle")` → always set `"complete"` | `src/components/home/Home.jsx:8,14-18` |
| Unused assets | `hand.svg`, `files.svg`, `send.svg`, `laptop.png`, `smartphone-call.png`, `web-design.png` | `src/assets/` |
| Unused export | `send` (from `assets.js`) — exported, never imported | `src/assets/assets.js:2,8` |
| Unused export | `projectImages` object | `src/assets/projects.js:10-17` |
| Unused CSS | `.home__hand` rules; `.contact__success`, `.contact__success-text`, `.contact__reset` (legacy), `.contact__reset:hover`, `.contact__reset:focus-visible` | `home.css:84-88,177-180`, `contact.css:294-329` |
| Unused CSS comment | `/* Success (legacy — unused) */` (confirms it) | `contact.css:294` |
| Unused skill references | `Chakra UI`, `Material-UI`, `Java 17`, `RBAC`, `code reviews` | `public/llms.txt` only |
| Anchors to nonexistent sections | `#services`, `#evolution`, `#skills` links (skills exists; services/evolution do not) | `public/llms.txt` |
| Broken/discordant copy | `This project could not be found.` used for every 404 route | `src/pages/NotFound.jsx:17` |
| Hash-jump link | Scroll-up is `<a href="#">` (no smooth scroll / preventDefault) | `src/components/scrollUp/ScrollUp.jsx:18` |
| Repeated screenshots | Each project reuses the same image 3× (see §7) | `src/data/caseStudies.js` `story[].image` |
| Null demo/source fields | `liveUrl`, `githubUrl` = `null` on all 6 projects | `src/data/caseStudies.js` |
| Project images with no unique alt strategy | All alts exist but describe the same screenshot 3× | `src/data/caseStudies.js` |
| Hidden phone number | `+212-7-62-54-40-11` never rendered | `index.html:52`, `public/llms.txt` |
| Privacy-only metadata | `og:image` on Privacy/404 pages points to site og-image | `Privacy.jsx`, `ProjectDetail.jsx` |
| `.DS_Store` files | macOS metadata committed to repo | `src/.DS_Store`, `src/assets/.DS_Store` |

---

## 12. Content Conflicts

| # | Topic | Version A | Source A | Version B | Source B | Visible version | Notes |
|---|---|---|---|---|---|---|---|
| 1 | Job title | `Full-Stack Engineer` | `src/components/home/Data.jsx:5` | `Full-Stack Developer` | `src/pages/Portfolio.jsx:33` + `index.html:41` (JSON-LD) | Hero says Engineer; SEO says Developer | Same person, two titles shown depending on surface |
| 2 | Job title | `Full-Stack Software Engineer` | `src/components/footer/Footer.jsx:9` | `Full-Stack Developer` | `Portfolio.jsx` Helmet | Footer shows third variant | Third distinct title in the codebase |
| 3 | Location | `Based in Morocco` | `src/components/about/About.jsx:39` | `Casablanca` (+ Casablanca-Settat, 20000, MA) | `index.html:45-50,76-81` JSON-LD; `Portfolio.jsx:33` | "Morocco" (About only) | City never rendered; only country visible |
| 4 | Phone format | `+212-7-62-54-40-11` | `index.html:52` (JSON-LD) | `+212 7 62 54 40 11` | `public/llms.txt` | Neither (not rendered) | Format-only conflict, same number |
| 5 | monpatient stack | `Node.js` + `Redux Toolkit` | `src/data/caseStudies.js:207` | `Fastify` | `public/llms.txt` | Site shows Node.js/Redux Toolkit | Backend differs between sources |
| 6 | monpatient description | `Healthcare platform for home visits, prescriptions, and medical coordination.` | `caseStudies.js:205` | `healthcare SaaS` | `public/llms.txt` | Site version | Label mismatch |
| 7 | Services | `Services` section with 4 items listed | `public/llms.txt` | Section absent from live site (component unrendered) | `src/components/services/Services.jsx` (never imported) | Not visible | Metadata advertises services the site doesn't show |
| 8 | Experience | `Experience` list with 4 roles | `public/llms.txt` | Section absent from live site (component unrendered) | `src/components/qualification/Qualification.jsx` | Not visible | Recruiters see no history on the site |
| 9 | Anchors | `#services`, `#evolution` links | `public/llms.txt` | Sections do not exist on the homepage | `src/pages/Portfolio.jsx:56-64` (rendered sections: home, about, skills, case-studies, contact) | N/A | Broken metadata links |
| 10 | Skills list | `Chakra UI`, `Material-UI`, `Java 17`, `RBAC`, `code reviews` | `public/llms.txt` | Not present in visible skills grid | `src/components/skills/Skills.jsx` | Skills grid (without those items) | Metadata claims more than the UI shows |
| 11 | Node.js naming | `Node.js / Express` | `src/components/skills/Skills.jsx:32` | `Express.js` | `public/llms.txt` | Skills grid version | Naming variant |
| 12 | Education spelling | `Technicien Spécialisé en Développement Informatique` | `Qualification.jsx:44` | `Technicien Specialise en Developpement Informatique` | `public/llms.txt` | Neither (unrendered) | Accent differences |
| 13 | 404 message | `This project could not be found.` | `src/pages/NotFound.jsx:17` | Generic "page not found" expectation (Helmet: `The page you are looking for could not be found.`) | `NotFound.jsx:11-13` | Both on same page | Body copy contradicts its own meta description |
| 14 | Brand name | `Mostafa` (header brand) / `Mostafa Akajdid` (name) | `Header.jsx:99`, `Footer.jsx:8` | `Akajdid` (manifest name/short_name) | `public/site.webmanifest:2-3` | "Mostafa" | PWA identity differs from site identity |
| 15 | Positioning | `Full-Stack Engineer` + "Building digital products with purpose." (no backend mention) | `Data.jsx:5,7` | "full-stack developer (React, Next.js, Java/Spring Boot)" + backend-focus intent | `package.json:4` description | Hero version | Visible hero omits the backend emphasis used in the project description |

---

## 13. Missing Data Fields

Fields that are `null`, empty, absent, or referenced-but-not-implemented in the current data structures.

### Projects (`src/data/caseStudies.js`)
| Project | Missing field | State |
|---|---|---|
| realstate | `liveUrl` | `null` |
| realstate | `githubUrl` | `null` |
| glassocean | `liveUrl` | `null` |
| glassocean | `githubUrl` | `null` |
| piolec | `liveUrl` | `null` |
| piolec | `githubUrl` | `null` |
| piolec | client name | absent (status = `Client Work`, no name) |
| monpatient | `liveUrl` | `null` |
| monpatient | `githubUrl` | `null` |
| storycareer | `liveUrl` | `null` |
| storycareer | `githubUrl` | `null` |
| gemini | `liveUrl` | `null` |
| gemini | `githubUrl` | `null` |
| all 6 | metrics/numeric-outcome fields | no field exists in any project object |

### Experience (`Qualification.jsx`, unrendered)
| Entry | Missing field |
|---|---|
| Dynamic Impact | location, employment type, bullets, technologies list, links |
| Digitalia Solutions | location, employment type, bullets, technologies list, links |
| Ocean Connecting | location, employment type, bullets, technologies list, links |
| Optisent | location, employment type, bullets, technologies list, links |

### Education (`Qualification.jsx`, unrendered)
| Entry | Missing field |
|---|---|
| Coding Tech | credential ID / link |
| ISTA TADDART | credential ID / link |
| Oracle OCP | credential ID / link, issuer, location |

### Hero
- Location (absent from hero)
- Availability (absent from hero)
- Eyebrow/label (absent)

### Contact
- Plain-text email (only mailto link + clipboard button)
- Phone number (never rendered anywhere on the site)

### Site-level
- `<title>` tag in `index.html` (relies entirely on Helmet)
- `/terms` page
- `/terms` route in `App.jsx`
- `/terms` footer link
- `/terms` sitemap entry
- Note: `/terms` is planned work from the pending task list, not yet implemented in any file.

---

## 14. Final Raw Content Appendix

All user-facing copy, exact wording, grouped by source. Tagged `[VISIBLE]`, `[HIDDEN]`, `[UNUSED]`, `[METADATA]`.

### A. Hero (`Data.jsx`, `Social.jsx`, `ScrollDown.jsx`) — VISIBLE
- `Mostafa Akajdid`
- `Full-Stack Engineer`
- `Building digital products with purpose.`
- `I help turn ideas into products people enjoy using. From planning the architecture to building the frontend and backend, I focus on creating software that stays simple, reliable, and ready to grow.`
- `Get in touch` → `#contact`
- `LinkedIn` / `GitHub` / `Email` / `Resume`
- `Scroll Down` → `#about`

### B. About (`About.jsx`) — VISIBLE
- `About`
- `Software should feel effortless.`
- `"I don't just build interfaces. I remove the friction between people and what they're trying to accomplish."`
- `I'm a full-stack developer who believes software should serve people, not the other way around. Based in Morocco, I've spent years learning what makes digital products actually work — not just compile. I hold an Oracle Certified Professional certification in Java SE 17, and I bring that same depth to every layer of the stack.`
- `I start with the person using the product, not the technology behind it. Every decision — from layout to API design — is measured against one question: does this make the experience simpler?`
- `You can expect clear communication, thoughtful code, and a genuine interest in solving the right problem. I work in French (professional) and English (intermediate), and I do my best work with people who care about quality and aren't afraid to iterate.`
- `Get in touch` → `#contact`

### C. Skills (`Skills.jsx`) — VISIBLE
- `Technical Expertise`
- `Tools evolve. The way you solve problems matters longer.`
- `Every product asks different technical questions. I don't start with a favorite framework — I start with the problem. Once the constraints are clear, choosing the right architecture and technology becomes the easy part.`
- `Technologies I use every day` — `The tools I reach for when building complete products, from interfaces to backend systems.`
  - `React`, `Next.js`, `TypeScript`, `Tailwind CSS`, `shadcn/ui`, `Spring Boot`, `Node.js / Express`, `REST APIs`, `PostgreSQL`, `MySQL`
- `How I work` — `The practices that help software stay reliable, maintainable, and easy to evolve.`
  - `Git`, `GitHub`, `Docker`, `CI/CD`, `JWT / NextAuth`, `Agile / Scrum`
- `I don't aim to know every technology. I aim to become the kind of engineer who can learn any technology when it matters.`

### D. Projects (`caseStudies.js`) — VISIBLE on homepage + `/projects` + detail pages
- `Projects` (label), `Work that reflects how I think, not just what I build.`, `Every project is an opportunity to solve a real problem through thoughtful engineering, clear decisions, and attention to the details that shape the final experience.` (CaseStudies header)
- Card copy: `View {title} case study` (aria-label)
- All six project subtitles/descriptions/stories as quoted verbatim in §7.
- Detail page labels: `← All Projects`, `Role`, `Type`, `Year`, `Status`, `{n} MIN READ`, `Copy Link` / `Copied ✓`, `Project Facts`, `Industry`, `Platform`, `Responsive`, `Team`, `Built with`, `Next Project`, story headings `The Problem` / `The Approach` / `The Outcome`, lightbox close `✕`.

### E. Contact (`Contact.jsx`) — VISIBLE
- `Mostafa Akajdid`
- `Available for freelance & full-time opportunities.`
- `Available now`
- `Let's build something exceptional.`
- `Whether you're hiring, building a product, or looking for a technical partner, I'd love to hear what you're working on.`
- Labels: `Name`, `Email`, `Message`
- Placeholders: `Your name`, `Your email`, `Tell me about your project...`
- Validation: `Name is required`, `Email is required`, `Email address is invalid`, `Message is required`
- `Let's work together` / `Sending...`
- `Failed to send message. Please try again.`
- `✓ Message sent successfully.`
- `Usually replies within 24 hours.`
- Social: `LinkedIn`, `GitHub`, `Email`

### F. Footer (`Footer.jsx`) — VISIBLE
- `Mostafa Akajdid`
- `Full-Stack Software Engineer`
- `LinkedIn`, `GitHub`, `Email`, `Resume`
- `Privacy Policy` → `/privacy`
- `© 2026 Mostafa Akajdid.`

### G. Header — VISIBLE
- `Mostafa` (brand)
- `About`, `Projects`, `Contact`
- Toggle aria-label: `Switch to light mode` / `Switch to dark mode`

### H. Privacy page (`Privacy.jsx`) — VISIBLE (linked from footer)
- `Privacy Policy`
- `Last updated: July 2026`
- `This site is a personal portfolio. It doesn't sell your data, track you across the web, or share your information with advertisers. Here's exactly what happens when you use it.`
- `Information I Collect` — `If you use the contact form, I collect the name, email address, and message you submit. That's it. I use this information only to respond to you, and I don't add you to any mailing list or share it with third parties.`
- `Analytics` — `This site may use privacy-friendly analytics (such as Vercel Analytics) to understand traffic, like which pages get visited and roughly where from. This doesn't use cookies and doesn't identify you personally.`
- `Hosting & Third-Party Services` — `This site is hosted on Vercel. Contact form submissions may pass through an email delivery service to reach my inbox. These providers process data on my behalf and don't use it for their own purposes.`
- `Your Rights` — `You can ask me to delete any information you've submitted through the contact form at any time. Just email me and I'll take care of it.`
- `Contact` — `Questions about this policy? Reach out at mostafaakajdid6@gmail.com.`

### I. Projects page (`Projects.jsx`) — VISIBLE
- `Selected Work`
- `A curated selection of digital products I've designed and built. Each project represents a different challenge, process and outcome.`
- `06 Selected Projects`
- `Let's Connect` / `Interested in working together?` / `I'm always open to discussing new ideas, products and collaborations.` / `Contact Me`

### J. 404 (`NotFound.jsx`) — VISIBLE
- `404`
- `This project could not be found.`
- `← Back to Portfolio`

### K. Experience (`Qualification.jsx`) — UNUSED (not rendered)
- `Evolution`, `Every role shaped how I think about software.`, `I've worked across front-end, full-stack, and infrastructure — always with the same goal: building products that serve people. Each role taught me something the previous one couldn't.`
- Tabs `Experience` / `Education`; CTA `Selected Work` → `#case-studies`
- Four roles + three education entries exactly as in §5 and §6.

### L. Services (`Services.jsx`) — UNUSED (not rendered)
- `Services`, `Every product deserves thoughtful execution.`, `I help people and teams turn ideas into products — from the first interface sketch to the final deploy. Every project gets the same care: clear thinking, clean code, and real attention to detail.`
- `Product Design` — `Turning ideas into clear, intuitive interfaces that people naturally understand.`
- `Front-end Development` — `Polished, responsive interfaces that work seamlessly across every device.`
- `Full-stack Development` — `End-to-end products built to be reliable, scalable, and easy to maintain.`
- `Discuss your project` → `#contact`

### M. Unused alternate headings (`About.jsx`) — UNUSED
- `Building products people enjoy using.`
- `I solve problems, not just write code.`
- `Good design is invisible.`
- `Every pixel has a purpose.`

### N. llms.txt — METADATA (not rendered as UI)
- Title: `# Mostafa Akajdid — Full-Stack Developer Portfolio`
- About: `Mostafa Akajdid is a full-stack developer based in Casablanca, Morocco. He specializes in React, Next.js, TypeScript, Spring Boot, and PostgreSQL. He is an Oracle Certified Java SE 17 Developer (OCP).`
- Skills: `Frontend: React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, Chakra UI, Material-UI` / `Backend: Spring Boot, Express.js, Node.js, Java 17` / `Databases: PostgreSQL, MySQL` / `DevOps: Docker, Git, GitHub Actions (CI/CD)` / `Auth: JWT, NextAuth.js, RBAC` / `Methods: Agile/Scrum, code reviews`
- Services: `Web designing and UI/UX` / `Full-stack web development (React/Next.js + Spring Boot)` / `Responsive and mobile-first design` / `REST API design and integration` / `Database modeling and optimization`
- Experience/Education/Projects/Contact sections as quoted in §10.

### O. index.html JSON-LD — METADATA (not rendered as UI)
- Person, ProfessionalService, WebSite blocks exactly as quoted in §10.
