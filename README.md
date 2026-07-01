# Biblioteca de Recursos Pedagógicos

Uma coleção aberta de **ferramentas interativas feitas por professores, para professores**.

A ideia central: em vez de depender apenas de aplicativos prontos, cada docente
pode — com apoio de IA — **construir a ferramenta que a sua aula pede** e
compartilhá-la com os colegas da escola. É o uso maduro de IA: ter repertório e
criticidade para saber o que se quer e conseguir tirar a ideia do papel.

## O que já tem

| Recurso | Área | Segmento | Assunto |
|---|---|---|---|
| Álbum da Copa: quando fica difícil não repetir? | Matemática | Ensino Médio | Funções e probabilidade |
| Fábrica de Poemas | Linguagens | Anos Iniciais | Poesia, rima e sonoridade |
| Equilíbrio na cadeia alimentar | Ciências da Natureza | Anos Finais | Ecossistemas e interdependência |
| Máquina demográfica | Ciências Humanas | Anos Finais | Demografia e transição demográfica |

Cada recurso traz **habilidades trabalhadas (BNCC)** e **séries indicadas**.

## Como rodar

Não precisa instalar nada. É um site estático (HTML + CSS + JavaScript, sem build).

- **Mais simples:** abra o `index.html` no navegador (duplo-clique).
- **Recomendado** (para os gráficos carregarem sempre bem), sirva a pasta localmente:

  ```bash
  python3 -m http.server
  # depois acesse http://localhost:8000
  ```

Os gráficos usam [Chart.js](https://www.chartjs.org/) (licença MIT), que já vem
**embutido** em `assets/vendor/` — funciona offline, sem depender de CDN.

## Estrutura

```
index.html               Página inicial com filtros (série, área, assunto, habilidade)
assets/
  styles.css             Design system compartilhado (cores claras, fonte Rethink Sans)
  resources.js           Catálogo — fonte única de verdade dos recursos
  filters.js             Busca e filtros da página inicial
  vendor/                Chart.js embutido (funciona offline)
recursos/
  _template/             Modelo comentado para criar um recurso novo
  matematica-figurinhas/
  linguagens-fabrica-poemas/
  ciencias-natureza-cadeia-alimentar/
  ciencias-humanas-piramide-etaria/
```

## Como adicionar um recurso (compartilhamento entre pares)

1. Copie a pasta `recursos/_template/` e renomeie (ex.: `recursos/matematica-juros/`).
2. Edite o `index.html` de dentro dela: título, textos, a ferramenta e os
   metadados (habilidades e séries). O modelo é todo comentado — pode pedir a
   uma IA para ajustar cada parte.
3. Abra `assets/resources.js` e acrescente um objeto descrevendo seu recurso.
   Ele passa a aparecer na página inicial e nos filtros automaticamente.

Cada recurso é **autocontido**: toda a lógica vive no próprio `index.html` dele,
o que torna fácil copiar, entender e adaptar.

## Princípio de design

Todos os recursos incluem, de propósito, uma nota sobre **os limites do modelo**
("o que ele ignora?"). Enxergar onde a ferramenta simplifica a realidade é parte
do que queremos ensinar — e é o que separa usar IA de forma crítica de usá-la no
piloto automático.
