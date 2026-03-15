
import React from 'react';

interface HeaderProps {
  onHome: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  currentView: 'quiz' | 'exam-builder';
  onSetView: (view: 'quiz' | 'exam-builder') => void;
}

const Header: React.FC<HeaderProps> = ({ onHome, isDarkMode, onToggleDarkMode, currentView, onSetView }) => {
  return (
    <header className={`shadow-sm sticky top-0 z-50 transition-colors duration-500 ${isDarkMode ? 'bg-slate-800 border-b border-slate-700' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => { onSetView('quiz'); onHome(); }}
        >
          <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent hidden sm:block">
            Mestre das Análises e Requisitos de Software
          </h1>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <nav className="flex bg-gray-100 dark:bg-slate-700 p-1 rounded-xl">
            <button 
              onClick={() => onSetView('quiz')}
              className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${currentView === 'quiz' ? 'bg-blue-600 text-white shadow-md' : (isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-gray-700')}`}
            >
              <i className="fas fa-play mr-2"></i>Quiz
            </button>
            <button 
              onClick={() => onSetView('exam-builder')}
              className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${currentView === 'exam-builder' ? 'bg-blue-600 text-white shadow-md' : (isDarkMode ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-gray-700')}`}
            >
              <i className="fas fa-file-alt mr-2"></i>Professor
            </button>
          </nav>

          <div className="h-6 w-px bg-gray-200 dark:bg-slate-600 mx-2 hidden sm:block"></div>

          <button 
            onClick={onToggleDarkMode}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300
              ${isDarkMode ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            title={isDarkMode ? 'Modo Claro' : 'Modo Noturno'}
          >
            <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
