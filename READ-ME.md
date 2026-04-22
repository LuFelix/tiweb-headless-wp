# TIWEB Headless Architecture & SPED Fácil SPA

Repositório Monorepo contendo a infraestrutura Docker, o backend WordPress (Headless API) isolado e o frontend Angular.

## Estrutura de Diretórios Versionada

/ (Raiz do Projeto)
├── docker-compose.yml           # Orquestração local
├── .gitignore                   # Regras de exclusão (ignora WP Core e Uploads)
│
├── frontend-angular/            # SPA Front-end
│   ├── docs-prompts/            # Regras e Blueprints para o Cline (IA)
│   │   ├── 01-arquitetura-base.md
│   │   ├── 02-regras-rbac.md
│   │   └── STATUS.md
│   ├── src/                     # Código fonte Angular
│   └── angular.json             # Configuração do Workspace
│
└── wp-tiweb/                    # Backend (Somente arquivos customizados)
    ├── wp-config-example.php    # Esqueleto de configuração seguro
    ├── .htaccess                # Regras de servidor e CORS
    └── wp-content/
        └── mu-plugins/          # Plugins obrigatórios
            └── tiweb-security.php # Regras de RBAC e bloqueio de admin