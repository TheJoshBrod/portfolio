import { useState, useRef } from 'react';
import experiences from '../../data/experiences.json';
import ExperienceIntro from './ExperienceIntro';
import ExperienceSummary from './ExperienceSummary';

export default function ExperienceSection() {

  const [selectedExperience, setSelectedExperience] = useState(experiences.length-1);
  const ref = useRef(null);

  return (
    <div id="experience" className="flex flex-col items-center w-full max-w-5xl mx-auto px-8 md:px-16 pt-24">

      <div className="w-full mb-12 font-mono text-gray-500 text-sm">
        [work experience]
      </div>

      <div className="flex flex-col md:flex-row w-full gap-12 md:gap-24 items-start" ref={ref}>
        {/* Left Column: Organization List */}
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          {experiences.map((experience) => (
            <ExperienceIntro key={experience.id} {...experience} setSelectedExperience={setSelectedExperience} />
          ))}
        </div>

        {/* Right Column: Details */}
        <div className="w-full md:w-2/3 min-h-[400px]">
          {experiences.map((experience) => (
            <ExperienceSummary key={experience.id} {...experience} selectedExperience={selectedExperience} />
          ))}
        </div>
      </div>
    </div>
  );
}


