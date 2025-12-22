
export default function AboutMe() {

  return (
    <div className="flex flex-col items-center w-full max-w-4xl px-4">
      {/* Title Card */}
      <div className="mb-10 text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 flex justify-center items-center mt-10 py-4 px-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
        Who am I?
      </div>
      <div className="flex flex-wrap justify-center w-full">
        <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 p-10 rounded-2xl shadow-2xl text-gray-200 leading-loose font-light text-lg tracking-wide">
          <p className="mb-6">
            My name is <span className="font-bold text-blue-200">Josh</span>, and I am a Masters Student studying <span className="font-bold text-blue-200">Computer Science</span> at the University of Michigan, specializing in AI development with a focus on applications of LLMs.
            I would describe myself as a driven, collaborative, and curious developer with a passion for building intelligent systems to solve real problems.
          </p>
          <p className="mb-6">
            My experience spans across numerous projects in developing applied AI solutions ranging from GraphRAG systems to MCP servers to Unstructured Data Pipelines. I have brought these project to life through a mix of industry internships, academic research, and hands-on coursework. I enjoy making tools that leave a measurable impact regardless of the environment.
          </p>
          <p>
            If you are looking for someone who’s excited to build and innovate with AI systems feel free to reach out!
          </p>
        </div>
      </div>
    </div>
  );
}


