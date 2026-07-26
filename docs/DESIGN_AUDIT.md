# Complete Design Audit — makajdid.vercel.app

**Auditor:** Senior Staff Product Designer / Creative Director  
**Date:** 26 July 2026  
**Benchmarks:** Praxis, Apple, Linear, Vercel, Stripe Press  

---

## Executive Summary

The current portfolio has a clear editorial ambition — the About, Skills, Services, Qualification, Contact, and Project Detail sections demonstrate thoughtful writing, restrained spacing, and a genuine design sensibility. The project detail page in particular rivals premium benchmarks in feature depth (reading progress, lightbox, copy-link, keyboard navigation).

However, the portfolio is held back by two systemic problems that prevent it from reaching the quality of the named benchmarks:

1. **No visual identity** — completely achromatic, no accent color, no brand mark, no typographic hierarchy. All sections use the same single font (Poppins) at the same weights. There is nothing that makes the portfolio *rememberable*.

2. **Hero section is critically underdesigned** — the first impression is a cramped 3-column layout with a 2.5rem heading, outdated blob animation, and a phone link in the social sidebar. Praxis leads with a 5rem+ headline and spacious layout.

The gap between the editorial sections (About→Contact) and the system-level components (Hero, Header, Footer, ScrollUp) creates a fractured experience — it feels like two different sites.

---

## 1. Visual Hierarchy

| Issue | Severity | Detail |
|---|---|---|
| No clear visual entry point | **Critical** | Hero heading at 2.5rem (`--big-font-size`) is indistinguishable from section headings (2.25rem). The name should be the single dominant element on the page — currently it competes with the typewriter, social icons, portrait, and scroll cue. |
| Section headings all same weight | **High** | Every section title (Case Studies, About, Skills, Services, Contact) uses `--h1-font-size` (2.25rem) with identical styling. No differentiation between primary and secondary sections. |
| No typographic contrast | **High** | Body text, labels, metadata, and descriptions all use Poppins — no shift to a contrasting font for emphasis. |

**Why it matters:** Premium benchmarks create a clear visual hierarchy through size contrast (5:1 ratio between hero and body), weight differentiation, and font pairing. Without this, every element competes equally for attention.

**Proposed solution:** Increase hero heading to `clamp(3.5rem, 7vw, 6rem)`. Pair Poppins with a display grotesque (Space Grotesk or Satoshi) for headings only. Differentiate section importance through size and opacity.

**Expected impact:** Transformative — creates the "premium first impression" that is currently missing.

---

## 2. Typography

| Issue | Severity | Detail |
|---|---|---|
| Single typeface (Poppins) everywhere | **Critical** | Poppins is a good body font but lacks personality for display use. Every premium benchmark uses a dedicated display face: Praxis uses Geist + Manrope, Apple uses San Francisco, Linear uses Inter + custom, Vercel uses Geist, Stripe Press uses Basis Grotesque + more. |
| `font-display: swap` on Google Fonts | OK | Good — prevents invisible text. |
| No system font stack fallback for body | **Low** | `--body-font: "Poppins", sans-serif` — should include a fallback like `"Segoe UI", Tahoma, Geneva, Verdana`. |
| `--big-font-size` changes between breakpoints and themes inconsistently | **Low** | Light: 2.5rem, Dark: 2.5rem (same), Mobile ≤992px: 2.75rem (larger on mobile — happens because responsive override in media query sets it bigger). Minor but sloppy. |

**Why it matters:** Typography is 95% of web design. Single-font portfolios feel like templates, not crafted products.

**Proposed solution:** Add Space Grotesk or Satoshi via Google Fonts for `h1`, `h2`, `section__title`. Keep Poppins for body and small text. Apply `letter-spacing: -0.03em` on headings.

**Expected impact:** High — instantly elevates the perceived quality.

---

## 3. Scale System

| Issue | Severity | Detail |
|---|---|---|
| Type scale is compressed | **High** | Current: 2.5rem → 2.25rem → 1.5rem → 1.25rem → 1rem → 0.875rem → 0.813rem. The gap between hero (2.5) and h1 (2.25) is 0.25rem — barely perceptible. Premium scales use 1.618 or 1.333 ratios. |
| No `clamp()` on foundational sizes | **Medium** | `--big-font-size` is a fixed 2.5rem. Fluid scaling via `clamp()` is used only in project detail and projects page CSS, not in the global scale. |

