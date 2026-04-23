# Visual Identity — VascularCare Carousel (Estilo Livre)

Modo criativo com liberdade de layout e composição. Cores e fontes seguem a identidade VascularCare. Layouts são inventados do zero a cada carrossel.

## O que é fixo (guardrails invioláveis)

### Dimensões
- **Slide:** 1080 × 1440px (portrait 4:5 — Instagram carousel)
- **Nenhum overflow, nenhum scroll, nenhum corte**

### Tipografia
- **Única fonte permitida:** Montserrat (Google Fonts)
- **Pesos disponíveis:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold), 900 (Black) + italics
- **Font sizes mínimos invioláveis:**
  - Display/Hero: 58px mínimo
  - Heading: 43px mínimo
  - Body: 34px mínimo
  - Caption/Meta: 24px mínimo
  - Nenhum texto legível abaixo de 20px

### Paleta de cores (usar EXCLUSIVAMENTE estas cores)
| Token | Hex | Uso principal |
|-------|-----|---------------|
| `primary` | `#A0522D` | Terracotta — cor de destaque, headlines, CTAs |
| `dark` | `#111111` | Fundos escuros, texto principal em fundo claro |
| `white` | `#FFFFFF` | Fundos claros, texto em fundo escuro |
| `body` | `#333333` | Texto corpo |
| `bodyLight` | `#444444` | Texto secundário |
| `bodyDark` | `#DDDDDD` | Texto corpo em fundo escuro |
| `rule` | `#D8C8BC` | Linhas, divisores, elementos decorativos (tema claro) |
| `ruleDark` | `#2E2E2E` | Linhas, divisores (tema escuro) |
| `accentBg` | `#F2F2F2` | Fundo accent suave |
| `accentWarm` | `#fff7f2` → `#f3e0d4` | Gradientes quentes |

**Opacidades permitidas:** qualquer valor de opacity sobre as cores acima é válido (ex.: `rgba(160,82,45,0.15)` para terracotta sutil).

### Logo
- **Logo fundo claro:** `pipeline/data/assets/logo-light.png`
- **Logo fundo escuro:** `pipeline/data/assets/logo-dark.png`
- O logo deve aparecer em **todos os slides** — pode ser no header, footer, canto, watermark, etc.
- Tamanho mínimo: 40px de altura
- Nunca recriar o logo em texto — sempre usar a imagem

### Fotos
- **Grayscale obrigatório** em todas as fotos: `filter: grayscale(100%)`
- Brightnesss pode variar: `brightness(0.5)` a `brightness(0.95)`
- Contraste ajustável: `contrast(0.9)` a `contrast(1.15)`
- Fotos disponíveis em: `pipeline/data/photos/`

### Contraste
- WCAG AA mínimo: 4.5:1 para todo texto contra fundo

### HTML
- Cada slide é um arquivo HTML auto-contido
- CSS inline (no external stylesheets)
- Apenas Google Fonts como dependência externa

## O que é livre (liberdade criativa)

### Layouts
- **Sem layouts pré-definidos.** Cada slide pode ter uma composição original.
- Grids, colunas, assimetria, sobreposições, full-bleed, cards, blocos — tudo permitido.
- A única regra: o conteúdo deve ser legível e respeitar os font sizes mínimos.

### Composição e hierarquia
- Livre para experimentar posicionamento de elementos
- Texto pode ser alinhado à esquerda, direita, centro, ou misto
- Elementos podem ocupar porções diferentes do slide em cada slide
- Whitespace generoso é encorajado mas não obrigatório

### Elementos decorativos (usando cores da paleta)
- Shapes geométricos (círculos, retângulos, linhas, arcos)
- Borders e outlines criativos
- Gradientes (combinando cores da paleta)
- Padrões de linhas ou pontilhados
- Barras de cor, blocos, divisores criativos
- Overlays de cor sobre fotos
- Números e ícones estilizados como elementos visuais
- Sombras sutis (`box-shadow` com cores da paleta)

