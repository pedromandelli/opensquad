---
type: checkpoint
outputFile: squads/carrossel-vascular/output/topic.md
---

# Step 01: Definir Tema e Estilo do Carrossel

## Contexto

Este squad cria carrosseis premium para a VascularCare. Antes da criacao do roteiro, precisamos definir o tema central e o estilo visual desta rodada.

## Perguntas para o usuario

**1. Qual tema especifico voce quer trabalhar hoje?**

Exemplos:
- "Sinais de ma circulacao que voce nao deve ignorar"
- "Varizes: quando tratar e quais tecnicas modernas existem"
- "Relacao entre obesidade e saude vascular"
- "Como funciona a metodologia D.N.A. VascularCare"

**2. Qual estilo visual?**

| Opção | Estilo | Descrição |
|-------|--------|-----------|
| `revista` | VascularCare Revista | Editorial escuro, fonte Montserrat, paleta terracotta. Layouts fixos: standard, statement, checklist, photo_checklist, two_section. |
| `pedro-ruiz` | Pedro Ruiz Edition | Moderno minimalista, fonte Inter, fotos coloridas, chrome discreto. Layouts fixos: cover, editorial, numbered, white-card, white-arc, bullet-photo. |
| `estilo-livre` | Estilo Livre | Liberdade criativa total nos layouts e composições. Cores e fonte Montserrat da VascularCare. Cada slide tem design único — sem templates repetitivos. |

**3. Você tem fotos para usar nos slides? (opcional)**

Se quiser incluir fotos nos slides, cole os caminhos absolutos das imagens, um por linha. Deixe em branco para usar apenas layouts sem foto.

Exemplo:
```
/Users/pedromandelli/Photos/cirurgia-01.jpg
/Users/pedromandelli/Photos/consulta-02.jpg
```

**4. Imagens de referência visual (apenas para `estilo-livre`)**

Se o estilo escolhido for `estilo-livre`, pergunte ao usuário:

> Você tem imagens de referência para inspirar o design? Podem ser prints de carrosséis que você gostou, posts de outras contas, mockups, ou qualquer imagem que represente o estilo visual que você quer.

O usuário pode:
- Colar caminhos absolutos das imagens de referência
- Arrastar imagens para o terminal
- Dizer que não tem referências (nesse caso, Diana cria com liberdade total)

As referências são copiadas para `squads/carrossel-vascular/pipeline/data/references/` para que Diana as analise antes de criar os slides.

**Preparar pasta de referências:**
- Limpe a pasta `references/` antes de copiar novas referências:
  ```bash
  rm -f squads/carrossel-vascular/pipeline/data/references/*.jpg squads/carrossel-vascular/pipeline/data/references/*.jpeg squads/carrossel-vascular/pipeline/data/references/*.png squads/carrossel-vascular/pipeline/data/references/*.webp
  ```
- Copie cada referência para a pasta:
  ```bash
  cp "<caminho_referencia>" "squads/carrossel-vascular/pipeline/data/references/"
  ```

Digite o tema, o estilo escolhido, as fotos (se tiver) e as referências visuais (se estilo-livre).

## Output Format

Salve em `squads/carrossel-vascular/output/topic.md`:

```
tema: "<tema escolhido>"
estilo: "<revista|pedro-ruiz|estilo-livre>"
fotos:
  - "<caminho absoluto foto 1>"
  - "<caminho absoluto foto 2>"
referencias:
  - "<caminho na pasta references/referencia-1.jpg>"
  - "<caminho na pasta references/referencia-2.png>"
```

Se o usuario nao informar fotos, omita o campo `fotos:` completamente (nao incluir com valor vazio).
Se o usuario nao informar referências ou o estilo não for `estilo-livre`, omita o campo `referencias:` completamente.
