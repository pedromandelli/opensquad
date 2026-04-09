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
| `revista` | VascularCare Revista | Editorial escuro, fonte Montserrat, paleta terracotta. Layouts: standard, statement, checklist, photo_checklist, two_section. |
| `pedro-ruiz` | Pedro Ruiz Edition | Moderno minimalista, fonte Inter, fotos coloridas, chrome discreto. Layouts: cover, editorial, numbered, white-card, white-arc, bullet-photo. |

**3. Você tem fotos para usar nos slides? (opcional)**

Se quiser incluir fotos nos slides, cole os caminhos absolutos das imagens, um por linha. Deixe em branco para usar apenas layouts sem foto.

Exemplo:
```
/Users/pedromandelli/Photos/cirurgia-01.jpg
/Users/pedromandelli/Photos/consulta-02.jpg
```

Digite o tema, o estilo escolhido e, se tiver, os caminhos das fotos.

## Output Format

Salve em `squads/carrossel-vascular/output/topic.md`:

```
tema: "<tema escolhido>"
estilo: "<revista|pedro-ruiz>"
fotos:
  - "<caminho absoluto foto 1>"
  - "<caminho absoluto foto 2>"
```

Se o usuario nao informar fotos, omita o campo `fotos:` completamente (nao incluir com valor vazio).
