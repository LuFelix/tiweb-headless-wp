# Plano de Execução — Issue #43 ([DEPLOY-001] Esteira de CD Automática HostGator)

## 1. Contexto e Motivação
O repositório `site-tiweb` carece de workflow de CI/CD automatizado (`.github/workflows/deploy.yml`) e o arquivo `deploy.sh` legado realizava comandos com Docker em produção, incompatíveis com a arquitetura de hospedagem compartilhada da HostGator (onde o WordPress, WooCommerce e os arquivos estáticos rodam diretamente via Apache/PHP).

Conforme o contrato canônico do SSOT (`MANUAL-DEPLOY.md`), repositórios sem contêineres em produção utilizam a variante FTP com a action `SamKirkland/FTP-Deploy-Action@v4.3.5`, compilando os assets no runner do GitHub Actions e enviando os arquivos de produção para o destino na HostGator, com `environment: production` e smoke test HTTP pós-deploy condicional (`HEALTHCHECK_URL`).

## 2. Fronteira de Arquivos
- `plano.md`
- `.github/workflows/ci.yml`
- `.github/workflows/deploy.yml`
- `deploy.sh`

## 3. Detalhamento das Alterações
1. **`.github/workflows/ci.yml`**:
   - Gatilho em PR para `develop` e `master`.
   - Setup Node.js 20, instalação de dependências no `frontend-angular` e compilação de produção (`npm run build`).
2. **`.github/workflows/deploy.yml`**:
   - Orquestrador enxuto (< 75 linhas).
   - Gatilhos: `push` na branch `master` e `workflow_dispatch`.
   - `environment: production` com concorrência `production-ftp-deploy` (`cancel-in-progress: false`).
   - Compilação estática no runner e sincronização via `SamKirkland/FTP-Deploy-Action`.
   - Smoke test pós-deploy com verificação de disponibilidade via `curl` caso `HEALTHCHECK_URL` esteja preenchida.
3. **`deploy.sh`**:
   - Ajuste para `set -euo pipefail` e `git fetch origin master && git reset --hard origin/master`.
   - Passos numerados `[1/4]` a `[4/4]` para auditoria do SSOT.

## 4. Critérios de Validação
- `bash sync-standards.sh --check-deploy` retornando status `✅ CONFORME` (0 achados) para `site-tiweb`.
- Build do Angular executado sem erros.
- Trava física do GitHub API mantida em `allow_merge_commit=true`, `allow_squash_merge=false`, `allow_rebase_merge=false`.
