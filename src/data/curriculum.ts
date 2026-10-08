import { CurriculumModule, LessonHour, CapstoneProject, StudyPace } from '../types/curriculum';

export const MODULES: CurriculumModule[] = [
  {
    id: 1,
    title: 'Module 1: AI Mathematics, Fundamentals & Machine Learning Core',
    shortTitle: 'AI Foundations & ML Core',
    hoursRange: 'Hours 1–12 (12 Hours)',
    startHour: 1,
    endHour: 12,
    color: 'from-blue-500 to-cyan-500',
    accentHex: '#38bdf8',
    badge: 'Foundations',
    iconName: 'Binary',
    summary: 'Master the non-negotiable mathematical machinery of AI: vector spaces, automatic differentiation, gradient descent dynamics, classical statistical learning, and strict ML validation cycles.',
    targetCompetencies: [
      'Matrix calculus, Jacobian/Hessian intuitions, and tensor operations',
      'Loss landscapes, convex vs non-convex optimization, AdamW optimizer mechanics',
      'Classical ML algorithms (XGBoost, Random Forests, SVMs, PCA) and feature engineering',
      'Production evaluation metrics, data leakage prevention, cross-validation architectures'
    ],
    prerequisites: ['Basic Python programming', 'High school algebra & coordinate geometry'],
    capstoneProject: {
      title: 'Milestone 1: Production Tabular ML Pipeline & Gradient Engine',
      hour: 12,
      description: 'Build an end-to-end production ML pipeline featuring custom autograd engine, vectorized gradient descent, hyperparameter search, and model validation report.',
      deliverables: ['Custom Micro-Autograd engine', 'XGBoost feature pipeline', 'Model drift monitoring checklist']
    }
  },
  {
    id: 2,
    title: 'Module 2: Deep Learning, Neural Network Architectures & Transformers',
    shortTitle: 'Neural Networks & Transformers',
    hoursRange: 'Hours 13–28 (16 Hours)',
    startHour: 13,
    endHour: 28,
    color: 'from-violet-500 to-indigo-500',
    accentHex: '#818cf8',
    badge: 'Deep Architectures',
    iconName: 'Network',
    summary: 'From biological perceptrons to deep residual networks and the Transformer revolution. Deconstruct Self-Attention, Multi-Head projections, Positional Encodings (RoPE), KV-Caching, and modern LLM blocks.',
    targetCompetencies: [
      'Multilayer Perceptron forward/backward passes coded in raw PyTorch',
      'Convolutional kernels, inductive bias, ResNet skip connections and Vision Transformers (ViT)',
      'Mathematical derivation of Scaled Dot-Product Attention: Q, K, V matrix formulations',
      'Rotary Position Embeddings (RoPE), FlashAttention-2 memory mechanics, KV-Cache memory footprints'
    ],
    prerequisites: ['Module 1', 'Basic PyTorch tensor syntax'],
    capstoneProject: {
      title: 'Milestone 2: Decoder-Only Transformer (Mini-GPT) from Scratch',
      hour: 28,
      description: 'Implement a character/subword decoder-only Transformer with causal masked multi-head attention, RMSNorm, SwiGLU activation, and autoregressive generation.',
      deliverables: ['PyTorch Transformer implementation', 'Trained checkpoint on custom corpus', 'KV-cache inference benchmark']
    }
  },
  {
    id: 3,
    title: 'Module 3: Generative AI, Large Language Models (LLMs) & RAG Systems',
    shortTitle: 'Generative AI, LLMs & RAG',
    hoursRange: 'Hours 29–48 (20 Hours)',
    startHour: 29,
    endHour: 48,
    color: 'from-emerald-500 to-teal-500',
    accentHex: '#34d399',
    badge: 'LLMs & RAG',
    iconName: 'Cpu',
    summary: 'Deep dive into foundation model pretraining, tokenization (BPE), alignment (SFT, RLHF, DPO), parameter-efficient fine-tuning (LoRA/QLoRA), and enterprise-grade Retrieval-Augmented Generation.',
    targetCompetencies: [
      'BPE tokenization algorithms, vocabulary expansion, and scaling laws (Chinchilla)',
      'LoRA/QLoRA rank decomposition math, 4-bit NormalFloat (NF4) quantization',
      'Advanced Prompt Engineering: Chain-of-Thought, Tree-of-Thoughts, JSON Schema enforcement',
      'Production RAG: Hybrid search (BM25 + Dense), Cross-Encoder Rerankers, Chunking strategies, and RAGAS evaluations'
    ],
    prerequisites: ['Module 2', 'Vector embeddings intuition'],
    capstoneProject: {
      title: 'Milestone 3: Enterprise Multimodal RAG Engine with Cross-Encoder & Semantic Cache',
      hour: 48,
      description: 'Architect a low-latency enterprise RAG engine with vector stores, semantic Redis caching, hybrid BM25 re-ranking, and automated faithfulness evaluations.',
      deliverables: ['Vector ingestion pipeline', 'Hybrid search & Cross-encoder reranker', 'RAGAS benchmark suite']
    }
  },
  {
    id: 4,
    title: 'Module 4: Autonomous AI Agents & Multi-Agent Orchestration',
    shortTitle: 'Autonomous AI Agents',
    hoursRange: 'Hours 49–68 (20 Hours)',
    startHour: 49,
    endHour: 68,
    color: 'from-amber-500 to-orange-500',
    accentHex: '#fbbf24',
    badge: 'Agentic AI',
    iconName: 'Bot',
    summary: 'The shift from prompt-response to autonomous reasoning and execution loops. Build resilient ReAct agents, state machines (LangGraph), multi-agent swarms (CrewAI/AutoGen), and tool-use sandboxes.',
    targetCompetencies: [
      'The ReAct Loop: Thought, Action, Observation, Reflection loop state machines',
      'Dynamic Tool Use, OpenAPI specification parsing, schema validation, and sandbox execution',
      'Multi-agent hierarchies: Orchestrator-Worker, Consensus voting, and Shared memory registers',
      'Production guardrails: Loop termination detectors, cycle breakers, human-in-the-loop (HITL) checkpoints'
    ],
    prerequisites: ['Module 3', 'API design and async programming'],
    capstoneProject: {
      title: 'Milestone 4: Autonomous Multi-Agent Software Engineering Squad',
      hour: 68,
      description: 'Build a multi-agent system (Product Manager -> Tech Lead -> Coder -> QA Tester) that takes natural language specs, plans modules, writes unit-tested code, and self-heals bugs.',
      deliverables: ['LangGraph state machine graph', 'Dynamic Docker/Wasm code execution sandbox', 'Human-in-the-loop approval UI']
    }
  },
  {
    id: 5,
    title: 'Module 5: AI Automation, Multimodal Workflows & Enterprise Tooling',
    shortTitle: 'AI Automation & Workflows',
    hoursRange: 'Hours 69–84 (16 Hours)',
    startHour: 69,
    endHour: 84,
    color: 'from-rose-500 to-pink-500',
    accentHex: '#f43f5e',
    badge: 'Enterprise Automation',
    iconName: 'Layers',
    summary: 'Automate complex real-world workflows. Multimodal document processing, computer vision extraction, browser automation (Playwright/Browser-Use), voice streaming, and asynchronous event queues.',
    targetCompetencies: [
      'Multimodal intelligence: Vision-Language Models (VLMs) for complex charts, PDF forms, and receipts',
      'Browser Automation Agents: DOM element selection, Playwright integration, resilient UI navigation',
      'Event-driven architectures: Webhooks, Redis BullMQ / Celery task queues for high-throughput AI workloads',
      'Real-time voice & streaming: WebSocket bi-directional audio, Whisper transcription, low-latency TTS'
    ],
    prerequisites: ['Module 4', 'Web scraping and asynchronous workflows'],
    capstoneProject: {
      title: 'Milestone 5: Autonomous Financial Document Audit & Browser Executive',
      hour: 84,
      description: 'Create an automated pipeline that ingests multimodal invoices, validates compliance via OCR-free VLMs, and executes approval actions via headless browser automation.',
      deliverables: ['VLM document extractor', 'Browser-Use automated reconciler', 'Audit trail log generator']
    }
  },
  {
    id: 6,
    title: 'Module 6: AI-Powered Full-Stack Development, MLOps & Production Serving',
    shortTitle: 'Full-Stack AI & MLOps',
    hoursRange: 'Hours 85–100 (16 Hours)',
    startHour: 85,
    endHour: 100,
    color: 'from-fuchsia-500 to-purple-600',
    accentHex: '#c084fc',
    badge: 'Production & MLOps',
    iconName: 'Rocket',
    summary: 'Take AI models to production. Build modern React/Next.js streaming interfaces, host high-throughput inference engines (vLLM, TensorRT-LLM), deploy on Kubernetes, and enforce LLM observability and security.',
    targetCompetencies: [
      'Full-Stack AI interfaces: Server-Sent Events (SSE), Vercel AI SDK, optimistic client updates, token streaming',
      'High-throughput LLM serving: vLLM PagedAttention, continuous batching, AWQ/FP8 quantization',
      'Production MLOps & Cloud deployment: Docker containers, GPU autoscaling, semantic caching, rate limiting',
      'LLM Security & Observability: Langfuse tracing, OWASP Top 10 for LLMs, prompt injection defense, evaluation guardrails'
    ],
    prerequisites: ['Module 5', 'Basic Docker, React/Node knowledge'],
    capstoneProject: {
      title: 'Master Capstone (Hour 100): Production-Ready AI SaaS Platform',
      hour: 100,
      description: 'Ship an enterprise-grade AI SaaS application with streaming React frontend, vLLM/Gemini backend, persistent vector search, automated agents, full telemetry, and rate limits.',
      deliverables: ['Full-stack repository with Docker compose', 'vLLM continuous batching configuration', 'Langfuse observability dashboard']
    }
  }
];

export const STUDY_PACES: StudyPace[] = [
  {
    id: 'sprint',
    name: 'Full-Time Bootcamp Sprint',
    hoursPerWeek: 25,
    totalWeeks: 4,
    intensity: 'Sprint',
    description: 'Immersive 4-week intensive. 4 to 5 hours daily, Monday through Friday. Best for career changers and dedicated sabbaticals.',
    targetDailyCommitment: '4–5 Hours / Day (5 Days/Week)'
  },
  {
    id: 'balanced',
    name: 'Professional Accelerated Track',
    hoursPerWeek: 10,
    totalWeeks: 10,
    intensity: 'Balanced',
    description: 'Balanced 10-week schedule for working engineers. 1.5 hours on weekdays plus a 3-hour deep weekend project block.',
    targetDailyCommitment: '1.5 Hours Weekdays + 3 Hours Weekend'
  },
  {
    id: 'paced',
    name: 'Sustainable Mastery Track',
    hoursPerWeek: 5,
    totalWeeks: 20,
    intensity: 'Paced',
    description: '20-week steady mastery pace. Perfect for busy students and leaders who want deep retention without burnout.',
    targetDailyCommitment: '45–60 Minutes Daily'
  }
];

export const CAPSTONE_PROJECTS: CapstoneProject[] = [
  {
    id: 'capstone-1',
    hour: 12,
    title: 'Micro-Autograd Engine & Predictive Pipeline',
    moduleTitle: 'Module 1: AI Math & Classical ML Core',
    difficulty: 'Intermediate',
    overview: 'Implement a scalar reverse-mode automatic differentiation engine from scratch in pure Python, then deploy an end-to-end tabular prediction pipeline with cross-validation and feature drift monitors.',
    systemArchitecture: [
      'Scalar Node class tracking value, gradient, children operations, and backward lambda',
      'Topological sort traversal for backpropagation graph execution',
      'Vectorized batch linear regression and classification trained on synthetic data',
      'Feature store pipeline with standardized z-score transformers and SHAP explainability'
    ],
    techStack: ['Python 3.11', 'NumPy', 'Scikit-Learn', 'Matplotlib'],
    deliverables: [
      'autograd_engine.py: Pure Python reverse-mode autograd with tests',
      'pipeline_trainer.py: Automated cross-validated model training',
      'drift_monitor.py: Population Stability Index (PSI) data drift detector'
    ],
    rubric: [
      { criterion: 'Gradient Correctness', weight: '35%', standard: 'Verified against analytical derivatives and PyTorch autograd within 1e-5 tolerance' },
      { criterion: 'Pipeline Architecture', weight: '35%', standard: 'Zero data leakage between train/val/test splits, fully reproducible random seeds' },
      { criterion: 'Code Quality', weight: '30%', standard: 'Strict typing (PEP 484), docstrings, and comprehensive unit tests' }
    ]
  },
  {
    id: 'capstone-2',
    hour: 28,
    title: 'Decoder-Only Transformer (Mini-GPT) from Scratch',
    moduleTitle: 'Module 2: Deep Learning & Neural Architectures',
    difficulty: 'Advanced',
    overview: 'Build, train, and benchmark an autoregressive causal Transformer model in PyTorch. Includes Multi-Head Attention, RoPE (Rotary Position Embeddings), RMSNorm, SwiGLU activations, and KV-cache autoregressive inference.',
    systemArchitecture: [
      'Rotary Position Embedding (RoPE) tensor transformations',
      'Causal masked multi-head attention with attention scaling and dropout',
      'Pre-layer RMSNorm and SwiGLU feed-forward network blocks',
      'Inference generator with KV-Cache saving token recomputation across decoding steps'
    ],
    techStack: ['PyTorch 2.4+', 'CUDA / MPS', 'Tiktoken / SentencePiece', 'Weights & Biases'],
    deliverables: [
      'model.py: Clean modular implementation of TransformerDecoder',
      'train.py: Mixed-precision (AMP) training script with Cosine Annealing LR',
      'kv_cache_benchmark.py: Latency comparison with and without KV-cache'
    ],
    rubric: [
      { criterion: 'Transformer Correctness', weight: '40%', standard: 'Proper causal masking preventing future token leakage; mathematically accurate RoPE' },
      { criterion: 'KV-Cache Efficiency', weight: '35%', standard: 'Achieves O(1) FLOPs per generated token instead of O(N^2) quadratic recalculation' },
      { criterion: 'Training Convergence', weight: '25%', standard: 'Loss decreases monotonically to expected perplexity baseline on TinyShakespeare corpus' }
    ]
  },
  {
    id: 'capstone-3',
    hour: 48,
    title: 'Enterprise Multimodal RAG Engine with Cross-Encoder & Semantic Cache',
    moduleTitle: 'Module 3: Generative AI, LLMs & RAG',
    difficulty: 'Advanced',
    overview: 'Engineer a production-grade Retrieval-Augmented Generation service featuring hybrid vector search (dense + BM25 sparse), Cross-Encoder reranking, Redis semantic query caching, and automated RAGAS evaluation.',
    systemArchitecture: [
      'Document chunking with recursive character splitting & metadata tagging',
      'Dual retrieval: Qdrant/Pinecone dense cosine index + BM25 sparse keyword index',
      'Reciprocal Rank Fusion (RRF) and Cohere/BGE cross-encoder reranker',
      'Redis semantic cache with cosine threshold to bypass LLM inference on near-duplicate questions',
      'RAGAS automated scoring for Context Precision, Faithfulness, and Answer Relevance'
    ],
    techStack: ['Python', 'FastAPI', 'Qdrant / Chroma', 'Sentence-Transformers', 'Redis', 'RAGAS'],
    deliverables: [
      'rag_service.py: FastAPI microservice exposing /query and /ingest',
      'semantic_cache.py: Vector similarity caching layer with Redis',
      'evaluation_report.md: Benchmark metrics comparing naive RAG vs Hybrid Reranked RAG'
    ],
    rubric: [
      { criterion: 'Retrieval Quality', weight: '40%', standard: 'Reranker improves Top-3 retrieval precision by at least 25% over naive dense retrieval' },
      { criterion: 'Semantic Cache Hit Latency', weight: '30%', standard: 'Cached queries return in under 20ms without invoking downstream LLMs' },
      { criterion: 'Hallucination Mitigation', weight: '30%', standard: 'Faithfulness metric > 0.90 evaluated on a 50-question test gold dataset' }
    ]
  },
  {
    id: 'capstone-4',
    hour: 68,
    title: 'Autonomous Multi-Agent Software Engineering Squad',
    moduleTitle: 'Module 4: Autonomous AI Agents & Multi-Agent Systems',
    difficulty: 'Expert',
    overview: 'Design and deploy a multi-agent autonomous system capable of taking a user product specification, planning architectural tasks, generating full-stack code, executing unit tests in an isolated sandbox, and self-healing when tests fail.',
    systemArchitecture: [
      'LangGraph deterministic state machine with cyclical review paths',
      'Orchestrator Agent: Deconstructs PRD into subtasks and acceptance criteria',
      'Developer Agent: Synthesizes modular code adhering to styling standards',
      'Test Engineer Agent: Writes PyTest/Jest specs and runs them inside isolated Docker sandbox',
      'Human-in-the-Loop checkpoint allowing manual review before final PR deployment'
    ],
    techStack: ['LangGraph', 'Docker Engine SDK', 'Gemini 3.8 Flash', 'Pydantic V2', 'WebSockets'],
    deliverables: [
      'agent_graph.py: LangGraph workflow with typed state transitions',
      'sandbox_runner.py: Ephemeral container execution environment with timeout guards',
      'demo_session.json: Recorded trace showing autonomous bug detection and self-repair'
    ],
    rubric: [
      { criterion: 'State Machine Robustness', weight: '35%', standard: 'Cycle detection prevents infinite repair loops; graceful fallback after 3 failed attempts' },
      { criterion: 'Sandbox Security', weight: '35%', standard: 'Strict isolation: no host filesystem access, restricted networking, enforced memory caps' },
      { criterion: 'Task Completion Rate', weight: '30%', standard: 'Successfully solves > 80% of standard benchmark software coding challenges without human intervention' }
    ]
  },
  {
    id: 'capstone-5',
    hour: 100,
    title: 'Full-Stack Enterprise AI Platform with vLLM, Observability & Guardrails',
    moduleTitle: 'Module 6: Full-Stack AI Software Development & MLOps',
    difficulty: 'Expert',
    overview: 'The Master Capstone: A comprehensive production-grade AI application featuring a responsive streaming React/TypeScript frontend, high-throughput vLLM/Gemini backend, streaming token visualization, semantic Redis cache, Langfuse telemetry, and prompt-injection firewall.',
    systemArchitecture: [
      'Next.js / React client with SSE token streaming, Markdown syntax highlighting, and latency graphs',
      'FastAPI / Express API Gateway with rate limiting, JWT authentication, and token budget quotas',
      'Self-hosted or managed LLM serving with continuous batching and PagedAttention',
      'OpenTelemetry & Langfuse pipeline capturing traces, token costs, latency percentiles (p50/p95/p99)',
      'Security guardrail layer filtering prompt injection, jailbreaks, and PII leaks'
    ],
    techStack: ['React / Vite', 'TypeScript', 'vLLM', 'FastAPI / Express', 'Langfuse', 'Docker Compose', 'Redis'],
    deliverables: [
      'Full GitHub repository with automated Docker Compose setup',
      'Production deployment documentation with Kubernetes Helm chart or Cloud Run manifest',
      'Observability dashboard displaying real-time token throughput and error rates'
    ],
    rubric: [
      { criterion: 'End-to-End Latency & Streaming', weight: '30%', standard: 'Time to first token (TTFT) < 400ms; seamless smooth rendering on client' },
      { criterion: 'Production Hardening & Security', weight: '35%', standard: 'Resistant to prompt injection tests; strict API rate-limiting and graceful error handling' },
      { criterion: 'System Observability', weight: '35%', standard: 'Complete end-to-end trace captured in Langfuse with exact token counts, costs, and span latencies' }
    ]
  }
];

