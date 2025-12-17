'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useThemeStore } from '@/stores/useThemeStore';
import { PROFILE } from '@/constants/data';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Info', href: '/info' },
  { label: 'Contact', href: '/contact' },
];

export function Sidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useThemeStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className='hidden lg:flex fixed left-0 top-0 h-screen w-70 flex-col justify-between p-8 z-50'>
        <div>
          <Link href='/' className='block mb-2'>
            <h1 className='text-xl font-medium tracking-tight'>
              {PROFILE.name}
            </h1>
          </Link>
          <p className='text-sm text-muted-foreground mb-12'>{PROFILE.title}</p>

          <nav className='space-y-1'>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 py-1.5 text-sm transition-colors ${
                  pathname === item.href
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className='w-1.5 h-1.5 rounded-full bg-current' />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className='space-y-4'>
          <button
            onClick={toggleTheme}
            className='flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors'
          >
            {theme === 'dark' ? (
              <>
                <Sun className='w-4 h-4' />
                Light
              </>
            ) : (
              <>
                <Moon className='w-4 h-4' />
                Dark
              </>
            )}
          </button>
          <p className='text-xs text-muted-foreground'>© {PROFILE.name}</p>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className='lg:hidden fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-background/80 backdrop-blur-md z-50 border-b border-border'>
        <Link href='/' className='text-lg font-medium'>
          {PROFILE.name}
        </Link>
        <div className='flex items-center gap-4'>
          <button
            onClick={toggleTheme}
            className='text-muted-foreground hover:text-foreground transition-colors'
          >
            {theme === 'dark' ? (
              <Sun className='w-5 h-5' />
            ) : (
              <Moon className='w-5 h-5' />
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='text-foreground'
          >
            {isMobileMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='lg:hidden fixed inset-0 top-16 bg-background z-40 p-6'
          >
            <nav className='space-y-4'>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-2xl font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
