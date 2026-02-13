import React, { useState } from 'react';

const ProposalPage = ({ onNext }) => {
  const [showQuestion, setShowQuestion] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showCelebration, setShowCelebration] = useState(false);

  const answers = [
    { text: "Yes! 💖", emoji: "🥰", color: "from-pink-500 to-red-500" },
    { text: "Definitely Yes! 💕", emoji: "😍", color: "from-red-500 to-pink-600" },
    { text: "Always Yes! 💫", emoji: "🤗", color: "from-purple-500 to-pink-500" },
    { text: "Forever Yes! ✨", emoji: "😘", color: "from-pink-600 to-red-400" },
    { text: "Obviously Yes! 💘", emoji: "🥺", color: "from-red-400 to-pink-500" },
    { text: "1000% Yes! 🌟", emoji: "😊", color: "from-pink-500 to-purple-500" }
  ];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer.text);
    setShowQuestion(false);
    setTimeout(() => {
      setShowCelebration(true);
    }, 500);
  };

  if (showCelebration) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-red-500 flex items-center justify-center p-4 overflow-hidden">
        {/* Celebration confetti */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            >
              {['🎉', '🎊', '💖', '💕', '🌟', '✨', '💫', '🎈'][Math.floor(Math.random() * 8)]}
            </div>
          ))}
        </div>

        <div className="text-center animate-fadeInUp z-10">
          <div className="mb-6 sm:mb-8">
            <div className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6 animate-heartbeat">🎉</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 dancing-script animate-glow px-4">
              Yaaay! 🥳
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white mb-3 sm:mb-4 px-4">
              I knew you'd say {selectedAnswer}!
            </p>
            <p className="text-lg sm:text-xl text-pink-100 mb-6 sm:mb-8 px-4">
              You make me the happiest person alive! 💖
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={onNext}
              className="block mx-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-pink-600 rounded-full font-semibold text-lg sm:text-xl hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-xl animate-heartbeat touch-manipulation"
            >
              Ready for a Love Challenge? 🧩
            </button>
          </div>
        </div>

        {/* Floating hearts */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white text-xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              💖
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-red-100 flex items-center justify-center p-4">
      <div className="text-center max-w-xs sm:max-w-2xl md:max-w-4xl w-full">
        {showQuestion && (
          <div className="animate-fadeInUp">
            <div className="mb-8 sm:mb-10 md:mb-12">
              <div className="text-6xl sm:text-7xl md:text-8xl mb-6 sm:mb-8 animate-float">💖</div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 mb-4 sm:mb-6 dancing-script animate-glow px-4">
                Will You Be My Valentine?
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 px-4">
                Choose your answer (hint: they're all the same! 😉)
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
              {answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(answer)}
                  className={`group relative p-4 sm:p-6 bg-gradient-to-r ${answer.color} text-white rounded-2xl font-semibold text-base sm:text-lg transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl hover:shadow-pink-500/25 touch-manipulation`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="relative z-10 space-y-2">
                    <div className="text-2xl sm:text-3xl">{answer.emoji}</div>
                    <div className="text-sm sm:text-base md:text-lg">{answer.text}</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Sparkle effect */}
                  <div className="absolute top-2 right-2 text-yellow-200 text-xs sm:text-sm animate-pulse">✨</div>
                </button>
              ))}
            </div>

            {/* Decorative hearts */}
            <div className="absolute top-10 left-10 text-4xl animate-float text-pink-400">💕</div>
            <div className="absolute top-20 right-20 text-3xl animate-float text-red-400" style={{animationDelay: '1s'}}>💖</div>
            <div className="absolute bottom-20 left-20 text-2xl animate-float text-purple-400" style={{animationDelay: '2s'}}>💝</div>
            <div className="absolute bottom-10 right-10 text-3xl animate-float text-pink-500" style={{animationDelay: '0.5s'}}>🌹</div>
          </div>
        )}
        
        {/* Copyright Footer */}
        <div className="fixed bottom-4 left-0 right-0 text-center">
          <p className="text-sm text-purple-400 opacity-70">
            Made with ❤️ by Alan Vattamala
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProposalPage;