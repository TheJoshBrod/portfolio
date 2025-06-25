// src/components/experience/ExperienceSummary.tsx
import SkillTag from "../skilltag";
import React from 'react';
import { motion } from "framer-motion";

interface ExperienceSummaryProps { // Renamed interface for clarity
  id: number;
  organization: string;
  role: string;
  logo: string;
  timespan: string;
  about: string;
  skills?: string[];
  highlights?: string[];
  selectedExperience: number; // Prop indicating which experience is currently selected
}

export default function ExperienceSummary({
  // Destructure props for cleaner access
  id,
  organization,
  role,
  logo,
  timespan,
  about,
  skills,
  highlights,
  selectedExperience,
}: ExperienceSummaryProps) {
  // Derive 'selected' state directly from props, no need for useState/useEffect here
  const isSelected = selectedExperience === id;

  return (
    <>
      {isSelected ? (<motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
        <div className="bg-[#c4c1ff] p-6 h-120 rounded-lg shadow-lg w-173 m-5 fadeslide border-6 border-[#36355e]">        
                {/* Role */}
                <div className="flex items-center">
                    <h2 className="text-gray-800 text-lg font-bold">
                        {role}
                    </h2>
                    <img src={logo} className="h-5 ml-2"/>
                </div>
                {/* Company Name/ Timespan */}
                <p className="text-sm text-gray-600">
                    {organization} | {timespan}
                </p>
                
                {/* <div className="w-100 h-0.5 mt-5 bg-black"></div> */}

                {/* Skills */}
                {
                    skills ? 
                        <div className="h-12 w-170 mt-2 relative left-[-24] flex items-center bg-[#36355e]">
                            <div className="relative left-6 flex">
                                {skills.map((skill, index) => (<SkillTag key={index} name={skill}></SkillTag>))}
                            </div> 
                        </div>
                    :
                        <></>
                }

                {/* About blurb */}
                {/* <p>
                    {props.about}
                </p> */}

                

                {/* Highlight Bullets */}
                {highlights ? 
                    <div className="mt-2">
                        {/* <h2 className="text-left text-xl font-bold"></h2> */}
                        <div className="flex flex-col text-left">
                            
                            {highlights.map((highlight, index) => (
                                <div key={index} className="flex m-5">
                                    <p className="text-xl font-extrabold mr-5">+&nbsp;</p>
                                    <p>{highlight}</p>
                                </div>
                            ))}
                            
                        </div>
                    </div> 
                    : 
                    <></>
                }
                

            </div></motion.div>)
            :(<></>)}
             
      </>
  );
}


