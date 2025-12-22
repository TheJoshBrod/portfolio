import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '../general/SectionHeader'
import Carousel from '@/components/portfolio/Portfolio';

export default function ExperienceSection() {
  
  const[selectedExperience, setSelectedExperience] = useState(1)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });


  return (
      <div id="portfolio" className="flex flex-col items-center">
        
        <SectionHeader key="experience" title="Portfolio" subtitle="Some projects in my"/>
        <Carousel></Carousel>
        
      </div>
  );
}


