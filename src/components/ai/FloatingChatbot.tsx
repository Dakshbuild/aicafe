"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Sparkles, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTED_PROMPTS = [
  "Coffee under ₹250",
  "Something cold",
  "Vegetarian snack",
  "Best combo under ₹500"
];

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Good afternoon. What are you in the mood for?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e?: React.FormEvent, presetPrompt?: string) => {
    e?.preventDefault();
    const userMessage = presetPrompt || input.trim();
    if (!userMessage || isLoading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    // Simulated API response for Demo Mode
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Based on your request for "${userMessage}", I recommend the Nitro Cold Brew (₹190). It is smooth, cold, and fits perfectly within a modest budget. Would you like to add it to your order?`
        }
      ]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 p-4 glass rounded-full shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)] z-50 flex items-center justify-center border border-primary/30 transition-all group"
          >
            <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-50"></div>
            <Sparkles className="w-6 h-6 text-primary relative z-10" />
            <span className="font-sans font-medium text-sm text-foreground ml-3 hidden sm:block uppercase tracking-widest relative z-10">
              Ask AI
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-8 right-8 w-[380px] sm:w-[420px] h-[650px] max-h-[85vh] glass border border-primary/20 rounded-3xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/20">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-primary/20 rounded-full border border-primary/30">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-white tracking-wide">Café AI</h3>
                  <p className="text-xs font-sans text-primary/80 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> Intelligent Assistant
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white/50 hover:text-white transition-colors hover:bg-white/10 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Disclaimer */}
            <div className="bg-black/40 px-6 py-3 flex gap-3 items-center text-xs text-white/60 font-sans border-b border-white/5">
              <AlertTriangle className="w-4 h-4 shrink-0 text-primary" />
              <p>AI suggestions require human verification.</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-5 py-4 text-sm font-sans leading-relaxed shadow-sm ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-white/5 text-foreground rounded-bl-sm border border-white/10"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              
              {/* Suggested Prompts (only show if few messages exist) */}
              {messages.length < 3 && !isLoading && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {SUGGESTED_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handleSubmit(undefined, prompt)}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-sans text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      "{prompt}"
                    </button>
                  ))}
                </div>
              )}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm px-5 py-4 flex gap-1.5 items-center h-12">
                    <span className="w-1.5 h-1.5 bg-primary/80 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-primary/80 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-1.5 h-1.5 bg-primary/80 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={(e) => handleSubmit(e)} className="p-4 bg-black/30 border-t border-white/10">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask for a recommendation..."
                  className="w-full pl-5 pr-14 py-4 bg-white/5 border border-white/10 rounded-full text-sm font-sans text-white placeholder-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="text-center mt-3">
                <span className="text-[9px] font-sans text-white/40 uppercase tracking-widest">
                  Lumina Intelligence Engine v1.0
                </span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
