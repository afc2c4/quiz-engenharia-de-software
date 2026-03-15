
import React, { useState, useMemo } from 'react';
import { QUIZ_DATABASE } from '../constants';
import { Topic, Question } from '../types';
import { shuffleArray } from '../App';

interface ExamBuilderProps {
  isDarkMode: boolean;
  selectedIds: string[];
  onToggleSelection: (id: string) => void;
  onSelectMultiple: (ids: string[]) => void;
  onClearSelection: () => void;
}

const ExamBuilder: React.FC<ExamBuilderProps> = ({ 
  isDarkMode, 
  selectedIds, 
  onToggleSelection, 
  onSelectMultiple,
  onClearSelection 
}) => {
  const [filterTopic, setFilterTopic] = useState<Topic | 'Todos'>('Todos');
  const [showPreview, setShowPreview] = useState(false);
  const [generatedExam, setGeneratedExam] = useState<string>('');

  // Extração dinâmica de tópicos para evitar falhas de sincronização
  const dynamicTopics = useMemo(() => {
    const set = new Set<string>();
    QUIZ_DATABASE.forEach(q => set.add(q.topic));
    return ['Todos', ...Array.from(set).sort()] as (Topic | 'Todos')[];
  }, []);

  const filteredQuestions = useMemo(() => {
    return filterTopic === 'Todos' 
      ? QUIZ_DATABASE 
      : QUIZ_DATABASE.filter(q => q.topic === filterTopic);
  }, [filterTopic]);

  const selectAllFiltered = () => {
    const filteredIds = filteredQuestions.map(q => q.id);
    onSelectMultiple(filteredIds);
  };

  const generateExamContent = () => {
    const selectedQuestions = QUIZ_DATABASE.filter(q => selectedIds.includes(q.id));
    
    // Embaralhar as questões selecionadas para organização
    const shuffledQuestions = shuffleArray(selectedQuestions);
    const answerKey: string[] = [];

    const examBody = shuffledQuestions.map((q, index) => {
      const originalCorrectOption = q.options[q.correctAnswer];
      const newOptions = shuffleArray(q.options);
      const newCorrectIndex = newOptions.indexOf(originalCorrectOption);
      
      // Adicionar ao gabarito (Letra correspondente ao novo índice)
      answerKey.push(`${index + 1}) ${String.fromCharCode(65 + newCorrectIndex)}`);
      
      const optionsText = newOptions.map((opt, i) => `${String.fromCharCode(65 + i)}) ${opt}`).join('\n');
      return `${index + 1}. ${q.question}\n${optionsText}\n`;
    }).join('\n');

    const fullExamText = `${examBody}\n\n--- GABARITO ---\n${answerKey.join(' | ')}`;

    setGeneratedExam(fullExamText);
    setShowPreview(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedExam);
    alert('Conteúdo copiado! Agora você pode colar no seu documento DOCX.');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-in fade-in duration-500">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6">
        <div>
          <h2 className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Gerador de Provas
          </h2>
          <p className={`mt-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
            Crie o conteúdo textual para sua avaliação oficial de forma organizada.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <button 
            onClick={onClearSelection}
            className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all ${isDarkMode ? 'border-red-900/30 hover:bg-red-900/20 text-red-400' : 'border-red-100 hover:bg-red-50 text-red-600'}`}
          >
            <i className="fas fa-trash-alt mr-2"></i>
            Limpar Seleções
          </button>
          <button 
            onClick={selectAllFiltered}
            className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all ${isDarkMode ? 'border-slate-700 hover:bg-slate-800 text-slate-300' : 'border-gray-200 hover:bg-gray-50 text-gray-600'}`}
          >
            Selecionar Visíveis
          </button>
          <div className={`px-4 py-2 rounded-xl border flex items-center gap-2 font-bold ${isDarkMode ? 'bg-slate-800 border-slate-700 text-blue-400' : 'bg-white border-gray-200 text-blue-600 shadow-sm'}`}>
            <i className="fas fa-check-double"></i>
            <span>{selectedIds.length} selecionadas</span>
          </div>
          <button 
            disabled={selectedIds.length !== 10}
            onClick={generateExamContent}
            className={`px-6 py-2 rounded-xl font-bold transition-all transform active:scale-95 flex items-center gap-2
              ${selectedIds.length !== 10 ? 'bg-gray-300 cursor-not-allowed text-gray-500' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30'}`}
          >
            <i className="fas fa-file-alt"></i> Gerar Prova (10)
          </button>
        </div>
      </div>

      {selectedIds.length !== 10 && selectedIds.length > 0 && (
        <div className={`mb-6 p-4 rounded-2xl border flex items-center gap-3 ${isDarkMode ? 'bg-orange-900/20 border-orange-900/30 text-orange-400' : 'bg-orange-50 border-orange-100 text-orange-700'}`}>
          <i className="fas fa-exclamation-circle"></i>
          <span className="text-sm font-medium">
            Selecione exatamente 10 questões para habilitar o gerador de prova. (Faltam {10 - selectedIds.length > 0 ? 10 - selectedIds.length : selectedIds.length - 10})
          </span>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-8">
        {dynamicTopics.map(t => (
          <button
            key={t}
            onClick={() => setFilterTopic(t)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all border
              ${filterTopic === t 
                ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                : (isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500' : 'bg-white border-gray-200 text-gray-500 hover:border-blue-300 hover:text-blue-600')
              }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredQuestions.map(q => {
          const isSelected = selectedIds.includes(q.id);
          return (
            <div 
              key={q.id}
              className={`p-5 rounded-2xl border-2 transition-all group relative cursor-pointer
                ${isSelected 
                  ? 'border-blue-500 bg-blue-500/10' 
                  : (isDarkMode ? 'border-slate-800 bg-slate-800/50 hover:border-slate-700' : 'border-gray-100 bg-white hover:border-blue-100 shadow-sm')
                }`}
              onClick={() => onToggleSelection(q.id)}
            >
              <div className="flex justify-between items-start gap-4 mb-3">
                <span className={`text-[10px] uppercase tracking-widest font-black px-2 py-0.5 rounded-md
                  ${isDarkMode ? 'bg-slate-700 text-slate-400' : 'bg-gray-100 text-gray-500'}`}>
                  {q.topic}
                </span>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                  ${isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300'}`}>
                  {isSelected && <i className="fas fa-check text-[10px]"></i>}
                </div>
              </div>
              <p className={`font-bold leading-tight pr-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                {q.question}
              </p>
              <div className="mt-4 space-y-1">
                {q.options.map((opt, i) => (
                  <div key={i} className={`text-xs flex gap-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                    <span className="font-bold">{String.fromCharCode(65 + i)})</span>
                    <span className="truncate">{opt}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {showPreview && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
          <div className={`w-full max-w-2xl rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden
            ${isDarkMode ? 'bg-slate-900 border border-slate-700' : 'bg-white'}`}>
            <div className={`p-6 border-b flex justify-between items-center ${isDarkMode ? 'border-slate-800' : 'border-gray-100'}`}>
              <h3 className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Conteúdo Pronto para DOCX
              </h3>
              <button 
                onClick={() => setShowPreview(false)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDarkMode ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-gray-100 text-gray-500'}`}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-grow bg-slate-50 dark:bg-slate-950/50">
              <pre className={`whitespace-pre-wrap font-mono text-xs md:text-sm leading-relaxed p-6 rounded-2xl border shadow-inner ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-gray-200 text-gray-700'}`}>
                {generatedExam || 'Nenhuma questão selecionada.'}
              </pre>
            </div>

            <div className={`p-6 border-t flex gap-3 ${isDarkMode ? 'border-slate-800' : 'border-gray-100'}`}>
              <button 
                onClick={copyToClipboard}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-3"
              >
                <i className="fas fa-copy text-lg"></i> Copiar Conteúdo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamBuilder;
