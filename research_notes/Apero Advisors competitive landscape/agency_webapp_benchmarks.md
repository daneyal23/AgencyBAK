# Agency web app benchmarks: interactive tools, client portals, reporting, productized storefronts and build-vs-buy (SMB-focused growth agencies, October 2026)

> **Research conditions (read first).** Compiled 22 Oct 2026. WebFetch could not resolve any hostname in this environment (`getaddrinfo ENOTFOUND` on aperoadvisors.com, wayfront.com, assembly.com, manyrequests.com). As a result, **no page was read in full**. Every finding below comes from WebSearch result summaries, which are model-generated digests of indexed pages. Treat exact prices and quotes as "per the search index" and re-check them on the live page before publishing. Partway through, the session's shared web-search quota (200 per turn across all agents) ran out. Four topics were never searched: AI receptionists, AI SDR outcomes, WhatsApp/GCC usage data, and GDPR/PDPL specifics. They are listed under **Gaps** rather than filled in from memory. Where an example comes from a large or enterprise agency or vendor, it is flagged **[ENTERPRISE/LARGE]**. Where the source is a competitor's comparison page, it is flagged **[COMPETITOR SOURCE]**.

---

## 1. Lead-generating interactive tools (assessments, CRM health checks, ROI calculators, website/local-SEO graders, review scanners, deliverability tests, AI audits): examples and gating

### Takeaway
The tools that generate the most leads in this space are **instant, personalised "graders" that score the prospect's own business and show a problem with a dollar figure attached**. The clearest example is Owner.com's restaurant grader. A grader asks for email and phone, then pushes the prospect to a 15–20-minute call. Self-assessment questionnaires are cheaper to build but weaker, and OAuth "connect your CRM" graders produce the richest data but need a lot of trust. For an SMB/food-business buyer, a **local-presence or review grader** fits better than a "GTM readiness" assessment, which is aimed at B2B tech buyers.

### Cited Findings

