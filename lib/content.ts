import fs from 'fs';
import path from 'path';

export interface PersonalInfo {
  name: string;
  bio: string;
  location: string;
  year: string;
  university: string;
  major: string;
  minor: string;
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  githubLink: string;
  devpostLink?: string;
  imageUrl?: string;
  detailsText: string;
}

export interface BlogPost {
  title: string;
  url: string;
}

export interface Content {
  personal: PersonalInfo;
  contact: Contact;
  projects: Project[];
  blog: BlogPost[];
}

export function getContent(): Content {
  const filePath = path.join(process.cwd(), 'data', 'content.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getProject(id: string): Project | null {
  const content = getContent();
  return content.projects.find(project => project.id === id) || null;
}