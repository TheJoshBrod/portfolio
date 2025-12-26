import Link from 'next/link';
import { getAllProjects } from '../../lib/projects';
import StarsBackground from '../../components/StarsBackground';
import { Github, FileText, ArrowRight, Home } from 'lucide-react';

export default function ProjectsPage() {
    const projects = getAllProjects();

    return (
        <div className="min-h-screen w-full relative bg-[#111] overflow-hidden">
            <StarsBackground />

            <div className="flex flex-col items-center w-full max-w-5xl mx-auto px-6 md:px-12 pt-24 min-h-screen relative z-10">
                <div className="w-full flex justify-between items-center mb-16 border-b border-gray-800 pb-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Projects</h1>
                    <Link href="/" className="group flex items-center gap-1 text-sm font-mono text-gray-500 hover:text-white transition-colors">
                        <Home size={14} />
                        [home]
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full pb-24">
                    {projects.map((project) => (
                        <div
                            key={project.slug}
                            className="group relative flex flex-col h-full p-8 border border-gray-800 rounded-sm hover:border-gray-500 transition-all duration-300 bg-gray-900/10 hover:bg-gray-800/20"
                        >
                            <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-0" aria-label={`View ${project.title}`} />

                            <div className="relative z-10 flex flex-col h-full pointer-events-none">
                                <div className="flex justify-between items-start mb-6">
                                    <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                                        {project.title}
                                    </h2>
                                    <span className="text-[10px] text-gray-500 font-mono border border-gray-800 px-2 py-0.5 rounded-sm uppercase tracking-widest whitespace-nowrap">
                                        {project.date}
                                    </span>
                                </div>

                                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                                    {project.description || project.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...'}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.technologies.slice(0, 5).map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-[10px] text-gray-500 font-mono px-2 py-0.5 border border-gray-800 rounded-sm uppercase tracking-widest bg-black/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-4 mt-auto pointer-events-auto">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative z-20 flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors group/link"
                                        >
                                            <Github size={16} className="group-hover/link:scale-110 transition-transform" />
                                            Source
                                        </a>
                                    )}
                                    {project.paper && (
                                        <a
                                            href={project.paper}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative z-20 flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors group/link"
                                        >
                                            <FileText size={16} className="group-hover/link:scale-110 transition-transform" />
                                            Paper
                                        </a>
                                    )}
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="relative z-20 flex items-center gap-1 text-xs font-semibold text-blue-400/80 hover:text-blue-400 transition-colors ml-auto"
                                    >
                                        Case Study <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <footer className="mt-auto py-12 border-t border-gray-800 text-xs text-gray-600 w-full flex flex-col md:flex-row justify-between gap-4">
                    <div>
                        Built with Next.js & Tailwind.
                        <br />
                        ASCII art via{" "}
                        <a
                            href="https://www.asciiart.eu/ascii-night-sky-generator"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-gray-300"
                        >
                            asciiart.eu
                        </a>.
                    </div>
                    <div className="md:text-right">
                        &copy; {new Date().getFullYear()} Josh Brodsky.
                    </div>
                </footer>
            </div>
        </div>
    );
}
