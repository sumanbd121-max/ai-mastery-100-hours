import React from 'react';
import { Brain, Sparkles, BookOpen, Layers, Bot, Terminal, Award, Calendar, CheckCircle2 } from 'lucide-react';

export type MainNavTab = 'curriculum' | 'visualizers' | 'ai-tutor' | 'code-lab' | 'capstones' | 'study-plan';

interface HeaderProps {
  activeTab: MainNavTab;
  onTabChange: (tab: MainNavTab) => void;
  completedHoursCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  completedHoursCount,
}) => {
  const navItems = [
    { id: 'curriculum' as const, label: '100-Hour Curriculum', icon: BookOpen },
    { id: 'visualizers' as const, label: 'Architecture Simulators', icon: Layers },
    { id: 'ai-tutor' as const, label: 'AI Tutor & Reviewer', icon: Bot, badge: 'Gemini' },
    { id: 'code-lab' as const, label: 'Production Code Lab', icon: Terminal },
    { id: 'capstones' as const, label: 'Milestone Capstones', icon: Award },
    { id: 'study-plan' as const, label: 'Study Pacing', icon: Calendar },
  ];

  const pct = Math.round((completedHoursCount / 100) * 100);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Branding Row */}
        <div className="flex items-center justify-between h-16 border-b border-slate-800/60">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-lg tracking-tight font-sans">
                  NEUROCRAFT <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">100H</span>
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold">
                  MASTER EDITION
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                The Complete AI, GenAI, LLMs, Agents & Production MLOps Curriculum
              </p>
            </div>
          </div>

          {/* Progress Tracker Pill */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-2xl">
              <div className="w-24 bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="text-xs font-mono font-bold text-slate-200">
                {completedHoursCount}/100h ({pct}%)
              </span>
            </div>

            <button
              onClick={() => onTabChange('ai-tutor')}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-indigo-600/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask AI Tutor</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Row */}
        <nav className="flex items-center gap-1 overflow-x-auto py-2 custom-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-indigo-600/15 text-indigo-300 border border-indigo-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-indigo-500/20 text-indigo-300 uppercase">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
