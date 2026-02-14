/**
 * Text Component (Compound Pattern)
 * 
 * 일관된 타이포그래피 시스템을 제공하는 컴포넌트
 * UI 라이브러리로 이주 가능하도록 프로젝트 의존성 0%로 설계
 * 
 * @example
 * <Text.Heading size="xl">Title</Text.Heading>
 * <Text.Body size="lg" color="secondary">Description</Text.Body>
 */

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TextHeadingProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  className?: string;
}

interface TextBodyProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  children: ReactNode;
  className?: string;
}

interface TextLabelProps {
  children: ReactNode;
  className?: string;
}

const Heading = ({
  size = 'md',
  as: Component = 'h2',
  children,
  className,
}: TextHeadingProps) => {
  const sizeClasses = {
    xs: 'text-xl md:text-2xl font-bold',
    sm: 'text-2xl md:text-3xl font-bold',
    md: 'text-3xl md:text-4xl font-bold',
    lg: 'text-4xl md:text-5xl font-bold',
    xl: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
  };

  return (
    <Component className={cn(sizeClasses[size], className)}>
      {children}
    </Component>
  );
};

const Body = ({
  size = 'md',
  color = 'primary',
  children,
  className,
}: TextBodyProps) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base md:text-lg',
    lg: 'text-lg md:text-xl',
  };

  const colorClasses = {
    primary: 'text-[var(--text-primary)]',
    secondary: 'text-[var(--text-secondary)]',
    tertiary: 'text-[var(--text-tertiary)]',
    quaternary: 'text-[var(--text-quaternary)]',
  };

  return (
    <p className={cn(sizeClasses[size], colorClasses[color], className)}>
      {children}
    </p>
  );
};

const Label = ({ children, className }: TextLabelProps) => {
  return (
    <span className={cn('text-xs text-[var(--text-tertiary)]', className)}>
      {children}
    </span>
  );
};

export const Text = {
  Heading,
  Body,
  Label,
};
