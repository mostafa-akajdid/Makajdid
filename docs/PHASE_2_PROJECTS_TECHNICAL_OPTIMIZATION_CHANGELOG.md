# Phase 2 — Projects / Case Studies Technical Optimization

**Date:** 26 July 2026

---

## Files Changed

| File | Change |
|---|---|
| `src/assets/projects.js` | All 6 PNG imports changed to WebP imports |
| `src/assets/Project/*.webp` (6 new files) | WebP versions of each project image |
| `src/components/projectDetail/projectDetail.css` | Fixed `--bg-color` → `--body-color`, `--text-color-light` → `--text-color`; added reduced-motion block |
| `src/components/caseStudies/caseStudies.css` | Added reduced-motion block |

## Files Preserved (Kept as Originals)

- `src/assets/Project/*.png` — all 6 original PNG files remain in the repository

---

## A. Image Optimization — Before / After

| Filename | Dimensions | PNG (bytes) | WebP (bytes) | Reduction |
|---|---|---|---|---|
| Gemini | 1903×975 | 98,717 | 39,572 | 59.9% |
| StoryCareer | 2880×1800 | 379,244 | 91,794 | 75.8% |
| glassOcean | 2880×1800 | 3,163,636 | 167,222 | 94.7% |
| monpatient | 2880×1800 | 1,715,441 | 101,410 | 94.1% |
| piolecImage | 2880×1800 | 4,918,114 | 133,606 | 97.3% |
| realstate | 2880×1800 | 3,040,483 | 174,906 | 94.2% |
| **Total** | | **13,315,635** | **708,510** | **94.7%** |

### Fidelity preservation
- All 6 WebP files have identical pixel dimensions to their PNG sources (verified via `sips`).
- Sharp conversion at quality 85 with no resizing, cropping, or color-shift arguments.
- Visual composition, aspect ratio, and rotation outcome in the card are unchanged because the CSS `transform: rotate(8deg) translate(4%)` operates on the image element regardless of container format.

### Active import verification
- `grep` for `\.Project.*\.png` in `src/` returns **no results** after the update.
- All 6 imports in `src/assets/projects.js` now reference `.webp` extensions.
- `caseStudies.js` imports from `../assets/projects` — unchanged, automatically resolves to WebP.

---

## B. CSS Variable Fixes

| Undefined reference | Replaced with | Rationale |
|---|---|---|
| `var(--bg-color)` (projectDetail.css:9) | `var(--body-color)` | Page background should match the global body background defined in `App.css` as `--body-color` (hsl(0,0%,98%) light / hsl(0,0%,12%) dark). Visual result is identical. |
| `var(--text-color-light)` (projectDetail.css:39) | `var(--text-color)` | The `.pe__back` button needs the standard text color. `--text-color` is the defined token (hsl(0,0%,46%) light / hsl(0,0%,74%) dark). Visual result is identical. |

Both tokens are already defined in `:root` and `[data-theme="dark"]` in `App.css`.

---

## C. Reduced-Motion CSS Added

### `caseStudies.css` (lines 276–290)

| Rule | Behaviour when reduced |
|---|---|
| `.case-study-card__image` | `transition: none` — removes the 0.6s scale/filter hover animation |
| `.case-study-card:hover .case-study-card__image` | `transform: rotate(8deg) translate(4%)` (no scale), `filter: none` — hover no longer zooms or darkens |
| `.case-study-card__cta` | `transition: background-color 0.15s ease, border-color 0.15s ease` — faster, no transform anim |
| `.case-study-card__cta:hover` | `transform: none` — no rotation on hover |

### `projectDetail.css` (lines 767–809)

| Rule | Behaviour when reduced |
|---|---|
| `.pe__progress` | `transition: none` — progress bar updates instantly |
| `.pe__back` | `transition: none` — instant opacity change |
| `.pe__image-btn` | `transition: none` — removes hover lift/scale animation |
| `.pe__image-btn:hover` | `transform: none`, `box-shadow: none`, `filter: none` |
| `.pe__link-arrow` | `transition: none` — arrow no longer slides on hover |
| `.pe__link:hover .pe__link-arrow` | `transform: none` |
| `.pe__lightbox` | `animation: none`, `opacity: 1` — no fade-in |
| `.pe__story-title` | `transition: none` — opacity snaps instantly |
| `.pe__next` | `transition: none` — opacity snaps instantly |
| `.pe__next-image` | `transition: none` — opacity snaps instantly |

Hover/focus visibility, keyboard behavior, navigation, and content remain fully functional.

---

## Preservation Checklist

- [x] Card grid layout, spacing, typography — untouched
- [x] Image rotation (`rotate(8deg) translate(4%)`) — preserved exactly
- [x] Floating pill panel design — untouched
- [x] Dominant color extraction gradient — untouched
- [x] All project content (titles, descriptions, story text, tags, links, slugs) — untouched
- [x] Routes and navigation (`/projects`, `/projects/:slug`, back/next/keyboard) — untouched
- [x] Lightbox, copy-link, reading progress bar — functionality untouched
- [x] Homepage hero, header, footer, contact, other sections — untouched
- [x] Dependencies — none added
- [x] Original PNG source files preserved

---

## Build Result

```
npm run build
✓ built in 2.65s
119 modules transformed.
```

All 6 project images in the build output are now `.webp` files. No project `.png` files in the build output (the only remaining `.png` is `about.png` which is outside scope).

## Lint Result

```
npm run lint
```

21 pre-existing errors/warnings. **Zero regressions** from this task.

---

## Blocker / Visual Risk

None. The build passes, lint shows no regressions, all 6 WebP images were verified to match source dimensions, imports were verified to point only to WebP, and CSS variables now reference defined tokens.
