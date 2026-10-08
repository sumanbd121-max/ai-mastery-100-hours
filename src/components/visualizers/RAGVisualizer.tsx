import React, { useState } from 'react';
import { Database, Search, Filter, Cpu, CheckCircle2, ArrowRight, Layers, Sparkles } from 'lucide-react';

interface DocumentChunk {
  id: string;
  source: string;
  text: string;
  denseScore: number;
  bm25Score: number;
  rrfScore: number;
  rerankScore: number;
  isIncluded: boolean;
}

export const RAGVisualizer: React.FC = () => {
  const [query, setQuery] = useState<string>('What is the memory footprint of FlashAttention compared to standard attention?');
  const [topK, setTopK] = useState<number>(2);
  const [useReranker, setUseReranker] = useState<boolean>(true);

  // Sample indexed corpus
  const corpus: DocumentChunk[] = [
    {
      id: 'chunk-1',
      source: 'flash_attention_paper.pdf [Page 3]',
      text: 'Standard attention requires O(N^2) memory accesses to High Bandwidth Memory (HBM). FlashAttention tiles the computation across fast on-chip SRAM, reducing HBM reads and writes by 4-8x while keeping memory footprint sub-quadratic.',
      denseScore: 0.94,
      bm25Score: 0.88,
      rrfScore: 0.032,
      rerankScore: 0.96,
      isIncluded: true,
    },
    {
      id: 'chunk-2',
      source: 'gpu_memory_architecture.md [Section 2.1]',
      text: 'NVIDIA H100 GPU features 80GB of HBM3 memory running at 3.35 TB/s, while on-chip SRAM (L1 cache and shared memory) offers up to 33 TB/s bandwidth—an order of magnitude faster.',
      denseScore: 0.82,
      bm25Score: 0.54,
      rrfScore: 0.021,
      rerankScore: 0.84,
      isIncluded: true,
    },
    {
      id: 'chunk-3',
      source: 'pytorch_profiler_guide.txt',
      text: 'To profile CUDA memory allocations, use torch.cuda.memory_allocated() and torch.cuda.max_memory_reserved() to monitor peak allocation limits during training loops.',
      denseScore: 0.74,
      bm25Score: 0.41,
      rrfScore: 0.015,
      rerankScore: 0.38,
      isIncluded: false,
    },
    {
      id: 'chunk-4',
      source: 'vit_vision_transformers.pdf [Page 12]',
      text: 'Vision Transformers split images into 16x16 pixel patches. Self-attention across 196 image patches has a lower context requirement than large document text sequences.',
      denseScore: 0.45,
      bm25Score: 0.12,
      rrfScore: 0.008,
      rerankScore: 0.12,
      isIncluded: false,
    },
  ];

  const sortedChunks = [...corpus].sort((a, b) => {
    if (useReranker) {
      return b.rerankScore - a.rerankScore;
    }
    return b.denseScore - a.denseScore;
  });

  const selectedChunks = sortedChunks.slice(0, topK);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Database className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-bold text-white">Production Enterprise RAG Flow Simulator</h3>
          </div>
          <p className="text-slate-400 text-sm mt-1">
            Hybrid Retrieval (Dense Vector + BM25) → Cross-Encoder Reranking → Context Injection → Grounded Generation.
          </p>
        </div>

        {/* Toggles */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setUseReranker(!useReranker)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              useReranker
                ? 'bg-emerald-600/20 text-emerald-300 border-emerald-500/50 shadow-lg shadow-emerald-600/20'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Cross-Encoder Reranker: {useReranker ? 'ENABLED' : 'DISABLED'}</span>
          </button>
        </div>
      </div>

      {/* Query Bar */}
      <div className="my-6 space-y-2">
        <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
          Simulated User Question:
        </label>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-emerald-500 font-mono pr-28"
          />
          <div className="absolute right-3 top-2.5 flex items-center gap-2">
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-800/40">
              Cosine Top-{topK}
            </span>
          </div>
        </div>
      </div>

      {/* 4 Pipeline Stages */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-300">
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <span>1. Dense + BM25</span>
          </div>
          <p className="text-slate-500 text-[11px]">
            HNSW vector cosine search + BM25 inverted lexical index.
          </p>
        </div>

        <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-300">
            <Layers className="w-3.5 h-3.5 text-violet-400" />
            <span>2. Reciprocal Rank</span>
          </div>
          <p className="text-slate-500 text-[11px]">
            RRF merges sparse and dense ranks: 1 / (60 + rank).
          </p>
        </div>

        <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-300">
            <Filter className="w-3.5 h-3.5 text-emerald-400" />
            <span>3. Cross-Encoder</span>
          </div>
          <p className="text-slate-500 text-[11px]">
            Full cross-attention reranker scores top passages together.
          </p>
        </div>

        <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-300">
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>4. LLM Generation</span>
          </div>
          <p className="text-slate-500 text-[11px]">
            Filtered context passed into system prompt for grounded synthesis.
          </p>
        </div>
      </div>

      {/* Retrieved Chunks Display */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span>RANKED CHUNKS IN VECTOR STORE (Top {topK} Injected into LLM Context):</span>
          <div className="flex items-center gap-2">
            <span>Context Top-K:</span>
            {[1, 2, 3].map((k) => (
              <button
                key={k}
                onClick={() => setTopK(k)}
                className={`px-2 py-0.5 rounded text-xs ${
                  topK === k ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        {sortedChunks.map((chunk, idx) => {
          const isSelected = idx < topK;

          return (
            <div
              key={chunk.id}
              className={`p-4 rounded-xl border transition-all ${
                isSelected
                  ? 'bg-slate-950/90 border-emerald-500/60 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/30'
                  : 'bg-slate-950/40 border-slate-800/60 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold ${
                      isSelected ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    Rank #{idx + 1}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{chunk.source}</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="text-slate-400">Dense: {chunk.denseScore.toFixed(2)}</span>
                  <span className="text-slate-400">BM25: {chunk.bm25Score.toFixed(2)}</span>
                  <span className="text-emerald-400 font-bold">
                    Rerank Score: {(chunk.rerankScore * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                "{chunk.text}"
              </p>
            </div>
          );
        })}
      </div>

      {/* Synthesized Output Banner */}
      <div className="bg-slate-950 border border-emerald-900/40 p-4 rounded-xl">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Synthesized LLM Grounded Answer (Zero Hallucination Guaranteed):</span>
        </div>
        <p className="text-xs text-slate-200 leading-relaxed font-mono">
          "According to the retrieved technical documentation, FlashAttention replaces standard $O(N^2)$ High-Bandwidth Memory (HBM) accesses by tiling computations inside high-speed on-chip GPU SRAM. Because SRAM operates at ~33 TB/s compared to 3.35 TB/s for HBM3, this reduces memory traffic by 4x to 8x and eliminates the need to materialize the quadratic attention matrix in main memory."
        </p>
      </div>
    </div>
  );
};
