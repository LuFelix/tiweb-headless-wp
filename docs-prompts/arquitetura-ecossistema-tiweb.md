# 🗺️ Guia de Arquitetura e Mapa Completo do Ecossistema TIWEB

Este documento serve como a **Fonte Única de Verdade (Single Source of Truth)** sobre toda a infraestrutura, domínios, DNS, containers e código do ecossistema TIWEB. Foi escrito de forma didática para que qualquer **desenvolvedor (do nível júnior ao sênior) ou agente de IA** compreenda a arquitetura imediatamente e continue o desenvolvimento sem quebras de contrato.

---

## 🏢 1. Visão Geral do Ecossistema

O ecossistema TIWEB é composto por microsserviços, portais web, pipelines de dados e automações sociais inteligentes, todos orquestrados via **Docker Compose** e expostos por um **Proxy Reverso Central (Nginx Proxy Manager)** com terminação SSL (HTTPS).

```
                              [ INTERNET / VISITANTES ]
                                         │
                                         ▼
                     [ DNS / Nginx Proxy Manager (Portas 80 / 443) ]
                                         │
       ┌──────────────────┬──────────────┴─────┬──────────────────┬─────────────────┐
       ▼                  ▼                    ▼                  ▼                 ▼
  [ tiweb.app.br ]  [ spedfacil... ]     [ wp.tiweb... ]   [ n8n.tiweb... ]   [ smartcontact... ]
  Nova Landing Page   Angular 17+ SPA     WordPress Core     Motor n8n Core    SmartContact App
  (Em construção)   (SPED / Downloads)   (Headless / Blog)  (IA & Automações)  (Gestão & APIs)
```

---

## 🌐 2. Mapa Completo de Domínios e DNS

Abaixo está o mapeamento detalhado de todos os apontamentos de DNS do domínio `tiweb.app.br`:

### 🚀 A. Serviços Ativos no VPS Principal (`13.140.163.193`)
| Domínio / Subdomínio | Tipo | Destino / IP | Aplicação / Função | Container Docker |
| :--- | :--- | :--- | :--- | :--- |
| **`tiweb.app.br`** | A | `13.140.163.193` | Landing Page Principal Institucional (Nova) | `tiweb_web_prod` (ou nova LP) |
| **`www.tiweb.app.br`** | CNAME | `tiweb.app.br` | Alias da página principal | Roteado para `tiweb.app.br` |
| **`spedfacil.tiweb.app.br`** | A | `13.140.163.193` | SPA Angular (Sistema SPED Fácil, downloads, dashboard) | `tiweb_web_prod:80` |
| **`wp.tiweb.app.br`** | A | `13.140.163.193` | WordPress Headless (Backend, Blog, API `/wp-json`) | `tiweb_wp_prod:80` |
| **`n8n.tiweb.app.br`** | A | `13.140.163.193` | Orquestrador de Automações e Webhooks | `automacao_n8n_prod:5678` |
| **`smartcontact.tiweb.app.br`** | A | `13.140.163.193` | Frontend do SmartContact | `smartcontact_web_prod:80` |
| **`api.smartcontact.tiweb.app.br`**| A | `13.140.163.193` | API Backend NestJS do SmartContact | `smartcontact_api_prod:3000` |
| **`oxehelp.tiweb.app.br`** | A | `13.140.163.193` | Portal Helpdesk Oxetech | `front_prod:80` |
| **`api-oxehelp.tiweb.app.br`** | A | `13.140.163.193` | API Backend Oxetech | `back_prod:3000` |

### 📧 B. Serviços de E-mail Corporativo (Titan / Hostgator - NÃO ALTERAR)
| Registro | Tipo | Prioridade / Valor | Finalidade |
| :--- | :--- | :--- | :--- |
| `tiweb.app.br` | MX | `10 -> mx1.titan.email` | Roteamento de e-mails corporativos |
| `tiweb.app.br` | MX | `20 -> mx2.titan.email` | Servidor de e-mail secundário |
| `tiweb.app.br` | TXT | `v=spf1 include:spf.titan.email ~all` | Validação SPF anti-spam |
| `titan1._domainkey...` | TXT | Assinatura DKIM Titan | Autenticação criptográfica de e-mails |
| `webmail.tiweb.app.br`| CNAME| `titan.hostgator.com.br` | Webmail corporativo |

### 🏛️ C. Serviços Legados / Hospedagem Antiga (`50.116.87.68`)
- Subdomínios como `cpanel.*`, `webdisk.*`, `cpcontacts.*`, `educa-ia.*` e `andromedacontabilidade.*` apontavam para o cPanel legado e estão em processo de transição/descontinuação.

---

## 🖥️ 3. Arquitetura de Containers no VPS

Todos os projetos residem em `/var/www/` no VPS (`admin@13.140.163.193`):

