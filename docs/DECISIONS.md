# Decisions

Status of the owner decisions that shape the agency positioning and the webapp. Each one comes
from the research in `reports/Apero Advisors competitive landscape.md` and maps to a question
in `docs/DISCOVERY_QUESTIONS.md` (Q#).

Recommendations are Claude's, based on the research. Owner choices recorded when decided.

## Decide first

### D1. Positioning against Apero Advisors (Q13)
- **Context:** Apero sells GTM engineering (account lists, buying signals, HubSpot, calling-led
  outbound) to PE-backed US B2B, vertical vendors and funds. Site-published floors (2026-10-25):
  Single-Channel from $15k / $7.5k/mo; Embedded from $50k+ / $20k+/mo. Peers (FastForward,
  Subagent, FullFunnel, Advanced Client, The Kiln/2X) crowd the same PE seat. Capacity builders
  (5050 Growth, Node8, GTM11, GTM Engineer School, Maven) productize train-the-team and
  build-and-transfer.
- **Recommendation:** be the "Main Street" version: same engineering, packaged for owner-run
  SMEs, with published prices. Do not compete head-on for PE portfolio companies. Apero’s own
  compare page sends buyers **below $7,500/mo** (or “lists only”) to Clay agencies — that is
  the band we can own. Differentiate with **capacity building** — short build, client-owned
  stack (domains, CRM, Clay), owner/operator training, CRM measurement of held meetings — so
  systems stick without a $20k/mo embedded engineer.
- **Decision:** **Accepted 2026-10-26.** Main Street GTM vs Apero/PE boutiques. Own the band
  below ~$7.5k/mo with build-and-transfer, client-owned stack, held-meeting truth.

### D2. Lead client segments: pick one or two (Q2)
- **Options (openings found in the research):**
  - a) Food businesses' B2B revenue: catering, corporate accounts, events
  - b) Traditional SMEs and B2B service firms: "we build your CRM and fill it"
  - c) Gulf SMEs: CRM + WhatsApp, timed to e-invoicing deadlines (KSA 1 Feb 2027; UAE SMEs mid-2027)
  - d) Local/consumer SMBs: trust-first terms (short pilots, client-owned accounts)
- **Recommendation:** lead with a) + b). Add c) later through a Zoho or Odoo implementation
  partner. Avoid launching all four at once (reads as generalist).
- **Decision:** **Accepted 2026-10-26.** Lead with **a) food B2B** and **b) traditional SMEs /
  B2B services**. Gulf (c) and local SMB (d) deferred.

### D3. The webapp's first job (Q1)
- **Recommendation:** a marketing site with one free tool and published packages, plus a client
  results dashboard (booked vs held meetings, pipeline, revenue). Defer the internal ops tool,
  online storefront, and standalone software product. The dashboard (and a weekly AI summary)
  can act as the ongoing coaching layer after a build-and-transfer engagement — capacity
  building without a permanent embed.
- **Decision:** **Accepted 2026-10-26.** Marketing site + one free tool + published packages +
  client results dashboard (held vs booked). Ops tool, storefront, and standalone SaaS deferred.
  Prototype shell exists at `site/`.

## Decide next

### D4. First free tool (Q16, Q17)
- **Depends on D2.** Food: local presence grader (score out of 100 + estimated lost revenue,
  fact-based published method) or catering revenue calculator. B2B: outbound ROI calculator or
  CRM health self-assessment.
- **Recommendation:** show the score free; put the detailed report behind email or WhatsApp.
  With D2 = a+b, ship **two thin tools** over time — start with **outbound ROI / cost-per-held
  meeting calculator** (serves b immediately; food uses same held-meeting language) OR catering
  revenue calculator if food pipeline is the first sales motion.
- **Decision:** **Accepted 2026-10-26.** First tool = **cost-per-held meeting / outbound ROI
  calculator**. Results free on-page; detailed breakdown behind email (or WhatsApp). Catering
  revenue calculator deferred as tool #2. Spec: `docs/superpowers/specs/2026-10-26-webapp-v0-design.md`.

### D5. Publish prices and terms (Q4, Q12)
- **Recommendation:** publish starting prices; 30–90-day pilot, then month-to-month; optional
  pay-per-held-meeting. See the working price ladder in the report. Apero and several peers now
  publish directional floors — opacity is no longer the category norm at the premium end.
- **Decision:** **Draft accepted 2026-10-26** — three named packages with USD starting bands in
  `docs/artifacts/packages/`. Publish as “from” starting prices on the site; test in sales before
  treating as hard quotes. Multi-currency (GBP/EUR/AUD/AED) and legal entity (D7) remain open.

### D6. Build vs buy (Q21, Q26)
- **Recommendation:** build the free tool and the results dashboard on the PortalFBR stack (React,
  TypeScript, Vite, Tailwind, Supabase), with a static or server-rendered framework for public
  SEO pages. Buy billing (Stripe), booking (Cal.com/Calendly), and portal basics (files, chat).
- **Decision:** **Draft accepted 2026-10-26.** Build calculator + results UI on PortalFBR stack;
  SSG/SSR for public SEO pages (Astro or Next — pick in implementation plan). Buy Stripe, Cal.com
  / Calendly, and portal files/chat. Stripe go-live still waits on D7 entity.

### D7. Practical setup (Q5, Q7, Q22, Q23)
- Which entity invoices clients (US LLC, UK Ltd, UAE, Pakistan/PSEB): sets currencies and payments
- Timeline, budget, and who builds
- Arabic/right-to-left at launch, or later
- **Decision:** pending

## Open items from the owner
- [ ] Fix GitHub access for AgencyBAK so local commits can be pushed
- [x] Paste / read Apero Advisors site text to confirm the competitor profile (done 2026-10-25)
- [x] Accept D1–D3 Main Street pack (done 2026-10-26)
- [x] Draft three Main Street packages (done 2026-10-26) — see `docs/artifacts/packages/`
- [x] Accept D4 held-meeting ROI calculator + webapp v0 design (done 2026-10-26)
- [x] Draft-accept D6 build vs buy (done 2026-10-26)