**Restaurant / local-business graders (most relevant to food ICP)**
- **Owner.com Restaurant Website Grader / "AI Restaurant Grader"** (a restaurant SaaS, not an agency, but the closest model to copy).
  - Output: an "Online health grade" out of 100, with sub-scores for Search Results, Website Experience, Local Listings and "Who's beating you on Google", plus a dollar estimate of lost sales ("Fixing them with Owner could boost your sales by $x/year").
  - Gate: asks for name, email, cellphone, restaurant name and number of locations, then offers a 20-minute demo with an "Owner Specialist" to review the full report. — [Owner.com demo grader](https://www.owner.com/demo-quiz-grader)
- **The Owner grader has drawn lawsuits.** Sacra reports that Popmenu and ChowNow both sued, alleging the grader gives lower scores to sites built on their platforms. A competitor critique says the dispute is over graders that score unreadable sites as failures. — [Sacra](https://sacra.com/research/hubspotification-of-mom-pop-restaurants/); [Blizzfull "Second Opinion" (opinionated competitor piece)](https://blizzfull.com/second-opinion)
- **Owner.com scale.** Sacra estimates ARR of about $81M at end of November 2025, at roughly $499/month per independent restaurant. Grader-led acquisition can scale in the restaurant vertical. — [Sacra](https://sacra.com/research/hubspotification-of-mom-pop-restaurants/) **[LARGE VENDOR]**
- **Earlier precedent.** Upserve launched a free "Restaurant Marketing Grader" in June 2019, so restaurant graders are a long-established pattern. — [Restaurant Technology News, Jun 2019](https://restauranttechnologynews.com/2019/06/upserve-launches-free-restaurant-marketing-grader-tool/)

**Review / reputation scanners**
- **Grade.us "Review Scan"** produces an instant reputation report showing how a business appears on local review sites. — [scan.grade.us](https://scan.grade.us)
- **RecensioAI "Reputation Scan"** covers the Google profile, review count and a competitor comparison, with "No account needed". It is a funnel into a paid local-business platform. The site is hosted on `lovable.app`, which suggests a vibe-coded build. — [RecensioAI free review tools](https://recensio-ai.lovable.app/free-review-tools)
- **Prospecting-side variant.** A Twin.so agent template searches Google Maps for businesses below a rating threshold in chosen verticals and cities and scores them by severity. It finds outbound targets for reputation offers; it is not an inbound magnet. — [Twin.so bad-review lead hunter](https://twin.so/agents/bad-review-lead-hunter-reputation-management-prospects/)

**Website / SEO graders (embeddable, white-label)**
- **SEOptimer embeddable audit widget.**
  - Setup is an HTML snippet. The visitor enters a URL plus contact details and gets a white-label PDF report.
  - Leads go to an email alert and a searchable, exportable dashboard.
  - A competitor's blog claims "over 2,000 agencies" use it. — [Insites blog (competitor)](https://insites.com/blog/the-5-best-lead-generation-tools-for-digital-marketing-providers/); [Insites: white-label SEO audit for lead gen](https://insites.com/blog/how-agencies-use-a-free-white-label-seo-audit-tool-to-generate-leads-on-autopilot/)
- **Instant delivery.** Insites (vendor) argues that prospects who receive an instant, personalised audit are "significantly more engaged" than those told to expect a follow-up. This is a vendor claim with no data shown. — [Insites](https://insites.com/blog/how-agencies-use-a-free-white-label-seo-audit-tool-to-generate-leads-on-autopilot/)
- **MySiteAuditor.** A white-label embeddable SEO audit, listed at $49–$79/month (SaaS) and $500–$2,500/month (API). It has "no independent reviews" on G2, GetApp or Capterra, and its history and ownership are inconsistent across listings. — [CheckThat listing](https://checkthat.ai/brands/mysiteauditor)
- **HubSpot Website Grader Widget.** HubSpot offers its Website Grader as an embeddable widget so Solutions Partners (agencies) can generate leads straight into their own CRM. — [HubSpot Solutions Partner resource](https://www.hubspot.com/solutions-partner-resource-center/website-grader-widget?afsrc=1) **[ENTERPRISE VENDOR]**

**AI-search / AEO audits (new 2026 category)**
- **HubSpot AEO Grader.**
  - Free, one-time snapshot of how ChatGPT, Gemini and Perplexity describe a brand. It classifies the brand as Leader, Challenger or Niche Player against competitors.
  - Gating conflicts across sources: one review says the detailed report needs an email, another says no login is needed.
  - HubSpot launched a paid standalone **HubSpot AEO** product on **14 April 2026** at about €49/month ($50 in one source). — [Salesdorado review](https://salesdorado.com/en/ai/review-hubspot-aeo-grader/); [HubSpot AEO Grader](https://www.hubspot.com/aeo-grader/ai-search-tool?iframe=yes); [Insidea](https://insidea.com/blog/hubspot/hubspots-aeo-grader/) **[ENTERPRISE VENDOR]**

**CRM health checks**
- **AskElephant Free HubSpot CRM Health Grader** (vendor). Connects with one click via HubSpot OAuth and returns a CRM hygiene score plus an "AI-readiness" score. Free, no card required. — [AskElephant grader](https://www.askelephant.ai/tools/free-hubspot-crm-health-grader); [CRM Health Scanner](https://www.askelephant.ai/tools/crm-health-scanner)
- **Orange 142 Free HubSpot Health Check** (agency). Reviews workflows, contacts, companies, deals, tickets and the Marketing, Sales and Service Hubs. It is read-only, but setup needs Super Admin rights or permission to install marketplace apps, which makes the gate heavy. — [Orange 142](https://orange142.com/orange-142-hubspot-portal-audit)
- **MO Agency 10-Point HubSpot Portal Health Check** (agency). A self-assessment of 10 questions with a score out of 20, covering ownership, lifecycle stages, pipeline reporting, workflows, data quality and integrations. — [MO Agency](https://www.mo.agency/hubspot/rescue-rehab/hubspot-portal-audit-health-check)
- **Prism Global Marketing** also lists a HubSpot health-check offer; no details were indexed. — [Prism](https://www.prismglobalmarketing.com/hubspot-health-check)
- **Insycle CRM Data Grader** (HubSpot Marketplace app). Reports incomplete, duplicate, invalid and low-quality records. The listing references both a subscription and a free plan. — [HubSpot Marketplace listing](https://ecosystem.hubspot.com/marketplace/listing/crm-data-grader)

**GTM / growth-readiness assessments (B2B-oriented)**
- **The Starr Conspiracy GTM Strategy Readiness Assessment** (B2B marketing agency). Scores six dimensions from 0 to 4 each (0–24 total) and maps the total to four maturity levels with gap-closing actions. The scoring criteria are visible without running the tool. Gating was not confirmed. — [The Starr Conspiracy](https://www.thestarrconspiracy.com/insights/assessments/gtm-strategy-readiness-assessment) **[MID/LARGE B2B-tech agency]**
- **Upgrowth (India-based growth consultancy).**
  - "GTM Strategy Readiness Checker": readiness score plus improvement suggestions.
  - "GTM Execution Confidence Score": yes/no inputs, with a nudge to "partner with a GTM expert". — [Readiness Checker](https://upgrowth.in/ai-powered-tools/gtm-strategy-readiness-checker); [Execution Confidence Score](https://upgrowth.in/ai-powered-tools/gtm-execution-confidence-score)
- **Vasco AI Readiness Assessment** (vendor). Scores GTM data quality for AI and requires a CRM connection. — [Vasco](https://vasco.app/ai-readiness-assessment)
- **Demandbase AI ABM Readiness Assessment.** — [Demandbase](https://www.demandbase.com/resources/report/ai-abm-readiness-assessment/) **[ENTERPRISE VENDOR]**
- **Miro "Go-to-Market Readiness Score" template.** A workshop board across six pillars; not a lead magnet. — [Miro](https://miro.com/miroverse/gotomarket-readiness-score/)

**Outbound / cold-email ROI calculators**
- **LeadHaste (outbound agency).** A cold-email ROI calculator that compares outsourced outbound with an in-house SDR (salary, benefits, tooling, ramp) and outputs cost per meeting, LTV:CAC and 6- and 12-month ROI. — [LeadHaste](https://leadhaste.com/resources/tools/cold-email-roi-calculator)
- **Overloop** (vendor). Industry-specific defaults (agencies/services: 38% opens, 5.1% replies), ramp-up period, channel comparison, break-even view and an exportable "business case". — [Overloop ROI calculator](https://overloop.com/tools/roi-calculator)
- **Instantly** (vendor). An AI-sales-agent ROI calculator that outputs cost per meeting, monthly pipeline, payback and annual ROI, with a "platform average reply rate of 3.43%".
  - Its guide suggests a 20% default close rate.
  - For service businesses it says to use the average first-year retainer as deal value. — [Instantly AI sales agent ROI calculator](https://instantly.ai/blog/ai-sales-agent-roi-calculator/); [Instantly cold email ROI guide](https://instantly.ai/blog/cold-email-roi-calculator-how-to-measure-revenue-impact-and-cost-per-meeting/)
- **Other free calculators** with the same funnel logic (sends → replies → meetings → deals → revenue):
  - [SuperSend](https://www.supersend.io/free-tools/cold-email-revenue-calculator)
  - [XGenious](https://xgenious.com/free-tools/cold-email-roi-calculator) (benchmarks: 5–15% reply, 2–5% meeting-booked rate, 20–30% close)
  - [FirstSales](https://firstsales.io/tools/cold-email-roi-calculator/)

**Deliverability / data free tools from GTM-engineering agencies**
- **ColdIQ (Clay-centric GTM agency).**
  - Free tools: Email Finder, Mobile Finder, Email Spam Checker, Find Similar Companies.
  - A free "GTM strategy report" gated by **work email** returns ICPs, campaigns, channels and next steps. Its comparison table sets this against agency retainers of "$3,000–$10,000+/mo".
  - ColdIQ says it builds these tools with Claude Code on third-party data APIs and that they "pull in both eyeballs and signups". — [ColdIQ free GTM strategy tool](https://coldiq.com/free-tools/gtm-strategy-for-b2b); [ColdIQ GTM report](https://coldiq.com/gtm_report); [ColdIQ: the funnel that books us 100 meetings every month](https://coldiq.com/blog/the-funnel-that-books-us-100-meetings-every-month)

### Inferences
- **Gating patterns.** Across examples there are three:
  - **(a) Score shown instantly, detail gated by email.** HubSpot AEO Grader, ColdIQ report, SEOptimer.
  - **(b) Full contact capture up front, then a call push.** Owner.com, which collects name, email, phone and locations before the 20-minute demo.
  - **(c) OAuth connect.** AskElephant, Orange 142, Vasco. Highest data value but highest friction, and probably unsuited to non-technical SMB owners, many of whom have no CRM at all.
- **Best fit for the client's ICP** (restaurants, cafés, local SMEs): an Owner.com-style **"local presence + reviews + AI-search visibility" grader**.
  - Input: Google Business Profile or restaurant name plus city.
  - Output: score out of 100, a competitor comparison and an estimated revenue at stake.
  - Gate: WhatsApp number or email to unlock the PDF, with a booking CTA.
  - For B2B-service-firm prospects, a **cold-outbound ROI / cost-per-meeting calculator** (LeadHaste/Overloop pattern) and a **lightweight CRM health self-assessment** (MO Agency pattern) are better fits.
- **Legal caution on graders.** The Owner.com lawsuits show that graders implying a competitor's product is defective carry litigation risk. Scores should reflect observable facts (review count, rating, response rate, NAP consistency, page speed) and state their methodology, as The Starr Conspiracy does.
- **Build cost is now low.** ColdIQ's Claude Code builds and RecensioAI's Lovable-hosted tools suggest a single developer can now ship these. On the client's React + Supabase stack, most of the effort is data-API cost (Google Places, review APIs, LLM queries), not front-end work.

### Gaps
- No conversion-rate data (visitor → lead → booked call) was found for any grader or calculator. All "engagement" claims are vendor-sourced.
- Couldn't confirm whether The Starr Conspiracy's assessment or LeadHaste's calculator are email-gated, because the pages couldn't be fetched.
- No email-deliverability test from an SMB-facing agency was indexed beyond ColdIQ's spam checker. Mail-tester, GlockApps and similar standalone tools weren't searched before the quota ran out.
- No restaurant-specific *agency* (as opposed to vendor) grader was found. Searches for restaurant-marketing-agency tools weren't run.

---

## 2. Agencies that built their own software (spin-outs, free tools, marketplace apps, white-label SaaS/GHL snapshots) and the growth effect

### Takeaway
The documented pattern is **an agency hits an internal operational pain, builds a tool, and the tool becomes a separate SaaS**. Examples are Belkins → Folderly for deliverability and Instantly's founders moving from agency to SaaS. GTM-engineering agencies now use **free micro-tools and APIs as top-of-funnel** (ColdIQ). SMB-focused agencies mostly productize through **white-label platforms**, chiefly GoHighLevel snapshots and SaaS Mode, rather than building from scratch. Hard growth metrics are scarce and mostly founder-reported.

### Cited Findings
- **Belkins → Folderly.**
  - Belkins (B2B lead-gen agency, co-founded 2017 by Vladislav Podoliako and Michael Maximoff) spun out Folderly in 2019, an AI email-deliverability platform for spam testing, health checks and reputation monitoring. — [ZoomInfo review (competitor)](https://pipeline.zoominfo.com/sales/folderly-review)
  - The trigger was Belkins' open rate dropping "from 80% to 10%" in spring 2019 after Google tightened mail-settings requirements. — [MC.today founder profile](https://mc.today/we-created-saas-email-marketing-solution-that-paid-off-from-the-start-why-our-customers-are-not-afraid-of-the-high-check-the-story-of-folderly/)
  - The Product Hunt launch cites "2+ million emails" sent by the agency over three years. — [Hunted.space / Product Hunt](https://hunted.space/product/folderly-2)
  - TrustRadius lists Folderly from **$120 per seat per month**, excluding setup fees. — [TrustRadius](https://www.trustradius.com/products/belkins-folderly) **[LARGE AGENCY]**
- **Instantly.ai (agency → SaaS pivot).**
  - Co-founder and CEO Raul Kaevand ran a lead-gen agency whose delivery costs rose as clients were added. The team built tooling and pivoted fully to SaaS, winding the agency down over about 3 months once consulting revenue reached roughly $10–15k MRR.
  - The interview reports $2.4M ARR and 2,900 customers at the time; the interview date wasn't shown in the index. — [Latka interview](https://blog.getlatka.com/?p=8970)
- **Reverse path (SaaS → agency).** Social Boost started as an Instagram-automation SaaS and became an agency after Instagram tightened its rules. — [Smartlead case study (vendor)](https://www.smartlead.ai/case-study/case-study-social-boost-by-joel-moss)
- **ColdIQ (GTM-engineering agency) productizing.**
  - Free tools built with Claude Code act as lead magnets.
  - The site banner promotes a "ColdIQ Unified API — one API for every GTM data source" (beta), which suggests a move into selling software or data infrastructure.
  - It publishes long-form guides such as "Million-dollar cold email agency 2026" and "Claude Code vs Cursor/Lovable/Codex for GTM". — [ColdIQ funnel post](https://coldiq.com/blog/the-funnel-that-books-us-100-meetings-every-month); [ColdIQ guide: million-dollar cold email agency](https://coldiq.com/guides/million-dollar-cold-email-agency-2026); [ColdIQ guide: Claude Code vs Cursor](https://coldiq.com/guides/claude-code-vs-cursor-lovable-codex-gtm)
- **SalesHive "Platform".**
  - The outbound agency markets its own platform ("One System for Outbound") with real-time dashboards and a client login.
  - It self-reports 129,000+ meetings booked, $2.5B+ client pipeline and 2,285 clients. Reviewers put entry pricing around $4,000/month.
  - It also has industry pages, including hospitality. — [SalesHive Platform](https://saleshive.com/platform/); [SalesHive Lead Generation](https://saleshive.com/lead-generation); [SalesHive Hospitality](https://saleshive.com/industries/hospitality) **[LARGE AGENCY]**
- **CIENCE.** Packages a platform fee into its pricing. One comparison lists a "$2,000/mo strategic team + $499/mo platform + $5,000 one-time setup", with per-meeting fees charged on *held* meetings. — comparison listicles ([Outreachbloom](https://outreachbloom.com/b2b-lead-gen-agencies); [Sales.co](https://sales.co/blog/best-b2b-lead-generation-agencies)); the search index didn't say which of these carried the exact figure. **[LARGE AGENCY]**
- **GoHighLevel snapshots as a product.**
  - A snapshot copies a sub-account's workflows, pipelines, funnels, forms, calendars, custom fields and templates.
  - Agencies sell snapshots standalone, commonly for **$300–$2,000**, with no delivery cost after the build.
  - In SaaS Mode a subscription signup can auto-create a sub-account preloaded with a snapshot. — [Ecosire GHL snapshots guide](https://ecosire.com/fr/blog/gohighlevel-snapshots-guide)
- **GoHighLevel tiers (2026 third-party guides).**
  - **$97 Starter** (one source says capped at 3 sub-accounts), **$297 Unlimited** (unlimited sub-accounts, white-label, rebilling at cost), **$497 SaaS Pro** (the only tier with SaaS Mode, i.e. resale under the agency's brand).
  - Usage charges for SMS, calls and email come on top. One source names "a 5% surcharge on phone charges and A2P registration for US texting" as the cost that surprises people most.
  - One analysis says SaaS Pro pays for itself after rebilling about 3 clients. — [Ecosire 2026](https://ecosire.com/blog/gohighlevel-pricing-worth-it-2026); [Apexure](https://www.apexure.com/blog/gohighlevel-pricing); [GHL Experts](https://ghlexperts.com/gohighlevel-plans-pricing); [SchedulingKit](https://schedulingkit.com/pricing-guides/gohighlevel-pricing). Sources conflict on which features are gated per tier.
- **GHL snapshot and SaaS-Mode setup is a commodity.** Dozens of Fiverr gigs sell it, e.g. [Fiverr example](https://fiverr.com/drey_expert10/design-gohighlevel-snapshot-system) and [Fiverr SaaS-mode setup](https://br.fiverr.com/ghl_base/setup-gohighlevel-saas-mode-ghl-snapshots-highlevel-agency-automation-system).
- **Restaurant SaaS as the "agency replacement".** Sacra frames Owner.com as the "HubSpotification of mom & pop restaurants". It bundles website, online ordering, marketing automation and SEO for independents at about $499/month and grew to an estimated $81M ARR. This is the main software competitor to a food-business agency offer. — [Sacra](https://sacra.com/research/hubspotification-of-mom-pop-restaurants/)

### Inferences
- The two spin-out cases (Folderly, Instantly) came from **internal delivery pain at volume**. Neither started as a goal to "have a product". For a small remote agency, the realistic near-term version is **free micro-tools plus a branded client portal**, not a standalone SaaS.
- GHL snapshots and SaaS Mode are the lowest-effort way to give local-SMB clients "software": CRM, missed-call text-back, reviews, booking. But it's a commodity, sold on Fiverr for small sums, so it doesn't differentiate. A custom React + Supabase portal could sit on top as the branded layer (reporting, deliverables, approvals) while GHL or HubSpot runs the engine.
- Owner.com's growth suggests that, for restaurants, bundled software plus done-for-you marketing is displacing pure-service agencies. An agency serving food businesses probably needs to show a tangible software surface (dashboard, review tracker, AI phone or WhatsApp assistant) to compete on perceived value.

### Gaps
- Couldn't verify reported HubSpot-partner-agency marketplace-app spin-outs. A search for "hapily / Aptitude 8" returned nothing linking them. No other HubSpot or Salesforce marketplace apps built by SMB agencies were confirmed.
- Not searched (quota): Whitespark, GatherUp/GetFiveStars, Moz and Proposify, often cited as agency-origin software companies. Their origins weren't verified in this session and shouldn't be cited without checking.
- No restaurant-specific GHL snapshot sellers or outcomes were found in the indexed results.
- No data on the growth impact of free tools for agencies (e.g. ColdIQ's meetings or signups attributable to tools). ColdIQ's "100 meetings every month" blog title couldn't be opened to see how much comes from tools.

---

## 3. What agency client portals and dashboards show (leads, meetings, pipeline/revenue, campaign metrics, deliverables, approvals, invoices, chat)

### Takeaway
Outbound and lead-gen agencies' client dashboards centre on **activity → replies → meetings booked → pipeline**, at rep and team level and in real time (SalesHive). Buyers are increasingly told to ask for **meetings held vs booked**, which most agencies don't break out. Portal platforms bundle **messaging, files and deliverables, forms and intake, contracts, invoices and payments, and task/request tracking**. Reporting tools add multi-source marketing KPIs. No single off-the-shelf product combines outbound-pipeline reporting with deliverables and billing.

### Cited Findings
- **SalesHive client dashboard.** Real-time dashboards across calls, email and meetings at rep and team level, with a client login; "every call, email, reply, and meeting is tracked in real time". — [SalesHive Lead Generation](https://saleshive.com/lead-generation); [SalesHive Platform](https://saleshive.com/platform/) **[LARGE AGENCY]**
- **Booked vs held.** A 2026 roundup of SDR agencies with live client dashboards says none of SalesRoads, SalesHive or Upcall states on its own site whether the dashboard separates held from booked meetings. It advises buyers to ask "what percentage of booked meetings held". — [Alleyoop: Best SDR agencies with live performance dashboards (2026)](https://alleyoop.io/resources/live-performance-dashboard-sdr-agencies/)
- **CIENCE** charges per *held* meeting, which comparisons call the stricter definition. — [Outreachbloom](https://outreachbloom.com/b2b-lead-gen-agencies) / [Sales.co](https://sales.co/blog/best-b2b-lead-generation-agencies) **[LARGE AGENCY]**
- **Martal Group** advertises "CRM and Lead Tracking" with real-time pipeline insights. One reviewer calls this an internal tracking step rather than a named client dashboard product. — [Alleyoop roundup](https://alleyoop.io/resources/live-performance-dashboard-sdr-agencies/)
- **Assembly (formerly Copilot).** A branded portal to "share updates, assets, and invoices", plus contracts and payments, in a workspace that carries the agency's branding. It now advertises an AI app builder for portals. — [Assembly agency client management](https://assembly.com/blog/agency-client-management-software); [Assembly marketing-agency portal](https://assembly.com/solutions/marketing-agency-client-portal); [Assembly AI app builder](https://www.assembly.com/blog/client-collaboration-portal)
- **Wayfront (formerly SPP.co).**
  - Combines portal, CRM, team and role management, and 40+ agency-tool integrations.
  - Pro adds client-side teams, a portal template editor and Make automations. — [Wayfront pricing](https://wayfront.com/pricing); [Capterra](https://www.capterra.com/p/199996/wayfront/pricing/)
- **HubSpot customer portal.**
  - It's a *ticket* portal: customers view ticket history tied to their contact record, submit tickets and reply to threads. It isn't a file-sharing portal (per a competitor guide).
  - Professional reportedly adds custom branding, a connected knowledge base and SLA tracking; Enterprise adds advanced permissions and custom objects.
  - Starter reportedly has 2 ticket pipelines and no ticket routing.
  - Agencies such as Campaign Creators sell HubSpot customer-portal setup as a productized service. — [Fast.io HubSpot client portal guide (competitor)](https://www.fast.io/resources/hubspot-client-portal.md); [Bluleadz](https://bluleadz.com/blog/what-are-tickets-in-hubspot); [HubSpot Ideas thread](https://community.hubspot.com/t5/HubSpot-Ideas/Customer-portal-for-Tickets/idi-p/194090); [Campaign Creators](https://www.campaigncreators.com/products/hubspot-customer-portal-setup)
- **Combined stacks are common.** Many agencies pair a file-first portal (asset delivery, creative review) with a project-management tool (tasks, communication). Teamwork's client portal shares selected projects while keeping internal conversations private. Clinked and Zoho Projects are also cited. — [Fast.io client portal roundup (vendor)](https://fast.io/resources/client-portal-software.md); [GMapsWidget listicle](https://www.gmapswidget.com/best-9-agency-tools-reddit-marketers-use-to-scale-client-campaigns-efficiently/)
- **Reporting-dashboard pricing models** (AgencyAnalytics per client, DashThis per dashboard and data source, Databox per data source) show these tools centre on multi-channel marketing KPI dashboards per client. — [Swydo on AgencyAnalytics](https://www.swydo.com/blog/agencyanalytics-pricing/); [Two Minute Reports on DashThis](https://twominutereports.com/blog/dashthis-pricing)
- **Reporting rituals as a deliverable.** Apero Advisors publishes a post on its "WBR (weekly business review) ritual". Only the title was indexed. — [Apero WBR ritual](https://aperoadvisors.com/blog/aperos-wbr-ritual)

### Inferences
- **Table stakes for an outbound / RevOps portal:** campaign activity (sent, opens if tracked, replies, positive replies), meetings booked **and held**, pipeline value created, a deliverables list or status, files, invoices and messaging.
- **Differentiators**, drawn from the gaps above:
  - **held-vs-booked transparency**
  - **meeting-level detail** (company, contact, notes, recording)
  - **pipeline attribution through to closed revenue**, synced from the client's CRM
  - **weekly AI-written summaries** in the WBR style
- **For food and local-SMB clients**, the relevant metrics differ:
  - Google Business Profile views, calls and direction requests
  - review count, rating trend and response rate
  - online orders or reservations
  - WhatsApp or chat enquiries
  - AI-search visibility
- Retention likely improves when the portal shows **what was done this week and what it produced**: activity plus outcomes. This is an inference; no retention data was found.

### Gaps
- No direct evidence on which portal features most improve retention (e.g. churn data for agencies with and without portals). The searches returned only vendor listicles. No actual r/agency threads were indexed, so practitioner opinion is missing.
- No screenshots or feature lists of SMB/local-agency dashboards (e.g. GHL agency-branded reporting) were retrieved.
- Couldn't confirm the content of Apero's WBR post or whether Apero offers clients a portal at all.

---

## 4. Off-the-shelf platforms for client portals, productized services and reporting: costs and limits vs a custom build

### Takeaway
Entry prices run from **about $19/month** (SuiteDash, Plutio, Softr Basic) to **$99–$249/month** for productized-service storefronts (Wayfront/SPP) and **$497/month** for GoHighLevel SaaS Pro. Per-client reporting (AgencyAnalytics, about $20 per client per month) scales linearly. Hidden constraints are **seat fees, client or user caps, white-label tier-gating and API access**. A custom React + Supabase build avoids per-client fees and lets outbound, CRM and local metrics sit in one branded view. The cost is engineering time, plus re-implementing billing, messaging and file handling.

### Cited Findings

**Productized-service storefront and portal platforms**
- **Wayfront (formerly SPP.co; rebranded Feb 2026)**:
  - **Base $99/month** (shown struck from $129; 5 seats).
  - **Pro $249/month** (struck from $299; Capterra lists 10 team members; client-side teams, template editor, Make automations).
  - **Plus: custom** (50+ team members, API, priority Slack, custom SLAs and development). Capterra lists Plus at $1,500/month.
  - Third parties cite extra seats at $18–$20 per month and a 14-day trial without a card.
  - Sources conflict on whether the API is a $240/month add-on or Plus-only. — [Wayfront pricing](https://wayfront.com/pricing); [Capterra](https://www.capterra.com/p/199996/wayfront/pricing/); [Agiled review (competitor)](https://agiled.app/compare/service-provider-pro); [Assembly blog (competitor)](https://assembly.com/blog/manyrequests-pricing)
- **ManyRequests**: Starter $29, Core $59, Pro $99 per month (lower annually). One internal seat is included; extra seats cost $20 per month on Starter and Core. The figures come from Assembly's blog **[COMPETITOR SOURCE]**. Another reference ties white-label to a $399 tier, a conflict that couldn't be resolved, and G2 shows no vendor pricing. — [Assembly blog on ManyRequests pricing](https://assembly.com/blog/manyrequests-pricing); [G2](https://www.g2.com/products/manyrequests/pricing)
- **Assembly (formerly Copilot)**:
  - Starter $39, Professional $149, Advanced $399 per month, with "never charged per client".
  - ManyRequests counters that Assembly caps clients at **50 (Starter)** and **500 (Professional)**. — [Assembly marketing-agency portal](https://assembly.com/solutions/marketing-agency-client-portal); [ManyRequests: Copilot alternatives (competitor)](https://www.manyrequests.com/blog/copilot-alternatives)
- **SuiteDash**:
  - Start $19/month ($180/year), Thrive $49/month, Pinnacle $99/month; task dependencies and advanced automation are Pinnacle-only.
  - All plans include unlimited users and clients, a white-label PWA, email marketing and HIPAA compliance (per a competitor comparison). — [Agiled: SuiteDash pricing (competitor)](https://agiled.app/blog/suitedash-pricing); [Agiled: SuiteDash vs Plutio](https://agiled.app/compare/suitedash-vs-plutio)
- **Plutio**: $19, $49 and $199 per month. No free plan, and its terms give no refunds for unused time. Client-portal invites and contributors are capped, and white-label is on higher tiers. — [Agiled: Plutio pricing (competitor)](https://agiled.app/blog/plutio-pricing); [Plutio site](https://www.plutio.com/alternatives/moxie)
- **Moxo**: paid plans "starting at $99 per month" with a steep next-tier jump (per Assembly, a competitor). G2 lists no public pricing. — [Assembly: Moxo pricing](https://assembly.com/blog/moxo-pricing); [G2](https://www.g2.com/compare/moxo-g2-vs-suitedash)
- **Softr** (no-code portal builder):
  - The most recent indexed write-up (dated 17 Oct 2026) lists Free; Basic $19; Pro $99; Business $329 per month billed yearly ($25, $119 and $395 monthly); Enterprise custom.
  - Mid-2026 sources list different figures (e.g. Basic $49, Professional $139, Business $269).
  - The binding limit is **app users**: Pro reportedly tops out at **250 client users**, and the next client forces Business ("the 250-client jump from $299 to $631").
  - No source confirmed native Supabase as a data source. — [Superdupr: Softr pricing](https://superdupr.com/blog/softr-pricing); [Jetadmin Softr review, Jul 2026](https://www.jetadmin.io/blog/softr-pricing-review-july-2026-is-it-right-for-your-client-portals-and-business-apps/); [vp0: Softr pricing 2026](https://vp0.com/blogs/softr-pricing-plans-2026/)

**All-in-one white-label (local SMB)**
- **GoHighLevel**: $97, $297 and $497 per month, with SaaS Mode only on $497 and usage charges for SMS, calls and email on top (details and sources in §2). The client gets a white-label CRM and app. — [Ecosire](https://ecosire.com/blog/gohighlevel-pricing-worth-it-2026); [Apexure](https://www.apexure.com/blog/gohighlevel-pricing)

**Reporting dashboards**
- **AgencyAnalytics**:
  - New sign-ups go on the **Core plan at $20 per client per month billed annually** (about $25 monthly), all features included; Enterprise is custom.
  - The legacy Freelancer plan ($79/month for 5 clients) and the Agency and Agency Pro tiers remain for existing customers.
  - Exporting raw data to BigQuery or Snowflake needs Enterprise.
  - Databox's estimate: 5 clients = $100/month, 20 clients = $400/month. — [AgencyAnalytics pricing](https://agencyanalytics.com/pricing); [Swydo](https://www.swydo.com/blog/agencyanalytics-pricing/); [Databox comparison](https://databox.com/?p=191846); [Dataslayer](https://www.dataslayer.ai/blog/agency-analytics-alternative-2026)
- **DashThis**: pricing changed on **30 March 2026** to weigh both dashboards and data sources. G2 lists entry at $49 for 3 dashboards; Databox says $44. One-dashboard-per-client agencies hit tier upgrades as they grow. — [Two Minute Reports](https://twominutereports.com/blog/dashthis-pricing); [G2](https://www.g2.com/compare/agencyanalytics-vs-dashthis)
- **Databox**:
  - Capterra lists Agency Starter at $79/month, with Professional/Agency Pro at about $159 and Growth at about $399.
  - DashThis's July 2026 comparison lists $99, $199, $499 and $999, with Agency Starter limited to 5 clients. Databox's own page gives the top tier as $799.
  - White-label is an add-on on lower tiers (per DashThis). — [Capterra Databox pricing](https://www.capterra.com/p/154024/Databox/pricing/); [DashThis: Databox review (competitor)](https://dashthis.com/alternatives/databox/)

### Inferences
- **Illustrative monthly cost at 20 active clients.** List prices from the sources above; seats, usage and taxes excluded. These are inferences, so confirm against live pricing.
  - AgencyAnalytics Core: about $400 (reporting only).
  - Databox: $79–$199 (reporting only).
  - Assembly Professional: $149 (portal, messaging, files, billing; no outbound KPIs).
  - Wayfront Base: $99 plus seats (storefront, orders, portal).
  - Softr Pro: about $99–$119 (DIY portal, ≤250 users).
  - GoHighLevel Unlimited or SaaS Pro: $297–$497 plus usage (CRM, automation, client app).
  - A typical "buy" stack (storefront or portal + reporting + GHL) lands around **$500–$1,000 per month**, across three or more logins and brands for the client.
- **Case for a custom build on React 19 + Supabase:**
  - One branded login combining outbound metrics (from Smartlead, Instantly or Clay), CRM pipeline (HubSpot or GHL API), local metrics (GBP, reviews) and deliverables.
  - No per-client fees.
  - Native multi-currency and Arabic/RTL (see §7).
  - The free-tool lead magnets live on the same codebase and data model.
- **Case for buying:**
  - Billing, Stripe subscriptions, order forms, contracts, file proofing, email notifications and chat are commodity features that took these vendors years. Rebuilding them delays launch.
- **Likely optimum: hybrid.**
  - Custom build the parts that differentiate: lead-magnet graders and calculators, unified results dashboard, AI weekly summaries.
  - Buy or integrate the commodities: Stripe Billing or Checkout for productized offers; GHL or HubSpot as the CRM engine; Cal.com or Calendly for booking.
  - Defer a full Wayfront-style storefront until productized volume justifies it.

### Gaps
- Pricing for most platforms comes from competitor comparison pages, because official pages couldn't be fetched. The Wayfront API add-on, ManyRequests white-label tier, Moxo tiers and Softr's current price list all conflict and need checking on vendor sites.
- Supabase's own plan pricing, regions and data-residency options weren't searched before the quota ran out. Region availability for EU, UK, Middle East and Australia matters for §7 and needs checking.
- HubSpot customer-portal tier gating for 2026 is unconfirmed by HubSpot's own documentation.
- No G2 or Capterra review themes (complaints, churn reasons) were retrieved for any platform.

---

## 5. Conversion patterns on the best SMB-facing agency websites (instant booking/routing, transparent pricing, industry pages, metric case studies, video, WhatsApp and live/AI chat)

### Takeaway
The evidence gathered here is thin, because the search quota ran out before dedicated searches. What did surface:
- **instant-result tools feeding a short booked call** (Owner.com: 20-minute demo)
- **published pricing or minimums as a differentiator in comparison listicles** (Martal's published 3-month pilot minimum; CIENCE's public platform fee; ColdIQ's retainer comparison)
- **industry-specific landing pages** (SalesHive hospitality)
- **metric-led proof**: meetings, pipeline dollars and client counts

WhatsApp and live/AI-chat patterns for Gulf buyers weren't researched in this session.

### Cited Findings
- **Tool → short call.** Owner.com's grader collects contact details, then offers a 20-minute demo to "review your full Report". — [Owner.com](https://www.owner.com/demo-quiz-grader)
- **Transparent minimums stand out.** One comparison notes that "only Martal Group publishes a real minimum" (a 3-month pilot on Tier 1). It ranks agencies partly on whether pricing is published ("Ranked and Priced"). — [Alleyoop](https://alleyoop.io/resources/live-performance-dashboard-sdr-agencies/); [Outreachbloom: 16 best B2B lead gen agencies, ranked and priced (2026)](https://outreachbloom.com/b2b-lead-gen-agencies)
- **Public pricing components** (CIENCE: team fee + platform fee + setup; per held meeting) are quoted in comparisons, so published structures get picked up by third-party "best agency" lists. — [Sales.co](https://sales.co/blog/best-b2b-lead-generation-agencies)
- **Retainer anchoring.** ColdIQ's free GTM report page compares its free output with "$3,000–$10,000+/mo" agency retainers. — [ColdIQ GTM report](https://coldiq.com/gtm_report)
- **Industry landing pages.** SalesHive runs vertical pages, e.g. hospitality. — [SalesHive Hospitality](https://saleshive.com/industries/hospitality)
- **Metric-led proof.** SalesHive headlines aggregate results: 129,000+ meetings, $2.5B+ pipeline, 2,285 clients. — [SalesHive](https://saleshive.com/lead-generation). Apero Advisors uses a named-client testimonial: Trackstar's Jeremy Schneck credits Apero's TAM scoring and cold plus conference outbound with "hundreds of thousands in pipeline". It also cites logos such as Y Combinator and Serent Capital. — [Apero Advisors](https://aperoadvisors.com/)
- **AI-tool listicles as a channel.** Vendor-published "best agencies" lists, e.g. lemlist's "12 AI outbound lead generation agencies to work with in 2026" and Smartlead's B2B lead-gen companies list, are a discovery channel for agencies. — [lemlist](https://www.lemlist.com/blog/12-outbound-lead-generation-agencies-to-work-with-in-2026); [Smartlead](https://www.smartlead.ai/blog/b2b-lead-generation-companies)

### Inferences
- **For SMB owners** (restaurant operators, trades, local services), likely high-converting patterns are:
  - a **free grader with an immediate score**
  - **clear starting prices or packaged offers** in local currency
  - **vertical pages** ("for restaurants", "for cafés", "for B2B service firms") with before/after metrics
  - a **one-click booking or WhatsApp CTA**
  This is an inference from the patterns above, not tested data.
- **Positioning against Apero.** Its proof points (YC, PE-backed portfolio firms, TAM scoring) target B2B and PE buyers. A site aimed at small-business owners, with plain-language outcomes (bookings, reviews, calls, orders) and transparent packages, is a clear contrast.

### Gaps
- **Not researched (quota exhausted):**
  - WhatsApp adoption and expectations among GCC business buyers (e.g. UAE/KSA usage stats, WhatsApp Business API costs, click-to-WhatsApp ads)
  - booking and routing tools (Chili Piper, Cal.com routing, Calendly) and speed-to-lead data
  - video (Loom or VSL) conversion evidence
  - AI chat widgets on agency sites
  - pricing-page benchmarks for productized agencies
- No A/B or conversion-rate data from agency websites was found.
- Not established whether Apero publishes pricing or offers any interactive tools; nothing surfaced in the indexed results.

---

## 6. How AI agents are changing agency deliverables and client-facing software (AI SDRs, AI receptionists, AI audits, AI-generated reports)

### Takeaway
Within the evidence gathered, AI shows up in four places:
1. **New audit categories.** AI-search / AEO visibility graders (HubSpot AEO Grader, paid AEO product launched 14 Apr 2026) and "AI-readiness" CRM scores (AskElephant, Vasco).
2. **Agencies building their own tools with AI coding assistants.** ColdIQ uses Claude Code; RecensioAI's tools are hosted on Lovable.
3. **AI-SDR economics framed as cost per meeting.** Instantly's AI sales agent ROI calculator.
4. **Portal vendors adding AI builders.** Assembly.

AI receptionists and AI SDR outcomes weren't researched before the search quota ran out.

### Cited Findings
- **AEO as a new audit.** HubSpot's free AEO Grader snapshots brand visibility in ChatGPT, Gemini and Perplexity. HubSpot launched a paid standalone AEO product on 14 April 2026 at about €49/month, which marks "AI search visibility" as a mainstream deliverable. — [Salesdorado](https://salesdorado.com/en/ai/review-hubspot-aeo-grader/); [Insidea](https://insidea.com/blog/hubspot/hubspots-aeo-grader/); [HubSpot Community: "What is HubSpot's AEO Grader"](https://community.hubspot.com/t5/Academy-Release-Notes/Academy-Short-What-Is-HubSpot-s-AEO-Grader/ba-p/1234176) **[ENTERPRISE VENDOR]**
- **AEO tooling roundups** (e.g. "10 Best AEO tools to use in 2026") point to a growing category. — [Omnius](https://www.omnius.so/blog/answer-engine-optimization-tools)
- **"AI-readiness" scoring of CRMs.** AskElephant's grader returns an AI-readiness score next to CRM hygiene. Vasco scores GTM data readiness for AI. — [AskElephant](https://www.askelephant.ai/tools/free-hubspot-crm-health-grader); [Vasco](https://vasco.app/ai-readiness-assessment)
- **AI-built free tools.** ColdIQ builds its free tools with Claude Code on third-party data APIs and says they drive "eyeballs and signups". It publishes a guide comparing Claude Code, Cursor, Lovable and Codex for GTM work. — [ColdIQ](https://coldiq.com/blog/the-funnel-that-books-us-100-meetings-every-month); [ColdIQ guide](https://coldiq.com/guides/claude-code-vs-cursor-lovable-codex-gtm)
- **AI-generated reports as the lead magnet.** ColdIQ's free GTM strategy report, gated by work email, generates ICPs, campaigns, channels and next steps from public data. — [ColdIQ GTM strategy tool](https://coldiq.com/free-tools/gtm-strategy-for-b2b)
- **AI SDR ROI framing.** Instantly publishes an "AI sales agent ROI calculator" that estimates meetings, pipeline, payback and "time reclaimed per rep". — [Instantly](https://instantly.ai/blog/ai-sales-agent-roi-calculator/)
- **AI agents for prospecting.** Twin.so offers agent templates such as a "bad-review lead hunter" that finds low-rated local businesses for reputation-management agencies. — [Twin.so](https://twin.so/agents/bad-review-lead-hunter-reputation-management-prospects/)
- **Portal platforms adding AI.** Assembly promotes an "AI app builder" inside its client-portal product. — [Assembly](https://www.assembly.com/blog/client-collaboration-portal)
- **GHL tiers.** Some 2026 guides list an "AI conversational bot" among top-tier GoHighLevel features; sources conflict on gating. — [Ecosire](https://ecosire.com/blog/gohighlevel-pricing-worth-it-2026)
- **Apero's angle.** Apero publishes a Maven lesson on building "a GitHub repo for your RevOps and GTM system", i.e. GTM-as-code and engineering-led delivery. — [Apero media](https://aperoadvisors.com/media)

### Inferences
- **Deliverables are shifting** from "we run campaigns" toward "we install and operate AI-assisted systems": enrichment and scoring, AI-personalised outbound, AEO monitoring, AI-written weekly reports. A client web app is the natural place to *show* these systems working, through live agent activity logs and AI summaries.
- **For food and local SMBs**, likely the most tangible AI deliverables are:
  - an AI phone or WhatsApp assistant (bookings, orders, FAQs)
  - AI review responses
  - AEO visibility tracking ("does ChatGPT recommend your café?")
  These are inferences; outcomes and pricing for AI receptionists weren't researched.
- **Free lead-magnet tools are cheap to build now.** AI coding tools have made them low-cost, so their novelty value will fade. The differentiator becomes proprietary or local data (e.g. benchmarks across the agency's own restaurant clients) and speed to a booked call.

### Gaps
- **Not researched (quota exhausted):**
  - AI receptionist products and white-label resale to restaurants (e.g. Slang.ai, Synthflow, Retell, Vapi agency programmes) and their pricing and outcomes
  - AI SDR performance and churn evidence in 2025–26 (11x, Artisan and similar)
  - agency case studies of AI-generated client reporting
- No independent data on AEO-grader accuracy or on whether AEO deliverables improve SMB revenue.

---

## 7. Multi-market needs: multi-currency pricing, Arabic/RTL for Gulf clients, GDPR/UK GDPR and UAE/KSA PDPL implications for forms and data storage

### Takeaway
**This question couldn't be researched.** The shared web-search quota ran out before any multi-market, RTL or privacy-law searches. No cited findings are available. The report writer should treat this section as an open research item, not as evidence of absence.

### Cited Findings
- None retrieved in this session. The only adjacent datapoints:
  - SuiteDash is described as HIPAA-compliant on all plans (a US health-privacy regime, not GDPR or PDPL). — [Agiled comparison](https://agiled.app/compare/suitedash-vs-plutio)
  - AgencyAnalytics' raw-data warehouse export is limited to Enterprise, which matters for data-portability and data-subject-access needs. — [Dataslayer](https://www.dataslayer.ai/blog/agency-analytics-alternative-2026)

### Inferences
- These follow from general engineering practice, not from sources gathered here. They're listed as checks to verify, not facts.
  - A custom build should model prices in multiple currencies: USD, CAD, GBP, EUR, AUD, NZD, AED and SAR.
  - It should use logical CSS properties (Tailwind's `rtl:`/`ltr:` variants and start/end utilities) so an Arabic locale can be added.
  - Forms should log consent with a timestamp and purpose.
  - Supabase project region and any cross-border-transfer basis should be chosen and documented for EU/UK and GCC clients.
- Off-the-shelf portals vary in RTL and localisation support. This is likely a real point in favour of custom building for Gulf clients, but it's unverified here.

### Gaps
- Not researched:
  - **WhatsApp:** its importance for GCC buyers and the WhatsApp Business Platform (Cloud API) pricing model.
  - **UAE PDPL:** Federal Decree-Law 45/2021; implementing-regulation status as of 2026; cross-border transfer rules.
  - **KSA PDPL:** SDAIA enforcement since Sept 2024; transfer regulations; Arabic privacy-notice expectations.
  - **GDPR / UK GDPR:** consent for marketing forms, cookie consent, international transfers (EU–US Data Privacy Framework, UK IDTA).
  - **Hosting:** Supabase region availability (EU, UK, Middle East, Australia) and DPA terms.
  - **Off-the-shelf portals:** which ones support Arabic/RTL and multi-currency invoicing (Wayfront, Assembly, ManyRequests, SuiteDash, GHL).
  - **Payments:** Stripe availability and multi-currency in UAE/KSA, and the alternatives used locally (e.g. Tap, Checkout.com, PayTabs).
- All of these need a follow-up research pass before the multi-market section of the final report is written.
