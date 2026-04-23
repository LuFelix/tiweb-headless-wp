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

## 🏛️ Fase 2: Estrutura da Área Logada (EM ANDAMENTO)
- [x] Refatoração do `DashboardComponent`: Extração do cabeçalho.
- [x] Criação do `GlobalHeaderComponent` (Menu superior onipresente, dinâmico via Signals).
- [x] Limpeza de CSS órfão e ajuste de responsividade no painel.
- [x] UI/UX: Criação do "Card de Download" (Dracula UI) engatilhado no painel.
- [x] Criação do `AuthGuard` no Angular para proteger a rota `/dashboard` de usuários sem JWT.
- [x] Implementar a lógica de Logout real (limpar localStorage, redirecionar e invalidar estado).

## 📥 Fase 3: Integração Headless & Downloads (PRÓXIMOS PASSOS)
- [ ] Setup do `Apollo Client` ou `fetch` nativo no Angular para consumir GraphQL.
- [ ] Criar arquivo de Queries GraphQL (`src/app/core/graphql/queries.ts`) para buscar os "Materiais SPED".
- [ ] Refatorar o "Card de Download" no `DashboardComponent` para listar os arquivos vindos do WPGraphQL dinamicamente.
- [ ] Implementar o método de download seguro (`downloadApp()`) consumindo o link recebido na query e enviando o Token de Autorização via Headers HTTP.

## 🎨 Fase 4: O Salão de Entrada (Landing Page)
- [ ] Criação do `<app-hero-section>` (Destaque do Utilitário).
- [ ] Criação do `<app-about-us-section>` (História Trazom / 1990).
- [ ] Criação do `<app-services-section>`.
- [ ] Criação do `<app-contact-section>`.

