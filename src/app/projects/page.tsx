import Link from 'next/link';
import { getAllProjects } from '../../lib/projects';
import StarsBackground from '../../components/StarsBackground';

export default function ProjectsPage() {
    const projects = getAllProjects();

    return (
        <div className="min-h-screen w-full relative bg-[#111] overflow-hidden">
            {/* Background */}
            <StarsBackground />

            <div className="flex flex-col items-center w-full max-w-5xl mx-auto px-8 md:px-16 pt-24 min-h-screen relative z-10">
                <div className="w-full flex justify-between items-center mb-12 border-b border-gray-800 pb-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white font-mono">Projects</h1>
                    <Link href="/" className="text-sm font-mono text-gray-500 hover:text-white transition-colors">
                        [home]
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full pb-24">
                    {projects.map((project) => (
                        <Link
                            href={`/projects/${project.slug}`}
                            key={project.slug}
                            className="group block p-6 border border-gray-800 rounded-sm hover:border-white transition-all duration-300 bg-[#111]/80 hover:bg-[#111]"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-xl font-bold text-white transition-colors font-mono">
                                    {project.title}
                                </h2>
                                <span className="text-xs text-gray-500 font-mono border border-gray-800 px-2 py-0.5 rounded-sm">
                                    {project.date}
                                </span>
                            </div>

                            <p className="text-gray-400 text-sm mb-6 line-clamp-3 font-mono leading-relaxed">
                                {project.description || project.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...'}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.slice(0, 5).map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs text-gray-500 font-mono px-2 py-0.5 border border-gray-800 rounded-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {project.technologies.length > 5 && (
                                    <span className="text-xs text-gray-600 px-2 py-1 font-mono">
                                        +{project.technologies.length - 5}
                                    </span>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
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
