import { useEffect, useRef, useState } from 'react';
import groqService from './services/groqService';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m here to listen and support you. How are you feeling today?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsLoading(true);
    setError(null);

    try {
      // Call Groq API through the service
      const aiResponse = await groqService.sendMessage(currentInput);
      
      const botMessage = { 
        role: 'assistant', 
        content: aiResponse 
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      setError(error.message);
      
      // Fallback to predefined responses if API fails
      const fallbackResponses = [
        "I'm sorry, I'm having trouble connecting right now. Please know that your feelings are valid and it's important to reach out for support. Consider contacting one of the crisis resources below.",
        "I apologize for the technical difficulty. While I can't respond properly right now, please remember that you're not alone. The crisis resources below are always available to help.",
        "I'm experiencing connection issues, but I want you to know that reaching out for help shows incredible strength. Please consider calling one of the support numbers below for immediate assistance."
      ];
      
      const fallbackResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
      const fallbackMessage = { 
        role: 'assistant', 
        content: fallbackResponse 
      };
      
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Header */}
      <div className="bg-gray-900/90 backdrop-blur-xl border-b border-gray-700/50 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => window.history.back()} 
            className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-200 group bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-xl border border-gray-700/50">
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back </span>
            </button>
            
            <div className={`flex items-center gap-3 px-4 py-2 rounded-full border ${
              error 
                ? 'bg-red-500/10 border-red-500/20' 
                : 'bg-emerald-500/10 border-emerald-500/20'
            }`}>
              <div className={`w-2 h-2 rounded-full animate-pulse shadow-lg ${
                error 
                  ? 'bg-red-400 shadow-red-400/50' 
                  : 'bg-emerald-400 shadow-emerald-400/50'
              }`}></div>
              <span className={`text-sm font-medium ${
                error ? 'text-red-300' : 'text-emerald-300'
              }`}>
                {error ? 'Connection Issues' : 'AI Support Active'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/50 overflow-hidden border border-gray-700/50">
          
          {/* Chat Header */}
          <div className="bg-gray-800/80 backdrop-blur-xl border-b border-gray-700/50 p-6">
            <h1 className="text-2xl font-bold text-white">Support Chat</h1>
            {error && (
              <div className="mt-2 text-sm text-red-300 bg-red-900/20 px-3 py-2 rounded-lg border border-red-700/30">
                <span className="font-medium">⚠️ Connection Issue:</span> Using fallback responses. Crisis resources below remain available 24/7.
              </div>
            )}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-900/30 to-gray-800/50 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent min-h-[60vh]">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
                <div className={`max-w-xs lg:max-w-md xl:max-w-lg ${
                  message.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-3xl rounded-br-lg shadow-lg shadow-emerald-500/25' 
                    : 'bg-gray-700/80 backdrop-blur-sm text-gray-100 rounded-3xl rounded-bl-lg shadow-lg shadow-black/25 border border-gray-600/50'
                } px-6 py-4 relative group hover:shadow-xl transition-all duration-300`}>
                  
                  {message.role === 'assistant' && (
                    <div className="absolute -left-3 top-4 w-3 h-3 bg-gray-700 rotate-45 border-l border-t border-gray-600/50"></div>
                  )}
                  {message.role === 'user' && (
                    <div className="absolute -right-3 top-4 w-3 h-3 bg-emerald-600 rotate-45"></div>
                  )}
                  
                  <div className="text-sm leading-relaxed">
                    {message.content.split('\n').map((line, lineIndex) => (
                      <div key={lineIndex} className={line ? 'mb-1' : 'mb-2'}>{line || ''}</div>
                    ))}
                  </div>
                  <div className={`text-xs mt-3 ${
                    message.role === 'user' ? 'text-emerald-200' : 'text-gray-400'
                  }`}>
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start animate-fadeIn">
                <div className="bg-gray-700/80 backdrop-blur-sm text-gray-100 rounded-3xl rounded-bl-lg shadow-lg shadow-black/25 border border-gray-600/50 px-6 py-4 relative">
                  <div className="absolute -left-3 top-4 w-3 h-3 bg-gray-700 rotate-45 border-l border-t border-gray-600/50"></div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span className="text-xs text-gray-400 ml-2">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Crisis Resources */}
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 border-t border-amber-800/30 px-6 py-5">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="font-semibold text-amber-200 flex items-center gap-2">
                <span className="text-lg">📞</span>
                Crisis Resources:
              </span>
              <a href="tel:1562" className="bg-amber-600/30 hover:bg-amber-500/40 text-amber-100 px-4 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 border border-amber-500/30 flex items-center gap-2">
                <span>☎️</span> 1562 iCall
              </a>
              <a href="https://wa.me/9152987821" target="_blank" rel="noopener noreferrer" className="bg-green-600/30 hover:bg-green-500/40 text-green-100 px-4 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 border border-green-500/30 flex items-center gap-2">
                <span>💬</span> WhatsApp Support
              </a>
              <a href="tel:+914066202000" className="bg-purple-600/30 hover:bg-purple-500/40 text-purple-100 px-4 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 border border-purple-500/30 flex items-center gap-2">
                <span>📱</span> AASRA Mumbai
              </a>
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-gray-800/50 backdrop-blur-xl border-t border-gray-700/50 p-6">
            <div className="flex items-end gap-4">
              <div className="flex-1">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Share what's on your mind..."
                  rows={2}
                  disabled={isLoading}
                  className="w-full resize-none border border-gray-600/50 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400/50 placeholder-gray-400 text-gray-100 bg-gray-700/50 backdrop-blur-sm transition-all duration-200 hover:bg-gray-700/70"
                />
              </div>
              <button 
                onClick={sendMessage} 
                disabled={isLoading || !inputValue.trim()}
                className="bg-emerald-700 hover:bg-emerald-700 disabled:bg-gray-800 text-white px-6 py-4 font-medium transition-all duration-200 disabled:cursor-not-allowed rounded-2xl"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <span>Send</span>
                )}
              </button>
            </div>
            
            <div className="mt-4 text-xs text-gray-400 text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-400">🔒</span>
                <span>This is a safe, confidential space. All conversations are private and secure.</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-amber-400">⚠️</span>
                <span>You are chatting with an AI assistant. For immediate crisis support, please contact emergency services.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thumb-gray-600::-webkit-scrollbar-thumb {
          background-color: #4b5563;
          border-radius: 3px;
        }
        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;