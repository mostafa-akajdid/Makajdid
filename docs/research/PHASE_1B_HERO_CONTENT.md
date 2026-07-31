# Phase 1B — Hero Content Update Changelog

**Date:** 26 July 2026

---

## File Changed

**`src/components/home/Data.jsx`** — only file modified.

---

## Exact Content Changes

### Typewriter strings (lines 15-18)

| Before | After |
|---|---|
| `"Full-Stack Developer \| React / Next.js \| Java / Spring Boot"` (4000ms) | `"Full-Stack Developer \| React · Next.js · Java · Spring Boot"` (4000ms) |
| `"React · Next.js · Spring Boot"` (3000ms) | `"Building polished web experiences from idea to production"` (3000ms) |

Animation structure (wrapper, speed, cursor, repeat) unchanged.

### Description (lines 26-33)

**Before:** Single `<p>` with two paragraphs separated by `<br /><br />`:
> Full-stack developer focused on React, Next.js, and Java (Spring Boot). I build complete web apps—from fast, SEO-friendly UIs with SSR to secure REST APIs and role-based access (RBAC).
>
> I work in Agile teams and care about code quality, reviews, and shipping features to production. Based in Casablanca, Morocco.

**After:** Two separate `<p className="home__description">` elements:
> I build fast, thoughtful web applications that feel clear to use and reliable to scale.
>
> From responsive React and Next.js interfaces to secure Java/Spring Boot APIs, I turn product ideas into production-ready features.

### CTA label (line 36)

| Before | After |
|---|---|
| `Say Hello` | `Let&rsquo;s build something` |

Renders as: `Let's build something`.  
`href="#contact"`, icon, and all other attributes unchanged.

---

## Intentionally Preserved

- **3-column grid layout** (`home__content`: Social / portrait / Data) — untouched
- **Social rail** (Social.jsx) — untouched (links, tooltips, hover animations, Unicons classes)
- **Portrait** (`<div class="home__img">` with `mostafa.webp` via CSS, blob-morph `profile_animate` keyframes) — untouched
- **Name heading** (`MOSTAFA AKAJDID` via `TextDecrypt` decrypt animation) — untouched
- **TypeAnimation component** — `cursor={false}`, `wrapper="span"`, `speed={5}`, `repeat={Infinity}`, pauses unchanged
- **Scroll down cue** (ScrollDown.jsx) — untouched
- **All CSS** (home.css) — untouched
- **Anchor behavior** — `#contact` on CTA, `#about` on ScrollDown — untouched
- **Header, navigation, all other sections** — untouched
- **No dependencies added**

---

## Build Result

```
npm run build
✓ built in 2.57s
119 modules transformed.
```

Clean exit, no warnings, no errors.

---

## Lint Result

```
npm run lint
```

21 pre-existing errors/warnings. **Zero regressions.** All errors are in files untouched by this task (TextDecrypt, CaseStudies/CaseStudyCard, ProjectDetail, ServiceItem, SkillItem).
