# Contact Section Specification

> Content guide for the Contact section of the portfolio.
> Source of truth: the verified contact information in section 3 of this document.
> Follows `docs/strategy/PORTFOLIO_PLAYBOOK.md` (voice, principles, "We Never Say", Content Rules).
> This document defines content, hierarchy, and behavior only. It does not define final visual styling.
> The Contact section is implemented at `src/components/contact/` (`Contact.jsx`, `contact.css`) and rendered in `src/pages/Portfolio.jsx:64` as the final section before the Footer.
> This document is the single source of truth for the Contact section.

---

## 1. Purpose

Contact is the final step of the portfolio. By the time a visitor reaches it, they have seen identity (Hero), thinking (About), history (Experience), capability (Skills), and proof (Projects). Contact must convert that accumulated trust into one clear, low-friction next action.

The section must:

- Convert interest into a clear next action — make it obvious what to do and how to do it.
- Serve recruiters looking to discuss a role — answer "is he available, and how do I reach him?" without digging.
- Serve clients looking to discuss a project — make it easy to describe the work and start a conversation.
- Feel like a natural conclusion to the portfolio story — calm, composed, and human, matching everything above it.
- Remain calm, direct, human, and premium — no sales pressure, no urgency, no hype.
- Reduce hesitation — visible contact options, clear expectations, no dead ends.

The Contact section is not a sales landing page. It is not a generic form. It is the final step after the visitor has seen identity, thinking, experience, skills, and work.

---

## 2. Current Audit

Source: `src/components/contact/Contact.jsx`, `src/components/contact/contact.css`, rendered at `src/pages/Portfolio.jsx:64`. Footer reviewed read-only in section 12.

### 2.1 What exists today

Visible copy, verbatim:

- Name (h2): `Mostafa Akajdid`
- Role line: `Available for freelance & full-time opportunities.`
- Social links: `LinkedIn`, `GitHub`, `Email` (mailto to `mostafaakajdid6@gmail.com`)
- Status line: `Available now`
- Card heading (h3): `Let's build something exceptional.`
- Card text: `Whether you're hiring, building a product, or looking for a technical partner, I'd love to hear what you're working on.`
- Form: fields `Name`, `Email`, `Message` with placeholders `Your name`, `Your email`, `Tell me about your project...`
- Submit button: `Let's work together` / `Sending...`
- Success message: `✓ Message sent successfully.` (auto-hides after 4s)
- Error message: `Failed to send message. Please try again.`
- Microcopy: `Usually replies within 24 hours.`

### 2.2 Layout and hierarchy

- Section padding `7rem 1.5rem 5.5rem`, container `max-width: 720px` — consistent with About, Experience, Skills, and Case Studies.
- **Profile block** (centered): circular portrait (5.5rem, from `src/assets/mostafa.webp`), name at `--h2-font-size`, role line at `opacity 0.5`, a horizontal social row, and an uppercase status line at `opacity 0.35`.
- **Card block** (`.contact__card`): `background: var(--container-color)`, radius `1.25rem`, soft shadow, padding `2.25rem`. Contains the heading, supporting text, and the form.
- **Hierarchy tension:** the name (h2) and the card heading (h3 styled at the same `--h2-font-size`) compete for weight. There is no eyebrow label and no section heading — Contact is the only content section that does not open with the label → heading → intro pattern.
- The card is the only elevated "card" among the card-free editorial sections; it visually differs from the thin-rule treatment of About/Experience/Skills.

### 2.3 Issues

**Issue 1 — Salesy, banned-adjacent heading.**
- Wrong: the card heading is `Let's build something exceptional.` — the same family as the banned "Let's create something amazing"; it is an empty promise rather than an instruction.
- Why it matters: the playbook bans hype ("We Never Say"), and a visitor is asked to act on a claim, not on a reason to act.
- Severity: High (copy).
- Direction: rewrite as a short, human, specific invitation that tells the visitor what to do.

**Issue 2 — Supporting copy in the banned phrase family.**
- Wrong: `...I'd love to hear what you're working on.` uses the banned "I would love to hear from you" pattern, and "technical partner" is vague.
- Why it matters: the copy is warm but generic; it does not separate the two real intents (recruiter vs client).
- Severity: Medium (copy).
- Direction: rewrite to serve both intents concretely without a welcome-mat tone.

**Issue 3 — Unverified response-time promise.**
- Wrong: `Usually replies within 24 hours.` is not verified anywhere and appears nowhere else in the codebase.
- Why it matters: an unkept expectation damages trust — the section's entire job.
- Severity: High (trust).
- Direction: remove unless the response-time claim is explicitly verified and kept accurate.

