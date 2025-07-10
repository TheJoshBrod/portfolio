import CodeBubble from "../CodeBubble";
import SectionHeader from '../general/SectionHeader'
import Education from "./Education";

export default function AboutMeSection() {
  
  return (
    <>      
      {/* Title Card */}
      <div id="aboutme" className="flex flex-col items-center pt-10">
        <SectionHeader key="1" title="About Me"/>

        {/* Content */}
        <div className="flex flex-wrap justify-center w-200">
              <div className="bg-white p-6 h-20 rounded-lg shadow-lg w-200 ">
                Hello world!
            </div>
        </div>
        <Education></Education>
      </div>
    </>
  );
}


