import React, { useState } from 'react';
import { Bot, Play, Pause, SkipForward, RotateCcw, CheckCircle2, Wrench, Brain, Eye, Terminal } from 'lucide-react';

interface Step {
  id: number;
  type: 'Thought' | 'Action' | 'Observation' | 'Final Answer';
  title: string;
  detail: string;
  tool?: string;
  params?: string;
  output?: string;
}

const PRESET_GOALS = [
  {
    id: 'customer_churn',
    title: 'Analyze Q3 Churn & Send Slack Alert',
    steps: [
      {
        id: 1,
        type: 'Thought' as const,
        title: 'Formulate Query Plan',
        detail: 'I need to retrieve high-churn customer accounts from the PostgreSQL database, compute the quarterly rate, and post a report to the #growth Slack channel.',
      },
      {
        id: 2,
        type: 'Action' as const,
        title: 'Invoke SQL Database Tool',
        detail: 'Executing analytical SQL query on customers table.',
        tool: 'cloudsql_query',
        params: 'SELECT COUNT(*) as churned FROM accounts WHERE status = "churned" AND churn_date >= "2026-07-01";',
      },
      {
        id: 3,
        type: 'Observation' as const,
        title: 'Database Query Results Received',
        detail: 'Query returned 412 churned enterprise accounts out of 8,500 total active.',
        output: '{"churned": 412, "active_total": 8500, "churn_rate_pct": 4.84}',
      },
      {
        id: 4,
        type: 'Thought' as const,
        title: 'Evaluate Metric Against SLA Threshold',
        detail: 'The churn rate of 4.84% is below the 5.0% threshold alert ceiling, but up 0.3% from Q2. I will format a structured Slack notification with root cause breakdown.',
      },
      {
        id: 5,
        type: 'Action' as const,
        title: 'Invoke Webhook Dispatcher',
        detail: 'Dispatching formatted Slack notification payload.',
        tool: 'slack_webhook',
        params: 'channel: "#growth", message: "📊 Q3 Churn Report: 4.84% (412 accounts). Status: GREEN."',
      },
      {
        id: 6,
        type: 'Observation' as const,
        title: 'Webhook Acknowledgment',
        detail: 'HTTP 200 OK received from Slack API gateway.',
        output: '{"status": "delivered", "message_ts": "1728345902.001900"}',
      },
      {
        id: 7,
        type: 'Final Answer' as const,
        title: 'Task Successfully Completed',
        detail: 'Q3 customer churn was computed at 4.84% and the leadership report was successfully broadcast to #growth without manual intervention.',
      },
    ],
  },
  {
    id: 'debug_pipeline',
    title: 'Self-Healing Python Code Execution',
    steps: [
      {
        id: 1,
        type: 'Thought' as const,
        title: 'Examine Test Failure Log',
        detail: 'PyTest reported an IndexError on line 42 of `attention.py`. Let me inspect the tensor dimension shapes.',
      },
      {
        id: 2,
        type: 'Action' as const,
        title: 'Read Source File',
        detail: 'Inspecting attention.py using file viewer tool.',
        tool: 'file_read',
        params: 'path: "src/attention.py", line_range: [35, 50]',
      },
      {
        id: 3,
        type: 'Observation' as const,
        title: 'File Contents Retrieved',
        detail: 'Found tensor reshape mismatch: `scores.view(batch, num_heads, -1)` failed because head_dim was missing.',
        output: 'Line 42: `scores = scores.view(b, heads, seq, -1)` (Error: invalid shape for seq_len)',
      },
      {
        id: 4,
        type: 'Thought' as const,
        title: 'Formulate Patch & Test',
        detail: 'The correct reshape requires explicit `d_k = d_model // num_heads`. I will apply a patch and re-run PyTest in the sandbox.',
      },
      {
        id: 5,
        type: 'Action' as const,
        title: 'Execute PyTest in Sandbox',
        detail: 'Running test suite in ephemeral Docker sandbox.',
        tool: 'sandbox_exec',
        params: 'cmd: "pytest tests/test_attention.py -v"',
      },
      {
        id: 6,
        type: 'Observation' as const,
        title: 'Test Suite Result',
        detail: 'All 8 unit tests passed with 100% coverage.',
        output: 'PASSED tests/test_attention.py::test_causal_mask [100%]',
      },
      {
        id: 7,
        type: 'Final Answer' as const,
        title: 'Self-Healed Bug & Created PR',
        detail: 'Identified the tensor view dimension bug, applied the fix, verified all tests pass, and created PR #149.',
      },
    ],
  },
];

