# CRM & RevOps

## Tagline

A CRM that tells the truth about how you sell.

## The stop line

If closing the week still means an Excel export and a weekend cleanup, the CRM is furniture — not an operating system.

We implement and harden HubSpot, Zoho, GoHighLevel, or Pipedrive so stages, sources, and held meetings match reality. Live board pack. No vanity pipeline. Honest RevOps for owner-led teams who need truth without a permanent embed.

When leadership opens the CRM on Monday, the numbers should already be the story.

## In plain English

RevOps here means one thing: the CRM reflects how revenue actually moves.

Deals have stages people use. Activities get logged without theater. Booked meetings and held meetings are separate facts. Forecasts come from the board, not from a spreadsheet someone rebuilt after the fact.

We clean the object model, fix the workflows, wire the reports, and train the people who live in the system. You own the portal. We do not become the only person who knows where the fields are.

## Who this is for

Founders and sales leads at food B2B, traditional SMEs, and B2B service firms who have outgrown “notes in email” and underuse a CRM they already pay for — across US/CA, UK/IE, EU, AU/NZ, and GCC.

You want a live board pack (or owner pack): pipeline by stage, win rates that survive scrutiny, and outbound or inbound attributed to held meetings — not booked ghosts.

Not for teams that want a prettier theme on a CRM nobody updates.

## What you get

- CRM audit: objects, pipelines, properties, duplicates, and dead automations
- Clean pipeline design matched to how you actually sell (not a generic SaaS template)
- Required fields and lightweight process so data quality does not depend on heroics
- Dashboards: pipeline, sources, booked vs held, velocity — exportable for a board pack without Excel weekend
- Integration hooks to outbound, forms, or GTM workflows you already run
- Admin training and a short operate window so hygiene sticks after handoff

## Benefits

- **Truth over theater.** Pipeline that leadership can defend in a review.
- **No Excel weekend.** Board pack (or weekly owner pack) pulls from live CRM views.
- **Held meetings as a first-class metric.** Booked without held stops counting as success.
- **Stack you already chose.** HubSpot, Zoho, GoHighLevel, or Pipedrive — we work inside your license.
- **Capacity stays with you.** Build → operate → transfer; ownership and training included.

## Under the hood (technical)

Platforms: HubSpot, Zoho CRM, GoHighLevel, Pipedrive. We prefer deepen-what-you-have over a forced migration unless the current tool truly cannot carry the process.

Model: contacts, companies/accounts, deals; clear stage definitions; closed-lost reasons; source and campaign fields; meeting booked / meeting held timestamps or equivalent properties. Deduplication rules and merge playbooks.

Automation: assignment, stage-change alerts, task creation on held meetings and no-shows, optional Slack or email digests. Human approval for bulk enrichment writes; snapshots before mass updates where the platform allows.

Reporting: saved views and dashboards for owners and for leadership; weekly snapshot that can paste into a board pack without rebuilding columns in Excel. Attribution for outbound and inbound stays in CRM, not in a vendor PDF.

Governance: permission sets, naming conventions, and a short data dictionary so the next hire does not invent parallel fields.

## How it works (finish → start)

1. **Finish** — Transfer: admin checklist, data dictionary, dashboard ownership, and training so your team maintains hygiene without us.
2. **Operate** — Live use under supervision; kill unused fields; tighten required data; confirm board pack matches operating reality.
3. **Report** — Dashboards and the live board/owner pack: pipeline, sources, booked vs held, conversion by stage.
4. **Build** — Pipelines, properties, workflows, dedupe, and integrations into the CRM you own.
5. **Start** — Operating truth: how deals really move, where Excel still wins, which CRM you run, and what “accurate” must mean for decisions.

## Step by step

The full delivery, in order. Each step says what we do, what we need from you, and what you have at the end of it.

### 1. Read-only CRM audit (the entry step)

- **We do:** Look at your CRM with view-only access or an export, and change nothing. We run scored checks on duplicates, field coverage (how often key fields are filled in), stage usage, records with no owner or company, lifecycle stages that contradict deal stages, dead or conflicting workflows, and integrations that overwrite each other.
- **You provide:** View-only access or a CSV export, and a 30-minute call on how you sell.
- **You get:** A scored audit, a ranked fix list, and a plain-English estimate of what the mess costs you. You can stop here and fix it yourself.

### 2. Operating truth workshop

- **We do:** Map how deals actually move today: who touches a lead, when it becomes a deal, where handoffs break (marketing → sales → delivery), and where Excel still wins. We agree what each stage means and its exit criteria (what must be true before a deal moves on).
- **You provide:** The people who sell and the person who reports to leadership.
- **You get:** Written stage definitions and exit criteria everyone signed off on.

### 3. Blueprint and data dictionary

- **We do:** Design the object model: contacts, companies, deals, and custom objects only where needed. We set associations (how records link), parent-child company hierarchy for multi-location or group accounts, and the property list. Each property gets its type, owner, whether it is required, its picklist values, and its source of truth (which system is allowed to write it).
- **You provide:** Review and sign-off.
- **You get:** A CRM blueprint and a data dictionary, approved before anything is built.

### 4. Data cleanup

- **We do:** Take a full backup snapshot first. Then:
  - Normalize formats: names, phone numbers, countries, website domains.
  - Deduplicate in tiers. Exact matches on strong keys (email, company domain) merge automatically. Probable matches from fuzzy matching on names and companies go to a human review queue.
  - Apply survivorship rules (which value wins when two records disagree).
  - Enrich the company first (what they do, size, location), then fill the remaining gaps.
  - Log every merge and change in an audit log.
- **You provide:** Decisions on the review queue (we bring a recommendation for each one).
- **You get:** One record per real person and company, before-and-after numbers, and an audit log of every change.

