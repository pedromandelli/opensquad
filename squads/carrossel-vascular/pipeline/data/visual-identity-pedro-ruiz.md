# Visual Identity — VascularCare Carousel (Pedro Ruiz Edition)

Estilo editorial moderno inspirado no Instituto Pedro Ruiz. Minimalista, foto-centrado, tipografia limpa.

## Fonte

- **Primary font:** Inter (Google Fonts) — geométrica moderna, não usar Montserrat
- **Pesos usados:** 300 (thin), 400 (regular), 600 (semibold), 700 (bold), 800 (extrabold), 900 (black)
- **Headlines grandes:** Inter 800–900, letter-spacing negativo
- **Corpo:** Inter 400, line-height 1.55
- **Chrome (CRM, meta):** Inter 400, uppercase, letter-spacing positivo, tamanho 12–15px

## Paleta de Cores

| Token | Hex | Uso |
|-------|-----|-----|
| `dark` | `#0D0D0D` | Fundo escuro, overlays |
| `cream` | `#F5F1E8` | Fundo claro (white-card, white-arc) |
| `gold` | `#C4A55A` | Arcos decorativos, bullet points |
| `goldText` | `#BF9B44` | Subtítulo dourado (white-arc) |
| `text` | `#111111` | Texto escuro (slides claros) |
| `textSub` | `#3A3A3A` | Corpo secundário (slides claros) |
| `pink` | `#E84070` | Botão CTA pill (cover) |
| `white` | `#FFFFFF` | Texto em fundos escuros/foto |

## Chrome Elements (presentes em TODOS os slides)

- **Top-left:** category tag (se houver) OU "RESP. TÉCNICO DR. MARCELO MANDELLI" — Inter 400, 12–15px, uppercase, tracked
- **Top-right:** `→` seta fina — Inter 300, 22px
- **Bottom-left:** CRM-SP / RQE  OU  DR. MARCELO MANDELLI — Inter 400, 12px, uppercase
- **Bottom-right:** CRM CNPJ  OU  ©VASCULARCARE 2026 — Inter 400, 12px, uppercase
- Sem header/footer com bordas — chrome é só texto nas margens

## Dimensões

- **Slide:** 1080 × 1440px (portrait 4:5 — Instagram carousel)
- **Padding lateral:** 60px
- **Padding top/bottom:** 42–46px (chrome) + conteúdo abaixo

## Fotos

- **Coloridas** — não converter para preto e branco
- Filtro máximo: `brightness(0.70–0.80)` para escurecer levemente
- Cover/Editorial: `brightness(0.72) contrast(1.05)` + gradient overlay
- Numbered: `brightness(0.70) contrast(1.08)` + overlay rgba(0,0,0,0.28)
- White-card: `brightness(1.0)` — sem filtro escurecedor

## Layouts disponíveis

### `cover`
**Quando usar:** Sempre o slide 1. Foto impactante + headline grande no topo.

**Campos obrigatórios:**
- `headline:` — título principal (pode usar `\n` para quebra de linha), Inter 900, ~96px, branco
- `subtitle_italic:` (opcional) — subtítulo em itálico abaixo, Inter 300, ~40px, branco 78%
- `cta:` (opcional) — texto do botão pill rosa ("Entenda isso", "Saiba mais")
- `category:` (opcional) — tag no canto superior esquerdo ("VARIZES", "CIRURGIA")

**Visual:** Foto full-bleed com gradiente escuro top+bottom. Headline no topo-esquerdo.

---

### `editorial`
**Quando usar:** Slides narrativos, sazonais, afirmações fortes com foto de contexto.

**Campos obrigatórios:**
- `headline:` — headline em branco, Inter 800, ~80px, no terço inferior da foto
- `supporting_text:` — texto de corpo abaixo, Inter 400, ~34px; use `**negrito**` para ênfase

**Visual:** Foto full-bleed com gradiente escuro cobrindo 70% inferior. Texto no campo escuro.

---

### `numbered`
**Quando usar:** Séries "N erros", "N sinais", listas numeradas sequenciais.

**Campos obrigatórios:**
- `number:` — "1°", "2°", "3°" etc.
- `badge_label:` — "ERRO", "SINAL", "PASSO", "MITO" etc.
- `icon:` (opcional) — emoji relevante (☀️, 💧, 😴, ⚠️ etc.)
- `headline:` — descrição do item, Inter 700, ~64px, branco, parte inferior

