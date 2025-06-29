import { motion } from 'framer-motion';

export default function Header() {

  return (
      <>
        {/* Intro Section */}
        <div data-name="header-intro" id="home" className="h-[94vh] flex flex-col bg-[rgb(86,81,144)] text-[#c5bfff]">
          <div className="flex justify-center items-center h-[100%]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} className="flex flex-col w-150">
                  <h1 className="text-7xl drop-shadow-lg">Hey,</h1>
                  <div className="flex"><h1 className="text-7xl drop-shadow-md">I'm&nbsp;</h1> <h1 className="text-7xl font-medium drop-shadow-lg text-[#ede374]">Josh!</h1></div>
                  <p className="text-3xl mt-2 mb-2 drop-shadow-md">CS MSE @ University of Michigan 〽️</p>
                  <p className="text-xl drop-shadow-md">Software engineer interested in AI/ML development</p>
                  <div className="flex mt-3 justify-between w-60">
                    <div className="social_media">
                      <img src="contact_logo/github-color.png"></img>
                    </div>
                    <div className="social_media">
                      <img src="contact_logo/linkedin-color.png"></img>
                    </div>
                    <div className="social_media">
                      <img src="contact_logo/mail-color.png"></img>
                    </div>
                  </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }}>
              <img src="option3.png" className='h-[40vh] m-10 border-7 border-[#2e2d4f] drop-shadow-lg rounded-full'></img>
            </motion.div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div data-name="header-navigation" className="h-[6vh] flex justify-center items-center space-x-16  bg-[#2e2c4e] p-[1vh]  text-lg sticky top-0 z-50 drop-shadow-sm text-[#7d7fa6]">  
            <a href="#home" className="navbar-section"><p>home</p></a>
            <a href="#aboutme" className="navbar-section"><p>about me</p></a>
            <a href="#experience" className="navbar-section"><p>experience</p></a>
            <a href="#section1" className="navbar-section"><p>portfolio</p></a>
            <a href="#section1" className="navbar-section"><p>contact</p></a>
          </div>
      </>
  );
}


