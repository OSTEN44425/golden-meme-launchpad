
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
  const positionClass = side === 'left' ? 'left-16' : 'right-16';

  return (
    <div className={`absolute ${positionClass} top-1/2 transform -translate-y-1/2 z-10 hidden lg:block`}>
      <div className="relative space-y-20">
        {/* Lignes de connexion */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ width: '200px', height: '300px', left: side === 'left' ? '50px' : '-150px' }}
        >
          <defs>
            <linearGradient id={`gradient-${side}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.3)" />
            </linearGradient>
          </defs>
          
          {/* Lignes courbes connectant les éléments */}
          <path
            d={side === 'left' 
              ? "M50 50 Q80 100 50 150 Q80 200 50 250"
              : "M150 50 Q120 100 150 150 Q120 200 150 250"
            }
            stroke={`url(#gradient-${side})`}
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: '3s' }}
          />
        </svg>

        {/* Éléments flottants */}
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
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
            
            {/* Main container */}
            <div className={`relative w-16 h-16 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 hover:border-violet-500/50`}>
              <item.icon className="w-8 h-8 text-white group-hover:text-violet-400 transition-colors duration-300" />
              
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-xl border border-violet-500/30 animate-ping"></div>
            </div>

            {/* Floating dots around */}
            <div className="absolute -top-2 -left-2 w-2 h-2 bg-violet-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingElements;
