import CodeBubble from "../CodeBubble";

export default function AboutMeSection() {
  
  return (
      <div id="aboutme" className="flex flex-col items-center pt-10">
        <div className="w-250">
            <div className="text-center m-8 bg-[#37345d] p-10 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-[#7d7fa6]">About</h1>
            </div>

            
        </div>
            <div className="flex flex-wrap justify-center w-200">
                 {/* <div className="bg-white p-6 h-80 rounded-lg shadow-lg w-200 m-10 ">
                    Hello world!
                </div> */}
                <CodeBubble>
{`Hello World!
I am a Software Engineer who is passionate about applied ML/AI solutions

I created this website to serve as a portfolio to share some cool projects I've worked on;`}
      </CodeBubble>
            </div>
      </div>
  );
}


