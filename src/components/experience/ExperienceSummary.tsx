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
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
        <div className="bg-white p-6 h-120 rounded-lg shadow-lg w-170 text-right m-5 fadeslide">        
                {/* Role */}
                <div className="flex justify-end items-center">
                    <h2 className="text-gray-800 text-lg font-bold">
                        {role}
                    </h2>
                    <img src={logo} className="h-5 ml-2"/>
                </div>
                {/* Company Name/ Timespan */}
                <p className="text-sm text-gray-600">
                    {organization} | {timespan}
                </p>
                
                {/* Skills */}
                {
                    skills ? 
                        <div className="flex">
                            {skills.map((skill, index) => (<SkillTag key={index} name={skill}></SkillTag>))}
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
                        <h2 className="text-left text-xl font-bold">Impact</h2>
                        <ul className="list-disc list-inside text-left">
                            {highlights.map((highlight, index) => (<li key={index}>{highlight}</li>))}
                        </ul>
                    </div> 
                    : 
                    <></>
                }
                

            </div></motion.div>)
            :(<></>)}
             
      </>
  );
}


