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

    return (
        <div
            onClick={() => { props.setSelectedExperience(props.id); }}
            className={`group relative text-left p-4 mt-4 w-full cursor-pointer rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:scale-[1.02]`}
        >
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <h2 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">
                        {props.role}
                    </h2>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {props.organization} | {props.timespan}
                    </p>
                </div>
                {props.logo && (
                    <div className="bg-white/90 p-1 rounded-md">
                        <img src={props.logo} className="h-6 w-auto object-contain" alt={`${props.organization} logo`} />
                    </div>
                )}
            </div>
        </div>
    );
}


