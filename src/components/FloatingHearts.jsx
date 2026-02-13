import React from 'react';

const FloatingHearts = () => {
  const hearts = ['💖', '💕', '💝', '💘', '❤️', '🌹', '✨', '💫'];

  // Reduce number of hearts on mobile for better performance
  const getHeartCount = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 8 : 15;
    }
    return 10;
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(getHeartCount())].map((_, i) => {
        const heartType = hearts[Math.floor(Math.random() * hearts.length)];
        const size = Math.random() * 15 + 12; // 12-27px (smaller on mobile)
        const duration = Math.random() * 10 + 10; // 10-20s
        const delay = Math.random() * 5; // 0-5s delay
        const startPosition = Math.random() * 100; // 0-100% of screen width
        
        return (
          <div
            key={i}
            className="absolute animate-float opacity-20 sm:opacity-30"
            style={{
              left: `${startPosition}%`,
              fontSize: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
              bottom: '-50px',
              animation: `floatUp ${duration}s ${delay}s infinite ease-in-out`
            }}
          >
            {heartType}
          </div>
        );
      })}
      
      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100px) translateX(30px) rotate(180deg);
            opacity: 0;
          }
        }
        
        @media (max-width: 768px) {
          @keyframes floatUp {
            0% {
              transform: translateY(100vh) translateX(0px) rotate(0deg);
              opacity: 0;
            }
            15% {
              opacity: 0.3;
            }
            85% {
              opacity: 0.3;
            }
            100% {
              transform: translateY(-80px) translateX(20px) rotate(90deg);
              opacity: 0;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingHearts;