# Task: Content Strategy

## Goal
Transformar o tema recebido em um strategy brief completo que o Caio Carrossel vai usar para escrever o roteiro. Não escrever o roteiro — escrever o blueprint que o guia.

## Process

1. **Leia** `topic.md` para entender o tema e o contexto do usuário
2. **Analise** o ângulo mais poderoso: qual é a entrada mais surpreendente, contraintuitiva ou emocionalmente relevante para esse tema?
3. **Escolha o framework de gancho** mais adequado (Curiosity Gap, Bold Claim, Pain Amplification, Specific Result, Pattern Interrupt, Identidade) e justifique
4. **Defina o arco narrativo**: mapeie função e emoção dominante de cada slide (não o conteúdo — a função)
5. **Identifique swipe triggers** para cada posição do carrossel
6. **Marque os slides de save e share**: qual slide tem mais potencial para cada comportamento e por quê
7. **Esboce o hook da caption**: rascunhe os primeiros 125 caracteres — deve ser independente do visual
8. **Recomende tom de voz e formato de carrossel** com justificativas baseadas no ângulo escolhido

## Output Format

```
tema: "{tema original}"
angulo_escolhido: "{ângulo mais poderoso encontrado}"

gancho:
  framework: "{nome do framework}"
  justificativa: "{por que esse framework para esse tema e público}"
  hook_cover: "{headline de capa recomendada — máx 4 palavras}"
  hook_caption: "{primeiros 125 chars da caption}"

arco_narrativo:
  formato_recomendado: "{Ex: Revelação → Mecanismo → Transformação}"
  tom_recomendado: "{tom de voz recomendado e justificativa em 1 frase}"
  total_slides_recomendado: {número}
  slides:
    - posicao: 1
      funcao: "cover — parar o scroll"
      emocao_dominante: "curiosidade/surpresa/identificação"
      swipe_trigger: "{o que faz o usuário querer avançar}"
      nota: "{orientação específica para o Caio}"
    - posicao: 2
      funcao: "{ex: amplificação do problema}"
      emocao_dominante: "{emoção}"
      swipe_trigger: "{trigger}"
      nota: "{orientação}"
    # ... até o slide final

engajamento:
  slide_save: {número do slide}
  motivo_save: "{por que esse slide vai ser salvo}"
  slide_share: {número do slide}
  motivo_share: "{por que esse slide vai ser compartilhado}"

instrucoes_para_caio:
  - "{instrução específica sobre narrativa}"
  - "{instrução sobre o gancho}"
  - "{instrução sobre o CTA}"
  - "{qualquer alerta sobre o que evitar neste tema específico}"
```

## Veto Conditions

Refazer se:
1. O ângulo escolhido for o óbvio/genérico do tema (ex: "varizes são ruins para a saúde" é óbvio — "varizes podem sabotar seu treino" é um ângulo)
2. O hook da caption tiver mais de 125 caracteres
3. O arco narrativo não tiver swipe trigger definido para cada slide
4. Não houver slide de save e slide de share identificados

## Quality Criteria

- [ ] Ângulo é surpreendente ou contraintuitivo — não é o óbvio do tema
- [ ] Framework de gancho nomeado com justificativa clara
- [ ] Hook de cover tem máximo 4 palavras
- [ ] Hook de caption tem máximo 125 caracteres e funciona sem o visual
- [ ] Cada slide tem função, emoção e swipe trigger definidos
- [ ] Instrução clara para o Caio sobre o que priorizar
