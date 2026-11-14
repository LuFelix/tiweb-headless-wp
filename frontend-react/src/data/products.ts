export interface EcosystemProduct {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  metrics: string;
  techStack: string[];
  status: 'PRODUÇÃO' | 'EM ESCALA' | 'BETA CONVIDADO';
  actionLabel: string;
  actionUrl: string;
  accentColor: string;
  glowColor: string;
  isExternal?: boolean;
  secondaryActionLabel?: string;
  secondaryActionUrl?: string;
  secondaryIsExternal?: boolean;
}

export const ECOSYSTEM_PRODUCTS: EcosystemProduct[] = [
  {
    id: 'smartcontact',
    name: 'SmartContact',
    category: 'CRM & IA Atendimento',
    tagline: 'Orquestração de Atendimento Multicanal com IA e Roteamento Humanizado',
    description: 'Plataforma omnichannel que unifica WhatsApp, Telegram e WebChat. Integração nativa com agentes LLM cognitivos, transcrição de áudio, SLA dinâmico e distribuição inteligente por nicho.',
    features: [
      'Agentes cognitivos com histórico e memória contextual',
      'Roteamento automático com fallback para operadores humanos',
      'Dashboards de conversão e tempo de resposta em tempo real',
      'Isolamento total de base por cliente (LGPD Compliant)'
    ],
    metrics: 'Redução de 74% no tempo de espera de atendimento',
    techStack: ['FastAPI', 'PostgreSQL', 'LangChain', 'WebSocket', 'Redis'],
    status: 'PRODUÇÃO',
    actionLabel: 'Acessar SmartContact',
    actionUrl: 'https://smartcontact.tiweb.app.br',
    accentColor: '#8be9fd',
    glowColor: 'rgba(139, 233, 253, 0.15)',
    isExternal: true
  },
  {
    id: 'mas-educa-ia',
    name: 'MAS / Educa-IA',
    category: 'EdTech & Simulação',
    tagline: 'Motor de Aprendizagem Smart com Simuladores Visuais e Laboratórios Interativos',
    description: 'Ecossistema educacional investigativo com trilhas preparatórias, simulações geométricas/vetoriais em tempo real e hub pedagógico gamificado em 4 modais de fixação.',
    features: [
      'Simuladores SVG/Canvas sincronizados a 60 FPS',
      'Quizzes adaptativos com diagnóstico imediato de lacunas',
      'Modo Apresentação Ampliada para Datashow e salas de aula',
      'BNCC e matrizes de certificação integradas'
    ],
    metrics: '+85% de retenção cognitiva comprovada em laboratórios',
    techStack: ['Angular 18', 'TypeScript', 'SVG Vectors', 'Tailwind', 'Canvas API'],
    status: 'PRODUÇÃO',
    actionLabel: 'Portal & Loja Educa-IA',
    actionUrl: 'https://educa-ia.app.br',
    accentColor: '#bd93f9',
    glowColor: 'rgba(189, 147, 249, 0.15)',
    isExternal: true,
    secondaryActionLabel: 'Motor MAS ao Vivo',
    secondaryActionUrl: 'https://mas.educa-ia.app.br',
    secondaryIsExternal: true
  },
  {
    id: 'lisa-automacao',
    name: 'Lisa / Automação Social',
    category: 'Mídia & Agentes Sociais',
    tagline: 'Fábrica Autônoma de Conteúdo e Distribuição Social via Telegram & Meta API',
    description: 'Automação ponta a ponta que transforma ideias brutas em carrosséis e stories humanizados para o Instagram com aprovação prévia em canal privativo do Telegram.',
    features: [
      'Geração de carrosséis com identidade visual do cliente',
      'Workflow auditado no n8n com aprovação via bot do Telegram',
      'Publicação direta via Instagram Graph API sem token expirável',
      'Isolamento de tenants para agências e criadores'
    ],
    metrics: '9x mais posts publicados com 0 horas gastas em design',
    techStack: ['n8n', 'Telegram Bot API', 'Meta Graph API', 'Gemini 1.5 Pro'],
    status: 'EM ESCALA',
    actionLabel: 'Ver Automação',
    actionUrl: '#contato',
    accentColor: '#50fa7b',
    glowColor: 'rgba(80, 250, 123, 0.15)'
  },
  {
    id: 'spedfacil',
    name: 'SPED Fácil',
    category: 'Fiscal & Contábil',
    tagline: 'Auditoria e Correção de Arquivos Fiscais SPED com Regras Automatizadas',
    description: 'Solução veterana e consolidada para escritórios de contabilidade e empresas. Validação de inventários, blocos C, E, H e K com detecção de inconsistências tributárias.',
    features: [
      'Validação automática de notas e inventário fiscal',
      'Área de downloads exclusiva para assinantes',
      'Geração de relatórios com cruzamento de alíquotas',
      'Exportação saneada pronta para transmissão à SEFAZ'
    ],
    metrics: 'Mais de 10.000 arquivos SPED validados com zero multas',
    techStack: ['Angular SPA', 'WordPress REST', 'MySQL 8', 'JWT Auth'],
    status: 'PRODUÇÃO',
    actionLabel: 'Acessar SPED Fácil',
    actionUrl: 'https://spedfacil.tiweb.app.br',
    accentColor: '#ffb86c',
    glowColor: 'rgba(255, 184, 108, 0.15)',
    isExternal: true
  }
];
