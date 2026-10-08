import React, { useState } from 'react';
import { Calendar, Clock, Trophy, Download, CheckCircle2, RotateCcw, Sparkles, BookOpen, Layers } from 'lucide-react';
import { STUDY_PACES, MODULES, ALL_HOURS } from '../data/curriculum';

interface StudyPlannerProps {
  completedHours: Set<number>;
  onResetProgress: () => void;
  onSeedDemoProgress: () => void;
}

export const StudyPlanner: React.FC<StudyPlannerProps> = ({
  completedHours,
  onResetProgress,
  onSeedDemoProgress,
}) => {
  const [selectedPaceId, setSelectedPaceId] = useState<string>('balanced');
  const [startDate] = useState<Date>(new Date());

  const activePace = STUDY_PACES.find((p) => p.id === selectedPaceId) || STUDY_PACES[1];

  // Estimated completion date calculation
  const completionDate = new Date(startDate);
  completionDate.setDate(completionDate.getDate() + activePace.totalWeeks * 7);

  const completedCount = completedHours.size;
  const remainingCount = 100 - completedCount;
  const completionPercentage = Math.round((completedCount / 100) * 100);

  // Export full syllabus to Markdown
  const handleExportMarkdown = () => {
    let md = `# NeuroCraft 100H: The Complete AI, GenAI & Agent Engineering Curriculum\n\n`;
    md += `> Comprehensive Master Curriculum from Fundamentals to Deep Neural Architectures, Autonomous Agents, and Production Full-Stack Deployment.\n\n`;
    md += `**Target Pace:** ${activePace.name} (${activePace.hoursPerWeek} Hours/Week across ${activePace.totalWeeks} Weeks)\n`;
    md += `**Estimated Target Completion:** ${completionDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}\n\n`;
    md += `## Modules Overview\n\n`;

    MODULES.forEach((m) => {
      md += `### ${m.title}\n`;
      md += `* **Range:** ${m.hoursRange}\n`;
      md += `* **Summary:** ${m.summary}\n`;
      md += `* **Capstone Milestone:** ${m.capstoneProject.title} (Hour ${m.capstoneProject.hour})\n\n`;
    });

    md += `\n---\n\n## 100-Hour Complete Syllabus Breakdown\n\n`;

    ALL_HOURS.forEach((h) => {
      const isDone = completedHours.has(h.hour);
      md += `### [${isDone ? 'x' : ' '}] Hour ${h.hour}: ${h.title}\n`;
      md += `* **Module:** ${h.moduleIndex} | **Chapter:** ${h.chapter} | **Level:** ${h.level}\n`;
      md += `* **Overview:** ${h.overview}\n`;
      md += `* **Key Concepts:** ${h.keyConcepts.join(', ')}\n`;
      md += `* **Math & Theory:** ${h.mathAndTheory}\n`;
      md += `* **Architectural Invariant:** ${h.architecturalInsight}\n`;
      md += `* **Lab Deliverable:** ${h.handsOnLab.deliverable}\n\n`;
    });

    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'NeuroCraft_100_Hour_AI_Curriculum.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-bold mb-1">
              <Calendar className="w-4 h-4" />
              <span>CUSTOM STUDY PACING & MILESTONE SCHEDULER</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Personalized 100-Hour Mastery Roadmaps
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Structure your daily commitment to ensure steady neural retention, avoid burnout, and ship production capstones on schedule.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExportMarkdown}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl flex items-center gap-2 transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Export Full Syllabus (.md)</span>
            </button>
          </div>
        </div>

        {/* 3 Pace Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          {STUDY_PACES.map((pace) => {
            const isSelected = selectedPaceId === pace.id;

            return (
              <div
                key={pace.id}
                onClick={() => setSelectedPaceId(pace.id)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-slate-950/90 border-indigo-500 shadow-xl shadow-indigo-500/10 ring-2 ring-indigo-500/30'
                    : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-indigo-400">
                    {pace.intensity} Track
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800">
                    {pace.totalWeeks} Weeks
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">{pace.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">{pace.description}</p>
                <div className="text-xs font-mono text-emerald-400 font-semibold pt-2 border-t border-slate-800/80">
                  ⚡ {pace.targetDailyCommitment}
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Target Card */}
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
            <span className="text-xs font-mono text-slate-500 block mb-1">Weekly Commitment</span>
            <span className="text-xl font-bold text-indigo-400">{activePace.hoursPerWeek} Hours / Wk</span>
          </div>
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
            <span className="text-xs font-mono text-slate-500 block mb-1">Total Duration</span>
            <span className="text-xl font-bold text-white">{activePace.totalWeeks} Weeks</span>
          </div>
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
            <span className="text-xs font-mono text-slate-500 block mb-1">Target Graduation</span>
            <span className="text-xl font-bold text-emerald-400">
              {completionDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
            <span className="text-xs font-mono text-slate-500 block mb-1">Current Progress</span>
            <span className="text-xl font-bold text-cyan-400">{completedCount}% Finished</span>
          </div>
        </div>
      </div>

      {/* Progress Management & Seed Options */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-bold text-white">Student Progress Tracking</h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Progress is automatically saved in your browser storage across sessions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onSeedDemoProgress}
            className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
          >
            Load Sample Completed Hours (Hours 1–5)
          </button>
          <button
            onClick={onResetProgress}
            className="p-2 hover:bg-rose-950/40 text-slate-500 hover:text-rose-400 rounded-xl transition-colors"
            title="Reset All Progress to 0"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
