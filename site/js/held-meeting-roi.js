/**
 * Held-meeting / outbound ROI math (spec §5).
 * Framework-agnostic — safe to re-use from a later React port.
 */

/**
 * @param {object} input
 * @param {number} input.monthlySpend
 * @param {number} input.meetingsBooked
 * @param {number} input.showRate — 0–1 (e.g. 0.6 for 60%)
 * @param {number} input.valuePerHeld
 * @param {number} [input.otherSourceMeetings=0]
 * @returns {{
 *   outboundBooked: number,
 *   held: number,
 *   costPerHeld: number|null,
 *   pipeline: number,
 *   roiSignal: number|null
 * }}
 */
export function calculateHeldMeetingRoi(input) {
  var spend = Number(input.monthlySpend);
  var booked = Number(input.meetingsBooked);
  var showRate = Number(input.showRate);
  var value = Number(input.valuePerHeld);
  var other = Number(input.otherSourceMeetings);
  if (!Number.isFinite(other) || other < 0) other = 0;

  if (![spend, booked, showRate, value].every(Number.isFinite)) {
    return {
      outboundBooked: 0,
      held: 0,
      costPerHeld: null,
      pipeline: 0,
      roiSignal: null,
    };
  }

  if (spend < 0) spend = 0;
  if (booked < 0) booked = 0;
  if (value < 0) value = 0;
  if (showRate < 0) showRate = 0;
  if (showRate > 1) showRate = 1;

  var outboundBooked = Math.max(0, booked - other);
  var held = outboundBooked * showRate;
  var pipeline = held * value;
  var costPerHeld = held > 0 ? spend / held : null;
  var roiSignal = spend > 0 ? pipeline / spend : null;

  return {
    outboundBooked: outboundBooked,
    held: held,
    costPerHeld: costPerHeld,
    pipeline: pipeline,
    roiSignal: roiSignal,
  };
}
