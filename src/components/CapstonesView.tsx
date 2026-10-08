import React from 'react';
import { Award, Terminal, CheckCircle2, Shield, Layers, Rocket, ArrowRight, BookOpen } from 'lucide-react';
import { CAPSTONE_PROJECTS } from '../data/curriculum';

interface CapstonesViewProps {
  onJumpToHour: (hour: number) => void;
}

export const CapstonesView: React.FC<CapstonesViewProps> = ({ onJumpToHour }) => {
  return (
    <div className="space-y-8">
      {/* Introduction Banner */}
      <div className="bg-gradient-to-r from-indigo-950/60 via-slate-900 to-slate-900 border border-indigo-800/40 rounded-3xl p-8 relative overflow-hidden">
        <div className="max-w-2xl space-y-3 z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>5 PRODUCTION MILESTONE CAPSTONES</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Proof of Mastery: Production-Grade Projects
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            True capability in AI, Generative AI, and Agent Engineering cannot be learned through passive reading. These 5 cumulative capstones force you to implement foundational mathematics, write low-level PyTorch kernels, assemble state-machine multi-agent swarms, and deploy high-throughput serving clusters.
          </p>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {CAPSTONE_PROJECTS.map((capstone, idx) => (
          <div
            key={capstone.id}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl space-y-6"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-bold">
                    Milestone #{idx + 1}
                  </span>
                  <span className="text-amber-400 font-bold">Delivered at Hour {capstone.hour}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400">{capstone.moduleTitle}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-1">{capstone.title}</h3>
              </div>

              <button
                onClick={() => onJumpToHour(capstone.hour)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 flex items-center gap-2 transition-all w-fit"
              >
                <span>Jump to Hour {capstone.hour}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Overview */}
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
              {capstone.overview}
            </p>

            {/* Grid Breakdown: Architecture & Tech Stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Architecture Blueprint */}
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4" /> System Architecture Blueprint
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {capstone.systemArchitecture.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack & Required Deliverables */}
              <div className="space-y-4">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                    <Terminal className="w-4 h-4" /> Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {capstone.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Repository Deliverables
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                    {capstone.deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Staff Evaluation Rubric */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-4 h-4" /> Senior Staff Grading Rubric
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {capstone.rubric.map((r, i) => (
                  <div
                    key={i}
                    className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs space-y-1"
                  >
                    <div className="flex justify-between font-bold text-slate-200">
                      <span>{r.criterion}</span>
                      <span className="text-amber-400 font-mono">{r.weight}</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">{r.standard}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
