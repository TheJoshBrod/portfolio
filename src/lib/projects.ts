import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const projectsDirectory = path.join(process.cwd(), 'src/data/projects');

export interface ProjectMetadata {
  title: string;
  slug: string;
  date: string;
  description?: string;
  technologies: string[];
  github?: string;
  paper?: string;
}

export interface Project extends ProjectMetadata {
  content: string;
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  
  const projects = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        ...(data as ProjectMetadata),
        content: marked(content) as string,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getAllProjects();
  return projects.find(project => project.slug === slug);
}