**Issue 4 — Raw email address is never shown as text in Contact.**
- Wrong: the email is only a `mailto:` link labeled `Email`; the address string is not displayed in the section (it appears as text only on the Privacy page).
- Why it matters: recruiters and clients often copy an address into an email client or a job portal; a plain visible address is the lowest-friction contact path and the natural fallback if the form fails.
- Severity: Low/Medium.
- Direction: show the address as visible text (with wrapping), per the chosen direction.

**Issue 5 — No answer to "what happens after I submit?".**
- Wrong: the only feedback is a transient `✓ Message sent successfully.` that disappears after 4 seconds; nothing tells the visitor who receives it or what happens next.
- Why it matters: unanswered expectations reduce trust; the transient success is easy to miss.
- Severity: Medium.
- Direction: a persistent or clearly longer-lived confirmation, ideally naming the next step (e.g., a reply from the visible email address).

**Issue 6 — No privacy or data-handling note in the section.**
- Wrong: privacy copy exists on the `/privacy` page ("Information I Collect", third-party processing, deletion rights) but nothing in Contact references it.
- Why it matters: a quiet privacy signal before submitting builds trust for both audiences.
- Severity: Low/Medium.
- Direction: add a single quiet microcopy line linking the privacy note, per the chosen direction.

**Issue 7 — Visible field cues are placeholder-only and low contrast.**
- Wrong: labels are present but visually hidden (clip pattern); the only visible cue is the placeholder at `opacity 0.28`.
- Why it matters: placeholder-only fields fail the "real labels, not placeholder-only" requirement, and 0.28 opacity fails WCAG AA for small text.
- Severity: Medium (accessibility).
- Direction: show real labels above fields (editorial style) or keep hidden labels only if placeholders are raised to AA contrast and fields are visibly required.

**Issue 8 — Input focus relies on an animated underline; outline removed.**
- Wrong: `.contact__input:focus-visible { outline: none }`; the focus indicator is a `scaleX` underline animation plus a border-color change.
- Why it matters: the indicator is motion-dependent (not reduced-motion-safe) and can be missed; keyboard users need a clear, static focus cue.
- Severity: Medium (accessibility).
- Direction: keep a static border/underline color change at sufficient contrast, or add a visible focus ring; make it work with motion disabled.

**Issue 9 — No `prefers-reduced-motion` handling.**
- Wrong: `contact.css` has no reduced-motion block; the submit button `translateY(-2px)` hover, the `scaleX` underline, and the `fadeIn` keyframes all animate unconditionally.
- Why it matters: motion must be removable; these are decorative, not informational.
- Severity: Medium (accessibility).
- Direction: add a reduced-motion block disabling transforms and animations (color changes may stay).

**Issue 10 — Success message auto-hides and uses a checkmark glyph.**
- Wrong: `setTimeout(..., 4000)` removes the confirmation; the message begins with `✓`, a symbol that breaks the calm textual voice.
- Why it matters: transient feedback can be missed and cannot be re-announced reliably; the glyph is out of voice.
- Severity: Low/Medium.
- Direction: keep a persistent confirmation in plain text.

**Issue 11 — Name and card heading compete for weight; no section heading.**
- Wrong: the name (h2) and card heading (h3 at `--h2-font-size`) are the same size; the section has no eyebrow and no primary message heading.
- Why it matters: identity and action compete, so the action message is not the visual entry point; this inverts the conversion hierarchy (section 5).
- Severity: Medium.
- Direction: give the action heading clear primacy, or adopt the sibling label → heading pattern so Contact reads as part of the same product.

**Issue 12 — The card treatment is inconsistent with the editorial system.**
- Wrong: Contact is the only section with an elevated container-color card and shadow; About, Experience, and Skills use thin rules and typography only.
- Why it matters: the playbook's Consistency principle; the card reads as a "template widget" next to the editorial sections.
- Severity: Medium.
- Direction: either remove the card chrome (thin rule treatment) or keep a card deliberately and document why; do not introduce new colors or borders elsewhere.

**Issue 13 — Error text is low contrast and tiny.**
- Wrong: `.contact__error` renders at `--tiny-font-size` (0.625rem) at `opacity 0.5`; the submit error and success are `--tiny-font-size` too.
- Why it matters: validation feedback must be readable and perceivable; AA contrast is not met.
- Severity: Low/Medium (accessibility).
- Direction: raise size and/or contrast of all feedback text.

**Issue 14 — No visible spam protection and an opaque external endpoint.**
- Wrong: no captcha, honeypot, or rate limiting in the repo; the form POSTs to `https://email-fawn-alpha.vercel.app/api/sendEmail`, an external deployment whose code is not in this project.
- Why it matters: spam risk and a single point of failure; the recipient and delivery path are not verifiable from the codebase.
- Severity: Low (note). The external endpoint and any spam handling are unverified and must be documented as such.
- Direction: document the dependency; on failure, always fall back to the visible email address.

