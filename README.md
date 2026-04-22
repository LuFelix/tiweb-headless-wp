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

```

teste

```


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

📁 O Mapa do Tesouro (Estrutura de Pastas)

Como a nossa arquitetura é um Monorepo (Backend e Frontend vivendo em harmonia sob o mesmo teto de vidro), a organização é vital para não nos perdermos no labirinto.

📦 TIWEB-CORE/
├── 📂 docker/                  # 🐳 Os pergaminhos de invocação da infraestrutura
│   ├── docker-compose.yml      # Configuração dos containers
│   └── nginx/                  # Proxy reverso (O Guardião do Portão)
│
├── 📂 frontend-angular/        # 🅰️ O Reino Visível (Client-Side)
│   ├── 📂 src/
│   │   ├── 📂 app/
│   │   │   ├── 📂 core/        # Serviços Singleton (Auth, Guards, Interceptors)
│   │   │   ├── 📂 shared/      # Componentes globais (Global Header, Buttons)
│   │   │   ├── 📂 pages/       # Rotas de Layout (Login, Dashboard)
│   │   │   └── 📂 features/    # Regras de negócio (Motor SPED, Gamificação)
│   │   ├── 📂 assets/          # Sprites, imagens e SVG
│   │   └── styles.scss         # O coração Negro (Dracula Theme variables)
│   └── angular.json            # As engrenagens do framework
│
├── 📂 wp-tiweb/                # 🐘 O Cofre Forte (Server-Side)
│   ├── 📂 wp-content/
│   │   ├── 📂 plugins/
│   │   │   └── 📂 tiweb-google-auth/  # 🔑 NOSSO CORE: Plugin JWT & Custom Endpoints
│   │   └── 📂 themes/          # (Ignorados no Headless)
│   └── wp-config.php           # Segredos de estado e chaves de criptografia
│
├── 📄 .gitignore               # O feitiço de invisibilidade (KISS)
└── 📄 COMANDOS_UTEIS.md        # O Grimoire de atalhos do Arquiteto


🚀 Como dar o Start (Press Start to Play)

Se você acabou de clonar este cartucho, siga o tutorial de invocação:

Ligue o Console (Suba a Infra):

docker-compose up -d

Entre no Reino (Acesse o Painel):

        Frontend: http://localhost:4200

        Backend API: http://localhost:8080/wp-admin

    ⚠️ Atenção Viajante: Lembre-se de verificar o seu arquivo .env local e configurar as credenciais do JWT_AUTH_SECRET_KEY e do servidor SMTP antes de tentar o primeiro Login!



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