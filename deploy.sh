#!/bin/bash

# Interrompe o script imediatamente se qualquer comando falhar (Segurança)
set -e

echo "🚀 Iniciando deploy automático do Site TIWEB..."

echo "📦 1. Puxando as atualizações do repositório..."
git pull origin master

echo "🏗️ 2. Reconstruindo os containers (sem usar cache para evitar código velho)..."
docker compose -f docker-compose.prod.yml build --no-cache

echo "🔄 3. Subindo os novos containers..."
docker compose -f docker-compose.prod.yml up -d

echo "🧹 4. Limpando imagens antigas e soltas para liberar espaço no disco..."
docker image prune -f

echo "✅ Deploy do Site TIWEB concluído com sucesso!"