**Issue 15 — Validation is submit-only.**
- Wrong: `validateForm()` runs only on submit; fields clear their error on change but are never validated on blur.
- Why it matters: users discover errors only after pressing send; mild friction.
- Severity: Low.
- Direction: keep submit-time validation (acceptable) or add on-blur validation; document the timing so behavior is intentional.

**Issue 16 — No location, no phone, no response expectation (beyond the unverified 24h claim).**
- Wrong: location is absent (fine — About keeps it optional), and the phone number `+212-7-62-54-40-11` exists only in JSON-LD (`index.html`), never in the UI.
- Why it matters: nothing is wrong with omission, but the phone must not be added without explicit verification and approval.
- Severity: Note only.
- Direction: mark the phone as hidden/unverified; do not display it.

### 2.4 What works (keep)

- **Availability is stated plainly** — `Available for freelance & full-time opportunities.` plus `Available now` directly answer the recruiter's first question and match the verified About direction and SEO metadata.
- **Three fallback paths exist** — LinkedIn, GitHub, and a mailto `Email` link sit beside the form, so there is never a single contact route.
- **The form is minimal** — three fields, all meaningful; no field asks for information that belongs in the message.
- **Solid accessibility wiring** — real (hidden) labels, `aria-describedby` on error, `role="alert"` for errors, `aria-live="polite"` for success, `aria-busy` while sending, `autocomplete="name"`/`"email"`, visible focus on links and the submit button.
- **Good failure behavior** — on error the entered data is preserved (the form is not cleared); on success the form is cleared.
- **Human trust** — the portrait, plain availability, and the calm 720px rhythm match the rest of the site.
- **Consistent shell** — section padding and container match About, Experience, and Skills exactly.

---

## 3. Verified Contact Information

Extracted from the codebase. Anything not present in the codebase is marked as missing, null, hidden, or unverified. Nothing is invented.

| Item | Value | Where it appears (verified) | Status |
| --- | --- | --- | --- |
| Public email | `mostafaakajdid6@gmail.com` | `Contact.jsx:104` (mailto), `Footer.jsx:28` (mailto), `home/Social.jsx:4` (copy button), `Privacy.jsx:96-100` (visible text), `index.html:51,89` (JSON-LD `email`), `public/llms.txt`, `package.json` author, `README.md` | Verified. In Contact it is a `mailto:` link labeled `Email` — never displayed as raw text. |
| LinkedIn URL | `https://www.linkedin.com/in/mostafa-akajdid/` | `Contact.jsx:86`, `Footer.jsx:13`, `home/Social.jsx:23` | Verified. |
| GitHub URL | `https://github.com/akajdid-mostafa` | `Contact.jsx:95`, `Footer.jsx:21`, `home/Social.jsx:33` | Verified. |
| Instagram URL | `https://www.instagram.com/mostafaakajdidm/` | `index.html:56` (JSON-LD `sameAs`) | Hidden — never rendered in the UI. Not used by Contact. |
| Phone number | `+212-7-62-54-40-11` | `index.html:52,88` (JSON-LD `telephone`) | Hidden/unverified — never rendered in the UI. Must not be added to Contact without explicit approval. |
| Location | Not present in Contact. `Casablanca` exists in JSON-LD (`index.html`) and About research notes | — | Not used by Contact. Absence is acceptable (About keeps location optional). |
| Availability wording | `Available for freelance & full-time opportunities.` + `Available now` | `Contact.jsx:81,112`; SEO meta (`Portfolio.jsx:37`) says `Available for freelance and full-time roles`; About verified direction confirms openness to full-time and freelance | Verified. Consistent across Contact, SEO metadata, and the About verified facts. |
| Form submission method | `POST` JSON `{ name, email, message }` | `Contact.jsx:36-64` | Verified behavior. |
| Service / API used | `https://email-fawn-alpha.vercel.app/api/sendEmail` (hardcoded, not a secret) | `Contact.jsx:44` | External deployment; its code is **not** in this repository. Ownership and delivery behavior are **unverified**. |
| Recipient destination | Not stated in the codebase. Privacy page says submissions "may pass through an email delivery service to reach my inbox" | `Privacy.jsx:79-83` | **Unverified** — the inbox/recipient cannot be confirmed from the repo. |
| Success message | `✓ Message sent successfully.` | `Contact.jsx:220` | Verified copy; shown ~4s then auto-hidden. |
| Error message | `Failed to send message. Please try again.` | `Contact.jsx:56,60` | Verified copy. |
| Field names | `name`, `email`, `message` | `Contact.jsx:8-10,38,48` | Verified. |
| Required fields | All three (`required`) | `Contact.jsx:142,165,188` | Verified. |
| Validation rules | `name`/`message` non-empty (trimmed); `email` matches `/\S+@\S+\.\S+/`; errors: `Name is required`, `Email is required`, `Email address is invalid`, `Message is required` | `Contact.jsx:23-34` | Verified. Submit-time only. |
| Privacy / data-handling copy | Full text on the `/privacy` page: name/email/message collected, used only to respond, no mailing list, not shared; processing via third-party email delivery; deletion on request | `Privacy.jsx` | Verified, but **not referenced inside Contact**. |
| Response-time promise | `Usually replies within 24 hours.` | `Contact.jsx:226` | **Unverified** — appears nowhere else; must not be trusted as fact. |

