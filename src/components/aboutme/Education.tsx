export default function Education() {


    return (
    <div className="flex flex-col items-center ml-20">
            {/* Subsection Title */}
            <div className="mb-10 text-xl font-bold text-white flex justify-center items-center mt-10 w-100 h-20 rounded-2xl bg-[#565190]">
                Education
            </div>
                
            {/* Grad School */}
            <div className="w-130 h-56 mb-10 mt-10 p-4 bg-[#c4c1ff] border-[#37345d] border-6 rounded-2xl">
                {/* Program and Grad date */}
                <div className="flex flex-row justify-between">
                    <h1 className="font-bold text-lg">MSE Computer Science</h1>
                    <h1 className="font-bold">Spring 2026</h1>
                </div>
                {/* School and GPA */}
                <div className="flex flex-row justify-between">
                    <h3 className="font-semibold">University of Michigan&nbsp;</h3>
                    <h3 className="font-semibold">Current GPA: 3.61</h3>
                </div>
                {/* Courses */}
                <div className="flex flex-col mt-1">
                    <p className="font-normal underline decoration-0 underline-offset-4 mb-1 font-light leading-6 text-sm opacity-80">Coursework:</p>
                    <div className="flex italic ml-5">
                        <ul className="list-[circle]">
                            <li>Accelerating AI</li>
                            <li>Advanced Compilers</li>
                            <li>Parallel Computing</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Undergrad */}
            <div className="w-130 h-56 p-4 bg-[#c4c1ff] border-[#37345d] border-6 rounded-2xl">
                {/* Program and Grad date */}
                <div className="flex flex-row justify-between">
                    <h1 className="font-bold text-lg">BSE Computer Science</h1>
                    <h1 className="font-bold">Spring 2025</h1>
                </div>
                {/* School and GPA */}
                <div className="flex flex-row justify-between">
                    <h3 className="font-semibold">University of Michigan&nbsp;</h3>
                    <h3 className="font-semibold">Final GPA: 3.66</h3>
                </div>
                {/* Courses */}
                <div className="flex flex-col mt-1">
                    <p className="font-normal underline decoration-0 underline-offset-4 mb-1 font-light leading-6 text-sm opacity-80">Coursework:</p>
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
  );
}