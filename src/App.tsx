import React, { useState, useEffect } from 'react';
import { Header, MainNavTab } from './components/Header';
import { CurriculumExplorer } from './components/CurriculumExplorer';
import { ArchitectureVisualizers } from './components/ArchitectureVisualizers';
import { AITutorPanel } from './components/AITutorPanel';
import { CodeLab } from './components/CodeLab';
import { CapstonesView } from './components/CapstonesView';
import { StudyPlanner } from './components/StudyPlanner';
import { LessonDetailModal } from './components/LessonDetailModal';
import { QuizModal } from './components/QuizModal';
import { LessonHour } from './types/curriculum';
import { MODULES, ALL_HOURS } from './data/curriculum';
import { Brain, Layers, Cpu, Bot, Rocket, ShieldCheck, Sparkles, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<MainNavTab>('curriculum');
  const [selectedLesson, setSelectedLesson] = useState<LessonHour | null>(null);
  const [quizLesson, setQuizLesson] = useState<LessonHour | null>(null);

  // Local storage for completed & bookmarked hours
  const [completedHours, setCompletedHours] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem('neurocraft_completed_hours');
      return saved ? new Set(JSON.parse(saved)) : new Set([1, 2]); // default Hour 1 and 2 completed as sample
    } catch {
      return new Set([1, 2]);
    }
  });

  const [bookmarkedHours, setBookmarkedHours] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem('neurocraft_bookmarked_hours');
      return saved ? new Set(JSON.parse(saved)) : new Set([13, 19, 49, 89]);
    } catch {
      return new Set([13, 19, 49, 89]);
    }
  });

  // Persist state
  useEffect(() => {
    localStorage.setItem('neurocraft_completed_hours', JSON.stringify(Array.from(completedHours)));
  }, [completedHours]);

  useEffect(() => {
    localStorage.setItem('neurocraft_bookmarked_hours', JSON.stringify(Array.from(bookmarkedHours)));
  }, [bookmarkedHours]);

  const handleToggleComplete = (hour: number) => {
    setCompletedHours((prev) => {
      const updated = new Set(prev);
      if (updated.has(hour)) {
        updated.delete(hour);
      } else {
        updated.add(hour);
      }
      return updated;
    });
  };

  const handleToggleBookmark = (hour: number) => {
    setBookmarkedHours((prev) => {
      const updated = new Set(prev);
      if (updated.has(hour)) {
        updated.delete(hour);
      } else {
        updated.add(hour);
      }
      return updated;
    });
  };

  const handleResetProgress = () => {
    setCompletedHours(new Set());
  };

  const handleSeedDemoProgress = () => {
    setCompletedHours(new Set([1, 2, 3, 4, 5, 13, 19, 21]));
  };

  const handleJumpToHour = (hour: number) => {
    const lesson = ALL_HOURS.find((h) => h.hour === hour);
    if (lesson) {
      setSelectedLesson(lesson);
      setActiveTab('curriculum');
    }
  };

  const handleAskAIAboutLesson = (lesson: LessonHour) => {
    setSelectedLesson(lesson);
    setActiveTab('ai-tutor');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        completedHoursCount={completedHours.size}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* CURRICULUM VIEW */}
        {activeTab === 'curriculum' && (
          <div className="space-y-8">
            {/* Hero Roadmap Banner */}
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-950 border border-slate-800 p-8 md:p-10 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>100-HOUR MASTER CURRICULUM BLUEPRINT</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  From Neural Net Fundamentals to Production Autonomous Agents
                </h1>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  A structured, mathematically rigorous, and production-tested 100-hour course.
                  Master Linear Algebra, Backprop Autograd, Transformers, FlashAttention, LLM Post-Training (LoRA/DPO), Autonomous ReAct Agents, Multimodal Workflows, and High-Throughput vLLM Serving.
                </p>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 text-center">
                    <span className="text-2xl font-extrabold text-white block">100</span>
                    <span className="text-xs font-mono text-slate-400">Total Hours</span>
                  </div>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 text-center">
                    <span className="text-2xl font-extrabold text-indigo-400 block">6</span>
                    <span className="text-xs font-mono text-slate-400">Core Modules</span>
                  </div>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 text-center">
                    <span className="text-2xl font-extrabold text-emerald-400 block">5</span>
                    <span className="text-xs font-mono text-slate-400">Capstones</span>
                  </div>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 text-center">
                    <span className="text-2xl font-extrabold text-cyan-400 block">100</span>
                    <span className="text-xs font-mono text-slate-400">Hands-on Labs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 6 Modules Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {MODULES.map((m) => {
                const completedInModule = ALL_HOURS.filter(
                  (h) => h.moduleIndex === m.id && completedHours.has(h.hour)
                ).length;
                const totalInModule = m.endHour - m.startHour + 1;
                const progressPct = Math.round((completedInModule / totalInModule) * 100);

                return (
                  <div
                    key={m.id}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between hover:border-slate-700 transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-950 border border-slate-800 text-indigo-400">
                          {m.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400 font-semibold">
                          {m.hoursRange.split(' ')[0]}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-1.5">{m.shortTitle}</h3>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                        {m.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 space-y-2">
                      <div className="flex justify-between text-[11px] font-mono text-slate-400">
                        <span>Milestone Capstone: H{m.capstoneProject.hour}</span>
                        <span className="text-emerald-400 font-bold">{progressPct}%</span>
                      </div>
                      <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-800">
                        <div
                          className="bg-indigo-500 h-full rounded-full transition-all duration-300"
                          style={{ width: `${progressPct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Curriculum Explorer */}
            <CurriculumExplorer
              onSelectLesson={setSelectedLesson}
              completedHours={completedHours}
              onToggleComplete={handleToggleComplete}
              bookmarkedHours={bookmarkedHours}
              onToggleBookmark={handleToggleBookmark}
            />
          </div>
        )}

        {/* ARCHITECTURE SIMULATORS */}
        {activeTab === 'visualizers' && <ArchitectureVisualizers />}

        {/* AI MASTER TUTOR & CODE AUDIT */}
        {activeTab === 'ai-tutor' && <AITutorPanel currentHour={selectedLesson} />}

        {/* PRODUCTION CODE LAB */}
        {activeTab === 'code-lab' && <CodeLab />}

        {/* CAPSTONE MILESTONES */}
        {activeTab === 'capstones' && <CapstonesView onJumpToHour={handleJumpToHour} />}

        {/* STUDY PACING & SCHEDULER */}
        {activeTab === 'study-plan' && (
          <StudyPlanner
            completedHours={completedHours}
            onResetProgress={handleResetProgress}
            onSeedDemoProgress={handleSeedDemoProgress}
          />
        )}
      </main>

      {/* Lesson Detail Modal */}
      {selectedLesson && (
        <LessonDetailModal
          lesson={selectedLesson}
          onClose={() => setSelectedLesson(null)}
          isCompleted={completedHours.has(selectedLesson.hour)}
          onToggleComplete={handleToggleComplete}
          onAskAI={handleAskAIAboutLesson}
          onOpenQuiz={(l) => setQuizLesson(l)}
        />
      )}

      {/* Quiz Modal */}
      {quizLesson && (
        <QuizModal
          lesson={quizLesson}
          onClose={() => setQuizLesson(null)}
          onMarkHourComplete={(h) => handleToggleComplete(h)}
        />
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950/80 py-8 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            NeuroCraft 100H AI Curriculum Engine • Built with React, TypeScript & Tailwind CSS
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Powered by Gemini 3.8 Flash</span>
            <span>•</span>
            <span>100 Hours of Rigorous AI Engineering</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