Missing / null:

- No plain-text email anywhere in Contact.
- No phone displayed in the UI.
- No location in Contact.
- No explicit "what happens after submit" text.
- No visible spam protection (captcha/honeypot/rate-limit) in the repo.
- No response-time guarantee that is verified.

---

## 4. Visitor Questions

The section must answer quickly:

1. **Can I contact Mostafa directly?** — Yes. At minimum a visible email address plus the form; a direct method must be obvious without interaction.
2. **Is he open to a full-time role, freelance work, or both?** — Both, stated plainly (`Available for freelance & full-time opportunities.`). This is verified and must stay visible.
3. **What information should I include?** — A name, an email, and a short message. The form asks exactly this; for direct email, a quiet hint (e.g., context + where to reach you) is enough — nothing more.
4. **What happens after I submit the form?** — A confirmation must appear and say what happens next (a reply from the visible address), without inventing response times.
5. **Is there another contact method if the form fails?** — Yes: the visible email address, LinkedIn, and GitHub. This fallback must be obvious even without the form.
6. **Does the interaction feel trustworthy?** — Availability, visible contact options, honest feedback, and a quiet privacy note all contribute; hype and unverified promises damage it.

If a visitor cannot answer these from a quick scan, the section fails.

---

## 5. Conversion Hierarchy

Recommended hierarchy, highest to lowest weight:

1. **Eyebrow** — `Contact`, matching About/Experience/Skills (currently missing).
2. **Clear human heading** — one line that says "tell me what you're building / what you're looking for" without hype.
3. **Short supporting sentence** — one or two sentences covering both intents (role vs project) with no banned phrasing.
4. **Primary contact action** — the main way to reach out (form or visible email, per the chosen direction).
5. **Visible direct email fallback** — the address as readable text, present regardless of the form.
6. **Optional LinkedIn path** — a secondary professional channel.
7. **Form, only if it improves conversion** — a form is justified only if it lowers friction versus a mailto; if kept, it must be minimal, accessible, and honest about its behavior.
8. **Quiet confirmation or privacy note** — a single small line (e.g., linking the privacy note or stating what happens on submit).

Form vs direct email:

- **Form-first** keeps visitors in the page, but makes the delivery path opaque and adds validation, error, and failure surfaces.
- **Direct email-first** is the most transparent and the most minimal — the visitor sees exactly where the message goes — but leaves composition to the visitor and relies on their email client.
- The current implementation is form-first with an invisible address. The recommendation in section 9 prefers a form that remains the primary interaction **with the email address made visible as the explicit fallback and the answer to "what happens after submit."**

This is a proposed hierarchy, not an approved direction. The final direction requires manual approval (section 13).

---

## 6. Content Rules

The final Contact copy must be:

- short
- natural
- specific
- human
- direct
- free from sales language
- useful to recruiters and clients
- consistent with the portfolio voice

Avoid — treat as banned unless they carry specific new context:

- `Let's create something amazing`
- `Let's build the future`
- `I'm always excited to connect`
- `Drop me a line`
- `Have a project in mind?`
- `I would love to hear from you`
- `innovative`
- `exciting opportunity`
- `dream project`
- any response-time claim unless verified (including the current `Usually replies within 24 hours.`)

Additional rules:

- Do not repeat the Hero CTA copy (`Get in Touch`, `Explore My Work`) without adding context.
- Do not repeat the Footer role string verbatim inside the primary copy.
- No emoji or symbols as decoration (including the `✓` in the success message).
- No invented details: no phone, no location, no response promise, no new links.

---

## 7. Form Audit and Requirements

If the form remains (see section 9), these requirements apply.

### 7.1 Fields

- **Necessary fields (keep):** `Name`, `Email`, `Message`. All three earn their place; a message without a name or return address is not actionable.
- **Remove:** none. No company, role type, budget, or timeline field — all of that belongs in the message.
- **Required vs optional:** all three required. This is correct: every field is necessary to act.
- **Rule:** the form must not ask for information that can be written in the message itself. The current 3-field form complies; do not extend it.
- Prefer the smallest useful form.

### 7.2 Labels and placeholders

- **Labels (current, hidden):** `Name`, `Email`, `Message`. Keep the words; either make them visible above the fields or raise placeholder contrast to AA and mark required state visibly.
- **Placeholders (current):** `Your name`, `Your email`, `Tell me about your project...`. Keep or refine; placeholders are hints, never the only cue.
- **Label wording:** keep `Name` / `Email` / `Message` — short and unambiguous. No "Your full name", no "Email address" padding.

