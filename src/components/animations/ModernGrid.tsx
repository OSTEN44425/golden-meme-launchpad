
import React from 'react';

const ModernGrid = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main grid pattern with radial gradient mask */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-drift 30s linear infinite',
            mask: 'radial-gradient(ellipse 120% 100% at 50% 50%, black 0%, transparent 70%)',
            WebkitMask: 'radial-gradient(ellipse 120% 100% at 50% 50%, black 0%, transparent 70%)'
          }}
        />
      </div>
      
      {/* Secondary smaller grid with gradient mask */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            animation: 'grid-drift-reverse 25s linear infinite',
            mask: 'radial-gradient(ellipse 110% 90% at 50% 50%, black 20%, transparent 65%)',
            WebkitMask: 'radial-gradient(ellipse 110% 90% at 50% 50%, black 20%, transparent 65%)'
          }}
        />
      </div>
      
      {/* Animated dots at grid intersections with gradient visibility */}
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
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
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
      
      {/* Enhanced gradient overlays for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/[0.03] via-transparent to-violet-500/[0.03]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/[0.04] rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-violet-500/[0.04] rounded-full blur-3xl animate-float" />
      
      {/* Moving light streaks with gradient mask */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-slide-vertical left-1/4"
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
      
      {/* Central glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-blue-500/[0.02] via-violet-500/[0.01] to-transparent rounded-full blur-3xl animate-pulse-slow" />
    </div>
  );
};

export default ModernGrid;
