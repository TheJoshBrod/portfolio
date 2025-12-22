// components/general/SectionHeader.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            className='w-full max-w-4xl mx-auto mt-20 px-4'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="relative text-center py-10 px-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl overflow-hidden group hover:bg-white/10 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                {subtitle && (
                    <p className="relative text-lg md:text-xl font-medium text-blue-300/90 tracking-wide mb-2 uppercase">
                        {subtitle}
                    </p>
                )}
                <h1 className="relative text-4xl md:text-5xl font-extrabold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-sm">
                    {title}
                </h1>
            </div>
        </motion.div>
    );
};

export default SectionHeader;