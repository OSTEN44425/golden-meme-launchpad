
import React from 'react';
import { cn } from '@/lib/utils';

interface CommunityCardProps {
  className?: string;
  children: React.ReactNode;
}

const CommunityCard = React.forwardRef<HTMLDivElement, CommunityCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          'community-card rounded-2xl p-8',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CommunityCard.displayName = 'CommunityCard';

export { CommunityCard };
