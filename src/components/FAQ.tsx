"use client";

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is 'First-Past-the-Post'?",
    answer: "It's a voting system where the candidate with the most votes wins, even if they don't have an absolute majority (more than 50%)."
  },
  {
    question: "How do I know if I'm eligible to vote?",
    answer: "Generally, you must be a citizen of the country, of a certain age (usually 18+), and meet residency requirements. Check with the AI for specific country rules."
  },
  {
    question: "Can I vote from abroad?",
    answer: "Many countries allow 'absentee' or 'postal' voting for citizens living overseas, but processes vary. You often need to register early for this."
  },
  {
    question: "What happens during vote counting?",
    answer: "Trained officials collect ballots, verify their authenticity, and count them—often in the presence of independent observers to ensure fairness."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="glass-panel p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <HelpCircle className="text-[var(--accent-color)]" />
        Common Questions
      </h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-[var(--border-color)] last:border-0">
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full py-4 flex justify-between items-center text-left hover:text-[var(--accent-color)] transition-colors"
            >
              <span className="font-medium text-sm">{faq.question}</span>
              {openIndex === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {openIndex === index && (
              <div className="pb-4 text-sm text-[var(--text-secondary)] animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
