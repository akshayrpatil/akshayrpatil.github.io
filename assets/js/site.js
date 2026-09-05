(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Reveal on scroll ---------- */
  (function () {
    var nodes = document.querySelectorAll("[data-reveal]");
    if (!nodes.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      nodes.forEach(function (n) { n.setAttribute("data-reveal", "in"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-reveal", "in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach(function (n) { observer.observe(n); });
  })();

  /* ---------- Hero typewriter ---------- */
  (function () {
    var host = document.querySelector(".hero__typed");
    if (!host || reduceMotion) return;

    var text = host.getAttribute("data-typed") || "";
    var out = host.querySelector(".hero__typed-text");
    if (!out || !text) return;

    out.textContent = "";
    var i = 0;
    var timer = setInterval(function () {
      i += 1;
      out.textContent = text.slice(0, i);
      if (i >= text.length) clearInterval(timer);
    }, 42);
  })();

  /* ---------- Cursor ring ---------- */
  (function () {
    if (reduceMotion || !window.matchMedia("(hover: hover)").matches) return;

    var ring = document.createElement("div");
    ring.className = "cursor-ring";
    document.body.appendChild(ring);

    var x = -100, y = -100, tx = -100, ty = -100;

    window.addEventListener("mousemove", function (e) {
      tx = e.clientX;
      ty = e.clientY;
      var over = e.target.closest && e.target.closest("a,button,.role");
      ring.style.width = ring.style.height = (over ? 52 : 24) + "px";
      ring.style.opacity = over ? "1" : "0.5";
    });

    (function loop() {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      var r = ring.offsetWidth / 2;
      ring.style.transform = "translate(" + (x - r) + "px," + (y - r) + "px)";
      requestAnimationFrame(loop);
    })();
  })();

  /* ---------- Nav section highlighting (home) ---------- */
  (function () {
    var links = document.querySelectorAll(".site-nav__links a[data-section]");
    if (!links.length || !("IntersectionObserver" in window)) return;

    var linkFor = {};
    links.forEach(function (link) {
      linkFor[link.getAttribute("data-section")] = link;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = linkFor[entry.target.id];
          if (link) link.classList.toggle("is-active", entry.isIntersecting);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    Object.keys(linkFor).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  })();

  /* ---------- Case-study contents rail ---------- */
  (function () {
    var rail = document.querySelector(".case-study__rail");
    var body = document.querySelector(".case-study__body");
    if (!rail || !body) return;

    var headings = Array.prototype.slice.call(body.querySelectorAll("h2[id]"));
    if (headings.length < 2) return;

    var list = rail.querySelector("ol");
    var anchors = headings.map(function (heading, i) {
      var no = String(i + 1).padStart(2, "0");
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + heading.id;
      a.innerHTML = '<span class="case-study__rail-no">' + no + "</span>";
      a.appendChild(document.createTextNode(heading.textContent));
      li.appendChild(a);
      list.appendChild(li);
      return a;
    });

    rail.hidden = false;

    var offset = 120;
    var ticking = false;

    function sync() {
      ticking = false;
      var active = 0;
      for (var i = 0; i < headings.length; i++) {
        if (headings[i].getBoundingClientRect().top <= offset) active = i;
      }
      anchors.forEach(function (a, i) {
        a.classList.toggle("is-active", i === active);
      });
    }

    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(sync);
      },
      { passive: true }
    );

    sync();
  })();
})();
