export interface LegalPerk {
  id: string;
  title: string;
  subtitle: string;
  category: 'Compliance OAB' | 'Scripts & Atendimento' | 'Auditoria & Cálculos' | 'Visual Law';
  format: 'PDF' | 'Planilha / Dashboard' | 'Pack Figma / Canva' | 'Template Word / PDF';
  description: string;
  highlights: string[];
  downloadFileName: string;
  wooCommercePrice: 'R$ 0,00';
  isFree: true;
  badgeText: 'Mimo 100% Gratuito';
}

export const LEGAL_FREE_PERKS: LegalPerk[] = [
  {
    id: 'oab-blindagem-ia',
    title: 'Guia Prático de Blindagem OAB',
    subtitle: 'Conformidade com o Provimento 205/2021 para IA & WhatsApp',
    category: 'Compliance OAB',
    format: 'PDF',
    description: 'Manual definitivo para aplicar Inteligência Artificial no atendimento do escritório sem infringir as regras de captação indevida ou mercantilização.',
    highlights: [
      'Cláusulas seguras para Termos de Consentimento do constituinte',
      'Checklist de validação ética de anúncios e posts informativos',
      'Matriz de risco: o que a IA pode e não pode responder em nome do patrono'
    ],
    downloadFileName: 'guia-blindagem-oab-provimento-205.pdf',
    wooCommercePrice: 'R$ 0,00',
    isFree: true,
    badgeText: 'Mimo 100% Gratuito'
  },
  {
    id: 'scripts-triagem-whatsapp',
    title: 'Playbook: 5 Roteiros de Triagem Consultiva',
    subtitle: 'Qualificação humana e acolhedora para WhatsApp Jurídico',
    category: 'Scripts & Atendimento',
    format: 'PDF',
    description: 'Sequência de perguntas e respostas para filtrar clientes qualificados nas áreas Trabalhista, Previdenciário, Família, Bancário e Cível.',
    highlights: [
      'Script de acolhimento inicial respeitando a dor do cliente',
      'Filtro de viabilidade processual sem dar parecer prematuro',
      'Roteiro de agendamento de consulta com advogado responsável'
    ],
    downloadFileName: 'playbook-5-roteiros-triagem-whatsapp.pdf',
    wooCommercePrice: 'R$ 0,00',
    isFree: true,
    badgeText: 'Mimo 100% Gratuito'
  },
  {
    id: 'planilha-auditoria-alvaras',
    title: 'Planilha & Auditoria de Alvarás Retidos',
    subtitle: 'Calculadora de honorários pendentes e reativação de carteira',
    category: 'Auditoria & Cálculos',
    format: 'Planilha / Dashboard',
    description: 'Ferramenta estruturada para cruzar precatórios, RPVs e depósitos judiciais parados nas contas da Caixa e Banco do Brasil.',
    highlights: [
      'Modelo de conciliação entre valor da causa e honorários contratuais',
      'Fórmula de correção monetária (IPCA-E / SELIC)',
      'Template de mensagem para reativação de cliente inativo'
    ],
    downloadFileName: 'planilha-auditoria-alvaras-tiweb.xlsx',
    wooCommercePrice: 'R$ 0,00',
    isFree: true,
    badgeText: 'Mimo 100% Gratuito'
  },
  {
    id: 'pack-visual-law',
    title: 'Pack Inicial de Visual Law & Infográficos',
    subtitle: 'Linha do tempo processual e contrato amigável',
    category: 'Visual Law',
    format: 'Pack Figma / Canva',
    description: 'Modelos visuais elegantes para transformar peças complexas e contratos em documentos de fácil compreensão para clientes e magistrados.',
    highlights: [
      'Linha do tempo das fases do processo com ícones vetoriais',
      'Resumo executivo em 1 página de petições e contratos',
      'Paleta sóbria testada em tribunais de justiça estaduais e federais'
    ],
    downloadFileName: 'pack-visual-law-advocacia-moderna.zip',
    wooCommercePrice: 'R$ 0,00',
    isFree: true,
    badgeText: 'Mimo 100% Gratuito'
  }
];

export interface VipUpsellCard {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  priceNote: string;
}

export const VIP_UPSELL_CARDS: VipUpsellCard[] = [
  {
    id: 'lisa-cognitiva-advocacia',
    title: 'Atendente Cognitiva 24/7 Dedicada',
    badge: 'Plano Automação Plus',
    tagline: 'Sua secretária jurídica com inteligência treinada no acervo do seu escritório',
    description: 'Atenda clientes às 23h de domingo, colete documentos preliminares e envie fichas organizadas direto ao WhatsApp do advogado responsável.',
    features: [
      'Treinamento com o tom de voz e área de atuação do seu escritório',
      'Triagem com qualificação automática e agendamento no Google Agenda',
      'Segurança e conformidade total com o Provimento 205/2021 da OAB',
      'Conexão com WhatsApp Business Oficial (Meta Cloud API)'
    ],
    ctaText: 'Falar com a Lisa sobre o Plano Dedicado',
    ctaLink: 'https://wa.me/5582991821555?text=' + encodeURIComponent('Olá Lisa! Gostaria de entender como funciona a Atendente Cognitiva 24/7 para meu escritório.'),
    priceNote: 'Implementação personalizada sob diagnóstico'
  },
  {
    id: 'sentinela-alvaras',
    title: 'Sentinela de Alvarás & Reativação Ativa',
    badge: 'Recuperação de Ativos',
    tagline: 'Varredura automática de saldos judiciais parados e notificações inteligentes',
    description: 'Recupere honorários e valores devidos aos constituintes sem perder tempo conferindo extratos bancários manualmente.',
    features: [
      'Disparo de mensagens no WhatsApp avisando sobre valores liberados',
      'Painel de controle unificado com status de cada depósito judicial',
      'Aumento imediato de caixa a partir da carteira inativa de processos',
      'Integração direta com o portal SmartLegal do seu escritório'
    ],
    ctaText: 'Solicitar Demonstração do Sentinela',
    ctaLink: 'https://wa.me/5582991821555?text=' + encodeURIComponent('Olá! Gostaria de uma demonstração do Sentinela de Alvarás para reativação de carteira.'),
    priceNote: 'Ativação modular para escritórios com carteira ativa'
  }
];
