import experiences from '../../data/experiences.json';
import Experience from './experience';

export default function ExperienceSection() {
  
  return (
      <div id="experience" className="flex flex-col items-center pt-10">
        <div className='w-250'>
          <div className="text-center m-8 bg-[#37345d] p-10 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-[#7d7fa6]">Experience</h1>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center">
            {experiences.map((experience) => (
                <Experience key={experience.id} {...experience} />
            ))}
        </div>
      </div>
  );
}


