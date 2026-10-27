# GTM engineering

## Tagline

The machine behind the pipeline — built so you can run it.

## The stop line

Boutique GTM engineering often starts above Main Street budgets — and below that floor, they point you elsewhere.

We build the same kind of machine — Clay, n8n, CRM, enrichment, routing — for owner-led teams: food B2B, traditional SMEs, B2B services. Build → operate → transfer. Client-owned accounts. Docs and training so an owner or ops lead can run it without a permanent embed.

If the system only works while we are logged in, we failed the brief.

## In plain English

GTM engineering is the plumbing between “who we should sell to” and “what the CRM shows this week.”

Lists get enriched and scored. Signals become tasks. Replies get routed. Meetings and stages stay honest. Automations live in your Clay and n8n (or the equivalents you prefer), wired into HubSpot, Zoho, GoHighLevel, or Pipedrive.

We do not rent you a black box. We install a machine you can open, change, and keep.

## Who this is for

Operators who already know the offer converts — or are ready to prove it in a bounded first motion — and need the system layer: data, workflows, CRM hygiene, and a path for the team to own it.

Typical fit: catering and wholesale food into corporate accounts, regional B2B services, and traditional SMEs across US/CA, UK/IE, EU, AU/NZ, and GCC. You want capacity in-house after a short build, not a forever boutique retainer.

Not for buyers who only want a spreadsheet dump or a Clay table with no CRM handoff.

## What you get

- One bounded first motion (channel + ICP + CRM instrumentation) before anything sprawls
- Clay (or peer) tables for TAM, enrichment, and audit-friendly row logic
- n8n / workflow layer for sync, routing, and human-in-the-loop steps
- CRM configuration: stages, properties, views, and alerts that match how you sell
- Operator docs, walkthroughs, and a supervised handoff window
- Optional operate period so the machine is proven before transfer — then you run it

## Benefits

- **You run it after we leave.** Transfer is the product, not a footnote.
- **Client-owned stack.** Clay workspace, n8n instance, CRM — your billing, your keys.
- **Main Street priced for serious method.** Same build → operate → transfer pattern without boutique floors as the entry ticket.
- **Fewer tools fighting each other.** Enrichment, automation, and CRM speak the same account language.
- **Debuggable by your team.** Named workflows, clear failure modes, and docs written for the person who will maintain them.

## Under the hood (technical)

Data plane: Clay (or Apollo/enrichment peers as needed) for TAM construction, site and firmographic checks, buyer finding, and second-pass email validation before CRM load. Prefer a pre-CRM holding pattern for large TAMs so junk rows never become contacts.

Automation: n8n (or client-preferred equivalent) for scheduled syncs, webhook routing, Slack/email alerts, and approval gates. Durable logic is documented; no “only this contractor knows which Zap.”

CRM: HubSpot, Zoho, GoHighLevel, Pipedrive. Properties for source, tier, last touch, meeting booked, meeting held. Views for owners and for leadership. We mirror human permissions for any AI-assisted writes; batch updates are previewable.

Outbound hooks (when in scope): sending domains stay off the main site domain; sequencers sit in client accounts. Measurement of replies and held meetings stays in CRM.

Handoff: admin access audit, credential map, runbooks, and a supervised operate window before we step back.

## How it works (finish → start)

1. **Finish** — Transfer: access checklist, runbooks, training, and a short shadow period until your operator can change a table and pause a workflow without calling us.
2. **Operate** — We run the machine against live volume; fix edge cases; weekly review of pipeline truth, not vanity activity.
3. **Instrument** — CRM stages, properties, dashboards, and alerts so the first motion is measurable end to end.
4. **Build** — Clay/n8n/CRM wiring for one defensible motion: accounts → enrich → route → touch → log.
5. **Start** — Operating truth workshop: economics, buyer map, existing tools, data quality, and what must be true before scale.

## Step by step

The full delivery, in order. Each step says what we do, what we need from you, and what you have at the end of it.

### 1. Operating truth workshop

- **We do:** Agree the economics (deal size, sales cycle, what a good meeting is worth), the buyer map, the tools you already pay for, and the state of your data. We pick one first motion to build, not five.
- **You provide:** The owner or sales lead, plus logins to look at current tools.
- **You get:** A one-page brief: the motion, the target accounts, the definition of success.

### 2. Stack audit and access setup

- **We do:** List every tool in the motion and what it does. We set up client-owned accounts where missing (enrichment workspace, automation instance, sequencer) and give ourselves least-privilege access (only what the job needs). We start a credential map so nothing depends on one person's login.
- **You provide:** Account ownership and billing in your name.
- **You get:** A stack you own from day one.

### 3. Account universe (TAM) build

- **We do:** Build the list of every company that fits the ICP from data sources and filters. The list lives in a holding area outside the CRM, so unqualified rows never become CRM records. We check it against your CRM and customer list (suppression) so you never prospect existing customers or open deals.
- **You get:** A filtered account universe with counts per segment and tier.

### 4. Company enrichment, before signals

- **We do:** Enrich each company first: what it does, who it sells to, size, location, and technology used. We use waterfall enrichment (several data providers tried in order until one returns an answer) and AI research steps for facts that are not in databases. Only after the company is understood do we look for buying signals.
- **You get:** Company records complete enough to judge fit.

