# AgencyBAK

Working repo for our growth agency: market research, positioning, marketed services,
commercial packages, and a static site prototype. Application/webapp product still pending.

## Where we sell

- **Markets:** US & Canada, UK & Ireland, EU, Australia & NZ, Gulf (GCC)
- **Clients:** food businesses (restaurants, cafés, food trucks/carts), B2B service firms,
  traditional SMEs, and local/consumer SMBs
- **Services:** outbound & lead gen, GTM engineering, CRM & RevOps, GTM strategy, websites,
  paid ads, SEO, AI automation

## Contents

| Path | What it is |
|---|---|
| `reports/Apero Advisors competitive landscape.md` | Competitor report: Apero Advisors teardown, similar agencies by segment and market, pricing benchmarks, openings, webapp implications |
| `research_notes/Apero Advisors competitive landscape/` | Raw research notes behind the report, one file per topic, with sources (includes `apero_like_peers.md`, `capacity_building.md`, `services_intel.md`) |
| `docs/DISCOVERY_QUESTIONS.md` | Open questions for the owner about the agency and the webapp; answer here |
| `docs/DECISIONS.md` | Owner decisions — D1–D4 + D5/D6 drafts accepted; D7 still open |
| `docs/artifacts/services/` | Marketed capability pages (8 lines) — taglines, finish→start workflows, three-lens close |
| `docs/artifacts/packages/` | Three Main Street commercial packages with USD starting bands |
| `docs/superpowers/specs/` | Design specs (cinematic pans, webapp v0) |
| `site/` | Static marketing prototype with cinematic pans |

## Research caveats

- Apero Advisors primary pages were read 2026-10-25–26 (home, About, Pricing, Case studies,
  Private equity, services, FAQ, compare, CRM stack pages). Peer notes: `apero_like_peers.md`.
  Capacity-building: `capacity_building.md`. Service deep dive: `services_intel.md`.
- Most other competitors still rest on 2026-10-22 search summaries; each notes file ends
  with a Gaps list. Prices are directional — check live pages before quoting clients.

## Next steps

1. Decide D7 (entity, currencies, RTL, who builds / timeline); harden D5 prices after sales tests.
2. Supabase: calculator lead capture + dashboard auth/sync (replace localStorage).
3. Swap real hero photography into `site/`; Astro/Next when multi-route SEO matters; catering calculator as tool #2.
