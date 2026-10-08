export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface LessonHour {
  hour: number;
  title: string;
  subtitle: string;
  moduleIndex: number;
  chapter: string;
  level: DifficultyLevel;
  durationMinutes: number;
  overview: string;
  keyConcepts: string[];
  mathAndTheory: string;
  architecturalInsight: string;
  codeSnippet: {
    language: 'python' | 'typescript' | 'bash' | 'json';
    filename: string;
    code: string;
    description: string;
  };
  handsOnLab: {
    title: string;
    goal: string;
    steps: string[];
    deliverable: string;
  };
  productionChecklist: string[];
  antiPatterns: string[];
  milestoneReference?: string;
}

export interface CurriculumModule {
  id: number;
  title: string;
  shortTitle: string;
  hoursRange: string;
  startHour: number;
  endHour: number;
  color: string;
  accentHex: string;
  badge: string;
  iconName: string;
  summary: string;
  targetCompetencies: string[];
  prerequisites: string[];
  capstoneProject: {
    title: string;
    hour: number;
    description: string;
    deliverables: string[];
  };
}

export interface CapstoneProject {
  id: string;
  hour: number;
  title: string;
  moduleTitle: string;
  difficulty: DifficultyLevel;
  overview: string;
  systemArchitecture: string[];
  techStack: string[];
  deliverables: string[];
  rubric: {
    criterion: string;
    weight: string;
    standard: string;
  }[];
}

export interface StudyPace {
  id: string;
  name: string;
  hoursPerWeek: number;
  totalWeeks: number;
  intensity: 'Sprint' | 'Balanced' | 'Paced';
  description: string;
  targetDailyCommitment: string;
}
