---
execution: inline
agent: capas-reels-vascular/agents/rafael-revisao
inputFile: squads/capas-reels-vascular/output/capa.png
on_reject: step-04
---

# Step 05: Rafael Revisão — Revisar Capa

## Context Loading

Carregar estes arquivos antes de executar:
- `squads/capas-reels-vascular/output/capa.png` — capa renderizada pelo Diego Display para revisão visual
- `squads/capas-reels-vascular/output/approved-copy.md` — título e subtítulo aprovados (verificar fidelidade na aplicação)
- `squads/capas-reels-vascular/pipeline/data/visual-identity.md` — regras visuais de referência (safe zone, tipografia, logo)
- `squads/capas-reels-vascular/pipeline/data/quality-criteria.md` — rubrica de revisão com as 8 dimensões e seus pesos

## Instructions

### Process

1. **Ler visualmente o arquivo `output/capa.png`** — este é o primeiro e mais importante passo; nunca emitir veredicto sem ler a imagem

2. **Verificar a fidelidade da copy aplicada** lendo `output/approved-copy.md`:
   - O título está idêntico ao aprovado?
   - O subtítulo está idêntico ao aprovado (com as keywords em destaque)?

3. **Pontuar as 8 dimensões** de 1 a 10 cada:
   - **1 — Foto Background:** foto real visível? Nítida? Bem exposta?
   - **2 — Safe Zone:** todos os elementos (texto, logo, decoração) dentro de y < 1350px?
   - **3 — Contraste:** texto branco legível sobre o overlay/fundo?
   - **4 — Logo VascularCare:** presente? Legível? Bem posicionado conforme o template?
   - **5 — Título:** bold, extrabold, tamanho dominante, tipografia correta?
   - **6 — Subtítulo:** uppercase/small caps, letter-spacing largo, keywords em destaque?
   - **7 — Identidade Visual:** alinhado ao template aprovado, sem improvisações?
   - **8 — Integridade Técnica:** canvas completo, sem elementos cortados, sem artefatos?

4. **Aplicar a regra de rejeição automática:**
   - Se QUALQUER dimensão tiver score < 4/10 → REJEITADO imediatamente
   - Se score total < 56/80 → REJEITADO
   - Se score total ≥ 56/80 e nenhum critério < 4 → APROVADO

5. **Emitir o veredicto:**
   - **APROVADO:** primeira linha + score total + score por dimensão + caminho do arquivo final
   - **REJEITADO:** primeira linha + critério(s) reprovado(s) com localização + correção específica + score dos demais critérios

## Output Format

**Formato APROVADO:**
```markdown
VEREDICTO: ✅ APROVADO

Score total: X/80

## Pontuação por Dimensão

1. Foto Background: X/10 — [observação]
2. Safe Zone: X/10 — [observação]
3. Contraste: X/10 — [observação]
4. Logo VascularCare: X/10 — [observação]
5. Título: X/10 — [observação]
6. Subtítulo: X/10 — [observação]
7. Identidade Visual: X/10 — [observação]
8. Integridade Técnica: X/10 — [observação]

Arquivo final: squads/capas-reels-vascular/output/capa.png
```

**Formato REJEITADO:**
```markdown
VEREDICTO: ❌ REJEITADO

## Critério(s) Reprovado(s)

**Dimensão N — [Nome]:** X/10 (mínimo: 4/10)
- Problema: [descrição específica]
- Localização: [onde na imagem]
- Correção: [ação exata para Diego]

## Score dos Demais Critérios

1. Foto Background: X/10
...

Retornar ao Diego Display para correção.
```

## Output Example

```markdown
VEREDICTO: ✅ APROVADO

Score total: 76/80

## Pontuação por Dimensão

1. Foto Background: 10/10 — Foto de procedimento cirúrgico nítida e bem exposta; overlay escuro cria contraste perfeito
2. Safe Zone: 10/10 — Logo em y ≈ 1280px, último bullet em y ≈ 1120px — todos dentro da safe zone com margem
3. Contraste: 9/10 — Texto branco altamente legível sobre overlay 97% de opacidade; ratio estimado >7:1
4. Logo VascularCare: 9/10 — vc-novo-fundoescuro.png legível no canto inferior direito, altura 38px, opacity 0.80
5. Título: 10/10 — "TROMBOSE" em Inter weight 900, 148px, caixa alta — domina visualmente toda a metade inferior
6. Subtítulo: 9/10 — Uppercase com letter-spacing largo; "DOR", "INCHAÇO" e "LIMITAÇÃO" claramente mais pesados
7. Identidade Visual: 9/10 — Template A aplicado fielmente; overlay, tipografia e posicionamento corretos
8. Integridade Técnica: 10/10 — Canvas 1080×1920px completo; nenhum elemento cortado; renderização limpa

Arquivo final: squads/capas-reels-vascular/output/capa.png
```

## Veto Conditions

Rejeitar e refazer se QUALQUER uma dessas condições for verdade:
1. O veredicto foi emitido sem leitura visual de `output/capa.png` — a revisão é inválida sem a análise da imagem real; refazer lendo o PNG primeiro
2. Um critério recebeu score < 4/10 mas o veredicto é APROVADO — contradição lógica; aplicar a regra de rejeição automática e reemitir como REJEITADO

## Quality Criteria

- [ ] `output/capa.png` lido visualmente antes de qualquer veredicto
- [ ] Todas as 8 dimensões pontuadas de 1 a 10
- [ ] Veredicto (APROVADO/REJEITADO) é a primeira linha da resposta
- [ ] Regra de rejeição automática aplicada (score < 4 em qualquer dimensão = REJEITADO)
- [ ] Se REJEITADO: localização exata + correção específica para cada critério reprovado
- [ ] Se APROVADO: score total calculado e caminho do arquivo final indicado
