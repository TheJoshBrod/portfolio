
export default function AboutMe() {
  
  return (
    <div className="flex flex-col items-center"> 
      {/* Title Card */}
        <div className="mb-10 text-xl font-bold text-white flex justify-center items-center mt-10 w-100 h-20 rounded-2xl bg-[#565190]">
            Who am I?
        </div>
       <div className="flex flex-wrap justify-center w-100">
            <div className="bg-[#c4c1ff] border-[#37345d] border-6 p-6 rounded-lg shadow-lg w-200 font-normal">
                <p>
                    My name is Josh, and I am a Masters Student studying Computer Science at the University of Michigan, specializing in AI development with a focus on applications of LLMs. 
                    I would describe myself as a driven, collaborative, and curious developer with a passion for building intelligent systems to solve real problems.
                </p> 
                <br />
                <p>My experience spans across numerous projects in developing applied AI solutions ranging from GraphRAG systems to MCP servers to Unstructured Data Pipelines. I have brought these project to life through a mix of industry internships, academic research, and hands-on coursework. I enjoy making tools that leave a measurable impact regardless of the environment.</p>
                <br />
                <p>If you are looking for someone who’s excited to build and innovate with AI systems feel free to reach out!</p>
        </div>  
      </div>
    </div>
  );
}


