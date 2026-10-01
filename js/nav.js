(function () {
  "use strict";

  var sidebar = document.getElementById("sidebar");
  if (!sidebar) return;

  var nav = sidebar.querySelector(".side-nav");
  var indicator = sidebar.querySelector(".side-indicator");
  var mainLinks = Array.prototype.slice.call(sidebar.querySelectorAll(".side-link"));
  var subLinks = Array.prototype.slice.call(sidebar.querySelectorAll(".side-sublink"));
  var toggle = document.querySelector(".menu-toggle");
  var scrim = document.querySelector(".scrim");
  var compact = window.matchMedia("(max-width: 64rem)");

  function targetOf(link) {
    return document.getElementById(link.getAttribute("data-target"));
  }

  function current(links) {
    var line = window.innerHeight * 0.33;
    var found = null;
    links.forEach(function (link) {
      var el = targetOf(link);
      if (el && el.getBoundingClientRect().top <= line) found = link;
    });
    return found;
  }

  var colours = { "k-dev": "var(--dev)", "k-res": "var(--res)", "k-aud": "var(--aud)" };

  function placeIndicator(link) {
    if (!indicator || !link) return;
    var navBox = nav.getBoundingClientRect();
    var box = link.getBoundingClientRect();
    indicator.style.transform = "translateY(" + (box.top - navBox.top) + "px)";
    indicator.style.height = box.height + "px";
    var colour = "var(--ink)";
    Object.keys(colours).forEach(function (k) {
      if (link.classList.contains(k)) colour = colours[k];
    });
    indicator.style.setProperty("--ind", colour);
  }

  var active = null;
  function update() {
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    var link = atBottom ? mainLinks[mainLinks.length - 1] : (current(mainLinks) || mainLinks[0]);

    if (link !== active) {
      mainLinks.forEach(function (l) {
        var on = l === link;
        if (on) l.setAttribute("aria-current", "true"); else l.removeAttribute("aria-current");
        l.parentNode.classList.toggle("is-open", on && !!l.parentNode.querySelector(".side-sub"));
      });
      active = link;
    }

    var openSubs = subLinks.filter(function (s) { return active.parentNode.contains(s); });
    var sub = current(openSubs);
    subLinks.forEach(function (s) {
      if (s === sub) s.setAttribute("aria-current", "true"); else s.removeAttribute("aria-current");
    });

    placeIndicator(active);
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { ticking = false; update(); });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  sidebar.addEventListener("transitionend", function (e) {
    if (e.target.classList && e.target.classList.contains("side-sub")) placeIndicator(active);
  });

  window.addEventListener("load", update);
  update();

  function setOpen(open) {
    sidebar.classList.toggle("is-open", open);
    if (scrim) scrim.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    if (toggle) {
      toggle.setAttribute("aria-expanded", String(open));
      var label = toggle.querySelector(".menu-label");
      if (label) label.textContent = open ? "Close" : "Menu";
    }
    if (open) {
      var first = sidebar.querySelector("a");
      if (first) first.focus();
      placeIndicator(active);
    } else if (toggle && sidebar.contains(document.activeElement)) {
      toggle.focus();
    }
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setOpen(!sidebar.classList.contains("is-open"));
    });
  }
  if (scrim) scrim.addEventListener("click", function () { setOpen(false); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && sidebar.classList.contains("is-open")) setOpen(false);
  });

  sidebar.addEventListener("click", function (e) {
    if (compact.matches && e.target.closest("a")) setOpen(false);
  });

  var onChange = function () { if (!compact.matches) setOpen(false); };
  if (compact.addEventListener) compact.addEventListener("change", onChange);
  else if (compact.addListener) compact.addListener(onChange);
})();
