import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LEGAL_SLIDES } from '../../data/legalPresentation';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Shield, Target, AlertTriangle, Bot, Zap, Rocket, Calendar, ArrowRight } from 'lucide-react';

interface LegalPresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalPresentationModal: React.FC<LegalPresentationModalProps> = ({ isOpen, onClose }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentSlideIndex]);

  if (!isOpen) return null;

  const currentSlide = LEGAL_SLIDES[currentSlideIndex];

  const nextSlide = () => {
    if (currentSlideIndex < LEGAL_SLIDES.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'alert':
        return <AlertTriangle className="w-5 h-5 text-[#ff5555]" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-[#50fa7b]" />;
      case 'bot':
        return <Bot className="w-5 h-5 text-[#8be9fd]" />;
      case 'zap':
        return <Zap className="w-5 h-5 text-[#ffb86c]" />;
      case 'rocket':
        return <Rocket className="w-5 h-5 text-[#bd93f9]" />;
      case 'calendar':
        return <Calendar className="w-5 h-5 text-[#8be9fd]" />;
      default:
        return <Target className="w-5 h-5 text-[#bd93f9]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#282a36]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-[#44475a]/70 pb-4">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded-full bg-[#bd93f9]/20 border border-[#bd93f9]/40 text-[#bd93f9] text-xs font-mono font-bold">
            MODO APRESENTAÇÃO EXECUTIVA
          </div>
          <span className="text-xs font-mono text-[#f8f8f2]/60 hidden sm:inline">
            Use as setas ou deslize no celular
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-xs font-mono text-[#8be9fd]">
            {currentSlideIndex + 1} / {LEGAL_SLIDES.length}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-[#44475a] text-[#f8f8f2] hover:bg-[#ff5555]/30 hover:text-[#ff5555] transition-colors"
            aria-label="Fechar apresentação"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slide Progress Bar */}
      <div className="w-full h-1 bg-[#44475a] rounded-full overflow-hidden my-3">
        <div
          className="h-full bg-gradient-to-r from-[#bd93f9] via-[#8be9fd] to-[#50fa7b] transition-all duration-300"
          style={{ width: `${((currentSlideIndex + 1) / LEGAL_SLIDES.length) * 100}%` }}
        />
      </div>

      {/* Main Slide Content Area with Swipe Gesture */}
      <div className="flex-1 flex items-center justify-center py-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-4xl bg-[#44475a]/30 border border-[#6272a4]/40 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col justify-between"
          >
            {/* Slide Header */}
            <div>
              <span className="text-xs font-mono text-[#bd93f9] tracking-widest block mb-2 font-bold">
                {currentSlide.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#f8f8f2] mb-4 leading-tight">
                {currentSlide.headline}
              </h2>

              {/* Text Paragraphs */}
              <div className="space-y-2 mb-6">
                {currentSlide.content.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-[#f8f8f2]/80 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* 3 Bullet Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 my-6">
                {currentSlide.bulletPoints.map((bp, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-4 rounded-2xl bg-[#282a36]/80 border border-[#6272a4]/30 hover:border-[#bd93f9]/50 transition-colors"
                  >
                    <div className="mb-2.5">{renderIcon(bp.icon)}</div>
                    <h4 className="text-sm font-bold text-[#f8f8f2] mb-1">{bp.title}</h4>
                    <p className="text-xs text-[#f8f8f2]/70 leading-relaxed">{bp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Executive Takeaway */}
            <div className="pt-4 border-t border-[#6272a4]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#50fa7b] font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span><strong>Conclusão Executiva:</strong> {currentSlide.executiveTakeaway}</span>
              </div>
              {currentSlideIndex === LEGAL_SLIDES.length - 1 && (
                <a
                  href="#contato"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#282a36] bg-gradient-to-r from-[#bd93f9] to-[#50fa7b] flex items-center gap-1.5 shrink-0 hover:shadow-lg"
                >
                  Agendar Reunião com a Lisa
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-[#44475a]/70">
        <button
          type="button"
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[#f8f8f2] bg-[#44475a] disabled:opacity-30 disabled:pointer-events-none hover:bg-[#6272a4] transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Anterior
        </button>

        <div className="flex items-center gap-1.5">
          {LEGAL_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlideIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentSlideIndex
                  ? 'w-7 bg-[#bd93f9]'
                  : 'bg-[#44475a] hover:bg-[#6272a4]'
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          disabled={currentSlideIndex === LEGAL_SLIDES.length - 1}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[#282a36] bg-gradient-to-r from-[#bd93f9] to-[#8be9fd] disabled:opacity-30 disabled:pointer-events-none hover:opacity-90 transition-opacity"
        >
          Próximo
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
