# [CONTEXTO DO PROJETO: TIWEB Headless Architecture & Ecossistema Multi-Produto]

> **🏛️ PROTOCOLOS GLOBAIS SSOT (Zero-Cópia):** As regras canônicas de Git Flow, Branches, Issues, Checklist Pré-Merge e Segurança de IA estão centralizadas em [`/home/jaspion/projetos/engineering-standards/`](file:///home/jaspion/projetos/engineering-standards/README.md) (`MANUAL-PROTOCOLOS.md`, `MANUAL-ISSUES.md`, `CHECKLIST-PRE-MERGE.md`, `RULES-IA-SECURITY.md`) e em [`/home/jaspion/projetos/AGENTS.md`](file:///home/jaspion/projetos/AGENTS.md).

## 1. Visão Geral da Arquitetura em Produção
- **Topologia de Produção:**
  - **Hospedagem HostGator (`50.116.87.68` - Apache/PHP 8.2):**
    - `https://tiweb.app.br`: Portal Guarda-Chuva B2B em **React 19 + Vite + Tailwind** (servido na raiz `public_html/`).
    - `https://tiweb.app.br/wp-json` e `/graphql`: **WordPress Headless** nativo (CMS, Blog, WooCommerce para mimos/planos, JWT Auth, plugins customizados `tiweb-google-auth` e `tiweb-content-manager`).
    - `https://spedfacil.tiweb.app.br`: SPA em **Angular 17+** com área de membros e downloads (servida em `public_html/spedfacil/`).
    - `https://smartlegal.tiweb.app.br`: Showcase ao vivo da Vertical Jurídica em **React** (servida em `public_html/smartlegal/`).
  - **VPS Hostinger (`13.140.163.193` - Docker / Ubuntu):**
    - Desafogada do WordPress/Site institucional, dedicada exclusivamente aos motores de clientes reais (`smartcontact`, `automacao/n8n`, `mas-ia`) e observabilidade (`Grafana + Prometheus`).

## 2. Estrutura do Monorepo Local
- `frontend-react/`: Portal Guarda-Chuva TIWEB (React, Vite, Framer Motion, Vitest).
- `frontend-angular/`: SPED Fácil (Angular Standalone, Signals, JWT Auth).
- `wp-tiweb/`: Código do WordPress, temas e plugins customizados versionados.
- `database-dump/`: Dumps e migrações locais para desenvolvimento em container Docker local (`docker-compose.yml`).

## 3. Diretrizes de Engenharia Local
- **Commits Atômicos & Git Flow:** Todas as branches de trabalho partem de `develop` (`feat/*`, `fix/*`, `ops/*`).
- **Zero-Cópia:** É proibido manter cópias locais de arquivos canônicos do SSOT.
- **Esteira de CD Dual:** Deploys são executados automaticamente no push para `master` via GitHub Actions (`deploy.yml`, `deploy-spedfacil.yml` e `deploy-wp-plugins.yml`).
