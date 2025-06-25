import { useState } from "react";

interface ExperienceIntroProps {
    id: number;
    organization: string;
    role: string;
    logo: string;
    timespan: string;
    about: string;
    skills?: string[];
    highlights?: string[];
    setSelectedExperience: React.Dispatch<React.SetStateAction<number>>;
}

export default function ExperienceIntro(props: ExperienceIntroProps) {

    // Parent Div style
    const baseClasses  = "bg-[#c4c1ff] border-2 cursor-pointer flex flex-col justify-center rounded-lg duration-50 ease-in-out";
    const hoverClasses = "hover:drop-shadow-2xl hover:w-95 hover:bg-[#555392] hover:text-[#c4c1ff]";
    const sizeClass    = "w-90 h-20 pl-4 m-5";
  
    const[hovered, setHovered] = useState(false);

    // Text Hover Style
    const position_color = "text-gray-800"
    const company_name_color = "text-gray-600";
    const hover_color = "text-[#c4c1ff]";

    return (
      <>
             <div 
                onClick={() => {props.setSelectedExperience(props.id);}}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`${baseClasses} ${sizeClass} ${hoverClasses}`}
            >
                
                {/* Role */}
                <div className="flex items-center">
                    <h2 className={`text-md font-bold ${hovered ? hover_color : position_color}`}>
                        {props.role}
                    </h2>
                    <img src={props.logo} className="h-5 rounded-sm p-0.5 ml-1"/>
                </div>
                
                {/* Company Name/ Timespan */}
                <p className={`text-sm ${hovered ? hover_color : company_name_color}`}>
                    {props.organization} | {props.timespan}
                </p>

            </div>
      </>
  );
}


