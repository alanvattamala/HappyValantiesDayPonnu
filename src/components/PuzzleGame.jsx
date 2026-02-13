import React, { useState, useEffect } from 'react';

const PuzzleGame = ({ onComplete }) => {
  const [puzzlePieces, setPuzzlePieces] = useState([]);
  const [solution, setSolution] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showHint, setShowHint] = useState(false);

  // Heart puzzle words that form a love message
  const heartMessage = [
    { id: 1, word: "YOU", color: "from-pink-400 to-red-400", hint: "Second person pronoun" },
    { id: 2, word: "ARE", color: "from-red-400 to-pink-500", hint: "Verb to be" },
    { id: 3, word: "MY", color: "from-pink-500 to-purple-400", hint: "Possessive" },
    { id: 4, word: "HEART", color: "from-purple-400 to-red-500", hint: "❤️" },
    { id: 5, word: "AND", color: "from-red-500 to-pink-400", hint: "Conjunction" },
    { id: 6, word: "SOUL", color: "from-pink-400 to-purple-500", hint: "Spirit" }
  ];

  // Shuffle array function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize puzzle
  useEffect(() => {
    const shuffled = shuffleArray(heartMessage);
    setPuzzlePieces(shuffled);
    setSolution(new Array(heartMessage.length).fill(null));
  }, []);

  // Check if puzzle is complete
  useEffect(() => {
    if (solution.length > 0 && solution.every(piece => piece !== null)) {
      const isCorrect = solution.every((piece, index) => piece.id === heartMessage[index].id);
      if (isCorrect) {
        setIsComplete(true);
        setTimeout(() => {
          onComplete();
        }, 3000);
      }
    }
  }, [solution, onComplete]);

  const handlePieceClick = (piece) => {
    if (isComplete) return;

    // Find first empty spot in solution
    const emptyIndex = solution.findIndex(item => item === null);
    if (emptyIndex !== -1) {
      const newSolution = [...solution];
      newSolution[emptyIndex] = piece;
      setSolution(newSolution);
      
      // Remove piece from available pieces
      setPuzzlePieces(prev => prev.filter(p => p.id !== piece.id));
      setMoves(prev => prev + 1);
    }
  };

  const handleSolutionClick = (index) => {
    if (isComplete) return;
    
    const piece = solution[index];
    if (piece) {
      // Remove from solution and add back to pieces
      const newSolution = [...solution];
      newSolution[index] = null;
      setSolution(newSolution);
      setPuzzlePieces(prev => [...prev, piece]);
      setMoves(prev => prev + 1);
    }
  };

  const resetPuzzle = () => {
    const shuffled = shuffleArray(heartMessage);
    setPuzzlePieces(shuffled);
    setSolution(new Array(heartMessage.length).fill(null));
    setIsComplete(false);
    setMoves(0);
    setShowHint(false);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 flex items-center justify-center p-4 overflow-hidden">
        {/* Celebration effects */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 30 + 20}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            >
              {['🎉', '🎊', '💖', '💕', '🌟', '✨', '💫', '🎈', '🥳'][Math.floor(Math.random() * 9)]}
            </div>
          ))}
        </div>

        <div className="text-center animate-fadeInUp z-10">
          <div className="mb-6 sm:mb-8">
            <div className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6 animate-heartbeat">🎯</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 dancing-script animate-glow px-4">
              Perfect! 🏆
            </h1>
            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 border border-white/30 mx-4">
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {heartMessage.map((piece) => (
                  <div
                    key={piece.id}
                    className={`px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 bg-gradient-to-r ${piece.color} text-white rounded-xl font-bold text-base sm:text-lg md:text-2xl shadow-lg border-2 border-white/30`}
                  >
                    {piece.word}
                  </div>
                ))}
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4">You solved it in {moves} moves! 🎊</p>
              <p className="text-base sm:text-lg md:text-xl text-pink-100">
                This message represents exactly how I feel about you! 💖
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright Footer */}
        <div className="fixed bottom-4 left-0 right-0 text-center z-20">
          <p className="text-sm text-white opacity-70">
            Made with ❤️ by Alan Vattamala
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="max-w-xs sm:max-w-lg md:max-w-4xl w-full text-center">
        <div className="mb-6 sm:mb-8 animate-fadeInUp">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-4 animate-float">🧩</div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 dancing-script animate-glow px-4">
            Love Puzzle Challenge
          </h1>
          <p className="text-lg sm:text-xl text-purple-200 mb-2 px-4">
            Arrange the words to reveal a special message! 💕
          </p>
          <p className="text-base sm:text-lg text-purple-300 mb-4 sm:mb-6 px-4">
            Moves: {moves} | Click pieces to move them
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8 px-4">
            <button
              onClick={() => setShowHint(!showHint)}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold transition-all duration-300 touch-manipulation"
            >
              💡 {showHint ? 'Hide' : 'Show'} Hints
            </button>
            <button
              onClick={resetPuzzle}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 touch-manipulation"
            >
              🔄 Reset
            </button>
          </div>
        </div>

        {/* Solution area */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-white/20">
          <h3 className="text-xl sm:text-2xl text-white mb-4 sm:mb-6 font-semibold">
            💝 Your Message:
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 min-h-[80px] sm:min-h-[100px]">
            {solution.map((piece, index) => (
              <div
                key={index}
                onClick={() => handleSolutionClick(index)}
                className={`w-20 h-12 sm:w-24 sm:h-16 md:w-32 md:h-20 rounded-xl border-2 border-dashed border-white/50 flex items-center justify-center cursor-pointer transition-all duration-300 touch-manipulation ${
                  piece
                    ? `bg-gradient-to-r ${piece.color} text-white font-bold border-solid border-white/70 hover:scale-105 active:scale-95`
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <span className="text-xs sm:text-sm md:text-base">{piece ? piece.word : '?'}</span>
              </div>
            ))}
          </div>
          
          {showHint && (
            <div className="bg-yellow-500/20 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
              <p className="text-white mb-2 text-sm sm:text-base">🔍 Hints:</p>
              <div className="text-xs sm:text-sm text-yellow-100 space-y-1">
                {heartMessage.map((piece, index) => (
                  <p key={piece.id}>
                    Position {index + 1}: {piece.hint}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Available pieces */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20">
          <h3 className="text-xl sm:text-2xl text-white mb-4 sm:mb-6 font-semibold">
            🎲 Available Pieces:
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {puzzlePieces.map((piece) => (
              <button
                key={piece.id}
                onClick={() => handlePieceClick(piece)}
                className={`px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r ${piece.color} text-white rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/30 hover:border-white/50 touch-manipulation`}
              >
                {piece.word}
              </button>
            ))}
          </div>
          
          {puzzlePieces.length === 0 && !isComplete && (
            <p className="text-white/70 italic mt-4 text-sm sm:text-base">
              All pieces used! Check your arrangement above.
            </p>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-4xl animate-float text-pink-400">🌟</div>
        <div className="absolute top-20 right-20 text-3xl animate-float text-purple-400" style={{animationDelay: '1s'}}>💫</div>
        <div className="absolute bottom-20 left-20 text-2xl animate-float text-blue-400" style={{animationDelay: '2s'}}>✨</div>
        <div className="absolute bottom-10 right-10 text-3xl animate-float text-pink-500" style={{animationDelay: '0.5s'}}>💖</div>
      </div>
      
      {/* Copyright Footer */}
      <div className="fixed bottom-4 left-0 right-0 text-center z-20">
        <p className="text-sm text-purple-200 opacity-70">
          Made with ❤️ by Alan Vattamala
        </p>
      </div>
    </div>
  );
};

export default PuzzleGame;