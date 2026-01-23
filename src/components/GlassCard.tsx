import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  premium?: boolean;
  interactive?: boolean;
}

/**
 * GlassCard Component - Reusable frosted glass card with glowing effects
 * 
 * Features:
 * - Frosted glass (glassmorphism) design
 * - Smooth hover animations with dramatic glow
 * - Optional premium/featured state with enhanced glow
 * - Responsive and accessible
 * 
 * Usage:
 * <GlassCard premium={true}>
 *   <div className="glass-card-content">
 *     Your content here
 *   </div>
 * </GlassCard>
 */
export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  premium = false,
  interactive = true,
}) => {
  return (
    <div
      className={cn(
        'glass-card',
        premium && 'premium',
        interactive && 'cursor-pointer',
        className
      )}
    >
      {premium && <div className="gradient-overlay" />}
      {children}
    </div>
  );
};

interface GlassBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassBadge: React.FC<GlassBadgeProps> = ({
  children,
  className,
}) => {
  return (
    <span className={cn('glass-badge', className)}>
      {children}
    </span>
  );
};

interface GlassSectionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * GlassSection - Background wrapper with gradient and radial glow effects
 * Use this as a container for multiple glass cards
 */
export const GlassSection: React.FC<GlassSectionProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('glass-section-bg', className)}>
      {children}
    </div>
  );
};
