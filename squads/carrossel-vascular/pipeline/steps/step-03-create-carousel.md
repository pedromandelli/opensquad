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
- `squads/carrossel-vascular/output/topic.md` — tema escolhido pelo usuario
- `squads/carrossel-vascular/pipeline/data/research-brief.md` — contexto de marca e especialidades
- `squads/carrossel-vascular/pipeline/data/tone-of-voice.md` — opcoes de tom da VascularCare
- `squads/carrossel-vascular/pipeline/data/template-reference.html` — base visual do carrossel (todos os layouts disponíveis)
- `squads/carrossel-vascular/pipeline/data/visual-identity.md` — regras de layout e formatação
- `squads/carrossel-vascular/pipeline/data/quality-criteria.md` — criterios de aceitacao

## Instructions

### Process
1. Leia o tema e proponha o tom de voz recomendado, apresentando as 6 opcoes do `tone-of-voice.md`; aguarde a escolha do usuario.
2. Escolha o formato de carrossel mais adequado ao tema (ex.: Editorial, Problema→Solucao), justifique em uma frase e estruture a narrativa completa.
3. Para cada slide, escolha o layout mais adequado entre: `cover`, `standard`, `statement`, `checklist`, `photo_checklist`, `two_section`.
4. Use variação de layouts ao longo do carrossel para criar ritmo visual — evite repetir o mesmo layout mais de 3 vezes seguidas.
5. Escreva o roteiro slide a slide com todos os campos obrigatórios para o layout escolhido (ver Output Format abaixo).
6. Escreva caption com hook forte nos primeiros 125 caracteres, corpo com line breaks e pergunta final.
7. Gere 5-15 hashtags mistas (nicho, medio alcance e ampla) e faca auto-revisao final com os criterios de qualidade.

### Layout Selection Guide

| Layout         | Quando usar |
|----------------|-------------|
| `cover`        | Sempre o slide 1. Foto + headline forte. |
| `standard`     | Corpo do carrossel: informação densa, explicações, CTA. |
| `statement`    | Slides de transição emocional, frases de impacto, bridges narrativos. |
| `checklist`    | Sintomas, critérios, diferenciais, listas de dicas. |
| `photo_checklist` | Benefícios de tratamento com foto, resultados visuais + takeaways. |
| `two_section`  | Slides complexos que combinam problema + solução na mesma tela. |

### Inline Bold Formatting
- Use `**palavra**` dentro de `supporting_text`, `items` e `second_items` para destacar termos-chave.
- Máximo de 3 termos em negrito por slide.

## Output Format

The output MUST follow this exact structure (fields vary by layout — include only relevant fields per slide):

```
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