**Why it matters:** A compressed scale makes the page feel monotonous. There's no "wow" moment.

**Proposed solution:** Adopt a modular scale with `clamp()`: Hero: `clamp(3rem, 6vw, 5.5rem)`, Section: `clamp(1.75rem, 3.5vw, 2.5rem)`, Body: `clamp(0.9rem, 1.4vw, 1.05rem)`.

**Expected impact:** Medium — improves rhythm but less visible than typography changes.

---

## 4. White Space

| Issue | Severity | Detail |
|---|---|---|
| Hero section padding-top: 5.5rem is tight | **Medium** | The hero content starts at 5.5rem from top of content grid. With the header overlay, the visible whitespace above the name is ~3-4rem — feels cramped. Praxis has 8-10rem+ of breathing room. |
| Section padding: 5rem 0 2rem | **Medium** | Consistent but tight for a premium feel. Editorial sections could use 7rem+ top padding. |
| Card spacing in case studies grid: 3rem gap | **OK** | Generous — matches premium spacing. |

**Why it matters:** White space is the first signal of premium quality. Stripe Press and Apple use abundant whitespace to communicate confidence.

**Proposed solution:** Increase hero padding-top to `clamp(6rem, 10vw, 10rem)`. Increase section padding to 7rem top for editorial sections.

**Expected impact:** Medium-high — immediately improves the breathability of the layout.

---

## 5. Layout Rhythm

| Issue | Severity | Detail |
|---|---|---|
| Mix of layout approaches across sections | **Medium** | Older sections (Home) use 3-column grid. Newer editorial sections (About, Skills) use max-width 720px centered. Contact uses a 2-column (profile + card). The transitions between these layout approaches are abrupt — no consistent rhythm. |
| No consistent section gutter | **Low** | Some sections use `1.5rem` side padding, others vary. |

**Proposed solution:** Standardize all sections to max-width 720px centered content area. Keep the hero as the only full-width section.

**Expected impact:** Medium — improves internal consistency.

---

## 6. Grid Consistency

| Issue | Severity | Detail |
|---|---|---|
| Homepage uses a 3-column grid: 120px / 1fr / 1fr | **High** | This is an unusual and cramped layout inherited from the old template. The social rail takes 120px for 4 small icons. The portrait sits in the middle column. Text in the right column. On mobile it collapses to `0.5fr 3fr` which wastes space. |
| Case studies grid is 2-column on desktop, 1-column on mobile | **OK** | Consistent and well-executed. |
| Project facts grid is 4-column on desktop, 2-column on tablet | **OK** | Good responsive behavior. |

**Why it matters:** The landing page grid is the user's first impression. A 3-column grid with a social rail that looks like a sidebar from 2015 undermines the premium sections below.

**Proposed solution:** Move social links inline below the hero heading. Convert hero to 2-column (text left, portrait right). Remove the dedicated social rail column.

**Expected impact:** High — the single biggest layout improvement available.

---

## 7. Section Transitions

| Issue | Severity | Detail |
|---|---|---|
| No scroll-based entrance animations | **Medium** | Sections snap into view with no transition. Lazy-loaded components appear via React rendering (instant, no fade). Skeleton fallback is `null`, so content flashes in place. |
| No page transitions between routes | **Medium** | Navigating from `/` to `/projects` to `/projects/:slug` is instant with no fade or any visual continuity. |

**Why it matters:** Premium products use motion to guide attention and create a sense of flow. The absence of transitions makes the SPA feel utilitarian.

**Proposed solution:** Add 200-300ms CSS opacity fade on lazy section mount. Add a route transition wrapper with a simple fade.

**Expected impact:** Medium — polish layer, not structural.

---

## 8. Navigation Quality

