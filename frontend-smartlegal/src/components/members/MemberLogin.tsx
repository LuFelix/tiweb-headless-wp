import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, Lock, Mail, AlertCircle, ShieldCheck, ArrowLeft } from 'lucide-react';
import { AuthService } from '../../services/authService';

interface MemberLoginProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export const MemberLogin: React.FC<MemberLoginProps> = ({ onSuccess, onCancel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Por favor, informe seu e-mail e senha.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    const result = await AuthService.loginWithCredentials(email, password);
    setIsLoading(false);

    if (result.success) {
      onSuccess();
    } else {
      setErrorMessage(result.error || 'Falha ao autenticar. Verifique seus dados.');
    }
  };

  const handleSimulateQuickAccess = () => {
    // Acesso demonstrativo ao vivo para advogados em reuniões
    const mockToken = 'mock.' + btoa(JSON.stringify({
      user_display_name: 'Dr(a). Advogado(a) Convidado(a)',
      user_email: email || 'advogado@escritorio.adv.br',
      exp: Math.floor(Date.now() / 1000) + 86400
    })) + '.sig';
    AuthService.saveToken(mockToken);
    onSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-white relative"
      >
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition flex items-center gap-1 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100">Área de Membros Jurídica</h2>
            <p className="text-xs text-slate-400">SmartLegal & Mimos de Autoridade OAB</p>
          </div>
        </div>

        {errorMessage && (
          <div className="mb-4 p-3 bg-red-950/60 border border-red-800 rounded-xl flex items-center gap-2 text-red-200 text-sm">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">E-mail Profissional</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu.nome@oab.org.br ou gmail"
                className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-amber-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Senha</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-amber-500 transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 font-semibold text-slate-950 rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <LogIn className="w-4 h-4" />
            {isLoading ? 'Autenticando...' : 'Acessar Área Exclusiva'}
          </button>
        </form>

        <div className="my-5 flex items-center">
          <div className="flex-1 border-t border-slate-800"></div>
          <span className="px-3 text-xs text-slate-500 uppercase tracking-wider">Demonstração / Teste</span>
          <div className="flex-1 border-t border-slate-800"></div>
        </div>

        <button
          type="button"
          onClick={handleSimulateQuickAccess}
          className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
        >
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          Acesso Rápido para Demonstração (Sem Senha)
        </button>

        <p className="mt-5 text-[11px] text-center text-slate-500">
          🔒 Conexão segura criptografada com a TIWEB via JWT. Conformidade com Provimento 205/2021 da OAB e LGPD.
        </p>
      </motion.div>
    </div>
  );
};