// Helper to generate the detailed 100 hours
function generateCurriculumHours(): LessonHour[] {
  const hours: LessonHour[] = [];

  // ================= MODULE 1: HOURS 1 - 12 =================
  const m1Topics = [
    {
      hour: 1,
      title: 'Vector Spaces, Matrices & Tensor Math for AI',
      subtitle: 'The foundational linear algebra driving modern deep learning',
      chapter: 'Ch 1: Mathematics of Machine Intelligence',
      level: 'Beginner' as const,
      overview: 'Understand vectors, matrices, dot products, matrix multiplication, and multi-dimensional tensors. Connect linear transformations to how neural network layers process information.',
      keyConcepts: ['Vector Dot Products & Cosine Similarity', 'Matrix Multiplication Complexity O(N^3) vs Strassen', 'Tensors: Ranks, Shapes, and Strides', 'Eigenvalues & Principal Components intuition'],
      math: 'Dot product: a · b = ∑(a_i * b_i) = ||a|| ||b|| cos(θ). Matrix transformation: y = Wx + b.',
      arch: 'Modern GPUs are fundamentally dense matrix multiply units (GEMM). Every neural network forward pass is a sequence of generalized matrix multiplications.',
      code: {
        language: 'python' as const,
        filename: 'tensor_fundamentals.py',
        code: `import numpy as np

# 1. Dot product & cosine similarity
v1 = np.array([0.8, 0.2, 0.5])
v2 = np.array([0.7, 0.3, 0.4])

dot_product = np.dot(v1, v2)
cos_sim = dot_product / (np.linalg.norm(v1) * np.linalg.norm(v2))
print(f"Cosine Similarity: {cos_sim:.4f}")

# 2. Linear layer projection: y = Wx + b
W = np.random.randn(4, 3) # Output dim: 4, Input dim: 3
b = np.zeros(4)
y = np.matmul(W, v1) + b
print("Projected Tensor shape:", y.shape)`,
        description: 'Vectorized tensor operations and affine linear transformation projection.'
      },
      lab: {
        title: 'Building a Tensor Operations Benchmark',
        goal: 'Compute and visualize cosine similarity between high-dimensional embeddings and compare NumPy vs Python loop speed.',
        steps: [
          'Create two 100,000-dimensional random vectors',
          'Benchmark raw Python loop dot product vs vectorized np.dot',
          'Calculate vector norms and cosine similarity'
        ],
        deliverable: 'A benchmark script demonstrating 50x+ speedup with vectorized operations.'
      },
      checklist: ['Verify tensor shapes before matrix multiplications', 'Ensure float32 or float16 precision for numerical speed', 'Avoid nested Python loops in data transformations'],
      pitfalls: ['Silent shape broadcasting causing unintended outer products', 'Using float64 in deep learning when float32/bfloat16 suffices and uses half the VRAM']
    },
    {
      hour: 2,
      title: 'Calculus, Gradients & Automatic Differentiation',
      subtitle: 'Derivatives, chain rule, and reverse-mode autodiff',
      chapter: 'Ch 1: Mathematics of Machine Intelligence',
      level: 'Beginner' as const,
      overview: 'Deconstruct how machines learn: partial derivatives, gradients as directions of steepest ascent, and reverse-mode automatic differentiation that powers PyTorch and JAX.',
      keyConcepts: ['Partial Derivatives & Gradient Vectors ∇f', 'The Chain Rule: dL/dx = (dL/dy) * (dy/dx)', 'Computational Graphs: Forward Pass vs Backward Pass', 'Reverse-Mode vs Forward-Mode Autodiff'],
      math: 'Chain Rule: ∂z/∂x = (∂z/∂y) * (∂y/∂x). Gradient vector: ∇f(x) = [∂f/∂x1, ∂f/∂x2, ..., ∂f/∂xn]^T.',
      arch: 'Reverse-mode automatic differentiation computes gradients for all parameters in a single backward pass, making backpropagation tractable for billions of weights.',
      code: {
        language: 'python' as const,
        filename: 'micro_autograd.py',
        code: `class Value:
    """A minimal autograd scalar node."""
    def __init__(self, data, _children=()):
        self.data = data
        self.grad = 0.0
        self._backward = lambda: None
        self._prev = set(_children)

    def __add__(self, other):
        other = other if isinstance(other, Value) else Value(other)
        out = Value(self.data + other.data, (self, other))
        def _backward():
            self.grad += 1.0 * out.grad
            other.grad += 1.0 * out.grad
        out._backward = _backward
        return out

    def __mul__(self, other):
        other = other if isinstance(other, Value) else Value(other)
        out = Value(self.data * other.data, (self, other))
        def _backward():
            self.grad += other.data * out.grad
            other.grad += self.data * out.grad
        out._backward = _backward
        return out

    def backward(self):
        # Topological sort of computational graph
        topo = []
        visited = set()
        def build_topo(v):
            if v not in visited:
                visited.add(v)
                for child in v._prev:
                    build_topo(child)
                topo.append(v)
        build_topo(self)
        self.grad = 1.0
        for node in reversed(topo):
            node._backward()

# Usage test: L = (a * b) + c
a = Value(2.0); b = Value(-3.0); c = Value(10.0)
L = a * b + c
L.backward()
print(f"L={L.data}, dL/da={a.grad}, dL/db={b.grad}")`,
        description: 'Pure Python scalar reverse-mode autograd engine.'
      },
      lab: {
        title: 'Implement Power & Relu Operations in Autograd',
        goal: 'Extend the scalar Value class to support __pow__ and relu() with accurate gradient propagations.',
        steps: [
          'Add __pow__(self, exponent) method with derivative rule d/dx(x^n) = n * x^(n-1)',
          'Add relu(self) method where gradient is out.grad if data > 0 else 0',
          'Verify against PyTorch torch.autograd.grad'
        ],
        deliverable: 'Unit tests validating analytical autograd values against PyTorch.'
      },
      checklist: ['Accumulate gradients with += to handle reused variables (fan-out)', 'Ensure topological sort order is strictly respected in backward pass', 'Zero out gradients between training iterations'],
      pitfalls: ['Using = instead of += when accumulating gradients across branching graph nodes', 'Forgetting to set root loss gradient to 1.0 before backprop']
    },
    {
      hour: 3,
      title: 'Probability, Information Theory & Entropy',
      subtitle: 'Entropy, cross-entropy loss, KL-divergence, and distributions',
      chapter: 'Ch 1: Mathematics of Machine Intelligence',
      level: 'Beginner' as const,
      overview: 'Probability distributions, Bayes theorem, Shannon entropy, cross-entropy loss, and Kullback-Leibler (KL) divergence used in LLM alignment (RLHF) and VAEs.',
      keyConcepts: ['Shannon Entropy: H(P) = -∑ P(x) log P(x)', 'Cross-Entropy Loss: H(P, Q) = -∑ P(x) log Q(x)', 'Kullback-Leibler (KL) Divergence: D_KL(P || Q)', 'Maximum Likelihood Estimation (MLE)'],
      math: 'D_KL(P || Q) = ∑ P(x) log(P(x) / Q(x)) = H(P, Q) - H(P). Cross-entropy minimizes KL divergence to true distribution.',
      arch: 'Language modeling is autoregressive next-token probability distribution estimation: P(w_t | w_1...w_{t-1}). Minimizing cross-entropy equals maximizing token likelihood.',
      code: {
        language: 'python' as const,
        filename: 'entropy_metrics.py',
        code: `import numpy as np

def cross_entropy(y_true, y_pred, eps=1e-15):
    """Numerically stable categorical cross-entropy."""
    y_pred = np.clip(y_pred, eps, 1 - eps)
    return -np.sum(y_true * np.log(y_pred)) / y_true.shape[0]

def kl_divergence(p, q, eps=1e-15):
    p = np.clip(p, eps, 1)
    q = np.clip(q, eps, 1)
    return np.sum(p * np.log(p / q))

# Example: Target token vs predicted probabilities
target = np.array([1.0, 0.0, 0.0]) # True class 0
predicted = np.array([0.85, 0.10, 0.05])
loss = cross_entropy(target[np.newaxis, :], predicted[np.newaxis, :])
print(f"Cross-Entropy Loss: {loss:.4f}")`,
        description: 'Categorical cross-entropy and KL divergence calculation.'
      },
      lab: {
        title: 'Calculate Perplexity from Cross-Entropy Loss',
        goal: 'Implement the perplexity formula: PPL = exp(CrossEntropy) and observe behavior as model uncertainty changes.',
        steps: ['Compute cross entropy on a sequence of tokens', 'Take exponent exp(loss)', 'Compare perplexity of uniform random model vs confident model'],
        deliverable: 'Perplexity evaluation function matching HuggingFace standard.'
      },
      checklist: ['Clip predicted probabilities with eps to prevent log(0) NaN errors', 'Use LogSoftmax + NLLLoss in PyTorch for maximum numerical stability', 'Monitor perplexity as standard metric for language model evaluation'],
      pitfalls: ['Computing softmax then log separately causing underflow on extreme logits']
    },
    {
      hour: 4,
      title: 'Optimization Algorithms: SGD, Momentum, RMSprop & AdamW',
      subtitle: 'The dynamics of gradient descent and adaptive learning rates',
      chapter: 'Ch 2: Optimization & Training Dynamics',
      level: 'Intermediate' as const,
      overview: 'Compare optimization algorithms. Understand why vanilla SGD struggles in ill-conditioned ravines, how Momentum smooths oscillations, and how AdamW decouples weight decay for modern LLM pre-training.',
      keyConcepts: ['Stochastic Gradient Descent (SGD) with Mini-batching', 'Momentum & Nesterov Accelerated Gradient', 'Adaptive Learning Rates: RMSprop & Adam', 'AdamW: Decoupled Weight Decay regularization'],
      math: 'Adam updates: m_t = β1*m_{t-1} + (1-β1)*g_t, v_t = β2*v_{t-1} + (1-β2)*g_t^2. Parameter update: θ_t = θ_{t-1} - η * (m̂_t / (√v̂_t + ε)) - η*λ*θ_{t-1}.',
      arch: 'AdamW is the ubiquitous optimizer for training Transformers (Llama, GPT, Claude). Weight decay must be decoupled from the moving average gradients to prevent decay decay artifacts.',
      code: {
        language: 'python' as const,
        filename: 'adamw_optimizer.py',
        code: `import numpy as np

class AdamW:
    """Decoupled Weight Decay AdamW optimizer."""
    def __init__(self, params, lr=1e-3, beta1=0.9, beta2=0.999, eps=1e-8, weight_decay=0.01):
        self.params = params
        self.lr = lr
        self.beta1 = beta1
        self.beta2 = beta2
        self.eps = eps
        self.weight_decay = weight_decay
        self.m = [np.zeros_like(p) for p in params]
        self.v = [np.zeros_like(p) for p in params]
        self.t = 0

    def step(self, grads):
        self.t += 1
        for i, (p, g) in enumerate(zip(self.params, grads)):
            # 1. Update biased 1st and 2nd moment estimates
            self.m[i] = self.beta1 * self.m[i] + (1 - self.beta1) * g
            self.v[i] = self.beta2 * self.v[i] + (1 - self.beta2) * (g ** 2)

            # 2. Bias corrections
            m_hat = self.m[i] / (1 - self.beta1 ** self.t)
            v_hat = self.v[i] / (1 - self.beta2 ** self.t)

            # 3. Decoupled weight decay + update
            p -= self.lr * (m_hat / (np.sqrt(v_hat) + self.eps) + self.weight_decay * p)`,
        description: 'Full mathematical implementation of AdamW optimizer with bias correction.'
      },
      lab: {
        title: 'Compare SGD vs AdamW on Rosenbrock Banana Function',
        goal: 'Optimize the non-convex Rosenbrock valley function using both SGD and AdamW and plot convergence steps.',
        steps: [
          'Define Rosenbrock function f(x, y) = (a - x)^2 + b*(y - x^2)^2',
          'Run 500 steps of SGD with learning rate 0.001',
          'Run 500 steps of AdamW with learning rate 0.05',
          'Log trajectory coordinates and total loss'
        ],
        deliverable: 'Convergence comparison showing AdamW navigating the curved valley 10x faster.'
      },
      checklist: ['Use warm-up learning rate schedules during the initial 1-5% of steps', 'Apply gradient clipping (max_norm=1.0) before optimizer.step()', 'Exclude 1D tensors (biases, LayerNorm weights) from weight decay'],
      pitfalls: ['Applying weight decay to LayerNorm weights, causing them to shrink unnaturally']
    },
    {
      hour: 5,
      title: 'Loss Landscapes, Regularization & Normalization Techniques',
      subtitle: 'Batch Normalization, LayerNorm, RMSNorm, Dropout & Weight Decay',
      chapter: 'Ch 2: Optimization & Training Dynamics',
      level: 'Intermediate' as const,
      overview: 'Inspect internal covariate shift and loss landscapes. Compare BatchNorm (vision) with LayerNorm and modern RMSNorm (LLMs) which drops mean centering for 10% faster forward passes.',
      keyConcepts: ['Internal Covariate Shift & Gradient Highway', 'Batch Normalization (spatial vision) vs Layer Normalization (tokens)', 'RMSNorm (Root Mean Square Normalization in Llama/Mistral)', 'Dropout and DropPath (Stochastic Depth)'],
      math: 'LayerNorm: y = (x - μ) / √(σ^2 + ε) * γ + β. RMSNorm: y = x / √(mean(x^2) + ε) * γ.',
      arch: 'RMSNorm is standard in state-of-the-art LLMs (Llama 3, Gemma, Mistral) because removing mean calculation saves memory bandwidth with zero loss in validation perplexity.',
      code: {
        language: 'python' as const,
        filename: 'rmsnorm_pytorch.py',
        code: `import torch
import torch.nn as nn

class RMSNorm(nn.Module):
    """Root Mean Square Layer Normalization used in Llama 3."""
    def __init__(self, d_model: int, eps: float = 1e-6):
        super().__init__()
        self.eps = eps
        self.weight = nn.Parameter(torch.ones(d_model))

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        # Compute root mean square along the last dimension
        variance = x.pow(2).mean(-1, keepdim=True)
        x_norm = x * torch.rsqrt(variance + self.eps)
        return self.weight * x_norm

# Benchmark comparison against standard LayerNorm
x = torch.randn(32, 512, 4096, device='cuda' if torch.cuda.is_available() else 'cpu')
norm = RMSNorm(4096)
out = norm(x)
print(f"Output shape: {out.shape}, Mean RMS: {out.pow(2).mean().item():.3f}")`,
        description: 'PyTorch implementation of Llama-style RMSNorm.'
      },
      lab: {
        title: 'Benchmark LayerNorm vs RMSNorm Memory & Latency',
        goal: 'Benchmark forward + backward runtime and VRAM memory footprint of standard LayerNorm vs RMSNorm on synthetic tensor batches.',
        steps: ['Create synthetic token batch [batch_size=16, seq_len=1024, d_model=4096]', 'Run 100 warm-up passes', 'Measure GPU milliseconds with torch.cuda.Event'],
        deliverable: 'Performance report showing 7-12% latency reduction with RMSNorm.'
      },
      checklist: ['Use Pre-LN (normalize before attention and MLP) instead of Post-LN to prevent gradient vanishing', 'Ensure epsilon is between 1e-5 and 1e-6 to avoid division by zero', 'Do not apply dropout during inference (model.eval())'],
      pitfalls: ['Leaving model in model.train() during evaluation, causing stochastic dropout outputs']
    },
    {
      hour: 6,
      title: 'Classical Machine Learning: Linear, Logistic & Ridge Regression',
      subtitle: 'Ordinary Least Squares, Convex Loss, L1 Lasso & L2 Ridge Regularization',
      chapter: 'Ch 3: Classical ML Paradigms',
      level: 'Beginner' as const,
      overview: 'Ground deep learning in foundational statistical regression: Ordinary Least Squares (OLS), maximum likelihood logistic classification, L1 (sparsity/feature selection) and L2 (weight shrinkage).',
      keyConcepts: ['Closed-form Normal Equation: θ = (X^T X)^{-1} X^T y', 'L2 Regularization (Ridge) vs L1 Regularization (Lasso / Sparsity)', 'Sigmoid activation & Log-Odds (Logit)', 'Multinomial Softmax Classification'],
      math: 'Ridge Cost: J(θ) = MSE(θ) + λ ||θ||_2^2. Lasso Cost: J(θ) = MSE(θ) + λ ||θ||_1.',
      arch: 'Every final layer of an LLM or classification network is essentially a multinomial logistic regression layer mapping hidden embeddings to vocabulary probabilities via softmax.',
      code: {
        language: 'python' as const,
        filename: 'ridge_logistic.py',
        code: `import numpy as np

def sigmoid(z):
    return 1.0 / (1.0 + np.exp(-np.clip(z, -250, 250)))

class LogisticRegressionGD:
    def __init__(self, lr=0.1, epochs=1000, l2_reg=0.01):
        self.lr = lr
        self.epochs = epochs
        self.l2_reg = l2_reg

    def fit(self, X, y):
        n_samples, n_features = X.shape
        self.weights = np.zeros(n_features)
        self.bias = 0.0

        for _ in range(self.epochs):
            linear_model = np.dot(X, self.weights) + self.bias
            y_pred = sigmoid(linear_model)
            # Gradients with L2 weight regularization
            dw = (1 / n_samples) * np.dot(X.T, (y_pred - y)) + (self.l2_reg * self.weights)
            db = (1 / n_samples) * np.sum(y_pred - y)
            self.weights -= self.lr * dw
            self.bias -= self.lr * db

    def predict_proba(self, X):
        return sigmoid(np.dot(X, self.weights) + self.bias)`,
        description: 'Vectorized Logistic Regression with L2 Regularization from scratch.'
      },
      lab: {
        title: 'Compare L1 Lasso Sparsity vs L2 Ridge Shrinkage',
        goal: 'Train Lasso and Ridge on a 100-feature synthetic dataset with only 10 informative features and verify Lasso zeroes out the uninformative weights.',
        steps: ['Generate noisy dataset with 90 redundant features', 'Fit L1 Lasso and L2 Ridge models', 'Count exact zero weights in both weight vectors'],
        deliverable: 'Demonstration of L1 regularization performing automated feature selection.'
      },
      checklist: ['Always standardize features (zero mean, unit variance) before applying L1/L2 penalties', 'Use cross-validation (GridSearchCV) to tune regularization lambda λ', 'Check VIF (Variance Inflation Factor) for multicollinearity'],
      pitfalls: ['Applying regularization penalties to the bias/intercept term b (only penalize weights W)']
    },
    {
      hour: 7,
      title: 'Tree-Based Models: Decision Trees, Random Forests & XGBoost',
      subtitle: 'Information Gain, Gini Impurity, Bagging & Gradient Boosting (GBDT)',
      chapter: 'Ch 3: Classical ML Paradigms',
      level: 'Intermediate' as const,
      overview: 'Explore why gradient boosted decision trees (XGBoost, LightGBM, CatBoost) still dominate tabular data. Understand greedy tree splitting, ensemble bagging, and gradient boosting residuals.',
      keyConcepts: ['Gini Impurity & Shannon Information Gain splitting', 'Bootstrap Aggregation (Bagging) in Random Forests', 'Gradient Boosting: Fitting trees to negative gradient residuals', 'XGBoost second-order Taylor expansion & split regularization'],
      math: 'XGBoost Objective: L^(t) ≈ ∑ [g_i f_t(x_i) + 0.5 h_i f_t(x_i)^2] + Ω(f_t), where g_i and h_i are 1st and 2nd derivatives.',
      arch: 'In enterprise production, 70%+ of tabular structured data systems rely on XGBoost or LightGBM pipelines due to fast inference, native handling of missing values, and explainability.',
      code: {
        language: 'python' as const,
        filename: 'xgboost_pipeline.py',
        code: `import numpy as np

class SimpleGradientBooster:
    """Minimal 1D Gradient Booster explaining the core boosting mechanic."""
    def __init__(self, n_estimators=5, lr=0.1):
        self.n_estimators = n_estimators
        self.lr = lr
        self.base_pred = 0.0
        self.trees = []

    def fit(self, X, y):
        self.base_pred = np.mean(y)
        current_preds = np.full_like(y, self.base_pred, dtype=float)

        for _ in range(self.n_estimators):
            # Compute pseudo-residuals (negative gradient of MSE)
            residuals = y - current_preds
            # In production: fit a decision tree to residuals
            # Here: compute mean residual for demonstration
            residual_mean = np.mean(residuals)
            self.trees.append(residual_mean)
            current_preds += self.lr * residual_mean

    def predict(self, X):
        return self.base_pred + self.lr * sum(self.trees)`,
        description: 'Algorithmic intuition of gradient boosting fitting sequential residuals.'
      },
      lab: {
        title: 'Train & Tune an XGBoost Classifier with Early Stopping',
        goal: 'Train an XGBoost model on structured tabular data, set up early stopping on a validation set, and extract SHAP feature importance values.',
        steps: [
          'Load tabular dataset and perform stratified train-val split',
          'Configure early_stopping_rounds=10 to prevent overfitting',
          'Evaluate ROC-AUC and compute feature importances'
        ],
        deliverable: 'Trained model artifact with early stopping curve and SHAP summary plot.'
      },
      checklist: ['Use early stopping to prevent gradient boosted trees from overfitting training noise', 'Set max_depth between 3 and 7 for boosted trees (shallow trees are optimal weak learners)', 'Handle categorical variables with native target/ordinal encoding'],
      pitfalls: ['Using deep trees (depth > 10) in boosting which leads to catastrophic overfitting']
    },
    {
      hour: 8,
      title: 'Unsupervised Learning: K-Means, PCA & UMAP Dimensionality Reduction',
      subtitle: 'Clustering, Latent Representations, Singular Value Decomposition (SVD)',
      chapter: 'Ch 3: Classical ML Paradigms',
      level: 'Intermediate' as const,
      overview: 'Dimensionality reduction and unsupervised pattern discovery. Understand PCA via Singular Value Decomposition (SVD), K-Means clustering, and non-linear manifold projections (t-SNE/UMAP) for visualizing high-dimensional LLM embeddings.',
      keyConcepts: ['K-Means clustering and Lloyd algorithm convergence', 'Singular Value Decomposition (SVD): X = U Σ V^T', 'Principal Component Analysis (PCA) variance maximization', 'UMAP & t-SNE for embedding space inspection'],
      math: 'PCA projection: Z = X V_k, where V_k are the top k eigenvectors of covariance matrix X^T X.',
      arch: 'Embedding databases (Pinecone, Chroma, pgvector) rely on hierarchical clustering (HNSW graphs and IVF-PQ) derived from unsupervised clustering principles to enable sub-millisecond similarity search.',
      code: {
        language: 'python' as const,
        filename: 'pca_from_scratch.py',
        code: `import numpy as np

def compute_pca(X, n_components=2):
    """Compute PCA via SVD from scratch."""
    # 1. Center the data
    X_centered = X - np.mean(X, axis=0)
    # 2. SVD: X = U @ S @ Vt
    U, S, Vt = np.linalg.svd(X_centered, full_matrices=False)
    # 3. Top components
    components = Vt[:n_components]
    # 4. Project data
    X_projected = np.dot(X_centered, components.T)
    # 5. Explained variance ratio
    explained_variance = (S ** 2) / (X.shape[0] - 1)
    ratio = explained_variance[:n_components] / np.sum(explained_variance)
    return X_projected, ratio

# Synthetic test data [100 samples, 10 features]
data = np.random.randn(100, 10)
projected, var_ratio = compute_pca(data, n_components=2)
print(f"Projected shape: {projected.shape}, Explained variance: {var_ratio}")`,
        description: 'Singular Value Decomposition PCA implementation.'
      },
      lab: {
        title: 'Project 1536-Dimensional OpenAI / Gemini Embeddings to 2D with UMAP',
        goal: 'Generate embeddings for 100 domain documents across 3 topics and visualize the semantic clusters in 2D space.',
        steps: ['Generate embeddings for documents', 'Apply UMAP reduction to 2 dimensions', 'Plot interactive scatter chart with cluster labels'],
        deliverable: 'Visual cluster plot proving semantic topic separation in embedding space.'
      },
      checklist: ['Always center and scale data before computing PCA', 'Remember that t-SNE and UMAP are for visualization only, not feature engineering on test sets', 'Check elbow method / silhouette score to select optimal K in K-Means'],
      pitfalls: ['Fitting PCA on the entire dataset before train/test splitting (classic data leakage)']
    },
    {
      hour: 9,
      title: 'Support Vector Machines, Kernel Tricks & Convex Duality',
      subtitle: 'Maximum Margin Hyperplanes, Slack Variables, RBF Kernels',
      chapter: 'Ch 3: Classical ML Paradigms',
      level: 'Intermediate' as const,
      overview: 'Understand maximum-margin separation, the mathematical formulation of Lagrangian duality, support vectors, and how the Kernel Trick maps non-linear data into infinite-dimensional Hilbert spaces.',
      keyConcepts: ['Hard-Margin vs Soft-Margin SVM (C hyperparameter)', 'Karush-Kuhn-Tucker (KKT) conditions and support vectors', 'The Kernel Trick: K(x, z) = ⟨ϕ(x), ϕ(z)⟩ without explicit projection', 'Radial Basis Function (RBF) Gaussian Kernel'],
      math: 'SVM Dual: max_α ∑ α_i - 0.5 ∑∑ α_i α_j y_i y_j K(x_i, x_j) subject to 0 ≤ α_i ≤ C and ∑ α_i y_i = 0.',
      arch: 'The kernel trick mirrors the attention mechanism in Transformers: self-attention can be formalized as a kernel smoother operating on query-key tokens in high-dimensional feature spaces.',
      code: {
        language: 'python' as const,
        filename: 'rbf_kernel.py',
        code: `import numpy as np

def rbf_kernel(x1, x2, gamma=0.5):
    """Radial Basis Function (Gaussian) Kernel matrix."""
    # Squared Euclidean distance ||x1 - x2||^2
    dist_sq = np.sum(x1**2, axis=1)[:, np.newaxis] + np.sum(x2**2, axis=1) - 2 * np.dot(x1, x2.T)
    return np.exp(-gamma * dist_sq)

X = np.array([[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]])
K = rbf_kernel(X, X)
print("Kernel Gram Matrix shape:", K.shape)
print("Diagonal self-similarity (must be 1.0):", np.diag(K))`,
        description: 'Vectorized RBF Kernel Gram matrix computation.'
      },
      lab: {
        title: 'Classify Non-Linearly Separable Concentric Circles with SVM',
        goal: 'Train a linear SVM and an RBF-kernel SVM on concentric circular data (make_circles) and contrast decision boundaries.',
        steps: ['Generate non-linear circles dataset', 'Train linear SVM (observe failure)', 'Train RBF SVM (observe 100% boundary accuracy)'],
        deliverable: 'Side-by-side decision boundary visualization comparing linear vs RBF kernel.'
      },
      checklist: ['Scale features with StandardScaler prior to SVM training (RBF is distance-sensitive)', 'Tune both C (slack penalty) and gamma (kernel width) via grid search', 'Consider linear approximations for datasets exceeding 50,000 samples'],
      pitfalls: ['Training exact non-linear SVMs on million-row datasets due to O(N^2) memory complexity']
    },
    {
      hour: 10,
      title: 'Production ML Evaluation Metrics & Statistical Validation',
      subtitle: 'Precision, Recall, F1, ROC-AUC, PR-AUC, Calibration, and Data Leakage',
      chapter: 'Ch 4: Production ML Lifecycle',
      level: 'Intermediate' as const,
      overview: 'Master real-world model evaluation beyond naive accuracy. Learn how to handle severe class imbalance, construct ROC and Precision-Recall curves, verify probability calibration (Brier score), and eliminate silent data leakage.',
      keyConcepts: ['Confusion Matrix: TP, FP, TN, FN', 'Precision vs Recall tradeoff & F1-Score', 'ROC-AUC vs Precision-Recall AUC under severe imbalance', 'Data Leakage: Target leakage, temporal lookahead, and transform leaks'],
      math: 'F1 = 2 * (Precision * Recall) / (Precision + Recall). Brier Score = (1/N) ∑ (p_i - y_i)^2.',
      arch: 'In production systems (fraud detection, medical diagnosis, click prediction), accuracy is meaningless due to 99:1 class imbalance. Systems must be architected around PR-AUC and cost-weighted utility matrices.',
      code: {
        language: 'python' as const,
        filename: 'production_metrics.py',
        code: `import numpy as np

def compute_metrics(y_true, y_pred_prob, threshold=0.5):
    """Comprehensive binary classification metrics."""
    y_pred = (y_pred_prob >= threshold).astype(int)
    tp = np.sum((y_true == 1) & (y_pred == 1))
    fp = np.sum((y_true == 0) & (y_pred == 1))
    fn = np.sum((y_true == 1) & (y_pred == 0))
    tn = np.sum((y_true == 0) & (y_pred == 0))

    precision = tp / (tp + fp) if (tp + fp) > 0 else 0.0
    recall = tp / (tp + fn) if (tp + fn) > 0 else 0.0
    f1 = 2 * precision * recall / (precision + recall) if (precision + recall) > 0 else 0.0

    return {
        "confusion_matrix": {"TP": int(tp), "FP": int(fp), "FN": int(fn), "TN": int(tn)},
        "precision": float(precision),
        "recall": float(recall),
        "f1_score": float(f1)
    }

print(compute_metrics(np.array([1, 0, 1, 1, 0]), np.array([0.9, 0.2, 0.4, 0.8, 0.1])))`,
        description: 'Production evaluation metrics and confusion matrix calculator.'
      },
      lab: {
        title: 'Audit a Pipeline for 3 Silent Data Leakage Bugs',
        goal: 'Examine a provided Python data preprocessing script containing 3 subtle leakage bugs (scaler fit before split, future timestamp leakage, target encoding leak) and fix them.',
        steps: ['Identify fit_transform called on full X', 'Identify temporal feature sorting violation', 'Implement leak-free scikit-learn Pipeline'],
        deliverable: 'Cleaned pipeline script verified with strict train/test separation.'
      },
      checklist: ['Fit scalers, encoders, and imputers ONLY on the training fold, never on full dataset', 'Use TimeSeriesSplit for temporal data rather than random K-Fold', 'Calibrate probabilities using Platt Scaling or Isotonic Regression if probabilities drive business thresholds'],
      pitfalls: ['Reporting 99.8% accuracy on a fraud dataset where 99.8% of cases are non-fraud']
    },
    {
      hour: 11,
      title: 'Feature Engineering, Selection & Automated ML Pipelines',
      subtitle: 'Target Encoding, Interaction Terms, Variance Thresholds, and Scikit-Learn Pipelines',
      chapter: 'Ch 4: Production ML Lifecycle',
      level: 'Intermediate' as const,
      overview: 'Feature engineering transforms raw domain data into predictive signals. Learn target encoding with smoothing, interaction features, automated feature selection (mutual information), and production pipelines.',
      keyConcepts: ['One-Hot vs Target Encoding with empirical Bayes shrinkage', 'Polynomial and interaction terms', 'Mutual Information & Recursive Feature Elimination (RFE)', 'Scikit-Learn Pipeline & ColumnTransformer deployment packaging'],
      math: 'Smoothed Target Encoding: S_i = (n_i * ȳ_i + m * ȳ_global) / (n_i + m), where m is the smoothing weight.',
      arch: 'Production ML systems require feature pipelines to be serialized alongside model weights (e.g. as ONNX or pickle artifacts) so inference services execute identical transformations in real time.',
      code: {
        language: 'python' as const,
        filename: 'feature_pipeline.py',
        code: `from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.impute import SimpleImputer
from sklearn.ensemble import RandomForestClassifier

# Production ColumnTransformer architecture
numeric_features = ['age', 'income', 'credit_score']
categorical_features = ['education', 'state', 'device_type']

numeric_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler())
])

categorical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='constant', fill_value='missing')),
    ('onehot', OneHotEncoder(handle_unknown='ignore'))
])

preprocessor = ColumnTransformer(transformers=[
    ('num', numeric_transformer, numeric_features),
    ('cat', categorical_transformer, categorical_features)
])

model_pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', RandomForestClassifier(n_estimators=100, random_state=42))
])`,
        description: 'Complete production ColumnTransformer and Pipeline architecture.'
      },
      lab: {
        title: 'Build a Production Scikit-Learn Preprocessing Pipeline',
        goal: 'Construct a reusable ColumnTransformer pipeline that handles missing data, scales numerical values, encodes high-cardinality categories, and exports to a portable artifact.',
        steps: ['Assemble transformer blocks', 'Train pipeline on training set', 'Export to joblib artifact and test inference on raw JSON'],
        deliverable: 'Reusable .joblib serialized pipeline capable of processing raw input records.'
      },
      checklist: ['Use handle_unknown="ignore" in OneHotEncoder to gracefully accept unseen categories at inference', 'Impute missing numerical values using median rather than mean to resist extreme outliers', 'Serialize full Pipeline including transformers so client sends raw unstructured JSON'],
      pitfalls: ['Preprocessing training data in Jupyter cells with manual steps that cannot be reproduced in production APIs']
    },
    {
      hour: 12,
      title: 'Milestone Capstone 1: End-to-End Production ML Engine',
      subtitle: 'Synthesis of autograd, feature engineering, training, and drift monitoring',
      chapter: 'Ch 4: Production ML Lifecycle',
      level: 'Intermediate' as const,
      overview: 'Capstone integration for Module 1. Build an end-to-end predictive pipeline that incorporates custom tensor autograd math, robust tabular feature engineering, cross-validation, and an automated data drift monitor.',
      keyConcepts: ['Module 1 Synthesis', 'Model Serialization & Versioning', 'Population Stability Index (PSI) Drift Detection', 'Automated Validation Report Generation'],
      math: 'PSI = ∑ (Actual% - Expected%) * ln(Actual% / Expected%). A PSI > 0.2 indicates significant distribution shift requiring model retraining.',
      arch: 'Production ML systems do not end when training completes. Continuous monitoring must track input distribution shifts (covariate shift) and model performance degradation (concept shift) in real-time.',
      code: {
        language: 'python' as const,
        filename: 'drift_monitor.py',
        code: `import numpy as np

def calculate_psi(expected, actual, num_buckets=10):
    """Calculate Population Stability Index (PSI) between baseline and production data."""
    def scale_range(arr, min_v, max_v):
        return np.linspace(min_v, max_v, num_buckets + 1)

    min_v = min(np.min(expected), np.min(actual))
    max_v = max(np.max(expected), np.max(actual))
    buckets = scale_range(expected, min_v, max_v)

    expected_counts = np.histogram(expected, bins=buckets)[0]
    actual_counts = np.histogram(actual, bins=buckets)[0]

    # Convert to percentages with small epsilon
    expected_pct = np.clip(expected_counts / len(expected), 1e-4, 1.0)
    actual_pct = np.clip(actual_counts / len(actual), 1e-4, 1.0)

    psi_value = np.sum((actual_pct - expected_pct) * np.log(actual_pct / expected_pct))
    status = "Stable" if psi_value < 0.1 else "Moderate Shift" if psi_value < 0.25 else "Significant Drift - Retrain!"
    return {"psi": float(psi_value), "status": status}

baseline = np.random.normal(0, 1, 1000)
production = np.random.normal(0.6, 1.2, 1000) # Drifted distribution
print(calculate_psi(baseline, production))`,
        description: 'Production Population Stability Index (PSI) data drift calculation.'
      },
      lab: {
        title: 'Deliver Milestone Capstone 1',
        goal: 'Complete all deliverables for Milestone 1: autograd engine verification, tabular pipeline with cross-validation, and PSI drift alerting.',
        steps: [
          'Verify autograd gradient calculation on non-linear multi-variable equations',
          'Train tabular classifier with 5-fold Stratified K-Fold',
          'Simulate production distribution shift and verify PSI triggers retrain alert'
        ],
        deliverable: 'Complete Python package containing autograd, pipeline, and drift detector tests.'
      },
      checklist: ['Store model metadata, commit SHA, and training dataset hash alongside artifacts', 'Set alert thresholds on PSI > 0.2 for automated retraining triggers', 'Generate a clean markdown model card documenting intended use and limitations'],
      pitfalls: ['Deploying models without drift detection, causing silent revenue loss when consumer behavior shifts']
    }
  ];

  // Add Module 1 hours
  m1Topics.forEach((t) => {
    hours.push({
      hour: t.hour,
      title: t.title,
      subtitle: t.subtitle,
      moduleIndex: 1,
      chapter: t.chapter,
      level: t.level,
      durationMinutes: 60,
      overview: t.overview,
      keyConcepts: t.keyConcepts,
      mathAndTheory: t.math,
      architecturalInsight: t.arch,
      codeSnippet: t.code,
      handsOnLab: t.lab,
      productionChecklist: t.checklist,
      antiPatterns: t.pitfalls,
      milestoneReference: t.hour === 12 ? 'Capstone 1' : undefined
    });
  });

  // ================= MODULE 2: HOURS 13 - 28 =================
  const m2Topics = [
    {
      hour: 13,
      title: 'From Perceptrons to Deep MLPs in PyTorch',
      subtitle: 'Layer stacking, activation non-linearities, and universal approximation',
      chapter: 'Ch 5: Deep Feed-Forward Architectures',
      level: 'Beginner' as const,
      overview: 'Construct neural networks from scratch. Move from the single-layer perceptron to multi-layer perceptrons (MLP). Prove the Universal Approximation Theorem and explore modern activations (ReLU, LeakyReLU, GELU, Swish).',
      keyConcepts: ['Perceptron Convergence & Linear Inseparability (XOR problem)', 'Universal Approximation Theorem', 'Modern Non-Linearities: ReLU, GELU (Gaussian Error Linear Unit), Swish/SiLU', 'Weight Initialization: He (Kaiming) vs Xavier (Glorot)'],
      math: 'GELU(x) = x * Φ(x) = x * P(X ≤ x) ≈ 0.5 * x * (1 + tanh(√(2/π) * (x + 0.044715 * x^3))).',
      arch: 'Standard MLPs form the Feed-Forward Network (FFN) blocks of Transformer decoders, which account for ~66% of all parameters in modern LLMs (e.g. Llama, GPT-4).',
      code: {
        language: 'python' as const,
        filename: 'pytorch_mlp.py',
        code: `import torch
import torch.nn as nn

class DeepMLP(nn.Module):
    """Deep Multi-Layer Perceptron with modern GELU activations."""
    def __init__(self, in_features: int, hidden_dim: int, out_features: int, depth: int = 3):
        super().__init__()
        layers = []
        curr_dim = in_features
        for _ in range(depth):
            layers.append(nn.Linear(curr_dim, hidden_dim))
            layers.append(nn.GELU())
            layers.append(nn.Dropout(0.1))
            curr_dim = hidden_dim
        layers.append(nn.Linear(hidden_dim, out_features))
        self.net = nn.Sequential(*layers)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.net(x)

model = DeepMLP(in_features=128, hidden_dim=256, out_features=10)
x = torch.randn(16, 128)
print("Forward pass output shape:", model(x).shape)`,
        description: 'PyTorch deep feed-forward network with GELU activations.'
      },
      lab: {
        title: 'Solve the XOR Problem and Visualize Decision Boundaries',
        goal: 'Train a 2-layer MLP on the classic XOR dataset and visualize how hidden layer representations bend feature space to make XOR linearly separable.',
        steps: ['Create 4 XOR coordinate points', 'Train a 2-hidden-unit network with GELU', 'Plot hidden layer activation coordinates in 2D space'],
        deliverable: 'Plot displaying linear separation achieved in the hidden representation.'
      },
      checklist: ['Use He/Kaiming initialization when using ReLU/GELU to prevent dead neurons', 'Never initialize all weights to zero (breaks symmetry)', 'Add gradient clipping to prevent gradient explosion during deep training'],
      pitfalls: ['Zero initialization causing all hidden units to learn identical features']
    },
    {
      hour: 14,
      title: 'Backpropagation Through Tensors & Gradient Flow',
      subtitle: 'Jacobian matrices, vanishing/exploding gradients, and numerical stability',
      chapter: 'Ch 5: Deep Feed-Forward Architectures',
      level: 'Intermediate' as const,
      overview: 'Master gradient flow in deep networks. Derive tensor backpropagation, analyze the vanishing gradient problem in deep networks, and inspect condition numbers of weight matrices.',
      keyConcepts: ['Vector-Jacobian Products (VJP) in PyTorch backward', 'Vanishing & Exploding Gradients in deep stacks', 'Gradient Norm Monitoring: torch.nn.utils.clip_grad_norm_', 'Precision Formats: FP32, FP16, BF16 (Brain Floating Point)'],
      math: 'Vector-Jacobian Product: v^T J = v^T (∂y/∂x). PyTorch accumulates v^T J directly without materializing full N x M Jacobian matrices in memory.',
      arch: 'BF16 (Brain Float 16) has the same 8-bit dynamic exponent range as FP32, making it the industry standard for LLM training and eliminating FP16 loss scaling underflows.',
      code: {
        language: 'python' as const,
        filename: 'gradient_flow_monitor.py',
        code: `import torch
import torch.nn as nn

def check_gradient_flow(model: nn.Module):
    """Audit layer-by-layer gradient norms to detect vanishing or exploding gradients."""
    stats = []
    for name, param in model.named_parameters():
        if param.requires_grad and param.grad is not None:
            norm = param.grad.norm().item()
            stats.append({"layer": name, "grad_norm": norm})
    return stats

# Test model gradient audit
model = nn.Sequential(nn.Linear(10, 50), nn.ReLU(), nn.Linear(50, 1))
loss = model(torch.randn(8, 10)).sum()
loss.backward()
print("Gradient stats:", check_gradient_flow(model))`,
        description: 'Layer-by-layer gradient norm diagnostic monitor.'
      },
      lab: {
        title: 'Diagnose and Fix Vanishing Gradients in a 20-Layer Network',
        goal: 'Train a 20-layer neural network with Sigmoid activations (observe gradient collapse to zero), then fix it using modern Residual Connections and GELU.',
        steps: ['Build 20-layer Sigmoid network and track layer 1 gradient', 'Replace with Residual GELU network', 'Verify healthy gradient propagation to initial layers'],
        deliverable: 'Gradient norm comparison chart demonstrating healthy flow through skip connections.'
      },
      checklist: ['Clip gradient norms at 1.0 using clip_grad_norm_ to stabilize training', 'Prefer bfloat16 over float16 on modern NVIDIA GPUs (Ampere/Hopper)', 'Monitor gradient norms in Weights & Biases or TensorBoard'],
      pitfalls: ['Training deep networks with Sigmoid activations leading to near-zero gradients at early layers']
    },
    {
      hour: 15,
      title: 'Convolutional Neural Networks (CNNs) & Computer Vision Foundations',
      subtitle: 'Convolutions, receptive fields, stride, padding, and pooling',
      chapter: 'Ch 6: Spatial & Sequence Architectures',
      level: 'Intermediate' as const,
      overview: 'Spatial inductive bias in computer vision. Understand 2D cross-correlations, kernel weights, stride, dilation, receptive field expansion, and modern ConvNeXt architectures.',
      keyConcepts: ['Spatial Translation Invariance & Weight Sharing', 'Receptive Field formula: RF_out = RF_in + (k - 1) * stride', 'Dilated (Atrous) Convolutions for dense semantic segmentation', 'Modern ConvNeXt: Modernizing CNNs with 7x7 depthwise convolutions and inverted bottlenecks'],
      math: 'Output spatial dimension: O = ⌊(W - K + 2P) / S⌋ + 1, where W=width, K=kernel, P=padding, S=stride.',
      arch: 'Depthwise separable convolutions decompose standard convolutions into spatial filtering + 1x1 pointwise channel mixing, cutting computation by 80-90% (MobileNet).',
      code: {
        language: 'python' as const,
        filename: 'convnet_block.py',
        code: `import torch
import torch.nn as nn

class DepthwiseSeparableConv(nn.Module):
    """Efficient depthwise separable convolution block."""
    def __init__(self, in_channels: int, out_channels: int, stride: int = 1):
        super().__init__()
        # 1. Depthwise: spatial filtering per channel
        self.depthwise = nn.Conv2d(
            in_channels, in_channels, kernel_size=3, stride=stride,
            padding=1, groups=in_channels, bias=False
        )
        # 2. Pointwise: 1x1 channel mixing
        self.pointwise = nn.Conv2d(in_channels, out_channels, kernel_size=1, bias=False)
        self.norm = nn.BatchNorm2d(out_channels)
        self.act = nn.GELU()

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.act(self.norm(self.pointwise(self.depthwise(x))))

block = DepthwiseSeparableConv(in_channels=64, out_channels=128)
print("Output tensor:", block(torch.randn(2, 64, 32, 32)).shape)`,
        description: 'Depthwise separable convolution block in PyTorch.'
      },
      lab: {
        title: 'Compute and Verify Effective Receptive Field',
        goal: 'Calculate the mathematical receptive field of a 4-layer CNN and verify empirically by backpropagating a single output pixel gradient to the input image.',
        steps: ['Derive theoretical receptive field formula', 'Backprop unit gradient from central pixel', 'Plot input gradient heatmap to visualize receptive field'],
        deliverable: 'Visual receptive field heatmap showing effective Gaussian focus.'
      },
      checklist: ['Use odd kernel sizes (3x3, 5x5, 7x7) so symmetric padding is exact', 'Keep batch size large enough for stable BatchNorm statistics (≥32) or use GroupNorm', 'Use global average pooling instead of flattening large feature maps to prevent parameter explosion'],
      pitfalls: ['Flattening high-resolution conv features directly into dense layers, consuming gigabytes of memory']
    },
    {
      hour: 16,
      title: 'Residual Networks (ResNet) & The Skip Connection Revolution',
      subtitle: 'Degradation problem, identity mappings, and Highway Networks',
      chapter: 'Ch 6: Spatial & Sequence Architectures',
      level: 'Intermediate' as const,
      overview: 'Why adding layers stopped improving performance until He et al. introduced Residual Networks (ResNet). Skip connections create direct gradient highways (F(x) + x) allowing networks to scale to 1000+ layers.',
      keyConcepts: ['The Degradation Problem (accuracy saturates then rapidly degrades without overfitting)', 'Residual Formulation: H(x) = F(x) + x', 'Identity Shortcut Mappings & Gradient Preservation: ∂L/∂x = (∂L/∂H) * (∂F/∂x + I)', 'Pre-Activation ResNet vs Post-Activation ResNet'],
      math: 'Gradient of Residual block: ∂Loss/∂x_l = (∂Loss/∂x_L) * (I + ∂/∂x_l ∑ F_i). The identity term I guarantees gradients propagate unimpeded across arbitrary depths.',
      arch: 'Every modern Transformer block uses residual connections (x + MultiHeadAttention(x) and x + MLP(x)). Without residual shortcuts, deep LLMs cannot be trained.',
      code: {
        language: 'python' as const,
        filename: 'residual_block.py',
        code: `import torch
import torch.nn as nn

class ResNetBlock(nn.Module):
    """Standard Residual Bottleneck Block with identity shortcut."""
    def __init__(self, channels: int):
        super().__init__()
        self.conv1 = nn.Conv2d(channels, channels, kernel_size=3, padding=1, bias=False)
        self.bn1 = nn.BatchNorm2d(channels)
        self.act = nn.ReLU(inplace=True)
        self.conv2 = nn.Conv2d(channels, channels, kernel_size=3, padding=1, bias=False)
        self.bn2 = nn.BatchNorm2d(channels)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        # F(x) residual branch
        residual = self.conv2(self.act(self.bn1(self.conv1(x))))
        residual = self.bn2(residual)
        # Identity shortcut addition: F(x) + x
        return self.act(residual + x)

x = torch.randn(4, 64, 32, 32)
block = ResNetBlock(64)
print("Residual output shape:", block(x).shape)`,
        description: 'Residual block implementing identity shortcut addition.'
      },
      lab: {
        title: 'Train a 50-Layer Network With and Without Residual Connections',
        goal: 'Train a 50-layer plain convolutional network and a 50-layer ResNet on CIFAR-10. Observe plain network training failure vs ResNet rapid convergence.',
        steps: ['Build plain 50-layer CNN', 'Build 50-layer ResNet with skip connections', 'Compare training loss curves over 10 epochs'],
        deliverable: 'Loss comparison graph proving skip connections eliminate optimization barriers.'
      },
      checklist: ['Ensure channel and spatial dimensions match before adding residual (or project with 1x1 conv)', 'Use inplace=True in ReLU activations to save GPU memory', 'Initialize the final norm layer in residual branch to zero (Zero-Init) for easier initial identity routing'],
      pitfalls: ['Placing non-linearities directly on the shortcut connection, destroying the gradient highway']
    },
    {
      hour: 17,
      title: 'Recurrent Neural Networks (RNNs) to LSTMs & GRUs',
      subtitle: 'Sequential dependencies, vanishing time gradients, gating mechanisms',
      chapter: 'Ch 6: Spatial & Sequence Architectures',
      level: 'Intermediate' as const,
      overview: 'Deconstruct sequential modeling before Transformers. Learn standard RNNs, Backpropagation Through Time (BPTT), vanishing gradients over long sequences, and how LSTMs and GRUs introduced cell state memory gates.',
      keyConcepts: ['Backpropagation Through Time (BPTT) and sequential unrolling', 'Vanishing & Exploding Gradients across time steps: W^T matrix powers', 'Long Short-Term Memory (LSTM): Forget gate, Input gate, Cell state, Output gate', 'Gated Recurrent Unit (GRU): Reset and Update gates'],
      math: 'LSTM Forget Gate: f_t = σ(W_f · [h_{t-1}, x_t] + b_f). Cell state: C_t = f_t * C_{t-1} + i_t * C̃_t.',
      arch: 'The fundamental bottleneck of RNNs/LSTMs is their sequential nature: token t cannot be processed until token t-1 finishes. This prevents parallel hardware acceleration and led directly to the Transformer revolution.',
      code: {
        language: 'python' as const,
        filename: 'lstm_cell.py',
        code: `import torch
import torch.nn as nn

class MinimalLSTMCell(nn.Module):
    """LSTM cell mechanics from mathematical equations."""
    def __init__(self, input_size: int, hidden_size: int):
        super().__init__()
        self.hidden_size = hidden_size
        # Combined weights for all 4 gates [forget, input, candidate, output]
        self.weight_ih = nn.Linear(input_size, 4 * hidden_size)
        self.weight_hh = nn.Linear(hidden_size, 4 * hidden_size)

    def forward(self, x: torch.Tensor, state: tuple[torch.Tensor, torch.Tensor]):
        h_prev, c_prev = state
        gates = self.weight_ih(x) + self.weight_hh(h_prev)
        f_gate, i_gate, c_cand, o_gate = gates.chunk(4, dim=-1)

        f = torch.sigmoid(f_gate)
        i = torch.sigmoid(i_gate)
        c_cand = torch.tanh(c_cand)
        o = torch.sigmoid(o_gate)

        c_next = f * c_prev + i * c_cand
        h_next = o * torch.tanh(c_next)
        return h_next, (h_next, c_next)`,
        description: 'Raw PyTorch LSTM cell implementation deconstructing 4 gates.'
      },
      lab: {
        title: 'Benchmark Sequential Bottleneck: RNN vs Parallel Matrix Multiplies',
        goal: 'Benchmark time taken by an RNN running across 512 sequential steps versus an attention matrix computing across all 512 tokens in a single parallel GPU operation.',
        steps: ['Run 512-step LSTM loop in PyTorch', 'Run single matrix multiply of equivalent dimension', 'Compare wall-clock milliseconds'],
        deliverable: 'Benchmark table showing parallel operations executing 30x faster on modern hardware.'
      },
      checklist: ['Initialize LSTM forget gate bias to 1.0 to prevent premature forgetting at the start of training', 'Use truncated BPTT when processing long documents to avoid out-of-memory errors', 'Recognize when modern alternatives (State-Space Models / Mamba) should be evaluated'],
      pitfalls: ['Attempting to train standard vanilla RNNs on sequences longer than 50 tokens']
    },
    {
      hour: 18,
      title: 'Seq2Seq Architectures & The Birth of Attention (Bahdanau)',
      subtitle: 'The fixed-length vector bottleneck and additive alignment',
      chapter: 'Ch 7: The Attention Revolution',
      level: 'Intermediate' as const,
      overview: 'Trace the breakthrough that birthed modern GenAI: the Seq2Seq encoder-decoder bottleneck. Why compressing a 50-word sentence into a single 512-dim vector failed, and how Bahdanau introduced additive alignment (attention).',
      keyConcepts: ['The Information Bottleneck of fixed-dimensional context vectors', 'Bahdanau Additive Attention: e_{ij} = v_a^T tanh(W_a s_{i-1} + U_a h_j)', 'Luong Dot-Product Attention: score(s_t, h_i) = s_t^T h_i', 'Dynamic Context Vector: c_t = ∑ α_{ti} h_i'],
      math: 'Attention weights: α_{ij} = exp(e_{ij}) / ∑_k exp(e_{ik}). Context vector: c_i = ∑_j α_{ij} h_j.',
      arch: 'Attention acts as a soft, differentiable hash table: given a Query (what we seek), compare against Keys (memory address tags) to retrieve a weighted sum of Values (memory contents).',
      code: {
        language: 'python' as const,
        filename: 'bahdanau_attention.py',
        code: `import torch
import torch.nn as nn

class BahdanauAdditiveAttention(nn.Module):
    """Additive alignment attention mechanism."""
    def __init__(self, hidden_dim: int):
        super().__init__()
        self.W_query = nn.Linear(hidden_dim, hidden_dim, bias=False)
        self.W_key = nn.Linear(hidden_dim, hidden_dim, bias=False)
        self.v = nn.Linear(hidden_dim, 1, bias=False)

    def forward(self, query: torch.Tensor, keys: torch.Tensor) -> tuple[torch.Tensor, torch.Tensor]:
        # query: [batch, 1, hidden_dim], keys: [batch, seq_len, hidden_dim]
        scores = self.v(torch.tanh(self.W_query(query) + self.W_key(keys))) # [batch, seq_len, 1]
        attn_weights = torch.softmax(scores.squeeze(-1), dim=-1) # [batch, seq_len]
        context = torch.bmm(attn_weights.unsqueeze(1), keys) # [batch, 1, hidden_dim]
        return context, attn_weights

attn = BahdanauAdditiveAttention(128)
q = torch.randn(4, 1, 128); k = torch.randn(4, 20, 128)
ctx, weights = attn(q, k)
print("Context shape:", ctx.shape, "Sum of weights per sample:", weights[0].sum().item())`,
        description: 'Additive attention mechanism with query-key projection.'
      },
      lab: {
        title: 'Visualize Alignment Heatmap for Machine Translation',
        goal: 'Generate an attention alignment matrix for an English-to-French sentence and visualize word-by-word cross-attention alignment.',
        steps: ['Compute attention weight matrix across source and target tokens', 'Plot heatmap with tokens as axes', 'Observe diagonal and inverted alignments for adjectives'],
        deliverable: 'Visual alignment heatmap confirming attention captures grammatical word re-orderings.'
      },
      checklist: ['Verify attention weights along sequence dimension sum exactly to 1.0 (softmax property)', 'Mask out padding tokens prior to softmax to prevent padding embeddings from corrupting the context', 'Use scaled dot-product attention instead of additive attention when GPU parallelization is required'],
      pitfalls: ['Forgetting to mask padding tokens, causing attention distribution to dilute over empty padding']
    },
    {
      hour: 19,
      title: 'Scaled Dot-Product Attention: Derivation & Mechanics',
      subtitle: 'The core equation: Attention(Q, K, V) = softmax(QK^T / √d_k) V',
      chapter: 'Ch 7: The Attention Revolution',
      level: 'Advanced' as const,
      overview: 'The most influential equation in contemporary AI. Derive Scaled Dot-Product Attention step by step. Understand the critical role of the scaling factor 1/√d_k in preventing softmax gradient saturation.',
      keyConcepts: ['Query, Key, and Value vector roles', 'Dot-Product Matrix Multiplication: Q K^T', 'Why scale by √d_k: Variance preservation of sum of independent products', 'Causal Masking (Lower Triangular) for Autoregressive Generation'],
      math: 'Attention(Q, K, V) = softmax( (Q K^T) / √d_k ) V. Var(q · k) = d_k. Scaling by 1/√d_k restores variance to 1.0.',
      arch: 'Scaled Dot-Product Attention runs as a single fused GPU kernel in modern production (FlashAttention), eliminating intermediate HBM reads and writes for quadratic speedups.',
      code: {
        language: 'python' as const,
        filename: 'scaled_dot_product.py',
        code: `import torch
import math

def scaled_dot_product_attention(
    Q: torch.Tensor,
    K: torch.Tensor,
    V: torch.Tensor,
    mask: torch.Tensor = None
) -> tuple[torch.Tensor, torch.Tensor]:
    """Pure PyTorch Scaled Dot-Product Attention with optional causal mask."""
    d_k = Q.size(-1)
    # 1. Compute raw affinity scores [batch, seq_q, seq_k]
    scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)

    # 2. Apply causal mask (set masked positions to -infinity)
    if mask is not None:
        scores = scores.masked_fill(mask == 0, float('-inf'))

    # 3. Softmax over key sequence dimension
    attn_weights = torch.softmax(scores, dim=-1)

    # 4. Multiply by Values
    output = torch.matmul(attn_weights, V)
    return output, attn_weights

# Verification test
batch, seq_len, d_k = 2, 8, 64
q = torch.randn(batch, seq_len, d_k)
k = torch.randn(batch, seq_len, d_k)
v = torch.randn(batch, seq_len, d_k)
# Causal lower-triangular mask
causal_mask = torch.tril(torch.ones(seq_len, seq_len))
out, w = scaled_dot_product_attention(q, k, v, causal_mask)
print("Output shape:", out.shape, "Attention mask upper-right (must be 0.0):", w[0, 0, 1].item())`,
        description: 'Scaled Dot-Product Attention with causal masking.'
      },
      lab: {
        title: 'Verify the Softmax Saturation Phenomenon Empirically',
        goal: 'Simulate high-dimensional queries and keys (d_k=1024) without scaling by √d_k. Show that softmax probabilities collapse to one-hot vectors and backprop gradients vanish to zero.',
        steps: [
          'Generate Q, K vectors with d_k=1024 from normal distribution N(0, 1)',
          'Compute unscaled QK^T and measure maximum logit magnitude',
          'Compute gradients with and without 1/√d_k',
          'Verify gradient norm drops by orders of magnitude without scaling'
        ],
        deliverable: 'Empirical script proving that scaling factor prevents vanishing gradients.'
      },
      checklist: ['Always use float("-inf") for masked tokens so softmax computes exact zero probability', 'Verify key dimension d_k matches query dimension d_k', 'Ensure causal mask is lower triangular (torch.tril) for autoregressive language generation'],
      pitfalls: ['Masking with large negative values like -1e9 in FP16, which can overflow/underflow to NaN']
    },
    {
      hour: 20,
      title: 'Multi-Head Attention (MHA) & Multi-Query / Grouped-Query Attention (GQA)',
      subtitle: 'Subspace representation, MHA vs MQA vs GQA in Llama 3',
      chapter: 'Ch 7: The Attention Revolution',
      level: 'Advanced' as const,
      overview: 'Deconstruct Multi-Head Attention. Why multiple heads allow attending to different subspace aspects simultaneously (syntactic, semantic, temporal). Then study modern efficiency variants: Multi-Query Attention (MQA) and Grouped-Query Attention (GQA).',
      keyConcepts: ['Multi-Head Attention: Splitting d_model into h heads of dimension d_k', 'Multi-Query Attention (MQA): Single shared K and V head for all Q heads', 'Grouped-Query Attention (GQA): Partitioning Q heads into groups sharing KV heads (used in Llama 3 and Mistral)', 'Memory bandwidth comparison during autoregressive inference'],
      math: 'MHA: MultiHead(Q,K,V) = Concat(head_1, ..., head_h) W_O. GQA reduces KV cache memory footprint by a factor of (num_heads / num_kv_groups) (e.g. 8x reduction in Llama 3 70B).',
      arch: 'During LLM generation, inference is memory-bandwidth bound, not compute bound. Loading KV-cache from HBM limits tokens per second. GQA slashes KV-cache memory traffic by 75-87%, dramatically boosting serving throughput.',
      code: {
        language: 'python' as const,
        filename: 'grouped_query_attention.py',
        code: `import torch
import torch.nn as nn
import math

class GroupedQueryAttention(nn.Module):
    """Grouped-Query Attention (GQA) as used in Llama 3."""
    def __init__(self, d_model: int, num_heads: int, num_kv_heads: int):
        super().__init__()
        self.d_model = d_model
        self.num_heads = num_heads
        self.num_kv_heads = num_kv_heads
        self.head_dim = d_model // num_heads
        self.num_queries_per_kv = num_heads // num_kv_heads

        self.W_q = nn.Linear(d_model, num_heads * self.head_dim, bias=False)
        self.W_k = nn.Linear(d_model, num_kv_heads * self.head_dim, bias=False)
        self.W_v = nn.Linear(d_model, num_kv_heads * self.head_dim, bias=False)
        self.W_o = nn.Linear(num_heads * self.head_dim, d_model, bias=False)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        b, seq, _ = x.shape
        q = self.W_q(x).view(b, seq, self.num_heads, self.head_dim).transpose(1, 2)
        k = self.W_k(x).view(b, seq, self.num_kv_heads, self.head_dim).transpose(1, 2)
        v = self.W_v(x).view(b, seq, self.num_kv_heads, self.head_dim).transpose(1, 2)

        # Expand KV heads to match query heads
        k = k.repeat_interleave(self.num_queries_per_kv, dim=1)
        v = v.repeat_interleave(self.num_queries_per_kv, dim=1)

        scores = torch.matmul(q, k.transpose(-2, -1)) / math.sqrt(self.head_dim)
        attn = torch.softmax(scores, dim=-1)
        out = torch.matmul(attn, v).transpose(1, 2).contiguous().view(b, seq, -1)
        return self.W_o(out)

gqa = GroupedQueryAttention(d_model=512, num_heads=8, num_kv_heads=2)
print("GQA Output shape:", gqa(torch.randn(2, 16, 512)).shape)`,
        description: 'Grouped-Query Attention (GQA) module in PyTorch.'
      },
      lab: {
        title: 'Calculate KV Cache VRAM Consumption for MHA vs GQA',
        goal: 'Write a calculator function that computes the exact gigabytes of VRAM required to store KV cache for 100 concurrent users at 8K context length for MHA vs GQA.',
        steps: [
          'Formulate KV cache bytes = 2 * 2 * layers * kv_heads * head_dim * seq_len * batch * dtype_bytes',
          'Calculate for Llama-3-70B using MHA (64 KV heads)',
          'Calculate using GQA (8 KV heads)',
          'Verify GQA saves over 85% VRAM'
        ],
        deliverable: 'Calculator function demonstrating reduction from 120GB to 15GB VRAM.'
      },
      checklist: ['Use GQA in production LLM architectures to optimize inference serving', 'Ensure num_heads is an exact integer multiple of num_kv_heads', 'Keep head_dim as 64 or 128 for optimal Tensor Core hardware utilization'],
      pitfalls: ['Using full MHA for long-context (32k+) inference leading to out-of-memory errors on serving GPUs']
    },
    {
      hour: 21,
      title: 'Positional Encodings: Sinusoidal, Learned, ALiBi & RoPE',
      subtitle: 'Injecting order: From Attention Is All You Need to Rotary Position Embedding',
      chapter: 'Ch 8: Deep Transformer Engineering',
      level: 'Advanced' as const,
      overview: 'Transformers are permutation invariant: without positional encodings, "dog bites man" is identical to "man bites dog". Trace positional encodings from sinusoidal formulations to Rotary Position Embeddings (RoPE) used in almost all modern LLMs.',
      keyConcepts: ['Permutation Invariance of Attention', 'Sinusoidal Positional Encodings (Vaswani et al.)', 'ALiBi (Attention with Linear Biases): Linear distance penalty on attention logits', 'Rotary Position Embeddings (RoPE): Rotating query and key 2D subspaces in complex plane'],
      math: 'RoPE rotation: R_θ,m x_m = [x1 cos(mθ) - x2 sin(mθ), x1 sin(mθ) + x2 cos(mθ)]. Inner product ⟨R_m q, R_n k⟩ depends solely on relative distance (m - n).',
      arch: 'RoPE naturally encodes relative distance while preserving absolute position. It allows length extrapolation via NTK-aware RoPE scaling and YaRN (Yet another RoPE extensioN) to expand context to 128K+ tokens.',
      code: {
        language: 'python' as const,
        filename: 'rotary_embeddings.py',
        code: `import torch

def precompute_rope_frequencies(dim: int, seq_len: int, theta: float = 10000.0):
    """Precompute complex exponential frequencies for RoPE."""
    # dim must be even
    freqs = 1.0 / (theta ** (torch.arange(0, dim, 2)[: (dim // 2)].float() / dim))
    t = torch.arange(seq_len, dtype=torch.float32)
    freqs = torch.outer(t, freqs)
    # Cosine and sine tables
    cos = torch.cos(freqs)
    sin = torch.sin(freqs)
    return cos, sin

def apply_rotary_emb(x: torch.Tensor, cos: torch.Tensor, sin: torch.Tensor) -> torch.Tensor:
    """Apply RoPE rotation to 2D paired channels."""
    # x: [batch, seq, heads, dim]
    d = x.shape[-1]
    x1 = x[..., :d//2]
    x2 = x[..., d//2:]
    # Rotate 90 degrees: [-x2, x1]
    rotated_x = torch.cat([-x2, x1], dim=-1)
    cos = cos.unsqueeze(0).unsqueeze(2) # [1, seq, 1, dim//2]
    sin = sin.unsqueeze(0).unsqueeze(2)
    cos = torch.cat([cos, cos], dim=-1)
    sin = torch.cat([sin, sin], dim=-1)
    return x * cos + rotated_x * sin

cos, sin = precompute_rope_frequencies(dim=64, seq_len=16)
q = torch.randn(2, 16, 4, 64)
q_rotated = apply_rotary_emb(q, cos, sin)
print("RoPE rotated shape:", q_rotated.shape)`,
        description: 'Rotary Position Embedding (RoPE) implementation.'
      },
      lab: {
        title: 'Verify Relative Position Invariance of RoPE',
        goal: 'Compute the dot product ⟨RoPE(q, pos=m), RoPE(k, pos=n)⟩ and prove mathematically and computationally that shifting both positions by +Δ does not change the dot product.',
        steps: [
          'Rotate q at pos 5, k at pos 8 (distance = 3)',
          'Rotate q at pos 15, k at pos 18 (distance = 3)',
          'Verify dot products match within floating point tolerance'
        ],
        deliverable: 'Unit test verifying relative distance invariance of RoPE.'
      },
      checklist: ['Only apply RoPE to queries and keys, NEVER to values (Values carry content, not position)', 'Store precomputed cos and sin tables in GPU memory to avoid recomputation during decoding', 'Use base frequency theta=500000.0 for long context (>32K) extensions'],
      pitfalls: ['Applying RoPE to values V, which corrupts content representations']
    },
    {
      hour: 22,
      title: 'Feed-Forward Networks: SwiGLU & Activation Innovations',
      subtitle: 'The memory bank of Transformers: Gated Linear Units and Swish activations',
      chapter: 'Ch 8: Deep Transformer Engineering',
      level: 'Advanced' as const,
      overview: 'Deconstruct the MLP block inside Transformers. Understand why standard ReLU / GELU layers were replaced by SwiGLU (Swish Gated Linear Unit) in modern architectures (PaLM, Llama 2/3, Mistral, Gemma).',
      keyConcepts: ['FFN as Key-Value associative memory of factual knowledge', 'Gated Linear Units (GLU): Bilinear gating with element-wise product', 'SwiGLU Formulation: SwiGLU(x) = (x W_gate * Swish) ⊗ (x W_up) W_down', 'Dimension adjustment: 2/3 * 4 * d_model to preserve parameter count'],
      math: 'SwiGLU(x) = (Swish(x W_gate) ⊗ x W_up) W_down, where Swish(z) = z * σ(z).',
      arch: 'Empirical studies across Google (PaLM) and Meta (Llama) demonstrated that SwiGLU significantly outperforms standard ReLU and GELU MLPs at equal parameter counts.',
      code: {
        language: 'python' as const,
        filename: 'swiglu_block.py',
        code: `import torch
import torch.nn as nn
import torch.nn.functional as F

class SwiGLU(nn.Module):
    """Llama-style SwiGLU Feed-Forward Network."""
    def __init__(self, d_model: int, hidden_dim: int = None):
        super().__init__()
        # 2/3 * 4 * d_model maintains parameter count when using 3 weight matrices
        if hidden_dim is None:
            hidden_dim = int(2 * (4 * d_model) / 3)
            # Round to nearest multiple of 256 for GPU tensor core alignment
            hidden_dim = 256 * ((hidden_dim + 256 - 1) // 256)

        self.w_gate = nn.Linear(d_model, hidden_dim, bias=False)
        self.w_up = nn.Linear(d_model, hidden_dim, bias=False)
        self.w_down = nn.Linear(hidden_dim, d_model, bias=False)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        # Swish(x * W_gate) * (x * W_up) -> projected down
        return self.w_down(F.silu(self.w_gate(x)) * self.w_up(x))

x = torch.randn(2, 16, 512)
swiglu = SwiGLU(512)
print("SwiGLU output shape:", swiglu(x).shape)`,
        description: 'Llama-style SwiGLU Feed-Forward network.'
      },
      lab: {
        title: 'Benchmark Parameter Count: Standard MLP vs SwiGLU',
        goal: 'Implement standard 2-matrix MLP with hidden_dim=4*d_model and 3-matrix SwiGLU with hidden_dim=(8/3)*d_model and verify both share approximately identical parameter counts.',
        steps: ['Instantiate standard MLP and count trainable parameters', 'Instantiate SwiGLU and count parameters', 'Verify parameter difference is < 2%'],
        deliverable: 'Parameter budget report proving equal footprint with superior gating capacity.'
      },
      checklist: ['Round hidden dimension to multiples of 256 or 64 to optimize NVIDIA Tensor Core memory alignments', 'Omit bias vectors in linear layers (bias=False) to reduce parameter count and increase training throughput', 'Use F.silu for PyTorch native fused kernel implementation of Swish'],
      pitfalls: ['Setting hidden_dim to 4*d_model with 3 weight matrices, accidentally increasing parameter count by 50%']
    },
    {
      hour: 23,
      title: 'KV-Caching Mechanics & Autoregressive Decoding',
      subtitle: 'Eliminating quadratic recomputation during token generation',
      chapter: 'Ch 8: Deep Transformer Engineering',
      level: 'Advanced' as const,
      overview: 'Master the fundamental mechanics of LLM text generation. Understand why naive generation recomputes all past tokens at O(N^2) complexity, and how KV-caching stores past keys and values to achieve O(1) compute per new token.',
      keyConcepts: ['Prefill Phase (Prompt ingestion: compute-bound) vs Decode Phase (Token generation: memory-bound)', 'The KV-Cache Data Structure: Appending [batch, heads, 1, head_dim] per step', 'Time-to-First-Token (TTFT) vs Inter-Token Latency (ITL)', 'PagedAttention: Virtual memory paging for KV-cache (vLLM)'],
      math: 'Without KV-Cache: Total operations for generating N tokens = ∑_{i=1}^N i ≈ O(N^2). With KV-Cache: O(1) attention operations per token step.',
      arch: 'KV-Cache is the single largest consumer of GPU VRAM during production LLM serving. Managing KV cache fragmentation is why vLLM created PagedAttention, increasing serving capacity by 2-4x.',
      code: {
        language: 'python' as const,
        filename: 'kv_cache_demo.py',
        code: `import torch

class SimpleKVCache:
    """Manages Key and Value tensors across autoregressive generation steps."""
    def __init__(self):
        self.k_cache = None
        self.v_cache = None

    def update(self, new_k: torch.Tensor, new_v: torch.Tensor):
        # new_k: [batch, heads, 1, head_dim]
        if self.k_cache is None:
            self.k_cache = new_k
            self.v_cache = new_v
        else:
            self.k_cache = torch.cat([self.k_cache, new_k], dim=2)
            self.v_cache = torch.cat([self.v_cache, new_v], dim=2)
        return self.k_cache, self.v_cache

# Simulation of decoding 5 consecutive tokens
cache = SimpleKVCache()
for step in range(5):
    k_token = torch.randn(1, 4, 1, 64)
    v_token = torch.randn(1, 4, 1, 64)
    full_k, full_v = cache.update(k_token, v_token)
    print(f"Step {step+1}: Cached sequence length = {full_k.size(2)}")`,
        description: 'Step-by-step KV cache accumulation.'
      },
      lab: {
        title: 'Benchmark Autoregressive Generation Speed With vs Without KV-Cache',
        goal: 'Generate 100 tokens using a toy Transformer model in two modes: (1) re-passing the entire growing context every step, and (2) caching past K and V tensors. Measure elapsed seconds.',
        steps: ['Run 100 generation steps without cache', 'Run 100 generation steps with cache', 'Plot execution time per step for both approaches'],
        deliverable: 'Plot demonstrating flat O(1) latency for KV-cache vs linear upward climbing latency for naive generation.'
      },
      checklist: ['Pre-allocate maximum sequence length KV-cache buffers to avoid costly torch.cat GPU memory reallocations', 'Deallocate KV-cache immediately upon receiving EOS (End-Of-Sequence) token', 'Track GPU memory utilization to prevent Out-Of-Memory (OOM) during batch concurrent decoding'],
      pitfalls: ['Using repeated torch.cat in a loop for millions of tokens, fragmenting GPU VRAM and triggering memory copy overhead']
    },
    {
      hour: 24,
      title: 'FlashAttention-1, 2 & 3: Tiling, Recomputation & Hardware Mechanics',
      subtitle: 'IO-Aware attention: SRAM vs HBM memory hierarchy optimization',
      chapter: 'Ch 8: Deep Transformer Engineering',
      level: 'Expert' as const,
      overview: 'Understand Tri Dao’s FlashAttention revolution. Discover why standard attention is bottlenecked by GPU High-Bandwidth Memory (HBM) reads/writes, and how tiling, online softmax normalization, and gradient recomputation achieved a 2-4x speedup.',
      keyConcepts: ['GPU Memory Hierarchy: SRAM (Fast on-chip, small ~256KB/SM) vs HBM (Slow, large 80GB)', 'Memory-Bound vs Compute-Bound Kernels & Roofline Model', 'Online Softmax Algorithm (Milakov & Gimelshein / FlashAttention)', 'Recomputing Attention during Backward pass instead of storing O(N^2) activation matrices'],
      math: 'Standard Attention HBM accesses: O(N d + N^2). FlashAttention HBM accesses: O(N^2 d^2 / M), where M is SRAM size. No N^2 matrix is ever written to HBM.',
      arch: 'FlashAttention does not approximate attention: it computes mathematically EXACT attention. It runs faster because reading and writing to GPU SRAM is 10-20x faster than reading from main GPU HBM.',
      code: {
        language: 'python' as const,
        filename: 'online_softmax.py',
        code: `import torch

def online_softmax(x: torch.Tensor):
    """Demonstration of Online Softmax computed in streaming blocks without storing full matrix."""
    # Simulating two incoming chunks of logits
    chunk1 = x[:4]
    chunk2 = x[4:]

    # Pass 1 on chunk 1
    m1 = chunk1.max().item()
    d1 = torch.exp(chunk1 - m1).sum().item()

    # Pass 2 on chunk 2 with running correction
    m2 = chunk2.max().item()
    m_new = max(m1, m2)
    d2 = torch.exp(chunk2 - m2).sum().item()
    d_new = d1 * torch.exp(torch.tensor(m1 - m_new)).item() + d2 * torch.exp(torch.tensor(m2 - m_new)).item()

    # Output probabilities for chunk 1
    p1 = torch.exp(chunk1 - m_new) / d_new
    p2 = torch.exp(chunk2 - m_new) / d_new
    p_online = torch.cat([p1, p2])

    p_standard = torch.softmax(x, dim=0)
    print("Max difference from standard softmax:", (p_online - p_standard).abs().max().item())

online_softmax(torch.tensor([2.0, 5.0, 1.0, 8.0, 3.0, 6.0, 7.0, 4.0]))`,
        description: 'Online Softmax numerical stability and block combination algorithm.'
      },
      lab: {
        title: 'Benchmark PyTorch Standard Attention vs torch.nn.functional.scaled_dot_product_attention',
        goal: 'Benchmark standard manual attention vs PyTorch native scaled_dot_product_attention (which invokes FlashAttention automatically) at sequence length 4096.',
        steps: ['Create Q, K, V tensors with seq_len=4096 in FP16', 'Run 50 iterations of manual attention', 'Run 50 iterations of PyTorch SDPA', 'Compare latency and peak memory'],
        deliverable: 'Benchmark table showing 3x speedup and 80% VRAM reduction with FlashAttention.'
      },
      checklist: ['Always use torch.nn.functional.scaled_dot_product_attention in PyTorch 2.0+ to automatically benefit from FlashAttention kernels', 'Ensure tensors are in float16 or bfloat16 (FlashAttention does not run on float32)', 'Verify seq_len is a multiple of 64 or 128 for optimal GPU warp tiling'],
      pitfalls: ['Writing custom attention implementations with manual torch.matmul and torch.softmax, forfeiting FlashAttention IO speedups']
    },
    {
      hour: 25,
      title: 'Architectural Comparison: Encoder-Only (BERT), Decoder-Only (GPT), Encoder-Decoder (T5)',
      subtitle: 'Taxonomy of Transformer architectures and their specific inductive biases',
      chapter: 'Ch 9: The Modern LLM Architecture',
      level: 'Advanced' as const,
      overview: 'Compare the three main Transformer paradigms. Understand why Encoder-Only (BERT) excels at dense embeddings, Encoder-Decoder (T5) at translation, and why Decoder-Only (GPT, Llama, Claude) won the race for general-purpose foundation models.',
      keyConcepts: ['Bidirectional Self-Attention (Masked Language Modeling) vs Causal Self-Attention (Autoregressive Next-Token)', 'Cross-Attention mechanisms in Encoder-Decoder architectures', 'Why Decoder-Only models dominate: Zero-shot emergence and unified pretraining objective', 'Modern embedding models (BGE, E5, ModernBERT)'],
      math: 'BERT objective: L_MLM = -∑ log P(x_masked | x_unmasked). GPT objective: L_AR = -∑ log P(x_t | x_{<t}).',
      arch: 'Decoder-only models won because the causal next-token prediction task scales monotonically with compute, parameters, and tokens (Chinchilla scaling laws) without architectural task-specialization bottlenecks.',
      code: {
        language: 'python' as const,
        filename: 'transformer_taxonomy.py',
        code: `class TransformerTaxonomy:
    """Architectural attributes across the three Transformer archetypes."""
    ARCHETYPES = {
        "Encoder-Only (BERT, RoBERTa)": {
            "Attention": "Bidirectional (All tokens attend to all tokens)",
            "Primary Tasks": "Embeddings, classification, NER, reranking",
            "Generation": "Poor / Non-autoregressive",
            "Key Example": "ModernBERT, BAAI/bge-large-en"
        },
        "Encoder-Decoder (T5, BART)": {
            "Attention": "Bidirectional encoder + Causal decoder with Cross-Attention",
            "Primary Tasks": "Translation, summarization, structured transforms",
            "Generation": "Autoregressive generation conditioned on encoder",
            "Key Example": "Google T5, Whisper (speech-to-text)"
        },
        "Decoder-Only (GPT, Llama, Mistral)": {
            "Attention": "Strict Causal Masking (Lower triangular)",
            "Primary Tasks": "General intelligence, code generation, reasoning, chat",
            "Generation": "Efficient KV-Cached autoregressive generation",
            "Key Example": "Meta Llama 3, Gemini, Mistral"
        }
    }

for name, details in TransformerTaxonomy.ARCHETYPES.items():
    print(f"=== {name} ===\\nAttention: {details['Attention']}\\nBest for: {details['Primary Tasks']}\\n")`,
        description: 'Comparative taxonomy of Transformer families.'
      },
      lab: {
        title: 'Inspect Attention Mask Differences Between BERT and GPT',
        goal: 'Generate attention masks for a 5-token sequence in both Bidirectional (all ones) and Causal (lower-triangular) modes and verify information flow.',
        steps: ['Create 5x5 ones matrix for BERT', 'Create 5x5 lower triangular matrix for GPT', 'Compute attention outputs and prove token 1 cannot see token 5 in GPT'],
        deliverable: 'Visual representation comparing full visibility vs causal restriction.'
      },
      checklist: ['Choose Encoder-Only models when building dense vector embedding or semantic search systems', 'Choose Decoder-Only models for general text generation, code completion, and agent reasoning', 'Choose Encoder-Decoder when processing multimodal inputs (e.g. Whisper audio, vision encoders)'],
      pitfalls: ['Attempting to use a Decoder-Only model without causal masking, causing future token label leakage']
    },
    {
      hour: 26,
      title: 'Vision Transformers (ViT) & Multimodal Projection Mechanisms',
      subtitle: 'An Image is Worth 16x16 Words: Patch embeddings and Cross-Attention fusion',
      chapter: 'Ch 9: The Modern LLM Architecture',
      level: 'Advanced' as const,
      overview: 'How Transformers conquered computer vision. Deconstruct the Vision Transformer (ViT): splitting images into 16x16 pixel patches, linear projection to token embeddings, prepending [CLS] tokens, and modern Multimodal LLM projection layers (LLaVA, CLIP, Gemini).',
      keyConcepts: ['Patch Partitioning & Linear Projection: (H/P * W/P) visual tokens', 'Position Embeddings for 2D spatial patches', 'CLIP (Contrastive Language-Image Pretraining): Dual encoders aligned via InfoNCE loss', 'Multimodal Projectors: Linear MLP vs Cross-Attention Perceiver Resamplers'],
      math: 'InfoNCE Contrastive Loss: L = -log( exp(sim(I_i, T_i) / τ) / ∑_j exp(sim(I_i, T_j) / τ) ).',
      arch: 'Modern Vision-Language Models (VLMs) like LLaVA process an image through a frozen ViT (CLIP or SigLIP), project visual token embeddings through an MLP into the LLM’s text embedding space, and let the LLM attend across text and image tokens seamlessly.',
      code: {
        language: 'python' as const,
        filename: 'vit_patch_embed.py',
        code: `import torch
import torch.nn as nn

class PatchEmbedding(nn.Module):
    """Splits 2D image into 16x16 patches and projects to embedding space."""
    def __init__(self, img_size: int = 224, patch_size: int = 16, in_channels: int = 3, embed_dim: int = 768):
        super().__init__()
        self.num_patches = (img_size // patch_size) ** 2 # 14 x 14 = 196
        # A Conv2d with kernel=patch and stride=patch performs exact patch projection
        self.proj = nn.Conv2d(in_channels, embed_dim, kernel_size=patch_size, stride=patch_size)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        # x: [batch, 3, 224, 224] -> [batch, 768, 14, 14] -> [batch, 196, 768]
        return self.proj(x).flatten(2).transpose(1, 2)

embedder = PatchEmbedding()
img = torch.randn(2, 3, 224, 224)
tokens = embedder(img)
print("Image transformed to token sequence:", tokens.shape) # [2, 196, 768]`,
        description: 'Vision Transformer patch embedding projection layer.'
      },
      lab: {
        title: 'Calculate Image Token Budget for a High-Resolution Multimodal Input',
        goal: 'Calculate token counts for a 1024x1024 document image processed via 16x16 patches versus multi-scale dynamic crops, and calculate the cost and context impact on an LLM.',
        steps: ['Compute number of patches for 1024x1024', 'Evaluate token cost against a 32K context window', 'Benchmark latency comparison between high-res and downscaled images'],
        deliverable: 'VLM token budget formula and optimization trade-off chart.'
      },
      checklist: ['Use SigLIP (Sigmoid Loss for Language Image Pre-training) over original CLIP for superior zero-shot classification', 'Normalize image pixels with standard mean/std before passing to patch embedder', 'Consider dynamic high-res tiling for reading small text or dense diagrams in document automation'],
      pitfalls: ['Passing raw 4K images directly without tiling or downscaling, exceeding LLM context length']
    },
    {
      hour: 27,
      title: 'Mixture of Experts (MoE): Sparse Routing & Load Balancing',
      subtitle: 'Scaling to trillions of parameters with constant active FLOPs (Mixtral, DeepSeek)',
      chapter: 'Ch 9: The Modern LLM Architecture',
      level: 'Expert' as const,
      overview: 'Deconstruct Sparse Mixture of Experts (MoE) architectures (Mixtral 8x7B, DeepSeek V2/V3, Grok). How replacing dense FFN layers with multiple independent expert networks routes each token to Top-K experts, decoupling parameter count from compute latency.',
      keyConcepts: ['Dense vs Sparse Computation', 'Top-K Softmax Gating Router: P(x) = Softmax(TopK(x W_gate))', 'Auxiliary Load Balancing Loss: Preventing expert collapse where 1 expert starves others', 'Expert Parallelism & All-to-All GPU Communication Overhead'],
      math: 'MoE Output: y = ∑_{i ∈ TopK} P_i(x) * Expert_i(x). Auxiliary loss: L_aux = α * N * ∑_{i=1}^N f_i * P_i, where f_i is fraction of tokens routed to expert i.',
      arch: 'Mixtral 8x7B has 47B total parameters, but only 13B parameters are active per token. It achieves GPT-3.5+ capability while running at the latency and cost of a 13B model.',
      code: {
        language: 'python' as const,
        filename: 'moe_sparse_layer.py',
        code: `import torch
import torch.nn as nn

class SparseMoELayer(nn.Module):
    """Sparse Mixture of Experts layer with Top-2 routing."""
    def __init__(self, d_model: int, hidden_dim: int, num_experts: int = 8, top_k: int = 2):
        super().__init__()
        self.num_experts = num_experts
        self.top_k = top_k
        self.gate = nn.Linear(d_model, num_experts, bias=False)
        self.experts = nn.ModuleList([
            nn.Sequential(nn.Linear(d_model, hidden_dim), nn.SiLU(), nn.Linear(hidden_dim, d_model))
            for _ in range(num_experts)
        ])

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        # x: [batch, seq, d_model]
        orig_shape = x.shape
        x_flat = x.view(-1, orig_shape[-1]) # [N, d_model]
        logits = self.gate(x_flat) # [N, num_experts]

        # Top-K gating
        weights, indices = torch.topk(torch.softmax(logits, dim=-1), self.top_k, dim=-1)
        weights = weights / weights.sum(dim=-1, keepdim=True) # Renormalize

        out = torch.zeros_like(x_flat)
        for k in range(self.top_k):
            expert_indices = indices[:, k]
            expert_weights = weights[:, k].unsqueeze(-1)
            for e_idx in range(self.num_experts):
                mask = (expert_indices == e_idx)
                if mask.any():
                    token_slice = x_flat[mask]
                    out[mask] += expert_weights[mask] * self.experts[e_idx](token_slice)

        return out.view(orig_shape)

moe = SparseMoELayer(d_model=256, hidden_dim=512, num_experts=4, top_k=2)
print("MoE output shape:", moe(torch.randn(2, 8, 256)).shape)`,
        description: 'Top-2 Sparse Mixture of Experts implementation in PyTorch.'
      },
      lab: {
        title: 'Simulate Expert Collapse and Validate Load Balancing Penalty',
        goal: 'Train a toy MoE layer without auxiliary loss on skewed inputs, observe 1 expert receiving 98% of all tokens, then add auxiliary load balancing loss to restore uniform routing.',
        steps: [
          'Run routing forward passes and plot expert histogram',
          'Observe collapse to single expert',
          'Add L_aux = N * sum(f_i * P_i) and verify uniform distribution across experts'
        ],
        deliverable: 'Expert distribution histogram proving auxiliary loss prevents collapse.'
      },
      checklist: ['Monitor expert token utilization in production dashboards to detect load imbalances', 'Ensure host server has sufficient total VRAM to hold ALL expert weights in memory even if only Top-2 are active per token', 'Use Expert Parallelism (EP) across GPUs connected by NVLink to minimize all-to-all communication latency'],
      pitfalls: ['Assuming MoE requires less VRAM: MoE requires VRAM for ALL parameters, it only saves FLOPs (compute)']
    },
    {
      hour: 28,
      title: 'Milestone Capstone 2: Decoder-Only Transformer (Mini-GPT) from Scratch',
      subtitle: 'Complete end-to-end implementation and benchmarking of a generative Transformer',
      chapter: 'Ch 9: The Modern LLM Architecture',
      level: 'Advanced' as const,
      overview: 'Milestone Capstone for Module 2. Integrate everything learned: Causal Scaled Dot-Product Attention, RoPE positional encoding, RMSNorm, SwiGLU activation, and a fast KV-cache generation loop into a complete working Mini-GPT in PyTorch.',
      keyConcepts: ['Module 2 Synthesis', 'Decoder-Only Model Architecture Assembly', 'Autoregressive Generative Sampling (Temperature, Top-P Nucleus)', 'KV-Cache Token Generation Benchmark'],
      math: 'Full Next-Token Prediction: P(w_t | w_{<t}) = Softmax( W_vocab · RMSNorm( Block_N( ... Block_1( x_embed ) ... ) ) ).',
      arch: 'This architecture is the foundational skeleton powering GPT-4, Llama 3, Gemini, and Claude. Mastering this from-scratch codebase gives you the mental model to debug any LLM.',
      code: {
        language: 'python' as const,
        filename: 'mini_gpt_complete.py',
        code: `import torch
import torch.nn as nn
import torch.nn.functional as F

class MiniGPTConfig:
    vocab_size = 50257
    d_model = 256
    num_heads = 4
    num_layers = 4
    max_seq_len = 512

class MiniGPT(nn.Module):
    """Complete Decoder-Only Transformer in PyTorch."""
    def __init__(self, cfg: MiniGPTConfig):
        super().__init__()
        self.tok_emb = nn.Embedding(cfg.vocab_size, cfg.d_model)
        self.pos_emb = nn.Embedding(cfg.max_seq_len, cfg.d_model)
        self.blocks = nn.ModuleList([
            nn.TransformerEncoderLayer(
                d_model=cfg.d_model, nhead=cfg.num_heads,
                dim_feedforward=cfg.d_model * 4, activation='gelu',
                batch_first=True, norm_first=True
            ) for _ in range(cfg.num_layers)
        ])
        self.norm_f = nn.LayerNorm(cfg.d_model)
        self.lm_head = nn.Linear(cfg.d_model, cfg.vocab_size, bias=False)

    def forward(self, idx: torch.Tensor, targets: torch.Tensor = None):
        b, t = idx.shape
        pos = torch.arange(0, t, device=idx.device).unsqueeze(0)
        x = self.tok_emb(idx) + self.pos_emb(pos)
        # Causal mask
        causal_mask = nn.Transformer.generate_square_subsequent_mask(t, device=idx.device)
        for block in self.blocks:
            x = block(x, src_mask=causal_mask, is_causal=True)
        logits = self.lm_head(self.norm_f(x))
        loss = None
        if targets is not None:
            loss = F.cross_entropy(logits.view(-1, logits.size(-1)), targets.view(-1))
        return logits, loss

model = MiniGPT(MiniGPTConfig())
idx = torch.randint(0, 1000, (2, 32))
logits, _ = model(idx)
print("MiniGPT forward success! Output logits shape:", logits.shape)`,
        description: 'Complete working Mini-GPT language model architecture in PyTorch.'
      },
      lab: {
        title: 'Deliver Milestone Capstone 2',
        goal: 'Complete all deliverables for Milestone 2: train Mini-GPT on TinyShakespeare or custom text corpus, implement Top-P sampling, and verify generation output.',
        steps: [
          'Assemble model components with strict causal masking',
          'Train with AdamW (lr=3e-4) for 500 steps',
          'Implement temperature-scaled Top-P nucleus sampling',
          'Generate 200 tokens of text and verify coherent grammatical structure'
        ],
        deliverable: 'Complete Python package containing model, training script, and generation log.'
      },
      checklist: ['Tie input token embedding weights with output lm_head weights (weight tying) to save parameters', 'Ensure causal mask is explicitly passed to prevent future token cheating', 'Implement temperature > 0 and Top-P (e.g. 0.9) to prevent repetitive greedy degenerate loops'],
      pitfalls: ['Training without causal masking, leading to 0.0 loss during training but total gibberish during inference']
    }
  ];

  // Add Module 2 hours
  m2Topics.forEach((t) => {
    hours.push({
      hour: t.hour,
      title: t.title,
      subtitle: t.subtitle,
      moduleIndex: 2,
      chapter: t.chapter,
      level: t.level,
      durationMinutes: 60,
      overview: t.overview,
      keyConcepts: t.keyConcepts,
      mathAndTheory: t.math,
      architecturalInsight: t.arch,
      codeSnippet: t.code,
      handsOnLab: t.lab,
      productionChecklist: t.checklist,
      antiPatterns: t.pitfalls,
      milestoneReference: t.hour === 28 ? 'Capstone 2' : undefined
    });
  });

  // ================= MODULE 3: HOURS 29 - 48 =================
  const m3Titles = [
    { hour: 29, title: 'Byte-Pair Encoding (BPE), WordPiece & Tokenization Mechanics', level: 'Intermediate' as const },
    { hour: 30, title: 'Foundation Model Pretraining: Web Curation & Deduplication Pipelines', level: 'Advanced' as const },
    { hour: 31, title: 'Scaling Laws (Chinchilla, Kaplan): Compute, Parameter & Data Frontiers', level: 'Advanced' as const },
    { hour: 32, title: 'Distributed Training: Data Parallelism (DDP) & ZeRO Stages (DeepSpeed)', level: 'Expert' as const },
    { hour: 33, title: 'Tensor, Pipeline & 3D Parallelism for Frontier Model Training', level: 'Expert' as const },
    { hour: 34, title: 'Instruction Tuning & Supervised Fine-Tuning (SFT) Datasets', level: 'Intermediate' as const },
    { hour: 35, title: 'Parameter-Efficient Fine-Tuning (PEFT): LoRA (Low-Rank Adaptation)', level: 'Advanced' as const },
    { hour: 36, title: 'QLoRA: 4-Bit NormalFloat Quantization & Double Dequantization', level: 'Advanced' as const },
    { hour: 37, title: 'Alignment via RLHF: Reward Models & PPO (Proximal Policy Optimization)', level: 'Expert' as const },
    { hour: 38, title: 'Direct Preference Optimization (DPO), KTO & ORPO Alignment', level: 'Expert' as const },
    { hour: 39, title: 'Advanced Prompt Engineering: Few-Shot, Chain-of-Thought & Tree-of-Thoughts', level: 'Intermediate' as const },
    { hour: 40, title: 'Structured Outputs, JSON Schema Enforcement & Constrained Decoding', level: 'Advanced' as const },
    { hour: 41, title: 'Vector Embeddings, Dense Representation Models & Distance Metrics', level: 'Intermediate' as const },
    { hour: 42, title: 'Vector Databases: HNSW Graph Indexing, IVF-PQ & Quantization', level: 'Advanced' as const },
    { hour: 43, title: 'Document Chunking Strategies: Recursive, Semantic & Agentic Partitioning', level: 'Intermediate' as const },
    { hour: 44, title: 'Hybrid Retrieval: Combining BM25 Sparse Search and Vector Similarity', level: 'Advanced' as const },
    { hour: 45, title: 'Cross-Encoder Reranking: Cohere, BGE & ColBERT Late Interaction', level: 'Advanced' as const },
    { hour: 46, title: 'Context Window Optimization, Compression & Lost-in-the-Middle Mitigation', level: 'Advanced' as const },
    { hour: 47, title: 'RAG Evaluation Frameworks: RAGAS, TruLens & Faithfulness Metrics', level: 'Advanced' as const },
    { hour: 48, title: 'Milestone Capstone 3: Enterprise Multimodal RAG Engine with Cross-Encoder & Cache', level: 'Advanced' as const }
  ];

  m3Titles.forEach((item) => {
    hours.push({
      hour: item.hour,
      title: item.title,
      subtitle: `Module 3: Generative AI, LLMs & Retrieval systems at scale`,
      moduleIndex: 3,
      chapter: item.hour <= 33 ? 'Ch 10: Foundation Training' : item.hour <= 38 ? 'Ch 11: Alignment & LoRA' : item.hour <= 40 ? 'Ch 12: Prompt & In-Context' : 'Ch 13: Enterprise RAG',
      level: item.level,
      durationMinutes: 60,
      overview: `In-depth deep dive into ${item.title}. Covers theoretical constraints, algorithmic mechanisms, and production implementations for high-scale LLMs and RAG pipelines.`,
      keyConcepts: [
        'Production token and parameter trade-offs',
        'Computational efficiency and mathematical guarantees',
        'Latency reduction and memory footprint constraints',
        'Evaluation benchmarks and error mitigation'
      ],
      mathAndTheory: item.hour === 35 ? 'LoRA factorization: W = W_0 + ΔW = W_0 + (B · A) * (α / r), where A ∈ R^{r x k}, B ∈ R^{d x r}, and rank r << min(d, k).' : item.hour === 44 ? 'Reciprocal Rank Fusion (RRF): RRF_Score(d) = ∑_{m ∈ {BM25, Dense}} 1 / (60 + rank_m(d)).' : 'Mathematical derivation and loss formulation applied to large-scale generative architectures.',
      architecturalInsight: item.hour === 45 ? 'Bi-encoders embed query and documents independently for fast sub-millisecond MIPS search. Cross-encoders pass both query and document into full cross-attention layers, computing fine-grained token alignments to reorder the top 25 candidates.' : 'Modern AI architectures decouple high-throughput retrieval from deep generative reasoning to maximize cost efficiency and minimize latency.',
      codeSnippet: {
        language: 'python',
        filename: item.hour === 35 ? 'lora_layer.py' : item.hour === 44 ? 'hybrid_search.py' : 'rag_pipeline_core.py',
        code: item.hour === 35 ? `import torch
import torch.nn as nn

class LoRALinear(nn.Module):
    """Low-Rank Adaptation (LoRA) layer."""
    def __init__(self, linear: nn.Linear, rank: int = 8, alpha: float = 16.0):
        super().__init__()
        self.linear = linear
        self.linear.weight.requires_grad = False # Freeze original weights
        self.rank = rank
        self.scaling = alpha / rank
        # Low rank matrices A (Gaussian init) and B (Zero init)
        self.lora_A = nn.Parameter(torch.randn(rank, linear.in_features) * 0.01)
        self.lora_B = nn.Parameter(torch.zeros(linear.out_features, rank))

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        orig = self.linear(x)
        lora = (x @ self.lora_A.T @ self.lora_B.T) * self.scaling
        return orig + lora` : `import numpy as np

def reciprocal_rank_fusion(dense_ranks: list[str], sparse_ranks: list[str], k: int = 60) -> dict[str, float]:
    """Combines BM25 and vector ranks using Reciprocal Rank Fusion."""
    scores = {}
    for rank, doc_id in enumerate(dense_ranks):
        scores[doc_id] = scores.get(doc_id, 0.0) + 1.0 / (k + rank + 1)
    for rank, doc_id in enumerate(sparse_ranks):
        scores[doc_id] = scores.get(doc_id, 0.0) + 1.0 / (k + rank + 1)
    return dict(sorted(scores.items(), key=lambda item: item[1], reverse=True))

print("RRF Ranking:", reciprocal_rank_fusion(["docA", "docB"], ["docB", "docC"]))`,
        description: `Production implementation for ${item.title}`
      },
      handsOnLab: {
        title: `Practical Lab for ${item.title}`,
        goal: `Implement, benchmark, and validate the core mechanics of ${item.title}.`,
        steps: [
          'Configure dependencies and test environment',
          'Implement core functional module with strict typed interfaces',
          'Run unit benchmarks and compare against baseline configurations'
        ],
        deliverable: `Validated code artifact and benchmark summary for Hour ${item.hour}.`
      },
      productionChecklist: [
        'Enforce strict timeout bounds and circuit breakers',
        'Verify token count and context limits before payload submission',
        'Log all retrieval scores and candidate counts for telemetry'
      ],
      antiPatterns: [
        'Over-reliance on naive semantic similarity without keyword/lexical verification',
        'Unbounded context stuffing without reranking or deduplication'
      ],
      milestoneReference: item.hour === 48 ? 'Capstone 3' : undefined
    });
  });

  // ================= MODULE 4: HOURS 49 - 68 =================
  const m4Titles = [
    { hour: 49, title: 'Introduction to Autonomous AI Agents: The ReAct Paradigm', level: 'Intermediate' as const },
    { hour: 50, title: 'The ReAct Loop: Deconstructing Thought, Action, and Observation', level: 'Intermediate' as const },
    { hour: 51, title: 'Dynamic Tool Use: Function Calling & OpenAPI Schemas', level: 'Advanced' as const },
    { hour: 52, title: 'Agent Memory Systems: Short-Term, Working, and Episodic Vector Memory', level: 'Advanced' as const },
    { hour: 53, title: 'Planning Algorithms: Plan-and-Solve, Decomposition & Sub-Goal Trees', level: 'Advanced' as const },
    { hour: 54, title: 'Self-Reflection & Error Correction: Reflexion & Critic Agents', level: 'Advanced' as const },
    { hour: 55, title: 'Sandboxing & Safe Tool Execution: Docker, Firecracker & Wasm', level: 'Expert' as const },
    { hour: 56, title: 'State Machines for Agents: LangGraph Cyclic Graph Design', level: 'Advanced' as const },
    { hour: 57, title: 'Human-in-the-Loop (HITL) Checkpoints & Approval Workflows', level: 'Advanced' as const },
    { hour: 58, title: 'Multi-Agent Architectures: Orchestrator-Worker & Hierarchical Routing', level: 'Advanced' as const },
    { hour: 59, title: 'Collaborative Multi-Agent Swarms: CrewAI & AutoGen Patterns', level: 'Advanced' as const },
    { hour: 60, title: 'Shared Memory Registers & Inter-Agent Message Buses', level: 'Advanced' as const },
    { hour: 61, title: 'Consensus Protocols, Voting & Conflict Resolution in Multi-Agent Squads', level: 'Expert' as const },
    { hour: 62, title: 'Agent Loop Termination: Detecting Infinite Cycles & Halting Problems', level: 'Expert' as const },
    { hour: 63, title: 'Context Compaction & Progressive Summarization for Long-Horizon Agents', level: 'Advanced' as const },
    { hour: 64, title: 'Agent Telemetry, Tracing & Tracing Spans with OpenInference', level: 'Advanced' as const },
    { hour: 65, title: 'Cost & Latency Budgets for Multi-Step Autonomous Reasoning', level: 'Advanced' as const },
    { hour: 66, title: 'Guardrails & Safety Shields: NeMo Guardrails & Llama-Guard', level: 'Advanced' as const },
    { hour: 67, title: 'Benchmarking Agents: GAIA, SWE-bench & ToolBench Methodologies', level: 'Expert' as const },
    { hour: 68, title: 'Milestone Capstone 4: Autonomous Multi-Agent Software Engineering Squad', level: 'Expert' as const }
  ];

  m4Titles.forEach((item) => {
    hours.push({
      hour: item.hour,
      title: item.title,
      subtitle: `Module 4: Autonomous reasoning, state machines, and multi-agent coordination`,
      moduleIndex: 4,
      chapter: item.hour <= 55 ? 'Ch 14: Agent Core' : item.hour <= 61 ? 'Ch 15: Multi-Agent Systems' : 'Ch 16: Production Agentic Ops',
      level: item.level,
      durationMinutes: 60,
      overview: `Deep exploration of ${item.title}. Learn how autonomous systems transcend simple chat prompts by structuring continuous reasoning, tool invocation, reflection, and multi-agent orchestration.`,
      keyConcepts: [
        'ReAct decision cycles: Thought -> Action -> Observation',
        'Stateful execution graphs with cyclical transitions',
        'Dynamic tool resolution and schema serialization',
        'Safety guardrails, loop detection, and human checkpoints'
      ],
      mathAndTheory: item.hour === 50 ? 'ReAct state transition: S_t = (Context, Thought_t, Action_t, Obs_t). Agent policy π(A_t | Context, Thought_t) maximizes goal completion probability under bounded steps.' : 'State machine formalization: G = (V, E) where nodes represent agent reasoning states and edges represent condition-based transitions.',
      architecturalInsight: item.hour === 56 ? 'State machines like LangGraph provide deterministic control over non-deterministic LLMs. By explicitly defining allowed transitions and state schemas, you prevent runaway reasoning and ensure predictable enterprise execution.' : 'Multi-agent separation of concerns yields lower hallucination rates than a single giant monolithic prompt trying to do everything at once.',
      codeSnippet: {
        language: 'python',
        filename: item.hour === 50 ? 'react_agent_loop.py' : 'agent_state_machine.py',
        code: item.hour === 50 ? `import re

class ReActAgent:
    """Minimal autonomous ReAct execution loop."""
    def __init__(self, tools: dict):
        self.tools = tools
        self.max_steps = 5

    def run(self, goal: str):
        scratchpad = f"Goal: {goal}\\n"
        for step in range(self.max_steps):
            # 1. Simulate LLM generating Thought + Action
            thought = f"Step {step+1}: Analyzing goal and choosing tool."
            # In production, LLM generates this structured string or JSON
            action_name = "calculator" if "calculate" in goal else "search"
            action_input = "25 * 4" if action_name == "calculator" else goal

            # 2. Execute deterministic tool
            if action_name in self.tools:
                obs = self.tools[action_name](action_input)
            else:
                obs = "Tool not found."

            scratchpad += f"Thought: {thought}\\nAction: {action_name}({action_input})\\nObservation: {obs}\\n"
            if "Final Answer" in str(obs) or step >= 2:
                return f"Resolved: {obs}"
        return "Step limit exceeded."

tools = {"calculator": lambda expr: eval(expr), "search": lambda q: "Knowledge found."}
agent = ReActAgent(tools)
print(agent.run("Please calculate 25 * 4 for the order."))` : `class AgentGraphNode:
    def __init__(self, name: str, action):
        self.name = name
        self.action = action
        self.next_node = None

    def execute(self, state: dict):
        print(f"Executing node: {self.name}")
        return self.action(state)`,
        description: `Executable implementation for ${item.title}`
      },
      handsOnLab: {
        title: `Practical Lab for ${item.title}`,
        goal: `Build, test, and benchmark the capabilities described in ${item.title}.`,
        steps: [
          'Define the agent state schema using Pydantic or TypeScript interfaces',
          'Implement tool functions with strict validation and error handling',
          'Execute test scenario and verify loop termination on goal satisfaction'
        ],
        deliverable: `Working agent module with comprehensive execution trace logging.`
      },
      productionChecklist: [
        'Set hard cap on maximum execution steps (e.g. max_steps = 10)',
        'Isolate tool execution in sandboxed sub-processes or ephemeral containers',
        'Record complete thought and action traces to observability telemetry'
      ],
      antiPatterns: [
        'Allowing unrestricted bash/shell execution without sandboxing or approval',
        'Omitting loop detection, causing agents to burn thousands of dollars in endless retries'
      ],
      milestoneReference: item.hour === 68 ? 'Capstone 4' : undefined
    });
  });

  // ================= MODULE 5: HOURS 69 - 84 =================
  const m5Titles = [
    { hour: 69, title: 'Multimodal Document Automation: OCR-Free Extraction with VLMs', level: 'Intermediate' as const },
    { hour: 70, title: 'Parsing Complex Tables, Financial Reports & Unstructured PDFs', level: 'Intermediate' as const },
    { hour: 71, title: 'Visual Grounding: Bounding Boxes, Pointing & Document Key-Value Schemas', level: 'Advanced' as const },
    { hour: 72, title: 'Audio Intelligence: Whisper Speech-to-Text & Diarization Pipelines', level: 'Intermediate' as const },
    { hour: 73, title: 'Low-Latency Voice Streaming: WebSockets, Gemini Live & Real-Time Audio', level: 'Advanced' as const },
    { hour: 74, title: 'Robotic Process Automation (RPA) Meets AI: Paradigm Shift', level: 'Intermediate' as const },
    { hour: 75, title: 'Headless Browser Automation: Playwright & Puppeteer Integration', level: 'Intermediate' as const },
    { hour: 76, title: 'Browser-Use & Web Agents: Accessibility Trees & DOM Selectors', level: 'Advanced' as const },
    { hour: 77, title: 'Resilient Web Scraping with Schema Extraction & Anti-Bot Awareness', level: 'Advanced' as const },
    { hour: 78, title: 'Enterprise Workflow Automation: Webhooks, n8n & LangConnect', level: 'Intermediate' as const },
    { hour: 79, title: 'Event-Driven AI Pipelines: Redis BullMQ & Celery Distributed Task Queues', level: 'Advanced' as const },
    { hour: 80, title: 'Idempotency, Retries & Exponential Backoff in AI Workflows', level: 'Advanced' as const },
    { hour: 81, title: 'Automated Code Review, Bug Triaging & Pull Request Workflows', level: 'Intermediate' as const },
    { hour: 82, title: 'Synthetic Data Generation & Self-Instruct Data Synthesis', level: 'Advanced' as const },
    { hour: 83, title: 'Continuous Automated Model Evaluation in Production Pipelines', level: 'Advanced' as const },
    { hour: 84, title: 'Milestone Capstone 5: Autonomous Financial Document Audit & Browser Executive', level: 'Expert' as const }
  ];

  m5Titles.forEach((item) => {
    hours.push({
      hour: item.hour,
      title: item.title,
      subtitle: `Module 5: Multimodal processing, automated workflows, and enterprise RPA`,
      moduleIndex: 5,
      chapter: item.hour <= 73 ? 'Ch 17: Multimodal Automation' : item.hour <= 77 ? 'Ch 18: Web & Browser Agents' : 'Ch 19: Enterprise Workflows',
      level: item.level,
      durationMinutes: 60,
      overview: `Master practical enterprise automation in ${item.title}. Bridge LLM reasoning with real-world applications: processing complex visual documents, driving headless browsers, executing async task queues, and handling live audio.`,
      keyConcepts: [
        'Vision-Language extraction without brittle OCR rules',
        'DOM tree parsing and accessibility snapshot navigation',
        'Asynchronous job queue architectures for long-running AI tasks',
        'Idempotent webhooks and resilient failure recovery'
      ],
      mathAndTheory: 'Queue throughput modeling: Little’s Law L = λ * W, where average jobs in system L equals arrival rate λ multiplied by processing latency W.',
      architecturalInsight: 'Traditional RPA breaks whenever a web page changes by a single CSS class. AI-powered browser agents use accessibility trees and semantic descriptions, making automation 10x more resilient to UI changes.',
      codeSnippet: {
        language: 'typescript',
        filename: 'async_worker_queue.ts',
        code: `// Enterprise asynchronous AI task processor pattern
export interface AIJobPayload {
  id: string;
  taskType: 'document_parse' | 'browser_action' | 'vlm_extract';
  payload: Record<string, unknown>;
  retryCount: number;
}

export async function processAIJob(job: AIJobPayload): Promise<{ success: boolean; result: unknown }> {
  const maxRetries = 3;
  try {
    console.log(\`Processing job \${job.id} (attempt \${job.retryCount + 1})\`);
    // Simulated processing with exponential backoff
    return { success: true, result: { extractedAt: new Date().toISOString() } };
  } catch (err) {
    if (job.retryCount < maxRetries) {
      const backoffMs = Math.pow(2, job.retryCount) * 1000;
      console.warn(\`Scheduling retry in \${backoffMs}ms\`);
    }
    throw err;
  }
}`,
        description: `Async job worker queue pattern for long-running AI workflows`
      },
      handsOnLab: {
        title: `Practical Lab for ${item.title}`,
        goal: `Implement and run the automation pipeline for ${item.title}.`,
        steps: [
          'Set up headless worker environment',
          'Configure pipeline trigger and payload parser',
          'Run execution and verify data extraction accuracy'
        ],
        deliverable: `Automated workflow script with error handling and retry logging.`
      },
      productionChecklist: [
        'Always implement exponential backoff with jitter on external API calls',
        'Enforce strict idempotency keys on webhooks to prevent double-processing',
        'Set per-job timeouts to avoid zombie headless browser processes'
      ],
      antiPatterns: [
        'Processing long-running AI requests (>30s) synchronously inside HTTP request handlers',
        'Using fragile XPath selectors instead of semantic text and role selectors in browser automation'
      ],
      milestoneReference: item.hour === 84 ? 'Capstone 5' : undefined
    });
  });

  // ================= MODULE 6: HOURS 85 - 100 =================
  const m6Titles = [
    { hour: 85, title: 'Full-Stack AI Architecture: Client, Edge & Gateway Patterns', level: 'Intermediate' as const },
    { hour: 86, title: 'Server-Sent Events (SSE) & Token Streaming in React / Next.js', level: 'Intermediate' as const },
    { hour: 87, title: 'Vercel AI SDK, useChat Hook & Optimistic UI Updates', level: 'Intermediate' as const },
    { hour: 88, title: 'State Management for AI Interfaces: Generative UI & Component Streaming', level: 'Advanced' as const },
    { hour: 89, title: 'High-Throughput LLM Serving: vLLM & PagedAttention Deep Dive', level: 'Advanced' as const },
    { hour: 90, title: 'Continuous Batching, Inflight Batching & TensorRT-LLM', level: 'Expert' as const },
    { hour: 91, title: 'Model Quantization: AWQ, GPTQ, GGUF & FP8 Precision Serving', level: 'Advanced' as const },
    { hour: 92, title: 'Speculative Decoding & Medusa: Accelerating Token Generation by 2-3x', level: 'Expert' as const },
    { hour: 93, title: 'Dockerizing AI Microservices & Containerizing GPU Workloads', level: 'Intermediate' as const },
    { hour: 94, title: 'Kubernetes (K8s) GPU Scheduling, KEDA Autoscaling & vLLM Deployments', level: 'Expert' as const },
    { hour: 95, title: 'Semantic Caching with Redis & Vector Similarity Cache Invalidation', level: 'Advanced' as const },
    { hour: 96, title: 'Rate Limiting, Token Budget Quotas & Tiered Cost Management', level: 'Intermediate' as const },
    { hour: 97, title: 'LLM Observability: Tracing with Langfuse, Phoenix & OpenTelemetry', level: 'Advanced' as const },
    { hour: 98, title: 'Security: OWASP Top 10 for LLMs, Prompt Injection & Jailbreak Defense', level: 'Advanced' as const },
    { hour: 99, title: 'A/B Testing, Canary Deployments & LLM Evals in CI/CD Pipelines', level: 'Advanced' as const },
    { hour: 100, title: 'Master Capstone: Production-Ready Full-Stack AI SaaS Platform', level: 'Expert' as const }
  ];

  m6Titles.forEach((item) => {
    hours.push({
      hour: item.hour,
      title: item.title,
      subtitle: `Module 6: Full-Stack engineering, inference optimization, MLOps and production delivery`,
      moduleIndex: 6,
      chapter: item.hour <= 88 ? 'Ch 20: Full-Stack AI Dev' : item.hour <= 92 ? 'Ch 21: High-Performance Serving' : item.hour <= 96 ? 'Ch 22: Cloud & MLOps Infra' : 'Ch 23: Security & Capstone',
      level: item.level,
      durationMinutes: 60,
      overview: `Final frontier in ${item.title}. Master the complete full-stack deployment lifecycle: streaming React frontends, high-throughput vLLM serving, AWQ quantization, containerized GPU deployment, security firewalls, and production telemetry.`,
      keyConcepts: [
        'Streaming Server-Sent Events (SSE) and Time-To-First-Token optimization',
        'PagedAttention memory virtual indexing and continuous batching',
        'Quantized model serving (FP8 / AWQ) on enterprise GPU clusters',
        'Full-stack telemetry, prompt injection defense, and automated evals'
      ],
      mathAndTheory: item.hour === 89 ? 'Memory savings with PagedAttention: Eliminates internal fragmentation (< 4% wasted vs ~60% in naive contiguous buffer allocation).' : 'Throughput scaling: Throughput = (Concurrency * Seq_Length) / Latency. Continuous batching increases GPU utilization from 20% to > 85%.',
      architecturalInsight: item.hour === 86 ? 'Never buffer LLM output on the backend. Stream tokens chunk-by-chunk using Server-Sent Events (SSE) to deliver perceived sub-400ms Time-To-First-Token (TTFT) even when full generation takes 10 seconds.' : 'Production AI requires end-to-end tracing: every user prompt must carry a trace ID connecting client request, retrieval chunks, LLM generation tokens, cost in dollars, and evaluation scores.',
      codeSnippet: {
        language: item.hour === 86 ? 'typescript' : 'bash',
        filename: item.hour === 86 ? 'stream_client.ts' : 'deploy_vllm.sh',
        code: item.hour === 86 ? `// Streaming SSE client hook in TypeScript
export async function streamAIResponse(prompt: string, onChunk: (text: string) => void) {
  const response = await fetch('/api/chat/stream', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });

  if (!response.body) throw new Error('ReadableStream not supported');
  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    const chunk = decoder.decode(value, { stream: true });
    onChunk(chunk);
  }
}` : `#!/usr/bin/env bash
# Deploy high-throughput vLLM container with PagedAttention and continuous batching
docker run --gpus all \\
  -v ~/.cache/huggingface:/root/.cache/huggingface \\
  -p 8000:8000 \\
  --ipc=host \\
  vllm/vllm-openai:latest \\
  --model meta-llama/Meta-Llama-3-8B-Instruct \\
  --max-model-len 8192 \\
  --tensor-parallel-size 1 \\
  --gpu-memory-utilization 0.90 \\
  --quantization awq`,
        description: `Production deployment script for ${item.title}`
      },
      handsOnLab: {
        title: `Practical Lab for ${item.title}`,
        goal: `Implement, deploy, and benchmark the production architecture for ${item.title}.`,
        steps: [
          'Configure server and client integration endpoints',
          'Deploy high-throughput inference engine or streaming proxy',
          'Benchmark Time-to-First-Token (TTFT) and token generation throughput'
        ],
        deliverable: `Working production service code and benchmark telemetry report.`
      },
      productionChecklist: [
        'Configure semantic caching to bypass LLM inference on identical user queries',
        'Implement prompt injection detection prior to LLM submission',
        'Instrument Langfuse or OpenTelemetry tracing across all API spans'
      ],
      antiPatterns: [
        'Serving raw unquantized FP32 models in production without continuous batching',
        'Hardcoding API keys or exposing backend endpoints without token rate limiters'
      ],
      milestoneReference: item.hour === 100 ? 'Master Capstone' : undefined
    });
  });

  return hours;
}

export const ALL_HOURS: LessonHour[] = generateCurriculumHours();
