---
name: atualizar
description: "Puxa as últimas alterações do repositório GitHub para o ambiente local."
---

Você vai atualizar o repositório local com as últimas mudanças do GitHub.

## Passos

1. **Verifique se há mudanças locais não commitadas** com `git status`
   - Se houver, avise o usuário e pergunte se quer continuar (o pull pode gerar conflitos)

2. **Faça o pull** com `git pull origin master`

3. **Informe o resultado:**
   - Se já estava atualizado: diga que não havia novidades
   - Se trouxe mudanças: liste os arquivos que foram atualizados
   - Se houve conflito: explique o conflito e oriente como resolver

4. Se novos squads vieram no pull, mencione quais estão disponíveis agora.
