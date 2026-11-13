export interface EcosystemProduct {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  badge: string;
  status: 'PRODUÇÃO' | 'DISPONÍVEL' | 'ENTERPRISE';
  highlightMetric: string;
  description: string;
  techStack: string[];
  features: string[];
  primaryActionLabel: string;
  primaryActionUrl: string;
  secondaryActionLabel: string;
  secondaryActionUrl: string;
  accentColor: string; // Dracula color key
}

export const ECOSYSTEM_PRODUCTS: EcosystemProduct[] = [
  {
    id: 'smartcontact',
    slug: 'smartcontact',
    name: 'SmartContact',
    tagline: 'Plataforma Omnichannel & CRM com Atendimento Híbrido IA',
    category: 'SaaS B2B & Atendimento',
    badge: 'Flagship B2B',
    status: 'PRODUÇÃO',
    highlightMetric: '99.98% SLA',
    description: 'Centralize WhatsApp, Telegram e canais web em uma única interface inteligente com roteamento automático, triagem por IA generativa e painel de conversão.',
    techStack: ['NestJS', 'Angular 17+', 'PostgreSQL', 'Docker', 'WebSockets'],
    features: [
      'Filas de atendimento simultâneas com transição suave para operadores humanos',
      'Painel de métricas em tempo real com auditoria de conversas e tempo de resposta',
      'API aberta para integração com CRMs e ERPs do mercado'
    ],
    primaryActionLabel: 'Conhecer Planos',
    primaryActionUrl: '/planos/smartcontact',
    secondaryActionLabel: 'Acessar Área de Membros',
    secondaryActionUrl: '/membros/smartcontact',
    accentColor: '#8be9fd' // Dracula cyan
  },
  {
    id: 'mas',
    slug: 'educa-ia',
    name: 'MAS (Motor de Aprendizagem Smart)',
    tagline: 'Laboratórios Interativos, Simuladores Visuais & Trilhas com IA',
    category: 'EdTech & Gamificação',
    badge: 'EdTech IA',
    status: 'PRODUÇÃO',
    highlightMetric: '100% Interativo',
    description: 'Ambiente pedagógico investigativo com simuladores visuais em SVG sincronizados em tempo real, quizzes adaptativos em 3 níveis e preparação para exames.',
    techStack: ['Next.js / Node', 'SVG Dinâmico', 'PostgreSQL', 'Gemini IA'],
    features: [
      'Hub pedagógico investigativo estruturado em 4 modais conceituais',
      'Desafios gamificados interativos com física secundária e feedback em tempo real',
      'Trilhas preparatórias calibradas por raio-X estatístico de provas'
    ],
    primaryActionLabel: 'Ver Demonstração',
    primaryActionUrl: '/projetos#educa-ia',
    secondaryActionLabel: 'Planos Educacionais',
    secondaryActionUrl: '/planos/educa-ia',
    accentColor: '#ff79c6' // Dracula pink
  },
  {
    id: 'lisa',
    slug: 'automacao',
    name: 'Lisa — Automação Social & Atendimento',
    tagline: 'Agente Autônomo com Gemini, n8n e Instagram Graph API',
    category: 'IA Agent & Automação',
    badge: 'Multi-Tenant LGPD',
    status: 'PRODUÇÃO',
    highlightMetric: 'Zero Vazamento',
    description: 'Sistema multi-inquilino de inteligência artificial que gera, agenda e publica conteúdos de alto engajamento e responde clientes 24/7 com isolamento estrito de dados.',
    techStack: ['n8n Core', 'Gemini 2.5 Flash', 'Telegram Bot API', 'Meta Graph API'],
    features: [
      'Geração autônoma de carrosséis e posts com identidade visual humana calibrada',
      'Isolamento total de bots e chaves de clientes em conformidade com a LGPD',
      'Gatilho com prévia interativa no Telegram e aprovação em 1 toque antes de postar'
    ],
    primaryActionLabel: 'Conhecer Automações',
    primaryActionUrl: '/projetos#automacao',
    secondaryActionLabel: 'Proposta Comercial',
    secondaryActionUrl: '/projetos#proposta-lisa',
    accentColor: '#bd93f9' // Dracula purple
  },
  {
    id: 'spedfacil',
    slug: 'spedfacil',
    name: 'SPED Fácil',
    tagline: 'O Ecossistema Fiscal e Tributário da TIWEB desde 1990',
    category: 'Sistemas Fiscais & Contábeis',
    badge: '30+ Anos de Tradição',
    status: 'DISPONÍVEL',
    highlightMetric: 'Milhares de Usuários',
    description: 'Software desktop e web para geração, correção e validação automatizada de arquivos do SPED Fiscal e Contribuições em segundos, eliminando multas tributárias.',
    techStack: ['Delphi Core', 'Angular SPA', 'WordPress Headless', 'MySQL'],
    features: [
      'Validação prévia das regras do validador oficial da Receita Federal (PVA)',
      'Área de download protegida com conferência de integridade por hash SHA-256',
      'Manuais operacionais, notas de versão e canal direto de suporte'
    ],
    primaryActionLabel: 'Área do Assinante',
    primaryActionUrl: '/membros/spedfacil',
    secondaryActionLabel: 'Baixar Instalador',
    secondaryActionUrl: '/membros/spedfacil#downloads',
    accentColor: '#50fa7b' // Dracula green
  }
];
