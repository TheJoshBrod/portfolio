import { motion } from 'framer-motion';

export default function Header() {

  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">

      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/30 rounded-full blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/30 rounded-full blur-[128px]" />
      </div>

      {/* Intro Section */}
      <div data-name="header-intro" id="home" className="relative z-10 h-screen flex flex-col justify-center items-center px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-4 flex-1 order-2 md:order-1"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Hey,</h1>
            <div className="flex flex-wrap items-baseline gap-4">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">I'm</h1>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400">Josh!</h1>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-2xl md:text-3xl font-light text-gray-300">CS MSE @ University of Michigan 〽️</p>
              <p className="text-xl md:text-2xl text-gray-400">Software engineer interested in AI/ML development</p>
            </div>

            <div className="flex gap-6 mt-8">
              {/* Social Media Icons with Glass Effect */}
              {[
                { src: "contact_logo/github-color.png", alt: "GitHub" },
                { src: "contact_logo/linkedin-color.png", alt: "LinkedIn" },
                { src: "contact_logo/mail-color.png", alt: "Email" },
              ].map((social, idx) => (
                <a key={idx} href="#" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:scale-110 transition-all cursor-pointer">
                  <img src={social.src} alt={social.alt} className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
              <img src="option3.png" className='relative w-full h-full object-cover border-4 border-white/10 shadow-2xl rounded-full' alt="Profile" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div data-name="header-navigation" className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center gap-1 px-2 py-2 bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
          {['home', 'aboutme', 'experience', 'portfolio', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="px-6 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all capitalize"
            >
              {item.replace('aboutme', 'About Me')}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}


