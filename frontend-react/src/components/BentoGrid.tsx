import React from 'react';
import { ECOSYSTEM_PRODUCTS, EcosystemProduct } from '../data/products';
import { ExternalLink, ArrowRight, Check, Layers, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const BentoGrid: React.FC = () => {
  return (
    <section id="produtos" className="py-20 lg:py-28 bg-[#282a36] relative border-t border-[#44475a]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#44475a]/60 border border-[#bd93f9]/40 text-xs font-mono text-[#bd93f9] mb-4">
            <Layers className="w-3.5 h-3.5" />
            Ecossistema Multi-Produto TIWEB
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f8f8f2] tracking-tight">
            Nossos Pilares Tecnológicos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#f8f8f2]/70 leading-relaxed">
            Quatro soluções proprietárias que combinam inteligência artificial, automação operacional e conformidade de alto padrão para alavancar negócios.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {ECOSYSTEM_PRODUCTS.map((product, idx) => {
            const isWide = idx === 0 || idx === 1; // Primeiros dois cards maiores
            const colSpanClass = isWide ? 'lg:col-span-6' : 'lg:col-span-6';

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`${colSpanClass} rounded-3xl bg-[#44475a]/30 border border-[#6272a4]/40 hover:border-[#bd93f9]/80 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group relative overflow-hidden`}
                style={{
                  background: `linear-gradient(135deg, rgba(68, 71, 90, 0.4) 0%, ${product.glowColor} 100%)`,
                }}
              >
                {/* Header do Card */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span
                      className="text-xs font-mono font-bold px-3 py-1 rounded-full border"
                      style={{
                        color: product.accentColor,
                        borderColor: `${product.accentColor}50`,
                        backgroundColor: `${product.accentColor}15`,
                      }}
                    >
                      {product.category}
                    </span>

                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#282a36]/80 text-[#50fa7b] border border-[#50fa7b]/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#50fa7b]" />
                      {product.status}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#f8f8f2] mb-2 group-hover:text-[#8be9fd] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-sm font-medium text-[#bd93f9] mb-4">
                    {product.tagline}
                  </p>

                  <p className="text-sm text-[#f8f8f2]/70 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#f8f8f2]/80">
                        <Check className="w-4 h-4 text-[#50fa7b] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer do Card (Métricas, Tech Stack e Botão) */}
                <div className="pt-6 border-t border-[#6272a4]/30">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-[#50fa7b] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {product.metrics}
                    </span>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {product.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#282a36]/90 text-[#f8f8f2]/70 border border-[#6272a4]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botão de Ação */}
                  <a
                    href={product.actionUrl}
                    target={product.isExternal ? '_blank' : '_self'}
                    rel={product.isExternal ? 'noopener noreferrer' : undefined}
                    className="w-full py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 border"
                    style={{
                      backgroundColor: `${product.accentColor}20`,
                      borderColor: `${product.accentColor}60`,
                      color: product.accentColor,
                    }}
                  >
                    <span>{product.actionLabel}</span>
                    {product.isExternal ? (
                      <ExternalLink className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
