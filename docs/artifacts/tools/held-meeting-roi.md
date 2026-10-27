# Tool: Cost-per-held meeting / outbound ROI calculator

**Status:** Spec’d for webapp v0 (D4 accepted 2026-10-26)  
**Full design:** `docs/superpowers/specs/2026-10-26-webapp-v0-design.md` §5

## One-liner

What does a meeting actually cost when you count the ones that **happen**?

## Formula (publish on-page)

```
held          = booked × show_rate
cost_per_held = monthly_spend ÷ held
pipeline      = held × value_per_held
roi_signal    = pipeline ÷ monthly_spend   // illustrative only
```

Defaults (UI): spend **$6,500**, booked **14**, show rate **45%**, value/held **$8,000** → ~**$1,032** cost per held. Softer 60%/high-booked demos understate no-show pain — avoid them as the first paint. Label every default; not a guarantee.

Market context to show near results: pay-per-held often **$600–$900**; fully loaded SDR ~**$10k–$14k/mo**.

## Gate

Results free → email/WhatsApp for PDF breakdown + book CTA.

## Not this tool

Catering revenue calculator (tool #2). CRM OAuth health graders. Invented “you’re losing $X” without user bases.
