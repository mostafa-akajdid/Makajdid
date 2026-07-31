# About Section — Content Specification

> Content guide for the About section of the portfolio.
> Source of truth: verified facts listed in the Verified Personal Direction section of this document.
> Follows `docs/strategy/PORTFOLIO_PLAYBOOK.md` (voice, principles, "We Never Say").
> This document defines content, hierarchy, and behavior only. It does not define final visual styling.
> Approved About V3 is implemented. This document is the single source of truth for the About section.

---

## APPROVED ABOUT V3

Final About polish. Approved and implemented. Everything in this section is final and supersedes the V2.1 section below. The section is LOCKED (see STATUS at the end of this document).

The Hero tells visitors HOW Mostafa thinks. The About explains WHY he works that way. The section feels calm, premium, and human — not a biography, not a resume, not a landing page.

### Final heading

`The interface is only part of the product.`

- One heading only.
- No quote, no subtitle above it.
- Typography, font size, spacing, and alignment unchanged from V2.1.

### Final paragraphs

Paragraph 1:

```
Most of my professional experience has been on the frontend, but that's never been the limit of my curiosity. The more I worked on real products, the more interested I became in everything happening behind the interface—from architecture and APIs to the decisions that shape the final experience.
```

Paragraph 2:

```
I enjoy working with people who ask questions, share ideas, and care about building the right thing. I don't try to know everything. I prefer understanding the problem, learning what the project needs, and contributing where I can make the biggest impact.
```

- Exactly two paragraphs. Both unchanged from V2.1.

### Proof element

`Oracle Certified Professional · Java SE 17`

- Text unchanged from V2.1.
- Slightly more intentional: `font-weight: 500`, `letter-spacing: 0.02em`.
- Font size, color, margin, and position unchanged.
- No badge, no icon, no decorative element.

### Unchanged in V3

- Paragraphs, image, layout, spacing, typography, and responsive behavior are unchanged from V2.1.
- Image direction (photo, crop, position, radius, shadow, +10% rendered size) and text width (max-width 600px) remain as approved in V2.1.

---

## Approved About V2.1 (superseded by V3)

Final polish pass over Approved About V2. Approved and implemented. Everything in this section is final and supersedes the V2 section below.

The Hero tells visitors HOW Mostafa thinks. The About explains WHY he works that way. The section feels calm, premium, and human — not a biography, not a resume, not a landing page.

### Final heading

`Good software starts long before the first line of code.`

- One heading only.
- No quote, no subtitle above it.
- Typography, hierarchy, and spacing unchanged from V2.

### Final paragraphs

Paragraph 1:

```
Most of my professional experience has been on the frontend, but that's never been the limit of my curiosity. The more I worked on real products, the more interested I became in everything happening behind the interface—from architecture and APIs to the decisions that shape the final experience.
```

Paragraph 2 (unchanged from V2, typo corrected):

```
I enjoy working with people who ask questions, share ideas, and care about building the right thing. I don't try to know everything. I prefer understanding the problem, learning what the project needs, and contributing where I can make the biggest impact.
```

- Exactly two paragraphs. Paragraph 2 is unchanged from V2 except the typo correction (`understandg` → `understanding`).

### Proof element

`Oracle Certified Professional · Java SE 17`

- Rendered below the second paragraph.
- Same font size, weight, and muted color as V2.
- Spacing increased: `margin-top` 1.5rem → 2rem.
- No badge, no icon, no border, no card.

### Image direction

- Current photo kept: `src/assets/about.webp`. Same photo, same crop, same position, same border radius, same shadow.
- Rendered size increased approximately 10%: desktop column 260px → 286px; tablet 238px → 262px; mobile 194px → 213px; small 162px → 178px.
- Grid structure unchanged.

### Text width

- Narrative text maximum readable width increased from 480px to 600px.
- Grid width and section width unchanged; the text simply breathes to the larger cap.

### Typo correction

