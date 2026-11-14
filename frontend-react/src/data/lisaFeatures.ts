export interface LisaCapability {
  id: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  accentColor: string;
}

export const LISA_CAPABILITIES: LisaCapability[] = [
  {
    id: 'whatsapp-cognitivo',
    badge: 'ATENDIMENTO 24/7',
    title: 'Atendimento Cognitivo 24/7 no WhatsApp',
    description:
      'Responde clientes em segundos com linguagem natural e humanizada, compreende áudios transcritos em tempo real e mantém memória contextual por conversa.',
    highlights: [
      'Triagem inteligente com qualificação de demanda antes do humano',
      'Agendamento direto e respostas alinhadas às regras do negócio',
      'Transbordo imediato para operador humano quando necessário',
    ],
    accentColor: '#50fa7b',
  },
  {
    id: 'fabrica-conteudo',
    badge: 'CONTEÚDO & TELEGRAM',
    title: 'Fábrica de Carrosséis & Stories com Gemini',
    description:
      'Transforma pautas ou áudios em carrosséis e stories com a identidade visual do seu nicho, enviando prévia para aprovação humana em canal privado do Telegram.',
    highlights: [
      'Zero publicação sem validação prévia do responsável no Telegram',
      'Design alinhado às cores, tipografia e posicionamento da marca',
      'Copy persuasiva e técnica adaptada ao público-alvo do cliente',
    ],
    accentColor: '#bd93f9',
  },
  {
    id: 'meta-graph-api',
    badge: 'PUBLICAÇÃO SEGURA',
    title: 'Publicação Direta via Meta Graph API',
    description:
      'Publicação automatizada de carrosséis e stories diretamente no Instagram via API oficial da Meta com tokens permanentes e isolamento estrito de tenants.',
    highlights: [
      'Arquitetura multi-tenant com bots e credenciais 100% isolados (LGPD)',
      'Sem risco de bloqueio por ferramentas piratas de automação',
      'Logs auditáveis e retries automáticos no orquestrador n8n',
    ],
    accentColor: '#8be9fd',
  },
  {
    id: 'automacao-plus',
    badge: 'ARQUITETURA MODULAR',
    title: 'Plano Automação Plus Modular',
    description:
      'Cada empresa recebe sua própria assistente com nome, tom de voz e base de conhecimento exclusivos — podendo contratar com ou sem o módulo de redes sociais.',
    highlights: [
      'Atendente personalizada com nome próprio para cada marca ou clínica',
      'Contratação independente do atendimento WhatsApp sem pacote social',
      'Integração opcional com CRM SmartContact e webhooks corporativos',
    ],
    accentColor: '#ffb86c',
  },
];
