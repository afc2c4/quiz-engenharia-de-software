
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import QuizCard from './components/QuizCard';
import ExamBuilder from './components/ExamBuilder';
import { QUIZ_DATABASE } from './constants';
import { Topic, QuizState, Question } from './types';

export const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [view, setView] = useState<'quiz' | 'exam-builder'>('quiz');
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [state, setState] = useState<QuizState>({
    currentTopic: null,
    currentQuestionIndex: 0,
    score: 0,
    userAnswers: {},
    isFinished: false,
  });

  const [selectedForExam, setSelectedForExam] = useState<string[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Tópicos dinâmicos para a tela inicial
  const topics = useMemo(() => {
    const set = new Set<Topic>();
    QUIZ_DATABASE.forEach(q => set.add(q.topic));
    return Array.from(set).sort();
  }, []);

  const currentQuestion = shuffledQuestions[state.currentQuestionIndex];

  const handleStartQuiz = (topic: Topic) => {
    const topicQuestions = QUIZ_DATABASE.filter(q => q.topic === topic);
    const processedQuestions = shuffleArray(topicQuestions).map(q => {
      const originalCorrectOption = q.options[q.correctAnswer];
      const newOptions = shuffleArray(q.options);
      const newCorrectIndex = newOptions.indexOf(originalCorrectOption);
      return {
        ...q,
        options: newOptions,
        correctAnswer: newCorrectIndex
      };
    });

    setShuffledQuestions(processedQuestions);
    setState({
      currentTopic: topic,
      currentQuestionIndex: 0,
      score: 0,
      userAnswers: {},
      isFinished: false,
    });
    setShowExplanation(false);
  };

  const handleSelectOption = (index: number) => {
    if (showExplanation) return;
    const isCorrect = index === currentQuestion.correctAnswer;
    setState(prev => ({
      ...prev,
      userAnswers: { ...prev.userAnswers, [currentQuestion.id]: index },
      score: isCorrect ? prev.score + 1 : prev.score
    }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (state.currentQuestionIndex < shuffledQuestions.length - 1) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
      setShowExplanation(false);
    } else {
      setState(prev => ({
        ...prev,
        isFinished: true
      }));
    }
  };

  const handleReset = () => {
    setState({
      currentTopic: null,
      currentQuestionIndex: 0,
      score: 0,
      userAnswers: {},
      isFinished: false,
    });
    setShuffledQuestions([]);
  };

  const toggleSelectForExam = (id: string) => {
    setSelectedForExam(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSelectMultiple = (ids: string[]) => {
    setSelectedForExam(prev => {
      const newIds = ids.filter(id => !prev.includes(id));
      return [...prev, ...newIds];
    });
  };

  const handleClearSelection = () => {
    setSelectedForExam([]);
  };

  const getTopicDescription = (topic: Topic) => {
    switch (topic) {
      case 'Engenharia de Software':
        return 'Fundamentos, ciclo de vida, modelos clássicos e a Revolução Ágil.';
      case 'Modelos de Nuvem e Ciclo de Iteração':
        return 'IaaS, PaaS, SaaS, modelos de implantação e a dinâmica de iterações.';
      case 'Engenharia de Requisitos e Tipos de Requisitos':
        return 'Elicitação, análise, especificação e validação de requisitos funcionais e não funcionais.';
      case 'Git e Controle de Versão':
        return 'Comandos essenciais, fluxo de trabalho, ramificações e resolução de conflitos.';
      default:
        return 'Explore conceitos avançados e domine a teoria por trás do desenvolvimento de software.';
    }
  };

  const renderTopicSelection = () => (
    <div id="topic-selection-container" className="max-w-4xl mx-auto px-4 py-12 text-center animate-in fade-in duration-700">
      <h2 id="main-title" className={`text-3xl md:text-4xl font-extrabold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Mestre da Engenharia de Software
      </h2>
      <p id="main-description" className={`mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
        Domine os fundamentos da Engenharia de Software, processos de desenvolvimento, nuvem e versionamento com desafios teóricos de alto nível.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map(topic => (
          <button
            key={topic}
            id={`topic-btn-${topic.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => handleStartQuiz(topic)}
            className={`p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-blue-500 text-left group
              ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-gray-800'}`}
          >
            <div className={`w-14 h-14 rounded-2xl mb-4 flex items-center justify-center text-2xl 
              ${topic === 'Engenharia de Software' ? 'bg-blue-100 text-blue-600' : 
                topic === 'Modelos de Nuvem e Ciclo de Iteração' ? 'bg-sky-100 text-sky-600' :
                topic === 'Engenharia de Requisitos e Tipos de Requisitos' ? 'bg-indigo-100 text-indigo-600' :
                topic === 'Git e Controle de Versão' ? 'bg-orange-100 text-orange-600' :
                'bg-emerald-100 text-emerald-600'}`}>
              <i className={
                topic === 'Engenharia de Software' ? 'fas fa-project-diagram' : 
                topic === 'Modelos de Nuvem e Ciclo de Iteração' ? 'fas fa-cloud' :
                topic === 'Engenharia de Requisitos e Tipos de Requisitos' ? 'fas fa-clipboard-list' :
                topic === 'Git e Controle de Versão' ? 'fas fa-code-branch' :
                'fas fa-code'
              }></i>
            </div>
            <h3 className="text-xl font-bold mb-2">{topic}</h3>
            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
              {getTopicDescription(topic)}
            </p>
            <div className="mt-6 flex items-center text-blue-500 font-semibold group-hover:translate-x-1 transition-transform">
              Começar Quiz <i className="fas fa-arrow-right ml-2 text-xs"></i>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderQuiz = () => {
    const progress = ((state.currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className={`text-sm font-semibold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
              Questão {state.currentQuestionIndex + 1} de {shuffledQuestions.length}
            </span>
            <span className="text-sm font-bold text-blue-500">
              {Math.round(progress)}% Concluído
            </span>
          </div>
          <div className={`w-full rounded-full h-3 overflow-hidden shadow-inner ${isDarkMode ? 'bg-slate-700' : 'bg-gray-200'}`}>
            <div className="bg-blue-600 h-full rounded-full transition-all duration-500 ease-out shadow-sm" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        {currentQuestion && (
          <QuizCard 
            question={currentQuestion}
            selectedOption={state.userAnswers[currentQuestion.id] ?? null}
            onSelect={handleSelectOption}
            showCorrect={showExplanation}
            isDarkMode={isDarkMode}
          />
        )}
        <div className="mt-8 flex justify-end">
          {showExplanation && (
            <button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold shadow-lg transition-all transform active:scale-95 flex items-center"
            >
              {state.currentQuestionIndex < shuffledQuestions.length - 1 ? 'Próxima Questão' : 'Ver Resultados'}
              <i className="fas fa-arrow-right ml-3"></i>
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const total = shuffledQuestions.length;
    const percentage = Math.round((state.score / total) * 100);
    
    let message = "";
    let icon = "";
    let iconColor = "";

    if (percentage === 100) {
      message = "Arquiteto Sênior! Você domina completamente estes conceitos.";
      icon = "fa-trophy";
      iconColor = "text-yellow-500";
    } else if (percentage >= 70) {
      message = "Excelente nível técnico! Você está no caminho certo.";
      icon = "fa-medal";
      iconColor = "text-blue-500";
    } else if (percentage >= 50) {
      message = "Bom conhecimento base. Continue estudando para atingir a senioridade.";
      icon = "fa-check-double";
      iconColor = "text-green-500";
    } else {
      message = "A base é fundamental. Revise os conceitos teóricos e tente novamente.";
      icon = "fa-book-reader";
      iconColor = "text-orange-500";
    }

    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center animate-in fade-in zoom-in duration-500">
        <div className={`mb-8 p-12 rounded-3xl shadow-2xl ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
          <div className={`text-6xl mb-6 ${iconColor}`}>
            <i className={`fas ${icon}`}></i>
          </div>
          <h2 className={`text-4xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {percentage}%
          </h2>
          <p className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
            Você acertou {state.score} de {total} questões
          </p>
          <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
            {message}
          </p>
          
          <button
            onClick={handleReset}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-3"
          >
            <i className="fas fa-redo"></i> Voltar para Início
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'} pb-12`}>
      <Header 
        onHome={handleReset} 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={toggleDarkMode} 
        currentView={view}
        onSetView={setView}
      />
      
      <main className="flex-grow flex flex-col">
        {view === 'quiz' ? (
          <>
            {!state.currentTopic && renderTopicSelection()}
            {state.currentTopic && !state.isFinished && renderQuiz()}
            {state.isFinished && renderResults()}
          </>
        ) : (
          <ExamBuilder 
            isDarkMode={isDarkMode} 
            selectedIds={selectedForExam}
            onToggleSelection={toggleSelectForExam}
            onSelectMultiple={handleSelectMultiple}
            onClearSelection={handleClearSelection}
          />
        )}
      </main>

      <footer className={`mt-auto py-8 text-center text-sm ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}>
        <p>© 2024 Arquiteto Sênior: Guia Teórico de Software</p>
      </footer>
    </div>
  );
};

export default App;
