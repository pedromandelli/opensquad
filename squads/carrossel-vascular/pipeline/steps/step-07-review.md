---
execution: inline
agent: renata-revisao
inputFile: squads/carrossel-vascular/output/roteiro.md
outputFile: squads/carrossel-vascular/output/review.md
---

# Step 06: Revisao de Qualidade

## Context Loading

Load these files before executing:
- `squads/carrossel-vascular/output/roteiro.md` — roteiro completo
- `squads/carrossel-vascular/output/slides/` — slides renderizados
- `squads/carrossel-vascular/pipeline/data/quality-criteria.md` — criterios oficiais
- `squads/carrossel-vascular/pipeline/data/research-brief.md` — contexto da marca

## Instructions

### Process
1. Avalie roteiro e slides com scorecard estruturado (Ciencia/Etica, Editorial/Marca, Instagram/Performance).
2. Atribua notas de 1-5 por criterio, com justificativas curtas e objetivas.
3. Emita veredicto final: `APROVADO` ou `REVISAO_NECESSARIA`.
4. Se houver rejeicao, descreva correcoes acionaveis e especificas por slide/seção.

## Output Format

The output MUST follow this exact structure:
```
scorecard:
  ciencia_etica:
    precisao_medica: { score: N, justificativa: "..." }
    clareza_sem_jargao: { score: N, justificativa: "..." }
    conformidade_etica: { score: N, justificativa: "..." }
  editorial_marca:
    tom_vascularcare: { score: N, justificativa: "..." }
    narrativa_slide_a_slide: { score: N, justificativa: "..." }
    cta_especifico: { score: N, justificativa: "..." }
  instagram_performance:
    hook_cover: { score: N, justificativa: "..." }
    densidade_40_80_palavras: { score: N, justificativa: "..." }
    potencial_save_share: { score: N, justificativa: "..." }

media_geral: X.X
veto_conditions_triggered:
  - "..."

verdict: "APROVADO|REVISAO_NECESSARIA"

feedback:
  strengths:
    - "..."
  adjustments_required:
    - item: "Slide X"
      issue: "..."
      impact: "..."
      fix: "..."
```

## Output Example

```text
scorecard:
  ciencia_etica:
    precisao_medica: { score: 5, justificativa: "Sem impropriedades clinicas e sem promessas absolutas." }
    clareza_sem_jargao: { score: 4, justificativa: "Boa clareza geral; pequeno termo tecnico no slide 4 pede ajuste." }
    conformidade_etica: { score: 5, justificativa: "CTA orienta para avaliacao medica, sem garantias indevidas." }
  editorial_marca:
    tom_vascularcare: { score: 5, justificativa: "Tom sofisticado e acolhedor consistente." }
    narrativa_slide_a_slide: { score: 4, justificativa: "Fluxo bom, com leve redundancia entre slides 5 e 6." }
    cta_especifico: { score: 5, justificativa: "CTA objetivo e contextualizado." }
  instagram_performance:
    hook_cover: { score: 5, justificativa: "Abertura forte e clara." }
    densidade_40_80_palavras: { score: 4, justificativa: "Slide 6 ficou no limite inferior e requer revisao." }
    potencial_save_share: { score: 4, justificativa: "Conteudo util e facilmente compartilhavel." }

media_geral: 4.6
veto_conditions_triggered:
  - "Slide 6 abaixo de 40 palavras."

verdict: "REVISAO_NECESSARIA"

feedback:
  strengths:
    - "Excelente alinhamento com a identidade premium."
    - "Boa traducao de conceitos medicos para linguagem acessivel."
  adjustments_required:
    - item: "Slide 6"
      issue: "Abaixo da densidade minima."
      impact: "Menor entrega de valor no swipe final."
      fix: "Adicionar frase clinica objetiva para chegar a 40-50 palavras."
```

## Veto Conditions

Reject and redo if ANY of these are true:
1. Veredicto sem scorecard.
2. Feedback sem instrucoes acionaveis.
3. Nao avaliar densidade de texto por slide.
4. Nao sinalizar riscos de precisao medica quando houver.

## Quality Criteria

- [ ] Scorecard cobre os tres eixos obrigatorios
- [ ] Veredicto final e claro e justificavel
- [ ] Feedback e pratico, especifico e priorizado
