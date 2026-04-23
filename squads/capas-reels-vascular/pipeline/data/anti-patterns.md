# Anti-Patterns — Capas Reels Vascular Care

Erros documentados, por que acontecem e como evitá-los.

---

## Anti-Patterns de Copy (Camila Copy)

### ❌ Título genérico sem impacto visual
**Exemplo errado:** "Saúde Vascular", "Bem-estar", "Cuidados com a Saúde"
**Por que acontece:** O agente tenta ser abrangente demais para "não errar"
**Por que é problema:** Sem especificidade, não para o scroll. A função do título é comunicar o assunto em 0.3 segundos — palavras vagas falham nisso.
**Correção:** Use o nome da condição específica ("Trombose", "Lipedema") OU uma frase de benefício concreto ("Pernas Leves", "Sem Coágulos")

---

### ❌ Jargão médico incompreensível no título
**Exemplo errado:** "Tromboembolismo Venoso Profundo", "Endovenous Laser Ablation"
**Por que acontece:** O agente busca precisão técnica sem considerar a audiência
**Por que é problema:** O público geral não entende — a capa não comunica e perde o scroll
**Correção:** Use a versão em português acessível ("Trombose", "Laser nas Varizes") — o subtítulo pode trazer a nuance técnica

---

### ❌ Subtítulo com mais de 2 linhas
**Exemplo errado:** "O DIAGNÓSTICO PRECOCE DA TROMBOSE VENOSA PROFUNDA É FUNDAMENTAL PARA PREVENIR COMPLICAÇÕES SÉRIAS COMO A EMBOLIA PULMONAR."
**Por que acontece:** O agente inclui toda a informação disponível sem considerar o layout
**Por que é problema:** Quebra o layout visual — o template foi calibrado para 2 linhas máximas
**Correção:** Cortar para o essencial: "O DIAGNÓSTICO PRECOCE **SALVA VIDAS** E PRESERVA SEU MOVIMENTO."

---

### ❌ Tom sensacionalista ou alarmista
**Exemplo errado:** "TROMBOSE PODE TE MATAR!", "ATENÇÃO: VARIZES SÃO PERIGOSAS!"
**Por que acontece:** Confusão entre impacto emocional e alarmismo irresponsável
**Por que é problema:** Contradiz a identidade de marca da Vascular Care (sofisticada, acolhedora) e viola diretrizes éticas de publicidade médica
**Correção:** O impacto vem da verdade dita com autoridade, não do grito: "Trombose não significa conviver com dor para sempre."

---

### ❌ Três opções idênticas com variações mínimas
**Exemplo errado:** Opção 1: "Trombose" / Opção 2: "Trombose Venosa" / Opção 3: "Trombo"
**Por que acontece:** Falta de criatividade na aplicação do framework de 3 tipos de título
**Por que é problema:** O usuário não tem escolha real — perde o valor do checkpoint de seleção
**Correção:** Aplicar rigorosamente os 3 tipos: substantivo (Opção A) + benefício (Opção B) + provocativo (Opção C)

---

### ❌ Linguagem proibida pelo CFM
**Exemplo errado:** "Cure suas varizes definitivamente", "Garantia de resultado em 30 dias"
**Por que acontece:** O agente prioriza impacto sem verificar compliance
**Por que é problema:** Violação regulatória — pode gerar processo ético contra o médico
**Correção:** Substituir por "pode eliminar", "resultados documentados", "tecnologia moderna"

---

## Anti-Patterns de Design (Diego Display)

### ❌ Deixar o gradiente placeholder como background em produção
**Exemplo errado:** Entregar capa com `background: linear-gradient(135deg, #1a1a2e, #16213e)` sem substituir pela foto real
**Por que acontece:** O agente salva o HTML antes de ativar a foto real
**Por que é problema:** A capa não usa a foto fornecida — não há imagem real, só cores genéricas
**Correção:** Sempre ativar a linha `background-image: url('{FOTO_PATH}')` E remover/sobrescrever o gradiente placeholder antes de renderizar

---

### ❌ Elementos visuais abaixo de y=1350px
**Exemplo errado:** Logo posicionado em `bottom: 30px` (em canvas de 1920px = y≈1890px)
**Por que acontece:** O agente não converte corretamente posição bottom para posição top
**Por que é problema:** O elemento fica fora da safe zone — será cortado no feed do Instagram
**Correção:** Calcular: elemento em `bottom: 30px` em 1920px = posição top de 1890px → fora da safe zone. Usar `top: 1290px` ou equivalente para garantir que fique dentro de 1350px.

---

### ❌ Alterar a família tipográfica dos templates
**Exemplo errado:** Usar `font-family: 'Roboto'` ou `'Montserrat'` em vez de `'Inter'`
**Por que acontece:** O agente acha que pode melhorar o design improvisando
**Por que é problema:** Quebra a consistência da identidade visual — todos os templates usam Inter
**Correção:** Nunca alterar `font-family`. Se Inter não carrega, verificar o link do Google Fonts no `<head>`

---

### ❌ Usar font-size abaixo de 28px para texto legível
**Exemplo errado:** Subtítulo com `font-size: 16px`
**Por que acontece:** Tentativa de encaixar texto longo reduzindo o tamanho
**Por que é problema:** Ilegível em miniatura no feed — o objetivo é ser legível em 120px de largura
**Correção:** Reduzir o texto (cortar palavras), nunca reduzir o tamanho da fonte abaixo de 28px

---

### ❌ Alterar dimensões do canvas
**Exemplo errado:** Capturar screenshot em 540×960 (metade) ou 1080×1350
**Por que acontece:** Erro na configuração do Playwright ou na viewport
**Por que é problema:** Imagem com dimensões erradas não serve para publicação no Reel
**Correção:** Sempre definir viewport como `{width: 1080, height: 1920}` antes de capturar

---

### ❌ Não salvar o HTML junto com o PNG
**Exemplo errado:** Entregar apenas `output/capa.png` sem `output/capa.html`
**Por que acontece:** O agente considera o PNG o output final e esquece o HTML
**Por que é problema:** Impossível re-renderizar com ajustes sem o HTML fonte
**Correção:** Sempre salvar ambos: `output/capa.html` e `output/capa.png`

---

## Anti-Patterns de Revisão (Rafael Revisão)

### ❌ Aprovar sem ler a imagem renderizada
**Exemplo errado:** Aprovar com base apenas no HTML, sem verificar o PNG
**Por que acontece:** O agente assume que se o HTML está correto, o PNG está correto
**Por que é problema:** O Playwright pode ter renderizado incorretamente — a verificação visual é obrigatória
**Correção:** Sempre usar a tool Read para ler o arquivo `output/capa.png` antes de emitir o veredicto

---

### ❌ Feedback vago sem localização específica
**Exemplo errado:** "O layout precisa melhorar" / "O texto está ruim"
**Por que acontece:** O agente não sabe como articular o problema com precisão
**Por que é problema:** Diego Display não consegue fazer a correção sem saber o que exatamente está errado
**Correção:** Citar critério + localização + correção específica: "Critério 2 (Safe Zone): O logo está em y=1380px — mover para y=1290px máximo"

---

### ❌ Ignorar elementos fora da safe zone
**Exemplo errado:** Aprovar uma capa onde o logo aparece cortado
**Por que acontece:** O agente não verifica rigorosamente a posição de todos os elementos
**Por que é problema:** O Instagram corta o conteúdo abaixo de ~1350px na visualização de feed
**Correção:** Verificar visualmente que nenhum elemento de interesse aparece na faixa y=1350 a y=1920
