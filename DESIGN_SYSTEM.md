# Design System

Este projeto usa um design system simples, baseado em tokens CSS globais e CSS Modules.

## Tokens

Os tokens ficam em `src/app/globals.css`:

- Cores: `--color-primary`, `--color-secondary`, `--color-tertiary`, superfícies, textos e tons pastel.
- Tipografia: `--font-display` para títulos e `--font-body` para textos.
- Escala tipográfica: display, headline, body e label.
- Espaçamento: unidade base, gutters, margens mobile/desktop e largura máxima de container.
- Raios: pequenos, médios, grandes, nuvem e circular.
- Sombras: `--shadow-soft` e `--shadow-floating`.

## Uso

- Use CSS Modules para estilos de páginas e componentes.
- Use os tokens globais em vez de valores soltos de cor, fonte, raio e sombra.
- Repita padrões através de dados mapeados em JSX quando houver listas de cards, links, recursos ou depoimentos.
- Mantenha componentes visuais com responsabilidade clara: navegação, introduções de seção, cards, grids e chamadas.
- Evite novas dependências de UI enquanto CSS e Next forem suficientes.

## Direção Visual

- Tom infantil, acolhedor e organizado.
- Formas orgânicas e arredondadas podem ser usadas em imagens e cards.
- Paleta principal: roxo, verde-água e amarelo, com superfícies claras e tons pastel.
- Botões principais usam `primary`; ações secundárias usam superfície clara com borda.
- Imagens devem representar crianças, escola, cuidado, leitura, atividades e família.

## Validação

Antes de finalizar alterações visuais:

```bash
npm run lint
npm run build
```
