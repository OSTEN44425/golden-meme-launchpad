
import React from 'react';
import { MessageCircle, Users, Twitter, Bell, Code, Zap } from 'lucide-react';

interface FloatingElementsProps {
  side: 'left' | 'right';
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ side }) => {
  const leftIcons = [
    { icon: Zap, delay: '0s' },
    { icon: Users, delay: '1s' },
    { icon: MessageCircle, delay: '2s' }
  ];

  const rightIcons = [
    { icon: Code, delay: '0.5s' },
    { icon: Bell, delay: '1.5s' },
    { icon: Twitter, delay: '2.5s' }
  ];

  const icons = side === 'left' ? leftIcons : rightIcons;
  const positionClass = side === 'left' ? 'left-16 lg:left-24' : 'right-16 lg:right-24';

  return (
    <div className={`absolute ${positionClass} top-1/2 transform -translate-y-1/2 z-10 hidden lg:block`}>
      <div className="relative">
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
              {/* Effet de lueur violette fixe */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-400 to-purple-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Container principal plus grand et moderne */}
              <div className="relative w-20 h-20 bg-black/95 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 hover:border-violet-400/50 shadow-2xl hover:shadow-violet-500/30">
                <item.icon className="w-9 h-9 text-white group-hover:text-violet-300 transition-colors duration-300 drop-shadow-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingElements;
