# Cinematic pans + marketing prototype — design

**Date:** 2026-10-26  
**Status:** Approved — implementing prototype  
**Deliverable choice:** Spec first, then minimal prototype page (option 3)

## 1. Problem

AgencyBAK’s marketed site must feel deliberate and high-trust (Main Street GTM, build-and-transfer), not like a template with bounce-in cards. Motion should create **presence and hierarchy**: subtle cinematic pans on hero media and thin parallax on scroll — never decorative noise.

There is no website codebase yet. This spec defines the motion system and a **single-page prototype shell** that demonstrates site navigation and service intel with those pans wired in.

## 2. Goals

- Ship **2–3 intentional motions** on the prototype (hero Ken Burns, thin scroll parallax, one section-settle pan).
- Respect **`prefers-reduced-motion: reduce`** — pans become static crops; no auto-drift.
- Prototype surfaces real copy from `docs/artifacts/services/` (taglines + nav structure already agreed).
- Keep implementation **basic**: static HTML/CSS (+ minimal JS if needed). No framework, no CMS, no build step required for v0.

## 3. Non-goals

- Full multi-page site, CMS, forms backend, analytics, or package pricing.
- Ken Burns / parallax on service cards, buttons, or every section.
- Video, WebGL, Lottie, or heavy animation libraries.
- Locked brand identity (palette/type may be provisional for the prototype).

## 4. Motion system

### 4.1 Tokens (implementation constants)

| Token | Value | Notes |
|-------|--------|--------|
| `--pan-duration` | `22s` | Hero Ken Burns cycle |
| `--pan-scale-end` | `1.06` | Max scale |
| `--pan-drift-x` | `2.5%` | Horizontal drift magnitude |
| `--pan-drift-y` | `1.5%` | Vertical drift magnitude |
| `--parallax-bg` | `0.2` | Background plane vs scroll |
| `--parallax-mid` | `0.45` | Mid plate vs scroll |
| `--settle-pan` | `5%` | One-shot horizontal settle on first services viewport |
| `--settle-ms` | `900ms` | Ease-out settle duration |

Easing: `cubic-bezier(0.33, 0, 0.2, 1)` for settles; `ease-in-out` for looping Ken Burns.

### 4.2 Motion A — Hero Ken Burns (always-on, subtle)

- **Where:** Home hero full-bleed image/plate only.
- **What:** Slow scale `1.0 → 1.06` with ~2–3% drift (e.g. origin bottom-left → slight right/up). Loop via CSS `@keyframes` with soft hold at ends (no hard cut).
- **Constraint:** Transform on a dedicated `.hero-media` layer under a static overlay; **copy and CTA never move**.
- **Duration:** ~18–28s (default 22s). Infinite; pause when tab hidden (`document.visibilityState`).

### 4.3 Motion B — Thin scroll parallax

- **Where:** Hero stack only (bg + optional mid grain/texture). Body sections do **not** parallax.
- **What:** On scroll, bg translateY at `scrollY * 0.2`; mid at `scrollY * 0.45`; foreground content fixed in document flow.
- **Cap:** Max translate ±80px so mobile doesn’t tear. Disable parallax below `768px` width (Ken Burns may remain if motion OK).

### 4.4 Motion C — Section settle pan

- **Where:** Once, when the **Services** band first enters ~40% viewport (IntersectionObserver, `once: true`).
- **What:** Services band background plate pans horizontally `0 → 5%` over ~900ms, then holds.
- **Not:** Repeated on every scroll back; not applied to individual service rows.

### 4.5 Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  /* freeze hero at crop; no parallax JS; no settle pan */
}
```

JS must no-op parallax and settle when this media query matches.

### 4.6 Hard exclusions

- No hover Ken Burns on cards or links.
- No staggered fade-up on every section (generic AI tell).
- No continuous floating UI chrome.
- Max **three** motions site-wide on the prototype.

## 5. Prototype information architecture

Single file (or tiny folder) marketing shell:

```
Home
├── Nav: Home · Services · How we work · Markets · About · Contact
├── Hero (Motion A + B)
├── Services band (Motion C) — 8 lines with taglines
├── How we work — Build → operate → transfer · Client-owned · Held > booked
├── Markets — US · CA · UK · IE · EU · AU · NZ · GCC
├── About — one short Main Street positioning paragraph
└── Contact — mailto / placeholder CTA (no backend)
```

Service rows link to `#` anchors or in-page `#service-<slug>` stubs with the stop-line one-liner from artifacts (not full pages in v0).

**Site one-liner (footer or hero sub):**  
Strategy chooses the bet · Engineering builds the machine · Outbound and ads fill it · CRM tells the truth · Web and SEO earn the first hello · AI removes the busywork — and you keep the keys.

## 6. Prototype visual direction (provisional)

Enough to host pans; not final brand.

- **Base:** Deep ink `#0E1114`, paper `#F3F0E8`, accent steel `#3D5A6C` (avoid purple gradients, cream+terracotta cliché, broadsheet hairlines).
- **Type:** Distinctive pair — e.g. display serif for brand/hero, clean grotesque for UI/nav. No Inter/Roboto/Arial as primary.
- **Hero:** Full-bleed atmospheric still (abstract industrial / workshop / corridor — product-world feel). Use a local placeholder image or CSS gradient mesh **only as stand-in**; document swap path for real photo.
- **Layout:** One composition in first viewport: brand, one headline, one supporting sentence, one CTA group, dominant media. No cards in hero. Services below as a list/band, not a card grid.

## 7. Technical approach

| Choice | Decision |
|--------|----------|
| Stack | Static `site/` — `index.html`, `styles.css`, `motion.js` |
| Ken Burns | Pure CSS animation on `.hero-media` |
| Parallax | `requestAnimationFrame` + scroll listener; transform only |
| Settle | IntersectionObserver once |
| Fonts | Self-hosted or system stack with distinctive licensed faces if added later; no CDN required for v0 if system+`@font-face` local |
| Hosting | Open `index.html` locally or any static host |

### File map

```
site/
  index.html      # shell + content from artifacts
  styles.css      # layout, tokens, Ken Burns, reduced-motion
  motion.js       # parallax + settle + visibility pause
  assets/
    hero.jpg      # placeholder or documented stand-in
  README.md       # how to open + motion notes
```

## 8. Copy sources (do not invent)

Pull taglines and positioning from:

- `docs/artifacts/services/README.md`
- Per-service files under `docs/artifacts/services/*.md` (tagline + stop line only for v0)

## 9. Success criteria

- [ ] Opening the prototype shows a slow hero pan without copy jitter.
- [ ] Scrolling moves only the hero media layers (thin), not type.
- [ ] Services band settles once with a slight horizontal pan.
- [ ] OS “reduce motion” freezes all three.
- [ ] Nav matches agreed sitemap; eight services + taglines visible.
- [ ] No animation libraries; Lighthouse-friendly (transforms/opacity only).

## 10. Open questions (non-blocking for v0)

- Final brand name lock and domain.
- Real hero photography brief.
- Whether service rows become separate routes in v1.

## 11. Implementation order (after this spec is approved)

1. Write implementation plan under `docs/superpowers/plans/`.
2. Scaffold `site/` with nav + hero + services content.
3. Wire Motion A (CSS), then B, then C; verify reduced-motion.
4. Owner visual check on desktop and one mobile width.
