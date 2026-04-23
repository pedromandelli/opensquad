---
execution: inline
agent: nara-narrativa
inputFile: squads/carrossel-vascular/output/topic.md
outputFile: squads/carrossel-vascular/output/strategy-brief.md
---

# Step 02: Estratégia de Conteúdo

## Context Loading

Load these files before executing:
- `squads/carrossel-vascular/output/topic.md` — tema **e estilo** escolhidos pelo usuário
- `squads/carrossel-vascular/pipeline/data/research-brief.md` — contexto da marca
- `squads/carrossel-vascular/pipeline/data/tone-of-voice.md` — opções de tom de voz

**Após ler topic.md, capture o campo `estilo:` para propagá-lo no strategy-brief.** No estilo-livre, a Nara pode sugerir um `mood` por slide no arco narrativo (ex: "impactante", "acolhedor", "reflexivo", "clínico") — isso ajuda o Caio a preencher o campo `mood` de cada slide no roteiro final.

## Instructions

A Nara Narrativa analisa o tema e produz o strategy brief completo — gancho, arco narrativo, swipe triggers e instruções para o Caio. Seguir o processo definido na task `content-strategy.md`.

**Obrigatório:** incluir `estilo: <valor>` no cabeçalho do strategy-brief (primeira linha após o título), replicando o estilo definido em `topic.md`. Se `estilo: estilo-livre`, adicionar também uma sugestão de `mood` em cada slide do arco narrativo.

## Veto Conditions

Reject and redo if ANY of these are true:
1. O ângulo escolhido for genérico ou óbvio para o tema.
2. Hook da caption ultrapassar 125 caracteres.
3. Algum slide no arco não tiver swipe trigger definido.
4. Não houver slide de save e slide de share identificados.
5. O campo `estilo:` não estiver presente no cabeçalho do strategy-brief.

## Quality Criteria

- [ ] Ângulo surpreendente ou contraintuitivo definido
- [ ] Framework de gancho nomeado e justificado
- [ ] Arco narrativo completo com função e emoção por slide
- [ ] Instruções claras para o Caio
- [ ] `estilo:` replicado no cabeçalho do strategy-brief
- [ ] (estilo-livre) Cada slide do arco tem sugestão de `mood`
