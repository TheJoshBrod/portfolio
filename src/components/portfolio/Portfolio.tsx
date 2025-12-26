'use client';

import Link from 'next/link';

// Updated data layout for list view
const projects = [
  {
    id: 1,
    year: '2025',
    title: 'CGinS: LLM CUDA Compiler',
    summary: 'Agentic Iterative Kernel Refinement',
    url: '/projects/CUDA-Ghost-in-the-Shell'
  },
  {
    id: 2,
    year: '2025',
    title: 'Triton -> WGSL: Transpiler',
    summary: 'High-performance WebGPU',
    url: '/projects/WGSL-Transpiler'
  },
  {
    id: 3,
    year: '2025',
    title: 'Spark Electric Racing: Live Telemetry',
    summary: 'Remote Motorcycle Diagnostics',
    url: '#'
  }
];

export default function Portfolio() {
  return (
    <div id="portfolio" className="max-w-5xl mx-auto p-8 md:p-16 relative z-10">
      <h2 className="text-sm font-mono text-gray-500 mb-8">[selected works]</h2>

      <div className="flex flex-col">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.url}
            className="group flex flex-col md:flex-row md:items-baseline justify-between py-4 border-b border-gray-800 hover:border-gray-200 transition-colors"
          >
            <div className="flex items-baseline gap-4 md:gap-12">
              <span className="font-mono text-xs text-gray-600 group-hover:text-gray-400 transition-colors w-12">{project.year}</span>
              <span className="text-lg md:text-xl text-gray-300 group-hover:text-white transition-colors font-medium">
                {project.title}
              </span>
            </div>

            <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors mt-2 md:mt-0 font-mono">
              {project.summary}
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center md:text-left">
        <Link href="/projects" className="font-mono text-xs text-gray-500 hover:text-white border-b border-gray-800 hover:border-white pb-1 transition-all">
          [view all projects]
        </Link>
      </div>
    </div>
  );
}