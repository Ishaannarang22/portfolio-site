import { useTheme } from '@/components/ThemeProvider';
import { colors } from '@/lib/colors';

export function useColors() {
  const { theme } = useTheme();
  return colors[theme];
}