# Domain Framework — Capas Reels Vascular Care

## Visão Geral

Este framework descreve a metodologia operacional para criação de capas de Reels com autoridade médica para a Vascular Care. O processo transforma um par **foto + tema** em uma capa 1080×1920px pronta para publicação.

---

## Fluxo de Trabalho Principal

```
Foto + Tema → Copy → Aprovação → Design → Revisão → Aprovação Final
```

### Fase 1: Input (Checkpoint)
**Entrada:** Dois dados fornecidos pela social media:
1. **Foto:** caminho da imagem (arquivo local ou URL)
2. **Tema:** assunto clínico ou benefício (ex: "trombose", "varizes", "lipedema", "técnica CLaCS")

**Saída:** `output/input.md` com foto + tema estruturados

---

### Fase 2: Copy — Camila Copy (Inline)

**Framework de geração de copy em 6 passos:**

1. **Identificar o driver emocional dominante** com base no tema:
   - Condições graves (trombose, aneurisma) → driver: segurança e controle
   - Condições estéticas (varizes, vasinhos) → driver: resultado e transformação
   - Procedimentos técnicos (CLaCS, laser) → driver: inovação e acessibilidade
   - Prevenção e diagnóstico → driver: empoderamento e clareza

2. **Gerar 3 variações de TÍTULO:**
   - Opção A: substantivo da condição (1 palavra, máximo impacto)
   - Opção B: frase de benefício/transformação (2-3 palavras)
   - Opção C: frase provocativa ou de autoridade (até 5 palavras)

3. **Para cada título, gerar o SUBTÍTULO:**
   - Formato: caixa alta, máximo 2 linhas
   - Espaçamento: letter-spacing largo (0.18–0.20em visualmente)
   - Destaque: 1-2 palavras em negrito (**PALAVRA**)
   - Tom: assertivo, clínico, com empatia

4. **Verificar conformidade regulatória:**
   - Nenhuma promessa de cura absoluta
   - Sem linguagem proibida pelo CFM/ANVISA
   - Sem superlativo sem respaldo científico

5. **Apresentar 3 opções** ao usuário, formatadas claramente

6. **Aguardar aprovação** antes de prosseguir para o design

---

### Fase 3: Seleção (Checkpoint)
**Entrada:** 3 opções de copy geradas por Camila
**Ação:** Social media escolhe uma opção (ou pede ajuste)
**Saída:** `output/approved-copy.md` com título + subtítulo aprovados

---

### Fase 4: Design — Diego Display (Subagent)

**Framework de criação visual em 10 passos:**

1. **Ler a copy aprovada** em `output/approved-copy.md`
2. **Ler o caminho da foto** em `output/input.md`
3. **Selecionar o template** com base na foto e tema:
   - Foto clínica/consultório → Template A ou C
   - Foto escura/dramática ou tema de resultado → Template B ⭐
   - Foto do Dr. Marcelo em pose profissional → Template C
4. **Copiar o HTML do template** escolhido
5. **Substituir placeholders:**
   - Background: activar a URL da foto real
   - Título: texto aprovado
   - Subtítulo: texto aprovado (com marcação de destaques)
   - Tag de categoria (Template B): adaptar ao tema
   - Bullet points (Template B): 3 benefícios relevantes ao tema
6. **Salvar HTML** em `output/capa.html`
7. **Iniciar servidor HTTP** na pasta `output/`
8. **Renderizar:** navegar, redimensionar para 1080×1920, capturar screenshot
9. **Salvar PNG** em `output/capa.png`
10. **Verificar visualmente** a imagem antes de entregar

---

### Fase 5: Revisão — Rafael Revisão (Inline)

**Framework de revisão em 5 passos:**

1. **Ler a imagem** renderizada em `output/capa.png`
2. **Pontuar cada critério** de 1 a 10
3. **Aplicar regra de rejeição automática:** qualquer critério < 4 = REJEITAR
4. **Compilar veredicto** estruturado com feedback específico
5. **Emitir:** APROVADO (prosseguir) ou REJEITADO (retornar ao Diego)

---

### Fase 6: Aprovação Final (Checkpoint)
**Ação:** Social media aprova ou solicita ajuste
**Saída:** Arquivo `output/capa.png` pronto para publicação

---

## Critérios de Seleção de Template

| Situação | Template |
|----------|----------|
| Foto com fundo naturalmente escuro/dramático | B ⭐ (preferência padrão) |
| Tema de procedimento ou resultado mensurável | B ⭐ |
| Foto clínica com médico/paciente centralizado | A |
| Foto em consultório com luz neutra | A |
| Foto do Dr. Marcelo em pose de autoridade | C |
| Tema de diagnóstico ou consulta | C |

---

## Regras de Safe Zone

```
┌─────────────────────────────────────┐  ←  0px (topo)
│                                     │
│   SAFE ZONE — todos os elementos    │
│   visuais devem estar aqui          │
│                                     │
│   Logo, título, subtítulo,          │
│   bullet points, tags               │
│                                     │
├─────────────────────────────────────┤  ←  1350px
│                                     │
│   ÁREA DE OVERFLOW — só gradiente   │
│   e overlay escuro — nenhum texto   │
│                                     │
└─────────────────────────────────────┘  ←  1920px
```

**Regra:** Todo elemento de texto, logo e decoração deve ter `top < 1350px` (ou `bottom` calculado de forma que não ultrapasse 1350px).

---

## Hierarquia Visual dos Templates

```
Prioridade 1: TÍTULO (tamanho dominante, peso 900)
Prioridade 2: SUBTÍTULO / BULLET POINTS (complemento informativo)
Prioridade 3: TAG DE CATEGORIA (contexto, discreta)
Prioridade 4: LOGO / DNA LATERAL (identidade de marca, sutil)
```

---

## Conformidade Regulatória em Publicidade Médica

- **Proibido:** promessas de cura absoluta, "cure", "elimina definitivamente"
- **Permitido:** "pode ajudar", "diagnóstico precoce", "tecnologia moderna", "minimamente invasivo"
- **Destaques em bold:** palavras que reforçam o benefício sem overpromise
- **Tom:** autoridade com empatia — nunca sensacionalismo, nunca alarme