### 5. Signals, scoring and tiers

- **We do:** Watch for triggers that show a company may be ready to buy: hiring for a key role, a new location, funding, a leadership change, a tool being adopted or dropped. Each account gets a score and a tier (for example 1 to 4), and routing rules decide what happens per tier.
- **You get:** A ranked list that says who to work this week and why.

### 6. Contact finding and validation

- **We do:** Find the right people per account (buyer, champion, user). We use waterfall lookups for email and phone, then a second validation pass so bad emails never reach the sequencer. Catch-all domains (where any address looks valid) get handled separately.
- **You get:** Contacts you can reach, with each email checked twice.

### 7. A per-row plan, not one fixed sequence

- **We do:** Each row only runs the steps it needs. If a row already has a LinkedIn profile, the person lookup is skipped. If the same person appears three times, they are grouped and enriched once. This keeps credit and API costs down.
- **You get:** Lower cost per enriched row, and fewer wasted lookups.

### 8. CRM sync

- **We do:**
  - Map fields from the enrichment table to the CRM, using the data dictionary.
  - Upsert on a unique key: update the record if it exists, create it if it does not, so syncing never creates duplicates.
  - Set which system owns each field, so enrichment never overwrites what your team typed.
  - Put an approval gate before any batch write, and keep an audit log of every change.
  - Write custom sync code (webhooks, queued jobs, scheduled runs) in your accounts when the automation tool alone is not enough.
- **You get:** Clean, deduplicated records landing in the CRM you run.

### 9. Activation

- **We do:** Turn tiers and signals into action: tasks for reps, enrollment into sequences, and Slack or email alerts when a high-tier signal fires.
- **You get:** Signals that become work the same day, not a table nobody opens.

### 10. Instrument and operate

- **We do:** Build dashboards for the motion, track cost per enriched row and credit usage, alert on failed workflows, and hold a weekly review against pipeline, not activity.
- **You get:** A machine proven on live volume, with its edge cases fixed.

### 11. Transfer

- **We do:** Hand over runbooks, recorded walkthroughs and the credential map, then run a short shadow period where your operator makes changes while we watch.
- **You get:** An operator who can change a table and pause a workflow without calling us.

## Technical terms, in plain words

| Term | What it means |
|---|---|
| GTM (go-to-market) | Everything involved in finding, winning and keeping customers. |
| ICP | Ideal customer profile: the kind of company you sell to best. |
| TAM / account universe | Every company that fits your ICP. |
| Firmographics | Facts about a company: industry, size, location, revenue band. |
| Technographics | The software and tools a company uses. |
| Enrichment | Adding missing information to a record from outside sources. |
| Waterfall enrichment | Trying several data providers in order until one returns an answer. |
| Signal (trigger) | An event that suggests a company may be ready to buy. |
| Scoring and tiering | Ranking accounts by fit and timing so the best ones get worked first. |
| Routing | Rules for who or what handles a record next. |
| Suppression list | Companies and people to never contact: customers, open deals, opt-outs. |
| Holding area (pre-CRM) | Where lists are cleaned before anything is allowed into the CRM. |
| Field mapping | Matching each column in one tool to the right field in another. |
| Unique key | A value that identifies one record, such as email or company domain. |
| Upsert | Update the record if it exists, create it if it does not. |
| Webhook | A message one tool sends another the moment something happens. |
| Rate limit | How many requests a tool accepts per minute before it blocks you. |
| Credits | The units enrichment tools charge for each lookup. |
| Catch-all domain | An email domain that accepts any address, so validation cannot confirm it. |
| Approval gate | A pause where a human must approve before changes are written. |
| Runbook | Step-by-step instructions for running, pausing and fixing a workflow. |

## Outcomes

What you end up with, and how we measure it. Every number comes from your own tools and CRM.

| Outcome | How we measure it |
|---|---|
| A target list that matches the ICP | Accounts per segment and tier; share passing the fit filters |
| Complete account and contact data | Enrichment hit rate per field (share of rows where a value was found) |
| Controlled data costs | Cost per enriched row; credits used per run |
| Reachable contacts | Share of emails passing validation; bounce rate once sending starts |
| No duplicates from syncing | New CRM records checked against existing ones; duplicates created by sync |
| Signals turned into action | Time from a signal firing to a task or sequence in the CRM |
| A machine that keeps running | Workflow failure rate, and alerts reaching a named owner |
| Your team can run it | Operator completes the handoff checklist without us |

## What you own

Clay (or enrichment) workspace and tables. n8n (or automation) workflows and credentials. CRM configuration and historical records. Documentation and training assets. Any repos or scripts written for your account.

We are guests in your stack. Exit means you keep the keys.

## What we do not do

- Build in our accounts and call an export “transfer”
- Sell Clay lists with no CRM or operating layer
- Hide logic in undocumented personal Zaps
- Promise pipeline numbers we cannot instrument
- Require a boutique floor to get engineering that sticks

## Three lenses (close)

- **Technical writer:** Clay, n8n, and CRM wired as one machine in your accounts, then transferred with docs so your team can run and debug it.
- **Advertisement:** The pipeline engine expensive shops sell — built so Main Street can own and operate it.
- **Winner:** If you cannot run it without us, it is not finished — transfer is how we close.