| Issue | Severity | Detail |
|---|---|---|
| Bottom-fixed pill is a distinctive UX pattern | **Positive** | Unique and memorable. Good contrast with the competitive landscape of top nav bars. |
| Active section highlighting via IntersectionObserver | **Positive** | Works well, smooth updates. |
| Mobile pill font is very small (0.7rem) | **Medium** | Below the 0.8rem minimum recommended for touch targets. |
| No "Projects" route in main nav — only scrolls to #case-studies | **Medium** | The "Projects" nav item scrolls to the homepage section. There is no way to reach the `/projects` route from the header — users can only get there by clicking a case study card and then the "← All Projects" back button. This is a dead end in the navigation flow. |
| No back/home navigation when on subpages | **Medium** | On the `/projects` listing page, the nav "Projects" link still scrolls to `#case-studies` on the homepage (via cross-page navigation) which is disorienting — it should navigate to `/`. |

**Proposed solution:** Increase mobile font to 0.8rem+. Add a "Home" or "Mostafa" brand tap that always navigates to `/`. Add a route-aware nav that highlights correctly on subpages.

**Expected impact:** Medium — improves usability significantly.

---

## 9. Header Behavior

| Issue | Severity | Detail |
|---|---|---|
| Dark pill design is distinctive | **Positive** | Good differentiator. |
| Desktop: bottom-fixed at bottom:24px | **OK** | Works well. Ensure no overlap with ScrollUp or footer on long pages. |
| Mobile: top-fixed at top:24px | **OK** | Good adaptation, but the pill still covers the top of the hero content. |
| No scroll-hide behavior | **Low** | The pill is always visible. On mobile this takes up ~50px of vertical space permanently. |

**Proposed solution:** Consider scroll-hide on mobile (hide on scroll down, show on scroll up). Keep always-visible on desktop.

**Expected impact:** Low — minor UX improvement.

---

## 10. Hero Section

| Issue | Severity | Detail |
|---|---|---|
| Heading size: 2.5rem | **Critical** | This is the single most impactful issue. The name is the headline of the entire portfolio. At 2.5rem it has no presence. Praxis: ~5rem, Apple: massive, Linear: 4-5rem. A 2.5rem heading does not communicate "premium developer." |
| Decrypt animation is a nice touch | **Positive** | Adds character, though it could be slower for dramatic effect. |
| Typewriter text "Full-Stack Developer | React · Next.js · Java · Spring Boot" is informative but long | **Medium** | At speed={5} it types very fast. Consider reducing speed so visitors can read it forming. |
| Portrait uses blob-morph animation | **High** | The `profile_animate` keyframes change border-radius between organic shapes. This was trendy ~2021. Premium portfolios now use gentle float animations or no portrait animation at all. |
| Social sidebar includes phone link with tooltip | **Medium** | A phone number on a portfolio homepage feels personal and can attract spam. Move to Contact section only. |
| CTA "Let's build something" is good | **Positive** | Action-oriented. |
| Scroll-down cue is decorative | **Low** | Fine to keep, but the inline comment was removed (good). |
| Portrait image uses background-image on empty `<div>` | **Medium** | No `aria-hidden="true"` — screen readers will encounter an empty div. Should be marked decorative or converted to `<img>`. |
| 3-column grid layout is cramped | **Critical** | 120px social rail + 1fr portrait + 1fr text. On a 968px container, the text content gets ~424px. With the social rail occupying the top left and the layout being a strict 3-column, the hero feels crowded. |

**Proposed solution:** Complete hero redesign — 2-column (text left, portrait right), heading at `clamp(3.5rem, 7vw, 6rem)`, remove blob animation, move social inline, remove phone, slow typewriter.

**Expected impact:** Transformative — this is the single highest-impact change available.

---

## 11. Projects Presentation

| Issue | Severity | Detail |
|---|---|---|
| Case study cards are visually premium | **Positive** | Rotated image, floating pill panel, dominant-color extraction. These are genuinely well-designed. |
| 6 projects with all `liveUrl` and `githubUrl` = `null` | **High** | Every project card shows "Visit Live" and "View Source" links on the detail page — but they're all hidden because the URLs are null. The detail page renders empty space where links should be. This is a content gap, not a design gap, but it undermines credibility. |
| Card images are large WebP files after optimization | **OK** | Now ~700KB total across 6 images — acceptable. |
| `fetchpriority="high"` (typo: should be `fetchPriority`) | **Low** | Pre-existing lint error. Browser may ignore the attribute. |
| No `prefers-reduced-motion` on card hover transforms | **Low** | Fixed in Phase 2 (not yet deployed). |

