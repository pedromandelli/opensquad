# Output Examples — Capas Reels Vascular Care

Exemplos completos e realistas de cada etapa do pipeline. Use como referência de qualidade — não como template rígido.

---

## Exemplo 1 — Tema: Trombose

### Input (output/input.md)

```markdown
# Input — Capa Reel

**Foto:** /Users/social/fotos/dr-marcelo-cirurgia-20240315.jpg
**Tema:** Trombose
**Contexto adicional:** Cirurgia de urgência, procedimento minimamente invasivo
```

---

### Copy Options (output/copy-options.md)

```markdown
# Opções de Copy — Trombose

---

## Opção 1 — Substantivo da Condição

**Título:** Trombose
**Subtítulo:** NÃO SIGNIFICA VIVER COM **DOR**, INCHAÇO OU **LIMITAÇÃO** PARA SEMPRE.

---

## Opção 2 — Frase de Benefício

**Título:** Sem Coágulos
**Subtítulo:** O DIAGNÓSTICO PRECOCE **SALVA VIDAS** E PRESERVA SUA QUALIDADE DE MOVIMENTO.

---

## Opção 3 — Frase Provocativa

**Título:** Trombo tem cura.
**Subtítulo:** A **TECNOLOGIA VASCULAR MODERNA** ELIMINA O RISCO SEM CIRURGIA ABERTA.

---

Qual opção você prefere? (1, 2 ou 3 — ou peça ajustes)
```

---

### Approved Copy (output/approved-copy.md)

```markdown
# Copy Aprovada

**Opção selecionada:** 1

**Título:** Trombose
**Subtítulo:** NÃO SIGNIFICA VIVER COM **DOR**, INCHAÇO OU **LIMITAÇÃO** PARA SEMPRE.

**Template sugerido:** Template A (foto de cirurgia, estilo clínico)
```

---

### Veredicto de Revisão (APROVADO)

```markdown
# Revisão de Qualidade — Capa Reel

VEREDICTO: ✅ APROVADO

Score total: 74/80

## Critérios

1. Foto Background: 9/10 — Foto de cirurgia visível e nítida como background
2. Safe Zone: 10/10 — Todos os elementos dentro de y=1350px
3. Contraste: 9/10 — Texto branco altamente legível sobre overlay escuro
4. Logo: 8/10 — Logo VascularCare legível no canto inferior direito
5. Título: 9/10 — "TROMBOSE" em extrabold dominando a composição
6. Subtítulo: 9/10 — Small caps com DOR, INCHAÇO e LIMITAÇÃO em bold 900
7. Identidade: 10/10 — Alinhado ao Template A aprovado
8. Técnico: 10/10 — Canvas completo, sem cortes

Arquivo final: output/capa.png
```

---

## Exemplo 2 — Tema: Varizes (Template B — Favorito)

### Copy Options (output/copy-options.md)

```markdown
# Opções de Copy — Varizes

---

## Opção 1 — Substantivo da Condição

**Título:** Varizes
**Subtítulo:** NÃO PRECISAM SER **CONVIVIDAS** POR TODA A VIDA.

---

## Opção 2 — Frase de Benefício

**Título:** Pernas Leves
**Subtítulo:** O LASER ELIMINA AS VARIZES **SEM REPOUSO** E SEM INTERNAÇÃO.

---

## Opção 3 — Frase Provocativa

**Título:** Cuidado não são apenas vasinhos!
**Subtítulo:** O QUE VOCÊ VÊ NEM SEMPRE É O **PROBLEMA PRINCIPAL**.

---

Qual opção você prefere? (1, 2 ou 3 — ou peça ajustes)
```

---

### Approved Copy (output/approved-copy.md)

