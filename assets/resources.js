/* =========================================================================
   Catálogo da biblioteca — FONTE ÚNICA DE VERDADE dos recursos.
   Para adicionar um recurso novo: copie a pasta recursos/_template/,
   crie sua página e acrescente um objeto aqui embaixo. Só isso.

   (Usamos um .js com variável global, e não um .json via fetch, para que
    a página inicial funcione mesmo aberta por duplo-clique, sem servidor.)
   ========================================================================= */
window.PEDAGOGICAL_RESOURCES = [
  {
    id: "matematica-figurinhas",
    titulo: "Álbum da Copa: quando fica difícil não repetir?",
    area: "Matemática",
    areaSlug: "matematica",
    segmento: "Ensino Médio",
    series: ["1ª série EM", "2ª série EM"],
    assunto: "Funções e Probabilidade",
    habilidades: ["EM13MAT406", "EM13MAT311", "EM13MAT101"],
    tags: ["função afim", "probabilidade", "valor esperado", "modelagem"],
    resumo: "Simulador que plota a probabilidade de sair figurinha repetida em função de quantas você já colou — da reta simples ao valor esperado do pacote.",
    path: "recursos/matematica-figurinhas/index.html"
  }
  // Próximos recursos entram aqui (veja recursos/_template/ e o README).
];
