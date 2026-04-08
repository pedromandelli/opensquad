---
task: "Revisar Carrossel e Emitir Veredicto"
order: 1
input: |
  - roteiro: Roteiro completo do carrossel (roteiro.md)
  - slides: Slides HTML/PNG renderizados em output/slides/
  - criterios: Critérios de qualidade em quality-criteria.md
output: |
  - scorecard: Avaliação por critério com notas e justificativas
  - verdict: APROVADO ou REVISAO_NECESSARIA
  - feedback: Lista de ajustes acionáveis (se houver)
---

# Revisar Carrossel e Emitir Veredicto

Avalia o carrossel da VascularCare com rigor editorial, científico e de performance para Instagram. O objetivo é garantir que o conteúdo final preserve o posicionamento premium da marca, a precisão médica e a capacidade de gerar saves/shares.

## Process

1. Ler integralmente o `roteiro.md` e mapear cada slide (cover, desenvolvimento, CTA), além de caption e hashtags.
2. Verificar os slides renderizados em `output/slides/` para confirmar consistência visual com o roteiro (hierarquia, legibilidade, ritmo visual, identidade de marca).
3. Aplicar o scorecard em três eixos: Ciência/Ética, Editorial/Marca, Instagram/Performance, atribuindo nota de 1 a 5 por critério.
4. Consolidar veredicto final:
   - `APROVADO` se não houver veto e média geral >= 4.0
   - `REVISAO_NECESSARIA` se houver qualquer veto ou média < 4.0
5. Se revisão necessária, listar ajustes específicos por slide/seção, com instruções objetivas para correção.

## Output Format

```yaml
scorecard:
  ciencia_etica:
    precisao_medica:
      score: 1-5
      justificativa: "..."
    clareza_sem_jargao:
      score: 1-5
      justificativa: "..."
    conformidade_etica:
      score: 1-5
      justificativa: "..."

  editorial_marca:
    tom_vascularcare:
      score: 1-5
      justificativa: "..."
    narrativa_slide_a_slide:
      score: 1-5
      justificativa: "..."
    cta_especifico:
      score: 1-5
      justificativa: "..."

  instagram_performance:
    hook_cover:
      score: 1-5
      justificativa: "..."
    densidade_40_80_palavras:
      score: 1-5
      justificativa: "..."
    potencial_save_share:
      score: 1-5
      justificativa: "..."

media_geral: X.X
veto_conditions_triggered:
  - "..."

verdict: "APROVADO | REVISAO_NECESSARIA"

feedback:
  strengths:
    - "..."
  adjustments_required:
    - item: "Slide 3"
      issue: "..."
      impact: "..."
      fix: "..."
```

## Output Example

> Use como referência de qualidade, não como template rígido.

```yaml
scorecard:
  ciencia_etica:
    precisao_medica:
      score: 5
      justificativa: "Os conceitos de varizes, sintomas e abordagem minimamente invasiva estão corretos e sem promessas indevidas."
    clareza_sem_jargao:
      score: 4
      justificativa: "Linguagem acessível na maior parte; no slide 4, 'hemodinâmica' pode ter explicação adicional."
    conformidade_etica:
      score: 5
      justificativa: "Não há garantias absolutas de resultado e o CTA direciona para avaliação médica."

  editorial_marca:
    tom_vascularcare:
      score: 5
      justificativa: "Tom sofisticado, acolhedor e inovador, consistente com a marca."
    narrativa_slide_a_slide:
      score: 4
      justificativa: "Boa progressão; slides 5 e 6 podem reduzir pequena redundância."
    cta_especifico:
      score: 5
      justificativa: "CTA claro para agendamento de avaliação vascular completa."

  instagram_performance:
    hook_cover:
      score: 5
      justificativa: "Cover forte e com promessa clara, potencial alto de retenção."
    densidade_40_80_palavras:
      score: 4
      justificativa: "Todos os slides dentro da faixa, exceto slide 6 com 39 palavras."
    potencial_save_share:
      score: 4
      justificativa: "Conteúdo útil e educativo; incluir um dado de prevalência no slide 3 pode elevar compartilhamento."

media_geral: 4.6
veto_conditions_triggered:
  - "Slide 6 abaixo de 40 palavras."

verdict: "REVISAO_NECESSARIA"

feedback:
  strengths:
    - "Excelente alinhamento com identidade premium da VascularCare."
    - "Boa tradução de conceitos médicos para linguagem acessível."
  adjustments_required:
    - item: "Slide 6"
      issue: "Contagem de palavras abaixo do mínimo."
      impact: "Reduz profundidade informacional e quebra padrão do carrossel."
      fix: "Adicionar uma frase com contexto clínico adicional para atingir 40-50 palavras."
    - item: "Slide 4"
      issue: "Uso de termo técnico sem explicação."
      impact: "Pode reduzir compreensão do público leigo."
      fix: "Explicar termo em linguagem simples na frase seguinte."
```

## Quality Criteria

- [ ] Todos os critérios relevantes receberam nota de 1-5 com justificativa
- [ ] Veredicto final é inequívoco (APROVADO ou REVISAO_NECESSARIA)
- [ ] Feedback contém ações específicas por slide/seção
- [ ] Itens positivos e ajustes obrigatórios estão separados
- [ ] Critérios de marca, ciência e Instagram foram igualmente avaliados

## Veto Conditions

Reject and redo if ANY are true:
1. Veredicto sem justificativa estruturada por critérios.
2. Feedback genérico sem instruções acionáveis.
3. Informação médica duvidosa não sinalizada.
4. Não verificar faixa de 40-80 palavras por slide.
