# Apero services deep dive (26 Oct 2026)

> Primary pages read: [GTM engineering services](https://aperoadvisors.com/services/gtm-engineering), [Pricing](https://aperoadvisors.com/pricing), [Private equity](https://aperoadvisors.com/private-equity), [Apero vs Clay agency](https://aperoadvisors.com/compare/apero-vs-clay-agency) (updated Oct 24, 2026), [FAQ](https://aperoadvisors.com/resources/faq) (updated Oct 24, 2026), [HubSpot stack](https://aperoadvisors.com/stack/hubspot), [Salesforce stack](https://aperoadvisors.com/stack/salesforce). Complements `apero_advisors_footprint.md` §2 and §6.

## Takeaway

Apero’s service is **not** “Clay lists” or “appointment setting.” It is a **four-layer commercial operating system** (accounts, channels, messaging, CRM/system) delivered as **build → operate → transfer**, month-to-month, with a hard floor of **$7,500/mo**. Clay is the default for TAM/enrichment; durable logic (reply agents, CRM health, routing) lives in **GitHub repos built with Cursor/Claude Code**. Named internal apps they reuse for clients: Network Miner, reply agent, CRM Health, inbound RevOps, Slack CRM (MUTHUR), Pre-CRM TAM store, EmailBison ops. Cold email uses **EmailBison** (gated) + **EmailGuard**, never the client’s main domain; **Lemlist** for warm LinkedIn/inbound; dialers **Nooks or Kixie**. CRMs: HubSpot, Salesforce, Attio. Published proof now includes a third vertical case: environmental services at **7,500+ calls/week, 7.5%+ connect**. Offices claimed: New York, Charlotte, Salt Lake City, Lahore.

## 1. Engagement model and packaging

### Cited Findings
- Model: **build, operate, transfer**. Embedded or semi-embedded; dedicated operators; **24-hour response SLA**; engagements **month to month**. Small client roster. — [FAQ](https://aperoadvisors.com/resources/faq)
- Not a lead-gen/appointment-setting agency. Builds and hands off the commercial system; cold email for select clients only; dedicated SDR/calling is a **separate line item**. Client chooses build-in-their-accounts vs Apero’s, with any piece transferable. — [FAQ](https://aperoadvisors.com/resources/faq); [vs Clay agency](https://aperoadvisors.com/compare/apero-vs-clay-agency)
- Start sequence: (1) operating truth — economics, buyer map, systems, data; (2) first defensible bounded motion; (3) instrument in CRM; (4) hand off docs/training and keep current. — [Services](https://aperoadvisors.com/services/gtm-engineering)
- If offer unproven: test ~**50 hand-written emails** before scaling. — [vs Clay agency](https://aperoadvisors.com/compare/apero-vs-clay-agency)
- Hire vs Apero: hire when work is permanent and leadership can manage the role; Apero when systems must exist before scoping a hire; many do both (Apero builds, helps interview, hands off). — [FAQ](https://aperoadvisors.com/resources/faq)
- Does not replace internal GTM engineer or operating team; embedded retainers = ongoing engineering capacity. — [FAQ](https://aperoadvisors.com/resources/faq); [PE](https://aperoadvisors.com/private-equity)

### Single-Channel Build (from $15k / $7.5k/mo)
One bottleneck channel after GTM audit, plus strategic consulting (ICP/target accounts, weekly pipeline review, second opinion on hires/tools/vendors, next-build plan). Channels: phones | cold email | CRM | data/TAM | LinkedIn | ads (retargeting feedback loop). — [Pricing](https://aperoadvisors.com/pricing); [vs Clay agency](https://aperoadvisors.com/compare/apero-vs-clay-agency)

### Embedded GTM Engineering (from $50k+ / $20k+/mo)
Full commercial layer across channels, legacy systems, portcos, departments. Includes seller training/enablement, vertical data engines, board reporting, agent repos, etc. — [Pricing](https://aperoadvisors.com/pricing)

### Usually separate
SDR/calling capacity; data licenses / Clay credits; dialer seats (pass-through); ad spend / paid media management. — [Pricing](https://aperoadvisors.com/pricing)

### When they tell you to buy someone else
- Clay agency better if ICP clear, offer converts, need lists only, already have CRM + sending + team, or budget **below $7,500/mo**. — [vs Clay agency](https://aperoadvisors.com/compare/apero-vs-clay-agency)
- Appointment setter better if you want meetings without owning domains/CRM/stack, or to test a market before investing in systems. — [FAQ](https://aperoadvisors.com/resources/faq)

## 2. Working stack and named products

### Cited Findings
**Data / TAM**
- Default: Clay for TAM, enrichment, list ops (deterministic, audit every row). Also Serper + company websites. Deduplicate → qualify from site/job posts → find buyers/influencers → **second independent email validation** → tier **1–4** → executive sign-off before CRM load or send. — [vs Clay agency](https://aperoadvisors.com/compare/apero-vs-clay-agency)
- Pre-CRM store: big TAMs stay outside CRM until an account “earns a row.” — [HubSpot stack](https://aperoadvisors.com/stack/hubspot); [FAQ](https://aperoadvisors.com/resources/faq)

**Send / dial**
- Cold email: **never main domain**; multi-domain rotating warmed inboxes on **EmailBison** (application-gated sequencer); **EmailGuard** for SPF/DKIM/DMARC, blacklists, inbox placement; campaigns segmented by **Proofpoint/Mimecast**; stagger same-domain sends; suppress customers; auto-pause on high bounces. — [vs Clay agency](https://aperoadvisors.com/compare/apero-vs-clay-agency); [FAQ](https://aperoadvisors.com/resources/faq)
- **Lemlist**: warm LinkedIn from Network Miner, inbound routing, single-threaded LinkedIn DMs in ABM, reply drafts from playbooks — not cold scale. Newsletter via **Resend**, not Lemlist. — [FAQ](https://aperoadvisors.com/resources/faq)
- Dialers: **Nooks or Kixie** (homepage still shows Kixie/Smartlead/HubSpot Sequences as example HubSpot shop). — [PE](https://aperoadvisors.com/private-equity); [Services](https://aperoadvisors.com/services/gtm-engineering)

**Code / agents**
- Durable systems in Cursor/Claude Code → GitHub: Network Miner, outreach reply agent, inbound RevOps, **MUTHUR** (Slack as CRM UI), CRM Health, Pre-CRM TAM store, EmailBison ops. — [Services](https://aperoadvisors.com/services/gtm-engineering); [FAQ](https://aperoadvisors.com/resources/faq)
- **Grok Bot** for scheduled jobs across Monday, Fireflies, Slack, Lemlist, EmailBison; can deploy Grok Bot, Duet, Dots, or Muse in customer env. — [Services](https://aperoadvisors.com/services/gtm-engineering); [FAQ](https://aperoadvisors.com/resources/faq)
- Reply agent **does not auto-send**; drafts from playbook, stops in Slack for human send. — [FAQ](https://aperoadvisors.com/resources/faq)
- AI CRM writes: mirror human permissions; snapshot before enrichment for rollback; separate write key; human preview/confirm per batch. — [FAQ](https://aperoadvisors.com/resources/faq); [HubSpot stack](https://aperoadvisors.com/stack/hubspot)

**CRM**
- HubSpot, Salesforce, **Attio**. Prefer Salesforce when Claude Code/CLI in the loop; stay on HubSpot if already live. — [FAQ](https://aperoadvisors.com/resources/faq)
- Salesforce handoff: coding agent walks Apex/flows/config → **agent handoff instructions**. — [FAQ](https://aperoadvisors.com/resources/faq); [vs Clay agency](https://aperoadvisors.com/compare/apero-vs-clay-agency)
- HubSpot example: environmental services — HubSpot on legacy platform + Nooks calling + board reporting; **7,500+ calls/week, 7.5%+ connect**. — [FAQ](https://aperoadvisors.com/resources/faq); [HubSpot stack](https://aperoadvisors.com/stack/hubspot)
- Salesforce examples: site-services rebuild (role workspaces, SLAs, Reply.io sync, qualification gates); environmental services **pricing/quoting → HubSpot**. Stayterra short-term rental work referenced. — [Salesforce stack](https://aperoadvisors.com/stack/salesforce)

### Measurement
In client CRM by account and tier: contacted → replied → meeting → pipeline/revenue. Replies = signal; qualified opps/revenue = outcome. Single-Channel includes weekly pipeline review; Embedded adds board-ready reporting/forecasting; SDR motion judged on whether it pays for itself. — [vs Clay agency](https://aperoadvisors.com/compare/apero-vs-clay-agency)

## 3. Published proof and geography (service evidence)

### Cited Findings
- **Trackstar:** TAM vs dozens of use cases; cold + conference outbound; ~seven figures pipeline; CEO rated 10/10; **referred 15+ companies**; met 12+ Clay agencies before choosing Apero. — [FAQ](https://aperoadvisors.com/resources/faq); [vs Clay agency](https://aperoadvisors.com/compare/apero-vs-clay-agency)
- **Private credit fund:** ~35% reply; ~150 new industry relationships; **>$300M** deal volume attributed. — [FAQ](https://aperoadvisors.com/resources/faq)
- **Environmental services (anonymized):** HubSpot + legacy + calling; 7,500+ calls/week; 7.5%+ connect. — [FAQ](https://aperoadvisors.com/resources/faq)
- **Short-term rental software:** custom data app — listing address resolution, owner/PM enrichment, booking-rate context across ~3,000 properties (~97% address accuracy). — [vs Clay agency](https://aperoadvisors.com/compare/apero-vs-clay-agency)
- Self-claim: ~**50 engagements** over ~2 years. — [vs Clay agency](https://aperoadvisors.com/compare/apero-vs-clay-agency)
- Locations: “based in New York, with offices in Charlotte, Salt Lake City, and Lahore.” — [vs Clay agency](https://aperoadvisors.com/compare/apero-vs-clay-agency)
- Holley on in-house GTME cost: **$180k–$300k/yr** “too much to pay someone who only sends email.” — [FAQ](https://aperoadvisors.com/resources/faq)

## 4. Implications for AgencyBAK services packaging

### Inferences
- **Below $7.5k/mo is explicitly “not Apero.”** That is the Main Street price band they vacated in writing.
- Compete on **full system + transfer** at SME prices, or on **one channel** (CRM fill, WhatsApp, catering outbound) with client-owned domains/CRM — not on Clay tables alone (Apero already argues Clay agencies are cheaper for that).
- Copy their measurement honesty (held meetings / pipeline in *client* CRM) without their PE floors.
- Stack lesson: publish a clear “never from main domain / client owns accounts” deliverability and ownership policy — trust differentiator vs appointment setters.
- Vertical proof exists outside pure SaaS (environmental services, short-term rental data app) — still not food or Gulf, but “boring B2B” is real.

### Gaps
- Exact SOW templates, hour allocations, and sample agent-handoff docs not public.
- Smartlead still on homepage example stack; FAQ emphasizes EmailBison/Lemlist — stack may have shifted; confirm per engagement.
- Charlotte / Salt Lake offices not independently verified beyond site copy.
- Named HubSpot/Salesforce case study pages not fully pasted into this file (stack pages summarize).
