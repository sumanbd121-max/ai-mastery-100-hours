import React, { useState, useMemo } from 'react';
import { Play, RotateCcw, Activity, Info, Zap } from 'lucide-react';

type ActivationType = 'relu' | 'gelu' | 'sigmoid' | 'tanh' | 'silu';

export const NeuralNetVisualizer: React.FC = () => {
  const [x1, setX1] = useState<number>(0.8);
  const [x2, setX2] = useState<number>(-0.5);
  const [bias, setBias] = useState<number>(0.1);
  const [activation, setActivation] = useState<ActivationType>('gelu');

  // Weights for hidden layer (2 inputs -> 3 hidden units)
  const [weightsH] = useState<number[][]>([
    [0.7, -0.4],  // h1
    [-0.5, 0.9],  // h2
    [0.6, 0.3],   // h3
  ]);

  // Weights for output layer (3 hidden -> 1 output)
  const [weightsO] = useState<number[]>([0.8, -0.6, 0.5]);

  // Activation functions
  const applyAct = (z: number, act: ActivationType): number => {
    switch (act) {
      case 'relu':
        return Math.max(0, z);
      case 'sigmoid':
        return 1 / (1 + Math.exp(-Math.max(-50, Math.min(50, z))));
      case 'tanh':
        return Math.tanh(z);
      case 'gelu':
        // Approximation: 0.5 * x * (1 + tanh(sqrt(2/pi) * (x + 0.044715 * x^3)))
        return 0.5 * z * (1 + Math.tanh(Math.sqrt(2 / Math.PI) * (z + 0.044715 * Math.pow(z, 3))));
      case 'silu': // Swish
        return z * (1 / (1 + Math.exp(-z)));
      default:
        return z;
    }
  };

  // Calculations
  const computed = useMemo(() => {
    // Hidden layer pre-activations (z = w1*x1 + w2*x2 + b)
    const zHidden = weightsH.map((w) => w[0] * x1 + w[1] * x2 + bias);
    const aHidden = zHidden.map((z) => applyAct(z, activation));

    // Output pre-activation
    const zOut = aHidden.reduce((acc, a, idx) => acc + a * weightsO[idx], 0) + bias;
    const aOut = applyAct(zOut, activation);

    return { zHidden, aHidden, zOut, aOut };
  }, [x1, x2, bias, activation, weightsH, weightsO]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Activity className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-bold text-white">Neural Forward Pass & Activation Simulator</h3>
          </div>
          <p className="text-slate-400 text-sm mt-1">
            Observe continuous tensor projections: Inputs x → Hidden a(1) = σ(W1 · x + b) → Output ŷ.
          </p>
        </div>

        {/* Activation Selector */}
        <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          {(['gelu', 'silu', 'relu', 'sigmoid', 'tanh'] as ActivationType[]).map((act) => (
            <button
              key={act}
              onClick={() => setActivation(act)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg uppercase tracking-wider transition-all ${
                activation === act
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {act}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6 items-center">
        {/* Controls Column */}
        <div className="lg:col-span-4 space-y-5 bg-slate-950/60 p-5 rounded-xl border border-slate-800/80">
          <div className="flex items-center justify-between text-xs font-medium text-slate-400">
            <span>INPUT & BIAS TENSORS</span>
            <button
              onClick={() => { setX1(0.8); setX2(-0.5); setBias(0.1); }}
              className="flex items-center gap-1 hover:text-indigo-400 text-slate-500 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="font-mono text-cyan-400">Input x₁:</span>
              <span className="font-mono font-bold text-white">{x1.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.05"
              value={x1}
              onChange={(e) => setX1(parseFloat(e.target.value))}
              className="w-full accent-cyan-500 bg-slate-800 rounded-lg h-2 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="font-mono text-cyan-400">Input x₂:</span>
              <span className="font-mono font-bold text-white">{x2.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="-2"
              max="2"
              step="0.05"
              value={x2}
              onChange={(e) => setX2(parseFloat(e.target.value))}
              className="w-full accent-cyan-500 bg-slate-800 rounded-lg h-2 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="font-mono text-amber-400">Layer Bias b:</span>
              <span className="font-mono font-bold text-white">{bias.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="-1"
              max="1"
              step="0.05"
              value={bias}
              onChange={(e) => setBias(parseFloat(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 rounded-lg h-2 cursor-pointer"
            />
          </div>

          <div className="p-3 bg-indigo-950/30 border border-indigo-800/40 rounded-lg text-xs text-indigo-300 leading-relaxed">
            <span className="font-semibold text-indigo-200">Activation Note:</span>{' '}
            {activation === 'gelu' && 'GELU (used in GPT, BERT, Claude) weights inputs by their standard Gaussian CDF, smoothly gating small negative values.'}
            {activation === 'silu' && 'SiLU / Swish (used in Llama 3 SwiGLU) multiplies input by its sigmoid, creating a smooth self-gated non-linearity.'}
            {activation === 'relu' && 'ReLU hard-clips all negative values to zero. Fast, but vulnerable to dead neuron collapse if learning rate is too large.'}
            {activation === 'sigmoid' && 'Sigmoid squashes to (0, 1). Saturates quickly outside [-3, 3], leading to vanishing gradients in deep networks.'}
            {activation === 'tanh' && 'Tanh is zero-centered between (-1, 1), generally training faster than Sigmoid but still prone to saturation.'}
          </div>
        </div>

        {/* Visual Graph Diagram */}
        <div className="lg:col-span-8 bg-slate-950 p-6 rounded-xl border border-slate-800 relative overflow-hidden min-h-[340px] flex items-center justify-around">
          {/* Subtle background grid */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* LAYER 1: Inputs */}
          <div className="flex flex-col gap-12 z-10 items-center">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
              Input Layer [2]
            </span>
            <div className="group relative flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-cyan-950/80 border-2 border-cyan-500 flex items-center justify-center font-mono font-bold text-cyan-300 shadow-lg shadow-cyan-500/20">
                {x1.toFixed(2)}
              </div>
              <span className="text-xs font-mono text-cyan-400 mt-1 font-semibold">x₁</span>
            </div>
            <div className="group relative flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-cyan-950/80 border-2 border-cyan-500 flex items-center justify-center font-mono font-bold text-cyan-300 shadow-lg shadow-cyan-500/20">
                {x2.toFixed(2)}
              </div>
              <span className="text-xs font-mono text-cyan-400 mt-1 font-semibold">x₂</span>
            </div>
          </div>

          {/* LAYER 2: Hidden Neurons */}
          <div className="flex flex-col gap-6 z-10 items-center">
            <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-2">
              Hidden Layer [3] · {activation.toUpperCase()}
            </span>
            {computed.aHidden.map((val, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-full bg-indigo-950/90 border-2 border-indigo-500 flex flex-col items-center justify-center font-mono text-xs font-bold text-indigo-200 shadow-lg shadow-indigo-500/20 transition-all duration-300"
                  style={{
                    backgroundColor: `rgba(99, 102, 241, ${Math.min(0.8, Math.max(0.2, (val + 1) / 3))})`,
                  }}
                >
                  <span className="text-[10px] text-indigo-300/80">z={computed.zHidden[idx].toFixed(1)}</span>
                  <span>{val.toFixed(2)}</span>
                </div>
                <span className="text-[11px] font-mono text-indigo-300 mt-1">h{idx + 1}</span>
              </div>
            ))}
          </div>

          {/* LAYER 3: Output */}
          <div className="flex flex-col gap-6 z-10 items-center">
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
              Output Layer [1]
            </span>
            <div className="flex flex-col items-center">
              <div
                className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-400 flex flex-col items-center justify-center font-mono text-sm font-bold text-emerald-200 shadow-xl shadow-emerald-500/30 transition-all duration-300"
                style={{
                  boxShadow: `0 0 25px rgba(52, 211, 153, ${Math.min(0.6, Math.max(0.1, computed.aOut))})`,
                }}
              >
                <span className="text-[10px] text-emerald-400/80">z={computed.zOut.toFixed(2)}</span>
                <span className="text-base font-extrabold">{computed.aOut.toFixed(3)}</span>
              </div>
              <span className="text-xs font-mono text-emerald-400 mt-2 font-bold">Output ŷ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Numerical Trace Matrix */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
          <Zap className="w-3.5 h-3.5 text-indigo-400" />
          <span>Real-time Forward Pass Trace</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-300">
            <span className="text-slate-500 block mb-1">1. Input Vector:</span>
            x = [{x1.toFixed(2)}, {x2.toFixed(2)}]^T
          </div>
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-300">
            <span className="text-slate-500 block mb-1">2. Hidden Activations ({activation}):</span>
            h = [{computed.aHidden.map((v) => v.toFixed(2)).join(', ')}]
          </div>
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-emerald-300">
            <span className="text-slate-500 block mb-1">3. Final Logit & Output:</span>
            z_out = {computed.zOut.toFixed(3)} → ŷ = {computed.aOut.toFixed(3)}
          </div>
        </div>
      </div>
    </div>
  );
};
