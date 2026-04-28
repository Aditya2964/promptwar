"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Info } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I am your nonpartisan Election AI Assistant. Which country or specific election process would you like to learn about today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }

      const data = await response.json();
      
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error while fetching the election data. Please make sure the GEMINI_API_KEY is configured correctly.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] glass-panel p-4">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--border-color)]">
        <Info size={20} className="text-[var(--accent-color)]" />
        <h2 className="text-lg font-semibold">Civic Guide AI</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto mb-4 pr-2 space-y-4" style={{ scrollbarWidth: 'thin', scrollbarColor: 'var(--border-color) transparent' }}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`max-w-[80%] rounded-xl p-3 animate-fade-in ${msg.role === 'user' ? 'chat-message-user ml-auto' : 'chat-message-ai mr-auto'}`}>
            {msg.role === 'user' ? (
              <p>{msg.content}</p>
            ) : (
              <div className="prose prose-invert max-w-none text-sm">
                 <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="chat-message-ai max-w-[80%] rounded-xl p-3 animate-fade-in mr-auto flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <Loader2 className="animate-spin" size={16} /> Analyzing electoral data...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about voter registration, dates, or rules..."
          className="input-field pr-12"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          disabled={!input.trim() || isLoading}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[var(--accent-color)] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--border-color)] rounded-full transition-colors"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
