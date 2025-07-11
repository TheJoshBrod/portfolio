import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import experiences from '../../data/experiences.json';
import ExperienceIntro from './ExperienceIntro';
import ExperienceSummary from './ExperienceSummary';
import SectionHeader from '../general/SectionHeader'

export default function ExperienceSection() {
  
  const[selectedExperience, setSelectedExperience] = useState(1)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });


  return (
      <div id="experience" className="flex flex-col items-center">
        
        <SectionHeader key="experience" title="Work Experience" subtitle="My journey so far" />
        
        <div className="flex flex-row">
          <div ref={ref}>
            <motion.div className='w-100' initial={{ opacity: 0, x: -50, y: 0 }}
                                        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                                        transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}>
              {experiences.map((experience) => (
                    <ExperienceIntro key={experience.id} {...experience} setSelectedExperience={setSelectedExperience}/>
                ))}</motion.div>
          </div>
          <div className="flex flex-col justify-center w-220 ml-10 mt-5" ref={ref}>
            <motion.div initial={{ opacity: 0, x: 50 }}
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


