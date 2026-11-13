import React, { useState } from 'react';
import { Menu, X, Sparkles, Terminal, ChevronRight, Scale } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#282a36]/90 backdrop-blur-md border-b border-[#44475a]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#44475a] border border-[#bd93f9]/50 flex items-center justify-center shadow-[0_0_15px_rgba(189,147,249,0.3)] group-hover:border-[#bd93f9] transition-all duration-300">
              <Terminal className="w-5 h-5 text-[#8be9fd] group-hover:text-[#50fa7b] transition-colors" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#f8f8f2] flex items-center gap-1.5">
                TIWEB
                <span className="inline-block w-2 h-2 rounded-full bg-[#50fa7b] animate-pulse"></span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#6272a4] block -mt-1">
                Enterprise & IA
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            <a href="#produtos" className="text-[#f8f8f2]/80 hover:text-[#8be9fd] transition-colors">
              Ecossistema
            </a>
            <a
              href="#advocacia"
              className="text-[#bd93f9] hover:text-[#f8f8f2] flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#bd93f9]/10 border border-[#bd93f9]/30 transition-all"
            >
              <Scale className="w-3.5 h-3.5" />
              Vertical Advocacia
            </a>
            <a href="#cases" className="text-[#f8f8f2]/80 hover:text-[#50fa7b] transition-colors">
              Cases Reais
            </a>
            <a href="#roi" className="text-[#f8f8f2]/80 hover:text-[#8be9fd] transition-colors">
              Simulador ROI
            </a>
            <a href="#engenharia" className="text-[#f8f8f2]/80 hover:text-[#f8f8f2] transition-colors">
              Engenharia
            </a>
            <a
              href="https://spedfacil.tiweb.app.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffb86c] hover:underline flex items-center gap-1"
            >
              SPED Fácil
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contato"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-[#282a36] bg-gradient-to-r from-[#bd93f9] to-[#8be9fd] hover:shadow-[0_0_20px_rgba(139,233,253,0.4)] transition-all duration-300 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#282a36]" />
              Fale com a Lisa
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#f8f8f2] hover:bg-[#44475a] focus:outline-none transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#ff5555]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#282a36] border-b border-[#44475a] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <a
            href="#advocacia"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-base font-medium text-[#bd93f9] bg-[#bd93f9]/10 border border-[#bd93f9]/30"
          >
            <Scale className="w-4 h-4" />
            Vertical Advocacia (Slides & Agente IA)
          </a>
          <a
            href="#produtos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#f8f8f2] hover:bg-[#44475a]"
          >
            Ecossistema de Produtos
          </a>
          <a
            href="#cases"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#f8f8f2] hover:bg-[#44475a]"
          >
            Cases Reais (Concept Odontologia)
          </a>
          <a
            href="#roi"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#f8f8f2] hover:bg-[#44475a]"
          >
            Calculadora de ROI Reverso
          </a>
          <a
            href="#engenharia"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#f8f8f2] hover:bg-[#44475a]"
          >
            Como Construímos Software
          </a>
          <a
            href="https://spedfacil.tiweb.app.br"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#ffb86c] hover:bg-[#44475a]"
          >
            Portal SPED Fácil ➔
          </a>
          <div className="pt-2">
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-lg text-sm font-semibold text-[#282a36] bg-gradient-to-r from-[#bd93f9] to-[#8be9fd] shadow-md"
            >
              Falar com a Lisa no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