**Proposed solution:** Remove "View Source" and "Visit Live" from the detail page when both are null — or add demo/deployment URLs. Fix `fetchPriority` typo.

**Expected impact:** Medium — removes a credibility issue.

---

## 12. Skills Section

| Issue | Severity | Detail |
|---|---|---|
| Content is well-written and CV-accurate | **Positive** | The editorial voice is strong. |
| Skills grouped into two visual groups is clean | **Positive** |
| No visual skill bars or proficiency indicators | **OK** | The current icon-grid approach is restrained and professional — prefer this over animated bars. |

**No issues found** — this section is near benchmark quality.

---

## 13. About Section

| Issue | Severity | Detail |
|---|---|---|
| Well-written editorial content | **Positive** | Strong narrative voice. |
| Portrait (about.png) is still 1.6MB | **Medium** | After optimization passes, this image should be converted to WebP and resized. |

**Proposed solution:** Convert about.png to WebP at 560px width.

**Expected impact:** Low — performance improvement only.

---

## 14. Contact Section

| Issue | Severity | Detail |
|---|---|---|
| Profile + form card layout is clean | **Positive** | Good editorial presentation. |
| Form submits to external Vercel API with no fallback | **Medium** | If the external API is down, the user gets an error with no alternative contact method. |
| `alert()` replaced with inline error in scope | **Positive** | Good accessibility improvement. |

**Proposed solution:** Add a fallback email link when the API fails. Consider self-hosting the email endpoint.

**Expected impact:** Low — reliability improvement.

---

## 15. Footer

| Issue | Severity | Detail |
|---|---|---|
| Visually disconnected from the editorial system | **High** | Uses the old design pattern: dark background boxes behind social icons, generic "Portfolio" title, traditional link list. The editorial sections above it use clean typography, thin borders, and transparency — the footer looks like it belongs to a different site. |
| Contains "Portfolio" as the site title | **Medium** | Should be "Mostafa Akajdid" or removed. |
| (c) 2026 is hardcoded | **Low** | Should auto-update via JavaScript. |
| Boxicons used in footer icons | **Low** | Inconsistent with the rest of the site which uses Feather icons. |

**Proposed solution:** Redesign footer to match the editorial system: minimal text links, no icon backgrounds, thin top border, site name as "Mostafa Akajdid", auto-updating year.

**Expected impact:** High — closes the visual gap between old and new design systems.

---

## 16. Motion Design

| Issue | Severity | Detail |
|---|---|---|
| Decrypt heading animation works | **Positive** | Good character. |
| Blob morph animation on portrait is dated | **Medium** | The `profile_animate` keyframes create a continuous morphing border-radius — this was popular in 2020-2021. Premium sites now use subtle float (translateY cycling) or no portrait animation. |
| No scroll-triggered entrance animations | **Medium** | Sections appear instantly as they lazy-load. Adding a subtle fade-in-up on scroll would improve the feeling of discovery. |
| Typewriter speed (5) is nearly instant | **Low** | Consider speed=10 for a more deliberate typing effect. |
| No page transitions | **Medium** | The SPA jumps between routes with no continuity. |
| Lightbox fade-in (0.25s) is nice | **Positive** | Good duration. |

**Proposed solution:** Replace blob with a subtle float animation. Add scroll-triggered entrance animations for sections. Add 200ms page transitions. Slow typewriter.

**Expected impact:** Medium — transforms the feeling of the experience from static to crafted.

---

## 17. Hover Interactions

| Issue | Severity | Detail |
|---|---|---|
| Case study card image hover (scale + brightness) | **Positive** | Well-executed. |
| Case study CTA circle hover (rotate -4deg + fill) | **Positive** | Delightful microinteraction. |
| Social sidebar icons scale up on hover | **OK** | Simple and effective. |
| Link underlines aren't animated | **Low** | Most links use opacity transitions only. Animated underlines on text links would add polish. |
| Button hover uses opacity only | **Low** | The `.button` class uses `opacity: 0.8` on hover. A subtle background-color transition would feel more premium. |

