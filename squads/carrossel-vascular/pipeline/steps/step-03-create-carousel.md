---
execution: inline
agent: caio-carrossel
format: instagram-feed
inputFile: squads/carrossel-vascular/output/strategy-brief.md
outputFile: squads/carrossel-vascular/output/roteiro.md
---

# Step 02: Criar Roteiro do Carrossel

## Context Loading

Load these files before executing:
- `squads/carrossel-vascular/output/topic.md` — tema e **estilo** escolhidos pelo usuario
- `squads/carrossel-vascular/pipeline/data/research-brief.md` — contexto de marca e especialidades
- `squads/carrossel-vascular/pipeline/data/tone-of-voice.md` — opcoes de tom da VascularCare
- `squads/carrossel-vascular/pipeline/data/quality-criteria.md` — criterios de aceitacao

**Após ler topic.md, carregue os arquivos do estilo correto:**

- Se `estilo: revista`:
  - `squads/carrossel-vascular/pipeline/data/template-reference.html`
  - `squads/carrossel-vascular/pipeline/data/visual-identity.md`

- Se `estilo: pedro-ruiz`:
  - `squads/carrossel-vascular/pipeline/data/visual-identity-pedro-ruiz.md`

- Se `estilo: estilo-livre`:
  - `squads/carrossel-vascular/pipeline/data/visual-identity-estilo-livre.md`

## Instructions

### Process
1. Leia o tema e **o estilo** definidos em `topic.md`.
2. Proponha o tom de voz recomendado, apresentando as 6 opcoes do `tone-of-voice.md`; aguarde a escolha do usuario.
3. Escolha o formato de carrossel mais adequado ao tema (ex.: Editorial, Problema→Solucao, Série Numerada), justifique em uma frase.
4. Para cada slide, escolha o layout correto de acordo com o estilo:
   - **estilo `revista`**: `cover`, `standard`, `statement`, `checklist`, `photo_checklist`, `two_section`
   - **estilo `pedro-ruiz`**: `cover`, `editorial`, `numbered`, `white-card`, `white-arc`, `bullet-photo`
   - **estilo `estilo-livre`**: sem layouts pré-definidos — use nomes descritivos livres (ex: `hero-split`, `grid-icons`, `diagonal-quote`, etc.). Cada slide pode ter um layout único inventado por Diana.
5. Use variação de layouts ao longo do carrossel para criar ritmo visual — evite repetir o mesmo layout mais de 3 vezes seguidas.
6. Escreva o roteiro slide a slide com todos os campos obrigatórios para o layout escolhido (ver Output Format abaixo — use o formato do estilo correto).
7. Inclua `estilo: <valor>` no cabeçalho do roteiro.
8. Escreva caption com hook forte nos primeiros 125 caracteres, corpo com line breaks e pergunta final.
9. Gere 5-15 hashtags mistas (nicho, medio alcance e ampla) e faca auto-revisao final com os criterios de qualidade.

### Layout Selection Guide — estilo `revista`

| Layout         | Quando usar |
|----------------|-------------|
| `cover`        | Sempre o slide 1. Foto + headline forte. |
| `standard`     | Corpo do carrossel: informação densa, explicações, CTA. |
| `statement`    | Slides de transição emocional, frases de impacto, bridges narrativos. |
| `checklist`    | Sintomas, critérios, diferenciais, listas de dicas. |
| `photo_checklist` | Benefícios de tratamento com foto, resultados visuais + takeaways. |
| `two_section`  | Slides complexos que combinam problema + solução na mesma tela. |

### Layout Selection Guide — estilo `pedro-ruiz`

| Layout         | Quando usar |
|----------------|-------------|
| `cover`        | Sempre o slide 1. Foto + headline impactante + CTA pill opcional. |
| `editorial`    | Slides narrativos com foto. Headline grande + texto de apoio. |
| `numbered`     | Séries "N erros / sinais / passos". Foto + badge numerado. |
| `white-card`   | Itens clínicos limpos. Fundo creme + headline dark + foto em card. |
| `white-arc`    | Transições, reflexões, conclusões. Fundo creme + arcos dourados. Sem foto. |
| `bullet-photo` | Listas de critérios/benefícios. Foto escura + bullets com ponto dourado. |

### Inline Bold Formatting
- Use `**palavra**` dentro de `supporting_text`, `items` e `second_items` para destacar termos-chave.
- Máximo de 3 termos em negrito por slide.

## Output Format

The output MUST follow this exact structure. Include `estilo:` no cabeçalho e use os campos corretos para o estilo escolhido.

### Formato para `estilo: revista`