export const AgentLoopVisualizer: React.FC = () => {
  const [activeGoalIdx, setActiveGoalIdx] = useState<number>(0);
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const goal = PRESET_GOALS[activeGoalIdx];
  const totalSteps = goal.steps.length;

  const handleNext = () => {
    if (currentStepIdx < totalSteps - 1) {
      setCurrentStepIdx((prev) => prev + 1);
    } else {
      setIsPlaying(false);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStepIdx(0);
  };

  // Play loop
  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        if (currentStepIdx < totalSteps - 1) {
          setCurrentStepIdx((prev) => prev + 1);
        } else {
          setIsPlaying(false);
        }
      }, 1600);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStepIdx, totalSteps]);

  const currentStep = goal.steps[currentStepIdx];

  const getStepIcon = (type: Step['type']) => {
    switch (type) {
      case 'Thought':
        return <Brain className="w-4 h-4 text-amber-400" />;
      case 'Action':
        return <Wrench className="w-4 h-4 text-cyan-400" />;
      case 'Observation':
        return <Eye className="w-4 h-4 text-emerald-400" />;
      case 'Final Answer':
        return <CheckCircle2 className="w-4 h-4 text-indigo-400" />;
    }
  };

  const getStepBadgeColor = (type: Step['type']) => {
    switch (type) {
      case 'Thought':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'Action':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'Observation':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Final Answer':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
              <Bot className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-bold text-white">Autonomous ReAct Agent Loop Simulator</h3>
          </div>
          <p className="text-slate-400 text-sm mt-1">
            Visual state machine tracing: Thought → Action (Tool Call) → Observation → Reflection → Final Answer.
          </p>
        </div>

        {/* Goal Selector */}
        <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          {PRESET_GOALS.map((g, idx) => (
            <button
              key={g.id}
              onClick={() => {
                setActiveGoalIdx(idx);
                handleReset();
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeGoalIdx === idx
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {g.title}
            </button>
          ))}
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex items-center justify-between py-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-lg ${
              isPlaying
                ? 'bg-rose-600 text-white hover:bg-rose-500 shadow-rose-600/20'
                : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-600/20'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isPlaying ? 'Pause Loop' : 'Run Auto Trace'}</span>
          </button>

          <button
            onClick={handleNext}
            disabled={currentStepIdx >= totalSteps - 1}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
          >
            <SkipForward className="w-3.5 h-3.5" />
            <span>Step Forward</span>
          </button>

          <button
            onClick={handleReset}
            className="p-2 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl transition-colors"
            title="Reset to Step 1"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span>PROGRESS:</span>
          <span className="font-bold text-white">Step {currentStepIdx + 1}</span>
          <span className="text-slate-600">/</span>
          <span>{totalSteps}</span>
        </div>
      </div>

      {/* Main Execution Timeline & Active State Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6">
        {/* Step-by-Step Interactive Timeline */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
            Execution Scratchpad History:
          </div>

          <div className="space-y-2 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
            {goal.steps.map((st, idx) => {
              const isActive = idx === currentStepIdx;
              const isPassed = idx < currentStepIdx;

              return (
                <div
                  key={st.id}
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentStepIdx(idx);
                  }}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    isActive
                      ? 'bg-slate-800/90 border-amber-500/60 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/40'
                      : isPassed
                      ? 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      : 'bg-slate-950/20 border-slate-800/40 text-slate-600 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono border ${getStepBadgeColor(
                        st.type
                      )}`}
                    >
                      {getStepIcon(st.type)}
                      <span>{st.type}</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">#{st.id}</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-1">{st.title}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Step Deep Inspector */}
        <div className="lg:col-span-7 bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-bold border ${getStepBadgeColor(
                    currentStep.type
                  )}`}
                >
                  {getStepIcon(currentStep.type)}
                  <span>{currentStep.type.toUpperCase()}</span>
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Step {currentStep.id} of {totalSteps}
                </span>
              </div>
              <span className="text-xs font-mono text-amber-400 font-semibold">
                Autonomous Agent Runtime
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <h4 className="text-base font-bold text-white mb-1.5">{currentStep.title}</h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                  {currentStep.detail}
                </p>
              </div>

              {/* Action specifics if type is Action */}
              {currentStep.type === 'Action' && (
                <div className="bg-cyan-950/20 border border-cyan-800/40 p-4 rounded-xl space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-cyan-400 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" /> Deterministic Tool Call:
                    </span>
                    <span className="bg-cyan-900/40 px-2 py-0.5 rounded text-cyan-200 font-bold">
                      {currentStep.tool}()
                    </span>
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-lg text-cyan-200/90 break-all border border-cyan-900/30">
                    {currentStep.params}
                  </div>
                </div>
              )}

              {/* Observation output if type is Observation */}
              {currentStep.type === 'Observation' && (
                <div className="bg-emerald-950/20 border border-emerald-800/40 p-4 rounded-xl space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-emerald-400 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Environment Tool Output:
                    </span>
                    <span className="text-emerald-500 text-[11px]">Returned from sandbox</span>
                  </div>
                  <pre className="p-2.5 bg-slate-900 rounded-lg text-emerald-300/90 overflow-x-auto border border-emerald-900/30">
                    {currentStep.output}
                  </pre>
                </div>
              )}

              {/* Final answer banner */}
              {currentStep.type === 'Final Answer' && (
                <div className="bg-indigo-950/40 border border-indigo-700/50 p-4 rounded-xl text-xs font-mono text-indigo-200">
                  <span className="text-indigo-400 font-bold block mb-1">
                    ✓ Goal Condition Satisfied
                  </span>
                  Loop successfully exited without exceeding maximum execution step ceiling (max_steps = 10).
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>LangGraph Cycle Guard: ACTIVE</span>
            <span>Timeout: 3000ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};
