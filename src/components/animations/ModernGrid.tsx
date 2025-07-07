
import React from 'react';

const ModernGrid = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main grid pattern with stronger visibility */}
      <div className="absolute inset-0 opacity-[0.12]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-drift 30s linear infinite',
            mask: 'radial-gradient(ellipse 120% 100% at 50% 50%, black 0%, transparent 70%)',
            WebkitMask: 'radial-gradient(ellipse 120% 100% at 50% 50%, black 0%, transparent 70%)'
          }}
        />
      </div>
      
      {/* Secondary smaller grid with stronger visibility */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            animation: 'grid-drift-reverse 25s linear infinite',
            mask: 'radial-gradient(ellipse 110% 90% at 50% 50%, black 20%, transparent 65%)',
            WebkitMask: 'radial-gradient(ellipse 110% 90% at 50% 50%, black 20%, transparent 65%)'
          }}
        />
      </div>
      
      {/* Animated dots at grid intersections */}
      <div className="absolute inset-0">
        <div
          style={{
            mask: 'radial-gradient(ellipse 100% 80% at 50% 50%, black 0%, transparent 60%)',
            WebkitMask: 'radial-gradient(ellipse 100% 80% at 50% 50%, black 0%, transparent 60%)'
          }}
        >
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${(i % 6) * 20 + 10}%`,
                top: `${Math.floor(i / 6) * 20 + 10}%`,
                animation: `pulse ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Moving light streaks - only violet */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-px h-full bg-gradient-to-b from-transparent via-violet-500/30 to-transparent animate-slide-vertical left-1/4"
          style={{
            mask: 'radial-gradient(ellipse 200% 100% at 50% 50%, black 0%, transparent 70%)',
            WebkitMask: 'radial-gradient(ellipse 200% 100% at 50% 50%, black 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent animate-slide-horizontal top-1/3"
          style={{
            mask: 'radial-gradient(ellipse 100% 200% at 50% 50%, black 0%, transparent 70%)',
            WebkitMask: 'radial-gradient(ellipse 100% 200% at 50% 50%, black 0%, transparent 70%)'
          }}
        />
      </div>
      
      {/* Central violet glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-violet-500/[0.02] via-violet-500/[0.01] to-transparent rounded-full blur-3xl animate-pulse-slow" />
    </div>
  );
};

export default ModernGrid;
