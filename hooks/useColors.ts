import { useTheme } from '@/components/ThemeProvider';
import { colors } from '@/lib/colors';
import { useEffect, useState } from 'react';

export function useColors() {
  const { theme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');
  
  useEffect(() => {
    if (theme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setResolvedTheme(isDark ? 'dark' : 'light');
    } else {
      setResolvedTheme(theme);
    }
  }, [theme]);
  
  if (theme === 'system') {
    return colors[resolvedTheme];
  }
  
  return colors[theme];
}