interface ExperienceIntroProps {
    id: number;
    organization: string;
    role: string;
    timespan: string;
    skills?: string[];
    highlights?: string[];
    setSelectedExperience: React.Dispatch<React.SetStateAction<number>>;
}

export default function ExperienceIntro(props: ExperienceIntroProps) {
    return (
        <div
            onClick={() => { props.setSelectedExperience(props.id); }}
            className="group flex flex-col items-start w-full cursor-pointer py-3 border-l-2 border-gray-800 hover:border-white pl-4 transition-all duration-200"
        >
            <h2 className="text-sm font-mono font-bold text-gray-400 group-hover:text-white transition-colors">
                {props.role}
            </h2>
            <p className="text-xs font-mono text-gray-600 group-hover:text-gray-400 transition-colors mt-1">
                {props.organization}
            </p>
        </div>
    );
}


