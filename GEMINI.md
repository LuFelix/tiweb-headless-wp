# [CONTEXTO DO PROJETO: TIWEB Headless Architecture & SPED Fácil SPA]

> **🏛️ PROTOCOLOS GLOBAIS SSOT (Zero-Cópia):** As regras canônicas de Git Flow, Branches, Issues, Checklist Pré-Merge e Segurança de IA estão centralizadas em [`/home/jaspion/projetos/engineering-standards/`](file:///home/jaspion/projetos/engineering-standards/README.md) (`MANUAL-PROTOCOLOS.md`, `MANUAL-ISSUES.md`, `CHECKLIST-PRE-MERGE.md`, `RULES-IA-SECURITY.md`) e em [`/home/jaspion/projetos/AGENTS.md`](file:///home/jaspion/projetos/AGENTS.md).

## 1. Visão Geral
- **Projeto:** TIWEB Headless Core & SPED Fácil SPA (`site-tiweb`).
- **Stack Tecnológica (Monorepo):**
  - **Frontend (`frontend-angular/`):** Angular Standalone Components + Signals, tema Dracula, SCSS/Tailwind.
  - **Backend (`wp-tiweb/`):** WordPress Headless REST API com plugins customizados (`tiweb-google-auth`, `tiweb-content-manager`) e mu-plugin `tiweb-security.php` em PHP 8.x.
  - **Infraestrutura (`docker/`):** Docker Compose (Nginx Proxy, WordPress, Banco de Dados e Frontend).
- **Documentação Arquitetural Local:** Consulte `docs-prompts/01-arquitetura-base.md`, `docs-prompts/arquitetura-ecossistema-tiweb.md` e `docs-prompts/plano-ci-cd-deploy.md`.

## 2. Diretrizes de Engenharia Local
- **Padrão Smart vs. Dumb Components (Frontend):** Páginas Smart gerenciam estado via Angular Signals e serviços HTTP; componentes Dumb recebem `input()` e emitem `output()`.
- **Isolamento do WordPress Core:** Apenas os plugins autorizados em `.gitignore` (`tiweb-google-auth`, `tiweb-content-manager`, `tiweb-security.php`) são versionados.
- **Governança Zero-Cópia:** É proibido manter cópias locais de `MANUAL-PROTOCOLOS.md`, `MANUAL-ISSUES.md`, `CHECKLIST-PRE-MERGE.md` ou `RULES-IA-SECURITY.md` neste repositório.
