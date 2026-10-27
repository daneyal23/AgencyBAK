import { aggregateWeeks, SEED_WEEKS } from "./dashboard-stats.js";

var STORAGE_KEY = "agencybak_dashboard_weeks";

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

function uid() {
  return "w-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 7);
}

function loadWeeks() {
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return SEED_WEEKS.map(function (w) {
      return Object.assign({}, w);
    });
    var parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || !parsed.length) {
      return SEED_WEEKS.map(function (w) {
        return Object.assign({}, w);
      });
    }
    return parsed;
  } catch (e) {
    return SEED_WEEKS.map(function (w) {
      return Object.assign({}, w);
    });
  }
}

function saveWeeks(weeks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(weeks));
}

function readForm() {
  return {
    id: uid(),
    label: ($("week-label").value || "").trim() || "Week",
    contacted: Number($("contacted").value) || 0,
    replied: Number($("replied").value) || 0,
    booked: Number($("booked").value) || 0,
    held: Number($("held").value) || 0,
    pipeline: Number($("pipeline").value) || 0,
    spend: Number($("spend").value) || 0,
  };
}

function renderTruth(agg) {
  $("tot-booked").textContent = num(agg.totals.booked, 0);
  $("tot-held").textContent = num(agg.totals.held, 0);
  $("tot-show").textContent =
    agg.showRate == null ? "—" : (agg.showRate * 100).toFixed(0) + "%";
  $("tot-cost-held").textContent = money(agg.costPerHeld);
  $("tot-cost-held-line").textContent = money(agg.costPerHeld);
  $("tot-cost-booked").textContent = money(agg.costPerBooked);
  $("tot-pipe").textContent = money(agg.totals.pipeline);
  $("tot-spend").textContent = money(agg.totals.spend);

  var max = Math.max(agg.costPerBooked || 0, agg.costPerHeld || 0, 1);
  $("bar-booked").style.width =
    agg.costPerBooked != null ? Math.min(100, (agg.costPerBooked / max) * 100) + "%" : "0%";
  $("bar-held").style.width =
    agg.costPerHeld != null ? Math.min(100, (agg.costPerHeld / max) * 100) + "%" : "0%";

  var ghosts = Math.max(0, agg.totals.booked - agg.totals.held);
  $("truth-note").textContent =
    agg.totals.booked > 0
      ? num(ghosts, 0) +
        " booked did not hold across logged weeks — same spend logic as the calculator."
      : "Add a week to see booked vs held.";
}

function renderTable(weeks) {
  var tbody = $("weeks-body");
  tbody.innerHTML = "";
  if (!weeks.length) {
    var empty = document.createElement("tr");
    empty.innerHTML = '<td colspan="8">No weeks yet.</td>';
    tbody.appendChild(empty);
    return;
  }
  weeks
    .slice()
    .reverse()
    .forEach(function (w) {
      var tr = document.createElement("tr");
      tr.innerHTML =
        "<td>" +
        escapeHtml(w.label) +
        "</td><td class='mono'>" +
        num(w.contacted, 0) +
        "</td><td class='mono'>" +
        num(w.replied, 0) +
        "</td><td class='mono'>" +
        num(w.booked, 0) +
        "</td><td class='mono'>" +
        num(w.held, 0) +
        "</td><td class='mono'>" +
        money(w.pipeline) +
        "</td><td class='mono'>" +
        money(w.spend) +
        "</td><td><button type='button' class='linkish' data-del='" +
        escapeHtml(w.id) +
        "'>Remove</button></td>";
      tbody.appendChild(tr);
    });
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
}

function render() {
  var weeks = loadWeeks();
  renderTable(weeks);
  renderTruth(aggregateWeeks(weeks));
  $("export-box").value = JSON.stringify(weeks, null, 2);
}

function onAdd(e) {
  e.preventDefault();
  var row = readForm();
  if (row.held > row.booked) {
    $("form-status").textContent = "Held cannot exceed booked for a week.";
    return;
  }
  var weeks = loadWeeks();
  weeks.push(row);
  saveWeeks(weeks);
  $("form-status").textContent = "Week saved in this browser.";
  $("week-form").reset();
  render();
}

function onDelete(e) {
  var btn = e.target.closest("[data-del]");
  if (!btn) return;
  var id = btn.getAttribute("data-del");
  var weeks = loadWeeks().filter(function (w) {
    return w.id !== id;
  });
  saveWeeks(weeks);
  render();
}

function onExport() {
  var blob = new Blob([$("export-box").value], { type: "application/json" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "agencybak-weeks.json";
  a.click();
  URL.revokeObjectURL(a.href);
}

function onImport() {
  var status = $("import-status");
  try {
    var parsed = JSON.parse($("export-box").value);
    if (!Array.isArray(parsed)) throw new Error("Expected an array");
    parsed = parsed.map(function (w) {
      return {
        id: w.id || uid(),
        label: w.label || "Week",
        contacted: Number(w.contacted) || 0,
        replied: Number(w.replied) || 0,
        booked: Number(w.booked) || 0,
        held: Number(w.held) || 0,
        pipeline: Number(w.pipeline) || 0,
        spend: Number(w.spend) || 0,
      };
    });
    saveWeeks(parsed);
    status.textContent = "Imported " + parsed.length + " week(s).";
    render();
  } catch (err) {
    status.textContent = "Import failed — paste valid JSON array of weeks.";
  }
}

function onResetSeed() {
  saveWeeks(
    SEED_WEEKS.map(function (w) {
      return Object.assign({}, w);
    })
  );
  $("import-status").textContent = "Restored sample weeks.";
  render();
}

function init() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    saveWeeks(
      SEED_WEEKS.map(function (w) {
        return Object.assign({}, w);
      })
    );
  }
  $("week-form").addEventListener("submit", onAdd);
  $("weeks-body").addEventListener("click", onDelete);
  $("export-btn").addEventListener("click", onExport);
  $("import-btn").addEventListener("click", onImport);
  $("seed-btn").addEventListener("click", onResetSeed);
  render();
}

init();
