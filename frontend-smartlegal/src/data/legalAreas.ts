export interface LegalPracticeArea {
  id: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  painPoint: string;
  botTriagingAction: string;
}

export const LEGAL_PRACTICE_AREAS: LegalPracticeArea[] = [
  {
    id: 'trabalhista',
    name: 'Direito do Trabalho',
    badge: 'ALTA DEMANDA',
    headline: 'Triagem de Rescisão, Horas Extras e Vínculo Empregatício',
    description:
      'Identifica tempo de empresa, motivo da saída e existência de verbas rescisórias pendentes antes de direcionar ao advogado.',
    painPoint: 'Leads chegam ansiosos e sem documentos básicos, demandando até 40 min de atendimento manual.',
    botTriagingAction: 'Coleta salário base, data de admissão/demissão e pergunta se a homologação foi quitada.',
  },
  {
    id: 'previdenciario',
    name: 'Direito Previdenciário',
    badge: 'BENEFÍCIOS DO INSS',
    headline: 'Concessão, Revisão de Aposentadoria e BPC/LOAS',
    description:
      'Faz o filtro de tempo de contribuição, laudos médicos e histórico de indeferimentos prévios no Meu INSS.',
    painPoint: 'Muitos segurados desconhecem se preenchem a idade mínima ou carência.',
    botTriagingAction: 'Pergunta a data de nascimento, anos trabalhados e se já fez pedido indeferido no INSS.',
  },
  {
    id: 'tributario-empresarial',
    name: 'Tributário & Empresarial',
    badge: 'RECUPERAÇÃO FISCAL',
    headline: 'Exclusão do ICMS, Créditos Tributários e Holding',
    description:
      'Qualifica faturamento mensal e regime de apuração (Lucro Real vs. Presumido) de empresas para planejamento tributário.',
    painPoint: 'Empresários buscam respostas rápidas sobre viabilidade de restituição de tributos federais.',
    botTriagingAction: 'Classifica o porte da empresa, regime fiscal e área de atuação em 3 perguntas estruturadas.',
  },
  {
    id: 'familia-sucessoes',
    name: 'Família & Sucessões',
    badge: 'ACOLHIMENTO SÓBRIO',
    headline: 'Inventários Extrajudiciais, Divórcio e Pensão',
    description:
      'Atendimento empático e estritamente discreto para coletar bens envolvidos e consenso entre herdeiros.',
    painPoint: 'Momento de vulnerabilidade emocional dos constituintes exige tom acolhedor e seguro.',
    botTriagingAction: 'Informa os passos iniciais da documentação necessária sem mercantilizar honorários.',
  },
  {
    id: 'civel-imobiliario',
    name: 'Cível & Imobiliário',
    badge: 'CONTRATOS E POSSE',
    headline: 'Usucapião, Distrato Imobiliário e Vícios Construtivos',
    description:
      'Validação de certidões, contratos de gaveta e tempo de posse para regularização fundiária.',
    painPoint: 'Complexidade documental e risco de perda de prazo em reintegrações.',
    botTriagingAction: 'Verifica situação registral no cartório de imóveis e tempo de posse mansa e pacífica.',
  },
];