```
estilo: "revista"
formato: "<nome do formato escolhido>"
tom: "<tom de voz escolhido>"
total_slides: <numero>

slides:
  - slide: 1
    tipo: "cover"
    layout: "cover"
    headline: "..."
    supporting_text: "..."
    background: "dark"
    word_count: <numero>

  - slide: 2
    tipo: "..."
    layout: "statement"
    headline: "..."
    supporting_text: "..."     # italic continuation (optional)
    background: "light|dark|accent"
    word_count: <numero>

  - slide: 3
    tipo: "..."
    layout: "checklist"
    headline: "..."
    items:
      - "**Termo chave** descrição do item"
      - "**Outro termo** descrição"
    background: "light|dark|accent"
    word_count: <numero>

  - slide: 4
    tipo: "..."
    layout: "photo_checklist"
    items:
      - "Item 1 com **destaque** opcional"
      - "Item 2"
    background: "light"
    word_count: <numero>

  - slide: 5
    tipo: "..."
    layout: "two_section"
    headline: "..."
    items:
      - "**Termo** descrição"
      - "**Termo** descrição"
    second_headline: "..."
    second_items:
      - "Descrição do bullet"
      - "Descrição do bullet"
    background: "light"
    word_count: <numero>

  - slide: N
    tipo: "cta"
    layout: "standard"
    headline: "..."
    supporting_text: "..."
    cta_action: "..."
    background: "dark"
    word_count: <numero>

caption:
  hook: "..."
  body: |
    ...
  closing_question: "..."

hashtags: "#tag1 #tag2 #tag3 ..."
```

### Formato para `estilo: pedro-ruiz`

```
estilo: "pedro-ruiz"
formato: "<nome do formato escolhido>"
tom: "<tom de voz escolhido>"
total_slides: <numero>

slides:
  - slide: 1
    tipo: "cover"
    layout: "cover"
    category: "VARIZES"          # tag no topo — opcional
    headline: "Linha 1\nLinha 2"
    subtitle_italic: "..."       # opcional
    cta: "Entenda isso"          # opcional — texto do botão pill

  - slide: 2
    tipo: "editorial"
    layout: "editorial"
    headline: "Headline forte aqui."
    supporting_text: "Texto com **destaques** em negrito."

  - slide: 3
    tipo: "item"
    layout: "numbered"
    number: "1°"
    badge_label: "SINAL"         # ERRO | SINAL | PASSO | MITO
    icon: "⚠️"                   # emoji — opcional
    headline: "Descrição do item\nda série"

  - slide: 4
    tipo: "item"
    layout: "white-card"
    category: "VARIZES"          # opcional
    headline: "Headline clínico\ncurto e direto"

  - slide: 5
    tipo: "transicao"
    layout: "white-arc"
    headline: "Mas no fim..."
    subtitle_gold: "existe algo que vale mais\ndo que qualquer dúvida."
    supporting_text: "O diagnóstico correto. **O tratamento adequado.**"

  - slide: N
    tipo: "cta"
    layout: "bullet-photo"
    headline: "A melhor decisão é aquela\nem que você:"
    items:
      - "**Entende** o diagnóstico com clareza"
      - "Escolhe um **especialista** de referência"
      - "Age com **segurança**"

caption:
  hook: "..."
  body: |
    ...
  closing_question: "..."

hashtags: "#tag1 #tag2 #tag3 ..."
```

### Layout Guide — estilo `estilo-livre`

No estilo livre, **não existem layouts pré-definidos**. O Caio descreve o conteúdo e a intenção de cada slide, e a Diana inventa a composição visual.

| Campo | Obrigatório | Descrição |
|-------|-------------|-----------|
| `layout` | Sim | Nome descritivo livre (ex: `hero-dark`, `split-horizontal`, `number-focus`) |
| `mood` | Sim | Intenção visual/emocional (ex: "impactante", "acolhedor", "dados", "reflexivo") |
| `headline` | Sim | Título principal do slide |
| `supporting_text` | Não | Texto de apoio |
| `items` | Não | Lista de itens (quando aplicável) |
| `visual_hint` | Não | Sugestão visual para Diana (ex: "número grande como elemento decorativo", "dividir slide em dois blocos") |

### Formato para `estilo: estilo-livre`

```
estilo: "estilo-livre"
formato: "<nome do formato escolhido>"
tom: "<tom de voz escolhido>"
total_slides: <numero>

slides:
  - slide: 1
    tipo: "cover"
    layout: "<nome descritivo livre>"
    mood: "impactante"
    headline: "..."
    supporting_text: "..."
    visual_hint: "<sugestão opcional para Diana>"
    word_count: <numero>

  - slide: 2
    tipo: "contexto"
    layout: "<nome descritivo livre>"
    mood: "acolhedor"
    headline: "..."
    supporting_text: "..."
    word_count: <numero>

  - slide: 3
    tipo: "lista"
    layout: "<nome descritivo livre>"
    mood: "informativo"
    headline: "..."
    items:
      - "**Termo chave** descrição"
      - "**Outro termo** descrição"
    word_count: <numero>

  - slide: N
    tipo: "cta"
    layout: "<nome descritivo livre>"
    mood: "motivacional"
    headline: "..."
    supporting_text: "..."
    cta_action: "..."
    word_count: <numero>

caption:
  hook: "..."
  body: |
    ...
  closing_question: "..."

hashtags: "#tag1 #tag2 #tag3 ..."
```

