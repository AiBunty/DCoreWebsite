import { ReactNode } from 'react';
import './GlassCard.css';

interface GlassCardProps {
  children: ReactNode;
  variant?: 'default' | 'large' | 'hover';
  className?: string;
  premium?: boolean;
}

export function GlassCard({ children, variant = 'default', className, premium }: GlassCardProps) {
  const baseClass = 'glass-card';
  const variantClass = `glass-card-${variant}`;
  const premiumClass = premium ? 'glass-card-premium' : undefined;
  const allClasses = [baseClass, variantClass, premiumClass, className].filter(Boolean).join(' ');

  return <div className={allClasses}>{children}</div>;
}

export function GlassBadge({ children, className }: { children: ReactNode; className?: string }) {
  const all = ['glass-badge', className].filter(Boolean).join(' ');
  return <span className={all}>{children}</span>;
}

export function GlassSection({ children, className }: { children: ReactNode; className?: string }) {
  const all = ['glass-section', className].filter(Boolean).join(' ');
  return <section className={all}>{children}</section>;
}
