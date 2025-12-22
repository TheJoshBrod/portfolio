export default function Education() {


    return (
        <div className="flex flex-col items-center w-full max-w-4xl px-4 mt-10">
            {/* Subsection Title */}
            <div className="mb-10 text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 flex justify-center items-center py-4 px-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
                Education
            </div>

            <div className="grid md:grid-cols-2 gap-8 w-full">
                {/* Grad School */}
                <div className="flex flex-col p-8 bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl transition-all hover:bg-gray-800/60 hover:scale-[1.02]">
                    {/* Program and Grad date */}
                    <div className="flex flex-col mb-6">
                        <h1 className="font-bold text-2xl text-blue-200 mb-1">MSE Computer Science</h1>
                        <h1 className="font-medium text-lg text-gray-400">Spring 2026</h1>
                    </div>
                    {/* School and GPA */}
                    <div className="flex flex-col mb-8">
                        <h3 className="font-semibold text-lg text-gray-200 mb-1">University of Michigan</h3>
                        <h3 className="text-gray-400">Current GPA: <span className="text-white font-bold">3.61</span></h3>
                    </div>
                    {/* Courses */}
                    <div className="">
                        <p className="border-b border-white/10 pb-3 mb-4 text-sm font-bold uppercase tracking-widest text-gray-500">Coursework</p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                            <span className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">Accelerating AI</span>
                            <span className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">Advanced Compilers</span>
                            <span className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">Parallel Computing</span>
                        </div>
                    </div>
                </div>

                {/* Undergrad */}
                <div className="flex flex-col p-8 bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl transition-all hover:bg-gray-800/60 hover:scale-[1.02]">
                    {/* Program and Grad date */}
                    <div className="flex flex-col mb-6">
                        <h1 className="font-bold text-2xl text-purple-200 mb-1">BSE Computer Science</h1>
                        <h1 className="font-medium text-lg text-gray-400">Spring 2025</h1>
                    </div>
                    {/* School and GPA */}
                    <div className="flex flex-col mb-8">
                        <h3 className="font-semibold text-lg text-gray-200 mb-1">University of Michigan</h3>
                        <h3 className="text-gray-400">Final GPA: <span className="text-white font-bold">3.66</span></h3>
                    </div>
                    {/* Courses */}
                    <div className="">
                        <p className="border-b border-white/10 pb-3 mb-4 text-sm font-bold uppercase tracking-widest text-gray-500">Coursework</p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                            <span className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">Machine Learning</span>
                            <span className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">Operating Systems</span>
                            <span className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">Cyber Security</span>
                            <span className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">Intro Artificial Intelligence</span>
                            <span className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">Conversational AI</span>
                            <span className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">Information Retrieval</span>
                            <span className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">Web Systems</span>
                            <span className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">UI Development</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}