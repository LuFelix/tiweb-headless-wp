import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Scale,
  ShieldCheck,
  Check,
  ExternalLink,
  MessageCircle,
  DollarSign,
  Clock,
  Sparkles,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { LEGAL_PRACTICE_AREAS } from './data/legalAreas';

export const App: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string>(LEGAL_PRACTICE_AREAS[0].id);

  const activeArea = LEGAL_PRACTICE_AREAS.find((a) => a.id === selectedArea) || LEGAL_PRACTICE_AREAS[0];
  const lisaWhatsAppUrl = 'https://wa.me/5582991821555?text=' + encodeURIComponent('Olá Lisa! Gostaria de agendar uma demonstração do SmartLegal.');

  return (
    <div className="min-h-screen bg-[#1e1f29] text-[#f8f8f2] flex flex-col font-sans selection:bg-[#bd93f9] selection:text-[#282a36]">
      {/* Top Banner OAB */}
      <div className="bg-[#282a36] border-b border-[#44475a]/60 py-2 px-4 text-center">
        <p className="text-xs font-mono text-[#8be9fd] flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#50fa7b]" />
          <span>ESTRITAMENTE CONFORME O CÓDIGO DE ÉTICA DA OAB & PROVIMENTO 205/2021</span>
        </p>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#1e1f29]/90 backdrop-blur-md border-b border-[#44475a]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#282a36] border border-[#bd93f9]/50 flex items-center justify-center text-[#bd93f9]">
              <Scale className="w-5 h-5 text-[#bd93f9]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#f8f8f2] flex items-center gap-1.5">
                SmartLegal
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#bd93f9]/20 text-[#bd93f9] border border-[#bd93f9]/40 font-mono">
                  DEMO
                </span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#6272a4] block">
                TIWEB VERTICAL JURÍDICA
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://tiweb.app.br#advocacia"
              className="text-xs sm:text-sm text-[#f8f8f2]/70 hover:text-[#f8f8f2] hidden sm:flex items-center gap-1"
            >
              <span>Voltar ao Portal TIWEB</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={lisaWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-[#282a36] bg-gradient-to-r from-[#bd93f9] to-[#8be9fd] hover:shadow-[0_0_20px_rgba(189,147,249,0.3)] transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#282a36]" />
              <span>Falar com Especialista</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Showcase Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#bd93f9]/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#44475a]/60 border border-[#bd93f9]/40 text-xs font-mono text-[#bd93f9] mb-6">
              <Sparkles className="w-4 h-4" />
              PORTAL DE DEMONSTRAÇÃO JURÍDICA
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#f8f8f2] tracking-tight leading-[1.1] mb-6">
              Inteligência Artificial & Atendimento de Alto Padrão para a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bd93f9] via-[#ff79c6] to-[#8be9fd]">
                Advocacia Contemporânea
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#f8f8f2]/75 max-w-3xl mx-auto leading-relaxed mb-10">
              Elimine a perda de clientes fora do expediente forense e recupere alvarás retidos com agentes de triagem no WhatsApp operando sob o rigor do Provimento 205/2021 da OAB.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={lisaWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl text-base font-bold text-[#282a36] bg-gradient-to-r from-[#bd93f9] to-[#8be9fd] hover:shadow-[0_0_25px_rgba(189,147,249,0.4)] transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Simular Atendente no WhatsApp</span>
              </a>

              <a
                href="#triagem"
                className="px-8 py-4 rounded-xl text-base font-semibold text-[#f8f8f2] bg-[#282a36] hover:bg-[#44475a] border border-[#6272a4]/40 transition-colors flex items-center gap-2"
              >
                <span>Explorar Áreas do Direito</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* 3 Strategic Pillars */}
        <section className="py-16 bg-[#282a36] border-y border-[#44475a]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-[#1e1f29] border border-[#6272a4]/30">
                <div className="w-12 h-12 rounded-xl bg-[#bd93f9]/20 flex items-center justify-center text-[#bd93f9] mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#f8f8f2]">Acolhimento 24 Horas</h3>
                <p className="text-sm text-[#f8f8f2]/70 leading-relaxed">
                  O constituinte em momento de crise não espera até as 9h da manhã. O agente acolhe o lead no primeiro minuto e programa o atendimento do advogado.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#1e1f29] border border-[#6272a4]/30">
                <div className="w-12 h-12 rounded-xl bg-[#50fa7b]/20 flex items-center justify-center text-[#50fa7b] mb-4">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#f8f8f2]">Sentinela de Alvarás</h3>
                <p className="text-sm text-[#f8f8f2]/70 leading-relaxed">
                  Busca ativa de clientes com precatórios e alvarás pendentes de levantamento bancário para rápida transformação em honorários no caixa.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#1e1f29] border border-[#6272a4]/30">
                <div className="w-12 h-12 rounded-xl bg-[#8be9fd]/20 flex items-center justify-center text-[#8be9fd] mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#f8f8f2]">Visual Law Integrado</h3>
                <p className="text-sm text-[#f8f8f2]/70 leading-relaxed">
                  Contratos, procurações e linhas do tempo com diagramação contemporânea para encantar o constituinte na primeira consulta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas Interactive Triaging */}
        <section id="triagem" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase text-[#bd93f9] font-bold tracking-wider">
              Qualificação Inteligente de Casos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f8f8f2] mt-2">
              Triagem Cognitiva por Especialidade
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#f8f8f2]/70">
              Veja como o agente formula perguntas específicas para cada ramo sem comprometer o advogado com juízo de valor antecipado.
            </p>
          </div>

          {/* Area Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {LEGAL_PRACTICE_AREAS.map((area) => (
              <button
                key={area.id}
                type="button"
                onClick={() => setSelectedArea(area.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedArea === area.id
                    ? 'bg-gradient-to-r from-[#bd93f9] to-[#8be9fd] text-[#282a36] shadow-[0_0_15px_rgba(189,147,249,0.3)]'
                    : 'bg-[#282a36] text-[#f8f8f2]/70 hover:text-[#f8f8f2] hover:bg-[#44475a]'
                }`}
              >
                {area.name}
              </button>
            ))}
          </div>

          {/* Active Area Details Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeArea.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="p-8 rounded-3xl bg-[#282a36] border border-[#6272a4]/40"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#bd93f9]/20 text-[#bd93f9] border border-[#bd93f9]/40">
                    {activeArea.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-[#f8f8f2]">
                    {activeArea.headline}
                  </h3>
                  <p className="text-sm text-[#f8f8f2]/75 leading-relaxed">
                    {activeArea.description}
                  </p>

                  <div className="p-4 rounded-xl bg-[#1e1f29] border border-[#44475a] text-xs space-y-2">
                    <p className="text-[#ff5555] font-semibold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      Gargalo Comum: {activeArea.painPoint}
                    </p>
                    <p className="text-[#50fa7b] font-semibold flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" />
                      Solução com IA: {activeArea.botTriagingAction}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#1e1f29] border border-[#6272a4]/40 flex flex-col justify-between">
                  <h4 className="text-sm font-bold text-[#bd93f9] flex items-center gap-2 mb-3">
                    <MessageCircle className="w-4 h-4 text-[#50fa7b]" />
                    <span>Exemplo de Pergunta da IA no WhatsApp:</span>
                  </h4>
                  <p className="text-xs text-[#f8f8f2]/85 italic bg-[#282a36] p-3 rounded-xl border border-[#44475a] mb-4">
                    "{activeArea.botTriagingAction}"
                  </p>
                  <a
                    href={lisaWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#282a36] bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] hover:opacity-90 flex items-center justify-center gap-2"
                  >
                    <span>Testar este fluxo ao vivo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-[#1e1f29] border-t border-[#44475a]/60 text-center text-xs text-[#6272a4]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} SmartLegal — Tecnologia & Soluções Jurídicas por TIWEB.</p>
          <p className="font-mono text-[11px] text-[#bd93f9]">
            Desenvolvido com Rigor de Engenharia & Conformidade OAB
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
