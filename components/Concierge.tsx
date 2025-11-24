import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToConcierge } from '../services/geminiService';

export const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to The Chastain. I am your virtual concierge. How may I assist you with our menu or sustainability practices today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const responseText = await sendMessageToConcierge(userMsg);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-brand-gold text-brand-dark p-4 rounded-full shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300 flex items-center gap-2 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Sparkles size={20} />
        <span className="font-bold text-xs uppercase tracking-widest hidden md:inline">Ask Concierge</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-full md:w-96 h-[500px] bg-brand-cream border border-brand-green/20 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-brand-green p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-brand-gold" />
                <h3 className="font-serif font-bold tracking-wide">Concierge</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-brand-gold">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-cream/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-dark text-white rounded-br-none' 
                      : 'bg-white text-brand-dark shadow-sm border border-brand-stone/20 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg rounded-bl-none shadow-sm border border-brand-stone/20">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-brand-stone/40 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-brand-stone/40 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-brand-stone/40 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-brand-stone/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about wine pairings..."
                className="flex-1 border border-brand-stone/30 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-brand-green font-sans bg-brand-cream/20"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-brand-green text-white p-2 rounded-md hover:bg-brand-dark disabled:opacity-50 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