**Visual:** Foto full-bleed escurecida. Badge no topo-esquerdo. Número watermark gigante (transparente) no canto inferior direito.

---

### `white-card`
**Quando usar:** Itens de lista simples, erros/critérios com foto ilustrativa. Tom mais clínico.

**Campos obrigatórios:**
- `headline:` — título dark, Inter 700, ~66px, fundo creme
- `category:` (opcional) — tag de categoria no topo ("BLEFAROPLASTIA", "VARIZES")
- Foto auto-atribuída — aparece em card arredondado (border-radius 18px) abaixo do headline

**Visual:** Fundo creme #F5F1E8, sem foto no background — só no card.

---

### `white-arc`
**Quando usar:** Transições narrativas, reflexões, "Mas no fim...", conclusões emocionais.

**Campos obrigatórios:**
- `headline:` — frase curta, Inter 700, ~72px, texto dark
- `subtitle_gold:` (opcional) — frase complementar em dourado, Inter 600, ~52px
- `supporting_text:` (opcional) — corpo explicativo, Inter 400, ~34px; use `**negrito**`

**Visual:** Fundo creme, arcos dourados decorativos no lado direito, três pontos pretos como abertura.
**Sem foto.**

---

### `bullet-photo`
**Quando usar:** Listas de benefícios/critérios com foto de contexto. Tom direto.

**Campos obrigatórios:**
- `headline:` — frase introdutória com dois pontos ("A melhor época é aquela em que você consegue:")
- `items:` — lista YAML de itens (bullet com ponto dourado)

**Visual:** Foto full-bleed muito escurecida (brightness 0.55). Headline + bullets com • dourado.

---

## Narrativa e ritmo visual

Para manter variedade ao longo do carrossel, alterne entre:
- Slides foto-escuros (`cover`, `editorial`, `numbered`, `bullet-photo`)
- Slides claros (`white-card`, `white-arc`)

**Sequência recomendada (7–8 slides):**
```
cover → editorial → numbered (x2-3) → white-arc → white-card → editorial (CTA)
```

**Ou série numerada (6–7 slides):**
```
cover (com CTA pill) → numbered (x4-5) → white-arc (conclusão)
```

## Campos do roteiro para estilo pedro-ruiz

```yaml
estilo: pedro-ruiz
formato: "<nome do formato>"
tom: "<tom de voz>"
total_slides: <N>

slides:
  - slide: 1
    tipo: "cover"
    layout: "cover"
    category: "VARIZES"
    headline: "Linha 1\nLinha 2"
    subtitle_italic: "subtítulo em itálico"
    cta: "Entenda isso"

  - slide: 2
    tipo: "editorial"
    layout: "editorial"
    headline: "Headline forte aqui."
    supporting_text: "Texto de apoio com **destaques** em negrito."

  - slide: 3
    tipo: "item"
    layout: "numbered"
    number: "1°"
    badge_label: "SINAL"
    icon: "⚠️"
    headline: "Descrição do item\nda série"

  - slide: 4
    tipo: "item"
    layout: "white-card"
    category: "VARIZES"
    headline: "Headline do slide\nclínico"

  - slide: 5
    tipo: "transicao"
    layout: "white-arc"
    headline: "Mas no fim..."
    subtitle_gold: "existe algo que vale mais\ndo que qualquer dúvida."
    supporting_text: "O diagnóstico correto. **O tratamento adequado.** E um cirurgião que entende o seu caso."

  - slide: 6
    tipo: "cta"
    layout: "bullet-photo"
    headline: "A melhor decisão é aquela\nem que você:"
    items:
      - "**Entende** o seu diagnóstico"
      - "Escolhe um **especialista** de referência"
      - "Age com calma e **segurança**"

caption:
  hook: "..."
  body: |
    ...
  closing_question: "..."

hashtags: "#tag1 #tag2 ..."
```

## Word Count Guide (pedro-ruiz)

| Layout | Limite orientativo |
|--------|--------------------|
| `cover` | headline 4–10 palavras; subtitle 5–10 |
| `editorial` | headline 6–12 palavras; body 20–50 palavras |
| `numbered` | headline 5–10 palavras |
| `white-card` | headline 4–10 palavras |
| `white-arc` | headline 3–8; subtitle_gold 5–12; body 15–45 |
| `bullet-photo` | headline 8–15; cada bullet 4–10 palavras |
