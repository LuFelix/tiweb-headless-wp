import React, { useState } from 'react';
import { WhatsAppSimulator } from './WhatsAppSimulator';
import { LegalPresentationModal } from './LegalPresentationModal';
import { Scale, Presentation, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const LegalVerticalSection: React.FC = () => {
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);

  return (
    <section id="advocacia" className="py-20 lg:py-28 bg-[#1e1f29] relative border-t border-[#44475a]/50">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#bd93f9]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#50fa7b]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#bd93f9]/15 border border-[#bd93f9]/40 text-xs font-mono text-[#bd93f9] mb-4">
            <Scale className="w-4 h-4" />
            Vertical Especializada // Advocacia 4.0
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f8f8f2] tracking-tight">
            Inteligência Artificial & Atendimento para a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bd93f9] to-[#8be9fd]">
              Advocacia de Elite
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#f8f8f2]/70 leading-relaxed">
            Elimine a perda de clientes fora do expediente e estanque o ralo de alvarás retidos com agentes cognitivos no WhatsApp em total conformidade com o Código de Ética da OAB.
          </p>

          {/* Quick Action Button for Mobile Presentation */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsPresentationOpen(true)}
              className="px-6 py-3.5 rounded-xl text-sm font-bold text-[#282a36] bg-gradient-to-r from-[#bd93f9] to-[#8be9fd] hover:shadow-[0_0_25px_rgba(189,147,249,0.4)] active:scale-95 transition-all flex items-center gap-2"
            >
              <Presentation className="w-4 h-4" />
              Abrir Apresentação no Celular (7 Slides)
            </button>
            <a
              href="#roi"
              className="px-6 py-3.5 rounded-xl text-sm font-semibold text-[#f8f8f2] bg-[#44475a]/70 hover:bg-[#44475a] border border-[#6272a4]/40 transition-colors flex items-center gap-2"
            >
              Calcular Retenção de Honorários
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Dual Layout: Benefits + WhatsApp Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Solution Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-3xl bg-[#282a36] border border-[#6272a4]/40 hover:border-[#bd93f9]/60 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#bd93f9]/20 flex items-center justify-center text-[#bd93f9] shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#f8f8f2] mb-1.5">
                    Provimento 205/2021 da OAB 100% Blindado
                  </h3>
                  <p className="text-sm text-[#f8f8f2]/70 leading-relaxed">
                    Comunicação informativa, sóbria e acolhedora. O agente jamais mercantiliza a advocacia ou promete resultados de causa; atua como um assistente prévio que qualifica o caso antes da consulta com o sócio.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#282a36] border border-[#6272a4]/40 hover:border-[#50fa7b]/60 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#50fa7b]/20 flex items-center justify-center text-[#50fa7b] shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#f8f8f2] mb-1.5">
                    Triagem Cognitiva & Atendimento 24/7
                  </h3>
                  <p className="text-sm text-[#f8f8f2]/70 leading-relaxed">
                    Responde aos leads no momento da dor (noites, madrugadas e finais de semana). Identifica o ramo do direito, coleta fatos essenciais e agenda horário na pauta do advogado em menos de 3 minutos.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#282a36] border border-[#6272a4]/40 hover:border-[#8be9fd]/60 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#8be9fd]/20 flex items-center justify-center text-[#8be9fd] shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#f8f8f2] mb-1.5">
                    Sentinela de Alvarás & Reativação de Contatos
                  </h3>
                  <p className="text-sm text-[#f8f8f2]/70 leading-relaxed">
                    Cruza dados processuais para localizar clientes com alvarás e precatórios liberados, enviando mensagens prioritárias para coletar dados bancários e transformar valores em honorários no caixa.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live WhatsApp Interactive Simulator */}
          <div className="lg:col-span-5 flex justify-center">
            <WhatsAppSimulator />
          </div>
        </div>
      </div>

      {/* Modal Apresentação Mobile */}
      <LegalPresentationModal
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
      />
    </section>
  );
};
