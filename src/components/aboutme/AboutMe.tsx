export default function AboutMe() {
  return (
    <div className="flex flex-col items-start w-full max-w-4xl px-4">
      {/* Title */}
      <div className="mb-6 font-mono text-gray-500 text-sm">
        [about me]
      </div>

      <div className="text-gray-300 leading-relaxed font-mono text-sm space-y-6">
        <p>
          My name is <span className="text-white font-bold">Josh</span>. I am a Masters Student studying <span className="text-white">Computer Science</span> at the University of Michigan, specializing in AI development with a focus on applications of LLMs.
        </p>
        <p>
          I would describe myself as a driven, collaborative, and curious developer with a passion for building intelligent systems to solve real problems.
        </p>
        <p>
          My experience spans across numerous projects in developing applied AI solutions ranging from GraphRAG systems to MCP servers to Unstructured Data Pipelines. I have brought these projects to life through a mix of industry internships, academic research, and hands-on coursework.
        </p>
        <p>
          Depending on the environment, I enjoy making tools that leave a measurable impact. If you are looking for someone who’s excited to build and innovate with AI systems, feel free to reach out.
        </p>
      </div>
    </div>
  );
}


