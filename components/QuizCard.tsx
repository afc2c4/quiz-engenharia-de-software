
import React from 'react';
import { Question } from '../types';

interface QuizCardProps {
  question: Question;
  selectedOption: number | null;
  onSelect: (index: number) => void;
  showCorrect: boolean;
  isDarkMode: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({ 
  question, 
  selectedOption, 
  onSelect, 
  showCorrect,
  isDarkMode
}) => {
  return (
    <div className={`rounded-2xl shadow-xl p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500 transition-colors
      ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="mb-6">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 uppercase tracking-wider
          ${isDarkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
          {question.topic}
        </span>
        <h2 className={`text-xl md:text-2xl font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          {question.question}
        </h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          let optionStyles = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center group ";
          
          if (showCorrect) {
            if (index === question.correctAnswer) {
              optionStyles += isDarkMode 
                ? "border-green-600 bg-green-900/20 text-green-400" 
                : "border-green-500 bg-green-50 text-green-900";
            } else if (index === selectedOption) {
              optionStyles += isDarkMode
                ? "border-red-600 bg-red-900/20 text-red-400"
                : "border-red-500 bg-red-50 text-red-900";
            } else {
              optionStyles += isDarkMode
                ? "border-slate-700 opacity-40"
                : "border-gray-100 opacity-50";
            }
          } else {
            if (selectedOption === index) {
              optionStyles += isDarkMode
                ? "border-blue-500 bg-blue-900/30 text-blue-200 shadow-md"
                : "border-blue-500 bg-blue-50 text-blue-900 shadow-md";
            } else {
              optionStyles += isDarkMode
                ? "border-slate-700 hover:border-blue-500/50 hover:bg-slate-700/50"
                : "border-gray-100 hover:border-blue-200 hover:bg-gray-50";
            }
          }

          return (
            <button
              key={index}
              id={`option-${String.fromCharCode(65 + index)}`}
              disabled={showCorrect}
              onClick={() => onSelect(index)}
              className={optionStyles}
            >
              <span className={`w-8 h-8 flex items-center justify-center rounded-full mr-4 font-bold text-sm transition-colors
                ${selectedOption === index ? 'bg-blue-600 text-white' : 
                  isDarkMode ? 'bg-slate-700 text-slate-400 group-hover:bg-slate-600 group-hover:text-blue-300' : 'bg-gray-200 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'}`}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-1">{option}</span>
              {showCorrect && index === question.correctAnswer && (
                <i className="fas fa-check-circle text-green-500 ml-2"></i>
              )}
              {showCorrect && index === selectedOption && index !== question.correctAnswer && (
                <i className="fas fa-times-circle text-red-500 ml-2"></i>
              )}
            </button>
          );
        })}
      </div>

      {showCorrect && (
        <div className={`mt-8 p-4 rounded-xl border animate-in zoom-in duration-300
          ${isDarkMode ? 'bg-blue-900/20 border-blue-900/50' : 'bg-blue-50 border-blue-100'}`}>
          <h4 className={`font-bold flex items-center mb-1 ${isDarkMode ? 'text-blue-300' : 'text-blue-800'}`}>
            <i className="fas fa-info-circle mr-2"></i> Explicação:
          </h4>
          <p className={`text-sm md:text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-blue-700'}`}>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizCard;
