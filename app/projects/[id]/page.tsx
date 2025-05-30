import { getProject, getContent } from '@/lib/content';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const content = getContent();
  return content.projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/#projects"
          className="inline-flex items-center text-slate-600 hover:text-slate-800 mb-8 transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to projects
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-light text-slate-800 mb-4">
              {project.name}
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>

              {project.devpostLink && (
                <a 
                  href={project.devpostLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-blue-300 text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  View on Devpost
                </a>
              )}
            </div>
          </header>

          {project.imageUrl && (
            <div className="mb-8">
              <Image 
                src={project.imageUrl} 
                alt={project.name}
                width={800}
                height={400}
                className="w-full rounded-lg shadow-md"
              />
            </div>
          )}

          <div className="prose prose-slate max-w-none">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-8">
              <p className="text-slate-600 text-lg leading-relaxed">
                {project.detailsText}
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}