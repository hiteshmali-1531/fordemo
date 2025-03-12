'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import ChatBotPage from './ChatBotPage';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end">
      {/* Chatbot Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="w-[350px] h-[500px] bg-white shadow-lg rounded-xl border border-gray-300 overflow-hidden"
        >
          <ChatBotPage />
        </motion.div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bot p-0 border-none flex items-center justify-center w-20 h-20 hover:none focus:outline-none active:outline-none"
      >
        {isOpen ? (
          // Close button (SVG) when chatbot is open
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="blu"
            className="w-[50px] h-[50px] bg-white rounded-full p-1 shadow-md cursor-pointer hover:none"
          >
            <path
              fillRule="evenodd"
              d="M6.225 4.811a.75.75 0 011.06 0L12 9.525l4.715-4.714a.75.75 0 011.06 1.06L13.06 10.585l4.715 4.716a.75.75 0 11-1.06 1.06L12 11.645l-4.715 4.716a.75.75 0 11-1.06-1.06l4.715-4.716-4.715-4.715a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          // GIF when chatbot is closed
          <img
            src="/svg/vipulgif.gif"
            alt="Open Chat"
            className="w-[120px] h-[120px] hover:none"
          />
        )}
      </button>
    </div>
  );
};

export default ChatbotWidget;