### 7.3 Validation

- **Timing:** currently submit-only (`validateForm()` in `handleSubmit`). Acceptable; document it. Optionally validate on blur, never with disruptive per-keystroke errors.
- **Rules (current):** name/message non-empty (trimmed); email must match `/\S+@\S+\.\S+/`. Adequate; keep.
- **Error placement:** directly below the offending field, associated via `aria-describedby`, announced with `role="alert"` (current behavior — keep).
- **Error copy (current):** `Name is required`, `Email is required`, `Email address is invalid`, `Message is required` — clear; keep. Raise contrast and size (see section 10).
- **Clearing:** errors clear when the field changes (current behavior — keep).

### 7.4 Submission states

- **Loading:** button disabled, label swaps to `Sending...`, `aria-busy` set (current — keep).
- **Disabled:** `opacity 0.45`, `cursor: not-allowed`, no transform (current — keep; ensure it reads as "in progress", not "blocked").
- **Success:** clear the form, show a **persistent** confirmation in plain text with `aria-live="polite"`; remove the 4-second auto-hide and the `✓` glyph. State the next step honestly (e.g., a reply from the visible address) without inventing timing.
- **Error:** `Failed to send message. Please try again.` with `role="alert"` (current — keep), preserve entered data (current — keep), and surface the visible email address as the fallback.

### 7.5 Keyboard, autocomplete, and spam

- **Keyboard:** full tab order; visible focus on inputs, links, and the button. Replace the `outline: none` on inputs with a static, contrast-safe focus indicator.
- **Autocomplete (current):** `autoComplete="name"` and `autoComplete="email"` — keep. `Message` needs none.
- **Spam protection:** none visible in the repo; the external API is opaque. Document this as unverified. Do not add a captcha unless required — prefer a lightweight honeypot or server-side checks if the endpoint becomes visible.
- **Failure fallback:** if the API is unreachable or fails, the visible email address and the LinkedIn/GitHub links must be right there; the error message should point to them.

---

## 8. Three Contact Directions

All three preserve the current premium minimal theme: 720px rhythm, calm typography, no hype, no new colors or heavy ornament. None is implemented.

### Direction A — Direct Email-First

- **Information hierarchy:** eyebrow `Contact` → human heading → one supporting sentence → **visible email address** (the primary action, large and readable) → LinkedIn/GitHub as quiet alternatives → optional small form or nothing.
- **Layout:** keep the profile block (portrait, name, availability, socials) and the card area, but the card's headline element is the address, not a form. The form is removed or reduced to a single quiet `mailto`-style action.
- **Primary action:** `mostafaakajdid6@gmail.com` as visible text (wrapping safely) plus a `Send an email` affordance.
- **Role of the form:** none, or a minimal optional form kept only if evidence shows it converts better than email.
- **Direct email treatment:** the address is the hero of the section — no clicks, no hidden value.
- **Recruiter path:** read availability → see the address → send directly.
- **Client path:** read the supporting sentence → compose to the visible address.
- **Desktop:** 720px column, centered profile then centered address block.
- **Mobile:** single column; the address must wrap without overflow.
- **Strengths:** maximum transparency and trust; the smallest surface; answers "what happens after submit" by construction; simplest to maintain; removes the external API dependency.
- **Risks:** composition friction (visitors must open their own mail client); no in-page validation or success state to design around; may feel bare next to the current card.

### Direction B — Concise Form-First with Visible Email (recommended candidate)

- **Information hierarchy:** eyebrow `Contact` → human heading → supporting sentence → **minimal 3-field form** as the primary action → **visible email address** directly beneath as the fallback → LinkedIn/GitHub → quiet privacy line.
- **Layout:** keep the current card, remove or soften the card chrome to match the editorial system (thin rule instead of elevated shadow), keep the centered profile block.
- **Primary action:** the form, fixed (labels visible, autocomplete, accessible errors, persistent success).
- **Role of the form:** primary, honest about delivery — success says a reply will come from the visible address.
- **Direct email treatment:** the address shown as text under the form and as the failure fallback.
- **Recruiter path:** availability → short form or address — both obvious.
- **Client path:** describe the work in the message → submit or email directly.
- **Desktop:** 720px column; profile → card with form → address line.
- **Mobile:** single column; fields stack full width; button full width; address wraps safely.
- **Strengths:** preserves the working, tested form; lowest implementation risk; adds the trust fixes (visible email, honest success, privacy note) on top of what already works.
- **Risks:** the external API remains a dependency; more accessibility surface to maintain; needs the success/error/focus fixes documented in section 7 to be complete.

### Direction C — Split Recruiter / Client Path

