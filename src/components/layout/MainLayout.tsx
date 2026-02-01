'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/stores/useThemeStore';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, [theme]);

  return (
    <div className='min-h-screen bg-[#0f0f0f] text-white'>
      <main>{children}</main>
    </div>
  );
}