**Proposed solution:** Add `background-position` or underline animation on text links. Use subtle background-color shifts on primary buttons instead of opacity.

**Expected impact:** Low — polish improvement.

---

## 18. Loading Experience

| Issue | Severity | Detail |
|---|---|---|
| All lazy components use `fallback={null}` | **Medium** | When lazy components are loading, nothing is shown — the page has blank gaps. For users on slow connections, sections will flash in one by one. |
| No skeleton placeholders | **Medium** | Adding lightweight skeleton loaders matching each section's shape would eliminate layout shift and flash. |
| Font loading via Google Fonts CDN | **OK** | Preconnect is set up, `font-display: swap` is in place. |

**Proposed solution:** Replace `fallback={null}` with inline skeleton placeholders that match each section's approximate shape and height.

**Expected impact:** Medium — significantly improves perceived performance.

---

## 19. Scroll Experience

| Issue | Severity | Detail |
|---|---|---|
| `html { scroll-behavior: smooth }` is set globally | **OK** | Good — all anchor scrolls are smooth. |
| Scrollbar hidden globally (`scrollbar-width: none`) | **Low** | On Windows/Linux where scrollbars take space, hiding them can cause content to shift when the user hovers. Consider `overlay` scrollbars or keeping them visible. |
| No scroll-linked animations | **Medium** | No parallax, no scroll-triggered reveals, no sticky elements outside the project detail page. |

**Proposed solution:** Add subtle scroll-triggered section reveals via IntersectionObserver. Keep the scrollbar accessible.

**Expected impact:** Low-Medium.

---

## 20. Accessibility

| Issue | Severity | Detail |
|---|---|---|
| `button { outline: none }` globally removes focus indicators | **Critical** | Keyboard users cannot see which button has focus. This is a WCAG 2.4.7 failure. (Noted in Phase 0 — fix pending deployment.) |
| No `skip-to-content` link | **Medium** | Users who rely on keyboard navigation must tab through the entire header and hero to reach main content. |
| Hero portrait is a background-image on an empty `<div>` | **Medium** | No `aria-hidden="true"`. Screen readers encounter an empty div. |
| Card images have descriptive alt text | **Positive** | `"${title} project screenshot"` — adequately descriptive. |
| Lightbox has `role="dialog"`, `aria-modal="true"` | **Positive** | Correct. |
| Contact form has `aria-describedby` for errors | **Positive** | Good. |
| No `prefers-reduced-motion` handling | **Medium** | All animations fire for all users. (Partially fixed in Phase 2.) |
| Color contrast: low-opacity text (0.35) may fail WCAG AA | **Medium** | Opacity 0.35 on text-color (HSL 46% lightness) produces a contrast ratio of ~2.5:1 — fails AA. Small text needs 4.5:1. |
| Heading hierarchy is generally good | **Positive** | h1 → h2 → h3 pattern is respected. |

**Proposed solution:** Remove global `outline: none` (deployed fix pending). Add skip-to-content link. Mark hero portrait as `aria-hidden="true"`. Increase minimum opacity for body text to 0.55+. Add `prefers-reduced-motion` globally.

**Expected impact:** Critical for accessibility compliance.

---

## 21. Mobile Experience

| Issue | Severity | Detail |
|---|---|---|
| Header pill top-fixed at top:24px | **OK** | Works well for thumb reach. |
| Body padding-top: calc(24px + var(--header-height)) on mobile | **OK** | Correct — prevents content from hiding under the header. |
| Hero collapses to `0.5fr 3fr` which is awkward | **Medium** | The social rail takes 0.5fr but the portrait and text share 3fr in a 2-column subgrid. On small screens this creates a cramped layout. |
| Hero heading reduces to 2.2rem at 768px and 1.8rem at 372px | **Medium** | Too small for a hero on mobile. Should use fluid sizing, not hard breakpoints. |
| Case study grid becomes 1-column at 576px | **Positive** | Good. |
| Card description hidden at 350px | **Positive** | Pragmatic. |
| Touch targets: nav items at 0.7rem are too small | **Medium** | Minimum recommended touch target is 44px × 44px. At 0.7rem with padding, these may be ~30px tall. |

