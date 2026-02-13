import React, { useState, useEffect } from 'react';

const LoveLetter = ({ onNext }) => {
  const [showLetter, setShowLetter] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);

const letterLines = [
  "My Dearest Valentine (My Ponnu),",
  "",
  "Every day begins with one beautiful thought — you. ✨",
  "You are the first thing on my mind when I wake up and the last thought before I fall asleep.💖",
  "",
  "Your texts and calls fill my heart with so much happiness and life. 💫",
  "You are my biggest flex, ponnu — my pride, my happiness, my everything 💖,",
"and your love is the most precious gift I have ever received.✨",
  "",
  "You turn ordinary moments into beautiful memories,",
  "and every sunrise feels brighter just because you are in my life. 💕",
  "",
  "I promise to stand by you, care for you, and love you today, tomorrow,",
  "and for all the days that follow.😊",
  "",
  "Happy Valentine's Day, my love!",
  "",
  "Forever yours,",
  "Your Alan 💖"
];

  useEffect(() => {
    setShowLetter(true);
  }, []);

  useEffect(() => {
    if (showLetter && currentLine < letterLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [showLetter, currentLine, letterLines.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-rose-100 flex items-center justify-center p-4">
      <div className={`relative max-w-xs sm:max-w-lg md:max-w-2xl w-full transition-all duration-1000 ${showLetter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Paper background */}
        <div className="relative bg-gradient-to-b from-cream-100 to-amber-50 rounded-lg shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-amber-200">
          {/* Paper texture */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-2 h-2 bg-red-200 rounded-full"></div>
            <div className="absolute top-8 right-6 w-1 h-1 bg-pink-200 rounded-full"></div>
            <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-red-300 rounded-full"></div>
          </div>

          {/* Letter header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl dancing-script text-red-700 mb-4 animate-glow">
              A Love Letter 💌
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-pink-400 to-red-400 mx-auto rounded-full"></div>
          </div>

          {/* Letter content */}
          <div className="space-y-3 sm:space-y-4 text-center px-2">
            {letterLines.map((line, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index <= currentLine 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
              >
                {line === "" ? (
                  <div className="h-2 sm:h-3 md:h-4"></div>
                ) : index === 0 || index === letterLines.length - 2 ? (
                  <p className="text-lg sm:text-xl md:text-2xl dancing-script text-red-600 font-semibold">
                    {line}
                  </p>
                ) : (
                  <p className={`text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed ${
                    line.includes('💖') || line.includes('💕') ? 'dancing-script text-red-500' : ''
                  }`}>
                    {line}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-2 -left-2 text-2xl animate-float">🌹</div>
          <div className="absolute -top-1 -right-1 text-xl animate-float" style={{animationDelay: '1s'}}>💝</div>
          <div className="absolute -bottom-2 left-4 text-lg animate-float" style={{animationDelay: '2s'}}>💕</div>
          <div className="absolute -bottom-1 -right-2 text-2xl animate-float" style={{animationDelay: '0.5s'}}>🌸</div>

          {/* Next button */}
          {currentLine >= letterLines.length && (
            <div className="text-center mt-8 sm:mt-10 md:mt-12">
              <button
                onClick={onNext}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full font-semibold text-base sm:text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 animate-fadeInUp touch-manipulation"
              >
                <span className="relative z-10">Continue to Something Special 💖</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          )}
        </div>

        {/* Floating hearts */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute text-pink-400 text-sm animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              💝
            </div>
          ))}
        </div>
      </div>      
      {/* Copyright Footer */}
      <div className="fixed bottom-4 left-0 right-0 text-center">
        <p className="text-sm text-red-400 opacity-70">
          Made with ❤️ by Alan Vattamala
        </p>
      </div>    </div>
  );
};

export default LoveLetter;