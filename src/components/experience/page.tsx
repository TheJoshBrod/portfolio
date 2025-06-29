import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import experiences from '../../data/experiences.json';
import ExperienceIntro from './ExperienceIntro';
import ExperienceSummary from './ExperienceSummary';

export default function ExperienceSection() {
  
  const[selectedExperience, setSelectedExperience] = useState(1)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });


  return (
      <div id="experience" className="flex flex-col items-center">
        <motion.div className='w-250 mt-20' initial={{ opacity: 0, y: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                                        transition={{duration: 0.2, ease: 'easeInOut' }}>
          <div className="text-center m-8 h-28 flex flex-col justify-center bg-[#37345d] p-10 rounded-lg shadow-lg">
            <p className="text-xl font-bold text-[#c5bfff]">My Professional Journey</p>
            <h1 className="text-4xl font-bold text-[#c5bfff]">Work Experience</h1>
          </div>
        </motion.div>
        
        <div className="flex flex-row">
          <div ref={ref}>
            <motion.div className='w-100' initial={{ opacity: 0, x: -100, y: 0 }}
                                        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                                        transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}>
              {experiences.map((experience) => (
                    <ExperienceIntro key={experience.id} {...experience} setSelectedExperience={setSelectedExperience}/>
                ))}</motion.div>
          </div>
          <div className="flex flex-col justify-center" ref={ref}>
            <motion.div initial={{ opacity: 0, x: 200 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{delay: 0.3, duration: 1, ease: 'easeInOut' }}>
              {experiences.map((experience) => (
                  <ExperienceSummary key={experience.id} {...experience} selectedExperience={selectedExperience} />
              ))}
              </motion.div>
          </div>
        </div>
      </div>
  );
}


