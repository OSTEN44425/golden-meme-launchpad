
import React from 'react';
import { cn } from '@/lib/utils';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'relative inline-flex items-center justify-center font-semibold transition-all duration-300 overflow-hidden group bg-black border border-violet-500/30';
    
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm rounded-lg',
      md: 'px-6 py-3 text-base rounded-xl',
      lg: 'px-8 py-4 text-lg rounded-xl'
    };

    return (
      <button
        className={cn(
          baseClasses,
          sizeClasses[size],
          'text-white hover:text-violet-200',
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Glow border animation */}
        <div className="glow absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

GlowButton.displayName = 'GlowButton';

export { GlowButton };
