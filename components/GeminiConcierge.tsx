import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Loader2, Apple, MessageSquareText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GeminiService } from '../services/geminiService';
import { Message } from '../types';

const SUGGESTIONS = [
  "What is Apple Intelligence?",
  "iPhone 16 Pro vs iPhone 15 Pro",
  "Best Mac for coding?",
  "Help me choose an Apple Watch"
];

const GeminiConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to the Apple ecosystem. I'm your Personal Concierge. How can I help you discover something new today?", timestamp: Date.now() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<GeminiService | null>(null);

  useEffect(() => {
    serviceRef.current = new GeminiService();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSend = async (text: string = input) => {
    const finalInput = text || input;
    if (!finalInput.trim() || isLoading || !serviceRef.current) return;

    const userMessage = finalInput.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage, timestamp: Date.now() }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await serviceRef.current.chat(userMessage, history);
    setMessages(prev => [...prev, { role: 'model', text: response, timestamp: Date.now() }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[300]">
      {/* Floating Action Button */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative group flex items-center justify-center w-14 h-14 rounded-full shadow-2xl overflow-hidden transition-all duration-500`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 animate-pulse group-hover:animate-none opacity-90"></div>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
        <Sparkles className="relative z-10 text-white" size={24} />
      </motion.button>

      {/* Siri Glow Effect Background */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[380px] md:w-[420px] max-h-[80vh] bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/40 flex flex-col overflow-hidden"
          >
            {/* Header with animated glow */}
            <div className="relative p-6 border-b border-zinc-200/50 bg-white/40 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white shadow-lg">
                    <Apple size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[15px] tracking-tight">Apple Intelligence</h4>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Personal Concierge</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
                  <X size={18} className="text-zinc-400" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[88%] p-4 rounded-2xl text-[14px] leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none shadow-md shadow-blue-200' 
                      : 'bg-white text-zinc-800 rounded-tl-none border border-zinc-100 shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-zinc-100 p-4 rounded-2xl rounded-tl-none shadow-sm">
                    <Loader2 size={18} className="animate-spin text-blue-500" />
                  </div>
                </div>
              )}

              {!isLoading && messages.length < 3 && (
                <div className="pt-4 grid grid-cols-1 gap-2">
                  <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest ml-1 mb-1">Suggestions</p>
                  {SUGGESTIONS.map(s => (
                    <button 
                      key={s} 
                      onClick={() => handleSend(s)}
                      className="text-left p-3 text-xs bg-zinc-50 hover:bg-zinc-100 border border-zinc-100 rounded-xl transition-all hover:border-zinc-300"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-6 bg-zinc-50/50 border-t border-zinc-200/50">
              <div className="relative group">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask Apple anything..."
                  className="w-full bg-white border border-zinc-200 rounded-2xl py-4 pl-5 pr-14 text-[14px] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-sm group-hover:border-zinc-300"
                />
                <button 
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-10 h-10 bg-black text-white rounded-xl hover:bg-zinc-800 disabled:opacity-20 disabled:cursor-not-allowed transition-all flex items-center justify-center shadow-lg"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="mt-3 text-center text-[10px] text-zinc-400">
                Responses may vary. Visit an Apple Store for expert advice.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GeminiConcierge;