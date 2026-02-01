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
      <aside className='hidden lg:flex fixed left-0 top-0 h-screen w-72 flex-col justify-between p-10 z-50 border-r border-border/20'>
        <div>
          <Link href='/' className='block mb-1'>
            <h1 className='text-2xl font-black tracking-tight uppercase'>
              {PROFILE.name}
            </h1>
          </Link>
          <p className='text-xs text-muted-foreground font-medium uppercase tracking-widest mb-16'>
            {PROFILE.title}
          </p>

          <nav className='space-y-2'>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  pathname === item.href
                    ? 'text-foreground translate-x-2'
                    : 'text-muted-foreground hover:text-foreground hover:translate-x-2'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className='space-y-6'>
          <button
            onClick={toggleTheme}
            className='flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors'
          >
            {theme === 'dark' ? (
              <>
                <Sun className='w-4 h-4' />
                Light Mode
              </>
            ) : (
              <>
                <Moon className='w-4 h-4' />
                Dark Mode
              </>
            )}
          </button>
          <p className='text-xs text-muted-foreground font-medium'>
            © 2024 {PROFILE.name}
          </p>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className='lg:hidden fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-background/90 backdrop-blur-md z-50 border-b border-border/20'>
        <Link href='/' className='text-lg font-black uppercase tracking-tight'>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='lg:hidden fixed inset-0 top-16 bg-background z-40 flex flex-col justify-center px-8'
          >
            <nav className='space-y-6'>
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-4xl font-black uppercase tracking-tight transition-colors ${
                      pathname === item.href
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
