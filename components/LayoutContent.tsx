'use client';

import { useColors } from '@/hooks/useColors';

interface LayoutContentProps {
  children: React.ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const colors = useColors();

  return (
    <div 
      style={{ 
        backgroundColor: colors.background, 
        color: colors.textPrimary,
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  );
}