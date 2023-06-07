import { useState, useEffect, useMemo, useCallback } from 'react';

/**
 * @desc DarkMode Type
 * @type {'light' | 'dark'}
 * */
export type DarkModeType = 'light' | 'dark';

type ReturnType = {
  theme: DarkModeType;
  isDarkMode: boolean;
  setTheme: (theme: DarkModeType) => void;
  toggleTheme: () => void;
};

const useTheme = (): ReturnType => {
  const [theme, setTheme] = useState<DarkModeType>('light');
  const isDarkMode = useMemo(() => theme === 'dark', [theme]);

  const initTheme = () => {
    const preferDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initalTheme = (localStorage?.getItem('prefer-theme') ||
      (preferDarkMode ? 'dark' : 'light')) as DarkModeType;
    setTheme(initalTheme);
  };

  /** @desc Theme를 변경하는 Toggle Func */
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    initTheme();
  }, []);

  useEffect(() => {
    localStorage.setItem('prefer-theme', theme);
    document.body.dataset.theme = theme;
  }, [theme]);

  return { theme, isDarkMode, setTheme, toggleTheme };
};

export default useTheme;
