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
  },
  {
    id: "ciencias-humanas-linha-do-tempo-clima",
    titulo: "Do carvão às COPs: uma linha do tempo do clima e do mundo moderno",
    area: "Ciências Humanas",
    areaSlug: "ciencias-humanas",
    segmento: "Anos Finais",
    series: ["9º ano"],
    assunto: "Mundo contemporâneo e mudança climática",
    habilidades: ["EF09HI33", "EF09HI34", "EF09GE07"],
    tags: ["revolução industrial", "mudança climática", "gases de efeito estufa", "correlação e causa", "leitura de gráficos"],
    resumo: "Linha do tempo interativa de 1750 a hoje: o aluno cruza os marcos do mundo moderno com camadas opcionais dos gases de efeito estufa (CO₂, metano, óxido nitroso) e da temperatura — sem conta pesada, focando no raciocínio histórico e na diferença entre andar junto e causar.",
    path: "recursos/ciencias-humanas-linha-do-tempo-clima/index.html"
  },
  {
    id: "ciencias-natureza-boia-ou-afunda",
    titulo: "Boia ou afunda? Adivinhe e descubra",
    area: "Ciências da Natureza",
    areaSlug: "ciencias-natureza",
    segmento: "Educação Infantil",
    series: ["Pré-escola (4–5 anos)"],
    assunto: "Flutuação: prever, observar e comparar",
    habilidades: ["EI03ET01", "EI03ET05", "EI03ET04"],
    tags: ["flutuação", "boia ou afunda", "previsão", "método científico", "propriedades dos objetos", "água"],
    resumo: "Brincadeira científica para os pequenos: a criança arrisca um palpite (boia ou afunda?), solta o objeto na água e compara com o que aconteceu. Objetos escolhidos de propósito para quebrar a ideia de que 'grande afunda' — a maçã boia, a moeda afunda. O foco é prever, observar e mudar de ideia diante da evidência.",
    path: "recursos/ciencias-natureza-boia-ou-afunda/index.html"
  },
  {
    id: "linguagens-sinonimos",
    titulo: "Qual palavra combina? Um jogo de sinônimos",
    area: "Linguagens",
    areaSlug: "linguagens",
    segmento: "Anos Iniciais",
    series: ["3º ano", "4º ano"],
    assunto: "Sinônimos, vocabulário e sentido",
    habilidades: ["EF35LP06", "EF35LP08"],
    tags: ["sinônimos", "vocabulário", "sentido das palavras", "coesão", "substituição lexical", "leitura em voz alta"],
    resumo: "A criança troca uma palavra da frase por sinônimos e percebe o que muda: a força, o clima, às vezes o próprio sentido. Mostra que sinônimo 'perfeito' quase não existe e que escolher a palavra certa depende do contexto — uma decisão de quem escreve.",
    path: "recursos/linguagens-sinonimos/index.html"
  }
  // Próximos recursos entram aqui (veja recursos/_template/ e o README).
];
