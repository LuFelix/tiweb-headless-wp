import React, { useState } from 'react';
import { SHOWCASE_CASES, ShowcaseCase } from '../../data/cases';
import { ExternalLink, Check, Sparkles, FolderGit2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const CasesShowcase: React.FC = () => {
  const [selectedSegment, setSelectedSegment] = useState<string>('Todos');

  const segments = ['Todos', 'Saúde', 'Jurídico', 'Fiscal & Contábil'];

  const filteredCases = selectedSegment === 'Todos'
    ? SHOWCASE_CASES
    : SHOWCASE_CASES.filter((c) => c.segment === selectedSegment);

  return (
    <section id="cases" className="py-20 lg:py-28 bg-[#282a36] relative border-t border-[#44475a]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#44475a]/60 border border-[#8be9fd]/40 text-xs font-mono text-[#8be9fd] mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            Portfólio & Engenharia Aplicada
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f8f8f2] tracking-tight">
            Cases Reais & Verticais em Escala
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#f8f8f2]/70 leading-relaxed">
            De projetos comerciais entregues em produção a soluções proprietárias de inteligência artificial de alta conversão.
          </p>

          {/* Segment Filter Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {segments.map((seg) => (
              <button
                key={seg}
                type="button"
                onClick={() => setSelectedSegment(seg)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedSegment === seg
                    ? 'bg-gradient-to-r from-[#bd93f9] to-[#8be9fd] text-[#282a36] shadow-[0_0_15px_rgba(189,147,249,0.3)]'
                    : 'bg-[#44475a]/50 text-[#f8f8f2]/70 hover:text-[#f8f8f2] hover:bg-[#44475a]'
                }`}
              >
                {seg}
              </button>
            ))}
          </div>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredCases.map((caseItem) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-[#1e1f29] border border-[#6272a4]/40 hover:border-[#bd93f9]/70 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group"
            >
              <div>
                {/* Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border"
                    style={{
                      color: caseItem.accentColor,
                      borderColor: `${caseItem.accentColor}50`,
                      backgroundColor: `${caseItem.accentColor}15`,
                    }}
                  >
                    {caseItem.segment}
                  </span>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold border ${
                      caseItem.type === 'PROJETO REAL'
                        ? 'bg-[#50fa7b]/20 text-[#50fa7b] border-[#50fa7b]/40'
                        : 'bg-[#bd93f9]/20 text-[#bd93f9] border-[#bd93f9]/40'
                    }`}
                  >
                    {caseItem.type}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#f8f8f2] mb-1 group-hover:text-[#8be9fd] transition-colors">
                  {caseItem.title}
                </h3>
                <span className="text-xs text-[#6272a4] font-mono block mb-3">
                  Cliente: {caseItem.client}
                </span>

                <p className="text-xs sm:text-sm font-medium text-[#bd93f9] mb-4">
                  {caseItem.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#f8f8f2]/70 leading-relaxed mb-6">
                  {caseItem.description}
                </p>

                {/* Resultados Reais */}
                <div className="space-y-2 mb-6 bg-[#282a36] p-4 rounded-2xl border border-[#44475a]">
                  <span className="text-xs font-bold text-[#50fa7b] block mb-2 flex items-center gap-1.5 font-mono">
                    <Sparkles className="w-3.5 h-3.5" />
                    Impacto Comprovado:
                  </span>
                  {caseItem.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs text-[#f8f8f2]/80">
                      <Check className="w-3.5 h-3.5 text-[#50fa7b] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer com Tech Stack e Botão */}
              <div className="pt-4 border-t border-[#44475a]">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {caseItem.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#282a36] text-[#f8f8f2]/70 border border-[#6272a4]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {caseItem.liveUrl ? (
                  <a
                    href={caseItem.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all bg-[#44475a]/70 hover:bg-[#bd93f9]/30 text-[#f8f8f2] hover:text-[#bd93f9] border border-[#6272a4]/40"
                  >
                    <span>{caseItem.actionLabel}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <a
                    href="#advocacia"
                    className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all bg-gradient-to-r from-[#bd93f9] to-[#8be9fd] text-[#282a36] hover:opacity-90"
                  >
                    <span>{caseItem.actionLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
