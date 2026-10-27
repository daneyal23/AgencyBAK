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

## Step by step

The full delivery, in order. Each step says what we do, what we need from you, and what you have at the end of it.

### Offer A — Automation pipes

#### 1. Process inventory

- **We do:** List the repetitive handoffs in your week (form to CRM, lead tagging, file moves, status updates) and how long each takes. We pick the ones with clear rules, not the ones that need judgment.
- **You provide:** Thirty minutes with the people who do the work.
- **You get:** A ranked list of what to automate first, and what to leave alone.

#### 2. Fix the process first

- **We do:** Where a process is unclear or different every time, agree the rule before automating it. Automating chaos only makes chaos faster.
- **You get:** Written rules for each pipe.

#### 3. Design

- **We do:** Map each pipe: the trigger (what starts it), the transform (how data is cleaned or reshaped), the destination (where it lands), the field map (which value goes where), and the error path (what happens when something fails).
- **You get:** A one-page design per pipe, for you to approve.

#### 4. Build

- **We do:** Build in the tool you already pay for and can maintain: n8n, Make, Zapier, or native CRM workflows. Secrets (API keys and passwords) are stored in the tool's secure vault, never in screenshots or docs.
- **You get:** Working pipes in your accounts.

#### 5. Harden

- **We do:** Add retries with backoff (try again, waiting longer each time), idempotency (running twice never creates two records), dedupe checks, a dead-letter queue (failed items are parked for review, not lost), and alerts to a named owner.
- **You get:** Pipes that fail safely and tell someone when they do.

#### 6. Test

- **We do:** Test with data shaped like your real data, including the messy cases: missing fields, odd formats, duplicates.
- **You get:** Confidence the pipe works on real inputs, not just the happy path.

#### 7. Operate and transfer

- **We do:** Monitor volume and error rates, tighten rules where real data shows gaps, then hand over runbooks for pausing, replaying and changing each pipe.
- **You get:** Pipes your team can run without us.

### Offer B — Agentic workflows

#### 1. Pick almost-obvious work

- **We do:** Choose work that needs a little judgment but has a clear right answer most of the time: research, enrichment, first drafts, triage. Anything customer-facing keeps a human owner.
- **You get:** A short list of agent jobs with a clear definition of a correct result.

#### 2. Scope the agent

- **We do:** Write the agent's role and give it a tool allow-list (exactly which tools and data it may use). We name what stays human-only: pricing, legal and medical claims, and anything sent to a customer.
- **You get:** A written scope for each agent.

#### 3. A per-row plan

- **We do:** The agent checks what each record already contains and runs only the steps that record needs, instead of running every step on every row.
- **You get:** Lower cost and faster runs.

#### 4. Build with dry-run

- **We do:** Build so every proposed change is staged first. You see a diff (old value vs new value) before anything is written to the CRM or sent.
- **You get:** Nothing changes until it has been seen.

#### 5. Approval gate and queue

- **We do:** Route agent output into a review queue. Approved items land in the CRM or send tool. Rejected items are logged with the reason. Auto-send is off by default and only switched on if you ask in writing.
- **You get:** A human decision on everything that matters.

#### 6. Evaluate on past cases

- **We do:** Run the agent on historical cases where the right answer is known, and measure accuracy and false positives before it touches live work.
- **You get:** Evidence of how well the agent performs, before go-live.

#### 7. Operate and improve

- **We do:** Track approval and rejection rates, and roll back any bad batch. Prompts and tools are versioned like software, with change notes. Approvals and rejections feed the next round of improvements, always with human sign-off.
- **You get:** Agents that get better over time without drifting.

#### 8. Transfer

- **We do:** Hand over agent configs, prompts, tool lists, credentials in your accounts, and runbooks.
- **You get:** Agents you own and can change.

## Technical terms, in plain words

| Term | What it means |
|---|---|
| Automation pipe | A fixed set of steps that runs every time a trigger happens. |
| Trigger | The event that starts an automation, such as a form being submitted. |
| Transform | Cleaning or reshaping data on its way between tools. |
| Webhook | A message one tool sends another the moment something happens. |
| Field map | Which value from one tool goes into which field in another. |
| Idempotency | Running the same job twice gives the same result, with no duplicates. |
| Retry with backoff | Trying a failed step again, waiting longer between each attempt. |
| Dead-letter queue | A holding place for failed items, so they are reviewed instead of lost. |
| Agent | An AI that can use tools to research, draft or classify within set limits. |
| Tool allow-list | The exact tools and data an agent is permitted to use. |
| System prompt | The standing instructions that define an agent's job and limits. |
| Dry-run | Running a job to see what it would change, without changing anything. |
| Diff | A side-by-side view of the old value and the proposed new value. |
| Human-in-the-loop | A person reviews and approves before the action happens. |
| Rollback | Undoing a batch of changes. |
| Evaluation set | Past cases with known right answers, used to test an agent. |
| Hallucination | When an AI states something false with confidence. |
| Prompt versioning | Tracking every change to an agent's instructions, like code. |
| Model-agnostic | Not locked to one AI provider; the model can be swapped. |

## Outcomes

What you end up with, and how we measure it. Time saved is measured against how long the task took before, which we record in the inventory step.

| Outcome | How we measure it |
|---|---|
| Hours back each week | Task count × time per task, before vs after |
| Pipes that do not break silently | Share of runs that succeed; failures alerted to a named owner |
| Faster handoffs | Time from trigger (for example a form submitted) to CRM updated |
| Agents you can trust | Accuracy on the evaluation set; approval rate in the review queue |
| Mistakes caught, not shipped | Rejected items and rollbacks logged, with the reason |
| A stack you own | Configs, prompts and credentials in your accounts; runbooks handed over |

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
