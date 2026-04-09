---
task: "Criar Capa do Reel"
order: 1
input: |
  - foto_path: Caminho absoluto da foto fornecida (lido de output/input.md)
  - titulo: Título aprovado pela social media (lido de output/approved-copy.md)
  - subtitulo: Subtítulo aprovado com marcação de negrito **PALAVRA** (lido de output/approved-copy.md)
  - tema: Tema do Reel (para adaptar a tag de categoria e bullet points no Template B)
  - template_sugerido: Template recomendado pela Camila Copy (A, B ou C) — Diego pode divergir com justificativa
output: |
  - capa_html: output/capa.html — HTML completo da capa com foto real como background
  - capa_png: output/capa.png — Screenshot renderizado 1080×1920px pronto para publicação
---

# Criar Capa do Reel

Recebe a copy aprovada e a foto fornecida pela social media, adapta o template HTML escolhido substituindo todos os placeholders, renderiza via Playwright e entrega o PNG final 1080×1920px.

## Process

1. **Ler os inputs** de dois arquivos:
   - Abrir `output/approved-copy.md` → extrair: título, subtítulo (com marcação **bold**), template sugerido
   - Abrir `output/input.md` → extrair: caminho absoluto da foto, tema do Reel

2. **Selecionar o template** com base nos critérios documentados em `pipeline/data/visual-identity.md`:
   - **Template B ⭐ (padrão/favorito):** usar quando a foto tem fundo escuro/dramático, ou quando o tema é de procedimento, resultado ou benefício mensurável
   - **Template A:** usar quando a foto é clínica (médico/paciente/consultório) com sujeito centralizado e iluminação neutra
   - **Template C:** usar quando a foto é do Dr. Marcelo em pose de autoridade profissional
   - Se divergir da sugestão da Camila, documentar a justificativa em 1 linha
   - **Registrar:** "Template {X} selecionado — {justificativa}"

3. **Ler o HTML do template selecionado** (um dos três arquivos em `pipeline/data/`):
   - `pipeline/data/template-a-reference.html`
   - `pipeline/data/template-b-reference.html`
   - `pipeline/data/template-c-reference.html`

4. **Adaptar o HTML** substituindo todos os placeholders:
   - **Background:** ativar `background-image: url('{FOTO_PATH}')` com o caminho absoluto da foto; remover/sobrescrever o gradiente placeholder
   - **Título:** substituir o texto de exemplo pelo título aprovado (manter o CSS de peso/tamanho intacto)
   - **Subtítulo:** substituir o texto de exemplo pelo subtítulo aprovado; converter `**PALAVRA**` em `<strong>PALAVRA</strong>` ou `font-weight: 900` inline
   - **Template B — Tag de categoria:** adaptar ao tema (ex: "SAÚDE & BEM-ESTAR", "VASCULAR", "CIRURGIA VASCULAR")
   - **Template B — Bullet points:** gerar 3 bullet points relevantes ao tema (ex: "• 100% LASER", "• SEM REPOUSO", "• SUA ROTINA PLENA")
   - **Template C — Não alterar:** elementos decorativos (cruz médica, linha horizontal) permanecem idênticos

5. **Verificar a safe zone** no HTML antes de renderizar:
   - Confirmar que todos os elementos têm `top < 1310px` (margem de segurança de 40px)
   - O logo deve estar posicionado dentro da safe zone no template escolhido
   - O último elemento de texto (subtítulo ou bullet point mais baixo) não deve ultrapassar y=1350px

6. **Salvar o HTML** em `output/capa.html`