### 📁 Estrutura de Diretórios no VPS:
```text
/var/www/
├── proxy/                # Nginx Proxy Manager (Portas públicas 80, 81, 443)
├── automacao/            # n8n, PostgreSQL dedicado, ElizaOS Agent
├── site-tiweb/           # WordPress Headless, MySQL 8.0, Angular SPA
├── smartcontact/         # SmartContact (NestJS + Angular + Postgres)
├── educa-ia/             # Plataforma Educa-IA
└── oxetech-811-base-...  # Sistema HelpDesk
```

### 🔒 Topologia de Redes Docker:
1. **Rede Externa `webproxy` (Bridge compartilhada)**:
   - Conecta apenas os containers que precisam receber tráfego HTTP/HTTPS do Nginx Proxy Manager (`tiweb_wp_prod`, `tiweb_web_prod`, `automacao_n8n_prod`, etc.).
2. **Redes Internas Segregadas**:
   - `automacao-network`: Isolamento exclusivo entre o `n8n` e o `postgres-automacao`.
   - `tiweb-network`: Isolamento exclusivo entre o `wordpress` e o `tiweb_mysql_prod`.
   - `smartcontact-network`: Isolamento exclusivo do banco do SmartContact.
   - **Regra de Ouro**: **Nenhum banco de dados expõe portas diretamente no host público (`0.0.0.0`)**, eliminando riscos de invasão por força bruta ou vazamento LGPD.

---

## 🧩 4. Detalhamento dos Componentes Core

### 1️⃣ WordPress Headless (`/site-tiweb` / `wp.tiweb.app.br`)
- **Papel**: Atua como CMS de conteúdo, gerenciador de posts técnicos, páginas e endpoints de dados REST.
- **Banco de Dados**: MySQL 8.0 no container `tiweb_mysql_prod` (banco `site_antigo_db`).
- **Principais Endpoints REST**:
  - `GET /wp-json/wp/v2/posts` $\rightarrow$ Lista de artigos do blog.
  - `POST /wp-json/wp/v2/posts` $\rightarrow$ Criação automatizada de posts via n8n (autenticado por *Application Password*).
  - `GET /wp-json/wp/v2/pages` $\rightarrow$ Páginas institucionais.
- **Plugins Customizados do Projeto**:
  - `tiweb-content-manager`: Gerenciador de downloads de arquivos e recursos protegidos.
  - `tiweb-google-auth`: Autenticação integrada com Google Sign-In.

### 2️⃣ Frontend Angular SPA (`/site-tiweb/frontend-angular` / `spedfacil.tiweb.app.br`)
- **Papel**: Interface moderna em **Angular 17+**, focada no produto **SPED Fácil**, área de membros, downloads protegidos e formulários reativos.
- **Compilação**: Dockerfile multi-stage (`Node.js 20` para compilar o Angular e `Nginx Alpine` superleve para servir o HTML/JS/CSS estático com cache agressivo).
- **Injeção de Ambiente**:
  - O script `scripts/set-env.js` gera dinamicamente os arquivos `environment.ts` e `environment.development.ts` a partir do arquivo `.env`.
  - Suporta `apiUrl` (REST) e `graphqlUrl` (GraphQL).

### 3️⃣ Motor de Automações (`/automacao` / `n8n.tiweb.app.br`)
- **Papel**: Orquestrador de workflows transacionais e esteira de conteúdo assistida por IA.
- **Banco de Dados**: PostgreSQL 16 dedicado (`automacao_postgres_prod`).
- **Fluxos Ativos / Previstos**:
  - **Pipeline de Conteúdo IA**: Cron semanal $\rightarrow$ RSS Feeds tech $\rightarrow$ Gemini API (Gera Post + Carrossel + Artigo) $\rightarrow$ Aprovação no Telegram $\rightarrow$ Publicação no WordPress (`wp.tiweb.app.br`) e Instagram Graph API.
  - **Captura de Leads**: Webhooks transacionais integrados a formulários de contato das Landing Pages com alerta em tempo real.

---

## 🛠️ 5. Guia Rápido para Novos Desenvolvedores & IAs

### Como rodar localmente no seu computador:
```bash
# Para o ecossistema de automação:
cd /home/jaspion/projetos/automacao
docker compose up -d

# Para o site WordPress e Angular:
cd /home/jaspion/projetos/site-tiweb
docker compose up -d
```

### Como fazer deploy no servidor VPS:
Ambos os projetos contam com o script padronizado `deploy.sh`:
```bash
# Conectar no VPS
ssh admin@13.140.163.193

# Atualizar Automações:
cd /var/www/automacao && ./deploy.sh

# Atualizar Site TIWEB (WP + Angular):
cd /var/www/site-tiweb && ./deploy.sh
```

### 🚨 Regras Importantes de Segurança & Git:
1. **NUNCA comite arquivos `.env` ou dumps `.sql`**: Mantenha as credenciais apenas nas variáveis locais do servidor.
2. **Commits Atômicos**: Sempre faça commits pequenos em inglês seguindo o padrão Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`).
3. **Fluxo de Branches**: Toda alteração deve ser desenvolvida em branch de feature (`feature/nome-da-tarefa`) e submetida via Pull Request para `develop`/`main`.
