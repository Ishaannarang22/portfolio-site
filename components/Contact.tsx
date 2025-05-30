'use client';

import { useColors } from '@/hooks/useColors';

interface Contact {
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
}

interface ContactProps {
  contact: Contact;
}

export default function Contact({ contact }: ContactProps) {
  const colors = useColors();
  
  return (
    <section 
      id="contact" 
      className="min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
      style={{ backgroundColor: colors.backgroundSecondary }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <h2 
            className="text-5xl sm:text-6xl font-bold mb-8"
            style={{ color: colors.textPrimary }}
          >
            Get In Touch
          </h2>
          
          <p 
            className="text-xl sm:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            I&apos;m always interested in new opportunities, collaborations, and conversations. 
            Whether you want to discuss AI, share project ideas, or just grab a coffee, feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col items-center gap-12">
          <a 
            href={`mailto:${contact.email}`}
            className="inline-flex items-center px-12 py-4 font-semibold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            style={{
              backgroundColor: colors.accent,
              color: '#ffffff'
            }}
          >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Email
          </a>

          <div 
            className="font-medium text-lg"
            style={{ color: colors.textTertiary }}
          >
            or connect with me on
          </div>

          <div className="flex items-center gap-8">
            <a 
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: colors.cardBackground,
                borderColor: colors.cardBorder,
                border: `1px solid ${colors.cardBorder}`,
                color: colors.textSecondary
              }}
              aria-label="LinkedIn"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>

            <a 
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: colors.cardBackground,
                borderColor: colors.cardBorder,
                border: `1px solid ${colors.cardBorder}`,
                color: colors.textSecondary
              }}
              aria-label="GitHub"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">GitHub</span>
            </a>

            <a 
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: colors.cardBackground,
                borderColor: colors.cardBorder,
                border: `1px solid ${colors.cardBorder}`,
                color: colors.textSecondary
              }}
              aria-label="Instagram"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C7.284 0 6.944.012 5.877.06 4.814.107 4.086.277 3.45.525a4.902 4.902 0 00-1.772 1.153A4.902 4.902 0 00.525 3.45C.277 4.086.107 4.814.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.047 1.063.217 1.791.465 2.427a4.902 4.902 0 001.153 1.772A4.902 4.902 0 003.45 19.475c.636.248 1.364.418 2.427.465C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c1.063-.047 1.791-.217 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.248-.636.418-1.364.465-2.427C19.988 13.056 20 12.716 20 10s-.012-3.056-.06-4.123c-.047-1.063-.217-1.791-.465-2.427a4.902 4.902 0 00-1.153-1.772A4.902 4.902 0 0016.55.525C15.914.277 15.186.107 14.123.06 13.056.012 12.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.041.059.976.045 1.505.207 1.858.344.467.182.8.398 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.858.048 1.054.058 1.37.058 4.041s-.01 2.987-.058 4.041c-.045.976-.207 1.505-.344 1.858a3.097 3.097 0 01-.748 1.15c-.35.35-.683.566-1.15.748-.353.137-.882.3-1.858.344-1.054.048-1.37.058-4.041.058s-2.987-.01-4.041-.058c-.976-.045-1.505-.207-1.858-.344a3.097 3.097 0 01-1.15-.748 3.097 3.097 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.858C1.812 12.987 1.802 12.67 1.802 10s.01-2.987.058-4.041c.045-.976.207-1.505.344-1.858.182-.467.398-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.858-.344C7.013 1.812 7.33 1.802 10 1.802zM10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}