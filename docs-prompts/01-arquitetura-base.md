# Arquitetura Frontend: TIWEB - SPED Fácil (Angular SPA)

## 1. Stack Tecnológica
* **Framework:** Angular 17+ (Standalone Components).
* **Estrutura de Arquivos:** Sempre separados (`.ts`, `.html`, `.scss`). Proibido inline styles/templates.
* **UI/UX:** Angular Material (Lógica e Acessibilidade) + TailwindCSS (Layout e Espaçamento).
* **Backend:** WordPress Headless (REST API em http://localhost:8080/wp-json).

## 2. Padrões de Desenvolvimento (CI/CD)
* **Zero Hardcoding:** Nenhuma URL de API deve estar fixada nos arquivos. Use `environment.ts` para Produção e `environment.development.ts` para Localhost.

## 3. Tematização (Estética "Dev" - Dracula Theme)
* Implementar tema **Light/Dark Mode**, com foco no Dark Mode.
* **Paleta Dracula (Referência para o Tailwind e Material):**
  - Background (Dark): `#282a36`
  - Superfícies/Cards: `#44475a`
  - Texto Principal: `#f8f8f2`
  - Destaques (Primary/Botões): Roxo `#bd93f9` e Ciano `#8be9fd`.
* Criar um `ThemeService` que alterne a classe `.dark` no `<body>` e persista no `localStorage`.

## 4. Estrutura de Roteamento Protegido
* `/` (Home): Landing Page Pública.
* `/dashboard` (Área de Membros): Rota protegida por um `AuthGuard`. Se não houver token, redirecione para Home.

## 5. Componentes Iniciais a Desenvolver
1. `shared/header`: Ouve `AuthService`. Mostra 'Entrar' se deslogado. Mostra 'Minha Área' e 'Sair' se logado. Contém o toggle de Dark Mode.
2. `home/hero`: CTA gigante com a promessa do SPED e botão de Login com Google.
3. `dashboard/main`: Área logada. Contém Instruções, Botão de Download do ZIP e Card com chave PIX.

## 6. Serviços Globais a Desenvolver
* `AuthService`: 
  - Integra `@abacritt/angularx-social-login`.
  - Converte o token do Google no JWT do WordPress (`/jwt-auth/v1/token`).
  - Guarda o JWT no `localStorage`.

  ## 7. Estrutura de Diretórios (Padrão MAS)
A estrutura de pastas deve seguir rigorosamente o padrão abaixo:
- `app/core/`: Serviços globais, interceptors e configurações base.
- `app/features/`: Módulos de funcionalidade (auth, users, admin, etc).
- `app/layouts/`: Componentes de estrutura (header, side-nav, main-layout).
- `app/pages/`: Componentes de página.
  - `pages/landing-page/`: Contém o componente principal e subpastas para seções (about, contact, hero, etc).
- `app/shared/`: Componentes, pipes e modelos reutilizáveis.