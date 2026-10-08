import React, { useState, useMemo } from 'react';
import { Search, Filter, CheckCircle2, Bookmark, ArrowRight, BookOpen, Clock, Sparkles, Terminal, Award, ChevronDown } from 'lucide-react';
import { LessonHour, DifficultyLevel } from '../types/curriculum';
import { MODULES, ALL_HOURS } from '../data/curriculum';

interface CurriculumExplorerProps {
  onSelectLesson: (lesson: LessonHour) => void;
  completedHours: Set<number>;
  onToggleComplete: (hour: number) => void;
  bookmarkedHours: Set<number>;
  onToggleBookmark: (hour: number) => void;
}

export const CurriculumExplorer: React.FC<CurriculumExplorerProps> = ({
  onSelectLesson,
  completedHours,
  onToggleComplete,
  bookmarkedHours,
  onToggleBookmark,
}) => {
  const [selectedModuleId, setSelectedModuleId] = useState<number | 'all'>('all');
  const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterBookmarked, setFilterBookmarked] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');

  // Filtered hours
  const filteredHours = useMemo(() => {
    return ALL_HOURS.filter((item) => {
      // Module filter
      if (selectedModuleId !== 'all' && item.moduleIndex !== selectedModuleId) return false;
      // Level filter
      if (selectedLevel !== 'all' && item.level !== selectedLevel) return false;
      // Bookmarked filter
      if (filterBookmarked && !bookmarkedHours.has(item.hour)) return false;
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesOverview = item.overview.toLowerCase().includes(q);
        const matchesConcepts = item.keyConcepts.some((c) => c.toLowerCase().includes(q));
        const matchesChapter = item.chapter.toLowerCase().includes(q);
        const matchesHour = item.hour.toString() === q;
        if (!matchesTitle && !matchesOverview && !matchesConcepts && !matchesChapter && !matchesHour) {
          return false;
        }
      }
      return true;
    });
  }, [selectedModuleId, selectedLevel, filterBookmarked, searchQuery, bookmarkedHours]);

  const getLevelBadgeClass = (level: DifficultyLevel) => {
    switch (level) {
      case 'Beginner':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Intermediate':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Advanced':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Expert':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    }
  };

  return (
    <div className="space-y-6">
      {/* Search & Filter Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search across all 100 hours (e.g., autograd, attention, LoRA, ReAct, vLLM, K8s)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-slate-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setFilterBookmarked(!filterBookmarked)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                filterBookmarked
                  ? 'bg-amber-600/20 text-amber-300 border-amber-500/40'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Bookmarked ({bookmarkedHours.size})</span>
            </button>

            {/* Level Filter */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value as any)}
              className="bg-slate-950 border border-slate-800 text-xs text-slate-300 rounded-xl px-3 py-2 font-medium focus:outline-none"
            >
              <option value="all">All Difficulties</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all ${
                  viewMode === 'grid' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Cards
              </button>
              <button
                onClick={() => setViewMode('compact')}
                className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all ${
                  viewMode === 'compact' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Module Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 custom-scrollbar">
          <button
            onClick={() => setSelectedModuleId('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
              selectedModuleId === 'all'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
            }`}
          >
            All Modules (100h)
          </button>
          {MODULES.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedModuleId(m.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap border ${
                selectedModuleId === m.id
                  ? 'bg-slate-800 text-white border-indigo-500 shadow-md ring-1 ring-indigo-500/50'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              M{m.id}: {m.shortTitle}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-400 font-mono px-1">
        <span>
          SHOWING {filteredHours.length} OF 100 HOURS
          {selectedModuleId !== 'all' && ` (Module ${selectedModuleId})`}
        </span>
        <span>
          COMPLETED: {completedHours.size} / 100 ({Math.round((completedHours.size / 100) * 100)}%)
        </span>
      </div>

      {/* Grid or Compact View */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredHours.map((item) => {
            const isCompleted = completedHours.has(item.hour);
            const isBookmarked = bookmarkedHours.has(item.hour);

            return (
              <div
                key={item.hour}
                className={`group relative bg-slate-900 border rounded-2xl p-5 transition-all flex flex-col justify-between hover:shadow-xl hover:-translate-y-0.5 cursor-pointer ${
                  isCompleted
                    ? 'border-emerald-500/40 bg-slate-900/90'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
                onClick={() => onSelectLesson(item)}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-indigo-600/20 text-indigo-300 font-mono font-bold text-xs border border-indigo-500/30">
                        Hour {item.hour}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full border text-[10px] font-semibold ${getLevelBadgeClass(item.level)}`}>
                        {item.level}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => onToggleBookmark(item.hour)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isBookmarked
                            ? 'text-amber-400 bg-amber-500/10'
                            : 'text-slate-500 hover:text-slate-300'
                        }`}
                        title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Hour'}
                      >
                        <Bookmark className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => onToggleComplete(item.hour)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isCompleted
                            ? 'text-emerald-400 bg-emerald-500/10'
                            : 'text-slate-500 hover:text-slate-300'
                        }`}
                        title={isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <div className="text-xs text-slate-500 font-mono mt-0.5 mb-2.5">
                    {item.chapter}
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                    {item.overview}
                  </p>
                </div>

                {/* Footer metadata */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.codeSnippet.filename}</span>
                  </div>
                  <span className="text-indigo-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Details <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Compact List View */
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-800/80">
          {filteredHours.map((item) => {
            const isCompleted = completedHours.has(item.hour);
            const isBookmarked = bookmarkedHours.has(item.hour);

            return (
              <div
                key={item.hour}
                onClick={() => onSelectLesson(item)}
                className="p-4 hover:bg-slate-800/50 transition-colors flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-16 px-2 py-1 rounded-lg bg-indigo-600/10 text-indigo-300 font-mono font-bold text-xs border border-indigo-500/20 text-center flex-shrink-0">
                    Hour {item.hour}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white truncate hover:text-indigo-300">
                        {item.title}
                      </h4>
                      <span className={`px-2 py-0.5 rounded-full border text-[10px] font-semibold flex-shrink-0 ${getLevelBadgeClass(item.level)}`}>
                        {item.level}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 font-mono truncate">
                      {item.chapter} • {item.keyConcepts.slice(0, 2).join(', ')}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => onToggleBookmark(item.hour)}
                    className={`p-1.5 rounded-lg transition-colors ${
                      isBookmarked ? 'text-amber-400 bg-amber-500/10' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onToggleComplete(item.hour)}
                    className={`p-1.5 rounded-lg transition-colors ${
                      isCompleted ? 'text-emerald-400 bg-emerald-500/10' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </button>

                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
