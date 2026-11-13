import React from 'react';
import { Terminal, Shield, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-[#1e1f29] border-t border-[#44475a] pt-16 pb-12 text-[#f8f8f2]/70 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Coluna 1: Marca */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#44475a] flex items-center justify-center text-[#8be9fd]">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-[#f8f8f2]">TIWEB Enterprise</span>
            </div>
            <p className="text-sm text-[#f8f8f2]/60 max-w-sm mb-6 leading-relaxed">
              Software house especializada em plataformas corporativas críticas, automações inteligentes e ecossistemas de alta escala com rigor de governança SSOT.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#50fa7b] font-mono">
              <Shield className="w-4 h-4" />
              Ambiente 100% em Conformidade LGPD & ISO 27001 Ready
            </div>
          </div>

          {/* Coluna 2: Soluções */}
          <div>
            <h4 className="text-[#f8f8f2] font-semibold text-sm mb-4 uppercase tracking-wider font-mono">
              Soluções
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#produtos" className="hover:text-[#8be9fd] transition-colors">
                  SmartContact (CRM & IA)
                </a>
              </li>
              <li>
                <a href="https://educa-ia.app.br" target="_blank" rel="noopener noreferrer" className="hover:text-[#bd93f9] transition-colors">
                  MAS / Educa-IA
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-[#50fa7b] transition-colors">
                  Lisa / Automação Social
                </a>
              </li>
              <li>
                <a href="https://spedfacil.tiweb.app.br" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffb86c] transition-colors">
                  SPED Fácil (Fiscal)
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Governança & Contato */}
          <div>
            <h4 className="text-[#f8f8f2] font-semibold text-sm mb-4 uppercase tracking-wider font-mono">
              Engenharia
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#engenharia" className="hover:text-[#50fa7b] transition-colors">
                  Single Source of Truth (SSOT)
                </a>
              </li>
              <li>
                <a href="#engenharia" className="hover:text-[#bd93f9] transition-colors">
                  Protocolos TDD & CI/CD
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-[#8be9fd] transition-colors">
                  Cases & Apresentações Comerciais
                </a>
              </li>
              <li>
                <a href="mailto:contato@tiweb.app.br" className="text-[#bd93f9] hover:underline font-mono">
                  contato@tiweb.app.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Inferior */}
        <div className="pt-8 border-t border-[#44475a]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6272a4]">
          <p>© {new Date().getFullYear()} TIWEB Soluções Tecnológicas. Todos os direitos reservados.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#44475a]/50 text-[#f8f8f2]/70 hover:text-[#50fa7b] hover:bg-[#44475a] transition-all"
          >
            Voltar ao topo
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
