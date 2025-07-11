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
            className='w-350 mt-20'
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
            <div className="text-center m-8 h-28 flex flex-col justify-center bg-[#37345d] p-10 rounded-lg shadow-lg">
                {subtitle && <p className="text-xl font-bold text-[#c5bfff]">{subtitle}</p>}
                <h1 className="text-4xl font-bold text-[#c5bfff]">{title}</h1>
            </div>
        </motion.div>
    );
};

export default SectionHeader;