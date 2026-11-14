import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Check, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { LISA_CAPABILITIES } from '../../data/lisaFeatures';
import { getLisaWhatsAppUrl } from '../../data/contact';

export const LisaShowcaseSection: React.FC = () => {
  const liveWhatsAppUrl = getLisaWhatsAppUrl(
    'Olá Lisa! Quero testar suas funcionalidades ao vivo e conhecer o plano Automação Plus.'
  );

  return (
    <section id="lisa" className="py-20 lg:py-28 bg-[#282a36] relative border-t border-[#44475a]/50 overflow-hidden">
      {/* Glow decorativo */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#50fa7b]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#bd93f9]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#50fa7b]/15 border border-[#50fa7b]/40 text-xs font-mono text-[#50fa7b] mb-4">
            <Bot className="w-4 h-4" />
            ASSISTENTE COGNITIVA & AUTOMAÇÃO PLUS
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f8f8f2] tracking-tight">
            Conheça a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#50fa7b] to-[#8be9fd]">
              Lisa em Produção
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#f8f8f2]/75 leading-relaxed">
            Muito além de um chatbot: uma assistente autônoma capaz de atender, qualificar leads no WhatsApp e operar uma fábrica completa de conteúdo com aprovação humana no Telegram.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {LISA_CAPABILITIES.map((cap, idx) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-3xl bg-[#1e1f29] border border-[#6272a4]/40 hover:border-[#50fa7b]/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <span
                  className="inline-block text-[11px] font-mono font-bold px-3 py-1 rounded-full border mb-4"
                  style={{
                    color: cap.accentColor,
                    borderColor: `${cap.accentColor}50`,
                    backgroundColor: `${cap.accentColor}15`,
                  }}
                >
                  {cap.badge}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-[#f8f8f2] mb-2">
                  {cap.title}
                </h3>

                <p className="text-sm text-[#f8f8f2]/75 leading-relaxed mb-5">
                  {cap.description}
                </p>

                <div className="space-y-2.5">
                  {cap.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#f8f8f2]/85">
                      <Check className="w-4 h-4 text-[#50fa7b] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live WhatsApp Callout */}
        <div className="rounded-3xl bg-gradient-to-r from-[#44475a]/50 via-[#1e1f29] to-[#44475a]/40 border border-[#50fa7b]/40 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#50fa7b]">
              <ShieldCheck className="w-4 h-4" />
              DEMONSTRAÇÃO REAL NO WHATSAPP OFICIAL
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#f8f8f2]">
              Quer ver a velocidade e naturalidade da Lisa agora?
            </h3>
            <p className="text-sm text-[#f8f8f2]/75 max-w-2xl">
              Inicie uma conversa real pelo WhatsApp oficial da TIWEB. Tire dúvidas sobre arquitetura, prazos e o plano Automação Plus diretamente com a nossa assistente em produção.
            </p>
          </div>

          <a
            href={liveWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-7 py-4 rounded-xl text-sm sm:text-base font-bold text-[#282a36] bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] hover:shadow-[0_0_25px_rgba(80,250,123,0.4)] active:scale-95 transition-all flex items-center gap-2.5"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Testar a Lisa ao Vivo no WhatsApp</span>
            <Sparkles className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
