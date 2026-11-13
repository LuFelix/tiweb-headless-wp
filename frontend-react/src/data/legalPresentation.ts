export interface LegalSlide {
  id: number;
  title: string;
  badge: string;
  headline: string;
  content: string[];
  bulletPoints: {
    title: string;
    description: string;
    icon: 'target' | 'alert' | 'bot' | 'shield' | 'zap' | 'rocket' | 'calendar';
  }[];
  executiveTakeaway: string;
}

export const LEGAL_SLIDES: LegalSlide[] = [
  {
    id: 1,
    title: 'Engenharia de IA & Automação na Advocacia',
    badge: 'SLIDE 1 DE 7 // VISÃO ESTRATÉGICA',
    headline: 'Transformando Bancas Jurídicas em Operações de Alta Escala & Precisão',
    content: [
      'A advocacia contemporânea enfrenta uma encruzilhada: o custo operacional de triagem humana subiu enquanto a expectativa de agilidade do cliente se tornou imediata.',
      'Nossa arquitetura combina inteligência artificial cognitiva e automações operacionais que trabalham como um time sênior de apoio aos advogados da banca.'
    ],
    bulletPoints: [
      {
        title: 'Atendimento e Triagem 24/7',
        description: 'Qualificação técnica prévia de clientes potenciais no WhatsApp em menos de 5 segundos.',
        icon: 'bot'
      },
      {
        title: 'Conformidade Ética OAB',
        description: 'Linguagem estritamente consultiva e informativa, em total aderência ao Provimento 205/2021.',
        icon: 'shield'
      },
      {
        title: 'Recuperação Ativa de Caixa',
        description: 'Reativação de alvarás e honorários retidos por falta de contato atualizado com o assistido.',
        icon: 'target'
      }
    ],
    executiveTakeaway: 'Tecnologia que gera receita imediata protegendo a reputação e o tempo nobre dos sócios.'
  },
  {
    id: 2,
    title: 'O Ralo Invisível das Bancas',
    badge: 'SLIDE 2 DE 7 // O DIAGNÓSTICO',
    headline: 'Onde o Seu Escritório Está Perdendo Honorários Todos os Dias',
    content: [
      'Análises empíricas em escritórios de médio e grande porte revelam que até 35% das ações com valores liberados enfrentam atrasos de repasse porque os números de WhatsApp dos clientes foram reciclados ou alterados.',
      'Além disso, 4 de cada 10 leads que chamam à noite ou aos finais de semana desistem antes do expediente seguinte.'
    ],
    bulletPoints: [
      {
        title: 'Alvarás e Precatórios Retidos',
        description: 'Dinheiro na conta judicial que não vira honorário no caixa por falta de contato com o cliente.',
        icon: 'alert'
      },
      {
        title: 'Perda de Clientes Noturnos',
        description: 'O cliente pesquisa no momento da angústia. Quem responde com qualidade técnica primeiro, fecha o contrato.',
        icon: 'zap'
      },
      {
        title: 'Advogados Fazendo Papel de Secretários',
        description: 'Horas caras de advogados associados gastas tirando dúvidas repetitivas sobre andamento processual.',
        icon: 'target'
      }
    ],
    executiveTakeaway: 'Estancar o ralo invisível paga todo o custo da tecnologia logo nas primeiras semanas de operação.'
  },
  {
    id: 3,
    title: 'A Tríade de Soluções Inteligentes',
    badge: 'SLIDE 3 DE 7 // A ENGENHARIA',
    headline: 'Três Pilares Integrados para Blindar a Operação',
    content: [
      'Não vendemos robôs genéricos. Entregamos uma tríade de agentes especializados que trabalham de forma coordenada dentro da rotina do seu escritório.'
    ],
    bulletPoints: [
      {
        title: '1. Atendente & Qualificador 24/7',
        description: 'Atende no WhatsApp, acolhe o cliente, identifica o ramo do direito, coleta dados preliminares e agenda horário.',
        icon: 'bot'
      },
      {
        title: '2. Sentinela Processual Automático',
        description: 'Traduz termos técnicos do tribunal para português claro (Visual Law) e envia atualizações automáticas ao cliente.',
        icon: 'zap'
      },
      {
        title: '3. Caçador de Contatos & Reativação',
        description: 'Localiza contatos atualizados e dispara réguas de comunicação prioritárias para clientes com alvarás pendentes.',
        icon: 'target'
      }
    ],
    executiveTakeaway: 'O cliente se sente acolhido e a equipe jurídica foca exclusivamente em peças e audiências.'
  },
  {
    id: 4,
    title: 'Arquitetura Blindada & Compliance OAB',
    badge: 'SLIDE 4 DE 7 // GOVERNANÇA',
    headline: 'Segurança da Informação e Rigor Deontológico Inegociáveis',
    content: [
      'Advocacia exige sigilo profissional e estrita ética na captação. Nossa infraestrutura foi desenhada por engenheiros de software para eliminar qualquer risco legal ou disciplinar.'
    ],
    bulletPoints: [
      {
        title: 'Blindagem Anti-Captação Mercantilista',
        description: 'O agente nunca promete resultados ou faz oferta comercial agressiva; atua como um assistente de triagem informativa.',
        icon: 'shield'
      },
      {
        title: 'Isolamento de Dados (LGPD Nível Bancário)',
        description: 'Banco de dados e histórico de conversas do escritório isolados em ambiente fechado, sem compartilhamento.',
        icon: 'target'
      },
      {
        title: 'Trilha de Auditoria & Human-in-the-Loop',
        description: 'Qualquer caso crítico ou divergente é transferido imediatamente ao advogado responsável com dossiê pronto.',
        icon: 'zap'
      }
    ],
    executiveTakeaway: 'Risco zero perante o Tribunal de Ética da OAB e proteção integral aos dados confidenciais do cliente.'
  },
  {
    id: 5,
    title: 'Projetos de Entrada (Quick Wins)',
    badge: 'SLIDE 5 DE 7 // RESULTADO RÁPIDO',
    headline: 'Implantados e Gerando Retorno em Questão de Dias',
    content: [
      'Iniciamos a modernização com projetos focados em estancar perdas imediatas e liberar a equipe do escritório.'
    ],
    bulletPoints: [
      {
        title: 'Módulo 1: Triagem & Agendamento no WhatsApp',
        description: 'Robô inteligente que qualifica o lead pelo ramo do direito e agenda no calendário do advogado.',
        icon: 'bot'
      },
      {
        title: 'Módulo 2: Régua de Notificação de Alvarás',
        description: 'Esteira automatizada para localizar assistidos e notificar liberações de pagamentos com rapidez.',
        icon: 'target'
      },
      {
        title: 'Módulo 3: Visual Law & FAQ Automatizado',
        description: 'Respostas prontas em linguagem humanizada para as 20 dúvidas mais frequentes de clientes ativos.',
        icon: 'zap'
      }
    ],
    executiveTakeaway: 'Implementação sem atrito com a equipe existente, sem necessidade de treinamentos complexos.'
  },
  {
    id: 6,
    title: 'Projetos de Upgrade & Escala',
    badge: 'SLIDE 6 DE 7 // O FUTURO DA BANCA',
    headline: 'Para Escritórios que Buscam Liderança Regional',
    content: [
      'Com a operação básica estabilizada, acoplamos módulos avançados de inteligência preditiva e análise de documentos.'
    ],
    bulletPoints: [
      {
        title: 'Extrator & Sumarizador de Peças',
        description: 'Leitura de processos de 500 páginas com extração instantânea de datas-chave, pedidos e decisões.',
        icon: 'rocket'
      },
      {
        title: 'Dashboards Executivos de Conversão',
        description: 'Métricas de taxa de fechamento por advogado, volume de causas por ramo e receita projetada.',
        icon: 'target'
      },
      {
        title: 'Omnichannel Unificado',
        description: 'Integração de WhatsApp, Telegram, E-mail e Instagram Direct em uma única tela de comando centralizada.',
        icon: 'zap'
      }
    ],
    executiveTakeaway: 'Sua banca com a mesma capacidade de processamento dos maiores escritórios do país.'
  },
  {
    id: 7,
    title: 'Roteiro de Implantação Piloto',
    badge: 'SLIDE 7 DE 7 // PRÓXIMOS PASSOS',
    headline: 'Como Começar com Risco Zero e Métricas Transparentes',
    content: [
      'Propomos um piloto de 15 a 30 dias focado em uma área específica do escritório para validar o ganho de produtividade antes de qualquer expansão geral.'
    ],
    bulletPoints: [
      {
        title: 'Semana 1: Diagnóstico & Configuração da IA',
        description: 'Mapeamento das regras do escritório, perguntas de triagem e parâmetros de atendimento.',
        icon: 'calendar'
      },
      {
        title: 'Semana 2: Piloto Controlado em Produção',
        description: 'Ativação do agente em horário estendido com monitoramento em tempo real pela nossa engenharia.',
        icon: 'zap'
      },
      {
        title: 'Semana 3+: Medição de ROI & Expansão',
        description: 'Apresentação de relatório com atendimentos convertidos, horas economizadas e plano de escala.',
        icon: 'rocket'
      }
    ],
    executiveTakeaway: 'Decisão orientada por dados empíricos gerados dentro da realidade da sua própria banca.'
  }
];
