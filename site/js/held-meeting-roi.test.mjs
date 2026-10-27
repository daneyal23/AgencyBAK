import assert from "node:assert/strict";
import { calculateHeldMeetingRoi } from "./held-meeting-roi.js";

const r = calculateHeldMeetingRoi({
  monthlySpend: 6500,
  meetingsBooked: 14,
  showRate: 0.45,
  valuePerHeld: 8000,
  otherSourceMeetings: 0,
});

assert.equal(r.outboundBooked, 14);
assert.equal(r.held, 6.3);
assert.ok(Math.abs(r.costPerHeld - 6500 / 6.3) < 0.01);
assert.equal(r.pipeline, 6.3 * 8000);
assert.ok(Math.abs(r.roiSignal - (6.3 * 8000) / 6500) < 0.01);

const softDemo = calculateHeldMeetingRoi({
  monthlySpend: 4000,
  meetingsBooked: 20,
  showRate: 0.6,
  valuePerHeld: 5000,
});
assert.equal(softDemo.held, 12);
assert.ok(Math.abs(softDemo.costPerHeld - 4000 / 12) < 0.01);

const zeroHeld = calculateHeldMeetingRoi({
  monthlySpend: 4000,
  meetingsBooked: 0,
  showRate: 0.6,
  valuePerHeld: 5000,
});
assert.equal(zeroHeld.held, 0);
assert.equal(zeroHeld.costPerHeld, null);

const other = calculateHeldMeetingRoi({
  monthlySpend: 3000,
  meetingsBooked: 10,
  showRate: 0.5,
  valuePerHeld: 2000,
  otherSourceMeetings: 4,
});
assert.equal(other.outboundBooked, 6);
assert.equal(other.held, 3);
assert.equal(other.costPerHeld, 1000);

console.log("held-meeting-roi.test.mjs: PASS");
