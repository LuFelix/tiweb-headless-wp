import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  CheckCircle2,
  Lock,
  Sparkles,
  ExternalLink,
  LogOut,
  Gift,
  Crown,
  FileCheck,
  Scale
} from 'lucide-react';
import { AuthService, UserData } from '../../services/authService';
import { LEGAL_FREE_PERKS, VIP_UPSELL_CARDS, LegalPerk } from '../../data/legalPerks';

interface MemberDashboardProps {
  onLogout: () => void;
}

export const MemberDashboard: React.FC<MemberDashboardProps> = ({ onLogout }) => {
  const [downloadedItems, setDownloadedItems] = useState<Record<string, boolean>>({});
  const user: UserData | null = AuthService.getUser();

  const handleDownload = (perk: LegalPerk) => {
    // Registra o download e aciona o arquivo demonstrativo
    setDownloadedItems((prev) => ({ ...prev, [perk.id]: true }));

    // Simula o download de um arquivo com metadados do mimo
    const fileContent = `TIWEB SMARTLEGAL - RECURSO EXCLUSIVO\n\n` +
      `Título: ${perk.title}\n` +
      `Subtítulo: ${perk.subtitle}\n` +
      `Categoria: ${perk.category}\n` +
      `Valor no WooCommerce: ${perk.wooCommercePrice}\n` +
      `Destinatário: ${user?.name || 'Advogado Associado'} (${user?.email || 'N/A'})\n\n` +
      `Destaques:\n` +
      perk.highlights.map((h, i) => `${i + 1}. ${h}`).join('\n') +
      `\n\n---\n` +
      `© TIWEB Tecnologias & Inovações Web - https://tiweb.app.br\n` +
      `Suporte com Lisa WhatsApp: 5582991821555`;

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = perk.downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header do Painel */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-slate-100">Portal do Advogado Associado</h1>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Membro Ativo
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Bem-vindo(a), <span className="text-slate-200 font-medium">{user?.name || 'Dr(a). Colega'}</span> ({user?.email || 'Acesso Demonstrativo'})
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              AuthService.logout();
              onLogout();
            }}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition cursor-pointer"
          >
            <LogOut className="w-4 h-4" /> Sair do Portal
          </button>
        </header>

        {/* ETAPA 1 DO FUNIL: MIMOS DE AUTORIDADE OAB (R$ 0,00) */}
        <section aria-label="Mimos Gratuitos de Autoridade" className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Gift className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Etapa 1 do Funil</span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs text-slate-400">Resgate Imediato no WooCommerce (R$ 0,00)</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-100">Seus 4 Mimos de Autoridade OAB Liberados</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEGAL_FREE_PERKS.map((perk) => {
              const isDownloaded = downloadedItems[perk.id];
              return (
                <motion.div
                  key={perk.id}
                  whileHover={{ y: -3 }}
                  className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all shadow-lg"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {perk.category}
                      </span>
                      <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                        <FileCheck className="w-3.5 h-3.5" /> {perk.wooCommercePrice}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-100">{perk.title}</h3>
                    <p className="text-xs font-medium text-amber-200/80">{perk.subtitle}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{perk.description}</p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                      {perk.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-mono">Formato: {perk.format}</span>
                    <button
                      onClick={() => handleDownload(perk)}
                      className={`px-4 py-2 text-xs font-bold rounded-xl flex items-center gap-2 transition cursor-pointer ${
                        isDownloaded
                          ? 'bg-emerald-600/20 border border-emerald-500/40 text-emerald-300'
                          : 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold shadow-md'
                      }`}
                    >
                      {isDownloaded ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          Baixar Novamente
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          Baixar Recurso Gratuito
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ETAPA 2 DO FUNIL: UPSELL VIP (AUTOMAÇÃO PLUS & SENTINELA) */}
        <section aria-label="Módulos VIP de Alta Performance" className="space-y-6 pt-8 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Crown className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Etapa 2 do Funil</span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs text-slate-400">Módulos VIP de Escala & Automação</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-100">Eleve a Eficiência do seu Escritório</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {VIP_UPSELL_CARDS.map((vip) => (
              <div
                key={vip.id}
                className="bg-gradient-to-b from-slate-900 to-slate-950 border border-indigo-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full"></div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> {vip.badge}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-amber-400" /> Acesso Exclusivo
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">{vip.title}</h3>
                  <p className="text-xs text-indigo-200/90 font-medium">{vip.tagline}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{vip.description}</p>

                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    {vip.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left w-full sm:w-auto">
                    <span className="text-[11px] text-slate-400 block">{vip.priceNote}</span>
                  </div>
                  <a
                    href={vip.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold text-xs rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{vip.ctaText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
