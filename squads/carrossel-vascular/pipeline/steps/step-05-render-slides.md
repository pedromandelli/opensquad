---
execution: inline
agent: diana-design
inputFile: squads/carrossel-vascular/output/roteiro.md
outputFile: squads/carrossel-vascular/output/slides/slide-01.html
---

# Step 04: Renderizar Slides

## Context Loading

Load these files before executing:
- `squads/carrossel-vascular/output/roteiro.md` — roteiro aprovado
- `squads/carrossel-vascular/pipeline/data/template-reference.html` — estrutura base visual
- `squads/carrossel-vascular/pipeline/data/visual-identity.md` — regras de cor, tipografia e layout
- `squads/carrossel-vascular/pipeline/data/quality-criteria.md` — criterios de qualidade visual

## Instructions

### Process

1. Leia `squads/carrossel-vascular/output/topic.md` para verificar os campos `estilo:` e `fotos:`.

2. **Preparar fotos (se houver)** — Se `topic.md` contiver o campo `fotos:` com caminhos de imagens:
   - Remova todas as imagens existentes em `squads/carrossel-vascular/pipeline/data/photos/` (arquivos .jpg, .jpeg, .png, .webp) preservando `LEIAME.md`:
     ```bash
     find squads/carrossel-vascular/pipeline/data/photos/ -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) -delete
     ```
   - Copie cada foto listada para a pasta `photos/`, mantendo o nome original:
     ```bash
     cp "<caminho_foto>" "squads/carrossel-vascular/pipeline/data/photos/"
     ```
   - Se `fotos:` estiver ausente ou vazio, pule este passo — o gerador usara as fotos que ja estiverem na pasta (ou nenhuma, se a pasta estiver vazia).

3. Crie um arquivo `_run.mjs` na pasta de output do run atual com o gerador correto:

**Se `estilo: revista`:**
```js
import { generateSlides, screenshotAll } from "/Users/pedromandelli/Documents/Code/opensquad/squads/carrossel-vascular/pipeline/data/generate-slides.mjs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
const __dir = fileURLToPath(new URL(".", import.meta.url));
const roteiro = resolve(__dir, "../../roteiro.md");
const outDir  = resolve(__dir, ".");
console.log("🎨 Gerando slides — Revista Edition...");
const files = await generateSlides(roteiro, outDir);
console.log(`\n✅ ${files.length} HTMLs. Renderizando...\n`);
await screenshotAll(files);
console.log("\n✅ Pronto.");
```

**Se `estilo: pedro-ruiz`:**
```js
import { generateSlides, screenshotAll } from "/Users/pedromandelli/Documents/Code/opensquad/squads/carrossel-vascular/pipeline/data/generate-slides-pedro-ruiz.mjs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
const __dir = fileURLToPath(new URL(".", import.meta.url));
const roteiro = resolve(__dir, "../../roteiro.md");
const outDir  = resolve(__dir, ".");
console.log("🎨 Gerando slides — Pedro Ruiz Edition...");
const files = await generateSlides(roteiro, outDir);
console.log(`\n✅ ${files.length} HTMLs. Renderizando...\n`);
await screenshotAll(files);
console.log("\n✅ Pronto.");
```

4. Execute o `_run.mjs` com `node _run.mjs` na pasta de output.
5. Após a execução, renderize cada PNG via Playwright para verificação visual:
   - Inicie HTTP server: `python -m http.server 8765 --directory "<output_dir>" &`
   - Para cada slide: `browser_navigate` → `browser_resize 1080x1440` → `browser_take_screenshot`
   - Pare o server ao final.
6. Retorne lista de arquivos gerados.

## Output Format

The output MUST follow this exact structure:
```
slides_generated: <numero>
files:
  - html: squads/carrossel-vascular/output/slides/slide-01.html
    png: squads/carrossel-vascular/output/slides/slide-01.png
    tipo: cover
  - html: squads/carrossel-vascular/output/slides/slide-02.html
    png: squads/carrossel-vascular/output/slides/slide-02.png
    tipo: conteudo
  # ... ate o ultimo
```

## Output Example

```text
slides_generated: 7
files:
  - html: squads/carrossel-vascular/output/slides/slide-01.html
    png: squads/carrossel-vascular/output/slides/slide-01.png
    tipo: cover
  - html: squads/carrossel-vascular/output/slides/slide-02.html
    png: squads/carrossel-vascular/output/slides/slide-02.png
    tipo: contexto
  - html: squads/carrossel-vascular/output/slides/slide-03.html
    png: squads/carrossel-vascular/output/slides/slide-03.png
    tipo: sintoma
  - html: squads/carrossel-vascular/output/slides/slide-04.html
    png: squads/carrossel-vascular/output/slides/slide-04.png
    tipo: sintoma
  - html: squads/carrossel-vascular/output/slides/slide-05.html
    png: squads/carrossel-vascular/output/slides/slide-05.png
    tipo: solucao
  - html: squads/carrossel-vascular/output/slides/slide-06.html
    png: squads/carrossel-vascular/output/slides/slide-06.png
    tipo: autoridade
  - html: squads/carrossel-vascular/output/slides/slide-07.html
    png: squads/carrossel-vascular/output/slides/slide-07.png
    tipo: cta
```

## Veto Conditions

Reject and redo if ANY of these are true:
1. Algum slide nao estiver em 1080x1440.
2. Algum texto legivel estiver abaixo de 20px.
3. Algum slide quebrar consistencia basica de header/footer.
4. Arquivos PNG nao forem gerados para todos os slides.

## Quality Criteria

- [ ] Todos os slides seguem a identidade visual definida
- [ ] Sequencia de arquivos esta completa e sem lacunas
- [ ] Cover e CTA estao visualmente destacados
- [ ] Nao ha overflow ou cortes de conteudo
