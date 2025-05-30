import { getContent } from '@/lib/content';
import Hero from '@/components/Hero';
import Bio from '@/components/Bio';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';

// Force dynamic rendering to pick up content changes
export const dynamic = 'force-dynamic';

export default function Home() {
  const content = getContent();

  return (
    <main>
      <Hero 
        name={content.personal.name}
        bio={content.personal.bio}
        location={content.personal.location}
        year={content.personal.year}
        university={content.personal.university}
        major={content.personal.major}
        minor={content.personal.minor}
      />
      <Bio 
        bio={content.personal.bio}
      />
      <Projects projects={content.projects} />
      <Blog posts={content.blog} />
      <Contact contact={content.contact} />
    </main>
  );
}
