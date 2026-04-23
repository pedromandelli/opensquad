# Quality Criteria — Capas Reels Vascular Care

## Critérios de Qualidade por Agente

---

## Camila Copy — Copy de Autoridade Médica

### Rubrica de Avaliação (0-10 por critério)

| Critério | Peso | Mínimo Aceitável |
|----------|------|-----------------|
| Título tem no máximo 5 palavras (idealmente 1-3) | Alto | 3/10 |
| Subtítulo tem no máximo 2 linhas | Alto | 4/10 |
| Pelo menos 1-2 palavras em destaque (**bold**) no subtítulo | Alto | 4/10 |
| Tom alinhado com Vascular Care: sofisticado, acolhedor, técnico | Alto | 5/10 |
| Nenhuma promessa terapêutica absoluta ou linguagem proibida CFM | Bloqueador | 10/10 |
| 3 opções distintas e genuinamente diferentes apresentadas | Médio | 4/10 |
| Subtítulo afirmativo (não interrogativo) | Médio | 5/10 |
| Título impacta visualmente — para o scroll em feed | Alto | 6/10 |

### Critérios de Aprovação da Copy

- [ ] Título: máximo 5 palavras, preferencialmente 1-3
- [ ] Subtítulo: máximo 2 linhas quando renderizado no template
- [ ] Destaques: mínimo 1 palavra em bold (`**PALAVRA**`) no subtítulo
- [ ] Tom: sofisticado + acolhedor + técnico (sem sensacionalismo)
- [ ] Conformidade: sem linguagem proibida pelo CFM/ANVISA
- [ ] Variedade: 3 opções genuinamente distintas (substantivo / benefício / provocativo)
- [ ] Driver emocional identificado e aplicado corretamente
- [ ] Nenhuma pergunta retórica alarmista

---

## Diego Display — Designer de Capas

### Rubrica Visual (score 1-10 por critério)

| Critério | Mínimo Aceitável | Rejeição Automática |
|----------|-----------------|---------------------|
| Foto real como background (não placeholder) | 7/10 | < 5 |
| Dimensões exatas 1080×1920px | 10/10 | < 9 |
| Todos os elementos dentro da safe zone (y < 1350px) | 10/10 | < 9 |
| Logo VascularCare presente e legível | 7/10 | < 4 |
| Contraste texto/fundo (branco legível) | 8/10 | < 5 |
| Template escolhido adequado à foto | 7/10 | < 4 |
| Título bold e de alto impacto visual | 7/10 | < 5 |
| Subtítulo em small caps com keywords destacadas | 7/10 | < 5 |
| PNG salvo corretamente em output/capa.png | 10/10 | < 10 |
| HTML salvo em output/capa.html (para re-renderizações) | 8/10 | < 5 |

### Checklist de Entrega do Diego

- [ ] `output/capa.html` — HTML completo com foto embedded
- [ ] `output/capa.png` — Screenshot renderizado 1080×1920px
- [ ] Foto real visível como background (sem gradiente placeholder)
- [ ] Todos os textos dentro de y=0 a y=1350px (safe zone)
- [ ] Logo VascularCare legível no canto definido pelo template
- [ ] Tipografia: Inter, título 112–148px weight 900, subtítulo 30px weight 500-600
- [ ] Template escolhido documentado com justificativa

---

## Rafael Revisão — Revisor de Qualidade Visual

### Rubrica de Revisão — 8 Dimensões

| # | Dimensão | Critério | Score |
|---|----------|----------|-------|
| 1 | Foto Background | Foto real como background (sem placeholder de gradiente) | /10 |
| 2 | Safe Zone | Todos elementos dentro de y < 1350px | /10 |
| 3 | Contraste | Texto branco legível sobre overlay escuro | /10 |
| 4 | Logo | VascularCare presente, legível e bem posicionado | /10 |
| 5 | Título | Bold, alto impacto, tamanho dominante | /10 |
| 6 | Subtítulo | Small caps com keywords em destaque (bold) | /10 |
| 7 | Identidade | Alinhamento com templates aprovados | /10 |
| 8 | Técnico | Ausência de elementos cortados ou fora do canvas | /10 |

**Regra de aprovação:** Todos os critérios ≥ 4/10. Qualquer critério < 4/10 = REJEITAR automaticamente.

**Score mínimo total:** 56/80 para aprovação.

### Veredicto Obrigatório

**Formato APROVADO:**
```
VEREDICTO: ✅ APROVADO

Score total: X/80

Critérios:
1. Foto Background: X/10
2. Safe Zone: X/10
...

Arquivo final: output/capa.png
```

**Formato REJEITADO:**
```
VEREDICTO: ❌ REJEITADO

Critério reprovado: [nome do critério] — X/10 (mínimo: 4/10)

Correções obrigatórias:
1. [Correção específica e acionável com localização exata]
2. [Correção específica]

Retornar ao Diego Display para correção.
```

---

## Critérios Globais do Squad

### Padrão de Excelência Vascular Care

- **Autoridade:** a capa comunica especialização médica de alto nível
- **Legibilidade:** título e subtítulo legíveis em miniatura de 120×213px (feed Instagram)
- **Impacto visual:** para o scroll em menos de 0.3 segundos
- **Consistência de marca:** alinhada com os 3 templates aprovados e a identidade visual
- **Conformidade:** sem linguagem proibida, sem overpromise

### Limiares de Aceitação

| Dimensão | Mínimo | Alvo |
|----------|--------|------|
| Copy: clareza do título | Reconhecível em 1s | Impacto imediato |
| Copy: tom de voz | Autoridade presente | Autoridade + empatia |
| Design: contraste | 4.5:1 (WCAG AA) | 7:1 (WCAG AAA) |
| Design: dimensões | 1080×1920 exatos | 1080×1920 exatos |
| Design: safe zone | Todos elementos em y<1350 | Margem de 40px extra |
| Revisão: score | 56/80 (70%) | 72/80 (90%) |
