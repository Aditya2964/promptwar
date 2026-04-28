import React from 'react';
import { Calendar, Users, MapPin, CheckSquare, BarChart } from 'lucide-react';

const defaultStages = [
  {
    title: "Voter Registration",
    description: "Ensure you are eligible and registered to vote before the deadline.",
    icon: <Users size={20} className="text-[var(--accent-color)]" />,
    date: "Varies by State/Region"
  },
  {
    title: "Find Your Polling Station",
    description: "Locate where you need to go to cast your ballot.",
    icon: <MapPin size={20} className="text-[var(--accent-color)]" />,
    date: "Usually announced 30 days prior"
  },
  {
    title: "Election Day",
    description: "Go to your polling station and cast your vote. Bring required ID.",
    icon: <Calendar size={20} className="text-[var(--accent-color)]" />,
    date: "Official Election Date"
  },
  {
    title: "Vote Counting",
    description: "Ballots are securely collected and tallied by officials.",
    icon: <CheckSquare size={20} className="text-[var(--accent-color)]" />,
    date: "Starts immediately after polls close"
  },
  {
    title: "Results Declaration",
    description: "Official announcement of the winning candidates.",
    icon: <BarChart size={20} className="text-[var(--accent-color)]" />,
    date: "Days to weeks after Election Day"
  }
];

export default function ElectionTimeline() {
  return (
    <div className="glass-panel p-6 h-full overflow-y-auto">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Calendar className="text-[var(--accent-color)]" />
        General Election Process
      </h2>
      
      <div className="timeline-container">
        {defaultStages.map((stage, index) => (
          <div key={index} className="timeline-item animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="timeline-dot flex items-center justify-center bg-[var(--bg-primary)]">
               {/* Dot styled via CSS */}
            </div>
            <div className="bg-[var(--bg-secondary)] p-4 rounded-lg border border-[var(--border-color)] relative left-4 w-[calc(100%-2rem)] hover:border-[var(--accent-color)] transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[var(--bg-primary)] rounded-md">
                    {stage.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{stage.title}</h3>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] text-sm mb-2">{stage.description}</p>
              <div className="inline-block bg-[var(--bg-primary)] text-xs px-2 py-1 rounded text-[var(--text-secondary)] border border-[var(--border-color)]">
                {stage.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