- `understandg` → `understanding` in paragraph 2.

---

## Approved About V2 (superseded by V2.1)

Approved and implemented. Everything in this section is final and supersedes the planning sections below.

The Hero tells visitors HOW Mostafa thinks. The About explains WHY he works that way. The section feels calm, premium, and human — not a biography, not a resume, not a landing page.

### Final heading

`I enjoy understanding how software works as a whole.`

- One heading only.
- No quote.
- No subtitle above it.
- Current typography hierarchy kept.

### Final paragraphs

Paragraph 1:

```
Most of my professional experience has been on the frontend, but I've never seen products as just interfaces. The more I worked on real projects, the more curious I became about everything happening behind the screen—from architecture to APIs and the decisions that shape the final experience.
```

Paragraph 2:

```
I enjoy working with people who ask questions, share ideas, and care about building the right thing. I don't try to know everything. I prefer understandg the problem, learning what the project needs, and contributing where I can make the biggest impact.
```

- Exactly two paragraphs. Not more, not split further.
- Copy is used exactly as approved — no rewrites, no simplifications.

### Proof element

`Oracle Certified Professional — Java SE 17`

- Rendered below the second paragraph.
- Smaller than body text, medium weight, muted color.
- No badge, no icon, no card. It feels like supporting evidence, not a highlight.

### Image direction

- Current photo kept: `src/assets/about.webp`. Not replaced, not cropped differently, position unchanged.
- Slightly larger (about +8%): desktop column 240px → 260px; responsive widths scaled to match (238px / 194px / 162px).
- Subtle border, very soft shadow, current border radius.
- No glass effect, no decorative shapes, no background cards.

### Layout

- Two-column layout kept: left photo; right heading, paragraph 1, paragraph 2, proof line.
- The section label and heading now live in the right (narrative) column.
- No CTA. No quote.
- Generous whitespace maintained.

### Removed

- **Quote** — the italic quote and all quote-only CSS were removed. Nothing replaced it.
- **CTA** — "Get in Touch →" was removed. The Hero already contains the primary CTA; the About section now ends naturally after the proof line.

---

## 1. Section Purpose

What the About section must accomplish after the Hero:

- Add personality without becoming a biography.
- Explain how Mostafa thinks and works.
- Support the balanced Full-Stack Developer positioning.
- Show the importance of user experience, architecture, collaboration, and curiosity.
- Build trust for recruiters and clients.

The About must not duplicate the Hero, Experience, or Skills sections:

- The Hero owns the identity, role, and one-line method. About must not repeat the core message, the supporting sentence, or the CTAs.
- Experience owns the roles, companies, dates, and responsibilities. About must not summarize them.
- Skills owns the technology list. About must not list technologies.

If a sentence in About restates one of these sections, it is wrong.

---

## 2. Pre-V2 Content Audit

Source: `src/components/about/About.jsx` (visible), `src/components/about/about.css` (styles), `src/assets/assets.js:3` and `src/assets/about.webp` (portrait).

Pre-V2 visible copy, verbatim:

- Label: `About`
- Heading: `Software should feel effortless.`
- Quote: `"I don't just build interfaces. I remove the friction between people and what they're trying to accomplish."`
- Paragraph 1: `I'm a full-stack developer who believes software should serve people, not the other way around. Based in Morocco, I've spent years learning what makes digital products actually work — not just compile. I hold an Oracle Certified Professional certification in Java SE 17, and I bring that same depth to every layer of the stack.`
- Paragraph 2: `I start with the person using the product, not the technology behind it. Every decision — from layout to API design — is measured against one question: does this make the experience simpler?`
- Paragraph 3: `You can expect clear communication, thoughtful code, and a genuine interest in solving the right problem. I work in French (professional) and English (intermediate), and I do my best work with people who care about quality and aren't afraid to iterate.`
- CTA: `Get in touch` → `#contact`
- Portrait: `src/assets/about.webp` (280×373), alt `Mostafa Akajdid`, lazy-loaded, plain 4px-radius rectangle.

