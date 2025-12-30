'use client';

import { useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { PageTransition } from './PageTransition';
import { useThemeStore } from '@/stores/useThemeStore';
import { FloatingObjects } from '@/components/background/FloatingObjects';
import { NoiseBackground } from '@/components/background/NoiseBackground';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { theme } = useThemeStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className='min-h-screen cursor-none lg:cursor-none'>
      <CustomCursor />
      <ScrollProgress />
      <NoiseBackground />
      <FloatingObjects />
      <div className='fixed inset-0 bg-background/60 backdrop-blur-[2px] -z-5 pointer-events-none' />
      <Sidebar />
      <main className='lg:ml-70 min-h-screen pt-16 lg:pt-0'>
        <PageTransition>{children}</PageTransition>
      </main>
    </div>
  );
}
