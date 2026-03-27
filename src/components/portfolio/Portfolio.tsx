'use client';

import Link from 'next/link';
import type { ProjectMetadata } from '@/lib/projects';

// Projects without markdown files yet — shown as coming soon
const comingSoonProjects = [
  {
    slug: 'WGSL-Transpiler',
    title: 'Triton -> WGSL: Transpiler',
    summary: 'High-performance WebGPU',
    date: '2025',
  },
  {
    slug: 'spark-telemetry',
    title: 'Spark Electric Racing: Live Telemetry',
    summary: 'Remote Motorcycle Diagnostics',
    date: '2025',
  },
];

interface Props {
  projects: ProjectMetadata[];
}

export default function Portfolio({ projects }: Props) {
  return (
    <div id="portfolio" className="max-w-5xl mx-auto px-8 md:px-16 relative z-10">
      <h2 className="text-sm font-mono text-gray-500 mb-8">[selected works]</h2>

      <div className="flex flex-col w-4xl">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex items-baseline justify-between gap-4 py-4 border-b border-gray-800 hover:border-gray-200 transition-colors"
          >
            <div className="flex items-baseline gap-4 md:gap-8 min-w-0">
              <span className="font-mono text-xs text-gray-600 group-hover:text-gray-400 transition-colors shrink-0">
                {project.date.match(/\d{4}/)?.[0] ?? project.date}
              </span>
              <span className="text-base md:text-lg text-gray-300 group-hover:text-white transition-colors font-medium truncate">
                {project.title}
              </span>
            </div>
            <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors font-mono shrink-0 hidden md:inline">
              {project.description ?? ''}
            </span>
          </Link>
        ))}

        {comingSoonProjects.map((project) => (
          <div
            key={project.slug}
            className="flex items-baseline justify-between gap-4 py-4 border-b border-gray-800 opacity-40 cursor-not-allowed"
          >
            <div className="flex items-baseline gap-4 md:gap-8 min-w-0">
              <span className="font-mono text-xs text-gray-600 shrink-0">{project.date}</span>
              <span className="text-base md:text-lg text-gray-300 font-medium truncate">{project.title}</span>
            </div>
            <span className="font-mono text-xs text-gray-600 shrink-0">[coming soon]</span>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center md:text-left">
        <Link
          href="/projects"
          className="font-mono text-xs text-gray-500 hover:text-white border-b border-gray-800 hover:border-white pb-1 transition-all"
        >
          [view all projects]
        </Link>
      </div>
    </div>
  );
}
