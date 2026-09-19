export type ModuleId =
  | 'questionnaire'
  | 'questionnaire-test'
  | 'vrai-ou-faux'
  | 'vrai-ou-faux-test'
  | 'carte-mentale'
  | 'carte-mentale-2'
  | 'carte-memoire'
  | 'resume'
  | 'pdf'
  | 'infographie'
  | 'exercices-ecrits'
  | 'devoir-complet';

export interface ModuleNav {
  id: ModuleId;
  label: string;
  iconName: string;
  description: string;
}

export interface QuestionQCM {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface AffirmationVraiFaux {
  id: string;
  statement: string;
  isTrue: boolean;
  explanation: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  tag: string;
}

export interface MindMapNode {
  id: string;
  title: string;
  notes?: string;
  color: string;
  children?: MindMapNode[];
}

export interface WrittenExercise {
  id: string;
  title: string;
  difficulty: 'Facile' | 'Moyen' | 'Avancé';
  statement: string;
  sampleAnswer: string;
  tips: string[];
}
