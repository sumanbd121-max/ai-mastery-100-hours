import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, RefreshCw, Trophy, ArrowRight, Sparkles } from 'lucide-react';
import { LessonHour } from '../types/curriculum';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface QuizModalProps {
  lesson: LessonHour | null;
  onClose: () => void;
  onMarkHourComplete?: (hour: number) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ lesson, onClose, onMarkHourComplete }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (!lesson) return;

    const fetchQuiz = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/tutor/generate-quiz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            topic: lesson.title,
            hour: lesson.hour,
            level: lesson.level,
          }),
        });
        const data = await response.json();
        if (data.questions && data.questions.length > 0) {
          setQuestions(data.questions);
        } else {
          throw new Error('No questions returned');
        }
      } catch (err) {
        // Fallback default questions
        setQuestions([
          {
            id: 'q1',
            question: `In modern AI systems (${lesson.title}), which principle is critical to prevent degradation during production execution?`,
            options: [
              'Enforcing strict numerical scaling (e.g. 1/√d_k in attention or LayerNorm/RMSNorm before blocks)',
              'Disabling backpropagation gradients entirely during training',
              'Increasing float precision to FP128 on all edge devices',
              'Hardcoding static prompts without temperature sampling'
            ],
            correctIndex: 0,
            explanation: 'Numerical scaling preserves bounded variance and prevents gradients from vanishing or exploding into NaN.'
          },
          {
            id: 'q2',
            question: 'What is the most effective approach for evaluating production generative model reliability?',
            options: [
              'Relying solely on training loss on the synthetic pretraining split',
              'Multi-faceted evaluation benchmarks (RAGAS, GAIA, SWE-bench) paired with automated unit tests',
              'Checking if the loss drops to exact zero on the test dataset',
              'Visual inspection of 2 random user prompts'
            ],
            correctIndex: 1,
            explanation: 'Modern production evaluation requires quantitative telemetry measuring precision, faithfulness, and task execution success rates.'
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuiz();
  }, [lesson]);

  const handleSelectOption = (optionIdx: number) => {
    if (selectedAnswers[currentIdx] !== undefined) return; // already answered
    setSelectedAnswers((prev) => ({ ...prev, [currentIdx]: optionIdx }));
  };

  const handleFinishQuiz = () => {
    let finalScore = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        finalScore += 1;
      }
    });
    setScore(finalScore);
    setIsSubmitted(true);

    if (finalScore >= Math.ceil(questions.length * 0.6) && lesson && onMarkHourComplete) {
      onMarkHourComplete(lesson.hour);
    }
  };

  if (!lesson) return null;

  const currentQ = questions[currentIdx];
  const answeredOption = selectedAnswers[currentIdx];
  const hasAnswered = answeredOption !== undefined;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-indigo-600 text-white font-bold">
                Hour {lesson.hour}
              </span>
              <h3 className="font-bold text-white text-base">Knowledge Check & Evaluation</h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">{lesson.title}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="py-16 flex flex-col items-center justify-center gap-3 text-slate-400">
            <RefreshCw className="w-6 h-6 text-indigo-400 animate-spin" />
            <span className="text-sm font-mono">Generating AI evaluation questions for Hour {lesson.hour}...</span>
          </div>
        ) : isSubmitted ? (
          /* Results Summary */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-500/20">
              <Trophy className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-xl font-bold text-white">Assessment Complete!</h4>
              <p className="text-sm text-slate-400 mt-1">
                You scored <span className="font-bold text-emerald-400">{score}</span> out of{' '}
                <span className="font-bold text-white">{questions.length}</span> (
                {Math.round((score / questions.length) * 100)}%)
              </p>
            </div>

            {score >= Math.ceil(questions.length * 0.6) ? (
              <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl text-xs text-emerald-300 max-w-md mx-auto">
                🎉 Congratulations! Hour {lesson.hour} has been verified and marked as complete in your curriculum progress tracker.
              </div>
            ) : (
              <div className="p-3 bg-amber-950/30 border border-amber-800/40 rounded-xl text-xs text-amber-300 max-w-md mx-auto">
                We recommend reviewing the lesson concepts and running the hands-on lab before attempting the quiz again.
              </div>
            )}

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl text-sm transition-all shadow-md"
              >
                Return to Curriculum
              </button>
            </div>
          </div>
        ) : (
          /* Question View */
          <div className="py-6 space-y-6">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Question {currentIdx + 1} of {questions.length}</span>
              <span className="text-indigo-400">Passing threshold: 60%</span>
            </div>

            <div className="text-base font-bold text-white leading-relaxed">
              {currentQ.question}
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = answeredOption === optIdx;
                const isCorrect = currentQ.correctIndex === optIdx;

                let optClass = 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300';
                if (hasAnswered) {
                  if (isCorrect) {
                    optClass = 'bg-emerald-950/50 border-emerald-500 text-emerald-200 ring-1 ring-emerald-500/50';
                  } else if (isSelected) {
                    optClass = 'bg-rose-950/50 border-rose-500 text-rose-200 ring-1 ring-rose-500/50';
                  } else {
                    optClass = 'bg-slate-950/40 border-slate-800/50 text-slate-600 opacity-50';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={hasAnswered}
                    className={`w-full p-4 rounded-xl border text-left text-xs md:text-sm transition-all flex items-start gap-3 ${optClass}`}
                  >
                    <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="leading-snug">{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation on answer */}
            {hasAnswered && (
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1 animate-in fade-in">
                <span className="font-bold text-indigo-400 flex items-center gap-1.5 font-mono">
                  <Sparkles className="w-3.5 h-3.5" /> Engineering Rationale:
                </span>
                <p className="leading-relaxed">{currentQ.explanation}</p>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-500 font-mono">
                {hasAnswered ? 'Answer recorded' : 'Select an option to evaluate'}
              </span>

              {hasAnswered && (
                currentIdx < questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentIdx((prev) => prev + 1)}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-md transition-all"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={handleFinishQuiz}
                    className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-md transition-all"
                  >
                    <span>Finish Evaluation</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