**Proposed solution:** Use fluid `clamp()` for hero heading on mobile. Increase nav font-size to 0.8rem+ with larger tap areas. Consider removing the social rail on mobile and integrating links inline.

**Expected impact:** Medium — improves usability on the most common access method.

---

## 22. Tablet Experience

| Issue | Severity | Detail |
|---|---|---|
| Grids adapt at 992px and 768px | **Positive** | Well-tested breakpoints. |
| Container reduces margins at 992px | **OK** | Standard. |
| Project detail meta sticks at 120px on desktop, becomes static at 992px | **OK** | Good responsive behavior. |
| No tablet-specific layout improvements | **Low** | Everything works, nothing is specifically optimized for tablet. |

**No significant issues.**

---

## 23. Desktop Experience

| Issue | Severity | Detail |
|---|---|---|
| Container max-width 968px is reasonable | **OK** | On very wide screens (>1400px), the content area feels narrow. Consider a slightly wider container (1080px) or using `clamp()` for max-width. |
| White space on the sides of the container is fine | **Positive** | At 968px on a 1920px screen, there's ~476px of whitespace on each side — appropriate for editorial content. |
| No full-width hero or immersive section | **Low** | Every section is contained. A full-width hero with a large heading would add visual drama. |

**No significant issues.**

---

## 24. Premium Perception

| Issue | Severity | Detail |
|---|---|---|
| **No accent color** | **Critical** | The entire site is grayscale (hue: 0, sat: 0%). There is no brand color, no accent, no visual personality. Premium benchmarks use color intentionally: Praxis (warm tones), Apple (product colors), Linear (blue/indigo), Vercel (black/white with magenta accents). |
| **No brand identity** | **Critical** | No logo, no monogram, no wordmark, no signature color, no consistent visual motif. The word "Mostafa" in Poppins is the only identifier. |
| Single typeface | **High** | Already covered — a display font pairing would immediately signal craftsmanship. |
| Case study detail page is genuinely premium | **Positive** | The reading progress bar, sticky metadata, lightbox, copy-link, active section tracking, keyboard navigation — these features rival or exceed the benchmarks. |
| Editorial sections are well-written | **Positive** | The About, Skills, and Qualification sections have a calm, philosophical voice. |

**Proposed solution:** Define a brand color (indigo-blue or warm charcoal), create a simple monogram logo, add a display font for headings, and apply the accent color sparingly (active nav, CTA hover, focus indicators).

**Expected impact:** Transformative — gives the portfolio an identity.

---

## 25. Consistency Across Pages

| Issue | Severity | Detail |
|---|---|---|
| Two design systems coexist | **Critical** | Hero / Footer / ScrollUp use an older template style (3-column grid, box-shadow cards, Unicons icons, rounded-corner boxes). About / Skills / Services / Qualification / Contact / Projects use a newer editorial style (clean typography, thin borders, max-width 720px, Feather icons). |
| `/projects` page uses its own CSS (Projects.css) with different heading styles than the homepage | **Medium** | "Selected Work" is `clamp(2.75rem, 6vw, 4.5rem)` while the homepage uses `--big-font-size`. These should share a design token. |
| Project detail page uses `clamp(3rem, 7vw, 5.5rem)` for title — completely different from homepage heading | **Mixed** | This is actually appropriate (detail page should have large headings). But the inconsistency with the Projects page heading (`4.5rem`) is jarring. |

**Proposed solution:** Unify the design system. Move all components to the editorial style. Remove the old template patterns. Standardize heading sizes across routes.

**Expected impact:** High — eliminates the fractured experience.

---

## 26. Copywriting Hierarchy

| Issue | Severity | Detail |
|---|---|---|
| Hero description is well-written | **Positive** | "I build fast, thoughtful web applications that feel clear to use and reliable to scale" — strong, confident. |
| Section headings are generic | **Low** | "About Me", "Skills", "Services", "Case Studies", "Contact" — these are standard labels. Adding a unique twist would make them more interesting. |
| CTA copy is effective | **Positive** | "Let's build something" — personal and action-oriented. |
| Consistency in voice across sections | **Positive** | The editorial sections share a calm, philosophical tone. |

