'use client';

import StarsBackground from '../StarsBackground';

export default function Header() {

  return (<>
    <div className="min-h-screen w-full relative overflow-hidden bg-[#111]">

      {/* Starry Night Background: Tiled and Low Opacity */}
      <StarsBackground />

      {/* Simple Text Navbar */}
      <div className="max-w-5xl mx-auto p-8 md:p-16 flex flex-col relative z-10 h-full">
        <div className="flex flex-row justify-center ">
          <nav className="flex gap-6 text-sm mb-24 text-gray-500 font-mono">
            {['about', 'experience', 'portfolio', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item == 'about' ? 'aboutme' : item}`}
                className="hover:text-white transition-colors"
              >
                [{item}]
              </a>
            ))}
          </nav>
        </div>

        {/* Social Media Navbar */}
        <div className="flex flex-col items-center text-center gap-12 mt-20 relative z-10">
          <div className="flex flex-col gap-6 max-w-2xl">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white">Josh</h1>
              <p className="text-gray-400 text-base md:text-lg font-mono">CS MSE @ University of Michigan</p>
            </div>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto">
              I build intelligent systems and digital tools. Currently exploring <span className="text-white">Applied AI</span> and <span className="text-white">LLM Applications</span>.
              I like keeping things simple, functional, and efficient.
            </p>

            <div className="flex justify-center gap-8 text-sm mt-6 text-gray-500 font-mono">
              {[
                { name: "GitHub", url: "https://github.com/thejoshbrod" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/joshua-brodsky/" },
                { name: "Arxiv", url: "https://arxiv.org/search/cs?searchtype=author&query=Brodsky,+J" },
                { name: "Email", url: "#contact" }
              ].map((link, i) => (
                <a key={i} href={link.url} className="border-b border-gray-800 hover:border-gray-200 hover:text-white transition-all pb-0.5">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="absolute left-0 w-full overflow-hidden text-gray-600 font-mono text-xl select-none opacity-80 whitespace-nowrap z-20 text-center">
      {Array(400).fill("~").join("")}
    </div>
  </>);
}
