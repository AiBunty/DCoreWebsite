import { ButtonHTMLAttributes, ReactNode } from 'react';
import './DCoreButton.css';

interface DCoreButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  className?: string;
}

export function DCoreButton({
  children,
  variant = 'primary',
  size = 'default',
  className,
  ...props
}: DCoreButtonProps) {
  const baseClass = 'dcore-btn';
  const variantClass = `dcore-btn-${variant}`;
  const sizeClass = size === 'large' ? 'dcore-btn-large' : '';
  const allClasses = [baseClass, variantClass, sizeClass, className].filter(Boolean).join(' ');

  return (
    <button className={allClasses} {...props}>
      {children}
    </button>
  );
}
