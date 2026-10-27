/**
 * Aggregate weekly rows for the client results dashboard.
 * @param {Array<{contacted:number,replied:number,booked:number,held:number,pipeline:number,spend:number}>} weeks
 */
export function aggregateWeeks(weeks) {
  var list = Array.isArray(weeks) ? weeks : [];
  var totals = {
    contacted: 0,
    replied: 0,
    booked: 0,
    held: 0,
    pipeline: 0,
    spend: 0,
  };
  list.forEach(function (w) {
    totals.contacted += Number(w.contacted) || 0;
    totals.replied += Number(w.replied) || 0;
    totals.booked += Number(w.booked) || 0;
    totals.held += Number(w.held) || 0;
    totals.pipeline += Number(w.pipeline) || 0;
    totals.spend += Number(w.spend) || 0;
  });
  var showRate = totals.booked > 0 ? totals.held / totals.booked : null;
  var costPerHeld = totals.held > 0 && totals.spend > 0 ? totals.spend / totals.held : null;
  var costPerBooked =
    totals.booked > 0 && totals.spend > 0 ? totals.spend / totals.booked : null;
  return {
    totals: totals,
    showRate: showRate,
    costPerHeld: costPerHeld,
    costPerBooked: costPerBooked,
  };
}

export var SEED_WEEKS = [
  {
    id: "seed-1",
    label: "2026-W40",
    contacted: 180,
    replied: 12,
    booked: 8,
    held: 4,
    pipeline: 32000,
    spend: 6500,
  },
  {
    id: "seed-2",
    label: "2026-W41",
    contacted: 210,
    replied: 15,
    booked: 10,
    held: 5,
    pipeline: 40000,
    spend: 6500,
  },
];
