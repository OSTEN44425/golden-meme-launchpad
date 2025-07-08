
import React from 'react';
import { MessageCircle, Users, Twitter, Bell, Code, Zap } from 'lucide-react';

interface FloatingElementsProps {
  side: 'left' | 'right';
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ side }) => {
  const leftIcons = [
    { icon: Zap, color: 'from-violet-400 to-purple-500', delay: '0s' },
    { icon: Users, color: 'from-blue-400 to-cyan-500', delay: '1s' },
    { icon: MessageCircle, color: 'from-green-400 to-emerald-500', delay: '2s' }
  ];

  const rightIcons = [
    { icon: Code, color: 'from-violet-400 to-purple-500', delay: '0.5s' },
    { icon: Bell, color: 'from-blue-400 to-cyan-500', delay: '1.5s' },
    { icon: Twitter, color: 'from-green-400 to-emerald-500', delay: '2.5s' }
  ];

  const icons = side === 'left' ? leftIcons : rightIcons;
  const positionClass = side === 'left' ? 'left-8' : 'right-8';

  return (
    <div className={`absolute ${positionClass} top-1/2 transform -translate-y-1/2 z-10 hidden lg:block`}>
      <div className="relative space-y-16">
        {/* Lignes de connexion élégantes */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ width: '120px', height: '250px', left: side === 'left' ? '30px' : '-90px' }}
        >
          <defs>
            <linearGradient id={`gradient-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.4)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.2)" />
            </linearGradient>
          </defs>
          
          {/* Lignes droites élégantes reliant les éléments */}
          <line
            x1={side === 'left' ? "40" : "80"}
            y1="40"
            x2={side === 'left' ? "40" : "80"}
            y2="210"
            stroke={`url(#gradient-${side})`}
            strokeWidth="1"
            strokeDasharray="4,4"
            className="animate-pulse"
            style={{ animationDuration: '2s' }}
          />
          
          {/* Points de connexion */}
          <circle
            cx={side === 'left' ? "40" : "80"}
            cy="40"
            r="2"
            fill="rgba(139, 92, 246, 0.6)"
          />
          <circle
            cx={side === 'left' ? "40" : "80"}
            cy="125"
            r="2"
            fill="rgba(59, 130, 246, 0.6)"
          />
          <circle
            cx={side === 'left' ? "40" : "80"}
            cy="210"
            r="2"
            fill="rgba(16, 185, 129, 0.6)"
          />
        </svg>

        {/* Éléments flottants modernes */}
        {icons.map((item, index) => (
          <div
            key={index}
            className="relative group animate-bounce"
            style={{ 
              animationDelay: item.delay,
              animationDuration: '3s',
              animationIterationCount: 'infinite'
            }}
          >
            {/* Effet de lueur moderne */}
            <div className={`absolute -inset-2 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
            
            {/* Container principal moderne */}
            <div className={`relative w-14 h-14 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 hover:border-violet-400/30 shadow-2xl hover:shadow-violet-500/20`}>
              <item.icon className="w-7 h-7 text-white group-hover:text-violet-300 transition-colors duration-300" />
              
              {/* Ring animé subtil */}
              <div className="absolute inset-0 rounded-2xl border border-violet-400/20 animate-pulse" style={{ animationDuration: '4s' }}></div>
            </div>

            {/* Points décoratifs */}
            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-violet-400/70 rounded-full animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-blue-400/50 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingElements;
