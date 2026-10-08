import React, { useState } from 'react';
import { Send, Sparkles, Bot, Code2, BookOpen, Check, Copy, AlertCircle, RefreshCw, Terminal, Layers } from 'lucide-react';
import { LessonHour } from '../types/curriculum';

interface AITutorPanelProps {
  currentHour?: LessonHour | null;
}

type TutorMode = 'explain' | 'deep-dive' | 'code-review' | 'architecture';

export const AITutorPanel: React.FC<AITutorPanelProps> = ({ currentHour }) => {
  const [activeTab, setActiveTab] = useState<'chat' | 'code-review'>('chat');
  const [inputMessage, setInputMessage] = useState<string>('');
  const [tutorMode, setTutorMode] = useState<TutorMode>('explain');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  // Chat messages
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string; model?: string }>>([
    {
      role: 'assistant',
      content: `### Welcome to NeuroCraft AI Master Tutor 👋

I am your personal Principal AI Research Scientist and Staff ML Engineer for this 100-hour journey.

${currentHour ? `Currently focused on **Hour ${currentHour.hour}: ${currentHour.title}**.` : 'You can ask me to explain any concept, derive equations, debug PyTorch/LLM code, or review production deployment architectures.'}

How would you like to begin?`,
      model: 'gemini-3.8-flash'
    }
  ]);

  // Code reviewer state
  const [codeToReview, setCodeToReview] = useState<string>(
    currentHour?.codeSnippet?.code || `import torch
import torch.nn as nn

def self_attention(q, k, v, mask=None):
    # Calculate raw affinity scores
    scores = torch.matmul(q, k.transpose(-2, -1)) / (q.size(-1) ** 0.5)
    if mask is not None:
        scores = scores.masked_fill(mask == 0, -1e9)
    weights = torch.softmax(scores, dim=-1)
    return torch.matmul(weights, v)`
  );
  const [codeLanguage, setCodeLanguage] = useState<string>('python');
  const [reviewResult, setReviewResult] = useState<string | null>(null);
  const [isReviewing, setIsReviewing] = useState<boolean>(false);

  // Pre-made prompts
  const samplePrompts = [
    'Explain the KV-Cache memory footprint and how PagedAttention solves fragmentation',
    'Derive the Rotary Position Embedding (RoPE) formula and why it preserves relative distances',
    'How do I build a production-grade ReAct agent loop in LangGraph with loop detection?',
    'What is the difference between DPO and RLHF with PPO in modern LLM post-training?'
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim() || isLoading) return;

    const userMsg = { role: 'user' as const, content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/tutor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          context: currentHour ? { hour: currentHour.hour, title: currentHour.title, overview: currentHour.overview } : null,
          mode: tutorMode,
        }),
      });

      const data = await response.json();
      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: data.reply, model: data.model },
        ]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `⚠️ **Note:** Server request encountered an issue (${err.message}). In live production, Gemini 3.8 Flash answers all architectural, mathematical, and implementation queries seamlessly.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReviewCode = async () => {
    if (!codeToReview.trim() || isReviewing) return;
    setIsReviewing(true);
    setReviewResult(null);

    try {
      const response = await fetch('/api/tutor/review-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: codeToReview,
          language: codeLanguage,
          task: 'Staff Engineer audit for memory leaks, numerical stability, and high-throughput production serving',
        }),
      });

      const data = await response.json();
      setReviewResult(data.analysis || 'Code review completed.');
    } catch (err: any) {
      setReviewResult(`Error running code review: ${err.message}`);
    } finally {
      setIsReviewing(false);
    }
  };

  const copyToClipboard = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl flex flex-col h-[750px] overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-base">NeuroCraft AI Tutor & Reviewer</h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Gemini 3.8 Flash
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {currentHour ? `Grounding: Hour ${currentHour.hour} (${currentHour.title})` : 'Universal AI Curriculum Mentor'}
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'chat'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Tutor</span>
          </button>
          <button
            onClick={() => setActiveTab('code-review')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'code-review'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Code Audit Lab</span>
          </button>
        </div>
      </div>

      {/* CHAT TAB */}
      {activeTab === 'chat' && (
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Mode Selector */}
          <div className="px-4 py-2.5 bg-slate-950/40 border-b border-slate-800 flex items-center justify-between text-xs overflow-x-auto gap-2">
            <span className="text-slate-400 font-mono text-[11px] whitespace-nowrap">Tutor Lens:</span>
            <div className="flex items-center gap-1.5">
              {[
                { id: 'explain', label: 'Intuitive Teacher' },
                { id: 'deep-dive', label: 'Staff Deep Dive' },
                { id: 'architecture', label: 'System Architect' },
                { id: 'code-review', label: 'PyTorch Optimizer' },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setTutorMode(m.id as TutorMode)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                    tutorMode === m.id
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0 mt-1">
                    <Sparkles className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-br-none shadow-md'
                      : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-bl-none shadow-lg'
                  }`}
                >
                  <div className="whitespace-pre-wrap font-sans space-y-2">
                    {msg.content}
                  </div>

                  {msg.role === 'assistant' && (
                    <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <span>Model: {msg.model || 'gemini-3.8-flash'}</span>
                      <button
                        onClick={() => copyToClipboard(msg.content, idx)}
                        className="hover:text-slate-300 flex items-center gap-1 transition-colors"
                      >
                        {copiedIdx === idx ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedIdx === idx ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 items-center text-slate-400 text-xs font-mono p-3 bg-slate-950/40 rounded-xl border border-slate-800/60 w-fit">
                <RefreshCw className="w-4 h-4 text-indigo-400 animate-spin" />
                <span>NeuroCraft Tutor synthesizing deep response...</span>
              </div>
            )}
          </div>

          {/* Prompt Chips */}
          <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800/60 overflow-x-auto flex gap-2">
            {samplePrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(p)}
                className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-[11px] text-slate-400 hover:text-slate-200 whitespace-nowrap transition-colors"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-4 bg-slate-950 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder={currentHour ? `Ask about Hour ${currentHour.hour}: ${currentHour.title}...` : 'Ask any AI, Deep Learning, Agent or Deployment question...'}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                disabled={isLoading}
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-sans"
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white text-sm font-semibold rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/20"
              >
                <Send className="w-4 h-4" />
                <span>Send</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CODE REVIEW TAB */}
      {activeTab === 'code-review' && (
        <div className="flex-1 flex flex-col p-4 overflow-hidden space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 uppercase font-semibold">
                Language:
              </span>
              <select
                value={codeLanguage}
                onChange={(e) => setCodeLanguage(e.target.value)}
                className="bg-slate-950 border border-slate-800 text-xs text-slate-300 rounded-lg px-2.5 py-1 font-mono focus:outline-none"
              >
                <option value="python">Python / PyTorch</option>
                <option value="typescript">TypeScript / Next.js</option>
                <option value="bash">Bash / Docker / vLLM</option>
              </select>
            </div>

            <button
              onClick={handleReviewCode}
              disabled={isReviewing || !codeToReview.trim()}
              className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-all shadow-md"
            >
              {isReviewing ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Auditing...</span>
                </>
              ) : (
                <>
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Run Senior Staff Audit</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 overflow-hidden">
            {/* Editor Input */}
            <div className="flex flex-col bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
              <div className="px-3 py-2 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>Code Buffer</span>
                <span className="text-[11px] text-slate-500">Edit or paste your code</span>
              </div>
              <textarea
                value={codeToReview}
                onChange={(e) => setCodeToReview(e.target.value)}
                className="flex-1 p-3 bg-transparent text-xs font-mono text-emerald-300 resize-none focus:outline-none custom-scrollbar leading-relaxed"
                placeholder="Paste your PyTorch model, agent loop, or RAG retriever script here..."
              />
            </div>

            {/* Audit Output */}
            <div className="flex flex-col bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
              <div className="px-3 py-2 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>Senior Staff Review & Optimization Report</span>
                <span className="text-[11px] text-indigo-400 font-semibold">Gemini 3.8 Flash</span>
              </div>
              <div className="flex-1 p-4 overflow-y-auto text-xs text-slate-200 font-mono whitespace-pre-wrap leading-relaxed custom-scrollbar">
                {isReviewing ? (
                  <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-2">
                    <RefreshCw className="w-5 h-5 text-indigo-400 animate-spin" />
                    <span>Analyzing tensor allocations, gradient paths, and latency bottlenecks...</span>
                  </div>
                ) : reviewResult ? (
                  reviewResult
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-slate-500 text-center p-6">
                    <Terminal className="w-8 h-8 text-slate-700 mb-2" />
                    <p>Click "Run Senior Staff Audit" to evaluate this code for numerical stability, memory efficiency, and production readiness.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
