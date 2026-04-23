---
execution: subagent
agent: capas-reels-vascular/agents/diego-display
model_tier: powerful
inputFile: squads/capas-reels-vascular/output/approved-copy.md
outputFile: squads/capas-reels-vascular/output/capa.png
---

# Step 04: Diego Display — Criar Capa

## Context Loading

Carregar estes arquivos antes de executar:
- `squads/capas-reels-vascular/output/approved-copy.md` — título, subtítulo e template aprovados
- `squads/capas-reels-vascular/output/input.md` — caminho da foto e tema original
- `squads/capas-reels-vascular/pipeline/data/visual-identity.md` — regras visuais, safe zone (y < 1350px), tipografia, logo
- `squads/capas-reels-vascular/pipeline/data/template-a-reference.html` — Template A (Clássico)
- `squads/capas-reels-vascular/pipeline/data/template-b-reference.html` — Template B (Health & Wellness) ⭐ FAVORITO
- `squads/capas-reels-vascular/pipeline/data/template-c-reference.html` — Template C (Authority Premium)
- `squads/capas-reels-vascular/pipeline/data/domain-framework.md` — critérios de seleção de template
- `squads/capas-reels-vascular/pipeline/data/anti-patterns.md` — erros de design a evitar

## Instructions

### Process

1. **Ler os inputs:**
   - `output/approved-copy.md` → extrair título, subtítulo (com marcação **bold**), template sugerido
   - `output/input.md` → extrair caminho absoluto da foto e tema do Reel

2. **Selecionar o template** com base nos critérios de `visual-identity.md`:
   - **Template B ⭐ (padrão):** foto escura/dramática ou tema de resultado/procedimento
   - **Template A:** foto clínica (médico/paciente/consultório) com sujeito centralizado
   - **Template C:** foto do Dr. Marcelo em pose profissional de autoridade
   - Documentar: "Template {X} selecionado — {justificativa de 1 linha}"

3. **Ler o HTML do template selecionado** de `pipeline/data/template-{x}-reference.html`

4. **Adaptar os placeholders:**
   - Background: ativar `background-image: url('{CAMINHO_ABSOLUTO_DA_FOTO}')` — usar caminho absoluto; remover o gradiente placeholder
   - Título: substituir o texto de exemplo pelo título aprovado
   - Subtítulo: substituir o texto de exemplo; converter `**PALAVRA**` → `<strong>PALAVRA</strong>` ou `font-weight: 900` inline
   - [Template B] Tag de categoria: adaptar ao tema (ex: "SAÚDE & BEM-ESTAR", "VASCULAR", "CIRURGIA")
   - [Template B] Bullet points: gerar 3 benefícios relevantes ao tema (curtos, impactantes, em caixa alta)
   - Logo: verificar que o caminho do logo está correto: `/Users/pedromandelli/Library/CloudStorage/GoogleDrive-pbalconimandelli@gmail.com/My Drive/Social Media/Imagens/Identidade Visual/sem fundo/vc-novo-fundoescuro.png`

5. **Verificar safe zone no HTML:**
   - Todo elemento deve ter `top < 1310px` (margem de 40px antes do limite de 1350px)
   - Confirmar posicionamento de logo, último bullet point e subtítulo

6. **Salvar o HTML em `output/capa.html`**

7. **Renderizar via Playwright:**
   - Configurar viewport: `{width: 1080, height: 1920}`
   - Navegar para `output/capa.html` (usar servidor HTTP local ou `file://` com caminho absoluto)
   - Aguardar carregamento completo (Google Fonts + foto)
   - Capturar screenshot em `output/capa.png` (fullPage: false — o viewport é exatamente a capa)

8. **Verificar o PNG renderizado:**
   - Ler `output/capa.png` visualmente
   - Confirmar: foto real no background (não gradiente), textos legíveis, logo presente
   - Se houver problema: diagnosticar e refazer antes de reportar

9. **Reportar resultado** com resumo técnico: template escolhido, foto carregada, dimensões, safe zone, arquivos gerados

## Output Format

```
Template selecionado: Template {A/B/C}
Justificativa: {1 linha}

Adaptações:
- Background: {caminho da foto}
- Título: "{titulo}"
- Subtítulo: "{subtitulo}"
- [Template B] Tag: "{TAG}"
- [Template B] Bullets: "• {B1}" / "• {B2}" / "• {B3}"

Arquivos:
- output/capa.html ✓
- output/capa.png ✓ (1080×1920px)

Safe zone: todos os elementos em y < 1350px ✓
```

## Output Example

```
Template selecionado: Template B — Health & Wellness Dramático
Justificativa: foto escura e dramática de procedimento, tema "trombose" orientado a diagnóstico e resultado — Template B é o favorito para este cenário

Adaptações:
- Background: /Users/pedromandelli/fotos/dr-marcelo-cirurgia-20240315.jpg
- Título: "TROMBOSE" (font-size: 148px, font-weight: 900)
- Subtítulo: "NÃO SIGNIFICA VIVER COM DOR, INCHAÇO OU LIMITAÇÃO PARA SEMPRE."
  — "DOR", "INCHAÇO" e "LIMITAÇÃO" em font-weight: 900
- Tag: "SAÚDE VASCULAR"
- Bullets:
    • DIAGNÓSTICO PRECISO
    • TECNOLOGIA MODERNA
    • MINIMAMENTE INVASIVO
- Logo: vc-novo-fundoescuro.png em y ≈ 1280px, altura 38px, opacity 0.80

Safe zone verificada:
  - Tags superiores: y ≈ 80px ✓
  - Título início: y ≈ 820px ✓
  - Último bullet: y ≈ 1120px ✓
  - Logo: y ≈ 1280px ✓

Arquivos:
- squads/capas-reels-vascular/output/capa.html ✓
- squads/capas-reels-vascular/output/capa.png ✓ (1080×1920px verificado)
Foto real confirmada no background ✓
```

## Veto Conditions

Rejeitar e refazer se QUALQUER uma dessas condições for verdade:
1. O PNG renderizado mostra gradiente no background (sem a foto real) — a foto não foi carregada; verificar o caminho absoluto e o carregamento pelo servidor HTTP antes de tentar novamente
2. O PNG tem dimensões diferentes de 1080×1920px — configurar explicitamente o viewport no Playwright e refazer a captura

## Quality Criteria

- [ ] `output/capa.html` salvo com foto real como background-image (caminho absoluto)
- [ ] `output/capa.png` renderizado em 1080×1920px exatos
- [ ] Todos os elementos visuais dentro de y < 1350px (safe zone)
- [ ] Logo VascularCare: caminho absoluto correto, legível, posicionado conforme o template
- [ ] Título e subtítulo da copy aprovada aplicados corretamente
- [ ] [Template B] Tag de categoria e bullet points adaptados ao tema
- [ ] PNG verificado visualmente antes da entrega
