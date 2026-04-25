# 🗺️ Status Atual do Projeto (Roadmap)

## 🏗️ Fase 1: Fundação & Autenticação (CONCLUÍDO)
- [x] Criação do projeto Angular via CLI.
- [x] Configuração do TailwindCSS.
- [x] Instalação e setup do Login Social do Google.
- [x] Criação do HomeComponent (Landing Page).
- [x] Implementação dos componentes de Login e Register (Tema Dracula, card 500px).
- [x] Implementação da UI de Verificação de Código no Register.
- [x] Integração do Frontend com WordPress (Double Opt-in / Registro).
- [x] Integração do Token do Google com o WordPress (JWT).
- [x] Configuração do Proxy Reverso Docker para contornar problemas de CORS.

## 🏛️ Fase 2: Estrutura da Área Logada (CONCLUÍDO)
- [x] Refatoração do `DashboardComponent`: Extração do cabeçalho.
- [x] Criação do `GlobalHeaderComponent` (Menu superior onipresente, dinâmico via Signals).
- [x] Limpeza de CSS órfão e ajuste de responsividade no painel.
- [x] UI/UX: Criação do "Card de Download" (Dracula UI) engatilhado no painel.
- [x] Criação do `AuthGuard` no Angular para proteger a rota `/dashboard` de usuários sem JWT.
- [x] Implementar a lógica de Logout real (limpar localStorage, redirecionar e invalidar estado).

## 📥 Fase 3: Integração Headless & Downloads (CONCLUÍDO)
- [x] Setup do `HttpClient` nativo no Angular para consumir GraphQL.
- [x] Criar arquivo de Queries GraphQL (`src/app/core/graphql/queries.ts`) para buscar os "Materiais SPED".
- [x] Refatorar o "Card de Download" no `DashboardComponent` para listar os arquivos vindos do WPGraphQL dinamicamente.
- [x] Implementar o método de download seguro (`downloadApp()`) abstraindo problemas de CORS.
- [x] Implementação do **Facade Pattern**: Criação do `DownloadService` no Core para desacoplar a lógica de DOM/Rede da UI.

## 🎨 Fase 4: O Salão de Entrada (Landing Page) (CONCLUÍDO)
- [x] Refatoração do Hero: Separação de responsabilidades (SRP) movendo os botões de Auth para o card de login.
- [x] Criação do `<app-about-us-section>` (História Trazom / 1990 com blend-mode SCSS).
- [x] Criação do `<app-services-section>` (Cards com Control Flow `@for`).
- [x] Criação do `<app-contact-section>` (Padrão de mercado B2B com form limpo).
- [x] Criação do `<app-footer-section>` (Fat Footer corporativo, links úteis e CNPJ).

## 🚀 Fase 5: Deploy & Infraestrutura (PRÓXIMOS PASSOS)
- [ ] Configuração do `environment.prod.ts` (URLs de produção e chaves de API).
- [ ] Build de produção do Angular (`ng build`).
- [ ] Deploy do Frontend.
- [ ] Deploy/Apontamento do Backend (WordPress Headless em servidor de produção).
- [ ] Testes de ponta a ponta (E2E) no ambiente real (Login Google + Download do SPED).

## 📱 Fase 6: UX do Painel & Refinamentos Mobile (BACKLOG)
- [ ] Criação do `<app-bottom-nav>` (Bottom Navigation Bar focada na "Thumb Zone" para Mobile).
- [ ] Ocultar a barra lateral global (Sidebar/Header excessivo) em telas menores que 768px.
- [ ] Refinamentos de micro-interações no painel do usuário logado.