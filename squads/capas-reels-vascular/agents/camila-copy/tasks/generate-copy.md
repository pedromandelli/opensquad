---
task: "Gerar Copy para Capa de Reel"
order: 1
input: |
  - tema: Nome da condição clínica ou benefício (ex: "trombose", "varizes", "lipedema", "sem repouso")
  - foto: Caminho da foto fornecida (para guiar o tom e o template sugerido)
  - contexto_adicional: Informação opcional sobre o Reel (ex: "procedimento de urgência", "antes e depois")
output: |
  - copy_options: 3 opções de título + subtítulo formatadas e prontas para seleção
  - tom_selecionado: Tom escolhido com justificativa
  - template_sugerido: Template recomendado (A, B ou C) com justificativa baseada na foto
---

# Gerar Copy para Capa de Reel

Recebe o tema do Reel e gera 3 opções de título + subtítulo com autoridade médica da Vascular Care, prontas para serem aplicadas no template visual pelo Diego Display.

## Process

1. **Ler o input:** Abrir `output/input.md` e extrair tema, caminho da foto e contexto adicional (se houver)

2. **Identificar o driver emocional dominante** com base no tema:
   - Condições graves (trombose, aneurisma, embolia) → driver: segurança e controle
   - Condições estéticas/funcionais (varizes, vasinhos, lipedema) → driver: resultado e transformação
   - Procedimentos técnicos (CLaCS, laser, escleroterapia) → driver: inovação e acessibilidade
   - Prevenção e diagnóstico → driver: empoderamento e clareza
   - Registrar o driver escolhido antes de escrever

3. **Selecionar o tom** lendo `pipeline/data/tone-of-voice.md`:
   - Aplicar o guia de seleção de tom conforme o tema e driver
   - Registrar o tom escolhido com uma frase de justificativa (ex: "Tom 3 — Transformação e Resultado: tema de benefício mensurável com foto impactante")

4. **Gerar as 3 opções de copy** seguindo o framework obrigatório:
   - **Opção A (Substantivo):** nome da condição ou elemento clínico — 1 palavra, máximo impacto
   - **Opção B (Benefício):** frase de transformação ou resultado — 2-3 palavras
   - **Opção C (Provocativo/Autoridade):** frase que gera curiosidade ou afirma verdade clínica — até 5 palavras
   - Para cada opção: gerar o subtítulo correspondente em caixa alta, máximo 2 linhas, com 1-2 palavras em **NEGRITO**

5. **Verificar conformidade regulatória** em cada opção:
   - Eliminar qualquer promessa de cura absoluta
   - Eliminar "100% garantido", "definitivamente", "cura" como substantivo
   - Eliminar tom alarmista ("pode te matar", "é perigoso")
   - Se uma opção violar: reescrever antes de apresentar

6. **Sugerir o template visual** com base na descrição/tipo da foto:
   - Foto de procedimento/clínica → Template A
   - Foto escura/dramática ou tema de resultado → Template B ⭐
   - Foto do Dr. Marcelo em consultório premium → Template C
   - Incluir justificativa de 1 linha

7. **Salvar o output** em `output/copy-options.md` no formato padrão

8. **Aguardar seleção** — não prosseguir para o próximo agente sem aprovação do usuário

## Output Format

```markdown
# Opções de Copy — {Tema}

**Tom selecionado:** {Tom N} — {Nome do Tom} ({justificativa de 1 linha})
**Driver emocional:** {driver identificado}

---

## Opção 1 — Substantivo da Condição

**Título:** {título — 1 palavra ou nome da condição}
**Subtítulo:** {SUBTÍTULO EM CAIXA ALTA COM **DESTAQUE** NAS PALAVRAS-CHAVE.}

---

## Opção 2 — Frase de Benefício

**Título:** {título — 2-3 palavras de transformação}
**Subtítulo:** {SUBTÍTULO EM CAIXA ALTA COM **DESTAQUE** NAS PALAVRAS-CHAVE.}

---

## Opção 3 — Provocativo / Autoridade

**Título:** {título — frase que gera curiosidade ou afirma verdade clínica}
**Subtítulo:** {SUBTÍTULO EM CAIXA ALTA COM **DESTAQUE** NAS PALAVRAS-CHAVE.}

---

**Template sugerido:** Template {A/B/C} — {justificativa de 1 linha}

Qual opção você prefere? (1, 2 ou 3 — ou peça ajustes)
```

## Output Example

> Use como referência de qualidade — não como template rígido.

```markdown
# Opções de Copy — Trombose

**Tom selecionado:** Tom 1 — Autoridade Clínica (condição clínica grave com foto de procedimento cirúrgico)
**Driver emocional:** Segurança e controle — o paciente precisa saber que há solução especializada

---

## Opção 1 — Substantivo da Condição

**Título:** Trombose
**Subtítulo:** NÃO SIGNIFICA VIVER COM **DOR**, INCHAÇO OU **LIMITAÇÃO** PARA SEMPRE.

---

## Opção 2 — Frase de Benefício

**Título:** Sem Coágulos
**Subtítulo:** O DIAGNÓSTICO PRECOCE **SALVA VIDAS** E PRESERVA SUA QUALIDADE DE MOVIMENTO.

---

## Opção 3 — Provocativo / Autoridade

**Título:** Trombo tem cura.
**Subtítulo:** A **TECNOLOGIA VASCULAR MODERNA** ELIMINA O RISCO SEM CIRURGIA ABERTA.

---

**Template sugerido:** Template A — foto de cirurgia com estilo clínico, sujeito centralizado no topo

Qual opção você prefere? (1, 2 ou 3 — ou peça ajustes)
```

## Quality Criteria

- [ ] Título de cada opção tem no máximo 5 palavras (idealmente 1-3)
- [ ] Subtítulo de cada opção tem no máximo 2 linhas renderizadas em 1080px
- [ ] Cada subtítulo contém pelo menos 1 palavra em **NEGRITO**
- [ ] As 3 opções são genuinamente distintas (substantivo / benefício / provocativo)
- [ ] Nenhuma opção contém linguagem proibida pelo CFM/ANVISA
- [ ] Tom e driver emocional identificados e documentados no output
- [ ] Template sugerido com justificativa baseada na foto

## Veto Conditions

Rejeitar e refazer se QUALQUER uma dessas condições for verdade:
1. Qualquer título tiver mais de 5 palavras — não é negociável, o título é limitado pelo espaço visual do template
2. Qualquer opção contiver linguagem proibida pelo CFM ("cura", "100% garantido", promessa terapêutica absoluta) — rejeição imediata sem exceção
