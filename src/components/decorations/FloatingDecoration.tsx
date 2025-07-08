
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FloatingDecorationProps {
  side: 'left' | 'right';
  icons: Array<{
    icon: LucideIcon;
    position: 'top' | 'middle' | 'bottom';
    delay?: number;
  }>;
}

const FloatingDecoration: React.FC<FloatingDecorationProps> = ({ side, icons }) => {
  const isLeft = side === 'left';
  
  return (
    <div className={`absolute ${isLeft ? 'left-12 lg:left-20' : 'right-12 lg:right-20'} top-1/2 -translate-y-1/2 z-10 hidden lg:block`}>
      <div className="relative h-80">
        {/* Icon containers */}
        {icons.map((iconItem, index) => {
          const IconComponent = iconItem.icon;
          const topPosition = iconItem.position === 'top' ? 'top-0' : 
                              iconItem.position === 'middle' ? 'top-32' : 'top-64';
          
          return (
            <div
              key={index}
              className={`absolute ${topPosition} ${isLeft ? 'left-0' : 'right-0'} animate-float`}
              style={{ 
                animationDelay: `${iconItem.delay || 0}s`,
                animationDuration: '6s' 
              }}
            >
              <div className="w-16 h-16 bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl group hover:border-white/20 transition-all duration-300 hover:shadow-white/5 hover:shadow-2xl hover:bg-black/40">
                <IconComponent className="w-7 h-7 text-white/80 group-hover:text-white transition-colors duration-300" />
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingDecoration;
