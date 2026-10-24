# Decisions

Status of the owner decisions that shape the agency positioning and the webapp. Each one comes
from the research in `reports/Apero Advisors competitive landscape.md` and maps to a question
in `docs/DISCOVERY_QUESTIONS.md` (Q#).

All decisions below are **pending** (drafted 2026-10-22, saved 2026-10-24). Recommendations are
Claude's, based on the research. Record the owner's choice and date when decided.

## Decide first

### D1. Positioning against Apero Advisors (Q13)
- **Context:** Apero sells GTM engineering (account lists, buying signals, HubSpot, calling-led
  outbound) to PE-backed US B2B companies and investment funds, about $20k per engagement, won
  through founder podcasts and Clay courses.
- **Recommendation:** be the "Main Street" version: same engineering, packaged for owner-run
  SMEs, with published prices. Do not compete head-on for PE portfolio companies.
- **Decision:** pending

### D2. Lead client segments: pick one or two (Q2)
- **Options (openings found in the research):**
  - a) Food businesses' B2B revenue: catering, corporate accounts, events
  - b) Traditional SMEs and B2B service firms: "we build your CRM and fill it"
  - c) Gulf SMEs: CRM + WhatsApp, timed to e-invoicing deadlines (KSA 1 Feb 2027; UAE SMEs mid-2027)
  - d) Local/consumer SMBs: trust-first terms (short pilots, client-owned accounts)
- **Recommendation:** lead with a) + b). Add c) later through a Zoho or Odoo implementation
  partner. Avoid launching all four at once (reads as generalist).
- **Decision:** pending

### D3. The webapp's first job (Q1)
- **Recommendation:** a marketing site with one free tool and published packages, plus a client
  results dashboard (booked vs held meetings, pipeline, revenue). Defer the internal ops tool,
  online storefront, and standalone software product.
- **Decision:** pending

## Decide next

### D4. First free tool (Q16, Q17)
- **Depends on D2.** Food: local presence grader (score out of 100 + estimated lost revenue,
  fact-based published method) or catering revenue calculator. B2B: outbound ROI calculator or
  CRM health self-assessment.
- **Recommendation:** show the score free; put the detailed report behind email or WhatsApp.
- **Decision:** pending

### D5. Publish prices and terms (Q4, Q12)
- **Recommendation:** publish starting prices; 30–90-day pilot, then month-to-month; optional
  pay-per-held-meeting. See the working price ladder in the report.
- **Decision:** pending

### D6. Build vs buy (Q21, Q26)
- **Recommendation:** build the free tool and the results dashboard on the PortalFBR stack (React,
  TypeScript, Vite, Tailwind, Supabase), with a static or server-rendered framework for public
  SEO pages. Buy billing (Stripe), booking (Cal.com/Calendly), and portal basics (files, chat).
- **Decision:** pending

### D7. Practical setup (Q5, Q7, Q22, Q23)
- Which entity invoices clients (US LLC, UK Ltd, UAE, Pakistan/PSEB): sets currencies and payments
- Timeline, budget, and who builds
- Arabic/right-to-left at launch, or later
- **Decision:** pending

## Open items from the owner
- [ ] Fix GitHub access for AgencyBAK so local commits can be pushed
- [ ] Paste Apero Advisors site text to confirm the competitor profile
