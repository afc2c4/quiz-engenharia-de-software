
export type Topic = 
  | 'Engenharia de Software'
  | 'Modelos de Nuvem e Ciclo de Iteração'
  | 'Engenharia de Requisitos e Tipos de Requisitos'
  | 'Git e Controle de Versão';

export interface Question {
  id: string;
  topic: Topic;
  question: string;
  options: string[];
  correctAnswer: number; // Index of options array (0-4)
  explanation: string;
}

export interface QuizState {
  currentTopic: Topic | null;
  currentQuestionIndex: number;
  score: number;
  userAnswers: { [questionId: string]: number };
  isFinished: boolean;
}
