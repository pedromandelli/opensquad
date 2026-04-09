---
execution: inline
agent: capas-reels-vascular/agents/camila-copy
format: instagram-feed
inputFile: squads/capas-reels-vascular/output/input.md
outputFile: squads/capas-reels-vascular/output/copy-options.md
---

# Step 02: Camila Copy — Gerar Opções de Copy

## Context Loading

Carregar estes arquivos antes de executar:
- `squads/capas-reels-vascular/output/input.md` — foto e tema fornecidos pela social media
- `squads/capas-reels-vascular/pipeline/data/tone-of-voice.md` — os 6 tons da Vascular Care e guia de seleção
- `squads/capas-reels-vascular/pipeline/data/domain-framework.md` — framework de geração de copy e drivers emocionais
- `squads/capas-reels-vascular/pipeline/data/anti-patterns.md` — erros de copy a evitar
- `squads/capas-reels-vascular/pipeline/data/output-examples.md` — exemplos de qualidade como referência
- `squads/capas-reels-vascular/_memory/memories.md` — preferências de copy registradas em runs anteriores

## Instructions

### Process

1. **Ler o input** de `output/input.md`:
   - Extrair o tema (ex: "trombose")
   - Anotar o caminho da foto (para sugerir o template adequado)
   - Ler o contexto adicional se houver

2. **Identificar o driver emocional** com base no tema usando o `domain-framework.md`:
   - Condições graves → segurança e controle
   - Condições estéticas/funcionais → resultado e transformação
   - Procedimentos técnicos → inovação e acessibilidade
   - Prevenção/diagnóstico → empoderamento e clareza

3. **Selecionar o tom** lendo `tone-of-voice.md` e aplicando o guia de seleção. Registrar o tom e a justificativa.

4. **Gerar 3 opções de copy** (cada uma com título + subtítulo):
   - Opção 1: título substantivo (1 palavra / nome da condição)
   - Opção 2: título benefício (2-3 palavras de transformação)
   - Opção 3: título provocativo/autoridade (até 5 palavras)
   - Para cada opção: subtítulo em caixa alta, máximo 2 linhas, com `**DESTAQUE**` nas 1-2 palavras-chave

5. **Verificar conformidade** em cada opção:
   - Eliminar linguagem proibida pelo CFM/ANVISA
   - Confirmar que nenhum título tem mais de 5 palavras
   - Confirmar que nenhum subtítulo ultrapassa 2 linhas renderizadas

6. **Sugerir o template** (A, B ou C) com base no tipo da foto descrita no input

7. **Salvar em `output/copy-options.md`** no formato padrão e aguardar seleção

## Output Format

```markdown
# Opções de Copy — {Tema}

**Tom selecionado:** Tom N — {Nome do Tom} ({justificativa de 1 linha})
**Driver emocional:** {driver identificado}

---

## Opção 1 — Substantivo da Condição

**Título:** {título}
**Subtítulo:** {SUBTÍTULO EM CAIXA ALTA COM **DESTAQUE** NAS PALAVRAS-CHAVE.}

---

## Opção 2 — Frase de Benefício

**Título:** {título}
**Subtítulo:** {SUBTÍTULO EM CAIXA ALTA COM **DESTAQUE** NAS PALAVRAS-CHAVE.}

---

## Opção 3 — Provocativo / Autoridade

**Título:** {título}
**Subtítulo:** {SUBTÍTULO EM CAIXA ALTA COM **DESTAQUE** NAS PALAVRAS-CHAVE.}

---

**Template sugerido:** Template {A/B/C} — {justificativa de 1 linha}

Qual opção você prefere? (1, 2 ou 3 — ou peça ajustes)
```

## Output Example

```markdown
# Opções de Copy — Varizes

**Tom selecionado:** Tom 2 — Empático e Acolhedor (condição estética/funcional com estigma social — driver de resultado e transformação)
**Driver emocional:** Resultado e transformação — o paciente quer resolver, não apenas conviver

---

## Opção 1 — Substantivo da Condição

**Título:** Varizes
**Subtítulo:** NÃO PRECISAM SER **CONVIVIDAS** POR TODA A VIDA.

---

## Opção 2 — Frase de Benefício

**Título:** Pernas Leves
**Subtítulo:** O LASER ELIMINA AS VARIZES **SEM REPOUSO** E SEM INTERNAÇÃO.

---

## Opção 3 — Provocativo / Autoridade

**Título:** Cuidado não são apenas vasinhos!
**Subtítulo:** O QUE VOCÊ VÊ NEM SEMPRE É O **PROBLEMA PRINCIPAL**.

---

**Template sugerido:** Template B ⭐ — foto de laser em procedimento, fundo escuro, tema de resultado mensurável

Qual opção você prefere? (1, 2 ou 3 — ou peça ajustes)
```

## Veto Conditions

Rejeitar e refazer se QUALQUER uma dessas condições for verdade:
1. Qualquer título tem mais de 5 palavras — o espaço visual do template é limitado e o título precisa caber em 1-2 linhas máximas no canvas de 1080px
2. Qualquer opção contém linguagem proibida ("cura", "100% garantido", "definitivamente elimina") — violação regulatória que invalida toda a capa

## Quality Criteria

- [ ] 3 opções genuinamente distintas (substantivo / benefício / provocativo)
- [ ] Cada título tem máximo 5 palavras
- [ ] Cada subtítulo tem máximo 2 linhas e pelo menos 1 destaque em **bold**
- [ ] Tom e driver emocional identificados e documentados
- [ ] Nenhuma linguagem proibida pelo CFM/ANVISA
- [ ] Template sugerido com justificativa baseada na foto
- [ ] Output salvo em `output/copy-options.md`