### 2.1 Sentence-by-sentence assessment

**Label — `About`**
- Communicates: section identity.
- Useful: yes.
- Generic: no.
- Over-positions: no.
- Verdict: **Keep.** Matches the eyebrow pattern used by Experience and Skills.

**Heading — `Software should feel effortless.`**
- Communicates: a product belief (experience should feel easy).
- Useful: yes, gives personality.
- Generic: borderline — "effortless" is a staple of design portfolios.
- Over-positions: mild — it reads interface/UX-first and says nothing about the engineering side, tilting the first impression toward a designer.
- Verdict: **Rewrite.** Keep the product-thinking intent, rebalance it so it does not read as design-only.

**Quote — `"I don't just build interfaces. I remove the friction between people and what they're trying to accomplish."`**
- Communicates: an approach — friction removal, going beyond the interface.
- Useful: yes, it is memorable.
- Generic: somewhat — "remove the friction" is a known design saying.
- Over-positions: mild — it frames the work around interfaces and friction, which skews toward UX/frontend.
- Verdict: **Rewrite into the main paragraph or remove.** The idea is good but a standalone italicized "inspirational quote" is a template pattern. Fold the friction idea into first-person narrative if it earns its place.

**Paragraph 1, sentence 1 — `I'm a full-stack developer who believes software should serve people, not the other way around.`**
- Communicates: role plus core belief.
- Useful: yes — positions the section immediately.
- Generic: yes — "software should serve people" is a common sentiment.
- Over-positions: no.
- Verdict: **Rewrite.** Keep the belief, use fresher wording. Note the role wording here (`full-stack developer`) matches the approved playbook title; keep that consistency.

**Paragraph 1, sentence 2 — `Based in Morocco, I've spent years learning what makes digital products actually work — not just compile.`**
- Communicates: location, experience depth, and a human touch ("not just compile").
- Useful: partial. The "works, not just compiles" idea is good and human.
- Generic: the "years learning" phrasing is a filler claim.
- Over-positions: no.
- Verdict: **Rewrite.** Drop the unverified "years" claim. Location is optional (Casablanca; only add if it adds real value). Keep the "works — not just compiles" idea.

**Paragraph 1, sentence 3 — `I hold an Oracle Certified Professional certification in Java SE 17, and I bring that same depth to every layer of the stack.`**
- Communicates: a credential and a balanced full-stack claim.
- Useful: yes — concrete proof.
- Generic: no.
- Over-positions: no — "every layer of the stack" actively balances the section toward full-stack.
- Verdict: **Keep** as a restrained proof element, optionally lightened so it reads less like a resume line.

**Paragraph 2, sentence 1 — `I start with the person using the product, not the technology behind it.`**
- Communicates: the UX-first method.
- Useful: yes, but...
- Generic: no.
- Over-positions: mild UX tilt on its own.
- Verdict: **Remove or reword.** This duplicates the Hero core message (`I start with the user experience, then build the architecture that makes it possible.`). About must not restate the Hero.

**Paragraph 2, sentence 2 — `Every decision — from layout to API design — is measured against one question: does this make the experience simpler?`**
- Communicates: a decision test that explicitly spans frontend and backend.
- Useful: yes — it is specific and grounded.
- Generic: no.
- Over-positions: no — "from layout to API design" keeps the full-stack balance.
- Verdict: **Keep** with light polish. This is the strongest current line and should influence the rewrite.

**Paragraph 3, sentence 1 — `You can expect clear communication, thoughtful code, and a genuine interest in solving the right problem.`**
- Communicates: what collaborators get — communication, quality, and curiosity about the real problem.
- Useful: yes — directly answers "what is it like to work with him?".
- Generic: mild — "clear communication, thoughtful code" is common but acceptable.
- Over-positions: no.
- Verdict: **Keep with light polish.** This supports collaboration and the verified "team" fact.