### Word Count Rules by Layout
- `standard`: 40-80 palavras (headline + supporting_text)
- `statement`: 20-50 palavras (headline + supporting_text juntos)
- `checklist`: 30-70 palavras (headline + todos os items combinados)
- `photo_checklist`: 20-50 palavras (todos os items combinados)
- `two_section`: 40-80 palavras (headline + items + second_headline + second_items combinados)

## Output Example

```text
formato: "Problema → Solução"
tom: "Autoridade Médica com Acolhimento"
total_slides: 8

slides:
  - slide: 1
    tipo: "cover"
    layout: "cover"
    headline: "Suas pernas merecem mais do que conviver com a dor"
    supporting_text: "o que a medicina vascular pode fazer por você"
    background: "dark"
    word_count: 18

  - slide: 2
    tipo: "contexto"
    layout: "statement"
    headline: "Varizes não são apenas estéticas —"
    supporting_text: "são sinais de que sua circulação precisa de atenção e cuidado especializado."
    background: "light"
    word_count: 22

  - slide: 3
    tipo: "sintoma"
    layout: "checklist"
    headline: "Você sente algum desses sintomas?"
    items:
      - "**Peso e cansaço** nas pernas ao fim do dia"
      - "**Dor ou queimação** ao ficar muito tempo em pé"
      - "**Veias visíveis** ou salientes nas pernas"
      - "**Inchaço** que piora no calor"
    background: "accent"
    word_count: 44

  - slide: 4
    tipo: "solucao"
    layout: "two_section"
    headline: "Como o tratamento muda sua rotina"
    items:
      - "Procedimento **minimamente invasivo**"
      - "Recuperação **rápida**, sem internação"
      - "Resultados **duradouros** e seguros"
    second_headline: "Sua nova rotina:"
    second_items:
      - "Caminhar sem desconforto"
      - "Pernas mais leves ao fim do dia"
      - "Confiança para usar o que quiser"
    background: "light"
    word_count: 52

  - slide: 5
    tipo: "resultado"
    layout: "photo_checklist"
    items:
      - "Menos dor e sensação de **peso**"
      - "Mais disposição **ao longo do dia**"
      - "Movimentos com **conforto e segurança**"
    background: "light"
    word_count: 26

  - slide: 6
    tipo: "autoridade"
    layout: "standard"
    headline: "Excelência vascular com olhar integrativo"
    supporting_text: "Sob liderança do Dr. Marcelo Mandelli, a VascularCare une cirurgia de alta performance com cuidado individualizado — metodologia D.N.A. em cada decisão clínica."
    background: "dark"
    word_count: 42

  - slide: 7
    tipo: "cta"
    layout: "standard"
    headline: "Dê o primeiro passo para pernas mais leves"
    supporting_text: "Uma avaliação especializada pode mudar seu conforto, mobilidade e confiança no dia a dia."
    cta_action: "Agende sua avaliação vascular — link na bio."
    background: "dark"
    word_count: 40

caption:
  hook: "Varizes não são só estética: são um sinal que sua circulação está pedindo ajuda especializada."
  body: |
    Quanto antes o diagnóstico, mais simples e eficaz o tratamento.

    Na VascularCare, cada caso é tratado com precisão clínica e cuidado individualizado — metodologia D.N.A. em cada etapa.
  closing_question: "Qual sintoma você normaliza no seu dia a dia que talvez mereça atenção?"

hashtags: "#saudevascular #varizes #cirurgiavascular #qualidadedevida #vascularcare #drmarcelo #florianopolis #saude #mulheres #tratamentovascular #cirurgiavascularbr #minimamenteinvasivo"
```

## Veto Conditions

Reject and redo if ANY of these are true:
1. Nenhum slide usa layout diferente de `standard` — carrossel sem variação de layout.
2. Nao existir CTA especifico no ultimo slide.
3. Conteudo medico estiver impreciso ou com promessas absolutas.
4. Nao houver hook de caption forte nos primeiros 125 caracteres.
5. Slides com `checklist` ou `two_section` não tiverem campo `items:` preenchido.

## Quality Criteria

- [ ] Roteiro usa ao menos 3 layouts diferentes ao longo dos slides
- [ ] Roteiro segue fluxo narrativo coerente e progressivo
- [ ] Linguagem combina autoridade, empatia e clareza
- [ ] Pelo menos um pilar D.N.A. aparece no carrossel
- [ ] Todos os campos obrigatórios do layout escolhido foram preenchidos
- [ ] Inline bold `**text**` usado nos items para destacar termos-chave
