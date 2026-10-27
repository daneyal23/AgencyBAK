# Webapp v0 — public site + held-meeting calculator Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a working held-meeting ROI calculator and deepen the public marketing pages on the existing static `site/`, without waiting on Supabase or a framework migration.

**Architecture:** Keep v0 public on static HTML/CSS/JS under `site/`. Pure formula module (`site/js/held-meeting-roi.js`) is framework-agnostic so a later React/Vite port can import the same math. Email gate is client-side (printable breakdown + mailto lead) until D7/Supabase. Dashboard deferred to a follow-on plan.

**Tech Stack:** Static HTML5, CSS (existing tokens), vanilla JS. Node `assert` for formula unit checks (no Jest). No CDN animation libs.

**Spec:** `docs/superpowers/specs/2026-10-26-webapp-v0-design.md`

## Global Constraints

- Formula published on-page; defaults labeled; no invented AgencyBAK averages or scare “lost revenue” without user bases.
- USD “from” package bands only; below ~$7.5k/mo framing.
- Max three cinematic motions site-wide; `prefers-reduced-motion` honored.
- Results free before email gate; gate unlocks printable breakdown + book CTA.
- Copy from `docs/artifacts/packages/` and `docs/artifacts/services/`.

**Framework pick (spec §6.2):** Stay on static `site/` for this plan. Migrate to Astro/Next when SEO multi-page + Supabase auth land (dashboard plan).

---

### Task 1: Formula module + unit checks

**Files:**
- Create: `site/js/held-meeting-roi.js`
- Create: `site/js/held-meeting-roi.test.mjs`

**Interfaces:**
- Consumes: none
- Produces: `export function calculateHeldMeetingRoi({ monthlySpend, meetingsBooked, showRate, valuePerHeld, otherSourceMeetings })` → `{ held, costPerHeld, pipeline, roiSignal, outboundBooked }` with nulls/Infinity guarded

- [x] **Step 1: Write failing test** in `held-meeting-roi.test.mjs` asserting spend 4000, booked 20, show 0.6, value 5000 → held 12, costPerHeld ≈ 333.33, pipeline 60000, roiSignal 15

- [x] **Step 2: Run test** — `node site/js/held-meeting-roi.test.mjs` — expect FAIL (module missing)

- [x] **Step 3: Implement** `calculateHeldMeetingRoi` per spec §5.3; `outboundBooked = max(0, meetingsBooked - otherSourceMeetings)`; held = outboundBooked * showRate; divide-by-zero → `null` for cost/roi

- [x] **Step 4: Re-run test** — expect PASS

---

### Task 2: Calculator page UI

**Files:**
- Create: `site/calculator.html`
- Modify: `site/styles.css` (calculator form layout)
- Create: `site/js/calculator-page.js`

**Interfaces:**
- Consumes: `calculateHeldMeetingRoi` from Task 1
- Produces: live results region `#results`; gate panel `#gate` revealed after first valid calc; `window.print()` friendly `#print-sheet`

- [x] **Step 1: Build `calculator.html`** — nav consistent with index; inputs for spend, booked, show rate (default 60%), value per held, optional other-source meetings; formula `<details>`; footnote on booked ≠ held / ~3.43% reply context

- [x] **Step 2: Wire `calculator-page.js`** — on input/change recompute; show results; enable gate (email field + “Email me the breakdown” mailto with body summarizing numbers + assumptions)

- [x] **Step 3: Manual check** — open page; change show rate; cost per held updates; print sheet lists assumptions

---

### Task 3: Deepen public home + nav

**Files:**
- Modify: `site/index.html` (nav Tool link; packages “from” language; CTA to calculator)
- Modify: `site/README.md`

**Interfaces:**
- Consumes: package bands from artifacts
- Produces: `#tool` teaser linking to `calculator.html`

- [x] **Step 1: Add nav “Tool” → calculator.html**; hero or packages CTA “Price a held meeting”
- [x] **Step 2: Ensure package prices use “from” wording**
- [x] **Step 3: Update site README** with calculator path and test command

---

### Task 4: Smoke verification

**Files:** none

- [x] **Step 1:** `node site/js/held-meeting-roi.test.mjs` PASS
- [x] **Step 2:** Open `calculator.html` via static server; confirm results before email; mailto opens with summary
- [x] **Step 3:** Confirm reduced-motion CSS still present on shared stylesheet

---

## Follow-on (not this plan)

- Supabase lead table for gate
- React/Vite dashboard (booked vs held manual entry)
- Astro/Next migration for multi-route SEO
