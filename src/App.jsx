import React, { useState } from 'react';
import LoveEnvelope from './components/LoveEnvelope';
import LoveLetter from './components/LoveLetter';
import ProposalPage from './components/ProposalPage';
import PuzzleGame from './components/PuzzleGame';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [currentPage, setCurrentPage] = useState('envelope');
  
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'envelope':
        return <LoveEnvelope onOpen={() => navigateTo('letter')} />;
      case 'letter':
        return <LoveLetter onNext={() => navigateTo('proposal')} />;
      case 'proposal':
        return <ProposalPage onNext={() => navigateTo('puzzle')} />;
      case 'puzzle':
        return <PuzzleGame onComplete={() => navigateTo('final')} />;
      case 'final':
        return (
          <div className="min-h-screen bg-gradient-to-br from-pink-400 via-red-400 to-pink-600 flex items-center justify-center p-4">
            <div className="text-center animate-fadeInUp max-w-sm sm:max-w-lg md:max-w-2xl w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 dancing-script animate-glow px-4">
                You've unlocked my heart! 💖
              </h1>
              <p className="text-xl sm:text-2xl text-white mb-6 sm:mb-8 px-4">Happy Valentine's Day, my love!</p>
              <button
                onClick={() => navigateTo('envelope')}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-pink-600 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300 animate-heartbeat touch-manipulation"
              >
                Start Over 🔄
              </button>
            </div>
            
            {/* Copyright Footer */}
            <div className="fixed bottom-4 left-0 right-0 text-center">
              <p className="text-sm text-white opacity-70">
                Made with ❤️ by Alan Vattamala
              </p>
            </div>
          </div>
        );
      default:
        return <LoveEnvelope onOpen={() => navigateTo('letter')} />;
    }
  };

  return (
    <div className="relative">
      <FloatingHearts />
      {renderPage()}
    </div>
  );
}

export default App;
