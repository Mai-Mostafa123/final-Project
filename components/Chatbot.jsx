"use client";
import { useState, useEffect, useRef } from 'react';
import { FaComments, FaPaperPlane, FaTimes, FaRobot } from 'react-icons/fa';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: "Welcome to NovaTech! I'm your AI assistant. How can I help you today?" }
  ]);
  
  const scrollRef = useRef(null);

  // ردود سريعة يدوية (Manual Data)
  const quickReplies = {
    "hello": "Hi there! How can NovaTech help you today?",
    "hi": "Hello! Looking for some new hardware?",
    "shipping": "We ship all over the country within 2-5 business days.",
    "payment": "We accept Cash on Delivery and Credit Cards.",
    "thanks": "You're very welcome! Let me know if you need anything else.",
    "thank you": "Happy to help! Enjoy shopping at NovaTech."
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    const userInput = input.toLowerCase().trim();
    
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // 1. التشيك على الردود السريعة أولاً
    if (quickReplies[userInput]) {
      setTimeout(() => {
        setMessages(prev => [...prev, { role: "bot", text: quickReplies[userInput] }]);
      }, 500); // تأخير بسيط عشان يبان إنه بيرد
      return;
    }

    // 2. لو مش موجود في الردود السريعة، نكلم الـ AI
    setMessages(prev => [...prev, { role: "bot", text: "Thinking..." }]);

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.text }),
      });

      const data = await response.json();
      
      setMessages(prev => {
        const newMsgs = [...prev];
        newMsgs[newMsgs.length - 1] = { role: "bot", text: data.reply || data.text };
        return newMsgs;
      });
    } catch (error) {
      setMessages(prev => {
        const newMsgs = [...prev];
        newMsgs[newMsgs.length - 1] = { role: "bot", text: "I'm having trouble connecting. Please try again later." };
        return newMsgs;
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      {/* Chat Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all active:scale-95 border-2 border-white/10"
      >
        {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[330px] md:w-[380px] bg-white rounded-3xl shadow-2xl border border-blue-50 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <FaRobot size={20} />
              <div>
                <p className="text-sm font-bold">NovaTech AI</p>
                <span className="text-[10px] text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
                </span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-[13px] ${
                  msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white text-slate-700 border border-blue-100 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-800"
            />
            <button 
              onClick={handleSend}
              className="bg-blue-600 text-white p-2.5 rounded-full hover:bg-blue-700 transition"
            >
              <FaPaperPlane size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}