import { useTheme } from '@/components/ThemeProvider';
import { colors } from '@/lib/colors';

export function useColors() {
  const { theme } = useTheme();
  
  if (theme === 'system') {
    if (typeof window === 'undefined') {
      return colors.dark;
    }
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return colors[isDark ? 'dark' : 'light'];
  }
  
  return colors[theme];
}