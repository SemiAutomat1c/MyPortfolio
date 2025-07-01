'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export function ThemeScript() {
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('dark');
    }
  }, [setTheme]);

  return null;
}

export default ThemeScript; 