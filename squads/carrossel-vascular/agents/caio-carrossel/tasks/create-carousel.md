---
task: "Criar Roteiro de Carrossel"
order: 1
input: |
  - topic: Tema do carrossel fornecido pelo usuário (de topic.md)
  - tone_selection: Tom de voz escolhido (de tone-of-voice.md)
output: |
  - roteiro: Roteiro completo do carrossel com slides, caption e hashtags
---

# Criar Roteiro de Carrossel

Cria o roteiro completo de um carrossel de Instagram para a VascularCare, incluindo conteúdo de cada slide, caption e hashtags. O roteiro segue o formato editorial premium da marca e é otimizado para saves, shares e swipe-through.

## Process

1. **Carregar contexto** — Ler o tema de `topic.md`, o `research-brief.md` para contexto da marca, e o `template-reference.html` para entender a estrutura visual dos slides (header com data/volume, footer com logo, hierarquia título/texto de apoio).

2. **Selecionar tom de voz** — Ler `tone-of-voice.md`, recomendar o tom mais adequado ao tema, e apresentar as 6 opções ao usuário. Aguardar escolha antes de prosseguir.

3. **Escolher formato de carrossel** — Com base no tema e objetivo, selecionar o formato mais adequado entre: Editorial/Tese, Listicle, Tutorial, Mito vs Realidade, Antes e Depois, Storytelling, ou Problema→Solução. Justificar brevemente a escolha.

4. **Estruturar a narrativa** — Definir o arco narrativo do carrossel seguindo o fluxo do formato escolhido. Mapear quantos slides são necessários (8-10 recomendado) e o papel de cada slide na história.

5. **Escrever slide a slide** — Para cada slide, produzir:
   - **Headline** (título bold, máx. 15 palavras): claim principal ou ponto central
   - **Supporting text** (texto de apoio): dados, contexto, elaboração
   - **Accent keywords**: palavras a destacar em cor accent
   - **Background**: indicação de fundo (dark/light/accent)
   - Total de 40-80 palavras por slide (headline + supporting text)

