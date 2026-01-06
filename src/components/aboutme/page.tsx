import Education from "./Education";
import AboutMe from "./AboutMe"
import { SkillIcon } from "../skilltag";

export default function AboutMeSection() {

  const aiTools = [
    "PyTorch", "Langchain", "Llamaindex", "Ollama"
  ];

  const languages = [
    "Python", "C++", "CUDA", "TypeScript", "C", "Bash", "SQL"
  ];

  const frameworksAndLibraries = [
    "NextJS/React", "jQuery", "Vue", "Bootstrap", "QT", "Flask",
  ];

  const technologiesAndTools = [
    "Jenkins", "AWS", "Docker", "Git", "Regex"
  ];

  return (
    <div id="aboutme" className="flex flex-col items-center w-full max-w-5xl mx-auto px-8 md:px-16">

      <AboutMe />

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 w-full items-start mt-16">
        {/* Left Col: Education */}
        <div className="flex-1 w-full flex flex-col gap-16">
          <Education />
        </div>

        {/* Right Col: Skills */}
        <div className="w-full lg:w-1/3 flex flex-col gap-10 mt-8 lg:mt-0">

          <div>
            <div className="mb-4 font-mono text-gray-500 text-sm border-b border-gray-800 pb-2">
              [ai tools]
            </div>
            <div className="flex flex-wrap gap-y-2">
              {aiTools.map(l => <SkillIcon key={l} name={l} />)}
            </div>
          </div>

          <div>
            <div className="mb-4 font-mono text-gray-500 text-sm border-b border-gray-800 pb-2">
              [languages]
            </div>
            <div className="flex flex-wrap gap-y-2">
              {languages.map(l => <SkillIcon key={l} name={l} />)}
            </div>
          </div>

          <div>
            <div className="mb-4 font-mono text-gray-500 text-sm border-b border-gray-800 pb-2">
              [frameworks]
            </div>
            <div className="flex flex-wrap gap-y-2">
              {frameworksAndLibraries.map(l => <SkillIcon key={l} name={l} />)}
            </div>
          </div>

          <div>
            <div className="mb-4 font-mono text-gray-500 text-sm border-b border-gray-800 pb-2">
              [technologies]
            </div>
            <div className="flex flex-wrap gap-y-2">
              {technologiesAndTools.map(l => <SkillIcon key={l} name={l} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


