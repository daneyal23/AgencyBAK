import { calculateHeldMeetingRoi } from "./held-meeting-roi.js";

var PRESETS = {
  soft: { spend: 4000, booked: 20, showRate: 60, value: 5000, other: 0 },
  honest: { spend: 6500, booked: 14, showRate: 45, value: 8000, other: 0 },
  harsh: { spend: 8000, booked: 12, showRate: 35, value: 6000, other: 2 },
};

function $(id) {
  return document.getElementById(id);
}

function money(n) {
  if (n == null || !Number.isFinite(n)) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function num(n, digits) {
  if (n == null || !Number.isFinite(n)) return "—";
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: digits == null ? 1 : digits,
  }).format(n);
}

function readInputs() {
  return {
    monthlySpend: Number($("spend").value),
    meetingsBooked: Number($("booked").value),
    showRate: Number($("showRate").value) / 100,
    valuePerHeld: Number($("value").value),
    otherSourceMeetings: Number($("other").value) || 0,
  };
}

function applyPreset(name) {
  var p = PRESETS[name];
  if (!p) return;
  $("spend").value = p.spend;
  $("booked").value = p.booked;
  $("showRate").value = p.showRate;
  $("value").value = p.value;
  $("other").value = p.other;
  document.querySelectorAll(".preset").forEach(function (btn) {
    btn.classList.toggle("is-active", btn.getAttribute("data-preset") === name);
  });
  render();
}

function buildSummary(input, result, costPerBooked) {
  var lines = [
    "AgencyBAK — held-meeting working paper",
    "",
    "Assumptions (you entered these):",
    "- Monthly spend (USD): " + input.monthlySpend,
    "- Meetings booked / month: " + input.meetingsBooked,
    "- Show rate: " + (input.showRate * 100).toFixed(0) + "% (editable assumption)",
    "- Pipeline value per held (USD): " + input.valuePerHeld,
    "- Meetings from other sources: " + input.otherSourceMeetings,
    "",
    "Results:",
    "- Outbound booked: " + num(result.outboundBooked, 0),
    "- Held / month: " + num(result.held, 1),
    "- Cost per booked (vanity): " + money(costPerBooked),
    "- Cost per held (truth): " + money(result.costPerHeld),
    "- Implied pipeline / month: " + money(result.pipeline),
    "- ROI signal (pipeline ÷ spend): " +
      (result.roiSignal == null ? "—" : num(result.roiSignal, 2) + "×") +
      " — illustrative only",
    "",
    "No AgencyBAK historical averages used.",
    "Formula: held = outbound_booked × show_rate; cost_per_held = spend ÷ held",
    "Market ref (not our quote): pay-per-held ~$600–$900; SDR ~$10–14k/mo",
    "",
    "Packages: Pipeline Starter · GTM Machine · Demand System",
  ];
  return lines.join("\n");
}

function render() {
  var input = readInputs();
  var result = calculateHeldMeetingRoi(input);
  var costPerBooked =
    result.outboundBooked > 0 ? input.monthlySpend / result.outboundBooked : null;

  $("out-cost").textContent = money(result.costPerHeld);
  $("out-cost-held-dup").textContent = money(result.costPerHeld);
  $("out-cost-booked").textContent = money(costPerBooked);
  $("out-booked").textContent = num(result.outboundBooked, 0);
  $("out-held").textContent = num(result.held, 1);
  $("out-pipe").textContent = money(result.pipeline);
  $("out-roi").textContent =
    result.roiSignal == null ? "—" : num(result.roiSignal, 2) + "×";

  $("assumption-chips").textContent =
    "show " +
    (input.showRate * 100).toFixed(0) +
    "% · spend " +
    money(input.monthlySpend) +
    " · value/held " +
    money(input.valuePerHeld);

  var ghosts = Math.max(0, result.outboundBooked - result.held);
  if (result.outboundBooked > 0 && result.held > 0) {
    $("gap-note").textContent =
      num(ghosts, 1) +
      " of " +
      num(result.outboundBooked, 0) +
      " booked look like ghosts at this show rate — same spend, thinner denominator.";
  } else {
    $("gap-note").textContent = "";
  }

  var maxCost = Math.max(costPerBooked || 0, result.costPerHeld || 0, 1);
  var bookedPct = costPerBooked != null ? Math.min(100, (costPerBooked / maxCost) * 100) : 0;
  var heldPct =
    result.costPerHeld != null ? Math.min(100, (result.costPerHeld / maxCost) * 100) : 0;
  $("bar-booked").style.width = bookedPct + "%";
  $("bar-held").style.width = heldPct + "%";

  var summary = buildSummary(input, result, costPerBooked);
  $("print-body").textContent = summary;
  $("breakdown-preview").textContent = summary;

  return { input: input, result: result, costPerBooked: costPerBooked };
}

function onEmail() {
  var email = ($("email").value || "").trim();
  var status = $("gate-status");
  if (!email || email.indexOf("@") < 1) {
    status.textContent = "Add a work email so the summary is addressed to you.";
    $("email").focus();
    return;
  }
  var snap = render();
  var body = buildSummary(snap.input, snap.result, snap.costPerBooked);
  var mailto =
    "mailto:" +
    encodeURIComponent(email) +
    "?subject=" +
    encodeURIComponent("AgencyBAK held-meeting working paper") +
    "&body=" +
    encodeURIComponent(body + "\n\n— From the AgencyBAK calculator");
  try {
    localStorage.setItem(
      "agencybak_calc_lead",
      JSON.stringify({ email: email, at: Date.now(), input: snap.input, result: snap.result })
    );
  } catch (e) {
    /* ignore */
  }
  window.location.href = mailto;
  status.textContent =
    "Mail client opening with the working paper. A copy is saved in this browser until Supabase lead capture ships.";
}

function onPrint() {
  render();
  document.body.classList.add("printing-sheet");
  window.print();
  window.setTimeout(function () {
    document.body.classList.remove("printing-sheet");
  }, 500);
}

function init() {
  var form = $("roi-form");
  form.addEventListener("input", function () {
    document.querySelectorAll(".preset").forEach(function (btn) {
      btn.classList.remove("is-active");
    });
    render();
  });
  form.addEventListener("change", render);

  document.querySelectorAll(".preset").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyPreset(btn.getAttribute("data-preset"));
    });
  });

  $("email-btn").addEventListener("click", onEmail);
  $("print-btn").addEventListener("click", onPrint);
  render();
}

init();
