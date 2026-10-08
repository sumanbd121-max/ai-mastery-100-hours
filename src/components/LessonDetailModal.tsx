import React, { useState } from 'react';
import { X, Check, Copy, Sparkles, Brain, CheckCircle2, AlertTriangle, ShieldCheck, Terminal, BookOpen, Layers } from 'lucide-react';
import { LessonHour } from '../types/curriculum';

interface LessonDetailModalProps {
  lesson: LessonHour | null;
  onClose: () => void;
  isCompleted: boolean;
  onToggleComplete: (hour: number) => void;
  onAskAI: (lesson: LessonHour) => void;
  onOpenQuiz: (lesson: LessonHour) => void;
}

export const LessonDetailModal: React.FC<LessonDetailModalProps> = ({
  lesson,
  onClose,
  isCompleted,
  onToggleComplete,
  onAskAI,
  onOpenQuiz,
}) => {
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  if (!lesson) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(lesson.codeSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const getLevelBadgeClass = (level: LessonHour['level']) => {
    switch (level) {
      case 'Beginner':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Intermediate':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Advanced':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'Expert':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 md:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/90 flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-lg font-mono font-bold bg-indigo-600 text-white">
                Hour {lesson.hour} of 100
              </span>
              <span className="text-slate-400 font-mono">Module {lesson.moduleIndex}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400 font-mono">{lesson.chapter}</span>
              <span className={`px-2 py-0.5 rounded-full border text-[11px] font-semibold ${getLevelBadgeClass(lesson.level)}`}>
                {lesson.level}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">{lesson.title}</h2>
            <p className="text-slate-400 text-sm">{lesson.subtitle}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleComplete(lesson.hour)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                isCompleted
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/30'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isCompleted ? 'Completed' : 'Mark Done'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Scroll Area */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 custom-scrollbar text-sm text-slate-300">
          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-indigo-950/20 border border-indigo-800/40 rounded-2xl">
            <div className="flex items-center gap-2 text-indigo-300 text-xs">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Ready for hands-on learning with Gemini AI?</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  onAskAI(lesson);
                  onClose();
                }}
                className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-md transition-all"
              >
                <Brain className="w-3.5 h-3.5" />
                <span>Teach Me With AI Tutor</span>
              </button>

              <button
                onClick={() => {
                  onOpenQuiz(lesson);
                  onClose();
                }}
                className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl flex items-center gap-1.5 border border-slate-700 transition-all"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Take Knowledge Quiz</span>
              </button>
            </div>
          </div>

          {/* Overview & Key Concepts */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>Lesson Overview</span>
            </h3>
            <p className="text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              {lesson.overview}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-3">
              {lesson.keyConcepts.map((concept, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 p-3 bg-slate-950 rounded-xl border border-slate-800/80 text-xs text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                  <span>{concept}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mathematical & Architectural Rigor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" /> Mathematical Formulation
              </div>
              <p className="text-xs text-slate-300 font-mono leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                {lesson.mathAndTheory}
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> Architectural Invariant
              </div>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                {lesson.architecturalInsight}
              </p>
            </div>
          </div>

          {/* Production Code Snippet */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                {lesson.codeSnippet.filename} ({lesson.codeSnippet.language})
              </span>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
              <pre className="p-4 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed custom-scrollbar">
                {lesson.codeSnippet.code}
              </pre>
            </div>
            <p className="text-xs text-slate-500 italic">{lesson.codeSnippet.description}</p>
          </div>

          {/* Hands-On Lab Exercise */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-amber-400" />
                <span>Hands-On Lab: {lesson.handsOnLab.title}</span>
              </h4>
              <span className="text-xs font-mono text-amber-400 font-semibold">60-Min Practice</span>
            </div>
            <p className="text-xs text-slate-300">{lesson.handsOnLab.goal}</p>

            <div className="space-y-1.5 text-xs">
              <div className="font-semibold text-slate-400">Step-by-Step Instructions:</div>
              {lesson.handsOnLab.steps.map((st, i) => (
                <div key={i} className="flex items-start gap-2 text-slate-300 pl-1">
                  <span className="font-mono text-indigo-400 font-bold">{i + 1}.</span>
                  <span>{st}</span>
                </div>
              ))}
            </div>

            <div className="p-2.5 bg-slate-900 rounded-lg text-xs font-mono text-amber-300 border border-slate-800">
              <span className="text-slate-500">Deliverable: </span>
              {lesson.handsOnLab.deliverable}
            </div>
          </div>

          {/* Production Checklist & Anti-Patterns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-950/20 border border-emerald-900/40 p-4 rounded-xl space-y-2">
              <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 uppercase font-mono">
                <ShieldCheck className="w-4 h-4" /> Production Checklist
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {lesson.productionChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-rose-950/20 border border-rose-900/40 p-4 rounded-xl space-y-2">
              <div className="text-xs font-bold text-rose-400 flex items-center gap-1.5 uppercase font-mono">
                <AlertTriangle className="w-4 h-4" /> Anti-Patterns to Avoid
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {lesson.antiPatterns.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold flex-shrink-0">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/90 flex items-center justify-between text-xs text-slate-400">
          <span>Estimated study & lab time: 60 Minutes</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
