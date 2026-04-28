import React from 'react';
import ChatInterface from '@/components/ChatInterface';
import ElectionTimeline from '@/components/ElectionTimeline';
import Checklist from '@/components/Checklist';
import FAQ from '@/components/FAQ';
import Quiz from '@/components/Quiz';
import { Globe, ShieldCheck, HelpCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto flex flex-col gap-8 pb-16">
      {/* Header */}
      <header className="glass-panel p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Globe className="text-[var(--accent-color)]" size={32} />
            Global Election AI Guide
          </h1>
          <p className="text-[var(--text-secondary)] mt-2">
            Your nonpartisan, easy-to-understand companion for democratic processes worldwide.
          </p>
        </div>
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2 text-sm text-[var(--success-color)] bg-[var(--success-color)]/10 px-3 py-1.5 rounded-full border border-[var(--success-color)]/20">
             <ShieldCheck size={16} />
             Verified & Nonpartisan
           </div>
          <select className="input-field max-w-[200px]" defaultValue="global">
            <option value="global">🌍 Global Mode</option>
            <option value="us">🇺🇸 United States</option>
            <option value="in">🇮🇳 India</option>
            <option value="uk">🇬🇧 United Kingdom</option>
          </select>
        </div>
      </header>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
        
        {/* Left Column: Chat and Intro */}
        <section className="lg:col-span-7 flex flex-col gap-8">
          <div className="glass-panel p-6 bg-gradient-to-br from-[var(--accent-color)]/10 to-transparent border-[var(--accent-color)]/30 border">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
               Welcome to your Civic Assistant
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              Democracy works best when everyone participates. Our AI guide simplifies complex political systems, helps you register, and explains the voting process in simple terms.
            </p>
            <div className="flex flex-wrap gap-4 text-xs">
              <span className="flex items-center gap-1.5"><HelpCircle size={14} /> Ask about eligibility</span>
              <span className="flex items-center gap-1.5"><HelpCircle size={14} /> Compare countries</span>
              <span className="flex items-center gap-1.5"><HelpCircle size={14} /> View deadlines</span>
            </div>
          </div>
          
          <ChatInterface />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <FAQ />
             <Checklist />
          </div>
        </section>

        {/* Right Column: Timeline and Quiz */}
        <section className="lg:col-span-5 flex flex-col gap-8">
          <div className="h-[500px]">
             <ElectionTimeline />
          </div>
          <Quiz />
        </section>

      </div>

      {/* Footer */}
      <footer className="text-center text-[var(--text-secondary)] text-xs mt-8">
        <p>© 2026 Global Election AI Guide • Empowering voters everywhere.</p>
      </footer>
    </main>
  );
}
