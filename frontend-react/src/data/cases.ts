export interface ShowcaseCase {
  id: string;
  title: string;
  client: string;
  segment: 'Jurídico' | 'Saúde' | 'Fiscal & Contábil' | 'IA & Conversacional';
  type: 'PROJETO REAL' | 'SOLUÇÃO VERTICAL' | 'SAAS PRODUTO';
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  results: string[];
  techStack: string[];
  actionLabel: string;
  liveUrl?: string;
  secondaryActionLabel?: string;
  secondaryLiveUrl?: string;
  hasPresentationMode?: boolean;
  accentColor: string;
}

export const SHOWCASE_CASES: ShowcaseCase[] = [
  {
    id: 'concept-odontologia',
    title: 'Concept Odontologia de Alta Performance',
    client: 'Dra. Gabriela & Dr. Matheus',
    segment: 'Saúde',
    type: 'PROJETO REAL',
    tagline: 'Landing Page de Altíssima Conversão & Captação para Clínica Odontológica Premium',
    description: 'Projeto entregue em produção para clínica boutique de estética e reabilitação oral. Arquitetura moderna em React + Vite com carregamento sub-segundo e integração direta com WhatsApp para agendamentos.',
    problem: 'Baixa conversão do tráfego pago vindo do Instagram/Google Ads devido a site antigo lento e sem apelo visual de luxo.',
    solution: 'Redesenho completo da jornada do paciente com estética premium, galeria de tratamentos com fotos em alta definição, depoimentos validados e CTAs de agendamento com um clique.',
    results: [
      'Carregamento instantâneo no celular (< 0.8s)',
      '+140% no volume de agendamentos qualificados no WhatsApp',
      'Nota 98/100 no Google PageSpeed Mobile',
      'Zero custo de manutenção em servidores pesados'
    ],
    techStack: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'HostGator CD'],
    actionLabel: 'Acessar Concept Odontologia ao Vivo',
    liveUrl: 'https://conceptodontologia.odo.br',
    accentColor: '#8be9fd'
  },
  {
    id: 'advocacia-ia',
    title: 'Ecossistema de IA para Advocacia de Elite',
    client: 'Vertical Especializada TIWEB',
    segment: 'Jurídico',
    type: 'SOLUÇÃO VERTICAL',
    tagline: 'Agente Conversacional WhatsApp 24/7, Sentinela de Alvarás & Visual Law Ético',
    description: 'Solução modular desenvolvida para bancas e escritórios jurídicos. Qualificação automática de clientes potenciais sem infração ao Código de Ética da OAB e recuperação de clientes inativos.',
    problem: 'Escritórios perdem até 40% dos contatos fora do horário comercial e acumulam alvarás pendentes por falta de canal ágil de reativação.',
    solution: 'Atendente cognitivo treinado em linguagem jurídica consultiva no WhatsApp integrado ao caçador de contatos e esteira de notificação de andamentos processuais.',
    results: [
      'Resposta em menos de 5 segundos para qualquer lead 24/7',
      'Triagem automática do ramo do direito antes de passar ao advogado',
      'Conformidade 100% com Provimento 205/2021 da OAB',
      'Recuperação imediata de clientes com alvarás pendentes'
    ],
    techStack: ['FastAPI', 'Meta Graph API', 'LangChain', 'PostgreSQL', 'Tailwind'],
    actionLabel: 'Abrir Apresentação',
    secondaryActionLabel: 'Tour ao Vivo (SmartLegal)',
    secondaryLiveUrl: 'https://smartlegal.tiweb.app.br',
    hasPresentationMode: true,
    accentColor: '#bd93f9'
  },
  {
    id: 'spedfacil-case',
    title: 'SPED Fácil — Automação e Auditoria Tributária',
    client: 'Escritórios Contábeis & Assinantes',
    segment: 'Fiscal & Contábil',
    type: 'SAAS PRODUTO',
    tagline: 'Validação e Correção de Arquivos Fiscais da SEFAZ com Regras Inteligentes',
    description: 'Plataforma consolidada para escritórios contábeis e empresas. Validação de inventário e blocos do SPED com painel de downloads exclusivo para membros.',
    problem: 'Processamento manual de arquivos SPED gerava multas por atraso e erros de inventário fiscal em cruzamentos da Receita.',
    solution: 'Motor de auditoria que aponta discrepâncias tributárias em segundos e exporta o arquivo saneado pronto para transmissão.',
    results: [
      '+10.000 arquivos SPED auditados com zero notificações',
      'Redução de 8 horas para 15 minutos por lote de fechamento',
      'Área de downloads e licenças automatizada'
    ],
    techStack: ['Angular SPA', 'WordPress REST', 'MySQL 8', 'JWT Auth'],
    actionLabel: 'Acessar Portal SPED Fácil',
    liveUrl: 'https://spedfacil.tiweb.app.br',
    accentColor: '#ffb86c'
  }
];