- **Information hierarchy:** eyebrow `Contact` → heading → supporting sentence → **two quiet, explicit paths** — `For a full-time role` and `For a project` — each leading to the same contact action with a tailored microcopy line → visible email → socials.
- **Layout:** keep the card; inside it, two short labeled paragraphs rather than a single generic intro; the form (or email action) below.
- **Primary action:** whichever route the visitor picks; both converge on the same form or address.
- **Role of the form:** shared by both paths; the context line differs.
- **Direct email treatment:** same visible address; also served as the fallback.
- **Recruiter path:** "Full-time role" → context hint → submit/email.
- **Client path:** "Project" → context hint → submit/email.
- **Desktop:** 720px column; two-context intro then the shared action.
- **Mobile:** single column; the two context blocks stack.
- **Strengths:** explicitly serves both audiences; the intro stops being generic; clear mental model.
- **Risks:** adds copy and layout weight; risks reading like a pitch page if not kept quiet; the two paths may be unnecessary if one clear action already serves both.

These are proposals, not an approval. The final direction requires explicit manual approval.

---

## 9. Recommended Direction

Recommendation: **Direction B — Concise Form-First with Visible Email.**

Rationale against the criteria:

- **Conversion clarity:** a 3-field form is the lowest-friction in-page action, and the visible email removes the opacity around where the message goes.
- **Low friction:** three fields, submit, done; the email is a one-tap fallback, never the only option.
- **Recruiter usability:** availability is visible immediately; the form or address is one glance away.
- **Client usability:** the message field holds the project description; no extra fields.
- **Trust:** fixes the unverified 24-hour claim, adds honest success feedback and a privacy note, and makes the address visible.
- **Accessibility:** builds on the existing strong wiring (labels, ARIA, autocomplete) and documents the focus/contrast/reduced-motion fixes it still needs.
- **Consistency with the Praxis-inspired premium minimal design:** the card is retained but normalized to the editorial system; nothing new or flashy is introduced.
- **Implementation speed:** the form already exists and works; the work is copy, contrast, focus, reduced-motion, and an address line.
- **Maintainability:** smallest change set; the external API stays as-is with an honest fallback.

Direction A is the stronger choice if transparency and minimalism matter more than in-page conversion; Direction C is the stronger choice if the two audiences are to be addressed explicitly. This is a recommendation only — the user reviews and decides manually.

---

## 10. Accessibility

- **Real labels, not placeholder-only fields:** show `Name` / `Email` / `Message` as visible labels above the fields, or keep the hidden labels only if placeholder contrast is raised to AA and required state is visible. Never rely on placeholders alone.
- **Semantic form structure:** keep `<form>` with `aria-label="Contact form"`, `<label>`/`<input>`/`<textarea>` pairing via `htmlFor`/`id`, and no fieldsets needed for three fields.
- **Clear required state:** all fields required — reflect it visually (e.g., `(required)`) as well as via the `required` attribute.
- **Associated error messages:** keep `aria-describedby` linking each input to its error; errors use `role="alert"` (current — keep).
- **`aria-live` for submission feedback:** success uses `aria-live="polite"` (current — keep); it must remain visible long enough to be perceived, not auto-hide after 4s.
- **Keyboard accessibility:** full tab order; every interactive element reachable and operable; errors announced without trapping focus.
- **Visible focus:** replace the `outline: none` on inputs with a static, contrast-safe indicator; keep focus styles on links and the submit button.
- **Correct autocomplete:** `autoComplete="name"`, `autoComplete="email"` (current — keep); `Message` requires none.
- **Sufficient contrast:** raise placeholder (0.28), labels, error (0.5), status (0.35), and microcopy (0.35) toward WCAG AA; the muted tokens used elsewhere are the ceiling.
- **Touch target sizes:** inputs (padding `0.875rem`) and the button (≥48px tall) are adequate; text links in the social row should meet a comfortable tap height on mobile.
- **No motion required to understand state:** success/error states must be perceivable with animations off; the underline must not be the only focus indicator.
- **Reduced-motion support:** add a `prefers-reduced-motion` block disabling the submit `translateY`, the `scaleX` underline, and `fadeIn`; color/border changes may remain.

---

## 11. Responsive Requirements

- **Desktop:** 720px column; profile block (portrait, name, availability, socials) then the contact card. Two distinct vertical groups, no side-by-side columns.
- **Tablet:** same single-column flow; section padding steps to `5.5rem`/`4.5rem` per the existing breakpoints; card padding `2rem`.
- **Mobile (≤576px):** portrait reduces to `5rem`, card padding `1.75rem`, radius `1rem`; heading drops to `--h3-font-size` (current behavior — keep).
- **Field stacking:** fields always stack full-width in DOM order Name → Email → Message; never side by side.
- **Button width:** full width of the card at every breakpoint (current — keep).
- **Email wrapping:** the visible address must wrap cleanly (`word-break` / `overflow-wrap`) and must never cause horizontal overflow, especially under 360px.
- **No horizontal overflow:** the social row (`LinkedIn GitHub Email`) and any new address line must fit within the container at 350px without clipping.
- **Readable success and error states:** feedback text must fit the card width, stay visible (no auto-hide), and meet contrast on every breakpoint.
- Keep the existing breakpoint structure (992 / 768 / 576 / 350) and outer padding unchanged.

