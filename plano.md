# Plano de Execução — Milestone M1: Página Principal Fantástica

## 1. Contexto e Motivação
A página principal da TIWEB (`tiweb.app.br`) apresentava foco isolado no produto legado SPED Fácil, sem comunicar a amplitude e autoridade da software house em soluções de Inteligência Artificial, plataformas SaaS B2B, automações inteligentes e ecossistema multi-produto.

O Milestone M1 transforma a Home em uma vitrine B2B Enterprise de alto impacto com estética Dracula/Neon refinada, cobrindo:
1. **Issue #44 (`[FE-HOME-001]`):** Hero B2B com posicionamento de autoridade e contadores/selos de métricas de engenharia (TDD 93%, Multi-Tenant LGPD, Rollback Atômico SSOT, Deploy Automatizado).
2. **Issue #45 (`[FE-HOME-002]`):** Bento Grid interativo apresentando os 4 produtos do ecossistema (`SmartContact`, `MAS / Educa-IA`, `Lisa / Automação Social` e `SPED Fácil`).
3. **Issue #46 (`[FE-HOME-003]`):** Seção interativa "Como Construímos Software" com alternância dual entre Visão de Negócio (Impacto no Caixa e Segurança Jurídica) e Visão Técnica (Rigor Arquitetural e Governança).

## 2. Fronteira de Arquivos
- `frontend-angular/src/app/pages/landing-page/sections/hero/*`
- `frontend-angular/src/app/pages/landing-page/sections/ecosystem-bento/*`
- `frontend-angular/src/app/pages/landing-page/sections/engineering-trust/*`
- `frontend-angular/src/app/pages/landing-page/landing-page.component.html`
- `frontend-angular/src/app/pages/landing-page/landing-page.component.ts`
- `frontend-angular/src/app/core/data/ecosystem-products.data.ts`
- `frontend-angular/src/styles.scss`
- `plano.md`

## 3. Detalhamento das Alterações
1. **Componente Hero Renovado (`hero.component.ts|html|scss`)**:
   - Badge "Software House de Elite // B2B Enterprise & IA".
   - Headline imersiva com tipografia Dracula e destaque em degradê (`#bd93f9` a `#8be9fd`).
   - Subtítulo focado em valor de negócio sustentado por engenharia.
   - 2 botões de ação: CTA primário ancorando para `#ecosistema` e secundário para `/projetos`.
   - Grid de 4 indicadores de engenharia:
     - 🛡️ SSOT & Zero-Spaghetti
     - 🧪 Cobertura TDD ≥ 93%
     - 🔒 Multi-Tenant LGPD Nível Bancário
     - ⚡ Deploy Contínuo com Quality Gate
2. **Novo Componente Bento Grid (`ecosystem-bento.component.ts|html|scss`)**:
   - Cards temáticos dos 4 produtos pilares.
   - Badges de tecnologia e status.
   - Botões de ação contextuais.
3. **Novo Componente de Confiança na Engenharia (`engineering-trust.component.ts|html|scss`)**:
   - Pipeline de 4 estágios.
   - Alternância interativa via Signals entre visão executiva ("Por que seu investimento está seguro") e técnica ("Contrato canônico sob o capô").
4. **Integração na `LandingPageComponent`**:
   - Inclusão ordenada das novas seções.
   - Atualização do título da página para `TIWEB :: Software House de Elite | IA, SaaS & Engenharia B2B`.

## 4. Critérios de Validação
- Compilação estática (`npm run build`) 100% verde sem erros.
- Cores e tokens aderentes ao tema Dracula oficial.
- Layout totalmente responsivo para Desktop e Mobile.
