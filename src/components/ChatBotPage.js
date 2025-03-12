'use client'
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBotPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const router = useRouter();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages((prev) => [...prev, { 
      text: inputMessage, 
      isBot: false, 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    }]);
    
    setIsTyping(true);

    try {
      const response = await fetch("http://13.60.28.189:5000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: inputMessage }),
      });
      
      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { 
          text: data.response || "No response", 
          isBot: true, 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { 
          text: "Error connecting to server", 
          isBot: true, 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        },
      ]);
    }

    setIsTyping(false);
    setInputMessage('');
  };

  return (
    <div className="w-full max-w-2xl h-[500px] bg-white rounded-2xl shadow-xl flex flex-col font-sans overflow-hidden border border-gray-200 transform transition-all">
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center space-x-4 sticky top-0 z-20 shadow-md">
        <div className="flex items-center space-x-4 flex-1">
          <div className="p-2 bg-blue-500 rounded-xl">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold tracking-tight">University Assistant</h2>
            <p className="text-sm opacity-95 font-medium">AI Support + Human Help</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100" />
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-200" />
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-gray-50 to-gray-100 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent">
        <AnimatePresence initial={false}>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: msg.isBot ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`max-w-[85%] p-4 rounded-2xl text-sm shadow-sm relative ${
                msg.isBot 
                  ? 'bg-white text-gray-800 self-start ml-2 border border-gray-100' 
                  : 'bg-gradient-to-br from-blue-600 to-blue-500 text-white self-end mr-2'
              }`}
            >
              <p className="leading-relaxed">{msg.text}</p>
              <span className={`block text-xs mt-2 ${
                msg.isBot ? 'text-gray-500' : 'text-blue-100'
              }`}>
                {msg.time}
              </span>
              {msg.isBot && (
                <div className="absolute -left-2 top-3 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-100" />
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex space-x-2 p-3 bg-white rounded-xl w-24 self-start ml-4 shadow-sm border border-gray-100"
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100" />
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200" />
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100 bg-white/90 backdrop-blur-sm">
        <div className="flex gap-2 items-center">
          <input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask about admissions, courses, or campus..."
            className="flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-sm shadow-sm transition-all"
          />
          <button
            type="submit"
            className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 flex justify-center items-center"
            disabled={!inputMessage.trim()}
          >
            <svg className="w-5 h-5 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </form>

      {/* Footer */}
      <div className="p-3 bg-gray-50 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-500 font-medium">
          Powered by <span className="text-blue-600">Vipul</span> • Secure Chat
        </p>
      </div>
    </div>
  );
};

export default ChatBotPage;