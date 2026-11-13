#!/usr/bin/env bash
set -euo pipefail

echo "=== [1/4] Sincronização de Código com a Produção ==="
git fetch origin master
git reset --hard origin/master

echo "=== [2/4] Build da Aplicação Angular ==="
cd frontend-angular
NG_PERSISTENT_BUILD_CACHE=0 npm run build
cd ..

echo "=== [3/4] Validação de Estrutura Estática ==="
test -d frontend-angular/dist/frontend-tiweb/browser

echo "=== [4/4] Conclusão do Procedimento Local ==="
echo "✓ Preparação local e artefatos de produção gerados com sucesso."
