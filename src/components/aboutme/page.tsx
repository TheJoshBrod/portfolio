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
        <SectionHeader key="1" title="About Me" subtitle="A little bit" />

        {/* Content */}
        <div className="flex flex-col gap-24 w-full max-w-7xl px-4">
          <div className="flex flex-col xl:flex-row gap-16 items-stretch">
            <div className="flex-1 min-w-0">
              <AboutMe />
            </div>
            <div className="flex-1 min-w-0">
              <Education />
            </div>
          </div>

          <div className="flex flex-col items-center w-full">
            <div className="mb-12 text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 flex justify-center items-center py-5 px-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
              Skills
            </div>

            <div className="w-full bg-gray-900/60 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl text-gray-200">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="flex flex-col gap-6">
                  <p className="text-xl font-semibold text-blue-200 border-b border-white/10 pb-3 tracking-wide">Languages</p>
                  <div className="flex flex-row flex-wrap gap-3">
                    {languages.map((language) => (
                      <SkillIcon key={language} name={language} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-xl font-semibold text-purple-200 border-b border-white/10 pb-3 tracking-wide">Frameworks & Libraries</p>
                  <div className="flex flex-row flex-wrap gap-3">
                    {frameworksAndLibraries.map((framework) => (
                      <SkillIcon key={framework} name={framework} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-xl font-semibold text-orange-200 border-b border-white/10 pb-3 tracking-wide">Technologies</p>
                  <div className="flex flex-row flex-wrap gap-3">
                    {technologiesAndTools.map((tech) => (
                      <SkillIcon key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


