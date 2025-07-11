import SkillTag from "../skilltag";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

interface ExperienceSummaryProps {
  id: number;
  organization: string;
  role: string;
  logo: string;
  timespan: string;
  about: string;
  skills?: string[];
  highlights?: string[];
  selectedExperience: number;
}

export default function ExperienceSummary({
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
  const isSelected = selectedExperience === id;

  if (!isSelected) return null;

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="bg-[#c4c1ff] pl-6 pr-6 pt-4 h-120 rounded-lg shadow-lg fadeslide border-6 border-[#36355e]">        
        <div className="flex items-center justify-between pb-1">
            <div>
                <h2 className="text-gray-800 text-2xl font-bold">{role}</h2>
                <p className="text-lg text-gray-600">
                {organization} | {timespan}
                </p>
            </div>
            <img src={logo} className="size-12 left-100" />    
        </div>
        
        {skills &&
          <div className="h-12 size-217 mt-2 relative left-[-24] flex items-center bg-[#36355e]">
            <div className="relative left-6 flex">
              {skills.map((skill, index) => (
                <SkillTag key={index} name={skill} />
              ))}
            </div>
          </div>
        }

        {highlights &&
          <div className="mt-2">
            <div className="flex flex-col text-left">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex mt-3 mr-5 mb-3">
                  <p className="text-xl font-extrabold mr-5">+&nbsp;</p>
                  <p className="text-xl">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        }
      </div>
    </motion.div>
  );
}
