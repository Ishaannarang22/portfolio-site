'use client';

import FloatingParticles from './FloatingParticles';
import { useColors } from '@/hooks/useColors';

interface HeroProps {
  name: string;
  bio: string;
  location: string;
  year: string;
  university: string;
  major: string;
  minor: string;
}

export default function Hero({ name, bio, location, year, university, major, minor }: HeroProps) {
  const colors = useColors();

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <FloatingParticles />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 
          className="text-4xl sm:text-6xl lg:text-7xl font-light mb-6"
          style={{ color: colors.textPrimary }}
        >
          {name}
        </h1>
        
        <div className="space-y-4 mb-8">
          <p 
            className="text-lg sm:text-xl font-light"
            style={{ color: colors.textSecondary }}
          >
            {year} • {major} {minor && `• ${minor} Minor`}
          </p>
          <p 
            className="text-lg sm:text-xl font-light"
            style={{ color: colors.textSecondary }}
          >
            {university}
          </p>
          <p 
            className="text-base sm:text-lg font-light"
            style={{ color: colors.textTertiary }}
          >
            {location}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p 
            className="text-lg sm:text-xl leading-relaxed font-light"
            style={{ color: colors.textSecondary }}
          >
            {bio}
          </p>
        </div>

        <div className="mt-12">
          <a 
            href="#projects" 
            className="inline-flex items-center px-8 py-3 text-base font-medium rounded-full transition-colors duration-200"
            style={{ 
              borderColor: colors.border,
              color: colors.textPrimary,
              backgroundColor: colors.cardBackground,
              border: `1px solid ${colors.border}`
            }}
          >
            View My Work
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}