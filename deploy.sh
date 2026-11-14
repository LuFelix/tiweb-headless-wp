#!/usr/bin/env bash
set -euo pipefail

echo "=== [1/3] Validação de Testes Unitários ==="
cd frontend-react
npm run test
cd ..

echo "=== [2/3] Compilação do Portal React (TIWEB) ==="
cd frontend-react
npm run build
cd ..

echo "=== [3/3] Compilação do SPED Fácil (Angular) ==="
cd frontend-angular
NG_PERSISTENT_BUILD_CACHE=0 npm run build
cd ..

echo "✓ Builds locais validados com sucesso. O deploy oficial é executado automaticamente via GitHub Actions (deploy.yml e deploy-spedfacil.yml) no push para a branch master."
