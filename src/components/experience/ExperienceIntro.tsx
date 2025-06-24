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
    const baseClasses  = "bg-white border-2 cursor-pointer flex flex-col justify-center rounded-lg duration-50 ease-in-out";
    const hoverClasses = "hover:drop-shadow-2xl hover:w-95 hover:bg-[#6b97ff]";
    const sizeClass    = "w-90 h-20 pl-4 m-5";
  
  
    return (
      <>
             <div onClick={() => {props.setSelectedExperience(props.id);}} className={`${baseClasses} ${sizeClass} ${hoverClasses}`}>
                
                {/* Role */}
                <div className="flex items-center">
                    <h2 className="text-gray-800 text-md font-bold">
                        {props.role}
                    </h2>
                    <img src={props.logo} className="h-7 rounded-4xl  p-0.5 ml-2"/>
                </div>
                
                {/* Company Name/ Timespan */}
                <p className="text-sm text-gray-600">
                    {props.organization} | {props.timespan}
                </p>

            </div>
      </>
  );
}


