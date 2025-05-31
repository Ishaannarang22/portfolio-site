'use client';


import { useColors } from '@/hooks/useColors';

interface BlogPost {
  title: string;
  url: string;
}

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  const colors = useColors();
  const activePosts = posts.filter(post => post.title && post.url);

  if (activePosts.length === 0) {
    return (
      <section 
        id="blog" 
        className="min-h-screen flex items-center justify-center py-20 px-8 sm:px-6 lg:px-8 transition-colors duration-300"
        style={{ backgroundColor: colors.background }}
      >
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl sm:text-4xl font-semibold mb-8"
            style={{ color: colors.textPrimary }}
          >
            Blog
          </h2>
          <p 
            className="text-lg"
            style={{ color: colors.textSecondary }}
          >
            Blog posts coming soon! Stay tuned for insights on AI, technology, and more.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="blog" 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-3xl sm:text-4xl font-light text-center mb-16"
          style={{ color: colors.textPrimary }}
        >
          Blog
        </h2>

        <div className="space-y-6">
          {activePosts.map((post, index) => (
            <article 
              key={index}
              className="backdrop-blur-sm rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-200"
              style={{
                backgroundColor: colors.cardBackground,
                borderColor: colors.cardBorder,
                border: `1px solid ${colors.cardBorder}`
              }}
            >
              <h3 
                className="text-xl font-medium mb-3"
                style={{ color: colors.textPrimary }}
              >
                {post.title}
              </h3>
              
              <a 
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-medium"
                style={{ color: colors.accent }}
              >
                Read more
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}