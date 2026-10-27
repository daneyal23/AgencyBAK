# AI automation & agentic workflows

## Tagline

Busywork on rails. Judgment still yours.

## The stop line

Automation for the obvious. Agents for the almost-obvious. Humans for the customer.

## In plain English

Your team wastes hours on copy-paste: move this form to the CRM, tag that lead, draft that follow-up, file that note. Machines should do the boring, repeatable parts. People should keep the judgment — especially anything that talks to a customer.

This page covers two offers under one roof.

**A) Automation pipes** — classic if-this-then-that, done carefully: triggers, transforms, destinations, retries, logs. No mystery middleman.

**B) Agentic workflows** — agents that research, draft, and route work into a queue for a human. They do not auto-send by default. You get CRM preview and rollback before anything becomes “live.”

We are not selling a chatbot that invents prices on your website. We are selling rails for busywork and supervised helpers for almost-busywork.

## Who this is for

Owner-led teams where the same handoffs happen every day — ops, sales admin, quoting, support triage — and where a wrong auto-send would damage trust.

You want fewer spreadsheet weekends and fewer “who was supposed to update the CRM?” moments. You do not want an AI that freelances with your reputation.

## What you get

### Offer A — Automation pipes

- Mapped workflows: trigger → rules → destination (CRM, email tool, sheet, WhatsApp bridge)
- Error handling, retries, and a log you can read
- Idempotency where duplicates would create mess
- Runbooks so your team can pause, replay, or hand off without us on speed-dial

### Offer B — Agentic workflows

- Agents scoped to research, draft, classify, or route — not unrestricted “do everything”
- Human gate before external send by default
- CRM preview of proposed updates; rollback path if a batch was wrong
- Prompt and tool configs you own, versioned like software — not a black-box SaaS prompt

Shared across both: inventory of what runs, who owns it, and how it fails safely.

## Benefits

- Hours back on repetitive ops without pretending AI replaces your closer
- Fewer dropped handoffs between form, inbox, CRM, and calendar
- Agents that accelerate drafts and research while you keep the final say
- Auditability: what ran, what changed, what can be undone
- A stack you can operate after transfer — not a permanent dependency dressed as “innovation”

## Under the hood (technical)

Pipes typically land in n8n, Make, Zapier, or native CRM workflows — chosen for what you already pay for and can maintain. We prefer explicit transforms over silent magic. Secrets stay in your vaults; we do not embed API keys in screenshots.

Agentic work uses constrained tools (CRM read/write with dry-run, web research, doc draft, ticket classify). System prompts and tool allow-lists are documented. Default policy: no outbound email/SMS/WhatsApp without approval. High-risk fields (pricing, legal, medical claims) stay human-only unless you explicitly expand scope later.

Observability: run history, failed-job alerts, and CRM change logs. Rollback means reverting staged CRM updates or withholding a send queue — not “hope the model was right.”

## How it works (finish → start)

### Offer A — Automation pipes

1. **Finish** — Jobs run on schedule or event; failures alert a named owner; your team can pause/replay from the runbook.
2. **Operate** — Monitor volume, error rates, and edge cases; tighten rules when real data shows gaps.
3. **Harden** — Retries, dedupe, dead-letter handling, and access controls ship before “set and forget.”
4. **Build** — Implement the pipe in your accounts; map fields 1:1; test with production-shaped fixtures.
5. **Start** — List the top repetitive handoffs; pick the ones that are rule-clear (obvious), not judgment-heavy.

### Offer B — Agentic workflows

1. **Finish** — Agents research/draft/route into a human queue; approved items land in CRM or send tools; rejected items teach the next pass.
2. **Operate** — Review queue SLAs, false positives, and rollback events; adjust tools and prompts with change notes.
3. **Gate** — Preview CRM diffs; require approval for customer-facing output; enable auto-send only if you insist in writing.
4. **Build** — Scope the agent’s tools and data access; wire CRM dry-run and audit fields; test on historical cases.
5. **Start** — Choose almost-obvious work (enrichment, first draft, triage) where a human still owns the customer.

## What you own

Workflow definitions, agent configs, prompts, credentials in your tenancy, CRM fields and automation, and the runbooks. Build-and-transfer is the default: we leave you able to run, pause, and extend — not locked to our laptop.

## What we do not do

- Auto-send email, SMS, or WhatsApp to customers by default
- Unscoped agents with production write access and no preview
- “AI employees” that invent policy, pricing, or medical/legal advice
- Hide logic in an account only we can log into
- Automate chaos: if the process is unclear, we fix the process first
- Replace judgment on the customer relationship with a model’s confidence score

## Three lenses (close)

- **Technical writer:** Pipes for deterministic handoffs; agents for research/draft/route with CRM preview, human gates, and rollback — no silent auto-send as the default.
- **Advertisement:** Busywork on rails. Judgment still yours — automation for the obvious, agents for the almost-obvious, humans for the customer.
- **Winner:** Ship systems you can pause, audit, and own; speed without reckless AI is the point, not the pitch.
