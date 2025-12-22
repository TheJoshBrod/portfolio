export default function Education() {
    return (
        <div className="flex flex-col w-full max-w-4xl px-4 mt-8">
            <div className="mb-8 font-mono text-gray-500 text-sm">
                [education]
            </div>

            <div className="flex flex-col gap-12 border-l border-gray-800 pl-6 ml-2">
                {/* Grad School */}
                <div className="flex flex-col gap-2 relative">
                    <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 bg-gray-600 rounded-full border-2 border-[#111]"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                        <h3 className="text-white font-mono font-bold text-lg">MSE Computer Science</h3>
                        <span className="text-gray-500 text-sm font-mono">Expected May 2026</span>
                    </div>

                    <div className="text-gray-400 font-mono text-sm mb-2">
                        University of Michigan <span className="text-gray-600">/</span> GPA: 3.77
                    </div>

                    <div className="text-xs text-gray-500 font-mono leading-relaxed mt-2">
                        <span className="text-gray-600 mr-2">Coursework:</span>
                        Accelerating AI, Human AI Interaction, Adv. Scalable Systems, OpenSource Innovation, Adv. Compilers, Parallel Computing
                    </div>
                </div>

                {/* Undergrad */}
                <div className="flex flex-col gap-2 relative">
                    <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 bg-gray-800 rounded-full border-2 border-[#111]"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                        <h3 className="text-gray-300 font-mono font-bold text-lg">BSE Computer Science</h3>
                        <span className="text-gray-500 text-sm font-mono">2025</span>
                    </div>

                    <div className="text-gray-400 font-mono text-sm mb-2">
                        University of Michigan <span className="text-gray-600">/</span> GPA: 3.67
                    </div>

                    <div className="text-xs text-gray-500 font-mono leading-relaxed mt-2 max-w-xl">
                        <span className="text-gray-600 mr-2">Coursework:</span>
                        Machine Learning, Operating Systems, Cyber Security, Intro AI, Conversational AI, Information Retrieval, Web Systems, UI Development
                    </div>
                </div>
            </div>
        </div>
    );
}