**Paragraph 3, sentence 2 — `I work in French (professional) and English (intermediate), and I do my best work with people who care about quality and aren't afraid to iterate.`**
- Communicates: languages plus a collaboration preference.
- Useful: the collaboration half yes; the languages are practical but are not in the verified facts list for this document.
- Generic: no.
- Over-positions: no.
- Verdict: **Rewrite.** Keep the iteration/quality sentiment. Treat languages as a separately confirmed detail; do not add them to About unless the user confirms them.

**CTA — `Get in touch` → `#contact`**
- Communicates: an action.
- Useful: only if the About section genuinely needs a conversion push.
- Generic: no.
- Over-positions: no.
- Verdict: **Remove or keep only if clearly necessary.** It duplicates the Hero primary CTA. Recommend removal; the Hero already owns "Get in Touch", and Contact is one section away.

**Portrait — `src/assets/about.webp` (280×373)**
- Communicates: a real person behind the work.
- Useful: yes, adds human trust if it is a current, genuine portrait.
- Generic: no.
- Over-positions: no.
- Verdict: **Keep as optional**, not required. If kept, keep it plain (rounded rectangle, subtle border) — not a sticker-style avatar.

**Unused heading variants (`HEADING_OPTIONS`, `About.jsx:4-10`)**
- `Building products people enjoy using.` — echoes the old, removed hero tagline; stale.
- `I solve problems, not just write code.` — acceptable but redundant with the paragraph ideas.
- `Good design is invisible.` — design-forward; over-positions toward design.
- `Every pixel has a purpose.` — frontend/design tilt and adjacent to the banned "pixel-perfect" pattern.
- Verdict: **Remove all unused variants.** Only the chosen heading ships.

---

## 3. Verified Personal Direction

Use only these verified facts. Do not invent hobbies, personality traits, metrics, achievements, or life stories.

- Mostafa is a Full-Stack Developer.
- Most of his professional experience has included frontend responsibilities.
- He gives strong importance to user experience.
- He usually thinks about the user experience first, then how to support it through backend architecture.
- MonPatient helped him understand how larger products are built and why UX and architecture must work together.
- He is curious about every stage of a software project.
- He values working as part of a team.
- He does not want to present himself as an expert in everything.
- He wants the portfolio to feel human, calm, professional, and honest.
- He is based in Casablanca and is open to relocating, but location does not need to appear in About unless it adds real value.
- He is open to full-time and freelance opportunities, but availability belongs primarily in Contact or Hero metadata, not in the main About copy.

Notes on consistency:

- Use the title `Full-Stack Developer` in About — it matches the playbook and the current About copy, and it avoids the title conflicts (`Full-Stack Engineer` in the Hero, `Full-Stack Software Engineer` in the Footer) documented in `docs/research/CONTENT_INVENTORY.md` §12.
- Languages (French, English) and the Oracle certification exist in the codebase, but only the certification is present in this verified list as a proof element. Languages need separate confirmation before they may appear.

---

## 4. Visitor Questions

The About section must answer:

1. How does he approach software?
2. What does he care about beyond writing code?
3. How does he connect frontend, backend, and product thinking?
4. What is it like to work with him?
5. What makes his perspective different without exaggerating?

If a visitor cannot answer these after reading the section, the section fails.

---

## 5. Content Hierarchy

Concise structure, highest weight first:

```
Eyebrow          "About" — quiet label, matches Experience and Skills
Heading          One clear, human line about how he works
Main paragraph   The core answer: approach + what he cares about beyond code
Optional second paragraph   What it is like to work with him (team, honesty, curiosity)
Optional proof element      One restrained credential or signal (not a badge)
CTA              Only if clearly necessary (currently not)
```

- One main paragraph carries the message. At most one more paragraph may follow.
- The proof element is optional and must be a single quiet line — never a badge, icon, or card.
- No CTA by default. The Hero already provides "Get in Touch".

