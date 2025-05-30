'use client';

import { useColors } from '@/hooks/useColors';

interface BioProps {
  bio: string;
  year: string;
}

export default function Bio({ bio, year }: BioProps) {
  const colors = useColors();

  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8 md:hidden"
      style={{ backgroundColor: colors.backgroundSecondary }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">

        </div>
        
        <p 
          className="text-lg leading-relaxed font-light"
          style={{ color: colors.textSecondary }}
        >
          {bio}
        </p>

        <div className="mt-8">
          <a 
            href="#projects" 
            className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-full transition-colors duration-200"
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