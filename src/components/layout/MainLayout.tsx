'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/stores/useThemeStore';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className='min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300'>
      <main>{children}</main>
    </div>
  );
}
