# Discovery questions: agency + webapp

Status: open. Drafted 2026-10-22 from the competitor research in
`reports/Apero Advisors competitive landscape.md`. Write answers under each question
(or reply in chat) and we turn them into `docs/DECISIONS.md` and a webapp plan.

## What we already know (from you)

- **Markets:** US & Canada, UK & Ireland, EU, Australia & NZ, and the Gulf (GCC). Not the Pakistan local market.
- **Ideal clients:** food businesses (restaurants, cafés, food trucks/carts), B2B service firms,
  traditional SMEs (manufacturing, logistics, construction, distribution), local/consumer SMBs
  (clinics, real estate, home services, ecommerce). Not B2B SaaS.
- **Services:** outbound & lead gen, GTM engineering (Clay, n8n, AI workflows), CRM & RevOps,
  GTM strategy, websites, paid ads, SEO, AI automation.
- **Direct competitor:** Apero Advisors (aperoadvisors.com). Their site text is still to be pasted.

## Answer these five first

These five decide the shape of the webapp.

1. **What is the webapp's first job?** Rank these options:
   - a) A marketing site that wins leads, with free tools such as graders and assessments.
   - b) A client portal: live results, deliverables, approvals, invoices.
   - c) An internal operating system: our own pipeline, delivery tracking, team workload.
   - d) A storefront where clients buy fixed-price packages online.
   - e) A software product SMBs pay for on its own, for example a restaurant growth grader plus catering CRM.
2. **Which one or two client types do we lead with?** The research suggests three openings no competitor covers well:
   - Food businesses' B2B revenue: catering, corporate accounts, events. Platforms such as Owner.com and Popmenu own the consumer side; almost nobody runs catering and corporate outbound plus CRM for independent restaurants.
   - Traditional SMEs (manufacturing, logistics, wholesale, construction) using Clay-grade data and buying signals. No Clay-style agency serving these sectors turned up in a targeted search.
   - Gulf SMEs: Zoho/Odoo plus WhatsApp plus e-invoicing deadlines (KSA ZATCA wave due 1 Feb 2027; UAE SME phase from mid-2027). No GCC agency combining CRM, WhatsApp, outbound and automation was found.
3. **Who logs in?** Prospects (free tools), client owners, client staff, our team, partner agencies or white-label resellers?
4. **Will we publish prices?** Few competitors do, and buyers complain about opaque pricing, long contracts and paying for meetings that never happen. Options:
   - fixed-price packages on the site
   - month-to-month or a 30–90-day pilot
   - pay per *held* (not just booked) meeting
5. **Timeline and budget:** when do you want a first usable version live, and who builds it? Just us, or also Codex, as on PortalFBR?

## The agency

6. **Identity:** agency name, brand and domain? Is "BAK" the brand?
7. **Legal setup:** which entity invoices clients (US LLC, UK Ltd, UAE free zone, Pakistan with PSEB registration)? This decides the currencies, Stripe availability, tax and contract terms.
8. **Team:** headcount, roles and skills. Which tools do people know: Clay, n8n, HubSpot, Zoho, GoHighLevel, web dev, Google/Meta ads, Arabic?
9. **Tools already paid for:** HubSpot partner account, GoHighLevel agency plan, Clay, Instantly/Smartlead, Apollo, others?
10. **Partner status:** HubSpot Solutions Partner tier, Zoho partner, Clay Expert, GHL? Any planned?
11. **Clients today:** how many, which verticals and countries, average monthly value? Which two or three results could we publish with numbers?
12. **Pricing today:** retainers, projects or hourly? Typical amounts? Market benchmarks for comparison:
    - HubSpot small-business setup: $2k–$15k
    - Outbound retainers: $3k–$15k/mo in the US, £2k–£6k/mo in the UK
    - Clay/GTM-engineering retainers: median $5k–$8k/mo
    - GHL bundles resold to local businesses: $297–$1,500/mo
13. **Positioning vs Apero:** Apero sells "GTM engineering for complex markets" to US B2B, PE-backed companies and investment funds, and wins work through the founder's podcasts and Clay courses. Do we want to be the "Main Street / SME" version of that (same engineering, packaged for owners), or something else?
14. **Who sells:** you on sales calls, a closer, or partners such as fractional CMOs and coaches?
15. **Other competitors:** which agencies do you actually lose deals to, besides Apero?

## The webapp: features

16. **Lead-magnet tool:** which free tool should we build first? Candidates from the research:
    - *Restaurant/Local Presence Grader*: a score out of 100 plus an estimate of lost revenue (the Owner.com pattern). It needs a published, fact-based scoring method, because Owner.com was sued over its grader.
    - *Catering & Corporate Revenue Calculator* for food businesses.
    - *CRM Health Check* (a questionnaire, not "connect your CRM"; many SMB owners have no CRM).
    - *Cold-email deliverability test.*
    - *Gulf e-invoicing and CRM readiness check.*
17. **Gating:** show the score free and put the detailed report behind an email address? Or ask for phone and booking up front?
18. **Client dashboard data sources:** which do we pull from first?
    - HubSpot, Zoho, GoHighLevel
    - Instantly/Smartlead
    - Google Ads, Meta, GA4
    - Google Business Profile
    - Toast/Square (POS)
    - Calendly or HubSpot meetings
19. **Dashboard focus:** lead with booked vs *held* meetings, pipeline value and revenue won? Research shows no outbound agency clearly separates booked from held meetings.
20. **AI features:** AI-written weekly results summary, AI audit reports, an assistant clients can ask about their results? Which matters most?
21. **Client portal basics:** messaging, file sharing, approvals, onboarding forms, contracts, invoices. Build all of it, or buy a portal (Assembly, ManyRequests, SuiteDash: $19–$399/mo) and build only the results dashboard and free tools? The research suggests this hybrid.
22. **Payments:** Stripe, Wise, bank transfer? Which currencies at launch: USD, GBP, EUR, AUD, AED, SAR?
23. **Languages:** is Arabic (right-to-left) needed at launch for Gulf clients, or later?
24. **WhatsApp:** should leads and clients be able to reach us on WhatsApp from the site? It is the expected channel in the Gulf.
25. **White-label:** would clients or partner agencies ever get the app under their own brand?

## The webapp: build

26. **Stack:** reuse the PortalFBR stack (React 19, TypeScript, Vite, Tailwind, Supabase, NestJS)? Note: a public marketing site needs good SEO. That usually means a static or server-rendered framework (for example Astro or Next.js) for the public pages, with the Vite app used for the logged-in portal.
27. **Data location and privacy:** clients in the EU/UK (GDPR) and UAE/KSA (PDPL) affect where data is stored (Supabase region) and how forms collect consent. Any client already asking about this?
28. **Design:** existing logo, colours, fonts? Sites you admire?
29. **Content:** case studies, testimonials, client logos we can show? Your photo and story for an About page?
30. **Accounts:** domain registrar, Google Workspace, an analytics account, a CRM for the agency itself?

## Things you said you'd send

- [ ] Apero Advisors website text or screenshots (homepage, services, about, case studies, pricing)
