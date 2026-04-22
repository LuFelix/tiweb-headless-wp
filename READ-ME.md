# TIWEB Headless Architecture & SPED Fácil SPA

# 🕹️ TIWEB :: HEADLESS CORE // SPED FÁCIL
> "Insert Coin to Continue... or JWT to Authenticate."

<br>

<div align="center">

```text
████████╗██╗██╗    ██╗███████╗██████╗ 
╚══██╔══╝██║██║    ██║██╔════╝██╔══██╗
   ██║   ██║██║ █╗ ██║█████╗  ██████╔╝
   ██║   ██║██║███╗██║██╔══╝  ██╔══██╗
   ██║   ██║╚███╔███╔╝███████╗██████╔╝
   ╚═╝   ╚═╝ ╚══╝╚══╝ ╚══════╝╚═════╝

B2B ENTERPRISE EDITION | EST. 2026



📜 O Pergaminho da Verdade (Sobre o Projeto)

Bem-vindo ao repositório central da TIWEB. Este não é apenas um sistema, é uma ponte entre o legado e o futuro. O SPED Fácil foi forjado em uma arquitetura Headless para garantir latência zero no cliente e máxima segurança no servidor.

Nós separamos o cérebro (Backend) dos músculos (Frontend), permitindo integrações pesadas no B2B contábil sem sacrificar a estética e a fluidez da experiência do usuário (tema Dracula nativo 🧛‍♂️).
⚔️ Status Atual dos Atributos:

    [🛡️] Segurança: Autenticação híbrida (Google OAuth + Double Opt-in via E-mail) rodando sobre JWT (JSON Web Tokens) e API Transients.

    [⚡] Agilidade: Frontend construído com Angular Signals para renderização ultra-reativa.

    [🧱] Resistência: Ambiente de desenvolvimento 100% containerizado com Docker.


🛠️ O Arsenal (Tech Stack)
Ferramenta	Papel na Party (RPG)	Descrição
Angular 17+	🗡️ O Paladino (Frontend)	Framework reativo com arquitetura Standalone e Signals.
WordPress	🧙‍♂️ O Mago (Backend/API)	Operando como um CMS Headless via REST API customizada.
PHP 8.x	🧪 O Alquimista	Lógica de negócio, validação SMTP e criação de Transients.
Tailwind & SCSS	🎨 O Bardo (UI/UX)	Estilização robusta e responsiva baseada na paleta Dracula.
Docker	🏰 A Fortaleza (Infra)	Orquestração de containers (Proxy, WP, DB e Frontend).

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