7. **Renderizar via Playwright:**
   - Iniciar servidor HTTP na pasta `squads/capas-reels-vascular/output/` (ou usar file:// com caminho absoluto)
   - Abrir o navegador com viewport `{width: 1080, height: 1920}`
   - Navegar para `output/capa.html`
   - Aguardar carregamento completo (incluindo Google Fonts e a foto)
   - Capturar screenshot em `output/capa.png` com dimensão completa (fullPage: false — o viewport já é a capa inteira)

8. **Verificar o PNG renderizado:**
   - Ler o arquivo `output/capa.png` visualmente
   - Confirmar: foto real visível como background (não gradiente), textos legíveis, logo presente
   - Se houver problema (foto não apareceu, font não carregou, layout quebrado): diagnosticar e repetir a partir do passo 4

9. **Entregar o resultado** com resumo técnico:
   - Template usado: {X}
   - Foto: carregada corretamente (sim/não)
   - Dimensões PNG: 1080×1920 (confirmar)
   - Safe zone: todos os elementos dentro de y < 1350px (sim/não)
   - Arquivos: `output/capa.html` + `output/capa.png`

10. **Parar o servidor HTTP** após a captura

## Output Format

```
Template selecionado: Template {A/B/C}
Justificativa: {1 linha explicando a escolha}

Adaptações realizadas:
- Background: foto carregada de {caminho_absoluto_foto}
- Título: "{titulo_aprovado}"
- Subtítulo: "{subtitulo_aprovado}"
- [Template B] Tag de categoria: "{TAG ADAPTADA}"
- [Template B] Bullet points: "• {BULLET 1}" / "• {BULLET 2}" / "• {BULLET 3}"

Arquivos gerados:
- output/capa.html ✓
- output/capa.png ✓ (1080×1920px)

Safe zone verificada: todos os elementos em y < 1350px ✓
```

## Output Example

> Use como referência de qualidade — não como template rígido.

```
Template selecionado: Template B — Health & Wellness Dramático
Justificativa: foto escura e dramática de procedimento, tema "varizes" orientado a resultado — Template B é o favorito para este cenário

Adaptações realizadas:
- Background: foto carregada de /Users/social/fotos/paciente-laser-varizes-20240315.jpg
- Título: "PERNAS LEVES" (font-size: 112px, font-weight: 900, uppercase)
- Subtítulo: "O LASER ELIMINA AS VARIZES SEM REPOUSO E SEM INTERNAÇÃO."
  — palavras "SEM REPOUSO" e "SEM INTERNAÇÃO" em font-weight: 900
- Tag de categoria: "SAÚDE & BEM-ESTAR"
- Bullet points:
    • 100% LASER
    • SEM REPOUSO
    • SUA ROTINA PLENA
- Texto lateral: "DNA VASCULARCARE." (rotacionado 90°, opacity 0.30)
- Logo: /Users/pedromandelli/Library/CloudStorage/GoogleDrive-pbalconimandelli@gmail.com/My Drive/Social Media/Imagens/Identidade Visual/sem fundo/vc-novo-fundoescuro.png (altura 38px, opacity 0.80)

Verificação safe zone:
  - Tags superiores: y ≈ 80px ✓
  - Título: y ≈ 880px (top da linha 1) ✓
  - Bullet points: y ≈ 1120px (último item) ✓
  - Logo: y ≈ 1280px ✓
  - Todos os elementos dentro de y < 1350px ✓

Arquivos gerados:
- squads/capas-reels-vascular/output/capa.html ✓
- squads/capas-reels-vascular/output/capa.png ✓ (1080×1920px verificado)
```

## Quality Criteria

- [ ] HTML salvo em `output/capa.html` com foto real (não placeholder de gradiente) como background
- [ ] PNG renderizado em `output/capa.png` com dimensões exatas 1080×1920px
- [ ] Todos os elementos visuais dentro de y < 1350px (safe zone obrigatória)
- [ ] Logo VascularCare presente: `/Users/pedromandelli/Library/CloudStorage/GoogleDrive-pbalconimandelli@gmail.com/My Drive/Social Media/Imagens/Identidade Visual/sem fundo/vc-novo-fundoescuro.png`
- [ ] Título e subtítulo aprovados aplicados corretamente (sem truncamento, sem erro de texto)
- [ ] Template B: tag de categoria e bullet points adaptados ao tema
- [ ] PNG verificado visualmente antes da entrega (foto real confirmada)

## Veto Conditions

Rejeitar e refazer se QUALQUER uma dessas condições for verdade:
1. O background do PNG renderizado é um gradiente (sem a foto real) — indica que a foto não foi carregada; refazer a partir do passo 4 verificando o caminho da foto e o carregamento pelo servidor HTTP
2. O PNG tem dimensões diferentes de 1080×1920px — indica problema na configuração do viewport Playwright; refazer a partir do passo 7 com configuração explícita de viewport
