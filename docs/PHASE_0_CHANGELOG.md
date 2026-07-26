# Phase 0 — Cleanup Changelog

**Date:** 26 July 2026

---

## Files Changed

### `src/App.css`
- **Removed** global `button { outline: none; }` (was on line 119-123).
- **Added** global `:focus-visible` rule: `outline: 2px solid var(--title-color); outline-offset: 2px;` — works in both light and dark mode.
- **Added** `:focus:not(:focus-visible)` suppression for `button`, `a`, `input`, `textarea`, `select` to prevent mouse-click outlines while preserving keyboard focus indicators.

### `src/components/header/Header.jsx`
- Renamed nav label from `"Project"` to `"Projects"` (line 10).

### `src/components/contact/Contact.jsx`
- **Removed** both `alert()` calls (the `else` branch in the `response.ok` check and the `catch` block).
- **Added** `submitError` state variable to hold API error messages.
- **Added** `setSubmitError("")` call in `handleChange` and before `fetch` in `handleSubmit`.
- **Added** inline `<p className="contact__submit-error" role="alert">` rendered when `submitError` is truthy.
- Changed success message from `role="status"` to `aria-live="polite"` per spec.
- Button already had `disabled={isLoading}` and `aria-busy={isLoading}` — unchanged.
- API endpoint and request payload unchanged.

### `src/components/contact/contact.css`
- **Added** `.contact__submit-error` style block: centered, `tiny-font-size`, `opacity: 0.65`, fade-in animation matching the existing success message pattern.

### `src/components/home/ScrollDown.jsx`
- **Removed** stray comment `{/* sgvdjvdgj */}` (line 12).

### `src/pages/Portfolio.jsx`
- **Removed** the dead `Work` lazy import (was `const Work = lazy(() => import("../components/work/Work"));`).

---

## Files Deleted

| File | Reason |
|---|---|
| `src/components/work/Work.jsx` | Dead code — component was commented out in JSX (`{/* <Work /> */}`). |
| `src/components/work/Projects.jsx` | Only used by Work.jsx. |
| `src/components/work/work.css` | Only used by Work.jsx and Projects.jsx. |
| `src/components/work/` (directory) | Empty after removal. |

---

## Files Unchanged (Intentionally)

- `src/pages/Projects.jsx` — route-level project listing page, **not** part of the dead Work component.
- `src/pages/ProjectDetail.jsx` — case study detail page, **not** affected.
- `src/data/caseStudies.js` — shared project data, **not** affected.
- `src/assets/projects.js` — shared image imports, **not** affected (some of these images are used by CaseStudies components).
- All hero/header/footer/scrollup components — **not** redesigned, per scope.
- All CV-aligned content (About, Skills, Qualification) — **not** changed.

---

## Build Result

```
npm run build
✓ built in 2.97s
119 modules transformed.
```

Clean exit, no warnings, no errors.

**Notable:** The project PNG assets (about.png 1.6MB, monpatient.png 1.7MB, etc.) remain large — deferred to a later optimization phase.

---

## Lint Result

```
npm run lint
```

21 pre-existing errors/warnings found. **Zero regressions** from this task.  
All errors are in files untouched by this task:

| File | Issue | Count |
|---|---|---|
| `TextDecrypt.jsx` | unused vars, missing prop-types, missing deps | 5 |
| `CaseStudies.jsx` | missing prop-types | 1 |
| `CaseStudyCard.jsx` | missing prop-types | 6 |
| `ProjectDetail.jsx` | `fetchpriority` → `fetchPriority` | 1 |
| `ServiceItem.jsx` | missing prop-types | 3 |
| `SkillItem.jsx` | missing prop-types | 3 |

These are pre-existing and should be addressed in a dedicated cleanup pass.

---

## Assumptions

1. **Work component was truly dead** — confirmed by `Portfolio.jsx:45` where `{/* <Work /> */}` was commented out. The lazy import was never triggered (lazy components only import when rendered).
2. **Work's asset imports** (`realstate`, `glassOcean`, `piolecImage`, `gemini`, `monpatient`, `StoryCareer` from `../../assets/projects`) are still referenced by CaseStudies components, so `src/assets/projects.js` is untouched.
3. **Focus style uses `var(--title-color)`** — this variable exists in both `:root` and `[data-theme="dark"]`, so the outline adapts to both modes automatically.
4. **Contact API error message** is intentionally generic (`"Failed to send message. Please try again."`) — no internal/technical details are exposed. The `console.error("Error:", error)` is retained in the catch block for debugging.
