export default function Education() {


    return (<>
        <div className="mb-10 text-xl font-bold text-white flex justify-center items-center mt-10 w-100 h-20 rounded-2xl bg-[#565190]">
            Education
        </div>
        <div className="timeline">
                <div className="timeline-container primary">
                    {/* Timeline icon */}
                    <div className="timeline-icon flex items-center justify-center bg-[#ede374] w-15 h-15 p-2">
                        {/* <i className="far fa-grin-wink"></i> */}
                            <img src="Block_M-Hex-blue.png" className=""></img>
                        
                    </div>
                    {/* Timeline item */}
                      <div className=" timeline-body w-130 h-56 mr-10 mt-10 p-4 bg-[#c4c1ff] border-[#37345d] border-6 rounded-2xl">
                        <div className="flex flex-row justify-between">
                            <h1 className="font-bold text-lg">MSE Computer Science</h1>
                            <p className="font-bold">Spring 2026</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="font-semibold">University of Michigan&nbsp;</p>
                            <p className="font-semibold">GPA: 3.61</p>
                        </div>
                        <div className="flex flex-col mt-1">
                            <p className="font-normal underline decoration-0 underline-offset-4 mb-1">Coursework:</p>
                            <div className="flex italic ml-5">
                                <ul className="list-[circle]">
                                    <li>Accelerating AI</li>
                                    <li>Advanced Compilers</li>
                                    <li>Parallel Computing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="timeline-container danger">
                    <div className="timeline-icon flex items-center justify-center w-15 h-15 p-2">
                        {/* <i className="far fa-grin-wink"></i> */}
                            <img src="Block_M-Hex.png" className=""></img>
                    </div>
                    <div className="w-130 h-56 p-4 bg-[#c4c1ff] timeline-body border-[#37345d] border-6 rounded-2xl">
                <div className="flex flex-row justify-between">
                    <h1 className="font-bold text-lg">BSE Computer Science</h1>
                    <p className="font-bold">Spring 2025</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="font-semibold">University of Michigan&nbsp;</p>
                    <p className="font-semibold">GPA: 3.66</p>
                </div>
                <div className="flex flex-col mt-1">
                    <p className="font-normal underline decoration-0 underline-offset-4 mb-1">Coursework:</p>
                    <div className="flex italic ml-5">
                        <ul className="list-[circle]">
                            <li>Machine Learning</li>
                            <li>Operating Systems</li>
                            <li>Cyber Security</li>
                            <li>Intro Artificial Intelligence</li>
                        </ul>
                        <ul className="list-[circle] ml-15">
                            <li>Conversational AI</li>
                            <li>Information Retrieval</li>
                            <li>Web Systems</li>
                            <li>UI Development</li>
                        </ul>
                    </div>
                </div>
            </div>
                </div>
            </div>
        <div className="flex flex-row justify-center mt-5">            
            {/* Undergrad */}
            

        </div>
      </>
  );
}