### 5. Migration (only when needed)

- **We do:** Move data from spreadsheets, an old CRM (including Salesforce), or two CRMs left behind by a merger into the CRM you keep. We map fields one to one, run a test load, reconcile counts, and only then do the final cutover.
- **You provide:** Access to the old system and a cutover date.
- **You get:** One CRM, with nothing lost and a reconciliation report showing it.

### 6. Build

- **We do:**
  - Build pipelines and stages, with required fields per stage and validation rules.
  - Add workflows: lead assignment (for example round-robin), stage-change alerts, tasks after held meetings and no-shows, and SLA timers (how fast a lead must be followed up).
  - Add source fields (original and latest source) and UTM capture from forms.
  - Connect your forms, calendar, outbound tools and enrichment tools.
  - Set sync rules so each field has one system that owns it, and enrichment never silently overwrites what your team typed (write-back rules).
  - Test in a sandbox (a safe copy) where the platform allows.
- **You provide:** Feedback on test runs.
- **You get:** A working CRM that matches the blueprint.

### 7. Reporting

- **We do:** Build dashboards for pipeline by stage, stage conversion, pipeline velocity (days spent in each stage), win rate, closed-lost reasons, revenue by source, booked vs held meetings, and a data-health panel (duplicates and field coverage over time). We also build a weekly owner or board pack straight from live CRM views.
- **You get:** Numbers leadership can open on Monday without an Excel rebuild.

### 8. Operate

- **We do:** Run a supervised live period. We watch field adoption, kill unused properties, fix edge cases, and hold a weekly review of what the numbers say.
- **You get:** Proof the system holds up under real use before we step back.

### 9. Transfer

- **We do:** Hand over the admin checklist, permission sets, naming conventions, data dictionary, runbook and recorded training.
- **You get:** A team that can maintain the CRM without us.

### 10. Ongoing health check (optional)

- **We do:** Re-run the audit checks monthly. Contact data goes stale as people change jobs and emails, so a clean CRM drifts unless someone keeps checking.
- **You get:** A short monthly report and a fix list, so problems are caught while they are small.

## Technical terms, in plain words

| Term | What it means |
|---|---|
| Object | A type of record in the CRM: contact, company, deal, ticket. |
| Property (field) | One piece of information on a record, such as email, industry or deal amount. |
| Pipeline | The set of stages a deal moves through, from first conversation to won or lost. |
| Deal stage | Where one deal is in the pipeline right now. |
| Lifecycle stage | Where a person or company is in their relationship with you: lead, opportunity, customer. |
| Exit criteria | What must be true before a deal is allowed to move to the next stage. |
| Association | A link between records, for example this contact works at this company. |
| Parent-child hierarchy | A group company linked to its branches or locations. |
| Data dictionary | The written list of every field: what it means, who owns it, who may change it. |
| Source of truth | The one system allowed to own and write a given field. |
| Deduplication (dedup) | Finding and merging records that are really the same person or company. |
| Exact vs fuzzy match | Exact means identical keys (same email). Fuzzy means close but not identical ("Acme Ltd" vs "ACME Limited"). |
| Survivorship rule | The rule for which value to keep when two duplicate records disagree. |
| Normalization | Putting data in one consistent format, such as one way to write phone numbers. |
| Enrichment | Filling in missing information from outside sources. |
| Field coverage | The share of records where an important field is actually filled in. |
| Write-back collision | Two tools writing the same field and overwriting each other. |
| Round-robin | Assigning new leads to reps in turn. |
| SLA | An agreed time limit, such as "every new lead gets a reply within one business day." |
| Original vs latest source | Where a contact first came from vs what brought them back most recently. |
| Closed-lost reason | Why a deal was lost, picked from a fixed list so it can be reported on. |
| Pipeline velocity | How fast deals move through the stages. |
| Booked vs held | A meeting that was scheduled vs a meeting that actually happened. |
| Sandbox | A safe copy of the CRM for testing changes. |
| Audit log | A record of every automated change: what changed, when, and why. |

## Outcomes

What you end up with, and how we measure it. Every number comes from your own CRM. We do not promise figures before the audit has shown us your data.

| Outcome | How we measure it |
|---|---|
| One record per real person and company | Duplicate rate before vs after, from the audit |
| Key fields actually filled in | Field coverage on required fields, tracked on the data-health panel |
| Stages people use | Share of deals that meet each stage's exit criteria; days spent in each stage |
| Reports without Excel | The weekly pack runs from live CRM views with no manual rebuild |
| Know where revenue comes from | Share of deals with a recorded source |
| Meetings counted honestly | Booked vs held, and held rate, by source |
| No silent overwrites | Sync rules documented; conflicts logged instead of lost |
| A team that runs it | Your admin can complete the admin checklist without calling us |

## What you own

CRM subscription and all records. Custom properties, pipelines, workflows, and dashboards. Integration credentials under your accounts. Documentation and training materials. Historical activity and deal data.

We configure; we do not hostage the instance.

## What we do not do

- Leave you with a redesign that still needs weekend Excel to brief leadership
- Count booked meetings as success without held-meeting fields and reports
- Force a platform migration for our convenience
- Inflate pipeline with stages nobody uses
- Gate honest RevOps behind a boutique retainer floor

## Three lenses (close)

- **Technical writer:** HubSpot, Zoho, GoHighLevel, or Pipedrive configured so stages, sources, and booked-vs-held are live facts — not a weekend spreadsheet.
- **Advertisement:** Stop managing revenue in Excel; open a CRM that already tells the truth.
- **Winner:** If the board pack needs a cleanup pass, the CRM is not done — we finish when Monday opens clean.
