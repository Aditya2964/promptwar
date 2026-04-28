"use client";

import React, { useState } from 'react';
import { CheckCircle2, Circle, ClipboardList } from 'lucide-react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function Checklist() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Check voter eligibility requirements', completed: false },
    { id: 2, text: 'Register to vote (check deadlines)', completed: false },
    { id: 3, text: 'Research candidates and their platforms', completed: false },
    { id: 4, text: 'Locate your polling station', completed: false },
    { id: 5, text: 'Check required identification for voting', completed: false },
    { id: 6, text: 'Plan your trip to the polls', completed: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="glass-panel p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <ClipboardList className="text-[var(--accent-color)]" />
        Voter Readiness Checklist
      </h2>
      <div className="space-y-3">
        {tasks.map(task => (
          <div 
            key={task.id} 
            onClick={() => toggleTask(task.id)}
            className="flex items-center gap-3 p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] cursor-pointer hover:border-[var(--accent-color)] transition-all"
          >
            {task.completed ? (
              <CheckCircle2 className="text-[var(--success-color)]" size={20} />
            ) : (
              <Circle className="text-[var(--text-secondary)]" size={20} />
            )}
            <span className={`text-sm ${task.completed ? 'line-through text-[var(--text-secondary)]' : ''}`}>
              {task.text}
            </span>
          </div>
        ))}
      </div>
      <p className="text-xs text-[var(--text-secondary)] mt-4 italic">
        Personalize this checklist by asking the AI for country-specific steps.
      </p>
    </div>
  );
}
