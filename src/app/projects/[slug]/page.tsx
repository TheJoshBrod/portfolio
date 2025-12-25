import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProjects, getProjectBySlug } from '@/lib/projects';
import StarsBackground from '@/components/StarsBackground';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#111] text-gray-300 font-mono relative overflow-hidden">
      <StarsBackground />
      <div className="relative z-10 container mx-auto px-8 md:px-16 py-12 max-w-5xl">
        <nav className="mb-16 flex gap-6 text-sm text-gray-500 font-mono">
          <Link href="/projects" className="hover:text-white transition-colors">
            [all projects]
          </Link>
          <Link href="/" className="hover:text-white transition-colors">
            [home]
          </Link>
        </nav>
        
        <header className="mb-12 border-b border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{project.title}</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <p className="text-gray-500 text-sm">{project.date}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="inline-block font-mono text-xs text-gray-500 border border-gray-800 px-2 py-0.5 rounded-sm hover:border-gray-500 hover:text-gray-300 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </header>

        <article className="prose prose-invert max-w-none mb-16">
          <div className="leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: project.content }} />
        </article>

        {(project.github || project.paper) && (
          <div className="flex flex-wrap gap-6 mb-16">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-gray-500 hover:text-white border-b border-gray-800 hover:border-white pb-1 transition-all">
                [view source]
              </a>
            )}
            {project.paper && (
              <a href={project.paper} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-gray-500 hover:text-white border-b border-gray-800 hover:border-white pb-1 transition-all">
                [view paper]
              </a>
            )}
          </div>
        )}

        <footer className="mt-24 pt-8 border-t border-gray-800 text-xs text-gray-600">
          Built with Next.js & Tailwind.
          <br />
          ASCII art generated using{" "}
          <a
            href="https://www.asciiart.eu/ascii-night-sky-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-800"
          >
            asciiart.eu
          </a>.
          <br />
          &copy; {new Date().getFullYear()} Josh Brodsky.
        </footer>
      </div>
    </div>
  );
}
