(function () {
  var btn = document.querySelector(".theme-toggle");
  if (!btn) return;

  function applyTheme() {
    var root = document.documentElement;
    var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    var next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  }

  btn.addEventListener("click", function () {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!document.startViewTransition || reduceMotion) {
      applyTheme();
      return;
    }

    var rect = btn.getBoundingClientRect();
    var x = rect.left + rect.width / 2;
    var y = rect.top + rect.height / 2;
    var radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    var root = document.documentElement;
    root.style.setProperty("--theme-transition-x", x + "px");
    root.style.setProperty("--theme-transition-y", y + "px");
    root.style.setProperty("--theme-transition-radius", radius + "px");

    // An aborted transition (rapid second click, or a document that isn't
    // rendering) rejects these; the theme is applied either way, so swallow them
    // rather than leaving an unhandled rejection in the console.
    var transition = document.startViewTransition(applyTheme);
    var noop = function () {};
    transition.ready.catch(noop);
    transition.finished.catch(noop);
    transition.updateCallbackDone.catch(noop);
  });
})();
