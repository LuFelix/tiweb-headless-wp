import React, { useState } from 'react';
import { Send, CheckCheck, Bot, User, Sparkles, Scale, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getLisaWhatsAppUrl } from '../../data/contact';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

const PRESET_SCENARIOS = [
  {
    label: '⚖️ Consulta Trabalhista',
    userText: 'Olá, preciso saber se tenho direito a horas extras não pagas.',
    botText: 'Olá! Sim, nossa equipe possui especialistas em Direito do Trabalho. Para direcionarmos seu caso com precisão ao advogado responsável, quantos anos você trabalhou na empresa e qual era sua jornada diária?',
    followUp: 'Com base nas informações, agendamos uma avaliação técnica com o Dr. Marcos. De acordo com o Código de Ética da OAB, a conversa é privativa e protegida por sigilo. Você prefere hoje às 16h ou amanhã às 10h?'
  },
  {
    label: '💰 Notificação de Alvará',
    userText: 'Recebi um aviso que meu processo teve uma liberação, é verdade?',
    botText: 'Olá! Sim, identificamos a expedição de alvará judicial pelo tribunal no seu processo. Para providenciarmos a liberação dos valores na sua conta, por favor confirme seus dados com a nossa secretaria jurídica.',
    followUp: 'Dados confirmados com sucesso! O comprovante de repasse será enviado em até 24 horas úteis. Há mais alguma dúvida processual que eu possa ajudar?'
  },
  {
    label: '🏠 Contrato Imobiliário',
    userText: 'Gostaria de uma análise de risco para compra de um imóvel.',
    botText: 'Olá! Excelente iniciativa. A due diligence imobiliária previne penhoras e fraudes. Você já possui a certidão de ônus e a minuta do contrato em mãos?',
    followUp: 'Perfeito. Já abrimos seu dossiê de análise preventiva. Nossa especialista em Direito Imobiliário entrará em contato em instantes para receber os documentos com criptografia.'
  }
];

export const WhatsAppSimulator: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Olá! Seja bem-vindo à Banca Jurídica Associados. Sou a assistente inteligente do escritório. Em qual ramo do direito podemos lhe orientar hoje?',
      time: '14:30'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const simulateScenario = (scenario: typeof PRESET_SCENARIOS[0]) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: scenario.userText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: scenario.botText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);

      setTimeout(() => {
        const followUpMsg: Message = {
          id: (Date.now() + 2).toString(),
          sender: 'bot',
          text: scenario.followUp,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, followUpMsg]);
        setIsTyping(false);
      }, 1500);
    }, 1000);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentInput = inputText;
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: `Compreendo perfeitamente sua dúvida sobre "${currentInput}". Para mantermos o rigor ético da OAB, já registrei o resumo do seu caso para que o advogado especialista examine os detalhes e lhe responda. Gostaria de agendar uma reunião inicial?`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-[#6272a4]/40 bg-[#1e1f29] shadow-2xl flex flex-col h-[580px]">
      {/* Header WhatsApp Mockup */}
      <div className="bg-[#282a36] px-4 py-3 border-b border-[#44475a] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-[#bd93f9]/20 border border-[#bd93f9]/50 flex items-center justify-center text-[#bd93f9]">
              <Scale className="w-5 h-5" />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#50fa7b] rounded-full border-2 border-[#282a36]" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#f8f8f2] flex items-center gap-1.5">
              Atendente Jurídica IA
              <ShieldCheck className="w-4 h-4 text-[#50fa7b]" />
            </h4>
            <span className="text-[11px] text-[#50fa7b] font-mono">Online 24/7 • Ética OAB</span>
          </div>
        </div>
        <div className="text-[10px] font-mono bg-[#44475a]/60 text-[#8be9fd] px-2 py-1 rounded-md border border-[#8be9fd]/30">
          Simulador Vivo
        </div>
      </div>

      {/* Scenarios Preset Bar */}
      <div className="bg-[#282a36]/80 px-3 py-2 border-b border-[#44475a]/40 flex gap-2 overflow-x-auto no-scrollbar">
        {PRESET_SCENARIOS.map((sc, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => simulateScenario(sc)}
            className="text-[11px] font-medium whitespace-nowrap px-2.5 py-1 rounded-lg bg-[#44475a]/70 hover:bg-[#bd93f9]/30 text-[#f8f8f2] hover:text-[#bd93f9] border border-[#6272a4]/30 transition-colors"
          >
            {sc.label}
          </button>
        ))}
      </div>

      {/* Messages Feed */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#1e1f29]">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed shadow-md ${
                  msg.sender === 'user'
                    ? 'bg-[#50fa7b] text-[#282a36] rounded-br-none font-medium'
                    : 'bg-[#44475a] text-[#f8f8f2] rounded-bl-none border border-[#6272a4]/40'
                }`}
              >
                <p>{msg.text}</p>
                <div
                  className={`flex items-center justify-end gap-1 text-[10px] mt-1 ${
                    msg.sender === 'user' ? 'text-[#282a36]/70' : 'text-[#6272a4]'
                  }`}
                >
                  <span>{msg.time}</span>
                  {msg.sender === 'user' && <CheckCheck className="w-3.5 h-3.5 text-[#282a36]" />}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1.5 text-xs text-[#8be9fd] bg-[#44475a]/40 px-3 py-1.5 rounded-full w-fit border border-[#6272a4]/30 font-mono"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            <span>IA Jurídica analisando termos...</span>
          </motion.div>
        )}
      </div>

      {/* Input Field */}
      <form onSubmit={handleSendCustom} className="p-3 bg-[#282a36] border-t border-[#44475a] flex gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Digite sua dúvida jurídica de teste..."
          className="flex-1 bg-[#1e1f29] border border-[#6272a4]/40 rounded-xl px-3.5 py-2 text-xs text-[#f8f8f2] focus:outline-none focus:border-[#bd93f9] transition-colors"
        />
        <button
          type="submit"
          className="p-2.5 rounded-xl bg-gradient-to-r from-[#bd93f9] to-[#8be9fd] text-[#282a36] hover:opacity-90 active:scale-95 transition-all"
          aria-label="Enviar mensagem"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

      {/* Live WhatsApp CTA Bar */}
      <div className="p-3 bg-[#1e1f29] border-t border-[#44475a]/70 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <span className="text-[#f8f8f2]/70 font-mono text-[11px]">
          Simulação interativa. Quer conversar com a IA real?
        </span>
        <a
          href={getLisaWhatsAppUrl('Olá Lisa! Estou testando o simulador no portal TIWEB e gostaria de conversar com você ao vivo.')}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#50fa7b] hover:text-[#8be9fd] font-bold flex items-center gap-1 transition-colors shrink-0"
        >
          Conversar com a Lisa no WhatsApp
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
