
import React from 'react';

const TechGrid = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated tech grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
      </div>
      
      {/* Animated dots */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Subtle gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/[0.01] via-transparent to-violet-500/[0.01]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-violet-500/[0.02] rounded-full blur-3xl" />
    </div>
  );
};

export default TechGrid;