### Tratamento tipográfico
- Livre para variar pesos (400-900) entre slides
- Letter-spacing criativo (negativo para display, positivo para meta)
- Line-height variado conforme necessidade
- Text-transform livre (uppercase, capitalize, normal)
- Misturar tamanhos na mesma frase para ênfase
- Texto sobre shapes ou blocos de cor

### Backgrounds
- Sólidos, gradientes, ou compostos — sempre com cores da paleta
- Blocos de cor dividindo o slide (split layouts)
- Gradientes em qualquer direção
- Foto como fundo com overlay de cor da paleta

### Ritmo visual
- Cada carrossel deve ter **variedade visual entre os slides**
- Alternar entre composições diferentes (nunca todos os slides idênticos)
- Criar surpresa visual a cada swipe
- O cover (slide 1) deve ser o mais impactante

## Referências Visuais

O estilo livre pode receber **imagens de referência** fornecidas pelo usuário antes da execução do squad.

### Onde ficam
- Pasta: `pipeline/data/references/`
- Copiadas automaticamente no Step 01 quando o usuário envia referências

### Como Diana deve usar as referências

1. **Ler todas as imagens** da pasta `references/` antes de começar a criar os slides
2. **Analisar os padrões visuais** de cada referência:
   - Composição e layout (como os elementos estão organizados)
   - Tratamento tipográfico (tamanhos, pesos, posicionamento do texto)
   - Uso de espaço negativo e whitespace
   - Elementos decorativos (shapes, linhas, ícones)
   - Ritmo visual (como os slides se conectam na sequência)
   - Tratamento de fotos (posição, tamanho, crop)
3. **Extrair a essência visual** — não copiar pixel a pixel, mas capturar o "espírito" do design
4. **Reinterpretar com a identidade VascularCare** — aplicar as mesmas ideias de composição usando as cores e fonte da marca
5. **Mesclar influências** — se houver múltiplas referências, combinar elementos de diferentes referências

### Regras de uso de referências
- As referências inspiram **composição e layout**, nunca cores ou fontes (esses são fixos da VascularCare)
- Se a referência usa uma fonte sans-serif moderna → adaptar o tratamento para Montserrat
- Se a referência usa cores vibrantes → adaptar para a paleta terracotta/dark/white da VascularCare
- Não é obrigatório seguir todas as referências — Diana pode selecionar elementos que funcionam melhor
- Se não houver referências na pasta, Diana cria com liberdade total (sem inspiração externa)

## Guia de decisão para Diana

Ao criar cada slide no modo estilo-livre, Diana deve:

1. **Consultar as referências** (se houver) na pasta `references/`
2. **Ler o conteúdo e a intenção** (mood/tipo do slide)
3. **Inventar uma composição** inspirada nas referências + conteúdo — não copiar, reinterpretar
4. **Variar** em relação ao slide anterior — se o anterior era minimalista, o próximo pode ser mais denso
5. **Testar mentalmente** se a composição é legível em tela de celular (1080px renderiza em ~375px de viewport no Instagram)
6. **Garantir** que os guardrails estão respeitados (cores, fonte, logo, dimensões, contraste)

## Inspirações de composição (não templates — apenas referências de possibilidades)

- Slide com número gigante (300px+) como elemento visual + texto no canto
- Grid 2x2 com ícones/números + textos curtos
- Texto em diagonal sobre fundo gradiente
- Bloco de cor terracotta com texto branco vazado
- Foto full-bleed com overlay de cor e texto no terço inferior
- Layout assimétrico: título à esquerda (60%), elemento visual à direita (40%)
- Checklist com bullets estilizados (shapes em vez de ✓)
- Quote com aspas gigantes como elemento decorativo
- Slide dividido horizontalmente: metade escura + metade clara
- Cards arredondados flutuando sobre fundo texturizado
- Tipografia escalonada (cada palavra em tamanho diferente)

Estas são apenas possibilidades. Diana pode e deve inventar composições que não estão nesta lista.
