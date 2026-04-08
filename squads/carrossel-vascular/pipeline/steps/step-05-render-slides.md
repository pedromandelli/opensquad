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
1. Leia o roteiro e crie um arquivo HTML por slide seguindo o template base e a identidade visual da VascularCare.
2. Garanta dimensao fixa 1080x1440, legibilidade em mobile, hierarquia de texto clara e consistencia de header/footer em todos os slides.
3. Salve os HTMLs em `output/slides/slide-01.html` ate `slide-NN.html`.
4. Inicie um servidor HTTP local e renderize cada slide com Playwright, gerando PNGs equivalentes.
5. Pare o servidor ao final e retorne uma lista dos arquivos gerados.

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
