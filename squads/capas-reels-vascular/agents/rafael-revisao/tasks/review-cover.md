---
task: "Revisar Capa Renderizada"
order: 1
input: |
  - capa_png: output/capa.png — capa renderizada pelo Diego Display
  - approved_copy: output/approved-copy.md — título e subtítulo aprovados para verificação de fidelidade
  - visual_identity: pipeline/data/visual-identity.md — regras visuais para referência
output: |
  - veredicto: APROVADO (com score 8 dimensões) ou REJEITADO (com correções específicas)
---

# Revisar Capa Renderizada

Lê visualmente a capa PNG renderizada pelo Diego Display e avalia contra 8 dimensões de qualidade. Emite veredicto estruturado: APROVADO (pode prosseguir para aprovação final) ou REJEITADO (retorna ao Diego com feedback acionável).

## Process

1. **Ler os arquivos de input:**
   - Ler `output/capa.png` — visualizar a capa renderizada
   - Ler `output/approved-copy.md` — verificar o título e subtítulo que deveriam ter sido aplicados
   - Ler `pipeline/data/visual-identity.md` — refresh nas regras visuais (safe zone, tipografia, cores)

2. **Pontuar cada uma das 8 dimensões** de 1 a 10:
   - **Dimensão 1 — Foto Background:** a foto real está visível como background? (1 = só gradiente, 10 = foto nítida e bem exposta)
   - **Dimensão 2 — Safe Zone:** todos os elementos de texto, logo e decoração estão dentro de y < 1350px? (1 = elementos claramente fora, 10 = todos dentro com margem)
   - **Dimensão 3 — Contraste:** o texto branco é legível sobre o fundo/overlay? (1 = ilegível, 10 = contraste máximo)
   - **Dimensão 4 — Logo VascularCare:** o logo está presente, legível e bem posicionado conforme o template? (1 = ausente, 10 = perfeito)
   - **Dimensão 5 — Título:** o título está em bold de alto impacto, tamanho dominante, tipografia correta? (1 = ilegível/inadequado, 10 = impacto máximo)
   - **Dimensão 6 — Subtítulo:** o subtítulo está em small caps/uppercase com palavras-chave em destaque? (1 = errado, 10 = perfeito)
   - **Dimensão 7 — Identidade Visual:** a capa está alinhada com o template aprovado (sem improvisações)? (1 = template ignorado, 10 = fiel ao design system)
   - **Dimensão 8 — Integridade Técnica:** ausência de elementos cortados, fora do canvas ou com renderização defeituosa? (1 = múltiplos problemas, 10 = canvas perfeito)

3. **Aplicar a regra de rejeição automática:**
   - Se QUALQUER dimensão tiver score < 4/10 → veredicto = REJEITADO imediatamente
   - Calcular score total (soma das 8 dimensões, máximo 80)
   - Score mínimo para aprovação: 56/80 (70%)

4. **Formatar o veredicto:**
   - Se APROVADO: veredicto + score total + score por dimensão + caminho do arquivo final
   - Se REJEITADO: veredicto + critério(s) reprovado(s) + localização exata na imagem + correção específica para o Diego + score dos critérios aprovados (para não retrabalhar o que está certo)

5. **Emitir o veredicto** na conversa (inline — não salva em arquivo)

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
- Problema: [descrição específica do que está errado]
- Localização: [onde na imagem — ex: "canto inferior direito", "y ≈ 1380px", "linha 2 do subtítulo"]
- Correção: [ação exata que Diego deve executar]

## Score dos Demais Critérios

1. Foto Background: X/10
2. Safe Zone: X/10
...

Retornar ao Diego Display para correção.
```

## Output Example

> Use como referência de qualidade — não como template rígido.

**Exemplo de APROVADO:**

```markdown
VEREDICTO: ✅ APROVADO

Score total: 74/80

## Pontuação por Dimensão

1. Foto Background: 9/10 — Foto de procedimento cirúrgico nítida e bem exposta como background; overlay escuro cria contraste adequado
2. Safe Zone: 10/10 — Todos os elementos verificados dentro de y < 1350px; logo posicionado em y ≈ 1280px
3. Contraste: 9/10 — Texto branco altamente legível; overlay preto 97% na base garante contraste máximo
4. Logo VascularCare: 8/10 — Logo vc-novo-fundoescuro.png legível no canto inferior direito; altura 44px adequada
5. Título: 9/10 — "TROMBOSE" em Inter weight 900, 148px, caixa alta; domina visualmente a composição
6. Subtítulo: 9/10 — Uppercase, letter-spacing largo; "DOR", "INCHAÇO" e "LIMITAÇÃO" em weight 900 claramente destacados
7. Identidade Visual: 10/10 — Template A aplicado fielmente; sem improvisações visuais detectadas
8. Integridade Técnica: 10/10 — Canvas completo 1080×1920px; nenhum elemento cortado; renderização sem artefatos

Arquivo final: squads/capas-reels-vascular/output/capa.png
```

**Exemplo de REJEITADO:**

```markdown
VEREDICTO: ❌ REJEITADO

## Critério Reprovado

**Dimensão 1 — Foto Background:** 2/10 (mínimo: 4/10)
- Problema: O background está renderizando o gradiente placeholder do Template B (linear-gradient de #1a1a2e para #16213e). A foto real não foi carregada.
- Localização: Background inteiro da capa — o gradiente azul-escuro é visível no lugar da foto fornecida
- Correção: No HTML, verificar se o `background-image: url('{caminho_foto}')` foi ativado corretamente no elemento `.cover`. Confirmar que o caminho é absoluto e que o servidor HTTP consegue acessar o arquivo. Re-renderizar após a correção.

## Score dos Demais Critérios (para referência)

2. Safe Zone: 10/10 — todos os elementos dentro de y < 1350px ✓
3. Contraste: 7/10 — gradiente escuro ainda garante legibilidade, mas o overlay não está otimizado para a foto real
4. Logo VascularCare: 8/10 — logo presente e legível no canto inferior direito ✓
5. Título: 9/10 — "PERNAS LEVES" em caixa alta weight 900, tamanho dominante ✓
6. Subtítulo: 8/10 — uppercase com destaques corretos ✓
7. Identidade Visual: 8/10 — Template B aplicado corretamente exceto pelo background ✓
8. Integridade Técnica: 9/10 — canvas 1080×1920px, sem elementos cortados ✓

Retornar ao Diego Display para correção.
```

## Quality Criteria

- [ ] PNG lido visualmente (`output/capa.png`) antes de qualquer veredicto
- [ ] Todas as 8 dimensões pontuadas de 1 a 10
- [ ] Veredicto (APROVADO/REJEITADO) é a primeira linha da resposta
- [ ] Regra de rejeição automática verificada (score < 4 em qualquer dimensão = REJEITADO)
- [ ] Se REJEITADO: localização exata + correção específica fornecidas para cada critério reprovado
- [ ] Se APROVADO: caminho do arquivo final indicado na última linha

## Veto Conditions

Rejeitar e refazer este task se QUALQUER uma dessas condições for verdade:
1. O veredicto foi emitido sem ler visualmente o arquivo `output/capa.png` — a leitura do PNG é o fundamento da revisão; sem ela, o veredicto é inválido
2. Um critério com score < 4/10 foi reportado mas o veredicto final é APROVADO — contradição lógica que invalida a revisão; aplicar a regra de rejeição automática sem exceção
