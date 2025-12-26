import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProjects, getProjectBySlug } from '@/lib/projects';
import StarsBackground from '@/components/StarsBackground';
import { Github, FileText, ArrowLeft, Home, Calendar } from 'lucide-react';

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
        <div className="min-h-screen bg-[#111] text-gray-300 font-mono relative overflow-hidden selection:bg-white selection:text-black">
            <StarsBackground />

            <div className="relative z-10 container mx-auto px-6 md:px-12 py-12 max-w-5xl">
                <nav className="mb-12 flex gap-6 text-xs text-gray-500 font-mono uppercase tracking-widest">
                    <Link href="/projects" className="group flex items-center gap-1 hover:text-white transition-colors">
                        <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                        [all projects]
                    </Link>
                    <Link href="/" className="group flex items-center gap-1 hover:text-white transition-colors">
                        <Home size={12} />
                        [home]
                    </Link>
                </nav>

                <header className="mb-20 pb-10 border-b border-gray-800/50">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight uppercase">
                            {project.title}
                        </h1>

                        <div className="flex flex-col gap-8">
                            <div className="flex flex-wrap items-center gap-8">
                                <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest border border-gray-800 px-3 py-1 bg-gray-900/50">
                                    <Calendar size={14} className="text-primary" />
                                    <span>{project.date}</span>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-[#60a5fa] border border-[#60a5fa]/30 px-3 py-1 rounded-sm bg-[#60a5fa]/5"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {(project.github || project.paper) && (
                              <div className="flex flex-wrap gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-6 py-3 border border-primary bg-primary text-[#111] hover:bg-transparent hover:text-primary hover:shadow-inner rounded-sm transition-all duration-300 text-xs font-bold uppercase tracking-widest group"
                                    >
                                        <Github size={18} className="transition-transform duration-300 group-hover:scale-110" />
                                        <span>view source code</span>
                                    </a>
                                )}
                                
                                {project.paper && (
                                    <a
                                        href={project.paper}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-6 py-3 border border-gray-700 bg-gray-800/30 text-gray-300 hover:border-primary hover:text-primary hover:bg-gray-800/60 rounded-sm transition-all duration-300 text-xs font-bold uppercase tracking-widest group"
                                    >
                                        <FileText size={18} className="transition-transform duration-300 group-hover:scale-110" />
                                        <span>read paper</span>
                                    </a>
                                )}
                              </div>
                            )}
                        </div>
                    </div>
                </header>

                <main className="max-w-4xl mx-auto">
                    <article className="prose prose-invert prose-headings:text-white prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-3xl prose-h2:text-blue-400 prose-h2:uppercase prose-h2:mb-8 prose-h3:text-2xl prose-p:text-gray-400 prose-p:leading-relaxed prose-p:text-base prose-strong:text-white prose-blockquote:border-blue-500 prose-blockquote:bg-blue-500/5 prose-blockquote:rounded-r-sm prose-li:text-gray-400">
                        <div className="space-y-16" dangerouslySetInnerHTML={{ __html: project.content }} />
                    </article>
                </main>

                <footer className="mt-32 pt-12 border-t border-gray-800 text-[10px] text-gray-600 font-mono uppercase tracking-[0.2em] flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        Built with Next.js & Tailwind.
                        <br />
                        ASCII art via{" "}
                        <a
                            href="https://www.asciiart.eu/ascii-night-sky-generator"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-gray-400 transition-colors"
                        >
                            asciiart.eu
                        </a>.
                    </div>
                    <div>
                        &copy; {new Date().getFullYear()} Josh Brodsky. All Rights Reserved.
                    </div>
                </footer>
            </div>
        </div>
    );
}
