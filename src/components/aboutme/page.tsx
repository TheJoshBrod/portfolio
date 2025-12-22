import CodeBubble from "../CodeBubble";
import SectionHeader from '../general/SectionHeader'
import Education from "./Education";
import AboutMe from "./AboutMe"
import { SkillIcon } from "../skilltag";

export default function AboutMeSection() {
  const languages = [ 
    "Python", "TypeScript", "C++", "Java", "C", "JavaScript", "C#", "Bash", "SQL" 
  ];

  const frameworksAndLibraries = [ 
    "Pandas", "NextJS", "React", "jQuery", "Vue", "Bootstrap", "QT", "Flask",  
  ];

  const technologiesAndTools = [ 
    "VectorRAG", "GraphRAG", "MCP", "AWS", "Docker", "Git" 
  ];



  return (
    <>      
      {/* Title Card */}
      <div id="aboutme" className="flex flex-col items-center">
        <SectionHeader key="1" title="About Me" subtitle="A little bit"/>
        
        {/* Content */}
        <div className="flex flex-row">
          <AboutMe/>
          <Education/>
        </div>

        <div className="mb-10 text-xl font-bold text-white flex justify-center items-center mt-10 w-100 h-20 rounded-2xl bg-[#565190]">
            Skills
        </div>
        <div className="bg-[#c4c1ff] border-[#37345d] border-6 p-6 rounded-lg shadow-lg w-230 font-normal">
          <p>Languages:</p>
          <div className="flex flex-row flex-wrap gap-2 mt-2">
            {languages.map((language) => (
              <SkillIcon key={language} name={language} />
            ))}
          </div>
          <p>Frameworks and Libraries:</p>
          <div className="flex flex-row flex-wrap gap-2 mt-2">
            {frameworksAndLibraries.map((framework) => (
              <SkillIcon key={framework} name={framework} />
            ))}
          </div>
          <p>Technologies/Concepts</p>
          <div className="flex flex-row flex-wrap gap-2 mt-2">
            {technologiesAndTools.map((tech) => (
              <SkillIcon key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


