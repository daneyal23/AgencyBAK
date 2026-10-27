# Cinematic pans marketing prototype — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a static single-page marketing prototype under `site/` with three cinematic motions (Ken Burns, thin hero parallax, services settle) and real AgencyBAK service copy.

**Architecture:** Vanilla HTML/CSS/JS. CSS owns Motion A (Ken Burns) and reduced-motion freezes. `motion.js` owns Motion B (parallax) and Motion C (IntersectionObserver settle), plus pause-on-hidden. No frameworks or animation libraries.

**Tech Stack:** Static HTML5, CSS custom properties, vanilla ES modules-free JS, optional CSS gradient hero stand-in (no binary asset required for v0).

**Spec:** `docs/superpowers/specs/2026-10-26-cinematic-pans-prototype-design.md`

## Global Constraints

- Exactly three motions site-wide; no card hover pans; no staggered section fade-ups.
- Copy from `docs/artifacts/services/` only (tagline + stop line for stubs).
- Colors: ink `#0E1114`, paper `#F3F0E8`, steel `#3D5A6C`.
- No CDN scripts; open `site/index.html` locally.
- Honor `prefers-reduced-motion: reduce` in CSS and JS.
- Parallax disabled below `768px` width; Ken Burns may remain unless reduced-motion.

---

### Task 1: Scaffold site shell + content

**Files:**
- Create: `site/index.html`
- Create: `site/README.md`
- Modify: `docs/superpowers/specs/2026-10-26-cinematic-pans-prototype-design.md` (status → Approved)

**Interfaces:**
- Consumes: service taglines/stop lines from artifacts
- Produces: DOM ids `hero`, `hero-media`, `hero-mid`, `services`, `services-plate`, anchors `#service-*`, nav links to `#services` `#how` `#markets` `#about` `#contact`

- [x] **Step 1: Create `site/index.html`** with nav, hero (brand AgencyBAK, one headline, one support line, CTA to `#contact` + `#services`), services list (8 rows), how/markets/about/contact, footer one-liner. Wire script `motion.js` defer at end of body. Link `styles.css`.

- [x] **Step 2: Create `site/README.md`** — open instructions, motion list, how to swap hero for real photo (`assets/hero.jpg` on `.hero-media`).

- [x] **Step 3: Mark spec status Approved**

- [x] **Step 4: Manual check** — open HTML; all eight services and nav anchors present (no CSS/JS yet required for this check).

---

### Task 2: Styles + Motion A (Ken Burns)

**Files:**
- Create: `site/styles.css`

**Interfaces:**
- Consumes: class names from Task 1
- Produces: CSS vars `--pan-duration: 22s`, `--pan-scale-end: 1.06`, etc.; `@keyframes hero-ken-burns`; `.hero-media.is-paused { animation-play-state: paused }`

- [x] **Step 1: Write `styles.css`** — layout, type (Georgia/"Iowan Old Style"/Palatino display; "Segoe UI Variable"/ui-sans-serif/system-ui UI — avoid Inter/Roboto/Arial as named primary), full-bleed hero, services as list not cards, Ken Burns on `.hero-media`, reduced-motion freezes animation.

- [x] **Step 2: Manual check** — hero media drifts slowly; copy stays fixed; reduce-motion OS setting freezes hero.

---

### Task 3: Motion B + C (`motion.js`)

**Files:**
- Create: `site/motion.js`

**Interfaces:**
- Consumes: `#hero-media`, `#hero-mid`, `#services`, `#services-plate`
- Produces: `initMotion()` on DOMContentLoaded; `prefersReducedMotion()` boolean; parallax caps ±80px; settle once at 40% intersection

- [x] **Step 1: Implement `motion.js`** — visibility pause toggles `.is-paused` on hero media; parallax on scroll via rAF when width ≥ 768 and not reduced-motion; IntersectionObserver on `#services` once applies settle class to `#services-plate`.

- [x] **Step 2: Manual check** — scroll moves media not type; services plate pans once ~5%; reduced-motion disables B and C; hide tab pauses Ken Burns.

---

### Task 4: Owner verification pass

**Files:** none (checklist only)

- [x] **Step 1: Verify success criteria** from spec §9 against open page (desktop ≥768 and one mobile width).
- [x] **Step 2: Note any gaps in `site/README.md` if found.

---

## Spec coverage (self-review)

| Spec item | Task |
|-----------|------|
| Motion A Ken Burns | Task 2 |
| Motion B parallax | Task 3 |
| Motion C settle | Task 3 |
| Reduced motion | Tasks 2–3 |
| Nav + 8 services | Task 1 |
| No animation libs | All |
| README / hero swap | Task 1 |
| Colors / no card hero | Task 2 |
