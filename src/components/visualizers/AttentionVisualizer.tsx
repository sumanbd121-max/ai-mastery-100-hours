import React, { useState, useMemo } from 'react';
import { Eye, Shield, Sliders, Sparkles, ArrowRight, Layers } from 'lucide-react';

export const AttentionVisualizer: React.FC = () => {
  const tokens = ['The', 'autonomous', 'agent', 'executes', 'actions'];
  const [selectedTokenIdx, setSelectedTokenIdx] = useState<number>(2); // 'agent' by default
  const [isCausal, setIsCausal] = useState<boolean>(true); // Causal mask toggle
  const [temperature, setTemperature] = useState<number>(1.0); // Temperature scaling

  // Dimension d_k
  const d_k = 64;
  const sqrt_dk = Math.sqrt(d_k); // 8.0

  // Simulated query-key raw affinities before scaling
  // [row: query token, col: key token]
  const rawAffinities = useMemo(() => [
    [18.4, 6.2, 5.1, 3.2, 1.1],   // The
    [8.2, 22.1, 19.5, 9.4, 7.8],  // autonomous
    [7.5, 21.0, 24.8, 14.2, 10.5], // agent
    [4.1, 8.5, 18.2, 25.4, 21.8], // executes
    [2.3, 6.1, 12.4, 22.7, 26.5], // actions
  ], []);

  // Compute scaled dot-product and softmax
  const attentionMatrix = useMemo(() => {
    return rawAffinities.map((row, qIdx) => {
      // 1. Scale by sqrt(d_k) and temperature
      const scaled = row.map((val, kIdx) => {
        // Causal mask: future tokens (kIdx > qIdx) become -infinity
        if (isCausal && kIdx > qIdx) {
          return -1e9;
        }
        return val / (sqrt_dk * temperature);
      });

      // 2. Softmax: exp(z - max) / sum
      const maxVal = Math.max(...scaled);
      const exps = scaled.map((z) => Math.exp(z - maxVal));
      const sumExps = exps.reduce((acc, v) => acc + v, 0);

      return exps.map((expVal) => expVal / sumExps);
    });
  }, [rawAffinities, isCausal, sqrt_dk, temperature]);

  const activeRow = attentionMatrix[selectedTokenIdx];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-violet-500/10 text-violet-400">
              <Layers className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-bold text-white">Transformer Attention Head Mechanics</h3>
          </div>
          <p className="text-slate-400 text-sm mt-1">
            Interactive verification of Attention(Q, K, V) = softmax((Q · K^T) / √d_k) · V with causal masking.
          </p>
        </div>

        {/* Causal Masking Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsCausal(!isCausal)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
              isCausal
                ? 'bg-violet-600/20 text-violet-300 border-violet-500/50 shadow-lg shadow-violet-600/20'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>{isCausal ? 'Causal Mask (GPT / Llama Decoder)' : 'Bidirectional (BERT Encoder)'}</span>
          </button>
        </div>
      </div>

      {/* Interactive Controls & Tokens */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6">
        {/* Token Selector & Attention Bar Distribution */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Select Active Query Token (Q_i):
          </div>

          <div className="flex flex-wrap gap-2">
            {tokens.map((tok, idx) => (
              <button
                key={tok}
                onClick={() => setSelectedTokenIdx(idx)}
                className={`px-3.5 py-2 rounded-xl text-sm font-mono font-medium transition-all ${
                  selectedTokenIdx === idx
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30 ring-2 ring-violet-400/50 scale-105'
                    : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                [{idx}] "{tok}"
              </button>
            ))}
          </div>

          {/* Attention Weights for Selected Token */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mt-4 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>ATTENTION WEIGHTS FROM "{tokens[selectedTokenIdx]}"</span>
              <span className="text-violet-400">Sum = 100%</span>
            </div>

            {tokens.map((tok, kIdx) => {
              const weight = activeRow[kIdx];
              const isFutureMasked = isCausal && kIdx > selectedTokenIdx;

              return (
                <div key={tok} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className={isFutureMasked ? 'text-slate-600 line-through' : 'text-slate-300'}>
                      → Key: "{tok}"
                    </span>
                    <span className={isFutureMasked ? 'text-slate-600' : 'text-violet-300 font-bold'}>
                      {isFutureMasked ? 'MASKED (-∞)' : `${(weight * 100).toFixed(1)}%`}
                    </span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800/80">
                    <div
                      className={`h-full transition-all duration-300 rounded-full ${
                        isFutureMasked
                          ? 'bg-slate-800'
                          : 'bg-gradient-to-r from-violet-600 to-indigo-400'
                      }`}
                      style={{ width: `${isFutureMasked ? 0 : weight * 100}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Temperature Slider */}
          <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-xs">
            <div className="flex justify-between items-center mb-1 text-slate-400">
              <span className="flex items-center gap-1.5 font-mono">
                <Sliders className="w-3.5 h-3.5 text-violet-400" />
                Softmax Temperature τ:
              </span>
              <span className="font-mono font-bold text-violet-300">{temperature.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.3"
              max="2.5"
              step="0.05"
              value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              className="w-full accent-violet-500 bg-slate-800 rounded-lg h-2 cursor-pointer mt-1"
            />
            <p className="text-[11px] text-slate-500 mt-2">
              Higher τ softens the distribution (more uniform attention); lower τ peaks toward argmax (greedy).
            </p>
          </div>
        </div>

        {/* 2D Attention Heatmap Grid */}
        <div className="lg:col-span-7 bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col items-center">
          <div className="flex items-center justify-between w-full mb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Eye className="w-4 h-4 text-violet-400" />
              <span>Full Cross-Token Heatmap Matrix [5×5]</span>
            </div>
            <div className="text-[11px] font-mono text-slate-500">
              Rows: Query (Q) · Cols: Key (K)
            </div>
          </div>

          {/* Matrix Container */}
          <div className="inline-block border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
            {/* Column Header (Keys) */}
            <div className="flex bg-slate-900 border-b border-slate-800">
              <div className="w-20 p-2 text-[11px] font-mono text-slate-500 text-center font-bold">
                Q \ K
              </div>
              {tokens.map((tok, kIdx) => (
                <div
                  key={tok}
                  className="w-16 p-2 text-[11px] font-mono text-slate-400 text-center truncate border-l border-slate-800/60 font-semibold"
                  title={tok}
                >
                  {tok}
                </div>
              ))}
            </div>

            {/* Matrix Rows */}
            {attentionMatrix.map((row, qIdx) => {
              const isSelectedRow = qIdx === selectedTokenIdx;

              return (
                <div
                  key={qIdx}
                  className={`flex border-b border-slate-800/40 transition-colors ${
                    isSelectedRow ? 'bg-violet-950/40 ring-1 ring-violet-500/50' : 'hover:bg-slate-900/40'
                  }`}
                >
                  {/* Row Header (Query) */}
                  <div
                    onClick={() => setSelectedTokenIdx(qIdx)}
                    className={`w-20 p-2 text-[11px] font-mono truncate cursor-pointer flex items-center justify-between px-2 font-semibold ${
                      isSelectedRow ? 'text-violet-300 font-bold' : 'text-slate-400'
                    }`}
                  >
                    <span>{tokens[qIdx]}</span>
                    {isSelectedRow && <ArrowRight className="w-3 h-3 text-violet-400" />}
                  </div>

                  {/* Matrix Cells */}
                  {row.map((score, kIdx) => {
                    const isMasked = isCausal && kIdx > qIdx;
                    const opacity = isMasked ? 0 : Math.min(1, Math.max(0.08, score * 1.3));

                    return (
                      <div
                        key={kIdx}
                        className={`w-16 h-12 flex items-center justify-center font-mono text-xs border-l border-slate-800/50 transition-all ${
                          isMasked
                            ? 'bg-slate-950 text-slate-700'
                            : 'text-white font-medium hover:scale-105'
                        }`}
                        style={{
                          backgroundColor: isMasked
                            ? 'rgba(15, 23, 42, 0.9)'
                            : `rgba(129, 140, 248, ${opacity})`,
                        }}
                        title={`Q("${tokens[qIdx]}") -> K("${tokens[kIdx]}") = ${(score * 100).toFixed(1)}%`}
                      >
                        {isMasked ? '0' : `${(score * 100).toFixed(0)}%`}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mt-4">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-slate-950 border border-slate-700 inline-block" />
              <span>Masked (No Future Lookahead)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-violet-600 inline-block" />
              <span>High Attention Weight</span>
            </span>
          </div>
        </div>
      </div>

      {/* Equation Breakdown Box */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-xs font-mono text-slate-300">
        <div className="text-violet-400 font-semibold mb-1 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" />
          <span>Architectural Insight: Why Scale by 1/√d_k?</span>
        </div>
        <p className="text-slate-400 leading-relaxed">
          For head dimension d_k = {d_k}, scaling divisor √d_k = {sqrt_dk}. When computing the dot product q · k = ∑ q_i · k_i, if components have mean 0 and variance 1, their sum has variance equal to d_k = {d_k} and standard deviation {sqrt_dk}. Dividing by {sqrt_dk} restores the variance to 1.0, preserving gradient stability inside the softmax layer!
        </p>
      </div>
    </div>
  );
};
