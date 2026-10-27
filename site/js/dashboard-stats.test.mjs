import assert from "node:assert/strict";
import { aggregateWeeks, SEED_WEEKS } from "./dashboard-stats.js";

const a = aggregateWeeks(SEED_WEEKS);
assert.equal(a.totals.booked, 18);
assert.equal(a.totals.held, 9);
assert.equal(a.totals.spend, 13000);
assert.ok(Math.abs(a.showRate - 0.5) < 0.001);
assert.ok(Math.abs(a.costPerHeld - 13000 / 9) < 0.01);
assert.ok(Math.abs(a.costPerBooked - 13000 / 18) < 0.01);

const empty = aggregateWeeks([]);
assert.equal(empty.costPerHeld, null);
assert.equal(empty.showRate, null);

console.log("dashboard-stats.test.mjs: PASS");
