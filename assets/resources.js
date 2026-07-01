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
    id: "linguagens-fabrica-poemas",
    titulo: "Fábrica de Poemas",
    area: "Linguagens",
    areaSlug: "linguagens",
    segmento: "Anos Iniciais",
    series: ["4º ano", "5º ano"],
    assunto: "Poesia, rima e sonoridade",
    habilidades: ["EF35LP30", "EF15LP16", "EF35LP07"],
    tags: ["rima", "métrica", "estrofe", "consciência fonológica"],
    resumo: "Digite um poema e a ferramenta destaca as rimas, conta as sílabas de cada verso e revela o esquema de rimas (ABAB…) em tempo real.",
    path: "recursos/linguagens-fabrica-poemas/index.html"
  },
  {
    id: "ciencias-natureza-cadeia-alimentar",
    titulo: "Equilíbrio na cadeia alimentar",
    area: "Ciências da Natureza",
    areaSlug: "ciencias-natureza",
    segmento: "Anos Finais",
    series: ["7º ano"],
    assunto: "Ecossistemas e interdependência",
    habilidades: ["EF07CI08", "EF06CI07"],
    tags: ["predador-presa", "equilíbrio ecológico", "leitura de gráfico", "simulador"],
    resumo: "Simulador predador-presa: ajuste reprodução e predação e veja as populações oscilarem, entrarem em equilíbrio ou colapsarem ao longo do tempo.",
    path: "recursos/ciencias-natureza-cadeia-alimentar/index.html"
  },
  {
    id: "ciencias-humanas-piramide-etaria",
    titulo: "Máquina demográfica",
    area: "Ciências Humanas",
    areaSlug: "ciencias-humanas",
    segmento: "Anos Finais",
    series: ["8º ano"],
    assunto: "Demografia e transição demográfica",
    habilidades: ["EF08GE01", "EF08GE03"],
    tags: ["pirâmide etária", "natalidade", "transição demográfica", "leitura de gráfico"],
    resumo: "Pirâmide etária interativa: mexa em natalidade, mortalidade e expectativa de vida e compare Brasil 1980, Brasil 2020 e Japão.",
    path: "recursos/ciencias-humanas-piramide-etaria/index.html"
  }
];
