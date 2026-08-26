(function () {
  var nav = document.querySelector(".site-nav");
  if (!nav) return;

  var threshold = 24;
  var ticking = false;

  function update() {
    nav.classList.toggle("is-scrolled", window.scrollY > threshold);
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );

  update();
})();
