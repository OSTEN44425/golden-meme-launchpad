
import React from 'react';
import { cn } from '@/lib/utils';

interface ModernButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const ModernButton = React.forwardRef<HTMLButtonElement, ModernButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'relative inline-flex items-center justify-center font-semibold transition-all duration-300 overflow-hidden group';
    
    const variantClasses = {
      primary: 'bg-gradient-to-r from-violet-600 via-violet-500 to-violet-600 text-white shadow-lg hover:shadow-xl hover:shadow-violet-500/25 border border-violet-500/20',
      secondary: 'bg-slate-900/95 backdrop-blur-md border-2 border-slate-800/80 text-slate-200 hover:border-slate-700/90 hover:text-white hover:bg-slate-800/95 shadow-lg',
      ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/30'
    };
    
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm rounded-lg',
      md: 'px-6 py-3 text-base rounded-xl',
      lg: 'px-8 py-4 text-lg rounded-xl'
    };

    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
        
        {/* Glow effect for primary variant */}
        {variant === 'primary' && (
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-violet-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
        )}
        
        {/* Dark glow for secondary variant */}
        {variant === 'secondary' && (
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300" />
        )}
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

ModernButton.displayName = 'ModernButton';

export { ModernButton };
