(function () {
  "use strict";

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var projects = window.PROJECTS;
  var groups = window.PROJECT_GROUPS || {};

  function stackList(stack) {
    return '<ul class="stack" aria-label="Technologies">' +
      stack.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") +
      "</ul>";
  }

  function linkRow(p) {
    var parts = [];
    if (p.live) parts.push('<a href="' + esc(p.live) + '" target="_blank" rel="noopener">' +
      (p.group === "research" ? "Open the project site" : "Open live demo") + "</a>");
    if (p.repo) parts.push('<a href="' + esc(p.repo) + '" target="_blank" rel="noopener">View code on GitHub</a>');
    else parts.push('<span class="muted">Source code is private</span>');
    return '<p class="links">' + parts.join("") + "</p>";
  }

  function renderFeatured(list) {
    var el = document.getElementById("featured");
    if (!el) return;
    el.innerHTML = list.map(function (p) {
      var highlights = (p.highlights || []).length
        ? '<ul class="highlights">' + p.highlights.map(function (h) {
          return "<li>" + esc(h) + "</li>";
        }).join("") + "</ul>"
        : "";
      return '<article class="feature group-' + esc(p.group) + '">' +
        '<p class="feature-meta"><span>' + esc(p.year) + '</span>' +
        '<span class="group">' + esc(groups[p.group] || "") + "</span>" +
        (p.team ? "<span>" + esc(p.team) + "</span>" : "") + "</p>" +
        "<h3>" + esc(p.title) + "</h3>" +
        "<p>" + esc(p.description) + "</p>" +
        highlights +
        stackList(p.stack) +
        linkRow(p) +
        "</article>";
    }).join("");
  }

  function renderList(list) {
    var el = document.getElementById("project-list");
    var count = document.getElementById("project-count");
    if (!el) return;
    el.innerHTML = list.map(function (p) {
      return '<li class="group-' + esc(p.group) + '"><details>' +
        "<summary>" +
        '<span class="row-year">' + esc(p.year) + "</span>" +
        '<span><span class="row-title">' + esc(p.title) + "</span>" +
        '<span class="row-summary">' + esc(p.summary) + "</span></span>" +
        '<span class="row-group"><span class="dot" aria-hidden="true"></span>' +
        esc(groups[p.group] || "") + '<span class="row-toggle" aria-hidden="true"></span></span>' +
        "</summary>" +
        '<div class="row-body">' +
        (p.team ? '<p class="team">' + esc(p.team) + "</p>" : "") +
        "<p>" + esc(p.description) + "</p>" +
        stackList(p.stack) +
        linkRow(p) +
        "</div>" +
        "</details></li>";
    }).join("");
    if (count) count.textContent = "(" + list.length + ")";
  }

  function renderFilters(all) {
    var el = document.getElementById("filters");
    if (!el) return;
    var present = Object.keys(groups).filter(function (g) {
      return all.some(function (p) { return p.group === g; });
    });
    var options = [["all", "All"]].concat(present.map(function (g) { return [g, groups[g]]; }));
    el.innerHTML = options.map(function (o, i) {
      return '<button type="button" class="filter" data-group="' + esc(o[0]) +
        '" aria-pressed="' + (i === 0) + '">' + esc(o[1]) + "</button>";
    }).join("");

    el.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter");
      if (!btn) return;
      var group = btn.getAttribute("data-group");
      el.querySelectorAll(".filter").forEach(function (b) {
        b.setAttribute("aria-pressed", String(b === btn));
      });
      renderList(group === "all" ? all : all.filter(function (p) { return p.group === group; }));
    });
  }

  if (Array.isArray(projects) && projects.length) {
    var sorted = projects.slice().sort(function (a, b) { return b.year - a.year; });
    renderFeatured(projects.filter(function (p) { return p.featured; }));
    renderFilters(sorted);
    renderList(sorted);
  } else {
    var featuredEl = document.getElementById("featured");
    if (featuredEl) {
      featuredEl.innerHTML = '<p class="notice">The project list did not load. Reload the page, or browse the code on <a href="https://github.com/andricolae">GitHub</a>.</p>';
    }
  }

  var NODES = [
    { id: "angular", label: "Angular", kind: "dev", href: "#work" },
    { id: "next", label: "Next.js", kind: "dev", href: "#work" },
    { id: "python", label: "Python", kind: "dev", href: "#work" },
    { id: "school", label: "School Manager", kind: "dev", href: "#work" },
    { id: "expense", label: "Expense Tracker", kind: "dev", href: "#work" },
    { id: "interns", label: "Mentoring interns", kind: "dev", href: "#about" },
    { id: "ntt", label: "NTT DATA", kind: "dev", href: "#about" },
    { id: "java", label: "Java and Natural", kind: "dev", href: "#about" },
    { id: "vampirul", label: "Vampirul pipeline", kind: "res", href: "#work" },
    { id: "networks", label: "Undead Networks", kind: "res", href: "#research" },
    { id: "distant", label: "Distant reading", kind: "res", href: "#research" },
    { id: "dracula", label: "Dracula Inverted", kind: "res", href: "#research" },
    { id: "causal", label: "PhD: causal inference", kind: "res", href: "#research" },
    { id: "chapter", label: "Vampire Nation chapter", kind: "res", href: "#research" },
    { id: "digital", label: "Digital transformation", kind: "res", href: "#research" },
    { id: "desi", label: "DESI audits", kind: "aud", href: "#audit" },
    { id: "sme", label: "Romanian SMEs", kind: "aud", href: "#audit" },
    { id: "cyber", label: "Cybersecurity", kind: "aud", href: "#audit" },
    { id: "patch", label: "SecurityPatch", kind: "aud", href: "#audit" }
  ];
  var EDGES = [
    ["angular", "school"], ["angular", "expense"], ["next", "school"],
    ["interns", "angular"], ["python", "vampirul"], ["python", "causal"],
    ["vampirul", "networks"], ["vampirul", "distant"], ["distant", "dracula"],
    ["distant", "chapter"], ["networks", "dracula"], ["ntt", "java"], ["ntt", "angular"],
    ["school", "digital"], ["causal", "digital"], ["digital", "desi"],
    ["desi", "sme"], ["desi", "cyber"], ["cyber", "patch"], ["expense", "sme"]
  ];

  var stage = document.getElementById("graph-stage");
  var hint = document.getElementById("graph-hint");
  if (!stage) return;
  var defaultHint = hint ? hint.textContent : "";

  var W = 600, H = 500, PAD = 46;
  var byId = {};
  NODES.forEach(function (n) { byId[n.id] = n; n.links = []; });
  EDGES.forEach(function (e) {
    byId[e[0]].links.push(e[1]);
    byId[e[1]].links.push(e[0]);
  });

  var anchors = { dev: [170, 150], res: [400, 300], aud: [190, 380] };
  var seed = 7;
  function rand() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
  NODES.forEach(function (n) {
    var a = anchors[n.kind];
    n.x = a[0] + (rand() - 0.5) * 160;
    n.y = a[1] + (rand() - 0.5) * 120;
    n.vx = 0; n.vy = 0;
  });

  for (var step = 0; step < 420; step++) {
    var alpha = 1 - step / 420;
    for (var i = 0; i < NODES.length; i++) {
      for (var j = i + 1; j < NODES.length; j++) {
        var a1 = NODES[i], b1 = NODES[j];
        var dx = b1.x - a1.x, dy = b1.y - a1.y;
        var d2 = dx * dx + dy * dy + 0.01;
        var f = 9000 / d2;
        var d = Math.sqrt(d2);
        var fx = f * dx / d, fy = f * dy / d;
        a1.vx -= fx; a1.vy -= fy; b1.vx += fx; b1.vy += fy;
      }
    }
    EDGES.forEach(function (e) {
      var s = byId[e[0]], t = byId[e[1]];
      var dx = t.x - s.x, dy = t.y - s.y;
      var d = Math.sqrt(dx * dx + dy * dy) || 1;
      var k = (d - 105) * 0.045;
      var fx = k * dx / d, fy = k * dy / d;
      s.vx += fx; s.vy += fy; t.vx -= fx; t.vy -= fy;
    });
    NODES.forEach(function (n) {
      n.vx += (W / 2 - n.x) * 0.004;
      n.vy += (H / 2 - n.y) * 0.004;
      n.x += n.vx * 0.5 * alpha; n.y += n.vy * 0.5 * alpha;
      n.vx *= 0.6; n.vy *= 0.6;
    });
  }

  var stageWidth = stage.getBoundingClientRect().width || W;
  var fontSize = Math.max(13.5, Math.min(21, 11.5 * W / stageWidth));
  var lineGap = fontSize * 1.9;

  NODES.forEach(function (n) {
    n.r = 5 + Math.min(n.links.length, 5) * 1.3;
    n.w = n.r + 7 + n.label.length * fontSize * 0.55;
  });

  function fit() {
    var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    NODES.forEach(function (n) {
      minX = Math.min(minX, n.x); maxX = Math.max(maxX, n.x + n.w);
      minY = Math.min(minY, n.y); maxY = Math.max(maxY, n.y);
    });
    var sx = (W - 2 * PAD) / (maxX - minX || 1);
    var sy = (H - 2 * PAD) / (maxY - minY || 1);
    NODES.forEach(function (n) {
      n.x = PAD + (n.x - minX) * sx;
      n.y = PAD + (n.y - minY) * sy;
    });
  }
  fit();

  for (var pass = 0; pass < 80; pass++) {
    var moved = false;
    for (var p1 = 0; p1 < NODES.length; p1++) {
      for (var p2 = p1 + 1; p2 < NODES.length; p2++) {
        var m = NODES[p1], o = NODES[p2];
        var overlapX = Math.min(m.x + m.w, o.x + o.w) - Math.max(m.x - m.r, o.x - o.r);
        var overlapY = lineGap - Math.abs(m.y - o.y);
        if (overlapX > 0 && overlapY > 0) {
          var push = overlapY / 2 + 0.5;
          if (m.y <= o.y) { m.y -= push; o.y += push; } else { m.y += push; o.y -= push; }
          moved = true;
        }
      }
    }
    if (!moved) break;
    fit();
  }

  var NS = "http://www.w3.org/2000/svg";
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("role", "group");
  svg.setAttribute("aria-label", "Network of fields and projects");

  var edgeLayer = document.createElementNS(NS, "g");
  var nodeLayer = document.createElementNS(NS, "g");
  svg.appendChild(edgeLayer);
  svg.appendChild(nodeLayer);

  var origin = byId.vampirul;
  function distFromOrigin(n) { return Math.hypot(n.x - origin.x, n.y - origin.y); }
  var maxDist = Math.max.apply(null, NODES.map(distFromOrigin));

  var edgeEls = EDGES.map(function (e) {
    var s = byId[e[0]], t = byId[e[1]];
    var line = document.createElementNS(NS, "line");
    line.setAttribute("x1", s.x.toFixed(1)); line.setAttribute("y1", s.y.toFixed(1));
    line.setAttribute("x2", t.x.toFixed(1)); line.setAttribute("y2", t.y.toFixed(1));
    line.setAttribute("class", "graph-edge");
    var len = Math.hypot(t.x - s.x, t.y - s.y);
    var near = Math.min(distFromOrigin(s), distFromOrigin(t)) / maxDist;
    line.style.setProperty("--len", len.toFixed(1));
    line.style.setProperty("--delay", Math.round(near * 900) + "ms");
    line.dataset.a = e[0]; line.dataset.b = e[1];
    edgeLayer.appendChild(line);
    return line;
  });

  var nodeEls = NODES.map(function (n) {
    var g = document.createElementNS(NS, "g");
    g.setAttribute("class", "graph-node kind-" + n.kind);
    g.setAttribute("transform", "translate(" + n.x.toFixed(1) + " " + n.y.toFixed(1) + ")");
    g.setAttribute("tabindex", "0");
    g.setAttribute("role", "link");
    g.setAttribute("aria-label", n.label + ", connected to " +
      n.links.map(function (id) { return byId[id].label; }).join(", "));
    g.dataset.id = n.id;
    g.style.setProperty("--delay", Math.round(distFromOrigin(n) / maxDist * 900 + 150) + "ms");

    var r = n.r;
    var ring = document.createElementNS(NS, "circle");
    ring.setAttribute("class", "ring"); ring.setAttribute("r", r.toFixed(1));
    var core = document.createElementNS(NS, "circle");
    core.setAttribute("class", "core"); core.setAttribute("r", (r * 0.42).toFixed(1));
    var hit = document.createElementNS(NS, "circle");
    hit.setAttribute("r", "18"); hit.setAttribute("fill", "transparent"); hit.setAttribute("stroke", "none");

    var text = document.createElementNS(NS, "text");
    text.textContent = n.label;
    text.setAttribute("x", (r + 7).toFixed(1));
    text.setAttribute("y", (fontSize * 0.36).toFixed(1));
    text.setAttribute("font-size", fontSize.toFixed(1));

    g.appendChild(hit); g.appendChild(ring); g.appendChild(core); g.appendChild(text);
    nodeLayer.appendChild(g);
    return g;
  });

  stage.appendChild(svg);

  if (!reduceMotion) {
    stage.classList.add("is-drawing");
    setTimeout(function () { stage.classList.remove("is-drawing"); }, 2400);
  }

  function light(id) {
    var n = byId[id];
    var lit = {}; lit[id] = true;
    n.links.forEach(function (l) { lit[l] = true; });
    stage.classList.add("is-active");
    nodeEls.forEach(function (el) { el.classList.toggle("is-lit", !!lit[el.dataset.id]); });
    edgeEls.forEach(function (el) {
      el.classList.toggle("is-lit", el.dataset.a === id || el.dataset.b === id);
    });
    if (hint) {
      hint.textContent = n.label + " connects to " +
        n.links.map(function (l) { return byId[l].label; }).join(", ") + ".";
    }
  }
  function clear() {
    stage.classList.remove("is-active");
    nodeEls.forEach(function (el) { el.classList.remove("is-lit"); });
    edgeEls.forEach(function (el) { el.classList.remove("is-lit"); });
    if (hint) hint.textContent = defaultHint;
  }
  function go(id) {
    var target = document.querySelector(byId[id].href);
    if (target) target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  }

  nodeEls.forEach(function (el) {
    var id = el.dataset.id;
    el.addEventListener("mouseenter", function () { light(id); });
    el.addEventListener("mouseleave", clear);
    el.addEventListener("focus", function () { light(id); });
    el.addEventListener("blur", clear);
    el.addEventListener("click", function () { go(id); });
    el.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(id); }
    });
  });
})();
