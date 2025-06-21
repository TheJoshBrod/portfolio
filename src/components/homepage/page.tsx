export default function Header() {
  return (
      <>
        {/* Intro Section */}
        <div data-name="header-intro" id="home" className="h-[95vh] flex flex-col justify-between bg-[#565190] text-[#7d7fa6]">
          <div className="flex justify-center items-center h-[100%] pb-40">
            <div className="flex flex-col w-200">
                  <h1 className="text-8xl drop-shadow-lg">Hey,</h1>
                  <div className="flex"><h1 className="text-8xl drop-shadow-lg">I'm&nbsp;</h1> <h1 className="text-8xl drop-shadow-lg text-[#37345d]">Josh!</h1></div>
                  <p className="text-3xl mt-2 mb-6">Incoming CS MSE student at the University of Michigan 〽️</p>
                  <p className="text-xl">I am a software engineer interested in AI/ML development</p>
                  <div className="flex mt-3 justify-between w-60">
                    <div className="social_media">
                      <img  src="contact_logo/github-color.png"></img>
                    </div>
                    <div className="social_media">
                      <img  src="contact_logo/linkedin-color.png"></img>
                    </div>
                    <div className="social_media">
                      <img  src="contact_logo/mail-color.png"></img>
                    </div>
                  </div>
            </div>
            <img src="profile_pic.png" className='ml-40 h-200 m-10 drop-shadow-lg rounded-2xl'></img>
          </div>
        </div>

        {/* Navigation Bar */}
        <div data-name="header-navigation" className="h-[5vh] flex justify-center space-x-16  bg-[#37345d] p-4  text-lg sticky top-0 z-50 text-[#7d7fa6]">  
            <a href="#home"><p>home</p></a>
            <a href="#aboutme"><p>about me</p></a>
            <a href="#experience"><p>experience</p></a>
            <a href="#section1"><p>portfolio</p></a>
            <a href="#section1"><p>contact</p></a>
          </div>
      </>
  );
}


