export default function AboutMe() {
  return (
    <div className="flex flex-col items-start w-full max-w-4xl px-4">

      <div className="mb-6 font-mono text-gray-500 text-sm">
        [about me]
      </div>

      <div className="text-gray-300 leading-relaxed font-mono text-sm space-y-8">
        <p>
          My name is <span className="text-white font-bold">Josh</span>. I am a Masters Student and Researcher studying <span className="text-white">Computer Science</span> at the University of Michigan, specializing in AI development with a focus on LLMs applications.
        </p>
        <p>
          Recent projects I&apos;ve worked on are an agentic ML optimizer for PyTorch and a Triton-to-WGSL transpiler.
        </p>
        <p>
          Regardless of the environment, I enjoy making tools that leave a measurable impact. If you are looking for someone who’s excited to build and innovate with AI systems, feel free to reach out.
        </p>
      </div>
    </div>
  );
}


