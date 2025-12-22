'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Placeholder data
const projects = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Revolutionizing the way we interact with digital assets.',
    image: '/Block_M-Hex-blue.png',
    tags: ['React', 'Next.js', 'Tailwind']
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'Egestas diam in arcu cursus euismod quis. Fusce id velit ut tortor. Building scalable solutions for enterprise.',
    image: '/Block_M-Hex-blue.png',
    tags: ['TypeScript', 'Node.js', 'Cloud']
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'Aliquam ultrices sagittis orci a scelerisque purus semper. Innovative designs for modern web applications.',
    image: '/Block_M-Hex-blue.png',
    tags: ['UI/UX', 'Framer Motion', 'Design']
  }
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Calculate the visual position of a project index relative to the active index
  // 0: Center, 1: Right, -1 (or len-1): Left
  const getPosition = (index: number) => {
    const len = projects.length;
    // Calculate circular distance
    let diff = (index - activeIndex + len) % len;
    // If diff is 2 in a length of 3, it should be treated as -1 (Left)
    if (diff > len / 2) diff -= len;
    return diff;
  };

  const getVariant = (position: number) => {
    if (position === 0) return 'center';
    if (position === 1) return 'right';
    if (position === -1) return 'left';
    return 'hidden'; // For more than 3 items
  };

  const variants = {
    center: {
      x: 0,
      scale: 1,
      zIndex: 10,
      opacity: 1,
      filter: 'blur(0px)',
      rotateY: 0,
      transition: { duration: 0.5, type: 'spring' as const, stiffness: 300, damping: 30 }
    },
    left: {
      x: '-60%',
      scale: 0.8,
      zIndex: 5,
      opacity: 0.6,
      filter: 'blur(2px)',
      rotateY: 25,
      transition: { duration: 0.5, type: 'spring' as const, stiffness: 300, damping: 30 }
    },
    right: {
      x: '60%',
      scale: 0.8,
      zIndex: 5,
      opacity: 0.6,
      filter: 'blur(2px)',
      rotateY: -25,
      transition: { duration: 0.5, type: 'spring' as const, stiffness: 300, damping: 30 }
    },
    hidden: {
      x: 0,
      scale: 0,
      zIndex: 0,
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-6xl mx-auto py-20 px-4 overflow-hidden [perspective:1000px]">

      <div className="relative w-full h-[500px] flex items-center justify-center">
        {projects.map((project, index) => {
          const position = getPosition(index);
          const variant = getVariant(position);

          return (
            <motion.div
              key={project.id}
              initial={false}
              animate={variant}
              variants={variants}
              className="absolute w-full max-w-md bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden text-gray-800 dark:text-gray-100"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Image Section */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-2xl font-bold tracking-tight drop-shadow-md">{project.title}</h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-[10px] font-semibold bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-200 border border-blue-200 dark:border-blue-800">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end">
                  <button className="px-4 py-2 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-sm font-medium hover:opacity-90 transition-opacity">
                    View
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-8 mt-4 z-20">
        <button
          className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-105 transition-all text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          onClick={prevProject}
          aria-label="Previous project"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <button
          className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-105 transition-all text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          onClick={nextProject}
          aria-label="Next project"
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}