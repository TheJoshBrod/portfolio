import SkillTag from "../skilltag";

interface ExperienceProps {
    id: number;
    organization: string;
    role: string;
    logo: string;
    timespan: string;
    about: string;
    skills?: string[];
    highlights?: string[];
}

export default function Experience(props: ExperienceProps) {
  return (
      <>
             <div className="bg-white p-6 h-80 rounded-lg shadow-lg w-150 text-right m-10 ">
                
                {/* Role */}
                <div className="flex justify-end items-center">
                    <h2 className="text-gray-800 text-lg font-bold">
                        {props.role}
                    </h2>
                    <img src={props.logo} className="h-5 ml-2"/>
                </div>
                {/* Company Name/ Timespan */}
                <p className="text-sm text-gray-600">
                    {props.organization} | {props.timespan}
                </p>
                
                {/* Skills */}
                {
                    props.skills ? 
                        <div className="flex">
                            {props.skills.map((skill, index) => (<SkillTag key={index} name={skill}></SkillTag>))}
                        </div> 
                    :
                        <></>
                }

                {/* About blurb */}
                {/* <p>
                    {props.about}
                </p> */}

                {/* Highlight Bullets */}
                {props.highlights ? 
                    <div className="mt-2">
                        <h2 className="text-left text-xl font-bold">Impact</h2>
                        <ul className="list-disc list-inside text-left">
                            {props.highlights.map((highlight, index) => (<li key={index}>{highlight}</li>))}
                        </ul>
                    </div> 
                    : 
                    <></>
                }
                

            </div>
      </>
  );
}


