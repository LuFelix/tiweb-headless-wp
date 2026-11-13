import React from 'react';
import { ShieldCheck, Cpu, Database, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#bd93f9]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#8be9fd]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge de Autoridade */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#44475a]/60 border border-[#bd93f9]/30 text-xs sm:text-sm font-mono text-[#8be9fd] mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#50fa7b] animate-ping" />
            Software House de Elite // B2B Enterprise & IA
          </motion.div>

          {/* Headline Imersiva com Degradê Neon */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#f8f8f2] leading-[1.1] mb-6"
          >
            Engenharia de Software de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bd93f9] via-[#8be9fd] to-[#50fa7b]">
              Alta Precisão & IA
            </span>{' '}
            para Operações Críticas.
          </motion.h1>

          {/* Subtítulo Executivo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-[#f8f8f2]/70 font-normal leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            Construímos plataformas SaaS corporativas, agentes cognitivos e automações inteligentes com arquitetura desacoplada, governança estrita e proteção real ao seu caixa.
          </motion.p>

          {/* CTAs Táteis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#produtos"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-[#282a36] bg-gradient-to-r from-[#bd93f9] via-[#8be9fd] to-[#50fa7b] hover:shadow-[0_0_30px_rgba(139,233,253,0.5)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Explorar Produtos do Ecossistema
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#cases"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-[#f8f8f2] bg-[#44475a]/70 hover:bg-[#44475a] border border-[#6272a4]/40 hover:border-[#bd93f9]/60 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Ver Vitrine de Cases Reais
            </a>
          </motion.div>

          {/* Grid de 4 Indicadores de Engenharia */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left"
          >
            {/* Indicador 1 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#44475a]/40 border border-[#6272a4]/30 hover:border-[#bd93f9]/50 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-[#bd93f9]/20 flex items-center justify-center text-[#bd93f9] mb-3">
                <Database className="w-5 h-5" />
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-[#f8f8f2]">SSOT</div>
              <div className="text-xs text-[#8be9fd] font-medium">Zero-Spaghetti</div>
              <p className="text-[11px] text-[#f8f8f2]/60 mt-1">
                Uma única fonte da verdade auditada para regras e código.
              </p>
            </div>

            {/* Indicador 2 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#44475a]/40 border border-[#6272a4]/30 hover:border-[#50fa7b]/50 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-[#50fa7b]/20 flex items-center justify-center text-[#50fa7b] mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-[#50fa7b]">≥ 93%</div>
              <div className="text-xs text-[#50fa7b] font-medium">Cobertura TDD</div>
              <p className="text-[11px] text-[#f8f8f2]/60 mt-1">
                Testes automatizados antes de qualquer deploy em produção.
              </p>
            </div>

            {/* Indicador 3 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#44475a]/40 border border-[#6272a4]/30 hover:border-[#8be9fd]/50 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-[#8be9fd]/20 flex items-center justify-center text-[#8be9fd] mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-[#f8f8f2]">Bancário</div>
              <div className="text-xs text-[#8be9fd] font-medium">LGPD Multi-Tenant</div>
              <p className="text-[11px] text-[#f8f8f2]/60 mt-1">
                Isolamento total de instâncias e segregação estrita de dados.
              </p>
            </div>

            {/* Indicador 4 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#44475a]/40 border border-[#6272a4]/30 hover:border-[#ffb86c]/50 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-[#ffb86c]/20 flex items-center justify-center text-[#ffb86c] mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-[#f8f8f2]">Atômico</div>
              <div className="text-xs text-[#ffb86c] font-medium">Deploy Contínuo</div>
              <p className="text-[11px] text-[#f8f8f2]/60 mt-1">
                Esteiras com quality gates e rollback automático sem downtime.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
