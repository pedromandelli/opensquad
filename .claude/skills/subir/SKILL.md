---
name: subir
description: "Commita todas as mudanças locais e faz push para o GitHub."
---

Você vai commitar e enviar as alterações locais para o GitHub.

## Passos

1. **Verifique o estado atual:**
   - `git status` para ver arquivos modificados e não rastreados
   - `git diff` para entender o que mudou

2. **Analise as mudanças** e escreva uma mensagem de commit clara no padrão convencional:
   - `feat:` nova funcionalidade
   - `fix:` correção de bug
   - `chore:` manutenção, configs
   - `refactor:` refatoração sem mudança de comportamento

3. **Adicione os arquivos relevantes** com `git add` (nunca use `-A` sem revisar antes — evite commitar `.env`, segredos ou arquivos de runtime como `state.json`, outputs gerados, `.DS_Store`)

4. **Faça o commit** com a mensagem no formato convencional. Sempre inclua ao final:
   ```
   Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
   ```

5. **Faça o push** com `git push origin master`

6. Confirme o sucesso e informe o usuário com o link do repositório se disponível.

## Regras

- Nunca commite arquivos de saída gerados (pasta `output/`, imagens renderizadas)
- Nunca commite `state.json` dos squads
- Nunca commite `.env` ou arquivos com credenciais
- Se houver arquivos suspeitos, pergunte ao usuário antes de incluir
