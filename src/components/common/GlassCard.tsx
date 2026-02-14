/**
 * GlassCard Component
 *
 * Glassmorphism 스타일의 재사용 가능한 카드 컴포넌트
 * UI 라이브러리로 이주 가능하도록 프로젝트 의존성 0%로 설계
 *
 * @example
 * <GlassCard variant="hover" padding="lg">Content</GlassCard>
 */

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'hover' | 'group';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'md' | 'lg' | 'xl' | '2xl';
}

export function GlassCard({
  children,
  className,
  variant = 'default',
  padding = 'md',
  rounded = '2xl',
}: GlassCardProps) {
  const variantClasses = {
    default: '',
    hover: 'hover:ring-2 hover:ring-[var(--accent-primary)]/50 transition-all',
    group:
      'hover:ring-2 hover:ring-[var(--accent-primary)]/50 transition-all group',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const roundedClasses = {
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
  };

  return (
    <div
      className={cn(
        'bg-[var(--bg-surface)] backdrop-blur-md border border-[var(--border-primary)]',
        roundedClasses[rounded],
        paddingClasses[padding],
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </div>
  );
}