**No significant issues** — copywriting is already strong.

---

## 27. CTA Quality

| Issue | Severity | Detail |
|---|---|---|
| Primary CTA "Let's build something" + send icon | **Positive** | Good. |
| CTA in `/projects` is "Contact Me" with arrow | **Positive** | Clean. |
| No secondary CTAs | **Low** | Some pages could benefit from a secondary CTA (e.g., "View all projects" or "Download CV"). |
| Send icon uses SVG via `<img>` with alt="send icon" | **Low** | Consider using an inline SVG for better styling control. |

**No significant issues.**

---

## 28. Brand Identity

| Issue | Severity | Detail |
|---|---|---|
| **No brand at all** | **Critical** | The portfolio has no visual identity. It is a collection of well-designed components without a unifying brand. This is the single biggest gap vs. the benchmarks. |
| No logo, no favicon distinction | **Medium** | The favicon is a generic SVG, the apple-touch-icon is also generic. |
| No brand color | **Critical** | Already covered. |
| No consistent visual motif | **High** | No pattern, no illustration style, no icon treatment — nothing that says "this is a Mostafa Akajdid site." |

**Proposed solution:** Define a brand identity system: accent color (indigo-blue suggests trust + engineering), simple monogram logo, consistent icon style (Feather throughout), a subtle visual motif (grid lines, thin borders, or a specific illustration style).

**Expected impact:** Transformative — this is what separates a template from a portfolio.

---

## 29. Performance Concerns

| Issue | Severity | Detail |
|---|---|---|
| Project images converted to WebP (Phase 2) | **Positive** | ~95% size reduction. |
| About portrait (about.png) still at 1.6MB | **High** | Not yet converted. This image appears on every homepage load. |
| Code splitting via `lazy()` on all non-critical components | **Positive** | Good — each section is its own chunk. |
| `fetchpriority="high"` on hero story image | **Low** | Typo means browser ignores it. |
| Two external icon CDNs (Boxicons + Unicons) | **Low** | Adding two CDN icon libraries is unnecessary. Consolidate to react-icons or a single CDN. |
| Total JS bundle ~185KB gzipped (index) + chunks | **OK** | Reasonable for a React SPA. |

**Proposed solution:** Convert about.png to WebP. Fix `fetchPriority` typo. Consolidate icon libraries.

**Expected impact:** Medium — improves load time and reduces requests.

---

## 30. Visual Debt

| Issue | Severity | Detail |
|---|---|---|
| Dead Work component removed (Phase 0) | **Positive** | Cleanup done. |
| `--bg-color` and `--text-color-light` undefined (Phase 2 fix pending deploy) | **Low** | Fixed in source, pending deployment. |
| `button { outline: none }` still in deployed CSS | **High** | Phase 0 fix not yet deployed. |
| ScrollUp uses Unicons arrow — only remaining Unicons usage | **Low** | Should be replaced with Feather. |
| Footer uses Boxicons — only remaining Boxicons usage | **Low** | Should be replaced with Feather. |
| Inline comment `// eslint-disable-next-line no-unused-vars` in Data.jsx | **Low** | Sloppy — should be resolved. |

**Proposed solution:** Deploy Phase 0 and Phase 2 changes. Consolidate icons to Feather throughout. Standardize the scroll-to-top button.

**Expected impact:** Low-Medium — reduces technical debt.

---

## Roadmap

### Phase 1 — Critical (Identity + First Impression)

| # | Task | Impact |
|---|---|---|
| 1 | Define brand identity: accent color, monogram logo, display font pairing | Transformative |
| 2 | Redesign hero: 2-column layout, heading at 5-6rem, remove blob, remove phone from social | Transformative |
| 3 | Remove global `button { outline: none }` + add `:focus-visible` | WCAG compliance |
| 4 | Fix design system inconsistency: redesign Footer and ScrollUp to match editorial system | High |
| 5 | Add accent color to CTA, active nav, focus states, hover interactions | High |
| 6 | Convert about.png to WebP, resize to 560px | Performance |

