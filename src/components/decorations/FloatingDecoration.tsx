
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
    <div className={`fixed ${isLeft ? 'left-8' : 'right-8'} top-1/2 -translate-y-1/2 z-10 hidden lg:block`}>
      <div className="relative h-80">
        {/* Connecting lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {/* Line from top to middle */}
          <div className={`absolute top-16 ${isLeft ? 'left-8' : 'right-8'} w-px h-16 bg-gradient-to-b from-violet-500/60 to-violet-400/40`} />
          {/* Line from middle to bottom */}
          <div className={`absolute top-32 ${isLeft ? 'left-8' : 'right-8'} w-px h-16 bg-gradient-to-b from-violet-400/40 to-violet-500/60`} />
          
          {/* Horizontal connecting lines */}
          <div className={`absolute top-20 ${isLeft ? 'left-8' : 'right-0'} ${isLeft ? 'w-6' : 'w-6'} h-px bg-gradient-to-${isLeft ? 'r' : 'l'} from-violet-500/60 to-transparent`} />
          <div className={`absolute top-36 ${isLeft ? 'left-8' : 'right-0'} ${isLeft ? 'w-6' : 'w-6'} h-px bg-gradient-to-${isLeft ? 'r' : 'l'} from-violet-500/60 to-transparent`} />
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
              <div className="w-16 h-16 bg-slate-800/80 backdrop-blur-sm border border-violet-500/30 rounded-xl flex items-center justify-center shadow-lg group hover:border-violet-400/50 transition-all duration-300 hover:shadow-violet-500/20 hover:shadow-xl">
                <IconComponent className="w-8 h-8 text-violet-400 group-hover:text-violet-300 transition-colors duration-300" />
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingDecoration;