6. **Escrever o cover (slide 1)** — Tratamento especial: fundo escuro (#1a1a1a), título bold máximo 20 palavras, subtítulo com promessa ou curiosidade. Incluir "VASCULAR" como marca e "Dr. Marcelo Mandelli" no header.

7. **Escrever o CTA (último slide)** — Ação específica e contextual relacionada ao tema. Nunca genérico. Exemplos: "Agende uma avaliação vascular completa", "Salve este carrossel e compartilhe com quem precisa".

8. **Escrever caption** — Os primeiros 125 caracteres devem funcionar como gancho autônomo. Corpo com argumento expandido usando line breaks. Fechamento com pergunta aberta provocativa.

9. **Selecionar hashtags** — 5-15 hashtags com mix: 3-5 nicho médico/vascular, 3-5 médio alcance (saúde/bem-estar), 2-3 amplas. Evitar hashtags banidas.

10. **Auto-revisão** — Verificar contagem de palavras por slide, coesão narrativa, precisão científica, alinhamento com tom escolhido e presença de pelo menos um pilar D.N.A.

## Output Format

```yaml
formato: "[Nome do formato escolhido]"
tom: "[Tom de voz selecionado]"
total_slides: N

slides:
  - slide: 1
    tipo: "cover"
    headline: "..."
    supporting_text: "..."
    accent_keywords: ["...", "..."]
    background: "dark"
    word_count: N

  - slide: 2
    tipo: "[papel no formato]"
    headline: "..."
    supporting_text: "..."
    accent_keywords: ["...", "..."]
    background: "light"
    word_count: N

  # ... slides 3 a N-1

  - slide: N
    tipo: "cta"
    headline: "..."
    supporting_text: "..."
    cta_action: "..."
    background: "light"
    word_count: N

caption:
  hook: "..."
  body: "..."
  closing_question: "..."

hashtags: "#tag1 #tag2 #tag3 ..."
```

## Output Example

> Use as quality reference, not as rigid template.

```yaml
formato: "Problema → Solução"
tom: "Autoridade Médica com Acolhimento"
total_slides: 7

slides:
  - slide: 1
    tipo: "cover"
    headline: "Varizes não são só estética"
    supporting_text: "Técnicas minimamente invasivas e guiadas por imagem para tratar varizes com precisão, conforto e resultados que transformam sua qualidade de vida."
    accent_keywords: ["minimamente invasivas", "qualidade de vida"]
    background: "dark"
    word_count: 45

  - slide: 2
    tipo: "contexto"
    headline: "O problema vai além do que você vê no espelho"
    supporting_text: "Varizes afetam mais de 30% da população adulta brasileira. Além do desconforto estético, podem causar dor crônica, inchaço, sensação de peso nas pernas e, em casos avançados, úlceras e trombose. Ignorar os sinais transforma um problema tratável em uma condição grave."
    accent_keywords: ["30% da população", "úlceras e trombose"]
    background: "light"
    word_count: 52

  - slide: 3
    tipo: "problema-1"
    headline: "Sintomas que você não deveria normalizar"
    supporting_text: "Pernas pesadas no final do dia. Inchaço que não passa. Veias visíveis que doem ao toque. Cãibras noturnas frequentes. Se você convive com algum desses sinais, seu corpo está pedindo atenção. A boa notícia: a maioria dos tratamentos modernos é minimamente invasiva e com recuperação rápida."
    accent_keywords: ["pedindo atenção", "minimamente invasiva"]
    background: "accent"
    word_count: 55

  - slide: 4
    tipo: "problema-2"
    headline: "Por que o tratamento convencional nem sempre resolve"
    supporting_text: "Abordagens genéricas tratam o sintoma, não a causa. Sem uma avaliação vascular individualizada com mapeamento por ultrassom, o tratamento pode ser parcial ou inadequado. A metodologia D.N.A. VascularCare começa com um diagnóstico preciso para definir a abordagem ideal para o seu caso."
    accent_keywords: ["avaliação vascular individualizada", "D.N.A. VascularCare"]
    background: "light"
    word_count: 50

  - slide: 5
    tipo: "solução"
    headline: "A abordagem VascularCare: precisão que transforma"
    supporting_text: "Combinamos tecnologia de ponta com décadas de experiência clínica. Laser endovenoso, escleroterapia guiada por ultrassom e microcirurgia — cada técnica é selecionada de acordo com as necessidades do seu caso. Procedimentos ambulatoriais com anestesia local e retorno às atividades em 24-48 horas."
    accent_keywords: ["tecnologia de ponta", "24-48 horas"]
    background: "dark"
    word_count: 48

  - slide: 6
    tipo: "autoridade"
    headline: "Mais de 30 anos dedicados à cirurgia vascular"
    supporting_text: "O Dr. Marcelo Mandelli é referência em tratamentos endovasculares complexos e chefe do maior Serviço de Cirurgia Vascular do Sul do Brasil. Na VascularCare, cada paciente recebe atenção personalizada do diagnóstico ao acompanhamento pós-procedimento."
    accent_keywords: ["maior Serviço de Cirurgia Vascular", "atenção personalizada"]
    background: "light"
    word_count: 44

  - slide: 7
    tipo: "cta"
    headline: "Sua saúde vascular merece atenção agora"
    supporting_text: "Não espere o problema se agravar. Uma avaliação vascular completa é o primeiro passo para tratar com segurança, conforto e resultados duradouros."
    cta_action: "Agende sua avaliação vascular completa. Link na bio."
    background: "light"
    word_count: 42

caption:
  hook: "Varizes não são só uma questão estética — e ignorar pode custar caro."
  body: |
    Mais de 30% dos adultos brasileiros convivem com varizes.
    O problema? A maioria trata apenas o sintoma.

    Na VascularCare, usamos a metodologia D.N.A. para ir além:
    → Diagnóstico preciso com mapeamento por ultrassom
    → Técnicas minimamente invasivas com recuperação em até 48h
    → Acompanhamento personalizado do início ao fim

    Dr. Marcelo Mandelli — mais de 30 anos de excelência em cirurgia vascular.
  closing_question: "Você tem convivido com algum desses sintomas? Conta nos comentários 👇"

hashtags: "#varizes #saudevascular #cirurgiavascular #VascularCare #tratamentovarizes #saude #bemestar #florianopolis #medicinaintegrativa #qualidadedevida #pernasleves #drmarcelomandelli"
```

## Quality Criteria

- [ ] Formato de carrossel é adequado ao tema
- [ ] Cover com título de no máximo 20 palavras e alta capacidade de parar o scroll
- [ ] Cada slide tem entre 40-80 palavras (verificar contagem)
- [ ] Hierarquia clara: headline separado de supporting_text em cada slide
- [ ] Accent keywords marcadas para destaque visual
- [ ] Alternância de backgrounds indicada (dark/light/accent)
- [ ] Narrativa coesa com razão para swipe em cada slide
- [ ] CTA específico e contextual no último slide
- [ ] Caption com hook nos primeiros 125 caracteres
- [ ] Pelo menos um pilar D.N.A. VascularCare presente
- [ ] Informações médicas precisas e sem jargão não traduzido

## Veto Conditions

Reject and redo if ANY are true:
1. Qualquer slide com menos de 40 ou mais de 80 palavras (headline + supporting text combinados)
2. Cover sem headline bold ou com mais de 20 palavras no título
3. CTA genérico ("siga-nos", "curta") no último slide
4. Informação médica factualmente incorreta ou potencialmente enganosa
5. Ausência de caption com hook, body e closing question
