# AgencyBAK webapp v0 — design

**Date:** 2026-10-26  
**Status:** Approved (owner yes on D4 + this scope)  
**Depends on:** `docs/DECISIONS.md` (D1–D4, D5 draft, D6 draft) · `docs/artifacts/packages/` · `site/` prototype · competitive report openings

## 1. Problem

Prospects cannot tell held meetings from booked theatre. Agencies hide prices. PE boutiques start at ~$7.5k/mo. AgencyBAK needs a public surface that **grades honesty on day one**, **publishes Main Street packages**, and later shows **client results** that survive handoff — without building an internal ops OS or a standalone SaaS first.

## 2. Goals (v0)

1. Evolve the marketing site from `site/` into a shippable public presence (packages, capabilities, how we work, contact).
2. Ship one free tool: **cost-per-held meeting / outbound ROI calculator**.
3. Define (and stub if needed) a **client results dashboard** focused on booked vs held, pipeline, and source — full CRM sync can land in v0.1.
4. Buy commodities (billing, booking, files/chat); build only differentiators (calculator + results view).

## 3. Non-goals (v0)

- Internal agency OS (pipeline for our own delivery team).
- Online package checkout / storefront.
- Standalone software product for restaurants.
- Catering revenue calculator (tool #2).
- Arabic/RTL (deferred to D7).
- Multi-currency hard quotes (USD starting bands only until D7).
- “Connect your CRM” OAuth graders in v0 (too heavy for owners with no CRM).

## 4. Product surfaces

```
Public (SEO + conversion)
├── Home (cinematic pans language from site/)
├── Packages (Pipeline Starter · GTM Machine · Demand System)
├── Capabilities (8 lines → artifact copy)
├── How we work / Markets / About
├── Free tool: Held-meeting ROI calculator
└── Contact / Book (Cal.com)

Authenticated (clients)
└── Results dashboard v0
    ├── Booked vs held (manual entry OK at first)
    ├── Pipeline / revenue fields
    └── Weekly AI summary (optional v0.1)
```

## 5. Free tool — Held-meeting ROI calculator (D4)

### 5.1 Job

Help an owner see whether outbound (or an agency) is economically sane when success is counted in **held** meetings, not booked invites.

### 5.2 Inputs (user-provided; no invented CRM data)

| Input | Unit | Notes |
|-------|------|--------|
| Monthly outbound / agency spend | currency | Retainers + tools + list cost they enter |
| Meetings booked / month | count | Their number or estimate |
| Show rate (held ÷ booked) | % | UI default **45%** (honest no-show bleed); labeled editable — not a guarantee. Avoid soft 60%+ / high-booked first paint (understates cost per held) |
| Average pipeline value per held meeting | currency | Or average closed deal × win rate — user chooses one mode |
| Optional: meetings from other sources | count | So outbound isn’t credited for everything |

### 5.3 Outputs (shown immediately, free)

- **Held meetings / month** = booked × show rate  
- **Cost per held meeting** = spend ÷ held  
- **Implied pipeline / month** = held × pipeline value per held  
- **Rough ROI signal** = pipeline ÷ spend (labeled *illustrative*; not a promise)

Publish the formula on the page. Use a realistic reply-rate footnote (~3.43% platform-wide from research) only as context for “why booked ≠ held,” not as a hidden multiplier unless the user opts into an advanced mode.

### 5.4 Gate

- Immediate results on-page.  
- **Email (or WhatsApp)** unlocks: printable/PDF breakdown, assumption list, and CTA to book a package conversation.  
- No hard sell wall before first numbers.

### 5.5 Integrity

- Do not claim AgencyBAK historical averages we don’t have.  
- Label every default.  
- No “you’re losing $X” scare copy without user-entered bases (Owner.com litigation lesson).

## 6. Marketing site

### 6.1 Content sources

- Packages: `docs/artifacts/packages/`  
- Capabilities: `docs/artifacts/services/`  
- Motion: `docs/superpowers/specs/2026-10-26-cinematic-pans-prototype-design.md`  
- Prices: USD starting bands only; “from” language; pilot 60–90 days → month-to-month

### 6.2 Evolution path

| Phase | What |
|-------|------|
| Now | Static `site/` prototype |
| v0 public | Astro or Next static/marketing routes *or* Vite+React public pages sharing design tokens — pick one framework in implementation plan; prefer SSR/SSG for SEO on package pages |
| Design | Keep ink `#0E1114` / paper `#F3F0E8` / steel `#3D5A6C` until brand lock; cinematic pans unchanged |

## 7. Client results dashboard

### 7.1 v0 (minimum honest)

- Client login (Supabase Auth).  
- Manual or CSV weekly entry: contacted, replied, booked, **held**, pipeline added, closed (optional).  
- Simple charts: booked vs held trend; cost per held if spend entered.  
- Read-only share link for owner optional.

### 7.2 v0.1

- Sync from HubSpot / Zoho / GHL meetings + deal stages where API access exists.  
- Deliverability panel (bounce/complaint) when Instantly/Smartlead connected.  
- Weekly AI-written summary email (coaching layer post-transfer).

### 7.3 Buy vs build

| Build | Buy |
|-------|-----|
| Calculator | Stripe (invoices when D7 ready) |
| Results metrics UI | Cal.com / Calendly booking |
| Auth + data model (Supabase) | Portal files/chat (Assembly / SuiteDash) if needed before custom portal |

## 8. Stack (D6 draft-accepted)

| Layer | Choice |
|-------|--------|
| Public site | SSG/SSR framework TBD in plan (Astro *or* Next) sharing tokens with app |
| App / tool / dashboard | React, TypeScript, Vite, Tailwind (PortalFBR stack) |
| Backend / auth / DB | Supabase |
| Billing | Stripe (after entity D7) |
| Booking | Cal.com or Calendly |
| Hosting | Vercel/Netlify + Supabase region TBD with D7 data rules |

## 9. Success criteria

- [ ] Visitor completes calculator and sees cost-per-held without account.  
- [ ] Email gate delivers breakdown; lead stored for follow-up.  
- [ ] Packages page shows three SKUs with USD starting bands and terms.  
- [ ] Client can log held vs booked for at least one engagement (manual OK).  
- [ ] No PE-floor pricing; copy stays Main Street / build-and-transfer.  
- [ ] `prefers-reduced-motion` still honored on public site.

## 10. Open (blocked on D7 / later)

- Invoicing entity, currencies, Arabic/RTL.  
- Exact public domain and brand lock.  
- Food-specific catering calculator as tool #2.  
- Gulf e-invoicing partner motion.

## 11. Implementation order (after this spec)

1. Implementation plan under `docs/superpowers/plans/`.  
2. Public site content pages from artifacts + calculator UI.  
3. Supabase lead capture for gated PDF.  
4. Dashboard shell with manual held/booked.  
5. Harden copy/prices after first sales calls (D5).
