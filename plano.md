# Plano de Execução — Milestone M1-REACT: Portal Guarda-Chuva TIWEB em React

## 1. Contexto e Motivação
O portal principal da TIWEB (\`tiweb.app.br\`) é a vitrine corporativa B2B e centro de autoridade técnica do ecossistema. Para garantir máxima velocidade, experiência tátil fluida a 60 FPS em dispositivos móveis e perfeita consistência com os cases de sucesso do ecossistema (\`concept-odontologia\` e \`adv\`), o portal principal está sendo desenvolvido em **React 18 + Vite + Tailwind CSS + Framer Motion**.

A aplicação Angular (\`frontend-angular\`) permanece 100% preservada e isolada para atender exclusivamente o produto e assinantes do **SPED Fácil** em \`spedfacil.tiweb.app.br\`.

## 2. Issues do Milestone M1-REACT
- **Issue #65 (\`[FE-REACT-001]\`):** Chore/Setup: Inicialização do Core React com Vite, Tailwind, Framer Motion e Vitest.
- **Issue #66 (\`[FE-REACT-002]\`):** Feat: Hero Mobile-First com Animações Framer Motion & Bento Grid do Ecossistema.
- **Issue #67 (\`[FE-REACT-003]\`):** Feat: Seção Interativa 'Como Construímos Software' com Visão Dual (Executivo vs CTO).
- **Issue #68 (\`[CI-CD-002]\`):** Ops: Esteira Dual de CD (HostGator) — Deploy do React na Raiz e Isolamento do SPED Fácil.

## 3. Fronteira de Arquivos
- \`frontend-react/*\`
- \`.github/workflows/deploy.yml\`
- \`.github/workflows/deploy-spedfacil.yml\`
- \`.github/workflows/ci.yml\`
- \`plano.md\`

## 4. Passos Atômicos de Execução
1. **Passo 1 (Bootstrap & TDD Core - Issue #65):**
   - Inicializar \`frontend-react\` com template Vite + React + TypeScript.
   - Instalar dependências de produção: \`lucide-react\`, \`clsx\`, \`tailwind-merge\`, \`framer-motion\`.
   - Instalar dependências de dev/teste: \`tailwindcss\`, \`postcss\`, \`autoprefixer\`, \`vitest\`, \`@testing-library/react\`, \`@testing-library/jest-dom\`, \`jsdom\`.
   - Configurar Tailwind com tokens oficiais do tema Dracula (\`#282a36\`, \`#bd93f9\`, \`#8be9fd\`, \`#50fa7b\`, \`#ff79c6\`, \`#ffb86c\`, \`#44475a\`, \`#f8f8f2\`).
   - Configurar Vitest e criar primeiro teste de renderização.

2. **Passo 2 (Hero & Bento Grid - Issue #66):**
   - Criar \`Navbar.tsx\` responsiva com menu mobile gaveta a 60 FPS.
   - Criar \`Hero.tsx\` com tipografia Dracula, headline em degradê neon, contadores de métricas de engenharia (TDD 93%, Multi-Tenant LGPD, Rollback Atômico SSOT) e CTAs táteis.
   - Criar \`BentoGrid.tsx\` interativo apresentando os 4 produtos:
     - \`SmartContact\` (CRM & IA Atendimento)
     - \`MAS / Educa-IA\` (Motor de Aprendizagem & Simuladores)
     - \`Lisa / Automação Social\` (Automação de Conteúdo & Meta API)
     - \`SPED Fácil\` (Automação Fiscal com link para \`https://spedfacil.tiweb.app.br\`)
   - Criar \`Footer.tsx\` corporativo.
   - Testes unitários para renderização dos produtos e links.

3. **Passo 3 (Como Construímos Software - Issue #67):**
   - Criar \`EngineeringTrust.tsx\` com toggle interativo animado em Framer Motion:
     - *Visão Executiva:* Proteção de Investimento, LGPD Blindada, Retorno sobre o Investimento, Alta Disponibilidade.
     - *Visão Técnica / CTO:* SSOT Inegociável, Cobertura TDD ≥ 93%, Git Flow Rigoroso, Quality Gates & Rollback Atômico.
   - Timeline interativa do pipeline de 4 estágios.
   - Testes unitários para alternância de visualização.

4. **Passo 4 (Esteira Dual de CD - Issue #68):**
   - Atualizar \`.github/workflows/deploy.yml\` para compilar \`frontend-react\` e fazer upload FTP na raiz da HostGator (\`tiweb.app.br\`).
   - Criar \`.github/workflows/deploy-spedfacil.yml\` para compilar \`frontend-angular\` e fazer upload FTP na subpasta \`spedfacil/\` (\`spedfacil.tiweb.app.br\`).
   - Atualizar \`.github/workflows/ci.yml\` para testar ambos os projetos.

## 5. Critérios de Validação
- Todos os testes unitários passando 100% (\`npm run test\` em \`frontend-react\`).
- Build estático concluído sem erros (\`npm run build\` em \`frontend-react\`).
- CI/CD validado sem warnings ou quebras.
