// ============================================================
// Qualia Algebra — SVG Radial Transformation Map Engine
// Pure vanilla JS + SVG, no dependencies
// Standalone version extracted from The Disclosure Files
// ============================================================

(function () {
  "use strict";

  // ---- Constants ----
  var SVG_NS = "http://www.w3.org/2000/svg";
  var CENTER_X = 0;
  var CENTER_Y = 0;
  var CENTER_RADIUS = 80;
  var DIM_OPACITY = 0.08;
  var LINE_DEFAULT_OPACITY = 0.12;
  var LINE_HIGHLIGHT_OPACITY = 0.65;

  // ---- State ----
  var state = {
    selectedNode: null,
    showConnections: true,
    zoom: 1,
    panX: 0,
    panY: 0,
    isPanning: false,
    panStartX: 0,
    panStartY: 0,
    panStartViewX: 0,
    panStartViewY: 0,
    viewBox: { x: -800, y: -800, w: 1600, h: 1600 },
    nodePositions: {},
    nodeElements: {},
    labelElements: {},
    connectionPaths: []
  };

  // ---- Build lookup maps ----
  var qaNodeMap = {};
  var qaConnectionsByNode = {};
  var qaRingNodes = {};

  QA_NODES.forEach(function (n) { qaNodeMap[n.id] = n; });
  QA_NODES.forEach(function (n) { qaConnectionsByNode[n.id] = []; });

  QA_CONNECTIONS.forEach(function (c) {
    if (!qaConnectionsByNode[c[0]]) qaConnectionsByNode[c[0]] = [];
    if (!qaConnectionsByNode[c[1]]) qaConnectionsByNode[c[1]] = [];
    qaConnectionsByNode[c[0]].push(c[1]);
    qaConnectionsByNode[c[1]].push(c[0]);
  });

  QA_NODES.forEach(function (n) {
    if (!qaRingNodes[n.ring]) qaRingNodes[n.ring] = [];
    qaRingNodes[n.ring].push(n);
  });

  // ---- SVG helpers ----
  function svgEl(tag, attrs) {
    var el = document.createElementNS(SVG_NS, tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        el.setAttribute(k, attrs[k]);
      });
    }
    return el;
  }

  function deg2rad(deg) {
    return (deg * Math.PI) / 180;
  }

  // ---- Clear SVG ----
  function clearSVG() {
    var svg = document.getElementById("map-svg");
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    state.nodePositions = {};
    state.nodeElements = {};
    state.labelElements = {};
    state.connectionPaths = [];
  }

  // ---- Compute QA positions ----
  function computePositions() {
    var ringKeys = Object.keys(QA_RINGS);

    ringKeys.forEach(function (rKey) {
      var ringDef = QA_RINGS[rKey];
      var nodesInRing = qaRingNodes[rKey] || [];

      if (ringDef.radius === 0 || rKey === "center") {
        // Center node at origin
        nodesInRing.forEach(function (n) {
          state.nodePositions[n.id] = { x: CENTER_X, y: CENTER_Y };
        });
      } else {
        // Distribute evenly around the ring
        var count = nodesInRing.length;
        nodesInRing.forEach(function (n, i) {
          var angle = (360 / count) * i - 90; // Start from top
          var rad = deg2rad(angle);
          state.nodePositions[n.id] = {
            x: CENTER_X + Math.cos(rad) * ringDef.radius,
            y: CENTER_Y + Math.sin(rad) * ringDef.radius
          };
        });
      }
    });
  }

  // ---- Build SVG ----
  function buildSVG() {
    var svg = document.getElementById("map-svg");
    var vb = state.viewBox;
    svg.setAttribute("viewBox", vb.x + " " + vb.y + " " + vb.w + " " + vb.h);

    var defs = svgEl("defs");
    svg.appendChild(defs);

    // Radial gradient for central node
    var qaGrad = svgEl("radialGradient", { id: "qaCenterGrad", cx: "40%", cy: "35%", r: "65%" });
    var qaStop1 = svgEl("stop", { offset: "0%", "stop-color": QA_RINGS.center ? QA_RINGS.center.color : "#ffcc00" });
    var qaStop2 = svgEl("stop", { offset: "100%", "stop-color": "#aa8800" });
    qaGrad.appendChild(qaStop1);
    qaGrad.appendChild(qaStop2);
    defs.appendChild(qaGrad);

    // Glow filter for center
    var filterBig = svgEl("filter", { id: "glowBig", x: "-80%", y: "-80%", width: "260%", height: "260%" });
    var feGauss = svgEl("feGaussianBlur", { stdDeviation: "18", result: "coloredBlur" });
    var feMerge = svgEl("feMerge");
    var fmn1 = svgEl("feMergeNode", { "in": "coloredBlur" });
    var fmn2 = svgEl("feMergeNode", { "in": "SourceGraphic" });
    feMerge.appendChild(fmn1);
    feMerge.appendChild(fmn2);
    filterBig.appendChild(feGauss);
    filterBig.appendChild(feMerge);
    defs.appendChild(filterBig);

    // Create layer groups
    var gRings = svgEl("g", { id: "layer-rings" });
    var gConnections = svgEl("g", { id: "layer-connections" });
    var gNodes = svgEl("g", { id: "layer-nodes" });
    var gLabels = svgEl("g", { id: "layer-labels" });

    svg.appendChild(gRings);
    svg.appendChild(gConnections);
    svg.appendChild(gNodes);
    svg.appendChild(gLabels);

    // ---- Draw concentric ring circles ----
    var ringKeys = Object.keys(QA_RINGS);
    ringKeys.forEach(function (rKey) {
      var ringDef = QA_RINGS[rKey];
      if (ringDef.radius === 0 || rKey === "center") return;

      // Dashed ring circle
      var ringCircle = svgEl("circle", {
        cx: CENTER_X, cy: CENTER_Y, r: ringDef.radius,
        fill: "none",
        stroke: ringDef.color,
        "stroke-width": "1",
        "stroke-opacity": "0.15",
        "stroke-dasharray": "8 6"
      });
      gRings.appendChild(ringCircle);

      // Ring label along the ring (at the top)
      var ringLabel = svgEl("text", {
        x: CENTER_X, y: CENTER_Y - ringDef.radius - 10,
        "text-anchor": "middle",
        fill: ringDef.color,
        "fill-opacity": "0.5",
        "font-size": "9",
        "font-weight": "600",
        "font-family": "'Helvetica Neue', Arial, sans-serif",
        "letter-spacing": "1"
      });
      ringLabel.textContent = (ringDef.label || rKey).toUpperCase();
      gRings.appendChild(ringLabel);
    });

    // ---- Draw connections ----
    QA_CONNECTIONS.forEach(function (conn) {
      var p1 = state.nodePositions[conn[0]];
      var p2 = state.nodePositions[conn[1]];
      if (!p1 || !p2) return;

      var mx = (p1.x + p2.x) / 2;
      var my = (p1.y + p2.y) / 2;
      // Curve toward center
      var cx = mx * 0.55;
      var cy = my * 0.55;

      var d = "M " + p1.x + " " + p1.y + " Q " + cx + " " + cy + " " + p2.x + " " + p2.y;
      var path = svgEl("path", {
        d: d,
        fill: "none",
        stroke: "rgba(211,211,211," + LINE_DEFAULT_OPACITY + ")",
        "stroke-width": "1",
        "data-from": conn[0],
        "data-to": conn[1],
        class: "cross-connection"
      });
      gConnections.appendChild(path);
      state.connectionPaths.push(path);
    });

    // ---- Draw nodes ----
    QA_NODES.forEach(function (node) {
      var pos = state.nodePositions[node.id];
      if (!pos) return;
      var ringDef = QA_RINGS[node.ring] || { color: "#888888" };

      // Skip center node here — drawn separately below
      if (node.ring === "center") return;

      var group = svgEl("g", {
        class: "qa-node",
        "data-id": node.id,
        "data-ring": node.ring,
        style: "cursor:pointer"
      });

      var r = 13;

      // Node circle
      var circle = svgEl("circle", {
        cx: pos.x, cy: pos.y, r: r,
        fill: ringDef.color,
        "fill-opacity": "0.18",
        stroke: ringDef.color,
        "stroke-width": "1.5",
        "stroke-opacity": "0.6",
        class: "qa-circle"
      });
      group.appendChild(circle);

      // Label
      var labelOffY = r + 14;
      var label = svgEl("text", {
        x: pos.x,
        y: pos.y + labelOffY,
        "text-anchor": "middle",
        fill: "rgba(255,255,255,0.55)",
        "font-size": "8",
        "font-weight": "500",
        "font-family": "'Helvetica Neue', Arial, sans-serif",
        class: "qa-label"
      });

      var title = node.label || node.id;
      if (title.length > 22) {
        var words = title.split(/[\s\u2014\u2192]+/);
        var line1 = "";
        var line2 = "";
        var half = Math.ceil(words.length / 2);
        words.forEach(function (w, i) {
          if (i < half) line1 += (line1 ? " " : "") + w;
          else line2 += (line2 ? " " : "") + w;
        });
        var tspan1 = svgEl("tspan", { x: pos.x, dy: "0" });
        tspan1.textContent = line1;
        var tspan2 = svgEl("tspan", { x: pos.x, dy: "11" });
        tspan2.textContent = line2;
        label.appendChild(tspan1);
        label.appendChild(tspan2);
      } else {
        label.textContent = title;
      }

      gLabels.appendChild(label);
      gNodes.appendChild(group);

      state.nodeElements[node.id] = group;
      state.labelElements[node.id] = label;

      // Events
      group.addEventListener("click", function (e) {
        e.stopPropagation();
        selectNode(node.id);
      });
      group.addEventListener("mouseenter", function () {
        if (state.selectedNode !== node.id) {
          circle.setAttribute("fill-opacity", "0.35");
          circle.setAttribute("r", r * 1.15);
        }
        if (!state.selectedNode) {
          highlightNodeConnections(node.id, ringDef.color);
        }
      });
      group.addEventListener("mouseleave", function () {
        if (state.selectedNode !== node.id) {
          circle.setAttribute("fill-opacity", "0.18");
          circle.setAttribute("r", r);
        }
        if (!state.selectedNode) {
          unhighlightHoverConnections();
        }
      });
    });

    // ---- Draw central node ----
    var centerRing = QA_RINGS.center || { color: "#ffcc00", label: "[1,0,0,0]" };
    var centerNodes = qaRingNodes["center"] || [];
    var centerNodeData = centerNodes.length > 0 ? centerNodes[0] : null;

    var centerGroup = svgEl("g", {
      class: "center-node",
      "data-id": centerNodeData ? centerNodeData.id : "qa-center",
      style: "cursor:pointer"
    });

    // Background glow
    var centerGlow = svgEl("circle", {
      cx: CENTER_X, cy: CENTER_Y, r: CENTER_RADIUS + 30,
      fill: centerRing.color,
      "fill-opacity": "0.08",
      filter: "url(#glowBig)"
    });
    centerGroup.appendChild(centerGlow);

    // Outer ring
    var centerOuter = svgEl("circle", {
      cx: CENTER_X, cy: CENTER_Y, r: CENTER_RADIUS + 4,
      fill: "none",
      stroke: centerRing.color,
      "stroke-width": "1.5",
      "stroke-opacity": "0.3"
    });
    centerGroup.appendChild(centerOuter);

    // Main circle
    var centerCircle = svgEl("circle", {
      cx: CENTER_X, cy: CENTER_Y, r: CENTER_RADIUS,
      fill: "url(#qaCenterGrad)",
      stroke: centerRing.color,
      "stroke-width": "2.5"
    });
    centerGroup.appendChild(centerCircle);

    // Center title
    var centerTitle = svgEl("text", {
      x: CENTER_X, y: CENTER_Y - 10,
      "text-anchor": "middle",
      "dominant-baseline": "central",
      fill: "#ffffff",
      "font-size": "14",
      "font-weight": "700",
      "font-family": "'Helvetica Neue', Arial, sans-serif"
    });
    centerTitle.textContent = centerNodeData ? centerNodeData.label : centerRing.label;
    centerGroup.appendChild(centerTitle);

    // Center subtitle
    var centerSub = svgEl("text", {
      x: CENTER_X, y: CENTER_Y + 14,
      "text-anchor": "middle",
      "dominant-baseline": "central",
      fill: "rgba(255,255,255,0.5)",
      "font-size": "9",
      "font-family": "'Helvetica Neue', Arial, sans-serif"
    });
    centerSub.textContent = centerNodeData ? (centerNodeData.subtitle || "I Exist \u2014 Axiom 0") : "I Exist \u2014 Axiom 0";
    centerGroup.appendChild(centerSub);

    gNodes.appendChild(centerGroup);
    if (centerNodeData) {
      state.nodeElements[centerNodeData.id] = centerGroup;
    }

    centerGroup.addEventListener("click", function (e) {
      e.stopPropagation();
      if (centerNodeData) {
        selectNode(centerNodeData.id);
      }
    });
    centerGroup.addEventListener("mouseenter", function () {
      centerCircle.setAttribute("filter", "url(#glowBig)");
    });
    centerGroup.addEventListener("mouseleave", function () {
      centerCircle.removeAttribute("filter");
    });

    // ---- Click on background to deselect ----
    svg.addEventListener("click", function () {
      deselectAll();
    });
  }

  // ---- Selection ----
  function selectNode(nodeId) {
    var node = qaNodeMap[nodeId];
    if (!node) return;
    state.selectedNode = nodeId;

    var connectedIds = qaConnectionsByNode[nodeId] ? qaConnectionsByNode[nodeId].slice() : [];
    connectedIds.push(nodeId);

    // Dim everything
    dimAll();

    // Highlight connected
    connectedIds.forEach(function (id) {
      brightenNode(id);
    });

    // Highlight connections
    var ringDef = QA_RINGS[node.ring] || { color: "#888888" };
    state.connectionPaths.forEach(function (path) {
      var from = path.getAttribute("data-from");
      var to = path.getAttribute("data-to");
      if (from === nodeId || to === nodeId) {
        path.setAttribute("stroke", ringDef.color);
        path.setAttribute("stroke-opacity", LINE_HIGHLIGHT_OPACITY);
        path.setAttribute("stroke-width", "1.8");
      }
    });

    showPanel(nodeId);
  }

  function deselectAll() {
    state.selectedNode = null;
    resetVisuals();
    closePanel();
  }

  function dimAll() {
    // Dim all nodes
    Object.keys(state.nodeElements).forEach(function (id) {
      var el = state.nodeElements[id];
      el.style.opacity = DIM_OPACITY;
    });
    Object.keys(state.labelElements).forEach(function (id) {
      var el = state.labelElements[id];
      el.style.opacity = DIM_OPACITY;
    });

    // Dim all connections
    state.connectionPaths.forEach(function (path) {
      path.setAttribute("stroke", "rgba(211,211,211," + (LINE_DEFAULT_OPACITY * 0.3) + ")");
      path.setAttribute("stroke-opacity", LINE_DEFAULT_OPACITY * 0.3);
      path.setAttribute("stroke-width", "0.5");
    });
  }

  function brightenNode(id) {
    var el = state.nodeElements[id];
    if (el) el.style.opacity = "1";
    var lbl = state.labelElements[id];
    if (lbl) lbl.style.opacity = "1";
  }

  function resetVisuals() {
    Object.keys(state.nodeElements).forEach(function (id) {
      state.nodeElements[id].style.opacity = "1";
    });
    Object.keys(state.labelElements).forEach(function (id) {
      state.labelElements[id].style.opacity = "1";
    });
    state.connectionPaths.forEach(function (path) {
      path.setAttribute("stroke", "rgba(211,211,211," + LINE_DEFAULT_OPACITY + ")");
      path.setAttribute("stroke-opacity", LINE_DEFAULT_OPACITY);
      path.setAttribute("stroke-width", "1");
    });
  }

  // ---- Hover connection highlighting ----
  function highlightNodeConnections(nodeId, color) {
    state.connectionPaths.forEach(function (path) {
      var from = path.getAttribute("data-from");
      var to = path.getAttribute("data-to");
      if (from === nodeId || to === nodeId) {
        path.setAttribute("stroke", color);
        path.setAttribute("stroke-opacity", LINE_HIGHLIGHT_OPACITY);
        path.setAttribute("stroke-width", "1.8");
      }
    });
  }

  function unhighlightHoverConnections() {
    state.connectionPaths.forEach(function (path) {
      path.setAttribute("stroke", "rgba(211,211,211," + LINE_DEFAULT_OPACITY + ")");
      path.setAttribute("stroke-opacity", LINE_DEFAULT_OPACITY);
      path.setAttribute("stroke-width", "1");
    });
  }

  // ---- Panel ----
  var panel = null;
  var panelInner = null;

  function initPanel() {
    panel = document.querySelector(".panel");
    panelInner = document.querySelector(".panel-inner");
    document.querySelector(".panel-close").addEventListener("click", function (e) {
      e.stopPropagation();
      deselectAll();
    });

    // Delegated click handler for auto-linked keywords in descriptions
    panelInner.addEventListener("click", function (e) {
      var link = e.target.closest ? e.target.closest(".desc-link") : null;
      if (!link) {
        var el = e.target;
        while (el && el !== panelInner) {
          if (el.classList && el.classList.contains("desc-link")) {
            link = el;
            break;
          }
          el = el.parentNode;
        }
      }
      if (!link) return;

      var targetId = link.getAttribute("data-target");
      if (!targetId) return;

      e.stopPropagation();

      // Only navigate to QA nodes
      if (targetId.indexOf("qa-") === 0) {
        selectNode(targetId);

        // Pan to the node after a brief delay
        setTimeout(function () {
          var pos = state.nodePositions[targetId];
          if (pos) {
            state.viewBox.x = pos.x - state.viewBox.w / 2;
            state.viewBox.y = pos.y - state.viewBox.h / 2;
            updateViewBox();
          }
        }, 50);
      }
    });
  }

  function showPanel(nodeId) {
    var node = qaNodeMap[nodeId];
    if (!node) return;
    var ringDef = QA_RINGS[node.ring] || { color: "#888888", label: node.ring };

    var desc = node.description || "";

    var connectedIds = qaConnectionsByNode[nodeId] ? qaConnectionsByNode[nodeId].slice() : [];
    var chipsHtml = "";
    if (connectedIds.length) {
      chipsHtml = '<div class="panel-section-label">Connected Nodes (' + connectedIds.length + ')</div><div class="connected-chips">';
      connectedIds.forEach(function (cId) {
        var cn = qaNodeMap[cId];
        if (!cn) return;
        var cRing = QA_RINGS[cn.ring] || { color: "#888888" };
        chipsHtml += '<div class="chip" data-goto="' + cId + '"><span class="chip-dot" style="background:' + cRing.color + '"></span>' + escapeHtml(cn.label || cn.id) + '</div>';
      });
      chipsHtml += "</div>";
    }

    var subtitleHtml = node.subtitle ? '<p class="panel-description" style="margin-top:-4px;font-style:italic;opacity:0.7;">' + escapeHtml(node.subtitle) + '</p>' : '';

    panelInner.innerHTML =
      '<div class="panel-branch-tag" style="background:' + ringDef.color + '22;color:' + ringDef.color + '">' + escapeHtml(ringDef.label || node.ring) + '</div>' +
      '<h2 class="panel-title">' + escapeHtml(node.label || node.id) + '</h2>' +
      subtitleHtml +
      '<p class="panel-description">' + escapeHtml(desc) + '</p>' +
      chipsHtml;

    panel.classList.add("open");

    panelInner.querySelectorAll(".chip[data-goto]").forEach(function (chip) {
      chip.addEventListener("click", function () {
        var goto = chip.getAttribute("data-goto");
        if (goto) selectNode(goto);
      });
    });
  }

  function closePanel() {
    panel.classList.remove("open");
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // ---- Pan & Zoom ----
  function initPanZoom() {
    var svg = document.getElementById("map-svg");

    svg.addEventListener("mousedown", function (e) {
      if (e.target === svg || e.target.tagName === "line" || e.target.tagName === "path") {
        state.isPanning = true;
        state.panStartX = e.clientX;
        state.panStartY = e.clientY;
        state.panStartViewX = state.viewBox.x;
        state.panStartViewY = state.viewBox.y;
        svg.style.cursor = "grabbing";
      }
    });

    window.addEventListener("mousemove", function (e) {
      if (!state.isPanning) return;
      var dx = (e.clientX - state.panStartX) * (state.viewBox.w / svg.clientWidth);
      var dy = (e.clientY - state.panStartY) * (state.viewBox.h / svg.clientHeight);
      state.viewBox.x = state.panStartViewX - dx;
      state.viewBox.y = state.panStartViewY - dy;
      updateViewBox();
    });

    window.addEventListener("mouseup", function () {
      state.isPanning = false;
      svg.style.cursor = "grab";
    });

    svg.addEventListener("wheel", function (e) {
      e.preventDefault();
      var factor = e.deltaY > 0 ? 1.08 : 0.92;
      zoomBy(factor, e.clientX, e.clientY);
    }, { passive: false });

    // Touch support
    var lastTouchDist = 0;

    svg.addEventListener("touchstart", function (e) {
      if (e.touches.length === 1) {
        state.isPanning = true;
        state.panStartX = e.touches[0].clientX;
        state.panStartY = e.touches[0].clientY;
        state.panStartViewX = state.viewBox.x;
        state.panStartViewY = state.viewBox.y;
      } else if (e.touches.length === 2) {
        state.isPanning = false;
        lastTouchDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    }, { passive: true });

    svg.addEventListener("touchmove", function (e) {
      e.preventDefault();
      if (e.touches.length === 1 && state.isPanning) {
        var dx = (e.touches[0].clientX - state.panStartX) * (state.viewBox.w / svg.clientWidth);
        var dy = (e.touches[0].clientY - state.panStartY) * (state.viewBox.h / svg.clientHeight);
        state.viewBox.x = state.panStartViewX - dx;
        state.viewBox.y = state.panStartViewY - dy;
        updateViewBox();
      } else if (e.touches.length === 2) {
        var dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        var factor = lastTouchDist / dist;
        var mid = {
          x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
          y: (e.touches[0].clientY + e.touches[1].clientY) / 2
        };
        zoomBy(factor, mid.x, mid.y);
        lastTouchDist = dist;
      }
    }, { passive: false });

    svg.addEventListener("touchend", function () {
      state.isPanning = false;
    });
  }

  function zoomBy(factor, clientX, clientY) {
    var svg = document.getElementById("map-svg");
    var rect = svg.getBoundingClientRect();

    // Point in SVG coords where mouse is
    var px = state.viewBox.x + (clientX - rect.left) / rect.width * state.viewBox.w;
    var py = state.viewBox.y + (clientY - rect.top) / rect.height * state.viewBox.h;

    var newW = state.viewBox.w * factor;
    var newH = state.viewBox.h * factor;

    // Clamp zoom
    if (newW < 400 || newW > 10000) return;

    state.viewBox.x = px - (px - state.viewBox.x) * (newW / state.viewBox.w);
    state.viewBox.y = py - (py - state.viewBox.y) * (newH / state.viewBox.h);
    state.viewBox.w = newW;
    state.viewBox.h = newH;

    updateViewBox();
  }

  function updateViewBox() {
    var svg = document.getElementById("map-svg");
    svg.setAttribute("viewBox",
      state.viewBox.x + " " + state.viewBox.y + " " + state.viewBox.w + " " + state.viewBox.h);
  }

  function resetView() {
    state.viewBox = { x: -800, y: -800, w: 1600, h: 1600 };
    updateViewBox();
  }

  function zoomIn() {
    var svg = document.getElementById("map-svg");
    var rect = svg.getBoundingClientRect();
    zoomBy(0.8, rect.left + rect.width / 2, rect.top + rect.height / 2);
  }

  function zoomOut() {
    var svg = document.getElementById("map-svg");
    var rect = svg.getBoundingClientRect();
    zoomBy(1.25, rect.left + rect.width / 2, rect.top + rect.height / 2);
  }

  // ---- Toolbar ----
  function initToolbar() {
    document.getElementById("btn-reset").addEventListener("click", function () {
      deselectAll();
      resetView();
    });
    document.getElementById("btn-zoom-in").addEventListener("click", zoomIn);
    document.getElementById("btn-zoom-out").addEventListener("click", zoomOut);

    var btnToggle = document.getElementById("btn-toggle-connections");
    btnToggle.addEventListener("click", function () {
      state.showConnections = !state.showConnections;
      var layer = document.getElementById("layer-connections");
      if (layer) layer.style.display = state.showConnections ? "" : "none";
      btnToggle.classList.toggle("active", state.showConnections);
    });
    btnToggle.classList.add("active");

    document.getElementById("btn-search").addEventListener("click", function () {
      toggleSearch();
    });
  }

  // ---- Search ----
  function initSearch() {
    var container = document.querySelector(".search-container");
    var input = container.querySelector("input");
    var results = container.querySelector(".search-results");

    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      if (!q) {
        results.innerHTML = "";
        results.classList.remove("has-results");
        return;
      }

      var matches = QA_NODES.filter(function (n) {
        var title = (n.title || n.label || "").toLowerCase();
        var desc = (n.description || "").toLowerCase();
        var sub = (n.subtitle || "").toLowerCase();
        return title.indexOf(q) >= 0 || desc.indexOf(q) >= 0 || sub.indexOf(q) >= 0 || n.id.toLowerCase().indexOf(q) >= 0;
      }).slice(0, 12);

      if (matches.length === 0) {
        results.innerHTML = '<div style="padding:14px 16px;color:rgba(255,255,255,0.4);font-size:13px;">No results found</div>';
        results.classList.add("has-results");
        return;
      }

      var html = "";
      matches.forEach(function (n) {
        var ringDef = QA_RINGS[n.ring] || { color: "#888888", label: n.ring };
        var dotColor = ringDef.color;
        var tagLabel = ringDef.label || n.ring;
        var displayTitle = n.title || n.label || n.id;
        html += '<div class="search-result-item" data-id="' + n.id + '">' +
          '<span class="search-result-dot" style="background:' + dotColor + '"></span>' +
          '<span class="search-result-title">' + escapeHtml(displayTitle) + '</span>' +
          '<span class="search-result-branch">' + escapeHtml(tagLabel) + '</span>' +
          '</div>';
      });
      results.innerHTML = html;
      results.classList.add("has-results");

      results.querySelectorAll(".search-result-item").forEach(function (item) {
        item.addEventListener("click", function () {
          var id = item.getAttribute("data-id");

          container.classList.remove("open");
          input.value = "";
          results.innerHTML = "";
          results.classList.remove("has-results");

          selectNode(id);

          // Pan to node
          setTimeout(function () {
            var pos = state.nodePositions[id];
            if (pos) {
              state.viewBox.x = pos.x - state.viewBox.w / 2;
              state.viewBox.y = pos.y - state.viewBox.h / 2;
              updateViewBox();
            }
          }, 50);
        });
      });
    });

    // Close search on Escape
    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        container.classList.remove("open");
        input.value = "";
        results.innerHTML = "";
        results.classList.remove("has-results");
      }
    });

    // Close search on click outside
    document.addEventListener("click", function (e) {
      if (!container.contains(e.target) && !document.getElementById("btn-search").contains(e.target)) {
        container.classList.remove("open");
      }
    });
  }

  function toggleSearch() {
    var container = document.querySelector(".search-container");
    container.classList.toggle("open");
    if (container.classList.contains("open")) {
      setTimeout(function () {
        container.querySelector("input").focus();
      }, 100);
    }
  }

  // ---- Keyboard shortcuts ----
  function initKeyboard() {
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        deselectAll();
        var container = document.querySelector(".search-container");
        container.classList.remove("open");
      }
      if (e.key === "/" && !e.ctrlKey && !e.metaKey) {
        var active = document.activeElement;
        if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA")) return;
        e.preventDefault();
        toggleSearch();
      }
    });
  }

  // ---- Legend click-to-filter ----
  function initLegend() {
    document.querySelectorAll(".qa-legend-item").forEach(function (item) {
      item.addEventListener("click", function () {
        var ring = item.getAttribute("data-ring");
        if (!ring) return;

        // If a node is selected, deselect first
        deselectAll();

        // Dim everything, then brighten nodes in this ring
        dimAll();

        var nodesInRing = qaRingNodes[ring] || [];
        nodesInRing.forEach(function (n) {
          brightenNode(n.id);
        });

        // Highlight connections between nodes in this ring
        var ringIds = nodesInRing.map(function (n) { return n.id; });
        var ringDef = QA_RINGS[ring] || { color: "#888888" };
        state.connectionPaths.forEach(function (path) {
          var from = path.getAttribute("data-from");
          var to = path.getAttribute("data-to");
          var fromInRing = ringIds.indexOf(from) >= 0;
          var toInRing = ringIds.indexOf(to) >= 0;
          if (fromInRing || toInRing) {
            path.setAttribute("stroke", ringDef.color);
            path.setAttribute("stroke-opacity", fromInRing && toInRing ? LINE_HIGHLIGHT_OPACITY : "0.25");
            path.setAttribute("stroke-width", fromInRing && toInRing ? "1.8" : "1.2");
          }
        });
      });
    });
  }

  // ---- Header subtitle with dynamic counts ----
  function updateHeaderSubtitle() {
    var subtitle = document.getElementById("header-subtitle");
    if (subtitle) {
      var nodeCount = QA_NODES.length;
      var ringCount = Object.keys(QA_RINGS).length;
      subtitle.textContent = "A Mathematical Framework for Consciousness \u2014 " + nodeCount + " nodes \u00b7 " + ringCount + " rings";
    }
  }

  // ---- Initialization ----
  function init() {
    initPanel();
    initPanZoom();
    initToolbar();
    initSearch();
    initKeyboard();
    initLegend();
    updateHeaderSubtitle();

    clearSVG();
    computePositions();
    buildSVG();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