---

## 12. Contact and Footer Relationship

Current duplication (Footer reviewed read-only; not modified in this task):

- **Email:** `mostafaakajdid6@gmail.com` — Contact (`mailto` link) and Footer (`mailto` link).
- **Social links:** LinkedIn and GitHub — Contact and Footer both.
- **Role:** Contact does not state a role; the Footer states `Full-Stack Software Engineer` (differs from the playbook's `Full-Stack Developer` — a documented title inconsistency elsewhere).
- **Location:** neither shows it (JSON-LD holds Casablanca).
- **Availability:** Contact owns it; the Footer does not repeat it.
- **Privacy/legal:** the Footer owns the `/privacy` link; Contact has no reference to it.

Recommendation for ownership:

- **Contact owns conversion:** the primary action, availability wording, the visible direct email address, LinkedIn/GitHub as alternative paths, and a quiet privacy reference. The raw address should be spelled out here (it is the one place a visitor needs to see it).
- **Footer owns identity and navigation:** name, role, global links (LinkedIn, GitHub, Email, Resume), the privacy-policy link, and copyright. The Footer keeping a `mailto` link is acceptable; it should not become the primary place the address is visible, and it must not repeat availability or contact-specific copy.
- **Avoid competition:** Contact and Footer should not both present themselves as "the way to reach Mostafa." Contact is the destination; the Footer is the persistent global baseline. No new links or claims should be added to either without updating this document.

The Footer is not modified in this task.

---

## 13. Decision Status

STATUS

Section:

Contact + Footer

State:

LOCKED

No further content or visual changes are allowed unless a critical usability, accessibility, or responsive issue is discovered.

Contact + Footer is approved and locked (V2.1 — Final Cleanup). The previous V1 and V2 documentation is retained below.

---

## 14. Acceptance Criteria

The Contact section is ready for implementation only when:

- the direct contact method is visible
- recruiter and client intent are both supported
- copy is concise and human
- no unverified promises appear
- form fields are minimal
- validation and failure behavior are documented
- accessibility requirements are complete
- Contact and Footer do not compete
- one direction is explicitly approved
- documentation and implementation remain synchronized

---

## Approved Contact V1

Approved content and design direction for the Contact section, implemented in `src/components/contact/` (`Contact.jsx`, `contact.css`).

### Documented changes

- **Eyebrow added** — `Contact` label added above the section heading, styled identically to the About, Experience, and Skills labels (same typography, spacing, and centered alignment). Implemented as `.contact__eyebrow` to avoid the existing `contact__label` used by the form's visually hidden field labels.
- **Final heading** — `Tell me what you're building.` (replaces `Let's build something exceptional.`). Current typography and spacing kept.
- **Final supporting copy** — `Whether you're hiring for a full-time role or building a product, a few lines of context are enough to start the conversation.` (replaces the banned-family paragraph).
- **Visible email fallback** — `Prefer email?` label with `mostafaakajdid6@gmail.com` below the form as quiet, centered, clickable text (no icon, no button, no card, no decoration). Wraps safely on narrow screens.
- **24-hour claim removed** — `Usually replies within 24 hours.` removed completely (unverified). The now-unused `.contact__microcopy` rule was removed.
- **Success message updated** — `Your message has been sent successfully.` (replaces `✓ Message sent successfully.`; checkmark glyph removed; `aria-live="polite"` kept; existing success styling kept).

### Not changed

- Form fields, validation rules, API endpoint, loading state, card layout, profile block, portrait, social links, and responsive behavior are untouched.
- Footer and Projects are untouched.
- No global design tokens were changed.

STATUS

Section:

Contact

State:

IMPLEMENTED — SCREENSHOT REVIEW PENDING

Not marked LOCKED.

---

## Approved Contact + Footer V2

Contact and Footer consolidation, implemented in `src/components/contact/` (`Contact.jsx`, `contact.css`) and `src/pages/Portfolio.jsx`. The homepage ends with one coherent final block: the Contact section now owns conversion, global links, final identity, and copyright.

### Documented changes

- **Contact and Footer consolidated on homepage** — the standalone Footer is no longer rendered after Contact on the homepage (`Portfolio.jsx`). The page ends with a single final composition.
- **Profile block retained** — portrait, `Mostafa Akajdid`, `Available for freelance & full-time opportunities.`, LinkedIn/GitHub/Email social row, and `Available now` are kept unchanged and remain the only prominent identity block.
- **Contact card retained** — `Contact` eyebrow, `Tell me what you're building.`, the approved supporting paragraph, Name/Email/Message fields, submit button, and the visible email fallback are unchanged. Form logic and API behavior are untouched.
- **Button changed to `Send message`** — replaces `Let's work together`; loading state remains `Sending...`. Button styling unchanged.
- **Footer links moved into Contact card** — quiet, text-first global links row (LinkedIn, GitHub, Email, Resume, Privacy) using the verified URLs and actions from `Footer.jsx`, with a thin divider (`1px solid rgba(0,0,0,0.07)`), `margin-top: 3rem`, `padding-top: 1.5rem`, centered, no background/shadow/nested card.
- **Identity/legal moved into Contact card** — `Mostafa Akajdid` (small, weight 600), `Full-Stack Developer` (muted), and `© 2026 Mostafa Akajdid. All rights reserved.` (tiny, muted). Year is hardcoded `2026`, matching the existing standalone Footer behavior. No second portrait, no repeated availability, no phone or location.
- **Standalone Footer removed from homepage only** — `Footer.jsx` is not deleted; it still renders on non-home routes (`/projects`, `/privacy`). Project detail and 404 routes are unchanged and continue without a standalone Footer as before.
- **Duplication removed** — the homepage no longer repeats identity, social links, privacy link, or copyright in a separate Footer block below Contact. The identity inside the card footer area is quiet and secondary.

### Responsive and accessibility behavior

- Desktop keeps the centered 720px composition; footer links sit in one row when they fit.
- Mobile footer links wrap into multiple centered rows (`flex-wrap`), with `gap: 0.5rem 1.5rem`; no horizontal overflow; the email wraps safely; copyright stays readable. Existing Contact breakpoints unchanged.
- A semantic `<footer>` element is used inside the final Contact composition; the homepage has exactly one final footer landmark. Link focus states stay visible; links keep meaningful text labels (no icon-only links).
- The standalone Footer remains semantic (`<footer className="footer">`) on non-home routes.

STATUS

Section:

Contact + Footer

State:

LOCKED

No further content or visual changes are allowed unless a critical usability, accessibility, or responsive issue is discovered.

---

## Approved Contact + Footer V2.1 — Final Cleanup

Final duplication cleanup for the Contact + Footer composition, implemented in `src/components/contact/` (`Contact.jsx`, `contact.css`). The current combined composition (V2) is approved; only duplicated identity and contact links were removed.

### Documented changes

- **Top profile block remains the single identity and social block** — portrait, `Mostafa Akajdid`, `Available for freelance & full-time opportunities.`, LinkedIn/GitHub/Email social row, and `Available now` are unchanged and continue to own identity and social links.
- **LinkedIn, GitHub, and Email removed from the in-card footer** — these are already owned by the top profile block. Only `Resume` and `Privacy` remain in the footer links row, using the existing verified URLs and behavior. No icons, no replacement links; the top profile social links are not modified.
- **Duplicated name and role removed** — the `Mostafa Akajdid` and `Full-Stack Developer` lines were removed from the in-card footer. The name appears once in the profile block; the role is established by the rest of the portfolio.
- **Resume and Privacy retained** — the two global links that are not already shown above stay in the footer.
- **Copyright retained** — `© 2026 Mostafa Akajdid. All rights reserved.` stays centered and quiet as the only legal line. Not duplicated elsewhere on the homepage.
- **Standalone Footer remains on non-home routes** — `Footer.jsx` is unchanged (content, style, and rendering behavior) and still renders on `/projects` and `/privacy`.
- **Contact + Footer duplication eliminated** — the homepage composition now shows identity, social links, and the raw email exactly once each.

### Final in-card footer structure

After the visible email fallback:

Thin divider → `Resume  Privacy` → `© 2026 Mostafa Akajdid. All rights reserved.`

Nothing else. Spacing: footer `margin-top: 3rem`, `padding-top: 1.5rem`, links-to-copyright `1.25rem`. The divider, centered alignment, link style, legal style, hover, and focus behavior are unchanged. No empty wrappers or unnecessary spacing remain where the identity lines were removed.

### Responsive and accessibility behavior

- Desktop: `Resume` and `Privacy` remain centered on one row.
- Mobile: links may wrap if necessary; no horizontal overflow; the copyright stays centered and readable; no empty space caused by the removed elements. Existing Contact breakpoints unchanged.
- The homepage retains exactly one footer landmark (the semantic `<footer>` inside the Contact composition); the standalone Footer landmark remains on non-home routes.

STATUS

Section:

Contact + Footer

State:

LOCKED

No further content or visual changes are allowed unless a critical usability, accessibility, or responsive issue is discovered.
