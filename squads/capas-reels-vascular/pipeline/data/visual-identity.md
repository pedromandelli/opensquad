# Visual Identity — Capas Reels Vascular Care

## Dimensões

- **Canvas total:** 1080 × 1920 px (9:16 — formato Reel)
- **Safe zone visual:** 1080 × 1350 px (todos os elementos de texto e logo devem estar dentro dos primeiros 1350px de altura)
- **A área abaixo de 1350px** é preenchida pelo gradiente escuro do overlay — nenhum elemento deve aparecer ali

## Logo

- **Arquivo de referência:** `logo.png` (cópia local) ou caminho original: `/Users/pedromandelli/Library/CloudStorage/GoogleDrive-pbalconimandelli@gmail.com/My Drive/Social Media/Imagens/Identidade Visual/sem fundo/vc-novo-fundoescuro.png`
- **Versão:** fundo escuro (ícone salmão + texto branco)
- **Altura padrão:** 44px (templates A e C) / 38px com opacity 0.80 (template B)
- **Nunca redimensionar de forma que distorça — usar `width: auto`**

## Paleta de Cores

- **Fundo:** foto real do paciente/médico/procedimento (substituir o placeholder de gradiente em produção)
- **Overlay:** gradiente suave — a foto deve ser visível na maior parte da imagem; escurece apenas na zona de texto para garantir legibilidade mínima
  - Template A: transparente até 45%, rampa suave até ~82% de opacidade na base
  - Template C: 5% de opacidade no topo até 28%, rampa suave até ~80% de opacidade na base
- **Texto:** `#ffffff` (branco puro)
- **Texto secundário/subtítulo:** `rgba(255,255,255,0.82–0.90)`
- **Accent/destaque:** `font-weight: 900` no mesmo branco — sem cor diferente para destaques
- **Bullet dots / elementos decorativos:** `rgba(255,255,255,0.55)`
- **Elemento vertical "DNA VASCULARCARE.":** `rgba(255,255,255,0.30)`

## Tipografia

- **Família:** `Inter` (Google Fonts) — sans-serif moderno, alta legibilidade
- **Título principal:**
  - Peso: 900 (Black)
  - Tamanho: 112–148px (variação por template e comprimento do título)
  - Letter-spacing: −1px a −3px (negativo para compactar visual)
  - Line-height: 0.95–1.05
- **Subtítulo / small caps:**
  - Peso: 500–600
  - Tamanho: 30px
  - Letter-spacing: 0.18–0.20em (espaçamento largo característico)
  - Text-transform: uppercase
  - Line-height: 1.75
  - Palavras-chave em destaque: font-weight 900, mesma cor branca
- **Tag de categoria (template B):** peso 300, 24px, uppercase, letter-spacing 0.12em, opacity 0.70
- **Bullet points (template B):** peso 600, 28px, uppercase, letter-spacing 0.10em
- **Texto vertical "DNA" (template B):** peso 300, 20px, uppercase, letter-spacing 0.28em, opacity 0.30
- **Mínimo absoluto:** nunca usar fonte abaixo de 28px para texto legível

## Layouts Aprovados

### Template A — Clássico Vascular Care
- **Referência:** `pipeline/data/template-a-reference.html`
- Título grande (148px) ancorado na base da safe zone (esquerda)
- Subtítulo em small caps, espaçado, 2 linhas
- Logo VascularCare canto inferior direito da safe zone
- Overlay gradiente suave — funciona bem com fotos clínicas e de consultório
- **Usar quando:** foto tem sujeito centralizado ou ocupando o topo da imagem

### Template B — Health & Wellness Dramático ⭐ FAVORITO
- **Referência:** `pipeline/data/template-b-reference.html`
- Tag "SAÚDE & BEM-ESTAR" topo esquerdo (pode ser adaptada ao tema)
- Três pontos decorativos topo direito
- Título gigante (112px, caixa alta) dominando a metade inferior da safe zone
- 3 bullet points abaixo do título — benefícios curtos e diretos
- "DNA VASCULARCARE." rotacionado 90° na lateral direita
- Logo VascularCare canto inferior direito, opacity 0.80
- Overlay mais forte — requer fotos dramáticas e escuras
- **Usar quando:** tema é de procedimento, benefício ou resultado mensurável; foto tem ambiente escuro/dramático

### Template C — Authority Premium
- **Referência:** `pipeline/data/template-c-reference.html`
- Logo VascularCare topo esquerdo + linha separadora horizontal
- Cruz médica decorativa topo direito (opacity 0.07)
- Borda de acento vertical esquerda (4px, opacity 0.22)
- Título (112px) com mixed-case posicionado na metade da safe zone
- Subtítulo com keyword em negrito bold
- **Usar quando:** foto é de autoridade médica (Dr. Marcelo em consultório, foto profissional)

## Regras de Composição

1. **A foto sempre ocupa 100% do canvas** — sem margens, molduras ou bordas
2. **O overlay escurece a parte inferior** para garantir contraste mínimo 4.5:1 do texto sobre a foto
3. **Texto sempre à esquerda** — alinhado à esquerda, nunca centralizado
4. **Safe zone obrigatória** — nenhum elemento acima de y=1350px é aceitável
5. **A foto deve ter foco no sujeito no terço superior** — o terço inferior é coberto pelo overlay e texto
6. **Nunca usar fundo sólido** — sempre foto real como background
7. **Nunca adicionar bordas, sombras ou efeitos no texto** — o overlay garante legibilidade

## Adaptação em Produção

Ao gerar uma capa, substituir os placeholders nos templates:
- Comentário `/* RUNTIME: background-image: url('{FOTO_PATH}') */` → ativar e apontar para o caminho absoluto da foto fornecida
- Remover o background de gradiente placeholder quando a foto for definida
- Adaptar o título e subtítulo ao tema informado
- Escolher o template mais adequado à foto e ao tema (ver critérios acima)
- Manter a tag do Template B adaptada ao tema (ex: "SAÚDE & BEM-ESTAR", "VASCULAR", "CIRURGIA", etc.)