---

## 6. Writing Rules

The final copy must be:

- natural
- direct
- specific
- human
- written in first person
- easy to scan
- free from buzzwords
- free from AI-style phrasing
- free from exaggerated confidence

Avoid phrases such as:

- I am passionate about...
- I craft seamless experiences...
- I build innovative solutions...
- I bridge the gap between...
- user-centric solutions
- cutting-edge technologies
- pixel-perfect interfaces
- turning ideas into reality

Additional playbook rules (from `docs/strategy/PORTFOLIO_PLAYBOOK.md`):

- Short, clear, specific sentences. Write like a real engineer, not a marketer.
- Proof beats claims. Never rely on adjectives alone.
- Every paragraph must explain, build trust, show proof, help navigation, or help conversion — otherwise remove it.
- Balanced positioning. Never tilt the section frontend-only or backend-only.
- Do not repeat the Hero sentence word-for-word. Do not repeat Experience descriptions. Do not list technologies.

---

## 7. Final English Copy — Three Options

Each option is between 70 and 120 words total (eyebrow + heading + paragraphs + proof element). None repeats the Hero copy, Experience descriptions, or the Skills list. None adds a CTA. The certification appears only as a restrained proof element.

### Option A — Professional and direct

- Eyebrow: `About`
- Heading: `I build across the stack, for the people who use it.`
- Main paragraph:

```
I'm a full-stack developer. My experience spans frontend, backend, and everything between, and it taught me to measure every decision by the experience it creates. I'm curious about each stage of a project — planning, interfaces, architecture, data — because understanding the whole helps me build the parts well.
```

- Optional second paragraph:

```
I work best as part of a team, and I value clear communication and honest questions. I don't claim to know everything — I learn what each project needs and apply it well.
```

- Optional proof element: `Oracle Certified Professional, Java SE 17 Developer.`

(≈98 words total)

### Option B — Human and reflective

- Eyebrow: `About`
- Heading: `Software is about people, and I like the whole journey.`
- Main paragraph:

```
Much of my professional work has had a frontend side, and it shaped how I think: I care about how people feel when they use a product. I was never content to stop at the interface. Building the MonPatient platform showed me how much product thinking sits behind the screen — and why experience and architecture have to work together.
```

- Optional second paragraph:

```
I'm at my best inside a team, staying curious about every stage of a project. I'd rather be honest about what I don't know than pretend otherwise.
```

- Optional proof element: none required for this direction.

(≈97 words total)

### Option C — Product-minded and technical

- Eyebrow: `About`
- Heading: `I think in products, not just pages and endpoints.`
- Main paragraph:

```
I'm a full-stack developer who treats software as a product with many layers. Before writing code, I want to know who it is for and where the friction sits. I carry the same clarity through interfaces, APIs, and data modeling — each layer must justify itself against the experience.
```

- Optional second paragraph:

```
I've learned that strong teams and curiosity about every stage of a project are what keep software reliable. I don't pretend to be an expert in everything; I focus on what each product actually needs.
```

- Optional proof element: `Oracle Certified Professional, Java SE 17 Developer.`

(≈100 words total)

---

## 8. Recommended Final Direction

Recommendation: **Option A — Professional and direct.**

Reasons:

- It is the most scannable, which matters most because recruiters are the primary audience.
- It keeps the full-stack balance explicit ("frontend, backend, and everything between"; "each stage — planning, interfaces, architecture, data").
- It answers the visitor questions with the least overhead: approach (measure decisions by experience), what he cares about beyond code (understanding the whole), teamwork and honesty (second paragraph), and a different perspective without exaggeration (curiosity across stages, not "expert in everything").
- It is the easiest to reconcile with the Hero: it complements the method instead of restating it, and it uses the credential as the single restrained proof element.
- Option B is a strong second choice if a warmer, more personal tone is preferred; Option C is best if client-facing product language matters more than recruiter scanning.