```markdown
# Copy Aprovada

**Opção selecionada:** 2

**Título:** PERNAS LEVES
**Subtítulo:** O LASER ELIMINA AS VARIZES **SEM REPOUSO** E SEM INTERNAÇÃO.

**Template sugerido:** Template B (foto com resultado/procedimento)
**Tag de categoria:** SAÚDE & BEM-ESTAR
**Bullet points:**
- • 100% LASER
- • SEM REPOUSO
- • SUA ROTINA PLENA
```

---

### Veredicto de Revisão (REJEITADO)

```markdown
# Revisão de Qualidade — Capa Reel

VEREDICTO: ❌ REJEITADO

Critério reprovado: Foto Background — 3/10 (mínimo: 4/10)

## Problema identificado

O background ainda está usando o gradiente placeholder do Template B.
A foto real da paciente não foi carregada corretamente como background-image.

## Correções obrigatórias

1. **Background:** Substituir o gradiente placeholder pelo caminho absoluto da foto:
   `background-image: url('/Users/social/fotos/paciente-laser-20240310.jpg')`
   Remover o `background: linear-gradient(...)` do elemento .cover

2. **Verificação:** Confirmar que a foto está visível antes de capturar o screenshot

## Scores dos demais critérios

2. Safe Zone: 10/10
3. Contraste: 8/10 (overlay ok, mas foto precisa ser real)
4. Logo: 8/10
5. Título: 9/10 — "PERNAS LEVES" em caixa alta extrabold
6. Subtítulo: 8/10
7. Identidade: 9/10 — Template B aplicado corretamente
8. Técnico: 10/10

Retornar ao Diego Display para correção.
```

---

## Exemplo 3 — Tema: Lipedema (Template C)

### Copy Options (output/copy-options.md)

```markdown
# Opções de Copy — Lipedema

---

## Opção 1 — Substantivo da Condição

**Título:** Lipedema
**Subtítulo:** NÃO É **GORDURA COMUM** — É UMA DOENÇA VASCULAR QUE TEM TRATAMENTO.

---

## Opção 2 — Frase de Benefício

**Título:** Diagnóstico Preciso
**Subtítulo:** IDENTIFICAR O **LIPEDEMA** É O PRIMEIRO PASSO PARA A TRANSFORMAÇÃO.

---

## Opção 3 — Frase de Autoridade

**Título:** O corpo que você merece.
**Subtítulo:** O TRATAMENTO DO **LIPEDEMA** É ESPECIALIZADO, SEGURO E MINIMAMENTE INVASIVO.

---

Qual opção você prefere? (1, 2 ou 3 — ou peça ajustes)
```

---

## Padrões de Qualidade Identificados nas Referências

### Títulos que funcionam (extraídos das 5 referências)
- "Trombose" — substantivo único, máximo impacto
- "Diagnóstico" — uma palavra, clareza imediata
- "Técnica CLaCS" — técnico mas intrigante
- "Cuidado não são apenas vasinhos!" — frase provocativa com verdade clínica
- "DE 30 DIAS / EM 30 HORAS" — contraste numérico dramático ⭐

### Subtítulos que funcionam
- "NÃO SIGNIFICA VIVER COM **DOR**, INCHAÇO OU **LIMITAÇÃO** PARA SEMPRE." — nega o medo, oferece esperança
- "PRECISÃO NO DIAGNÓSTICO ORIENTA MELHORES ESCOLHAS." — afirma benefício com autoridade
- "MENOS DESCONFORTO. **MAIS RESULTADO.**" — contraste simples e direto
- "O QUE VOCÊ VÊ NEM SEMPRE É O **PROBLEMA PRINCIPAL**." — cria curiosidade com verdade médica

### Bullet points que funcionam (Template B)
- "• 100% LASER" / "• SEM REPOUSO" / "• SUA ROTINA PLENA"
- "• DIAGNÓSTICO PRECISO" / "• TECNOLOGIA AVANÇADA" / "• MINIMAMENTE INVASIVO"
- "• SEM INTERNAÇÃO" / "• ALTA NO MESMO DIA" / "• RESULTADO MENSURÁVEL"
