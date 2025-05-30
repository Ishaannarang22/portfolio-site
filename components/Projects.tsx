'use client';

import Link from 'next/link';
import { useColors } from '@/hooks/useColors';

interface Project {
  id: string;
  name: string;
  description: string;
  githubLink: string;
  devpostLink?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const colors = useColors();
  
  return (
    <section 
      id="projects" 
      className="py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
      style={{ backgroundColor: colors.backgroundSecondary }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl sm:text-4xl font-semibold text-center mb-16"
          style={{ color: colors.textPrimary }}
        >
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: colors.cardBackground,
                borderColor: colors.cardBorder,
                border: `1px solid ${colors.cardBorder}`
              }}
            >
              <h3 
                className="text-xl font-semibold mb-3"
                style={{ color: colors.textPrimary }}
              >
                {project.name}
              </h3>
              
              <p 
                className="mb-6 leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                {project.description}
              </p>

              <div className="flex flex-col gap-3">
                <Link 
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-md"
                  style={{
                    backgroundColor: colors.accent,
                    color: '#ffffff'
                  }}
                >
                  Learn More
                </Link>
                
                <div className="flex gap-3">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105"
                    style={{
                      color: colors.textPrimary,
                      borderColor: colors.border,
                      border: `1px solid ${colors.border}`
                    }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>

                  {project.devpostLink && (
                    <a 
                      href={project.devpostLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105"
                      style={{
                        color: colors.accent,
                        borderColor: colors.accent,
                        border: `1px solid ${colors.accent}`
                      }}
                    >
                      Devpost
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}