This is a recommendation, not final approval. The user reviews and decides manually.

---

## 9. UI Direction

Describe only. Do not implement.

- **Section width:** keep a compact centered container (~720px max-width, matching the current About and the site's editorial feel). Do not make the section full-bleed.
- **Text alignment:** eyebrow and heading centered (consistent with Experience and Skills); narrative body left-aligned. The current pattern already follows this — preserve it.
- **Paragraph count:** one main paragraph plus at most one optional second paragraph. No third paragraph, no quote block, no bullet list of traits.
- **Relationship with image and credentials:** if the portrait is kept, it sits beside the narrative on desktop and above it on mobile. The credential, if used, is a small quiet text line placed under the narrative (or near the portrait) — never a badge, never in a card.
- **Current About image:** keep `about.webp` only if it is a current, genuine portrait; it adds human trust. If kept, keep it plain: a rounded rectangle with a subtle border (the current 4px radius treatment). Do not turn it into a circular sticker avatar and do not reuse the Hero's blob treatment.
- **Columns:** two columns on desktop (portrait ~200–240px + narrative), single column on tablet and mobile. The current behavior already does this — keep it.
- **Avoiding the generic bio look:** no "Hi, I'm Mostafa, a passionate..." opener; no decorative avatar ring or orbiting icons; no animated reveal effects; no mini-timeline; no icon row. Match the label + heading pattern used by Experience and Skills so the section reads as part of one product. Typography, spacing, and hierarchy carry the section.

---

## 10. Accessibility and Responsive Notes

- **Semantic headings:** the section heading is a real heading at the same level as Experience and Skills headings (h2 on the current page structure). The eyebrow is a span/label, not a heading. Screen readers should reach the heading after the section label in a sensible order.
- **Readable line length:** the narrative should stay around the current max-width (~480px, roughly 60–75 characters per line).
- **Mobile stacking:** single column on tablet and mobile; content must not reflow awkwardly at narrow widths; portrait (if kept) and narrative stack with adequate spacing.
- **Contrast:** the current `.about__label` (opacity 0.35) and `.about__quote` (opacity 0.38) are low contrast. If the label is kept, raise its opacity or use the theme's muted text token so it passes WCAG AA. If the quote is removed per this spec, this concern disappears.
- **No text embedded in images:** the portrait is a photo; no copy is placed on it. The alt text (`Mostafa Akajdid`) is sufficient and should stay if the image remains.
- **Focus and motion:** if any link is retained in the section, it must keep a visible focus state. The section needs no scroll-triggered animation; if any is added later it must respect `prefers-reduced-motion`.

---

## 11. Acceptance Criteria

The About section is complete only when all of the following are true:

- [ ] No Hero copy is duplicated — not the core message, not the supporting sentence, not the CTAs.
- [ ] No Experience descriptions are duplicated — no roles, companies, dates, or responsibilities restated.
- [ ] The section positions Mostafa as a balanced Full-Stack Developer — never frontend-only, never backend-only, never "expert in everything".
- [ ] The voice is human, calm, first-person, and matches the playbook — no buzzwords, no AI-style phrasing, no exaggerated confidence.
- [ ] No invented facts, metrics, achievements, hobbies, or life stories appear.
- [ ] The copy is concise — one main paragraph plus at most one more; the chosen option is within the 70–120 word range.
- [ ] The section creates clear value for both recruiters (approach, teamwork, honesty) and clients (product thinking, full-stack capability).
- [ ] No technologies are listed — Skills owns that.
- [ ] The certification appears only as a restrained proof element, if at all.
- [ ] Location appears only if it adds real value; availability does not appear in About.
- [ ] No CTA is added unless it has a clear purpose.
- [ ] Content and this document are in sync. Any change to the About updates both together. This document is the source of truth.

---

## STATUS

Section:

About

State:

LOCKED

Further changes are not allowed unless a critical usability issue is discovered.
