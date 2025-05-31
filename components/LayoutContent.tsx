'use client';

import { useColors } from '@/hooks/useColors';
import FloatingParticles from './FloatingParticles';

interface LayoutContentProps {
  children: React.ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const colors = useColors();

  return (
    <div 
      className="relative"
      style={{ 
        backgroundColor: colors.background, 
        color: colors.textPrimary,
        minHeight: '100vh'
      }}
    >
      <FloatingParticles />
      {children}
    </div>
  );
}