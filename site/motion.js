/**
 * AgencyBAK prototype motion
 * B: thin hero parallax (desktop ≥768px)
 * C: one-shot services settle pan
 * Pauses CSS Ken Burns (A) when the tab is hidden
 */

(function () {
  var PARALLAX_BG = 0.2;
  var PARALLAX_MID = 0.45;
  var CAP = 80;
  var MIN_WIDTH = 768;

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function initMotion() {
    var media = document.getElementById("hero-media");
    var mid = document.getElementById("hero-mid");
    var stack = media && media.parentElement;
    var services = document.getElementById("services");
    var plate = document.getElementById("services-plate");

    if (!media || !stack) return;

    function syncPause() {
      if (document.visibilityState === "hidden" || prefersReducedMotion()) {
        media.classList.add("is-paused");
      } else {
        media.classList.remove("is-paused");
      }
    }

    document.addEventListener("visibilitychange", syncPause);
    syncPause();

    if (prefersReducedMotion()) return;

    var ticking = false;

    function applyParallax() {
      ticking = false;
      if (window.innerWidth < MIN_WIDTH) {
        stack.style.transform = "";
        if (mid) mid.style.transform = "";
        return;
      }
      var y = window.scrollY || 0;
      var bgY = clamp(y * PARALLAX_BG, -CAP, CAP);
      var midY = clamp(y * PARALLAX_MID, -CAP, CAP);
      stack.style.transform = "translate3d(0, " + bgY + "px, 0)";
      if (mid) {
        mid.style.transform = "translate3d(0, " + (midY - bgY) + "px, 0)";
      }
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(applyParallax);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    applyParallax();

    if (services && plate && "IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              plate.classList.add("is-settled");
              observer.disconnect();
            }
          });
        },
        { threshold: 0.4 }
      );
      observer.observe(services);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMotion);
  } else {
    initMotion();
  }
})();
