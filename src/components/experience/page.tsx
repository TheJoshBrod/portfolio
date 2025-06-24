import { useState } from 'react';
import experiences from '../../data/experiences.json';
import ExperienceIntro from './ExperienceIntro';
import ExperienceSummary from './ExperienceSummary';

export default function ExperienceSection() {
  
  const[selectedExperience, setSelectedExperience] = useState(1)



  return (
      <div id="experience" className="flex flex-col items-center pt-10">
        <div className='w-250'>
          <div className="text-center m-8 h-28 flex flex-col justify-center bg-[#37345d] p-10 rounded-lg shadow-lg">
            <p className="text-xl font-bold text-[#7d7fa6]">My Professional Journey</p>
            <h1 className="text-4xl font-bold text-[#7d7fa6]">Work Experience</h1>
          </div>
        </div>
        
        <div className="flex flex-row">
          <div className='w-100'>
            {experiences.map((experience) => (
                  <ExperienceIntro key={experience.id} {...experience} setSelectedExperience={setSelectedExperience}/>
              ))}</div>
          <div className="flex flex-col justify-center">
              {experiences.map((experience) => (
                  <ExperienceSummary key={experience.id} {...experience} selectedExperience={selectedExperience} />
              ))}
          </div>
        </div>
      </div>
  );
}


