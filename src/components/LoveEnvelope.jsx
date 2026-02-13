import React, { useState } from 'react';

const LoveEnvelope = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [showLock, setShowLock] = useState(true);

  const handleUnlock = () => {
    setShowLock(false);
    setTimeout(() => {
      setIsOpening(true);
      setTimeout(() => {
        onOpen();
      }, 1500);
    }, 800);
  };

  if (showLock) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 flex items-center justify-center p-4">
        <div className="text-center animate-fadeInUp max-w-sm sm:max-w-md md:max-w-lg w-full">
          <div className="mb-6 sm:mb-8">
            <div className="text-6xl sm:text-7xl md:text-8xl mb-4 animate-float">🔒</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 dancing-script animate-glow px-4">
              A Secret Message Awaits...
            </h1>
            <p className="text-lg sm:text-xl text-pink-200 mb-6 sm:mb-8 px-4">
              Click the lock to reveal what's inside 💕
            </p>
          </div>
          <button
            onClick={handleUnlock}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-semibold text-lg sm:text-xl transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-pink-500/25 touch-manipulation"
          >
            <span className="relative z-10">🗝️ Unlock My Heart</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
        
        {/* Copyright Footer */}
        <div className="fixed bottom-4 left-0 right-0 text-center">
          <p className="text-sm text-pink-200 opacity-70">
            Made with ❤️ by Alan Vattamala
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-pink-200 flex items-center justify-center p-4 overflow-hidden">
      <div className="relative max-w-sm sm:max-w-md md:max-w-lg w-full">
        {/* Envelope */}
        <div className={`relative w-full max-w-80 mx-auto h-48 sm:h-56 md:h-60 transition-transform duration-1500 ${isOpening ? 'scale-110' : 'scale-100'}`}>
          {/* Envelope body */}
          <div className="absolute inset-0 bg-gradient-to-b from-red-300 to-red-400 rounded-lg shadow-2xl">
            {/* Envelope pattern */}
            <div className="absolute inset-2 border-2 border-red-200 rounded-lg opacity-30"></div>
            <div className="absolute top-4 left-4 text-red-100 text-xs">💌</div>
            <div className="absolute bottom-4 right-4 text-red-100 text-xs">💕</div>
          </div>
          
          {/* Envelope flap */}
          <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-red-400 to-red-500 transition-transform duration-1000 origin-bottom ${isOpening ? 'transform -rotate-12 translate-y-2' : ''}`}
               style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-red-100 text-sm">💖</div>
          </div>

          {/* Letter peeking out */}
          <div className={`absolute bottom-4 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 h-36 sm:h-44 md:h-48 bg-cream bg-gradient-to-b from-amber-50 to-amber-100 rounded-sm shadow-lg transition-transform duration-1000 ${isOpening ? 'transform translate-y-0' : 'transform translate-y-40'}`}>
            <div className="p-2 sm:p-3 md:p-4 text-center">
              <h3 className="text-sm sm:text-base md:text-lg dancing-script text-red-700 mb-2">My Dearest Love...</h3>
              <div className="w-full h-px bg-red-200 mb-2"></div>
              <div className="space-y-1">
                <div className="w-3/4 h-1.5 sm:h-2 bg-red-100 mx-auto rounded"></div>
                <div className="w-full h-1.5 sm:h-2 bg-red-100 rounded"></div>
                <div className="w-5/6 h-1.5 sm:h-2 bg-red-100 mx-auto rounded"></div>
              </div>
              <div className="mt-3 sm:mt-4 text-red-400 text-sm sm:text-base">💕 💖 💕</div>
            </div>
          </div>
        </div>

        {/* Click instruction */}
        <div className={`text-center mt-6 sm:mt-8 transition-opacity duration-500 ${isOpening ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-lg sm:text-xl text-red-600 dancing-script animate-glow px-4">
            Click anywhere to read the letter! 💌
          </p>
        </div>

        {/* Click area */}
        {isOpening && (
          <div 
            className="absolute inset-0 cursor-pointer"
            onClick={onOpen}
          ></div>
        )}
      </div>
      
      {/* Copyright Footer */}
      <div className="fixed bottom-4 left-0 right-0 text-center">
        <p className="text-sm text-red-400 opacity-70">
          Made with ❤️ by Alan Vattamala
        </p>
      </div>
    </div>
  );
};

export default LoveEnvelope;