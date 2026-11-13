# Plano de Execução — Milestone M2: Vitrine de Cases & Vertical Advocacia

## 1. Contexto e Motivação
A software house TIWEB demonstra sua autoridade técnica através de cases reais em produção (como o \`concept-odontologia\`) e verticais especializadas de inteligência artificial (como o ecossistema para \`Advocacia\`).

O Milestone M2 entrega no frontend React:
1. **Modo Apresentação no Celular (Swipe a 60 FPS):** Um slide deck interativo tátil inspirado no modelo \`adv\`, permitindo a Luciano apresentar o pitch comercial presencialmente na palma da mão (sem computador), além de permitir o download do PDF executivo.
2. **Simulador Interativo do Agente de WhatsApp:** Protagonista da vertical jurídica, demonstrando em tempo real na tela como a IA faz triagem e qualificação de clientes respeitando o Código de Ética da OAB (sem expor margens ou tabelas de preços internos).
3. **Vitrine do Case Real Concept Odontologia:** Apresentação do case de alto padrão em produção com métricas de conversão e link ao vivo.
4. **Calculadora Reversa de ROI:** Simulação tátil de retorno de investimento e honorários recuperados.

## 2. Rastreabilidade das Issues
- **Issue #47 (\`[FE-CASES-001]\`):** Catálogo Interativo de Verticais com Visualizador Dual (Apresentação Comercial + Sistema Live).
- **Issue #48 (\`[FE-CASES-002]\`):** Integração do Case Concept Odontologia com Simulador de ROI.
- **Issue #71 (\`[FE-ADV-001]\`):** Vertical Advocacia com Modo Apresentação no Celular (Swipe 60 FPS) & Simulador do Agente WhatsApp.

## 3. Fronteira de Arquivos
- \`frontend-react/src/components/legal/*\`
- \`frontend-react/src/components/cases/*\`
- \`frontend-react/src/components/RoiCalculator.tsx\`
- \`frontend-react/src/data/cases.ts\`
- \`frontend-react/src/data/legalPresentation.ts\`
- \`frontend-react/src/App.tsx\`
- \`frontend-react/src/components/Navbar.tsx\`
- \`frontend-react/src/test/*\`
- \`plano.md\`

## 4. Passos Atômicos de Execução
1. **Passo 1 (Dados e Modelagem - Cases & Apresentação):**
   - Criar \`src/data/cases.ts\` com os dados do case Concept Odontologia (estudo de caso, métricas, stack).
   - Criar \`src/data/legalPresentation.ts\` com os 7 slides sintetizados do modelo da pasta \`adv\`.
2. **Passo 2 (Modo Apresentação no Celular & Simulador WhatsApp - Issue #71):**
   - Criar \`LegalPresentationModal.tsx\` ou tela de slides com transições Framer Motion para navegação por swipe no celular.
   - Criar \`WhatsAppSimulator.tsx\` com interface tátil do WhatsApp simulando triagem jurídica automática.
   - Criar \`LegalVerticalSection.tsx\` integrando a oferta para a Persona Jurídica.
3. **Passo 3 (Case Concept Odontologia & Calculadora de ROI - Issues #47 e #48):**
   - Criar \`CasesShowcase.tsx\` com visualizador do case Concept e link de produção.
   - Criar \`RoiCalculator.tsx\` interativo com cálculo de payback e valor gerado.
4. **Passo 4 (TDD & Validação dos Testes):**
   - Testes unitários para troca de slides, simulação do WhatsApp e cálculo de ROI.
   - Build e validação no CI.
