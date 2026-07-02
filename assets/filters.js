/* =========================================================================
   Filtro client-side da página inicial. Sem dependências, sem servidor.
   Lê window.PEDAGOGICAL_RESOURCES (definido em assets/resources.js).
   ========================================================================= */
(function () {
  var RESOURCES = window.PEDAGOGICAL_RESOURCES || [];

  // Estado dos filtros ativos (conjuntos de valores selecionados) + busca textual
  var state = { area: new Set(), segmento: new Set(), serie: new Set(), habilidade: new Set(), q: "" };

  var grid = document.getElementById("grid");
  var countEl = document.getElementById("count");

  // ---- Monta os valores únicos de cada faceta ----------------------------
  function uniq(getter) {
    var s = new Set();
    RESOURCES.forEach(function (r) {
      var v = getter(r);
      (Array.isArray(v) ? v : [v]).forEach(function (x) { if (x) s.add(x); });
    });
    return Array.from(s);
  }

  var facets = {
    area:       { el: document.getElementById("filter-area"),       values: uniq(function (r) { return r.area; }) },
    segmento:   { el: document.getElementById("filter-segmento"),   values: orderSegmentos(uniq(function (r) { return r.segmento; })) },
    serie:      { el: document.getElementById("filter-serie"),      values: uniq(function (r) { return r.series; }) },
    habilidade: { el: document.getElementById("filter-habilidade"), values: uniq(function (r) { return r.habilidades; }).sort() }
  };

  function orderSegmentos(arr) {
    var ordem = ["Educação Infantil", "Anos Iniciais", "Anos Finais", "Ensino Médio"];
    return arr.slice().sort(function (a, b) { return ordem.indexOf(a) - ordem.indexOf(b); });
  }

  // Nome da área -> slug (para colorir os chips do filtro como nos cards)
  var areaSlugByName = {};
  RESOURCES.forEach(function (r) { areaSlugByName[r.area] = r.areaSlug; });

  // ---- Renderiza os chips de cada faceta ---------------------------------
  Object.keys(facets).forEach(function (key) {
    var f = facets[key];
    f.values.forEach(function (value) {
      var chip = document.createElement("button");
      chip.className = "chip";
      // Mesma identidade visual dos cards: Área ganha a cor da área;
      // Habilidade ganha o visual de código monoespaçado.
      if (key === "area" && areaSlugByName[value]) chip.className += " chip-area area-" + areaSlugByName[value];
      if (key === "habilidade") chip.className += " chip-hab";
      chip.type = "button";
      chip.textContent = value;
      chip.setAttribute("aria-pressed", "false");
      chip.addEventListener("click", function () {
        var pressed = chip.getAttribute("aria-pressed") === "true";
        chip.setAttribute("aria-pressed", String(!pressed));
        if (pressed) state[key].delete(value); else state[key].add(value);
        render();
      });
      f.el.appendChild(chip);
    });
  });

  // ---- Busca textual -----------------------------------------------------
  document.getElementById("search").addEventListener("input", function (e) {
    state.q = e.target.value.trim().toLowerCase();
    render();
  });

  // ---- Limpar ------------------------------------------------------------
  document.getElementById("clear").addEventListener("click", function () {
    state = { area: new Set(), segmento: new Set(), serie: new Set(), habilidade: new Set(), q: "" };
    document.getElementById("search").value = "";
    document.querySelectorAll(".chip").forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
    render();
  });

  // ---- Lógica de correspondência (E entre facetas, OU dentro da faceta) ---
  function matches(r) {
    if (state.area.size && !state.area.has(r.area)) return false;
    if (state.segmento.size && !state.segmento.has(r.segmento)) return false;
    if (state.serie.size && !r.series.some(function (s) { return state.serie.has(s); })) return false;
    if (state.habilidade.size && !r.habilidades.some(function (h) { return state.habilidade.has(h); })) return false;
    if (state.q) {
      var blob = [r.titulo, r.assunto, r.resumo, r.area, r.segmento]
        .concat(r.tags, r.series, r.habilidades).join(" ").toLowerCase();
      if (blob.indexOf(state.q) === -1) return false;
    }
    return true;
  }

  // ---- Card --------------------------------------------------------------
  function cardHTML(r) {
    var habs = r.habilidades.map(function (h) { return '<span class="hab">' + esc(h) + "</span>"; }).join("");
    return (
      '<a class="card" href="' + esc(r.path) + '">' +
        '<div class="top">' +
          '<span class="badge area-' + esc(r.areaSlug) + '">' + esc(r.area) + "</span>" +
          '<span class="badge seg">' + esc(r.segmento) + "</span>" +
        "</div>" +
        "<h3>" + esc(r.titulo) + "</h3>" +
        '<p class="resumo">' + esc(r.resumo) + "</p>" +
        '<div class="card-facets">' +
          '<div class="facet">' +
            '<span class="facet-label">Assunto</span>' +
            '<div class="facet-vals"><span class="assunto-chip">' + esc(r.assunto) + "</span></div>" +
          "</div>" +
          '<div class="facet">' +
            '<span class="facet-label">Habilidades BNCC</span>' +
            '<div class="facet-vals">' + habs + "</div>" +
          "</div>" +
        "</div>" +
      "</a>"
    );
  }

  function render() {
    var list = RESOURCES.filter(matches);
    grid.innerHTML = list.length
      ? list.map(cardHTML).join("")
      : '<p class="empty">Nenhum recurso encontrado com esses filtros. Tente limpar alguns.</p>';
    countEl.textContent = list.length + (list.length === 1 ? " recurso" : " recursos");
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  render();
})();
