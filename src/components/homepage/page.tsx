'use client';

import StarsBackground from '../StarsBackground';
import AsciiParticleText from '../AsciiParticleText';

export default function Header() {

  return (
    <div className="relative">
      <div className="h-screen w-full relative overflow-hidden bg-[#111]">

        {/* Starry Night Background: Tiled and Low Opacity */}
        <StarsBackground parallax />

        {/* Simple Text Navbar */}
        <div className="max-w-5xl mx-auto p-8 md:p-16 flex flex-col relative z-10 h-full">
          <div className="flex flex-row justify-center ">
            <nav className="flex gap-4 text-sm text-gray-500 font-mono">
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
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-12 relative z-10">
            <div className="flex flex-col items-center gap-6 w-full max-w-4xl">
              <div className="">
                <AsciiParticleText text="Josh Brodsky" className="mb-2" />
                <h1 className="sr-only">Josh Brodsky</h1>
                <AsciiParticleText
                  text="CS MSE @ University of Michigan"
                  desktopFontSize={18} mobileFontSize={16}
                  fontWeight="normal"
                  color="#9ca3af"
                  delay={300}
                />
              </div>

              <div className="w-full max-w-2xl mx-auto">
                <AsciiParticleText
                  text="I scale intelligent Agentic Systems from prototype to production-ready applications."
                  desktopFontSize={20} mobileFontSize={18}
                  fontWeight="normal"
                  color="#d1d5db"
                  wrap
                  delay={600}
                />
              </div>

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
      <div className="absolute pt-2 top-full left-0 w-full overflow-hidden text-gray-600 font-mono text-xl select-none opacity-80 whitespace-nowrap z-20 text-center mt-[-1rem]">
        {Array(400).fill("~").join("")}
      </div>
    </div>
  );
}
