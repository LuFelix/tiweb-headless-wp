import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const RoiCalculator: React.FC = () => {
  const [ticketMedio, setTicketMedio] = useState<number>(4000);
  const [leadsPerdidos, setLeadsPerdidos] = useState<number>(8);
  const [taxaConversao, setTaxaConversao] = useState<number>(25);

  const contratosRecuperados = Math.max(1, Math.round(leadsPerdidos * (taxaConversao / 100)));
  const receitaMensal = contratosRecuperados * ticketMedio;
  const receitaAnual = receitaMensal * 12;
  const horasEconomizadas = Math.round(leadsPerdidos * 3.5);

  return (
    <section id="roi" className="py-20 lg:py-28 bg-[#1e1f29] relative border-t border-[#44475a]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#50fa7b]/15 border border-[#50fa7b]/40 text-xs font-mono text-[#50fa7b] mb-4">
            <Calculator className="w-4 h-4" />
            Simulador de Impacto Financeiro
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f8f8f2] tracking-tight">
            Calculadora de Retorno (ROI Reverso)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#f8f8f2]/70 leading-relaxed">
            Quantos clientes você deixa na mesa todos os meses por demora no primeiro atendimento? Simule o valor financeiro real recuperado com automação e IA.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Controls Column (Sliders) */}
          <div className="lg:col-span-6 bg-[#282a36] border border-[#6272a4]/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            {/* Slider 1: Ticket Médio */}
            <div>
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
                <span className="text-[#f8f8f2]">Ticket Médio do Seu Contrato/Consulta:</span>
                <span className="text-[#50fa7b] font-mono font-bold text-base">
                  R$ {ticketMedio.toLocaleString('pt-BR')}
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={20000}
                step={500}
                value={ticketMedio}
                onChange={(e) => setTicketMedio(Number(e.target.value))}
                className="w-full h-2 bg-[#44475a] rounded-lg appearance-none cursor-pointer accent-[#bd93f9]"
              />
              <div className="flex justify-between text-[10px] text-[#6272a4] font-mono mt-1">
                <span>R$ 1.000</span>
                <span>R$ 20.000+</span>
              </div>
            </div>

            {/* Slider 2: Leads Perdidos */}
            <div>
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
                <span className="text-[#f8f8f2]">Contatos sem Resposta Imediata / Mês:</span>
                <span className="text-[#8be9fd] font-mono font-bold text-base">
                  {leadsPerdidos} contatos
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={40}
                step={1}
                value={leadsPerdidos}
                onChange={(e) => setLeadsPerdidos(Number(e.target.value))}
                className="w-full h-2 bg-[#44475a] rounded-lg appearance-none cursor-pointer accent-[#8be9fd]"
              />
              <div className="flex justify-between text-[10px] text-[#6272a4] font-mono mt-1">
                <span>2 contatos</span>
                <span>40 contatos</span>
              </div>
            </div>

            {/* Slider 3: Taxa de Conversão */}
            <div>
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
                <span className="text-[#f8f8f2]">Taxa Estimada de Fechamento com IA:</span>
                <span className="text-[#bd93f9] font-mono font-bold text-base">
                  {taxaConversao}%
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={50}
                step={5}
                value={taxaConversao}
                onChange={(e) => setTaxaConversao(Number(e.target.value))}
                className="w-full h-2 bg-[#44475a] rounded-lg appearance-none cursor-pointer accent-[#bd93f9]"
              />
              <div className="flex justify-between text-[10px] text-[#6272a4] font-mono mt-1">
                <span>10% (Conservador)</span>
                <span>50% (Otimista)</span>
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#282a36] to-[#44475a]/70 border border-[#bd93f9]/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="px-3 py-1 rounded-full bg-[#50fa7b]/20 border border-[#50fa7b]/40 text-[#50fa7b] text-[11px] font-mono font-bold">
                PAYBACK &lt; 15 DIAS
              </span>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-[#bd93f9] block mb-1">
                  Receita Potencial Recuperada
                </span>
                <div className="text-3xl sm:text-5xl font-extrabold text-[#50fa7b] font-mono tracking-tight">
                  + R$ {receitaMensal.toLocaleString('pt-BR')}
                  <span className="text-sm font-sans text-[#f8f8f2]/70 font-normal"> / mês</span>
                </div>
                <span className="text-xs text-[#8be9fd] font-mono mt-1 block">
                  Projeção anual de + R$ {receitaAnual.toLocaleString('pt-BR')} no caixa
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#6272a4]/30">
                <div className="p-3.5 rounded-2xl bg-[#1e1f29] border border-[#6272a4]/30">
                  <div className="flex items-center gap-1.5 text-xs text-[#f8f8f2]/70 mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-[#50fa7b]" />
                    Contratos Fechados:
                  </div>
                  <div className="text-xl font-bold font-mono text-[#f8f8f2]">
                    +{contratosRecuperados} / mês
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#1e1f29] border border-[#6272a4]/30">
                  <div className="flex items-center gap-1.5 text-xs text-[#f8f8f2]/70 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#ffb86c]" />
                    Tempo Poupado:
                  </div>
                  <div className="text-xl font-bold font-mono text-[#f8f8f2]">
                    ~{horasEconomizadas}h / mês
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#contato"
              className="w-full py-4 px-6 rounded-xl text-sm font-bold text-[#282a36] bg-gradient-to-r from-[#bd93f9] via-[#8be9fd] to-[#50fa7b] hover:shadow-[0_0_25px_rgba(139,233,253,0.5)] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <DollarSign className="w-4 h-4" />
              Recuperar Essa Receita com a TIWEB
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