### Phase 2 — Important (Layout + Navigation)

| # | Task | Impact |
|---|---|---|
| 7 | Standardize section padding and layout to editorial system | Medium-High |
| 8 | Add skip-to-content link and hero portrait `aria-hidden` | Accessibility |
| 9 | Add route-aware navigation (highlight current page, brand always links to `/`) | Medium |
| 10 | Remove "Visit Live" / "View Source" from detail pages when null | Credibility |
| 11 | Consolidate icon libraries (remove Boxicons + Unicons, use Feather) | Consistency |
| 12 | Increase mobile touch targets (nav items to 0.8rem+, proper tap area) | Usability |

### Phase 3 — Polish (Motion + Interaction)

| # | Task | Impact |
|---|---|---|
| 13 | Add scroll-triggered section entrance animations (fade-in-up) | Medium |
| 14 | Add page transitions between routes (200ms CSS fade) | Medium |
| 15 | Replace blob animation with gentle float on portrait | Medium |
| 16 | Add Suspense skeleton placeholders | Perception |
| 17 | Add `prefers-reduced-motion` support globally | Accessibility |
| 18 | Slow typewriter speed for visible typing effect | Low |

### Phase 4 — Luxury (Premium Distinction)

| # | Task | Impact |
|---|---|---|
| 19 | Add animated link underlines on hover | Low |
| 20 | Add primary/secondary CTA hierarchy with subtle background transitions | Low |
| 21 | Replace ScrollUp Unicons arrow with Feather icon | Low |
| 22 | Replace `(c) 2026` with dynamic year via JavaScript | Low |
| 23 | Add a full-width immersive section (hero or project showcase) | Low-Medium |
| 24 | Fix `fetchpriority` → `fetchPriority` typo | Low |
| 25 | Add system font fallback to `--body-font` | Low |

---

## Quality Score

### Current Quality Score: 58 / 100

| Category | Score | Reasoning |
|---|---|---|
| Visual Hierarchy | 45/100 | Hero heading too small, no typographic contrast |
| Typography | 40/100 | Single font, no pairing, compressed scale |
| Layout/Grid | 55/100 | Cramped hero grid, inconsistent section layouts |
| Whitespace | 65/100 | Good in editorial sections, tight in hero |
| Navigation | 70/100 | Distinctive pill, but mobile touch targets small |
| Hero | 30/100 | Most critical weakness |
| Projects | 80/100 | Genuinely premium card treatment and detail page |
| Editorial Content | 85/100 | Well-written, CV-accurate |
| Footer | 40/100 | Visually disconnected |
| Motion | 50/100 | Decent microinteractions, no entrance animations |
| Accessibility | 35/100 | Focus outline removed, no skip-to-content |
| Mobile | 60/100 | Functional but cramped in hero |
| Brand Identity | 15/100 | Effectively zero |
| Performance | 70/100 | Good code-splitting, large images (improving) |
| Consistency | 45/100 | Two competing design systems |

### Compared with Benchmarks

| Benchmark | Score (est.) | Notes |
|---|---|---|
| **Praxis** | 88/100 | Strong visual identity, clear typography, professional brand, good motion. Weak on accessibility. |
| **Apple** | 95/100 | Perfection in hierarchy, whitespace, typography, photography, motion, and brand. Gold standard. |
| **Vercel** | 90/100 | Distinctive brand (magenta/black), excellent typography (Geist), clean layouts. |
| **Linear** | 92/100 | Masterful use of whitespace, typography, subtle motion, and brand color (blue/indigo). |
| **Stripe Press** | 93/100 | Editorial design excellence. Typography, layout, and book-like reading experience. |
| **makajdid.vercel.app** | **58/100** | Strong foundation in editorial sections and project detail. Held back by hero, missing brand identity, and inconsistent design systems. |

### Gap Summary

The portfolio is currently **~30-35 points behind the premium benchmarks**. The most impactful 20% of changes (Phase 1: brand identity + hero redesign + design system unification) would close ~15 of those points and bring the score to ~73/100 — a professional portfolio. The remaining gap to 90+ requires the polish and luxury phases.
