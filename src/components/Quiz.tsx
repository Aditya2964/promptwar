"use client";

import React, { useState } from 'react';
import { Award, RefreshCw, CheckCircle, XCircle } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correct: number;
}

const questions: Question[] = [
  {
    id: 1,
    text: "What is a 'referendum'?",
    options: ["A type of election for local mayors", "A direct vote by the electorate on a specific proposal", "A meeting between political party leaders"],
    correct: 1
  },
  {
    id: 2,
    text: "Which of these is generally required to vote in most countries?",
    options: ["Proof of property ownership", "A university degree", "Voter registration"],
    correct: 2
  },
  {
    id: 3,
    text: "What is the purpose of an election observer?",
    options: ["To help people choose candidates", "To ensure the election process is free and fair", "To count the votes manually"],
    correct: 1
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleAnswer = (index: number) => {
    setSelectedOption(index);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  if (showResult) {
    return (
      <div className="glass-panel p-6 text-center animate-fade-in">
        <Award className="mx-auto text-yellow-500 mb-4" size={48} />
        <h2 className="text-xl font-bold mb-2">Quiz Complete!</h2>
        <p className="text-lg mb-6">You scored {score} out of {questions.length}</p>
        <button onClick={restartQuiz} className="btn-primary flex items-center gap-2 mx-auto">
          <RefreshCw size={16} /> Try Again
        </button>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="glass-panel p-6 h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Award className="text-[var(--accent-color)]" />
          Test Your Knowledge
        </h2>
        <span className="text-xs bg-[var(--bg-secondary)] px-2 py-1 rounded border border-[var(--border-color)]">
          Question {currentQuestion + 1}/{questions.length}
        </span>
      </div>

      <p className="font-medium mb-6">{q.text}</p>
      
      <div className="space-y-3">
        {q.options.map((option, idx) => (
          <button
            key={idx}
            disabled={selectedOption !== null}
            onClick={() => handleAnswer(idx)}
            className={`w-full p-4 rounded-lg text-left text-sm transition-all border flex justify-between items-center ${
              selectedOption === idx 
                ? (idx === q.correct ? 'bg-green-500/20 border-green-500' : 'bg-red-500/20 border-red-500')
                : (selectedOption !== null && idx === q.correct ? 'bg-green-500/20 border-green-500' : 'bg-[var(--bg-secondary)] border-[var(--border-color)] hover:border-[var(--accent-color)]')
            }`}
          >
            {option}
            {selectedOption === idx && (idx === q.correct ? <CheckCircle size={16} /> : <XCircle size={16} />)}
          </button>
        ))}
      </div>
    </div>
  );
}
