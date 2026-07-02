/* =========================================================================
   Avaliação por estrelas — armazenamento local, sem servidor.

   Como o site é estático (sem back-end), os votos ficam guardados no
   localStorage do próprio navegador. Na prática, isso significa que a média
   e o número de votos refletem o que foi votado NAQUELE dispositivo — o que
   funciona bem, por exemplo, num computador compartilhado da escola.

   Quer transformar isso num placar de verdade, somado entre todo mundo?
   Basta trocar as funções "read" e "write" abaixo por chamadas a um serviço
   (uma planilha, um banco, uma função na nuvem). O resto da página continua igual.
   ========================================================================= */
(function () {
  var PREFIX = "pedagogical:rating:";

  function read(id) {
    try {
      var raw = localStorage.getItem(PREFIX + id);
      if (!raw) return { count: 0, sum: 0 };
      var o = JSON.parse(raw);
      return { count: o.count || 0, sum: o.sum || 0 };
    } catch (e) {
      return { count: 0, sum: 0 };
    }
  }

  function write(id, data) {
    try { localStorage.setItem(PREFIX + id, JSON.stringify(data)); } catch (e) { /* ignora */ }
  }

  window.RATINGS = {
    // Estado atual de um recurso: total de votos, soma e média.
    get: function (id) {
      var d = read(id);
      return { count: d.count, sum: d.sum, avg: d.count ? d.sum / d.count : 0 };
    },
    // Registra um novo voto (1 a 5 estrelas) e devolve o estado atualizado.
    vote: function (id, stars) {
      var d = read(id);
      d.count += 1;
      d.sum += stars;
      write(id, d);
      return { count: d.count, sum: d.sum, avg: d.sum / d.count };
    }
  };
})();
