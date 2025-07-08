
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
  const positionClass = side === 'left' ? 'left-32 lg:left-48' : 'right-32 lg:right-48';

  return (
    <div className={`absolute ${positionClass} top-1/2 transform -translate-y-1/2 z-10 hidden lg:block`}>
      <div className="relative">
        {/* Lignes de connexion entre les icônes */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          style={{ width: '120px', height: '320px', left: side === 'left' ? '30px' : '-90px', top: '-140px' }}
        >
          <defs>
            <linearGradient id={`connection-gradient-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.6)" />
            </linearGradient>
          </defs>
          
          {/* Ligne courbe reliant icône 1 à icône 2 */}
          <path
            d={side === 'left' ? "M 40 160 Q 20 200 40 240" : "M 80 160 Q 100 200 80 240"}
            stroke={`url(#connection-gradient-${side})`}
            strokeWidth="2"
            fill="none"
            strokeDasharray="6,4"
            className="animate-pulse"
            style={{ animationDuration: '3s' }}
          />
          
          {/* Ligne courbe reliant icône 2 à icône 3 */}
          <path
            d={side === 'left' ? "M 40 240 Q 60 280 40 320" : "M 80 240 Q 60 280 80 320"}
            stroke={`url(#connection-gradient-${side})`}
            strokeWidth="2"
            fill="none"
            strokeDasharray="6,4"
            className="animate-pulse"
            style={{ animationDuration: '3s', animationDelay: '1s' }}
          />
          
          {/* Points de connexion lumineux */}
          <circle
            cx={side === 'left' ? "40" : "80"}
            cy="160"
            r="3"
            fill="rgba(139, 92, 246, 0.8)"
            className="animate-pulse"
          />
          <circle
            cx={side === 'left' ? "40" : "80"}
            cy="240"
            r="3"
            fill="rgba(59, 130, 246, 0.8)"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <circle
            cx={side === 'left' ? "40" : "80"}
            cy="320"
            r="3"
            fill="rgba(16, 185, 129, 0.8)"
            className="animate-pulse"
            style={{ animationDelay: '2s' }}
          />
        </svg>

        {/* Éléments flottants plus grands et modernes */}
        <div className="space-y-20 relative z-10">
          {icons.map((item, index) => (
            <div
              key={index}
              className="relative group animate-bounce"
              style={{ 
                animationDelay: item.delay,
                animationDuration: '4s',
                animationIterationCount: 'infinite'
              }}
            >
              {/* Effet de lueur moderne plus prononcé */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${item.color} rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
              
              {/* Container principal plus grand et moderne */}
              <div className={`relative w-20 h-20 bg-black/95 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 hover:border-violet-400/50 shadow-2xl hover:shadow-violet-500/30`}>
                <item.icon className="w-9 h-9 text-white group-hover:text-violet-300 transition-colors duration-300 drop-shadow-lg" />
                
                {/* Ring animé plus visible */}
                <div className="absolute inset-0 rounded-3xl border-2 border-violet-400/30 animate-pulse" style={{ animationDuration: '3s' }}></div>
                
                {/* Ring externe qui pulse */}
                <div className="absolute -inset-2 rounded-3xl border border-violet-400/20 animate-ping" style={{ animationDuration: '4s' }}></div>
              </div>

              {/* Points décoratifs plus visibles */}
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-violet-400 rounded-full animate-ping shadow-lg shadow-violet-400/50"></div>
              <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50" style={{ animationDelay: '2s' }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingElements;
