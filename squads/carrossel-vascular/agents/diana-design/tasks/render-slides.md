---
task: "Renderizar Slides do Carrossel"
order: 1
input: |
  - roteiro: Roteiro completo do carrossel (roteiro.md)
  - template: Template HTML de referência (template-reference.html)
  - identity: Regras de identidade visual (visual-identity.md)
output: |
  - html_files: Arquivos HTML por slide (slide-01.html a slide-NN.html)
  - png_files: Screenshots PNG renderizados (slide-01.png a slide-NN.png)
---

# Renderizar Slides do Carrossel

Transforma o roteiro aprovado em slides visuais HTML/CSS, seguindo rigorosamente o template editorial VascularCare, e renderiza cada um como PNG via Playwright.

## Process

1. **Carregar referências visuais** — Ler `template-reference.html`, `visual-identity.md`, e `_memory/memories.md`. Em `memories.md`, verificar a seção "Última variante de capa usada" para saber qual variant (A, B, C ou D) foi usada na última execução — você DEVE usar uma variante diferente desta vez.

2. **Ler o roteiro** — Ler `roteiro.md` e mapear cada slide: headline, supporting_text, accent_keywords, background, tipo (cover/content/cta).

3. **Gerar HTML do cover (slide 1)** — Usar a variante de capa selecionada no passo 1 (diferente da última registrada nos memories). Consultar `visual-identity.md` seção "Cover Slide Design" para as especificações completas de cada variante (A, B, C ou D). Após renderizar, registrar em `_memory/memories.md` na seção "Última variante de capa usada" qual variante foi utilizada neste run.
   - Fundo escuro (#1a1a1a) com overlay
   - Header: mês/ano à esquerda, "Vol. NN" + "Dr. Marcelo Mandelli" à direita
   - Marca "VASCULAR" em Arial Black 38px branco
   - Título principal em Arial Black 34px branco
   - Subtítulo em Arial 13px #e0e0e0 centralizado
   - Footer com ícone logo + "VascularCare®" em branco
   - Dimensões: 1080x1440px com padding proporcional

4. **Gerar HTML dos slides de conteúdo (slides 2 a N-1)** — Cada slide segue:
   - Header: mês/ano + volume
   - Headline em Arial Black, corpo 24px (escalado para 1080px), cor #8B4513
   - Supporting text em Arial 14px (escalado para 1080px), cor #333
   - Accent keywords em bold #222 ou highlight color
   - Background conforme indicação: light (#FFFFFF), dark (#1a1a1a), accent (gradient warm)
   - Footer com ícone logo + "VascularCare®"
   - Para slides com checklist: usar ✓ em #8B4513 com items em flex layout

5. **Gerar HTML do CTA (último slide)** — Layout similar aos slides de conteúdo mas com:
   - Texto de chamada em fonte maior (14px escalado) com peso 700 em #8B4513
   - CTA action em destaque visual

6. **Escalar proporcionalmente** — O template de referência usa dimensões menores para preview. Para 1080x1440px, escalar todos os font sizes proporcionalmente:
   - Referência base: ~420px width → 1080px = fator ~2.57x
   - Body 14px → ~36px, Headlines 24px → ~62px, Cover title 34px → ~87px
   - Manter proporções de padding e gaps

7. **Salvar todos os HTMLs** — Escrever cada slide como arquivo HTML auto-contido em `output/slides/slide-NN.html` (zero-padded).

8. **Iniciar HTTP server** — Antes de renderizar:
   ```bash
   python -m http.server 8765 --directory "OUTPUT_DIR" &
   for i in $(seq 1 30); do curl -s http://localhost:8765 > /dev/null 2>&1 && break || sleep 0.1; done
   ```

9. **Renderizar primeiro slide** — Via Playwright:
   - `browser_navigate` para `http://localhost:8765/slides/slide-01.html`
   - `browser_resize` para 1080x1440
   - `browser_take_screenshot` salvando como `output/slides/slide-01.png`
   - Verificar visualmente o resultado

10. **Renderizar slides restantes** — Repetir o processo para cada slide. Verificar nomeação sequencial.

11. **Parar HTTP server** — Após todas as renderizações:
    ```bash
    pkill -f "http.server 8765" 2>/dev/null || true
    ```

12. **Apresentar resultado** — Listar todos os arquivos PNG gerados com paths absolutos clicáveis.

## Output Format

```yaml
slides_generated: N
files:
  - html: squads/carrossel-vascular/output/slides/slide-01.html
    png: squads/carrossel-vascular/output/slides/slide-01.png
    tipo: cover
  - html: squads/carrossel-vascular/output/slides/slide-02.html
    png: squads/carrossel-vascular/output/slides/slide-02.png
    tipo: conteúdo
  # ... até slide-NN
```

## Output Example

> Use as quality reference, not as rigid template.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1080px; height: 1440px; overflow: hidden; font-family: 'Arial', sans-serif; }
  .slide { width: 100%; height: 100%; display: flex; flex-direction: column;
           justify-content: space-between; padding: 56px 62px 46px; position: relative; }

  .slide-header { display: flex; justify-content: space-between; align-items: center;
                   border-bottom: 2px solid #ccc; padding-bottom: 20px; margin-bottom: 10px; }
  .slide-header span { font-size: 28px; font-weight: 700; letter-spacing: 3px;
                        color: #222; text-transform: uppercase; }

  .slide-body { flex: 1; display: flex; flex-direction: column; justify-content: center;
                padding: 20px 0; }
  .big-title { font-family: 'Arial Black', sans-serif; font-size: 62px; font-weight: 900;
               color: #8B4513; line-height: 1.1; margin-bottom: 40px; }
  .body-text { font-size: 36px; color: #333; line-height: 1.6; }
  .body-text strong { color: #222; font-weight: 700; }

  .slide-footer { display: flex; align-items: center; gap: 20px;
                   border-top: 2px solid #ccc; padding-top: 24px; margin-top: 10px; }
  .logo-icon { width: 56px; height: 56px; background: #8B4513; border-radius: 10px;
               display: flex; align-items: center; justify-content: center; }
  .logo-icon svg { width: 36px; height: 36px; fill: white; }
  .logo-text { font-size: 30px; font-weight: 700; color: #222; letter-spacing: 0.5px; }
  .logo-text sup { font-size: 18px; color: #888; }
  .footer-line { flex: 1; height: 2px; background: #ccc; }
</style>
</head>
<body>
<div class="slide">
  <div class="slide-header">
    <span>Abril 26</span>
    <span>Vol. 14</span>
  </div>
  <div class="slide-body">
    <h2 class="big-title">Tratamentos modernos para restaurar sua circulação e qualidade de vida</h2>
    <p class="body-text"><strong>A angioplastia</strong> é um procedimento minimamente invasivo,
    ideal para tratar obstruções arteriais e venosas de forma segura e precisa.</p>
  </div>
  <div class="slide-footer">
    <div class="logo-icon"><svg viewBox="0 0 14 14"><path d="M2 7 Q4 2 7 4 Q10 2 12 7 Q10 12 7 11 Q4 12 2 7Z"/></svg></div>
    <div class="logo-text">VascularCare<sup>®</sup></div>
    <div class="footer-line"></div>
  </div>
</div>
</body>
</html>
```

## Quality Criteria

- [ ] Todos os slides em exatamente 1080x1440px
- [ ] HTML auto-contido com CSS inline
- [ ] Font sizes escalados proporcionalmente (body ≥34px, heading ≥43px, hero ≥58px)
- [ ] Paleta de cores restrita à visual-identity.md
- [ ] Header e footer consistentes em todos os slides
- [ ] Cover com layout escuro diferenciado
- [ ] Nenhum overflow ou conteúdo cortado
- [ ] Arquivos nomeados slide-01 a slide-NN sequencialmente
- [ ] PNG renderizado com qualidade verificada visualmente

## Veto Conditions

Reject and redo if ANY are true:
1. Qualquer slide com dimensões diferentes de 1080x1440px
2. Texto legível com font-size abaixo de 20px
3. HTML com dependências externas (exceto Google Fonts)
4. Conteúdo cortado ou com overflow visível no PNG renderizado
