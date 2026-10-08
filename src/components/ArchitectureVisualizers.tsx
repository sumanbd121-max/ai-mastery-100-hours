import React, { useState } from 'react';
import { Activity, Layers, Bot, Database } from 'lucide-react';
import { NeuralNetVisualizer } from './visualizers/NeuralNetVisualizer';
import { AttentionVisualizer } from './visualizers/AttentionVisualizer';
import { AgentLoopVisualizer } from './visualizers/AgentLoopVisualizer';
import { RAGVisualizer } from './visualizers/RAGVisualizer';

type VisualizerTab = 'neural-net' | 'attention' | 'agent-loop' | 'rag-flow';

export const ArchitectureVisualizers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<VisualizerTab>('neural-net');

  const tabs = [
    {
      id: 'neural-net' as const,
      label: '1. Neural Net & Activations',
      desc: 'Forward pass & GELU/SiLU math',
      icon: Activity,
      color: 'text-indigo-400',
      activeBg: 'bg-indigo-600',
    },
    {
      id: 'attention' as const,
      label: '2. Transformer Attention Head',
      desc: 'Q K^T / √d_k & causal masking',
      icon: Layers,
      color: 'text-violet-400',
      activeBg: 'bg-violet-600',
    },
    {
      id: 'agent-loop' as const,
      label: '3. ReAct Agent State Loop',
      desc: 'Thought → Tool → Observation',
      icon: Bot,
      color: 'text-amber-400',
      activeBg: 'bg-amber-600',
    },
    {
      id: 'rag-flow' as const,
      label: '4. Enterprise RAG Flow',
      desc: 'Hybrid vector + Cross-Encoder',
      icon: Database,
      color: 'text-emerald-400',
      activeBg: 'bg-emerald-600',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Navigation Sub-Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-slate-950 p-2 rounded-2xl border border-slate-800">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-start gap-3 p-3.5 rounded-xl text-left transition-all ${
                isActive
                  ? `${tab.activeBg} text-white shadow-lg shadow-${tab.activeBg}/25`
                  : 'hover:bg-slate-900 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div
                className={`p-2 rounded-lg ${
                  isActive ? 'bg-white/20 text-white' : `bg-slate-900 ${tab.color}`
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">{tab.label}</div>
                <div
                  className={`text-xs mt-0.5 leading-snug ${
                    isActive ? 'text-white/80' : 'text-slate-500'
                  }`}
                >
                  {tab.desc}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Visualizer Body */}
      <div>
        {activeTab === 'neural-net' && <NeuralNetVisualizer />}
        {activeTab === 'attention' && <AttentionVisualizer />}
        {activeTab === 'agent-loop' && <AgentLoopVisualizer />}
        {activeTab === 'rag-flow' && <RAGVisualizer />}
      </div>
    </div>
  );
};
