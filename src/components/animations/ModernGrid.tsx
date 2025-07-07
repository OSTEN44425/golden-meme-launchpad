
import React from 'react';

const ModernGrid = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main grid pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-drift 30s linear infinite'
          }}
        />
      </div>
      
      {/* Secondary smaller grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            animation: 'grid-drift-reverse 25s linear infinite'
          }}
        />
      </div>
      
      {/* Animated dots at grid intersections */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${(i % 6) * 20 + 10}%`,
              top: `${Math.floor(i / 6) * 20 + 10}%`,
              animation: `pulse ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Gradient overlays for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/[0.02] via-transparent to-violet-500/[0.02]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/[0.03] rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-violet-500/[0.03] rounded-full blur-3xl animate-float" />
      
      {/* Moving light streaks */}
      <div className="absolute inset-0">
        <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-slide-vertical left-1/4" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent animate-slide-horizontal top-1/3" />
      </div>
    </div>
  );
};

export default ModernGrid;
