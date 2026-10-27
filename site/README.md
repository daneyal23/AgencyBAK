# AgencyBAK site prototype

Static marketing shell + held-meeting ROI calculator (webapp v0 public slice).

## Open

```bash
npx --yes serve site
# or open index.html / calculator.html directly
```

## Pages

| Path | What |
|------|------|
| `index.html` | Home, packages, capabilities, how/markets/about/contact |
| `calculator.html` | Cost-per-held meeting / outbound ROI tool |
| `dashboard.html` | Client results — booked vs held weekly log (localStorage) |

## Calculator

- Math: `js/held-meeting-roi.js` (`calculateHeldMeetingRoi`)
- UI: `js/calculator-page.js`
- Tests: `node site/js/held-meeting-roi.test.mjs`
- Dashboard tests: `node site/js/dashboard-stats.test.mjs`
- Gate: mailto + `localStorage` lead stub until Supabase

## Motions

| ID | What |
|----|------|
| A | Ken Burns on `.hero-media` |
| B | Thin hero parallax (`motion.js`, ≥768px) |
| C | Services settle pan once |

`prefers-reduced-motion: reduce` freezes all three.

## Specs

- `docs/superpowers/specs/2026-10-26-webapp-v0-design.md`
- `docs/superpowers/plans/2026-10-26-webapp-v0-public-calculator.md`
