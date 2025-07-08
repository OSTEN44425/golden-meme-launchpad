
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
    <div className={`absolute ${isLeft ? 'left-16' : 'right-16'} top-1/2 -translate-y-1/2 z-10 hidden lg:block`}>
      <div className="relative h-80">
        {/* Subtle violet glow lines between icons */}
        <div className="absolute inset-0 flex flex-col justify-between items-center opacity-30">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-violet-400/40 to-transparent"></div>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-violet-400/40 to-transparent"></div>
        </div>
        
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
              <div className="w-16 h-16 bg-slate-800/40 backdrop-blur-xl border border-slate-600/30 rounded-2xl flex items-center justify-center shadow-xl group hover:border-violet-500/40 transition-all duration-300 hover:shadow-violet-500/20 hover:shadow-xl hover:bg-slate-700/50">
                <IconComponent className="w-7 h-7 text-slate-300 group-hover:text-violet-400 transition-colors duration-300" />
                
                {/* Violet glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-violet-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Subtle violet ring glow */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-violet-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingDecoration;
