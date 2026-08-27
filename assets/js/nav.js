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

  var links = document.querySelectorAll(".site-nav__links a[data-section]");
  if (links.length && "IntersectionObserver" in window) {
    var linkFor = {};
    links.forEach(function (link) {
      linkFor[link.getAttribute("data-section")] = link;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = linkFor[entry.target.id];
          if (!link) return;
          link.classList.toggle("is-active", entry.isIntersecting);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    Object.keys(linkFor).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }
})();
